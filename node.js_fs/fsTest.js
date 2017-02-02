//@example: node.js fs - mkdirp function with sync and 0777
const fs = require('fs');
var mkdirp = require('mkdirp');

var target_dir = '/var/www/odin/public/';

var oldmask = process.umask(0);
if(!fs.existsSync(target_dir)) {
    //console.log('Attempting to make dir');
    mkdirp.sync(target_dir, '0777', null);
    process.umask(oldmask);        
}

var target_file = target_dir + 'fabhl.js';

var ws = fs.createWriteStream(target_file, { flags : 'w' });
ws.on('end', function() {
    //console.log('Write Completed');
});
ws.on('close', function() {
    console.log('file close');
});
