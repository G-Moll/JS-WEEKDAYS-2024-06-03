function AJAXRequest( method, endpoint, responseAction ) {
	this.method = method;
	this.endpoint = endpoint;

	this.xhr = new XMLHttpRequest();
	this.xhr.open( this.method, this.endpoint, true );
	this.xhr.addEventListener( "load", responseAction );
}

AJAXRequest.prototype.optionHeaders = {
	encodeJSON: { key: "Content-Type", value: "application/json; charset=UTF-8" },
	encodeURL:  { key: "Content-Type", value: "application/x-www-form-urlencoded; charset=UTF-8" },
	encodeFORM: { key: "Accept", value: "multipart/form-data" },
	encodeAUTH: { key: "Authorization", value: "Bearer " }
};

AJAXRequest.prototype.setHeader = function setHeader( headerChoice, authToken ) {
	this.xhr.setRequestHeader(
		this.optionHeaders[ headerChoice ].key,
		this.optionHeaders[ headerChoice ].value + ( authToken ? authToken : "" )
	);
};


AJAXRequest.prototype.send = function send( payload ) {
	this.xhr.send( payload );
};

export { AJAXRequest  }
