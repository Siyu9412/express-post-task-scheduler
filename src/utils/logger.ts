import winston, { format } from "winston";

const customFormat = format.printf(({ message }) => {
  return `${message}`;
});

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: format.colorize({ all: true }),
    }),
  ],
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    customFormat
  ),
});
