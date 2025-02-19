sap.ui.define(
    ["sap/ui/model/json/JSONModel"],
    function (JSONModel,) {

        return {


            createJSONModel: function () {
                var oModel = new JSONModel();
                // oModel.setData();

                // load the data from the my data.json  only in java script need name space here 
                oModel.loadData("model/mockData/myData.json");
                return oModel;
            }

        };

    }

);