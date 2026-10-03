const express = require("express");
const connection = require("./src/config/connection");

const app = express();
app.use(express.json());

const port = 4000;

connection();

app.listen(port, () => {
  try {
    console.log("server is running on", port);
  } catch (error) {
    console.log(error.message);
  }
});

app.use("/", (req, res) => {
  try {
    res.send("server is up and running");
  } catch (error) {
    res.send(error.message);
  }
});