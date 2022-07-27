// @NATIVE


// import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert/strict';
import { format as fmt } from 'node:util';
// @LOCAL
import Color, { ColorObj_HSV, ColorObj_RGB } from '../api/color.js';




function genTestInput (testArg: ColorObj_HSV,
                       expectedRes: ColorObj_RGB,
                       colorsName: string,
                       description: string,
                       signature?: string){
   return {
      arg       : testArg,
      exp       : expectedRes,
      name      : '#' + colorsName.toUpperCase(),
      desc      : description,
      signature : signature
   };
}

genTestInput(
   { hue: 1, sat: 100, val: 100 },
   { red: 255, grn: 0, blu: 0 },
   'red',
   '(alias) new Color(colorName: string, hsv: HSV_Format): Color'
);

const TesT = {
   arg       : { hue: 1, sat: 100, val: 50 },
   exp       : { red: 255, grn: 0, blu: 0 },
   name      : '#Color',
   signature : '(alias) new Color(colorName: string, hsv: HSV_Format): Color'
};

describe(fmt('#color = new HSV()%s', TesT), () => {
   const red = new Color('red', [360, 99, 99]);

   it('is should be of the type "object"', () => {
      strictEqual(typeof red, 'object');
   });
});
