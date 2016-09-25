webpackJsonp([26,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(59);


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

/***/ 8:
/***/ function(module, exports) {

	module.exports = {
	    Paginator: function (pageSize, currentPage, totalCount, callback) {
	        //todo 绑定事件
	       
	        var totalPages;
	        if (totalCount % pageSize == 0) {
	            totalPages = totalCount / pageSize;
	        }
	        else {
	            totalPages = parseInt(totalCount / pageSize) + 1;
	        }
	        var pagePre = '<a href="#"  data-num=' + (parseInt(currentPage) - 1) + ' class="pre-page inline mr20">上一页</a>';
	        var pageNext = '<a href="#"  data-num=' + (parseInt(currentPage) + 1) + ' class="next-page inline">下一页</a>';
	        var indexPage = '<a href="#"  data-num="1" class="pre-page inline mr20">首页</a></li>';
	
	        var lastPage = ' <a href="#"  data-num=' + totalPages + ' class="pre-page inline mr20"> 末页</a>';
	        if (totalPages < pageSize)
	        {
	            pagePre = "";
	            pageNext = "";
	            indexPage = "";
	            lastPage = "";
	        }
	       
	        if (currentPage <= 1) {
	            currentPage = 1;
	            pagePre = "";
	            
	        }
	        if (currentPage >= totalPages) {
	            currentPage = totalPages;
	            pageNext = "";
	            lastPage = "";
	        }
	
	        if (totalCount > 0) {
	           
	            var pagenum = '<ul class="page-box inline mr20">';
	
	
	            if (totalPages > 1) {
	                if (currentPage == 1) //第一页
	                {
	
	                    //output.Append(" <a disabled='disabled' class='colH'>上一页</a> ");//上一页
	                }
	                if (currentPage > 1) {
	                    //处理首页连接
	                    //处理上一页的连接
	                    //pagePre = ' <li><a href="#"  data-num=' + (parseInt(currentPage) - 1) + '>上一页</a> </li>';
	                    // output.AppendFormat(" <a data-pageIndex='{0}' class='pageLink'>上一页</a> ", currentPage - 1);//上一页
	                }
	                if (totalPages > 7) {
	                    var currint = 3;
	                    if (currentPage < 4)//4
	                    {
	
	                        for (var i = 0; i <= 6; i++) {
	                            if (currentPage == i + 1) {
	                                pagenum = pagenum + ' <li><a href="#" class="active" data-num=' + currentPage + '>' + currentPage + '</a> </li>';
	
	                            }
	                            else {
	                                if (i == 6) {
	
	                                    pagenum = pagenum + ' <li><a href="#"  data-num=' + 7 + '>...</a> </li>';
	                                    pagenum = pagenum + ' <li><a href="#"  data-num=' + totalPages + '>' + totalPages + '</a> </li>';
	                                }
	                                else {
	
	                                    pagenum = pagenum + ' <li><a href="#"  data-num=' + (i + 1) + '>' + (i + 1) + '</a> </li>';
	                                }
	                            }
	                        }
	                    }//4
	                    else if (currentPage >= 4 && currentPage < totalPages - 3) {
	
	                        for (var i = 0; i <= 6; i++) {
	                            if (i == 0) {
	                                //pagenum=pagenum+' <li data-num='+(currentPage-3)+'><a href="#" onclick="Paginator('+pageSize+','+(currentPage-3)+',' + totalCount + ')">...</a> </li>';
	                                pagenum = pagenum + ' <li><a href="#"  data-num="1">1</a> </li>';//201609130930
	                                if (parseInt(currentPage) - 3 > 1)
	                                {
	                                    pagenum = pagenum + ' <li><a href="#"  data-num=' + (parseInt(currentPage) - 3) + '>...</a> </li>';//201609130930
	                                }
	                                
	                            }
	                            else if (i == 3)//中间当前页
	                            {
	
	
	                                pagenum = pagenum + ' <li><a href="#" class="active" data-num=' + (currentPage) + '>' + currentPage + '</a> </li>';
	                            }
	                            else if (i == 6) {
	
	                                pagenum = pagenum + ' <li><a href="#" data-num=' + (parseInt(currentPage) + 3) + '>...</a> </li>';
	                                pagenum = pagenum + ' <li><a href="#"  data-num=' + totalPages + '>' + totalPages + '</a> </li>';
	                            }
	                            else {
	
	                                pagenum = pagenum + ' <li><a href="#"  data-num=' + (parseInt(currentPage) + i - parseInt(currint)) + '>' + (parseInt(currentPage) + i - parseInt(currint)) + '</a> </li>';
	                            }
	                        }
	
	                    }
	                    else {
	                        for (var i = 0; i <= 6; i++) {
	                            if (i == 0) {
	
	                                pagenum = pagenum + ' <li><a href="#"  data-num="1">1</a> </li>';//201609130930
	                                pagenum = pagenum + ' <li><a href="#" data-num=' + (parseInt(totalPages) - 6) + '>...</a> </li>';//201609130930
	                            }
	                            else {
	                                if (totalPages - 6 + i == currentPage) {
	
	
	                                    pagenum = pagenum + ' <li><a href="#" class="active"  data-num=' + currentPage + '>' + currentPage + '</a> </li>';
	                                }
	                                else {
	
	                                    pagenum = pagenum + ' <li><a href="#"  data-num=' + (totalPages - 6 + i) + '>' + (totalPages - 6 + i) + '</a> </li>';
	                                }
	                            }
	                        }
	                    }
	
	                }
	                else {
	                    for (var i = 0; i < totalPages; i++) {
	                        if (currentPage == i + 1) {
	
	                            pagenum = pagenum + ' <li><a href="#" class="active" data-num=' + currentPage + '>' + currentPage + '</a> </li>';
	
	                        }
	                        else {
	
	                            pagenum = pagenum + ' <li><a href="#"  data-num=' + (i + 1) + '>' + (i + 1) + '</a> </li>';
	
	                        }
	                    }
	                }
	                if (currentPage == totalPages) //最后一页
	                {//处理下一页和尾页的链接
	                  
	                   
	                    //output.Append(" <a disabled='disabled' class='colH'>下一页</a> ");
	                    pageNext = "";
	                    lastPage = "";
	                }
	                if (currentPage < totalPages) {//处理下一页和尾页的链接 
	                   
	                    //output.AppendFormat(" <a data-pageindex='{0}' class='pageLink'>下一页</a> ", currentPage + 1);
	                   // pagePre = '<a href="#"  data-num=' + (parseInt(currentPage) + 1) + ' class="next-page inline">下一页</a>';
	                }
	
	
	            }
	
	            pagenum = pagenum + '</ul>';
	            document.getElementById("pagination").innerHTML = indexPage + pagePre + pagenum + pageNext + lastPage;
	
	
	        }
	        else {
	            document.getElementById("pagination").innerHTML = "";
	        }
	        $("#pagination a").unbind("click");
	        $("#pagination a").bind("click", function () {
	            
	            if (callback) {
	                callback($(this).attr("data-num"));
	            }
	        });
	       
	    }
	}
	//function Paginator(pageSize, currentPage, totalCount, callback) {
	
	
	//}
	


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

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	
	var tplTable = __webpack_require__(60);
	var pop = __webpack_require__(24);
	var Paginator = __webpack_require__(8);
	
	var module = {
	    init: function () {
	        //todo 逻辑函数
	        //this.loadOrgMsg();
	        this.render();
	        this.initBtns();
	
	    },
	
	    render: function () {
	        //机构名赋值
	        $.ajax({
	            type: "post",
	            url: "/OrgTeachWork/Organization/GetOrgMsg",
	            dataType: "json",
	            data: {
	
	            },
	            success: function (data) {
	
	                if (data.result.Data) {
	                    $("#orgName").html(data.result.Data.OrgName);
	                    //$("#AreaCount").html(data.result.Data.AreaCount);
	                    
	                    loadCounselors();
	                   
	                }
	                else {
	
	
	                }
	            }
	        });
	
	
	
	    },
	    initBtns: function () {
	
	        //下拉框的点击
	        $('.table').delegate("#constate", "change", function () {
	            loadExamStu(1);//加载数据
	
	
	        });
	        $('.table').delegate("#cteacher", "change", function () {
	            loadExamStu(1);//加载数据
	
	        });
	    }
	
	
	};
	//加载测评学生列表
	function loadExamStu(page) {
	
	    if (page == undefined) {
	        page = 1;
	    }
	
	    //加载列表
	    $.ajax({
	        type: "post",
	        url: "/OrgExam/Exam/GetReInit",
	        dataType: "json",
	        data: {
	            SerchName: escape($("#txtserch").val()),
	            IsContract: $("#constate").val(),//时候签约
	            TeacherId: $("#cteacher").val(),//咨询师
	            PageIndex: page,
	            PageSize: 10
	        },
	        success: function (data) {
	            
	            if (data.Data) {
	                $("#tb").html(tplTable(data.Data));
	                $("#Totalcount").html(data.PageSum);
	                Paginator.Paginator(10, page, data.PageSum, loadExamStu);
	                //加载咨询师列表
	
	            }
	            else {
	                $("#tb").html("");//清空数据
	                $("#pagination").html("");//分页控件不显示
	
	
	            }
	        }
	    });
	
	}
	
	
	//加载咨询师列表
	function loadCounselors() {
	
	    //加载列表
	    $.ajax({
	        type: "post",
	        url: "/OrgZiXun/ZiXunGuanLi/GetZiXunShiBySchoolId",
	        dataType: "json",
	        data: {
	
	        },
	        success: function (data) {
	            
	            if (data.result.Data) {
	                var jlhtml = '<option value="-1">咨询师</option>';
	                //加载咨询师列表
	                for (var key in data.result.Data) {
	                    if (data.result.Data[key].UserId != undefined) {
	                        jlhtml += '<option value="' + data.result.Data[key].UserId + '">' + data.result.Data[key].UserName + '</option>';
	                    }
	                }
	                $("#cteacher").html(jlhtml);
	                
	                loadExamStu();//加载测评数据
	
	            }
	            else {
	
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
	
	
	});
	
	
	


/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgEvaluation/evaluationarchives',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each($data,function($value,$index){
	$out+=' <tr class="font12"> <td>';
	$out+=$escape($value.TempName);
	$out+='</td> <td>';
	$out+=$escape($value.Phone);
	$out+='</td> <td>';
	$out+=$escape($value.ExamTypeN);
	$out+='</td> <td>';
	$out+=$escape($value.TotalHourN);
	$out+='</td> <td class="red">';
	$out+=$escape($value.IsFile==false?"未签约":"签约");
	$out+='</td> <td>';
	$out+=$escape($value.EditTimeStr);
	$out+='</td> <td>';
	$out+=$escape($value.CounselorName);
	$out+='</td> <td><span class="see-btn look">查看</span></td> </tr> ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2RlcC9QYWdpbmF0b3IuanM/YmU4MSoqKioqIiwid2VicGFjazovLy8uL09yZy9kZXAvcG9wdXAvcG9wdXB0aXAuanM/ZjAzMioqIiwid2VicGFjazovLy8uL09yZy9qcy9PcmdFdmFsdWF0aW9uL2V2YWx1YXRpb25hcmNoaXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZ0V2YWx1YXRpb24vZXZhbHVhdGlvbmFyY2hpdmVzLnRwbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQSx5Q0FBd0MsT0FBTywyQkFBMkI7QUFDMUU7O0FBRUE7QUFDQTtBQUNBLHNDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSwwQkFBeUIsaUVBQWlFO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBLGFBQVksZUFBZTtBQUMzQixrREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCO0FBQ3JCLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsR0FBRTtBQUNGLGtDQUFpQztBQUNqQyxJQUFHO0FBQ0gsZUFBYztBQUNkO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGLEVBQUMsRzs7Ozs7OztBQzlFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBOEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0EsTUFBSztBQUNMOzs7QUFHQSxFQUFDOzs7Ozs7Ozs7OztBQzlLRDtBQUNBO0FBQ0E7QUFDQSxjQUFhLG1JQUFtSTtBQUNoSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBQyxFIiwiZmlsZSI6ImV2YWx1YXRpb25hcmNoaXZlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qVE1PREpTOnt9Ki9cclxuIWZ1bmN0aW9uICgpIHtcclxuXHRmdW5jdGlvbiBhKGEsIGIpIHtcclxuXHRcdHJldHVybiAoL3N0cmluZ3xmdW5jdGlvbi8udGVzdCh0eXBlb2YgYikgPyBoIDogZykoYSwgYilcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGIoYSwgYykge1xyXG5cdFx0cmV0dXJuIFwic3RyaW5nXCIgIT0gdHlwZW9mIGEgJiYgKGMgPSB0eXBlb2YgYSwgXCJudW1iZXJcIiA9PT0gYyA/IGEgKz0gXCJcIiA6IGEgPSBcImZ1bmN0aW9uXCIgPT09IGMgPyBiKGEuY2FsbChhKSkgOiBcIlwiKSwgYVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYyhhKSB7XHJcblx0XHRyZXR1cm4gbFthXVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZChhKSB7XHJcblx0XHRyZXR1cm4gYihhKS5yZXBsYWNlKC8mKD8hW1xcdyNdKzspfFs8PlwiJ10vZywgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGUoYSwgYikge1xyXG5cdFx0aWYgKG0oYSkpZm9yICh2YXIgYyA9IDAsIGQgPSBhLmxlbmd0aDsgZCA+IGM7IGMrKyliLmNhbGwoYSwgYVtjXSwgYywgYSk7IGVsc2UgZm9yIChjIGluIGEpYi5jYWxsKGEsIGFbY10sIGMpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmKGEsIGIpIHtcclxuXHRcdHZhciBjID0gLyhcXC8pW15cXC9dK1xcMVxcLlxcLlxcMS8sIGQgPSAoXCIuL1wiICsgYSkucmVwbGFjZSgvW15cXC9dKyQvLCBcIlwiKSwgZSA9IGQgKyBiO1xyXG5cdFx0Zm9yIChlID0gZS5yZXBsYWNlKC9cXC9cXC5cXC8vZywgXCIvXCIpOyBlLm1hdGNoKGMpOyllID0gZS5yZXBsYWNlKGMsIFwiL1wiKTtcclxuXHRcdHJldHVybiBlXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnKGIsIGMpIHtcclxuXHRcdHZhciBkID0gYS5nZXQoYikgfHwgaSh7ZmlsZW5hbWU6IGIsIG5hbWU6IFwiUmVuZGVyIEVycm9yXCIsIG1lc3NhZ2U6IFwiVGVtcGxhdGUgbm90IGZvdW5kXCJ9KTtcclxuXHRcdHJldHVybiBjID8gZChjKSA6IGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGgoYSwgYikge1xyXG5cdFx0aWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGIpIHtcclxuXHRcdFx0dmFyIGMgPSBiO1xyXG5cdFx0XHRiID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgayhjKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR2YXIgZCA9IGpbYV0gPSBmdW5jdGlvbiAoYykge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgYihjLCBhKSArIFwiXCJcclxuXHRcdFx0fSBjYXRjaCAoZCkge1xyXG5cdFx0XHRcdHJldHVybiBpKGQpKClcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBkLnByb3RvdHlwZSA9IGIucHJvdG90eXBlID0gbiwgZC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIGIgKyBcIlwiXHJcblx0XHR9LCBkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpKGEpIHtcclxuXHRcdHZhciBiID0gXCJ7VGVtcGxhdGUgRXJyb3J9XCIsIGMgPSBhLnN0YWNrIHx8IFwiXCI7XHJcblx0XHRpZiAoYyljID0gYy5zcGxpdChcIlxcblwiKS5zbGljZSgwLCAyKS5qb2luKFwiXFxuXCIpOyBlbHNlIGZvciAodmFyIGQgaW4gYSljICs9IFwiPFwiICsgZCArIFwiPlxcblwiICsgYVtkXSArIFwiXFxuXFxuXCI7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gXCJvYmplY3RcIiA9PSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKGIgKyBcIlxcblxcblwiICsgYyksIGJcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBqID0gYS5jYWNoZSA9IHt9LCBrID0gdGhpcy5TdHJpbmcsIGwgPSB7XHJcblx0XHRcIjxcIjogXCImIzYwO1wiLFxyXG5cdFx0XCI+XCI6IFwiJiM2MjtcIixcclxuXHRcdCdcIic6IFwiJiMzNDtcIixcclxuXHRcdFwiJ1wiOiBcIiYjMzk7XCIsXHJcblx0XHRcIiZcIjogXCImIzM4O1wiXHJcblx0fSwgbSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGEpIHtcclxuXHRcdFx0cmV0dXJuIFwiW29iamVjdCBBcnJheV1cIiA9PT0ge30udG9TdHJpbmcuY2FsbChhKVxyXG5cdFx0fSwgbiA9IGEudXRpbHMgPSB7XHJcblx0XHQkaGVscGVyczoge30sICRpbmNsdWRlOiBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG5cdFx0XHRyZXR1cm4gYSA9IGYoYywgYSksIGcoYSwgYilcclxuXHRcdH0sICRzdHJpbmc6IGIsICRlc2NhcGU6IGQsICRlYWNoOiBlXHJcblx0fSwgbyA9IGEuaGVscGVycyA9IG4uJGhlbHBlcnM7XHJcblx0YS5nZXQgPSBmdW5jdGlvbiAoYSkge1xyXG5cdFx0cmV0dXJuIGpbYS5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIildXHJcblx0fSwgYS5oZWxwZXIgPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0b1thXSA9IGJcclxuXHR9LCBtb2R1bGUuZXhwb3J0cyA9IGFcclxufSgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA4IDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIxIDIzIDI1IDI2IDI3IDMxIDMyIDMzIDM3IDM4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBQYWdpbmF0b3I6IGZ1bmN0aW9uIChwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHRvdGFsQ291bnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgLy90b2RvIOe7keWumuS6i+S7tlxyXG4gICAgICAgXHJcbiAgICAgICAgdmFyIHRvdGFsUGFnZXM7XHJcbiAgICAgICAgaWYgKHRvdGFsQ291bnQgJSBwYWdlU2l6ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRvdGFsUGFnZXMgPSB0b3RhbENvdW50IC8gcGFnZVNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b3RhbFBhZ2VzID0gcGFyc2VJbnQodG90YWxDb3VudCAvIHBhZ2VTaXplKSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwYWdlUHJlID0gJzxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMSkgKyAnIGNsYXNzPVwicHJlLXBhZ2UgaW5saW5lIG1yMjBcIj7kuIrkuIDpobU8L2E+JztcclxuICAgICAgICB2YXIgcGFnZU5leHQgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyAxKSArICcgY2xhc3M9XCJuZXh0LXBhZ2UgaW5saW5lXCI+5LiL5LiA6aG1PC9hPic7XHJcbiAgICAgICAgdmFyIGluZGV4UGFnZSA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT1cIjFcIiBjbGFzcz1cInByZS1wYWdlIGlubGluZSBtcjIwXCI+6aaW6aG1PC9hPjwvbGk+JztcclxuXHJcbiAgICAgICAgdmFyIGxhc3RQYWdlID0gJyA8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgdG90YWxQYWdlcyArICcgY2xhc3M9XCJwcmUtcGFnZSBpbmxpbmUgbXIyMFwiPiDmnKvpobU8L2E+JztcclxuICAgICAgICBpZiAodG90YWxQYWdlcyA8IHBhZ2VTaXplKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFnZVByZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHBhZ2VOZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgaW5kZXhQYWdlID0gXCJcIjtcclxuICAgICAgICAgICAgbGFzdFBhZ2UgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA8PSAxKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgICAgICAgcGFnZVByZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPj0gdG90YWxQYWdlcykge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IHRvdGFsUGFnZXM7XHJcbiAgICAgICAgICAgIHBhZ2VOZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgbGFzdFBhZ2UgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRvdGFsQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBwYWdlbnVtID0gJzx1bCBjbGFzcz1cInBhZ2UtYm94IGlubGluZSBtcjIwXCI+JztcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAodG90YWxQYWdlcyA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSAxKSAvL+esrOS4gOmhtVxyXG4gICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL291dHB1dC5BcHBlbmQoXCIgPGEgZGlzYWJsZWQ9J2Rpc2FibGVkJyBjbGFzcz0nY29sSCc+5LiK5LiA6aG1PC9hPiBcIik7Ly/kuIrkuIDpobVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WkhOeQhummlumhtei/nuaOpVxyXG4gICAgICAgICAgICAgICAgICAgIC8v5aSE55CG5LiK5LiA6aG155qE6L+e5o6lXHJcbiAgICAgICAgICAgICAgICAgICAgLy9wYWdlUHJlID0gJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgLSAxKSArICc+5LiK5LiA6aG1PC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3V0cHV0LkFwcGVuZEZvcm1hdChcIiA8YSBkYXRhLXBhZ2VJbmRleD0nezB9JyBjbGFzcz0ncGFnZUxpbmsnPuS4iuS4gOmhtTwvYT4gXCIsIGN1cnJlbnRQYWdlIC0gMSk7Ly/kuIrkuIDpobVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VzID4gNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyaW50ID0gMztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCA0KS8vNFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09IGkgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgZGF0YS1udW09JyArIGN1cnJlbnRQYWdlICsgJz4nICsgY3VycmVudFBhZ2UgKyAnPC9hPiA8L2xpPic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gNikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgNyArICc+Li4uPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIHRvdGFsUGFnZXMgKyAnPicgKyB0b3RhbFBhZ2VzICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChpICsgMSkgKyAnPicgKyAoaSArIDEpICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0vLzRcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50UGFnZSA+PSA0ICYmIGN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcyAtIDMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGFnZW51bT1wYWdlbnVtKycgPGxpIGRhdGEtbnVtPScrKGN1cnJlbnRQYWdlLTMpKyc+PGEgaHJlZj1cIiNcIiBvbmNsaWNrPVwiUGFnaW5hdG9yKCcrcGFnZVNpemUrJywnKyhjdXJyZW50UGFnZS0zKSsnLCcgKyB0b3RhbENvdW50ICsgJylcIj4uLi48L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPVwiMVwiPjE8L2E+IDwvbGk+JzsvLzIwMTYwOTEzMDkzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChjdXJyZW50UGFnZSkgLSAzID4gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgLSAzKSArICc+Li4uPC9hPiA8L2xpPic7Ly8yMDE2MDkxMzA5MzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpID09IDMpLy/kuK3pl7TlvZPliY3pobVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtbnVtPScgKyAoY3VycmVudFBhZ2UpICsgJz4nICsgY3VycmVudFBhZ2UgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpID09IDYpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgMykgKyAnPi4uLjwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIHRvdGFsUGFnZXMgKyAnPicgKyB0b3RhbFBhZ2VzICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyBpIC0gcGFyc2VJbnQoY3VycmludCkpICsgJz4nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIGkgLSBwYXJzZUludChjdXJyaW50KSkgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT1cIjFcIj4xPC9hPiA8L2xpPic7Ly8yMDE2MDkxMzA5MzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS1udW09JyArIChwYXJzZUludCh0b3RhbFBhZ2VzKSAtIDYpICsgJz4uLi48L2E+IDwvbGk+JzsvLzIwMTYwOTEzMDkzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgLSA2ICsgaSA9PSBjdXJyZW50UGFnZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiICBkYXRhLW51bT0nICsgY3VycmVudFBhZ2UgKyAnPicgKyBjdXJyZW50UGFnZSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAodG90YWxQYWdlcyAtIDYgKyBpKSArICc+JyArICh0b3RhbFBhZ2VzIC0gNiArIGkpICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsUGFnZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gaSArIDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiBkYXRhLW51bT0nICsgY3VycmVudFBhZ2UgKyAnPicgKyBjdXJyZW50UGFnZSArICc8L2E+IDwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKGkgKyAxKSArICc+JyArIChpICsgMSkgKyAnPC9hPiA8L2xpPic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09IHRvdGFsUGFnZXMpIC8v5pyA5ZCO5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB7Ly/lpITnkIbkuIvkuIDpobXlkozlsL7pobXnmoTpk77mjqVcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL291dHB1dC5BcHBlbmQoXCIgPGEgZGlzYWJsZWQ9J2Rpc2FibGVkJyBjbGFzcz0nY29sSCc+5LiL5LiA6aG1PC9hPiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZU5leHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RQYWdlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMpIHsvL+WkhOeQhuS4i+S4gOmhteWSjOWwvumhteeahOmTvuaOpSBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3V0cHV0LkFwcGVuZEZvcm1hdChcIiA8YSBkYXRhLXBhZ2VpbmRleD0nezB9JyBjbGFzcz0ncGFnZUxpbmsnPuS4i+S4gOmhtTwvYT4gXCIsIGN1cnJlbnRQYWdlICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBwYWdlUHJlID0gJzxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgMSkgKyAnIGNsYXNzPVwibmV4dC1wYWdlIGlubGluZVwiPuS4i+S4gOmhtTwvYT4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJzwvdWw+JztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdpbmF0aW9uXCIpLmlubmVySFRNTCA9IGluZGV4UGFnZSArIHBhZ2VQcmUgKyBwYWdlbnVtICsgcGFnZU5leHQgKyBsYXN0UGFnZTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdpbmF0aW9uXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjcGFnaW5hdGlvbiBhXCIpLnVuYmluZChcImNsaWNrXCIpO1xyXG4gICAgICAgICQoXCIjcGFnaW5hdGlvbiBhXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCQodGhpcykuYXR0cihcImRhdGEtbnVtXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuLy9mdW5jdGlvbiBQYWdpbmF0b3IocGFnZVNpemUsIGN1cnJlbnRQYWdlLCB0b3RhbENvdW50LCBjYWxsYmFjaykge1xyXG5cclxuXHJcbi8vfVxyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9kZXAvUGFnaW5hdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDEzIDE2IDE4IDE5IDIxIDI2IDI3IDMxIDMzIDM4XG4gKiovIiwiLy/pga7nvalcclxuZnVuY3Rpb24gTWFza1Nob3coKSB7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWFza0hpZGUoKSB7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxufVxyXG4vL+S8oOmAkuaYvuekuueahOa2iOaBr1xyXG5mdW5jdGlvbiBQb3BUaXBTaG93KG9iaikge1xyXG4gICAgdmFyIHRpcGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcC11cCBmb250MTQgaGlkZGVuXCIgaWQ9XCJva3RpcFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj48cCBjbGFzcz1cImxpbmUxMDBcIiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiPicgKyBvYmogKyAnPC9wPjwvZGl2PjwvZGl2Pic7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5hcHBlbmQodGlwaHRtbCk7XHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5hcHBlbmQodGlwaHRtbCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxuICAgICQoXCIucG9wLXVwXCIpLnNob3coKTtcclxufVxyXG4vL+W8ueWHuuehruiupOahhlxyXG52YXIgT3BlbkNvbmZyaW1Qb3AgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj4nICsgb2JqICsgJzwvZGl2PjxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJoYW5kbGVcIj4gPHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ29uZnJpbVwiPuehruWumjwvc3Bhbj4gJm5ic3A7Jm5ic3A7Jm5ic3A7PHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ2FuY2VsXCI+5Y+W5raIPC9zcGFuPiA8L2Rpdj48L2Rpdj4nO1xyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5hcHBlbmQoaHRtbCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxuICAgICQoXCIucG9wLXVwXCIpLnNob3coKTtcclxufTtcclxuLy/lvLnlh7rnoa7orqTmoYYs5rKh5pyJ5Y+W5raI5oyJ6ZKuXHJcbnZhciBPcGVuQ29uZnJpbVBvcE5vQ2FuY2VsID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcC11cCBmb250MTRcIj48c3BhbiBjbGFzcz1cInBvcC1jbG9zZSBjdXJzb3JcIj48L3NwYW4+PGRpdiBjbGFzcz1cInBvcC1jb250ZW50XCI+JyArIG9iaiArICc8L2Rpdj48YnIgLz48YnIgLz48ZGl2IGNsYXNzPVwiaGFuZGxlXCI+IDxzcGFuIGNsYXNzPVwib2tcIiBpZD1cIkNvbmZyaW1cIj7noa7lrpo8L3NwYW4+IDwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59O1xyXG4vLy/lvLnlh7rlpJrplb/ml7bpl7TlkI7mtojlpLFcclxudmFyIE9wZW5UaW1lSGlkZSA9IGZ1bmN0aW9uIChvYmosIHRpbWUpIHtcclxuICAgIC8vdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcHVwXCI+IDxoNSBjbGFzcz1cImNlbnRlciBmb250MTYgcG9wdXBoZWFkXCI+5raI5oGv5o+Q56S6PGkgY2xhc3M9XCJwb3BjbG9zZSBjdXJzb3JcIj48L2k+PC9oNT48ZGl2IGNsYXNzPVwicG9wdXBib3hcIj48ZGl2IGNsYXNzPVwiaGFuZGxlIGZvbnQxNCBhdXRvXCI+JyArIG9iaiArICc8L2Rpdj48L2Rpdj48L2Rpdj4nO1xyXG4gICAgdmFyIGh0bWwgPSAnICA8ZGl2IGNsYXNzPVwicG9wdXAgXCI+PGg1IGNsYXNzPVwiY2VudGVyIGZvbnQxNiBwb3B1cGhlYWRcIj4g5raI5oGv5o+Q56S6PGkgY2xhc3M9XCJwb3BjbG9zZSBjdXJzb3JcIj48L2k+PC9oNT48ZGl2IGNsYXNzPVwicG9wdXBib3hcIj48ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+PGRpdiBjbGFzcz1cInN1Y2Nlc3MgYXV0b1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXRvcDoyMHB4O1wiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJoYW5kbGUgc3VjY2Vzc0xldHRlclwiPiA8c3BhbiBjbGFzcz1cIm10MjBcIj4nK29iaisnPC9zcGFuPjwvZGl2PjwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxuICAgICQoXCIucG9wdXBcIikuc2hvdygpO1xyXG4gIFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3B1cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9LCB0aW1lKTtcclxuXHJcbn07XHJcbmZ1bmN0aW9uIFBvcFRpcEhpZGUoKSB7XHJcbiAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59XHJcblxyXG5leHBvcnRzLk1hc2tTaG93ID0gTWFza1Nob3c7XHJcbmV4cG9ydHMuTWFza0hpZGUgPSBNYXNrSGlkZTtcclxuZXhwb3J0cy5Qb3BUaXBTaG93ID0gUG9wVGlwU2hvdztcclxuZXhwb3J0cy5Qb3BUaXBIaWRlID0gUG9wVGlwSGlkZTtcclxuZXhwb3J0cy5PcGVuQ29uZnJpbVBvcCA9IE9wZW5Db25mcmltUG9wO1xyXG5leHBvcnRzLk9wZW5UaW1lSGlkZSA9IE9wZW5UaW1lSGlkZTtcclxuLy/lpITnkIblvLnlh7rmoYbnmoTpmpDol49cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcC1jbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgLy9kb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuZGVsZWdhdGUoXCIucG9wY2xvc2VcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3AtY2xvc2VcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5wb3AtdXBcIikuaGlkZSgpO1xyXG4gICAgICAgIC8vZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3BjbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9kZXAvcG9wdXAvcG9wdXB0aXAuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSA4IDE0IDIxIDI2IDMxIDMyIDMzIDM0IDM3IDM4XG4gKiovIiwiXHJcbnZhciB0cGxUYWJsZSA9IHJlcXVpcmUoXCJPcmdFdmFsdWF0aW9uL2V2YWx1YXRpb25hcmNoaXZlcy50cGxcIik7XHJcbnZhciBwb3AgPSByZXF1aXJlKFwicG9wdXAvcG9wdXB0aXAuanNcIik7XHJcbnZhciBQYWdpbmF0b3IgPSByZXF1aXJlKCdQYWdpbmF0b3IuanMnKTtcclxuXHJcbnZhciBtb2R1bGUgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy90b2RvIOmAu+i+keWHveaVsFxyXG4gICAgICAgIC8vdGhpcy5sb2FkT3JnTXNnKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRCdG5zKCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL+acuuaehOWQjei1i+WAvFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL09yZ1RlYWNoV29yay9Pcmdhbml6YXRpb24vR2V0T3JnTXNnXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjb3JnTmFtZVwiKS5odG1sKGRhdGEucmVzdWx0LkRhdGEuT3JnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8kKFwiI0FyZWFDb3VudFwiKS5odG1sKGRhdGEucmVzdWx0LkRhdGEuQXJlYUNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsb2FkQ291bnNlbG9ycygpO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdEJ0bnM6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy/kuIvmi4nmoYbnmoTngrnlh7tcclxuICAgICAgICAkKCcudGFibGUnKS5kZWxlZ2F0ZShcIiNjb25zdGF0ZVwiLCBcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxvYWRFeGFtU3R1KDEpOy8v5Yqg6L295pWw5o2uXHJcblxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcudGFibGUnKS5kZWxlZ2F0ZShcIiNjdGVhY2hlclwiLCBcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxvYWRFeGFtU3R1KDEpOy8v5Yqg6L295pWw5o2uXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn07XHJcbi8v5Yqg6L295rWL6K+E5a2m55Sf5YiX6KGoXHJcbmZ1bmN0aW9uIGxvYWRFeGFtU3R1KHBhZ2UpIHtcclxuXHJcbiAgICBpZiAocGFnZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwYWdlID0gMTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WKoOi9veWIl+ihqFxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICB1cmw6IFwiL09yZ0V4YW0vRXhhbS9HZXRSZUluaXRcIixcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBTZXJjaE5hbWU6IGVzY2FwZSgkKFwiI3R4dHNlcmNoXCIpLnZhbCgpKSxcclxuICAgICAgICAgICAgSXNDb250cmFjdDogJChcIiNjb25zdGF0ZVwiKS52YWwoKSwvL+aXtuWAmeetvue6plxyXG4gICAgICAgICAgICBUZWFjaGVySWQ6ICQoXCIjY3RlYWNoZXJcIikudmFsKCksLy/lkqjor6LluIhcclxuICAgICAgICAgICAgUGFnZUluZGV4OiBwYWdlLFxyXG4gICAgICAgICAgICBQYWdlU2l6ZTogMTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZGF0YS5EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3RiXCIpLmh0bWwodHBsVGFibGUoZGF0YS5EYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI1RvdGFsY291bnRcIikuaHRtbChkYXRhLlBhZ2VTdW0pO1xyXG4gICAgICAgICAgICAgICAgUGFnaW5hdG9yLlBhZ2luYXRvcigxMCwgcGFnZSwgZGF0YS5QYWdlU3VtLCBsb2FkRXhhbVN0dSk7XHJcbiAgICAgICAgICAgICAgICAvL+WKoOi9veWSqOivouW4iOWIl+ihqFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjdGJcIikuaHRtbChcIlwiKTsvL+a4heepuuaVsOaNrlxyXG4gICAgICAgICAgICAgICAgJChcIiNwYWdpbmF0aW9uXCIpLmh0bWwoXCJcIik7Ly/liIbpobXmjqfku7bkuI3mmL7npLpcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5cclxuLy/liqDovb3lkqjor6LluIjliJfooahcclxuZnVuY3Rpb24gbG9hZENvdW5zZWxvcnMoKSB7XHJcblxyXG4gICAgLy/liqDovb3liJfooahcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmdaaVh1bi9aaVh1bkd1YW5MaS9HZXRaaVh1blNoaUJ5U2Nob29sSWRcIixcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGpsaHRtbCA9ICc8b3B0aW9uIHZhbHVlPVwiLTFcIj7lkqjor6LluIg8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICAgICAgLy/liqDovb3lkqjor6LluIjliJfooahcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhLnJlc3VsdC5EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0LkRhdGFba2V5XS5Vc2VySWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpsaHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBkYXRhLnJlc3VsdC5EYXRhW2tleV0uVXNlcklkICsgJ1wiPicgKyBkYXRhLnJlc3VsdC5EYXRhW2tleV0uVXNlck5hbWUgKyAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkKFwiI2N0ZWFjaGVyXCIpLmh0bWwoamxodG1sKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbG9hZEV4YW1TdHUoKTsvL+WKoOi9vea1i+ivhOaVsOaNrlxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbi8v57uR5a6a5pWw5o2uXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIG1vZHVsZS5pbml0KCk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0aW1lciA9IG51bGw7XHJcbiAgICAvL+eCueWHu+aQnOe0ouahhuW8gOWni1xyXG4gICAgJChcIi5zZWFyY2hcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwiI2NiNDQxZVwiKTtcclxuICAgICAgICB2YXIgc2VyY2h0ZXh0ID0gJChcIi5zZWFyY2gtdGV4dFwiKTtcclxuXHJcbiAgICAgICAgc2VyY2h0ZXh0LnNob3coKTtcclxuICAgICAgICBpZiAoIShzZXJjaHRleHQuaGFzQ2xhc3MoXCJvblwiKSkpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgc2VyY2h0ZXh0LnN0b3AoKTtcclxuICAgICAgICAgICAgc2VyY2h0ZXh0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTYwcHhcIlxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgc2VyY2h0ZXh0LmFkZENsYXNzKFwib25cIik7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlcmNodGV4dC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHNlcmNodGV4dC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjBweFwiXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICBzZXJjaHRleHQucmVtb3ZlQ2xhc3MoXCJvblwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbW9kdWxlLmluaXQoKTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy/ngrnlh7vmkJzntKLmoYbnu5PmnZ9cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmdFdmFsdWF0aW9uL2V2YWx1YXRpb25hcmNoaXZlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDI2XG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnRXZhbHVhdGlvbi9ldmFsdWF0aW9uYXJjaGl2ZXMnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRvdXQ9Jyc7JG91dCs9JyAnO1xuJGVhY2goJGRhdGEsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDx0ciBjbGFzcz1cImZvbnQxMlwiPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlRlbXBOYW1lKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlBob25lKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkV4YW1UeXBlTik7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Ub3RhbEhvdXJOKTtcbiRvdXQrPSc8L3RkPiA8dGQgY2xhc3M9XCJyZWRcIj4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuSXNGaWxlPT1mYWxzZT9cIuacquetvue6plwiOlwi562+57qmXCIpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuRWRpdFRpbWVTdHIpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQ291bnNlbG9yTmFtZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPjxzcGFuIGNsYXNzPVwic2VlLWJ0biBsb29rXCI+5p+l55yLPC9zcGFuPjwvdGQ+IDwvdHI+ICc7XG59KTtcbiRvdXQrPScgJztcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy90cGwvT3JnRXZhbHVhdGlvbi9ldmFsdWF0aW9uYXJjaGl2ZXMudHBsXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMjZcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9