var endpointsList = {
	default: {
		domain: "http://localhost",
		port: 80,
		ext: ".php"
	},
	properties: {
		port: 8080
	},
	auth: {
		domain: "http://localhost",
		group: "",
		port: 8080,
		ext: ".py"
	},
	endpointBuild: function endpointBuild( groupName, endpointName ) {
		"http://localhost:8080/properties/select-all"
		return "" +
			( this[ groupName ].domain ? this[ groupName ].domain : this.default.domain ) +
			":" +
			( this[ groupName ].port ? this[ groupName ].port : this.default.port ) +
			"/" +
			groupName +
			"/" +
			endpointName +
			( this[ groupName ].ext ? this[ groupName ].ext : this.default.ext );
	
		// return this[ groupName ].domain + endpointName + this[ groupName ] .ext;
	}
}

export { endpointsList };

// url + "select-all" + ext
// http://localhost:8080/crud/select-all.php
// url + "select" + ext
// url + "uodate" + ext
// url + "delete" + ext
