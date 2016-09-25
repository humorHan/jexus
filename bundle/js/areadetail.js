webpackJsonp([15,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);


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

/***/ 5:
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

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	
	var tplTable = __webpack_require__(33);
	var pop = __webpack_require__(5);
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
	                    $("#managername").html(data.result.Data[0].ManageName);
	
	
	                    var scids = "";
	                    $.each(data.result.Data, function () {
	                        scids += this.SchoolId;
	                        scids += ",";
	
	
	                    });
	                    if (scids.length > 1) {
	                        scids = scids.substring(0, scids.length - 1);
	                    }
	
	                    $("#schoolIds").val(scids);//赋一个学校id隐藏值
	
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
	            var id = "s" + this.id;
	            $("#" + id).remove();
	        });
	    }
	
	
	};
	
	//绑定数据
	$(function () {
	    module.init();
	
	    OptBtn();//初始化button
	    OptAreaName();
	    SubScOk();
	    SubManOk();
	    SubAreaOk();
	
	});
	
	//修改区域名
	function OptAreaName() {
	
	    $("#editimg").click(function () {
	
	        $("#editimg").hide();
	        $("#areaname").hide();
	        $("#editok").show();
	        $("#uareaname").show();
	
	
	    });
	
	
	}
	
	
	//点击学校确定
	function SubScOk() {
	
	    $("#addScSub").click(function () {
	        var str = "";//已选择的校区id
	        $("#scList :checkbox").each((function () {
	
	            if ($(this).is(":checked")) {
	                str += this.id.replace("chk", "");
	                str += ",";
	            }
	
	        }));
	
	        if (str.length > 1) {
	            str = str.substring(0, str.length - 1);//学校ids
	        }
	        var option = {};
	        option.AreaId = $("#areaid").val();//大区id
	        option.SchoolIds = str;
	
	        $.ajax({
	            type: "post",
	            url: "/OrgTeachWork/Organization/AddSchoolForArea",
	            dataType: "json",
	            data: {
	                data: JSON.stringify(option)
	            },
	            success: function () {//data.result;  
	
	                //alert("处理成功");
	
	                pop.PopTipShow('恭喜您，添加校区名成功!');
	                setTimeout(pop.PopTipHide, 2000);
	            }
	        });
	
	
	        //$(".addSc").hide();
	
	
	    });
	
	}
	
	
	//点击经理确定
	function SubManOk() {
	
	    $("#addManSub").click(function () {
	
	        var mangerId = $("#managerid").val();//经理id
	        var option = {
	        };
	        option.AreaId = $("#areaid").val();//大区id
	        option.ManagerId = mangerId;
	
	        $.ajax({
	            type: "post",
	            url: "/OrgTeachWork/Organization/UpdateManageForArea",
	            dataType: "json",
	            data: {
	                data: JSON.stringify(option)
	            },
	            success: function () {//data.result;  
	               
	                pop.PopTipShow('恭喜您，修改经理成功!');
	                setTimeout(pop.PopTipHide, 2000);
	
	            }
	        });
	        
	
	
	    });
	
	}
	
	
	//点击大区名确定
	function SubAreaOk() {
	
	    $("#editok").click(function () {
	
	        var areaName = $("#uareaname").val();//大区名
	        var option = {
	        };
	        option.AreaId = $("#areaid").val();//大区id
	        option.AreaName = areaName;
	
	        //校验
	        if (areaName.length < 1) {
	            pop.PopTipShow('不能为空!');
	            //alert("不能为空");
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
	                document.location.reload();
	
	
	            }
	        });
	
	
	
	    });
	
	}
	//加载展示学校
	function ShowSchs() {
	    $.ajax({
	        type: "post",
	        url: "/OrgTeachWork/Organization/GetSchoolByArea",
	        dataType: "json",
	        data: {
	            "AreaId": $("#areaid").val()
	
	        },
	        success: function (data) {
	
	            if (data.result.Data) {
	                $("#d-schools").html(tplTable(data.result));
	            }
	            else {
	
	            }
	        }
	    });
	
	
	}
	
	//加载展示学校结束
	
	
	//加载经理列表
	function OptMans() {
	
	
	    $.ajax({
	        type: "post",
	        url: "/OrgTeachWork/Organization/GetManageByOrg",
	        dataType: "json",
	        data: {
	
	        },
	        success: function (data) {
	
	            if (data.result.Data) {
	                var manName = $("#managername").text();//经理名
	
	                var jlhtml = "";
	                for (var key in data.result.Data) {
	                    if (data.result.Data[key].ManageId != undefined) {
	                        //jlhtml += '<li id="' + data.result.Data[key].ManageId + '">' + data.result.Data[key].ManageName + '</li>';
	                        if (data.result.Data[key].ManageName == manName) {
	                            jlhtml += '<option  selected="selected" value="' + data.result.Data[key].ManageId + '">' + data.result.Data[key].ManageName + '</option>';
	
	                        } else {
	                            jlhtml += '<option value="' + data.result.Data[key].ManageId + '">' + data.result.Data[key].ManageName + '</option>';
	                        }
	
	
	                    }
	                }
	                $("#managerid").html(jlhtml);
	
	            }
	            else {
	
	
	            }
	        }
	    });
	
	}
	//加载经理结束
	
	//加载学校列表
	function OptScs() {
	    $.ajax({
	        type: "post",
	        url: "/OrgTeachWork/Organization/GetSchoolsByOrgId",
	        dataType: "json",
	        data: {
	            OrgId: 1
	
	        },
	        success: function (data) {//data.result;
	            var schtml = "";
	            var alChks = $("#schoolIds").val();
	
	            for (var key in data.result.Data) {
	                if (data.result.Data[key].SchoolName != undefined) {
	                    if (alChks.indexOf(data.result.Data[key].SchoolId) != -1) {
	                        schtml += ' <p class="mb10" ><input type="checkbox" checked="checked" class="mr20" id="chk' + data.result.Data[key].SchoolId + '">' + BindStrCut(data.result.Data[key].SchoolName) + '<br> </p>';
	
	                    } else {
	                        schtml += ' <p class="mb10" ><input type="checkbox" class="mr20" id="chk' + data.result.Data[key].SchoolId + '">' + BindStrCut(data.result.Data[key].SchoolName) + '<br> </p>';
	                    }
	
	
	                }
	            }
	            $("#scList").html(schtml);
	            OptStrCut();
	
	        }
	    });
	
	}
	//加载学校列表结束
	
	
	//处理按钮
	function OptBtn() {
	
	    $("#deleteSc").click(function () {
	        var areaIdStr = $("#areaid").val();//区域id
	        window.location.href = '/OrgTeachWork/Organization/OrgDeleteSchoolList?AreaId=' + areaIdStr;
	
	    });
	    //添加校区
	    $("#addSc").click(function () {
	        $(".pop-mask").show();
	        $(".add-sch").show();
	        OptScs();
	
	    });
	    //修改经理
	    $("#updateMan").click(function () {
	        $(".pop-mask").show();
	        $(".addman").show();
	        OptMans();
	    });
	    //自定义下拉列表框开始
	    //$(".sele-text").click(function () {
	
	    //    var listbox = $(".listbox");
	    //    listbox.show();
	    //    var li = listbox.find("li");
	    //    for (var i = 0; i < li.length; i++) {
	    //        li.eq(i).click(function () {
	    //            var a = $(this).text();
	    //            var b = this.id;
	
	    //            $(".sele-text").text(a);
	    //            $("#mangehi").val(b);
	    //            listbox.hide();
	    //        });
	    //    }
	    //});
	    //自定义下拉列表框结束
	    //处理自定义下拉框的事件
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
	
	
	
	
	
	///处理截断字符串
	function BindStrCut(obj) {
	
	    if (obj.length > 4) {
	        obj = obj.substring(0, 4) + "...";
	        return obj;
	    }
	    return obj;
	
	
	};
	//截断字符串
	function OptStrCut() {
	    //弹出框截字处理开始
	
	    var li = $(".schright li");
	    for (var i = 0; i < li.length; i++) {
	        if (li.eq(i).find(".schname").text() > 4) {
	            var text = li.eq(i).find(".schname").text().substring(0, 4);
	            li.eq(i).find(".schname").text(text + "...");
	        }
	    }
	
	}

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgTeachWork/areadetail',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,Data=$data.Data,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(Data,function($value,$index){
	$out+=' <span class="schname mb10"><i class="schlogo"></i>';
	$out+=$escape($value.SchoolName);
	$out+='</span> ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqKiIsIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnVGVhY2hXb3JrL1BvcENvbW1vbi5qcz9lOTNlKioqKioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2pzL09yZ1RlYWNoV29yay9hcmVhZGV0YWlsLmpzIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnVGVhY2hXb3JrL2FyZWFkZXRhaWwudHBsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFrQztBQUNsQzs7QUFFQTtBQUNBLHlDQUF3QyxPQUFPLDJCQUEyQjtBQUMxRTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXFDLFlBQVk7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QixpRUFBaUU7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0EsYUFBWSxlQUFlO0FBQzNCLGtEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBcUI7QUFDckIsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixHQUFFO0FBQ0Ysa0NBQWlDO0FBQ2pDLElBQUc7QUFDSCxlQUFjO0FBQ2Q7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0YsRUFBQyxHOzs7Ozs7O0FDOUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUtBQW9LOztBQUVwSztBQUNBO0FBQ0E7QUFD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QUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QixlQUFlO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsTUFBSzs7O0FBR0w7Ozs7OztBQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEU7Ozs7Ozs7QUNoWkE7QUFDQTtBQUNBO0FBQ0EsY0FBYSxtSkFBbUo7QUFDaEs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUMsRSIsImZpbGUiOiJhcmVhZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypUTU9ESlM6e30qL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdGZ1bmN0aW9uIGEoYSwgYikge1xyXG5cdFx0cmV0dXJuICgvc3RyaW5nfGZ1bmN0aW9uLy50ZXN0KHR5cGVvZiBiKSA/IGggOiBnKShhLCBiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYihhLCBjKSB7XHJcblx0XHRyZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSAmJiAoYyA9IHR5cGVvZiBhLCBcIm51bWJlclwiID09PSBjID8gYSArPSBcIlwiIDogYSA9IFwiZnVuY3Rpb25cIiA9PT0gYyA/IGIoYS5jYWxsKGEpKSA6IFwiXCIpLCBhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjKGEpIHtcclxuXHRcdHJldHVybiBsW2FdXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkKGEpIHtcclxuXHRcdHJldHVybiBiKGEpLnJlcGxhY2UoLyYoPyFbXFx3I10rOyl8Wzw+XCInXS9nLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZShhLCBiKSB7XHJcblx0XHRpZiAobShhKSlmb3IgKHZhciBjID0gMCwgZCA9IGEubGVuZ3RoOyBkID4gYzsgYysrKWIuY2FsbChhLCBhW2NdLCBjLCBhKTsgZWxzZSBmb3IgKGMgaW4gYSliLmNhbGwoYSwgYVtjXSwgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoYSwgYikge1xyXG5cdFx0dmFyIGMgPSAvKFxcLylbXlxcL10rXFwxXFwuXFwuXFwxLywgZCA9IChcIi4vXCIgKyBhKS5yZXBsYWNlKC9bXlxcL10rJC8sIFwiXCIpLCBlID0gZCArIGI7XHJcblx0XHRmb3IgKGUgPSBlLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7IGUubWF0Y2goYyk7KWUgPSBlLnJlcGxhY2UoYywgXCIvXCIpO1xyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoYiwgYykge1xyXG5cdFx0dmFyIGQgPSBhLmdldChiKSB8fCBpKHtmaWxlbmFtZTogYiwgbmFtZTogXCJSZW5kZXIgRXJyb3JcIiwgbWVzc2FnZTogXCJUZW1wbGF0ZSBub3QgZm91bmRcIn0pO1xyXG5cdFx0cmV0dXJuIGMgPyBkKGMpIDogZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChhLCBiKSB7XHJcblx0XHRpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYikge1xyXG5cdFx0XHR2YXIgYyA9IGI7XHJcblx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBrKGMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBkID0galthXSA9IGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBiKGMsIGEpICsgXCJcIlxyXG5cdFx0XHR9IGNhdGNoIChkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGkoZCkoKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGQucHJvdG90eXBlID0gYi5wcm90b3R5cGUgPSBuLCBkLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYiArIFwiXCJcclxuXHRcdH0sIGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGkoYSkge1xyXG5cdFx0dmFyIGIgPSBcIntUZW1wbGF0ZSBFcnJvcn1cIiwgYyA9IGEuc3RhY2sgfHwgXCJcIjtcclxuXHRcdGlmIChjKWMgPSBjLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCJcXG5cIik7IGVsc2UgZm9yICh2YXIgZCBpbiBhKWMgKz0gXCI8XCIgKyBkICsgXCI+XFxuXCIgKyBhW2RdICsgXCJcXG5cXG5cIjtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IoYiArIFwiXFxuXFxuXCIgKyBjKSwgYlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGogPSBhLmNhY2hlID0ge30sIGsgPSB0aGlzLlN0cmluZywgbCA9IHtcclxuXHRcdFwiPFwiOiBcIiYjNjA7XCIsXHJcblx0XHRcIj5cIjogXCImIzYyO1wiLFxyXG5cdFx0J1wiJzogXCImIzM0O1wiLFxyXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcclxuXHRcdFwiJlwiOiBcIiYjMzg7XCJcclxuXHR9LCBtID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xyXG5cdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB7fS50b1N0cmluZy5jYWxsKGEpXHJcblx0XHR9LCBuID0gYS51dGlscyA9IHtcclxuXHRcdCRoZWxwZXJzOiB7fSwgJGluY2x1ZGU6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcblx0XHRcdHJldHVybiBhID0gZihjLCBhKSwgZyhhLCBiKVxyXG5cdFx0fSwgJHN0cmluZzogYiwgJGVzY2FwZTogZCwgJGVhY2g6IGVcclxuXHR9LCBvID0gYS5oZWxwZXJzID0gbi4kaGVscGVycztcclxuXHRhLmdldCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRyZXR1cm4galthLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKV1cclxuXHR9LCBhLmhlbHBlciA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRvW2FdID0gYlxyXG5cdH0sIG1vZHVsZS5leHBvcnRzID0gYVxyXG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdG1vZGpzLWxvYWRlci9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDggMTMgMTQgMTUgMTYgMTcgMTggMTkgMjEgMjMgMjUgMjYgMjcgMzEgMzIgMzMgMzcgMzhcbiAqKi8iLCIvL+mBrue9qVxyXG5mdW5jdGlvbiBNYXNrU2hvdygpIHtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNYXNrSGlkZSgpIHtcclxuICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG59XHJcbi8v5Lyg6YCS5pi+56S655qE5raI5oGvXHJcbmZ1bmN0aW9uIFBvcFRpcFNob3cob2JqKSB7XHJcbiAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICB2YXIgdGlwaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNFwiIGlkPVwib2t0aXBcIj48c3BhbiBjbGFzcz1cInBvcC1jbG9zZSBjdXJzb3JcIj48L3NwYW4+PGRpdiBjbGFzcz1cInBvcC1jb250ZW50XCI+PHAgY2xhc3M9XCJsaW5lMTAwXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtcIj4nICsgb2JqICsgJzwvcD48L2Rpdj48L2Rpdj4nO1xyXG5cclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuYXBwZW5kKHRpcGh0bWwpO1xyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtb3JnLXdyYXBwZXJcIikuYXBwZW5kKHRpcGh0bWwpO1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLnBvcC11cFwiKS5zaG93KCk7XHJcbn1cclxuLy/lvLnlh7rnoa7orqTmoYZcclxudmFyIE9wZW5Db25mcmltUG9wID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcC11cCBmb250MTRcIj48c3BhbiBjbGFzcz1cInBvcC1jbG9zZSBjdXJzb3JcIj48L3NwYW4+PGRpdiBjbGFzcz1cInBvcC1jb250ZW50XCI+JyArIG9iaiArICc8L2Rpdj48YnIgLz48YnIgLz48ZGl2IGNsYXNzPVwiaGFuZGxlXCI+IDxzcGFuIGNsYXNzPVwib2tcIiBpZD1cIkNvbmZyaW1cIj7noa7lrpo8L3NwYW4+ICZuYnNwOyZuYnNwOyZuYnNwOzxzcGFuIGNsYXNzPVwib2tcIiBpZD1cIkNhbmNlbFwiPuWPlua2iDwvc3Bhbj4gPC9kaXY+PC9kaXY+JztcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuYXBwZW5kKGh0bWwpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gUG9wVGlwSGlkZSgpIHtcclxuICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbn1cclxuLy/pmpDol4/mt7vliqDnmoTmoLflvI/lvZPlvLnlh7rmoYblkozmt7vliqDmoYbph43lj6DnmoRcclxuZnVuY3Rpb24gQWRkSGlkZSgpIHtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnRzLk1hc2tTaG93ID0gTWFza1Nob3c7XHJcbmV4cG9ydHMuTWFza0hpZGUgPSBNYXNrSGlkZTtcclxuZXhwb3J0cy5Qb3BUaXBTaG93ID0gUG9wVGlwU2hvdztcclxuZXhwb3J0cy5Qb3BUaXBIaWRlID0gUG9wVGlwSGlkZTtcclxuZXhwb3J0cy5PcGVuQ29uZnJpbVBvcCA9IE9wZW5Db25mcmltUG9wO1xyXG5leHBvcnRzLkFkZEhpZGUgPSBBZGRIaWRlO1xyXG5cclxuLy/lpITnkIblvLnlh7rmoYbnmoTpmpDol49cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcC1jbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgLy9kb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuZGVsZWdhdGUoXCIucG9wY2xvc2VcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvanMvT3JnVGVhY2hXb3JrL1BvcENvbW1vbi5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA3IDEyIDE1IDE2XG4gKiovIiwiXHJcbnZhciB0cGxUYWJsZSA9IHJlcXVpcmUoXCJPcmdUZWFjaFdvcmsvYXJlYWRldGFpbC50cGxcIik7XHJcbnZhciBwb3AgPSByZXF1aXJlKFwiLi9Qb3BDb21tb24uanNcIik7XHJcbnZhciBtb2R1bGUgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vdG9kbyDpgLvovpHlh73mlbBcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRCdG5zKCk7XHJcblxyXG4gICAgfSxcclxuICAgIC8v6I635Y+W5qCh5Yy657uR5a6aXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9PcmdUZWFjaFdvcmsvT3JnYW5pemF0aW9uL0dldFNjaG9vbEJ5QXJlYVwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFwiQXJlYUlkXCI6ICQoXCIjYXJlYWlkXCIpLnZhbCgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2FyZWFuYW1lXCIpLmh0bWwoZGF0YS5yZXN1bHQuRGF0YVswXS5BcmVhTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtYW5hZ2VybmFtZVwiKS5odG1sKGRhdGEucmVzdWx0LkRhdGFbMF0uTWFuYWdlTmFtZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2NpZHMgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChkYXRhLnJlc3VsdC5EYXRhLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaWRzICs9IHRoaXMuU2Nob29sSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaWRzICs9IFwiLFwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjaWRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NpZHMgPSBzY2lkcy5zdWJzdHJpbmcoMCwgc2NpZHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3NjaG9vbElkc1wiKS52YWwoc2NpZHMpOy8v6LWL5LiA5Liq5a2m5qChaWTpmpDol4/lgLxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkLXNjaG9vbHNcIikuaHRtbCh0cGxUYWJsZShkYXRhLnJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSxcclxuICAgIGluaXRCdG5zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy90b2RvIOe7keWumuS6i+S7tlxyXG5cclxuICAgICAgICAvL+WnlOaJmOWIoOmZpOWtpuagoVxyXG4gICAgICAgICQoJyNkLXNjaG9vbHMnKS5kZWxlZ2F0ZShcIi5kZWxldGVzY2hcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IFwic1wiICsgdGhpcy5pZDtcclxuICAgICAgICAgICAgJChcIiNcIiArIGlkKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG59O1xyXG5cclxuLy/nu5HlrprmlbDmja5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBtb2R1bGUuaW5pdCgpO1xyXG5cclxuICAgIE9wdEJ0bigpOy8v5Yid5aeL5YyWYnV0dG9uXHJcbiAgICBPcHRBcmVhTmFtZSgpO1xyXG4gICAgU3ViU2NPaygpO1xyXG4gICAgU3ViTWFuT2soKTtcclxuICAgIFN1YkFyZWFPaygpO1xyXG5cclxufSk7XHJcblxyXG4vL+S/ruaUueWMuuWfn+WQjVxyXG5mdW5jdGlvbiBPcHRBcmVhTmFtZSgpIHtcclxuXHJcbiAgICAkKFwiI2VkaXRpbWdcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAkKFwiI2VkaXRpbWdcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjYXJlYW5hbWVcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjZWRpdG9rXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI3VhcmVhbmFtZVwiKS5zaG93KCk7XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4vL+eCueWHu+WtpuagoeehruWumlxyXG5mdW5jdGlvbiBTdWJTY09rKCkge1xyXG5cclxuICAgICQoXCIjYWRkU2NTdWJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzdHIgPSBcIlwiOy8v5bey6YCJ5oup55qE5qCh5Yy6aWRcclxuICAgICAgICAkKFwiI3NjTGlzdCA6Y2hlY2tib3hcIikuZWFjaCgoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgc3RyICs9IHRoaXMuaWQucmVwbGFjZShcImNoa1wiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIHN0ciArPSBcIixcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKTsvL+WtpuagoWlkc1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb3B0aW9uID0ge307XHJcbiAgICAgICAgb3B0aW9uLkFyZWFJZCA9ICQoXCIjYXJlYWlkXCIpLnZhbCgpOy8v5aSn5Yy6aWRcclxuICAgICAgICBvcHRpb24uU2Nob29sSWRzID0gc3RyO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9PcmdUZWFjaFdvcmsvT3JnYW5pemF0aW9uL0FkZFNjaG9vbEZvckFyZWFcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShvcHRpb24pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHsvL2RhdGEucmVzdWx0OyAgXHJcblxyXG4gICAgICAgICAgICAgICAgLy9hbGVydChcIuWkhOeQhuaIkOWKn1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3AuUG9wVGlwU2hvdygn5oGt5Zac5oKo77yM5re75Yqg5qCh5Yy65ZCN5oiQ5YqfIScpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChwb3AuUG9wVGlwSGlkZSwgMjAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vJChcIi5hZGRTY1wiKS5oaWRlKCk7XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcbi8v54K55Ye757uP55CG56Gu5a6aXHJcbmZ1bmN0aW9uIFN1Yk1hbk9rKCkge1xyXG5cclxuICAgICQoXCIjYWRkTWFuU3ViXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIG1hbmdlcklkID0gJChcIiNtYW5hZ2VyaWRcIikudmFsKCk7Ly/nu4/nkIZpZFxyXG4gICAgICAgIHZhciBvcHRpb24gPSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvcHRpb24uQXJlYUlkID0gJChcIiNhcmVhaWRcIikudmFsKCk7Ly/lpKfljLppZFxyXG4gICAgICAgIG9wdGlvbi5NYW5hZ2VySWQgPSBtYW5nZXJJZDtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvT3JnVGVhY2hXb3JrL09yZ2FuaXphdGlvbi9VcGRhdGVNYW5hZ2VGb3JBcmVhXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkob3B0aW9uKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7Ly9kYXRhLnJlc3VsdDsgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBvcC5Qb3BUaXBTaG93KCfmga3llpzmgqjvvIzkv67mlLnnu4/nkIbmiJDlip8hJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHBvcC5Qb3BUaXBIaWRlLCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5cclxuLy/ngrnlh7vlpKfljLrlkI3noa7lrppcclxuZnVuY3Rpb24gU3ViQXJlYU9rKCkge1xyXG5cclxuICAgICQoXCIjZWRpdG9rXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIGFyZWFOYW1lID0gJChcIiN1YXJlYW5hbWVcIikudmFsKCk7Ly/lpKfljLrlkI1cclxuICAgICAgICB2YXIgb3B0aW9uID0ge1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb3B0aW9uLkFyZWFJZCA9ICQoXCIjYXJlYWlkXCIpLnZhbCgpOy8v5aSn5Yy6aWRcclxuICAgICAgICBvcHRpb24uQXJlYU5hbWUgPSBhcmVhTmFtZTtcclxuXHJcbiAgICAgICAgLy/moKHpqoxcclxuICAgICAgICBpZiAoYXJlYU5hbWUubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICBwb3AuUG9wVGlwU2hvdygn5LiN6IO95Li656m6IScpO1xyXG4gICAgICAgICAgICAvL2FsZXJ0KFwi5LiN6IO95Li656m6XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9PcmdUZWFjaFdvcmsvT3JnYW5pemF0aW9uL1VwZGF0ZU5hbWVGb3JBcmVhXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkob3B0aW9uKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7Ly9kYXRhLnJlc3VsdDsgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbn1cclxuLy/liqDovb3lsZXnpLrlrabmoKFcclxuZnVuY3Rpb24gU2hvd1NjaHMoKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnVGVhY2hXb3JrL09yZ2FuaXphdGlvbi9HZXRTY2hvb2xCeUFyZWFcIixcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBcIkFyZWFJZFwiOiAkKFwiI2FyZWFpZFwiKS52YWwoKVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkLXNjaG9vbHNcIikuaHRtbCh0cGxUYWJsZShkYXRhLnJlc3VsdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbn1cclxuXHJcbi8v5Yqg6L295bGV56S65a2m5qCh57uT5p2fXHJcblxyXG5cclxuLy/liqDovb3nu4/nkIbliJfooahcclxuZnVuY3Rpb24gT3B0TWFucygpIHtcclxuXHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICB1cmw6IFwiL09yZ1RlYWNoV29yay9Pcmdhbml6YXRpb24vR2V0TWFuYWdlQnlPcmdcIixcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hbk5hbWUgPSAkKFwiI21hbmFnZXJuYW1lXCIpLnRleHQoKTsvL+e7j+eQhuWQjVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBqbGh0bWwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEucmVzdWx0LkRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YVtrZXldLk1hbmFnZUlkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2psaHRtbCArPSAnPGxpIGlkPVwiJyArIGRhdGEucmVzdWx0LkRhdGFba2V5XS5NYW5hZ2VJZCArICdcIj4nICsgZGF0YS5yZXN1bHQuRGF0YVtrZXldLk1hbmFnZU5hbWUgKyAnPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YVtrZXldLk1hbmFnZU5hbWUgPT0gbWFuTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgamxodG1sICs9ICc8b3B0aW9uICBzZWxlY3RlZD1cInNlbGVjdGVkXCIgdmFsdWU9XCInICsgZGF0YS5yZXN1bHQuRGF0YVtrZXldLk1hbmFnZUlkICsgJ1wiPicgKyBkYXRhLnJlc3VsdC5EYXRhW2tleV0uTWFuYWdlTmFtZSArICc8L29wdGlvbj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpsaHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBkYXRhLnJlc3VsdC5EYXRhW2tleV0uTWFuYWdlSWQgKyAnXCI+JyArIGRhdGEucmVzdWx0LkRhdGFba2V5XS5NYW5hZ2VOYW1lICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICQoXCIjbWFuYWdlcmlkXCIpLmh0bWwoamxodG1sKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG4vL+WKoOi9vee7j+eQhue7k+adn1xyXG5cclxuLy/liqDovb3lrabmoKHliJfooahcclxuZnVuY3Rpb24gT3B0U2NzKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICB1cmw6IFwiL09yZ1RlYWNoV29yay9Pcmdhbml6YXRpb24vR2V0U2Nob29sc0J5T3JnSWRcIixcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBPcmdJZDogMVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7Ly9kYXRhLnJlc3VsdDtcclxuICAgICAgICAgICAgdmFyIHNjaHRtbCA9IFwiXCI7XHJcbiAgICAgICAgICAgIHZhciBhbENoa3MgPSAkKFwiI3NjaG9vbElkc1wiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhLnJlc3VsdC5EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YVtrZXldLlNjaG9vbE5hbWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsQ2hrcy5pbmRleE9mKGRhdGEucmVzdWx0LkRhdGFba2V5XS5TY2hvb2xJZCkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NodG1sICs9ICcgPHAgY2xhc3M9XCJtYjEwXCIgPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPVwiY2hlY2tlZFwiIGNsYXNzPVwibXIyMFwiIGlkPVwiY2hrJyArIGRhdGEucmVzdWx0LkRhdGFba2V5XS5TY2hvb2xJZCArICdcIj4nICsgQmluZFN0ckN1dChkYXRhLnJlc3VsdC5EYXRhW2tleV0uU2Nob29sTmFtZSkgKyAnPGJyPiA8L3A+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NodG1sICs9ICcgPHAgY2xhc3M9XCJtYjEwXCIgPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cIm1yMjBcIiBpZD1cImNoaycgKyBkYXRhLnJlc3VsdC5EYXRhW2tleV0uU2Nob29sSWQgKyAnXCI+JyArIEJpbmRTdHJDdXQoZGF0YS5yZXN1bHQuRGF0YVtrZXldLlNjaG9vbE5hbWUpICsgJzxicj4gPC9wPic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJChcIiNzY0xpc3RcIikuaHRtbChzY2h0bWwpO1xyXG4gICAgICAgICAgICBPcHRTdHJDdXQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcbi8v5Yqg6L295a2m5qCh5YiX6KGo57uT5p2fXHJcblxyXG5cclxuLy/lpITnkIbmjInpkq5cclxuZnVuY3Rpb24gT3B0QnRuKCkge1xyXG5cclxuICAgICQoXCIjZGVsZXRlU2NcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmVhSWRTdHIgPSAkKFwiI2FyZWFpZFwiKS52YWwoKTsvL+WMuuWfn2lkXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL09yZ1RlYWNoV29yay9Pcmdhbml6YXRpb24vT3JnRGVsZXRlU2Nob29sTGlzdD9BcmVhSWQ9JyArIGFyZWFJZFN0cjtcclxuXHJcbiAgICB9KTtcclxuICAgIC8v5re75Yqg5qCh5Yy6XHJcbiAgICAkKFwiI2FkZFNjXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiLmFkZC1zY2hcIikuc2hvdygpO1xyXG4gICAgICAgIE9wdFNjcygpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgLy/kv67mlLnnu4/nkIZcclxuICAgICQoXCIjdXBkYXRlTWFuXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiLmFkZG1hblwiKS5zaG93KCk7XHJcbiAgICAgICAgT3B0TWFucygpO1xyXG4gICAgfSk7XHJcbiAgICAvL+iHquWumuS5ieS4i+aLieWIl+ihqOahhuW8gOWni1xyXG4gICAgLy8kKFwiLnNlbGUtdGV4dFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gICAgdmFyIGxpc3Rib3ggPSAkKFwiLmxpc3Rib3hcIik7XHJcbiAgICAvLyAgICBsaXN0Ym94LnNob3coKTtcclxuICAgIC8vICAgIHZhciBsaSA9IGxpc3Rib3guZmluZChcImxpXCIpO1xyXG4gICAgLy8gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgIGxpLmVxKGkpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAgICAgICAgdmFyIGEgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgIC8vICAgICAgICAgICAgdmFyIGIgPSB0aGlzLmlkO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgJChcIi5zZWxlLXRleHRcIikudGV4dChhKTtcclxuICAgIC8vICAgICAgICAgICAgJChcIiNtYW5nZWhpXCIpLnZhbChiKTtcclxuICAgIC8vICAgICAgICAgICAgbGlzdGJveC5oaWRlKCk7XHJcbiAgICAvLyAgICAgICAgfSk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvL30pO1xyXG4gICAgLy/oh6rlrprkuYnkuIvmi4nliJfooajmoYbnu5PmnZ9cclxuICAgIC8v5aSE55CG6Ieq5a6a5LmJ5LiL5ouJ5qGG55qE5LqL5Lu2XHJcbiAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09IFwiaW1nXCIpIHtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/lr7nkv67mlLnnmoTov5vooYzmm7TmlLlcclxuICAgICAgICAgICAgJChcIiNlZGl0aW1nXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIiNhcmVhbmFtZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjZWRpdG9rXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIiN1YXJlYW5hbWVcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy/lpITnkIbmiKrmlq3lrZfnrKbkuLJcclxuZnVuY3Rpb24gQmluZFN0ckN1dChvYmopIHtcclxuXHJcbiAgICBpZiAob2JqLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICBvYmogPSBvYmouc3Vic3RyaW5nKDAsIDQpICsgXCIuLi5cIjtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxuXHJcblxyXG59O1xyXG4vL+aIquaWreWtl+espuS4slxyXG5mdW5jdGlvbiBPcHRTdHJDdXQoKSB7XHJcbiAgICAvL+W8ueWHuuahhuaIquWtl+WkhOeQhuW8gOWni1xyXG5cclxuICAgIHZhciBsaSA9ICQoXCIuc2NocmlnaHQgbGlcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGxpLmVxKGkpLmZpbmQoXCIuc2NobmFtZVwiKS50ZXh0KCkgPiA0KSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbGkuZXEoaSkuZmluZChcIi5zY2huYW1lXCIpLnRleHQoKS5zdWJzdHJpbmcoMCwgNCk7XHJcbiAgICAgICAgICAgIGxpLmVxKGkpLmZpbmQoXCIuc2NobmFtZVwiKS50ZXh0KHRleHQgKyBcIi4uLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmdUZWFjaFdvcmsvYXJlYWRldGFpbC5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDE1XG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnVGVhY2hXb3JrL2FyZWFkZXRhaWwnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLERhdGE9JGRhdGEuRGF0YSwkdmFsdWU9JGRhdGEuJHZhbHVlLCRpbmRleD0kZGF0YS4kaW5kZXgsJGVzY2FwZT0kdXRpbHMuJGVzY2FwZSwkb3V0PScnOyRvdXQrPScgJztcbiRlYWNoKERhdGEsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDxzcGFuIGNsYXNzPVwic2NobmFtZSBtYjEwXCI+PGkgY2xhc3M9XCJzY2hsb2dvXCI+PC9pPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TY2hvb2xOYW1lKTtcbiRvdXQrPSc8L3NwYW4+ICc7XG59KTtcbiRvdXQrPScgJztcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy90cGwvT3JnVGVhY2hXb3JrL2FyZWFkZXRhaWwudHBsXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTVcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9