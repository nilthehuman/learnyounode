function print( error, list )
{
    if ( error )
    {
        console.log( "Error: " + error.message );
        return;
    }
    list.forEach( function(x) { console.log(x); } );
}

function main()
{
    const filteredLs = require( "./modularInside" );
    const dirname   = process.argv[2];
    const extension = process.argv[3];
    if ( undefined === dirname || undefined === extension )
        return;
    filteredLs( dirname, extension, print );
}

main();

