import * as numberConverterService from '../services/numberConverterService';


/**
 * 
 * @param {Request} req - request parameter
 * @param {Response} res - response parameter
 * 
 */
export function convertToRomanNumeralVinculum(req, res) {

    let {
        query
    } = req.query;

    let converted;

    try {
        converted = numberConverterService.convertToRomanNumeralVinculum(query);
    } catch (err) {
        res.status(err.output.statusCode).json(err.output.payload);
        return;
    }

    res.status(200);
    res.send(converted);
}