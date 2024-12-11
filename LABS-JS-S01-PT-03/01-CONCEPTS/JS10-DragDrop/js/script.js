let containerParent = document.body;
let draggedElement = null;

// .box
containerParent.addEventListener( "dragstart", dragStartHandler  );
containerParent.addEventListener( "dragend", dragEndHandler  );

// .container
containerParent.addEventListener( "dragover", dragOverHandler  );
containerParent.addEventListener( "dragleave", dragLeaveHandler  );
containerParent.addEventListener( "drop", dropHandler  );

function dragStartHandler( e ) {
	if( e.target.classList.contains( "box" ) ) {
		e.dataTransfer.setData( "targetId", e.target.id );
		e.target.style.opacity = 0.5;
		console.log( e.type, e.target.id );
	}
}
function dragEndHandler( e ) {
	if( e.target.classList.contains( "box" ) ) {
		e.target.style.opacity = 1;
		console.log(  e.type, e.target.id );
	}
}


function dragOverHandler( e ) {
	if( e.target.classList.contains("container")) {
		e.preventDefault();
		e.target.classList.add( "drag-over-style" );

		console.log( e.type, e.target.id );
	}
}
function dragLeaveHandler( e ) {
	if( e.target.classList.contains( "container" ) ) {
		e.target.classList.remove( "drag-over-style" );

		console.log( e.type, e.target.id );
	}
}
function dropHandler( e ) {
	let targetId = e.dataTransfer.getData( "targetId" );
	if( e.target.classList.contains( "container" ) ) {
		e.preventDefault();
		e.target.classList.remove( "drag-over-style" );
		if( targetId ) {
			let currentBox = document.getElementById( targetId );
			e.target.appendChild( currentBox );
			currentBox.draggable = false;
			// currentBox.setAttribute( "draggable", false );
		}

		console.log( e.type, e.target.id );
		console.log( e.target.children );
	}
}



