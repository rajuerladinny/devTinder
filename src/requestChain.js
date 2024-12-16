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
