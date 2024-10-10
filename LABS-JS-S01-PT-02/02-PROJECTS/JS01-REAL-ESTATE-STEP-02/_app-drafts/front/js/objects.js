// console.log( 1 == 1 );
// console.log( 1 === 1 );
// var a = 1;
// var b = 1;
// console.log( a === b );


// console.log( [ 1 ] == [ 1 ] );
// console.log( [ 1 ] === [ 1 ] );
// console.log( {} === {} );
// console.log( { a:1 } === { a:1} );
// console.log( function( x ){} === function( x ){} );

// var y = function(){};
// var z = function(){};
// console.log( y == z );
// console.log( y === z );


function Person() {
	this.x = 10;
	this.hello = function(){};
}
Person.prototype.hola = function hola() {};

var personOne =  new Person();
var personTwo =  new Person();
console.log( personOne == personTwo );
console.log( personOne.x == personTwo.x );
console.log( personOne.hello == personTwo.hello );
console.log( personOne.hola == personTwo.hola );
