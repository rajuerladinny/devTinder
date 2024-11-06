const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello from the server nodemon2");
});

app.use("/test", (req, res) => {
  res.send("Hello !!!");
});

app.listen(3000, () => {
  console.log("Server is listening to the port 3000 successfully");
});
