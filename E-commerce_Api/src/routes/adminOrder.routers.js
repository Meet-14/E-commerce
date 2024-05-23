const express = require("express")
const router = express.Router();

const orderController = require("../controller/adminOrder.controller.js");
const authenticate = require("../middlewere/authenticate.js");


router.get("/",orderController.getAllOrders);
router.put("/:orderId/confirmed",authenticate,orderController.confirmedOrders)
router.put("/:orderId/ship",authenticate,orderController.shiPPOrders)
router.put("/:orderId/deliver",authenticate,orderController.deliverOrders)
router.put("/:orderId/cancle",authenticate,orderController.cancleOrders)
router.delete("/:orderId/delete",authenticate,orderController.deleteOrders)

module.exports = router 


