import { format as fmt } from 'node:util';
import { FormatError } from './lib/err';

const vldColor = /^#([A-F0-9]{3}){1,2}$/i;


export default class HexColor
{
   #_color:string = '';

   constructor(hexVal:string)
   {
      this.color = hexVal;
   }

   set color(hexVal:string) {
      if (!vldColor.test(hexVal)) {
         throw new FormatError('HexColor');
      }

      this.#_color = hexVal;
   }

   get color() {
      return this.#_color;
   }

   #_validateColor(color:string)
   {
      if (color.length === 4 || color.at(0) === '#') { }
   }

   #_parseHexColor(color:string)
   {

   }
}
