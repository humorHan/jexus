webpackJsonp([14,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(31);


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

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgTeachWork/areadeletesc',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,Data=$data.Data,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(Data,function($value,$index){
	$out+=' <span class="schname" id="s';
	$out+=$escape($value.SchoolId);
	$out+='"> <i class="schlogo"></i> <em class="normal">';
	$out+=$escape($value.SchoolName.substring(0, 6));
	$out+='</em> <i class="deletesch" id="';
	$out+=$escape($value.SchoolId);
	$out+='"></i> </span> ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ },

/***/ 24:
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
	    var tiphtml = '<div class="pop-up font14 hidden" id="oktip"><span class="pop-close cursor"></span><div class="pop-content"><p class="line100" style="text-align:center;">' + obj + '</p></div></div>';
	
	    $("#main-content-wrapper").append(tiphtml);
	    $("#main-content-org-wrapper").append(tiphtml);
	    $(".pop-mask").show();
	    $(".pop-up").show();
	}
	//弹出确认框
	var OpenConfrimPop = function (obj) {
	    var html = '<div class="pop-up font14"><span class="pop-close cursor"></span><div class="pop-content">' + obj + '</div><br /><br /><div class="handle"> <span class="ok" id="Confrim">确定</span> &nbsp;&nbsp;&nbsp;<span class="ok" id="Cancel">取消</span> </div></div>';
	    $("#main-content-wrapper").append(html);
	    $(".pop-mask").show();
	    $(".pop-up").show();
	};
	//弹出确认框,没有取消按钮
	var OpenConfrimPopNoCancel = function (obj) {
	    var html = '<div class="pop-up font14"><span class="pop-close cursor"></span><div class="pop-content">' + obj + '</div><br /><br /><div class="handle"> <span class="ok" id="Confrim">确定</span> </div></div>';
	    $("#main-content-wrapper").append(html);
	    $(".pop-mask").show();
	    $(".pop-up").show();
	};
	///弹出多长时间后消失
	var OpenTimeHide = function (obj, time) {
	    //var html = '<div class="popup"> <h5 class="center font16 popuphead">消息提示<i class="popclose cursor"></i></h5><div class="popupbox"><div class="handle font14 auto">' + obj + '</div></div></div>';
	    var html = '  <div class="popup "><h5 class="center font16 popuphead"> 消息提示<i class="popclose cursor"></i></h5><div class="popupbox"><div style="text-align:center;"><div class="success auto" style="display:inline-block;margin-top:20px;"></div></div><div class="handle successLetter"> <span class="mt20">'+obj+'</span></div></div></div>';
	    $("#main-content-wrapper").append(html);
	    $(".popup").show();
	  
	    setTimeout(function () {
	        $(".popup").hide();
	        document.location.reload();
	    }, time);
	
	};
	function PopTipHide() {
	    $(".pop-up").hide();
	    $(".pop-mask").hide();
	    $(".add").hide();
	    document.location.reload();
	}
	
	exports.MaskShow = MaskShow;
	exports.MaskHide = MaskHide;
	exports.PopTipShow = PopTipShow;
	exports.PopTipHide = PopTipHide;
	exports.OpenConfrimPop = OpenConfrimPop;
	exports.OpenTimeHide = OpenTimeHide;
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
	    $("#main-content-org-wrapper").delegate(".pop-close", "click", function () {
	        $(".pop-mask").hide();
	        $(".pop-up").hide();
	        //document.location.reload();
	    });
	
	    $("#main-content-org-wrapper").delegate(".popclose", "click", function () {
	        $(".pop-mask").hide();
	        $(".add").hide();
	    });
	
	});
	


