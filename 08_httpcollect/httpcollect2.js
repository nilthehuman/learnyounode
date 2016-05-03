const bl     = require('bl');
const http   = require('http');

const page   = process.argv[2];
if ( undefined === page ) {
    // bail immediately
    return;
}

const buffer = new bl();

http.get( page, function (response) {
    response.setEncoding('utf8');
    response.on('data' , function(d) { buffer.append(d); });  // Why can't this be eta-reduced?
    response.on('end'  , function( ) { console.log(buffer.length); console.log(buffer.toString()); });
    response.on('error', console.error);
} ).on( 'error', function(error) {
    console.error( error.message );
} );

