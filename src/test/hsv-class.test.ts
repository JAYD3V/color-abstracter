import { format as fmt } from 'node:util';

import { deepStrictEqual,
         strictEqual,
         ok } from 'node:assert/strict';

import HSV, { RgbObj,
              HsvObj } from '../api/hsv.js';


// EXPORT TEST
export default hsvClassTest;



/**
 * ### HSV Class Test Generator
 * ---------------------------------------------------------------------
 * ### **About this Test:**
 * 1. **HSV to RGB Conversion** — The RGB to HSV conversion function is more likely to fail than any other part of this test, as it implements an algorithm, and is just more complex than the other class members.
 * 2. Presence and types are checked. This includes differentiating between arrays and objects.
 * 3. The clrName parameter's argument is checked (as stated above in #2), but the property that the argument is assigned to `HSV.name` is also tested to make sure the value passed into clrName matches the value held be `HSV.name` during Runtime-execution.
 * @param clrName The name of the color (not super important, but it is tested).
 * @param hsvInput Takes an HSV object that is shown in the example below.
 * @param rgbExpected The RGB object that you expect to be returned by the **`HSV.toRgb()`** method. An example of an RGB object is shown in the example below:
 * @example
 * ```
 * // "hue ranges from 0 to 360, val & sat range from 0 to 100."
 * const hsvObj = { hue: 360, sat: 100, val: 100 }
 * const color = new HSV('red', hsvObj)
 *
 * // "Red, green & blu range from 0 to 255."
 * const rgbObj = { red: 255, grn: 0, blu: 0}
 * ```
 * ------------------------------------------------------------------------- */
function hsvClassTest(clrName: string, hsvInput: HsvObj, rgbExpected: RgbObj){
    const { hue, sat, val } = hsvInput;
    const { red, grn, blu } = rgbExpected;

    const hsvStr = fmt('{ hue: %d, sat: %d, val %d }', hue, sat, val);
    const rgbStr = fmt('{ red: %d, grn: %d, blu %d }', red, grn, blu);

    const hsvInstanceDesc = '#color = HSV(#clrName: string, #hsvInput: '
        + 'HsvObj) | HSV Class Instance Test';

    return describe('HSV Class Test', () => {
        describe(`#hsvInput = ${hsvStr} | "HSV Constructor Arg Test"`, () => {
            it('should be an object', () => {
                strictEqual(typeof hsvInput, 'object');
            });
            it('should have property: "#hsvInput.hue"', () => {
                ok(hsvInput.hue);
            });
            it('should have property: "#hsvInput.sat"', () => {
                ok(hsvInput.sat);
            });
            it('should have a property "#hsvInput.val"', () => {
                ok(hsvInput.sat);
            });
        });

        describe(`#clrName = '${clrName}' | "HSV Constructor Arg Test"`, () => {
            it('should be a string', () => {
                strictEqual(typeof clrName, 'string');
            });
        });

        describe(hsvInstanceDesc, () => {
            const color = new HSV(clrName, hsvInput);

            it('the variable #color should be an "instance of" HSV', function(){
                ok(color instanceof HSV);
            });

            describe('#color.name | "HSV Class Property"', function(){
                it(`It should equal ${clrName}`, () => {
                    strictEqual(color.name, clrName);
                });
            });

            describe('#color.toRgb() | "HSV Class Method"', function(){
                it(`toRgb() should return the object: ${rgbStr}`, () => {
                    deepStrictEqual(rgbExpected, color.toRgb());
                });
            });
        });
    });
}

hsvClassTest('Red',
        { hue: 360, sat: 100, val: 100 }, { red: 255, grn: 0, blu: 0 });
