
var tplTable = require("OrgEvaluation/studentdetails.tpl");
require("template-helper.js");
var module = {
    init: function () {
        //todo 逻辑函数
        this.render();
        this.initBtns();
       
    },

    render: function () {
        //加载学生信息
        $.ajax({
            type: "post",
            url: "/OrgZiXun/ZiXunGuanLi/GetOrgStuDetails",
            dataType: "json",
            data: {

            },
            success: function (data) {

                if (data.result.Data) {
                    if (data.result.Data) {
                        debugger;
                        $("#main-content-wrapper").html(tplTable(data.result.Data));
                       
                    }
                    else {

                       alert("无数据");


                    }
                }
                else {


                }
            }
        });



    },
    initBtns: function () {
        //todo 绑定事件
      
        //委托删除学校
        //$('#scaList').delegate(".dustbin", "click", function () {
        //    var obj = $(this).attr("data-id");
        //    $("#a" + obj).remove();
        //    $("#chk" + obj).attr("checked", false);

        //});
    }


};


//绑定数据
$(function () {
    module.init();
});


$(function () {

  


});

