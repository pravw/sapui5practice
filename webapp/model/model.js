sap.ui.define(
    ["sap/ui/model/json/JSONModel"],
    function (JSONModel,) {

        return {


            createJSONModel: function (filePath) {
                var oModel = new JSONModel();
                // oModel.setData();

                // load the data from the my data.json  only in java script need name space here 
                oModel.loadData(filePath);
                return oModel;
            }

        };

    }

);