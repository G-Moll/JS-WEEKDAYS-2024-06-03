// IIFE

// Basic sample
(function() {
	console.log( "Joshua" );
})();

// Paremeters
(function( msg ) {
	console.log( msg,"Joshua" );
})( "Hello" );

// return
var msg = (function( msg ) {
	return msg + " Joshua";
})( "Hello" );
console.log( msg );
