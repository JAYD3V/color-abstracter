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
 * **HSV Class**
 * The HSV Class is used to create abstract colors in HSV format. It contains methods for preforming the color-model conversions **_"HSV to HexColor"_** & **_"HSV to RGB"_**. An array containing `[hue, saturation, value]` can be used to create a new HSV class, or an object containing `{ hue:num, sat:num, val:num }` can be used. The HSV Class works closely with the other abstract classes RGB & HexColor. The J Color class is meant to work in an environment where multiple color models are present.
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

        if (H < 0 || H > 360){
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
