var endpointsList = {
	realEstate: {
		url: "http://localhost:8080/crud/",
		ext: ".php"
	},
	auth: {
		url: "http://localhost:8080/auth/",
		ext: ".php"
	},
	buildEndpoint: function buildEndpoint( groupName, endpointName ) {
		return this[ groupName ].url + endpointName + this[ groupName ] .ext;
	}
}

export { endpointsList };

// url + "select-all" + ext
// http://localhost:8080/crud/select-all.php
// url + "select" + ext
// url + "uodate" + ext
// url + "delete" + ext
