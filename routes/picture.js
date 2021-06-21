const path = require('path'); 
const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({
    dest: path.join(__dirname, '../public/uploads/')
});

router.post('/', upload.single('some'), (req, res) => {
    console.log(req.file);
    res.json({ status: 'ok' });
});

module.exports = router;
