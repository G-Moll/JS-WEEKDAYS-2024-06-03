// Call stack
// LIFO: Last In First Out

// - b
// - c
// - a

function firstFn() {
	console.log( "First Function" );
	secondFn();
}
function secondFn() {
	console.log( "Second Function" );
	thirdFn();
}
function thirdFn() {
	console.log( "Third Function" );
}
firstFn();
