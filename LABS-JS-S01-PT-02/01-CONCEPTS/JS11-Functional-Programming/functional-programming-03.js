// Functional Callbacks
// HOF High Order Functions

function caller( fnOne, fnTwo ) {
	return fnOne() + fnTwo()
}
function get1000() { return 1000; }
function get2000() { return 2000; }
function get3000() { return 3000; }

console.log( caller( get1000, get3000 ) );
console.log( caller( get3000, get2000 ) );

