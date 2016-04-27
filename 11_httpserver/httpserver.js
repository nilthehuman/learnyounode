const http = require('http');
const fs   = require('fs');

const port = Number( process.argv[2] );
const file = process.argv[3];
if ( isNaN(port) || undefined === file ) {
    // bail immediately
    return;
}

http.createServer( function( _, response ) {
    const rs = fs.createReadStream( file );
    rs.on('open', function() {
        rs.pipe( response );
    });
    rs.on('error', function() {
        console.error('Could not read ' + file + ', sorry');
        return;
    });
}).listen( port );
