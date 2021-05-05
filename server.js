// external modules
require('dotenv').config();
const { static } = require('express');
const express = require('express');

// local modules
const path = require('path')
const apiRoutes = require('./controller/api')

// load express on app
const app = express();

// public declarations
app.use('/public', express.static(process.cwd() + '/public'));

// loading local modules into app
apiRoutes(app);

//404 Not Found Middleware
app.use(function(req, res, next) {
    res.status(404)
      .type('text')
      .send('Not Found, but app is running');
  });

let port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`Listening on port ${port}`);
})

// When server is running
// put this in browser
// http://localhost:8080/