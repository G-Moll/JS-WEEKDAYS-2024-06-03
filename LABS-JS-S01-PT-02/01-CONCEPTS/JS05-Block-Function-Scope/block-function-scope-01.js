// Function Scope - Ámbito, Alcance
// var x; // window, global 
function a() {
	var x = 1;
	console.log( x )
}
// a();
// console.log( x );
// console.log( window.x );



// Block Scope // Control Structures
// let/const

if( true ) {
	let b = !false;
	const PI = Math.PI;
	console.log( b );
	console.log( PI );
}
console.log( b );	
console.log( PI );	




