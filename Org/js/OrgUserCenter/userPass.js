var countdown = 60;
var timefun;
var ConfirmSmsCode = false;
var module = function () {
    this.init = function () {
        //todo 逻辑函数 
        OnBind();
        EditPhone();
        EditPassword();
        ClosePop();
        BtnSavePhone();
        BtnSaveOldPasswd();
        BtnSaveNewPasswd();
        BtnAgain();
        SendSms();
        BindGoIphone();

    };
    var OnBind = function () {
        Initnum_iphone();
        Initold_password();
        Initedit_byiphone();

      
        $('#inputphone').bind('input propertychange', function () {
            $("#iphonePrompt").hide();
        });
        $('#inputbindphone').bind('input propertychange', function () {
            $("#inputbindphoneshow").hide();
        });   
        $('#inputphonepasswd').bind('input propertychange', function () {
            $("#inputphonepasswdshow").hide();
        });   
        $('#inputbindcode').bind('input propertychange', function () {
            $("#inputbindcodeshow").hide();
        });
        $('#inputsmscode').bind('input propertychange', function () {
            if ($(this).val().length == 6) {
                //$.ajax({
                //    url: "/OrgUserCenter/User/AddFeedback",
                //    data: {
                //        content: userMsg

                //    },
                //    dataType: "json",
                //    type: "post",
                //    success: function (e) {
                //        ConfirmSmsCode = true;
                //    }
                //});

            }
            if ($(this).val().length > 6) {
                $(this).attr("disable", true);
            }

        });

        ////监听旧密码输入
        //$('#inputoldpasswd').blur(function () {
        //    var oldpasswd = $("#inputoldpasswd").val();
        //    if ($.trim(oldpasswd).length == 0)
        //    {
        //        alert("密码不能为空");
        //        $("#inputoldpasswd").focus();
        //        return;
        //    }
        //    //$.ajax({
        //    //    url: "/OrgUserCenter/User/AddFeedback",
        //    //    data: {
        //    //        oldContent: oldpasswd
        //    //    },
        //    //    dataType: "json",
        //    //    type: "post",
        //    //    success: function (e) {
                    
        //    //    },
        //    //    error:function(e)
        //    //    {
        //    //        $("#oldpasswdshow").show();
        //    //    }
        //    //});
        //});
        //监听新密码输入
        //$('#inputnewpasswd').blur(function () {
        //    var newpasswd = $("#inputnewpasswd").val();
        //    var reg = /^[A-Za-z0-9]+$/;
        //    if ($.trim(newpasswd).length == 0) {
        //        alert("新密码不能为空");
        //        return;
        //    }
        //    if($.trim(newpasswd).length<6||$.trim(newpasswd).length>15)
        //    {
        //        alert("新密码长度在6-15之间！");
        //        return;
        //    }
        //    if (!reg.test(newpasswd))
        //    {
        //        alert("新密码格式不正确！");
        //        return;
        //    }
        //});

    };
    
    //修改手机的弹窗提示 初始化
    var Initnum_iphone = function () {
      
        $(".num_iphone").hide();
        $("#inputphone").val("");
        $("#iphonePrompt").hide();
        $("#inputsmscode").val("");
        $("#checkPrompt").hide();
    };
    //修改旧密码的弹窗提示 初始化
    var Initold_password = function () {
        $(".old_password").hide();
        $("#inputoldpasswd").val("");
        $("#oldpasswdshow").hide();
        $("#inputnewpasswd").val("");
        $("#newpasswdshow").hide();
    };
    //通过手机号修改密码弹窗提示 初始化
    var Initedit_byiphone = function () {
        $("#inputbindphone").val("");
        $("#inputbindphoneshow").hide();
        $("#inputbindcode").val("");
        $("#inputbindcodeshow").hide();
        $("#inputphonepasswd").val("");
        $("#inputphonepasswdshow").hide();
    };
    //点击修改手机
    var EditPhone = function () {
        $("#editiphone").click(function () {
            Initnum_iphone();
            StopSettime("sendSms");
           
            $(".num_iphone").show();
            $('#inputphone').focus();
        });
    };
    //点击修改密码
    var EditPassword = function () {
        $("#editpassword").click(function () {
            Initold_password();
            $(".old_password").show();
        });
        
    };
    var ClosePop = function () {
        $(".cursor").click(function () {     
            $(this).parent().parent().hide();
          
        });

    };
    //修修改手机的弹窗提示 确认按钮
    var BtnSavePhone = function () {
        $("#btnSavePhone").click(function () {
            var phoneinput = $("#inputphone").val();
            if (!CheckPhone(phoneinput)) {
                $("#iphonePrompt").show();
                $("#inputphone").focus();
                return;
            }
            var inputsmscode = $("#inputsmscode").val();
            if($.trim(inputsmscode).length==0)
            {
              $("#checkPrompt").show();
               return;
            }
            //$.ajax({
            //    url: "/OrgUserCenter/User/",
            //    data: {
            //        mobile: ''

            //    },
            //    dataType: "json",
            //    type: "post",
            //    success: function (e) {
            //       
            //    },
            //    error:function(e)
            //    {}
            //});
        });
    };
    //修改旧密码的弹窗提示 确认按钮
    var BtnSaveOldPasswd = function () {
        $("#btnSaveOldPasswd").click(function () {

            var inputoldpasswd = $("#inputoldpasswd").val();
            if ($.trim(inputoldpasswd).length == 0) {
                $(".iphonePrompt").html("旧密码不能为空！");
                $("#oldpasswdshow").show();
                $("#inputoldpasswd").focus();
                return;
            }
            //$.ajax({
            //    url: "/OrgUserCenter/User/",
            //    data: {
            //        passwd: ''

            //    },
            //    dataType: "json",
            //    type: "post",
            //    success: function (e) {
            //        $("#oldpasswdshow").show();
            //    },
            //    error:function(e)
            //    {
            //        $("#oldpasswdshow").show();
            //    }
            //});

            var inputnewpasswd = $("#inputnewpasswd").val();
            var reg = /^[A-Za-z0-9]+$/;
            if ($.trim(inputnewpasswd).length == 0) {
                $(".newpassword").html("新密码长度在6-15之间！");
                $("#newpasswdshow").show();
                return;
            }  
            if ($.trim(inputnewpasswd).length < 6 || $.trim(inputnewpasswd).length > 15) {
                $(".newpassword").html("新密码长度在6-15之间！");
                $("#newpasswdshow").show();
                
                return;
            }
            if (!reg.test(inputnewpasswd)) {
             
                $(".newpassword").html("新密码格式不正确！");
                $("#newpasswdshow").show();
                return;
            }


        });
    };
  
    ///绑定go
    var BindGoIphone = function () {
        $("#gophone").click(function () {
            Initedit_byiphone();
            StopSettime("othersendSms");
            $(".old_password").hide();
            $(".edit_byiphone").show();
        });
    };
    //通过手机号修改密码弹窗提示 确认按钮
    var BtnSaveNewPasswd = function () {
        $("#btnSaveNewPasswd").click(function () {
            var inputbindphone = $("#inputbindphone").val();
            if (!CheckPhone(inputbindphone)) {
              
                $("#inputbindphoneshow").show();
                $("#inputbindphone").focus();
                return;
            }
            var inputbindcode = $("#inputbindcode").val();
            if ($.trim(inputbindcode).length == 0) {
                $("#inputbindcodeshow").show();
                return;
            }
            var inputphonepasswd = $("#inputphonepasswd").val();
            var reg = /^[A-Za-z0-9]+$/;
            if ($.trim(inputphonepasswd).length == 0) {
                $(".newpass").html("新密码长度在6-15之间！");
                $("#inputphonepasswdshow").show();
                return;
            }
            if ($.trim(inputphonepasswd).length < 6 || $.trim(inputphonepasswd).length > 15) {
                $(".newpass").html("新密码长度在6-15之间！");
                $("#inputphonepasswdshow").show();

                return;
            }
            if (!reg.test(inputphonepasswd)) {

                $(".newpass").html("新密码格式不正确！");
                $("#inputphonepasswdshow").show();
                return;
            }

        });
    };
    //重新修改
    var BtnAgain = function () {
        $("#btnAgain").click(function () {
        });
    };
    //点击方式验证码
    var SendSms = function () {
        $("#sendSms").click(function () {        
            var phoneinput = $("#inputphone").val();
            if (!CheckPhone(phoneinput)) {
                $("#iphonePrompt").show();
                $("#inputphone").focus();
                 return;
            }
            Settime("sendSms");
        });
        $("#othersendSms").click(function () {
            var phoneinput = $("#inputbindphone").val();
            if (!CheckPhone(phoneinput)) {
                $("#inputbindphoneshow").show();
                $("#inputbindphone").focus();
                 return;
            }
            Settime("othersendSms");
        });
    };
    //发送验证码计时
    var Settime = function (objid) {
        if (countdown == 0) {
            $("#" + objid).removeAttr("disabled");
            $("#" + objid).html("点击发送验证码");
        }
        else {
            $("#" + objid).attr("disabled", true);
            $("#" + objid).html("重新发送(" + countdown + ")");
            countdown--;
        }
        timefun = setTimeout(function () { Settime(objid) }, 1000);
    };
    var StopSettime = function (objid) {
        if(timefun!='')
        {
            clearTimeout(timefun);
        }
        countdown = 60;
        $("#" + objid).html("点击发送验证码");
    };

    //var Settime = function (obj) {
    //    if(countdown==0)
    //    {   
    //        obj.removeAttribute("disabled");
    //        $("#sendSms").html("点击发送验证码");
    //        countdown = 60;
    //        flag = false;
    //    }
    //    else
    //    {
    //        obj.setAttribute("disabled", true);  
    //        $("#sendSms").html("重新发送(" + countdown + ")");
    //        countdown--;
    //    }
    //     //SetTimeOutSms(obj);
    //    //timefun=setTimeout(function () { Settime(obj) }, 1000);
    //    if(flag)
    //    {
    //        setTimeout(function () { Settime(obj) }, 1000);
    //    }
    //};
    //var SetTimeOutSms = function (obj) {
    //    setTimeout(function () { Settime(obj) }, 1000);
    //};

    var CheckPhone = function (obj) {
        var pattern = /^1[34578]\d{9}$/;
        if ($.trim(obj).length == 0)
        {         
            return false;
        }
        if (!pattern.test(obj)) {
          
         
            return false;
        }
        return true
    };
};

//绑定数据
$(function () {
    new module().init();
    
});