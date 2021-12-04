sap.ui.define([], function() {
    "use strict";
    return {
        toUnixDate: function(sDate) {
            console.log(typeof(sDate));
            return (sDate.getTime()).toFixed(0);
        }
    };
});