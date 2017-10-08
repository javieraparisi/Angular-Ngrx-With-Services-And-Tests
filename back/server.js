
/**
 * Created by japarisi on 9/28/2017.
 */
var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/phones', function (req, res) {
  //delay 5 segs server
  setTimeout(function(){
    var mockModel = [{model:'S7', company:'Samsung', ram:2, frontCamera:13, backCamera:8, id:1},
      {model:'6', company:'Iphone', ram:4, frontCamera:15, backCamera:5,id:3},
      {model:'M4', company:'Xiaomi', ram:5, frontCamera:13, backCamera:8,id:2},
      {model:'M1', company:'BQ', ram:3, frontCamera:12, backCamera:10,id:4},
      {model:'7', company:'Iphone', ram:3, frontCamera:10, backCamera:5, id:5},
      {model:'h4', company:'Samsung', ram:6, frontCamera:18, backCamera:11, id:6}];
    res.json(mockModel);
  }, 5000);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
