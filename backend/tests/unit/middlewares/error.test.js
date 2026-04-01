const httpStatus = require('http-status');
const { errorConverter, errorHandler } = require('../../../src/middlewares/error');
const ApiError = require('../../../src/utils/ApiError');

describe('Error middleware', () => {
  describe('errorConverter', () => {
    test('should convert non-ApiError to ApiError', () => {
      const err = new Error('some error');
      const next = jest.fn();

      errorConverter(err, {}, {}, next);

      const converted = next.mock.calls[0][0];
      expect(converted).toBeInstanceOf(ApiError);
      expect(converted.statusCode).toBe(httpStatus.INTERNAL_SERVER_ERROR);
    });

    test('should leave ApiError unchanged', () => {
      const apiErr = new ApiError(httpStatus.BAD_REQUEST, 'bad request');
      const next = jest.fn();

      errorConverter(apiErr, {}, {}, next);

      expect(next.mock.calls[0][0]).toBe(apiErr);
    });
  });
});
