
var pop = require("util/util.js");

//是否chrome浏览器
var isChrome = navigator.userAgent.toLowerCase().match(/chrome/) != null;
if (isChrome) { }
else {
    $("#topA").show();
}

//是否收藏
var keep = pop.getCookie("org-keep");
if (keep && keep != '') {
    $("#keepA").css({ "background-image": '../../bundle/img/heart-btn2.png' });
}
else {
    $("#keepA").css({ "background-image": '../../bundle/img/heart-btn1.png' });
}



$(function () {
    //    
    $("#login").click(function () {

        if ($("#login").attr("data-ok") == "1") {
            //已经登录
            location.href = "/Org/Index/";

            return;
        }

        if (pop.getCookie("org-isauto") && pop.getCookie("org-isauto") != "0") {
            $("#org-isauto").attr("checked", true);
            $("#userpwd").val(pop.getCookie("org-token"));//填充密码
        }
        else {
            $("#org-isauto").attr("checked", false);
            $("#userpwd").val("");
        }

        //填充账号
        $("#usercode").val(pop.getCookie("org-code"));

        //弹出层
        $("#org-login,.pop-mask").show();

    });

    $("#org-forget").click(function () {
        $("#org-login").hide();
        $("#org-re").show();
    });

    $("#org-re-a").click(function () {
        $("#org-re,.pop-mask").hide();
    });

    $("#chatA").mouseenter(function () {
        $("#chatB").show();
    });

    $("#chatA").mouseleave(function () {
        $("#chatB").hide();
    });

    // 自动登录按钮
    $("#org-isauto").click(function () {
        var k = "0";
        if ($(this).is(":checked")) {
            k = "1";
        }
        setIsAuto(k);
    });

    $.ajax({
        type: "post",
        url: "/Home/Init",
        dataType: "json",
        error: function (e) {

        },
        success: function (e) {
            if (e && e.Data) {
                $("#infoTel").text(e.Data.Tel);
                var d = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
                $("#infoDay").text(d[e.Data.WorkStart] + "到" + d[e.Data.WorkEnd]);
                $("#infoTime").text(e.Data.TimeStart + " - " + e.Data.TimeEnd);
                $("#infoAddr").text("联系电话：" + e.Data.Tel + "（" + d[e.Data.WorkStart] + "至" + d[e.Data.WorkEnd]
                    + " " + e.Data.TimeStart + "-" + e.Data.TimeEnd + "） | 地址：" + e.Data.Addr);
                $("#infoRecord").text(e.Data.RecordInfo);
                $("#infoLogo").attr({ "src": e.Data.Logo });
                $("#chatC-image").attr({ "data-image": e.Data.WeChatLogo });
                BindTag(e);
            }
            else {
                $("#infoLogo").attr({ "src": $("#infoLogo-image").att("data-image") });
            }
        }
    });



    $("#ok").click(function () {
        login();
    });

    $("#userpwd").keydown(function () {
        if (event.keyCode == 13 || event.keyCode == 9)//tab
        {
            $("#ok").click();
        }
    });

    $("#imgAuthCode").click(function () {
        setVC();
    });

});


//绑定其它属性 
function BindTag(e) {

    if (e) {
        if (e.Data.IsWeChat) {
            $("#chatA").show();
            $("#chatC").css({ "background-image": $("#chatC-image").attr("data-image") });
        }
        setLogin(e.TokenID);
    }
}

function setLogin(e) {
    if (e && e != "" && e == pop.getCookie("org-token")) {
        $("#login").text("立即进入");
        $("#login").attr({ "data-ok": 1 });
    }
    else {
        $("#login").text("登录");
        $("#login").attr({ "data-ok": 0 });
    }
}


function login() {

    if ($.trim($("#usercode").val()) == "" || $.trim($("#userpwd").val()) == "") {
        $("#org-code").text("提示：用户名或密码不能为空！");
        $("#org-code").removeClass("hidden");
        return;
    }

    var orgCode = $("#usercode").val();

    $.ajax({
        type: "post",
        url: "/Home/Login",
        data: {
            Token: pop.getCookie("org-token"),
            IsAuto: pop.getCookie("org-isauto"),
            UserCode: orgCode,
            UserPWD: $("#userpwd").val()
        },
        dataType: "json",
        error: function (e) {

        },
        success: function (e) {
            if (e.OK) {
                $("#org-code").addClass("hidden");
                setCode(orgCode);
                if ($("#org-isauto").is("checked")) {
                    setIsAuto(1);//设置下次登录
                }
                setLogin(pop.getCookie("org-token"));//登录成功
                $("#org-login,.pop-mask").hide();
                //
                location.href = "/Org/Index/";
            }
            else {
                $("#org-code").text("提示：" + e.Result);
                $("#org-code").removeClass("hidden");

                //setVC();
                //$("#org-validate").removeClass("hidden");
            }
        }
    });
}

//设置自动登录属性
function setIsAuto(e) {
    pop.setCookie("org-isauto", e, 24 * 1000);
}

//设置账号
function setCode(e) {
    pop.setCookie("org-code", e, 24 * 1000);
}

//获取验证码
function setVC() {
    $("#imgAuthCode").attr("src", "/Home/VCode?" + Math.random());
}