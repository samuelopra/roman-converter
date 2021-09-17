import * as NumberConverterService from '../../src/services/numberConverterService';
import {
    UPPER_LIMIT,
    LOWER_LIMIT,
    CONVERTER_ERRORS
} from '../../src/utils/constants';

describe('Roman Numeral Converter Service', () => {
    it('it should convert between 0 and 3999 to roman numerals correctly', () => {
        expect(NumberConverterService.convertToRomanNumeralVinculum('1')).toEqual('I');
        expect(NumberConverterService.convertToRomanNumeralVinculum('3')).toEqual('III');
        expect(NumberConverterService.convertToRomanNumeralVinculum('45')).toEqual('XLV');
        expect(NumberConverterService.convertToRomanNumeralVinculum('255')).toEqual('CCLV');
        expect(NumberConverterService.convertToRomanNumeralVinculum('306')).toEqual('CCCVI');
        expect(NumberConverterService.convertToRomanNumeralVinculum('400')).toEqual('CD');
        expect(NumberConverterService.convertToRomanNumeralVinculum('875')).toEqual('DCCCLXXV');
        expect(NumberConverterService.convertToRomanNumeralVinculum('1024')).toEqual('MXXIV');
        expect(NumberConverterService.convertToRomanNumeralVinculum('2400')).toEqual('MMCD');
        expect(NumberConverterService.convertToRomanNumeralVinculum('2899')).toEqual('MMDCCCXCIX');
        expect(NumberConverterService.convertToRomanNumeralVinculum('2999')).toEqual('MMCMXCIX');
        expect(NumberConverterService.convertToRomanNumeralVinculum('3999')).toEqual('MMMCMXCIX');
    });

    it('it should convert numbers over 3999 and under 2,200,000,000 with Vinculum', () => {
        expect(NumberConverterService.convertToRomanNumeralVinculum('4000')).toEqual('I̅V̅');
        expect(NumberConverterService.convertToRomanNumeralVinculum('10003000')).toEqual('X̿MMM');
        expect(NumberConverterService.convertToRomanNumeralVinculum('1400000000')).toEqual('M̿C̿D̿');
        expect(NumberConverterService.convertToRomanNumeralVinculum('803000')).toEqual('D̅C̅C̅C̅MMM');
        expect(NumberConverterService.convertToRomanNumeralVinculum('5599')).toEqual('V̅DXCIX');
        expect(NumberConverterService.convertToRomanNumeralVinculum('650000')).toEqual('D̅C̅L̅');
        expect(NumberConverterService.convertToRomanNumeralVinculum('2200000000')).toEqual('M̿M̿C̿C̿');
    });

    it('it should convert numbers with leading zeros', () => {
        expect(NumberConverterService.convertToRomanNumeralVinculum('004000')).toEqual('I̅V̅');
        expect(NumberConverterService.convertToRomanNumeralVinculum('000010003000')).toEqual('X̿MMM');
        expect(NumberConverterService.convertToRomanNumeralVinculum('0001400000000')).toEqual('M̿C̿D̿');
        expect(NumberConverterService.convertToRomanNumeralVinculum('00803000')).toEqual('D̅C̅C̅C̅MMM');
        expect(NumberConverterService.convertToRomanNumeralVinculum('000000005599')).toEqual('V̅DXCIX');
        expect(NumberConverterService.convertToRomanNumeralVinculum('0000000000000000650000')).toEqual('D̅C̅L̅');
        expect(NumberConverterService.convertToRomanNumeralVinculum('000002200000000')).toEqual('M̿M̿C̿C̿');
    });

    it('it should fail with numbers below the lower limit', () => {
        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('-2');
        }).toThrowError();

        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('-2200000000');
        }).toThrowError();

        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('-100');
        }).toThrowError();

        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('-45902');
        }).toThrowError();
    });
    it('it should fail with numbers above the upper limit', () => {
        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('100000000000');
        }).toThrowError(CONVERTER_ERRORS.OUT_OF_RANGE);

        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('23230434234324');
        }).toThrowError(CONVERTER_ERRORS.OUT_OF_RANGE);

        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('543543543893349854');
        }).toThrowError(CONVERTER_ERRORS.OUT_OF_RANGE);

        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('2200000001');
        }).toThrowError(CONVERTER_ERRORS.OUT_OF_RANGE);
    });

    it('it should fail with invalid inputs', () => {
        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('12ABC12');
        }).toThrowError(CONVERTER_ERRORS.INVALID_NUMBER);

        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('dksjafnbkfkjew12');
        }).toThrowError(CONVERTER_ERRORS.INVALID_NUMBER);

        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('12.323');
        }).toThrowError(CONVERTER_ERRORS.INVALID_NUMBER);

        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('1/29');
        }).toThrowError(CONVERTER_ERRORS.INVALID_NUMBER);

        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('1232133L12');
        }).toThrowError(CONVERTER_ERRORS.INVALID_NUMBER);
    });
    it('it should fail with no inputs', () => {
        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('');
        }).toThrowError(CONVERTER_ERRORS.NO_ENTRY);
    });

    it('it should fail with no inputs', () => {
        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum(' ');
        }).toThrowError(CONVERTER_ERRORS.NO_ENTRY);

        expect(() => {
            NumberConverterService.convertToRomanNumeralVinculum('                  ');
        }).toThrowError(CONVERTER_ERRORS.NO_ENTRY);
    });

});