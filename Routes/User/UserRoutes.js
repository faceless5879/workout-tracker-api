const express = require("express");
const router = express.Router();
const user_ctrl = require("../../Controllers/User/UserController");
const {
	validatePostUser,
	verifyToken,
} = require("../../Controllers/validationMiddleware");

router.get("/:userid", verifyToken, user_ctrl.getUser);
router.put("/:userid", user_ctrl.putUser);
router.post("/login", user_ctrl.login);
router.post("/signup", validatePostUser, user_ctrl.signup);
module.exports = router;
