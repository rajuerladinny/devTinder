const express = require("express");

const app = express();

const connectDB = require("./config/database");
const User = require("./models/user");

// creating signup api
app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    emailId: "rajurastogi015@gmail.com",
    password: "Virat@123",
    gender: "M",
  });

  try {
    await user.save();
    res.send("User saved successfully");
  } catch (err) {
    res.status(400).send("Error saving user" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");

    app.listen(3000, () => {
      console.log("Server is listening to the port 3000 successfully");
    });
  })
  .catch((err) => {
    console.error("Error connecting Database");
  });
