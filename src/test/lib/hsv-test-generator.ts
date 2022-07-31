// import @NodeJS
import { ok, strictEqual as equal } from 'node:assert/strict';

// import @Local
import rgbCloseEqual from './rgb-close-eq.js';
import HSV, { HsvArr, RgbArr } from '../../api/hsv.js';

// export
export default hsvTestGenerator;

/**
 * Test generator for generating HSV Class Tests
 * This generator makes it possible to easily test the HSV class. It also makes
 * for easy random testing of the class.
 * preform randomized testing of the HSV Class.
 * @param name of the color.
 * @param hsvArr An array of the 3 values: hue, sat & val, that defines the HSV-modeled color.
 * @return Returns the dynamically generated test. */
function hsvTestGenerator(name: string, hsvArr: HsvArr, rgbArr:RgbArr){
    // const hsvArr = $F('[%d, %d, %d]', hsvArr[0], hsvArr[1], hsvArr[2]);
    // const rgbArr = $F('[%d, %d, %d]', rgbArr[0], rgbArr[1], rgbArr[2]);

    const desc = 'HSV CLASS TEST\n'
               + `\t  COLOR-NAME:  ${name}\n`
               + `\t   HSV INPUT:  ${hsvArr}\n`
               + `\tRGB EXPECTED:  ${rgbArr}\n`;

    return describe(desc, () => {
        TEST(name, hsvArr, rgbArr);
    });
}




function TEST(name: string, hsvArr: HsvArr, rgbArr: RgbArr){
    // TEST & VALIDATE: HSV Parameter: "name"
    describe(`#name = ${name} | HSV Constructor Arg/Param`, () => {
        it('should exist', () => { ok(name); });
        it('should be a string', () => { equal(typeof name, 'string'); });
    });


    // TEST & VALIDATE: Test-Constraint & HSV Parameter: "hsvArr"
    describe(`#hsvArr = ${hsvArr} | HSV Constructor Arg/Param`, () => {
        it('should exist', () => { ok(hsvArr); });
        it('should be an array', () => { ok(Array.isArray(hsvArr)); });
        it('should have 3 items', () => { equal(hsvArr.length, 3); });
    });


    // TEST: HSV Class Instance: "color"
    const color = new HSV(name, hsvArr);

    describe('#color = new HSV(#name, #hsvArr);', () => {
        it('HSV instance #color should exist', () => { ok(color); });
        it('should be HSV instance', () => { ok(color instanceof HSV); });
    });


    // TEST: HUE PROPERTY
    describe('#H = color.H (hue) |  The value for "HUE".', () => {
        const H = color.H;
        it('should be greater or equal to 0', () => { ok(H >= 0); });
        it('should be lesser or equal to 360', () => { ok(H <= 360); });
    });


    // TEST: SATURATION PROPERTY (HSV.S)
    describe('#S = color.S (sat)  |  The value for "SATURATION"', () => {
        const S = color.S;

        it('should be greater or equal to 0', () => { ok(S >= 0); });
        it('should be lesser or equal to 100', () => { ok(S <= 100); });
    });


    // VALUE PROPERTY TEST
    describe('#V = color.V (val) - The value for "VALUE". (not a typo)', () => {
        const V = color.V;

        it('should be greater or equal to 0', () => { ok(V >= 0); });
        it('should be lesser or equal to 100', () => { ok(V <= 100); });
    });


    // CONVERSION TEST
    describe('#rgb = `#color.toRgb()` | HSV to RGB conversion Test', () => {
        it(`It should closely match the expected values: ${rgbArr}`, () => {
            const actualRgb = color.toRGB();
            rgbCloseEqual(actualRgb, rgbArr);
        });
    });
}
