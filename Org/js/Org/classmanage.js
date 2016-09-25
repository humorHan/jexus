var Paginator = require('Paginator.js');
var pageSize = 10;
var tplTable = require("OrgClass/classlist.tpl");
var tplTableAllocation = require("OrgClass/ClassAllocation.tpl");
var ishasteacher = $("#idsearch").val();
var classname = $.trim($(".serchtext").val());

function paging(page) {
    module.loadPaperList(page);
}
var module = {
    init: function () {
        this.loadPaperList(1);
    }
    , loadPaperList: function (page) {

        var obj = { PageIndex: page, PageSize: pageSize, IsAuto: false, IsDel: false, IsEnable: true, TeacherState: ishasteacher, ClassName: classname };

        //获取班级的列表
        $.ajax({
            type: "POST",
            url: "/Org/ClassManage/GetClass",
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
                    Paginator.Paginator(pageSize, page, totalNum, paging);

                } else {
                    var html = '<tr class="font12"><td colspan=4>' + _result.Result + '</td></tr>';
                    $("#idTableClass tbody").html(html);
                }

                $(".look").click(function () {
                    var $this = $(this);
                    clickLook($this.attr("data-classid"));
                });

                //分配老师
                $(".distribute").click(function () {
                    var data = $(this).attr("data-classid");
                    distributeClick(data);
                })
            }
        });
    }

};

//分配老师
function distributeClick(classid) {
    $(".distributeBox,.pop-mask").show();

    //页面展示，数据获取
    var obj = { ClassID: classid };
    $.ajax({
        url: "/Org/ClassManage/GetAllocatonData",
        data: { str: JSON.stringify(obj) },
        dataType: 'json',
        type: 'POST',
        success: function (data) {
            var _result = data.result;
            if (_result.OK) {
                $("#AllocationDiv").html(tplTableAllocation(_result.Data));
                var firstTeacherid;//
                //清空已选老师
                $('.chosedteacher not:eq(0)').remove();
                //1.先看下有没有已选的老师
                var haveTeacherNum = $(".chosedteacher li").length;
                if (haveTeacherNum == 1) {
                    //1.1 没有分配老师，默认加载页面后，要给右侧老师赋值当前的科目ID
                    var currentSubjectID = $(".leftnews li[class='choose-sub']").attr("data-subjectid");
                    $(".rightnews input").attr("data-subjectid", currentSubjectID);
                } else {
                    //1.2 已分配老师，选出第一个老师的信息，值于默认状态
                    var firstSubjectid = $(".chosedteacher li:eq(1)").first().find("span:eq(0)").attr("data-subjectid");
                    firstTeacherid = $(".chosedteacher li:eq(1)").first().find("span:eq(1)").attr("data-userid");
                    $(".leftnews li").removeClass("choose-sub");
                    $(".leftnews li[data-subjectid='" + firstSubjectid + "']").addClass("choose-sub");
                    GetTeacherBySubjectID(firstSubjectid);
                }
                //2.当点击科目时
                $(".leftnews li").click(function () {
                    var $this = $(this);
                    $this.addClass("choose-sub").siblings().removeClass("choose-sub");
                    var sid = $this.attr("data-subjectid");
                    GetTeacherBySubjectID(sid);
                });
                //3.当点击删除时,先从页面移除，确定后再进行数据库操作。
                $(".dele").click(function () {
                    DeleteLogic(this);
                    //DeleteTeacher(classid, deleteuserid, deletesubjectid);
                });
                //4.当点击确定提交时
                $("#BtnAllocationSubmit").bind('click', function () {
                    AllocationSubmit(classid);
                });
                //5.当点击分配老师时，第一次加载时
                $('input[name="math"]:radio').change(function () {
                    ClickTeacher(this);
                });

            } else {
                $("#AllocationDiv").html("没有数据记录！");
            }

        },
        error: function (data) {

        }
    });


}

