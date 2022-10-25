const express = require("express");
require("dotenv").config();
const { ERROR_MSGS } = require("../../Configs/Constants");

const ExerciseController = {
  getExercise: async (req, res) => {
    try {
      const { exerciseid } = req.params;
      console.log(exerciseid);
      if (exerciseid === undefined) {
        res.status(500).json({ message: ERROR_MSGS.INTERNAL_SERVER_ERROR });
        return;
      }
      res.status(200).json({ message: "success" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ERROR_MSGS.INTERNAL_SERVER_ERROR });
    }
  },
};

module.exports = ExerciseController;
