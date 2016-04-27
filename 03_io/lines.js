/* eslint no-sync: "off" */

function main()
{
    const fs = require( "fs" );
    const infilename = process.argv[2];
    const text = fs.readFileSync( infilename ).toString();
    const lines = text.split( "\n" ).length - 1;
    console.log( lines );
}

main();

