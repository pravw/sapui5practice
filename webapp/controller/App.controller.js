sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/demo/project1/model/model"],
 

 function (Controller,model) {
    "use strict";
    return Controller.extend("sap.ui.demo.project1.Controller.App", {
       
       onInit:function(){

        this.createModel();
       },
       
       onSwtChange: function(){

        var oModel = sap.ui.getCore().getModel();

        if(oModel.getProperty("/empStr/alia")=== true){
            oModel.setProperty("/empStr/alia", false);
        }else{
            oModel.setProperty("/empStr/alia", true);
        }

       },

        createModel:function(){
        //     // step1 create a brand new model obj
        //     var oModel = new sap.ui.model.json.JSONModel()
        //     //  step2 set the data inside the model
        //     oModel.setData({

        //         "empStr": {
        //             "empNo": 100,
        //             "eName": "krish",
        //             "  ": 15000,
        //             "currency": "EUR",
        //             "smoker": false
        //         },
        //         "empTab": [
        //             {
        //                 "empNo": 100,
        //                 "eName": "prave",
        //                 "salary": 15000,
        //                 "currency": "GBP",
        //                 "smoker": false
        //             },
        //             {
        //                 "empNo": 100,
        //                 "eName": "ram",
        //                 "salary": 16000,
        //                 "currency": "EUR",
        //                 "smoker": false
        //             },
        //             {
        //                 "empNo": 100,
        //                 "eName": "kishore",
        //                 "salary": 18000,
        //                 "currency": "INR",
        //                 "smoker": false
        //             },
        //             {
        //                 "empNo": 100,
        //                 "eName": "siva",
        //                 "salary": 18000,
        //                 "currency": "INR",
        //                 "smoker": false
        //             }
        //         ]
        //     });


         var oModel=  model.createJSONModel("model/mockData/myData.json");
        // step 3 make model aware to the appliacation
            sap.ui.getCore().setModel(oModel);

            // named Model


            var oModel1 =  model.createJSONModel("model/mockData/myDataSample.json");
            sap.ui.getCore().setModel(oModel1,"hello");

              








        }


    });
});


