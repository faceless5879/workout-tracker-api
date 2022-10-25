const express = require("express");
const { ERROR_MSGS } = require("../../Configs/Constants");
require("dotenv").config();
const jwt = require("jsonwebtoken");
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
      if (email === "123@123.com" && password === "123") {
        const token = jwt.sign(
          { username: "username" },
          process.env.JWT_SECRET || "my_secret",
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({ token: token });
        return;
      }
      res.status(200).json({ error: "Login failed" });
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
