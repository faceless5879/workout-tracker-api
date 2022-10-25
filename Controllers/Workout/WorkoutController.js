const express = require("express");
const { ERROR_MSGS } = require("../../Configs/Constants");

const WorkoutController = {
  getWorkout: async (req, res) => {
    try {
      const { workoutid } = req.params;
      console.log(workoutid);
      if (workoutid === undefined) {
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

module.exports = WorkoutController;
