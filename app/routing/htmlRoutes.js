const express = require("express");

const app = express();

const PORT = 3000;

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/survey.html"));
});
app.get("/", function(req,res){
  res.sendFile(path.join(__dirname, "./public/home.html"));
})

// NOTE: working on server.js file directly
