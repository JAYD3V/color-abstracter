import { format } from 'node:util';

const XX = (str:string) => format('%s\x1b[0m', str);
const $$ = (num:number) => format('\x1b[%d', num);

const cFmt = {
   red : (str:string) => $$(31) + XX(str),
   grn : (str:string) => $$(32) + XX(str),
   ylw : (str:string) => $$(33) + XX(str),
   blu : (str:string) => $$(34) + XX(str),
   mgt : (str:string) => $$(35) + XX(str),
   cyn : (str:string) => $$(36) + XX(str),
   blk : (str:string) => $$(37) + XX(str)
};

const str = cFmt.red('A RED APPLE!');

console.log('\n');
console.log(str);
console.log('\n');
