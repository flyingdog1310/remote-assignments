//Express
import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import { getUser, getEmail, createUser } from "./database.js";

const app = express();
const port = 3000;
app.use(express.json());
//Pug
app.set("view engine", "pug");
//parser
const upload = multer();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//directory render
app.get("/", async (req, res) => {
  res.render("index");
});
app.get("/member_page", async (req, res) => {
  res.render("member");
});

//signUp
app.post("/sign_up", upload.array(), async (req, res) => {
  const { email, password } = req.body;
  const newEmail = await getEmail(email);
  if (newEmail[0] == undefined) {
    const newUser = await createUser(email, password);
    res.redirect("/member_page");
  } else {
    res.send(
      '<script>alert("Your email had been used. Please use a new email"); window.location.href = "/"; </script>'
    );
  }
});
//signIn
app.post("/sign_in", upload.array(), async (req, res) => {
  const { email, password } = req.body;
  const oldUser = await getUser(email, password);
  if (oldUser[0] == undefined) {
    res.send(
      '<script>alert("Your email or password is wrong. Please try again."); window.location.href = "/"; </script>'
    );
  } else {
    res.redirect("/member_page");
  }
});

//404error
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//500error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//Port
app.listen(port, () => {
  console.log(`App is currently running on port ${port}`);
});
