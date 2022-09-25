sap.ui.define([
    "sap/ui/core/mvc/Controller",

], function (Controller) {
    return Controller.extend("logaligroup.employees.controller.Base", {
        onInit: function () {

        },
        toOrderDetails: function (oEvent) {
            let orderID = oevent.getSource().getBindingContext("odataNortwind").getObject().orderID;
            let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("outeOrderDetails", { orderID: orderID });
            orderID

        }
    });
});