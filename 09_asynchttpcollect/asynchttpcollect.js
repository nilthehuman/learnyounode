const bl     = require('bl');
const http   = require('http');

const PageBuffer = function(url) {
    return {
             'url'  : url
           , 'bl'   : bl()
           , 'ended': false
           };
};

const numPages = process.argv.length - 2;
var pages = Array(numPages);
for (var i = 0; i < numPages; ++i) {
    pages[i] = PageBuffer( process.argv[i+2] );
}

function printIfDone() {
    // Check if all buffers are ended
    for (var i = 0; i < pages.length; ++i) {
        if (! pages[i].ended) {
            return;
        }
    }
    // Dump received content
    for (i = 0; i < pages.length; ++i) {
        console.log( pages[i].bl.toString() );
    }
}

function callback(i) {
    return function(response) {
        response.setEncoding('utf8');
        response.on('data', function(d) { pages[i].bl.append(d); } );  // Why can't this be eta-reduced?
        response.on('end' , function( ) { pages[i].ended = true; printIfDone(); } );
        response.on('error', console.error);
    };
}

for (i = 0; i < pages.length; ++i) {
    // JavaScript's scoping is broken
    http.get( pages[i].url, callback(i) ).on( 'error', function(error) {
        console.error( error.message );
    } );
}

