function main()
{
    const fs = require( "fs" );
    const infilename = process.argv[2];
    fs.readFile( infilename, callback );
}

function callback( error, data )
{
    if ( error )
    {
        console.log( "Error: " + error.message );
        return;
    }
    const text = data.toString();
    const lines = text.split( "\n" ).length - 1;
    console.log( lines );
}

main()

