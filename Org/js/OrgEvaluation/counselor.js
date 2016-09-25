
var tplTable = require("OrgEvaluation/counselor.tpl");
var tplMark = require("OrgEvaluation/exammark.tpl");
var pop = require("popup/popuptip.js");
require("template-helper.js");
var Paginator = require('Paginator.js');

var module = {
    init: function () {
        //todo 逻辑函数
        //this.loadOrgMsg();
        this.render();
        this.initBtns();

    },

    render: function () {
        //机构名赋值
        $.ajax({
            type: "post",
            url: "/OrgTeachWork/Organization/GetOrgMsg",
            dataType: "json",
            data: {

            },
            success: function (data) {

                if (data.result.Data) {
                    $("#orgName").html(data.result.Data.OrgName);
                    loadCounselors();

                }
                else {


                }
            }
        });



    },
    initBtns: function () {

        //备注
        $('.table').delegate(".mask", "click", function () {
            var id = $(this).attr("data-id");
            $(".add").show();
            $(".pop-mask").show();
            $("#tempid").val(id);//测评表学生的id
            loadMarks(id);


        });
        //查看
        $('.table').delegate(".show", "click", function () {
            var id = $(this).attr("data-id");
            alert(id);

        });

        //备注的输入
        $('.evalution-box').delegate("#masktext", "keyup", function () {
            var str = $(this).val();
            document.getElementById("wordLength").innerHTML = "<i class='red normal'>" + parseInt(str.length) + "</i>" + "\/30";//限制30字


        });

        //备注的删除
        $('.evalution-box').delegate(".delete", "click", function () {
            debugger;
            var id = this.id;
            $("#div"+id).remove();//移除
            //删除备注
            $.ajax({
                type: "post",
                url: "/OrgExam/Exam/DeleteStuMark",
                dataType: "json",
                data: {
                    MarkId: id

                },
                success: function (data) {
                    debugger;
                  


                }
            });


        });


        //备注的保存
        $('.evalution-box').delegate("#markSave", "click", function () {
            var opt = {};
            opt.TempID = $("#tempid").val();//$(e0).attr("data-s");
            var masktext = $("#masktext").val();
            if (masktext.length<1) {
                return;
            }
            debugger;
            if ($(".addiv").length > 3) {
                //pop.MaskHide();
                //pop.PopTipShow("备注信息过多，请先删除！");
                $("#addtip").removeClass("hidden");
                $("#addtip").html('<span class="margin-top error-tip">备注信息过多，请删除后再保存！</span>');
                return;

            }
           
            var nowtime = new Date();
            var year = nowtime.getFullYear();
            var month = padleft0(nowtime.getMonth() + 1);
            var day = padleft0(nowtime.getDate());
            var timestr = year + "-" + month + "-" + day;
            var addhtml = ' <div class="overflow addiv" id="div' +opt.TempID + '"><p>' + masktext + '</p><span class="font12 right">' + timestr + ' <i class="delete-icon ml10 delete" id="' +opt.TempID + '"></i></span></div>';
            $("#addmark").append(addhtml);
            $.ajax({
                url: "/OrgExam/Exam/SaveStuMark",
                type: "post",
                dataType: "json",
                data: {
                    D: JSON.stringify(opt), R: escape(masktext)
                },
                success: function (e) {
                    if (e.OK) {
                        pop.MaskHide();
                        pop.PopTipShow("添加成功！");
                    }
                    else {

                    }
                }
            });

        });

        //补齐两位数
        function padleft0(obj) {
            return obj.toString().replace(/^[0-9]{1}$/, "0" + obj);
        }
    }


};
//加载测评学生列表
function loadExamStu(page) {

    if (page == undefined) {
        page = 1;
    }

    //加载列表
    $.ajax({
        type: "post",
        url: "/OrgExam/Exam/GetReInit",
        dataType: "json",
        data: {
            SerchName: escape($("#txtserch").val()),
            IsContract: $("#constate").val(),//时候签约
            TeacherId: $("#cteacher").val(),//咨询师
            PageIndex: page,
            PageSize: 10
        },
        success: function (data) {

            if (data.Data) {
                $("#tb").html(tplTable(data.Data));
                $("#Totalcount").html(data.PageSum);
                Paginator.Paginator(10, page, data.PageSum, loadExamStu);
                //加载咨询师列表

            }
            else {
                $("#tb").html("");//清空数据
                $("#pagination").html("");//分页控件不显示


            }
        }
    });

}


//加载咨询师列表
function loadCounselors() {

    //加载列表
    $.ajax({
        type: "post",
        url: "/OrgZiXun/ZiXunGuanLi/GetZiXunShiBySchoolId",
        dataType: "json",
        data: {

        },
        success: function (data) {

            if (data.result.Data) {
                var jlhtml = '<option value="-1">咨询师</option>';
                //加载咨询师列表
                for (var key in data.result.Data) {
                    if (data.result.Data[key].UserId != undefined) {
                        jlhtml += '<option value="' + data.result.Data[key].UserId + '">' + data.result.Data[key].UserName + '</option>';
                    }
                }
                $("#cteacher").html(jlhtml);

                loadExamStu();//加载测评数据

            }
            else {

            }
        }
    });

}



//加载备注列表
function loadMarks(id) {

    //加载列表
    $.ajax({
        type: "post",
        url: "/OrgExam/Exam/GetStuMark",
        dataType: "json",
        data: {
            TempID:id

        },
        success: function (data) {
            debugger;

            if (data.Data) {
                $("#markshow").html(tplMark(data.Data));
                //加载咨询师列表

            }
            else {
                


            }
        }
    });

}


//绑定数据
$(function () {

    module.init();



});
$(function () {
    var timer = null;
    //点击搜索框开始
    $(".search").click(function () {


        $(this).css("background", "#cb441e");
        var serchtext = $(".search-text");

        serchtext.show();
        if (!(serchtext.hasClass("on"))) {
            
            serchtext.stop();
            serchtext.animate({
                width: "160px"
            }, 1000);
            serchtext.addClass("on");

        } else {
            serchtext.stop();
            serchtext.animate({
                width: "0px"
            }, 1000);
            serchtext.removeClass("on");
            $(this).css("background", "");
           
            module.init();


        }
    });
    //点击搜索框结束


});



function OptBut() {


    alert("按钮进行了点击");

}