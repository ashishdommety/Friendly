const express = require("express");

const app = express();

const PORT = 3000;

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
