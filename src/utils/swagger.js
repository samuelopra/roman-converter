import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import dotenv from "dotenv";
dotenv.config();

/**
 * Swagger definition.
 */
const swaggerDefinition = {
    info: {
        title: process.env.APP_NAME || 'shit',
        version: process.env.APP_VERSION,
        description: process.env.APP_DESCRIPTION
    },
};

/**
 * Options for the swagger docs.
 */
const swaggerOptions = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: [
        path.join(__dirname, '/../routes/*.js')
    ]
};

/**
 * Initialize swagger-jsdoc.
 */
const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;