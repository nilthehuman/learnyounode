const http = require('http');
const url  = require('url');

const port = Number( process.argv[2] );
if ( isNaN(port) ) {
    // bail immediately
    return;
}

http.createServer( function( request, response ) {
    if ( 'GET' != request.method ) {
        // ignore request
        return;
    }

    const urlParsed = url.parse( request.url, true );
    const iso       = urlParsed.query.iso;
    const date      = new Date( iso );
    if ( undefined === iso || isNaN(date.getTime()) ) {
        response.writeHead( 400, "Bad request" );
        response.end();
        return;
    }

    var jsonTime = {};
    if ( '/api/parsetime' == urlParsed.pathname ) {
        jsonTime.hour   = date.getHours();
        jsonTime.minute = date.getMinutes();
        jsonTime.second = date.getSeconds();
    }
    else if ( '/api/unixtime'  == urlParsed.pathname ) {
        jsonTime.unixtime = date.getTime();
    }
    else {
        response.writeHead( 404, "Page not found" );
        response.end();
    }
    response.writeHead( 200, { 'Content-Type': 'application/json' } );
    response.write( JSON.stringify(jsonTime) );
    response.end();
}).listen( port );
