// OOP Prototypal Inheritance
function Person( name, age ) {
	this.name = name;
	this.age = age;
}
Person.prototype.sayHello = function sayHello() {
	console.log( "Hello People, I am " + this.name );
}

var person = new Person( "Joshua", 33 );
var person2 = new Person( "John", 40 );
console.log( Person );
console.log( person instanceof Person, person2 instanceof Person );
// console.log( person, person.sayHello  );
// console.log( person2, person2.sayHello  );




