export const romanToNumConversions = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

/* ROMAN_NUMERAL_FIRST_DIGIT_VALUES

    This is the first digit (0-9) values for the Roman Numeral system.
    
    Ex: (none; i.e., zero), i, ii, iii, etc..

*/
export const ROMAN_NUMERAL_FIRST_DIGIT_VALUES = [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX'
];

/* ROMAN_NUMERAL_FIRST_DIGIT_VALUES

    This is the second digit (00-90) values for Roman Numeral Conversion.
    
    Ex: (none; i.e., zero), x (10), xx (20), xxx (30), etc..

*/
export const ROMAN_NUMERAL_SECOND_DIGIT_VALUES = [
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC'
];

/* ROMAN_NUMERAL_THIRD_DIGIT_VALUES

    This is the third digit (000-900) values for Roman Numeral Conversion.
    
    Ex: (none; i.e., zero), C (100), CC (200), CCC (300), etc..

*/
export const ROMAN_NUMERAL_THIRD_DIGIT_VALUES = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM'
];

/* ROMAN_NUMERAL_FOURTH_DIGIT_VALUES

    This is the furth digit (0000-9000) values for Roman Numeral Conversion.
    
    Ex: (none; i.e., zero), M (1000), MM (2000), MMM (3000), etc..

*/
export const ROMAN_NUMERAL_FOURTH_DIGIT_VALUES = [
    '',
    'M',
    'MM',
    'MMM',
    'I̅V̅',
    'V̅',
    'V̅I̅',
    'V̅I̅I̅',
    'V̅I̅I̅I̅',
    'I̅X̅'
];

/* ROMAN_NUMERAL_FIFTH_DIGIT_VALUES

    This is the fifth digit (00000-90000) values for Roman Numeral Conversion.
    
    Ex: (none; i.e., zero), X̅ (10000), X̅X̅ (20000), X̅X̅X̅ (20000), etc..

*/
export const ROMAN_NUMERAL_FIFTH_DIGIT_VALUES = [
    '',
    'X̅',
    'X̅X̅',
    'X̅X̅X̅',
    'X̅L̅',
    'L̅',
    'L̅X̅',
    'L̅X̅X̅',
    'L̅X̅X̅X̅',
    'X̅C̅'
];

/* ROMAN_NUMERAL_SIXTH_DIGIT_VALUES

    This is the sixth digit (000000-900000) values for Roman Numeral Conversion.
    
    Ex: (none; i.e., zero), C̅ (100000), C̅C̅ (200000), C̅C̅C̅ (300000), etc..

*/
export const ROMAN_NUMERAL_SIXTH_DIGIT_VALUES = [
    '',
    'C̅',
    'C̅C̅',
    'C̅C̅C̅',
    'C̅D̅',
    'D̅',
    'D̅C̅',
    'D̅C̅C̅',
    'D̅C̅C̅C̅',
    'C̅M̅'
];

/* ROMAN_NUMERAL_SEVENTH_DIGIT_VALUES

    This is the seventh digit (0000000-9000000) values for Roman Numeral Conversion.
    
    Ex: (none; i.e., zero), M̅ (1000000), M̅M̅ (2000000), M̅M̅M̅ (3000000), etc..

*/
export const ROMAN_NUMERAL_SEVENTH_DIGIT_VALUES = [
    '',
    'M̅',
    'M̅M̅',
    'M̅M̅M̅',
    'I̿V̿',
    'V̿',
    'V̿I̿',
    'V̿I̿I̿',
    'V̿I̿I̿I̿',
    'I̿X̿'
];

/* ROMAN_NUMERAL_EIGHT_DIGIT_VALUES

    This is the eighth digit (00000000-90000000) values for Roman Numeral Conversion.
    
    Ex: (none; i.e., zero), X̿ (10000000), X̿X̿ (20000000), X̿X̿X̿ (00000000), etc..

*/
export const ROMAN_NUMERAL_EIGHTH_DIGIT_VALUES = [
    '',
    'X̿',
    'X̿X̿',
    'X̿X̿X̿',
    'X̿L̿',
    'L̿',
    'L̿X̿',
    'L̿X̿X̿',
    'L̿X̿X̿X̿',
    'X̿C̿'
];

/* ROMAN_NUMERAL_NINTH_DIGIT_VALUES

    This is the ninth digit (000000000-900000000) values for Roman Numeral Conversion.
    
    Ex: (none; i.e., zero), C̿ (100000000), C̿C̿ (200000000), C̿C̿C̿ (300000000), etc..

*/
export const ROMAN_NUMERAL_NINTH_DIGIT_VALUES = [
    '',
    'C̿',
    'C̿C̿',
    'C̿C̿C̿',
    'C̿D̿',
    'D̿',
    'D̿C̿',
    'D̿C̿C̿',
    'D̿C̿C̿C̿',
    'C̿M̿'
];

/* ROMAN_NUMERAL_TENTH_DIGIT_VALUES

    This is the tenth digit (0000000000-9000000000) values for Roman Numeral Conversion.
    
    Ex: (none; i.e., zero), M̿ (1000000000), M̿M̿ (2000000000)

*/
export const ROMAN_NUMERAL_TENTH_DIGIT_VALUES = [
    '',
    'M̿',
    'M̿M̿'
];

export const LOWER_LIMIT = 1;

export const UPPER_LIMIT = 2200000000;

export const CONVERTER_ERRORS = {
    NO_ENTRY: 'No number entered',
    INVALID_NUMBER: 'Must be a valid number',
    OUT_OF_RANGE: 'Number must be between ' + LOWER_LIMIT + ' and ' + UPPER_LIMIT + ' (inclusive)'
};

export const ROMAN_CONVERTER_APP_ROUTE = '/romannumeral';

// I̅ V̅ X̅ L̅ C̅ D̅ M̅ vinculum x 1,000
// I̿ V̿ X̿ L̿ C̿ D̿ M̿ 1,000^2