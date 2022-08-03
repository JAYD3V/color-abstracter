import { AssertionError } from 'assert';
import { ok as OK, fail as FAIL } from 'assert/strict';

const patt = {
    hexColor     : /^#([0-9|A-F]{3,4}|[0-9|A-F]{6}|[0-9|A-F]{8})$/i,
    hexColorStd  : /^#([0-9|A-F]{3}){1,2}$/i,
    hexColorOpac : /^#([0-9|A-F]{4}){1,2}$/i,
    hexColor8    : /^#([0-9|A-F]{8})$/i,
    hexColor6    : /^#([0-9|A-F]{6})$/i,
    hexColor4    : /^#([0-9|A-F]{4})$/i,
    hexColor3    : /^#([0-9|A-F]{3})$/i
};


export function assertHexColor(hexColor:{ expected:string, actual:string; }) {
    const { actual, expected } = hexColor;

    const e = (mesg:string) => new AssertionError({
        expected: expected, actual: actual, message: mesg
    });

    if (!expected) { SyntaxError('Expected "hexColor" cannot be undefined!'); }
    if (!actual) { FAIL(e('Actual "hexColor" is undefined')); }
    if (!patt.hexColor.test(actual)) {
        FAIL(e('Actual "hexColor" is not valid'));

    }
}
