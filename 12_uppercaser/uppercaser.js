const http = require('http');
const map  = require('through2-map');

const port = Number( process.argv[2] );
if ( isNaN(port) ) {
    // bail immediately
    return;
}

http.createServer( function( request, response ) {
    if ('POST' != request.method) {
        // ignore request
        return;
    }
    request.pipe( map( function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe( response );
}).listen( port );
