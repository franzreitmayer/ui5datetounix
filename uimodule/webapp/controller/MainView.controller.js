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
        },

        onPressLinkExample: function (oEvent) {
            var sUrl = 'https://plnkr.co/edit/SncDyoNeeELK5P6H?open=lib%2Fscript.js&preview';
            var oNewTab = window.open();
            oNewTab.location.href = sUrl;
        }
    });
});