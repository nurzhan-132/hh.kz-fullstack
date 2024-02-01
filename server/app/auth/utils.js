const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/company/')
    },
    filename: function (req, file, cb) {
        let ext = file.originalname.split('.');
        ext = ext[ext.length - 1];
        
        const filename = file.originalname + "_" + Date.now() + "." + ext;
        cb(null, filename)
    }
  })
const upload = multer({storage})

module.exports = {
    upload
}