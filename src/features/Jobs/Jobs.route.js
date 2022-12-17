const express = require("express");
const Jobs = require("./Jobs.model");

const app = express.Router();

app.get("/", async (req, res) => {
  let jobs = await Jobs.find();
  res.send(jobs);
});

// app.get("/:id", async (req, res) => {
//   const { id } = req.params;

//   const token = req.headers["authorization"];
//   if (!token) {
//     return res.status(401).send("Unauthorized");
//   }
//   try {
//     const verification = jwt.verify(token, "SECRET12345");
//     console.log("verification",verification);
//     const user = await Users.findById(id);
//     res.send(user);
//   } catch(e) {
//     console.log(e.message)
//     return res.status(401).send("Token is invalid");
//   }
// });

app.post("/", async (req, res) => {
  try {
    let job = await Jobs.create(req.body);
    res.send(job);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;
