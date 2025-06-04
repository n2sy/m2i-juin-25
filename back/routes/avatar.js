const express = require("express");
var multer = require("multer");
const avatarCtrl = require("../controllers/avatar");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
};

const upload = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const name =
      file.originalname.toLowerCase().split(".")[0] + "-" + Date.now();
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "." + ext);
  },
});

const router = express.Router();
router.post(
  "",
  multer({ storage: upload }).single("avatar"),
  avatarCtrl.postAvatar
);
module.exports = router;
