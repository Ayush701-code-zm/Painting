const DEFAULT_PAGE_SIZE = 100;
const MAX_PAGE_SIZE = 100;

/**
 * Build Mongoose query options (limit, skip, sort) from req.query.
 * Enforces a maximum page size to prevent memory exhaustion.
 */
const getQueryOptions = (query = {}) => {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE);
  const skip = (page - 1) * limit;

  const options = { limit, skip };

  if (query.sortBy) {
    const [field, order] = query.sortBy.split(':');
    options.sort = { [field]: order === 'desc' ? -1 : 1 };
  } else {
    options.sort = { createdAt: -1 };
  }

  return options;
};

module.exports = { getQueryOptions };
