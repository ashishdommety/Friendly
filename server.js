const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// const htmlRoutes = require("./app/routing/htmlRoutes.js");
// const apiRoutes = require("./app/routing/apiRoutes.js");

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

app.get("/", function(req,res){
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
})

app.get("/api/friends", function(req,res){
  res.json();
})

app.post("/api/friends", function(req,res){
  res.json();
})

app.listen(PORT, function(){
  console.log("Listening on port: " + PORT);
});
