import app from '../../src/index';
import request from 'supertest';
import {
    UPPER_LIMIT,
    LOWER_LIMIT,
    CONVERTER_ERRORS,
    ROMAN_CONVERTER_APP_ROUTE
} from '../../src/utils/constants';


const invalidNumberStatus = {
    "statusCode": 400,
    "error": "Bad Request",
    "message": CONVERTER_ERRORS.INVALID_NUMBER
};

const outOfRangeStatus = {
    "statusCode": 400,
    "error": "Bad Request",
    "message": CONVERTER_ERRORS.OUT_OF_RANGE
};

const noEntryStatus = {
    "statusCode": 400,
    "error": "Bad Request",
    "message": CONVERTER_ERRORS.NO_ENTRY
};


describe('Number to Roman Numeral Converter Integration Tests', () => {

    describe('Test happy cases', () => {
        it('should return 200 status and correct app info', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE + '?query=100')
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /text/)
                .expect(200, done);
        });

        it('should return 200 status and correct app info', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE + '?query=4000')
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /text/)
                .expect(200, done);
        });
    });

    describe('Test route case sensitiivity', () => {
        it('should return 200 status and correct app info', done => {
            request(app)
                .get('/ROMANNUMERAL?query=100')
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /text/)
                .expect(200, done);
        });

        it('should return 200 status and correct app info', done => {
            request(app)
                .get('/RoManNumErAL?query=4000')
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /text/)
                .expect(200, done);
        });
    });

    describe('Test invalid routes', () => {
        it('should return 404 status from fakeroute', done => {
            request(app)
                .get('/fakeroute')
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /json/)
                .expect(404, done);
        });
        it('should return 404 status from no route', done => {
            request(app)
                .get('/')
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /json/)
                .expect(404, done);
        });
        it('should return 404 status from another fakeroute', done => {
            request(app)
                .get('/anotherfakeroute')
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /json/)
                .expect(404, done);
        });
    });

    describe('Test edge cases', () => {
        it('should return 200 status from non-string', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE)
                .query({
                    query: 390
                })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /text/)
                .expect(200, 'CCCXC', done);
        });
        it('should return 200 status from string', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE)
                .query({
                    query: '390'
                })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /text/)
                .expect(200, 'CCCXC', done);
        });
        it('should return 400 with fraction', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE)
                .query({
                    query: '39/100'
                })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /json/)
                .expect(400, invalidNumberStatus, done);
        });
        it('should return 400 with mixed string at end', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE)
                .query({
                    query: '39100ABC'
                })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /json/)
                .expect(400, invalidNumberStatus, done);
        });
        it('should return 400 with numeric values on either side', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE)
                .query({
                    query: '39ABC210'
                })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /json/)
                .expect(400, invalidNumberStatus, done);
        });
        it('should return 200 status from max value', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE)
                .query({
                    query: UPPER_LIMIT
                })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /text/)
                .expect(200, 'M̿M̿C̿C̿', done);
        });

        it('should return 200 status from lowest value', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE)
                .query({
                    query: LOWER_LIMIT
                })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /text/)
                .expect(200, 'I', done);
        });

        it('should return 200 status from number prepended with 0', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE)
                .query({
                    query: '00000089'
                })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /text/)
                .expect(200, 'LXXXIX', done);
        });
        it('should return 200 status from number prepended with very high numeric value', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE)
                .query({
                    query: '1923812823'
                })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /text/)
                .expect(200, 'M̿C̿M̿X̿X̿M̅M̅M̅D̅C̅C̅C̅X̅MMDCCCXXIII', done);
        });
        it('should return 400 when negative', done => {
            request(app)
                .get('/romannumeral')
                .query({
                    query: '-30'
                })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /json/)
                .expect(400, outOfRangeStatus, done);
        });
        it('should return 400 when way below range', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE)
                .query({
                    query: '-2200000000'
                })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /json/)
                .expect(400, outOfRangeStatus, done);
        });
        it('should return 400 when nothing is entered', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE)
                .query({
                    query: ''
                })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /json/)
                .expect(400, noEntryStatus, done);
        });
        it('should return 400 when space is entered', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE)
                .query({
                    query: ' '
                })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /json/)
                .expect(400, noEntryStatus, done);
        });
        it('should return 400 when way above', done => {
            request(app)
                .get(ROMAN_CONVERTER_APP_ROUTE)
                .query({
                    query: '324532532532235'
                })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', /json/)
                .expect(400, outOfRangeStatus, done);
        });
    });


    // Naughty Strings pulled from https://github.com/minimaxir/big-list-of-naughty-strings/blob/master/blns.json
    describe('Number to Roman Numeral Converter Integration Tests', () => {

        const naughtyStringsLst = require('blns');

        for (let i = 0; i < naughtyStringsLst; i++) {
            const queryStr = naughtyStringsLst[i];

            it('each naughty string should return 400', done => {
                request(app)
                    .get(ROMAN_CONVERTER_APP_ROUTE)
                    .query({
                        query: queryStr
                    })
                    .set('Accept', 'applicaton/json')
                    .expect('Content-Type', /json/)
                    .expect(400, invalidNumberStatus, done);
            });

        }

    });


});