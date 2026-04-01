const amqplib = require('amqplib');
const config = require('./config');
const logger = require('./logger');

const RETRY_DELAY_MS = 5000;
const MAX_RETRIES = 10;

const initRabbitMq = async (retryCount = 0) => {
  try {
    const connection = await amqplib.connect(config.rabbitmq.url || 'amqp://localhost');
    const channel = await connection.createChannel();

    connection.on('error', (err) => {
      logger.error('RabbitMQ connection error: ' + err.message);
    });

    connection.on('close', () => {
      logger.warn('RabbitMQ connection closed, reconnecting...');
      setTimeout(() => initRabbitMq(), RETRY_DELAY_MS);
    });

    logger.info('Connected to RabbitMQ');
    return channel;
  } catch (error) {
    if (retryCount < MAX_RETRIES) {
      logger.warn(`RabbitMQ unavailable, retrying (${retryCount + 1}/${MAX_RETRIES})...`);
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
      return initRabbitMq(retryCount + 1);
    }
    logger.error('Failed to connect to RabbitMQ after max retries: ' + error.message);
    throw error;
  }
};

module.exports = initRabbitMq;
