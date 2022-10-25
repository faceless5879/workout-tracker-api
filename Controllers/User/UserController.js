const express = require("express");
const UserController = {
  getUser: async (req, res) => {
    try {
      const { userid } = req.params;
      console.log(userid);
      if (userid === undefined) {
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

module.exports = UserController;
