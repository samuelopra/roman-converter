import { Router } from "express";

import * as numberConverterController from "../controllers/numberConverter.js";

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
  "/romannumeral",
  numberConverterController.convertToRomanNumeralVinculum
);

numberConverterRouter.get("*", (req, res) => {
  res.status(404).json({
    statusCode: 404,
    error: "Not Found",
    message: "URL not found"
  });
});

export default numberConverterRouter;
