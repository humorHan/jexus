var Paginator = require('Paginator.js');
var pageSize = 10;
var tplTable = require("OrgClass/classsupermanage.tpl");
var idStructureID = -1;
var classname = $.trim($(".search-text").val());

function paging(page) {
    module.loadPaperList(page);
}
var module = {
    init: function () {
        this.loadPaperList(1);
    }
    , loadPaperList: function (page) {

        var obj = { PageIndex: page, PageSize: pageSize, IsAuto: false, IsDel: false, IsEnable: true, StructureID: idStructureID, ClassName: classname };

        //获取班级的列表
        $.ajax({
            type: "POST",
            url: "/Org/ClassManage/GetSuperManagerList",
            data: { str: JSON.stringify(obj) },
            dataType: "json",
            beforeSend: function (data) {
                $("#idTableClass tbody").html('<tr class="font12"><td colspan="4">数据正在加载中...</td></tr>');
            },
            error: function (data) {
                //debugger;
            },
            success: function (data) {
                var _result = data.result;
                if (_result.OK) {
                    var datalist = _result.Data;
                    $("#idTableClass tbody").html(tplTable(datalist));
                    var totalNum = _result.PageSum;
                    $("#totalClassNum").text(totalNum);
                    //填充校区搜索内容
                    var datalistOrgStru = _result.Data.ListOrgStructure;
                    if (datalistOrgStru && datalistOrgStru.length > 0) {
                        var searchStructureHtml = '<option value="-1">选择校区</option>';
                        for (var i = 0; i < datalistOrgStru.length; i++) {
                            searchStructureHtml += "<option value='" + datalistOrgStru[i].StructureID + "'>" + datalistOrgStru[i].StructureName + "</option>";
                        }
                        $("#idsearch").empty().append(searchStructureHtml);
                        $("#idsearch").val(idStructureID);
                    } else {
                        $("#idsearch").empty().append('<option value="-1">选择校区</option>');
                    }

                    Paginator.Paginator(pageSize, page, totalNum, paging);

                } else {
                    var html = '<tr class="font12"><td colspan=4>' + _result.Result + '</td></tr>';
                    $("#idTableClass tbody").html(html);
                }

                $(".look").click(function () {
                    var $this = $(this);
                    clickLook($this.data("classid"));
                });
            }
        });
    }

};

//点击查看
function clickLook(classid) {
    window.location.href = "/Org/ClassManage/ClassDetail/?classid=" + classid + "&comefrom=2";
}

//点击老师状态时
function LoadPageForSearch() {
    idStructureID = $("#idsearch").val();
    classname = $.trim($(".search-text").val());
    module.loadPaperList(1);
}

$(function () {
    $("#sucai").niceScroll({
        cursorcolor: "#CC0071",
        cursoropacitymax: 1,
        touchbehavior: false,
        cursorwidth: "5px",
        cursorborder: "0",
        cursorborderradius: "5px"
    });
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
            serchtext.bind('keydown', function () {
                if (event.keyCode == 13) {
                    LoadPageForSearch();
                }
            });
        }
        else {
            serchtext.stop();
            serchtext.animate({
                width: "0px"
            }, 1000);
            serchtext.removeClass("on");
            $(this).css("background", "");
        }
    });
    //点击搜索框结束
    //添加班级弹出框开始
    $(".addclass").click(function () {
        $(".pop-mask,.createClass").show();
        clearInterval(timer);
    });
    //$(".submit").click(function () {
    //    $(".createClass").hide();
    //    $(".distributeBox").hide();
    //});
    function alerthide() {
        timer = setInterval(function () {
            $(".createClass").hide();
        }, 1000);
    }
    $(".popclose").click(function () {
        $(".createClass,.pop-mask").hide();
        $(".distributeBox").hide();
    });
    //添加班级弹出框结束
    //自定义下拉列表框
    $(".scharea").click(function () {
        $(this).css("border", "1px solid #cb441e");
        var listbox = $(".listbox");
        listbox.show();
        var li = listbox.find("li");
        for (var i = 0; i < li.length; i++) {
            li.eq(i).click(function () {
                var a = $(this).text();
                $(".scharea").text(a);
                listbox.hide();
            })
        }
    });

    module.init();

    //筛选分配或未分配时
    $("#idsearch").bind('change', function () {
        LoadPageForSearch();

    });
})