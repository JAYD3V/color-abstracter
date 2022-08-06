import { AssertionError } from 'assert';
import { ok, fail, strictEqual as equal } from 'assert/strict';

const patt = {
    hexColor     : /^#([0-9|A-F]{3,4}|[0-9|A-F]{6}|[0-9|A-F]{8})$/i,
    hexColorStd  : /^#([0-9|A-F]{3}){1,2}$/i,
    hexColorOpac : /^#([0-9|A-F]{4}){1,2}$/i,
    hexColor8    : /^#([0-9|A-F]{8})$/i,
    hexColor6    : /^#([0-9|A-F]{6})$/i,
    hexColor4    : /^#([0-9|A-F]{4})$/i,
    hexColor3    : /^#([0-9|A-F]{3})$/i
};

const hexClrPatt = /^#([0-9|A-F]{3,4}|[0-9|A-F]{6}|[0-9|A-F]{8})$/i;

export function assertHexColor(hexColor:{ expected:string, actual:string; }) {
    const { actual, expected } = hexColor;

    const e = (mesg:string) => new AssertionError({
        expected: expected, actual: actual, message: mesg
    });

    if (!expected) {
        SyntaxError('Expected "hexColor" cannot be undefined!'); }

    if (!actual) {
        fail(e('hexColor is undefined')); }

    if (!hexClrPatt.test(actual)) {
        fail(e('HexColor is invalid')); }

    equal(actual, expected, 'Hex-color is not what it was expected to be');
}
