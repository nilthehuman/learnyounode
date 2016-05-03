const net      = require('net');
const strftime = require('strftime');

const port = Number( process.argv[2] );
if ( isNaN(port) ) {
    // bail immediately
    return;
}

// I've got to give it to Node, it does make it really easy
// to write simple TCP servers.
net.createServer( function(socket) {
    socket.write( strftime('%F %H:%M') + "\n" );
    socket.end();
} ).on( 'error', function(error) {
    console.error( error.message );
} ).listen( port );

