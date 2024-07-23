// Function composition
const composeOperations = ( fnOne, fnTwo ) => ( x ) => fnOne( fnTwo( x ) );
const opSum = ( x ) => x + 1;
const opMul = ( x ) => x * 2;
const opDiv = ( x ) => x / 3;
const opSub = ( x ) => x - 4;

const calcOne = composeOperations( opMul, opSum );
console.log( calcOne( 5 ) );
const calcTwo = composeOperations( opSub, opDiv );
console.log( calcTwo( 6 ) );
const calcThree = composeOperations( opSum, opMul );
console.log( calcThree( 5 ) );

// ( x ) => ( x ) => ( x ) => x * 200;
