// Prototipal Inheritance
// Constructor Function
function Person( name ) {
	this.name = name;
}
Person.prototype.hello = function hello() {
	return "My name is " + this.name;
}
Person.prototype.hola = function hola() {
		return "Mi nombre es " + this.name;
}
let personOne = new Person( "Joshua" );
let personTwo = new Person( "Peter" );
// console.log( personOne, personOne.hello(), personOne.hola() );
// console.log( personTwo, personTwo.hello(), personTwo.hola() );
console.log( personOne.hello === personTwo.hello, personOne.hola === personTwo.hola )
