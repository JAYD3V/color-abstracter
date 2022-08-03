/*  eslint-disable @typescript-eslint/naming-convention   */

/* Disabled "camelcase" naming convention so that the variables in the RGB/HSV
algorithms can be named after there math-formula counterparts */

export type HsvArr = [number, number, number];
export type RgbArr = [number, number, number];
export type RgbObj = { R:number; G:number; B:number };
export type HsvObj = { H:number; S:number; V:number };


const {abs, trunc, round} = Math;

/**
 * HSV Class - Abstracts colors in an HSV-Model format. This class comes with
 * the algorithms necessary to convert between other color-formats/models  */
export default class HSV {
    H;
    S;
    V;
    name;

    constructor (name:string, hsv:[number, number, number]) {
        this.name = name;

        this.H = this.#coercedValidation_H(hsv[0]);
        this.S = this.#coercedValidation_S(hsv[1]);
        this.V = this.#coercedValidation_V(hsv[2]);
    }

    #coercedValidation_H = (arg:number) => {
        if (arg > 360) { return 360; }
        if (arg < 0) { return 0; }

        return arg;
    };


    #coercedValidation_S = (arg:number) => {
        if (arg > 100) { return 100; }
        if (arg < 0) { return 0; }

        return arg;
    };


    #coercedValidation_V = this.#coercedValidation_S;



    toRGB ():RgbArr {
        const H = this.H / 60;
        const S = this.S / 100;
        const V = this.V / 100;

        const C = V * S;

        const switcheroo = (H:number, C:number):RgbArr => {
            const X = C * (1 - abs(H % 2 - 1));

            switch (trunc(H)) {
                case 0: return [C, X, 0];
                case 1: return [X, C, 0];
                case 2: return [0, C, X];
                case 3: return [0, X, C];
                case 4: return [X, 0, C];

                default: return [C, 0, X];
            }
        };

        const m = (V - C);
        const rgb = switcheroo(H, C);

        rgb.forEach((item, i, rgb) => {
            rgb[i] = round((item + m) * 255);
        });

        return rgb;
    }
}
