class HexColor{
    RGB = { red: 0, grn: 0, blu: 0 };

    constructor(hexStr: string){
        const len = hexStr.length;

        if (hexStr.at(0) !== '#'){
            throw new Error('HexStr arg must start with a number-sign -> #');
        }

        if (len != 3 && len != 4 && len != 6 && len != 8){
            console.log('');
        }

        switch (hexStr.length){
            case 3:
            case 6:
            case 4:
            case 8:

            default:
                throw new Error('HexColor arg has an invalid amount of digits');
        }

        // parseInt(hexStr, 10);
    }
}
