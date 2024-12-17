const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/user", [
  (req, res, next) => {
    console.log("user response");
    next();
  },
  (req, res, next) => {
    console.log("User response 2");
    //res.send("successfully sent response 2");
    next();
  },
  (req, res, next) => {
    console.log("User response 3");
    //res.send("successfully sent response 3");
    next();
  },
  (req, res, next) => {
    console.log("User response 4");
    //res.send("successfully sent response 4");
    next();
  },
  (req, res) => {
    console.log("User response 5");
    res.send("successfully sent response 5");
  },
]);

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

//Error Handling
app.get("/getUserData", (req, res) => {
  try {
    throw new Error("dgdgsgasd");
    res.send("sent user data");
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});
