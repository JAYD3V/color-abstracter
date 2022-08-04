/**
 *  COPYRIGHT 2022, A Jay Chambers
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"); you may
 *  not use this file except in compliance with the License. You may obtain
 *  a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *******************************************************************************
 * @file "...src/test/lib/hsvToRgb-Assertion.ts"
 * @fileoverview Custom assertion library that is specifically for this project
 * @author Andrew J Chambers Jr (tagname: JAYD3V)
 * @contact W3Dojo@Gmail.com
 * @issues https://github.com/JAYD3V/color-abstracter/issues
 ******************************************************************************/




import {
    strictEqual as equal,
    AssertionError,
    fail,
    ok
} from 'node:assert/strict';

import type { RgbArr } from '../hsv.js'; // TYPE IMPORT




/**
 * **Assertion Error Generator** Returns a function that generates assertion
 * errors that is pre-set with the actual value being tested, and the value that
 * it is expected to be. The returned function takes a message argument that
 * prints if the AssertionError is thrown.
 * @param actual
 *      A value of an entity that you want to test during runtime.
 * @param expected
 *      The value that you expect the actual parameter to be passed. */
function assertionErrorGenerator(actual:unknown, expected:unknown) {
    return (message:string) => new AssertionError({
        message  : message,
        expected : expected,
        actual   : actual
    });
}




/**
 * ### HSV to RGB Assertion
 * ---------------------------------------------------------------------------
 * Node assertions are unable to test `'RGB'` to `'HSV'` conversions w/o a bit
 * of extra code; this is that code. Because HSV to RGB conversions round to the
 * nearest integer, they are often off by (+/- 1). This function is designed to
 * check for the small amount of difference, thus making it possible to test the
 * _"RGB -to- HSV"_ conversions.
 * @param actualRgb
 *      Actual RGB array returned from an HSV to RGB conversion.
 * @param expectedRgb
 *      The RGB array you are expecting the conversion to return
 * */
export default function hsvToRgbAssert(actualRgb:RgbArr, expectedRgb:RgbArr) {
    for (let i = 0; i < 3; i++) {
        const actual = actualRgb[i];
        const expected = expectedRgb[i];

        let culprit = 'The rgb value "red"';

        if (i === 1) { culprit = 'The rgb value "green"'; }
        if (i === 2) { culprit = 'The rgb value "blue"'; }

        const genAssertErr = assertionErrorGenerator(actual, expected);

        if (!expected) {
            throw new Error('ExpectedRgb argument is undefined');
        }

        if (!actual) {
            const e = genAssertErr(`${culprit} is undefined`);
            fail(e);
        }
        if (actual > 255) {
            const e = genAssertErr(`${culprit} cannot be greater than 255`);
            fail(e);
        }
        if (actual < 0) {
            const e = genAssertErr(`${culprit} cannot be less than 0`);
            fail(e);
        }

        if (actual !== expected && actual + 1 !== expected &&
            actual - 1 !== expected) {
            const e = genAssertErr(`${culprit} is not what it was expected to be!`);
            fail(e);
        }
    }

    ok(true, 'hsvToRgbAssert Passed! The two arrays closely match!\n' +
        `Expected RGB: [${expectedRgb}]\nActual RGB: [${actualRgb}]`);
}




export function assertHexColor(hexColor:{ expected:string, actual:string; }) {
    const hexClrPatt = /^#([0-9|A-F]{3,4}|[0-9|A-F]{6}|[0-9|A-F]{8})$/i;
    const { actual, expected } = hexColor;

    const e = (mesg:string) => new AssertionError({
        expected: expected, actual: actual, message: mesg
    });

    if (!expected) { SyntaxError('Expected "hexColor" cannot be undefined!'); }
    if (!actual) { fail(e('hexColor is undefined')); }
    if (!hexClrPatt.test(actual)) { fail(e('HexColor is invalid')); }

    equal(actual, expected, 'Hex-color is not what it was expected to be');
}