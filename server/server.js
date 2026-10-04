<<<<<<< HEAD
=======
import express from "express";
import connection from "./src/config/connection.js";
import dotenv from "dotenv";
import cors from 'cors'
import authRouter from "./src/router/auth.routers.js";
const app = express();
app.use(express.json());
dotenv.config();

app.use(cors("*"))
const port = 4000;

connection();
app.use(authRouter)

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
>>>>>>> b102703482be1f08ece63088aff35b01e79aaa1c
