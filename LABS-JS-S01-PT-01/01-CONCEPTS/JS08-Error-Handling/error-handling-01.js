// if, switch 
// try catch finally - Exception

// 8 / 0
// function run() {}

try {
	run();
}
catch( e ) {
	if( e.message == "run is not defined"  ) {
		// console.log( e.message );
		console.log( "No puedes usar la función run()" );
	}
}
finally {
	console.log( "Siempre se ejecuta finally" );
}
