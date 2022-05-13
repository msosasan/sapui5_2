sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        /*
function myCheck() {
    let inputEmployee = this.byId('inputEmployee');
    let valueEmployee = inputEmployee.getValue();
    if (valueEmployee.length === 6) {
        inputEmployee.setDescription("OK");
    } else {
        inputEmployee.setDescription("No OK")
    }
};
*/
        const Main = Controller.extend("logaligroup.employees.controller.MainView");
        Main.prototype.onValidate = function () {
            let inputEmployee = this.getView().byId('inputEmployee');
            let valueEmployee = inputEmployee.getValue();
            if (valueEmployee.length === 6) {
                //inputEmployee.setDescription("OK");
                this.getView().byId('labelCountry').setVisible(true);
                this.getView().byId('slCountry').setVisible(true);
            } else {
                //inputEmployee.setDescription("No OK")
                this.getView().byId('labelCountry').setVisible(false);
                this.getView().byId('slCountry').setVisible(false);
            }
            return Main;
        }
        /*
        return Controller.extend("logaligroup.employees.controller.MainView", {
            onInit: function () {

            },
            onValidate: function () {
                let inputEmployee = this.getView().byId('inputEmployee');
                let valueEmployee = inputEmployee.getValue();
                if (valueEmployee.length === 6) {
                    //inputEmployee.setDescription("OK");
                    this.getView().byId('labelCountry').setVisible(true);
                    this.getView().byId('slCountry').setVisible(true);
                } else {
                    //inputEmployee.setDescription("No OK")
                    this.getView().byId('labelCountry').setVisible(false);
                    this.getView().byId('slCountry').setVisible(false);
                }
            },
        });
        */
    });
