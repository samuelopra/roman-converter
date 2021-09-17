import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import logger from "./utils/logger";
import numberConverterRouter from "./routes/numberConverter.js";
import swaggerSpec from "./utils/swagger";

dotenv.config();

const app = express();

app.use(require("express-status-monitor")());
app.use(
  morgan("combined", {
    stream: logger.stream
  })
);
app.use(morgan("common"));
//const router = express.Router();
const PORT = process.env.PORT || 9090;

app.use(express.json());

const swaggerUI = require("swagger-ui-express");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use("/", numberConverterRouter);

//so port does not conflict while running jest tests
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () =>
    console.log(`It's alive on port: http://localhost:${PORT}`)
  );
}

export default app;
