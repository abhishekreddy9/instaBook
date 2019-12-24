const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
const Post = require("./models/post");
const db = mongoose.connection;

app.get("/", function(req, res) {
  res.send("Hello World");
});

mongoose
  .connect("mongodb://localhost/instaBook", { useNewUrlParser: true })
  .then(() => {
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function() {
      console.log("Database Connection Established");
    });
  })
  .then(() => {
    User.findById("5e01f389cb1e835d6e2a7975").then(user => {
      if (!user) {
        console.log("usernotfound");
        user = new User({
          name: "abhishek",
          email: "abhishekreddy.srdy@gmail.com"
        });
        user.save();
      }
    });
  })
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log("Server Started Succesfully");
});
