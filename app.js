const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const db = require("./config/MongooseConnection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//routes
app.get("/ejs", (req, res) => {
  res.render("index", { title: "EJS Example" });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
