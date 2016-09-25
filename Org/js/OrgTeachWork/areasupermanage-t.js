
var tplTable = require("OrgTeachWork/areasupermanage.tpl");
var pop = require("./PopCommon.js");
var Paginator = require('Paginator.js');

var module = {
    init: function () {
        //todo 逻辑函数
        //this.loadOrgMsg();
        this.render();
        this.initBtns();

    },

    render: function () {
        //加载大区信息
        $.ajax({
            type: "post",
            url: "/OrgTeachWork/Organization/GetOrgMsg",
            dataType: "json",
            data: {

            },
            success: function (data) {

                if (data.result.Data) {
                    $("#OrgName").html(data.result.Data.OrgName);
                    $("#AreaCount").html(data.result.Data.AreaCount);
                    loadOrgMsg();//成功之后在加载
                }
                else {


                }
            }
        });



    },
    initBtns: function () {
        //todo 绑定事件
        ///处理截断字符串
        function BindStrCut(obj) {

            if (obj.length > 4) {
                obj = obj.substring(0, 4) + "...";
                return obj;
            }
            return obj;


        };

        //委托选学校
        $('#scList').delegate(".checkbox", "click", function () {
            var id = $(this).attr("data-id");
            var name = BindStrCut($(this).attr("data-name"));
            var temp = "";
            temp += "<li class='overflow' id=a" + id + "><span class='left schname'>" + name + "</span> <i  data-id=" + id + " class='dustbin cursor right'   ></i></li>";
            if ($("#a" + id).length > 0) {
                $("#a" + id).remove();
            } else {
                $("#scaList").append(temp);
            }
        });

        //委托删除学校
        $('#scaList').delegate(".dustbin", "click", function () {
            var obj = $(this).attr("data-id");
            $("#a" + obj).remove();
            $("#chk" + obj).attr("checked", false);

        });
    }


};
//加载学校列表
function loadOrgMsg(page) {

    if (page == undefined) {
        page = 1;
    }

    //加载列表
    $.ajax({
        type: "post",
        url: "/OrgTeachWork/Organization/GetAreaList",
        dataType: "json",
        data: {
            SerchName: escape($("#txtserch").val()),
            PageIndex: page,
            PageSize: 10
        },
        success: function (data) {

            if (data.result.Data) {
                $("#tb").html(tplTable(data.result));
                Paginator.Paginator(10, page, data.TotalCount, loadOrgMsg);
            }
            else {


                $("#tb").html("");//清空数据
                $("#pagination").html("");//分页控件不显示


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
    //添加班级弹出框开始
    $(".addarea").click(function () {
        pop.MaskShow();
        clearForm();//清除表单
        //加载经理列表
        $.ajax({
            type: "post",
            url: "/OrgTeachWork/Organization/GetManageByOrg",
            async: false,
            dataType: "json",
            data: {

            },
            success: function (data) {

                if (data.result.Data) {

                    var jlhtml = "";
                    jlhtml += '<option value="0">请选择</option>';
                    for (var key in data.result.Data) {
                        if (data.result.Data[key].ManageId != undefined) {
                            //<li>北京校区</li>
                            //jlhtml += '<li id="' + data.result.Data[key].ManageId + '">' + data.result.Data[key].ManageName + '</li>';
                            jlhtml += '<option value="' + data.result.Data[key].ManageId + '">' + data.result.Data[key].ManageName + '</option>';
                        }
                    }
                    $("#managerid").html(jlhtml);

                    InitScls();
                }
                else {


                }
            }
        });


        //加载经理
        $(".createArea").show();
        clearInterval(timer);

    });
    //加载学校列表
    function InitScls() {

        //加载学校列表
        $.ajax({
            type: "post",
            url: "/OrgTeachWork/Organization/GetSchoolsByOrgId",
            dataType: "json",
            data: {
                OrgId: 1

            },
            success: function (data) {//data.result;  
                var schtml = "";

                for (var key in data.result.Data) {
                    if (data.result.Data[key].SchoolName != undefined) {
                        schtml += '<li><input type="checkbox"  class="checkbox" data-id="' + data.result.Data[key].SchoolId + '" data-name="' + data.result.Data[key].SchoolName + '"  id="chk' + data.result.Data[key].SchoolId + '" "/>' + BindStrCut(data.result.Data[key].SchoolName) + '</li>';
                    }
                }
                $("#scList").html(schtml);



            }
        });
        //加载列表结束

    }


    $(".submit").click(function () {
        //校验
        if ($("#areaname").val() == "") {
            $("#addtip").removeClass("hidden");
            $("#addtip").html('<span class="alert-news">请输入大区名称！</span>');
            return;

        }
        if ($("#managerid").val() == "0") {
            $("#addtip").removeClass("hidden");
            $("#addtip").html('<span class="alert-news">请选择经理！</span>');
            return;

        }

        OptChSc();//经理信息
        // submitResult();
        var option = {};
        option.Name = $("#areaname").val();
        option.ManagerId = $("#managerid").val();
        option.SchoolIds = $("#schstrs").val();
        $.ajax({
            type: "post",
            url: "/OrgTeachWork/Organization/AddArea",
            dataType: "json",
            data: {
                data: JSON.stringify(option)
            },
            success: function (data) {//data.result;  

                alert("处理成功");

            }
        });
        document.location.reload();

        $(".createArea").hide();


    });


    //$(".popclose").click(function () {
    //    $(".createArea").hide();
    //});
    //添加班级弹出框结束


    //清空信息
    function clearForm() {
        var input = $("#form1").children().find("input");
        for (var i = 0; i < input.length; i++) {
            $(input[i]).val("");
        }
        var list = $("#Sex").children().find("i");
        $("#scaList").html("");
    }
    ///处理截断字符串
    function BindStrCut(obj) {

        if (obj.length > 4) {
            obj = obj.substring(0, 4) + "...";
            return obj;
        }
        return obj;

    };

    //组装选择学校列表
    function OptChSc() {

        var str = "";
        $("#scList :checkbox").each((function () {

            if ($(this).is(":checked")) {
                str += this.id.replace("chk", "");
                str += ",";
            }


        }));

        if (str.length > 1) {
            $("#schstrs").val(str.substring(0, str.length - 1));
        }


    }



    //自定义下拉列表框开始
    //$(".scharea").click(function () {
    //    //$(this).css("border","1px solid #cb441e");
    //    var listbox = $(".listbox");
    //    listbox.show();
    //    var li = listbox.find("li");
    //    for (var i = 0; i < li.length; i++) {
    //        li.eq(i).click(function () {
    //            var a = $(this).text();
    //            var b = this.id;

    //            $(".scharea").text(a);
    //            $("#mangehi").val(b);
    //            listbox.hide();
    //        });
    //    }
    //});
    //自定义下拉列表框结束
    //处理自定义下拉框的事件
    //$(document).click(function (event) {

    //    if (event.target.nodeName.toLowerCase() == "span") {

    //    } else {
    //        $(".listbox").hide();
    //    }

    //});


});

