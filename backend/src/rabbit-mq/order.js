const logger = require('../config/logger');
const initRabbitMq = require('../config/rabbit-mq');

let channel = null;

// ─── Consumers ──────────────────────────────────────────────

const onNewOrder = async () => {
  const queue = 'new-orders';
  await channel.assertQueue(queue, { durable: true });

  channel.consume(
    queue,
    async (msg) => {
      if (!msg) return;
      try {
        const data = JSON.parse(msg.content.toString());
        logger.info({ 'rabbit-mq new-order': data });

        // Process new order logic here

        channel.ack(msg);
      } catch (error) {
        logger.error('Error processing new-order message: ' + JSON.stringify(error.message));
        channel.nack(msg, false, false);
      }
    },
    { noAck: false }
  );
};

const onAssignOrder = async () => {
  const queue = 'assign-orders';
  await channel.assertQueue(queue, { durable: true });

  channel.consume(
    queue,
    async (msg) => {
      if (!msg) return;
      try {
        const data = JSON.parse(msg.content.toString());

        if (!data.orderId || !data.storeId) {
          throw new Error('orderId and storeId are required');
        }

        logger.info({ 'rabbit-mq assign-order': data });

        // Process assign order logic here

        // RPC reply pattern
        if (msg.properties.replyTo) {
          const resultPayload = Buffer.from(JSON.stringify({ assigned: true }));
          channel.sendToQueue(msg.properties.replyTo, resultPayload, {
            correlationId: msg.properties.correlationId,
          });
        }

        channel.ack(msg);
      } catch (error) {
        logger.error('Error processing assign-order message: ' + JSON.stringify(error.message));
        channel.nack(msg, false, false);
      }
    },
    { noAck: false }
  );
};

// ─── Producer ───────────────────────────────────────────────

const sendNotification = async (body) => {
  try {
    if (!body.message) throw new Error('message is required');

    const queue = 'notifications';
    await channel.assertQueue(queue, { durable: true });

    const payload = {
      timestamp: new Date().toISOString(),
      ...body,
    };

    channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)), {
      persistent: true,
    });

    logger.info('Notification sent to queue: ' + JSON.stringify(payload));
  } catch (error) {
    logger.error('Failed to send notification: ' + JSON.stringify(error.message));
  }
};

// ─── Bootstrap ──────────────────────────────────────────────

const start = async () => {
  try {
    channel = await initRabbitMq();
    await onNewOrder();
    await onAssignOrder();
    logger.info('RabbitMQ setup completed and listening for messages.');
  } catch (error) {
    logger.error('Failed to start RabbitMQ: ' + JSON.stringify(error.message));
  }
};

start();

module.exports = { sendNotification };
