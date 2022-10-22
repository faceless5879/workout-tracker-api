const express = require("express");

const app = express();
const PORT = 3000;

app.use("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running and app is listening on port " + PORT
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
