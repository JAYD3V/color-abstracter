/**
 * Copyright 2022, Ajay Chambers
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0 */


/*
   ESLINT DISABLED RULES:
      (1) *//* eslint-disable @typescript-eslint/naming-convention */

/*

   TODO LIST________________________________________________
   |1| Generate Additional Tests
   |2| Configure the test to run `onBuild()`
 */



// import @NodeJS
import { ok, strictEqual as equal } from 'node:assert/strict';
// import { describe, it } from 'node:test';

// import @Local
import HSV, { HsvArr, RgbArr } from '../api/hsv.js';
import hsvToRGBAssert from './lib/color-assert.js';

// export
export default generateHsvTest;


/*


  COLOR'S NAME         R     G     B         H     S     V
|--------------|    |-----|-----|-----|    |-----|-----|-----|
|- Violet:           [122,   54,  225]      [264,   76,   88]
|- Cyan:             [37,   244,  250]      [182,   85,   98]
|- Lime:             [142,  227,   45]      [ 88,   80,   89]
|- Orange:           [250,  168,   37]      [ 37,   85,   98]
|- Crimson:          [240,   36,  123]      [334,   85,   94]
|- Azure:            [ 68,  124,  208]      [216,   67,   82]
|- PacfBlu:          [ 37,  250,  166]      [156,   85,   98]
|- Lime:             [142,  227,   45]      [ 88,   80,   89]
|- Gold_14k:         [250,  200,   37]      [ 46,   85,   98]
|- Orange:           [240,   99,   36]      [ 19,   85,   94]
|===========================================================|
|                  COLOR       H   S   V       R    G    B  |
|______________|___________|______________|_________________|  */
generateHsvTest('Violet', [264, 76, 88], [122, 54, 225]);
generateHsvTest('CYAN', [182, 85, 98], [37, 244, 250]);
generateHsvTest('LIME', [88, 80, 89], [142, 227, 45]);
generateHsvTest('ORANGE', [37, 85, 98], [250, 168, 37]);
generateHsvTest('CRIMSON', [334, 85, 94], [240, 36, 123]);
generateHsvTest('Azure:', [216, 67, 82], [68, 124, 208]);
generateHsvTest('PacfBlu:', [156, 85, 98], [37, 250, 166]);
generateHsvTest('Lime:', [88, 80, 89], [142, 227, 45]);
generateHsvTest('Gold14k:', [46, 85, 98], [250, 200, 37]);
generateHsvTest('Orange:', [19, 85, 94], [240, 99, 36]);



/**
 * Test generator for generating HSV Class Tests
 * This generator makes it possible to easily test the HSV class. It also makes
 * for easy random testing of the class.
 * preform randomized testing of the HSV Class.
 * @param name of the color.
 * @param hsvArr An array of the 3 values: hue, sat & val, that defines the
 *  HSV-modeled color.
 * @return Returns the dynamically generated test.
*/
function generateHsvTest(name:string, hsvArr:HsvArr, rgbArr:RgbArr)
{
   const desc = 'HSV CLASS TEST\n' +
      `\t  COLOR'S NAME:  ${name}\n` +
      `\t   INITIAL HSV:  ${hsvArr}\n` +
      `\t  EXPECTED RGB:  ${rgbArr}\n`;

   return describe(desc, () => hsvTest(name, hsvArr, rgbArr));
}




/** HSV Class Test */
function hsvTest(name:string, hsvArr:HsvArr, rgbArr:RgbArr)
{
   // Validate "name" Argument
   describe(`#name = ${name} | HSV Constructor Arg/Param`, () =>
   {
      it('should exist', () => { ok(name); });
      it('should be a string', () => { equal(typeof name, 'string'); });
   });


   // VALIDATION-TEST | Argument: "hsvArr"
   describe(`#hsvArr = ${hsvArr} | HSV Constructor Arg/Param`, () =>
   {
      it('should exist', function() { ok(hsvArr); });
      it('should be an array', function() { ok(Array.isArray(hsvArr)); });
      it('should have 3 items', function() { equal(hsvArr.length, 3); });
   });


   // TEST | HSV Instantiation
   const color = new HSV(name, hsvArr);

   describe('#color = new HSV(#name, #hsvArr);', () =>
   {
      it('HSV instance #color should exist', function() { ok(color); });
      it('should be HSV instance', function() { ok(color instanceof HSV); });
   });



   // TEST | HSV Property: "HSV.hue"
   describe('#H = color.H (hue) |  The value for "HUE".', () =>
   {
      const H = color.H;

      it('should be greater or equal to 0', function() { ok(H >= 0); });
      it('should be lesser or equal to 360', function() { ok(H <= 360); });
   });



   // TEST | HSV Property: "HSV.sat"
   describe('#S = color.S (sat)  |  The value for "SATURATION"', () =>
   {
      const S = color.S;

      it('should be greater or equal to 0', () => { ok(S >= 0); });
      it('should be lesser or equal to 100', () => { ok(S <= 100); });
   });



   // TEST | HSV Property: "HSV.val"
   describe('#V = color.V (val) - The value for "VALUE". (not a typo)', () =>
   {
      const V = color.V;

      it('should be greater or equal to 0', () => { ok(V >= 0); });
      it('should be lesser or equal to 100', () => { ok(V <= 100); });
   });



   // TEST | HSV Func-member: "HSV.toRGB()"
   describe('#rgb = `#color.toRGB()` | HSV to RGB conversion Test', () =>
   {
      it(`It should closely match the expected values: ${rgbArr}`, () =>
      {
         const actualRgb = color.toRGB();

         hsvToRGBAssert(actualRgb, rgbArr);
      });
   });
}
