import HexColor from '../api/hex';
import { ok, fail } from 'node:assert/strict';

const XXX = '\x1b[0m';
const ESCAPE = {
    blk : '\x1b[0;30',
    red : '\x1b[0;31',
    grn : '\x1b[0;32',
    ylw : '\x1b[0;33',
    blu : '\x1b[0;34',
    mag : '\x1b[0;35',
    cyn : '\x1b[0;36',
    wht : '\x1b[0;36',
    BLK : '\x1b[0;90',
    RED : '\x1b[0;91',
    GRN : '\x1b[0;92',
    YLW : '\x1b[0;93',
    BLU : '\x1b[0;94',
    MAG : '\x1b[0;95',
    CYN : '\x1b[0;96',
    WHT : '\x1b[0;96'
};

export function generateHexColorTest(colorsValue:string) {
    return hexColorTest(colorsValue);
}




function hexColorTest(colorsValue:string) {
    const color = new HexColor(colorsValue);

    const PREDEF = {
        HDR_MESG       : 'TESTING | HEX COLOR CLASS',
        CTOR_SIGNATURE : '#constructor - HexColor(color: string): HexColor'
    };

    return describe(PREDEF.HDR_MESG, function() {
        describe(PREDEF.CTOR_SIGNATURE, function() {
        });
    });
}




/* *************************************

    function hexParser(){
        1. Return the length
        if(length == 3){

        }
    }

************************************* */
