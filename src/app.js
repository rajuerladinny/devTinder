const express = require("express");

const app = express();

// This will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Raju", lastName: "E" });
});

app.post("/user", (req, res) => {
  // saving data to DB
  res.send("Data saved in the database successfully");
});

app.delete("/user", (req, res) => {
  res.send("User deleted successfully");
});

app.use("/test", (req, res) => {
  res.send("Hello !!!");
});

app.listen(3000, () => {
  console.log("Server is listening to the port 3000 successfully");
});
