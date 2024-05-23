const express = require("express")
const router = express.Router();

const productController = require("../controller/product.controller.js");
const authenticate = require("../middlewere/authenticate.js");

router.post("/",productController.creteProduct);
router.post("/creates",authenticate,productController.createMultipleProduct);
router.delete("/:id",productController.deleteProduct);
router.put("/:id",productController.updateProduct);

module.exports = router