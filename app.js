var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/*', function(req, res, next){ 
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next(); 
});

app.listen(process.env.VCAP_APP_PORT || 3000);
