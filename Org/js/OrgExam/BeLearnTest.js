
var pop = require("OrgTeachWork/PopCommon.js");
var PT = require("OrgExam/BeLearnTest.tpl");
var UTrim =$("#U").val();
var En;
var data=[];
var examID=1;
var module = {
    init: function () {

        //todo 逻辑函数
        this.render();

        this.initBtns();

    },
    //获取机构设置绑定
    render: function () {
        $.ajax({
            url: "/OrgExam/Exam/GetEn",
            dataType: "json",
            type: "post",
            success: function (e) {
                debugger;
                En = e.Data;
                onBind(1);
            }
        });

    },
    initBtns: function () {
        //todo 绑定事件

       
        //按钮绑定点击事件
        $('#P').delegate("span", "click", function () {
            
            if ($(this).attr("data-is")=="1") {
                return;
            }
            debugger;
            if ($(this).hasClass("level-on")) {
                $(this).removeClass("level-on");
                $(this).addClass("level-name");
                var dID = $(this).attr("id");
                var ExamDim = {};
                data = $.grep(data, function (i, j) {
                    if (i.DimID.toString() == dID.toString())
                        return false;
                    else
                        return true;
                });
            }
            else {
               
                $(this).removeClass("level-name");
                $(this).addClass("level-on");
                var ExamDim = {};
                ExamDim.DimID = $(this).attr("id");
                ExamDim.DimName = $(this).text();
                data.push(ExamDim);
            }
            clickBg();

        });
    }


};
//绑定数据
$(function () {
    module.init();
    onShow();//选择试卷
    Ok();


});

//进行点击
function onShow() {
    debugger;
    $("li[data-id]").click(function () {
        if ($(this).hasClass("choose-on"))
            return false;
        $(this).siblings().removeClass("choose-on");
        $(this).addClass("choose-on");
        //
        data = [];//初始化
        examID = $(this).attr("data-examID");//试卷ID
        onBind($(this).attr("data-id"));
        clickBg();
    });
}

//按钮背景
function clickBg() {
    debugger;
    switch (examID + "") {
        case "2":
            $("#btnBegin").removeClass("test-btn").addClass("test-btn-on");
            break;
        case "1":
        case "3":
            if (data.length == 0)
                $("#btnBegin").removeClass("test-btn-on").addClass("test-btn");
            else
                $("#btnBegin").removeClass("test-btn").addClass("test-btn-on");
            break;
        default:
            break;
    }

}
//绑定选测维度数据
function onBind(f) {
    f = parseFloat(f) - 1;
    $("#T").html(En[f].Remark);
    $("#P").html(PT(En[f].D));
    debugger;
    if (En[f].ExamID == 2) {
        $("#btnBegin").removeClass("test-btn").addClass("test-btn-on");
    }
   
}

//提交开始
function Ok() {
    debugger;
    $("#btnBegin").click(function() {
        if (data.length == 0)
            return;
        if ($("#btnBegin").attr("data-on") == "0")
            return;
        $("#btnBegin").attr({ "data-on": "0" });
        $.ajax({
            url: "/OrgExam/Exam/SaveEn",
            data: {
                ExamID: examID,
                data: JSON.stringify(data)
            },
            dataType: "json",
            type: "post",
            success: function (e) {
                location.href = "/OrgExam/Index/SetInfo?U=" + UTrim + "&ExamType=1&ExamID=" + e.ID;
            },
            error: function (e)//可能没有登录
            {
                $("#btnBegin").attr({ "data-on": "1" });
            }
        });
    });
  
  
}


