const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes.js");

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// NOTE: html routes
app.get("/survey", htmlRoutes.survey);
app.get("/", htmlRoutes.home);

// NOTE: api routes
app.get("/api/friends", apiRoutes.peopleJSON);

app.post("/api/friends", apiRoutes.newFriend);

app.listen(PORT, function(){
  console.log("Listening on port: " + PORT);
});