//分配教师点击确定提交
function AllocationSubmit(classid) {
    var lis = $(".chosedteacher li");
    if (lis.length > 1) {
        var jarr = [];
        for (var i = 1; i <= lis.length - 1; i++) {
            var obj = { CourseID: '', UserID: "", UserName: '', SubjectID: '', SubjectName: '', ClassID: classid };
            var $rt = $(".chosedteacher li:eq(" + i + ")");
            obj.SubjectID = $rt.find("span:eq(0)").attr("data-subjectid");
            obj.CourseID = $rt.find("span:eq(0)").attr("data-courseid");
            obj.SubjectName = $rt.find("span:eq(0)").text();
            obj.UserID = $rt.find("span:eq(1)").attr("data-userid");
            obj.UserName = $rt.find("span:eq(1)").text();
            jarr.push(obj);
        }
        $.ajax({
            type: 'POST',
            url: '/Org/ClassManage/AllocationTeacherUpdate',
            data: { str: JSON.stringify(jarr) },
            dataType: 'json',
            success: function (data) {
                paging(1);
            },
            error: function (data) {

            }

        });
    }
    //关闭窗口
    $(".createClass,.pop-mask").hide();
    $(".distributeBox").hide();
}

function DeleteLogic(event) {
    var $this = $(event);
    var deleteuserid = $this.attr("data-userid");
    var radioNews = $(".rightnews li :radio[value='" + deleteuserid + "']");
    if (radioNews) {
        radioNews[0].checked = false;
    }
    $this.parent().parent().remove();
    var deletesubjectid = $this.attr("data-subjectid");
}

//分配老师删除
function DeleteTeacher(classid, deleteuserid, deletesubjectid) {
    //alert(classid + "," + deleteuserid + "," + deletesubjectid);
    var obj = { ClassID: classid, UserID: deleteuserid, SubjectID: deletesubjectid };
    $.ajax({
        url: '/Org/ClassManage/DeleteTeacher',
        type: 'POST',
        data: { str: JSON.stringify(obj) },
        dataType: 'json',
        success: function (data) {

        }, error: function (data) {

        }
    });
}

//点击老师时
function ClickTeacher(event) {
    var $this = $(event);
    var userid = $this.val();
    var subjectid = $this.attr("data-subjectid");
    var username = $this.attr("data-username");
    var $liTeacher = $(".chosedteacher li");
    var Exist = false;
    $liTeacher.each(function () {
        var $this2 = $(this);
        var sjd = $this2.find("span:eq(0)").attr("data-subjectid");
        if (sjd == subjectid) {
            $this2.find("span:eq(1)").attr("data-userid", userid);
            $this2.find("span:eq(1)").text(username);

            $this2.find("span:eq(2) i").attr("data-userid", userid);
            $this2.find("span:eq(2) i").attr("data-subjectid", subjectid);

            Exist = true;
        }
    });
    //不存在，则添加
    if (!Exist) {

        var subjectName = $(".leftnews li[class='choose-sub']").text();
        var htm = "<li><span data-subjectid='" + subjectid + "'>" + subjectName + "</span><span data-userid='" + userid + "'>" + username + "</span>";
        htm += "<span><i class=\"dele cursor\" data-subjectid=\"" + subjectid + "\" data-userid=\"" + userid + "\"></i></span></li>";
        $(htm).appendTo($(".chosedteacher"));
        $(".dele").click(function () {
            DeleteLogic(this);
        });
    }
}

