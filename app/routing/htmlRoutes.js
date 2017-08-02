const express = require("express");
const path = require("path");

const app = express();

exports.survey = function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
};
exports.home =function(req,res){
  res.sendFile(path.join(__dirname, "../public/home.html"));
};

// NOTE: exported functions sent over to server.js
