const express = require("express");
const { ERROR_MSGS } = require("../../Configs/Constants");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const knex = require("../../db/index");

const UserController = {
  getUser: async (req, res) => {
    try {
      const { userid } = req.params;
      console.log(userid);
      if (userid === undefined) {
        res.status(500).json({ message: ERROR_MSGS.INTERNAL_SERVER_ERROR });
        return;
      }
      res.status(200).json({ message: "success" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ERROR_MSGS.INTERNAL_SERVER_ERROR });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(email, password);

      if (email === undefined) {
        res.status(500).json({ message: ERROR_MSGS.INTERNAL_SERVER_ERROR });
        return;
      }

      const data = await knex
        .select("*")
        .from("user")
        .where({ email: email, password: password });
      console.log(data);

      if (data.length > 0) {
        const token = jwt.sign(
          {
            firstName: data[0]["first_name"],
            lastName: data[0]["last_name"],
            userid: data[0]["id"],
          },
          process.env.JWT_SECRET || "my_secret",
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({ token: token });
        return;
      }
      res.status(401).json({ error: ERROR_MSGS.VALIDATION_ERROR });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ERROR_MSGS.INTERNAL_SERVER_ERROR });
    }
  },
  signup: async (req, res) => {
    try {
      const { email, password, firstName, lastName, height, weight } = req.body;
      console.log(email, password, firstName, lastName, height, weight);
      const token = jwt.sign(
        { email: email },
        process.env.JWT_SECRET || "my_secret",
        {
          expiresIn: "1h",
        }
      );
      res.status(201).json({ token: token });
      return;
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ERROR_MSGS.INTERNAL_SERVER_ERROR });
    }
  },
};

module.exports = UserController;
