/** *************************************************************************
  * @file "...src/test/lib/hsvToRgb-Assertion.ts"
  * @fileoverview File houses an assertion for checking hsv to rgb conversions
  * @author Andrew J Chambers Jr (tagname: JAYD3V)
  * @repo Https://GitHub.com/JAYD3V/J-Color
  * @license Apache-2.0
  * @JAYD3V
  *************************************************************************** */


import { AssertionError } from 'node:assert';
import { fail as FAIL, ok as PASS } from 'node:assert/strict';

type RgbArr = [number, number, number];


/**
 * ### HSV to RGB Assertion
 * ---------------------------------------------------------------------------
 * The Node assertion lib requires help to test HSV to RGB conversions,
 * this fn is that help. Because HSV to RGB conversions round to the nearest
 * integer, they are often off by (+/- 1). This function accounts for that
 * small difference when comparing the Resulting RGB array with the Expected
 * Array.
 * @param actualRgb
 *      Actual RGB array returned from an HSV to RGB conversion.
 * @param expectedRgb
 *      The RGB array you are expecting the conversion to return
 */
export default function hsvToRgbAssert(actualRgb: RgbArr, expectedRgb: RgbArr){
    for (let i = 0; i < 3; i++){
        const A = actualRgb[i];
        const E = expectedRgb[i];
        const color = (i == 0) ? 'Red' : (i == 1) ? 'Green' : 'Blue';


        /** Generates assertion errors w/ the same expected & actual arguments
          * pre assigned to the AssertionError `opts` parameter. */
        const error = (mesg: string) => new AssertionError({
            message  : mesg,
            expected : E,
            actual   : A
        });


        if (!E) throw new Error('expectedRgb contains undefined values.');

        if (!A){
            FAIL(error(`The actual rgb value: ${color} is undefined`));
        } else if (A > 255){
            FAIL(error(`The value of ${color} is 'greater' than 255`));
        } else if (A < 0){
            FAIL(error(`The value of ${color} is 'lesser' than 0`));
        } else if (A !== E && A + 1 !== E && A - 1 !== E){
            FAIL(error(`The value of ${color}=${A} but should be ${E}`));
        }
    }

    PASS(true, 'hsvToRgbAssert Passed! The two arrays closely match!\n'
             + `Expected RGB: [${expectedRgb}]\nActual RGB: [${actualRgb}]`);
}
