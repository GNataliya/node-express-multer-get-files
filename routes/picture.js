const fs = require('fs');
const path = require('path'); 
const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({
    dest: path.join(__dirname, '../public/uploads/')
});

router.post('/', upload.single('some'), (req, res) => {
    //console.log(req.file);
    //console.log(req.body);
    const hesh = req.file.filename
    const clientName = req.body.name;
    console.log(hesh)
    console.log(clientName)
    const rename = fs.rename(hesh, clientName, (err) => {
        if (err) throw err;
        console.log('Rename complete!');
      });

    res.json({ status: 'ok' });
});


module.exports = router;
