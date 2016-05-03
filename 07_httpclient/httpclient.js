const http = require('http');

const page = process.argv[2];
if ( undefined === page ) {
    // bail immediately
    return;
}

http.get( page, function (response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
} ).on( 'error', function(error) {
    console.error( error.message );
} );

