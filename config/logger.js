"use strict";
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, prettyPrint } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const logger = createLogger({
    level:'info',
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.json()
    ),
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
      ],
      exceptionHandlers: [
        new transports.File({ filename: 'exceptions.log' })
      ]
});


if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
      format: combine(
        format.colorize({ all: true }),
        myFormat,
        // format.simple()
      )
    }));
  }

  module.exports = logger;