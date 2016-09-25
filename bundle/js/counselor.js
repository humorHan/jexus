webpackJsonp([21,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(45);


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

/***/ 12:
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

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	
	var tplTable = __webpack_require__(46);
	var tplMark = __webpack_require__(47);
	var pop = __webpack_require__(24);
	__webpack_require__(12);
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
	                    loadCounselors();
	
	                }
	                else {
	
	
	                }
	            }
	        });
	
	
	
	    },
	    initBtns: function () {
	
	        //备注
	        $('.table').delegate(".mask", "click", function () {
	            var id = $(this).attr("data-id");
	            $(".add").show();
	            $(".pop-mask").show();
	            $("#tempid").val(id);//测评表学生的id
	            loadMarks(id);
	
	
	        });
	        //查看
	        $('.table').delegate(".show", "click", function () {
	            var id = $(this).attr("data-id");
	            alert(id);
	
	        });
	
	        //备注的输入
	        $('.evalution-box').delegate("#masktext", "keyup", function () {
	            var str = $(this).val();
	            document.getElementById("wordLength").innerHTML = "<i class='red normal'>" + parseInt(str.length) + "</i>" + "\/30";//限制30字
	
	
	        });
	
	        //备注的删除
	        $('.evalution-box').delegate(".delete", "click", function () {
	            debugger;
	            var id = this.id;
	            $("#div"+id).remove();//移除
	            //删除备注
	            $.ajax({
	                type: "post",
	                url: "/OrgExam/Exam/DeleteStuMark",
	                dataType: "json",
	                data: {
	                    MarkId: id
	
	                },
	                success: function (data) {
	                    debugger;
	                  
	
	
	                }
	            });
	
	
	        });
	
	
	        //备注的保存
	        $('.evalution-box').delegate("#markSave", "click", function () {
	            var opt = {};
	            opt.TempID = $("#tempid").val();//$(e0).attr("data-s");
	            var masktext = $("#masktext").val();
	            if (masktext.length<1) {
	                return;
	            }
	            debugger;
	            if ($(".addiv").length > 3) {
	                //pop.MaskHide();
	                //pop.PopTipShow("备注信息过多，请先删除！");
	                $("#addtip").removeClass("hidden");
	                $("#addtip").html('<span class="margin-top error-tip">备注信息过多，请删除后再保存！</span>');
	                return;
	
	            }
	           
	            var nowtime = new Date();
	            var year = nowtime.getFullYear();
	            var month = padleft0(nowtime.getMonth() + 1);
	            var day = padleft0(nowtime.getDate());
	            var timestr = year + "-" + month + "-" + day;
	            var addhtml = ' <div class="overflow addiv" id="div' +opt.TempID + '"><p>' + masktext + '</p><span class="font12 right">' + timestr + ' <i class="delete-icon ml10 delete" id="' +opt.TempID + '"></i></span></div>';
	            $("#addmark").append(addhtml);
	            $.ajax({
	                url: "/OrgExam/Exam/SaveStuMark",
	                type: "post",
	                dataType: "json",
	                data: {
	                    D: JSON.stringify(opt), R: escape(masktext)
	                },
	                success: function (e) {
	                    if (e.OK) {
	                        pop.MaskHide();
	                        pop.PopTipShow("添加成功！");
	                    }
	                    else {
	
	                    }
	                }
	            });
	
	        });
	
	        //补齐两位数
	        function padleft0(obj) {
	            return obj.toString().replace(/^[0-9]{1}$/, "0" + obj);
	        }
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
	
	
	
	//加载备注列表
	function loadMarks(id) {
	
	    //加载列表
	    $.ajax({
	        type: "post",
	        url: "/OrgExam/Exam/GetStuMark",
	        dataType: "json",
	        data: {
	            TempID:id
	
	        },
	        success: function (data) {
	            debugger;
	
	            if (data.Data) {
	                $("#markshow").html(tplMark(data.Data));
	                //加载咨询师列表
	
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
	
	
	
	function OptBut() {
	
	
	    alert("按钮进行了点击");
	
	}

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgEvaluation/counselor',function($data,$filename
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
	$out+='</td> <td> <a href="/OrgZiXun/ZiXunGuanLi/SignUp?Id=';
	$out+=$escape($value.TempID);
	$out+='" class="operate-btn look con">报名签约</a></td> <td><span class="operate-btn look mask" data-id="';
	$out+=$escape($value.TempID);
	$out+='">备注</span></td> <td><span class="operate-btn look show" data-id="';
	$out+=$escape($value.TempID);
	$out+='">查看</span></td> </tr> ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgEvaluation/exammark',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' <div id="addmark"> ';
	$each($data,function($value,$index){
	$out+=' <div class="overflow addiv" id="div';
	$out+=$escape($value.MarkID);
	$out+='"> <p> ';
	$out+=$escape($value.Remark);
	$out+=' </p> <span class="font12 right"> ';
	$out+=$escape($helpers. dateFormat($value.CreateTime ,  "yyyy-MM-dd"));
	$out+=' <i class="delete-icon ml10 delete" id="';
	$out+=$escape($value.MarkID);
	$out+='"></i> </span> </div> ';
	});
	$out+=' </div> <div class="input-box"> <textarea placeholder="请输入内容" class="mt10" maxlength="30" id="masktext"></textarea> <span class="count-num" id="wordLength"> <i class="red normal">0</i>/30 </span> </div> <div class="center mb5 hidden" id="addtip"> </div> <div class="handle font14 auto mt20"> <span class="submit" id="markSave">确定</span> </div> ';
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2RlcC9QYWdpbmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vT3JnL2RlcC90ZW1wbGF0ZS1oZWxwZXIuanM/ZDFlZiIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL3V0aWwvdXRpbC5qcz85YjMyIiwid2VicGFjazovLy8uL09yZy9kZXAvcG9wdXAvcG9wdXB0aXAuanM/ZjAzMioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2pzL09yZ0V2YWx1YXRpb24vY291bnNlbG9yLmpzIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnRXZhbHVhdGlvbi9jb3Vuc2Vsb3IudHBsIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnRXZhbHVhdGlvbi9leGFtbWFyay50cGwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQWtDO0FBQ2xDOztBQUVBO0FBQ0EseUNBQXdDLE9BQU8sMkJBQTJCO0FBQzFFOztBQUVBO0FBQ0E7QUFDQSxzQ0FBcUMsWUFBWTtBQUNqRDtBQUNBOztBQUVBO0FBQ0EsMEJBQXlCLGlFQUFpRTtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQSxhQUFZLGVBQWU7QUFDM0Isa0RBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFxQjtBQUNyQixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLEdBQUU7QUFDRixrQ0FBaUM7QUFDakMsSUFBRztBQUNILGVBQWM7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Ozs7O0FBSUEsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiOztBQUVBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSxNQUFLO0FBQ0w7OztBQUdBLEVBQUM7Ozs7QUFJRDs7O0FBR0E7O0FBRUEsRTs7Ozs7OztBQ2xUQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLG1JQUFtSTtBQUNoSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7O0FDN0JEO0FBQ0E7QUFDQTtBQUNBLGNBQWEsbUlBQW1JO0FBQ2hKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxFQUFDLEUiLCJmaWxlIjoiY291bnNlbG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypUTU9ESlM6e30qL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdGZ1bmN0aW9uIGEoYSwgYikge1xyXG5cdFx0cmV0dXJuICgvc3RyaW5nfGZ1bmN0aW9uLy50ZXN0KHR5cGVvZiBiKSA/IGggOiBnKShhLCBiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYihhLCBjKSB7XHJcblx0XHRyZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSAmJiAoYyA9IHR5cGVvZiBhLCBcIm51bWJlclwiID09PSBjID8gYSArPSBcIlwiIDogYSA9IFwiZnVuY3Rpb25cIiA9PT0gYyA/IGIoYS5jYWxsKGEpKSA6IFwiXCIpLCBhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjKGEpIHtcclxuXHRcdHJldHVybiBsW2FdXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkKGEpIHtcclxuXHRcdHJldHVybiBiKGEpLnJlcGxhY2UoLyYoPyFbXFx3I10rOyl8Wzw+XCInXS9nLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZShhLCBiKSB7XHJcblx0XHRpZiAobShhKSlmb3IgKHZhciBjID0gMCwgZCA9IGEubGVuZ3RoOyBkID4gYzsgYysrKWIuY2FsbChhLCBhW2NdLCBjLCBhKTsgZWxzZSBmb3IgKGMgaW4gYSliLmNhbGwoYSwgYVtjXSwgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoYSwgYikge1xyXG5cdFx0dmFyIGMgPSAvKFxcLylbXlxcL10rXFwxXFwuXFwuXFwxLywgZCA9IChcIi4vXCIgKyBhKS5yZXBsYWNlKC9bXlxcL10rJC8sIFwiXCIpLCBlID0gZCArIGI7XHJcblx0XHRmb3IgKGUgPSBlLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7IGUubWF0Y2goYyk7KWUgPSBlLnJlcGxhY2UoYywgXCIvXCIpO1xyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoYiwgYykge1xyXG5cdFx0dmFyIGQgPSBhLmdldChiKSB8fCBpKHtmaWxlbmFtZTogYiwgbmFtZTogXCJSZW5kZXIgRXJyb3JcIiwgbWVzc2FnZTogXCJUZW1wbGF0ZSBub3QgZm91bmRcIn0pO1xyXG5cdFx0cmV0dXJuIGMgPyBkKGMpIDogZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChhLCBiKSB7XHJcblx0XHRpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYikge1xyXG5cdFx0XHR2YXIgYyA9IGI7XHJcblx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBrKGMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBkID0galthXSA9IGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBiKGMsIGEpICsgXCJcIlxyXG5cdFx0XHR9IGNhdGNoIChkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGkoZCkoKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGQucHJvdG90eXBlID0gYi5wcm90b3R5cGUgPSBuLCBkLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYiArIFwiXCJcclxuXHRcdH0sIGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGkoYSkge1xyXG5cdFx0dmFyIGIgPSBcIntUZW1wbGF0ZSBFcnJvcn1cIiwgYyA9IGEuc3RhY2sgfHwgXCJcIjtcclxuXHRcdGlmIChjKWMgPSBjLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCJcXG5cIik7IGVsc2UgZm9yICh2YXIgZCBpbiBhKWMgKz0gXCI8XCIgKyBkICsgXCI+XFxuXCIgKyBhW2RdICsgXCJcXG5cXG5cIjtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IoYiArIFwiXFxuXFxuXCIgKyBjKSwgYlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGogPSBhLmNhY2hlID0ge30sIGsgPSB0aGlzLlN0cmluZywgbCA9IHtcclxuXHRcdFwiPFwiOiBcIiYjNjA7XCIsXHJcblx0XHRcIj5cIjogXCImIzYyO1wiLFxyXG5cdFx0J1wiJzogXCImIzM0O1wiLFxyXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcclxuXHRcdFwiJlwiOiBcIiYjMzg7XCJcclxuXHR9LCBtID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xyXG5cdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB7fS50b1N0cmluZy5jYWxsKGEpXHJcblx0XHR9LCBuID0gYS51dGlscyA9IHtcclxuXHRcdCRoZWxwZXJzOiB7fSwgJGluY2x1ZGU6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcblx0XHRcdHJldHVybiBhID0gZihjLCBhKSwgZyhhLCBiKVxyXG5cdFx0fSwgJHN0cmluZzogYiwgJGVzY2FwZTogZCwgJGVhY2g6IGVcclxuXHR9LCBvID0gYS5oZWxwZXJzID0gbi4kaGVscGVycztcclxuXHRhLmdldCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRyZXR1cm4galthLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKV1cclxuXHR9LCBhLmhlbHBlciA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRvW2FdID0gYlxyXG5cdH0sIG1vZHVsZS5leHBvcnRzID0gYVxyXG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdG1vZGpzLWxvYWRlci9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDggMTMgMTQgMTUgMTYgMTcgMTggMTkgMjEgMjMgMjUgMjYgMjcgMzEgMzIgMzMgMzcgMzhcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFBhZ2luYXRvcjogZnVuY3Rpb24gKHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgdG90YWxDb3VudCwgY2FsbGJhY2spIHtcclxuICAgICAgICAvL3RvZG8g57uR5a6a5LqL5Lu2XHJcbiAgICAgICBcclxuICAgICAgICB2YXIgdG90YWxQYWdlcztcclxuICAgICAgICBpZiAodG90YWxDb3VudCAlIHBhZ2VTaXplID09IDApIHtcclxuICAgICAgICAgICAgdG90YWxQYWdlcyA9IHRvdGFsQ291bnQgLyBwYWdlU2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvdGFsUGFnZXMgPSBwYXJzZUludCh0b3RhbENvdW50IC8gcGFnZVNpemUpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhZ2VQcmUgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgLSAxKSArICcgY2xhc3M9XCJwcmUtcGFnZSBpbmxpbmUgbXIyMFwiPuS4iuS4gOmhtTwvYT4nO1xyXG4gICAgICAgIHZhciBwYWdlTmV4dCA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDEpICsgJyBjbGFzcz1cIm5leHQtcGFnZSBpbmxpbmVcIj7kuIvkuIDpobU8L2E+JztcclxuICAgICAgICB2YXIgaW5kZXhQYWdlID0gJzxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPVwiMVwiIGNsYXNzPVwicHJlLXBhZ2UgaW5saW5lIG1yMjBcIj7pppbpobU8L2E+PC9saT4nO1xyXG5cclxuICAgICAgICB2YXIgbGFzdFBhZ2UgPSAnIDxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJyBjbGFzcz1cInByZS1wYWdlIGlubGluZSBtcjIwXCI+IOacq+mhtTwvYT4nO1xyXG4gICAgICAgIGlmICh0b3RhbFBhZ2VzIDwgcGFnZVNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlUHJlID0gXCJcIjtcclxuICAgICAgICAgICAgcGFnZU5leHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBpbmRleFBhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDw9IDEpIHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgICAgICBwYWdlUHJlID0gXCJcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gdG90YWxQYWdlcztcclxuICAgICAgICAgICAgcGFnZU5leHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG90YWxDb3VudCA+IDApIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAnPHVsIGNsYXNzPVwicGFnZS1ib3ggaW5saW5lIG1yMjBcIj4nO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VzID4gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09IDEpIC8v56ys5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3V0cHV0LkFwcGVuZChcIiA8YSBkaXNhYmxlZD0nZGlzYWJsZWQnIGNsYXNzPSdjb2xIJz7kuIrkuIDpobU8L2E+IFwiKTsvL+S4iuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5aSE55CG6aaW6aG16L+e5o6lXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpITnkIbkuIrkuIDpobXnmoTov57mjqVcclxuICAgICAgICAgICAgICAgICAgICAvL3BhZ2VQcmUgPSAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDEpICsgJz7kuIrkuIDpobU8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAvLyBvdXRwdXQuQXBwZW5kRm9ybWF0KFwiIDxhIGRhdGEtcGFnZUluZGV4PSd7MH0nIGNsYXNzPSdwYWdlTGluayc+5LiK5LiA6aG1PC9hPiBcIiwgY3VycmVudFBhZ2UgLSAxKTsvL+S4iuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgPiA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJpbnQgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA8IDQpLy80XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gaSArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiBkYXRhLW51bT0nICsgY3VycmVudFBhZ2UgKyAnPicgKyBjdXJyZW50UGFnZSArICc8L2E+IDwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSA2KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyA3ICsgJz4uLi48L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgdG90YWxQYWdlcyArICc+JyArIHRvdGFsUGFnZXMgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKGkgKyAxKSArICc+JyArIChpICsgMSkgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfS8vNFxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRQYWdlID49IDQgJiYgY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzIC0gMykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wYWdlbnVtPXBhZ2VudW0rJyA8bGkgZGF0YS1udW09JysoY3VycmVudFBhZ2UtMykrJz48YSBocmVmPVwiI1wiIG9uY2xpY2s9XCJQYWdpbmF0b3IoJytwYWdlU2l6ZSsnLCcrKGN1cnJlbnRQYWdlLTMpKycsJyArIHRvdGFsQ291bnQgKyAnKVwiPi4uLjwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCI+MTwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDMgPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDMpICsgJz4uLi48L2E+IDwvbGk+JzsvLzIwMTYwOTEzMDkzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gMykvL+S4remXtOW9k+WJjemhtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgZGF0YS1udW09JyArIChjdXJyZW50UGFnZSkgKyAnPicgKyBjdXJyZW50UGFnZSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gNikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyAzKSArICc+Li4uPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgdG90YWxQYWdlcyArICc+JyArIHRvdGFsUGFnZXMgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIGkgLSBwYXJzZUludChjdXJyaW50KSkgKyAnPicgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgaSAtIHBhcnNlSW50KGN1cnJpbnQpKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPVwiMVwiPjE8L2E+IDwvbGk+JzsvLzIwMTYwOTEzMDkzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBkYXRhLW51bT0nICsgKHBhcnNlSW50KHRvdGFsUGFnZXMpIC0gNikgKyAnPi4uLjwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxQYWdlcyAtIDYgKyBpID09IGN1cnJlbnRQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArICh0b3RhbFBhZ2VzIC0gNiArIGkpICsgJz4nICsgKHRvdGFsUGFnZXMgLSA2ICsgaSkgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSBpICsgMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAoaSArIDEpICsgJz4nICsgKGkgKyAxKSArICc8L2E+IDwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gdG90YWxQYWdlcykgLy/mnIDlkI7kuIDpobVcclxuICAgICAgICAgICAgICAgIHsvL+WkhOeQhuS4i+S4gOmhteWSjOWwvumhteeahOmTvuaOpVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3V0cHV0LkFwcGVuZChcIiA8YSBkaXNhYmxlZD0nZGlzYWJsZWQnIGNsYXNzPSdjb2xIJz7kuIvkuIDpobU8L2E+IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFBhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcykgey8v5aSE55CG5LiL5LiA6aG15ZKM5bC+6aG155qE6ZO+5o6lIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kRm9ybWF0KFwiIDxhIGRhdGEtcGFnZWluZGV4PSd7MH0nIGNsYXNzPSdwYWdlTGluayc+5LiL5LiA6aG1PC9hPiBcIiwgY3VycmVudFBhZ2UgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgIC8vIHBhZ2VQcmUgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyAxKSArICcgY2xhc3M9XCJuZXh0LXBhZ2UgaW5saW5lXCI+5LiL5LiA6aG1PC9hPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnPC91bD4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gaW5kZXhQYWdlICsgcGFnZVByZSArIHBhZ2VudW0gKyBwYWdlTmV4dCArIGxhc3RQYWdlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNwYWdpbmF0aW9uIGFcIikudW5iaW5kKFwiY2xpY2tcIik7XHJcbiAgICAgICAgJChcIiNwYWdpbmF0aW9uIGFcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJCh0aGlzKS5hdHRyKFwiZGF0YS1udW1cIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4vL2Z1bmN0aW9uIFBhZ2luYXRvcihwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHRvdGFsQ291bnQsIGNhbGxiYWNrKSB7XHJcblxyXG5cclxuLy99XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC9QYWdpbmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMTMgMTYgMTggMTkgMjEgMjYgMjcgMzEgMzMgMzhcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSBodW1vckhhbiBvbiAyMDE2LzUvMjYuXHJcbiAqL1xyXG52YXIgYXJ0ID0gcmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XHJcbnZhciB1PXJlcXVpcmUoXCJ1dGlsL3V0aWxcIik7XHJcblxyXG4vL+aXtumXtOaIs+i9rOWMluaWueazlVxyXG5hcnQuaGVscGVyKCdkYXRlRm9ybWF0JywgZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCkge1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGUucmVwbGFjZShcIi9EYXRlKFwiLCBcIlwiKS5yZXBsYWNlKFwiKS9cIiwgXCJcIiksIDEwKSk7XHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICB2YXIgbWFwID0ge1xyXG4gICAgICAgIFwiWVwiOiBkYXRlLmdldFllYXIoKSxcclxuICAgICAgICBcIk1cIjogZGF0ZS5nZXRNb250aCgpICsgMSwgLy/mnIjku71cclxuICAgICAgICBcImRcIjogZGF0ZS5nZXREYXRlKCksIC8v5pelXHJcbiAgICAgICAgXCJoXCI6IGRhdGUuZ2V0SG91cnMoKSwgLy/lsI/ml7ZcclxuICAgICAgICBcIm1cIjogZGF0ZS5nZXRNaW51dGVzKCksIC8v5YiGXHJcbiAgICAgICAgXCJzXCI6IGRhdGUuZ2V0U2Vjb25kcygpLCAvL+enklxyXG4gICAgICAgIFwicVwiOiBNYXRoLmZsb29yKChkYXRlLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6plxyXG4gICAgICAgIFwiU1wiOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8v5q+r56eSXHJcbiAgICB9O1xyXG4gICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoLyhbeU1kaG1zcVNdKSsvZywgZnVuY3Rpb24gKGFsbCwgdCkge1xyXG4gICAgICAgIHZhciB2ID0gbWFwW3RdO1xyXG4gICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKGFsbC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB2ID0gJzAnICsgdjtcclxuICAgICAgICAgICAgICAgIHYgPSB2LnN1YnN0cih2Lmxlbmd0aCAtIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0ID09PSAneScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChkYXRlLmdldEZ1bGxZZWFyKCkgKyAnJykuc3Vic3RyKDQgLSBhbGwubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZvcm1hdDtcclxufSk7XHJcbi8v6I635Y+W56eR55uuXHJcbmFydC5oZWxwZXIoJ2dldFN1YmplY3ROYW1lJyxmdW5jdGlvbihzdWJqZWN0KXtcclxuICAgIHJldHVybiB1LmdldFN1YmplY3ROYW1lKHN1YmplY3QpO1xyXG59KTtcclxuLy/ojrflj5bpmLbmrrVcclxuYXJ0LmhlbHBlcignZ2V0U3RhZ2VTdHInLGZ1bmN0aW9uKHN0YWdlKXtcclxuICAgICAgICByZXR1cm4gdS5nZXRTdGFnZVN0cihzdGFnZSk7XHJcbn0pO1xyXG4vL+i9rOeggSDmraPnoa7nrZTmoYhcclxuYXJ0LmhlbHBlcigndW5Fc2NhcGUnLCBmdW5jdGlvbihhbnN3ZXIpe1xyXG4gICAgaWYgKCFhbnN3ZXIpe1xyXG4gICAgICAgIHJldHVybiBcIuacquS9nOetlFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5lc2NhcGUoYW5zd2VyKTtcclxuICAgIH1cclxufSk7XHJcbi8v5oCn5Yir6L2s5o2iXHJcbmFydC5oZWxwZXIoJ3NleHRyYW4nLCBmdW5jdGlvbiAocykge1xyXG4gICAgcmV0dXJuIHUuc2V4dHJhbihzKTtcclxufSk7XHJcblxyXG4vL+WtpuWItui9rOaNolxyXG5hcnQuaGVscGVyKCdlZHV0eXBldHJhbicsIGZ1bmN0aW9uIChzKSB7XHJcbiAgICByZXR1cm4gdS5lZHV0eXBldHJhbihzKTtcclxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9kZXAvdGVtcGxhdGUtaGVscGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAyMSAzN1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGh1bW9ySGFuIG9uIDIwMTYvNi8xNy5cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGJhc2VVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDo2MzM0Mi9tZmdfbmV3Yl93ZWJ2Mi9odG1sL2RlbW8vXCIsXHJcblx0Ly/ot7PovazpobXpnaLvvIzlj6/ku6XlpITnkIblhaznlKjot7PovazpgLvovpFcclxuXHRyZWRpcmVjdFVybDogZnVuY3Rpb24ocmVkaXJlY3RVcmwsIGZyb21VcmwpIHtcclxuXHRcdGlmIChyZWRpcmVjdFVybCA9PSBcImxvZ2luLmh0bWxcIikge1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuYmFzZVVybCArIHJlZGlyZWN0VXJsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuZ2V0Q29va2llKFwidW5hbWVcIikpIHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuYmFzZVVybCArIHJlZGlyZWN0VXJsO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5iYXNlVXJsICsgXCJsb2dpbi5odG1sXCI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdC8v6K6+572uY29va2llXHJcblx0c2V0Q29va2llOiBmdW5jdGlvbihvYmpOYW1lLCBvYmpWYWx1ZSwgb2JqSG91cnMpIHtcclxuXHRcdHZhciBzdHIgPSBvYmpOYW1lICsgXCI9XCIgKyBlc2NhcGUob2JqVmFsdWUpO1xyXG5cclxuXHRcdGlmIChvYmpIb3VycyA+IDApIHsgLy/kuLow5pe25LiN6K6+5a6a6L+H5pyf5pe26Ze077yM5rWP6KeI5Zmo5YWz6Zet5pe2Y29va2ll6Ieq5Yqo5raI5aSxXHJcblx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0dmFyIG1zID0gb2JqSG91cnMgKiAzNjAwICogMTAwMDtcclxuXHRcdFx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgbXMpO1xyXG5cdFx0XHRzdHIgKz0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvR01UU3RyaW5nKCkgKyBcIjtwYXRoPS9cIjtcclxuXHRcdH1cclxuXHRcdGRvY3VtZW50LmNvb2tpZSA9IHN0cjtcclxuXHR9LFxyXG5cdC8v6I635Y+WY29va2llXHJcblx0Z2V0Q29va2llOiBmdW5jdGlvbihvYmpOYW1lKSB7IC8v6I635Y+W5oyH5a6a5ZCN56ew55qEY29va2ll55qE5YC8XHJcblx0XHR2YXIgYXJyU3RyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyclN0ci5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgdGVtcCA9IGFyclN0cltpXS5zcGxpdChcIj1cIik7XHJcblx0XHRcdGlmICh0ZW1wWzBdID09IG9iak5hbWUpIHtcclxuXHRcdFx0XHRyZXR1cm4gdW5lc2NhcGUodGVtcFsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdC8vIGh0bWzovaznoIFcclxuXHRodG1sRW5jb2RlOiBmdW5jdGlvbihzKSB7XHJcblx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocykpO1xyXG5cdFx0cmV0dXJuIGRpdi5pbm5lckhUTUw7XHJcblx0fSxcclxuXHQvLyBodG1s6Kej56CBXHJcblx0aHRtbGRlY29kZTogZnVuY3Rpb24ocykge1xyXG5cdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZGl2LmlubmVySFRNTCA9IHM7XHJcblx0XHRyZXR1cm4gZGl2LmlubmVyVGV4dCB8fCBkaXYudGV4dENvbnRlbnQ7XHJcblx0fSwvL+aAp+WIq+i9rOaNolxyXG5cdHNleHRyYW46IGZ1bmN0aW9uIChzKSB7XHJcblx0ICAgIHN3aXRjaCAocykge1xyXG5cdCAgICAgICAgY2FzZSBcIjBcIjpcclxuXHQgICAgICAgICAgICByZXR1cm4gXCLnlLdcIjtcclxuXHQgICAgICAgIGNhc2UgXCIxXCI6XHJcblx0ICAgICAgICAgICAgcmV0dXJuIFwi5aWzXCI7XHJcblx0ICAgICAgICBcclxuXHQgICAgICAgIGRlZmF1bHQ6XHJcblx0ICAgICAgICAgICAgcmV0dXJuIFwi5pyq55+lXCI7XHJcblx0ICAgIH1cclxuXHQgICBcclxuXHQgICAgLy9yZXR1cm4gZGl2LmlubmVyVGV4dCB8fCBkaXYudGV4dENvbnRlbnQ7XHJcblx0fSwvL+Wtpuenkei9rOaNolxyXG5cdGdldFN1YmplY3ROYW1lOiBmdW5jdGlvbiAocykge1xyXG4gICAgICAgIHN3aXRjaCAocykge1xyXG4gICAgICAgICAgICBjYXNlIFwiMDFcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuivreaWh1wiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuaVsOWtplwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuiLseivrVwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIueJqeeQhlwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuWMluWtplwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDZcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuWcsOeQhlwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDdcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuWOhuWPslwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDhcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuaUv+ayu1wiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIueUn+eJqVwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMTRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuWlpeaVsFwiO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG5cdH0sLy/lrabliLbovazmjaJcclxuXHRlZHV0eXBldHJhbjogZnVuY3Rpb24gKHMpIHtcclxuXHQgICAgc3dpdGNoIChzKSB7XHJcblx0ICAgICAgICBjYXNlIDA6XHJcblx0ICAgICAgICAgICAgcmV0dXJuIFwi5YWt5LiJ5Yi2XCI7XHJcblx0ICAgICAgICBjYXNlIDE6XHJcblx0ICAgICAgICAgICAgcmV0dXJuIFwi5LqU5Zub5Yi2XCI7XHJcblx0ICAgICAgICBcclxuXHQgICAgICAgIGRlZmF1bHQ6XHJcblx0ICAgICAgICAgICAgcmV0dXJuIFwi5pyq55+lXCI7XHJcblx0ICAgIH1cclxuXHQgICAgLy9yZXR1cm4gZGl2LmlubmVyVGV4dCB8fCBkaXYudGV4dENvbnRlbnQ7XHJcblx0fVxyXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvZGVwL3V0aWwvdXRpbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMjEgMjkgMzdcbiAqKi8iLCIvL+mBrue9qVxyXG5mdW5jdGlvbiBNYXNrU2hvdygpIHtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNYXNrSGlkZSgpIHtcclxuICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG59XHJcbi8v5Lyg6YCS5pi+56S655qE5raI5oGvXHJcbmZ1bmN0aW9uIFBvcFRpcFNob3cob2JqKSB7XHJcbiAgICB2YXIgdGlwaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNCBoaWRkZW5cIiBpZD1cIm9rdGlwXCI+PHNwYW4gY2xhc3M9XCJwb3AtY2xvc2UgY3Vyc29yXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPjxwIGNsYXNzPVwibGluZTEwMFwiIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+JyArIG9iaiArICc8L3A+PC9kaXY+PC9kaXY+JztcclxuXHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZCh0aXBodG1sKTtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmFwcGVuZCh0aXBodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59XHJcbi8v5by55Ye656Gu6K6k5qGGXHJcbnZhciBPcGVuQ29uZnJpbVBvcCA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJwb3AtdXAgZm9udDE0XCI+PHNwYW4gY2xhc3M9XCJwb3AtY2xvc2UgY3Vyc29yXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPicgKyBvYmogKyAnPC9kaXY+PGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImhhbmRsZVwiPiA8c3BhbiBjbGFzcz1cIm9rXCIgaWQ9XCJDb25mcmltXCI+56Gu5a6aPC9zcGFuPiAmbmJzcDsmbmJzcDsmbmJzcDs8c3BhbiBjbGFzcz1cIm9rXCIgaWQ9XCJDYW5jZWxcIj7lj5bmtog8L3NwYW4+IDwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59O1xyXG4vL+W8ueWHuuehruiupOahhizmsqHmnInlj5bmtojmjInpkq5cclxudmFyIE9wZW5Db25mcmltUG9wTm9DYW5jZWwgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj4nICsgb2JqICsgJzwvZGl2PjxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJoYW5kbGVcIj4gPHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ29uZnJpbVwiPuehruWumjwvc3Bhbj4gPC9kaXY+PC9kaXY+JztcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuYXBwZW5kKGh0bWwpO1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLnBvcC11cFwiKS5zaG93KCk7XHJcbn07XHJcbi8vL+W8ueWHuuWkmumVv+aXtumXtOWQjua2iOWksVxyXG52YXIgT3BlblRpbWVIaWRlID0gZnVuY3Rpb24gKG9iaiwgdGltZSkge1xyXG4gICAgLy92YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wdXBcIj4gPGg1IGNsYXNzPVwiY2VudGVyIGZvbnQxNiBwb3B1cGhlYWRcIj7mtojmga/mj5DnpLo8aSBjbGFzcz1cInBvcGNsb3NlIGN1cnNvclwiPjwvaT48L2g1PjxkaXYgY2xhc3M9XCJwb3B1cGJveFwiPjxkaXYgY2xhc3M9XCJoYW5kbGUgZm9udDE0IGF1dG9cIj4nICsgb2JqICsgJzwvZGl2PjwvZGl2PjwvZGl2Pic7XHJcbiAgICB2YXIgaHRtbCA9ICcgIDxkaXYgY2xhc3M9XCJwb3B1cCBcIj48aDUgY2xhc3M9XCJjZW50ZXIgZm9udDE2IHBvcHVwaGVhZFwiPiDmtojmga/mj5DnpLo8aSBjbGFzcz1cInBvcGNsb3NlIGN1cnNvclwiPjwvaT48L2g1PjxkaXYgY2xhc3M9XCJwb3B1cGJveFwiPjxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtcIj48ZGl2IGNsYXNzPVwic3VjY2VzcyBhdXRvXCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tdG9wOjIwcHg7XCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImhhbmRsZSBzdWNjZXNzTGV0dGVyXCI+IDxzcGFuIGNsYXNzPVwibXQyMFwiPicrb2JqKyc8L3NwYW4+PC9kaXY+PC9kaXY+PC9kaXY+JztcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuYXBwZW5kKGh0bWwpO1xyXG4gICAgJChcIi5wb3B1cFwiKS5zaG93KCk7XHJcbiAgXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcHVwXCIpLmhpZGUoKTtcclxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0sIHRpbWUpO1xyXG5cclxufTtcclxuZnVuY3Rpb24gUG9wVGlwSGlkZSgpIHtcclxuICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbn1cclxuXHJcbmV4cG9ydHMuTWFza1Nob3cgPSBNYXNrU2hvdztcclxuZXhwb3J0cy5NYXNrSGlkZSA9IE1hc2tIaWRlO1xyXG5leHBvcnRzLlBvcFRpcFNob3cgPSBQb3BUaXBTaG93O1xyXG5leHBvcnRzLlBvcFRpcEhpZGUgPSBQb3BUaXBIaWRlO1xyXG5leHBvcnRzLk9wZW5Db25mcmltUG9wID0gT3BlbkNvbmZyaW1Qb3A7XHJcbmV4cG9ydHMuT3BlblRpbWVIaWRlID0gT3BlblRpbWVIaWRlO1xyXG4vL+WkhOeQhuW8ueWHuuahhueahOmakOiXj1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuZGVsZWdhdGUoXCIucG9wLWNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICAgICAvL2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3BjbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcC1jbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgLy9kb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcGNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC9wb3B1cC9wb3B1cHRpcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDggMTQgMjEgMjYgMzEgMzIgMzMgMzQgMzcgMzhcbiAqKi8iLCJcclxudmFyIHRwbFRhYmxlID0gcmVxdWlyZShcIk9yZ0V2YWx1YXRpb24vY291bnNlbG9yLnRwbFwiKTtcclxudmFyIHRwbE1hcmsgPSByZXF1aXJlKFwiT3JnRXZhbHVhdGlvbi9leGFtbWFyay50cGxcIik7XHJcbnZhciBwb3AgPSByZXF1aXJlKFwicG9wdXAvcG9wdXB0aXAuanNcIik7XHJcbnJlcXVpcmUoXCJ0ZW1wbGF0ZS1oZWxwZXIuanNcIik7XHJcbnZhciBQYWdpbmF0b3IgPSByZXF1aXJlKCdQYWdpbmF0b3IuanMnKTtcclxuXHJcbnZhciBtb2R1bGUgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy90b2RvIOmAu+i+keWHveaVsFxyXG4gICAgICAgIC8vdGhpcy5sb2FkT3JnTXNnKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRCdG5zKCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL+acuuaehOWQjei1i+WAvFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL09yZ1RlYWNoV29yay9Pcmdhbml6YXRpb24vR2V0T3JnTXNnXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjb3JnTmFtZVwiKS5odG1sKGRhdGEucmVzdWx0LkRhdGEuT3JnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZENvdW5zZWxvcnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdEJ0bnM6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy/lpIfms6hcclxuICAgICAgICAkKCcudGFibGUnKS5kZWxlZ2F0ZShcIi5tYXNrXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmFkZFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiI3RlbXBpZFwiKS52YWwoaWQpOy8v5rWL6K+E6KGo5a2m55Sf55qEaWRcclxuICAgICAgICAgICAgbG9hZE1hcmtzKGlkKTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5p+l55yLXHJcbiAgICAgICAgJCgnLnRhYmxlJykuZGVsZWdhdGUoXCIuc2hvd1wiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgICAgICAgICAgYWxlcnQoaWQpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy/lpIfms6jnmoTovpPlhaVcclxuICAgICAgICAkKCcuZXZhbHV0aW9uLWJveCcpLmRlbGVnYXRlKFwiI21hc2t0ZXh0XCIsIFwia2V5dXBcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc3RyID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JkTGVuZ3RoXCIpLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J3JlZCBub3JtYWwnPlwiICsgcGFyc2VJbnQoc3RyLmxlbmd0aCkgKyBcIjwvaT5cIiArIFwiXFwvMzBcIjsvL+mZkOWItjMw5a2XXHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy/lpIfms6jnmoTliKDpmaRcclxuICAgICAgICAkKCcuZXZhbHV0aW9uLWJveCcpLmRlbGVnYXRlKFwiLmRlbGV0ZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgICAgICQoXCIjZGl2XCIraWQpLnJlbW92ZSgpOy8v56e76ZmkXHJcbiAgICAgICAgICAgIC8v5Yig6Zmk5aSH5rOoXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICAgIHVybDogXCIvT3JnRXhhbS9FeGFtL0RlbGV0ZVN0dU1hcmtcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBNYXJrSWQ6IGlkXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvL+Wkh+azqOeahOS/neWtmFxyXG4gICAgICAgICQoJy5ldmFsdXRpb24tYm94JykuZGVsZWdhdGUoXCIjbWFya1NhdmVcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHQgPSB7fTtcclxuICAgICAgICAgICAgb3B0LlRlbXBJRCA9ICQoXCIjdGVtcGlkXCIpLnZhbCgpOy8vJChlMCkuYXR0cihcImRhdGEtc1wiKTtcclxuICAgICAgICAgICAgdmFyIG1hc2t0ZXh0ID0gJChcIiNtYXNrdGV4dFwiKS52YWwoKTtcclxuICAgICAgICAgICAgaWYgKG1hc2t0ZXh0Lmxlbmd0aDwxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGlmICgkKFwiLmFkZGl2XCIpLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIC8vcG9wLk1hc2tIaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAvL3BvcC5Qb3BUaXBTaG93KFwi5aSH5rOo5L+h5oGv6L+H5aSa77yM6K+35YWI5Yig6Zmk77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNhZGR0aXBcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2FkZHRpcFwiKS5odG1sKCc8c3BhbiBjbGFzcz1cIm1hcmdpbi10b3AgZXJyb3ItdGlwXCI+5aSH5rOo5L+h5oGv6L+H5aSa77yM6K+35Yig6Zmk5ZCO5YaN5L+d5a2Y77yBPC9zcGFuPicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgbm93dGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciB5ZWFyID0gbm93dGltZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICB2YXIgbW9udGggPSBwYWRsZWZ0MChub3d0aW1lLmdldE1vbnRoKCkgKyAxKTtcclxuICAgICAgICAgICAgdmFyIGRheSA9IHBhZGxlZnQwKG5vd3RpbWUuZ2V0RGF0ZSgpKTtcclxuICAgICAgICAgICAgdmFyIHRpbWVzdHIgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xyXG4gICAgICAgICAgICB2YXIgYWRkaHRtbCA9ICcgPGRpdiBjbGFzcz1cIm92ZXJmbG93IGFkZGl2XCIgaWQ9XCJkaXYnICtvcHQuVGVtcElEICsgJ1wiPjxwPicgKyBtYXNrdGV4dCArICc8L3A+PHNwYW4gY2xhc3M9XCJmb250MTIgcmlnaHRcIj4nICsgdGltZXN0ciArICcgPGkgY2xhc3M9XCJkZWxldGUtaWNvbiBtbDEwIGRlbGV0ZVwiIGlkPVwiJyArb3B0LlRlbXBJRCArICdcIj48L2k+PC9zcGFuPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICQoXCIjYWRkbWFya1wiKS5hcHBlbmQoYWRkaHRtbCk7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL09yZ0V4YW0vRXhhbS9TYXZlU3R1TWFya1wiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRDogSlNPTi5zdHJpbmdpZnkob3B0KSwgUjogZXNjYXBlKG1hc2t0ZXh0KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuT0spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wLk1hc2tIaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcC5Qb3BUaXBTaG93KFwi5re75Yqg5oiQ5Yqf77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8v6KGl6b2Q5Lik5L2N5pWwXHJcbiAgICAgICAgZnVuY3Rpb24gcGFkbGVmdDAob2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmoudG9TdHJpbmcoKS5yZXBsYWNlKC9eWzAtOV17MX0kLywgXCIwXCIgKyBvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59O1xyXG4vL+WKoOi9vea1i+ivhOWtpueUn+WIl+ihqFxyXG5mdW5jdGlvbiBsb2FkRXhhbVN0dShwYWdlKSB7XHJcblxyXG4gICAgaWYgKHBhZ2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcGFnZSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liqDovb3liJfooahcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmdFeGFtL0V4YW0vR2V0UmVJbml0XCIsXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgU2VyY2hOYW1lOiBlc2NhcGUoJChcIiN0eHRzZXJjaFwiKS52YWwoKSksXHJcbiAgICAgICAgICAgIElzQ29udHJhY3Q6ICQoXCIjY29uc3RhdGVcIikudmFsKCksLy/ml7blgJnnrb7nuqZcclxuICAgICAgICAgICAgVGVhY2hlcklkOiAkKFwiI2N0ZWFjaGVyXCIpLnZhbCgpLC8v5ZKo6K+i5biIXHJcbiAgICAgICAgICAgIFBhZ2VJbmRleDogcGFnZSxcclxuICAgICAgICAgICAgUGFnZVNpemU6IDEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiN0YlwiKS5odG1sKHRwbFRhYmxlKGRhdGEuRGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNUb3RhbGNvdW50XCIpLmh0bWwoZGF0YS5QYWdlU3VtKTtcclxuICAgICAgICAgICAgICAgIFBhZ2luYXRvci5QYWdpbmF0b3IoMTAsIHBhZ2UsIGRhdGEuUGFnZVN1bSwgbG9hZEV4YW1TdHUpO1xyXG4gICAgICAgICAgICAgICAgLy/liqDovb3lkqjor6LluIjliJfooahcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3RiXCIpLmh0bWwoXCJcIik7Ly/muIXnqbrmlbDmja5cclxuICAgICAgICAgICAgICAgICQoXCIjcGFnaW5hdGlvblwiKS5odG1sKFwiXCIpOy8v5YiG6aG15o6n5Lu25LiN5pi+56S6XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcbi8v5Yqg6L295ZKo6K+i5biI5YiX6KGoXHJcbmZ1bmN0aW9uIGxvYWRDb3Vuc2Vsb3JzKCkge1xyXG5cclxuICAgIC8v5Yqg6L295YiX6KGoXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnWmlYdW4vWmlYdW5HdWFuTGkvR2V0WmlYdW5TaGlCeVNjaG9vbElkXCIsXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0LkRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBqbGh0bWwgPSAnPG9wdGlvbiB2YWx1ZT1cIi0xXCI+5ZKo6K+i5biIPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgIC8v5Yqg6L295ZKo6K+i5biI5YiX6KGoXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YS5yZXN1bHQuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdC5EYXRhW2tleV0uVXNlcklkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqbGh0bWwgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgZGF0YS5yZXN1bHQuRGF0YVtrZXldLlVzZXJJZCArICdcIj4nICsgZGF0YS5yZXN1bHQuRGF0YVtrZXldLlVzZXJOYW1lICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJChcIiNjdGVhY2hlclwiKS5odG1sKGpsaHRtbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9hZEV4YW1TdHUoKTsvL+WKoOi9vea1i+ivhOaVsOaNrlxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy/liqDovb3lpIfms6jliJfooahcclxuZnVuY3Rpb24gbG9hZE1hcmtzKGlkKSB7XHJcblxyXG4gICAgLy/liqDovb3liJfooahcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmdFeGFtL0V4YW0vR2V0U3R1TWFya1wiLFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIFRlbXBJRDppZFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNtYXJrc2hvd1wiKS5odG1sKHRwbE1hcmsoZGF0YS5EYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAvL+WKoOi9veWSqOivouW4iOWIl+ihqFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcblxyXG4vL+e7keWumuaVsOaNrlxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBtb2R1bGUuaW5pdCgpO1xyXG5cclxuXHJcblxyXG59KTtcclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdGltZXIgPSBudWxsO1xyXG4gICAgLy/ngrnlh7vmkJzntKLmoYblvIDlp4tcclxuICAgICQoXCIuc2VhcmNoXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICQodGhpcykuY3NzKFwiYmFja2dyb3VuZFwiLCBcIiNjYjQ0MWVcIik7XHJcbiAgICAgICAgdmFyIHNlcmNodGV4dCA9ICQoXCIuc2VhcmNoLXRleHRcIik7XHJcblxyXG4gICAgICAgIHNlcmNodGV4dC5zaG93KCk7XHJcbiAgICAgICAgaWYgKCEoc2VyY2h0ZXh0Lmhhc0NsYXNzKFwib25cIikpKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXJjaHRleHQuc3RvcCgpO1xyXG4gICAgICAgICAgICBzZXJjaHRleHQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxNjBweFwiXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICBzZXJjaHRleHQuYWRkQ2xhc3MoXCJvblwiKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VyY2h0ZXh0LnN0b3AoKTtcclxuICAgICAgICAgICAgc2VyY2h0ZXh0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMHB4XCJcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIHNlcmNodGV4dC5yZW1vdmVDbGFzcyhcIm9uXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1vZHVsZS5pbml0KCk7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8v54K55Ye75pCc57Si5qGG57uT5p2fXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE9wdEJ1dCgpIHtcclxuXHJcblxyXG4gICAgYWxlcnQoXCLmjInpkq7ov5vooYzkuobngrnlh7tcIik7XHJcblxyXG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmdFdmFsdWF0aW9uL2NvdW5zZWxvci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDIxXG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnRXZhbHVhdGlvbi9jb3Vuc2Vsb3InLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRvdXQ9Jyc7JG91dCs9JyAnO1xuJGVhY2goJGRhdGEsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDx0ciBjbGFzcz1cImZvbnQxMlwiPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlRlbXBOYW1lKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlBob25lKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkV4YW1UeXBlTik7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Ub3RhbEhvdXJOKTtcbiRvdXQrPSc8L3RkPiA8dGQgY2xhc3M9XCJyZWRcIj4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuSXNGaWxlPT1mYWxzZT9cIuacquetvue6plwiOlwi562+57qmXCIpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuRWRpdFRpbWVTdHIpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQ291bnNlbG9yTmFtZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPiA8YSBocmVmPVwiL09yZ1ppWHVuL1ppWHVuR3VhbkxpL1NpZ25VcD9JZD0nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuVGVtcElEKTtcbiRvdXQrPSdcIiBjbGFzcz1cIm9wZXJhdGUtYnRuIGxvb2sgY29uXCI+5oql5ZCN562+57qmPC9hPjwvdGQ+IDx0ZD48c3BhbiBjbGFzcz1cIm9wZXJhdGUtYnRuIGxvb2sgbWFza1wiIGRhdGEtaWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuVGVtcElEKTtcbiRvdXQrPSdcIj7lpIfms6g8L3NwYW4+PC90ZD4gPHRkPjxzcGFuIGNsYXNzPVwib3BlcmF0ZS1idG4gbG9vayBzaG93XCIgZGF0YS1pZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5UZW1wSUQpO1xuJG91dCs9J1wiPuafpeecizwvc3Bhbj48L3RkPiA8L3RyPiAnO1xufSk7XG4kb3V0Kz0nICc7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ0V2YWx1YXRpb24vY291bnNlbG9yLnRwbFxuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDIxXG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnRXZhbHVhdGlvbi9leGFtbWFyaycsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nIDxkaXYgaWQ9XCJhZGRtYXJrXCI+ICc7XG4kZWFjaCgkZGF0YSxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPGRpdiBjbGFzcz1cIm92ZXJmbG93IGFkZGl2XCIgaWQ9XCJkaXYnO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuTWFya0lEKTtcbiRvdXQrPSdcIj4gPHA+ICc7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5SZW1hcmspO1xuJG91dCs9JyA8L3A+IDxzcGFuIGNsYXNzPVwiZm9udDEyIHJpZ2h0XCI+ICc7XG4kb3V0Kz0kZXNjYXBlKCRoZWxwZXJzLiBkYXRlRm9ybWF0KCR2YWx1ZS5DcmVhdGVUaW1lICwgIFwieXl5eS1NTS1kZFwiKSk7XG4kb3V0Kz0nIDxpIGNsYXNzPVwiZGVsZXRlLWljb24gbWwxMCBkZWxldGVcIiBpZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5NYXJrSUQpO1xuJG91dCs9J1wiPjwvaT4gPC9zcGFuPiA8L2Rpdj4gJztcbn0pO1xuJG91dCs9JyA8L2Rpdj4gPGRpdiBjbGFzcz1cImlucHV0LWJveFwiPiA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlhoXlrrlcIiBjbGFzcz1cIm10MTBcIiBtYXhsZW5ndGg9XCIzMFwiIGlkPVwibWFza3RleHRcIj48L3RleHRhcmVhPiA8c3BhbiBjbGFzcz1cImNvdW50LW51bVwiIGlkPVwid29yZExlbmd0aFwiPiA8aSBjbGFzcz1cInJlZCBub3JtYWxcIj4wPC9pPi8zMCA8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VudGVyIG1iNSBoaWRkZW5cIiBpZD1cImFkZHRpcFwiPiA8L2Rpdj4gPGRpdiBjbGFzcz1cImhhbmRsZSBmb250MTQgYXV0byBtdDIwXCI+IDxzcGFuIGNsYXNzPVwic3VibWl0XCIgaWQ9XCJtYXJrU2F2ZVwiPuehruWumjwvc3Bhbj4gPC9kaXY+ICc7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ0V2YWx1YXRpb24vZXhhbW1hcmsudHBsXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMjFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9