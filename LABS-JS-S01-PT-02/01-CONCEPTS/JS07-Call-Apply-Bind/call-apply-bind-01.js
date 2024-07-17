// apply, call, bind

// call
function greet( msg ) {
	console.log( "name: ", msg, this.name );
}
var personOne = { name: "Joshua" };
var personTwo = { name: "Peter" };
var personThree = { name: "Paul" }
greet();


// call
greet.call( personOne, "Hello One" );
greet.call( personTwo, "Hola One" );

// apply
greet.apply( personOne, [ "Hello Two" ] );
greet.apply( personTwo, [ "Hola Two" ] );

// bind
var greetPaul = greet.bind( personThree );
console.log( greetPaul );
greetPaul( "Hello Three " );
