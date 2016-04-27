function main()
{
    var sum = 0;
    process.argv.shift( 0, 1, 2 ); // Seriously? Passing arguments into a zero-argument function raises no warning?
    process.argv.shift( "foo", "bar", "baz" );
    while ( process.argv.length )
    {
        sum += Number( process.argv.shift() );
    }
    console.log( sum );
}

main();

