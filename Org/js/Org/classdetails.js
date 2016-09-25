var tplTable = require("OrgClass/classdetail.tpl");

var module = {
    init: function () {

    }
    , render: function (classid) {
        var obj = { ClassID: classid };
        $.ajax({
            type: 'POST'
            , url: '/Org/ClassManage/GetClassDetail'
            , dataType: 'json'
            , data: { str: JSON.stringify(obj) }
            , success: function (data) {
                var classname = data.result.Data.MfgClassModel.ClassName;
                $(".edittext").val(classname);
                $(".classname").text(classname);

                $("#classDetailContext").html(tplTable(data.result.Data));

                if (data.result.Data != null && data.result.Data.ListModel != null && data.result.Data.ListModel.length > 0) {
                    //老师数量 
                    $("#teacherNum").text(data.result.Data.ListModel.length);
                    //总容：classDetailContext

                }


            }
            , error: function (data) {

            }
        });
    }
};


//定义提示语
var classNameNum = 12;
var classNameMax = "班级名称不能超过6个字符！";
//判断字数
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
    var inputtext = $(".edittext");
    var classname = $(".classname");
    var houselogo = $(".house");
    var edit = $(".edit");
    inputtext.hide();
    inputtext.val(classname.text());
    edit.bind("click", function (e) {
        $(".editok").hide();
        houselogo.hide();
        classname.hide();
        $(this).hide();
        inputtext.show().val(classname.text());
        e.stopPropagation();
    });
    inputtext.bind("click", function (e) {
        e.stopPropagation();
    });
    $(document).click(function () {
        $(".editimg").hide();
        $(".editok").show();
        houselogo.show();
        inputtext.hide();
        edit.show();
        classname.text(inputtext.val()).show();
    });

    //判断是从学管进入还是超管进的来的
    var comefromid = $.trim($("#ComeFrom").val());
    if (comefromid == "1") {
        $("#idBlackPage").attr("href", "/Org/ClassManage/Index");
    } else {
        $("#idBlackPage").attr("href", "/Org/ClassManage/SuperManager");
        $("img.editok").remove();
        $("img.editimg").remove();
    }

    //修改班级名称
    inputtext.blur(function () {
        var $this = $(this);
        var cname = $.trim($this.val());
        if (cname == '') {
            $this.val(classname.text());
            return;
        }
        if (getChrLen(cname, classNameNum) > classNameNum) {
            alert(classNameMax);
            return;
        }

        var obj = { ClassName: cname, ClassID: $.trim($("#ClassID").val()) }

        $.ajax({
            type: 'POST'
            , url: "/Org/ClassManage/UpdateClassName"
            , data: { "str": JSON.stringify(obj) }
            , dataType: "json"
            , success: function (data) {
                var ok = data.result.OK;
                if (!ok) {
                    alert(data.result.Result);
                    return;
                }
            }
        });
    });

    module.render($.trim($("#ClassID").val()));


});

