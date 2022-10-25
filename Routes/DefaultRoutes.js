const express = require("express");
const router = express.Router();
router.use((req, res, next) => {
  console.log("Time: ", new Date());
  next();
});
router.get("/", (req, res) => {
  res.redirect("https://www.google.com");
});
module.exports = router;
