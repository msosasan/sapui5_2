sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/Table"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MsgBox, Table) {
        "use strict";

        return Controller.extend("tsystems.awsapigatewaydemo.controller.Main", {
            onInit: function () {
                let that = this;
                let oModel = new JSONModel();
                
                let lv_data = {
                    "orders": [
                        {
                            "vin": "UCYS01S03NB005486",
                            "calculationDate": "14/05/2022",
                            "persistent": "f",
                            "user": "msosasan"
                        }
                    ]
                };
                let jsonData = JSON.stringify(lv_data);
                $.ajax({
                    type: "PUT",
                    url: sap.ui.require.toUrl("tsystems/awsapigatewaydemo/qa/stmo-price-calculation"),
                    contentType: "application/json",
                    dataType: "json",
                    data: jsonData
                }).success(function (data, status, response) {
                    oModel.setData(
                        data
                    );
                    that.getView().setModel(oModel,"pricingModel");
                }).error(function (XMLHttpRequest, status, error) {
                   console.log(error);
                });
            
             console.log("hola");  
            }  
        });
    });


