// apply, call, bind

// call
function greet( msg ) {
	console.log( "name: ", msg, this.name );
}
// greet();
var personOne = { name: "Joshua" };
var personTwo = { name: "Peter" };
// greet.call( personOne, "Hello One" );
// greet.call( personTwo, "Hola One" );

// apply
// greet.apply( personOne, [ "Hello Two" ] );
// greet.apply( personTwo, [ "Hola Two" ] );

// bind - amarrar, atar, vincular
var personThree = { name: "Paul" }
var greetPaul = greet.bind( personThree );
console.log( greetPaul );
greetPaul( "Hello Three " );
