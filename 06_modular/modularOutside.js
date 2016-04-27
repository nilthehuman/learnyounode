function print( error, list )
{
    if ( error )
    {
        console.log( "Error: " + error );
        return;
    }
    list.forEach( function(x) { console.log(x); } );
}

function main()
{
    const filteredLs = require( "./modularInside" );
    const dirname   = process.argv[2];
    const extension = process.argv[3];
    filteredLs( dirname, extension, print );
}

main();

