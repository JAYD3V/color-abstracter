export type HsvArr = [number, number, number];
export type RgbArr = [number, number, number];
export type RgbObj = { R:number, G:number, B:number };
export type HsvObj = { H:number, S:number, V:number };



const { abs, trunc, round } = Math;


/**
 * HSV Class - Abstraction of a color thats defined by the "HSV Color Model". This class is to be used as is, if working with HSV, or to convert from and to HSV. the toRGB method converts the color (in hsv format) to an object formated as the more common RGB color model. See README.md for full details, and a fill list of methods & class-members. */
export default class HSV{
    name;
    H; S; V;

    constructor(name: string, hsv:  [number, number, number]){
        this.name = name;

        this.H = this.#coercedValidation_H(hsv[0]);
        this.S = this.#coercedValidation_S(hsv[1]);
        this.V = this.#coercedValidation_V(hsv[2]);
    }


    #coercedValidation_H = (arg: number) => {
        if (arg > 360) return 360;
        if (arg < 0) return 0;

        return arg;
    };


    #coercedValidation_S = (arg: number) => {
        if (arg > 100) return 100;
        if (arg < 0) return 0;

        return arg;
    };


    #coercedValidation_V = this.#coercedValidation_S;



    toRGB(): RgbArr{
        const H = this.H / 60;
        const S = this.S / 100;
        const V = this.V / 100;

        const C = V * S;

        const switcheroo = (H: number, C:number): RgbArr => {
            const X = C * (1 - abs(H % 2 - 1));

            switch (trunc(H)){
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

//             RED   GRN   BLU      HUE  SAT  VAL
// ||-------------------------||-----------------||
// || VIOLET:  122|   54|  225||    264|  76|  88||
// ||   CYAN:   37|  244|  250||    182|  85|  98||
// ||   LIME:  142|  227|   45||     88|  80|  89||
// || ORANGE:  250|  168|   37||     37|  85|  98||
// ||CRIMSON:  240|   36|  123||    334|  85|  94||
// ||-------------------------||-----------------||


const rgb = new HSV('Pseudo Color 4 Testing', [264, 76, 88]).toRGB();

console.log('Printing Result: ');

console.log(rgb);
