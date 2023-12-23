import express from "express";
import { users } from "./data.js";
const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
  res.send(
    users.map((user) => {
      return;
    })
  );
});

app.listen(PORT);
