function main()
{
    const fs = require( "fs" );
    const dirname = process.argv[2];
    fs.readdir( dirname, callback );
}

function callback(error, files)
{
    const extension = '.' + process.argv[3];
    const path = require( "path" );
    const filter = function p(x) { return extension == path.extname(x); };
    var filteredFiles = [];
    for( var i = 0; i < files.length; ++i )
    {
        // In order for f to be const it would have to be inside a separate function
        var f = files[i];
        if( filter(f) )
            filteredFiles.push(f);
    }
    filteredFiles.forEach( function(x) { console.log(x); } ); // Why can't this be eta-reduced?
}

main();

