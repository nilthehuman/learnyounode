const http = require('http');

const page = process.argv[2];
if ( undefined === page ) {
    // bail immediately
    return;
}

// Collect responses manually
var buffer = "";

function collect(data) {
    buffer += data;
}

function dump() {
    console.log( buffer.length );
    console.log( buffer );
}

http.get( page, function(response) {
    response.setEncoding('utf8');
    response.on('data' , collect);
    response.on('end'  , dump);
    response.on('error', console.error);
} ).on( 'error', function(error) {
    console.error( error.message );
} );

