const Person = require( "./modules/cjs/Person" );
const message = require( "./modules/cjs/message" );

let personOne = new Person( "Joshua", 33 );
console.log( personOne.sayHello() );
console.log( message( personOne.name ) );