/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	
	var tplTable = __webpack_require__(18);
	var pop = __webpack_require__(24);
	var module = {
	    init: function () {
	       
	        //todo 逻辑函数
	        this.render();
	       
	        this.initBtns();
	
	    },
	    //获取校区绑定
	    render: function () {
	        $.ajax({
	            type: "post",
	            url: "/OrgTeachWork/Organization/GetSchoolByArea",
	            dataType: "json",
	            data: {
	                "AreaId": $("#areaid").val()
	               
	            },
	            success: function (data) {
	
	                if (data.result.Data) {
	                    $("#areaname").html(data.result.Data[0].AreaName);
	                    $("#d-schools").html(tplTable(data.result));
	                }
	                else {
	                   
	                }
	            }
	        });
	
	    },
	    initBtns: function () {
	        //todo 绑定事件
	
	        //委托删除学校
	        $('#d-schools').delegate(".deletesch", "click", function () {
	            var id ="s"+ this.id;
	            $("#"+id).remove();
	        });
	    }
	
	
	};
	///保存数据
	function OptSave() {
	    $("#btnSave").click(function () {
	        var schoolIds = "";
	
	        var dele = $(".deletesch");
	       
	        $.map(dele, function (item) {
	            schoolIds += item.id;
	            schoolIds += ",";
	        });
	        if (schoolIds.length > 1) {
	            schoolIds = schoolIds.substring(0, schoolIds.length - 1);
	        }
	        //删除大区下面学校
	        var option = {};
	        option.AreaID = $("#areaid").val();
	        option.SchoolIds = schoolIds;
	        $.post("/OrgTeachWork/Organization/DeleteSchoolByArea", { "data": JSON.stringify(option) }, function () {
	            //alert("删除成功");
	            pop.PopTipShow('恭喜您，修改校区成功!');
	            setTimeout(pop.PopTipHide, 2000);
	            //$("#oktip").show();
	        }, "json");
	
	
	    });
	
	
	    
	}
	
	
	///取消删除
	function OptCancel() {
	   
	    $("#btnCancel").click(function () {
	        document.location.reload();
	    });
	}
	
	
	//点击大区名确定
	function SubAreaOk() {
	
	    $("#editok").click(function () {
	
	        var areaName = $("#uareaname").val();//经理id
	        var option = {};
	        option.AreaId = $("#areaid").val();//大区id
	        option.AreaName = areaName;
	       
	        //校验
	        if (areaName.length < 1) {
	
	            alert("不能为空");
	            return;
	
	        }
	        $.ajax({
	            type: "post",
	            url: "/OrgTeachWork/Organization/UpdateNameForArea",
	            dataType: "json",
	            data: {
	                data: JSON.stringify(option)
	            },
	            success: function () {//data.result;  
	
	                //alert("处理成功");
	               
	                $("#oktip").show();
	                document.location.reload();
	
	                $(".addman").hide();
	
	            }
	        });
	
	
	
	    });
	
	}
	//绑定数据
	$(function () {
	    module.init();
	    OptBtn();
	    OptSave();
	    OptCancel();
	    SubAreaOk();
	});
	
	//处理按钮
	function OptBtn() {
	
	    ///修改区域名
	    $("#editimg").click(function () {
	
	        $("#editimg").hide();
	        $("#areaname").hide();
	        $("#editok").show();
	        $("#uareaname").show();
	
	
	    });
	
	    $(document).click(function (event) {
	
	        if (event.target.nodeName.toLowerCase() == "img") {
	
	        } else {
	            //对修改的进行更改
	            $("#editimg").show();
	            $("#areaname").show();
	            $("#editok").hide();
	            $("#uareaname").hide();
	
	        }
	
	
	    });
	
	}
	
	
	


