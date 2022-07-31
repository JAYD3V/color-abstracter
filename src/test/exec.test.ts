import hsvTestGenerator from './lib/hsv-test-generator';
/*

  COLOR'S NAME         R     G     B         H     S     V
|---------------|   |-----|-----|-----|   |-----|-----|-----|
* Violet:            [122,   54,  225]     [264,   76,   88]
* Cyan:              [37,   244,  250]     [182,   85,   98]
* Lime:              [142,  227,   45]     [ 88,   80,   89]
* Orange:            [250,  168,   37]     [ 37,   85,   98]
* Crimson:           [240,   36,  123]     [334,   85,   94]
* Azure:             [ 68,  124,  208]     [216,   67,   82]
* Pacific Blue:      [ 37,  250,  166]     [156,   85,   98]
* Lime:              [142,  227,   45]     [ 88,   80,   89]
* Gold_14k:          [250,  200,   37]     [ 46,   85,   98]
* Orange:            [240,   99,   36]     [ 19,   85,   94]

*//*

----------------|-----------|--------------|------------------|-
                    COLOR      H   S   V       R    G    B
________________|___________|______________|__________________|_  */
hsvTestGenerator('Violet',   [264, 76, 88],  [122,  54, 225]);
hsvTestGenerator('CYAN',     [182, 85, 98],  [37,  244, 250]);
hsvTestGenerator('LIME',     [88,  80, 89],  [142, 227,  45]);
hsvTestGenerator('ORANGE',   [37,  85, 98],  [250, 168,  37]);
hsvTestGenerator('CRIMSON',  [334, 85, 94],  [240,  36, 123]);
hsvTestGenerator('Azure:',   [216, 67, 82],  [68,  124, 208]);
hsvTestGenerator('PacfBlu:', [156, 85, 98],  [37,  250, 166]);
hsvTestGenerator('Lime:',    [88,  80, 89],  [142, 227,  45]);
hsvTestGenerator('Gold14k:', [46,  85, 98],  [250, 200,  37]);
hsvTestGenerator('Orange:',  [19,  85, 94],  [240,  99,  36]);

// TODO: Generate additional static tests
// ADD: Automated test when toHSV() method is added to RGB class.
