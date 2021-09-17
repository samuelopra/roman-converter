import fs from 'fs';
import winston, {
    format
} from 'winston';
import dotenv from 'dotenv';
dotenv.config();

// Use LOG_DIR from env
const LOG_DIR = process.env.LOG_DIR || 'logs';
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

// Create log directory if it does not exist
if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR);
}


const options = {
    file: {
        format: format.combine(
            format.errors({
                stack: true
            })
        ),
        level: LOG_LEVEL,
        filename: `${LOG_DIR}/server.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: '14d',
        colorize: false,
    },
    console: {
        format: format.combine(
            format.errors({
                stack: true
            })
        ),
        level: LOG_LEVEL,
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

/**
 * create new instance of a winston logger.
 */
var logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

// create a stream that will be used by `morgan`
logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    },
};

export default logger;