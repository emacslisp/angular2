var async = require('async');

function onRequest(req, res) {
    res.writeHead(200, {
        "Content-Type" : "text/plain"
    });

    async.parallel([ function(callback) {
        console.log(callback);
        res.write('a');
        res.write('b');
        res.write('c\n');
        callback();
    }, function(callback) {
        console.log(callback);
        res.write('x');
        res.write('y');
        res.write('z\n');
        callback();
    } ], function done(err, results) {
        if (err) {
            throw err;
        }
        res.end("\nDone!");
    });
    
    async.parallel([
  function(cb) {
    console.info('1')
      cb(null,'1');
  },
  function(cb) {
    console.info('2')
    cb(null, '2');
  },
  function(cb) {
    console.info('2.1')
    cb(null, '2.1');
  }], 
  function(error, results) {
    console.info(results);
    console.info('3')
  }
);

}

var server = require('http').createServer(onRequest);
server.listen(9000);
