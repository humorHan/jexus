webpackJsonp([40,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(101);


/***/ },

/***/ 101:
/***/ function(module, exports) {

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

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnVXNlckNlbnRlci91c2VyUGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUyxFO0FBQ1Q7QUFDQTtBQUNBLFVBQVMsRTtBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakIsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7O0FBRVg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBLHlDO0FBQ0E7O0FBRUEsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZ0JBQWU7QUFDZixVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsaUJBQWlCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxlQUFlO0FBQzNEO0FBQ0E7QUFDQSx1Q0FBc0MsZUFBZTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0MsZUFBZTtBQUNqRDs7QUFFQTtBQUNBLG9DQUFtQyxFQUFFO0FBQ3JDO0FBQ0EsVTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQyxFIiwiZmlsZSI6InVzZXJQYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvdW50ZG93biA9IDYwO1xyXG52YXIgdGltZWZ1bjtcclxudmFyIENvbmZpcm1TbXNDb2RlID0gZmFsc2U7XHJcbnZhciBtb2R1bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy90b2RvIOmAu+i+keWHveaVsCBcclxuICAgICAgICBPbkJpbmQoKTtcclxuICAgICAgICBFZGl0UGhvbmUoKTtcclxuICAgICAgICBFZGl0UGFzc3dvcmQoKTtcclxuICAgICAgICBDbG9zZVBvcCgpO1xyXG4gICAgICAgIEJ0blNhdmVQaG9uZSgpO1xyXG4gICAgICAgIEJ0blNhdmVPbGRQYXNzd2QoKTtcclxuICAgICAgICBCdG5TYXZlTmV3UGFzc3dkKCk7XHJcbiAgICAgICAgQnRuQWdhaW4oKTtcclxuICAgICAgICBTZW5kU21zKCk7XHJcbiAgICAgICAgQmluZEdvSXBob25lKCk7XHJcblxyXG4gICAgfTtcclxuICAgIHZhciBPbkJpbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgSW5pdG51bV9pcGhvbmUoKTtcclxuICAgICAgICBJbml0b2xkX3Bhc3N3b3JkKCk7XHJcbiAgICAgICAgSW5pdGVkaXRfYnlpcGhvbmUoKTtcclxuXHJcbiAgICAgIFxyXG4gICAgICAgICQoJyNpbnB1dHBob25lJykuYmluZCgnaW5wdXQgcHJvcGVydHljaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIjaXBob25lUHJvbXB0XCIpLmhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjaW5wdXRiaW5kcGhvbmUnKS5iaW5kKCdpbnB1dCBwcm9wZXJ0eWNoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIiNpbnB1dGJpbmRwaG9uZXNob3dcIikuaGlkZSgpO1xyXG4gICAgICAgIH0pOyAgIFxyXG4gICAgICAgICQoJyNpbnB1dHBob25lcGFzc3dkJykuYmluZCgnaW5wdXQgcHJvcGVydHljaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIjaW5wdXRwaG9uZXBhc3N3ZHNob3dcIikuaGlkZSgpO1xyXG4gICAgICAgIH0pOyAgIFxyXG4gICAgICAgICQoJyNpbnB1dGJpbmRjb2RlJykuYmluZCgnaW5wdXQgcHJvcGVydHljaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIjaW5wdXRiaW5kY29kZXNob3dcIikuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyNpbnB1dHNtc2NvZGUnKS5iaW5kKCdpbnB1dCBwcm9wZXJ0eWNoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkubGVuZ3RoID09IDYpIHtcclxuICAgICAgICAgICAgICAgIC8vJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIC8vICAgIHVybDogXCIvT3JnVXNlckNlbnRlci9Vc2VyL0FkZEZlZWRiYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAvLyAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgY29udGVudDogdXNlck1zZ1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgICAvLyAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICAgIC8vICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgQ29uZmlybVNtc0NvZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgfVxyXG4gICAgICAgICAgICAgICAgLy99KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkubGVuZ3RoID4gNikge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKFwiZGlzYWJsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8vL+ebkeWQrOaXp+Wvhueggei+k+WFpVxyXG4gICAgICAgIC8vJCgnI2lucHV0b2xkcGFzc3dkJykuYmx1cihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgdmFyIG9sZHBhc3N3ZCA9ICQoXCIjaW5wdXRvbGRwYXNzd2RcIikudmFsKCk7XHJcbiAgICAgICAgLy8gICAgaWYgKCQudHJpbShvbGRwYXNzd2QpLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgIC8vICAgIHtcclxuICAgICAgICAvLyAgICAgICAgYWxlcnQoXCLlr4bnoIHkuI3og73kuLrnqbpcIik7XHJcbiAgICAgICAgLy8gICAgICAgICQoXCIjaW5wdXRvbGRwYXNzd2RcIikuZm9jdXMoKTtcclxuICAgICAgICAvLyAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvLyAgICAvLyQuYWpheCh7XHJcbiAgICAgICAgLy8gICAgLy8gICAgdXJsOiBcIi9PcmdVc2VyQ2VudGVyL1VzZXIvQWRkRmVlZGJhY2tcIixcclxuICAgICAgICAvLyAgICAvLyAgICBkYXRhOiB7XHJcbiAgICAgICAgLy8gICAgLy8gICAgICAgIG9sZENvbnRlbnQ6IG9sZHBhc3N3ZFxyXG4gICAgICAgIC8vICAgIC8vICAgIH0sXHJcbiAgICAgICAgLy8gICAgLy8gICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIC8vICAgIC8vICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgIC8vICAgIC8vICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgLy8gICAgfSxcclxuICAgICAgICAvLyAgICAvLyAgICBlcnJvcjpmdW5jdGlvbihlKVxyXG4gICAgICAgIC8vICAgIC8vICAgIHtcclxuICAgICAgICAvLyAgICAvLyAgICAgICAgJChcIiNvbGRwYXNzd2RzaG93XCIpLnNob3coKTtcclxuICAgICAgICAvLyAgICAvLyAgICB9XHJcbiAgICAgICAgLy8gICAgLy99KTtcclxuICAgICAgICAvL30pO1xyXG4gICAgICAgIC8v55uR5ZCs5paw5a+G56CB6L6T5YWlXHJcbiAgICAgICAgLy8kKCcjaW5wdXRuZXdwYXNzd2QnKS5ibHVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICB2YXIgbmV3cGFzc3dkID0gJChcIiNpbnB1dG5ld3Bhc3N3ZFwiKS52YWwoKTtcclxuICAgICAgICAvLyAgICB2YXIgcmVnID0gL15bQS1aYS16MC05XSskLztcclxuICAgICAgICAvLyAgICBpZiAoJC50cmltKG5ld3Bhc3N3ZCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAvLyAgICAgICAgYWxlcnQoXCLmlrDlr4bnoIHkuI3og73kuLrnqbpcIik7XHJcbiAgICAgICAgLy8gICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgLy8gICAgaWYoJC50cmltKG5ld3Bhc3N3ZCkubGVuZ3RoPDZ8fCQudHJpbShuZXdwYXNzd2QpLmxlbmd0aD4xNSlcclxuICAgICAgICAvLyAgICB7XHJcbiAgICAgICAgLy8gICAgICAgIGFsZXJ0KFwi5paw5a+G56CB6ZW/5bqm5ZyoNi0xNeS5i+mXtO+8gVwiKTtcclxuICAgICAgICAvLyAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvLyAgICBpZiAoIXJlZy50ZXN0KG5ld3Bhc3N3ZCkpXHJcbiAgICAgICAgLy8gICAge1xyXG4gICAgICAgIC8vICAgICAgICBhbGVydChcIuaWsOWvhueggeagvOW8j+S4jeato+ehru+8gVwiKTtcclxuICAgICAgICAvLyAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvL30pO1xyXG5cclxuICAgIH07XHJcbiAgICBcclxuICAgIC8v5L+u5pS55omL5py655qE5by556qX5o+Q56S6IOWIneWni+WMllxyXG4gICAgdmFyIEluaXRudW1faXBob25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBcclxuICAgICAgICAkKFwiLm51bV9pcGhvbmVcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjaW5wdXRwaG9uZVwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgJChcIiNpcGhvbmVQcm9tcHRcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjaW5wdXRzbXNjb2RlXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAkKFwiI2NoZWNrUHJvbXB0XCIpLmhpZGUoKTtcclxuICAgIH07XHJcbiAgICAvL+S/ruaUueaXp+WvhueggeeahOW8ueeql+aPkOekuiDliJ3lp4vljJZcclxuICAgIHZhciBJbml0b2xkX3Bhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIub2xkX3Bhc3N3b3JkXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI2lucHV0b2xkcGFzc3dkXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAkKFwiI29sZHBhc3N3ZHNob3dcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjaW5wdXRuZXdwYXNzd2RcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICQoXCIjbmV3cGFzc3dkc2hvd1wiKS5oaWRlKCk7XHJcbiAgICB9O1xyXG4gICAgLy/pgJrov4fmiYvmnLrlj7fkv67mlLnlr4bnoIHlvLnnqpfmj5DnpLog5Yid5aeL5YyWXHJcbiAgICB2YXIgSW5pdGVkaXRfYnlpcGhvbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNpbnB1dGJpbmRwaG9uZVwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgJChcIiNpbnB1dGJpbmRwaG9uZXNob3dcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjaW5wdXRiaW5kY29kZVwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgJChcIiNpbnB1dGJpbmRjb2Rlc2hvd1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNpbnB1dHBob25lcGFzc3dkXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAkKFwiI2lucHV0cGhvbmVwYXNzd2RzaG93XCIpLmhpZGUoKTtcclxuICAgIH07XHJcbiAgICAvL+eCueWHu+S/ruaUueaJi+aculxyXG4gICAgdmFyIEVkaXRQaG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI2VkaXRpcGhvbmVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBJbml0bnVtX2lwaG9uZSgpO1xyXG4gICAgICAgICAgICBTdG9wU2V0dGltZShcInNlbmRTbXNcIik7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCIubnVtX2lwaG9uZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJyNpbnB1dHBob25lJykuZm9jdXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvL+eCueWHu+S/ruaUueWvhueggVxyXG4gICAgdmFyIEVkaXRQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI2VkaXRwYXNzd29yZFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIEluaXRvbGRfcGFzc3dvcmQoKTtcclxuICAgICAgICAgICAgJChcIi5vbGRfcGFzc3dvcmRcIikuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxuICAgIHZhciBDbG9zZVBvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmN1cnNvclwiKS5jbGljayhmdW5jdGlvbiAoKSB7ICAgICBcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG4gICAgLy/kv67kv67mlLnmiYvmnLrnmoTlvLnnqpfmj5DnpLog56Gu6K6k5oyJ6ZKuXHJcbiAgICB2YXIgQnRuU2F2ZVBob25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjYnRuU2F2ZVBob25lXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBob25laW5wdXQgPSAkKFwiI2lucHV0cGhvbmVcIikudmFsKCk7XHJcbiAgICAgICAgICAgIGlmICghQ2hlY2tQaG9uZShwaG9uZWlucHV0KSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNpcGhvbmVQcm9tcHRcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNpbnB1dHBob25lXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGlucHV0c21zY29kZSA9ICQoXCIjaW5wdXRzbXNjb2RlXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICBpZigkLnRyaW0oaW5wdXRzbXNjb2RlKS5sZW5ndGg9PTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAkKFwiI2NoZWNrUHJvbXB0XCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vJC5hamF4KHtcclxuICAgICAgICAgICAgLy8gICAgdXJsOiBcIi9PcmdVc2VyQ2VudGVyL1VzZXIvXCIsXHJcbiAgICAgICAgICAgIC8vICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgLy8gICAgICAgIG1vYmlsZTogJydcclxuXHJcbiAgICAgICAgICAgIC8vICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgLy8gICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIC8vICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICBlcnJvcjpmdW5jdGlvbihlKVxyXG4gICAgICAgICAgICAvLyAgICB7fVxyXG4gICAgICAgICAgICAvL30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8v5L+u5pS55pen5a+G56CB55qE5by556qX5o+Q56S6IOehruiupOaMiemSrlxyXG4gICAgdmFyIEJ0blNhdmVPbGRQYXNzd2QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNidG5TYXZlT2xkUGFzc3dkXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBpbnB1dG9sZHBhc3N3ZCA9ICQoXCIjaW5wdXRvbGRwYXNzd2RcIikudmFsKCk7XHJcbiAgICAgICAgICAgIGlmICgkLnRyaW0oaW5wdXRvbGRwYXNzd2QpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmlwaG9uZVByb21wdFwiKS5odG1sKFwi5pen5a+G56CB5LiN6IO95Li656m677yBXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNvbGRwYXNzd2RzaG93XCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICQoXCIjaW5wdXRvbGRwYXNzd2RcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyQuYWpheCh7XHJcbiAgICAgICAgICAgIC8vICAgIHVybDogXCIvT3JnVXNlckNlbnRlci9Vc2VyL1wiLFxyXG4gICAgICAgICAgICAvLyAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICBwYXNzd2Q6ICcnXHJcblxyXG4gICAgICAgICAgICAvLyAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIC8vICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICAvLyAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgJChcIiNvbGRwYXNzd2RzaG93XCIpLnNob3coKTtcclxuICAgICAgICAgICAgLy8gICAgfSxcclxuICAgICAgICAgICAgLy8gICAgZXJyb3I6ZnVuY3Rpb24oZSlcclxuICAgICAgICAgICAgLy8gICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgJChcIiNvbGRwYXNzd2RzaG93XCIpLnNob3coKTtcclxuICAgICAgICAgICAgLy8gICAgfVxyXG4gICAgICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICAgICAgdmFyIGlucHV0bmV3cGFzc3dkID0gJChcIiNpbnB1dG5ld3Bhc3N3ZFwiKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIHJlZyA9IC9eW0EtWmEtejAtOV0rJC87XHJcbiAgICAgICAgICAgIGlmICgkLnRyaW0oaW5wdXRuZXdwYXNzd2QpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLm5ld3Bhc3N3b3JkXCIpLmh0bWwoXCLmlrDlr4bnoIHplb/luqblnKg2LTE15LmL6Ze077yBXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNuZXdwYXNzd2RzaG93XCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIGlmICgkLnRyaW0oaW5wdXRuZXdwYXNzd2QpLmxlbmd0aCA8IDYgfHwgJC50cmltKGlucHV0bmV3cGFzc3dkKS5sZW5ndGggPiAxNSkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5uZXdwYXNzd29yZFwiKS5odG1sKFwi5paw5a+G56CB6ZW/5bqm5ZyoNi0xNeS5i+mXtO+8gVwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjbmV3cGFzc3dkc2hvd1wiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlZy50ZXN0KGlucHV0bmV3cGFzc3dkKSkge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkKFwiLm5ld3Bhc3N3b3JkXCIpLmh0bWwoXCLmlrDlr4bnoIHmoLzlvI/kuI3mraPnoa7vvIFcIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiI25ld3Bhc3N3ZHNob3dcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgXHJcbiAgICAvLy/nu5Hlrppnb1xyXG4gICAgdmFyIEJpbmRHb0lwaG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI2dvcGhvbmVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBJbml0ZWRpdF9ieWlwaG9uZSgpO1xyXG4gICAgICAgICAgICBTdG9wU2V0dGltZShcIm90aGVyc2VuZFNtc1wiKTtcclxuICAgICAgICAgICAgJChcIi5vbGRfcGFzc3dvcmRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLmVkaXRfYnlpcGhvbmVcIikuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8v6YCa6L+H5omL5py65Y+35L+u5pS55a+G56CB5by556qX5o+Q56S6IOehruiupOaMiemSrlxyXG4gICAgdmFyIEJ0blNhdmVOZXdQYXNzd2QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNidG5TYXZlTmV3UGFzc3dkXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGlucHV0YmluZHBob25lID0gJChcIiNpbnB1dGJpbmRwaG9uZVwiKS52YWwoKTtcclxuICAgICAgICAgICAgaWYgKCFDaGVja1Bob25lKGlucHV0YmluZHBob25lKSkge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJChcIiNpbnB1dGJpbmRwaG9uZXNob3dcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNpbnB1dGJpbmRwaG9uZVwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBpbnB1dGJpbmRjb2RlID0gJChcIiNpbnB1dGJpbmRjb2RlXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAoJC50cmltKGlucHV0YmluZGNvZGUpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2lucHV0YmluZGNvZGVzaG93XCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaW5wdXRwaG9uZXBhc3N3ZCA9ICQoXCIjaW5wdXRwaG9uZXBhc3N3ZFwiKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIHJlZyA9IC9eW0EtWmEtejAtOV0rJC87XHJcbiAgICAgICAgICAgIGlmICgkLnRyaW0oaW5wdXRwaG9uZXBhc3N3ZCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICQoXCIubmV3cGFzc1wiKS5odG1sKFwi5paw5a+G56CB6ZW/5bqm5ZyoNi0xNeS5i+mXtO+8gVwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjaW5wdXRwaG9uZXBhc3N3ZHNob3dcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkLnRyaW0oaW5wdXRwaG9uZXBhc3N3ZCkubGVuZ3RoIDwgNiB8fCAkLnRyaW0oaW5wdXRwaG9uZXBhc3N3ZCkubGVuZ3RoID4gMTUpIHtcclxuICAgICAgICAgICAgICAgICQoXCIubmV3cGFzc1wiKS5odG1sKFwi5paw5a+G56CB6ZW/5bqm5ZyoNi0xNeS5i+mXtO+8gVwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjaW5wdXRwaG9uZXBhc3N3ZHNob3dcIikuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlZy50ZXN0KGlucHV0cGhvbmVwYXNzd2QpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5uZXdwYXNzXCIpLmh0bWwoXCLmlrDlr4bnoIHmoLzlvI/kuI3mraPnoa7vvIFcIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2lucHV0cGhvbmVwYXNzd2RzaG93XCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvL+mHjeaWsOS/ruaUuVxyXG4gICAgdmFyIEJ0bkFnYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjYnRuQWdhaW5cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8v54K55Ye75pa55byP6aqM6K+B56CBXHJcbiAgICB2YXIgU2VuZFNtcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI3NlbmRTbXNcIikuY2xpY2soZnVuY3Rpb24gKCkgeyAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBwaG9uZWlucHV0ID0gJChcIiNpbnB1dHBob25lXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAoIUNoZWNrUGhvbmUocGhvbmVpbnB1dCkpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjaXBob25lUHJvbXB0XCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICQoXCIjaW5wdXRwaG9uZVwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBTZXR0aW1lKFwic2VuZFNtc1wiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI290aGVyc2VuZFNtc1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwaG9uZWlucHV0ID0gJChcIiNpbnB1dGJpbmRwaG9uZVwiKS52YWwoKTtcclxuICAgICAgICAgICAgaWYgKCFDaGVja1Bob25lKHBob25laW5wdXQpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2lucHV0YmluZHBob25lc2hvd1wiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2lucHV0YmluZHBob25lXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFNldHRpbWUoXCJvdGhlcnNlbmRTbXNcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy/lj5HpgIHpqozor4HnoIHorqHml7ZcclxuICAgIHZhciBTZXR0aW1lID0gZnVuY3Rpb24gKG9iamlkKSB7XHJcbiAgICAgICAgaWYgKGNvdW50ZG93biA9PSAwKSB7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBvYmppZCkucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgb2JqaWQpLmh0bWwoXCLngrnlh7vlj5HpgIHpqozor4HnoIFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgb2JqaWQpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgJChcIiNcIiArIG9iamlkKS5odG1sKFwi6YeN5paw5Y+R6YCBKFwiICsgY291bnRkb3duICsgXCIpXCIpO1xyXG4gICAgICAgICAgICBjb3VudGRvd24tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGltZWZ1biA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBTZXR0aW1lKG9iamlkKSB9LCAxMDAwKTtcclxuICAgIH07XHJcbiAgICB2YXIgU3RvcFNldHRpbWUgPSBmdW5jdGlvbiAob2JqaWQpIHtcclxuICAgICAgICBpZih0aW1lZnVuIT0nJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lZnVuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY291bnRkb3duID0gNjA7XHJcbiAgICAgICAgJChcIiNcIiArIG9iamlkKS5odG1sKFwi54K55Ye75Y+R6YCB6aqM6K+B56CBXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL3ZhciBTZXR0aW1lID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgLy8gICAgaWYoY291bnRkb3duPT0wKVxyXG4gICAgLy8gICAgeyAgIFxyXG4gICAgLy8gICAgICAgIG9iai5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgIC8vICAgICAgICAkKFwiI3NlbmRTbXNcIikuaHRtbChcIueCueWHu+WPkemAgemqjOivgeeggVwiKTtcclxuICAgIC8vICAgICAgICBjb3VudGRvd24gPSA2MDtcclxuICAgIC8vICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgICBlbHNlXHJcbiAgICAvLyAgICB7XHJcbiAgICAvLyAgICAgICAgb2JqLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpOyAgXHJcbiAgICAvLyAgICAgICAgJChcIiNzZW5kU21zXCIpLmh0bWwoXCLph43mlrDlj5HpgIEoXCIgKyBjb3VudGRvd24gKyBcIilcIik7XHJcbiAgICAvLyAgICAgICAgY291bnRkb3duLS07XHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgICAgLy9TZXRUaW1lT3V0U21zKG9iaik7XHJcbiAgICAvLyAgICAvL3RpbWVmdW49c2V0VGltZW91dChmdW5jdGlvbiAoKSB7IFNldHRpbWUob2JqKSB9LCAxMDAwKTtcclxuICAgIC8vICAgIGlmKGZsYWcpXHJcbiAgICAvLyAgICB7XHJcbiAgICAvLyAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IFNldHRpbWUob2JqKSB9LCAxMDAwKTtcclxuICAgIC8vICAgIH1cclxuICAgIC8vfTtcclxuICAgIC8vdmFyIFNldFRpbWVPdXRTbXMgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAvLyAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgU2V0dGltZShvYmopIH0sIDEwMDApO1xyXG4gICAgLy99O1xyXG5cclxuICAgIHZhciBDaGVja1Bob25lID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIHZhciBwYXR0ZXJuID0gL14xWzM0NTc4XVxcZHs5fSQvO1xyXG4gICAgICAgIGlmICgkLnRyaW0ob2JqKS5sZW5ndGggPT0gMClcclxuICAgICAgICB7ICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFwYXR0ZXJuLnRlc3Qob2JqKSkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9O1xyXG59O1xyXG5cclxuLy/nu5HlrprmlbDmja5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBuZXcgbW9kdWxlKCkuaW5pdCgpO1xyXG4gICAgXHJcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvanMvT3JnVXNlckNlbnRlci91c2VyUGFzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMVxuICoqIG1vZHVsZSBjaHVua3MgPSA0MFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=