sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"

], function(Controller, History) {

    function _onObjectMatched(oEvent){
this.getView().bindElement({
    path: "/Orders(" + oEvent.getParameter("arguments").orderID + ")",
    model: "odataNorthwind"

})
    }

    return Controller.extend("logaligroup.employees.controller.OrderDetails", {
        onInit: function () {
          let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.getRoute("RouteOrderDetails").attachPatternMatched( _onObjectMatched, this);
        },
        onBack: function(oEvent){
          let oHistory = History.getInstance();
          let oPreviousHash = oHistory.getPreviousHash();
          if (oPreviousHash !== undefined){
              window.history.go(-1);
          } else {
             let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
             oRouter.navTo("RouteMain", true);
          }
        }
    });
});