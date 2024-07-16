// Global Object window, _global
console.log( this );

function a() {
	console.log( this );
}
// a();

function Person( name ) {
	this.name = name;
	this.age = 40;
	console.log( this );
}
// var person1 = new Person( "Joshua" );
// var person2 = new Person( "Peter" );

var objectOne = {
	name: "John",
	hello: function hola() {
		console.log( "Inside object ", this.name, this.hello );
	}
}
// objectOne.hello();

// var hello = objectOne.hello;
name = "The global object";
function hola() {
	console.log( "Inside ==== object ", this.name );
	console.log( "Inside ==== object ", this == global, this == window );
}
hola();

// console.log( "Function reference", hello );
// console.log( "Calling function", hello() );




