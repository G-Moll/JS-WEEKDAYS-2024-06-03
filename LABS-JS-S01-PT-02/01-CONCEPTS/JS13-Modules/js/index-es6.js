import { Person } from "./modules/es6/Person.js";
import { messageFrom as message } from "./modules/es6/message.js";

let personOne = new Person( "Joshua", 33 );
console.log( personOne.sayHello() );
console.log( message( personOne.name ) );

