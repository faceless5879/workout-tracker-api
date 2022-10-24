const express = require("express");
const router = express.Router();
const workout_ctrl = require("../../Controllers/Workout/WorkoutController");
router.get("/:workoutid", workout_ctrl.getWorkout);
module.exports = router;