//点击左侧的科目，右侧显示相应的老师
function GetTeacherBySubjectID(sid) {
    var html = "";
    var firstTeacherid = $(".chosedteacher li:eq(1)").first().find("span:eq(1)").attr("data-userid");
    $.ajax({
        url: '/Org/ClassManage/GetTeacherBySubjectId',
        type: 'POST',
        data: { "sid": sid },
        dataType: 'json',
        success: function (data) {
            var _result = data.result;

            if (_result.OK && _result.Data.ListUser.length > 0) {
                var datalist = _result.Data.ListUser;
                html += "<li>";
                for (var i = 0; i < datalist.length; i++) {
                    html += "<span class=\"teach-name\"><label><input type=\"radio\" name=\"math\" value='" + datalist[i].UserID + "'  data-subjectid='" + datalist[i].SubjectID + "' data-username='" + datalist[i].UserName + "' />" + datalist[i].UserName + "</label></span>";
                    if ((i + 1) % 2 == 0) {
                        html += "</li><li>";
                    }
                }
                html += "</li>";
                $(".rightnews").html(html);
                //当点击老师时，下面已选择的老师进行更新或添加
                $('input[name="math"]:radio').change(function () {
                    ClickTeacher(this);
                });


                //1.3默认选中第一个老师
                //if (firstTeacherid!=undefined) {
                //    $(".rightnews li :radio[value=" + firstTeacherid + "]").attr("checked", "checked");
                //}
                //2.点击后判断下面是否有该科目的老师，如果有，则默认选中。
                var userid = $(".chosedteacher li span[data-subjectid='" + sid + "']").parent().find("span:eq(1)").attr("data-userid");
                $(".rightnews li :radio[value=" + userid + "]").attr("checked", "checked");


            } else {
                html = "<li>该科目无老师！</li>";
                $(".rightnews").html(html);
            }
        },
        error: function (data) {
            html = "<li>" + data.Result + "</li>";
            $(".rightnews").html(html);
        }
    });
}

//点击查看
function clickLook(classid) {
    window.location.href = "/Org/ClassManage/ClassDetail/?classid=" + classid + "&comefrom=1";
}

//点击老师状态时
function LoadPageForSearch() {
    ishasteacher = $("#idsearch").val();
    classname = $.trim($(".serchtext").val());
    module.loadPaperList(1);
}

function getChrLen(str, maxLength) {
    var realLength = 0, len = str.length, charCode = -1;
    x = 0;
    for (; (x < len) && (realLength <= maxLength * 2) ; x++) {
        charCode = str.charCodeAt(x);
        if (charCode >= 0 && charCode <= 128)
            realLength += 1;
        else
            realLength += 2;
    }
    return realLength;
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
    $(".serch").click(function () {
        $(this).css("background", "#cb441e");
        var serchtext = $(".serchtext");
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

    //定义提示语
    var classNameNum = 12;
    var classNameMax = "班级名称不能超过6个字符！";

    //创建班级》验证
    $("#inputClassName").bind('blur', function () {
        var $this = $(this);
        var inval = $.trim($this.val());
        if (inval == '') {
            $("#inputmsg").html("班级名称不能为空！");
            return;
        }
        if (getChrLen(inval, classNameNum) > classNameNum) {
            $("#inputmsg").html(classNameMax);
            return;
        }
        $("#inputmsg").html("");
    });

    //创建班级》点击完成按扭
    $("#btnCreateClassSubmit").click(function () {
        var classname = $.trim($("#inputClassName").val());
        if (getChrLen(classname, classNameNum) > classNameNum) {
            $("#inputmsg").html(classNameMax);
            return false;
        } else {
            var obj = { ClassName: "" };
            obj.ClassName = classname;
            $.ajax({
                type: 'POST',
                url: '/Org/ClassManage/AddClass',
                data: { str: JSON.stringify(obj) },
                dataType: 'json',
                success: function (data) {
                    var ok = data.result.OK;
                    if (!ok) {
                        $("#inputmsg").html(data.result.Result);
                        return;
                    } else {
                        $(".pop-mask").hide();
                        $(".createClass").hide();
                        $(".distributeBox").hide();
                        //刷新页面
                        module.init();
                    }
                },
                error: function (data) {
                    //debugger;
                }

            });
        }

    });

    //筛选分配或未分配时
    $("#idsearch").bind('change', function () {
        LoadPageForSearch();
    });
})