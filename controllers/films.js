//since we don't have a database we'll use our front end models at the moment
var express = require("express");
filmRouter = express.Router();
var films = require('../client/src/models/films');
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

// index
filmRouter.get("/films", function(req, res){
  res.json(films);
});

//show
filmRouter.get("/films/:id", function(req, res){
  res.json({data: cats[req.params.id]});
});

// update
filmRouter.get("/films/:id", function(req, res){
  films[req.params.id] = req.body.film;
  res.json({data: films});
});

// create
filmRouter.post("/films", function(req, res){
  cats.push(req.body.cat);
  res.json({data: cats});
})

// delete
filmRouter.delete("/films/:id", function(req, res){
  cats.splice(req.params.id, 1);
  res.json({data: cats});
})

module.exports = filmRouter;