/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnVGVhY2hXb3JrL2FyZWFkZWxldGVzYy50cGw/ODJhNCIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL3BvcHVwL3BvcHVwdGlwLmpzP2YwMzIiLCJ3ZWJwYWNrOi8vLy4vT3JnL2pzL09yZ1RlYWNoV29yay9hcmVhZGVsZXRlc2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQWtDO0FBQ2xDOztBQUVBO0FBQ0EseUNBQXdDLE9BQU8sMkJBQTJCO0FBQzFFOztBQUVBO0FBQ0E7QUFDQSxzQ0FBcUMsWUFBWTtBQUNqRDtBQUNBOztBQUVBO0FBQ0EsMEJBQXlCLGlFQUFpRTtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQSxhQUFZLGVBQWU7QUFDM0Isa0RBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFxQjtBQUNyQixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLEdBQUU7QUFDRixrQ0FBaUM7QUFDakMsSUFBRztBQUNILGVBQWM7QUFDZDtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRixFQUFDLEc7Ozs7Ozs7QUM5RUQ7QUFDQTtBQUNBO0FBQ0EsY0FBYSxtSkFBbUo7QUFDaEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7O0FDZkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEtBQTJLOztBQUUzSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJNQUEwTSxNQUFNLE1BQU07QUFDdE47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdLQUF1Syx3REFBd0QsZ0JBQWdCO0FBQy9PO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTCxFQUFDOzs7Ozs7Ozs7O0FDaEZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7O0FBRVQsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFLGlDQUFpQztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7OztBQUdULE1BQUs7Ozs7QUFJTDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBLDhDQUE2QztBQUM3QztBQUNBLDRDQUEyQztBQUMzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsbUNBQWtDLGM7O0FBRWxDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFTOzs7O0FBSVQsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE1BQUs7O0FBRUw7O0FBRUE7O0FBRUEsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLE1BQUs7O0FBRUwiLCJmaWxlIjoiYXJlYWRlbGV0ZXNjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypUTU9ESlM6e30qL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdGZ1bmN0aW9uIGEoYSwgYikge1xyXG5cdFx0cmV0dXJuICgvc3RyaW5nfGZ1bmN0aW9uLy50ZXN0KHR5cGVvZiBiKSA/IGggOiBnKShhLCBiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYihhLCBjKSB7XHJcblx0XHRyZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSAmJiAoYyA9IHR5cGVvZiBhLCBcIm51bWJlclwiID09PSBjID8gYSArPSBcIlwiIDogYSA9IFwiZnVuY3Rpb25cIiA9PT0gYyA/IGIoYS5jYWxsKGEpKSA6IFwiXCIpLCBhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjKGEpIHtcclxuXHRcdHJldHVybiBsW2FdXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkKGEpIHtcclxuXHRcdHJldHVybiBiKGEpLnJlcGxhY2UoLyYoPyFbXFx3I10rOyl8Wzw+XCInXS9nLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZShhLCBiKSB7XHJcblx0XHRpZiAobShhKSlmb3IgKHZhciBjID0gMCwgZCA9IGEubGVuZ3RoOyBkID4gYzsgYysrKWIuY2FsbChhLCBhW2NdLCBjLCBhKTsgZWxzZSBmb3IgKGMgaW4gYSliLmNhbGwoYSwgYVtjXSwgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoYSwgYikge1xyXG5cdFx0dmFyIGMgPSAvKFxcLylbXlxcL10rXFwxXFwuXFwuXFwxLywgZCA9IChcIi4vXCIgKyBhKS5yZXBsYWNlKC9bXlxcL10rJC8sIFwiXCIpLCBlID0gZCArIGI7XHJcblx0XHRmb3IgKGUgPSBlLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7IGUubWF0Y2goYyk7KWUgPSBlLnJlcGxhY2UoYywgXCIvXCIpO1xyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoYiwgYykge1xyXG5cdFx0dmFyIGQgPSBhLmdldChiKSB8fCBpKHtmaWxlbmFtZTogYiwgbmFtZTogXCJSZW5kZXIgRXJyb3JcIiwgbWVzc2FnZTogXCJUZW1wbGF0ZSBub3QgZm91bmRcIn0pO1xyXG5cdFx0cmV0dXJuIGMgPyBkKGMpIDogZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChhLCBiKSB7XHJcblx0XHRpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYikge1xyXG5cdFx0XHR2YXIgYyA9IGI7XHJcblx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBrKGMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBkID0galthXSA9IGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBiKGMsIGEpICsgXCJcIlxyXG5cdFx0XHR9IGNhdGNoIChkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGkoZCkoKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGQucHJvdG90eXBlID0gYi5wcm90b3R5cGUgPSBuLCBkLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYiArIFwiXCJcclxuXHRcdH0sIGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGkoYSkge1xyXG5cdFx0dmFyIGIgPSBcIntUZW1wbGF0ZSBFcnJvcn1cIiwgYyA9IGEuc3RhY2sgfHwgXCJcIjtcclxuXHRcdGlmIChjKWMgPSBjLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCJcXG5cIik7IGVsc2UgZm9yICh2YXIgZCBpbiBhKWMgKz0gXCI8XCIgKyBkICsgXCI+XFxuXCIgKyBhW2RdICsgXCJcXG5cXG5cIjtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IoYiArIFwiXFxuXFxuXCIgKyBjKSwgYlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGogPSBhLmNhY2hlID0ge30sIGsgPSB0aGlzLlN0cmluZywgbCA9IHtcclxuXHRcdFwiPFwiOiBcIiYjNjA7XCIsXHJcblx0XHRcIj5cIjogXCImIzYyO1wiLFxyXG5cdFx0J1wiJzogXCImIzM0O1wiLFxyXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcclxuXHRcdFwiJlwiOiBcIiYjMzg7XCJcclxuXHR9LCBtID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xyXG5cdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB7fS50b1N0cmluZy5jYWxsKGEpXHJcblx0XHR9LCBuID0gYS51dGlscyA9IHtcclxuXHRcdCRoZWxwZXJzOiB7fSwgJGluY2x1ZGU6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcblx0XHRcdHJldHVybiBhID0gZihjLCBhKSwgZyhhLCBiKVxyXG5cdFx0fSwgJHN0cmluZzogYiwgJGVzY2FwZTogZCwgJGVhY2g6IGVcclxuXHR9LCBvID0gYS5oZWxwZXJzID0gbi4kaGVscGVycztcclxuXHRhLmdldCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRyZXR1cm4galthLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKV1cclxuXHR9LCBhLmhlbHBlciA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRvW2FdID0gYlxyXG5cdH0sIG1vZHVsZS5leHBvcnRzID0gYVxyXG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdG1vZGpzLWxvYWRlci9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDggMTMgMTQgMTUgMTYgMTcgMTggMTkgMjEgMjMgMjUgMjYgMjcgMzEgMzIgMzMgMzcgMzhcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmdUZWFjaFdvcmsvYXJlYWRlbGV0ZXNjJyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlYWNoPSR1dGlscy4kZWFjaCxEYXRhPSRkYXRhLkRhdGEsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaChEYXRhLGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8c3BhbiBjbGFzcz1cInNjaG5hbWVcIiBpZD1cInMnO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU2Nob29sSWQpO1xuJG91dCs9J1wiPiA8aSBjbGFzcz1cInNjaGxvZ29cIj48L2k+IDxlbSBjbGFzcz1cIm5vcm1hbFwiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TY2hvb2xOYW1lLnN1YnN0cmluZygwLCA2KSk7XG4kb3V0Kz0nPC9lbT4gPGkgY2xhc3M9XCJkZWxldGVzY2hcIiBpZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TY2hvb2xJZCk7XG4kb3V0Kz0nXCI+PC9pPiA8L3NwYW4+ICc7XG59KTtcbiRvdXQrPScgJztcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy90cGwvT3JnVGVhY2hXb3JrL2FyZWFkZWxldGVzYy50cGxcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSA1IDE0XG4gKiovIiwiLy/pga7nvalcclxuZnVuY3Rpb24gTWFza1Nob3coKSB7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWFza0hpZGUoKSB7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxufVxyXG4vL+S8oOmAkuaYvuekuueahOa2iOaBr1xyXG5mdW5jdGlvbiBQb3BUaXBTaG93KG9iaikge1xyXG4gICAgdmFyIHRpcGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcC11cCBmb250MTQgaGlkZGVuXCIgaWQ9XCJva3RpcFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj48cCBjbGFzcz1cImxpbmUxMDBcIiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiPicgKyBvYmogKyAnPC9wPjwvZGl2PjwvZGl2Pic7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5hcHBlbmQodGlwaHRtbCk7XHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5hcHBlbmQodGlwaHRtbCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxuICAgICQoXCIucG9wLXVwXCIpLnNob3coKTtcclxufVxyXG4vL+W8ueWHuuehruiupOahhlxyXG52YXIgT3BlbkNvbmZyaW1Qb3AgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj4nICsgb2JqICsgJzwvZGl2PjxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJoYW5kbGVcIj4gPHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ29uZnJpbVwiPuehruWumjwvc3Bhbj4gJm5ic3A7Jm5ic3A7Jm5ic3A7PHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ2FuY2VsXCI+5Y+W5raIPC9zcGFuPiA8L2Rpdj48L2Rpdj4nO1xyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5hcHBlbmQoaHRtbCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxuICAgICQoXCIucG9wLXVwXCIpLnNob3coKTtcclxufTtcclxuLy/lvLnlh7rnoa7orqTmoYYs5rKh5pyJ5Y+W5raI5oyJ6ZKuXHJcbnZhciBPcGVuQ29uZnJpbVBvcE5vQ2FuY2VsID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcC11cCBmb250MTRcIj48c3BhbiBjbGFzcz1cInBvcC1jbG9zZSBjdXJzb3JcIj48L3NwYW4+PGRpdiBjbGFzcz1cInBvcC1jb250ZW50XCI+JyArIG9iaiArICc8L2Rpdj48YnIgLz48YnIgLz48ZGl2IGNsYXNzPVwiaGFuZGxlXCI+IDxzcGFuIGNsYXNzPVwib2tcIiBpZD1cIkNvbmZyaW1cIj7noa7lrpo8L3NwYW4+IDwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59O1xyXG4vLy/lvLnlh7rlpJrplb/ml7bpl7TlkI7mtojlpLFcclxudmFyIE9wZW5UaW1lSGlkZSA9IGZ1bmN0aW9uIChvYmosIHRpbWUpIHtcclxuICAgIC8vdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcHVwXCI+IDxoNSBjbGFzcz1cImNlbnRlciBmb250MTYgcG9wdXBoZWFkXCI+5raI5oGv5o+Q56S6PGkgY2xhc3M9XCJwb3BjbG9zZSBjdXJzb3JcIj48L2k+PC9oNT48ZGl2IGNsYXNzPVwicG9wdXBib3hcIj48ZGl2IGNsYXNzPVwiaGFuZGxlIGZvbnQxNCBhdXRvXCI+JyArIG9iaiArICc8L2Rpdj48L2Rpdj48L2Rpdj4nO1xyXG4gICAgdmFyIGh0bWwgPSAnICA8ZGl2IGNsYXNzPVwicG9wdXAgXCI+PGg1IGNsYXNzPVwiY2VudGVyIGZvbnQxNiBwb3B1cGhlYWRcIj4g5raI5oGv5o+Q56S6PGkgY2xhc3M9XCJwb3BjbG9zZSBjdXJzb3JcIj48L2k+PC9oNT48ZGl2IGNsYXNzPVwicG9wdXBib3hcIj48ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+PGRpdiBjbGFzcz1cInN1Y2Nlc3MgYXV0b1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXRvcDoyMHB4O1wiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJoYW5kbGUgc3VjY2Vzc0xldHRlclwiPiA8c3BhbiBjbGFzcz1cIm10MjBcIj4nK29iaisnPC9zcGFuPjwvZGl2PjwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxuICAgICQoXCIucG9wdXBcIikuc2hvdygpO1xyXG4gIFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3B1cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9LCB0aW1lKTtcclxuXHJcbn07XHJcbmZ1bmN0aW9uIFBvcFRpcEhpZGUoKSB7XHJcbiAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59XHJcblxyXG5leHBvcnRzLk1hc2tTaG93ID0gTWFza1Nob3c7XHJcbmV4cG9ydHMuTWFza0hpZGUgPSBNYXNrSGlkZTtcclxuZXhwb3J0cy5Qb3BUaXBTaG93ID0gUG9wVGlwU2hvdztcclxuZXhwb3J0cy5Qb3BUaXBIaWRlID0gUG9wVGlwSGlkZTtcclxuZXhwb3J0cy5PcGVuQ29uZnJpbVBvcCA9IE9wZW5Db25mcmltUG9wO1xyXG5leHBvcnRzLk9wZW5UaW1lSGlkZSA9IE9wZW5UaW1lSGlkZTtcclxuLy/lpITnkIblvLnlh7rmoYbnmoTpmpDol49cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcC1jbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgLy9kb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuZGVsZWdhdGUoXCIucG9wY2xvc2VcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3AtY2xvc2VcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5wb3AtdXBcIikuaGlkZSgpO1xyXG4gICAgICAgIC8vZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3BjbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9kZXAvcG9wdXAvcG9wdXB0aXAuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSA4IDE0IDIxIDI2IDMxIDMyIDMzIDM0IDM3IDM4XG4gKiovIiwiXHJcbnZhciB0cGxUYWJsZSA9IHJlcXVpcmUoXCJPcmdUZWFjaFdvcmsvYXJlYWRlbGV0ZXNjLnRwbFwiKTtcclxudmFyIHBvcCA9IHJlcXVpcmUoXCJwb3B1cC9wb3B1cHRpcC5qc1wiKTtcclxudmFyIG1vZHVsZSA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgIFxyXG4gICAgICAgIC8vdG9kbyDpgLvovpHlh73mlbBcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5pbml0QnRucygpO1xyXG5cclxuICAgIH0sXHJcbiAgICAvL+iOt+WPluagoeWMuue7keWumlxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvT3JnVGVhY2hXb3JrL09yZ2FuaXphdGlvbi9HZXRTY2hvb2xCeUFyZWFcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBcIkFyZWFJZFwiOiAkKFwiI2FyZWFpZFwiKS52YWwoKVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYXJlYW5hbWVcIikuaHRtbChkYXRhLnJlc3VsdC5EYXRhWzBdLkFyZWFOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2Qtc2Nob29sc1wiKS5odG1sKHRwbFRhYmxlKGRhdGEucmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSxcclxuICAgIGluaXRCdG5zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy90b2RvIOe7keWumuS6i+S7tlxyXG5cclxuICAgICAgICAvL+WnlOaJmOWIoOmZpOWtpuagoVxyXG4gICAgICAgICQoJyNkLXNjaG9vbHMnKS5kZWxlZ2F0ZShcIi5kZWxldGVzY2hcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9XCJzXCIrIHRoaXMuaWQ7XHJcbiAgICAgICAgICAgICQoXCIjXCIraWQpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn07XHJcbi8vL+S/neWtmOaVsOaNrlxyXG5mdW5jdGlvbiBPcHRTYXZlKCkge1xyXG4gICAgJChcIiNidG5TYXZlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2Nob29sSWRzID0gXCJcIjtcclxuXHJcbiAgICAgICAgdmFyIGRlbGUgPSAkKFwiLmRlbGV0ZXNjaFwiKTtcclxuICAgICAgIFxyXG4gICAgICAgICQubWFwKGRlbGUsIGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHNjaG9vbElkcyArPSBpdGVtLmlkO1xyXG4gICAgICAgICAgICBzY2hvb2xJZHMgKz0gXCIsXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHNjaG9vbElkcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHNjaG9vbElkcyA9IHNjaG9vbElkcy5zdWJzdHJpbmcoMCwgc2Nob29sSWRzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIoOmZpOWkp+WMuuS4i+mdouWtpuagoVxyXG4gICAgICAgIHZhciBvcHRpb24gPSB7fTtcclxuICAgICAgICBvcHRpb24uQXJlYUlEID0gJChcIiNhcmVhaWRcIikudmFsKCk7XHJcbiAgICAgICAgb3B0aW9uLlNjaG9vbElkcyA9IHNjaG9vbElkcztcclxuICAgICAgICAkLnBvc3QoXCIvT3JnVGVhY2hXb3JrL09yZ2FuaXphdGlvbi9EZWxldGVTY2hvb2xCeUFyZWFcIiwgeyBcImRhdGFcIjogSlNPTi5zdHJpbmdpZnkob3B0aW9uKSB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vYWxlcnQoXCLliKDpmaTmiJDlip9cIik7XHJcbiAgICAgICAgICAgIHBvcC5Qb3BUaXBTaG93KCfmga3llpzmgqjvvIzkv67mlLnmoKHljLrmiJDlip8hJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocG9wLlBvcFRpcEhpZGUsIDIwMDApO1xyXG4gICAgICAgICAgICAvLyQoXCIjb2t0aXBcIikuc2hvdygpO1xyXG4gICAgICAgIH0sIFwianNvblwiKTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIFxyXG59XHJcblxyXG5cclxuLy8v5Y+W5raI5Yig6ZmkXHJcbmZ1bmN0aW9uIE9wdENhbmNlbCgpIHtcclxuICAgXHJcbiAgICAkKFwiI2J0bkNhbmNlbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbi8v54K55Ye75aSn5Yy65ZCN56Gu5a6aXHJcbmZ1bmN0aW9uIFN1YkFyZWFPaygpIHtcclxuXHJcbiAgICAkKFwiI2VkaXRva1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBhcmVhTmFtZSA9ICQoXCIjdWFyZWFuYW1lXCIpLnZhbCgpOy8v57uP55CGaWRcclxuICAgICAgICB2YXIgb3B0aW9uID0ge307XHJcbiAgICAgICAgb3B0aW9uLkFyZWFJZCA9ICQoXCIjYXJlYWlkXCIpLnZhbCgpOy8v5aSn5Yy6aWRcclxuICAgICAgICBvcHRpb24uQXJlYU5hbWUgPSBhcmVhTmFtZTtcclxuICAgICAgIFxyXG4gICAgICAgIC8v5qCh6aqMXHJcbiAgICAgICAgaWYgKGFyZWFOYW1lLmxlbmd0aCA8IDEpIHtcclxuXHJcbiAgICAgICAgICAgIGFsZXJ0KFwi5LiN6IO95Li656m6XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9PcmdUZWFjaFdvcmsvT3JnYW5pemF0aW9uL1VwZGF0ZU5hbWVGb3JBcmVhXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkob3B0aW9uKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7Ly9kYXRhLnJlc3VsdDsgIFxyXG5cclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoXCLlpITnkIbmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJChcIiNva3RpcFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLmFkZG1hblwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbn1cclxuLy/nu5HlrprmlbDmja5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBtb2R1bGUuaW5pdCgpO1xyXG4gICAgT3B0QnRuKCk7XHJcbiAgICBPcHRTYXZlKCk7XHJcbiAgICBPcHRDYW5jZWwoKTtcclxuICAgIFN1YkFyZWFPaygpO1xyXG59KTtcclxuXHJcbi8v5aSE55CG5oyJ6ZKuXHJcbmZ1bmN0aW9uIE9wdEJ0bigpIHtcclxuXHJcbiAgICAvLy/kv67mlLnljLrln5/lkI1cclxuICAgICQoXCIjZWRpdGltZ1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICQoXCIjZWRpdGltZ1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNhcmVhbmFtZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNlZGl0b2tcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjdWFyZWFuYW1lXCIpLnNob3coKTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSBcImltZ1wiKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5a+55L+u5pS555qE6L+b6KGM5pu05pS5XHJcbiAgICAgICAgICAgICQoXCIjZWRpdGltZ1wiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjYXJlYW5hbWVcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiI2VkaXRva1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjdWFyZWFuYW1lXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmdUZWFjaFdvcmsvYXJlYWRlbGV0ZXNjLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9