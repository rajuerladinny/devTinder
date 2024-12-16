const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
  res.send("User logged in successfully");
});

app.get("/user", userAuth, (req, res) => {
  res.send("user sent data");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("sent all data");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted user");
});

app.listen(3000, () => {
  console.log("Server is listening to the port 3000 successfully");
});
