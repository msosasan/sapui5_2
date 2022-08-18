sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "logaligroup/employees/model/formatter"

], function(Controller, formatter) {

    function  onInit() {
//Hello
        };

       function onCreateIncidence() {
           let tableIncidence = this.getView().byId("tableIncidence");
           let newIncidence = sap.ui.xmlfragment("logaligroup.employees.fragment.NewIncidence", this);
           let incidenceModel = this.getView().getModel("incidenceModel");
           let odata = incidenceModel.getData();
           let index = odata.length;
           odata.push({index: index + 1});
           incidenceModel.refresh();
           newIncidence.bindElement("incidenceModel>/" + index);
           tableIncidence.addContent(newIncidence);
       };

       function onDeleteIncidence(oEvent){
        let tableIncidence = this.getView().byId("tableIncidence");
        let rowIncidence = oEvent.getSource().getParent().getParent();
        let incidenceModel = this.getView().getModel("incidenceModel");
           let odata = incidenceModel.getData();
           let contextObj =  rowIncidence.getBindingContext("incidenceModel");
           odata.splice(contextObj.index, 1);
           for(let i in odata){
               odata[i].index = parseInt(i) + 1;
           }
           incidenceModel.refresh();
           tableIncidence.removeContent(rowIncidence);
           for(let j in tableIncidence.getContent()){
            tableIncidence.getContent()[j].bindElement("incidenceModel>/"+j);
        }
       };

       let Main = Controller.extend("logaligroup.employees.controller.EmployeeDetails",{});

       Main.prototype.onInit = onInit;
       Main.prototype.onCreateIncidence = onCreateIncidence;
       Main.prototype.Formatter = formatter;
       Main.prototype.onDeleteIncidence = onDeleteIncidence;

       return Main;
    });