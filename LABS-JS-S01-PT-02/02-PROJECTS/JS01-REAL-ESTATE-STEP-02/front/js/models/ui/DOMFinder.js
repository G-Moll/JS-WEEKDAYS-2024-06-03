function DOMFinder() {
	this.treeNode = null;
}

DOMFinder.prototype.setDefaultNode = function setDefaultNode( currentNode ) {
	this.treeNode = document;
	this.treeNode = currentNode ? currentNode : this.treeNode ;
};

DOMFinder.prototype.cleanSelector = function cleanSelector( selectorName, selectorType ) {
	selectorName = selectorName.trim();
	return selectorName.substring( selectorName.indexOf( selectorType ) + 1 );
};
	// <div id="holder">
	// <div class="holder">
	// getUI( "#holder" );
	// getUI( ".holder" );
	// getUI( "p" );
DOMFinder.prototype.getUI = function getUI( selector, currentNode ) {
	this.setDefaultNode( currentNode );
	if( selector.indexOf( "#" ) > -1 ) {
		return this.treeNode.getElementById( this.cleanSelector( selector, "#" ) );
	}
	else if( selector.indexOf( "." ) > -1 ) {
		return this.treeNode.getElementsClassName( this.cleanSelector( selector, "." ) )
	}
	else {
		return this.treeNode.getElementsTagName( selector );
	}
};

export { DOMFinder };
