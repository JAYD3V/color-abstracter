"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// GLOBALS
const { round: round, max: largest, min: smallest } = Math;
function rgbToHsv(rgb) {
    const { red, grn, blu } = rgb;
    return {
        hue: getRgbHue(red, grn, blu),
        sat: getRgbSat(red, grn, blu),
        val: getRgbBrightness(red, grn, blu)
    };
}
exports.default = rgbToHsv;
/**
 * Returns the range of the 3 RGB color values. This number is
 * commonly referred to as "Delta" when expressed inside of an
 * algorithm.
 *
 * @example
      const delta = findRgbRange(100, 20, 35)
      console.log(delta) // Logs: 80
 * _____________________________________________________________ */
function lengthOfRgbRange(red, grn, blu) {
    return largest(red, grn, blu) - smallest(red, grn, blu);
}
function getRgbHue(red, grn, blu) {
    const delta = lengthOfRgbRange(red, grn, blu);
    const max = largest(red, grn, blu);
    let hue = 0;
    if (delta != 0) {
        hue = red === max
            ? ((grn - blu) / delta) % 6 : grn === max
            ? (blu - red) / delta + 2 : (red - grn) / delta + 4;
    }
    hue = round(hue * 60);
    hue += (hue < 0) ? 360 : 0;
    return hue;
}
function getRgbBrightness(red, grn, blu) {
    // Find the color w/ greatest value, the convert it to a percentage
    return round(largest(red, grn, blu) / 255 * 100);
}
function getRgbSat(red, grn, blu) {
    const delta = lengthOfRgbRange(red, grn, blu);
    const max = largest(red, grn, blu);
    // find the percentage that the range is of the greatest color
    // then convert it to a 1-100 percentage value.
    return (delta <= 0) ? 0 : round(delta / max * 100);
}
//# sourceMappingURL=hsv.js.map