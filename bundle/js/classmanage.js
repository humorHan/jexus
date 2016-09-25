webpackJsonp([18,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(38);


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

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var Paginator = __webpack_require__(8);
	var pageSize = 10;
	var tplTable = __webpack_require__(40);
	var tplTableAllocation = __webpack_require__(41);
	var ishasteacher = $("#idsearch").val();
	var classname = $.trim($(".serchtext").val());
	
	function paging(page) {
	    module.loadPaperList(page);
	}
	var module = {
	    init: function () {
	        this.loadPaperList(1);
	    }
	    , loadPaperList: function (page) {
	
	        var obj = { PageIndex: page, PageSize: pageSize, IsAuto: false, IsDel: false, IsEnable: true, TeacherState: ishasteacher, ClassName: classname };
	
	        //获取班级的列表
	        $.ajax({
	            type: "POST",
	            url: "/Org/ClassManage/GetClass",
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
	                    Paginator.Paginator(pageSize, page, totalNum, paging);
	
	                } else {
	                    var html = '<tr class="font12"><td colspan=4>' + _result.Result + '</td></tr>';
	                    $("#idTableClass tbody").html(html);
	                }
	
	                $(".look").click(function () {
	                    var $this = $(this);
	                    clickLook($this.attr("data-classid"));
	                });
	
	                //分配老师
	                $(".distribute").click(function () {
	                    var data = $(this).attr("data-classid");
	                    distributeClick(data);
	                })
	            }
	        });
	    }
	
	};
	
	//分配老师
	function distributeClick(classid) {
	    $(".distributeBox,.pop-mask").show();
	
	    //页面展示，数据获取
	    var obj = { ClassID: classid };
	    $.ajax({
	        url: "/Org/ClassManage/GetAllocatonData",
	        data: { str: JSON.stringify(obj) },
	        dataType: 'json',
	        type: 'POST',
	        success: function (data) {
	            var _result = data.result;
	            if (_result.OK) {
	                $("#AllocationDiv").html(tplTableAllocation(_result.Data));
	                var firstTeacherid;//
	                //清空已选老师
	                $('.chosedteacher not:eq(0)').remove();
	                //1.先看下有没有已选的老师
	                var haveTeacherNum = $(".chosedteacher li").length;
	                if (haveTeacherNum == 1) {
	                    //1.1 没有分配老师，默认加载页面后，要给右侧老师赋值当前的科目ID
	                    var currentSubjectID = $(".leftnews li[class='choose-sub']").attr("data-subjectid");
	                    $(".rightnews input").attr("data-subjectid", currentSubjectID);
	                } else {
	                    //1.2 已分配老师，选出第一个老师的信息，值于默认状态
	                    var firstSubjectid = $(".chosedteacher li:eq(1)").first().find("span:eq(0)").attr("data-subjectid");
	                    firstTeacherid = $(".chosedteacher li:eq(1)").first().find("span:eq(1)").attr("data-userid");
	                    $(".leftnews li").removeClass("choose-sub");
	                    $(".leftnews li[data-subjectid='" + firstSubjectid + "']").addClass("choose-sub");
	                    GetTeacherBySubjectID(firstSubjectid);
	                }
	                //2.当点击科目时
	                $(".leftnews li").click(function () {
	                    var $this = $(this);
	                    $this.addClass("choose-sub").siblings().removeClass("choose-sub");
	                    var sid = $this.attr("data-subjectid");
	                    GetTeacherBySubjectID(sid);
	                });
	                //3.当点击删除时,先从页面移除，确定后再进行数据库操作。
	                $(".dele").click(function () {
	                    DeleteLogic(this);
	                    //DeleteTeacher(classid, deleteuserid, deletesubjectid);
	                });
	                //4.当点击确定提交时
	                $("#BtnAllocationSubmit").bind('click', function () {
	                    AllocationSubmit(classid);
	                });
	                //5.当点击分配老师时，第一次加载时
	                $('input[name="math"]:radio').change(function () {
	                    ClickTeacher(this);
	                });
	
	            } else {
	                $("#AllocationDiv").html("没有数据记录！");
	            }
	
	        },
	        error: function (data) {
	
	        }
	    });
	
	
	}
	
	//分配教师点击确定提交
	function AllocationSubmit(classid) {
	    var lis = $(".chosedteacher li");
	    if (lis.length > 1) {
	        var jarr = [];
	        for (var i = 1; i <= lis.length - 1; i++) {
	            var obj = { CourseID: '', UserID: "", UserName: '', SubjectID: '', SubjectName: '', ClassID: classid };
	            var $rt = $(".chosedteacher li:eq(" + i + ")");
	            obj.SubjectID = $rt.find("span:eq(0)").attr("data-subjectid");
	            obj.CourseID = $rt.find("span:eq(0)").attr("data-courseid");
	            obj.SubjectName = $rt.find("span:eq(0)").text();
	            obj.UserID = $rt.find("span:eq(1)").attr("data-userid");
	            obj.UserName = $rt.find("span:eq(1)").text();
	            jarr.push(obj);
	        }
	        $.ajax({
	            type: 'POST',
	            url: '/Org/ClassManage/AllocationTeacherUpdate',
	            data: { str: JSON.stringify(jarr) },
	            dataType: 'json',
	            success: function (data) {
	                paging(1);
	            },
	            error: function (data) {
	
	            }
	
	        });
	    }
	    //关闭窗口
	    $(".createClass,.pop-mask").hide();
	    $(".distributeBox").hide();
	}
	
	function DeleteLogic(event) {
	    var $this = $(event);
	    var deleteuserid = $this.attr("data-userid");
	    var radioNews = $(".rightnews li :radio[value='" + deleteuserid + "']");
	    if (radioNews) {
	        radioNews[0].checked = false;
	    }
	    $this.parent().parent().remove();
	    var deletesubjectid = $this.attr("data-subjectid");
	}
	
	//分配老师删除
	function DeleteTeacher(classid, deleteuserid, deletesubjectid) {
	    //alert(classid + "," + deleteuserid + "," + deletesubjectid);
	    var obj = { ClassID: classid, UserID: deleteuserid, SubjectID: deletesubjectid };
	    $.ajax({
	        url: '/Org/ClassManage/DeleteTeacher',
	        type: 'POST',
	        data: { str: JSON.stringify(obj) },
	        dataType: 'json',
	        success: function (data) {
	
	        }, error: function (data) {
	
	        }
	    });
	}
	
	//点击老师时
	function ClickTeacher(event) {
	    var $this = $(event);
	    var userid = $this.val();
	    var subjectid = $this.attr("data-subjectid");
	    var username = $this.attr("data-username");
	    var $liTeacher = $(".chosedteacher li");
	    var Exist = false;
	    $liTeacher.each(function () {
	        var $this2 = $(this);
	        var sjd = $this2.find("span:eq(0)").attr("data-subjectid");
	        if (sjd == subjectid) {
	            $this2.find("span:eq(1)").attr("data-userid", userid);
	            $this2.find("span:eq(1)").text(username);
	
	            $this2.find("span:eq(2) i").attr("data-userid", userid);
	            $this2.find("span:eq(2) i").attr("data-subjectid", subjectid);
	
	            Exist = true;
	        }
	    });
	    //不存在，则添加
	    if (!Exist) {
	
	        var subjectName = $(".leftnews li[class='choose-sub']").text();
	        var htm = "<li><span data-subjectid='" + subjectid + "'>" + subjectName + "</span><span data-userid='" + userid + "'>" + username + "</span>";
	        htm += "<span><i class=\"dele cursor\" data-subjectid=\"" + subjectid + "\" data-userid=\"" + userid + "\"></i></span></li>";
	        $(htm).appendTo($(".chosedteacher"));
	        $(".dele").click(function () {
	            DeleteLogic(this);
	        });
	    }
	}
	
	//点击左侧的科目，右侧显示相应的老师
	function GetTeacherBySubjectID(sid) {
	    var html = "";
	    var firstTeacherid = $(".chosedteacher li:eq(1)").first().find("span:eq(1)").attr("data-userid");
	    $.ajax({
	        url: '/Org/ClassManage/GetTeacherBySubjectId',
	        type: 'POST',
	        data: { "sid": sid },
	        dataType: 'json',
	        success: function (data) {
	            var _result = data.result;
	
	            if (_result.OK && _result.Data.ListUser.length > 0) {
	                var datalist = _result.Data.ListUser;
	                html += "<li>";
	                for (var i = 0; i < datalist.length; i++) {
	                    html += "<span class=\"teach-name\"><label><input type=\"radio\" name=\"math\" value='" + datalist[i].UserID + "'  data-subjectid='" + datalist[i].SubjectID + "' data-username='" + datalist[i].UserName + "' />" + datalist[i].UserName + "</label></span>";
	                    if ((i + 1) % 2 == 0) {
	                        html += "</li><li>";
	                    }
	                }
	                html += "</li>";
	                $(".rightnews").html(html);
	                //当点击老师时，下面已选择的老师进行更新或添加
	                $('input[name="math"]:radio').change(function () {
	                    ClickTeacher(this);
	                });
	
	
	                //1.3默认选中第一个老师
	                //if (firstTeacherid!=undefined) {
	                //    $(".rightnews li :radio[value=" + firstTeacherid + "]").attr("checked", "checked");
	                //}
	                //2.点击后判断下面是否有该科目的老师，如果有，则默认选中。
	                var userid = $(".chosedteacher li span[data-subjectid='" + sid + "']").parent().find("span:eq(1)").attr("data-userid");
	                $(".rightnews li :radio[value=" + userid + "]").attr("checked", "checked");
	
	
	            } else {
	                html = "<li>该科目无老师！</li>";
	                $(".rightnews").html(html);
	            }
	        },
	        error: function (data) {
	            html = "<li>" + data.Result + "</li>";
	            $(".rightnews").html(html);
	        }
	    });
	}
	
	//点击查看
	function clickLook(classid) {
	    window.location.href = "/Org/ClassManage/ClassDetail/?classid=" + classid + "&comefrom=1";
	}
	
	//点击老师状态时
	function LoadPageForSearch() {
	    ishasteacher = $("#idsearch").val();
	    classname = $.trim($(".serchtext").val());
	    module.loadPaperList(1);
	}
	
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
	    $(".serch").click(function () {
	        $(this).css("background", "#cb441e");
	        var serchtext = $(".serchtext");
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
	
	    //定义提示语
	    var classNameNum = 12;
	    var classNameMax = "班级名称不能超过6个字符！";
	
	    //创建班级》验证
	    $("#inputClassName").bind('blur', function () {
	        var $this = $(this);
	        var inval = $.trim($this.val());
	        if (inval == '') {
	            $("#inputmsg").html("班级名称不能为空！");
	            return;
	        }
	        if (getChrLen(inval, classNameNum) > classNameNum) {
	            $("#inputmsg").html(classNameMax);
	            return;
	        }
	        $("#inputmsg").html("");
	    });
	
	    //创建班级》点击完成按扭
	    $("#btnCreateClassSubmit").click(function () {
	        var classname = $.trim($("#inputClassName").val());
	        if (getChrLen(classname, classNameNum) > classNameNum) {
	            $("#inputmsg").html(classNameMax);
	            return false;
	        } else {
	            var obj = { ClassName: "" };
	            obj.ClassName = classname;
	            $.ajax({
	                type: 'POST',
	                url: '/Org/ClassManage/AddClass',
	                data: { str: JSON.stringify(obj) },
	                dataType: 'json',
	                success: function (data) {
	                    var ok = data.result.OK;
	                    if (!ok) {
	                        $("#inputmsg").html(data.result.Result);
	                        return;
	                    } else {
	                        $(".pop-mask").hide();
	                        $(".createClass").hide();
	                        $(".distributeBox").hide();
	                        //刷新页面
	                        module.init();
	                    }
	                },
	                error: function (data) {
	                    //debugger;
	                }
	
	            });
	        }
	
	    });
	
	    //筛选分配或未分配时
	    $("#idsearch").bind('change', function () {
	        LoadPageForSearch();
	    });
	})
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)(module)))

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

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgClass/classlist',function($data,$filename
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
	$out+='</td> <td><span class="see-btn distribute mr10" data-classid="';
	$out+=$escape($value.ClassID);
	$out+='">';
	$out+=$escape($value.BtnAllocationText);
	$out+='</span><span class="see-btn look" data-classid="';
	$out+=$escape($value.ClassID);
	$out+='">查看</span></td> </tr> ';
	});
	return new String($out);
	});

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgClass/ClassAllocation',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,ListStudentInfo=$data.ListStudentInfo,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,ListUser=$data.ListUser,ListCat=$data.ListCat,$out='';$out+=' <div class="choosebox"> <p class="head"> 选择老师 </p> <div class="chooseteacher center"> <ul class="overflow"> <li class="left left-content"> <p class="head">学科</p> <ul class="leftnews"> ';
	$each(ListStudentInfo,function($value,$index){
	$out+=' ';
	if(($index)==0 ){
	$out+=' <li class="choose-sub" data-subjectid="';
	$out+=$escape($value.SubjectID);
	$out+='">';
	$out+=$escape($value.SubjectName);
	$out+='</li> ';
	}else{
	$out+=' <li data-subjectid="';
	$out+=$escape($value.SubjectID);
	$out+='">';
	$out+=$escape($value.SubjectName);
	$out+='</li> ';
	}
	$out+=' ';
	});
	$out+=' </ul> </li> <li class="left right-content"> <p class="head">老师</p> <ul class="rightnews"> <li> ';
	$each(ListUser,function($value,$index){
	$out+=' <span class="teach-name"> <label> <input type="radio" name="math" value="';
	$out+=$escape($value.UserID);
	$out+='" data-subjectid="';
	$out+=$escape($value.SubjectID);
	$out+='" data-username="';
	$out+=$escape($value.UserName);
	$out+='" />';
	$out+=$escape($value.UserName);
	$out+=' </label> </span> ';
	if((($index)+1)/2==0 ){
	$out+=' </li><li> ';
	}
	$out+=' </li> ';
	});
	$out+=' </ul> </li> </ul> </div> <p class="head"> 已选老师 </p> <ul class="chosedteacher overflow"> <li> <span>学科</span> <span>老师</span> <span>操作</span> </li> ';
	$each(ListCat,function($value,$index){
	$out+=' <li> <span data-courseid="';
	$out+=$escape($value.CourseID);
	$out+='" data-subjectid="';
	$out+=$escape($value.SubjectID);
	$out+='">';
	$out+=$escape($value.SubjectName);
	$out+='</span> <span data-userid="';
	$out+=$escape($value.UserID);
	$out+='">';
	$out+=$escape($value.UserName);
	$out+='</span> <span> <i class="dele cursor" data-subjectid="';
	$out+=$escape($value.SubjectID);
	$out+='" data-userid="';
	$out+=$escape($value.UserID);
	$out+='"></i> </span> </li> ';
	});
	$out+=' </ul> <div class="handle"> <button class="block submit font14 auto cursor mt13" id="BtnAllocationSubmit">确定</button> </div> </div>';
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL1BhZ2luYXRvci5qcz9iZTgxKioqIiwid2VicGFjazovLy8uL09yZy9qcy9PcmcvY2xhc3NtYW5hZ2UuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZ0NsYXNzL2NsYXNzbGlzdC50cGwiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9PcmdDbGFzcy9DbGFzc0FsbG9jYXRpb24udHBsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFrQztBQUNsQzs7QUFFQTtBQUNBLHlDQUF3QyxPQUFPLDJCQUEyQjtBQUMxRTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXFDLFlBQVk7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QixpRUFBaUU7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0EsYUFBWSxlQUFlO0FBQzNCLGtEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBcUI7QUFDckIsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixHQUFFO0FBQ0Ysa0NBQWlDO0FBQ2pDLElBQUc7QUFDSCxlQUFjO0FBQ2Q7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0YsRUFBQyxHOzs7Ozs7O0FDOUVEO0FBQ0E7QUFDQTs7QUFF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QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxFQUFDLEUiLCJmaWxlIjoiY2xhc3NtYW5hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlRNT0RKUzp7fSovXHJcbiFmdW5jdGlvbiAoKSB7XHJcblx0ZnVuY3Rpb24gYShhLCBiKSB7XHJcblx0XHRyZXR1cm4gKC9zdHJpbmd8ZnVuY3Rpb24vLnRlc3QodHlwZW9mIGIpID8gaCA6IGcpKGEsIGIpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBiKGEsIGMpIHtcclxuXHRcdHJldHVybiBcInN0cmluZ1wiICE9IHR5cGVvZiBhICYmIChjID0gdHlwZW9mIGEsIFwibnVtYmVyXCIgPT09IGMgPyBhICs9IFwiXCIgOiBhID0gXCJmdW5jdGlvblwiID09PSBjID8gYihhLmNhbGwoYSkpIDogXCJcIiksIGFcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGMoYSkge1xyXG5cdFx0cmV0dXJuIGxbYV1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGQoYSkge1xyXG5cdFx0cmV0dXJuIGIoYSkucmVwbGFjZSgvJig/IVtcXHcjXSs7KXxbPD5cIiddL2csIGMpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBlKGEsIGIpIHtcclxuXHRcdGlmIChtKGEpKWZvciAodmFyIGMgPSAwLCBkID0gYS5sZW5ndGg7IGQgPiBjOyBjKyspYi5jYWxsKGEsIGFbY10sIGMsIGEpOyBlbHNlIGZvciAoYyBpbiBhKWIuY2FsbChhLCBhW2NdLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZihhLCBiKSB7XHJcblx0XHR2YXIgYyA9IC8oXFwvKVteXFwvXStcXDFcXC5cXC5cXDEvLCBkID0gKFwiLi9cIiArIGEpLnJlcGxhY2UoL1teXFwvXSskLywgXCJcIiksIGUgPSBkICsgYjtcclxuXHRcdGZvciAoZSA9IGUucmVwbGFjZSgvXFwvXFwuXFwvL2csIFwiL1wiKTsgZS5tYXRjaChjKTspZSA9IGUucmVwbGFjZShjLCBcIi9cIik7XHJcblx0XHRyZXR1cm4gZVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZyhiLCBjKSB7XHJcblx0XHR2YXIgZCA9IGEuZ2V0KGIpIHx8IGkoe2ZpbGVuYW1lOiBiLCBuYW1lOiBcIlJlbmRlciBFcnJvclwiLCBtZXNzYWdlOiBcIlRlbXBsYXRlIG5vdCBmb3VuZFwifSk7XHJcblx0XHRyZXR1cm4gYyA/IGQoYykgOiBkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoKGEsIGIpIHtcclxuXHRcdGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBiKSB7XHJcblx0XHRcdHZhciBjID0gYjtcclxuXHRcdFx0YiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IGsoYylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dmFyIGQgPSBqW2FdID0gZnVuY3Rpb24gKGMpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IGIoYywgYSkgKyBcIlwiXHJcblx0XHRcdH0gY2F0Y2ggKGQpIHtcclxuXHRcdFx0XHRyZXR1cm4gaShkKSgpXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gZC5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSA9IG4sIGQudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBiICsgXCJcIlxyXG5cdFx0fSwgZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaShhKSB7XHJcblx0XHR2YXIgYiA9IFwie1RlbXBsYXRlIEVycm9yfVwiLCBjID0gYS5zdGFjayB8fCBcIlwiO1xyXG5cdFx0aWYgKGMpYyA9IGMuc3BsaXQoXCJcXG5cIikuc2xpY2UoMCwgMikuam9pbihcIlxcblwiKTsgZWxzZSBmb3IgKHZhciBkIGluIGEpYyArPSBcIjxcIiArIGQgKyBcIj5cXG5cIiArIGFbZF0gKyBcIlxcblxcblwiO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIFwib2JqZWN0XCIgPT0gdHlwZW9mIGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcihiICsgXCJcXG5cXG5cIiArIGMpLCBiXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgaiA9IGEuY2FjaGUgPSB7fSwgayA9IHRoaXMuU3RyaW5nLCBsID0ge1xyXG5cdFx0XCI8XCI6IFwiJiM2MDtcIixcclxuXHRcdFwiPlwiOiBcIiYjNjI7XCIsXHJcblx0XHQnXCInOiBcIiYjMzQ7XCIsXHJcblx0XHRcIidcIjogXCImIzM5O1wiLFxyXG5cdFx0XCImXCI6IFwiJiMzODtcIlxyXG5cdH0sIG0gPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRcdHJldHVybiBcIltvYmplY3QgQXJyYXldXCIgPT09IHt9LnRvU3RyaW5nLmNhbGwoYSlcclxuXHRcdH0sIG4gPSBhLnV0aWxzID0ge1xyXG5cdFx0JGhlbHBlcnM6IHt9LCAkaW5jbHVkZTogZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuXHRcdFx0cmV0dXJuIGEgPSBmKGMsIGEpLCBnKGEsIGIpXHJcblx0XHR9LCAkc3RyaW5nOiBiLCAkZXNjYXBlOiBkLCAkZWFjaDogZVxyXG5cdH0sIG8gPSBhLmhlbHBlcnMgPSBuLiRoZWxwZXJzO1xyXG5cdGEuZ2V0ID0gZnVuY3Rpb24gKGEpIHtcclxuXHRcdHJldHVybiBqW2EucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpXVxyXG5cdH0sIGEuaGVscGVyID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdG9bYV0gPSBiXHJcblx0fSwgbW9kdWxlLmV4cG9ydHMgPSBhXHJcbn0oKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90bW9kanMtbG9hZGVyL3J1bnRpbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgOCAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMSAyMyAyNSAyNiAyNyAzMSAzMiAzMyAzNyAzOFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUGFnaW5hdG9yOiBmdW5jdGlvbiAocGFnZVNpemUsIGN1cnJlbnRQYWdlLCB0b3RhbENvdW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIC8vdG9kbyDnu5Hlrprkuovku7ZcclxuICAgICAgIFxyXG4gICAgICAgIHZhciB0b3RhbFBhZ2VzO1xyXG4gICAgICAgIGlmICh0b3RhbENvdW50ICUgcGFnZVNpemUgPT0gMCkge1xyXG4gICAgICAgICAgICB0b3RhbFBhZ2VzID0gdG90YWxDb3VudCAvIHBhZ2VTaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG90YWxQYWdlcyA9IHBhcnNlSW50KHRvdGFsQ291bnQgLyBwYWdlU2l6ZSkgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGFnZVByZSA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDEpICsgJyBjbGFzcz1cInByZS1wYWdlIGlubGluZSBtcjIwXCI+5LiK5LiA6aG1PC9hPic7XHJcbiAgICAgICAgdmFyIHBhZ2VOZXh0ID0gJzxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgMSkgKyAnIGNsYXNzPVwibmV4dC1wYWdlIGlubGluZVwiPuS4i+S4gOmhtTwvYT4nO1xyXG4gICAgICAgIHZhciBpbmRleFBhZ2UgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCIgY2xhc3M9XCJwcmUtcGFnZSBpbmxpbmUgbXIyMFwiPummlumhtTwvYT48L2xpPic7XHJcblxyXG4gICAgICAgIHZhciBsYXN0UGFnZSA9ICcgPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIHRvdGFsUGFnZXMgKyAnIGNsYXNzPVwicHJlLXBhZ2UgaW5saW5lIG1yMjBcIj4g5pyr6aG1PC9hPic7XHJcbiAgICAgICAgaWYgKHRvdGFsUGFnZXMgPCBwYWdlU2l6ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZ2VQcmUgPSBcIlwiO1xyXG4gICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGluZGV4UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxhc3RQYWdlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgICAgIHBhZ2VQcmUgPSBcIlwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlID49IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxhc3RQYWdlID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0b3RhbENvdW50ID4gMCkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgcGFnZW51bSA9ICc8dWwgY2xhc3M9XCJwYWdlLWJveCBpbmxpbmUgbXIyMFwiPic7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gMSkgLy/nrKzkuIDpobVcclxuICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kKFwiIDxhIGRpc2FibGVkPSdkaXNhYmxlZCcgY2xhc3M9J2NvbEgnPuS4iuS4gOmhtTwvYT4gXCIpOy8v5LiK5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpITnkIbpppbpobXov57mjqVcclxuICAgICAgICAgICAgICAgICAgICAvL+WkhOeQhuS4iuS4gOmhteeahOi/nuaOpVxyXG4gICAgICAgICAgICAgICAgICAgIC8vcGFnZVByZSA9ICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMSkgKyAnPuS4iuS4gOmhtTwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG91dHB1dC5BcHBlbmRGb3JtYXQoXCIgPGEgZGF0YS1wYWdlSW5kZXg9J3swfScgY2xhc3M9J3BhZ2VMaW5rJz7kuIrkuIDpobU8L2E+IFwiLCBjdXJyZW50UGFnZSAtIDEpOy8v5LiK5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWxQYWdlcyA+IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmludCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgNCkvLzRcclxuICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSBpICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDYpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIDcgKyAnPi4uLjwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJz4nICsgdG90YWxQYWdlcyArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAoaSArIDEpICsgJz4nICsgKGkgKyAxKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9Ly80XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFBhZ2UgPj0gNCAmJiBjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgLSAzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BhZ2VudW09cGFnZW51bSsnIDxsaSBkYXRhLW51bT0nKyhjdXJyZW50UGFnZS0zKSsnPjxhIGhyZWY9XCIjXCIgb25jbGljaz1cIlBhZ2luYXRvcignK3BhZ2VTaXplKycsJysoY3VycmVudFBhZ2UtMykrJywnICsgdG90YWxDb3VudCArICcpXCI+Li4uPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT1cIjFcIj4xPC9hPiA8L2xpPic7Ly8yMDE2MDkxMzA5MzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMyA+IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMykgKyAnPi4uLjwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSAzKS8v5Lit6Ze05b2T5YmN6aG1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiBkYXRhLW51bT0nICsgKGN1cnJlbnRQYWdlKSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSA2KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDMpICsgJz4uLi48L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJz4nICsgdG90YWxQYWdlcyArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgaSAtIHBhcnNlSW50KGN1cnJpbnQpKSArICc+JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyBpIC0gcGFyc2VJbnQoY3VycmludCkpICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCI+MTwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGRhdGEtbnVtPScgKyAocGFyc2VJbnQodG90YWxQYWdlcykgLSA2KSArICc+Li4uPC9hPiA8L2xpPic7Ly8yMDE2MDkxMzA5MzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VzIC0gNiArIGkgPT0gY3VycmVudFBhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiAgZGF0YS1udW09JyArIGN1cnJlbnRQYWdlICsgJz4nICsgY3VycmVudFBhZ2UgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHRvdGFsUGFnZXMgLSA2ICsgaSkgKyAnPicgKyAodG90YWxQYWdlcyAtIDYgKyBpKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbFBhZ2VzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09IGkgKyAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgZGF0YS1udW09JyArIGN1cnJlbnRQYWdlICsgJz4nICsgY3VycmVudFBhZ2UgKyAnPC9hPiA8L2xpPic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChpICsgMSkgKyAnPicgKyAoaSArIDEpICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSB0b3RhbFBhZ2VzKSAvL+acgOWQjuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgey8v5aSE55CG5LiL5LiA6aG15ZKM5bC+6aG155qE6ZO+5o6lXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kKFwiIDxhIGRpc2FibGVkPSdkaXNhYmxlZCcgY2xhc3M9J2NvbEgnPuS4i+S4gOmhtTwvYT4gXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzKSB7Ly/lpITnkIbkuIvkuIDpobXlkozlsL7pobXnmoTpk77mjqUgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL291dHB1dC5BcHBlbmRGb3JtYXQoXCIgPGEgZGF0YS1wYWdlaW5kZXg9J3swfScgY2xhc3M9J3BhZ2VMaW5rJz7kuIvkuIDpobU8L2E+IFwiLCBjdXJyZW50UGFnZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgLy8gcGFnZVByZSA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDEpICsgJyBjbGFzcz1cIm5leHQtcGFnZSBpbmxpbmVcIj7kuIvkuIDpobU8L2E+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICc8L3VsPic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBpbmRleFBhZ2UgKyBwYWdlUHJlICsgcGFnZW51bSArIHBhZ2VOZXh0ICsgbGFzdFBhZ2U7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI3BhZ2luYXRpb24gYVwiKS51bmJpbmQoXCJjbGlja1wiKTtcclxuICAgICAgICAkKFwiI3BhZ2luYXRpb24gYVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygkKHRoaXMpLmF0dHIoXCJkYXRhLW51bVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi8vZnVuY3Rpb24gUGFnaW5hdG9yKHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgdG90YWxDb3VudCwgY2FsbGJhY2spIHtcclxuXHJcblxyXG4vL31cclxuXHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvZGVwL1BhZ2luYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAxMyAxNiAxOCAxOSAyMSAyNiAyNyAzMSAzMyAzOFxuICoqLyIsInZhciBQYWdpbmF0b3IgPSByZXF1aXJlKCdQYWdpbmF0b3IuanMnKTtcclxudmFyIHBhZ2VTaXplID0gMTA7XHJcbnZhciB0cGxUYWJsZSA9IHJlcXVpcmUoXCJPcmdDbGFzcy9jbGFzc2xpc3QudHBsXCIpO1xyXG52YXIgdHBsVGFibGVBbGxvY2F0aW9uID0gcmVxdWlyZShcIk9yZ0NsYXNzL0NsYXNzQWxsb2NhdGlvbi50cGxcIik7XHJcbnZhciBpc2hhc3RlYWNoZXIgPSAkKFwiI2lkc2VhcmNoXCIpLnZhbCgpO1xyXG52YXIgY2xhc3NuYW1lID0gJC50cmltKCQoXCIuc2VyY2h0ZXh0XCIpLnZhbCgpKTtcclxuXHJcbmZ1bmN0aW9uIHBhZ2luZyhwYWdlKSB7XHJcbiAgICBtb2R1bGUubG9hZFBhcGVyTGlzdChwYWdlKTtcclxufVxyXG52YXIgbW9kdWxlID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubG9hZFBhcGVyTGlzdCgxKTtcclxuICAgIH1cclxuICAgICwgbG9hZFBhcGVyTGlzdDogZnVuY3Rpb24gKHBhZ2UpIHtcclxuXHJcbiAgICAgICAgdmFyIG9iaiA9IHsgUGFnZUluZGV4OiBwYWdlLCBQYWdlU2l6ZTogcGFnZVNpemUsIElzQXV0bzogZmFsc2UsIElzRGVsOiBmYWxzZSwgSXNFbmFibGU6IHRydWUsIFRlYWNoZXJTdGF0ZTogaXNoYXN0ZWFjaGVyLCBDbGFzc05hbWU6IGNsYXNzbmFtZSB9O1xyXG5cclxuICAgICAgICAvL+iOt+WPluePree6p+eahOWIl+ihqFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL09yZy9DbGFzc01hbmFnZS9HZXRDbGFzc1wiLFxyXG4gICAgICAgICAgICBkYXRhOiB7IHN0cjogSlNPTi5zdHJpbmdpZnkob2JqKSB9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2lkVGFibGVDbGFzcyB0Ym9keVwiKS5odG1sKCc8dHIgY2xhc3M9XCJmb250MTJcIj48dGQgY29sc3Bhbj1cIjRcIj7mlbDmja7mraPlnKjliqDovb3kuK0uLi48L3RkPjwvdHI+Jyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfcmVzdWx0ID0gZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3Jlc3VsdC5PSykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhbGlzdCA9IF9yZXN1bHQuRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2lkVGFibGVDbGFzcyB0Ym9keVwiKS5odG1sKHRwbFRhYmxlKGRhdGFsaXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdGFsTnVtID0gX3Jlc3VsdC5QYWdlU3VtO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdG90YWxDbGFzc051bVwiKS50ZXh0KHRvdGFsTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICBQYWdpbmF0b3IuUGFnaW5hdG9yKHBhZ2VTaXplLCBwYWdlLCB0b3RhbE51bSwgcGFnaW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gJzx0ciBjbGFzcz1cImZvbnQxMlwiPjx0ZCBjb2xzcGFuPTQ+JyArIF9yZXN1bHQuUmVzdWx0ICsgJzwvdGQ+PC90cj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjaWRUYWJsZUNsYXNzIHRib2R5XCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5sb29rXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrTG9vaygkdGhpcy5hdHRyKFwiZGF0YS1jbGFzc2lkXCIpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5YiG6YWN6ICB5biIXHJcbiAgICAgICAgICAgICAgICAkKFwiLmRpc3RyaWJ1dGVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1jbGFzc2lkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RyaWJ1dGVDbGljayhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG4vL+WIhumFjeiAgeW4iFxyXG5mdW5jdGlvbiBkaXN0cmlidXRlQ2xpY2soY2xhc3NpZCkge1xyXG4gICAgJChcIi5kaXN0cmlidXRlQm94LC5wb3AtbWFza1wiKS5zaG93KCk7XHJcblxyXG4gICAgLy/pobXpnaLlsZXnpLrvvIzmlbDmja7ojrflj5ZcclxuICAgIHZhciBvYmogPSB7IENsYXNzSUQ6IGNsYXNzaWQgfTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBcIi9PcmcvQ2xhc3NNYW5hZ2UvR2V0QWxsb2NhdG9uRGF0YVwiLFxyXG4gICAgICAgIGRhdGE6IHsgc3RyOiBKU09OLnN0cmluZ2lmeShvYmopIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIF9yZXN1bHQgPSBkYXRhLnJlc3VsdDtcclxuICAgICAgICAgICAgaWYgKF9yZXN1bHQuT0spIHtcclxuICAgICAgICAgICAgICAgICQoXCIjQWxsb2NhdGlvbkRpdlwiKS5odG1sKHRwbFRhYmxlQWxsb2NhdGlvbihfcmVzdWx0LkRhdGEpKTtcclxuICAgICAgICAgICAgICAgIHZhciBmaXJzdFRlYWNoZXJpZDsvL1xyXG4gICAgICAgICAgICAgICAgLy/muIXnqbrlt7LpgInogIHluIhcclxuICAgICAgICAgICAgICAgICQoJy5jaG9zZWR0ZWFjaGVyIG5vdDplcSgwKScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8xLuWFiOeci+S4i+acieayoeacieW3sumAieeahOiAgeW4iFxyXG4gICAgICAgICAgICAgICAgdmFyIGhhdmVUZWFjaGVyTnVtID0gJChcIi5jaG9zZWR0ZWFjaGVyIGxpXCIpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGlmIChoYXZlVGVhY2hlck51bSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8xLjEg5rKh5pyJ5YiG6YWN6ICB5biI77yM6buY6K6k5Yqg6L296aG16Z2i5ZCO77yM6KaB57uZ5Y+z5L6n6ICB5biI6LWL5YC85b2T5YmN55qE56eR55uuSURcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFN1YmplY3RJRCA9ICQoXCIubGVmdG5ld3MgbGlbY2xhc3M9J2Nob29zZS1zdWInXVwiKS5hdHRyKFwiZGF0YS1zdWJqZWN0aWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5yaWdodG5ld3MgaW5wdXRcIikuYXR0cihcImRhdGEtc3ViamVjdGlkXCIsIGN1cnJlbnRTdWJqZWN0SUQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLzEuMiDlt7LliIbphY3ogIHluIjvvIzpgInlh7rnrKzkuIDkuKrogIHluIjnmoTkv6Hmga/vvIzlgLzkuo7pu5jorqTnirbmgIFcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3RTdWJqZWN0aWQgPSAkKFwiLmNob3NlZHRlYWNoZXIgbGk6ZXEoMSlcIikuZmlyc3QoKS5maW5kKFwic3BhbjplcSgwKVwiKS5hdHRyKFwiZGF0YS1zdWJqZWN0aWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RUZWFjaGVyaWQgPSAkKFwiLmNob3NlZHRlYWNoZXIgbGk6ZXEoMSlcIikuZmlyc3QoKS5maW5kKFwic3BhbjplcSgxKVwiKS5hdHRyKFwiZGF0YS11c2VyaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5sZWZ0bmV3cyBsaVwiKS5yZW1vdmVDbGFzcyhcImNob29zZS1zdWJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5sZWZ0bmV3cyBsaVtkYXRhLXN1YmplY3RpZD0nXCIgKyBmaXJzdFN1YmplY3RpZCArIFwiJ11cIikuYWRkQ2xhc3MoXCJjaG9vc2Utc3ViXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEdldFRlYWNoZXJCeVN1YmplY3RJRChmaXJzdFN1YmplY3RpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLzIu5b2T54K55Ye756eR55uu5pe2XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxlZnRuZXdzIGxpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKFwiY2hvb3NlLXN1YlwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiY2hvb3NlLXN1YlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2lkID0gJHRoaXMuYXR0cihcImRhdGEtc3ViamVjdGlkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEdldFRlYWNoZXJCeVN1YmplY3RJRChzaWQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLzMu5b2T54K55Ye75Yig6Zmk5pe2LOWFiOS7jumhtemdouenu+mZpO+8jOehruWumuWQjuWGjei/m+ihjOaVsOaNruW6k+aTjeS9nOOAglxyXG4gICAgICAgICAgICAgICAgJChcIi5kZWxlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBEZWxldGVMb2dpYyh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAvL0RlbGV0ZVRlYWNoZXIoY2xhc3NpZCwgZGVsZXRldXNlcmlkLCBkZWxldGVzdWJqZWN0aWQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLzQu5b2T54K55Ye756Gu5a6a5o+Q5Lqk5pe2XHJcbiAgICAgICAgICAgICAgICAkKFwiI0J0bkFsbG9jYXRpb25TdWJtaXRcIikuYmluZCgnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQWxsb2NhdGlvblN1Ym1pdChjbGFzc2lkKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy81LuW9k+eCueWHu+WIhumFjeiAgeW4iOaXtu+8jOesrOS4gOasoeWKoOi9veaXtlxyXG4gICAgICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cIm1hdGhcIl06cmFkaW8nKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENsaWNrVGVhY2hlcih0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjQWxsb2NhdGlvbkRpdlwiKS5odG1sKFwi5rKh5pyJ5pWw5o2u6K6w5b2V77yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbn1cclxuXHJcbi8v5YiG6YWN5pWZ5biI54K55Ye756Gu5a6a5o+Q5LqkXHJcbmZ1bmN0aW9uIEFsbG9jYXRpb25TdWJtaXQoY2xhc3NpZCkge1xyXG4gICAgdmFyIGxpcyA9ICQoXCIuY2hvc2VkdGVhY2hlciBsaVwiKTtcclxuICAgIGlmIChsaXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHZhciBqYXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gbGlzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0geyBDb3Vyc2VJRDogJycsIFVzZXJJRDogXCJcIiwgVXNlck5hbWU6ICcnLCBTdWJqZWN0SUQ6ICcnLCBTdWJqZWN0TmFtZTogJycsIENsYXNzSUQ6IGNsYXNzaWQgfTtcclxuICAgICAgICAgICAgdmFyICRydCA9ICQoXCIuY2hvc2VkdGVhY2hlciBsaTplcShcIiArIGkgKyBcIilcIik7XHJcbiAgICAgICAgICAgIG9iai5TdWJqZWN0SUQgPSAkcnQuZmluZChcInNwYW46ZXEoMClcIikuYXR0cihcImRhdGEtc3ViamVjdGlkXCIpO1xyXG4gICAgICAgICAgICBvYmouQ291cnNlSUQgPSAkcnQuZmluZChcInNwYW46ZXEoMClcIikuYXR0cihcImRhdGEtY291cnNlaWRcIik7XHJcbiAgICAgICAgICAgIG9iai5TdWJqZWN0TmFtZSA9ICRydC5maW5kKFwic3BhbjplcSgwKVwiKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIG9iai5Vc2VySUQgPSAkcnQuZmluZChcInNwYW46ZXEoMSlcIikuYXR0cihcImRhdGEtdXNlcmlkXCIpO1xyXG4gICAgICAgICAgICBvYmouVXNlck5hbWUgPSAkcnQuZmluZChcInNwYW46ZXEoMSlcIikudGV4dCgpO1xyXG4gICAgICAgICAgICBqYXJyLnB1c2gob2JqKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICcvT3JnL0NsYXNzTWFuYWdlL0FsbG9jYXRpb25UZWFjaGVyVXBkYXRlJyxcclxuICAgICAgICAgICAgZGF0YTogeyBzdHI6IEpTT04uc3RyaW5naWZ5KGphcnIpIH0sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdpbmcoMSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8v5YWz6Zet56qX5Y+jXHJcbiAgICAkKFwiLmNyZWF0ZUNsYXNzLC5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAkKFwiLmRpc3RyaWJ1dGVCb3hcIikuaGlkZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZWxldGVMb2dpYyhldmVudCkge1xyXG4gICAgdmFyICR0aGlzID0gJChldmVudCk7XHJcbiAgICB2YXIgZGVsZXRldXNlcmlkID0gJHRoaXMuYXR0cihcImRhdGEtdXNlcmlkXCIpO1xyXG4gICAgdmFyIHJhZGlvTmV3cyA9ICQoXCIucmlnaHRuZXdzIGxpIDpyYWRpb1t2YWx1ZT0nXCIgKyBkZWxldGV1c2VyaWQgKyBcIiddXCIpO1xyXG4gICAgaWYgKHJhZGlvTmV3cykge1xyXG4gICAgICAgIHJhZGlvTmV3c1swXS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAkdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmUoKTtcclxuICAgIHZhciBkZWxldGVzdWJqZWN0aWQgPSAkdGhpcy5hdHRyKFwiZGF0YS1zdWJqZWN0aWRcIik7XHJcbn1cclxuXHJcbi8v5YiG6YWN6ICB5biI5Yig6ZmkXHJcbmZ1bmN0aW9uIERlbGV0ZVRlYWNoZXIoY2xhc3NpZCwgZGVsZXRldXNlcmlkLCBkZWxldGVzdWJqZWN0aWQpIHtcclxuICAgIC8vYWxlcnQoY2xhc3NpZCArIFwiLFwiICsgZGVsZXRldXNlcmlkICsgXCIsXCIgKyBkZWxldGVzdWJqZWN0aWQpO1xyXG4gICAgdmFyIG9iaiA9IHsgQ2xhc3NJRDogY2xhc3NpZCwgVXNlcklEOiBkZWxldGV1c2VyaWQsIFN1YmplY3RJRDogZGVsZXRlc3ViamVjdGlkIH07XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9PcmcvQ2xhc3NNYW5hZ2UvRGVsZXRlVGVhY2hlcicsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHsgc3RyOiBKU09OLnN0cmluZ2lmeShvYmopIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICB9LCBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v54K55Ye76ICB5biI5pe2XHJcbmZ1bmN0aW9uIENsaWNrVGVhY2hlcihldmVudCkge1xyXG4gICAgdmFyICR0aGlzID0gJChldmVudCk7XHJcbiAgICB2YXIgdXNlcmlkID0gJHRoaXMudmFsKCk7XHJcbiAgICB2YXIgc3ViamVjdGlkID0gJHRoaXMuYXR0cihcImRhdGEtc3ViamVjdGlkXCIpO1xyXG4gICAgdmFyIHVzZXJuYW1lID0gJHRoaXMuYXR0cihcImRhdGEtdXNlcm5hbWVcIik7XHJcbiAgICB2YXIgJGxpVGVhY2hlciA9ICQoXCIuY2hvc2VkdGVhY2hlciBsaVwiKTtcclxuICAgIHZhciBFeGlzdCA9IGZhbHNlO1xyXG4gICAgJGxpVGVhY2hlci5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJHRoaXMyID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgc2pkID0gJHRoaXMyLmZpbmQoXCJzcGFuOmVxKDApXCIpLmF0dHIoXCJkYXRhLXN1YmplY3RpZFwiKTtcclxuICAgICAgICBpZiAoc2pkID09IHN1YmplY3RpZCkge1xyXG4gICAgICAgICAgICAkdGhpczIuZmluZChcInNwYW46ZXEoMSlcIikuYXR0cihcImRhdGEtdXNlcmlkXCIsIHVzZXJpZCk7XHJcbiAgICAgICAgICAgICR0aGlzMi5maW5kKFwic3BhbjplcSgxKVwiKS50ZXh0KHVzZXJuYW1lKTtcclxuXHJcbiAgICAgICAgICAgICR0aGlzMi5maW5kKFwic3BhbjplcSgyKSBpXCIpLmF0dHIoXCJkYXRhLXVzZXJpZFwiLCB1c2VyaWQpO1xyXG4gICAgICAgICAgICAkdGhpczIuZmluZChcInNwYW46ZXEoMikgaVwiKS5hdHRyKFwiZGF0YS1zdWJqZWN0aWRcIiwgc3ViamVjdGlkKTtcclxuXHJcbiAgICAgICAgICAgIEV4aXN0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8v5LiN5a2Y5Zyo77yM5YiZ5re75YqgXHJcbiAgICBpZiAoIUV4aXN0KSB7XHJcblxyXG4gICAgICAgIHZhciBzdWJqZWN0TmFtZSA9ICQoXCIubGVmdG5ld3MgbGlbY2xhc3M9J2Nob29zZS1zdWInXVwiKS50ZXh0KCk7XHJcbiAgICAgICAgdmFyIGh0bSA9IFwiPGxpPjxzcGFuIGRhdGEtc3ViamVjdGlkPSdcIiArIHN1YmplY3RpZCArIFwiJz5cIiArIHN1YmplY3ROYW1lICsgXCI8L3NwYW4+PHNwYW4gZGF0YS11c2VyaWQ9J1wiICsgdXNlcmlkICsgXCInPlwiICsgdXNlcm5hbWUgKyBcIjwvc3Bhbj5cIjtcclxuICAgICAgICBodG0gKz0gXCI8c3Bhbj48aSBjbGFzcz1cXFwiZGVsZSBjdXJzb3JcXFwiIGRhdGEtc3ViamVjdGlkPVxcXCJcIiArIHN1YmplY3RpZCArIFwiXFxcIiBkYXRhLXVzZXJpZD1cXFwiXCIgKyB1c2VyaWQgKyBcIlxcXCI+PC9pPjwvc3Bhbj48L2xpPlwiO1xyXG4gICAgICAgICQoaHRtKS5hcHBlbmRUbygkKFwiLmNob3NlZHRlYWNoZXJcIikpO1xyXG4gICAgICAgICQoXCIuZGVsZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIERlbGV0ZUxvZ2ljKHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+eCueWHu+W3puS+p+eahOenkeebru+8jOWPs+S+p+aYvuekuuebuOW6lOeahOiAgeW4iFxyXG5mdW5jdGlvbiBHZXRUZWFjaGVyQnlTdWJqZWN0SUQoc2lkKSB7XHJcbiAgICB2YXIgaHRtbCA9IFwiXCI7XHJcbiAgICB2YXIgZmlyc3RUZWFjaGVyaWQgPSAkKFwiLmNob3NlZHRlYWNoZXIgbGk6ZXEoMSlcIikuZmlyc3QoKS5maW5kKFwic3BhbjplcSgxKVwiKS5hdHRyKFwiZGF0YS11c2VyaWRcIik7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9PcmcvQ2xhc3NNYW5hZ2UvR2V0VGVhY2hlckJ5U3ViamVjdElkJyxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YTogeyBcInNpZFwiOiBzaWQgfSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBfcmVzdWx0ID0gZGF0YS5yZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoX3Jlc3VsdC5PSyAmJiBfcmVzdWx0LkRhdGEuTGlzdFVzZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFsaXN0ID0gX3Jlc3VsdC5EYXRhLkxpc3RVc2VyO1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBcIjxsaT5cIjtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YWxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IFwiPHNwYW4gY2xhc3M9XFxcInRlYWNoLW5hbWVcXFwiPjxsYWJlbD48aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcIm1hdGhcXFwiIHZhbHVlPSdcIiArIGRhdGFsaXN0W2ldLlVzZXJJRCArIFwiJyAgZGF0YS1zdWJqZWN0aWQ9J1wiICsgZGF0YWxpc3RbaV0uU3ViamVjdElEICsgXCInIGRhdGEtdXNlcm5hbWU9J1wiICsgZGF0YWxpc3RbaV0uVXNlck5hbWUgKyBcIicgLz5cIiArIGRhdGFsaXN0W2ldLlVzZXJOYW1lICsgXCI8L2xhYmVsPjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGkgKyAxKSAlIDIgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9IFwiPC9saT48bGk+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBcIjwvbGk+XCI7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnJpZ2h0bmV3c1wiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgLy/lvZPngrnlh7vogIHluIjml7bvvIzkuIvpnaLlt7LpgInmi6nnmoTogIHluIjov5vooYzmm7TmlrDmiJbmt7vliqBcclxuICAgICAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJtYXRoXCJdOnJhZGlvJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBDbGlja1RlYWNoZXIodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8xLjPpu5jorqTpgInkuK3nrKzkuIDkuKrogIHluIhcclxuICAgICAgICAgICAgICAgIC8vaWYgKGZpcnN0VGVhY2hlcmlkIT11bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICQoXCIucmlnaHRuZXdzIGxpIDpyYWRpb1t2YWx1ZT1cIiArIGZpcnN0VGVhY2hlcmlkICsgXCJdXCIpLmF0dHIoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAgICAgLy8yLueCueWHu+WQjuWIpOaWreS4i+mdouaYr+WQpuacieivpeenkeebrueahOiAgeW4iO+8jOWmguaenOacie+8jOWImem7mOiupOmAieS4reOAglxyXG4gICAgICAgICAgICAgICAgdmFyIHVzZXJpZCA9ICQoXCIuY2hvc2VkdGVhY2hlciBsaSBzcGFuW2RhdGEtc3ViamVjdGlkPSdcIiArIHNpZCArIFwiJ11cIikucGFyZW50KCkuZmluZChcInNwYW46ZXEoMSlcIikuYXR0cihcImRhdGEtdXNlcmlkXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5yaWdodG5ld3MgbGkgOnJhZGlvW3ZhbHVlPVwiICsgdXNlcmlkICsgXCJdXCIpLmF0dHIoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaHRtbCA9IFwiPGxpPuivpeenkeebruaXoOiAgeW4iO+8gTwvbGk+XCI7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnJpZ2h0bmV3c1wiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaHRtbCA9IFwiPGxpPlwiICsgZGF0YS5SZXN1bHQgKyBcIjwvbGk+XCI7XHJcbiAgICAgICAgICAgICQoXCIucmlnaHRuZXdzXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v54K55Ye75p+l55yLXHJcbmZ1bmN0aW9uIGNsaWNrTG9vayhjbGFzc2lkKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL09yZy9DbGFzc01hbmFnZS9DbGFzc0RldGFpbC8/Y2xhc3NpZD1cIiArIGNsYXNzaWQgKyBcIiZjb21lZnJvbT0xXCI7XHJcbn1cclxuXHJcbi8v54K55Ye76ICB5biI54q25oCB5pe2XHJcbmZ1bmN0aW9uIExvYWRQYWdlRm9yU2VhcmNoKCkge1xyXG4gICAgaXNoYXN0ZWFjaGVyID0gJChcIiNpZHNlYXJjaFwiKS52YWwoKTtcclxuICAgIGNsYXNzbmFtZSA9ICQudHJpbSgkKFwiLnNlcmNodGV4dFwiKS52YWwoKSk7XHJcbiAgICBtb2R1bGUubG9hZFBhcGVyTGlzdCgxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2hyTGVuKHN0ciwgbWF4TGVuZ3RoKSB7XHJcbiAgICB2YXIgcmVhbExlbmd0aCA9IDAsIGxlbiA9IHN0ci5sZW5ndGgsIGNoYXJDb2RlID0gLTE7XHJcbiAgICB4ID0gMDtcclxuICAgIGZvciAoOyAoeCA8IGxlbikgJiYgKHJlYWxMZW5ndGggPD0gbWF4TGVuZ3RoICogMikgOyB4KyspIHtcclxuICAgICAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KHgpO1xyXG4gICAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOClcclxuICAgICAgICAgICAgcmVhbExlbmd0aCArPSAxO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmVhbExlbmd0aCArPSAyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlYWxMZW5ndGg7XHJcbn1cclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjc3VjYWlcIikubmljZVNjcm9sbCh7XHJcbiAgICAgICAgY3Vyc29yY29sb3I6IFwiI0NDMDA3MVwiLFxyXG4gICAgICAgIGN1cnNvcm9wYWNpdHltYXg6IDEsXHJcbiAgICAgICAgdG91Y2hiZWhhdmlvcjogZmFsc2UsXHJcbiAgICAgICAgY3Vyc29yd2lkdGg6IFwiNXB4XCIsXHJcbiAgICAgICAgY3Vyc29yYm9yZGVyOiBcIjBcIixcclxuICAgICAgICBjdXJzb3Jib3JkZXJyYWRpdXM6IFwiNXB4XCJcclxuICAgIH0pO1xyXG4gICAgdmFyIHRpbWVyID0gbnVsbDtcclxuICAgIC8v54K55Ye75pCc57Si5qGG5byA5aeLXHJcbiAgICAkKFwiLnNlcmNoXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmRcIiwgXCIjY2I0NDFlXCIpO1xyXG4gICAgICAgIHZhciBzZXJjaHRleHQgPSAkKFwiLnNlcmNodGV4dFwiKTtcclxuICAgICAgICBzZXJjaHRleHQuc2hvdygpO1xyXG4gICAgICAgIGlmICghKHNlcmNodGV4dC5oYXNDbGFzcyhcIm9uXCIpKSkge1xyXG4gICAgICAgICAgICBzZXJjaHRleHQuc3RvcCgpO1xyXG4gICAgICAgICAgICBzZXJjaHRleHQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxNjBweFwiXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICBzZXJjaHRleHQuYWRkQ2xhc3MoXCJvblwiKTtcclxuICAgICAgICAgICAgc2VyY2h0ZXh0LmJpbmQoJ2tleWRvd24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRQYWdlRm9yU2VhcmNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2VyY2h0ZXh0LnN0b3AoKTtcclxuICAgICAgICAgICAgc2VyY2h0ZXh0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMHB4XCJcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIHNlcmNodGV4dC5yZW1vdmVDbGFzcyhcIm9uXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmRcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL+eCueWHu+aQnOe0ouahhue7k+adn1xyXG4gICAgLy/mt7vliqDnj63nuqflvLnlh7rmoYblvIDlp4tcclxuICAgICQoXCIuYWRkY2xhc3NcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2ssLmNyZWF0ZUNsYXNzXCIpLnNob3coKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgIH0pO1xyXG4gICAgLy8kKFwiLnN1Ym1pdFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAkKFwiLmNyZWF0ZUNsYXNzXCIpLmhpZGUoKTtcclxuICAgIC8vICAgICQoXCIuZGlzdHJpYnV0ZUJveFwiKS5oaWRlKCk7XHJcbiAgICAvL30pO1xyXG4gICAgZnVuY3Rpb24gYWxlcnRoaWRlKCkge1xyXG4gICAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLmNyZWF0ZUNsYXNzXCIpLmhpZGUoKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICAgICQoXCIucG9wY2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuY3JlYXRlQ2xhc3MsLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmRpc3RyaWJ1dGVCb3hcIikuaGlkZSgpO1xyXG4gICAgfSk7XHJcbiAgICAvL+a3u+WKoOePree6p+W8ueWHuuahhue7k+adn1xyXG4gICAgLy/oh6rlrprkuYnkuIvmi4nliJfooajmoYZcclxuICAgICQoXCIuc2NoYXJlYVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI2NiNDQxZVwiKTtcclxuICAgICAgICB2YXIgbGlzdGJveCA9ICQoXCIubGlzdGJveFwiKTtcclxuICAgICAgICBsaXN0Ym94LnNob3coKTtcclxuICAgICAgICB2YXIgbGkgPSBsaXN0Ym94LmZpbmQoXCJsaVwiKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxpLmVxKGkpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNjaGFyZWFcIikudGV4dChhKTtcclxuICAgICAgICAgICAgICAgIGxpc3Rib3guaGlkZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG1vZHVsZS5pbml0KCk7XHJcblxyXG4gICAgLy/lrprkuYnmj5DnpLror61cclxuICAgIHZhciBjbGFzc05hbWVOdW0gPSAxMjtcclxuICAgIHZhciBjbGFzc05hbWVNYXggPSBcIuePree6p+WQjeensOS4jeiDvei2hei/hzbkuKrlrZfnrKbvvIFcIjtcclxuXHJcbiAgICAvL+WIm+W7uuePree6p+OAi+mqjOivgVxyXG4gICAgJChcIiNpbnB1dENsYXNzTmFtZVwiKS5iaW5kKCdibHVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGludmFsID0gJC50cmltKCR0aGlzLnZhbCgpKTtcclxuICAgICAgICBpZiAoaW52YWwgPT0gJycpIHtcclxuICAgICAgICAgICAgJChcIiNpbnB1dG1zZ1wiKS5odG1sKFwi54+t57qn5ZCN56ew5LiN6IO95Li656m677yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnZXRDaHJMZW4oaW52YWwsIGNsYXNzTmFtZU51bSkgPiBjbGFzc05hbWVOdW0pIHtcclxuICAgICAgICAgICAgJChcIiNpbnB1dG1zZ1wiKS5odG1sKGNsYXNzTmFtZU1heCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNpbnB1dG1zZ1wiKS5odG1sKFwiXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy/liJvlu7rnj63nuqfjgIvngrnlh7vlrozmiJDmjInmia1cclxuICAgICQoXCIjYnRuQ3JlYXRlQ2xhc3NTdWJtaXRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjbGFzc25hbWUgPSAkLnRyaW0oJChcIiNpbnB1dENsYXNzTmFtZVwiKS52YWwoKSk7XHJcbiAgICAgICAgaWYgKGdldENockxlbihjbGFzc25hbWUsIGNsYXNzTmFtZU51bSkgPiBjbGFzc05hbWVOdW0pIHtcclxuICAgICAgICAgICAgJChcIiNpbnB1dG1zZ1wiKS5odG1sKGNsYXNzTmFtZU1heCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0geyBDbGFzc05hbWU6IFwiXCIgfTtcclxuICAgICAgICAgICAgb2JqLkNsYXNzTmFtZSA9IGNsYXNzbmFtZTtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9PcmcvQ2xhc3NNYW5hZ2UvQWRkQ2xhc3MnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBzdHI6IEpTT04uc3RyaW5naWZ5KG9iaikgfSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvayA9IGRhdGEucmVzdWx0Lk9LO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNpbnB1dG1zZ1wiKS5odG1sKGRhdGEucmVzdWx0LlJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5jcmVhdGVDbGFzc1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZGlzdHJpYnV0ZUJveFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yi35paw6aG16Z2iXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy/nrZvpgInliIbphY3miJbmnKrliIbphY3ml7ZcclxuICAgICQoXCIjaWRzZWFyY2hcIikuYmluZCgnY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIExvYWRQYWdlRm9yU2VhcmNoKCk7XHJcbiAgICB9KTtcclxufSlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2pzL09yZy9jbGFzc21hbmFnZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDE4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDE4IDE5XG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnQ2xhc3MvY2xhc3NsaXN0JyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlYWNoPSR1dGlscy4kZWFjaCxMaXN0TW9kZWw9JGRhdGEuTGlzdE1vZGVsLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRvdXQ9Jyc7JG91dCs9JyAnO1xuJGVhY2goTGlzdE1vZGVsLGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8dHIgY2xhc3M9XCJmb250MTJcIj4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5DbGFzc05hbWUpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU3ViamVjdE5hbWUpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuaWYoJHZhbHVlLlN1YmplY3RDb3VudCA9PTAgKXtcbiRvdXQrPScg5pyq5YiG6YWNICc7XG59ZWxzZXtcbiRvdXQrPScgJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlN1YmplY3RDb3VudCk7XG4kb3V0Kz0nICc7XG59XG4kb3V0Kz0nPC90ZD4gPHRkPjxzcGFuIGNsYXNzPVwic2VlLWJ0biBkaXN0cmlidXRlIG1yMTBcIiBkYXRhLWNsYXNzaWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQ2xhc3NJRCk7XG4kb3V0Kz0nXCI+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkJ0bkFsbG9jYXRpb25UZXh0KTtcbiRvdXQrPSc8L3NwYW4+PHNwYW4gY2xhc3M9XCJzZWUtYnRuIGxvb2tcIiBkYXRhLWNsYXNzaWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQ2xhc3NJRCk7XG4kb3V0Kz0nXCI+5p+l55yLPC9zcGFuPjwvdGQ+IDwvdHI+ICc7XG59KTtcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy90cGwvT3JnQ2xhc3MvY2xhc3NsaXN0LnRwbFxuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDE4XG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnQ2xhc3MvQ2xhc3NBbGxvY2F0aW9uJyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlYWNoPSR1dGlscy4kZWFjaCxMaXN0U3R1ZGVudEluZm89JGRhdGEuTGlzdFN0dWRlbnRJbmZvLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLExpc3RVc2VyPSRkYXRhLkxpc3RVc2VyLExpc3RDYXQ9JGRhdGEuTGlzdENhdCwkb3V0PScnOyRvdXQrPScgPGRpdiBjbGFzcz1cImNob29zZWJveFwiPiA8cCBjbGFzcz1cImhlYWRcIj4g6YCJ5oup6ICB5biIIDwvcD4gPGRpdiBjbGFzcz1cImNob29zZXRlYWNoZXIgY2VudGVyXCI+IDx1bCBjbGFzcz1cIm92ZXJmbG93XCI+IDxsaSBjbGFzcz1cImxlZnQgbGVmdC1jb250ZW50XCI+IDxwIGNsYXNzPVwiaGVhZFwiPuWtpuenkTwvcD4gPHVsIGNsYXNzPVwibGVmdG5ld3NcIj4gJztcbiRlYWNoKExpc3RTdHVkZW50SW5mbyxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgJztcbmlmKCgkaW5kZXgpPT0wICl7XG4kb3V0Kz0nIDxsaSBjbGFzcz1cImNob29zZS1zdWJcIiBkYXRhLXN1YmplY3RpZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdWJqZWN0SUQpO1xuJG91dCs9J1wiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdWJqZWN0TmFtZSk7XG4kb3V0Kz0nPC9saT4gJztcbn1lbHNle1xuJG91dCs9JyA8bGkgZGF0YS1zdWJqZWN0aWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU3ViamVjdElEKTtcbiRvdXQrPSdcIj4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU3ViamVjdE5hbWUpO1xuJG91dCs9JzwvbGk+ICc7XG59XG4kb3V0Kz0nICc7XG59KTtcbiRvdXQrPScgPC91bD4gPC9saT4gPGxpIGNsYXNzPVwibGVmdCByaWdodC1jb250ZW50XCI+IDxwIGNsYXNzPVwiaGVhZFwiPuiAgeW4iDwvcD4gPHVsIGNsYXNzPVwicmlnaHRuZXdzXCI+IDxsaT4gJztcbiRlYWNoKExpc3RVc2VyLGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8c3BhbiBjbGFzcz1cInRlYWNoLW5hbWVcIj4gPGxhYmVsPiA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm1hdGhcIiB2YWx1ZT1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Vc2VySUQpO1xuJG91dCs9J1wiIGRhdGEtc3ViamVjdGlkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlN1YmplY3RJRCk7XG4kb3V0Kz0nXCIgZGF0YS11c2VybmFtZT1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Vc2VyTmFtZSk7XG4kb3V0Kz0nXCIgLz4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuVXNlck5hbWUpO1xuJG91dCs9JyA8L2xhYmVsPiA8L3NwYW4+ICc7XG5pZigoKCRpbmRleCkrMSkvMj09MCApe1xuJG91dCs9JyA8L2xpPjxsaT4gJztcbn1cbiRvdXQrPScgPC9saT4gJztcbn0pO1xuJG91dCs9JyA8L3VsPiA8L2xpPiA8L3VsPiA8L2Rpdj4gPHAgY2xhc3M9XCJoZWFkXCI+IOW3sumAieiAgeW4iCA8L3A+IDx1bCBjbGFzcz1cImNob3NlZHRlYWNoZXIgb3ZlcmZsb3dcIj4gPGxpPiA8c3Bhbj7lrabnp5E8L3NwYW4+IDxzcGFuPuiAgeW4iDwvc3Bhbj4gPHNwYW4+5pON5L2cPC9zcGFuPiA8L2xpPiAnO1xuJGVhY2goTGlzdENhdCxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPGxpPiA8c3BhbiBkYXRhLWNvdXJzZWlkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkNvdXJzZUlEKTtcbiRvdXQrPSdcIiBkYXRhLXN1YmplY3RpZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdWJqZWN0SUQpO1xuJG91dCs9J1wiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdWJqZWN0TmFtZSk7XG4kb3V0Kz0nPC9zcGFuPiA8c3BhbiBkYXRhLXVzZXJpZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Vc2VySUQpO1xuJG91dCs9J1wiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Vc2VyTmFtZSk7XG4kb3V0Kz0nPC9zcGFuPiA8c3Bhbj4gPGkgY2xhc3M9XCJkZWxlIGN1cnNvclwiIGRhdGEtc3ViamVjdGlkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlN1YmplY3RJRCk7XG4kb3V0Kz0nXCIgZGF0YS11c2VyaWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuVXNlcklEKTtcbiRvdXQrPSdcIj48L2k+IDwvc3Bhbj4gPC9saT4gJztcbn0pO1xuJG91dCs9JyA8L3VsPiA8ZGl2IGNsYXNzPVwiaGFuZGxlXCI+IDxidXR0b24gY2xhc3M9XCJibG9jayBzdWJtaXQgZm9udDE0IGF1dG8gY3Vyc29yIG10MTNcIiBpZD1cIkJ0bkFsbG9jYXRpb25TdWJtaXRcIj7noa7lrpo8L2J1dHRvbj4gPC9kaXY+IDwvZGl2Pic7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ0NsYXNzL0NsYXNzQWxsb2NhdGlvbi50cGxcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAxOFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=