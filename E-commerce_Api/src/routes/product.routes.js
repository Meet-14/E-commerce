const express = require("express")
const router = express.Router();

const productController = require("../controller/product.controller.js");
const authenticate = require("../middlewere/authenticate.js");

router.get("/",productController.getAllProduct);
router.get("/id/:id",productController.findProductById);

module.exports = router