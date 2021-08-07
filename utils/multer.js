const multer = require('multer');
const { extname } = require('path');
const multerS3 = require('multer-s3');
const {storage} = require('./s3_config');

const fileFilter = (req, file, cb) => {
  let ext = extname(file.originalname);
  if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
    cb(new Error('File type is not supported'), false);
    return;
  }
  cb(null, true);
};

// Multer config
const multerConfig = {
  storage: multerS3(storage),
  limits: { fileSize: 4 * 1024 * 1024 },
  fileFilter: fileFilter,
};

module.exports = multer(multerConfig);
