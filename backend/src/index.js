const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');

let server;

// ─── Database Connection ─────────────────────────────────────
mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    logger.info('Connected to MongoDB');

    server = app.listen(config.port, () => {
      logger.info(`Listening on port ${config.port}`);
    });

    // ─── Cron Jobs ──────────────────────────────────────────
    require('./crons/index');
  })
  .catch((error) => {
    logger.error('MongoDB connection error: ' + error.message);
    process.exit(1);
  });

// ─── Graceful Shutdown ───────────────────────────────────────
let isShuttingDown = false;

const exitHandler = () => {
  if (isShuttingDown) return;
  isShuttingDown = true;

  logger.info('Starting graceful shutdown');

  if (server) {
    server.close(() => {
      logger.info('HTTP server closed');

      mongoose.connection.close(false, () => {
        logger.info('MongoDB connection closed');
        process.exit(0);
      });
    });
  } else {
    process.exit(0);
  }

  // Force shutdown after 30 s if something hangs
  setTimeout(() => {
    logger.error('Forced shutdown after timeout');
    process.exit(1);
  }, 30000);
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  exitHandler();
});
process.on('SIGINT', () => {
  logger.info('SIGINT received');
  exitHandler();
});
