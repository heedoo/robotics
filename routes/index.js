var express = require('express');
var router = express.Router();

var five = require("johnny-five");
var board = new five.Board();

/* GET home page. */
exports.init = function(req, res){
  res.render('index', { title: 'Express' });
}


/* GET home page. */
exports.readyBoard = function(req, res){
  board.on("ready", function() {
    console.log("fire")
    var led = new five.Led(13);
    led.blink(500);
    // Strobe the pin on/off, defaults to 100ms phases
    //led.strobe();
  });
}
