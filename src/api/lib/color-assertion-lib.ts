/** *************************************************************************
  * @file "...src/test/lib/hsvToRgb-Assertion.ts"
  * @fileoverview File houses an assertion for checking hsv to rgb conversions
  * @author Andrew J Chambers Jr (tagname: JAYD3V)
  * @repo Https://GitHub.com/JAYD3V/J-Color
  * @license Apache-2.0
  * @JAYD3V
  *************************************************************************** */

// @NodeJS
import { AssertionError } from 'node:assert';
import { fail, ok, strictEqual as equal } from 'node:assert/strict';

// @Local-project (Type Imports)
import type { RgbArr } from '../hsv.js';


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
export default function hsvToRgbAssert(actualRgb:RgbArr, expectedRgb:RgbArr) {
    for (let i = 0; i < 3; i++) {
        const actual = actualRgb[i];
        const expected = expectedRgb[i];
        const color = (i === 0) ? 'Red' : (i === 1) ? 'Green' : 'Blue';

        if (!expected) {
            throw new Error(
                'hsvToRgbAssertion parameter "ExpectedRGB" is undefined');
        }

        const error = (mesg:string) => new AssertionError({
            message  : mesg,
            expected : expected,
            actual   : actual
        });

        const offender = `RGB[${color}]`;

        if (!actual) { fail(error(`${offender} is undefined`)); }
        if (actual > 255) { fail(error(`${offender} is greater than 255`)); }
        if (actual < 0) { fail(error(`${offender} is 'lesser' than 0`)); }

        if (actual !== expected &&
                actual + 1 !== expected &&
                actual - 1 !== expected) {
            const msg = `ASSERTION FAILED! ${offender}`;

            fail(error(`${msg} CONTAINS AN UNEXPECTED VALUE`));
        }
    }

    ok(true, 'hsvToRgbAssert Passed! The two arrays closely match!\n' +
        `Expected RGB: [${expectedRgb}]\nActual RGB: [${actualRgb}]`);
}



const hexClrPatt = /^#([0-9|A-F]{3,4}|[0-9|A-F]{6}|[0-9|A-F]{8})$/i;

export function assertHexColor(hexColor:{ expected:string, actual:string; }) {
    const { actual, expected } = hexColor;

    const e = (mesg:string) => new AssertionError({
        expected: expected, actual: actual, message: mesg
    });

    if (!expected) { SyntaxError('Expected "hexColor" cannot be undefined!'); }
    if (!actual) { fail(e('hexColor is undefined')); }
    if (!hexClrPatt.test(actual)) { fail(e('HexColor is invalid')); }

    equal(actual, expected, 'Hex-color is not what it was expected to be');
}
