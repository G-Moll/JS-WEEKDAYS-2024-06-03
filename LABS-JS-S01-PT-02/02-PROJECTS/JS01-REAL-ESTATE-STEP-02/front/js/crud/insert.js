import { AJAXRequest } from "../models/client/AJAXRequest.js";
import { endpointsList } from "../config/endpointsList.js";
import { holderProperties, form, inputProperty, inputLocation, inputPrice, insertRecord } from "../config/domElements.js";

insertRecord.addEventListener( "click", sendInsertData );

function sendInsertData( e ) {
    e.preventDefault();

    var requestInsert = new AJAXRequest(
        "POST",
        endpointsList.endpointBuild( "properties", "insert" ),
        loadInsertedData
    );
    // requestInsert.setHeader();
    requestInsert.send( "property=" + inputProperty.value + "&location=" + inputLocation.value + "&price=" + inputPrice.value );
}

function loadInsertedData( e ) {
    var jsonData = JSON.parse( e.target.responseText );
    var jsonData = ( e.target.responseText );
    console.log( jsonData );
    form.reset();
}

var propertiesInsertModule = {
    name: "Properties Insert Module"
}
export { propertiesInsertModule }
