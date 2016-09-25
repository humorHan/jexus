
var pop = require("OrgTeachWork/PopCommon.js");
var pub = require("check/pub.js");//校验
var module = {
    init: function () {
        
        //todo 逻辑函数
        this.render();
        
        this.initBtns();

    },
    //获取机构设置绑定
    render: function () {
        $.ajax({
            type: "post",
            url: "/OrgSystemSet/OrgSet/OrgSetGet",
            dataType: "json",
            data: {
              

            },
            success: function (data) {
                
                if (data.result.Data) {
                    
                    $("#orgid").val(data.result.Data.OrgId);//赋值
                    $("#orgname").val(data.result.Data.OrgName);
                   // $("#orgsetday").val(data.result.Data.OrgTimeSet);//暂时隐藏，不设置业绩天数
                }
                else {

                }
            }
        });

    },
    initBtns: function () {
        //todo 绑定事件

        //进行跳转
        $('#main-content-wrapper').delegate("#learnurl", "click", function () {
            
            window.location.href = "/OrgExam/Index/LearnTest";
           
        });
    }


};

//绑定数据
$(function () {
    module.init();
  
});



