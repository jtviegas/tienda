import winston from 'winston';
import config from '../config';

const logger = winston.createLogger(config.WINSTON_CONFIG);

export default logger;

