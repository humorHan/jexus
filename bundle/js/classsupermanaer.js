webpackJsonp([19,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(42);


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

/***/ 39:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var Paginator = __webpack_require__(8);
	var pageSize = 10;
	var tplTable = __webpack_require__(43);
	var idStructureID = -1;
	var classname = $.trim($(".search-text").val());
	
	function paging(page) {
	    module.loadPaperList(page);
	}
	var module = {
	    init: function () {
	        this.loadPaperList(1);
	    }
	    , loadPaperList: function (page) {
	
	        var obj = { PageIndex: page, PageSize: pageSize, IsAuto: false, IsDel: false, IsEnable: true, StructureID: idStructureID, ClassName: classname };
	
	        //获取班级的列表
	        $.ajax({
	            type: "POST",
	            url: "/Org/ClassManage/GetSuperManagerList",
	            data: { str: JSON.stringify(obj) },
	            dataType: "json",
	            beforeSend: function (data) {
	                $("#idTableClass tbody").html('<tr class="font12"><td colspan="4">数据正在加载中...</td></tr>');
	            },
	            error: function (data) {
	                //debugger;
	            },
	            success: function (data) {
	                var _result = data.result;
	                if (_result.OK) {
	                    var datalist = _result.Data;
	                    $("#idTableClass tbody").html(tplTable(datalist));
	                    var totalNum = _result.PageSum;
	                    $("#totalClassNum").text(totalNum);
	                    //填充校区搜索内容
	                    var datalistOrgStru = _result.Data.ListOrgStructure;
	                    if (datalistOrgStru && datalistOrgStru.length > 0) {
	                        var searchStructureHtml = '<option value="-1">选择校区</option>';
	                        for (var i = 0; i < datalistOrgStru.length; i++) {
	                            searchStructureHtml += "<option value='" + datalistOrgStru[i].StructureID + "'>" + datalistOrgStru[i].StructureName + "</option>";
	                        }
	                        $("#idsearch").empty().append(searchStructureHtml);
	                        $("#idsearch").val(idStructureID);
	                    } else {
	                        $("#idsearch").empty().append('<option value="-1">选择校区</option>');
	                    }
	
	                    Paginator.Paginator(pageSize, page, totalNum, paging);
	
	                } else {
	                    var html = '<tr class="font12"><td colspan=4>' + _result.Result + '</td></tr>';
	                    $("#idTableClass tbody").html(html);
	                }
	
	                $(".look").click(function () {
	                    var $this = $(this);
	                    clickLook($this.data("classid"));
	                });
	            }
	        });
	    }
	
	};
	
	//点击查看
	function clickLook(classid) {
	    window.location.href = "/Org/ClassManage/ClassDetail/?classid=" + classid + "&comefrom=2";
	}
	
	//点击老师状态时
	function LoadPageForSearch() {
	    idStructureID = $("#idsearch").val();
	    classname = $.trim($(".search-text").val());
	    module.loadPaperList(1);
	}
	
	$(function () {
	    $("#sucai").niceScroll({
	        cursorcolor: "#CC0071",
	        cursoropacitymax: 1,
	        touchbehavior: false,
	        cursorwidth: "5px",
	        cursorborder: "0",
	        cursorborderradius: "5px"
	    });
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
	            serchtext.bind('keydown', function () {
	                if (event.keyCode == 13) {
	                    LoadPageForSearch();
	                }
	            });
	        }
	        else {
	            serchtext.stop();
	            serchtext.animate({
	                width: "0px"
	            }, 1000);
	            serchtext.removeClass("on");
	            $(this).css("background", "");
	        }
	    });
	    //点击搜索框结束
	    //添加班级弹出框开始
	    $(".addclass").click(function () {
	        $(".pop-mask,.createClass").show();
	        clearInterval(timer);
	    });
	    //$(".submit").click(function () {
	    //    $(".createClass").hide();
	    //    $(".distributeBox").hide();
	    //});
	    function alerthide() {
	        timer = setInterval(function () {
	            $(".createClass").hide();
	        }, 1000);
	    }
	    $(".popclose").click(function () {
	        $(".createClass,.pop-mask").hide();
	        $(".distributeBox").hide();
	    });
	    //添加班级弹出框结束
	    //自定义下拉列表框
	    $(".scharea").click(function () {
	        $(this).css("border", "1px solid #cb441e");
	        var listbox = $(".listbox");
	        listbox.show();
	        var li = listbox.find("li");
	        for (var i = 0; i < li.length; i++) {
	            li.eq(i).click(function () {
	                var a = $(this).text();
	                $(".scharea").text(a);
	                listbox.hide();
	            })
	        }
	    });
	
	    module.init();
	
	    //筛选分配或未分配时
	    $("#idsearch").bind('change', function () {
	        LoadPageForSearch();
	
	    });
	})
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)(module)))

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgClass/classsupermanage',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,ListModel=$data.ListModel,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(ListModel,function($value,$index){
	$out+=' <tr class="font12"> <td>';
	$out+=$escape($value.ClassName);
	$out+='</td> <td>';
	$out+=$escape($value.SubjectName);
	$out+='</td> <td>';
	if($value.SubjectCount ==0 ){
	$out+=' 未分配 ';
	}else{
	$out+=' ';
	$out+=$escape($value.SubjectCount);
	$out+=' ';
	}
	$out+='</td> <td>';
	$out+=$escape($value.StuctureName);
	$out+='</td> <td><span class="see-btn look black" data-classid="';
	$out+=$escape($value.ClassID);
	$out+='">查看</span></td> </tr> ';
	});
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL1BhZ2luYXRvci5qcz9iZTgxKioqKiIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzP2MzYzIiLCJ3ZWJwYWNrOi8vLy4vT3JnL2pzL09yZy9jbGFzc3N1cGVybWFuYWVyLmpzIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnQ2xhc3MvY2xhc3NzdXBlcm1hbmFnZS50cGwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQWtDO0FBQ2xDOztBQUVBO0FBQ0EseUNBQXdDLE9BQU8sMkJBQTJCO0FBQzFFOztBQUVBO0FBQ0E7QUFDQSxzQ0FBcUMsWUFBWTtBQUNqRDtBQUNBOztBQUVBO0FBQ0EsMEJBQXlCLGlFQUFpRTtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQSxhQUFZLGVBQWU7QUFDM0Isa0RBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFxQjtBQUNyQixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLEdBQUU7QUFDRixrQ0FBaUM7QUFDakMsSUFBRztBQUNILGVBQWM7QUFDZDtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRixFQUFDLEc7Ozs7Ozs7QUM5RUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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Q0E7QUFDQSxjQUFhLDZKQUE2SjtBQUMxSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLEVBQUMsRSIsImZpbGUiOiJjbGFzc3N1cGVybWFuYWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypUTU9ESlM6e30qL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdGZ1bmN0aW9uIGEoYSwgYikge1xyXG5cdFx0cmV0dXJuICgvc3RyaW5nfGZ1bmN0aW9uLy50ZXN0KHR5cGVvZiBiKSA/IGggOiBnKShhLCBiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYihhLCBjKSB7XHJcblx0XHRyZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSAmJiAoYyA9IHR5cGVvZiBhLCBcIm51bWJlclwiID09PSBjID8gYSArPSBcIlwiIDogYSA9IFwiZnVuY3Rpb25cIiA9PT0gYyA/IGIoYS5jYWxsKGEpKSA6IFwiXCIpLCBhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjKGEpIHtcclxuXHRcdHJldHVybiBsW2FdXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkKGEpIHtcclxuXHRcdHJldHVybiBiKGEpLnJlcGxhY2UoLyYoPyFbXFx3I10rOyl8Wzw+XCInXS9nLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZShhLCBiKSB7XHJcblx0XHRpZiAobShhKSlmb3IgKHZhciBjID0gMCwgZCA9IGEubGVuZ3RoOyBkID4gYzsgYysrKWIuY2FsbChhLCBhW2NdLCBjLCBhKTsgZWxzZSBmb3IgKGMgaW4gYSliLmNhbGwoYSwgYVtjXSwgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoYSwgYikge1xyXG5cdFx0dmFyIGMgPSAvKFxcLylbXlxcL10rXFwxXFwuXFwuXFwxLywgZCA9IChcIi4vXCIgKyBhKS5yZXBsYWNlKC9bXlxcL10rJC8sIFwiXCIpLCBlID0gZCArIGI7XHJcblx0XHRmb3IgKGUgPSBlLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7IGUubWF0Y2goYyk7KWUgPSBlLnJlcGxhY2UoYywgXCIvXCIpO1xyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoYiwgYykge1xyXG5cdFx0dmFyIGQgPSBhLmdldChiKSB8fCBpKHtmaWxlbmFtZTogYiwgbmFtZTogXCJSZW5kZXIgRXJyb3JcIiwgbWVzc2FnZTogXCJUZW1wbGF0ZSBub3QgZm91bmRcIn0pO1xyXG5cdFx0cmV0dXJuIGMgPyBkKGMpIDogZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChhLCBiKSB7XHJcblx0XHRpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYikge1xyXG5cdFx0XHR2YXIgYyA9IGI7XHJcblx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBrKGMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBkID0galthXSA9IGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBiKGMsIGEpICsgXCJcIlxyXG5cdFx0XHR9IGNhdGNoIChkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGkoZCkoKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGQucHJvdG90eXBlID0gYi5wcm90b3R5cGUgPSBuLCBkLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYiArIFwiXCJcclxuXHRcdH0sIGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGkoYSkge1xyXG5cdFx0dmFyIGIgPSBcIntUZW1wbGF0ZSBFcnJvcn1cIiwgYyA9IGEuc3RhY2sgfHwgXCJcIjtcclxuXHRcdGlmIChjKWMgPSBjLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCJcXG5cIik7IGVsc2UgZm9yICh2YXIgZCBpbiBhKWMgKz0gXCI8XCIgKyBkICsgXCI+XFxuXCIgKyBhW2RdICsgXCJcXG5cXG5cIjtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IoYiArIFwiXFxuXFxuXCIgKyBjKSwgYlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGogPSBhLmNhY2hlID0ge30sIGsgPSB0aGlzLlN0cmluZywgbCA9IHtcclxuXHRcdFwiPFwiOiBcIiYjNjA7XCIsXHJcblx0XHRcIj5cIjogXCImIzYyO1wiLFxyXG5cdFx0J1wiJzogXCImIzM0O1wiLFxyXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcclxuXHRcdFwiJlwiOiBcIiYjMzg7XCJcclxuXHR9LCBtID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xyXG5cdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB7fS50b1N0cmluZy5jYWxsKGEpXHJcblx0XHR9LCBuID0gYS51dGlscyA9IHtcclxuXHRcdCRoZWxwZXJzOiB7fSwgJGluY2x1ZGU6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcblx0XHRcdHJldHVybiBhID0gZihjLCBhKSwgZyhhLCBiKVxyXG5cdFx0fSwgJHN0cmluZzogYiwgJGVzY2FwZTogZCwgJGVhY2g6IGVcclxuXHR9LCBvID0gYS5oZWxwZXJzID0gbi4kaGVscGVycztcclxuXHRhLmdldCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRyZXR1cm4galthLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKV1cclxuXHR9LCBhLmhlbHBlciA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRvW2FdID0gYlxyXG5cdH0sIG1vZHVsZS5leHBvcnRzID0gYVxyXG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdG1vZGpzLWxvYWRlci9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDggMTMgMTQgMTUgMTYgMTcgMTggMTkgMjEgMjMgMjUgMjYgMjcgMzEgMzIgMzMgMzcgMzhcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFBhZ2luYXRvcjogZnVuY3Rpb24gKHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgdG90YWxDb3VudCwgY2FsbGJhY2spIHtcclxuICAgICAgICAvL3RvZG8g57uR5a6a5LqL5Lu2XHJcbiAgICAgICBcclxuICAgICAgICB2YXIgdG90YWxQYWdlcztcclxuICAgICAgICBpZiAodG90YWxDb3VudCAlIHBhZ2VTaXplID09IDApIHtcclxuICAgICAgICAgICAgdG90YWxQYWdlcyA9IHRvdGFsQ291bnQgLyBwYWdlU2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvdGFsUGFnZXMgPSBwYXJzZUludCh0b3RhbENvdW50IC8gcGFnZVNpemUpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhZ2VQcmUgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgLSAxKSArICcgY2xhc3M9XCJwcmUtcGFnZSBpbmxpbmUgbXIyMFwiPuS4iuS4gOmhtTwvYT4nO1xyXG4gICAgICAgIHZhciBwYWdlTmV4dCA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDEpICsgJyBjbGFzcz1cIm5leHQtcGFnZSBpbmxpbmVcIj7kuIvkuIDpobU8L2E+JztcclxuICAgICAgICB2YXIgaW5kZXhQYWdlID0gJzxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPVwiMVwiIGNsYXNzPVwicHJlLXBhZ2UgaW5saW5lIG1yMjBcIj7pppbpobU8L2E+PC9saT4nO1xyXG5cclxuICAgICAgICB2YXIgbGFzdFBhZ2UgPSAnIDxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJyBjbGFzcz1cInByZS1wYWdlIGlubGluZSBtcjIwXCI+IOacq+mhtTwvYT4nO1xyXG4gICAgICAgIGlmICh0b3RhbFBhZ2VzIDwgcGFnZVNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlUHJlID0gXCJcIjtcclxuICAgICAgICAgICAgcGFnZU5leHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBpbmRleFBhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDw9IDEpIHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgICAgICBwYWdlUHJlID0gXCJcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gdG90YWxQYWdlcztcclxuICAgICAgICAgICAgcGFnZU5leHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG90YWxDb3VudCA+IDApIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAnPHVsIGNsYXNzPVwicGFnZS1ib3ggaW5saW5lIG1yMjBcIj4nO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VzID4gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09IDEpIC8v56ys5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3V0cHV0LkFwcGVuZChcIiA8YSBkaXNhYmxlZD0nZGlzYWJsZWQnIGNsYXNzPSdjb2xIJz7kuIrkuIDpobU8L2E+IFwiKTsvL+S4iuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5aSE55CG6aaW6aG16L+e5o6lXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpITnkIbkuIrkuIDpobXnmoTov57mjqVcclxuICAgICAgICAgICAgICAgICAgICAvL3BhZ2VQcmUgPSAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDEpICsgJz7kuIrkuIDpobU8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAvLyBvdXRwdXQuQXBwZW5kRm9ybWF0KFwiIDxhIGRhdGEtcGFnZUluZGV4PSd7MH0nIGNsYXNzPSdwYWdlTGluayc+5LiK5LiA6aG1PC9hPiBcIiwgY3VycmVudFBhZ2UgLSAxKTsvL+S4iuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgPiA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJpbnQgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA8IDQpLy80XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gaSArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiBkYXRhLW51bT0nICsgY3VycmVudFBhZ2UgKyAnPicgKyBjdXJyZW50UGFnZSArICc8L2E+IDwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSA2KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyA3ICsgJz4uLi48L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgdG90YWxQYWdlcyArICc+JyArIHRvdGFsUGFnZXMgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKGkgKyAxKSArICc+JyArIChpICsgMSkgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfS8vNFxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRQYWdlID49IDQgJiYgY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzIC0gMykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wYWdlbnVtPXBhZ2VudW0rJyA8bGkgZGF0YS1udW09JysoY3VycmVudFBhZ2UtMykrJz48YSBocmVmPVwiI1wiIG9uY2xpY2s9XCJQYWdpbmF0b3IoJytwYWdlU2l6ZSsnLCcrKGN1cnJlbnRQYWdlLTMpKycsJyArIHRvdGFsQ291bnQgKyAnKVwiPi4uLjwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCI+MTwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDMgPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDMpICsgJz4uLi48L2E+IDwvbGk+JzsvLzIwMTYwOTEzMDkzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gMykvL+S4remXtOW9k+WJjemhtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgZGF0YS1udW09JyArIChjdXJyZW50UGFnZSkgKyAnPicgKyBjdXJyZW50UGFnZSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gNikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyAzKSArICc+Li4uPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgdG90YWxQYWdlcyArICc+JyArIHRvdGFsUGFnZXMgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIGkgLSBwYXJzZUludChjdXJyaW50KSkgKyAnPicgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgaSAtIHBhcnNlSW50KGN1cnJpbnQpKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPVwiMVwiPjE8L2E+IDwvbGk+JzsvLzIwMTYwOTEzMDkzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBkYXRhLW51bT0nICsgKHBhcnNlSW50KHRvdGFsUGFnZXMpIC0gNikgKyAnPi4uLjwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxQYWdlcyAtIDYgKyBpID09IGN1cnJlbnRQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArICh0b3RhbFBhZ2VzIC0gNiArIGkpICsgJz4nICsgKHRvdGFsUGFnZXMgLSA2ICsgaSkgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSBpICsgMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAoaSArIDEpICsgJz4nICsgKGkgKyAxKSArICc8L2E+IDwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gdG90YWxQYWdlcykgLy/mnIDlkI7kuIDpobVcclxuICAgICAgICAgICAgICAgIHsvL+WkhOeQhuS4i+S4gOmhteWSjOWwvumhteeahOmTvuaOpVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3V0cHV0LkFwcGVuZChcIiA8YSBkaXNhYmxlZD0nZGlzYWJsZWQnIGNsYXNzPSdjb2xIJz7kuIvkuIDpobU8L2E+IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFBhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcykgey8v5aSE55CG5LiL5LiA6aG15ZKM5bC+6aG155qE6ZO+5o6lIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kRm9ybWF0KFwiIDxhIGRhdGEtcGFnZWluZGV4PSd7MH0nIGNsYXNzPSdwYWdlTGluayc+5LiL5LiA6aG1PC9hPiBcIiwgY3VycmVudFBhZ2UgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgIC8vIHBhZ2VQcmUgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyAxKSArICcgY2xhc3M9XCJuZXh0LXBhZ2UgaW5saW5lXCI+5LiL5LiA6aG1PC9hPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnPC91bD4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gaW5kZXhQYWdlICsgcGFnZVByZSArIHBhZ2VudW0gKyBwYWdlTmV4dCArIGxhc3RQYWdlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNwYWdpbmF0aW9uIGFcIikudW5iaW5kKFwiY2xpY2tcIik7XHJcbiAgICAgICAgJChcIiNwYWdpbmF0aW9uIGFcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJCh0aGlzKS5hdHRyKFwiZGF0YS1udW1cIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4vL2Z1bmN0aW9uIFBhZ2luYXRvcihwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHRvdGFsQ291bnQsIGNhbGxiYWNrKSB7XHJcblxyXG5cclxuLy99XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC9QYWdpbmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMTMgMTYgMTggMTkgMjEgMjYgMjcgMzEgMzMgMzhcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTggMTlcbiAqKi8iLCJ2YXIgUGFnaW5hdG9yID0gcmVxdWlyZSgnUGFnaW5hdG9yLmpzJyk7XHJcbnZhciBwYWdlU2l6ZSA9IDEwO1xyXG52YXIgdHBsVGFibGUgPSByZXF1aXJlKFwiT3JnQ2xhc3MvY2xhc3NzdXBlcm1hbmFnZS50cGxcIik7XHJcbnZhciBpZFN0cnVjdHVyZUlEID0gLTE7XHJcbnZhciBjbGFzc25hbWUgPSAkLnRyaW0oJChcIi5zZWFyY2gtdGV4dFwiKS52YWwoKSk7XHJcblxyXG5mdW5jdGlvbiBwYWdpbmcocGFnZSkge1xyXG4gICAgbW9kdWxlLmxvYWRQYXBlckxpc3QocGFnZSk7XHJcbn1cclxudmFyIG1vZHVsZSA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxvYWRQYXBlckxpc3QoMSk7XHJcbiAgICB9XHJcbiAgICAsIGxvYWRQYXBlckxpc3Q6IGZ1bmN0aW9uIChwYWdlKSB7XHJcblxyXG4gICAgICAgIHZhciBvYmogPSB7IFBhZ2VJbmRleDogcGFnZSwgUGFnZVNpemU6IHBhZ2VTaXplLCBJc0F1dG86IGZhbHNlLCBJc0RlbDogZmFsc2UsIElzRW5hYmxlOiB0cnVlLCBTdHJ1Y3R1cmVJRDogaWRTdHJ1Y3R1cmVJRCwgQ2xhc3NOYW1lOiBjbGFzc25hbWUgfTtcclxuXHJcbiAgICAgICAgLy/ojrflj5bnj63nuqfnmoTliJfooahcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9PcmcvQ2xhc3NNYW5hZ2UvR2V0U3VwZXJNYW5hZ2VyTGlzdFwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7IHN0cjogSlNPTi5zdHJpbmdpZnkob2JqKSB9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2lkVGFibGVDbGFzcyB0Ym9keVwiKS5odG1sKCc8dHIgY2xhc3M9XCJmb250MTJcIj48dGQgY29sc3Bhbj1cIjRcIj7mlbDmja7mraPlnKjliqDovb3kuK0uLi48L3RkPjwvdHI+Jyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfcmVzdWx0ID0gZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3Jlc3VsdC5PSykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhbGlzdCA9IF9yZXN1bHQuRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2lkVGFibGVDbGFzcyB0Ym9keVwiKS5odG1sKHRwbFRhYmxlKGRhdGFsaXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdGFsTnVtID0gX3Jlc3VsdC5QYWdlU3VtO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdG90YWxDbGFzc051bVwiKS50ZXh0KHRvdGFsTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+Whq+WFheagoeWMuuaQnOe0ouWGheWuuVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhbGlzdE9yZ1N0cnUgPSBfcmVzdWx0LkRhdGEuTGlzdE9yZ1N0cnVjdHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YWxpc3RPcmdTdHJ1ICYmIGRhdGFsaXN0T3JnU3RydS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWFyY2hTdHJ1Y3R1cmVIdG1sID0gJzxvcHRpb24gdmFsdWU9XCItMVwiPumAieaLqeagoeWMujwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YWxpc3RPcmdTdHJ1Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hTdHJ1Y3R1cmVIdG1sICs9IFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBkYXRhbGlzdE9yZ1N0cnVbaV0uU3RydWN0dXJlSUQgKyBcIic+XCIgKyBkYXRhbGlzdE9yZ1N0cnVbaV0uU3RydWN0dXJlTmFtZSArIFwiPC9vcHRpb24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNpZHNlYXJjaFwiKS5lbXB0eSgpLmFwcGVuZChzZWFyY2hTdHJ1Y3R1cmVIdG1sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNpZHNlYXJjaFwiKS52YWwoaWRTdHJ1Y3R1cmVJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNpZHNlYXJjaFwiKS5lbXB0eSgpLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cIi0xXCI+6YCJ5oup5qCh5Yy6PC9vcHRpb24+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBQYWdpbmF0b3IuUGFnaW5hdG9yKHBhZ2VTaXplLCBwYWdlLCB0b3RhbE51bSwgcGFnaW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gJzx0ciBjbGFzcz1cImZvbnQxMlwiPjx0ZCBjb2xzcGFuPTQ+JyArIF9yZXN1bHQuUmVzdWx0ICsgJzwvdGQ+PC90cj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjaWRUYWJsZUNsYXNzIHRib2R5XCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5sb29rXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrTG9vaygkdGhpcy5kYXRhKFwiY2xhc3NpZFwiKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbi8v54K55Ye75p+l55yLXHJcbmZ1bmN0aW9uIGNsaWNrTG9vayhjbGFzc2lkKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL09yZy9DbGFzc01hbmFnZS9DbGFzc0RldGFpbC8/Y2xhc3NpZD1cIiArIGNsYXNzaWQgKyBcIiZjb21lZnJvbT0yXCI7XHJcbn1cclxuXHJcbi8v54K55Ye76ICB5biI54q25oCB5pe2XHJcbmZ1bmN0aW9uIExvYWRQYWdlRm9yU2VhcmNoKCkge1xyXG4gICAgaWRTdHJ1Y3R1cmVJRCA9ICQoXCIjaWRzZWFyY2hcIikudmFsKCk7XHJcbiAgICBjbGFzc25hbWUgPSAkLnRyaW0oJChcIi5zZWFyY2gtdGV4dFwiKS52YWwoKSk7XHJcbiAgICBtb2R1bGUubG9hZFBhcGVyTGlzdCgxKTtcclxufVxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI3N1Y2FpXCIpLm5pY2VTY3JvbGwoe1xyXG4gICAgICAgIGN1cnNvcmNvbG9yOiBcIiNDQzAwNzFcIixcclxuICAgICAgICBjdXJzb3JvcGFjaXR5bWF4OiAxLFxyXG4gICAgICAgIHRvdWNoYmVoYXZpb3I6IGZhbHNlLFxyXG4gICAgICAgIGN1cnNvcndpZHRoOiBcIjVweFwiLFxyXG4gICAgICAgIGN1cnNvcmJvcmRlcjogXCIwXCIsXHJcbiAgICAgICAgY3Vyc29yYm9yZGVycmFkaXVzOiBcIjVweFwiXHJcbiAgICB9KTtcclxuICAgIHZhciB0aW1lciA9IG51bGw7XHJcbiAgICAvL+eCueWHu+aQnOe0ouahhuW8gOWni1xyXG4gICAgJChcIi5zZWFyY2hcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY3NzKFwiYmFja2dyb3VuZFwiLCBcIiNjYjQ0MWVcIik7XHJcbiAgICAgICAgdmFyIHNlcmNodGV4dCA9ICQoXCIuc2VhcmNoLXRleHRcIik7XHJcbiAgICAgICAgc2VyY2h0ZXh0LnNob3coKTtcclxuICAgICAgICBpZiAoIShzZXJjaHRleHQuaGFzQ2xhc3MoXCJvblwiKSkpIHtcclxuICAgICAgICAgICAgc2VyY2h0ZXh0LnN0b3AoKTtcclxuICAgICAgICAgICAgc2VyY2h0ZXh0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTYwcHhcIlxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgc2VyY2h0ZXh0LmFkZENsYXNzKFwib25cIik7XHJcbiAgICAgICAgICAgIHNlcmNodGV4dC5iaW5kKCdrZXlkb3duJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkUGFnZUZvclNlYXJjaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNlcmNodGV4dC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHNlcmNodGV4dC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjBweFwiXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICBzZXJjaHRleHQucmVtb3ZlQ2xhc3MoXCJvblwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy/ngrnlh7vmkJzntKLmoYbnu5PmnZ9cclxuICAgIC8v5re75Yqg54+t57qn5by55Ye65qGG5byA5aeLXHJcbiAgICAkKFwiLmFkZGNsYXNzXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrLC5jcmVhdGVDbGFzc1wiKS5zaG93KCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICB9KTtcclxuICAgIC8vJChcIi5zdWJtaXRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgJChcIi5jcmVhdGVDbGFzc1wiKS5oaWRlKCk7XHJcbiAgICAvLyAgICAkKFwiLmRpc3RyaWJ1dGVCb3hcIikuaGlkZSgpO1xyXG4gICAgLy99KTtcclxuICAgIGZ1bmN0aW9uIGFsZXJ0aGlkZSgpIHtcclxuICAgICAgICB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5jcmVhdGVDbGFzc1wiKS5oaWRlKCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgICAkKFwiLnBvcGNsb3NlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmNyZWF0ZUNsYXNzLC5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5kaXN0cmlidXRlQm94XCIpLmhpZGUoKTtcclxuICAgIH0pO1xyXG4gICAgLy/mt7vliqDnj63nuqflvLnlh7rmoYbnu5PmnZ9cclxuICAgIC8v6Ieq5a6a5LmJ5LiL5ouJ5YiX6KGo5qGGXHJcbiAgICAkKFwiLnNjaGFyZWFcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNjYjQ0MWVcIik7XHJcbiAgICAgICAgdmFyIGxpc3Rib3ggPSAkKFwiLmxpc3Rib3hcIik7XHJcbiAgICAgICAgbGlzdGJveC5zaG93KCk7XHJcbiAgICAgICAgdmFyIGxpID0gbGlzdGJveC5maW5kKFwibGlcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsaS5lcShpKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zY2hhcmVhXCIpLnRleHQoYSk7XHJcbiAgICAgICAgICAgICAgICBsaXN0Ym94LmhpZGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2R1bGUuaW5pdCgpO1xyXG5cclxuICAgIC8v562b6YCJ5YiG6YWN5oiW5pyq5YiG6YWN5pe2XHJcbiAgICAkKFwiI2lkc2VhcmNoXCIpLmJpbmQoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBMb2FkUGFnZUZvclNlYXJjaCgpO1xyXG5cclxuICAgIH0pO1xyXG59KVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvanMvT3JnL2NsYXNzc3VwZXJtYW5hZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxOVxuICoqLyIsInZhciB0ZW1wbGF0ZT1yZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdPcmcvdHBsL09yZ0NsYXNzL2NsYXNzc3VwZXJtYW5hZ2UnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLExpc3RNb2RlbD0kZGF0YS5MaXN0TW9kZWwsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaChMaXN0TW9kZWwsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDx0ciBjbGFzcz1cImZvbnQxMlwiPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkNsYXNzTmFtZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdWJqZWN0TmFtZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG5pZigkdmFsdWUuU3ViamVjdENvdW50ID09MCApe1xuJG91dCs9JyDmnKrliIbphY0gJztcbn1lbHNle1xuJG91dCs9JyAnO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU3ViamVjdENvdW50KTtcbiRvdXQrPScgJztcbn1cbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlN0dWN0dXJlTmFtZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPjxzcGFuIGNsYXNzPVwic2VlLWJ0biBsb29rIGJsYWNrXCIgZGF0YS1jbGFzc2lkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkNsYXNzSUQpO1xuJG91dCs9J1wiPuafpeecizwvc3Bhbj48L3RkPiA8L3RyPiAnO1xufSk7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ0NsYXNzL2NsYXNzc3VwZXJtYW5hZ2UudHBsXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTlcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9