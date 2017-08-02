const express = require("express");
const app = express();
const PORT = 3000;
const users = require("../data/friends.js");

exports.peopleJSON = function(req,res){
  res.json(users.people);
};

// console.log(users.people);
exports.newFriend =  function(req,res){
  var newFriend = req.body;
  console.log(newFriend);
  // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  // console.log(newFriend);
  users.people.push(newFriend);
  // res.json(newFriend);
};
