var connect = require('connect');
var path = require('path');
var serveStatic = require('serve-static');

connect()
  .use(serveStatic(path.join(__dirname, '..', 'src')))
  .listen(8080, function() {
    console.log('Server running on 8080...');
  });
