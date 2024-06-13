// Object

var one = {
	name: "Joshua",
	age: 33,
	work: function() {
		console.log( "Hola" )
	}
};

var two = new Object();
two.name = "Saulo";
two.age = 44;
two.work = function() {
	console.log( "Hola" )
};

console.log( one );
console.log( two );
