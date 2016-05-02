// This function serves as the module's interface
function filteredLs( dirname, extension, callback )
{
    const fs = require( "fs" );
    fs.readdir( dirname, function(error, files) {
        if ( error )
        {
            callback( error ); // bail early
            return;
        }
        const path = require( "path" );
        const filter = function(x) { return '.' + extension == path.extname(x); };
        const filteredFiles = files.filter( filter );
        callback( null, filteredFiles );
    } );
}

module.exports = filteredLs;

