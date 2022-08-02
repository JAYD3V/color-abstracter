/**
 * Copyright 2022, Ajay Chambers
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0   */

// TODO: Generate additional static tests
// ADD: Automated test when toHSV() method is added to RGB class.

// import @NodeJS
import { ok, strictEqual as equal } from 'node:assert/strict';
import { describe, it } from 'node:test';

// import @Local
import HSV, { HsvArr, RgbArr } from '../src/api/hsv.js';
import hsvToRGBAssert from '../src/lib/hsvToRgb-Assertion.js';

// export
export default hsvTestGenerator;

/*



  COLOR'S NAME         R     G     B         H     S     V
|---------------|   |-----|-----|-----|   |-----|-----|-----|
* Violet:            [122,   54,  225]     [264,   76,   88]
* Cyan:              [37,   244,  250]     [182,   85,   98]
* Lime:              [142,  227,   45]     [ 88,   80,   89]
* Orange:            [250,  168,   37]     [ 37,   85,   98]
* Crimson:           [240,   36,  123]     [334,   85,   94]
* Azure:             [ 68,  124,  208]     [216,   67,   82]
* Pacific Blue:      [ 37,  250,  166]     [156,   85,   98]
* Lime:              [142,  227,   45]     [ 88,   80,   89]
* Gold_14k:          [250,  200,   37]     [ 46,   85,   98]
* Orange:            [240,   99,   36]     [ 19,   85,   94]

*//*

----------------|-----------|--------------|------------------|-
                    COLOR      H   S   V       R    G    B
________________|___________|______________|__________________|_  */
hsvTestGenerator('Violet',   [264, 76, 88],  [122,  54, 225]);
hsvTestGenerator('CYAN',     [182, 85, 98],  [37,  244, 250]);
hsvTestGenerator('LIME',     [88,  80, 89],  [142, 227,  45]);
hsvTestGenerator('ORANGE',   [37,  85, 98],  [250, 168,  37]);
hsvTestGenerator('CRIMSON',  [334, 85, 94],  [240,  36, 123]);
hsvTestGenerator('Azure:',   [216, 67, 82],  [68,  124, 208]);
hsvTestGenerator('PacfBlu:', [156, 85, 98],  [37,  250, 166]);
hsvTestGenerator('Lime:',    [88,  80, 89],  [142, 227,  45]);
hsvTestGenerator('Gold14k:', [46,  85, 98],  [250, 200,  37]);
hsvTestGenerator('Orange:',  [19,  85, 94],  [240,  99,  36]);

// TODO: Generate additional static tests
// ADD: Automated test when toHSV() method is added to RGB class.






/**
 * Test generator for generating HSV Class Tests
 * This generator makes it possible to easily test the HSV class. It also makes
 * for easy random testing of the class.
 * preform randomized testing of the HSV Class.
 * @param name of the color.
 * @param hsvArr An array of the 3 values: hue, sat & val, that defines the HSV-modeled color.
 * @return Returns the dynamically generated test. */
function hsvTestGenerator(name: string, hsvArr: HsvArr, rgbArr:RgbArr){
    const desc = 'HSV CLASS TEST\n'
               + `\t  COLOR'S NAME:  ${name}\n`
               + `\t   INITIAL HSV:  ${hsvArr}\n`
               + `\t  EXPECTED RGB:  ${rgbArr}\n`;

    return describe(desc, () => TEST(name, hsvArr, rgbArr));
}






function TEST(name: string, hsvArr: HsvArr, rgbArr: RgbArr){
    /*

            ---- TESTING & VALIDATING THE TEST's ARGUMENTS ----
    */
    describe(`#name = ${name} | HSV Constructor Arg/Param`, () => {
        it('should exist', () => { ok(name); });
        it('should be a string', () => { equal(typeof name, 'string'); });
    });


    describe(`#hsvArr = ${hsvArr} | HSV Constructor Arg/Param`, () => {
        it('should exist', () => { ok(hsvArr); });
        it('should be an array', () => { ok(Array.isArray(hsvArr)); });
        it('should have 3 items', () => { equal(hsvArr.length, 3); });
    });


    /*

            ---- TESTING HSV CLASS & HSV-TO-RGB ALGORITHM ----
    */
    const color = new HSV(name, hsvArr);

    describe('#color = new HSV(#name, #hsvArr);', () => {
        it('HSV instance #color should exist', () => { ok(color); });
        it('should be HSV instance', () => { ok(color instanceof HSV); });
    });


    describe('#H = color.H (hue) |  The value for "HUE".', () => {
        const H = color.H;
        it('should be greater or equal to 0', () => { ok(H >= 0); });
        it('should be lesser or equal to 360', () => { ok(H <= 360); });
    });


    describe('#S = color.S (sat)  |  The value for "SATURATION"', () => {
        const S = color.S;
        it('should be greater or equal to 0', () => { ok(S >= 0); });
        it('should be lesser or equal to 100', () => { ok(S <= 100); });
    });


    describe('#V = color.V (val) - The value for "VALUE". (not a typo)', () => {
        const V = color.V;
        it('should be greater or equal to 0', () => { ok(V >= 0); });
        it('should be lesser or equal to 100', () => { ok(V <= 100); });
    });

    //  Testing HSV.toRGB() (impliments the hsv-2-rgb conversion algorithm)
    describe('#rgb = `#color.toRGB()` | HSV to RGB conversion Test', () => {
        it(`It should closely match the expected values: ${rgbArr}`, () => {
            const actualRgb = color.toRGB();
            hsvToRGBAssert(actualRgb, rgbArr);
        });
    });
}
