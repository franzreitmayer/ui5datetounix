sap.ui.define([], function() {
    "use strict";
    return {
        toUnixDate: function(sDate) {
            return (sDate.getTime()).toFixed(0);
        }
    };
});