// w3schools
// Babbel
// Callbacks
function a( x ) {
	return x();
}

function hello() {
	return "Hello";
}
function bye() {
	return "Bye";
}
console.log( a( hello ) );
console.log( a( bye ) );
// "Hello"()


