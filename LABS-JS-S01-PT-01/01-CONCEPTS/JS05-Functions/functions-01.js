function a() {
	console.log( "Hello" );
}
console.log( a() );

function b( msg ) {
	console.log( msg );
}
console.log( b( "Hello" ) );

function c( a, b ) {
	var r = a + b 
	return r;
}
var s = c( 1, 2 );
console.log( s );


function x() {
	console.log( "x" );
}
x();

var y = function() {
	console.log( "y" );
};
y();
