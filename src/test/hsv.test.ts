// @NATVE
import { format as fmt } from 'node:util';

// @LOCAL
import HSV, { HsvArr, RgbObj } from '../api/color.js';
import { deepStrictEqual } from 'assert/strict';



function generateTest (colorName: string, hsv: HsvArr, rgb: RgbObj){
   const initialDesc = fmt('const color = new HSV("%s", [%d,%d,%d])', colorName, hsv[0], hsv[1], hsv[2]);

   const testCaseDesc = fmt(
      'It should return an rgb object containing the'
    + 'following three K/V pairs\n{ red: %s, grn: %s, blu: %s }',
      rgb.red, rgb.grn, rgb.blu);

   console.log(`\n\nHSV CLASS TEST | Test: "${colorName}"`);

   describe(initialDesc, () => {
      const color = new HSV(colorName, hsv);
      describe('color.toRgb()', () => {
         it(testCaseDesc, () => {
            deepStrictEqual(color.toRgb(), rgb);
         });
      });
   });
}

generateTest('Red', [360, 100, 100], { red: 255, grn: 0, blu: 0 });
generateTest('Red', [360, 100, 100], { red: 255, grn: 0, blu: 0 });
generateTest('Red', [360, 100, 100], { red: 255, grn: 0, blu: 0 });
generateTest('Red', [360, 100, 100], { red: 255, grn: 0, blu: 0 });
generateTest('Red', [360, 100, 100], { red: 255, grn: 0, blu: 0 });
generateTest('Red', [360, 100, 100], { red: 255, grn: 0, blu: 0 });
generateTest('Red', [360, 100, 100], { red: 255, grn: 0, blu: 0 });
generateTest('Red', [360, 100, 100], { red: 255, grn: 0, blu: 0 });
generateTest('Red', [360, 100, 100], { red: 255, grn: 0, blu: 0 });
generateTest('Red', [360, 100, 100], { red: 255, grn: 0, blu: 0 });
generateTest('Red', [360, 100, 100], { red: 255, grn: 0, blu: 0 });





/*
describe('const color = new HSV(\'red\', [360, 100, 100]);', function (){
   describe('color.toRgb()', function (){
      const color = new HSV('red', [360, 100, 100]);
      const rgb = color.toRgb();

      it('should return an object with the following k/v pairs:\n\t{ red: 255, grn: 0, blu: 0 }', function (){
         deepStrictEqual(rgb, { red: 255, grn: 0, blu: 0 });
      });
   });
});

describe('const color = new HSV(\'red\', [360, 0, 0]);', function (){
   describe('color.toRgb()', function (){
      const color = new HSV('red', [360, 100, 100]);
      const rgb = color.toRgb();

      it('should return an object with the following k/v pairs:\n\t{ red: 255, grn: 0, blu: 0 }', function (){
         deepStrictEqual(rgb, { red: 255, grn: 0, blu: 0 });
      });
   });
});
 */
