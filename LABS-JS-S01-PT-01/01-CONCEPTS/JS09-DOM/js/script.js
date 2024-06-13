// Get Elements
var h1 = document.getElementsByTagName( "h1" )[ 0 ];
h1.innerHTML = "Hello DOM";
h1.className = "highlight";
console.log( h1 );

var p = document.getElementById( "p" );
p.addEventListener( "click", customClick );
function customClick() {
	console.log( "Click performed" );
	p.className = "highlight";
}
console.log( p );

/*
Tenemos un SPAN al darle click, va a cambiar el contenido y estilo de un BLOCKQUOTE secundario
*/

/*   */

var techs = [
	{ name: "JavaScript", difficultyLevel:"Easy-Hard" },
	{ name: "CSS", difficultyLevel:"Easy-Medium" },
	{ name: "HTML", difficultyLevel:"Easy" }
];

var cards = "";
for( var i = 0; i < techs.length; i++ ){
	cards += "<div>" +
		"<h2>" + techs[ i ].name + "</h2>" +
		"<p>" + techs[ i ].difficultyLevel + "</p>" +
	"</div>";
}
var holder = document.getElementById( "holder" );
holder.innerHTML = cards; 
console.log( cards );













