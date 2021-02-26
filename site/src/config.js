import winston from 'winston';

const config = {
        STAGES: ['local', 'dev', 'test', 'prod']
        , ENVS: ['dev', 'test', 'prod']
        , WINSTON_CONFIG: {
            level: 'debug',
            format: winston.format.combine(
                winston.format.splat(),
                winston.format.timestamp(),
                winston.format.printf(info => {
                    return `${info.timestamp} ${info.level}: ${info.message}`;
                })
            ),
            transports: [new winston.transports.Console()]
        }

    };

export default config;

