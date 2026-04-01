const cron = require('node-cron');
const logger = require('../config/logger');

/**
 * Placeholder: replace with actual AssignedOrder model import when the model exists.
 * const { AssignedOrder } = require('../models');
 */

const updateNonAssignedOrders = async () => {
  // Stub: implement order assignment logic here
  logger.info('updateNonAssignedOrders: ran (stub)');
};

const updateNonCancelledOrders = async () => {
  // Stub: implement order cancellation logic here
  logger.info('updateNonCancelledOrders: ran (stub)');
};

const updateAssignedOrders = () => {
  // Runs every minute: * * * * *
  cron.schedule('* * * * *', async () => {
    try {
      await updateNonCancelledOrders();
      await updateNonAssignedOrders();
      logger.info('updateAssignedOrders cron completed');
    } catch (error) {
      logger.error('updateAssignedOrders cron failed: ' + JSON.stringify(error.message));
    }
  });
};

module.exports = updateAssignedOrders;
