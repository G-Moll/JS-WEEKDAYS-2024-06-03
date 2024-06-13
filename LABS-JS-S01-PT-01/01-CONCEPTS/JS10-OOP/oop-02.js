// Classes JS
class Person {
	constructor( name, age ) {
		this.name = name;
		this.age = age;
	}
	sayHello() {
		console.log( "Hello People, I am " + this.name );
	}
}
var person = new Person( "Joshua", 33  );
var person2 = new Person( "John", 40  );
console.log( Person );
console.log( person instanceof Person, person2 instanceof Person );
// person.sayHello();
// person2.sayHello();

