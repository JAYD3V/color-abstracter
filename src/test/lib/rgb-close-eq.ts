/**
 * @file "...src/test/gen/rgb-close-eq.ts"
 * @fileoverview TS doc containing the RGB Close Equals Assertion Function
 * @author Andrew J Chambers Jr (tagname: JAYD3V)
 * @JAYD3V
 * */

import { fail, ok } from 'node:assert/strict';
import type { RgbArr } from '../../api/hsv.js';

export default function rgbCloseEqual(actual: RgbArr, expected: RgbArr){
    for (let i = 0; i < 3; i++){
        const A = actual[i];
        const X = expected[i];

        if (!A || !X) throw new Error('Undefined item found in rbg array');

        if (A > 255 || A < 0 || X > 255 || X < 0){
            throw new RangeError('RGB Array items must be between 0 & 255');
        }

        if (A !== X && A + 1 !== X && A - 1 !== X){
            let color = 'blue';

            if (i === 0) color = 'red';
            else if (i === 1) color = 'green';

            fail(`The actual value of ${color} is ${A}, but ${X} was expected`);
        }
    }

    ok(true, 'The actual RGB values closely match the expected RGB values');
}
