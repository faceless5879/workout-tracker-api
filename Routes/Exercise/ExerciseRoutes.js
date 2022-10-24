const express = require("express");
const router = express.Router();
const exercise_ctrl = require("../../Controllers/Exercise/ExerciseController");
router.get("/:exerciseid", exercise_ctrl.getExercise);
module.exports = router;
