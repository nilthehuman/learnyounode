const http = require('http');

const page = process.argv[2];

http.get( page, function (response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
} );

