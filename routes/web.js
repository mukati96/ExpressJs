var express = require('express');
const router = express.Router();
var productController = require('../controller/productController.js');

router.get('/' , productController.getAllDoc)
router.post('/', productController.createDoc)
router.get('/:id', productController.getDocById)
router.put('/:id', productController.updateDoc)
router.delete('/:id', productController.deleteDoc)

module.exports = router;