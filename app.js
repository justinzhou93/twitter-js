//const http = require('http');
const express = require( 'express' );

const app = express(); // creates an instance of an express application

const PORT = 3000;


app.use(function(req, res, next){
  console.log('first');
  //res.send('first');
  next();
});

app.get('/', function(req, res, next){
  console.log("hello, im tired");
  //res.status();
  console.log(res.status());
  res.send(""+res.status(200));
})

// app.post('/', function(req, res, next){
//   console.log('posting something')
//   res.send('Posted.')
// });
//
// app.post('/', function(req, res, next){
//   console.log('posting something')
//   res.send('Posted.')
// });

app.listen(PORT, function(){
  console.log(`server listening`);
});
