webpackJsonp([9,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25);


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

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgIndex/droplist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each($data,function($value,$index){
	$out+=' <option value="';
	$out+=$escape($value.AreaID);
	$out+='">';
	$out+=$escape($value.AreaName);
	$out+='</option> ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	var Paginator = __webpack_require__(8);
	var Tpllist = __webpack_require__(26);
	var droplist = __webpack_require__(11); 
	var para = { SubjectID: 0, StageID: 0, GradeID: 0, data: '', PageIndex: 1, PageSize: 10, ExamName: '', ExamCode: '' };
	
	var TimeTypes = 1;
	
	$(".timer-change a").click(function () {
	    $(".time-on").attr("class", "no");
	    $(this).attr("class", "time-on");
	   
	    var str = $(this).html();  
	    if (str == "日") {
	        TimeTypes = 1;     
	    } else if (str == "周") {
	        TimeTypes = 2;
	    } else if (str == "月") {      
	        TimeTypes = 3;
	    } else {      
	        TimeTypes = 4;
	    }
	
	    setselect(TimeTypes);
	    $("#sch-select").change();
	   
	});
	
	function setselect(TimeTypes) {
	
	    $("#all-time").html("");
	    $.post("/Org/TeachSupervision/GetTimeList", { TimeType:TimeTypes}, function (data) {
	        var options = "";
	        for (var i = 0; i < data.Data.length; i++) {            
	                options += "<option value=" + data.Data[i]["Id"] + ">" + data.Data[i]["Name"] + "</option>";          
	        }
	        $("#all-time").html(options);
	        if (TimeTypes==4) {
	            $("#all-time").val(1);
	        } else {
	            $("#all-time").val(3);
	        }      
	
	    });
	
	
	   
	    
	}
	
	$("#All-Area").change(function () {
	   
	    SchoolList.init();
	});
	$("#sch-select").change(function () {   
	  detaillist.init(1);
	});
	
	$(".search-img").click(function () {
	    
	    if ($(".search-text").hasClass("search-on")) {
	        var sech = $(".search-text").val();
	        detaillist.init(1, sech);
	    } 
	});
	 
	//区域
	var AreaList = {
	    Tpl: '',
	    init: function () {       
	        this.render();
	        this.initBtns();
	    },
	    render: function () {
	        var UserID = "71024327";
	        var OrgID = 1;
	        $.post("/Org/TeachSupervision/GetArealList", { UserID, OrgID}, function (data) {
	            var options = "";
	            for (var i = 0; i < data.Data.length; i++) {
	                options += "<option value='" + data.Data[i]["AreaID"] + "'>" +data.Data[i]["AreaName"] + "</option>";
	            } 
	            $("#All-Area").html(options);
	            $("#All-Area").change();
	            
	        });
	    },
	    initBtns: function () {
	        //todo 绑定事件
	    }
	};
	//学校
	var SchoolList = {
	    Tpl: '',
	    init: function () {
	        
	        this.render();
	        this.initBtns();
	    },
	    render: function () {
	        var areaid = $("#All-Area").val();
	        $.post("/Org/TeachSupervision/GetSchoolList", {AreaID:areaid}, function (data) {
	
	            var options = "";
	            for (var i = 0; i < data.Data.length; i++) {
	                if (data.Data[i]!=null) {
	                    options += "<option value='" + data.Data[i]["OrgID"] + "'>" + data.Data[i]["StructureName"] + "</option>";
	                }               
	            }
	            $("#sch-select").html(options);
	            $("#sch-select").change();
	           
	        });
	    },
	    initBtns: function () {
	        //todo 绑定事件
	    }
	};
	
	//学管列表
	var userlist = {
	    Tpl: '',
	    init: function () {      
	        this.render();
	        this.initBtns();
	    },
	    render: function () {
	
	        $.post("/Org/TeachSupervision/GetUserList", {}, function (data) {
	
	            $("#DetailList").html(droplist(data.Data));
	
	        });
	    },
	    initBtns: function () {
	        //todo 绑定事件
	    }
	};
	var paging = function (page,schname) {
	
	    //loadPaperList(page);
	    detaillist.init(page,'')
	};
	
	//学生明细
	var detaillist = {
	    Tpl: null,
	    init: function (page,schname) {
	        this.render(page,schname);
	        this.initBtns();
	    },
	    render: function (page,schname) {
	        
	        var StudentIDs = "71036336";
	        var TimeType = TimeTypes;
	        var TimeNum = $("#all-time").val();
	        var AreaIDs = $("#All-Area").val();
	        var SchoolIDs = $("#sch-select").val();
	        var ShowType = "1";
	       
	
	        $.post("/Org/TeachSupervision/GetDataInfoList", {
	            StudentIDs,
	            TimeType,
	            TimeNum,
	            AreaIDs,
	            SchoolIDs,
	            ShowType,
	            schname,
	            PageIndex: page,
	            PageSize: para.PageSize
	            }, function (data) {                
	                $("#DetailList").html(Tpllist(data.date.Data));              
	                Paginator.Paginator(para.PageSize, page, data.date.PageSum, paging);
	            });
	    },
	    initBtns: function () {
	        //todo 绑定事件
	
	
	    }
	};
	
	
	
	$(document).ready(function () {
	    //alert("3");
	    AreaList.init();
	    //SchoolList.init();
	    userlist.init();
	    //detaillist.init();
	    setselect(1);
	});
	


/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgIndex/detaillist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each($data,function($value,$index){
	$out+=' <tr class="font12"> <td><i class="area-icon"></i>';
	$out+=$escape($value.Name);
	$out+='</td> <td>';
	$out+=$escape($value.HomeWorkNum);
	$out+='份</td> <td>';
	$out+=$escape($value.PlanIndexNum);
	$out+='份</td> <td>';
	$out+=$escape($value.testPaperNum);
	$out+='份</td> <td><span class="see-btn look black">查看</span></td> </tr> ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2RlcC9QYWdpbmF0b3IuanM/YmU4MSoiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9PcmdJbmRleC9kcm9wbGlzdC50cGw/Y2E1YiIsIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnL1N0dVN1cGVydmlzaW9uaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9PcmdJbmRleC9kZXRhaWxsaXN0LnRwbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQSx5Q0FBd0MsT0FBTywyQkFBMkI7QUFDMUU7O0FBRUE7QUFDQTtBQUNBLHNDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSwwQkFBeUIsaUVBQWlFO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBLGFBQVksZUFBZTtBQUMzQixrREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCO0FBQ3JCLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsR0FBRTtBQUNGLGtDQUFpQztBQUNqQyxJQUFHO0FBQ0gsZUFBYztBQUNkO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGLEVBQUMsRzs7Ozs7OztBQzlFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBaUUsRUFBRSwrQ0FBK0M7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBdUMsUUFBUTtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQSx3Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0Esa0dBQWlHO0FBQ2pHO0FBQ0E7QUFDQSx3SUFBdUk7QUFDdkk7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBdUMsUUFBUTtBQUMvQzs7QUFFQSxrR0FBaUc7QUFDakcsa0lBQWlJO0FBQ2pJO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFtQyxnQkFBZ0I7QUFDbkQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7O0FBR2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQStDOztBQUUvQyxpRUFBZ0UsRUFBRTtBQUNsRTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7QUNuTEE7QUFDQTtBQUNBO0FBQ0EsY0FBYSxtSUFBbUk7QUFDaEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7Ozs7QUNiRDtBQUNBO0FBQ0Esd0M7QUFDQSxhQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QjtBQUNBO0FBQ0EsdUI7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLLHVCO0FBQ0w7QUFDQSxNQUFLLE87QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBQzs7QUFFRDs7QUFFQTtBQUNBLGtEQUFpRCxvQkFBb0I7QUFDckU7QUFDQSx3QkFBdUIsc0JBQXNCLE87QUFDN0MsNkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFU7O0FBRUEsTUFBSzs7Ozs7QUFLTDs7QUFFQTs7QUFFQTtBQUNBLEVBQUM7QUFDRCxzQztBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSx3QjtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdURBQXNELGVBQWU7QUFDckU7QUFDQSw0QkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0EsYztBQUNBO0FBQ0E7O0FBRUEsVUFBUztBQUNULE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLHdEQUF1RCxjQUFjOztBQUVyRTtBQUNBLDRCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBLGtCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVM7QUFDVCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0I7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBLHVEQUFzRDs7QUFFdEQ7O0FBRUEsVUFBUztBQUNULE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsbUI7QUFDYixnRTtBQUNBO0FBQ0EsY0FBYTtBQUNiLE1BQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7Ozs7QUM5TEQ7QUFDQTtBQUNBO0FBQ0EsY0FBYSxtSUFBbUk7QUFDaEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUMsRSIsImZpbGUiOiJTdHVTdXBlcnZpc2lvbmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypUTU9ESlM6e30qL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdGZ1bmN0aW9uIGEoYSwgYikge1xyXG5cdFx0cmV0dXJuICgvc3RyaW5nfGZ1bmN0aW9uLy50ZXN0KHR5cGVvZiBiKSA/IGggOiBnKShhLCBiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYihhLCBjKSB7XHJcblx0XHRyZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSAmJiAoYyA9IHR5cGVvZiBhLCBcIm51bWJlclwiID09PSBjID8gYSArPSBcIlwiIDogYSA9IFwiZnVuY3Rpb25cIiA9PT0gYyA/IGIoYS5jYWxsKGEpKSA6IFwiXCIpLCBhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjKGEpIHtcclxuXHRcdHJldHVybiBsW2FdXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkKGEpIHtcclxuXHRcdHJldHVybiBiKGEpLnJlcGxhY2UoLyYoPyFbXFx3I10rOyl8Wzw+XCInXS9nLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZShhLCBiKSB7XHJcblx0XHRpZiAobShhKSlmb3IgKHZhciBjID0gMCwgZCA9IGEubGVuZ3RoOyBkID4gYzsgYysrKWIuY2FsbChhLCBhW2NdLCBjLCBhKTsgZWxzZSBmb3IgKGMgaW4gYSliLmNhbGwoYSwgYVtjXSwgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoYSwgYikge1xyXG5cdFx0dmFyIGMgPSAvKFxcLylbXlxcL10rXFwxXFwuXFwuXFwxLywgZCA9IChcIi4vXCIgKyBhKS5yZXBsYWNlKC9bXlxcL10rJC8sIFwiXCIpLCBlID0gZCArIGI7XHJcblx0XHRmb3IgKGUgPSBlLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7IGUubWF0Y2goYyk7KWUgPSBlLnJlcGxhY2UoYywgXCIvXCIpO1xyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoYiwgYykge1xyXG5cdFx0dmFyIGQgPSBhLmdldChiKSB8fCBpKHtmaWxlbmFtZTogYiwgbmFtZTogXCJSZW5kZXIgRXJyb3JcIiwgbWVzc2FnZTogXCJUZW1wbGF0ZSBub3QgZm91bmRcIn0pO1xyXG5cdFx0cmV0dXJuIGMgPyBkKGMpIDogZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChhLCBiKSB7XHJcblx0XHRpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYikge1xyXG5cdFx0XHR2YXIgYyA9IGI7XHJcblx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBrKGMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBkID0galthXSA9IGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBiKGMsIGEpICsgXCJcIlxyXG5cdFx0XHR9IGNhdGNoIChkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGkoZCkoKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGQucHJvdG90eXBlID0gYi5wcm90b3R5cGUgPSBuLCBkLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYiArIFwiXCJcclxuXHRcdH0sIGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGkoYSkge1xyXG5cdFx0dmFyIGIgPSBcIntUZW1wbGF0ZSBFcnJvcn1cIiwgYyA9IGEuc3RhY2sgfHwgXCJcIjtcclxuXHRcdGlmIChjKWMgPSBjLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCJcXG5cIik7IGVsc2UgZm9yICh2YXIgZCBpbiBhKWMgKz0gXCI8XCIgKyBkICsgXCI+XFxuXCIgKyBhW2RdICsgXCJcXG5cXG5cIjtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IoYiArIFwiXFxuXFxuXCIgKyBjKSwgYlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGogPSBhLmNhY2hlID0ge30sIGsgPSB0aGlzLlN0cmluZywgbCA9IHtcclxuXHRcdFwiPFwiOiBcIiYjNjA7XCIsXHJcblx0XHRcIj5cIjogXCImIzYyO1wiLFxyXG5cdFx0J1wiJzogXCImIzM0O1wiLFxyXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcclxuXHRcdFwiJlwiOiBcIiYjMzg7XCJcclxuXHR9LCBtID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xyXG5cdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB7fS50b1N0cmluZy5jYWxsKGEpXHJcblx0XHR9LCBuID0gYS51dGlscyA9IHtcclxuXHRcdCRoZWxwZXJzOiB7fSwgJGluY2x1ZGU6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcblx0XHRcdHJldHVybiBhID0gZihjLCBhKSwgZyhhLCBiKVxyXG5cdFx0fSwgJHN0cmluZzogYiwgJGVzY2FwZTogZCwgJGVhY2g6IGVcclxuXHR9LCBvID0gYS5oZWxwZXJzID0gbi4kaGVscGVycztcclxuXHRhLmdldCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRyZXR1cm4galthLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKV1cclxuXHR9LCBhLmhlbHBlciA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRvW2FdID0gYlxyXG5cdH0sIG1vZHVsZS5leHBvcnRzID0gYVxyXG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdG1vZGpzLWxvYWRlci9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDggOSAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMiAyNCAyNiAyNyAzMSAzMiAzMyAzNyAzOFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUGFnaW5hdG9yOiBmdW5jdGlvbiAocGFnZVNpemUsIGN1cnJlbnRQYWdlLCB0b3RhbENvdW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIC8vdG9kbyDnu5Hlrprkuovku7ZcclxuICAgICAgIFxyXG4gICAgICAgIHZhciB0b3RhbFBhZ2VzO1xyXG4gICAgICAgIGlmICh0b3RhbENvdW50ICUgcGFnZVNpemUgPT0gMCkge1xyXG4gICAgICAgICAgICB0b3RhbFBhZ2VzID0gdG90YWxDb3VudCAvIHBhZ2VTaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG90YWxQYWdlcyA9IHBhcnNlSW50KHRvdGFsQ291bnQgLyBwYWdlU2l6ZSkgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGFnZVByZSA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDEpICsgJyBjbGFzcz1cInByZS1wYWdlIGlubGluZSBtcjIwXCI+5LiK5LiA6aG1PC9hPic7XHJcbiAgICAgICAgdmFyIHBhZ2VOZXh0ID0gJzxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgMSkgKyAnIGNsYXNzPVwibmV4dC1wYWdlIGlubGluZVwiPuS4i+S4gOmhtTwvYT4nO1xyXG4gICAgICAgIHZhciBpbmRleFBhZ2UgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCIgY2xhc3M9XCJwcmUtcGFnZSBpbmxpbmUgbXIyMFwiPummlumhtTwvYT48L2xpPic7XHJcblxyXG4gICAgICAgIHZhciBsYXN0UGFnZSA9ICcgPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIHRvdGFsUGFnZXMgKyAnIGNsYXNzPVwicHJlLXBhZ2UgaW5saW5lIG1yMjBcIj4g5pyr6aG1PC9hPic7XHJcbiAgICAgICAgaWYgKHRvdGFsUGFnZXMgPCBwYWdlU2l6ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZ2VQcmUgPSBcIlwiO1xyXG4gICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGluZGV4UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxhc3RQYWdlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgICAgIHBhZ2VQcmUgPSBcIlwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlID49IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxhc3RQYWdlID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0b3RhbENvdW50ID4gMCkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgcGFnZW51bSA9ICc8dWwgY2xhc3M9XCJwYWdlLWJveCBpbmxpbmUgbXIyMFwiPic7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gMSkgLy/nrKzkuIDpobVcclxuICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kKFwiIDxhIGRpc2FibGVkPSdkaXNhYmxlZCcgY2xhc3M9J2NvbEgnPuS4iuS4gOmhtTwvYT4gXCIpOy8v5LiK5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpITnkIbpppbpobXov57mjqVcclxuICAgICAgICAgICAgICAgICAgICAvL+WkhOeQhuS4iuS4gOmhteeahOi/nuaOpVxyXG4gICAgICAgICAgICAgICAgICAgIC8vcGFnZVByZSA9ICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMSkgKyAnPuS4iuS4gOmhtTwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG91dHB1dC5BcHBlbmRGb3JtYXQoXCIgPGEgZGF0YS1wYWdlSW5kZXg9J3swfScgY2xhc3M9J3BhZ2VMaW5rJz7kuIrkuIDpobU8L2E+IFwiLCBjdXJyZW50UGFnZSAtIDEpOy8v5LiK5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWxQYWdlcyA+IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmludCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgNCkvLzRcclxuICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSBpICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDYpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIDcgKyAnPi4uLjwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJz4nICsgdG90YWxQYWdlcyArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAoaSArIDEpICsgJz4nICsgKGkgKyAxKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9Ly80XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFBhZ2UgPj0gNCAmJiBjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgLSAzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BhZ2VudW09cGFnZW51bSsnIDxsaSBkYXRhLW51bT0nKyhjdXJyZW50UGFnZS0zKSsnPjxhIGhyZWY9XCIjXCIgb25jbGljaz1cIlBhZ2luYXRvcignK3BhZ2VTaXplKycsJysoY3VycmVudFBhZ2UtMykrJywnICsgdG90YWxDb3VudCArICcpXCI+Li4uPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT1cIjFcIj4xPC9hPiA8L2xpPic7Ly8yMDE2MDkxMzA5MzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMyA+IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMykgKyAnPi4uLjwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSAzKS8v5Lit6Ze05b2T5YmN6aG1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiBkYXRhLW51bT0nICsgKGN1cnJlbnRQYWdlKSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSA2KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDMpICsgJz4uLi48L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJz4nICsgdG90YWxQYWdlcyArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgaSAtIHBhcnNlSW50KGN1cnJpbnQpKSArICc+JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyBpIC0gcGFyc2VJbnQoY3VycmludCkpICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCI+MTwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGRhdGEtbnVtPScgKyAocGFyc2VJbnQodG90YWxQYWdlcykgLSA2KSArICc+Li4uPC9hPiA8L2xpPic7Ly8yMDE2MDkxMzA5MzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VzIC0gNiArIGkgPT0gY3VycmVudFBhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiAgZGF0YS1udW09JyArIGN1cnJlbnRQYWdlICsgJz4nICsgY3VycmVudFBhZ2UgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHRvdGFsUGFnZXMgLSA2ICsgaSkgKyAnPicgKyAodG90YWxQYWdlcyAtIDYgKyBpKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbFBhZ2VzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09IGkgKyAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgZGF0YS1udW09JyArIGN1cnJlbnRQYWdlICsgJz4nICsgY3VycmVudFBhZ2UgKyAnPC9hPiA8L2xpPic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChpICsgMSkgKyAnPicgKyAoaSArIDEpICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSB0b3RhbFBhZ2VzKSAvL+acgOWQjuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgey8v5aSE55CG5LiL5LiA6aG15ZKM5bC+6aG155qE6ZO+5o6lXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kKFwiIDxhIGRpc2FibGVkPSdkaXNhYmxlZCcgY2xhc3M9J2NvbEgnPuS4i+S4gOmhtTwvYT4gXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzKSB7Ly/lpITnkIbkuIvkuIDpobXlkozlsL7pobXnmoTpk77mjqUgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL291dHB1dC5BcHBlbmRGb3JtYXQoXCIgPGEgZGF0YS1wYWdlaW5kZXg9J3swfScgY2xhc3M9J3BhZ2VMaW5rJz7kuIvkuIDpobU8L2E+IFwiLCBjdXJyZW50UGFnZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgLy8gcGFnZVByZSA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDEpICsgJyBjbGFzcz1cIm5leHQtcGFnZSBpbmxpbmVcIj7kuIvkuIDpobU8L2E+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICc8L3VsPic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBpbmRleFBhZ2UgKyBwYWdlUHJlICsgcGFnZW51bSArIHBhZ2VOZXh0ICsgbGFzdFBhZ2U7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI3BhZ2luYXRpb24gYVwiKS51bmJpbmQoXCJjbGlja1wiKTtcclxuICAgICAgICAkKFwiI3BhZ2luYXRpb24gYVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygkKHRoaXMpLmF0dHIoXCJkYXRhLW51bVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi8vZnVuY3Rpb24gUGFnaW5hdG9yKHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgdG90YWxDb3VudCwgY2FsbGJhY2spIHtcclxuXHJcblxyXG4vL31cclxuXHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvZGVwL1BhZ2luYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiA5IDE0IDE3IDE5IDIwIDIyIDI2IDMxIDMzIDM4XG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnSW5kZXgvZHJvcGxpc3QnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRvdXQ9Jyc7JG91dCs9JyAnO1xuJGVhY2goJGRhdGEsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDxvcHRpb24gdmFsdWU9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQXJlYUlEKTtcbiRvdXQrPSdcIj4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQXJlYU5hbWUpO1xuJG91dCs9Jzwvb3B0aW9uPiAnO1xufSk7XG4kb3V0Kz0nICc7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ0luZGV4L2Ryb3BsaXN0LnRwbFxuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgOVxuICoqLyIsInZhciBQYWdpbmF0b3IgPSByZXF1aXJlKCdQYWdpbmF0b3IuanMnKTtcclxudmFyIFRwbGxpc3QgPSByZXF1aXJlKFwiT3JnSW5kZXgvZGV0YWlsbGlzdC50cGxcIik7XHJcbnZhciBkcm9wbGlzdCA9IHJlcXVpcmUoXCJPcmdJbmRleC9kcm9wbGlzdC50cGxcIik7IFxyXG52YXIgcGFyYSA9IHsgU3ViamVjdElEOiAwLCBTdGFnZUlEOiAwLCBHcmFkZUlEOiAwLCBkYXRhOiAnJywgUGFnZUluZGV4OiAxLCBQYWdlU2l6ZTogMTAsIEV4YW1OYW1lOiAnJywgRXhhbUNvZGU6ICcnIH07XHJcblxyXG52YXIgVGltZVR5cGVzID0gMTtcclxuXHJcbiQoXCIudGltZXItY2hhbmdlIGFcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi50aW1lLW9uXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm5vXCIpO1xyXG4gICAgJCh0aGlzKS5hdHRyKFwiY2xhc3NcIiwgXCJ0aW1lLW9uXCIpO1xyXG4gICBcclxuICAgIHZhciBzdHIgPSAkKHRoaXMpLmh0bWwoKTsgIFxyXG4gICAgaWYgKHN0ciA9PSBcIuaXpVwiKSB7XHJcbiAgICAgICAgVGltZVR5cGVzID0gMTsgICAgIFxyXG4gICAgfSBlbHNlIGlmIChzdHIgPT0gXCLlkahcIikge1xyXG4gICAgICAgIFRpbWVUeXBlcyA9IDI7XHJcbiAgICB9IGVsc2UgaWYgKHN0ciA9PSBcIuaciFwiKSB7ICAgICAgXHJcbiAgICAgICAgVGltZVR5cGVzID0gMztcclxuICAgIH0gZWxzZSB7ICAgICAgXHJcbiAgICAgICAgVGltZVR5cGVzID0gNDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRzZWxlY3QoVGltZVR5cGVzKTtcclxuICAgICQoXCIjc2NoLXNlbGVjdFwiKS5jaGFuZ2UoKTtcclxuICAgXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2V0c2VsZWN0KFRpbWVUeXBlcykge1xyXG5cclxuICAgICQoXCIjYWxsLXRpbWVcIikuaHRtbChcIlwiKTtcclxuICAgICQucG9zdChcIi9PcmcvVGVhY2hTdXBlcnZpc2lvbi9HZXRUaW1lTGlzdFwiLCB7IFRpbWVUeXBlOlRpbWVUeXBlc30sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5EYXRhLmxlbmd0aDsgaSsrKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zICs9IFwiPG9wdGlvbiB2YWx1ZT1cIiArIGRhdGEuRGF0YVtpXVtcIklkXCJdICsgXCI+XCIgKyBkYXRhLkRhdGFbaV1bXCJOYW1lXCJdICsgXCI8L29wdGlvbj5cIjsgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjYWxsLXRpbWVcIikuaHRtbChvcHRpb25zKTtcclxuICAgICAgICBpZiAoVGltZVR5cGVzPT00KSB7XHJcbiAgICAgICAgICAgICQoXCIjYWxsLXRpbWVcIikudmFsKDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjYWxsLXRpbWVcIikudmFsKDMpO1xyXG4gICAgICAgIH0gICAgICBcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICBcclxuICAgIFxyXG59XHJcblxyXG4kKFwiI0FsbC1BcmVhXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgIFxyXG4gICAgU2Nob29sTGlzdC5pbml0KCk7XHJcbn0pO1xyXG4kKFwiI3NjaC1zZWxlY3RcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHsgICBcclxuICBkZXRhaWxsaXN0LmluaXQoMSk7XHJcbn0pO1xyXG5cclxuJChcIi5zZWFyY2gtaW1nXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gICAgaWYgKCQoXCIuc2VhcmNoLXRleHRcIikuaGFzQ2xhc3MoXCJzZWFyY2gtb25cIikpIHtcclxuICAgICAgICB2YXIgc2VjaCA9ICQoXCIuc2VhcmNoLXRleHRcIikudmFsKCk7XHJcbiAgICAgICAgZGV0YWlsbGlzdC5pbml0KDEsIHNlY2gpO1xyXG4gICAgfSBcclxufSk7XHJcbiBcclxuLy/ljLrln59cclxudmFyIEFyZWFMaXN0ID0ge1xyXG4gICAgVHBsOiAnJyxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHsgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRCdG5zKCk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIFVzZXJJRCA9IFwiNzEwMjQzMjdcIjtcclxuICAgICAgICB2YXIgT3JnSUQgPSAxO1xyXG4gICAgICAgICQucG9zdChcIi9PcmcvVGVhY2hTdXBlcnZpc2lvbi9HZXRBcmVhbExpc3RcIiwgeyBVc2VySUQsIE9yZ0lEfSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyArPSBcIjxvcHRpb24gdmFsdWU9J1wiICsgZGF0YS5EYXRhW2ldW1wiQXJlYUlEXCJdICsgXCInPlwiICtkYXRhLkRhdGFbaV1bXCJBcmVhTmFtZVwiXSArIFwiPC9vcHRpb24+XCI7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICQoXCIjQWxsLUFyZWFcIikuaHRtbChvcHRpb25zKTtcclxuICAgICAgICAgICAgJChcIiNBbGwtQXJlYVwiKS5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaW5pdEJ0bnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3RvZG8g57uR5a6a5LqL5Lu2XHJcbiAgICB9XHJcbn07XHJcbi8v5a2m5qChXHJcbnZhciBTY2hvb2xMaXN0ID0ge1xyXG4gICAgVHBsOiAnJyxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdEJ0bnMoKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJlYWlkID0gJChcIiNBbGwtQXJlYVwiKS52YWwoKTtcclxuICAgICAgICAkLnBvc3QoXCIvT3JnL1RlYWNoU3VwZXJ2aXNpb24vR2V0U2Nob29sTGlzdFwiLCB7QXJlYUlEOmFyZWFpZH0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5EYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5EYXRhW2ldIT1udWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyArPSBcIjxvcHRpb24gdmFsdWU9J1wiICsgZGF0YS5EYXRhW2ldW1wiT3JnSURcIl0gKyBcIic+XCIgKyBkYXRhLkRhdGFbaV1bXCJTdHJ1Y3R1cmVOYW1lXCJdICsgXCI8L29wdGlvbj5cIjtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKFwiI3NjaC1zZWxlY3RcIikuaHRtbChvcHRpb25zKTtcclxuICAgICAgICAgICAgJChcIiNzY2gtc2VsZWN0XCIpLmNoYW5nZSgpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGluaXRCdG5zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy90b2RvIOe7keWumuS6i+S7tlxyXG4gICAgfVxyXG59O1xyXG5cclxuLy/lrabnrqHliJfooahcclxudmFyIHVzZXJsaXN0ID0ge1xyXG4gICAgVHBsOiAnJyxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHsgICAgICBcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdEJ0bnMoKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgJC5wb3N0KFwiL09yZy9UZWFjaFN1cGVydmlzaW9uL0dldFVzZXJMaXN0XCIsIHt9LCBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgJChcIiNEZXRhaWxMaXN0XCIpLmh0bWwoZHJvcGxpc3QoZGF0YS5EYXRhKSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGluaXRCdG5zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy90b2RvIOe7keWumuS6i+S7tlxyXG4gICAgfVxyXG59O1xyXG52YXIgcGFnaW5nID0gZnVuY3Rpb24gKHBhZ2Usc2NobmFtZSkge1xyXG5cclxuICAgIC8vbG9hZFBhcGVyTGlzdChwYWdlKTtcclxuICAgIGRldGFpbGxpc3QuaW5pdChwYWdlLCcnKVxyXG59O1xyXG5cclxuLy/lrabnlJ/mmI7nu4ZcclxudmFyIGRldGFpbGxpc3QgPSB7XHJcbiAgICBUcGw6IG51bGwsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAocGFnZSxzY2huYW1lKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIocGFnZSxzY2huYW1lKTtcclxuICAgICAgICB0aGlzLmluaXRCdG5zKCk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAocGFnZSxzY2huYW1lKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIFN0dWRlbnRJRHMgPSBcIjcxMDM2MzM2XCI7XHJcbiAgICAgICAgdmFyIFRpbWVUeXBlID0gVGltZVR5cGVzO1xyXG4gICAgICAgIHZhciBUaW1lTnVtID0gJChcIiNhbGwtdGltZVwiKS52YWwoKTtcclxuICAgICAgICB2YXIgQXJlYUlEcyA9ICQoXCIjQWxsLUFyZWFcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIFNjaG9vbElEcyA9ICQoXCIjc2NoLXNlbGVjdFwiKS52YWwoKTtcclxuICAgICAgICB2YXIgU2hvd1R5cGUgPSBcIjFcIjtcclxuICAgICAgIFxyXG5cclxuICAgICAgICAkLnBvc3QoXCIvT3JnL1RlYWNoU3VwZXJ2aXNpb24vR2V0RGF0YUluZm9MaXN0XCIsIHtcclxuICAgICAgICAgICAgU3R1ZGVudElEcyxcclxuICAgICAgICAgICAgVGltZVR5cGUsXHJcbiAgICAgICAgICAgIFRpbWVOdW0sXHJcbiAgICAgICAgICAgIEFyZWFJRHMsXHJcbiAgICAgICAgICAgIFNjaG9vbElEcyxcclxuICAgICAgICAgICAgU2hvd1R5cGUsXHJcbiAgICAgICAgICAgIHNjaG5hbWUsXHJcbiAgICAgICAgICAgIFBhZ2VJbmRleDogcGFnZSxcclxuICAgICAgICAgICAgUGFnZVNpemU6IHBhcmEuUGFnZVNpemVcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGRhdGEpIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkKFwiI0RldGFpbExpc3RcIikuaHRtbChUcGxsaXN0KGRhdGEuZGF0ZS5EYXRhKSk7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFBhZ2luYXRvci5QYWdpbmF0b3IocGFyYS5QYWdlU2l6ZSwgcGFnZSwgZGF0YS5kYXRlLlBhZ2VTdW0sIHBhZ2luZyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGluaXRCdG5zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy90b2RvIOe7keWumuS6i+S7tlxyXG5cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIC8vYWxlcnQoXCIzXCIpO1xyXG4gICAgQXJlYUxpc3QuaW5pdCgpO1xyXG4gICAgLy9TY2hvb2xMaXN0LmluaXQoKTtcclxuICAgIHVzZXJsaXN0LmluaXQoKTtcclxuICAgIC8vZGV0YWlsbGlzdC5pbml0KCk7XHJcbiAgICBzZXRzZWxlY3QoMSk7XHJcbn0pO1xyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmcvU3R1U3VwZXJ2aXNpb25pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDlcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmdJbmRleC9kZXRhaWxsaXN0JyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlYWNoPSR1dGlscy4kZWFjaCwkdmFsdWU9JGRhdGEuJHZhbHVlLCRpbmRleD0kZGF0YS4kaW5kZXgsJGVzY2FwZT0kdXRpbHMuJGVzY2FwZSwkb3V0PScnOyRvdXQrPScgJztcbiRlYWNoKCRkYXRhLGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8dHIgY2xhc3M9XCJmb250MTJcIj4gPHRkPjxpIGNsYXNzPVwiYXJlYS1pY29uXCI+PC9pPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5OYW1lKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkhvbWVXb3JrTnVtKTtcbiRvdXQrPSfku708L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlBsYW5JbmRleE51bSk7XG4kb3V0Kz0n5Lu9PC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS50ZXN0UGFwZXJOdW0pO1xuJG91dCs9J+S7vTwvdGQ+IDx0ZD48c3BhbiBjbGFzcz1cInNlZS1idG4gbG9vayBibGFja1wiPuafpeecizwvc3Bhbj48L3RkPiA8L3RyPiAnO1xufSk7XG4kb3V0Kz0nICc7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ0luZGV4L2RldGFpbGxpc3QudHBsXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gOVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=