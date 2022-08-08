// @RTE_NATIVE
import assert from 'node:assert/strict';
import test, { describe, it } from 'node:test';

// @PROJ_CLASS
import HexColor from '../api/hex';


genHexColorTest('#FFFFFF', '#ABCDEG');
/* *****************************************************************************








*********************************** TEST ***************************************/
const __SKIP__ = { skip: true };

export function genHexColorTest(validHexColor:string, invalidHexColor:string) {
   const MESG = {
      INIT : 'Testing HexColor to RGBx255 Color Conversion',
      T1   : 'Expecting #color to be an instance of HexColor',
      T2   : 'Expecting FormatError'
   };

   return test(MESG.INIT, () => {
      const color = new HexColor(validHexColor);

      //    - 01 -
      test(MESG.T1, __SKIP__, (T) => {
         assert.ok(color instanceof HexColor);
      });

      //    - 02 -
      test(MESG.T2, __SKIP__, (T) =>
      {
         assert.throws(() => {
            new HexColor(invalidHexColor);
         }, {
            name    : 'FormatError',
            message : 'HexColor is improperly formatted'
         });
      });
   });
}
