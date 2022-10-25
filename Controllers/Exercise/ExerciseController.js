const express = require("express");
require("dotenv").config();
const { Pool, Client } = require("pg");
const { ERROR_MSGS } = require("../../Configs/Constants");

const pool = new Pool();
const client = new Client({
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});
client.connect();
const ExerciseController = {
  getExercise: async (req, res) => {
    try {
      const { exerciseid } = req.params;
      const test = await client.query("SELECT * FROM checkins LIMIT 10");
      await client.end();
      console.log(test.rows);
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
