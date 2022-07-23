// TYPES
type RGB = { red:number, grn:number, blu:number };
type HSV = { hue:number, sat:number, val:number };

// GLOBALS
const { round: round, max:largest, min:smallest } = Math;


export default function rgbToHsv (rgb: RGB): HSV{
   const { red, grn, blu } = rgb;
   return {
      hue : getRgbHue(red, grn, blu),
      sat : getRgbSat(red, grn, blu),
      val : getRgbBrightness(red, grn, blu)
   };
}




/**
 * Returns the range of the 3 RGB color values. This number is
 * commonly referred to as "Delta" when expressed inside of an
 * algorithm.
 *
 * @example
      const delta = findRgbRange(100, 20, 35)
      console.log(delta) // Logs: 80
 * _____________________________________________________________ */
function lengthOfRgbRange (red:number, grn:number, blu:number){
   return largest(red, grn, blu) - smallest(red, grn, blu);
}




function getRgbHue (red:number, grn:number, blu:number){
   const delta = lengthOfRgbRange(red, grn, blu);
   const max = largest(red, grn, blu);

   let hue = 0;

   if (delta != 0){
      hue = red === max
         ? ((grn - blu) / delta) % 6 : grn === max
               ? (blu - red) / delta + 2 : (red - grn) / delta + 4;
   }

   hue = round(hue * 60);
   hue += (hue < 0) ? 360 : 0;

   return hue;
}




function getRgbBrightness (red:number, grn:number, blu:number){
   // Find the color w/ greatest value, the convert it to a percentage
   return round(largest(red, grn, blu) / 255 * 100);
}




function getRgbSat (red:number, grn:number, blu:number){
   const delta = lengthOfRgbRange(red, grn, blu);
   const max = largest(red, grn, blu);

   // find the percentage that the range is of the greatest color
   // then convert it to a 1-100 percentage value.
   return (delta <= 0) ? 0 : round(delta / max * 100);
}
