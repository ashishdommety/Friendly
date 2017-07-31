const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// const htmlRoutes = require("./app/routing/htmlRoutes.js");

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});
app.get("/", function(req,res){
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
})

app.listen(PORT, function(){
  console.log("Listening on port: " + PORT);
});
