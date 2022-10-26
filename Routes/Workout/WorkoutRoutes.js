const express = require("express");
const router = express.Router();
const workout_ctrl = require("../../Controllers/Workout/WorkoutController");
const { verifyToken } = require("../../Controllers/validationMiddleware");

router.use("/", verifyToken, (req, res, next) => {
	next();
});
router.put("/:userid", workout_ctrl.putWorkout);
router.get("/:userid", workout_ctrl.getWorkouts);
module.exports = router;
