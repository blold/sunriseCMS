// import * as Winston from 'winston';
const Winston = require('winston');
let WSDF = require('winston-daily-rotate-file');

/**
 * Set up log directory
 */
const logDir = '../log';

/**
 * Set up config level and matching color
 */
const config = {
	levels: {
		error: 0,
		debug: 1,
		warn: 2,
		data: 3,
		info: 4,
		verbose: 5,
		silly: 6,
		custom: 7,
	},
	colors: {
		error: 'red',
		debug: 'blue',
		warn: 'yellow',
		data: 'grey',
		info: 'green',
		verbose: 'cyan',
		silly: 'magenta',
		custom: 'yellow',
	},
};
Winston.addColors(config.colors);

/**
 * Set up daily rotate file configuration
 */
const dailyRotateFileTransport = new WSDF({
	filename: `${logDir}/%DATE%-results.log`,
	datePattern: 'YYYY-MM-DD',
});

/**
 * Set up Winston logger configuration
 */
const Logger = Winston.createLogger({
	levels: config.levels,
	format: Winston.format.combine(
		Winston.format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss',
		}),
		Winston.format.printf(
			info => `${info.timestamp} ${info.level}: ${info.message}`
		)
	),
	transports: [
		new Winston.transports.Console({
			format: Winston.format.combine(
				Winston.format.colorize({ all: true }),
				Winston.format.printf(
					info => `${info.timestamp} ${info.level}: ${info.message}`
				)
			),
		}),
		dailyRotateFileTransport,
	],
	level: 'custom',
	// The below is to set up Winston custom level and color with the level log method
});

// export { Logger };
module.exports = Logger;
// Logger.error('err2');
