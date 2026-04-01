const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const { v4: uuidv4 } = require('uuid');

const config = require('./config/config');
const morgan = require('./config/morgan');
const { jwtStrategy } = require('./config/passport');
const { authLimiter } = require('./middlewares/rateLimiter');
const { errorConverter, errorHandler } = require('./middlewares/error');
const routes = require('./routes/v1');
const ApiError = require('./utils/ApiError');

const app = express();

// ─── HTTP Logging (skip in test) ────────────────────────────
if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// ─── Security Headers ────────────────────────────────────────
app.use(helmet());

// ─── Body Parsers ────────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ─── XSS & NoSQL Injection Protection ───────────────────────
app.use(xss());
app.use(mongoSanitize());

// ─── Compression ─────────────────────────────────────────────
app.use(compression());

// ─── Correlation ID ─────────────────────────────────────────
app.use((req, res, next) => {
  const correlationId = req.headers['x-correlation-id'] || uuidv4();
  req.correlationId = correlationId;
  res.setHeader('X-Correlation-ID', correlationId);
  next();
});

// ─── CORS ────────────────────────────────────────────────────
const corsOptions = {
  origin: config.cors.origin,
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// ─── JWT via Passport ────────────────────────────────────────
passport.use('jwt', jwtStrategy);
app.use(passport.initialize());

// ─── Rate Limit Auth Routes (production only) ────────────────
if (config.env === 'production') {
  app.use('/v1/auth', authLimiter);
}

// ─── API Routes ──────────────────────────────────────────────
app.use('/v1', routes);

// ─── 404 Handler ─────────────────────────────────────────────
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// ─── Error Middleware (must be last) ─────────────────────────
app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
