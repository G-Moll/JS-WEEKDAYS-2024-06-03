function AJAXRequest( method, endpoint, responseAction ) {
	this.method = method;
	this.endpoint = endpoint;

	this.xhr = new XMLHttpRequest();
	this.xhr.open( this.method, this.endpoint, true );
	this.xhr.addEventListener( "load", responseAction );
}

AJAXRequest.prototype.send = function send() {
	this.xhr.send();
};

export { AJAXRequest  }
