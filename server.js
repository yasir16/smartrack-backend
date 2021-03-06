var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

// app.use((req,res,next)=> {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// //all other requests are not implemented.
// app.use((err,req, res, next) => {
//  res.status(err.status || 501);
//  res.json({
//      error: {
//          code: err.status || 501,
//          message: err.message
//      }
//  });
// });

const db = require('./app/config/db.config.js');
  
//force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
// });

require('./app/router/io.router.js')(app);
require('./app/router/sensor.router.js')(app);
 
// Create a Server
var server = app.listen(5005, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})