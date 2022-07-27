const { round, abs } = Math;

// Color object types
export type ColorObj_HSV = { hue: number; sat: number; val: number; };
export type ColorObj_RGB = { red: number; grn: number; blu: number; };
export type ColorObj = ColorObj_HSV | ColorObj_RGB;

// Color array types
export type ColorArr_HSV = [number, number, number];
export type ColorArr_RGB = [number, number, number];
export type ColorArr = ColorArr_HSV | ColorArr_RGB;

// Color format types
export type HSV_Format = ColorObj_HSV | ColorArr_HSV;
export type RGB_Format = ColorObj_RGB | ColorArr_RGB;




/**
 *
 * #### COLOR CLASS
 * The Color class contains an entire interface for working with colors in many different environments. It can be used for printing color in a terminal environment, or for converting color values from HSV to RGB. There are too many features to list in this snippet, for a full list please see the project documentation. The official documentation source can be found in several place, the README.md file in the J-Color directory, on the Npm J-Color Package page, or in the [J-Color Repository @ Https://GitHub.com/JAYD3V/J-Color](Https://GitHub.com/JAYD3V/J-Color)
 * */
export default class Color{
   // PRIVATE FIELDS
   readonly #_HSV: ColorObj_HSV;
   readonly name: string;


   #_arrayToObject = (hsv: ColorArr_HSV) => ({
      hue: hsv[0], sat: hsv[1], val: hsv[2]
   });


   /**
    * @param colorName Name of the color being abstracted.
    * @param colorsValues Set of values used to define an individually unique color * */
   constructor (colorName: string, colorsValues: HSV_Format){
      this.name = colorName;
      this.#_HSV = (Array.isArray(colorsValues))
         ? this.#_arrayToObject(colorsValues)
         : colorsValues;
   }


   toRgb (){
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

      const matchComponents = (): ColorObj_RGB => {
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

      let key: keyof ColorObj_RGB;

      for (key in RGB){
         RGB[key] = round(255 * (RGB[key] + m));
      }

      return RGB;
   }


}
