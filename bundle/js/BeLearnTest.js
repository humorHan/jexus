webpackJsonp([1,41],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	/*TMODJS:{}*/
	!function () {
		function a(a, b) {
			return (/string|function/.test(typeof b) ? h : g)(a, b)
		}
	
		function b(a, c) {
			return "string" != typeof a && (c = typeof a, "number" === c ? a += "" : a = "function" === c ? b(a.call(a)) : ""), a
		}
	
		function c(a) {
			return l[a]
		}
	
		function d(a) {
			return b(a).replace(/&(?![\w#]+;)|[<>"']/g, c)
		}
	
		function e(a, b) {
			if (m(a))for (var c = 0, d = a.length; d > c; c++)b.call(a, a[c], c, a); else for (c in a)b.call(a, a[c], c)
		}
	
		function f(a, b) {
			var c = /(\/)[^\/]+\1\.\.\1/, d = ("./" + a).replace(/[^\/]+$/, ""), e = d + b;
			for (e = e.replace(/\/\.\//g, "/"); e.match(c);)e = e.replace(c, "/");
			return e
		}
	
		function g(b, c) {
			var d = a.get(b) || i({filename: b, name: "Render Error", message: "Template not found"});
			return c ? d(c) : d
		}
	
		function h(a, b) {
			if ("string" == typeof b) {
				var c = b;
				b = function () {
					return new k(c)
				}
			}
			var d = j[a] = function (c) {
				try {
					return new b(c, a) + ""
				} catch (d) {
					return i(d)()
				}
			};
			return d.prototype = b.prototype = n, d.toString = function () {
				return b + ""
			}, d
		}
	
		function i(a) {
			var b = "{Template Error}", c = a.stack || "";
			if (c)c = c.split("\n").slice(0, 2).join("\n"); else for (var d in a)c += "<" + d + ">\n" + a[d] + "\n\n";
			return function () {
				return "object" == typeof console && console.error(b + "\n\n" + c), b
			}
		}
	
		var j = a.cache = {}, k = this.String, l = {
			"<": "&#60;",
			">": "&#62;",
			'"': "&#34;",
			"'": "&#39;",
			"&": "&#38;"
		}, m = Array.isArray || function (a) {
				return "[object Array]" === {}.toString.call(a)
			}, n = a.utils = {
			$helpers: {}, $include: function (a, b, c) {
				return a = f(c, a), g(a, b)
			}, $string: b, $escape: d, $each: e
		}, o = a.helpers = n.$helpers;
		a.get = function (a) {
			return j[a.replace(/^\.\//, "")]
		}, a.helper = function (a, b) {
			o[a] = b
		}, module.exports = a
	}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	
	var pop = __webpack_require__(5);
	var PT = __webpack_require__(6);
	var UTrim =$("#U").val();
	var En;
	var data=[];
	var examID=1;
	var module = {
	    init: function () {
	
	        //todo 逻辑函数
	        this.render();
	
	        this.initBtns();
	
	    },
	    //获取机构设置绑定
	    render: function () {
	        $.ajax({
	            url: "/OrgExam/Exam/GetEn",
	            dataType: "json",
	            type: "post",
	            success: function (e) {
	                debugger;
	                En = e.Data;
	                onBind(1);
	            }
	        });
	
	    },
	    initBtns: function () {
	        //todo 绑定事件
	
	       
	        //按钮绑定点击事件
	        $('#P').delegate("span", "click", function () {
	            
	            if ($(this).attr("data-is")=="1") {
	                return;
	            }
	            debugger;
	            if ($(this).hasClass("level-on")) {
	                $(this).removeClass("level-on");
	                $(this).addClass("level-name");
	                var dID = $(this).attr("id");
	                var ExamDim = {};
	                data = $.grep(data, function (i, j) {
	                    if (i.DimID.toString() == dID.toString())
	                        return false;
	                    else
	                        return true;
	                });
	            }
	            else {
	               
	                $(this).removeClass("level-name");
	                $(this).addClass("level-on");
	                var ExamDim = {};
	                ExamDim.DimID = $(this).attr("id");
	                ExamDim.DimName = $(this).text();
	                data.push(ExamDim);
	            }
	            clickBg();
	
	        });
	    }
	
	
	};
	//绑定数据
	$(function () {
	    module.init();
	    onShow();//选择试卷
	    Ok();
	
	
	});
	
	//进行点击
	function onShow() {
	    debugger;
	    $("li[data-id]").click(function () {
	        if ($(this).hasClass("choose-on"))
	            return false;
	        $(this).siblings().removeClass("choose-on");
	        $(this).addClass("choose-on");
	        //
	        data = [];//初始化
	        examID = $(this).attr("data-examID");//试卷ID
	        onBind($(this).attr("data-id"));
	        clickBg();
	    });
	}
	
	//按钮背景
	function clickBg() {
	    debugger;
	    switch (examID + "") {
	        case "2":
	            $("#btnBegin").removeClass("test-btn").addClass("test-btn-on");
	            break;
	        case "1":
	        case "3":
	            if (data.length == 0)
	                $("#btnBegin").removeClass("test-btn-on").addClass("test-btn");
	            else
	                $("#btnBegin").removeClass("test-btn").addClass("test-btn-on");
	            break;
	        default:
	            break;
	    }
	
	}
	//绑定选测维度数据
	function onBind(f) {
	    f = parseFloat(f) - 1;
	    $("#T").html(En[f].Remark);
	    $("#P").html(PT(En[f].D));
	    debugger;
	    if (En[f].ExamID == 2) {
	        $("#btnBegin").removeClass("test-btn").addClass("test-btn-on");
	    }
	   
	}
	
	//提交开始
	function Ok() {
	    debugger;
	    $("#btnBegin").click(function() {
	        if (data.length == 0)
	            return;
	        if ($("#btnBegin").attr("data-on") == "0")
	            return;
	        $("#btnBegin").attr({ "data-on": "0" });
	        $.ajax({
	            url: "/OrgExam/Exam/SaveEn",
	            data: {
	                ExamID: examID,
	                data: JSON.stringify(data)
	            },
	            dataType: "json",
	            type: "post",
	            success: function (e) {
	                location.href = "/OrgExam/Index/SetInfo?U=" + UTrim + "&ExamType=1&ExamID=" + e.ID;
	            },
	            error: function (e)//可能没有登录
	            {
	                $("#btnBegin").attr({ "data-on": "1" });
	            }
	        });
	    });
	  
	  
	}
	
	


/***/ },
/* 5 */
/***/ function(module, exports) {

	//遮罩
	function MaskShow() {
	    $(".pop-mask").show();
	}
	
	function MaskHide() {
	    $(".pop-mask").hide();
	    $(".add").hide();
	}
	//传递显示的消息
	function PopTipShow(obj) {
	    $(".add").hide();
	    var tiphtml = '<div class="pop-up font14" id="oktip"><span class="pop-close cursor"></span><div class="pop-content"><p class="line100" style="text-align:center;">' + obj + '</p></div></div>';
	
	    $("#main-content-wrapper").append(tiphtml);
	    $("#main-content-org-wrapper").append(tiphtml);
	    $(".pop-mask").show();
	    $(".pop-up").show();
	}
	//弹出确认框
	var OpenConfrimPop = function (obj) {
	    var html = '<div class="pop-up font14"><span class="pop-close cursor"></span><div class="pop-content">' + obj + '</div><br /><br /><div class="handle"> <span class="ok" id="Confrim">确定</span> &nbsp;&nbsp;&nbsp;<span class="ok" id="Cancel">取消</span> </div></div>';
	    $("#main-content-wrapper").append(html);
	};
	
	function PopTipHide() {
	    $(".pop-up").hide();
	    $(".pop-mask").hide();
	    $(".add").hide();
	    document.location.reload();
	}
	//隐藏添加的样式当弹出框和添加框重叠的
	function AddHide() {
	    $(".add").hide();
	    
	}
	
	exports.MaskShow = MaskShow;
	exports.MaskHide = MaskHide;
	exports.PopTipShow = PopTipShow;
	exports.PopTipHide = PopTipHide;
	exports.OpenConfrimPop = OpenConfrimPop;
	exports.AddHide = AddHide;
	
	//处理弹出框的隐藏
	$(function () {
	    $("#main-content-wrapper").delegate(".pop-close", "click", function () {
	        $(".pop-mask").hide();
	        $(".pop-up").hide();
	        //document.location.reload();
	    });
	
	    $("#main-content-wrapper").delegate(".popclose", "click", function () {
	        $(".pop-mask").hide();
	        $(".add").hide();
	    });
	
	});
	


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgExam/BeLearnTest',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each($data,function($value,$index){
	$out+=' ';
	if($value.StrDefault==0){
	$out+=' <span class="level-name " id="';
	$out+=$escape($value.DimID);
	$out+='" data-is="';
	$out+=$escape($value.StrDefault);
	$out+='">';
	$out+=$escape($value.DimName);
	$out+='</span> ';
	}else{
	$out+=' <span class="level-on" id="';
	$out+=$escape($value.DimID);
	$out+='" data-is="';
	$out+=$escape($value.StrDefault);
	$out+='">';
	$out+=$escape($value.DimName);
	$out+='</span> </div> ';
	}
	$out+=' ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KiIsIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnRXhhbS9CZUxlYXJuVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnVGVhY2hXb3JrL1BvcENvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZ0V4YW0vQmVMZWFyblRlc3QudHBsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFrQztBQUNsQzs7QUFFQTtBQUNBLHlDQUF3QyxPQUFPLDJCQUEyQjtBQUMxRTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXFDLFlBQVk7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QixpRUFBaUU7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0EsYUFBWSxlQUFlO0FBQzNCLGtEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBcUI7QUFDckIsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixHQUFFO0FBQ0Ysa0NBQWlDO0FBQ2pDLElBQUc7QUFDSCxlQUFjO0FBQ2Q7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0YsRUFBQyxHOzs7Ozs7O0FDN0VEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQsTUFBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjs7O0FBR0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEIsOENBQTZDO0FBQzdDO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCLGlCQUFpQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxzQ0FBcUMsaUJBQWlCO0FBQ3REO0FBQ0EsVUFBUztBQUNULE1BQUs7OztBQUdMOzs7Ozs7Ozs7QUN6SkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxS0FBb0s7O0FBRXBLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMk1BQTBNLE1BQU0sTUFBTTtBQUN0TjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMLEVBQUM7Ozs7Ozs7O0FDekREO0FBQ0E7QUFDQTtBQUNBLGNBQWEsbUlBQW1JO0FBQ2hKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBQyxFIiwiZmlsZSI6IkJlTGVhcm5UZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypUTU9ESlM6e30qL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdGZ1bmN0aW9uIGEoYSwgYikge1xyXG5cdFx0cmV0dXJuICgvc3RyaW5nfGZ1bmN0aW9uLy50ZXN0KHR5cGVvZiBiKSA/IGggOiBnKShhLCBiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYihhLCBjKSB7XHJcblx0XHRyZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSAmJiAoYyA9IHR5cGVvZiBhLCBcIm51bWJlclwiID09PSBjID8gYSArPSBcIlwiIDogYSA9IFwiZnVuY3Rpb25cIiA9PT0gYyA/IGIoYS5jYWxsKGEpKSA6IFwiXCIpLCBhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjKGEpIHtcclxuXHRcdHJldHVybiBsW2FdXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkKGEpIHtcclxuXHRcdHJldHVybiBiKGEpLnJlcGxhY2UoLyYoPyFbXFx3I10rOyl8Wzw+XCInXS9nLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZShhLCBiKSB7XHJcblx0XHRpZiAobShhKSlmb3IgKHZhciBjID0gMCwgZCA9IGEubGVuZ3RoOyBkID4gYzsgYysrKWIuY2FsbChhLCBhW2NdLCBjLCBhKTsgZWxzZSBmb3IgKGMgaW4gYSliLmNhbGwoYSwgYVtjXSwgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoYSwgYikge1xyXG5cdFx0dmFyIGMgPSAvKFxcLylbXlxcL10rXFwxXFwuXFwuXFwxLywgZCA9IChcIi4vXCIgKyBhKS5yZXBsYWNlKC9bXlxcL10rJC8sIFwiXCIpLCBlID0gZCArIGI7XHJcblx0XHRmb3IgKGUgPSBlLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7IGUubWF0Y2goYyk7KWUgPSBlLnJlcGxhY2UoYywgXCIvXCIpO1xyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoYiwgYykge1xyXG5cdFx0dmFyIGQgPSBhLmdldChiKSB8fCBpKHtmaWxlbmFtZTogYiwgbmFtZTogXCJSZW5kZXIgRXJyb3JcIiwgbWVzc2FnZTogXCJUZW1wbGF0ZSBub3QgZm91bmRcIn0pO1xyXG5cdFx0cmV0dXJuIGMgPyBkKGMpIDogZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChhLCBiKSB7XHJcblx0XHRpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYikge1xyXG5cdFx0XHR2YXIgYyA9IGI7XHJcblx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBrKGMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBkID0galthXSA9IGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBiKGMsIGEpICsgXCJcIlxyXG5cdFx0XHR9IGNhdGNoIChkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGkoZCkoKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGQucHJvdG90eXBlID0gYi5wcm90b3R5cGUgPSBuLCBkLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYiArIFwiXCJcclxuXHRcdH0sIGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGkoYSkge1xyXG5cdFx0dmFyIGIgPSBcIntUZW1wbGF0ZSBFcnJvcn1cIiwgYyA9IGEuc3RhY2sgfHwgXCJcIjtcclxuXHRcdGlmIChjKWMgPSBjLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCJcXG5cIik7IGVsc2UgZm9yICh2YXIgZCBpbiBhKWMgKz0gXCI8XCIgKyBkICsgXCI+XFxuXCIgKyBhW2RdICsgXCJcXG5cXG5cIjtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IoYiArIFwiXFxuXFxuXCIgKyBjKSwgYlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGogPSBhLmNhY2hlID0ge30sIGsgPSB0aGlzLlN0cmluZywgbCA9IHtcclxuXHRcdFwiPFwiOiBcIiYjNjA7XCIsXHJcblx0XHRcIj5cIjogXCImIzYyO1wiLFxyXG5cdFx0J1wiJzogXCImIzM0O1wiLFxyXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcclxuXHRcdFwiJlwiOiBcIiYjMzg7XCJcclxuXHR9LCBtID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xyXG5cdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB7fS50b1N0cmluZy5jYWxsKGEpXHJcblx0XHR9LCBuID0gYS51dGlscyA9IHtcclxuXHRcdCRoZWxwZXJzOiB7fSwgJGluY2x1ZGU6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcblx0XHRcdHJldHVybiBhID0gZihjLCBhKSwgZyhhLCBiKVxyXG5cdFx0fSwgJHN0cmluZzogYiwgJGVzY2FwZTogZCwgJGVhY2g6IGVcclxuXHR9LCBvID0gYS5oZWxwZXJzID0gbi4kaGVscGVycztcclxuXHRhLmdldCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRyZXR1cm4galthLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKV1cclxuXHR9LCBhLmhlbHBlciA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRvW2FdID0gYlxyXG5cdH0sIG1vZHVsZS5leHBvcnRzID0gYVxyXG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdG1vZGpzLWxvYWRlci9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDggMTMgMTQgMTUgMTYgMTcgMTggMTkgMjEgMjMgMjUgMjYgMjcgMzEgMzIgMzMgMzcgMzhcbiAqKi8iLCJcclxudmFyIHBvcCA9IHJlcXVpcmUoXCJPcmdUZWFjaFdvcmsvUG9wQ29tbW9uLmpzXCIpO1xyXG52YXIgUFQgPSByZXF1aXJlKFwiT3JnRXhhbS9CZUxlYXJuVGVzdC50cGxcIik7XHJcbnZhciBVVHJpbSA9JChcIiNVXCIpLnZhbCgpO1xyXG52YXIgRW47XHJcbnZhciBkYXRhPVtdO1xyXG52YXIgZXhhbUlEPTE7XHJcbnZhciBtb2R1bGUgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vdG9kbyDpgLvovpHlh73mlbBcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRCdG5zKCk7XHJcblxyXG4gICAgfSxcclxuICAgIC8v6I635Y+W5py65p6E6K6+572u57uR5a6aXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiL09yZ0V4YW0vRXhhbS9HZXRFblwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICBFbiA9IGUuRGF0YTtcclxuICAgICAgICAgICAgICAgIG9uQmluZCgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sXHJcbiAgICBpbml0QnRuczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vdG9kbyDnu5Hlrprkuovku7ZcclxuXHJcbiAgICAgICBcclxuICAgICAgICAvL+aMiemSrue7keWumueCueWHu+S6i+S7tlxyXG4gICAgICAgICQoJyNQJykuZGVsZWdhdGUoXCJzcGFuXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtaXNcIik9PVwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwibGV2ZWwtb25cIikpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJsZXZlbC1vblwiKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJsZXZlbC1uYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRJRCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIEV4YW1EaW0gPSB7fTtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSAkLmdyZXAoZGF0YSwgZnVuY3Rpb24gKGksIGopIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaS5EaW1JRC50b1N0cmluZygpID09IGRJRC50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJsZXZlbC1uYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImxldmVsLW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIEV4YW1EaW0gPSB7fTtcclxuICAgICAgICAgICAgICAgIEV4YW1EaW0uRGltSUQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgICAgICAgICAgIEV4YW1EaW0uRGltTmFtZSA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKEV4YW1EaW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsaWNrQmcoKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufTtcclxuLy/nu5HlrprmlbDmja5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBtb2R1bGUuaW5pdCgpO1xyXG4gICAgb25TaG93KCk7Ly/pgInmi6nor5XljbdcclxuICAgIE9rKCk7XHJcblxyXG5cclxufSk7XHJcblxyXG4vL+i/m+ihjOeCueWHu1xyXG5mdW5jdGlvbiBvblNob3coKSB7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgICQoXCJsaVtkYXRhLWlkXVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJjaG9vc2Utb25cIikpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJjaG9vc2Utb25cIik7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImNob29zZS1vblwiKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGRhdGEgPSBbXTsvL+WIneWni+WMllxyXG4gICAgICAgIGV4YW1JRCA9ICQodGhpcykuYXR0cihcImRhdGEtZXhhbUlEXCIpOy8v6K+V5Y23SURcclxuICAgICAgICBvbkJpbmQoJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgY2xpY2tCZygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5oyJ6ZKu6IOM5pmvXHJcbmZ1bmN0aW9uIGNsaWNrQmcoKSB7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIHN3aXRjaCAoZXhhbUlEICsgXCJcIikge1xyXG4gICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICQoXCIjYnRuQmVnaW5cIikucmVtb3ZlQ2xhc3MoXCJ0ZXN0LWJ0blwiKS5hZGRDbGFzcyhcInRlc3QtYnRuLW9uXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgJChcIiNidG5CZWdpblwiKS5yZW1vdmVDbGFzcyhcInRlc3QtYnRuLW9uXCIpLmFkZENsYXNzKFwidGVzdC1idG5cIik7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICQoXCIjYnRuQmVnaW5cIikucmVtb3ZlQ2xhc3MoXCJ0ZXN0LWJ0blwiKS5hZGRDbGFzcyhcInRlc3QtYnRuLW9uXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbn1cclxuLy/nu5HlrprpgInmtYvnu7TluqbmlbDmja5cclxuZnVuY3Rpb24gb25CaW5kKGYpIHtcclxuICAgIGYgPSBwYXJzZUZsb2F0KGYpIC0gMTtcclxuICAgICQoXCIjVFwiKS5odG1sKEVuW2ZdLlJlbWFyayk7XHJcbiAgICAkKFwiI1BcIikuaHRtbChQVChFbltmXS5EKSk7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIGlmIChFbltmXS5FeGFtSUQgPT0gMikge1xyXG4gICAgICAgICQoXCIjYnRuQmVnaW5cIikucmVtb3ZlQ2xhc3MoXCJ0ZXN0LWJ0blwiKS5hZGRDbGFzcyhcInRlc3QtYnRuLW9uXCIpO1xyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuLy/mj5DkuqTlvIDlp4tcclxuZnVuY3Rpb24gT2soKSB7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgICQoXCIjYnRuQmVnaW5cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAoJChcIiNidG5CZWdpblwiKS5hdHRyKFwiZGF0YS1vblwiKSA9PSBcIjBcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICQoXCIjYnRuQmVnaW5cIikuYXR0cih7IFwiZGF0YS1vblwiOiBcIjBcIiB9KTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiL09yZ0V4YW0vRXhhbS9TYXZlRW5cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgRXhhbUlEOiBleGFtSUQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL09yZ0V4YW0vSW5kZXgvU2V0SW5mbz9VPVwiICsgVVRyaW0gKyBcIiZFeGFtVHlwZT0xJkV4YW1JRD1cIiArIGUuSUQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZSkvL+WPr+iDveayoeacieeZu+W9lVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2J0bkJlZ2luXCIpLmF0dHIoeyBcImRhdGEtb25cIjogXCIxXCIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIFxyXG4gIFxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmdFeGFtL0JlTGVhcm5UZXN0LmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy/pga7nvalcclxuZnVuY3Rpb24gTWFza1Nob3coKSB7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWFza0hpZGUoKSB7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxufVxyXG4vL+S8oOmAkuaYvuekuueahOa2iOaBr1xyXG5mdW5jdGlvbiBQb3BUaXBTaG93KG9iaikge1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgdmFyIHRpcGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcC11cCBmb250MTRcIiBpZD1cIm9rdGlwXCI+PHNwYW4gY2xhc3M9XCJwb3AtY2xvc2UgY3Vyc29yXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPjxwIGNsYXNzPVwibGluZTEwMFwiIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+JyArIG9iaiArICc8L3A+PC9kaXY+PC9kaXY+JztcclxuXHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZCh0aXBodG1sKTtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmFwcGVuZCh0aXBodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59XHJcbi8v5by55Ye656Gu6K6k5qGGXHJcbnZhciBPcGVuQ29uZnJpbVBvcCA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJwb3AtdXAgZm9udDE0XCI+PHNwYW4gY2xhc3M9XCJwb3AtY2xvc2UgY3Vyc29yXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPicgKyBvYmogKyAnPC9kaXY+PGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImhhbmRsZVwiPiA8c3BhbiBjbGFzcz1cIm9rXCIgaWQ9XCJDb25mcmltXCI+56Gu5a6aPC9zcGFuPiAmbmJzcDsmbmJzcDsmbmJzcDs8c3BhbiBjbGFzcz1cIm9rXCIgaWQ9XCJDYW5jZWxcIj7lj5bmtog8L3NwYW4+IDwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIFBvcFRpcEhpZGUoKSB7XHJcbiAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59XHJcbi8v6ZqQ6JeP5re75Yqg55qE5qC35byP5b2T5by55Ye65qGG5ZKM5re75Yqg5qGG6YeN5Y+g55qEXHJcbmZ1bmN0aW9uIEFkZEhpZGUoKSB7XHJcbiAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0cy5NYXNrU2hvdyA9IE1hc2tTaG93O1xyXG5leHBvcnRzLk1hc2tIaWRlID0gTWFza0hpZGU7XHJcbmV4cG9ydHMuUG9wVGlwU2hvdyA9IFBvcFRpcFNob3c7XHJcbmV4cG9ydHMuUG9wVGlwSGlkZSA9IFBvcFRpcEhpZGU7XHJcbmV4cG9ydHMuT3BlbkNvbmZyaW1Qb3AgPSBPcGVuQ29uZnJpbVBvcDtcclxuZXhwb3J0cy5BZGRIaWRlID0gQWRkSGlkZTtcclxuXHJcbi8v5aSE55CG5by55Ye65qGG55qE6ZqQ6JePXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3AtY2xvc2VcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5wb3AtdXBcIikuaGlkZSgpO1xyXG4gICAgICAgIC8vZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcGNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2pzL09yZ1RlYWNoV29yay9Qb3BDb21tb24uanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNyAxMiAxNSAxNlxuICoqLyIsInZhciB0ZW1wbGF0ZT1yZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdPcmcvdHBsL09yZ0V4YW0vQmVMZWFyblRlc3QnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRvdXQ9Jyc7JG91dCs9JyAnO1xuJGVhY2goJGRhdGEsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nICc7XG5pZigkdmFsdWUuU3RyRGVmYXVsdD09MCl7XG4kb3V0Kz0nIDxzcGFuIGNsYXNzPVwibGV2ZWwtbmFtZSBcIiBpZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5EaW1JRCk7XG4kb3V0Kz0nXCIgZGF0YS1pcz1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdHJEZWZhdWx0KTtcbiRvdXQrPSdcIj4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuRGltTmFtZSk7XG4kb3V0Kz0nPC9zcGFuPiAnO1xufWVsc2V7XG4kb3V0Kz0nIDxzcGFuIGNsYXNzPVwibGV2ZWwtb25cIiBpZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5EaW1JRCk7XG4kb3V0Kz0nXCIgZGF0YS1pcz1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdHJEZWZhdWx0KTtcbiRvdXQrPSdcIj4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuRGltTmFtZSk7XG4kb3V0Kz0nPC9zcGFuPiA8L2Rpdj4gJztcbn1cbiRvdXQrPScgJztcbn0pO1xuJG91dCs9JyAnO1xucmV0dXJuIG5ldyBTdHJpbmcoJG91dCk7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL3RwbC9PcmdFeGFtL0JlTGVhcm5UZXN0LnRwbFxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=