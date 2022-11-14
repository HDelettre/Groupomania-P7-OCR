const multer = require('multer');

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png"
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (file.fieldname === 'file') {
      callback(null, "pictures/messages");
    } else {
      callback(null, "pictures/profile");
    }
  },

  filename: (req, file, callback) => {
    const fileExtension = MIME_TYPES[file.mimetype];
    let fileName = "";
    if (file.fieldname === 'file') {
      const name = file.originalname.split(' ').join('_');
      fileName = name.split('.')[0] + '_' + Date.now() + '.' + fileExtension;
    } else {
      fileName = req.params.id + '.' + fileExtension;
    }
    callback(null, fileName);
  }
})

module.exports = multer({ storage : storage }).fields([
  {name:'file', maxCount: 1},
  {name: 'profile', maxCount: 1}
]);