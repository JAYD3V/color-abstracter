import { format as fmt } from 'node:util';

export default class HexColor {
    color:string;

    constructor(color:string) {
        this.color = color;
    }

    #_validateColor(color:string) {
        if (color.length === 4 || color.at(0) === '#') { }
    }

    #_parseHexColor(color:string) {

    }
}
