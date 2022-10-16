sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("tsystems.awsapirest2.controller.Main", {
            onInit: function () {
                let that = this;
                let oModel = new JSONModel();
                $.ajax({
                    type: "GET",
                    url: sap.ui.require.toUrl("tsystems/awsapirest2/qa/awsapirest"),
                    contentType: "application/json",
                    dataType: "json",
                }).success(function (data, status, response) {
                    oModel.setData(
                        data
                    );
                    that.getView().setModel(oModel, "pricingModel");
                }).error(function (XMLHttpRequest, status, error) {
                    console.log(error);
                });
            }
        });
    });



