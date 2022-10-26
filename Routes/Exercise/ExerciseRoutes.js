const express = require("express");
const router = express.Router();
const exercise_ctrl = require("../../Controllers/Exercise/ExerciseController");
const { verifyToken } = require("../../Controllers/validationMiddleware");

router.use("/", verifyToken, (req, res, next) => {
	next();
});
router.put("/:exerciseid", exercise_ctrl.putExercise);
router.get("/:workoutid", exercise_ctrl.getExercises);
module.exports = router;
