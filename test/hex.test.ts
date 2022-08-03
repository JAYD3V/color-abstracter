// @Nodejs
import test from 'node:test';
import { ok as OK } from 'node:assert/strict';

// @Local
import HexColor from './api/hex.js';
import regX from './api/lib/hex-validation';





export function generateHexColorTest(testId: string){
    return test(`RGB TEST | ${testId}`, () => {
        HexColorTest();
    });
}





function HexColorTest(hexColor: string){
    const color = new HexColor(hexColor);
}





function validateHexArg(){
    const color = new HexColor('#ABCDEF');
}
