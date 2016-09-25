
var tplTable = require("OrgEvaluation/evaluationarchives.tpl");
var pop = require("popup/popuptip.js");
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
                    //$("#AreaCount").html(data.result.Data.AreaCount);
                    
                    loadCounselors();
                   
                }
                else {


                }
            }
        });



    },
    initBtns: function () {

        //下拉框的点击
        $('.table').delegate("#constate", "change", function () {
            loadExamStu(1);//加载数据


        });
        $('.table').delegate("#cteacher", "change", function () {
            loadExamStu(1);//加载数据

        });
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



