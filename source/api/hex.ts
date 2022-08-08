import { format as fmt } from 'node:util';
import { FormatError } from './lib/err';

const isHexColor = /^#([A-F0-9]{3}){1,2}$/i;


export default class HexColor {
   color:string;

   constructor(colorValue:string) {
      this.color = colorValue;

      if (!isHexColor.test(colorValue)) {
         throw new FormatError('HexColor');
      }
   }

   #_validateColor(color:string) {
      if (color.length === 4 || color.at(0) === '#') { }
   }

   #_parseHexColor(color:string) {

   }
}
