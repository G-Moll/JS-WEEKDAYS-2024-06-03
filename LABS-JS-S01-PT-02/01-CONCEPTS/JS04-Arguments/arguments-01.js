// arguments

function a() {
	console.log( arguments );
	console.log( arguments[ 0 ] > arguments[ 2 ] );
}
a( 10, "F", true );
