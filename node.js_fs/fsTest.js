//@example: node.js fs - mkdirp function
const fs = require('fs');
var mkdirp = require('mkdirp');

var target_dir = '/var/www/odin/public/';

var oldmask = process.umask(0);
if(!fs.existsSync(target_dir)) {
    //console.log('Attempting to make dir');
    mkdirp(target_dir, '0777', function(err){
        process.umask(oldmask);        
        if(err) console.error(err);
        else console.log('dir created');
    });
}
