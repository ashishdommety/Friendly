const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// const htmlRoutes = require("./app/routing/htmlRoutes.js");
// const apiRoutes = require("./app/routing/apiRoutes.js");
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var people = [];

// NOTE: html routes
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

app.get("/", function(req,res){
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
})

// NOTE: api routes
app.get("/api/friends", function(req,res){
  res.json(people);
})

app.post("/api/friends", function(req,res){
  var newFriend = req.body;
  console.log(newFriend);
  // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  // console.log(newFriend);
  people.push(newFriend);
  // res.json(newFriend);
})

app.listen(PORT, function(){
  console.log("Listening on port: " + PORT);
});
