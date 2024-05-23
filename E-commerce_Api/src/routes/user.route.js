const express = require("express")
const router = express.Router();
const userController = require("../controller/user.controller.js");
const authenticate = require("../middlewere/authenticate.js");

router.get("/profile",authenticate,userController.getUserProfile);
router.get("/",userController.getAllUser);

module.exports = router