import {
  Router
} from "express";
import {
  ROMAN_CONVERTER_APP_ROUTE,
  NOT_FOUND_ERR
} from "../utils/constants";
import Boom from '@hapi/boom';
import * as numberConverterController from "../controllers/numberConverter";

const numberConverterRouter = Router();

/**
 * @swagger
 * /romannumeral:
 *   get:
 *     tags:
 *      - numberConverter
 *     description: Convert numeric value to roman numeral in Vinculum
 *     parameters:
 *      - query: string
 *        description: number to convert
 *        in: query
 *        name: query
 *        schema:
 *         type: string
 *         default: 0
 *     responses:
 *       200:
 *         description: Success
 *         content: plain/text
 */
numberConverterRouter.get(
  ROMAN_CONVERTER_APP_ROUTE,
  numberConverterController.convertToRomanNumeralVinculum
);

numberConverterRouter.get("*", (req, res) => {
  res.status(404).json(Boom.notFound(NOT_FOUND_ERR).output);
});

export default numberConverterRouter;