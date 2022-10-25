const express = require("express");
const router = express.Router();
const exercise_ctrl = require("../../Controllers/Exercise/ExerciseController");
const { verifyToken } = require("../../Controllers/validationMiddleware");

router.use("/", verifyToken, (req, res, next) => {
  next();
});
router.get("/:exerciseid", exercise_ctrl.getExercise);
module.exports = router;
