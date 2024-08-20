function DOMFinder() {
	this.treeNode = null;
}

DOMFinder.prototype.setDefaultNode = function setDefaultNode( currentNode ) {
	this.treeNode = document;
	this.treeNode = currentNode ? currentNode : this.treeNode ;
};

DOMFinder.prototype.cleanSelector = function cleanSelector( selectorName, selectorType ) {
	return selectorName.substring( selectorName.indexOf( selectorType ) + 1 );
};

DOMFinder.prototype.getUI = function getUI( selector, currentNode ) {
	this.setDefaultNode( currentNode );
	selector = selector.trim();

	if( selector.indexOf( "#" ) > -1 ) {
		return this.treeNode.getElementById( this.cleanSelector( selector, "#" ) );
	}
	else if( selector.indexOf( "." ) > -1 ) {
		return this.treeNode.getElementsByClassName( this.cleanSelector( selector, "." ) )
	}
	else {
		return this.treeNode.getElementsByTagName( selector );
	}
};

export { DOMFinder };
