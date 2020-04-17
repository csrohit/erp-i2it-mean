"use strict";
const {createLogger, format, transports } = require('winston');
const {combine, timestamp, printf, json } = format;

const myFormat = printf(({ level, message, timestamp}) => { return `[${timestamp}] ${level}: ${message}`});

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    // json()
  ),
  transports: [
    //TODO enable file transports before deployment
    // new transports.File({
    //   filename: 'error.log',
    //   level: 'error'
    // }),
    // new transports.File({
    //   filename: 'combined.log'
    // })
  ]
});


if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: combine(
      format.colorize({
        all: true
      }),
      myFormat,
      format.simple()
    )
  }));
}

module.exports = logger;