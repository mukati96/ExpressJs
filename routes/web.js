var express = require('express');
const router = express.Router();
var productController = require('../controller/productController.js');
const multer = require('multer');

const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'images', 
    filename: function(req, file, callback) {
        callback(null, Date.now() + "-" + file.originalname);
    }
});

var upload = multer({ storage: imageStorage })

router.get('/' , productController.getAllDoc)
router.post('/', upload.single('image'), productController.createDoc)
router.get('/:id', productController.getDocById)
router.put('/:id', productController.updateDoc)
router.delete('/:id', productController.deleteDoc)

module.exports = router;