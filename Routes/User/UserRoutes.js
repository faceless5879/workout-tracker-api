const express = require("express");
const router = express.Router();
const user_ctrl = require("../../Controllers/User/UserController");
router.get("/:userid", user_ctrl.getUser);
module.exports = router;
