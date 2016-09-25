webpackJsonp([29,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(65);


/***/ },

/***/ 13:
/***/ function(module, exports) {

	/**
	 * Created by humorHan on 2016/6/17.
	 */
	module.exports = {
		baseUrl: "http://localhost:63342/mfg_newb_webv2/html/demo/",
		//跳转页面，可以处理公用跳转逻辑
		redirectUrl: function(redirectUrl, fromUrl) {
			if (redirectUrl == "login.html") {
				window.location.href = this.baseUrl + redirectUrl;
			} else {
				if (this.getCookie("uname")) {
					window.location.href = this.baseUrl + redirectUrl;
				} else {
					window.location.href = this.baseUrl + "login.html";
				}
			}
		},
		//设置cookie
		setCookie: function(objName, objValue, objHours) {
			var str = objName + "=" + escape(objValue);
	
			if (objHours > 0) { //为0时不设定过期时间，浏览器关闭时cookie自动消失
				var date = new Date();
				var ms = objHours * 3600 * 1000;
				date.setTime(date.getTime() + ms);
				str += "; expires=" + date.toGMTString() + ";path=/";
			}
			document.cookie = str;
		},
		//获取cookie
		getCookie: function(objName) { //获取指定名称的cookie的值
			var arrStr = document.cookie.split("; ");
			for (var i = 0; i < arrStr.length; i++) {
				var temp = arrStr[i].split("=");
				if (temp[0] == objName) {
					return unescape(temp[1]);
				}
			}
		},
		// html转码
		htmlEncode: function(s) {
			var div = document.createElement('div');
			div.appendChild(document.createTextNode(s));
			return div.innerHTML;
		},
		// html解码
		htmldecode: function(s) {
			var div = document.createElement('div');
			div.innerHTML = s;
			return div.innerText || div.textContent;
		},//性别转换
		sextran: function (s) {
		    switch (s) {
		        case "0":
		            return "男";
		        case "1":
		            return "女";
		        
		        default:
		            return "未知";
		    }
		   
		    //return div.innerText || div.textContent;
		},//学科转换
		getSubjectName: function (s) {
	        switch (s) {
	            case "01":
	                return "语文";
	            case "02":
	                return "数学";
	            case "03":
	                return "英语";
	            case "04":
	                return "物理";
	            case "05":
	                return "化学";
	            case "06":
	                return "地理";
	            case "07":
	                return "历史";
	            case "08":
	                return "政治";
	            case "09":
	                return "生物";
	            case "14":
	                return "奥数";
	            default:
	                return "";
	        }
		},//学制转换
		edutypetran: function (s) {
		    switch (s) {
		        case 0:
		            return "六三制";
		        case 1:
		            return "五四制";
		        
		        default:
		            return "未知";
		    }
		    //return div.innerText || div.textContent;
		}
	};

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	
	var pop = __webpack_require__(13);
	
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

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9PcmcvZGVwL3V0aWwvdXRpbC5qcz85YjMyKiIsIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnL2luaXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQVksb0NBQW9DO0FBQ2hEO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxnQ0FBK0I7QUFDL0Isd0NBQXVDO0FBQ3ZDLGtCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7O0FDckdBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsd0RBQXdEO0FBQzdFO0FBQ0E7QUFDQSxzQkFBcUIsd0RBQXdEO0FBQzdFOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMscUJBQXFCO0FBQzFELHlDQUF3QyxrQ0FBa0M7QUFDMUU7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDLGdEQUFnRDtBQUNyRjtBQUNBO0FBQ0EsTUFBSzs7OztBQUlMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMLEVBQUM7OztBQUdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCLDJEQUEyRDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEIsZUFBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQSwyQkFBMEIsZUFBZTtBQUN6QztBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBLHNEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBodW1vckhhbiBvbiAyMDE2LzYvMTcuXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRiYXNlVXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NjMzNDIvbWZnX25ld2Jfd2VidjIvaHRtbC9kZW1vL1wiLFxyXG5cdC8v6Lez6L2s6aG16Z2i77yM5Y+v5Lul5aSE55CG5YWs55So6Lez6L2s6YC76L6RXHJcblx0cmVkaXJlY3RVcmw6IGZ1bmN0aW9uKHJlZGlyZWN0VXJsLCBmcm9tVXJsKSB7XHJcblx0XHRpZiAocmVkaXJlY3RVcmwgPT0gXCJsb2dpbi5odG1sXCIpIHtcclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmJhc2VVcmwgKyByZWRpcmVjdFVybDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLmdldENvb2tpZShcInVuYW1lXCIpKSB7XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmJhc2VVcmwgKyByZWRpcmVjdFVybDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuYmFzZVVybCArIFwibG9naW4uaHRtbFwiO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHQvL+iuvue9rmNvb2tpZVxyXG5cdHNldENvb2tpZTogZnVuY3Rpb24ob2JqTmFtZSwgb2JqVmFsdWUsIG9iakhvdXJzKSB7XHJcblx0XHR2YXIgc3RyID0gb2JqTmFtZSArIFwiPVwiICsgZXNjYXBlKG9ialZhbHVlKTtcclxuXHJcblx0XHRpZiAob2JqSG91cnMgPiAwKSB7IC8v5Li6MOaXtuS4jeiuvuWumui/h+acn+aXtumXtO+8jOa1j+iniOWZqOWFs+mXreaXtmNvb2tpZeiHquWKqOa2iOWksVxyXG5cdFx0XHR2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdHZhciBtcyA9IG9iakhvdXJzICogMzYwMCAqIDEwMDA7XHJcblx0XHRcdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIG1zKTtcclxuXHRcdFx0c3RyICs9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b0dNVFN0cmluZygpICsgXCI7cGF0aD0vXCI7XHJcblx0XHR9XHJcblx0XHRkb2N1bWVudC5jb29raWUgPSBzdHI7XHJcblx0fSxcclxuXHQvL+iOt+WPlmNvb2tpZVxyXG5cdGdldENvb2tpZTogZnVuY3Rpb24ob2JqTmFtZSkgeyAvL+iOt+WPluaMh+WumuWQjeensOeahGNvb2tpZeeahOWAvFxyXG5cdFx0dmFyIGFyclN0ciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJTdHIubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIHRlbXAgPSBhcnJTdHJbaV0uc3BsaXQoXCI9XCIpO1xyXG5cdFx0XHRpZiAodGVtcFswXSA9PSBvYmpOYW1lKSB7XHJcblx0XHRcdFx0cmV0dXJuIHVuZXNjYXBlKHRlbXBbMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyBodG1s6L2s56CBXHJcblx0aHRtbEVuY29kZTogZnVuY3Rpb24ocykge1xyXG5cdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHMpKTtcclxuXHRcdHJldHVybiBkaXYuaW5uZXJIVE1MO1xyXG5cdH0sXHJcblx0Ly8gaHRtbOino+eggVxyXG5cdGh0bWxkZWNvZGU6IGZ1bmN0aW9uKHMpIHtcclxuXHRcdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGRpdi5pbm5lckhUTUwgPSBzO1xyXG5cdFx0cmV0dXJuIGRpdi5pbm5lclRleHQgfHwgZGl2LnRleHRDb250ZW50O1xyXG5cdH0sLy/mgKfliKvovazmjaJcclxuXHRzZXh0cmFuOiBmdW5jdGlvbiAocykge1xyXG5cdCAgICBzd2l0Y2ggKHMpIHtcclxuXHQgICAgICAgIGNhc2UgXCIwXCI6XHJcblx0ICAgICAgICAgICAgcmV0dXJuIFwi55S3XCI7XHJcblx0ICAgICAgICBjYXNlIFwiMVwiOlxyXG5cdCAgICAgICAgICAgIHJldHVybiBcIuWls1wiO1xyXG5cdCAgICAgICAgXHJcblx0ICAgICAgICBkZWZhdWx0OlxyXG5cdCAgICAgICAgICAgIHJldHVybiBcIuacquefpVwiO1xyXG5cdCAgICB9XHJcblx0ICAgXHJcblx0ICAgIC8vcmV0dXJuIGRpdi5pbm5lclRleHQgfHwgZGl2LnRleHRDb250ZW50O1xyXG5cdH0sLy/lrabnp5HovazmjaJcclxuXHRnZXRTdWJqZWN0TmFtZTogZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICBzd2l0Y2ggKHMpIHtcclxuICAgICAgICAgICAgY2FzZSBcIjAxXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLor63mlodcIjtcclxuICAgICAgICAgICAgY2FzZSBcIjAyXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLmlbDlraZcIjtcclxuICAgICAgICAgICAgY2FzZSBcIjAzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLoi7Hor61cIjtcclxuICAgICAgICAgICAgY2FzZSBcIjA0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLniannkIZcIjtcclxuICAgICAgICAgICAgY2FzZSBcIjA1XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLljJblraZcIjtcclxuICAgICAgICAgICAgY2FzZSBcIjA2XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLlnLDnkIZcIjtcclxuICAgICAgICAgICAgY2FzZSBcIjA3XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLljoblj7JcIjtcclxuICAgICAgICAgICAgY2FzZSBcIjA4XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLmlL/msrtcIjtcclxuICAgICAgICAgICAgY2FzZSBcIjA5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLnlJ/nialcIjtcclxuICAgICAgICAgICAgY2FzZSBcIjE0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLlpaXmlbBcIjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuXHR9LC8v5a2m5Yi26L2s5o2iXHJcblx0ZWR1dHlwZXRyYW46IGZ1bmN0aW9uIChzKSB7XHJcblx0ICAgIHN3aXRjaCAocykge1xyXG5cdCAgICAgICAgY2FzZSAwOlxyXG5cdCAgICAgICAgICAgIHJldHVybiBcIuWFreS4ieWItlwiO1xyXG5cdCAgICAgICAgY2FzZSAxOlxyXG5cdCAgICAgICAgICAgIHJldHVybiBcIuS6lOWbm+WItlwiO1xyXG5cdCAgICAgICAgXHJcblx0ICAgICAgICBkZWZhdWx0OlxyXG5cdCAgICAgICAgICAgIHJldHVybiBcIuacquefpVwiO1xyXG5cdCAgICB9XHJcblx0ICAgIC8vcmV0dXJuIGRpdi5pbm5lclRleHQgfHwgZGl2LnRleHRDb250ZW50O1xyXG5cdH1cclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC91dGlsL3V0aWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAyIDIxIDI5IDM3XG4gKiovIiwiXHJcbnZhciBwb3AgPSByZXF1aXJlKFwidXRpbC91dGlsLmpzXCIpO1xyXG5cclxuLy/mmK/lkKZjaHJvbWXmtY/op4jlmahcclxudmFyIGlzQ2hyb21lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9jaHJvbWUvKSAhPSBudWxsO1xyXG5pZiAoaXNDaHJvbWUpIHsgfVxyXG5lbHNlIHtcclxuICAgICQoXCIjdG9wQVwiKS5zaG93KCk7XHJcbn1cclxuXHJcbi8v5piv5ZCm5pS26JePXHJcbnZhciBrZWVwID0gcG9wLmdldENvb2tpZShcIm9yZy1rZWVwXCIpO1xyXG5pZiAoa2VlcCAmJiBrZWVwICE9ICcnKSB7XHJcbiAgICAkKFwiI2tlZXBBXCIpLmNzcyh7IFwiYmFja2dyb3VuZC1pbWFnZVwiOiAnLi4vLi4vYnVuZGxlL2ltZy9oZWFydC1idG4yLnBuZycgfSk7XHJcbn1cclxuZWxzZSB7XHJcbiAgICAkKFwiI2tlZXBBXCIpLmNzcyh7IFwiYmFja2dyb3VuZC1pbWFnZVwiOiAnLi4vLi4vYnVuZGxlL2ltZy9oZWFydC1idG4xLnBuZycgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICBcclxuICAgICQoXCIjbG9naW5cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoJChcIiNsb2dpblwiKS5hdHRyKFwiZGF0YS1va1wiKSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAvL+W3sue7j+eZu+W9lVxyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvT3JnL0luZGV4L1wiO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBvcC5nZXRDb29raWUoXCJvcmctaXNhdXRvXCIpICYmIHBvcC5nZXRDb29raWUoXCJvcmctaXNhdXRvXCIpICE9IFwiMFwiKSB7XHJcbiAgICAgICAgICAgICQoXCIjb3JnLWlzYXV0b1wiKS5hdHRyKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgJChcIiN1c2VycHdkXCIpLnZhbChwb3AuZ2V0Q29va2llKFwib3JnLXRva2VuXCIpKTsvL+Whq+WFheWvhueggVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNvcmctaXNhdXRvXCIpLmF0dHIoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgJChcIiN1c2VycHdkXCIpLnZhbChcIlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5aGr5YWF6LSm5Y+3XHJcbiAgICAgICAgJChcIiN1c2VyY29kZVwiKS52YWwocG9wLmdldENvb2tpZShcIm9yZy1jb2RlXCIpKTtcclxuXHJcbiAgICAgICAgLy/lvLnlh7rlsYJcclxuICAgICAgICAkKFwiI29yZy1sb2dpbiwucG9wLW1hc2tcIikuc2hvdygpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjb3JnLWZvcmdldFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNvcmctbG9naW5cIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjb3JnLXJlXCIpLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjb3JnLXJlLWFcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjb3JnLXJlLC5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI2NoYXRBXCIpLm1vdXNlZW50ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjY2hhdEJcIikuc2hvdygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNjaGF0QVwiKS5tb3VzZWxlYXZlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI2NoYXRCXCIpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOiHquWKqOeZu+W9leaMiemSrlxyXG4gICAgJChcIiNvcmctaXNhdXRvXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgayA9IFwiMFwiO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIikpIHtcclxuICAgICAgICAgICAgayA9IFwiMVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc0F1dG8oayk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogXCIvSG9tZS9Jbml0XCIsXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlICYmIGUuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNpbmZvVGVsXCIpLnRleHQoZS5EYXRhLlRlbCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IFtcIuWRqOS4gFwiLCBcIuWRqOS6jFwiLCBcIuWRqOS4iVwiLCBcIuWRqOWbm1wiLCBcIuWRqOS6lFwiLCBcIuWRqOWFrVwiLCBcIuWRqOaXpVwiXTtcclxuICAgICAgICAgICAgICAgICQoXCIjaW5mb0RheVwiKS50ZXh0KGRbZS5EYXRhLldvcmtTdGFydF0gKyBcIuWIsFwiICsgZFtlLkRhdGEuV29ya0VuZF0pO1xyXG4gICAgICAgICAgICAgICAgJChcIiNpbmZvVGltZVwiKS50ZXh0KGUuRGF0YS5UaW1lU3RhcnQgKyBcIiAtIFwiICsgZS5EYXRhLlRpbWVFbmQpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNpbmZvQWRkclwiKS50ZXh0KFwi6IGU57O755S16K+d77yaXCIgKyBlLkRhdGEuVGVsICsgXCLvvIhcIiArIGRbZS5EYXRhLldvcmtTdGFydF0gKyBcIuiHs1wiICsgZFtlLkRhdGEuV29ya0VuZF1cclxuICAgICAgICAgICAgICAgICAgICArIFwiIFwiICsgZS5EYXRhLlRpbWVTdGFydCArIFwiLVwiICsgZS5EYXRhLlRpbWVFbmQgKyBcIu+8iSB8IOWcsOWdgO+8mlwiICsgZS5EYXRhLkFkZHIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNpbmZvUmVjb3JkXCIpLnRleHQoZS5EYXRhLlJlY29yZEluZm8pO1xyXG4gICAgICAgICAgICAgICAgJChcIiNpbmZvTG9nb1wiKS5hdHRyKHsgXCJzcmNcIjogZS5EYXRhLkxvZ28gfSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NoYXRDLWltYWdlXCIpLmF0dHIoeyBcImRhdGEtaW1hZ2VcIjogZS5EYXRhLldlQ2hhdExvZ28gfSk7XHJcbiAgICAgICAgICAgICAgICBCaW5kVGFnKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIiNpbmZvTG9nb1wiKS5hdHRyKHsgXCJzcmNcIjogJChcIiNpbmZvTG9nby1pbWFnZVwiKS5hdHQoXCJkYXRhLWltYWdlXCIpIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAkKFwiI29rXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsb2dpbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiN1c2VycHdkXCIpLmtleWRvd24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT0gOSkvL3RhYlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJChcIiNva1wiKS5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjaW1nQXV0aENvZGVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldFZDKCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbi8v57uR5a6a5YW25a6D5bGe5oCnIFxyXG5mdW5jdGlvbiBCaW5kVGFnKGUpIHtcclxuXHJcbiAgICBpZiAoZSkge1xyXG4gICAgICAgIGlmIChlLkRhdGEuSXNXZUNoYXQpIHtcclxuICAgICAgICAgICAgJChcIiNjaGF0QVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjY2hhdENcIikuY3NzKHsgXCJiYWNrZ3JvdW5kLWltYWdlXCI6ICQoXCIjY2hhdEMtaW1hZ2VcIikuYXR0cihcImRhdGEtaW1hZ2VcIikgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvZ2luKGUuVG9rZW5JRCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldExvZ2luKGUpIHtcclxuICAgIGlmIChlICYmIGUgIT0gXCJcIiAmJiBlID09IHBvcC5nZXRDb29raWUoXCJvcmctdG9rZW5cIikpIHtcclxuICAgICAgICAkKFwiI2xvZ2luXCIpLnRleHQoXCLnq4vljbPov5vlhaVcIik7XHJcbiAgICAgICAgJChcIiNsb2dpblwiKS5hdHRyKHsgXCJkYXRhLW9rXCI6IDEgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAkKFwiI2xvZ2luXCIpLnRleHQoXCLnmbvlvZVcIik7XHJcbiAgICAgICAgJChcIiNsb2dpblwiKS5hdHRyKHsgXCJkYXRhLW9rXCI6IDAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2dpbigpIHtcclxuXHJcbiAgICBpZiAoJC50cmltKCQoXCIjdXNlcmNvZGVcIikudmFsKCkpID09IFwiXCIgfHwgJC50cmltKCQoXCIjdXNlcnB3ZFwiKS52YWwoKSkgPT0gXCJcIikge1xyXG4gICAgICAgICQoXCIjb3JnLWNvZGVcIikudGV4dChcIuaPkOekuu+8mueUqOaIt+WQjeaIluWvhueggeS4jeiDveS4uuepuu+8gVwiKTtcclxuICAgICAgICAkKFwiI29yZy1jb2RlXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgb3JnQ29kZSA9ICQoXCIjdXNlcmNvZGVcIikudmFsKCk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICB1cmw6IFwiL0hvbWUvTG9naW5cIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIFRva2VuOiBwb3AuZ2V0Q29va2llKFwib3JnLXRva2VuXCIpLFxyXG4gICAgICAgICAgICBJc0F1dG86IHBvcC5nZXRDb29raWUoXCJvcmctaXNhdXRvXCIpLFxyXG4gICAgICAgICAgICBVc2VyQ29kZTogb3JnQ29kZSxcclxuICAgICAgICAgICAgVXNlclBXRDogJChcIiN1c2VycHdkXCIpLnZhbCgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUuT0spIHtcclxuICAgICAgICAgICAgICAgICQoXCIjb3JnLWNvZGVcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICBzZXRDb2RlKG9yZ0NvZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoXCIjb3JnLWlzYXV0b1wiKS5pcyhcImNoZWNrZWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0F1dG8oMSk7Ly/orr7nva7kuIvmrKHnmbvlvZVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldExvZ2luKHBvcC5nZXRDb29raWUoXCJvcmctdG9rZW5cIikpOy8v55m75b2V5oiQ5YqfXHJcbiAgICAgICAgICAgICAgICAkKFwiI29yZy1sb2dpbiwucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi9PcmcvSW5kZXgvXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI29yZy1jb2RlXCIpLnRleHQoXCLmj5DnpLrvvJpcIiArIGUuUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICQoXCIjb3JnLWNvZGVcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9zZXRWQygpO1xyXG4gICAgICAgICAgICAgICAgLy8kKFwiI29yZy12YWxpZGF0ZVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+iuvue9ruiHquWKqOeZu+W9leWxnuaAp1xyXG5mdW5jdGlvbiBzZXRJc0F1dG8oZSkge1xyXG4gICAgcG9wLnNldENvb2tpZShcIm9yZy1pc2F1dG9cIiwgZSwgMjQgKiAxMDAwKTtcclxufVxyXG5cclxuLy/orr7nva7otKblj7dcclxuZnVuY3Rpb24gc2V0Q29kZShlKSB7XHJcbiAgICBwb3Auc2V0Q29va2llKFwib3JnLWNvZGVcIiwgZSwgMjQgKiAxMDAwKTtcclxufVxyXG5cclxuLy/ojrflj5bpqozor4HnoIFcclxuZnVuY3Rpb24gc2V0VkMoKSB7XHJcbiAgICAkKFwiI2ltZ0F1dGhDb2RlXCIpLmF0dHIoXCJzcmNcIiwgXCIvSG9tZS9WQ29kZT9cIiArIE1hdGgucmFuZG9tKCkpO1xyXG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmcvaW5pdC5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDI5XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==