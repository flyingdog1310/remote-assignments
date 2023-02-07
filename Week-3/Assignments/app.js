//Express
const express = require("express");
const app = express();
const port = 3000;

//Parsers & Pug
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.set("view engine", "pug");

// serve static sum.html files
app.use(express.static("sum"));

//directory-data
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/data", (req, res) => {
  const add = req.query.number;
  if (typeof add === "undefined") {
    res.send("Lack of Parameter");
  } else if (isNaN(add)) {
    res.send("Wrong Parameter");
  } else if (add === "") {
    res.send("Empty string detected");
  } else if (add < 0) {
    res.send("Negative number detected");
  } else {
    //this way is significantly faster than loop
    let sum = ((+add + 1) * +add) / 2;
    res.send(`${sum}`);
  }
});

//directory-Name
app.get("/myName", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("myName", { name: req.cookies.username });
  } else {
    res.render("unknownName");
  }
});

app.get("/trackName", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.app.get("/myName");
  } else {
    res.cookie("username", req.query.name);
    res.redirect("/myName");
  }
});

//404error
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//Port
app.listen(port, () => {
  console.log(`App is currently running on port ${port}`);
});
