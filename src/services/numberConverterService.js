import Boom from '@hapi/boom';
import {
    UPPER_LIMIT,
    LOWER_LIMIT,
    CONVERTER_ERRORS
} from '../utils/constants';

import * as RomanMapBuilder from '../utils/RomanMapBuilder';

/**
 * Return a roman numeral.
 *
 * @param   {Number|String}  num
 * @returns {Number}
 */
export function convertToRomanNumeralVinculum(num) {


    // Return error if the num value passed is an invalid number or less than 1 or greater than 2,200,000,000
    // num.trim() will return false if the string is empty or has only whitespace
    if (!num || !num.trim()) {
        throw Boom.badRequest(CONVERTER_ERRORS.NO_ENTRY);
    }

    //any number % 1 is 0, this checks for decimals
    if (isNaN(num) || num % 1 !== 0) {
        throw Boom.badRequest(CONVERTER_ERRORS.INVALID_NUMBER);
    }

    if (num < LOWER_LIMIT || num > UPPER_LIMIT) {
        throw Boom.badRequest(CONVERTER_ERRORS.OUT_OF_RANGE);
    }

    //parse valid num into integer to trim leading zeros
    num = parseInt(num, 10).toString();

    // convert the number to an array of digits to get decimal place
    const digitArray = num.split('');

    // build map of digits to roman numerals
    const romanMap = RomanMapBuilder.buildRomanMap();

    // create empty roman string to append value to
    let result = '';

    // initialize the array index of largest decimal place
    let currentDecimalIndex = digitArray.length;

    // loop from number with largest decimal place to smallest
    for (let i = 0; i < digitArray.length; i++) {

        // get the roman numeral representations at the specific decimal places
        const decimalToRoman = romanMap.get(currentDecimalIndex);

        // construct roman numeral
        result += decimalToRoman[digitArray[i]];

        // to move to the next digit, we must decrement the decimal place
        currentDecimalIndex--;

    }

    // return the concatenated roman numeral string
    return result;
}