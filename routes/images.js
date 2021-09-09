const express = require('express');
const imageController = require('../controllers/image.controller');
const imageUploader = require('../helpers/image-uploader');



const router = express.Router();

router.post('/upload',imageUploader.upload.single('file'), imageController.upload);


module.exports = router; 