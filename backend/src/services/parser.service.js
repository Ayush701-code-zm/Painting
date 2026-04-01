const formidable = require('formidable');
const { Transform } = require('stream');
const { S3Client } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');
const { GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const config = require('../config/config');
const logger = require('../config/logger');

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];

const s3Client = new S3Client({
  region: config.aws.region,
  credentials: {
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
  },
});

const Bucket = config.aws.s3Bucket;

/**
 * Stream-upload a multipart form file directly to S3 (private ACL).
 */
const parsefile = async (req) => {
  return new Promise((resolve, reject) => {
    const form = formidable({
      maxFileSize: MAX_FILE_SIZE,
      allowEmptyFiles: false,
    });

    const uploadResults = [];

    form.on('fileBegin', (formName, file) => {
      // Validate MIME type early
      file.open = async function () {
        this._writeStream = new Transform({
          transform(chunk, encoding, callback) {
            callback(null, chunk);
          },
        });

        new Upload({
          client: s3Client,
          params: {
            ACL: 'private',
            Bucket,
            Key: `${Date.now()}-${this.originalFilename}`,
            Body: this._writeStream,
            ContentType: this.mimetype,
          },
          partSize: 1024 * 1024 * 5, // 5 MB parts
        })
          .done()
          .then((data) => {
            form.emit('data', { name: 'complete', value: data });
          })
          .catch((err) => {
            form.emit('error', err);
          });
      };
    });

    form.on('data', ({ name, value }) => {
      if (name === 'complete') {
        uploadResults.push(value);
      }
    });

    form.on('error', (err) => reject(err));

    form.parse(req, (err) => {
      if (err) return reject(err.message);
      resolve(uploadResults);
    });
  });
};

/**
 * Generate a time-limited presigned GET URL for a private S3 object.
 */
const getPresignedUrl = async (key, expiresIn = 86400) => {
  const command = new GetObjectCommand({ Bucket, Key: key });
  try {
    const url = await getSignedUrl(s3Client, command, { expiresIn });
    return url;
  } catch (error) {
    logger.error('Error generating presigned URL:', error);
    throw error;
  }
};

module.exports = {
  parsefile,
  getPresignedUrl,
};
