// Closures
function outerFn() {
	let msgs = [ "Hello", "Hola", "Hallo" ];
	let count = 0;

	function innerFn() {
		return msgs[ count ++ ];
	}
	return innerFn;
}
let helloClosure = outerFn();
console.log( helloClosure() );
console.log( helloClosure() );
console.log( helloClosure() );
console.log( helloClosure() );
