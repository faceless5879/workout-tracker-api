const express = require("express");
const WorkoutController = {
  getWorkout: async (req, res) => {
    try {
      const { workoutid } = req.params;
      console.log(workoutid);
      if (workoutid === undefined) {
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }
      res.status(200).json({ message: "success" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = WorkoutController;