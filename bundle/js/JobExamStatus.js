webpackJsonp([2,41],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);


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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var Paginator = __webpack_require__(8);
	var Tpllist = __webpack_require__(9);
	var planlist = __webpack_require__(10);
	
	var droplist = __webpack_require__(11);
	var para = { SubjectID: 0, StageID: 0, GradeID: 0, data: '', PageIndex: 1, PageSize: 10, ExamName: '', ExamCode: '' };
	__webpack_require__(12);
	var types = 1;//1作业考试，2教案
	
	var paging = function (page) {  
	    jobexamlist.init(page)
	};
	
	
	var jobexamlist = {
	    Tpl: '',
	    init: function (PageIndex) {
	        this.render(PageIndex);
	    },
	    render: function (PageIndex) {
	        var UserID = 71010084;
	        $.post("/Org/TeachSupervision/GetOnlineWorks", {
	            UserID,
	            PageIndex
	        }, function (data) {
	            $("#jobList").html(Tpllist(data.Data));
	            Paginator.Paginator(10, PageIndex, data.PageSum, paging);
	            $("#f_ShowNum").html(data.PageSum);
	            $("#nametype").html("份作业");
	            }
	        );
	    }
	}
	
	//教案
	var planexamlist = {
	    Tpl: '',
	    init: function (PageIndex) {
	        this.render(PageIndex);
	    },
	    render: function (PageIndex) {
	        var CreateID = 71010084;
	        $.post("/Org/TeachSupervision/GetPlanIndexList", {
	            CreateID,
	            PageIndex
	        }, function (data) {
	            $("#planList").html(planlist(data.Data));
	            Paginator.Paginator(10, PageIndex, data.PageSum, paging);
	            $("#f_ShowNum").html(data.PageSum);
	            $("#nametype").html( "份教案");
	            
	        }
	        );
	    }
	}
	
	function loads() {
	    $("#f_job").click(function () {
	       
	        $("#f_job").removeClass().addClass("title-nav title-nav-on");
	        $("#f_plan").removeClass().addClass("title-nav ");
	        if (types==2) {
	            types = 1;//1作业考试，2教案
	            $("#f_planlist").hide();
	            $("#f_joblist").show();
	            jobexamlist.init(1);
	        }
	       
	    });
	    $("#f_plan").click(function () {
	        $("#f_job").removeClass().addClass("title-nav");
	        $("#f_plan").removeClass().addClass("title-nav title-nav-on");
	        if (types == 1) {
	            types = 2;//1作业考试，2教案
	            $("#f_planlist").show();
	            $("#f_joblist").hide();
	            planexamlist.init();
	        }       
	    });
	}
	
	
	$(document).ready(function () {
	
	    loads();
	
	  
	    //jobexamlist.init(1);
	    jobexamlist.init(1);
	});
	


/***/ },
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgIndex/JobExamstatus',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each($data,function($value,$index){
	$out+=' <tr class="font12"> <td>';
	$out+=$escape($value.workname);
	$out+='</td> <td>';
	$out+=$escape($helpers. dateFormat($value.createtime ,  "MM月dd日 hh:mm"));
	$out+='</td> <td>';
	$out+=$escape($helpers. dateFormat($value.endtime ,  "MM月dd日 hh:mm"));
	$out+='</td> <td>';
	$out+=$escape($value.postnum);
	$out+='/';
	$out+=$escape($value.usernum);
	$out+='</td> ';
	if($value.state==0){
	$out+=' <td>待提交</td> ';
	}else{
	$out+=' ';
	if($value.state==1){
	$out+=' <td>待批改</td> ';
	}else{
	$out+=' <td>已批改</td> ';
	}
	$out+=' ';
	}
	$out+=' <td><span class="see-btn look black">分析</span></td> </tr> ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgIndex/planlist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each($data,function($value,$index){
	$out+=' <tr class="font12"> <td>';
	$out+=$escape($value.f_titlename);
	$out+='</td> <td>';
	$out+=$escape($value.f_createby);
	$out+='</td> <td>';
	$out+=$escape($value.f_readnumber);
	$out+='</td> <td>';
	$out+=$escape($value.f_applyrange);
	$out+='</td> <td>';
	$out+=$escape($helpers. dateFormat($value.f_lastupdatetime ,  "yyyy/MM/dd"));
	$out+='</td> </tr> ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ },
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by humorHan on 2016/5/26.
	 */
	var art = __webpack_require__(3);
	var u=__webpack_require__(13);
	
	//时间戳转化方法
	art.helper('dateFormat', function (date, format) {
	    date = new Date(parseInt(date.replace("/Date(", "").replace(")/", ""), 10));
	    date = new Date(date);
	    var map = {
	        "Y": date.getYear(),
	        "M": date.getMonth() + 1, //月份
	        "d": date.getDate(), //日
	        "h": date.getHours(), //小时
	        "m": date.getMinutes(), //分
	        "s": date.getSeconds(), //秒
	        "q": Math.floor((date.getMonth() + 3) / 3), //季度
	        "S": date.getMilliseconds() //毫秒
	    };
	    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
	        var v = map[t];
	        if (v !== undefined) {
	            if (all.length > 1) {
	                v = '0' + v;
	                v = v.substr(v.length - 2);
	            }
	            return v;
	        }
	        else if (t === 'y') {
	            return (date.getFullYear() + '').substr(4 - all.length);
	        }
	        return all;
	    });
	    return format;
	});
	//获取科目
	art.helper('getSubjectName',function(subject){
	    return u.getSubjectName(subject);
	});
	//获取阶段
	art.helper('getStageStr',function(stage){
	        return u.getStageStr(stage);
	});
	//转码 正确答案
	art.helper('unEscape', function(answer){
	    if (!answer){
	        return "未作答";
	    } else {
	        return unescape(answer);
	    }
	});
	//性别转换
	art.helper('sextran', function (s) {
	    return u.sextran(s);
	});
	
	//学制转换
	art.helper('edutypetran', function (s) {
	    return u.edutypetran(s);
	});

