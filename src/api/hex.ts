/* import

const { digitsX3, digitsX6,  } = regX; */

type RgbObject = { red:number; grn:number; blu:number };

/**
 * **Class: Hex Color** \
 * _Abstracts RGB Modeled colors in Hexadecimal format._
 * ---------------------------------------------------------
 * @method parseHexColor
 * @member hexValue Original hexadecimal color value
 * @member red red value in sRGB format
 * @member grn green value in sRGB format
 * @member blu blue value in sRGB format
 * ---------------------------------------------------------  */
export default class HexColor {
    #_color;
    red = 0;
    grn = 0;
    blu = 0;


    get value() {
        return this.#_color;
    }

    set value(color:string) {
        this.#_color = color;
    }



    constructor(color:string) {
        this.#_color = color;
    }

    validateHex() {}


    toSixDigitHex(hexVal:string):RgbObject {
        let hex = hexVal;

        if (digitsX3.test(hexVal)) {
            hex  = hexVal.at(1)!.repeat(2);
            hex += hexVal.at(2)!.repeat(2);
            hex += hexVal.at(3)!.repeat(2);
        }

        if (digitsX6.test(hexVal)) {

        } else {
            throw new Error('Invalid hex-color');
        }

        return { red: 0, grn: 0, blu: 0 };
    }


    toRGB() {
        return;
    }


    // TODO: Write method `toThreeDigits(){}`
    // TODO: Write method `toFourDigits(){}`
    // TODO: Write method `toSixDigits(){}`
    // TODO: Write method `toEightDigits(){}`
    // TODO: Write method `toSixDigits(){}`
}
