webpackJsonp([17,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(36);


/***/ },

/***/ 3:
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

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	var tplTable = __webpack_require__(37);
	
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
	


/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgClass/classdetail',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,ListModel=$data.ListModel,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,ListStuSubjectIdAndName=$data.ListStuSubjectIdAndName,$out='';$out+=' <p class="center font14 headbg"> 老师<span class="red ml5" id="teacherNum"></span>名老师 </p> <ul class="pb30 pt30 teacherbox overflow"> <li> ';
	$each(ListModel,function($value,$index){
	$out+=' <span> <i class="teacher"></i>';
	$out+=$escape($value.TrueName);
	$out+='(';
	$out+=$escape($value.SubjectName);
	$out+=') </span> ';
	});
	$out+=' </li> </ul> ';
	$each(ListStuSubjectIdAndName,function($value,$index){
	$out+=' <p class="center font14 headbg"> ';
	$out+=$escape($value.SubjectName);
	$out+='<span class="red ml5">';
	$out+=$escape($value.TotalNum);
	$out+='</span>名学生 </p> <ul class="pb30 pt30 studentbox"> <li class="mb18 overflow"> ';
	$each($value.StuInfo,function($value,$index){
	$out+=' <span> <i class="student"></i>';
	$out+=$escape($value.UserName);
	$out+=' </span> ';
	});
	$out+=' </li> </ul> ';
	});
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqKioqIiwid2VicGFjazovLy8uL09yZy9qcy9PcmcvY2xhc3NkZXRhaWxzLmpzIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnQ2xhc3MvY2xhc3NkZXRhaWwudHBsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFrQztBQUNsQzs7QUFFQTtBQUNBLHlDQUF3QyxPQUFPLDJCQUEyQjtBQUMxRTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXFDLFlBQVk7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QixpRUFBaUU7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0EsYUFBWSxlQUFlO0FBQzNCLGtEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBcUI7QUFDckIsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixHQUFFO0FBQ0Ysa0NBQWlDO0FBQ2pDLElBQUc7QUFDSCxlQUFjO0FBQ2Q7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0YsRUFBQyxHOzs7Ozs7O0FDOUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVUsNkNBQTZDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxNQUFLOztBQUVMOzs7QUFHQSxFQUFDOzs7Ozs7Ozs7QUM1SEQ7QUFDQTtBQUNBO0FBQ0EsY0FBYSxtTkFBbU47QUFDaE87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxFQUFDLEUiLCJmaWxlIjoiY2xhc3NkZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypUTU9ESlM6e30qL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdGZ1bmN0aW9uIGEoYSwgYikge1xyXG5cdFx0cmV0dXJuICgvc3RyaW5nfGZ1bmN0aW9uLy50ZXN0KHR5cGVvZiBiKSA/IGggOiBnKShhLCBiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYihhLCBjKSB7XHJcblx0XHRyZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSAmJiAoYyA9IHR5cGVvZiBhLCBcIm51bWJlclwiID09PSBjID8gYSArPSBcIlwiIDogYSA9IFwiZnVuY3Rpb25cIiA9PT0gYyA/IGIoYS5jYWxsKGEpKSA6IFwiXCIpLCBhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjKGEpIHtcclxuXHRcdHJldHVybiBsW2FdXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkKGEpIHtcclxuXHRcdHJldHVybiBiKGEpLnJlcGxhY2UoLyYoPyFbXFx3I10rOyl8Wzw+XCInXS9nLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZShhLCBiKSB7XHJcblx0XHRpZiAobShhKSlmb3IgKHZhciBjID0gMCwgZCA9IGEubGVuZ3RoOyBkID4gYzsgYysrKWIuY2FsbChhLCBhW2NdLCBjLCBhKTsgZWxzZSBmb3IgKGMgaW4gYSliLmNhbGwoYSwgYVtjXSwgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoYSwgYikge1xyXG5cdFx0dmFyIGMgPSAvKFxcLylbXlxcL10rXFwxXFwuXFwuXFwxLywgZCA9IChcIi4vXCIgKyBhKS5yZXBsYWNlKC9bXlxcL10rJC8sIFwiXCIpLCBlID0gZCArIGI7XHJcblx0XHRmb3IgKGUgPSBlLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7IGUubWF0Y2goYyk7KWUgPSBlLnJlcGxhY2UoYywgXCIvXCIpO1xyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoYiwgYykge1xyXG5cdFx0dmFyIGQgPSBhLmdldChiKSB8fCBpKHtmaWxlbmFtZTogYiwgbmFtZTogXCJSZW5kZXIgRXJyb3JcIiwgbWVzc2FnZTogXCJUZW1wbGF0ZSBub3QgZm91bmRcIn0pO1xyXG5cdFx0cmV0dXJuIGMgPyBkKGMpIDogZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChhLCBiKSB7XHJcblx0XHRpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYikge1xyXG5cdFx0XHR2YXIgYyA9IGI7XHJcblx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBrKGMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBkID0galthXSA9IGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBiKGMsIGEpICsgXCJcIlxyXG5cdFx0XHR9IGNhdGNoIChkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGkoZCkoKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGQucHJvdG90eXBlID0gYi5wcm90b3R5cGUgPSBuLCBkLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYiArIFwiXCJcclxuXHRcdH0sIGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGkoYSkge1xyXG5cdFx0dmFyIGIgPSBcIntUZW1wbGF0ZSBFcnJvcn1cIiwgYyA9IGEuc3RhY2sgfHwgXCJcIjtcclxuXHRcdGlmIChjKWMgPSBjLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCJcXG5cIik7IGVsc2UgZm9yICh2YXIgZCBpbiBhKWMgKz0gXCI8XCIgKyBkICsgXCI+XFxuXCIgKyBhW2RdICsgXCJcXG5cXG5cIjtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IoYiArIFwiXFxuXFxuXCIgKyBjKSwgYlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGogPSBhLmNhY2hlID0ge30sIGsgPSB0aGlzLlN0cmluZywgbCA9IHtcclxuXHRcdFwiPFwiOiBcIiYjNjA7XCIsXHJcblx0XHRcIj5cIjogXCImIzYyO1wiLFxyXG5cdFx0J1wiJzogXCImIzM0O1wiLFxyXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcclxuXHRcdFwiJlwiOiBcIiYjMzg7XCJcclxuXHR9LCBtID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xyXG5cdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB7fS50b1N0cmluZy5jYWxsKGEpXHJcblx0XHR9LCBuID0gYS51dGlscyA9IHtcclxuXHRcdCRoZWxwZXJzOiB7fSwgJGluY2x1ZGU6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcblx0XHRcdHJldHVybiBhID0gZihjLCBhKSwgZyhhLCBiKVxyXG5cdFx0fSwgJHN0cmluZzogYiwgJGVzY2FwZTogZCwgJGVhY2g6IGVcclxuXHR9LCBvID0gYS5oZWxwZXJzID0gbi4kaGVscGVycztcclxuXHRhLmdldCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRyZXR1cm4galthLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKV1cclxuXHR9LCBhLmhlbHBlciA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRvW2FdID0gYlxyXG5cdH0sIG1vZHVsZS5leHBvcnRzID0gYVxyXG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdG1vZGpzLWxvYWRlci9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDggMTMgMTQgMTUgMTYgMTcgMTggMTkgMjEgMjMgMjUgMjYgMjcgMzEgMzIgMzMgMzcgMzhcbiAqKi8iLCJ2YXIgdHBsVGFibGUgPSByZXF1aXJlKFwiT3JnQ2xhc3MvY2xhc3NkZXRhaWwudHBsXCIpO1xyXG5cclxudmFyIG1vZHVsZSA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9XHJcbiAgICAsIHJlbmRlcjogZnVuY3Rpb24gKGNsYXNzaWQpIHtcclxuICAgICAgICB2YXIgb2JqID0geyBDbGFzc0lEOiBjbGFzc2lkIH07XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnXHJcbiAgICAgICAgICAgICwgdXJsOiAnL09yZy9DbGFzc01hbmFnZS9HZXRDbGFzc0RldGFpbCdcclxuICAgICAgICAgICAgLCBkYXRhVHlwZTogJ2pzb24nXHJcbiAgICAgICAgICAgICwgZGF0YTogeyBzdHI6IEpTT04uc3RyaW5naWZ5KG9iaikgfVxyXG4gICAgICAgICAgICAsIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NuYW1lID0gZGF0YS5yZXN1bHQuRGF0YS5NZmdDbGFzc01vZGVsLkNsYXNzTmFtZTtcclxuICAgICAgICAgICAgICAgICQoXCIuZWRpdHRleHRcIikudmFsKGNsYXNzbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmNsYXNzbmFtZVwiKS50ZXh0KGNsYXNzbmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNjbGFzc0RldGFpbENvbnRleHRcIikuaHRtbCh0cGxUYWJsZShkYXRhLnJlc3VsdC5EYXRhKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0LkRhdGEgIT0gbnVsbCAmJiBkYXRhLnJlc3VsdC5EYXRhLkxpc3RNb2RlbCAhPSBudWxsICYmIGRhdGEucmVzdWx0LkRhdGEuTGlzdE1vZGVsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+iAgeW4iOaVsOmHjyBcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3RlYWNoZXJOdW1cIikudGV4dChkYXRhLnJlc3VsdC5EYXRhLkxpc3RNb2RlbC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5oC75a6577yaY2xhc3NEZXRhaWxDb250ZXh0XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLCBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG4vL+WumuS5ieaPkOekuuivrVxyXG52YXIgY2xhc3NOYW1lTnVtID0gMTI7XHJcbnZhciBjbGFzc05hbWVNYXggPSBcIuePree6p+WQjeensOS4jeiDvei2hei/hzbkuKrlrZfnrKbvvIFcIjtcclxuLy/liKTmlq3lrZfmlbBcclxuZnVuY3Rpb24gZ2V0Q2hyTGVuKHN0ciwgbWF4TGVuZ3RoKSB7XHJcbiAgICB2YXIgcmVhbExlbmd0aCA9IDAsIGxlbiA9IHN0ci5sZW5ndGgsIGNoYXJDb2RlID0gLTE7XHJcbiAgICB4ID0gMDtcclxuICAgIGZvciAoOyAoeCA8IGxlbikgJiYgKHJlYWxMZW5ndGggPD0gbWF4TGVuZ3RoICogMikgOyB4KyspIHtcclxuICAgICAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KHgpO1xyXG4gICAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOClcclxuICAgICAgICAgICAgcmVhbExlbmd0aCArPSAxO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmVhbExlbmd0aCArPSAyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlYWxMZW5ndGg7XHJcbn1cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGlucHV0dGV4dCA9ICQoXCIuZWRpdHRleHRcIik7XHJcbiAgICB2YXIgY2xhc3NuYW1lID0gJChcIi5jbGFzc25hbWVcIik7XHJcbiAgICB2YXIgaG91c2Vsb2dvID0gJChcIi5ob3VzZVwiKTtcclxuICAgIHZhciBlZGl0ID0gJChcIi5lZGl0XCIpO1xyXG4gICAgaW5wdXR0ZXh0LmhpZGUoKTtcclxuICAgIGlucHV0dGV4dC52YWwoY2xhc3NuYW1lLnRleHQoKSk7XHJcbiAgICBlZGl0LmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQoXCIuZWRpdG9rXCIpLmhpZGUoKTtcclxuICAgICAgICBob3VzZWxvZ28uaGlkZSgpO1xyXG4gICAgICAgIGNsYXNzbmFtZS5oaWRlKCk7XHJcbiAgICAgICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICAgICAgaW5wdXR0ZXh0LnNob3coKS52YWwoY2xhc3NuYW1lLnRleHQoKSk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG4gICAgaW5wdXR0ZXh0LmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmVkaXRpbWdcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuZWRpdG9rXCIpLnNob3coKTtcclxuICAgICAgICBob3VzZWxvZ28uc2hvdygpO1xyXG4gICAgICAgIGlucHV0dGV4dC5oaWRlKCk7XHJcbiAgICAgICAgZWRpdC5zaG93KCk7XHJcbiAgICAgICAgY2xhc3NuYW1lLnRleHQoaW5wdXR0ZXh0LnZhbCgpKS5zaG93KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL+WIpOaWreaYr+S7juWtpueuoei/m+WFpei/mOaYr+i2heeuoei/m+eahOadpeeahFxyXG4gICAgdmFyIGNvbWVmcm9taWQgPSAkLnRyaW0oJChcIiNDb21lRnJvbVwiKS52YWwoKSk7XHJcbiAgICBpZiAoY29tZWZyb21pZCA9PSBcIjFcIikge1xyXG4gICAgICAgICQoXCIjaWRCbGFja1BhZ2VcIikuYXR0cihcImhyZWZcIiwgXCIvT3JnL0NsYXNzTWFuYWdlL0luZGV4XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2lkQmxhY2tQYWdlXCIpLmF0dHIoXCJocmVmXCIsIFwiL09yZy9DbGFzc01hbmFnZS9TdXBlck1hbmFnZXJcIik7XHJcbiAgICAgICAgJChcImltZy5lZGl0b2tcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcImltZy5lZGl0aW1nXCIpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5L+u5pS554+t57qn5ZCN56ewXHJcbiAgICBpbnB1dHRleHQuYmx1cihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgY25hbWUgPSAkLnRyaW0oJHRoaXMudmFsKCkpO1xyXG4gICAgICAgIGlmIChjbmFtZSA9PSAnJykge1xyXG4gICAgICAgICAgICAkdGhpcy52YWwoY2xhc3NuYW1lLnRleHQoKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdldENockxlbihjbmFtZSwgY2xhc3NOYW1lTnVtKSA+IGNsYXNzTmFtZU51bSkge1xyXG4gICAgICAgICAgICBhbGVydChjbGFzc05hbWVNYXgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb2JqID0geyBDbGFzc05hbWU6IGNuYW1lLCBDbGFzc0lEOiAkLnRyaW0oJChcIiNDbGFzc0lEXCIpLnZhbCgpKSB9XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJ1xyXG4gICAgICAgICAgICAsIHVybDogXCIvT3JnL0NsYXNzTWFuYWdlL1VwZGF0ZUNsYXNzTmFtZVwiXHJcbiAgICAgICAgICAgICwgZGF0YTogeyBcInN0clwiOiBKU09OLnN0cmluZ2lmeShvYmopIH1cclxuICAgICAgICAgICAgLCBkYXRhVHlwZTogXCJqc29uXCJcclxuICAgICAgICAgICAgLCBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9rID0gZGF0YS5yZXN1bHQuT0s7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5yZXN1bHQuUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1vZHVsZS5yZW5kZXIoJC50cmltKCQoXCIjQ2xhc3NJRFwiKS52YWwoKSkpO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmcvY2xhc3NkZXRhaWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTdcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmdDbGFzcy9jbGFzc2RldGFpbCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsTGlzdE1vZGVsPSRkYXRhLkxpc3RNb2RlbCwkdmFsdWU9JGRhdGEuJHZhbHVlLCRpbmRleD0kZGF0YS4kaW5kZXgsJGVzY2FwZT0kdXRpbHMuJGVzY2FwZSxMaXN0U3R1U3ViamVjdElkQW5kTmFtZT0kZGF0YS5MaXN0U3R1U3ViamVjdElkQW5kTmFtZSwkb3V0PScnOyRvdXQrPScgPHAgY2xhc3M9XCJjZW50ZXIgZm9udDE0IGhlYWRiZ1wiPiDogIHluIg8c3BhbiBjbGFzcz1cInJlZCBtbDVcIiBpZD1cInRlYWNoZXJOdW1cIj48L3NwYW4+5ZCN6ICB5biIIDwvcD4gPHVsIGNsYXNzPVwicGIzMCBwdDMwIHRlYWNoZXJib3ggb3ZlcmZsb3dcIj4gPGxpPiAnO1xuJGVhY2goTGlzdE1vZGVsLGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8c3Bhbj4gPGkgY2xhc3M9XCJ0ZWFjaGVyXCI+PC9pPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5UcnVlTmFtZSk7XG4kb3V0Kz0nKCc7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdWJqZWN0TmFtZSk7XG4kb3V0Kz0nKSA8L3NwYW4+ICc7XG59KTtcbiRvdXQrPScgPC9saT4gPC91bD4gJztcbiRlYWNoKExpc3RTdHVTdWJqZWN0SWRBbmROYW1lLGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8cCBjbGFzcz1cImNlbnRlciBmb250MTQgaGVhZGJnXCI+ICc7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdWJqZWN0TmFtZSk7XG4kb3V0Kz0nPHNwYW4gY2xhc3M9XCJyZWQgbWw1XCI+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlRvdGFsTnVtKTtcbiRvdXQrPSc8L3NwYW4+5ZCN5a2m55SfIDwvcD4gPHVsIGNsYXNzPVwicGIzMCBwdDMwIHN0dWRlbnRib3hcIj4gPGxpIGNsYXNzPVwibWIxOCBvdmVyZmxvd1wiPiAnO1xuJGVhY2goJHZhbHVlLlN0dUluZm8sZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDxzcGFuPiA8aSBjbGFzcz1cInN0dWRlbnRcIj48L2k+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlVzZXJOYW1lKTtcbiRvdXQrPScgPC9zcGFuPiAnO1xufSk7XG4kb3V0Kz0nIDwvbGk+IDwvdWw+ICc7XG59KTtcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy90cGwvT3JnQ2xhc3MvY2xhc3NkZXRhaWwudHBsXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTdcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9