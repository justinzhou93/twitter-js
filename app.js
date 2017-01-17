//const http = require('http');
const express = require( 'express' );
const nunjucks = require( 'nunjucks' );

const app = express(); // creates an instance of an express application

const PORT = 3000;

//set view engine as the html by default
app.set('view engine', 'html'); // have res.render work with html files
//applies the rendered response to html
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
//
nunjucks.configure('views', {noCache:true}); // point nunjucks to the proper directory for templates

// var local = {
//   title:"An Example",
//   people:[
//     {name:"Gandalf"},
//     {name:"Frodo"},
//     {name:"Hermione"}
//   ]
// };
//
// nunjucks.render('index.html', local, function(err,output){
//   console.log(output);
// })

app.use(function(req, res, next){
  console.log('first');
  // res.send('first');
  next();
});

app.get('/', function(req, res, next){
  console.log("hello, im tired");
  // res.sendStatus(200);
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );

  //console.log(res.status());
  // res.send(""+ 200 + "\n");
})

app.post('/', function(req, res, next){
  console.log('posting something')
  res.send('Posted.')
});

// app.post('/', function(req, res, next){
//   console.log('posting something')
//   res.send('Posted.')
// });

app.listen(PORT, function(){
  console.log(`server listening`);
});
