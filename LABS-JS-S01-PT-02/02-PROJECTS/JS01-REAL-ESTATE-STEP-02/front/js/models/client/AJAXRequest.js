function AJAXRequest( method, endpoint, responseAction ) {
	this.method = method;
	this.endpoint = endpoint;

	this.xhr = new XMLHttpRequest();
	this.xhr.open( this.method, this.endpoint, true );
	this.xhr.addEventListener( "load", responseAction );
}

AJAXRequest.prototype.setHeader = function setHeader( headerChoice ) {
	this.xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded; charset=UTF-8" );
};

AJAXRequest.prototype.send = function send( payload ) {
	this.xhr.send( payload );
};

export { AJAXRequest  }
