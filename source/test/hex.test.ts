// @RTE_NATIVE
import assert from 'node:assert/strict';
import test, { describe, it } from 'node:test';


// @PROJ_CLASS
import HexColor from '../api/hex';



export function genHexColorTest(validHexColor:string, invalidHexColor:string)
{
   const mesg = {
      init: 'Testing HexColor to RGBx255 Color Conversion'
   };

   return describe(mesg.init, () =>
   {
      const color = new HexColor(validHexColor);

      test('#color should be an instance of HexColor', { skip: true }, (T) =>
      {
         assert.ok(color instanceof HexColor);
      });

      test('A FormatError should occur', { skip: true }, (T) =>
      {
         T.skip();

         assert.throws(() => { new HexColor(invalidHexColor); },
               { name    : 'FormatError',
                 message : 'HexColor is improperly formatted' });
      });
   });
}