/***/ },
/* 13 */
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

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2pzL09yZy9Kb2JFeGFtU3RhdHVzLmpzIiwid2VicGFjazovLy8uL09yZy9kZXAvUGFnaW5hdG9yLmpzP2JlODEiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9PcmdJbmRleC9Kb2JFeGFtc3RhdHVzLnRwbCIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZ0luZGV4L3BsYW5saXN0LnRwbCIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZ0luZGV4L2Ryb3BsaXN0LnRwbCIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL3RlbXBsYXRlLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL3V0aWwvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQSx5Q0FBd0MsT0FBTywyQkFBMkI7QUFDMUU7O0FBRUE7QUFDQTtBQUNBLHNDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSwwQkFBeUIsaUVBQWlFO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBLGFBQVksZUFBZTtBQUMzQixrREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCO0FBQ3JCLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsR0FBRTtBQUNGLGtDQUFpQztBQUNqQyxJQUFHO0FBQ0gsZUFBYztBQUNkO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEciLCJmaWxlIjoiSm9iRXhhbVN0YXR1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qVE1PREpTOnt9Ki9cclxuIWZ1bmN0aW9uICgpIHtcclxuXHRmdW5jdGlvbiBhKGEsIGIpIHtcclxuXHRcdHJldHVybiAoL3N0cmluZ3xmdW5jdGlvbi8udGVzdCh0eXBlb2YgYikgPyBoIDogZykoYSwgYilcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGIoYSwgYykge1xyXG5cdFx0cmV0dXJuIFwic3RyaW5nXCIgIT0gdHlwZW9mIGEgJiYgKGMgPSB0eXBlb2YgYSwgXCJudW1iZXJcIiA9PT0gYyA/IGEgKz0gXCJcIiA6IGEgPSBcImZ1bmN0aW9uXCIgPT09IGMgPyBiKGEuY2FsbChhKSkgOiBcIlwiKSwgYVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYyhhKSB7XHJcblx0XHRyZXR1cm4gbFthXVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZChhKSB7XHJcblx0XHRyZXR1cm4gYihhKS5yZXBsYWNlKC8mKD8hW1xcdyNdKzspfFs8PlwiJ10vZywgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGUoYSwgYikge1xyXG5cdFx0aWYgKG0oYSkpZm9yICh2YXIgYyA9IDAsIGQgPSBhLmxlbmd0aDsgZCA+IGM7IGMrKyliLmNhbGwoYSwgYVtjXSwgYywgYSk7IGVsc2UgZm9yIChjIGluIGEpYi5jYWxsKGEsIGFbY10sIGMpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmKGEsIGIpIHtcclxuXHRcdHZhciBjID0gLyhcXC8pW15cXC9dK1xcMVxcLlxcLlxcMS8sIGQgPSAoXCIuL1wiICsgYSkucmVwbGFjZSgvW15cXC9dKyQvLCBcIlwiKSwgZSA9IGQgKyBiO1xyXG5cdFx0Zm9yIChlID0gZS5yZXBsYWNlKC9cXC9cXC5cXC8vZywgXCIvXCIpOyBlLm1hdGNoKGMpOyllID0gZS5yZXBsYWNlKGMsIFwiL1wiKTtcclxuXHRcdHJldHVybiBlXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnKGIsIGMpIHtcclxuXHRcdHZhciBkID0gYS5nZXQoYikgfHwgaSh7ZmlsZW5hbWU6IGIsIG5hbWU6IFwiUmVuZGVyIEVycm9yXCIsIG1lc3NhZ2U6IFwiVGVtcGxhdGUgbm90IGZvdW5kXCJ9KTtcclxuXHRcdHJldHVybiBjID8gZChjKSA6IGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGgoYSwgYikge1xyXG5cdFx0aWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGIpIHtcclxuXHRcdFx0dmFyIGMgPSBiO1xyXG5cdFx0XHRiID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgayhjKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR2YXIgZCA9IGpbYV0gPSBmdW5jdGlvbiAoYykge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgYihjLCBhKSArIFwiXCJcclxuXHRcdFx0fSBjYXRjaCAoZCkge1xyXG5cdFx0XHRcdHJldHVybiBpKGQpKClcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBkLnByb3RvdHlwZSA9IGIucHJvdG90eXBlID0gbiwgZC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIGIgKyBcIlwiXHJcblx0XHR9LCBkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpKGEpIHtcclxuXHRcdHZhciBiID0gXCJ7VGVtcGxhdGUgRXJyb3J9XCIsIGMgPSBhLnN0YWNrIHx8IFwiXCI7XHJcblx0XHRpZiAoYyljID0gYy5zcGxpdChcIlxcblwiKS5zbGljZSgwLCAyKS5qb2luKFwiXFxuXCIpOyBlbHNlIGZvciAodmFyIGQgaW4gYSljICs9IFwiPFwiICsgZCArIFwiPlxcblwiICsgYVtkXSArIFwiXFxuXFxuXCI7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gXCJvYmplY3RcIiA9PSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKGIgKyBcIlxcblxcblwiICsgYyksIGJcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBqID0gYS5jYWNoZSA9IHt9LCBrID0gdGhpcy5TdHJpbmcsIGwgPSB7XHJcblx0XHRcIjxcIjogXCImIzYwO1wiLFxyXG5cdFx0XCI+XCI6IFwiJiM2MjtcIixcclxuXHRcdCdcIic6IFwiJiMzNDtcIixcclxuXHRcdFwiJ1wiOiBcIiYjMzk7XCIsXHJcblx0XHRcIiZcIjogXCImIzM4O1wiXHJcblx0fSwgbSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGEpIHtcclxuXHRcdFx0cmV0dXJuIFwiW29iamVjdCBBcnJheV1cIiA9PT0ge30udG9TdHJpbmcuY2FsbChhKVxyXG5cdFx0fSwgbiA9IGEudXRpbHMgPSB7XHJcblx0XHQkaGVscGVyczoge30sICRpbmNsdWRlOiBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG5cdFx0XHRyZXR1cm4gYSA9IGYoYywgYSksIGcoYSwgYilcclxuXHRcdH0sICRzdHJpbmc6IGIsICRlc2NhcGU6IGQsICRlYWNoOiBlXHJcblx0fSwgbyA9IGEuaGVscGVycyA9IG4uJGhlbHBlcnM7XHJcblx0YS5nZXQgPSBmdW5jdGlvbiAoYSkge1xyXG5cdFx0cmV0dXJuIGpbYS5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIildXHJcblx0fSwgYS5oZWxwZXIgPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0b1thXSA9IGJcclxuXHR9LCBtb2R1bGUuZXhwb3J0cyA9IGFcclxufSgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA4IDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIxIDIzIDI1IDI2IDI3IDMxIDMyIDMzIDM3IDM4XG4gKiovIiwidmFyIFBhZ2luYXRvciA9IHJlcXVpcmUoJ1BhZ2luYXRvci5qcycpO1xyXG52YXIgVHBsbGlzdCA9IHJlcXVpcmUoXCJPcmdJbmRleC9Kb2JFeGFtc3RhdHVzLnRwbFwiKTtcclxudmFyIHBsYW5saXN0ID0gcmVxdWlyZShcIk9yZ0luZGV4L3BsYW5saXN0LnRwbFwiKTtcclxuXHJcbnZhciBkcm9wbGlzdCA9IHJlcXVpcmUoXCJPcmdJbmRleC9kcm9wbGlzdC50cGxcIik7XHJcbnZhciBwYXJhID0geyBTdWJqZWN0SUQ6IDAsIFN0YWdlSUQ6IDAsIEdyYWRlSUQ6IDAsIGRhdGE6ICcnLCBQYWdlSW5kZXg6IDEsIFBhZ2VTaXplOiAxMCwgRXhhbU5hbWU6ICcnLCBFeGFtQ29kZTogJycgfTtcclxucmVxdWlyZShcInRlbXBsYXRlLWhlbHBlci5qc1wiKTtcclxudmFyIHR5cGVzID0gMTsvLzHkvZzkuJrogIPor5XvvIwy5pWZ5qGIXHJcblxyXG52YXIgcGFnaW5nID0gZnVuY3Rpb24gKHBhZ2UpIHsgIFxyXG4gICAgam9iZXhhbWxpc3QuaW5pdChwYWdlKVxyXG59O1xyXG5cclxuXHJcbnZhciBqb2JleGFtbGlzdCA9IHtcclxuICAgIFRwbDogJycsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoUGFnZUluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoUGFnZUluZGV4KTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uIChQYWdlSW5kZXgpIHtcclxuICAgICAgICB2YXIgVXNlcklEID0gNzEwMTAwODQ7XHJcbiAgICAgICAgJC5wb3N0KFwiL09yZy9UZWFjaFN1cGVydmlzaW9uL0dldE9ubGluZVdvcmtzXCIsIHtcclxuICAgICAgICAgICAgVXNlcklELFxyXG4gICAgICAgICAgICBQYWdlSW5kZXhcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAkKFwiI2pvYkxpc3RcIikuaHRtbChUcGxsaXN0KGRhdGEuRGF0YSkpO1xyXG4gICAgICAgICAgICBQYWdpbmF0b3IuUGFnaW5hdG9yKDEwLCBQYWdlSW5kZXgsIGRhdGEuUGFnZVN1bSwgcGFnaW5nKTtcclxuICAgICAgICAgICAgJChcIiNmX1Nob3dOdW1cIikuaHRtbChkYXRhLlBhZ2VTdW0pO1xyXG4gICAgICAgICAgICAkKFwiI25hbWV0eXBlXCIpLmh0bWwoXCLku73kvZzkuJpcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+aVmeahiFxyXG52YXIgcGxhbmV4YW1saXN0ID0ge1xyXG4gICAgVHBsOiAnJyxcclxuICAgIGluaXQ6IGZ1bmN0aW9uIChQYWdlSW5kZXgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcihQYWdlSW5kZXgpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKFBhZ2VJbmRleCkge1xyXG4gICAgICAgIHZhciBDcmVhdGVJRCA9IDcxMDEwMDg0O1xyXG4gICAgICAgICQucG9zdChcIi9PcmcvVGVhY2hTdXBlcnZpc2lvbi9HZXRQbGFuSW5kZXhMaXN0XCIsIHtcclxuICAgICAgICAgICAgQ3JlYXRlSUQsXHJcbiAgICAgICAgICAgIFBhZ2VJbmRleFxyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICQoXCIjcGxhbkxpc3RcIikuaHRtbChwbGFubGlzdChkYXRhLkRhdGEpKTtcclxuICAgICAgICAgICAgUGFnaW5hdG9yLlBhZ2luYXRvcigxMCwgUGFnZUluZGV4LCBkYXRhLlBhZ2VTdW0sIHBhZ2luZyk7XHJcbiAgICAgICAgICAgICQoXCIjZl9TaG93TnVtXCIpLmh0bWwoZGF0YS5QYWdlU3VtKTtcclxuICAgICAgICAgICAgJChcIiNuYW1ldHlwZVwiKS5odG1sKCBcIuS7veaVmeahiFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRzKCkge1xyXG4gICAgJChcIiNmX2pvYlwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICBcclxuICAgICAgICAkKFwiI2Zfam9iXCIpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoXCJ0aXRsZS1uYXYgdGl0bGUtbmF2LW9uXCIpO1xyXG4gICAgICAgICQoXCIjZl9wbGFuXCIpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoXCJ0aXRsZS1uYXYgXCIpO1xyXG4gICAgICAgIGlmICh0eXBlcz09Mikge1xyXG4gICAgICAgICAgICB0eXBlcyA9IDE7Ly8x5L2c5Lia6ICD6K+V77yMMuaVmeahiFxyXG4gICAgICAgICAgICAkKFwiI2ZfcGxhbmxpc3RcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI2Zfam9ibGlzdFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIGpvYmV4YW1saXN0LmluaXQoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9KTtcclxuICAgICQoXCIjZl9wbGFuXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI2Zfam9iXCIpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoXCJ0aXRsZS1uYXZcIik7XHJcbiAgICAgICAgJChcIiNmX3BsYW5cIikucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcyhcInRpdGxlLW5hdiB0aXRsZS1uYXYtb25cIik7XHJcbiAgICAgICAgaWYgKHR5cGVzID09IDEpIHtcclxuICAgICAgICAgICAgdHlwZXMgPSAyOy8vMeS9nOS4muiAg+ivle+8jDLmlZnmoYhcclxuICAgICAgICAgICAgJChcIiNmX3BsYW5saXN0XCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIiNmX2pvYmxpc3RcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICBwbGFuZXhhbWxpc3QuaW5pdCgpO1xyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBsb2FkcygpO1xyXG5cclxuICBcclxuICAgIC8vam9iZXhhbWxpc3QuaW5pdCgxKTtcclxuICAgIGpvYmV4YW1saXN0LmluaXQoMSk7XHJcbn0pO1xyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmcvSm9iRXhhbVN0YXR1cy5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUGFnaW5hdG9yOiBmdW5jdGlvbiAocGFnZVNpemUsIGN1cnJlbnRQYWdlLCB0b3RhbENvdW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIC8vdG9kbyDnu5Hlrprkuovku7ZcclxuICAgICAgIFxyXG4gICAgICAgIHZhciB0b3RhbFBhZ2VzO1xyXG4gICAgICAgIGlmICh0b3RhbENvdW50ICUgcGFnZVNpemUgPT0gMCkge1xyXG4gICAgICAgICAgICB0b3RhbFBhZ2VzID0gdG90YWxDb3VudCAvIHBhZ2VTaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG90YWxQYWdlcyA9IHBhcnNlSW50KHRvdGFsQ291bnQgLyBwYWdlU2l6ZSkgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGFnZVByZSA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDEpICsgJyBjbGFzcz1cInByZS1wYWdlIGlubGluZSBtcjIwXCI+5LiK5LiA6aG1PC9hPic7XHJcbiAgICAgICAgdmFyIHBhZ2VOZXh0ID0gJzxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgMSkgKyAnIGNsYXNzPVwibmV4dC1wYWdlIGlubGluZVwiPuS4i+S4gOmhtTwvYT4nO1xyXG4gICAgICAgIHZhciBpbmRleFBhZ2UgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCIgY2xhc3M9XCJwcmUtcGFnZSBpbmxpbmUgbXIyMFwiPummlumhtTwvYT48L2xpPic7XHJcblxyXG4gICAgICAgIHZhciBsYXN0UGFnZSA9ICcgPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIHRvdGFsUGFnZXMgKyAnIGNsYXNzPVwicHJlLXBhZ2UgaW5saW5lIG1yMjBcIj4g5pyr6aG1PC9hPic7XHJcbiAgICAgICAgaWYgKHRvdGFsUGFnZXMgPCBwYWdlU2l6ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZ2VQcmUgPSBcIlwiO1xyXG4gICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGluZGV4UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxhc3RQYWdlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgICAgIHBhZ2VQcmUgPSBcIlwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlID49IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxhc3RQYWdlID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0b3RhbENvdW50ID4gMCkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgcGFnZW51bSA9ICc8dWwgY2xhc3M9XCJwYWdlLWJveCBpbmxpbmUgbXIyMFwiPic7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gMSkgLy/nrKzkuIDpobVcclxuICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kKFwiIDxhIGRpc2FibGVkPSdkaXNhYmxlZCcgY2xhc3M9J2NvbEgnPuS4iuS4gOmhtTwvYT4gXCIpOy8v5LiK5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpITnkIbpppbpobXov57mjqVcclxuICAgICAgICAgICAgICAgICAgICAvL+WkhOeQhuS4iuS4gOmhteeahOi/nuaOpVxyXG4gICAgICAgICAgICAgICAgICAgIC8vcGFnZVByZSA9ICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMSkgKyAnPuS4iuS4gOmhtTwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG91dHB1dC5BcHBlbmRGb3JtYXQoXCIgPGEgZGF0YS1wYWdlSW5kZXg9J3swfScgY2xhc3M9J3BhZ2VMaW5rJz7kuIrkuIDpobU8L2E+IFwiLCBjdXJyZW50UGFnZSAtIDEpOy8v5LiK5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWxQYWdlcyA+IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmludCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgNCkvLzRcclxuICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSBpICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDYpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIDcgKyAnPi4uLjwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJz4nICsgdG90YWxQYWdlcyArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAoaSArIDEpICsgJz4nICsgKGkgKyAxKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9Ly80XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFBhZ2UgPj0gNCAmJiBjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgLSAzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BhZ2VudW09cGFnZW51bSsnIDxsaSBkYXRhLW51bT0nKyhjdXJyZW50UGFnZS0zKSsnPjxhIGhyZWY9XCIjXCIgb25jbGljaz1cIlBhZ2luYXRvcignK3BhZ2VTaXplKycsJysoY3VycmVudFBhZ2UtMykrJywnICsgdG90YWxDb3VudCArICcpXCI+Li4uPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT1cIjFcIj4xPC9hPiA8L2xpPic7Ly8yMDE2MDkxMzA5MzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMyA+IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMykgKyAnPi4uLjwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSAzKS8v5Lit6Ze05b2T5YmN6aG1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiBkYXRhLW51bT0nICsgKGN1cnJlbnRQYWdlKSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSA2KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDMpICsgJz4uLi48L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJz4nICsgdG90YWxQYWdlcyArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgaSAtIHBhcnNlSW50KGN1cnJpbnQpKSArICc+JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyBpIC0gcGFyc2VJbnQoY3VycmludCkpICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCI+MTwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGRhdGEtbnVtPScgKyAocGFyc2VJbnQodG90YWxQYWdlcykgLSA2KSArICc+Li4uPC9hPiA8L2xpPic7Ly8yMDE2MDkxMzA5MzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VzIC0gNiArIGkgPT0gY3VycmVudFBhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiAgZGF0YS1udW09JyArIGN1cnJlbnRQYWdlICsgJz4nICsgY3VycmVudFBhZ2UgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHRvdGFsUGFnZXMgLSA2ICsgaSkgKyAnPicgKyAodG90YWxQYWdlcyAtIDYgKyBpKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbFBhZ2VzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09IGkgKyAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgZGF0YS1udW09JyArIGN1cnJlbnRQYWdlICsgJz4nICsgY3VycmVudFBhZ2UgKyAnPC9hPiA8L2xpPic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChpICsgMSkgKyAnPicgKyAoaSArIDEpICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSB0b3RhbFBhZ2VzKSAvL+acgOWQjuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgey8v5aSE55CG5LiL5LiA6aG15ZKM5bC+6aG155qE6ZO+5o6lXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kKFwiIDxhIGRpc2FibGVkPSdkaXNhYmxlZCcgY2xhc3M9J2NvbEgnPuS4i+S4gOmhtTwvYT4gXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzKSB7Ly/lpITnkIbkuIvkuIDpobXlkozlsL7pobXnmoTpk77mjqUgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL291dHB1dC5BcHBlbmRGb3JtYXQoXCIgPGEgZGF0YS1wYWdlaW5kZXg9J3swfScgY2xhc3M9J3BhZ2VMaW5rJz7kuIvkuIDpobU8L2E+IFwiLCBjdXJyZW50UGFnZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgLy8gcGFnZVByZSA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDEpICsgJyBjbGFzcz1cIm5leHQtcGFnZSBpbmxpbmVcIj7kuIvkuIDpobU8L2E+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICc8L3VsPic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBpbmRleFBhZ2UgKyBwYWdlUHJlICsgcGFnZW51bSArIHBhZ2VOZXh0ICsgbGFzdFBhZ2U7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI3BhZ2luYXRpb24gYVwiKS51bmJpbmQoXCJjbGlja1wiKTtcclxuICAgICAgICAkKFwiI3BhZ2luYXRpb24gYVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygkKHRoaXMpLmF0dHIoXCJkYXRhLW51bVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi8vZnVuY3Rpb24gUGFnaW5hdG9yKHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgdG90YWxDb3VudCwgY2FsbGJhY2spIHtcclxuXHJcblxyXG4vL31cclxuXHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvZGVwL1BhZ2luYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAxMyAxNiAxOCAxOSAyMSAyNiAyNyAzMSAzMyAzOFxuICoqLyIsInZhciB0ZW1wbGF0ZT1yZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdPcmcvdHBsL09yZ0luZGV4L0pvYkV4YW1zdGF0dXMnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRvdXQ9Jyc7JG91dCs9JyAnO1xuJGVhY2goJGRhdGEsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDx0ciBjbGFzcz1cImZvbnQxMlwiPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLndvcmtuYW1lKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJGhlbHBlcnMuIGRhdGVGb3JtYXQoJHZhbHVlLmNyZWF0ZXRpbWUgLCAgXCJNTeaciGRk5pelIGhoOm1tXCIpKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJGhlbHBlcnMuIGRhdGVGb3JtYXQoJHZhbHVlLmVuZHRpbWUgLCAgXCJNTeaciGRk5pelIGhoOm1tXCIpKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLnBvc3RudW0pO1xuJG91dCs9Jy8nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUudXNlcm51bSk7XG4kb3V0Kz0nPC90ZD4gJztcbmlmKCR2YWx1ZS5zdGF0ZT09MCl7XG4kb3V0Kz0nIDx0ZD7lvoXmj5DkuqQ8L3RkPiAnO1xufWVsc2V7XG4kb3V0Kz0nICc7XG5pZigkdmFsdWUuc3RhdGU9PTEpe1xuJG91dCs9JyA8dGQ+5b6F5om55pS5PC90ZD4gJztcbn1lbHNle1xuJG91dCs9JyA8dGQ+5bey5om55pS5PC90ZD4gJztcbn1cbiRvdXQrPScgJztcbn1cbiRvdXQrPScgPHRkPjxzcGFuIGNsYXNzPVwic2VlLWJ0biBsb29rIGJsYWNrXCI+5YiG5p6QPC9zcGFuPjwvdGQ+IDwvdHI+ICc7XG59KTtcbiRvdXQrPScgJztcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy90cGwvT3JnSW5kZXgvSm9iRXhhbXN0YXR1cy50cGxcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmdJbmRleC9wbGFubGlzdCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaCgkZGF0YSxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPHRyIGNsYXNzPVwiZm9udDEyXCI+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuZl90aXRsZW5hbWUpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuZl9jcmVhdGVieSk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5mX3JlYWRudW1iZXIpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuZl9hcHBseXJhbmdlKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJGhlbHBlcnMuIGRhdGVGb3JtYXQoJHZhbHVlLmZfbGFzdHVwZGF0ZXRpbWUgLCAgXCJ5eXl5L01NL2RkXCIpKTtcbiRvdXQrPSc8L3RkPiA8L3RyPiAnO1xufSk7XG4kb3V0Kz0nICc7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ0luZGV4L3BsYW5saXN0LnRwbFxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmdJbmRleC9kcm9wbGlzdCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaCgkZGF0YSxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPG9wdGlvbiB2YWx1ZT1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5BcmVhSUQpO1xuJG91dCs9J1wiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5BcmVhTmFtZSk7XG4kb3V0Kz0nPC9vcHRpb24+ICc7XG59KTtcbiRvdXQrPScgJztcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy90cGwvT3JnSW5kZXgvZHJvcGxpc3QudHBsXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGh1bW9ySGFuIG9uIDIwMTYvNS8yNi5cclxuICovXHJcbnZhciBhcnQgPSByZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcclxudmFyIHU9cmVxdWlyZShcInV0aWwvdXRpbFwiKTtcclxuXHJcbi8v5pe26Ze05oiz6L2s5YyW5pa55rOVXHJcbmFydC5oZWxwZXIoJ2RhdGVGb3JtYXQnLCBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0KSB7XHJcbiAgICBkYXRlID0gbmV3IERhdGUocGFyc2VJbnQoZGF0ZS5yZXBsYWNlKFwiL0RhdGUoXCIsIFwiXCIpLnJlcGxhY2UoXCIpL1wiLCBcIlwiKSwgMTApKTtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHZhciBtYXAgPSB7XHJcbiAgICAgICAgXCJZXCI6IGRhdGUuZ2V0WWVhcigpLFxyXG4gICAgICAgIFwiTVwiOiBkYXRlLmdldE1vbnRoKCkgKyAxLCAvL+aciOS7vVxyXG4gICAgICAgIFwiZFwiOiBkYXRlLmdldERhdGUoKSwgLy/ml6VcclxuICAgICAgICBcImhcIjogZGF0ZS5nZXRIb3VycygpLCAvL+Wwj+aXtlxyXG4gICAgICAgIFwibVwiOiBkYXRlLmdldE1pbnV0ZXMoKSwgLy/liIZcclxuICAgICAgICBcInNcIjogZGF0ZS5nZXRTZWNvbmRzKCksIC8v56eSXHJcbiAgICAgICAgXCJxXCI6IE1hdGguZmxvb3IoKGRhdGUuZ2V0TW9udGgoKSArIDMpIC8gMyksIC8v5a2j5bqmXHJcbiAgICAgICAgXCJTXCI6IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLy/mr6vnp5JcclxuICAgIH07XHJcbiAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvKFt5TWRobXNxU10pKy9nLCBmdW5jdGlvbiAoYWxsLCB0KSB7XHJcbiAgICAgICAgdmFyIHYgPSBtYXBbdF07XHJcbiAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoYWxsLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHYgPSAnMCcgKyB2O1xyXG4gICAgICAgICAgICAgICAgdiA9IHYuc3Vic3RyKHYubGVuZ3RoIC0gMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHQgPT09ICd5Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gKGRhdGUuZ2V0RnVsbFllYXIoKSArICcnKS5zdWJzdHIoNCAtIGFsbC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZm9ybWF0O1xyXG59KTtcclxuLy/ojrflj5bnp5Hnm65cclxuYXJ0LmhlbHBlcignZ2V0U3ViamVjdE5hbWUnLGZ1bmN0aW9uKHN1YmplY3Qpe1xyXG4gICAgcmV0dXJuIHUuZ2V0U3ViamVjdE5hbWUoc3ViamVjdCk7XHJcbn0pO1xyXG4vL+iOt+WPlumYtuautVxyXG5hcnQuaGVscGVyKCdnZXRTdGFnZVN0cicsZnVuY3Rpb24oc3RhZ2Upe1xyXG4gICAgICAgIHJldHVybiB1LmdldFN0YWdlU3RyKHN0YWdlKTtcclxufSk7XHJcbi8v6L2s56CBIOato+ehruetlOahiFxyXG5hcnQuaGVscGVyKCd1bkVzY2FwZScsIGZ1bmN0aW9uKGFuc3dlcil7XHJcbiAgICBpZiAoIWFuc3dlcil7XHJcbiAgICAgICAgcmV0dXJuIFwi5pyq5L2c562UXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmVzY2FwZShhbnN3ZXIpO1xyXG4gICAgfVxyXG59KTtcclxuLy/mgKfliKvovazmjaJcclxuYXJ0LmhlbHBlcignc2V4dHJhbicsIGZ1bmN0aW9uIChzKSB7XHJcbiAgICByZXR1cm4gdS5zZXh0cmFuKHMpO1xyXG59KTtcclxuXHJcbi8v5a2m5Yi26L2s5o2iXHJcbmFydC5oZWxwZXIoJ2VkdXR5cGV0cmFuJywgZnVuY3Rpb24gKHMpIHtcclxuICAgIHJldHVybiB1LmVkdXR5cGV0cmFuKHMpO1xyXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC90ZW1wbGF0ZS1oZWxwZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDIxIDM3XG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgaHVtb3JIYW4gb24gMjAxNi82LzE3LlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0YmFzZVVybDogXCJodHRwOi8vbG9jYWxob3N0OjYzMzQyL21mZ19uZXdiX3dlYnYyL2h0bWwvZGVtby9cIixcclxuXHQvL+i3s+i9rOmhtemdou+8jOWPr+S7peWkhOeQhuWFrOeUqOi3s+i9rOmAu+i+kVxyXG5cdHJlZGlyZWN0VXJsOiBmdW5jdGlvbihyZWRpcmVjdFVybCwgZnJvbVVybCkge1xyXG5cdFx0aWYgKHJlZGlyZWN0VXJsID09IFwibG9naW4uaHRtbFwiKSB7XHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5iYXNlVXJsICsgcmVkaXJlY3RVcmw7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5nZXRDb29raWUoXCJ1bmFtZVwiKSkge1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5iYXNlVXJsICsgcmVkaXJlY3RVcmw7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmJhc2VVcmwgKyBcImxvZ2luLmh0bWxcIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Ly/orr7nva5jb29raWVcclxuXHRzZXRDb29raWU6IGZ1bmN0aW9uKG9iak5hbWUsIG9ialZhbHVlLCBvYmpIb3Vycykge1xyXG5cdFx0dmFyIHN0ciA9IG9iak5hbWUgKyBcIj1cIiArIGVzY2FwZShvYmpWYWx1ZSk7XHJcblxyXG5cdFx0aWYgKG9iakhvdXJzID4gMCkgeyAvL+S4ujDml7bkuI3orr7lrprov4fmnJ/ml7bpl7TvvIzmtY/op4jlmajlhbPpl63ml7Zjb29raWXoh6rliqjmtojlpLFcclxuXHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHR2YXIgbXMgPSBvYmpIb3VycyAqIDM2MDAgKiAxMDAwO1xyXG5cdFx0XHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBtcyk7XHJcblx0XHRcdHN0ciArPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9HTVRTdHJpbmcoKSArIFwiO3BhdGg9L1wiO1xyXG5cdFx0fVxyXG5cdFx0ZG9jdW1lbnQuY29va2llID0gc3RyO1xyXG5cdH0sXHJcblx0Ly/ojrflj5Zjb29raWVcclxuXHRnZXRDb29raWU6IGZ1bmN0aW9uKG9iak5hbWUpIHsgLy/ojrflj5bmjIflrprlkI3np7DnmoRjb29raWXnmoTlgLxcclxuXHRcdHZhciBhcnJTdHIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyU3RyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciB0ZW1wID0gYXJyU3RyW2ldLnNwbGl0KFwiPVwiKTtcclxuXHRcdFx0aWYgKHRlbXBbMF0gPT0gb2JqTmFtZSkge1xyXG5cdFx0XHRcdHJldHVybiB1bmVzY2FwZSh0ZW1wWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Ly8gaHRtbOi9rOeggVxyXG5cdGh0bWxFbmNvZGU6IGZ1bmN0aW9uKHMpIHtcclxuXHRcdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzKSk7XHJcblx0XHRyZXR1cm4gZGl2LmlubmVySFRNTDtcclxuXHR9LFxyXG5cdC8vIGh0bWzop6PnoIFcclxuXHRodG1sZGVjb2RlOiBmdW5jdGlvbihzKSB7XHJcblx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkaXYuaW5uZXJIVE1MID0gcztcclxuXHRcdHJldHVybiBkaXYuaW5uZXJUZXh0IHx8IGRpdi50ZXh0Q29udGVudDtcclxuXHR9LC8v5oCn5Yir6L2s5o2iXHJcblx0c2V4dHJhbjogZnVuY3Rpb24gKHMpIHtcclxuXHQgICAgc3dpdGNoIChzKSB7XHJcblx0ICAgICAgICBjYXNlIFwiMFwiOlxyXG5cdCAgICAgICAgICAgIHJldHVybiBcIueUt1wiO1xyXG5cdCAgICAgICAgY2FzZSBcIjFcIjpcclxuXHQgICAgICAgICAgICByZXR1cm4gXCLlpbNcIjtcclxuXHQgICAgICAgIFxyXG5cdCAgICAgICAgZGVmYXVsdDpcclxuXHQgICAgICAgICAgICByZXR1cm4gXCLmnKrnn6VcIjtcclxuXHQgICAgfVxyXG5cdCAgIFxyXG5cdCAgICAvL3JldHVybiBkaXYuaW5uZXJUZXh0IHx8IGRpdi50ZXh0Q29udGVudDtcclxuXHR9LC8v5a2m56eR6L2s5o2iXHJcblx0Z2V0U3ViamVjdE5hbWU6IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgc3dpdGNoIChzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwMVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi6K+t5paHXCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwMlwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi5pWw5a2mXCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwM1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi6Iux6K+tXCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwNFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi54mp55CGXCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwNVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi5YyW5a2mXCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwNlwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi5Zyw55CGXCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwN1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi5Y6G5Y+yXCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwOFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi5pS/5rK7XCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwOVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi55Sf54mpXCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCIxNFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi5aWl5pWwXCI7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcblx0fSwvL+WtpuWItui9rOaNolxyXG5cdGVkdXR5cGV0cmFuOiBmdW5jdGlvbiAocykge1xyXG5cdCAgICBzd2l0Y2ggKHMpIHtcclxuXHQgICAgICAgIGNhc2UgMDpcclxuXHQgICAgICAgICAgICByZXR1cm4gXCLlha3kuInliLZcIjtcclxuXHQgICAgICAgIGNhc2UgMTpcclxuXHQgICAgICAgICAgICByZXR1cm4gXCLkupTlm5vliLZcIjtcclxuXHQgICAgICAgIFxyXG5cdCAgICAgICAgZGVmYXVsdDpcclxuXHQgICAgICAgICAgICByZXR1cm4gXCLmnKrnn6VcIjtcclxuXHQgICAgfVxyXG5cdCAgICAvL3JldHVybiBkaXYuaW5uZXJUZXh0IHx8IGRpdi50ZXh0Q29udGVudDtcclxuXHR9XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9kZXAvdXRpbC91dGlsLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAyMSAyOSAzN1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=