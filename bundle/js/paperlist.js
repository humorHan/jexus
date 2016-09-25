webpackJsonp([33,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(79);


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

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	var Paginator = __webpack_require__(8);
	var tplTable = __webpack_require__(80);
	var para = { SubjectID: 0, StageID: 0, GradeID: 0, data: '', PageIndex: 1, PageSize:10,ExamName:'',ExamCode:'' };
	var u = __webpack_require__(24);
	var module = function () {
	    this.init = function () {
	        //todo 逻辑函数  
	        CreateExam();
	        loadPaperList(1);
	        Search();
	        SearchKeyPress();
	        onClickPara();
	        onClickPara2();    
	    };
	    var paging = function (page) {
	       
	        loadPaperList(page);
	    };
	    var loadPaperList = function (page) {
	        var tThis = this;
	        $.ajax({
	            type: "post",
	            url: "/OrgExam/CreateExam/GetSubIndex",
	            dataType: "json",
	            data: {
	                StageID: para.StageID,
	                GradeID: para.GradeID,
	                SubjectID: para.SubjectID,
	                ExamName: para.ExamName,
	                ExamCode:para.ExamCode,
	                PageIndex: page,
	                PageSize: para.PageSize
	            },
	            success: function (data) {
	                if (data) {                 
	                    $("#tableID tbody").html(tplTable(data.List));
	                    var temp = data.Count;                 
	                    Paginator.Paginator(para.PageSize, page, temp, paging);
	                    OnCliDelete();
	                }
	                else {
	                    $("#tableID tbody").html(tplTable(data.List));
	                }
	            }
	        });
	
	    };
	    var onClickPara = function () {
	        $("#GradeID li").click(function () {  
	            var gradeid = $(this).attr("data-areaid");
	            LoadSubjectByGrade(gradeid, this);
	            onClickParaItem(this);
	        });
	    };
	    var onClickPara2 = function ()
	    {
	        $("#SubjectID li").click(function () {
	            //点击年级加载科目
	            onClickParaItem(this);
	
	        });
	    };
	    var onClickParaItem = function (obj)
	    {
	        $(obj).siblings().removeClass("active");//便利
	        $(obj).addClass("active");
	        if ($(obj).attr("data-a")) {
	            para.GradeID = $(obj).attr("data-areaid");
	            para.StageID = $(obj).attr("data-a");
	            para.SubjectID = $("#SubjectID li").filter('li[class="active"]').attr("data-areaid");
	        }
	        else {
	            para.SubjectID = $(obj).attr("data-areaid");
	        }
	        loadPaperList(1);
	    };
	    var LoadSubjectByGrade = function (gradeid, obj) //加载有效科目
	    {
	        var all = $('<li data-areaid="0" class="active">全部</li>');
	        var subject1 = $('<li data-areaid="2">数学</li><li data-areaid="3">英语</li><li data-areaid="4">物理</li><li data-areaid="5">化学</li>');
	        var subject2 = $('<li data-areaid="14"">奥数</li><li data-areaid="3">英语</li>');
	        var subject3 = $('<li data-areaid="3">英语</li>');
	        $("#SubjectID").html("");
	        if (parseInt(gradeid) == 0) {
	            $("#SubjectID").append(all);
	            $("#SubjectID").append(subject2);
	            $("#SubjectID").append(subject1);
	        }
	        else if (parseInt(gradeid) >= 1 && parseInt(gradeid) <= 2) {
	            $("#SubjectID").append(all);
	            $("#SubjectID").append(subject3);
	        }
	        else if (parseInt(gradeid) >= 1 && parseInt(gradeid) <= 5) {
	            $("#SubjectID").append(all);
	            $("#SubjectID").append(subject2);
	
	        } else if (parseInt(gradeid) == 6) {
	            $("#SubjectID").append(all);
	            $("#SubjectID").append(subject2);
	       
	        } else if (parseInt(gradeid) > 6) {
	            $("#SubjectID").append(all);
	       
	            $("#SubjectID").append(subject1);
	        }
	        onClickPara2();
	    }
	    var OnCliDelete = function () {
	
	        $("#tableID").find("tr").each(function () {
	            // alert("xx");
	            //var tdArr = $(this).children().last().find("span");
	            var tdArr = $(this).children().last().find("span");
	            //tdArr.click(function () {
	            //    console.log(3432);
	            //})
	            tdArr.map(function (i, index) {
	                $(index).click(function () {
	                    var type = $(this).attr("data-opt");
	                    var value = $(this).attr("data-value");
	                    if (type) {
	                        switch (type) {
	                            case "test":
	                                StartTest(value);
	                                break;
	                            case "view":
	                                GetView(value);
	                                break;
	                            case "edit":
	                                EditPaper(value);
	                                break;
	                            case "del":
	                                DelPaper(value);
	                                break;
	                        }
	                    }
	
	                })
	            })
	
	        });
	
	    };
	    //开始测试
	    var StartTest = function (objid) {
	        var url = '/Exam/Index/SetInfo?ExamType=0&ExamID=';
	
	        $.ajax({
	            url: "/OrgExam/CreateExam/SaveSub",
	            data: {
	                ExamID: objid
	            },
	            dataType: "json",
	            type: "post",
	            success: function (e) {
	                location.href = url + e.ID;
	            }
	        });
	    
	    };
	    //查看
	    var GetView = function (objid) {
	       // location.href = "/OrgExam/CreateExam/GetReView?ExamID="+objid;
	    };
	    //编辑
	    var EditPaper = function (objid) {
	
	    };
	    //删除
	    var DelPaper = function (objid) {
	        u.OpenConfrimPop('你确认要删除本试卷吗？');     
	        $("#main-content-wrapper").delegate("#Confrim", "click", function () {
	         $(".pop-up").hide();
	         $(".pop-mask").hide();
	            $.ajax({
	                type: "post",
	                url: "/OrgExam/CreateExam/DeleteSub",
	                dataType: "json",
	                data: {
	                    ExamID:objid
	                },
	                success: function (data) {
	                    console.debug(data);              
	                    if (data.OK) {
	                        u.OpenTimeHide('操作成功', '2000');
	                        //document.location.reload();
	                    }
	                    else {
	                        u.OpenTimeHide('操作失败', '2000');
	                       
	                    }
	                }
	            });
	        });
	        $("#main-content-wrapper").delegate("#Cancel", "click", function () {
	            $(".pop-up").hide();
	            $(".pop-mask").hide();
	        });
	    };
	    var CreateExam = function () {
	        $("#CreateExam").click(function () {
	            location.href = "/OrgExam/CreateExam/AssemblyInit";
	        });    
	    };
	    var Search = function () {
	        $("#searchText").keydown(function () {
	           
	            if (event.keyCode == 13 || event.keyCode == 9)//9为tab----13为enter
	            {       
	                para.ExamCode = $("#searchText").val();
	                para.ExamName = $("#searchText").val();        
	                loadPaperList(1);
	            }
	        });
	        
	    };
	    var SearchKeyPress = function () {
	        $("#searchText").keypress(function () {
	
	            var keynum = event.keyCode;
	            if (keynum == 32 || keynum == 34 || keynum == 39 || keynum == 47 || keynum == 92 || keynum == 58 || keynum == 59 || keynum == 60 || keynum == 62 || keynum == 63 || keynum == 91 || keynum == 93 || keynum == 123 || keynum == 124 || keynum == 125) {
	                return false;
	            }
	
	        });
	    };
	};
	
	//绑定数据
	$(function () {
	    new module().init();
	    // module.init(); 
	});

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgExam/paperlist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,ExamList=$data.ExamList,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(ExamList,function($value,$index){
	$out+=' <tr> <td>';
	$out+=$escape($value.ExamCode);
	$out+='</td> <td> <div class="ellipsis w110" title="';
	$out+=$escape($value.ExamName);
	$out+='">';
	$out+=$escape($value.ExamName);
	$out+='</div> </td> <td>';
	$out+=$escape($value.SourceID);
	$out+='</td> <td>';
	$out+=$escape($value.LastUpdateTime);
	$out+='</td> <td> <span class="see-btn mr20 w68" data-opt="test" data-value="';
	$out+=$escape($value.ExamID);
	$out+='">开始测试</span> <span class="see-btn mr20" data-opt="view" data-value="';
	$out+=$escape($value.ExamID);
	$out+='">查看</span> ';
	if($value.IsSelf ==1 ){
	$out+=' <span class="see-btn mr20" data-opt="edit" data-value="';
	$out+=$escape($value.ExamID);
	$out+='">编辑</span> <span class="see-btn mr20" data-opt="del" data-value="';
	$out+=$escape($value.ExamID);
	$out+='"> 删除</span> ';
	}
	$out+=' </td> </tr> ';
	});
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL09yZy9kZXAvUGFnaW5hdG9yLmpzP2JlODEqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL3BvcHVwL3BvcHVwdGlwLmpzP2YwMzIqKioqKiIsIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnRXhhbS9wYXBlcmxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9PcmdFeGFtL3BhcGVybGlzdC50cGwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQWtDO0FBQ2xDOztBQUVBO0FBQ0EseUNBQXdDLE9BQU8sMkJBQTJCO0FBQzFFOztBQUVBO0FBQ0E7QUFDQSxzQ0FBcUMsWUFBWTtBQUNqRDtBQUNBOztBQUVBO0FBQ0EsMEJBQXlCLGlFQUFpRTtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQSxhQUFZLGVBQWU7QUFDM0Isa0RBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFxQjtBQUNyQixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLEdBQUU7QUFDRixrQ0FBaUM7QUFDakMsSUFBRztBQUNILGVBQWM7QUFDZDtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRixFQUFDLEc7Ozs7Ozs7QUM5RUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxFQUFDLEUiLCJmaWxlIjoicGFwZXJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypUTU9ESlM6e30qL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdGZ1bmN0aW9uIGEoYSwgYikge1xyXG5cdFx0cmV0dXJuICgvc3RyaW5nfGZ1bmN0aW9uLy50ZXN0KHR5cGVvZiBiKSA/IGggOiBnKShhLCBiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYihhLCBjKSB7XHJcblx0XHRyZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSAmJiAoYyA9IHR5cGVvZiBhLCBcIm51bWJlclwiID09PSBjID8gYSArPSBcIlwiIDogYSA9IFwiZnVuY3Rpb25cIiA9PT0gYyA/IGIoYS5jYWxsKGEpKSA6IFwiXCIpLCBhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjKGEpIHtcclxuXHRcdHJldHVybiBsW2FdXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkKGEpIHtcclxuXHRcdHJldHVybiBiKGEpLnJlcGxhY2UoLyYoPyFbXFx3I10rOyl8Wzw+XCInXS9nLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZShhLCBiKSB7XHJcblx0XHRpZiAobShhKSlmb3IgKHZhciBjID0gMCwgZCA9IGEubGVuZ3RoOyBkID4gYzsgYysrKWIuY2FsbChhLCBhW2NdLCBjLCBhKTsgZWxzZSBmb3IgKGMgaW4gYSliLmNhbGwoYSwgYVtjXSwgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoYSwgYikge1xyXG5cdFx0dmFyIGMgPSAvKFxcLylbXlxcL10rXFwxXFwuXFwuXFwxLywgZCA9IChcIi4vXCIgKyBhKS5yZXBsYWNlKC9bXlxcL10rJC8sIFwiXCIpLCBlID0gZCArIGI7XHJcblx0XHRmb3IgKGUgPSBlLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7IGUubWF0Y2goYyk7KWUgPSBlLnJlcGxhY2UoYywgXCIvXCIpO1xyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoYiwgYykge1xyXG5cdFx0dmFyIGQgPSBhLmdldChiKSB8fCBpKHtmaWxlbmFtZTogYiwgbmFtZTogXCJSZW5kZXIgRXJyb3JcIiwgbWVzc2FnZTogXCJUZW1wbGF0ZSBub3QgZm91bmRcIn0pO1xyXG5cdFx0cmV0dXJuIGMgPyBkKGMpIDogZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChhLCBiKSB7XHJcblx0XHRpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYikge1xyXG5cdFx0XHR2YXIgYyA9IGI7XHJcblx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBrKGMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBkID0galthXSA9IGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBiKGMsIGEpICsgXCJcIlxyXG5cdFx0XHR9IGNhdGNoIChkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGkoZCkoKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGQucHJvdG90eXBlID0gYi5wcm90b3R5cGUgPSBuLCBkLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYiArIFwiXCJcclxuXHRcdH0sIGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGkoYSkge1xyXG5cdFx0dmFyIGIgPSBcIntUZW1wbGF0ZSBFcnJvcn1cIiwgYyA9IGEuc3RhY2sgfHwgXCJcIjtcclxuXHRcdGlmIChjKWMgPSBjLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCJcXG5cIik7IGVsc2UgZm9yICh2YXIgZCBpbiBhKWMgKz0gXCI8XCIgKyBkICsgXCI+XFxuXCIgKyBhW2RdICsgXCJcXG5cXG5cIjtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IoYiArIFwiXFxuXFxuXCIgKyBjKSwgYlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGogPSBhLmNhY2hlID0ge30sIGsgPSB0aGlzLlN0cmluZywgbCA9IHtcclxuXHRcdFwiPFwiOiBcIiYjNjA7XCIsXHJcblx0XHRcIj5cIjogXCImIzYyO1wiLFxyXG5cdFx0J1wiJzogXCImIzM0O1wiLFxyXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcclxuXHRcdFwiJlwiOiBcIiYjMzg7XCJcclxuXHR9LCBtID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xyXG5cdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB7fS50b1N0cmluZy5jYWxsKGEpXHJcblx0XHR9LCBuID0gYS51dGlscyA9IHtcclxuXHRcdCRoZWxwZXJzOiB7fSwgJGluY2x1ZGU6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcblx0XHRcdHJldHVybiBhID0gZihjLCBhKSwgZyhhLCBiKVxyXG5cdFx0fSwgJHN0cmluZzogYiwgJGVzY2FwZTogZCwgJGVhY2g6IGVcclxuXHR9LCBvID0gYS5oZWxwZXJzID0gbi4kaGVscGVycztcclxuXHRhLmdldCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRyZXR1cm4galthLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKV1cclxuXHR9LCBhLmhlbHBlciA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRvW2FdID0gYlxyXG5cdH0sIG1vZHVsZS5leHBvcnRzID0gYVxyXG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdG1vZGpzLWxvYWRlci9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDggMTMgMTQgMTUgMTYgMTcgMTggMTkgMjEgMjMgMjUgMjYgMjcgMzEgMzIgMzMgMzcgMzhcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFBhZ2luYXRvcjogZnVuY3Rpb24gKHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgdG90YWxDb3VudCwgY2FsbGJhY2spIHtcclxuICAgICAgICAvL3RvZG8g57uR5a6a5LqL5Lu2XHJcbiAgICAgICBcclxuICAgICAgICB2YXIgdG90YWxQYWdlcztcclxuICAgICAgICBpZiAodG90YWxDb3VudCAlIHBhZ2VTaXplID09IDApIHtcclxuICAgICAgICAgICAgdG90YWxQYWdlcyA9IHRvdGFsQ291bnQgLyBwYWdlU2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvdGFsUGFnZXMgPSBwYXJzZUludCh0b3RhbENvdW50IC8gcGFnZVNpemUpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhZ2VQcmUgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgLSAxKSArICcgY2xhc3M9XCJwcmUtcGFnZSBpbmxpbmUgbXIyMFwiPuS4iuS4gOmhtTwvYT4nO1xyXG4gICAgICAgIHZhciBwYWdlTmV4dCA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDEpICsgJyBjbGFzcz1cIm5leHQtcGFnZSBpbmxpbmVcIj7kuIvkuIDpobU8L2E+JztcclxuICAgICAgICB2YXIgaW5kZXhQYWdlID0gJzxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPVwiMVwiIGNsYXNzPVwicHJlLXBhZ2UgaW5saW5lIG1yMjBcIj7pppbpobU8L2E+PC9saT4nO1xyXG5cclxuICAgICAgICB2YXIgbGFzdFBhZ2UgPSAnIDxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJyBjbGFzcz1cInByZS1wYWdlIGlubGluZSBtcjIwXCI+IOacq+mhtTwvYT4nO1xyXG4gICAgICAgIGlmICh0b3RhbFBhZ2VzIDwgcGFnZVNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlUHJlID0gXCJcIjtcclxuICAgICAgICAgICAgcGFnZU5leHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBpbmRleFBhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDw9IDEpIHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgICAgICBwYWdlUHJlID0gXCJcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gdG90YWxQYWdlcztcclxuICAgICAgICAgICAgcGFnZU5leHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG90YWxDb3VudCA+IDApIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAnPHVsIGNsYXNzPVwicGFnZS1ib3ggaW5saW5lIG1yMjBcIj4nO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VzID4gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09IDEpIC8v56ys5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3V0cHV0LkFwcGVuZChcIiA8YSBkaXNhYmxlZD0nZGlzYWJsZWQnIGNsYXNzPSdjb2xIJz7kuIrkuIDpobU8L2E+IFwiKTsvL+S4iuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5aSE55CG6aaW6aG16L+e5o6lXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpITnkIbkuIrkuIDpobXnmoTov57mjqVcclxuICAgICAgICAgICAgICAgICAgICAvL3BhZ2VQcmUgPSAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDEpICsgJz7kuIrkuIDpobU8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAvLyBvdXRwdXQuQXBwZW5kRm9ybWF0KFwiIDxhIGRhdGEtcGFnZUluZGV4PSd7MH0nIGNsYXNzPSdwYWdlTGluayc+5LiK5LiA6aG1PC9hPiBcIiwgY3VycmVudFBhZ2UgLSAxKTsvL+S4iuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgPiA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJpbnQgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA8IDQpLy80XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gaSArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiBkYXRhLW51bT0nICsgY3VycmVudFBhZ2UgKyAnPicgKyBjdXJyZW50UGFnZSArICc8L2E+IDwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSA2KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyA3ICsgJz4uLi48L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgdG90YWxQYWdlcyArICc+JyArIHRvdGFsUGFnZXMgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKGkgKyAxKSArICc+JyArIChpICsgMSkgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfS8vNFxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRQYWdlID49IDQgJiYgY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzIC0gMykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wYWdlbnVtPXBhZ2VudW0rJyA8bGkgZGF0YS1udW09JysoY3VycmVudFBhZ2UtMykrJz48YSBocmVmPVwiI1wiIG9uY2xpY2s9XCJQYWdpbmF0b3IoJytwYWdlU2l6ZSsnLCcrKGN1cnJlbnRQYWdlLTMpKycsJyArIHRvdGFsQ291bnQgKyAnKVwiPi4uLjwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCI+MTwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDMgPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDMpICsgJz4uLi48L2E+IDwvbGk+JzsvLzIwMTYwOTEzMDkzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gMykvL+S4remXtOW9k+WJjemhtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgZGF0YS1udW09JyArIChjdXJyZW50UGFnZSkgKyAnPicgKyBjdXJyZW50UGFnZSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gNikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyAzKSArICc+Li4uPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgdG90YWxQYWdlcyArICc+JyArIHRvdGFsUGFnZXMgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIGkgLSBwYXJzZUludChjdXJyaW50KSkgKyAnPicgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgaSAtIHBhcnNlSW50KGN1cnJpbnQpKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPVwiMVwiPjE8L2E+IDwvbGk+JzsvLzIwMTYwOTEzMDkzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBkYXRhLW51bT0nICsgKHBhcnNlSW50KHRvdGFsUGFnZXMpIC0gNikgKyAnPi4uLjwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxQYWdlcyAtIDYgKyBpID09IGN1cnJlbnRQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArICh0b3RhbFBhZ2VzIC0gNiArIGkpICsgJz4nICsgKHRvdGFsUGFnZXMgLSA2ICsgaSkgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSBpICsgMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAoaSArIDEpICsgJz4nICsgKGkgKyAxKSArICc8L2E+IDwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gdG90YWxQYWdlcykgLy/mnIDlkI7kuIDpobVcclxuICAgICAgICAgICAgICAgIHsvL+WkhOeQhuS4i+S4gOmhteWSjOWwvumhteeahOmTvuaOpVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3V0cHV0LkFwcGVuZChcIiA8YSBkaXNhYmxlZD0nZGlzYWJsZWQnIGNsYXNzPSdjb2xIJz7kuIvkuIDpobU8L2E+IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFBhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcykgey8v5aSE55CG5LiL5LiA6aG15ZKM5bC+6aG155qE6ZO+5o6lIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kRm9ybWF0KFwiIDxhIGRhdGEtcGFnZWluZGV4PSd7MH0nIGNsYXNzPSdwYWdlTGluayc+5LiL5LiA6aG1PC9hPiBcIiwgY3VycmVudFBhZ2UgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgIC8vIHBhZ2VQcmUgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyAxKSArICcgY2xhc3M9XCJuZXh0LXBhZ2UgaW5saW5lXCI+5LiL5LiA6aG1PC9hPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnPC91bD4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gaW5kZXhQYWdlICsgcGFnZVByZSArIHBhZ2VudW0gKyBwYWdlTmV4dCArIGxhc3RQYWdlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNwYWdpbmF0aW9uIGFcIikudW5iaW5kKFwiY2xpY2tcIik7XHJcbiAgICAgICAgJChcIiNwYWdpbmF0aW9uIGFcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJCh0aGlzKS5hdHRyKFwiZGF0YS1udW1cIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4vL2Z1bmN0aW9uIFBhZ2luYXRvcihwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHRvdGFsQ291bnQsIGNhbGxiYWNrKSB7XHJcblxyXG5cclxuLy99XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC9QYWdpbmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMTMgMTYgMTggMTkgMjEgMjYgMjcgMzEgMzMgMzhcbiAqKi8iLCIvL+mBrue9qVxyXG5mdW5jdGlvbiBNYXNrU2hvdygpIHtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNYXNrSGlkZSgpIHtcclxuICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG59XHJcbi8v5Lyg6YCS5pi+56S655qE5raI5oGvXHJcbmZ1bmN0aW9uIFBvcFRpcFNob3cob2JqKSB7XHJcbiAgICB2YXIgdGlwaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNCBoaWRkZW5cIiBpZD1cIm9rdGlwXCI+PHNwYW4gY2xhc3M9XCJwb3AtY2xvc2UgY3Vyc29yXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPjxwIGNsYXNzPVwibGluZTEwMFwiIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+JyArIG9iaiArICc8L3A+PC9kaXY+PC9kaXY+JztcclxuXHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZCh0aXBodG1sKTtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmFwcGVuZCh0aXBodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59XHJcbi8v5by55Ye656Gu6K6k5qGGXHJcbnZhciBPcGVuQ29uZnJpbVBvcCA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJwb3AtdXAgZm9udDE0XCI+PHNwYW4gY2xhc3M9XCJwb3AtY2xvc2UgY3Vyc29yXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPicgKyBvYmogKyAnPC9kaXY+PGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImhhbmRsZVwiPiA8c3BhbiBjbGFzcz1cIm9rXCIgaWQ9XCJDb25mcmltXCI+56Gu5a6aPC9zcGFuPiAmbmJzcDsmbmJzcDsmbmJzcDs8c3BhbiBjbGFzcz1cIm9rXCIgaWQ9XCJDYW5jZWxcIj7lj5bmtog8L3NwYW4+IDwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59O1xyXG4vL+W8ueWHuuehruiupOahhizmsqHmnInlj5bmtojmjInpkq5cclxudmFyIE9wZW5Db25mcmltUG9wTm9DYW5jZWwgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj4nICsgb2JqICsgJzwvZGl2PjxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJoYW5kbGVcIj4gPHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ29uZnJpbVwiPuehruWumjwvc3Bhbj4gPC9kaXY+PC9kaXY+JztcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuYXBwZW5kKGh0bWwpO1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLnBvcC11cFwiKS5zaG93KCk7XHJcbn07XHJcbi8vL+W8ueWHuuWkmumVv+aXtumXtOWQjua2iOWksVxyXG52YXIgT3BlblRpbWVIaWRlID0gZnVuY3Rpb24gKG9iaiwgdGltZSkge1xyXG4gICAgLy92YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wdXBcIj4gPGg1IGNsYXNzPVwiY2VudGVyIGZvbnQxNiBwb3B1cGhlYWRcIj7mtojmga/mj5DnpLo8aSBjbGFzcz1cInBvcGNsb3NlIGN1cnNvclwiPjwvaT48L2g1PjxkaXYgY2xhc3M9XCJwb3B1cGJveFwiPjxkaXYgY2xhc3M9XCJoYW5kbGUgZm9udDE0IGF1dG9cIj4nICsgb2JqICsgJzwvZGl2PjwvZGl2PjwvZGl2Pic7XHJcbiAgICB2YXIgaHRtbCA9ICcgIDxkaXYgY2xhc3M9XCJwb3B1cCBcIj48aDUgY2xhc3M9XCJjZW50ZXIgZm9udDE2IHBvcHVwaGVhZFwiPiDmtojmga/mj5DnpLo8aSBjbGFzcz1cInBvcGNsb3NlIGN1cnNvclwiPjwvaT48L2g1PjxkaXYgY2xhc3M9XCJwb3B1cGJveFwiPjxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtcIj48ZGl2IGNsYXNzPVwic3VjY2VzcyBhdXRvXCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tdG9wOjIwcHg7XCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImhhbmRsZSBzdWNjZXNzTGV0dGVyXCI+IDxzcGFuIGNsYXNzPVwibXQyMFwiPicrb2JqKyc8L3NwYW4+PC9kaXY+PC9kaXY+PC9kaXY+JztcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuYXBwZW5kKGh0bWwpO1xyXG4gICAgJChcIi5wb3B1cFwiKS5zaG93KCk7XHJcbiAgXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcHVwXCIpLmhpZGUoKTtcclxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0sIHRpbWUpO1xyXG5cclxufTtcclxuZnVuY3Rpb24gUG9wVGlwSGlkZSgpIHtcclxuICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbn1cclxuXHJcbmV4cG9ydHMuTWFza1Nob3cgPSBNYXNrU2hvdztcclxuZXhwb3J0cy5NYXNrSGlkZSA9IE1hc2tIaWRlO1xyXG5leHBvcnRzLlBvcFRpcFNob3cgPSBQb3BUaXBTaG93O1xyXG5leHBvcnRzLlBvcFRpcEhpZGUgPSBQb3BUaXBIaWRlO1xyXG5leHBvcnRzLk9wZW5Db25mcmltUG9wID0gT3BlbkNvbmZyaW1Qb3A7XHJcbmV4cG9ydHMuT3BlblRpbWVIaWRlID0gT3BlblRpbWVIaWRlO1xyXG4vL+WkhOeQhuW8ueWHuuahhueahOmakOiXj1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuZGVsZWdhdGUoXCIucG9wLWNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICAgICAvL2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3BjbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcC1jbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgLy9kb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcGNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC9wb3B1cC9wb3B1cHRpcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDggMTQgMjEgMjYgMzEgMzIgMzMgMzQgMzcgMzhcbiAqKi8iLCJ2YXIgUGFnaW5hdG9yID0gcmVxdWlyZSgnUGFnaW5hdG9yLmpzJyk7XHJcbnZhciB0cGxUYWJsZSA9IHJlcXVpcmUoXCJPcmdFeGFtL3BhcGVybGlzdC50cGxcIik7XHJcbnZhciBwYXJhID0geyBTdWJqZWN0SUQ6IDAsIFN0YWdlSUQ6IDAsIEdyYWRlSUQ6IDAsIGRhdGE6ICcnLCBQYWdlSW5kZXg6IDEsIFBhZ2VTaXplOjEwLEV4YW1OYW1lOicnLEV4YW1Db2RlOicnIH07XHJcbnZhciB1ID0gcmVxdWlyZShcInBvcHVwL3BvcHVwdGlwLmpzXCIpO1xyXG52YXIgbW9kdWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vdG9kbyDpgLvovpHlh73mlbAgIFxyXG4gICAgICAgIENyZWF0ZUV4YW0oKTtcclxuICAgICAgICBsb2FkUGFwZXJMaXN0KDEpO1xyXG4gICAgICAgIFNlYXJjaCgpO1xyXG4gICAgICAgIFNlYXJjaEtleVByZXNzKCk7XHJcbiAgICAgICAgb25DbGlja1BhcmEoKTtcclxuICAgICAgICBvbkNsaWNrUGFyYTIoKTsgICAgXHJcbiAgICB9O1xyXG4gICAgdmFyIHBhZ2luZyA9IGZ1bmN0aW9uIChwYWdlKSB7XHJcbiAgICAgICBcclxuICAgICAgICBsb2FkUGFwZXJMaXN0KHBhZ2UpO1xyXG4gICAgfTtcclxuICAgIHZhciBsb2FkUGFwZXJMaXN0ID0gZnVuY3Rpb24gKHBhZ2UpIHtcclxuICAgICAgICB2YXIgdFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL09yZ0V4YW0vQ3JlYXRlRXhhbS9HZXRTdWJJbmRleFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFN0YWdlSUQ6IHBhcmEuU3RhZ2VJRCxcclxuICAgICAgICAgICAgICAgIEdyYWRlSUQ6IHBhcmEuR3JhZGVJRCxcclxuICAgICAgICAgICAgICAgIFN1YmplY3RJRDogcGFyYS5TdWJqZWN0SUQsXHJcbiAgICAgICAgICAgICAgICBFeGFtTmFtZTogcGFyYS5FeGFtTmFtZSxcclxuICAgICAgICAgICAgICAgIEV4YW1Db2RlOnBhcmEuRXhhbUNvZGUsXHJcbiAgICAgICAgICAgICAgICBQYWdlSW5kZXg6IHBhZ2UsXHJcbiAgICAgICAgICAgICAgICBQYWdlU2l6ZTogcGFyYS5QYWdlU2l6ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdGFibGVJRCB0Ym9keVwiKS5odG1sKHRwbFRhYmxlKGRhdGEuTGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YS5Db3VudDsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFBhZ2luYXRvci5QYWdpbmF0b3IocGFyYS5QYWdlU2l6ZSwgcGFnZSwgdGVtcCwgcGFnaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBPbkNsaURlbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN0YWJsZUlEIHRib2R5XCIpLmh0bWwodHBsVGFibGUoZGF0YS5MaXN0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG4gICAgdmFyIG9uQ2xpY2tQYXJhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjR3JhZGVJRCBsaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7ICBcclxuICAgICAgICAgICAgdmFyIGdyYWRlaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWFyZWFpZFwiKTtcclxuICAgICAgICAgICAgTG9hZFN1YmplY3RCeUdyYWRlKGdyYWRlaWQsIHRoaXMpO1xyXG4gICAgICAgICAgICBvbkNsaWNrUGFyYUl0ZW0odGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uQ2xpY2tQYXJhMiA9IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNTdWJqZWN0SUQgbGlcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL+eCueWHu+W5tOe6p+WKoOi9veenkeebrlxyXG4gICAgICAgICAgICBvbkNsaWNrUGFyYUl0ZW0odGhpcyk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHZhciBvbkNsaWNrUGFyYUl0ZW0gPSBmdW5jdGlvbiAob2JqKVxyXG4gICAge1xyXG4gICAgICAgICQob2JqKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpOy8v5L6/5YipXHJcbiAgICAgICAgJChvYmopLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGlmICgkKG9iaikuYXR0cihcImRhdGEtYVwiKSkge1xyXG4gICAgICAgICAgICBwYXJhLkdyYWRlSUQgPSAkKG9iaikuYXR0cihcImRhdGEtYXJlYWlkXCIpO1xyXG4gICAgICAgICAgICBwYXJhLlN0YWdlSUQgPSAkKG9iaikuYXR0cihcImRhdGEtYVwiKTtcclxuICAgICAgICAgICAgcGFyYS5TdWJqZWN0SUQgPSAkKFwiI1N1YmplY3RJRCBsaVwiKS5maWx0ZXIoJ2xpW2NsYXNzPVwiYWN0aXZlXCJdJykuYXR0cihcImRhdGEtYXJlYWlkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcGFyYS5TdWJqZWN0SUQgPSAkKG9iaikuYXR0cihcImRhdGEtYXJlYWlkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkUGFwZXJMaXN0KDEpO1xyXG4gICAgfTtcclxuICAgIHZhciBMb2FkU3ViamVjdEJ5R3JhZGUgPSBmdW5jdGlvbiAoZ3JhZGVpZCwgb2JqKSAvL+WKoOi9veacieaViOenkeebrlxyXG4gICAge1xyXG4gICAgICAgIHZhciBhbGwgPSAkKCc8bGkgZGF0YS1hcmVhaWQ9XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj7lhajpg6g8L2xpPicpO1xyXG4gICAgICAgIHZhciBzdWJqZWN0MSA9ICQoJzxsaSBkYXRhLWFyZWFpZD1cIjJcIj7mlbDlraY8L2xpPjxsaSBkYXRhLWFyZWFpZD1cIjNcIj7oi7Hor608L2xpPjxsaSBkYXRhLWFyZWFpZD1cIjRcIj7niannkIY8L2xpPjxsaSBkYXRhLWFyZWFpZD1cIjVcIj7ljJblraY8L2xpPicpO1xyXG4gICAgICAgIHZhciBzdWJqZWN0MiA9ICQoJzxsaSBkYXRhLWFyZWFpZD1cIjE0XCJcIj7lpaXmlbA8L2xpPjxsaSBkYXRhLWFyZWFpZD1cIjNcIj7oi7Hor608L2xpPicpO1xyXG4gICAgICAgIHZhciBzdWJqZWN0MyA9ICQoJzxsaSBkYXRhLWFyZWFpZD1cIjNcIj7oi7Hor608L2xpPicpO1xyXG4gICAgICAgICQoXCIjU3ViamVjdElEXCIpLmh0bWwoXCJcIik7XHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGdyYWRlaWQpID09IDApIHtcclxuICAgICAgICAgICAgJChcIiNTdWJqZWN0SURcIikuYXBwZW5kKGFsbCk7XHJcbiAgICAgICAgICAgICQoXCIjU3ViamVjdElEXCIpLmFwcGVuZChzdWJqZWN0Mik7XHJcbiAgICAgICAgICAgICQoXCIjU3ViamVjdElEXCIpLmFwcGVuZChzdWJqZWN0MSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KGdyYWRlaWQpID49IDEgJiYgcGFyc2VJbnQoZ3JhZGVpZCkgPD0gMikge1xyXG4gICAgICAgICAgICAkKFwiI1N1YmplY3RJRFwiKS5hcHBlbmQoYWxsKTtcclxuICAgICAgICAgICAgJChcIiNTdWJqZWN0SURcIikuYXBwZW5kKHN1YmplY3QzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGFyc2VJbnQoZ3JhZGVpZCkgPj0gMSAmJiBwYXJzZUludChncmFkZWlkKSA8PSA1KSB7XHJcbiAgICAgICAgICAgICQoXCIjU3ViamVjdElEXCIpLmFwcGVuZChhbGwpO1xyXG4gICAgICAgICAgICAkKFwiI1N1YmplY3RJRFwiKS5hcHBlbmQoc3ViamVjdDIpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KGdyYWRlaWQpID09IDYpIHtcclxuICAgICAgICAgICAgJChcIiNTdWJqZWN0SURcIikuYXBwZW5kKGFsbCk7XHJcbiAgICAgICAgICAgICQoXCIjU3ViamVjdElEXCIpLmFwcGVuZChzdWJqZWN0Mik7XHJcbiAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KGdyYWRlaWQpID4gNikge1xyXG4gICAgICAgICAgICAkKFwiI1N1YmplY3RJRFwiKS5hcHBlbmQoYWxsKTtcclxuICAgICAgIFxyXG4gICAgICAgICAgICAkKFwiI1N1YmplY3RJRFwiKS5hcHBlbmQoc3ViamVjdDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvbkNsaWNrUGFyYTIoKTtcclxuICAgIH1cclxuICAgIHZhciBPbkNsaURlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgJChcIiN0YWJsZUlEXCIpLmZpbmQoXCJ0clwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gYWxlcnQoXCJ4eFwiKTtcclxuICAgICAgICAgICAgLy92YXIgdGRBcnIgPSAkKHRoaXMpLmNoaWxkcmVuKCkubGFzdCgpLmZpbmQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICB2YXIgdGRBcnIgPSAkKHRoaXMpLmNoaWxkcmVuKCkubGFzdCgpLmZpbmQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAvL3RkQXJyLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coMzQzMik7XHJcbiAgICAgICAgICAgIC8vfSlcclxuICAgICAgICAgICAgdGRBcnIubWFwKGZ1bmN0aW9uIChpLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgJChpbmRleCkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1vcHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gJCh0aGlzKS5hdHRyKFwiZGF0YS12YWx1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0ZXN0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRUZXN0KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2aWV3XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0Vmlldyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZWRpdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRQYXBlcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGVsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsUGFwZXIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcbiAgICAvL+W8gOWni+a1i+ivlVxyXG4gICAgdmFyIFN0YXJ0VGVzdCA9IGZ1bmN0aW9uIChvYmppZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSAnL0V4YW0vSW5kZXgvU2V0SW5mbz9FeGFtVHlwZT0wJkV4YW1JRD0nO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiL09yZ0V4YW0vQ3JlYXRlRXhhbS9TYXZlU3ViXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIEV4YW1JRDogb2JqaWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSB1cmwgKyBlLklEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIH07XHJcbiAgICAvL+afpeeci1xyXG4gICAgdmFyIEdldFZpZXcgPSBmdW5jdGlvbiAob2JqaWQpIHtcclxuICAgICAgIC8vIGxvY2F0aW9uLmhyZWYgPSBcIi9PcmdFeGFtL0NyZWF0ZUV4YW0vR2V0UmVWaWV3P0V4YW1JRD1cIitvYmppZDtcclxuICAgIH07XHJcbiAgICAvL+e8lui+kVxyXG4gICAgdmFyIEVkaXRQYXBlciA9IGZ1bmN0aW9uIChvYmppZCkge1xyXG5cclxuICAgIH07XHJcbiAgICAvL+WIoOmZpFxyXG4gICAgdmFyIERlbFBhcGVyID0gZnVuY3Rpb24gKG9iamlkKSB7XHJcbiAgICAgICAgdS5PcGVuQ29uZnJpbVBvcCgn5L2g56Gu6K6k6KaB5Yig6Zmk5pys6K+V5Y235ZCX77yfJyk7ICAgICBcclxuICAgICAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmRlbGVnYXRlKFwiI0NvbmZyaW1cIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICAgICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICAgIHVybDogXCIvT3JnRXhhbS9DcmVhdGVFeGFtL0RlbGV0ZVN1YlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIEV4YW1JRDpvYmppZFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhkYXRhKTsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHUuT3BlblRpbWVIaWRlKCfmk43kvZzmiJDlip8nLCAnMjAwMCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdS5PcGVuVGltZUhpZGUoJ+aTjeS9nOWksei0pScsICcyMDAwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmRlbGVnYXRlKFwiI0NhbmNlbFwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5wb3AtdXBcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgQ3JlYXRlRXhhbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI0NyZWF0ZUV4YW1cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvT3JnRXhhbS9DcmVhdGVFeGFtL0Fzc2VtYmx5SW5pdFwiO1xyXG4gICAgICAgIH0pOyAgICBcclxuICAgIH07XHJcbiAgICB2YXIgU2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjc2VhcmNoVGV4dFwiKS5rZXlkb3duKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PSA5KS8vOeS4unRhYi0tLS0xM+S4umVudGVyXHJcbiAgICAgICAgICAgIHsgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwYXJhLkV4YW1Db2RlID0gJChcIiNzZWFyY2hUZXh0XCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgcGFyYS5FeGFtTmFtZSA9ICQoXCIjc2VhcmNoVGV4dFwiKS52YWwoKTsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbG9hZFBhcGVyTGlzdCgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxuICAgIHZhciBTZWFyY2hLZXlQcmVzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI3NlYXJjaFRleHRcIikua2V5cHJlc3MoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGtleW51bSA9IGV2ZW50LmtleUNvZGU7XHJcbiAgICAgICAgICAgIGlmIChrZXludW0gPT0gMzIgfHwga2V5bnVtID09IDM0IHx8IGtleW51bSA9PSAzOSB8fCBrZXludW0gPT0gNDcgfHwga2V5bnVtID09IDkyIHx8IGtleW51bSA9PSA1OCB8fCBrZXludW0gPT0gNTkgfHwga2V5bnVtID09IDYwIHx8IGtleW51bSA9PSA2MiB8fCBrZXludW0gPT0gNjMgfHwga2V5bnVtID09IDkxIHx8IGtleW51bSA9PSA5MyB8fCBrZXludW0gPT0gMTIzIHx8IGtleW51bSA9PSAxMjQgfHwga2V5bnVtID09IDEyNSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufTtcclxuXHJcbi8v57uR5a6a5pWw5o2uXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgbmV3IG1vZHVsZSgpLmluaXQoKTtcclxuICAgIC8vIG1vZHVsZS5pbml0KCk7IFxyXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2pzL09yZ0V4YW0vcGFwZXJsaXN0LmpzXG4gKiogbW9kdWxlIGlkID0gNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzNcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmdFeGFtL3BhcGVybGlzdCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsRXhhbUxpc3Q9JGRhdGEuRXhhbUxpc3QsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaChFeGFtTGlzdCxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPHRyPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkV4YW1Db2RlKTtcbiRvdXQrPSc8L3RkPiA8dGQ+IDxkaXYgY2xhc3M9XCJlbGxpcHNpcyB3MTEwXCIgdGl0bGU9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuRXhhbU5hbWUpO1xuJG91dCs9J1wiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5FeGFtTmFtZSk7XG4kb3V0Kz0nPC9kaXY+IDwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU291cmNlSUQpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuTGFzdFVwZGF0ZVRpbWUpO1xuJG91dCs9JzwvdGQ+IDx0ZD4gPHNwYW4gY2xhc3M9XCJzZWUtYnRuIG1yMjAgdzY4XCIgZGF0YS1vcHQ9XCJ0ZXN0XCIgZGF0YS12YWx1ZT1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5FeGFtSUQpO1xuJG91dCs9J1wiPuW8gOWni+a1i+ivlTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzZWUtYnRuIG1yMjBcIiBkYXRhLW9wdD1cInZpZXdcIiBkYXRhLXZhbHVlPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkV4YW1JRCk7XG4kb3V0Kz0nXCI+5p+l55yLPC9zcGFuPiAnO1xuaWYoJHZhbHVlLklzU2VsZiA9PTEgKXtcbiRvdXQrPScgPHNwYW4gY2xhc3M9XCJzZWUtYnRuIG1yMjBcIiBkYXRhLW9wdD1cImVkaXRcIiBkYXRhLXZhbHVlPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkV4YW1JRCk7XG4kb3V0Kz0nXCI+57yW6L6RPC9zcGFuPiA8c3BhbiBjbGFzcz1cInNlZS1idG4gbXIyMFwiIGRhdGEtb3B0PVwiZGVsXCIgZGF0YS12YWx1ZT1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5FeGFtSUQpO1xuJG91dCs9J1wiPiDliKDpmaQ8L3NwYW4+ICc7XG59XG4kb3V0Kz0nIDwvdGQ+IDwvdHI+ICc7XG59KTtcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy90cGwvT3JnRXhhbS9wYXBlcmxpc3QudHBsXG4gKiogbW9kdWxlIGlkID0gODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9