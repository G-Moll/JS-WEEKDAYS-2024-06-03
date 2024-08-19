import { DOMFinder } from "../models/ui/DOMFinder.js";
var domFinder = new DOMFinder();

var holderProperties = domFinder.getUI( "#holder-properties" )

export {
	holderProperties
};

var obj = { name: "Joshua" }
