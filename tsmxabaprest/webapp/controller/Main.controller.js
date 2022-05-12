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

        return Controller.extend("tsystems.tsmxabaprest.controller.Main", {
            onInit: function () {
                var oModel = new JSONModel();
                oModel.setData({
                    "SALESORDER": {
                        "HEADER": {
                            "DOC_TYPE": "TA",
                            "SALES_ORG": "0001",
                            "DISTR_CHAN": "01",
                            "DIVISION": "01",
                            "PURCH_NO_C": "0987654321",
                            "CURRENCY": "EUR"
                        },
                        "ITEMS": [{
                            "ITM_NUMBER": 10,
                            "MATERIAL": "000000000000000032",
                            "TARGET_QTY": 5.000
                        }],
                        "PARTNERS": [{
                            "PARTN_ROLE": "AG",
                            "PARTN_NUMB": "0000000001"
                        }],
                        "SCHEDULES": [{
                            "ITM_NUMBER": 10,
                            "REQ_QTY": 5.000
                        }]
                    }
                });
                this.getView().setModel(oModel);

            },
            myToken: "",
            fetchToken: function () {
                var that = this;
                $.ajax({
                    type: "GET",
                    url: sap.ui.require.toUrl("tsystems/tsmxabaprest/monsignor_rest/monsignor?sap-client=100"),
                    headers: { "x-CSRF-Token": "Fetch" }
                }).always(function (data, status, response) {
                    that.myToken = response.getResponseHeader("x-csrf-token");
                    MsgBox.show("token received" + that.myToken);
                });
            },
            onSave: function () {
                var that = this;
                var lv_data = this.getView().getModel().getProperty("/SALESORDER");
                var jsonData = JSON.stringify(lv_data);
                $.ajax({
                    type: "POST",
                    url: sap.ui.require.toUrl("tsystems/tsmxabaprest/monsignor_rest/monsignor?sap-client=100"),
                    headers: { "x-csrf-token": this.myToken },
                    contentType: "application/json",
                    dataType: "json",
                    data: jsonData
                }).always(function (data, status, response) {
                    MsgBox.show("Sales Order has been created successfully");
                });
            },
        });
    });
