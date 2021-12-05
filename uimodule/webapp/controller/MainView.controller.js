sap.ui.define([
    "eu/reitmayer/ui5/conv/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "eu/reitmayer/ui5/conv/model/formatter"
], function(Controller,
    JSONModel,
    formatter) {
    "use strict";

    return Controller.extend("eu.reitmayer.ui5.conv.controller.MainView", {

        formatter: formatter,
        onInit: function() {
            var oJsonModel = new JSONModel({
                "simpleDate": new Date((new Date()).toDateString()),
                "dateTime": new Date((new Date()).toString())
            });
            this.getView().setModel(oJsonModel);
        }
    });
});