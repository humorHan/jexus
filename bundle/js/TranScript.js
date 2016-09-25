webpackJsonp([13,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(29);


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

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	var Paginator = __webpack_require__(8);
	var Tpllist = __webpack_require__(30);
	var para = { SubjectID: 0, StageID: 0, GradeID: 0, data: '', PageIndex: 1, PageSize: 10, ExamName: '', ExamCode: '' };
	
	var paging = function (page) {
	    jobexamlist.init(page)
	};
	
	var Trandata = {
	    init: function (PageIndex) {
	        var workid = "2f320319ed3d42b897a0e44e7316326e";
	        var targetid = "82";
	        $.post("/Org/TeachSupervision/GetWorkAnalysisList", { workid, targetid, PageIndex }, function (data) {
	            $("#f_Tranlist").html(Tpllist(data.Data));
	            Paginator.Paginator(10, PageIndex, data.PageSum, paging);
	            GetDetail();
	        });
	    }
	}
	
	function GetDetail() {
	    $("[name=workid]").click(function () {   
	       var id = $(this).attr("data-userid");
	       var workid = $(this).attr("data-workid");
	       var ispoen = $(this).attr("data-isopen");
	       if (ispoen=="1") {          
	           $("#tr_" + id).show();
	           $(this).attr("data-isopen", "2")
	           SetAnswer(id, workid);
	       } else {
	           $("#tr_" + id).hide();
	           $(this).attr("data-isopen", "1")
	       }
	
	    });
	}
	
	function SetAnswer(id, workid) {
	    if ($("#f_" + id).attr("data-isset") == "1") {
	        return;
	    }
	    $.post("/Org/TeachSupervision/GetWorkAnalysisDetail", { workid: workid, UserID: id }, function (data) {      
	        var str = "";
	        for (var i = 0; i < data.Data.length; i++) {
	            if (data.Data[i]["result"]=="1") {
	                str += "<span>" + (i + 1) + "</span>" + $("#success").html();
	            } else {
	                str += "<span>" + (i + 1) + "</span>" + $("#error").html();
	            }           
	        }
	        $("#td_" + id).html(str);
	        if (str!="") {
	            $("#f_" + id).attr("data-isset", "1")
	        }
	        
	    });
	
	}
	
	
	$(document).ready(function () {
	
	    Trandata.init(1);
	  
	
	});
	
	
	


/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgIndex/Tran',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each($data,function($value,$index){
	$out+=' <tr class="font12"> <td>第';
	$out+=$escape($value.num);
	$out+='名</td> <td>';
	$out+=$escape($value.UserName);
	$out+='</td> <td>';
	$out+=$escape($value.score);
	$out+='</td> <td><input type="button" name="workid" id="f_';
	$out+=$escape($value.userid);
	$out+='" data-userid="';
	$out+=$escape($value.userid);
	$out+='" data-workid="';
	$out+=$escape($value.workid);
	$out+='" data-isopen="1" data-isset="0" value="展开详情" /> </td> </tr> <tr id="tr_';
	$out+=$escape($value.userid);
	$out+='" style="display:none"> <td id="td_';
	$out+=$escape($value.userid);
	$out+='" colspan="4"></td> </tr> ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2RlcC9QYWdpbmF0b3IuanM/YmU4MSoiLCJ3ZWJwYWNrOi8vLy4vT3JnL2pzL09yZy9UcmFuU2NyaXB0LmpzIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnSW5kZXgvVHJhbi50cGwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQWtDO0FBQ2xDOztBQUVBO0FBQ0EseUNBQXdDLE9BQU8sMkJBQTJCO0FBQzFFOztBQUVBO0FBQ0E7QUFDQSxzQ0FBcUMsWUFBWTtBQUNqRDtBQUNBOztBQUVBO0FBQ0EsMEJBQXlCLGlFQUFpRTtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQSxhQUFZLGVBQWU7QUFDM0Isa0RBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFxQjtBQUNyQixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLEdBQUU7QUFDRixrQ0FBaUM7QUFDakMsSUFBRztBQUNILGVBQWM7QUFDZDtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRixFQUFDLEc7Ozs7Ozs7QUM5RUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLHNGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFLEVBQUUsK0NBQStDO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXVDLFFBQVE7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUEsd0NBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBLGtHQUFpRztBQUNqRztBQUNBO0FBQ0Esd0lBQXVJO0FBQ3ZJOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXVDLFFBQVE7QUFDL0M7O0FBRUEsa0dBQWlHO0FBQ2pHLGtJQUFpSTtBQUNqSTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBbUMsZ0JBQWdCO0FBQ25EOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUErQzs7QUFFL0MsaUVBQWdFLEVBQUU7QUFDbEU7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7O0FDbkxBO0FBQ0E7QUFDQSxhQUFZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE2RCw4QkFBOEI7QUFDM0Y7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSwyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBMkQsNkJBQTZCLG1CO0FBQ3hGO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsYztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSzs7QUFFTDs7O0FBR0E7O0FBRUE7OztBQUdBLEVBQUM7Ozs7Ozs7Ozs7O0FDakVEO0FBQ0E7QUFDQTtBQUNBLGNBQWEsbUlBQW1JO0FBQ2hKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBQyxFIiwiZmlsZSI6IlRyYW5TY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlRNT0RKUzp7fSovXHJcbiFmdW5jdGlvbiAoKSB7XHJcblx0ZnVuY3Rpb24gYShhLCBiKSB7XHJcblx0XHRyZXR1cm4gKC9zdHJpbmd8ZnVuY3Rpb24vLnRlc3QodHlwZW9mIGIpID8gaCA6IGcpKGEsIGIpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBiKGEsIGMpIHtcclxuXHRcdHJldHVybiBcInN0cmluZ1wiICE9IHR5cGVvZiBhICYmIChjID0gdHlwZW9mIGEsIFwibnVtYmVyXCIgPT09IGMgPyBhICs9IFwiXCIgOiBhID0gXCJmdW5jdGlvblwiID09PSBjID8gYihhLmNhbGwoYSkpIDogXCJcIiksIGFcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGMoYSkge1xyXG5cdFx0cmV0dXJuIGxbYV1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGQoYSkge1xyXG5cdFx0cmV0dXJuIGIoYSkucmVwbGFjZSgvJig/IVtcXHcjXSs7KXxbPD5cIiddL2csIGMpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBlKGEsIGIpIHtcclxuXHRcdGlmIChtKGEpKWZvciAodmFyIGMgPSAwLCBkID0gYS5sZW5ndGg7IGQgPiBjOyBjKyspYi5jYWxsKGEsIGFbY10sIGMsIGEpOyBlbHNlIGZvciAoYyBpbiBhKWIuY2FsbChhLCBhW2NdLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZihhLCBiKSB7XHJcblx0XHR2YXIgYyA9IC8oXFwvKVteXFwvXStcXDFcXC5cXC5cXDEvLCBkID0gKFwiLi9cIiArIGEpLnJlcGxhY2UoL1teXFwvXSskLywgXCJcIiksIGUgPSBkICsgYjtcclxuXHRcdGZvciAoZSA9IGUucmVwbGFjZSgvXFwvXFwuXFwvL2csIFwiL1wiKTsgZS5tYXRjaChjKTspZSA9IGUucmVwbGFjZShjLCBcIi9cIik7XHJcblx0XHRyZXR1cm4gZVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZyhiLCBjKSB7XHJcblx0XHR2YXIgZCA9IGEuZ2V0KGIpIHx8IGkoe2ZpbGVuYW1lOiBiLCBuYW1lOiBcIlJlbmRlciBFcnJvclwiLCBtZXNzYWdlOiBcIlRlbXBsYXRlIG5vdCBmb3VuZFwifSk7XHJcblx0XHRyZXR1cm4gYyA/IGQoYykgOiBkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoKGEsIGIpIHtcclxuXHRcdGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBiKSB7XHJcblx0XHRcdHZhciBjID0gYjtcclxuXHRcdFx0YiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IGsoYylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dmFyIGQgPSBqW2FdID0gZnVuY3Rpb24gKGMpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IGIoYywgYSkgKyBcIlwiXHJcblx0XHRcdH0gY2F0Y2ggKGQpIHtcclxuXHRcdFx0XHRyZXR1cm4gaShkKSgpXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gZC5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSA9IG4sIGQudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBiICsgXCJcIlxyXG5cdFx0fSwgZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaShhKSB7XHJcblx0XHR2YXIgYiA9IFwie1RlbXBsYXRlIEVycm9yfVwiLCBjID0gYS5zdGFjayB8fCBcIlwiO1xyXG5cdFx0aWYgKGMpYyA9IGMuc3BsaXQoXCJcXG5cIikuc2xpY2UoMCwgMikuam9pbihcIlxcblwiKTsgZWxzZSBmb3IgKHZhciBkIGluIGEpYyArPSBcIjxcIiArIGQgKyBcIj5cXG5cIiArIGFbZF0gKyBcIlxcblxcblwiO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIFwib2JqZWN0XCIgPT0gdHlwZW9mIGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcihiICsgXCJcXG5cXG5cIiArIGMpLCBiXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgaiA9IGEuY2FjaGUgPSB7fSwgayA9IHRoaXMuU3RyaW5nLCBsID0ge1xyXG5cdFx0XCI8XCI6IFwiJiM2MDtcIixcclxuXHRcdFwiPlwiOiBcIiYjNjI7XCIsXHJcblx0XHQnXCInOiBcIiYjMzQ7XCIsXHJcblx0XHRcIidcIjogXCImIzM5O1wiLFxyXG5cdFx0XCImXCI6IFwiJiMzODtcIlxyXG5cdH0sIG0gPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRcdHJldHVybiBcIltvYmplY3QgQXJyYXldXCIgPT09IHt9LnRvU3RyaW5nLmNhbGwoYSlcclxuXHRcdH0sIG4gPSBhLnV0aWxzID0ge1xyXG5cdFx0JGhlbHBlcnM6IHt9LCAkaW5jbHVkZTogZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuXHRcdFx0cmV0dXJuIGEgPSBmKGMsIGEpLCBnKGEsIGIpXHJcblx0XHR9LCAkc3RyaW5nOiBiLCAkZXNjYXBlOiBkLCAkZWFjaDogZVxyXG5cdH0sIG8gPSBhLmhlbHBlcnMgPSBuLiRoZWxwZXJzO1xyXG5cdGEuZ2V0ID0gZnVuY3Rpb24gKGEpIHtcclxuXHRcdHJldHVybiBqW2EucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpXVxyXG5cdH0sIGEuaGVscGVyID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdG9bYV0gPSBiXHJcblx0fSwgbW9kdWxlLmV4cG9ydHMgPSBhXHJcbn0oKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90bW9kanMtbG9hZGVyL3J1bnRpbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgOCAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMSAyMyAyNSAyNiAyNyAzMSAzMiAzMyAzNyAzOFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUGFnaW5hdG9yOiBmdW5jdGlvbiAocGFnZVNpemUsIGN1cnJlbnRQYWdlLCB0b3RhbENvdW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIC8vdG9kbyDnu5Hlrprkuovku7ZcclxuICAgICAgIFxyXG4gICAgICAgIHZhciB0b3RhbFBhZ2VzO1xyXG4gICAgICAgIGlmICh0b3RhbENvdW50ICUgcGFnZVNpemUgPT0gMCkge1xyXG4gICAgICAgICAgICB0b3RhbFBhZ2VzID0gdG90YWxDb3VudCAvIHBhZ2VTaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG90YWxQYWdlcyA9IHBhcnNlSW50KHRvdGFsQ291bnQgLyBwYWdlU2l6ZSkgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGFnZVByZSA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDEpICsgJyBjbGFzcz1cInByZS1wYWdlIGlubGluZSBtcjIwXCI+5LiK5LiA6aG1PC9hPic7XHJcbiAgICAgICAgdmFyIHBhZ2VOZXh0ID0gJzxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgMSkgKyAnIGNsYXNzPVwibmV4dC1wYWdlIGlubGluZVwiPuS4i+S4gOmhtTwvYT4nO1xyXG4gICAgICAgIHZhciBpbmRleFBhZ2UgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCIgY2xhc3M9XCJwcmUtcGFnZSBpbmxpbmUgbXIyMFwiPummlumhtTwvYT48L2xpPic7XHJcblxyXG4gICAgICAgIHZhciBsYXN0UGFnZSA9ICcgPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIHRvdGFsUGFnZXMgKyAnIGNsYXNzPVwicHJlLXBhZ2UgaW5saW5lIG1yMjBcIj4g5pyr6aG1PC9hPic7XHJcbiAgICAgICAgaWYgKHRvdGFsUGFnZXMgPCBwYWdlU2l6ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZ2VQcmUgPSBcIlwiO1xyXG4gICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGluZGV4UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxhc3RQYWdlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgICAgIHBhZ2VQcmUgPSBcIlwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlID49IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxhc3RQYWdlID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0b3RhbENvdW50ID4gMCkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgcGFnZW51bSA9ICc8dWwgY2xhc3M9XCJwYWdlLWJveCBpbmxpbmUgbXIyMFwiPic7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gMSkgLy/nrKzkuIDpobVcclxuICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kKFwiIDxhIGRpc2FibGVkPSdkaXNhYmxlZCcgY2xhc3M9J2NvbEgnPuS4iuS4gOmhtTwvYT4gXCIpOy8v5LiK5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpITnkIbpppbpobXov57mjqVcclxuICAgICAgICAgICAgICAgICAgICAvL+WkhOeQhuS4iuS4gOmhteeahOi/nuaOpVxyXG4gICAgICAgICAgICAgICAgICAgIC8vcGFnZVByZSA9ICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMSkgKyAnPuS4iuS4gOmhtTwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG91dHB1dC5BcHBlbmRGb3JtYXQoXCIgPGEgZGF0YS1wYWdlSW5kZXg9J3swfScgY2xhc3M9J3BhZ2VMaW5rJz7kuIrkuIDpobU8L2E+IFwiLCBjdXJyZW50UGFnZSAtIDEpOy8v5LiK5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWxQYWdlcyA+IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmludCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgNCkvLzRcclxuICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSBpICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDYpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIDcgKyAnPi4uLjwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJz4nICsgdG90YWxQYWdlcyArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAoaSArIDEpICsgJz4nICsgKGkgKyAxKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9Ly80XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFBhZ2UgPj0gNCAmJiBjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgLSAzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BhZ2VudW09cGFnZW51bSsnIDxsaSBkYXRhLW51bT0nKyhjdXJyZW50UGFnZS0zKSsnPjxhIGhyZWY9XCIjXCIgb25jbGljaz1cIlBhZ2luYXRvcignK3BhZ2VTaXplKycsJysoY3VycmVudFBhZ2UtMykrJywnICsgdG90YWxDb3VudCArICcpXCI+Li4uPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT1cIjFcIj4xPC9hPiA8L2xpPic7Ly8yMDE2MDkxMzA5MzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMyA+IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMykgKyAnPi4uLjwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSAzKS8v5Lit6Ze05b2T5YmN6aG1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiBkYXRhLW51bT0nICsgKGN1cnJlbnRQYWdlKSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSA2KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDMpICsgJz4uLi48L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJz4nICsgdG90YWxQYWdlcyArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgaSAtIHBhcnNlSW50KGN1cnJpbnQpKSArICc+JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyBpIC0gcGFyc2VJbnQoY3VycmludCkpICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCI+MTwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGRhdGEtbnVtPScgKyAocGFyc2VJbnQodG90YWxQYWdlcykgLSA2KSArICc+Li4uPC9hPiA8L2xpPic7Ly8yMDE2MDkxMzA5MzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VzIC0gNiArIGkgPT0gY3VycmVudFBhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiAgZGF0YS1udW09JyArIGN1cnJlbnRQYWdlICsgJz4nICsgY3VycmVudFBhZ2UgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHRvdGFsUGFnZXMgLSA2ICsgaSkgKyAnPicgKyAodG90YWxQYWdlcyAtIDYgKyBpKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbFBhZ2VzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09IGkgKyAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgZGF0YS1udW09JyArIGN1cnJlbnRQYWdlICsgJz4nICsgY3VycmVudFBhZ2UgKyAnPC9hPiA8L2xpPic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChpICsgMSkgKyAnPicgKyAoaSArIDEpICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSB0b3RhbFBhZ2VzKSAvL+acgOWQjuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgey8v5aSE55CG5LiL5LiA6aG15ZKM5bC+6aG155qE6ZO+5o6lXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kKFwiIDxhIGRpc2FibGVkPSdkaXNhYmxlZCcgY2xhc3M9J2NvbEgnPuS4i+S4gOmhtTwvYT4gXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzKSB7Ly/lpITnkIbkuIvkuIDpobXlkozlsL7pobXnmoTpk77mjqUgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL291dHB1dC5BcHBlbmRGb3JtYXQoXCIgPGEgZGF0YS1wYWdlaW5kZXg9J3swfScgY2xhc3M9J3BhZ2VMaW5rJz7kuIvkuIDpobU8L2E+IFwiLCBjdXJyZW50UGFnZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgLy8gcGFnZVByZSA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDEpICsgJyBjbGFzcz1cIm5leHQtcGFnZSBpbmxpbmVcIj7kuIvkuIDpobU8L2E+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICc8L3VsPic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBpbmRleFBhZ2UgKyBwYWdlUHJlICsgcGFnZW51bSArIHBhZ2VOZXh0ICsgbGFzdFBhZ2U7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI3BhZ2luYXRpb24gYVwiKS51bmJpbmQoXCJjbGlja1wiKTtcclxuICAgICAgICAkKFwiI3BhZ2luYXRpb24gYVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygkKHRoaXMpLmF0dHIoXCJkYXRhLW51bVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi8vZnVuY3Rpb24gUGFnaW5hdG9yKHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgdG90YWxDb3VudCwgY2FsbGJhY2spIHtcclxuXHJcblxyXG4vL31cclxuXHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvZGVwL1BhZ2luYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAxMyAxNiAxOCAxOSAyMSAyNiAyNyAzMSAzMyAzOFxuICoqLyIsInZhciBQYWdpbmF0b3IgPSByZXF1aXJlKCdQYWdpbmF0b3IuanMnKTtcclxudmFyIFRwbGxpc3QgPSByZXF1aXJlKFwiT3JnSW5kZXgvVHJhbi50cGxcIik7XHJcbnZhciBwYXJhID0geyBTdWJqZWN0SUQ6IDAsIFN0YWdlSUQ6IDAsIEdyYWRlSUQ6IDAsIGRhdGE6ICcnLCBQYWdlSW5kZXg6IDEsIFBhZ2VTaXplOiAxMCwgRXhhbU5hbWU6ICcnLCBFeGFtQ29kZTogJycgfTtcclxuXHJcbnZhciBwYWdpbmcgPSBmdW5jdGlvbiAocGFnZSkge1xyXG4gICAgam9iZXhhbWxpc3QuaW5pdChwYWdlKVxyXG59O1xyXG5cclxudmFyIFRyYW5kYXRhID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKFBhZ2VJbmRleCkge1xyXG4gICAgICAgIHZhciB3b3JraWQgPSBcIjJmMzIwMzE5ZWQzZDQyYjg5N2EwZTQ0ZTczMTYzMjZlXCI7XHJcbiAgICAgICAgdmFyIHRhcmdldGlkID0gXCI4MlwiO1xyXG4gICAgICAgICQucG9zdChcIi9PcmcvVGVhY2hTdXBlcnZpc2lvbi9HZXRXb3JrQW5hbHlzaXNMaXN0XCIsIHsgd29ya2lkLCB0YXJnZXRpZCwgUGFnZUluZGV4IH0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICQoXCIjZl9UcmFubGlzdFwiKS5odG1sKFRwbGxpc3QoZGF0YS5EYXRhKSk7XHJcbiAgICAgICAgICAgIFBhZ2luYXRvci5QYWdpbmF0b3IoMTAsIFBhZ2VJbmRleCwgZGF0YS5QYWdlU3VtLCBwYWdpbmcpO1xyXG4gICAgICAgICAgICBHZXREZXRhaWwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gR2V0RGV0YWlsKCkge1xyXG4gICAgJChcIltuYW1lPXdvcmtpZF1cIikuY2xpY2soZnVuY3Rpb24gKCkgeyAgIFxyXG4gICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS11c2VyaWRcIik7XHJcbiAgICAgICB2YXIgd29ya2lkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS13b3JraWRcIik7XHJcbiAgICAgICB2YXIgaXNwb2VuID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pc29wZW5cIik7XHJcbiAgICAgICBpZiAoaXNwb2VuPT1cIjFcIikgeyAgICAgICAgICBcclxuICAgICAgICAgICAkKFwiI3RyX1wiICsgaWQpLnNob3coKTtcclxuICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJkYXRhLWlzb3BlblwiLCBcIjJcIilcclxuICAgICAgICAgICBTZXRBbnN3ZXIoaWQsIHdvcmtpZCk7XHJcbiAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICQoXCIjdHJfXCIgKyBpZCkuaGlkZSgpO1xyXG4gICAgICAgICAgICQodGhpcykuYXR0cihcImRhdGEtaXNvcGVuXCIsIFwiMVwiKVxyXG4gICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZXRBbnN3ZXIoaWQsIHdvcmtpZCkge1xyXG4gICAgaWYgKCQoXCIjZl9cIiArIGlkKS5hdHRyKFwiZGF0YS1pc3NldFwiKSA9PSBcIjFcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQucG9zdChcIi9PcmcvVGVhY2hTdXBlcnZpc2lvbi9HZXRXb3JrQW5hbHlzaXNEZXRhaWxcIiwgeyB3b3JraWQ6IHdvcmtpZCwgVXNlcklEOiBpZCB9LCBmdW5jdGlvbiAoZGF0YSkgeyAgICAgIFxyXG4gICAgICAgIHZhciBzdHIgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5EYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLkRhdGFbaV1bXCJyZXN1bHRcIl09PVwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gXCI8c3Bhbj5cIiArIChpICsgMSkgKyBcIjwvc3Bhbj5cIiArICQoXCIjc3VjY2Vzc1wiKS5odG1sKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gXCI8c3Bhbj5cIiArIChpICsgMSkgKyBcIjwvc3Bhbj5cIiArICQoXCIjZXJyb3JcIikuaHRtbCgpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiN0ZF9cIiArIGlkKS5odG1sKHN0cik7XHJcbiAgICAgICAgaWYgKHN0ciE9XCJcIikge1xyXG4gICAgICAgICAgICAkKFwiI2ZfXCIgKyBpZCkuYXR0cihcImRhdGEtaXNzZXRcIiwgXCIxXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIFRyYW5kYXRhLmluaXQoMSk7XHJcbiAgXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmcvVHJhblNjcmlwdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDEzXG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnSW5kZXgvVHJhbicsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaCgkZGF0YSxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPHRyIGNsYXNzPVwiZm9udDEyXCI+IDx0ZD7nrKwnO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUubnVtKTtcbiRvdXQrPSflkI08L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlVzZXJOYW1lKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLnNjb3JlKTtcbiRvdXQrPSc8L3RkPiA8dGQ+PGlucHV0IHR5cGU9XCJidXR0b25cIiBuYW1lPVwid29ya2lkXCIgaWQ9XCJmXyc7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS51c2VyaWQpO1xuJG91dCs9J1wiIGRhdGEtdXNlcmlkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLnVzZXJpZCk7XG4kb3V0Kz0nXCIgZGF0YS13b3JraWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUud29ya2lkKTtcbiRvdXQrPSdcIiBkYXRhLWlzb3Blbj1cIjFcIiBkYXRhLWlzc2V0PVwiMFwiIHZhbHVlPVwi5bGV5byA6K+m5oOFXCIgLz4gPC90ZD4gPC90cj4gPHRyIGlkPVwidHJfJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLnVzZXJpZCk7XG4kb3V0Kz0nXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj4gPHRkIGlkPVwidGRfJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLnVzZXJpZCk7XG4kb3V0Kz0nXCIgY29sc3Bhbj1cIjRcIj48L3RkPiA8L3RyPiAnO1xufSk7XG4kb3V0Kz0nICc7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ0luZGV4L1RyYW4udHBsXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9