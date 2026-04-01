const mongoose = require('mongoose');
const config = require('../../src/config/config');

/**
 * Call this at the top of every integration test suite.
 * Connects to the test database, clears all collections before each test,
 * and disconnects after the suite.
 */
const setupTestDB = () => {
  beforeAll(async () => {
    await mongoose.connect(config.mongoose.url, config.mongoose.options);
  });

  beforeEach(async () => {
    await Promise.all(
      Object.values(mongoose.connection.collections).map((collection) =>
        collection.deleteMany({})
      )
    );
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
};

module.exports = setupTestDB;
