const express = require("express");
const router = express.Router();
const workout_ctrl = require("../../Controllers/Workout/WorkoutController");
const { verifyToken } = require("../../Controllers/validationMiddleware");

router.use("/", verifyToken, (req, res, next) => {
  next();
});
router.get("/:workoutid", workout_ctrl.getWorkout);
module.exports = router;
