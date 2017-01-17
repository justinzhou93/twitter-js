//const http = require('http');
const express = require( 'express' );
const nunjucks = require( 'nunjucks' );

const app = express(); // creates an instance of an express application
const routes = require("./routes/");
const PORT = 3000;

//set view engine as the html by default
app.set('view engine', 'html'); // have res.render work with html files
//applies the rendered response to html
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache:true}); // point nunjucks to the proper directory for templates

app.use('/', routes);

app.listen(PORT, function(){
  console.log(`server listening`);
});
