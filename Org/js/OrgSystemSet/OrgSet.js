
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
        $('#main-content-wrapper').delegate("#perset", "click", function () {
            
            window.location.href = "/OrgSystemSet/OrgSet/Index";
           
        });
    }


};
///保存数据
function OptSave() {
    $("#btnSave").click(function () {
        var orgid = $("#orgid").val();//赋值
        var orgname = $("#orgname").val();//赋值
        var orgsetday = 0;  //$("#orgsetday").val();//天数暂时隐藏，设置为0
        //if (!pub.IsPlusInt(orgsetday)) {
        //    pop.PopTipShow('必须为整数!');
        //    return;

        //}//产品去掉了业绩天数
      
        if (orgname.length < 1) {
            
            pop.PopTipShow('机构名不能为空');
            return;
        }
       
        //保存系统设置
        var option = {};
        option.OrgId = orgid;
        option.OrgName = orgname;
        option.OrgTimeSet = orgsetday;
        $.post("/OrgSystemSet/OrgSet/OrgSetSave", { "data": JSON.stringify(option) }, function () {
            
            pop.PopTipShow('恭喜您，设置成功!');
            setTimeout(pop.PopTipHide, 2000);
        }, "json");


    });



}
//绑定数据
$(function () {
    module.init();
    OptSave();
  
});



