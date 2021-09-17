# Roman Numeral Converter

## Table of Contents

- [About](#about)
- [Information](#references)
- [Getting Started](#getting_started)
- [Dependencies](#dependencies)
- [Logging](#logging)
- [API Documentation](#apidocs)
- [Monitoring](#monitoring)
- [Development](#development)
- [Package Layout](#package-layout)
- [Testing](#testing)
- [Error Handling](#errors)

## About <a name = "about"></a>

The goal of the project is to provide a REST API endpoint to convert numerical values into Roman Numerals.
The integer values must be between 1 and 2,200,000,000 (inclusive) and the URL format is http://localhost:8080/romannumeral?query={integer}

## Information <a name = "references"></a>

- Handling Roman numerals above 3,999 requires a different notation. [Roman Numeral Vinculum Representation](http://roman-numerals.20m.com/)

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes/

### Prerequisites

#### NodeJS must be installed

[Install Node here](http://nodejs.org/)

### Dependencies <a name = "dependencies"></a>

- [express.js](https://www.npmjs.com/package/express) : web application framework for node
- [@hapi/boom](https://www.npmjs.com/package/@hapi/boom) : web application http error framework
- [esm](https://www.npmjs.com/package/esm) : fast module loader
- [nodemon](https://www.npmjs.com/package/nodemon) : develop without restarting application
- [dotenv](https://www.npmjs.com/package/dotenv) : load environment variables
- [morgan](https://www.npmjs.com/package/morgan): middleware for http request logging
- [winston](https://www.npmjs.com/package/winston): middleware to save logs to a file
- [blns](https://www.npmjs.com/package/blns): Big List of Naughty Strings to test for malicious input
- [express-status-monitor](https://www.npmjs.com/package/express-status-monitor): Set up health monitoring
- [babel](https://www.npmjs.com/package/@babel/core) : javascript transpiler since im using ES6 syntax
- [jest](https://www.npmjs.com/package/jest) : popular unit testing framework
- [supertest](https://www.npmjs.com/package/supertest) : higher level abstraction to test http API calls

### Installing

1. Clone the application

```
git clone
```

2. Install all dependencies from the root project directory

```
npm install
```

3. Once all dependencies are installed, then in the root directory, **run**:

```
npm run dev
```

4. After the server successfully starts, use your browser or querying tool to access the API endpoint

#### endpoint:

http://localhost:8080/romannumeral?query={integer} `where {integer} is any integer between 1 and 2,200,000,000 (inclusive)`

Example Input

```
http://localhost:8080/romannumeral?query=59
```

## Logging <a name = "logging"></a>

Logs output to the console and saves to logs/server.log and clears after 14 days. You will be able to see information such as the endpoint hit, status, date and browser executed.

## API Documentation <a name = "apidocs"></a>

[When you have your application running](#getting_started), you can view the full API documentation by going to this URL here:
`http://localhost:8080/api-docs/`
Swagger enables you to automatically generate API documentation through swaggerdocs in code.

## Health Monitoring <a name = "monitoring"></a>

Real-time monitoring is important for applciation performance and efficiency. It will allow you to see issues and potential outages before they happen. We used express-status-monitor to use dashboards to see important health information about our application. It is a simple, self-hosted module that uses Socket.io and Chart.js under the hood to report realtime server metrics for Express-based node servers.

[After starting the application](#getting_started), the dashboard can be accessed at `http://localhost:8080/status`

## Development steps and Principals <a name = "development"></a>

### 1. Understanding and Requirements

A considerable amount of time must be spent reading over the problem and understanding the input and output. This is where we brainstorm and think of any edgecases we might have. This is also where we read any Roman Numeral documentation, along with its Vinculum representations and understand what we have to output.

### 2. Application Design

After understanding requirements, we can now choose the tools, technologies, libraries and frameworks we will use in our development. We know that we have to build a lightweight API, so NodeJS with Express was a good choice. A simple and efficient testing framework was necessary as well, so we went with jest and supertest since we will use http calls. Since external users will be using our application, it was best to keep it lightweight and easy to use, which is why we chose these tools.

### 3. Test Driven Development

After choosing our tools and frameworks, we can start writing out unit tests in jest. Since we know the required numerical inputs, we can compare to an expected output befoee we begin development. We already thought of the edge cases in our analysis. This is where we can create our edge case tests. For example: no input, input out of range or invalid integers.

### 4. Separation of Concerns

One of the themes throughout development of this project has been a separation of concerns. Each module should accomplish one thing only. We will explain further in the Package Layout(#package-layout). One of the goals of this project was to make each function and component easy to understand and test and simulate production level structure.

## Package Layout <a name = "package-layout"></a>

```
roman-converter/
    node_modules/
    src/
        controllers/
            numberConverter.js
        routes/
            numberConverter.js
        services/
            numberConverterService.js
        utils/
            constants.js
            RomanMapBuilder.js
        index.js
    test/
        controllers/
            numberConverter.spec.js
        services/
            numberConverterService.spec.js
    logs/
        server.log
    .env
    .babelrc
    jest.config.js
    package.json
    package-lock.json
    README.md
```

- **controllers**: Receives the http requests and returns the results

- **routes**: Contains the routes for the client to access the server

- **utils**: Contains constants and helper functions

- **services**: Contains all logic and does conversions to roman numeral

- **test**: Contains all the application unit and integration tests

## Testing <a name = "testing"></a>

- **unit tests**: written with [jest](https://www.npmjs.com/package/jest), tests multiple inputs, edge cases, negatives, strings
- **integration tests**: written with jest and [supertest](https://www.npmjs.com/package/supertest), tests request calls and invalid routes.

### Run tests with

`npm run test`

## Error Handling <a name = "errors"></a>

We have 3 types of errors:

### Value is out of range (Below 1 or above 2,200,000,000)

This will map to CONVERTER_ERRORS.OUT_OF_RANGE, which will return a \_400 Bad Request\* with data in a JSON Object.

```
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "Number must be between 1 and 2200000000 (inclusive)"
}
```

### User has not entered a value or invalid query param

This will map to CONVERTER_ERRORS.NO_ENTRY, which will return a \_400 Bad Request\* with data in a JSON Object.

```
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "No number entered"
}
```

### User enters invalid data like NaN, decimal, string

This will map to CONVERTER_ERRORS.INVALID_NUMBER, which will return a \_400 Bad Request\* with data in a JSON Object.

```
{
"statusCode": 400,
"error": "Bad Request",
"message": "Must be a valid number"
}
```
