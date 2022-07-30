const { round, abs } = Math;

// Color object types
export type HsvObj = { hue: number; sat: number; val: number; };
export type RgbObj = { red: number; grn: number; blu: number; };
export type ColorObject = HsvObj | RgbObj;

// Color array types
export type HsvArr = [number, number, number];
export type RgbArr = [number, number, number];
export type ColorArr = HsvArr | RgbArr;

// Color format types
export type HsvArg = HsvObj | HsvArr;
export type RgbArg = RgbObj | RgbArr;
export type ColorArg = RgbArg | HsvArg;




/**
 *
 * #### COLOR CLASS
 * The Color class contains an entire interface for working with colors in many different environments. It can be used for printing color in a terminal environment, or for converting color values from HSV to RGB. There are too many features to list in this snippet, for a full list please see the project documentation. The official documentation source can be found in several place, the README.md file in the J-Color directory, on the Npm J-Color Package page, or in the [J-Color Repository @ Https://GitHub.com/JAYD3V/J-Color](Https://GitHub.com/JAYD3V/J-Color)
 * */
export default class HSV{
    // PRIVATE FIELDS
    readonly #_HSV: HsvObj;
    readonly name: string;

    #_arrayToObject = (hsv: HsvArr) => ({
        hue: hsv[0], sat: hsv[1], val: hsv[2]
    });


    /**
    * @param colorName Name of the color being abstracted.
    * @param hsv Set of values used to define an individually unique color * */
    constructor(colorName: string, hsv: HsvObj | HsvArr){
        this.name = colorName;
        this.#_HSV = (Array.isArray(hsv))
            ? this.#_arrayToObject(hsv)
            : hsv;
    }

    toRgb(){
        let { hue: H, sat: S, val: V } = this.#_HSV;

        if (H > 0 && H < 360){
            throw new RangeError('A color\'s hue must be between 0 and 360');
        }
        if (S < 0 || S > 100){
            throw new RangeError('Saturation must be between 0 and 100');
        }
        if (V < 0 || V > 100){
            throw new RangeError('Value must be between 0 & 100');
        }

        H /= 60; S /= 100; V /= 100;

        const C = V * S,
              m = V - C,
              X = C * (1 - abs(H % 2 - 1));

        const matchComponents = (): RgbObj => {
            switch (H){
                case 0: return { red: C, grn: X, blu: 0 };
                case 1: return { red: X, grn: C, blu: 0 };
                case 2: return { red: 0, grn: C, blu: X };
                case 3: return { red: 0, grn: X, blu: C };
                case 4: return { red: X, grn: 0, blu: C };
                    // Default == 'case 5:' but satisfies TSC
                default: return { red: C, grn: 0, blu: X };
            }
        };

        const RGB = matchComponents();

        let key: keyof RgbObj;

        for (key in RGB){
            RGB[key] = round(255 * (RGB[key] + m));
        }

        return RGB;
    }
}
