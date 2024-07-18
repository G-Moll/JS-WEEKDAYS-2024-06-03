// OOP
// class Person {}
const person = {
	name: "Joshua",
	hobbies: [ "Reading", "Walking", "Swimming" ],
	speak: function() { console.log( "I'm Speaking" ); }
}

// console.log( person );
const copy = Object.create( person );
console.log( copy );
// Shadowing
console.log( copy.name );
console.log( copy.hobbies );
copy.speak();
copy.name = "Peter";
copy.hobbies = true ;
console.log( copy.name );
console.log( copy.hobbies );

