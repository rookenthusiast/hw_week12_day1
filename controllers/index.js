var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
  res.json({data: "welcome!"});
})

router.get("/about", function(req, res){
  res.json({data: "All about us!"});
});


module.exports = router;