webpackJsonp([38,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(90);


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

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/Org/batchslist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,BatchListModel=$data.BatchListModel,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(BatchListModel,function($value,$index){
	$out+=' <li class="batch"> <input class="middle mr5" type="checkbox" batchId="';
	$out+=$escape($value.BatchID);
	$out+='" roleId="';
	$out+=$escape($value.RoleId);
	$out+='" batchType="';
	$out+=$escape($value.AccountType);
	$out+='"/> <span>剩余<i class="red">';
	$out+=$escape($value.BatchSurplusCount);
	$out+='</i>个';
	if($value.AccountType == 1){
	$out+='老师';
	}
	if($value.AccountType == 2){
	$out+='咨询师';
	}
	if($value.AccountType == 3){
	$out+='学生';
	}
	$out+='账号，剩余时间<i class="red">';
	$out+=$escape($value.BatchSurplusDays);
	$out+='</i>天</span> </li> ';
	});
	return new String($out);
	});

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/Org/accountdetailslist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,BatchListModel=$data.BatchListModel,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(BatchListModel,function($value,$index){
	$out+=' <tr> <td>';
	$out+=$escape($value.BatchID);
	$out+='</td> ';
	if($value.AccountType == 1){
	$out+=' <td>老师账号</td> ';
	}
	$out+=' ';
	if($value.AccountType == 2){
	$out+=' <td>咨询师账号</td> ';
	}
	$out+=' ';
	if($value.AccountType == 3){
	$out+=' <td>学生账号</td> ';
	}
	$out+=' <td>';
	$out+=$escape($value.BatchSurplusCount);
	$out+='</td> <td>';
	$out+=$escape($value.BatchSurplusDays);
	$out+='</td> <td>';
	$out+=$escape($value.CreateDate);
	$out+='</td> </tr> ';
	});
	return new String($out);
	});

/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	var Paginator = __webpack_require__(8);      //分页导航
	var PopuClient = __webpack_require__(24);     //弹出框
	//查询或筛选学生列表临时变量
	var currentPageIndex = 1;    //当前页码
	var currentPageSize = 10;    //每页多少条数据
	var currentStuType = 1;      //学生类型，0为所有学生，1为新添加学生，2为已开课学生，3为已结课学生
	var currentExpireDays = -1;    //过期时间，-1表示所有，0表示已过期，其他大于0的数字表示过期的天数
	var currentActiveStatus = -1;   //激活状态，-1表示所有，0表示未激活，1表示已激活
	var currentClassType = -1;   //报课类型，-1表示所有，0表示班课，1表示1对1
	var currentBigGrade = "0";     //学段，"0"表示所有，其他取值为x,c,g
	var currentRoleId = -1;     //角色ID，用来处理复合角色时的页面展示逻辑
	var currentSchoolId = -1;    //校区ID，-1表示所有
	var currentSearchWord = "";    //搜索关键字,为""表示搜索所有
	var currentSelectStuObj = null;    //当前选中的一行学生数据
	
	//分配学管临时变量
	var currentSelectedManagerId = 0;      //当前选中的学管ID
	var currentStudentId = 0;           //当前选择的学生ID
	
	//添加学生临时变量
	var tempBatchIdList = new Array();    //当前选择的批次ID
	var tempActiveStatus = 0;            //0表示暂不激活，1表示立即激活
	
	//账号续费临时数据
	var tempUserList = new Array();    //用户选择的续费ID列表，内部格式为{"UserId":1,"UserName":"张三","UserAccount":"18612345"}
	
	//学生报课信息临时数据
	var tempLessonInfoList = new Array();     //从服务端获取的学生报课信息
	var tempRequestLessonList = new Array();      //修改后的学生报课信息，格式为{"StudentId":"","UserClassId":"","OperateFlags":0,"ClassType":"1","BigGrade":"c","SubjectId":"01","ClassId":0,"ClassName":"","TeacherId":0,"TeacherName":"","ClassHour":0,"EduType":0,"CourseID":0,"OldClassId":0}
	var tempAddLessonIndex = -1;         //新增的报课信息的临时ID，一直以负数的形式存在
	var tempTeacherOrClassId = -1;      //选择的教师或班级ID
	var tempTeacherOrClassName = "";      //选择的教师或班级名称
	var tempCurentLessonId = 0;              //修改或添加的课程唯一ID
	var tempCurrentSelectSubject = "-1";     //添加时选择的科目ID
	var tempCurrentSelectBigGrade = "-1";    //添加时选择的大年级
	var tempCurrentSelectSubjectDesc = "";     //添加时选择的科目ID
	var tempCurrentSelectBigGradeDesc = "";    //添加时选择的大年级
	var tempCurrentSelectClassType = 1;    //添加时选择的班级类型
	
	//获取学生列表
	function GetStudentList() {
	    $.ajax({
	        type: "POST",
	        url: "/OrgUser/StudentManage/GetStudentList",
	        data: {
	            roleId: currentRoleId,
	            keyWord: currentSearchWord,
	            classType: currentClassType,
	            activeStatus: currentActiveStatus,
	            expireTime: currentExpireDays,
	            schoolId: currentSchoolId,
	            studentType: currentStuType,
	            pageSize: currentPageSize,
	            pageNum: currentPageIndex
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                var studentInfo = data.Data;
	                if (studentInfo != null && studentInfo != undefined && studentInfo != "") {
	                    $("#spCanActiveStudentCount").html("当前还可以激活<i class=\"red\"> " + studentInfo.SurplusStuCount + " </i>名学生账号");
	                    $("#divTotalStudentCount").html("共计<i class=\"red\"> " + studentInfo.StudentCount + " </i>名学生");
	                    if (studentInfo.StudentInfoList != null && studentInfo.StudentInfoList != undefined && studentInfo.StudentInfoList != "" && studentInfo.StudentInfoList.length > 0) {
	                        if (studentInfo.RoleId == 1) {
	                            var tempStuListTpl = __webpack_require__(91);
	                            $("#tbStudentList").html(tempStuListTpl(studentInfo));
	                            $("#selectClassType").change(function () {
	                                var tempSelected = $("#selectClassType option:selected");
	                                currentClassType = parseInt(tempSelected.val());
	                                GetStudentList();
	                            });
	                            $("#selectSchoolId").change(function () {
	                                var tempSelected = $("#selectSchoolId option:selected");
	                                currentSchoolId = parseInt(tempSelected.val());
	                                GetStudentList();
	                            });
	                        }
	                        else if (studentInfo.RoleId == 3) {
	                            var tempStuListTpl = __webpack_require__(92);
	                            $("#tbStudentList").html(tempStuListTpl(studentInfo.StudentInfoList));
	                            $("#selectClassType").change(function () {
	                                var tempSelected = $("#selectClassType option:selected");
	                                currentClassType = parseInt(tempSelected.val());
	                                GetStudentList();
	                            });
	                        }
	                        else if (studentInfo.RoleId == 4) {
	                            var tempStuListTpl = __webpack_require__(93);
	                            $("#tbStudentList").html(tempStuListTpl(studentInfo.StudentInfoList));
	                            //添加分配学管/修改学管按钮事件
	                            $("#tbStudentList span[name='spSetStuManager']").click(ShowAllotAllotStudyManangerArea);
	                            $("#selectActiveStatus").change(function () {
	                                var tempSelected = $("#selectActiveStatus option:selected");
	                                currentActiveStatus = parseInt(tempSelected.val());
	                                GetStudentList();
	                            });
	                            $("#selectExpireDays").change(function () {
	                                var tempSelected = $("#selectExpireDays option:selected");
	                                currentExpireDays = parseInt(tempSelected.val());
	                                GetStudentList();
	                            });
	                        }
	                        else if (studentInfo.RoleId == 6) {
	                            var tempStuListTpl = __webpack_require__(94);
	                            $("#tbStudentList").html(tempStuListTpl(studentInfo.StudentInfoList));
	                            //添加分配/管理报课信息按钮事件
	                            $("#tbStudentList span[name='spSetStuTeacher']").click(ShowAllotTeacherOrClassArea);
	                            $("#selectActiveStatus").change(function () {
	                                var tempSelected = $("#selectActiveStatus option:selected");
	                                currentActiveStatus = parseInt(tempSelected.val());
	                                GetStudentList();
	                            });
	                            $("#selectExpireDays").change(function () {
	                                var tempSelected = $("#selectExpireDays option:selected");
	                                currentExpireDays = parseInt(tempSelected.val());
	                                GetStudentList();
	                            });
	                            $("#selectClassType").change(function () {
	                                var tempSelected = $("#selectClassType option:selected");
	                                currentClassType = parseInt(tempSelected.val());
	                                GetStudentList();
	                            });
	                            $("#selectBigGrade").change(function () {
	                                var tempSelected = $("#selectBigGrade option:selected");
	                                currentBigGrade = tempSelected.val();
	                                GetStudentList();
	                            });
	                            //点击复选框，选中用户
	                            $("#tbStudentList input[name='ckCheckUser']").click(SeletedUserInfo);
	                        }
	                        //添加查看按钮事件
	                        $("#tbStudentList span[name='btnViewStuDetails']").click(ShowStudentDetailPage);
	                        //写分页逻辑
	                        Paginator.Paginator(currentPageSize, currentPageIndex, studentInfo.StudentCount, ChangePageIndex);
	                    }
	                    else {
	                        //显示没有学生的页面信息
	                    }
	                }
	                else {
	                    PopuClient.PopTipShow("没有查询到数据！");
	                }
	            } else {
	                //var html = '<tr class="font12"><td colspan=4>' + data.Result + '</td></tr>';
	                //$("#idTableClass tbody").html(html);
	            }
	        }
	    });
	}
	
	//改变页码进行分页
	function ChangePageIndex(pageIndex) {
	    currentPageIndex = pageIndex;
	    GetStudentList();
	}
	
	//显示分配学管弹出框，此处注意到底是分配还是修改
	function ShowAllotAllotStudyManangerArea() {
	    var tempManagerId = $(this).attr("managerId");
	    var tempStudentId = $(this).attr("studentId");
	    currentStudentId = parseInt(tempStudentId);
	    $("#imgAllotStuManagerClose").click(function () {
	        $("#divAllotStudyMananger").addClass("hidden");
	    });
	    $("#btnAllotManagerSubmit").click(AllotStudyMananger);
	    $.ajax({
	        type: "POST",
	        url: "/OrgUser/StudentManage/GetAllStudentManager",
	        data: {},
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                if (data.Data != null && data.Data != undefined) {
	                    var schoolTreeTpl = __webpack_require__(95);
	                    $("#ulStudyManagerList").html(schoolTreeTpl(data.Data));
	                    //添加选择部门事件
	                    $("divAllotStudyMananger [name='department-item']").click(ChangeNewManager);
	                    if (tempManagerId != null && tempManagerId != undefined && tempManagerId != "") {
	                        if (tempManagerId == "0") {
	                            $("divAllotStudyMananger [name='department-item']:first").click();
	                        } else {
	                            $("divAllotStudyMananger [name='department-item']").each(function (key, value) {
	                                if ($(value).attr("managerId") == tempManagerId) {
	                                    $(value).click();
	                                }
	                            });
	                        }
	                    }
	                    $("#divAllotStudyMananger").removeClass("hidden");
	                }
	            }
	        }
	    });
	}
	
	//改变学管
	function ChangeNewManager() {
	    $(this).siblings().removeAttr("checked");
	    $(this).attr("checked", "checked");
	    currentSelectedManagerId = parseInt($(this).attr("managerId"));
	}
	
	//分配学管
	function AllotStudyMananger() {
	    $.ajax({
	        type: "POST",
	        url: "/OrgUser/StudentManage/SetStudentManager",
	        data: {
	            studentId: currentStudentId,
	            managerId: currentSelectedManagerId
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                if (data.Data) {
	                    $("#divAllotStudyMananger").addClass("hidden");
	                } else {
	                    PopuClient.PopTipShow("分配学管失败，请稍后再试！");
	                }
	            }
	        }
	    });
	}
	
	//显示管理报课信息弹出框
	function ShowAllotTeacherOrClassArea() {
	    currentSelectStuObj = $(this);
	    var tempStudentId = $(this).attr("studentId");
	    currentStudentId = parseInt(tempStudentId);
	    var tempTitle = $(this).html();
	    $("#h5AllotTeacherInfo").html(tempTitle + "            <i class=\"popclose cursor\" id=\"iCloseLessonArea\"></i>")
	    $("#iCloseLessonArea").click(function () {
	        $("#divStudentLessonList").addClass("hidden");
	    });
	    $("#btnSubmitStuLessonList").click(AllotTeacherOrClass);
	    //添加和修改按钮绑定事件
	    $("#spAddLesson").click(AddLessonInfo);
	    $("#spUpdateLesson").click(function () {
	        //如果用户当前没有选中列表中的某一行，则需要选中第一行
	        if (tempCurentLessonId == 0) {
	            //查询是否有未删除的数据，如果有，则选中第一行
	            var tempEleList = $("#tbStuLessonList >tbody>tr:visible");
	            if (tempEleList != null && tempEleList != undefined && tempEleList.length > 0) {
	                $("#tbStuLessonList >tbody>tr:visible").first().click();
	            }
	        }
	    });
	    tempAddLessonIndex = -1;
	    $.ajax({
	        type: "POST",
	        url: "/OrgUser/StudentManage/GetStudentClassInfoList",
	        data: {
	            studentId: currentStudentId,
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                tempLessonInfoList = data.Data;
	                if (tempLessonInfoList != null && tempLessonInfoList != undefined) {
	                    if (tempLessonInfoList.length > 0) {
	                        for (var i = 0; i < tempLessonInfoList.length; i++) {
	                            var tmpSourceData = tempLessonInfoList[i];
	                            var tmpTargetData = { "StudentId": currentStudentId, "UserClassId": tmpSourceData.UserClassStudyId, "OperateFlags": 0, "ClassType": tmpSourceData.ClassType, "BigGrade": tmpSourceData.BigGrade, "SubjectId": tmpSourceData.SubjectId, "ClassId": tmpSourceData.ClassId, "ClassName": tmpSourceData.ClassName, "TeacherId": 0, "TeacherName": "", "ClassHour": tmpSourceData.SurplusClassHour, "EduType": 0, "CourseID": tmpSourceData.CourseID, "OldClassId": 0 };
	                            tempRequestLessonList.push(tmpTargetData);
	                        }
	                        var lessenListTpl = __webpack_require__(96);
	                        $("#tbStuLessonList >tbody").html(lessenListTpl(data.Data));
	                        //添加删除数据
	                        $("tbStuLessonList [name='btnDeleteLesson']").click(DeleteLessonInfo);
	                        //选中数据
	                        $("tbStuLessonList >tbody>tr").click(SelectLessonInfo);
	                        $("#divStudentLessonList").removeClass("hidden");
	                    } else {
	
	                    }
	                }
	            }
	        }
	    });
	}
	
	//移除学生的报课信息
	function DeleteLessonInfo() {
	    var tempLessonId = $(this).attr("lessonId");
	    for (var i = 0; i < tempRequestLessonList.length; i++) {
	        if (tempRequestLessonList.UserClassId == tempLessonId) {
	            tempRequestLessonList.OperateFlags = 2;
	            break;
	        }
	    }
	    //隐藏此行
	    $(this).parent().parent().hide();
	}
	
	//选中需要修改学生报课信息
	function SelectLessonInfo() {
	    //如果是被隐藏的行，则表示被删除，因此无需做处理
	    if ($(this).is(":visible")) {
	        $("#spUpdateLesson").siblings().removeClass("click-on");
	        $("#spUpdateLesson").addClass("click-on");
	        var tmpLessonId = $(this).attr("lessonClassId");
	        tempCurentLessonId = parseInt(tmpLessonId);
	        //展示数据
	        var currentData = null;
	        for (var i = 0; i < tempLessonInfoList.length; i++) {
	            if (tempLessonInfoList[i].UserClassStudyId == tempCurentLessonId) {
	                currentData = tempLessonInfoList[i];
	                break;
	            }
	        }
	        if (currentData != null) {
	            var tempData = {};
	            tempData.UserClassStudyId = currentData.UserClassStudyId;
	            tempData.BigGradeDesc = currentData.BigGradeDesc;
	            tempData.SubjectDesc = currentData.SubjectDesc;
	            tempData.SurplusClassHour = currentData.SurplusClassHour;
	            if (currentData.ClassType == 0) {
	                tempData.TitleName = "班级";
	            } else if (currentData.ClassType == 1) {
	                tempData.TitleName = "老师";
	            }
	            //获取教师或班级信息
	            $.ajax({
	                type: "POST",
	                url: "/OrgUser/StudentManage/GetTeacherListBySubject",
	                data: {
	                    classType: currentData.ClassType,
	                    subjectId: currentData.SubjectId,
	                    bigGrade: currentData.BigGrade
	                },
	                dataType: "json",
	                error: function (data) {
	                    //debugger;
	                },
	                success: function (data) {
	                    if (data.OK) {
	                        tempData.TeacherOrClassList = data.Data;
	                    }
	                }
	            });
	            //加载模板
	            var tempLessonInfoTpl = __webpack_require__(97);
	            $("#divManageLessonInfo").html(tempLessonInfoTpl(tempData));
	            //添加相应的事件
	            if ($("#selectTeacherOrClass") != null && $("#selectTeacherOrClass") != undefined) {
	                $("#selectTeacherOrClass").change(function () {
	                    var tempSelected = $("#selectTeacherOrClass option:selected");
	                    tempTeacherOrClassId = parseInt(tempSelected.val());
	                    tempTeacherOrClassName = tempSelected.html();
	                });
	            }
	            if ($("#btnUpdateLessonInfo") != null && $("#btnUpdateLessonInfo") != undefined) {
	                $("#btnUpdateLessonInfo").click(function () {
	                    var tempClassHour = parseInt($("#txtUpdateClassHour").val());
	                    for (var i = 0; i < tempRequestLessonList.length; i++) {
	                        if (tempRequestLessonList[i].UserClassStudyId == tempCurentLessonId) {
	                            tempRequestLessonList[i].OperateFlags = 1;
	                            tempRequestLessonList[i].ClassHour = tempClassHour;
	                            if (tempRequestLessonList[i].ClassType == 0) {
	                                tempRequestLessonList[i].OldClassId = tempRequestLessonList[i].ClassId;
	                                tempRequestLessonList[i].ClassId = tempTeacherOrClassId;
	                                tempRequestLessonList[i].ClassName = tempTeacherOrClassName;
	                            }
	                            else if (tempRequestLessonList[i].ClassType == 1) {
	                                tempRequestLessonList[i].TeacherId = tempTeacherOrClassId;
	                                tempRequestLessonList[i].TeacherName = tempTeacherOrClassName;
	                            }
	                            tempCurentLessonId = 0;
	                            break;
	                        }
	                    }
	                });
	            }
	        }
	    }
	}
	
	//添加学生报课信息
	function AddLessonInfo() {
	    $("#spAddLesson").siblings().removeClass("click-on");
	    $("#spAddLesson").addClass("click-on");
	    //获取数据
	    var tempData = {};
	    tempCurentLessonId = tempAddLessonIndex;
	    tempData.UserClassStudyId = tempCurentLessonId;
	    tempData.SubjectList = currentData.SubjectDesc;
	    tempData.SurplusClassHour = 0;
	    tempData.TitleName = "老师";
	    //获取科目
	    $.ajax({
	        type: "POST",
	        url: "/Org/CommonManage/GetSubjectList",
	        data: {},
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                tempData.SubjectList = data.Data;
	            }
	        }
	    });
	    //加载模板
	    var tempLessonInfoTpl = __webpack_require__(98);
	    $("#divManageLessonInfo").html(tempLessonInfoTpl(tempData));
	    //添加相应的事件
	    if ($("#selectAddLessonBigGrade") != null && $("#selectAddLessonBigGrade") != undefined) {
	        $("#selectAddLessonBigGrade").change(function () {
	            var tempSelected = $("#selectAddLessonBigGrade option:selected");
	            tempCurrentSelectBigGrade = tempSelected.val();
	            tempCurrentSelectBigGradeDesc = tempSelected.html();
	            if (tempCurrentSelectBigGrade != "-1" && tempCurrentSelectSubject != "-1") {
	                GetAddLessonTeacherOrClassInfo();
	                $("spErrorAddTip").hide();
	            } else {
	                $("spErrorAddTip").show();
	            }
	        });
	    }
	    if ($("#selectAddLessonSubject") != null && $("#selectAddLessonSubject") != undefined) {
	        $("#selectAddLessonSubject").change(function () {
	            var tempSelected = $("#selectAddLessonSubject option:selected");
	            tempCurrentSelectSubject = tempSelected.val();
	            tempCurrentSelectSubjectDesc = tempSelected.html();
	            if (tempCurrentSelectBigGrade != "-1" && tempCurrentSelectSubject != "-1") {
	                GetAddLessonTeacherOrClassInfo();
	                $("spErrorAddTip").hide();
	            } else {
	                $("spErrorAddTip").show();
	            }
	        });
	    }
	    if ($("#divClassTypeChoose") != null && $("#divClassTypeChoose") != undefined) {
	        $("#divClassTypeChoose input[name='type-choose']").click(function () {
	            tempCurrentSelectClassType = parseInt($(this).val());
	            if (tempCurrentSelectClassType == 1) {
	                $("#divTitle").html("老师：");
	            } else {
	                $("#divTitle").html("班级：");
	            }
	        });
	    }
	    //点击确定事件
	    if ($("#btnAddLessonInfo") != null && $("#btnAddLessonInfo") != undefined) {
	        $("#btnAddLessonInfo").click(function () {
	            var tempClassHour = parseInt($("#txtUpdateClassHour").val());
	            if (tempCurrentSelectBigGrade != "-1" && tempCurrentSelectSubject != "-1" && tempTeacherOrClassId != -1) {
	                var tmpTargetData = { "StudentId": currentStudentId, "UserClassId": tempCurentLessonId, "OperateFlags": 0, "ClassType": tempCurrentSelectClassType, "BigGrade": tempCurrentSelectBigGrade, "SubjectId": tempCurrentSelectSubject, "ClassId": tempTeacherOrClassId, "ClassName": tempTeacherOrClassName, "TeacherId": 0, "TeacherName": "", "ClassHour": tempClassHour, "EduType": 0, "CourseID": 0, "OldClassId": 0 };
	                tempRequestLessonList.push(tmpTargetData);
	                tempAddLessonIndex--;
	                //添加一条数据到列表中
	                var tempTrHtml = "<tr lessonClassId=\"" + tempCurentLessonId + "\">";
	                if (tempCurrentSelectClassType == 1) {
	                    tempTrHtml += " <td>1对1</td>";
	                } else {
	                    tempTrHtml += " <td>班课</td>";
	                }
	                tempTrHtml += " <td>" + tempCurrentSelectBigGradeDesc + "</td>";
	                tempTrHtml += "<td>" + tempCurrentSelectSubjectDesc + "</td>";
	                tempTrHtml += "<td>" + tempTeacherOrClassName + "</td>";
	                tempTrHtml += "<td>" + tempClassHour + "</td>";
	                tempTrHtml += "<td>";
	                tempTrHtml += "<i class=\"dustbin\" name=\"btnDeleteLesson\" lessonId=\"" + tempCurentLessonId + "\"></i>";
	                tempTrHtml += "</td>";
	                tempTrHtml += "</tr>";
	                //添加到最后一行
	                $("#tbStudentList tr:last").after(tempTrHtml);
	                //添加删除数据
	                $("tbStuLessonList [name='btnDeleteLesson']:last").click(DeleteLessonInfo);
	                //选中数据
	                $("tbStuLessonList >tbody>tr:last").click(SelectLessonInfo);
	                $("spErrorAddTip").hide();
	            } else {
	                $("spErrorAddTip").show();
	            }
	        });
	    }
	}
	
	//添加课程信息时，获取教师或班级信息
	function GetAddLessonTeacherOrClassInfo() {
	    //获取教师或班级信息
	    $.ajax({
	        type: "POST",
	        url: "/OrgUser/StudentManage/GetTeacherListBySubject",
	        data: {
	            classType: tempCurrentSelectClassType,
	            subjectId: tempCurrentSelectSubject,
	            bigGrade: tempCurrentSelectBigGrade
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                var tmpTeacherOrClassLst = data.Data;
	                if (tmpTeacherOrClassLst != null || tmpTeacherOrClassLst != undefined) {
	                    var tempOptionStr = "";
	                    if (tempCurrentSelectClassType == 1) {
	                        tempOptionStr = "<option value=\"-1\">选择老师</option>";
	                    } else {
	                        tempOptionStr = "<option value=\"-1\">选择班级</option>";
	                    }
	                    for (var i = 0; i < tmpTeacherOrClassLst.length; i++) {
	                        tempOptionStr += "<option value=\"" + tmpTeacherOrClassLst[i].TeacherID + "\">" + tmpTeacherOrClassLst[i].TeacherName + "</option>";
	                    }
	                    $("#selectTeacherOrClass").html(tempOptionStr);
	                    //添加事件
	                    $("#selectTeacherOrClass").change(function () {
	                        var tempSelected = $("#selectTeacherOrClass option:selected");
	                        tempTeacherOrClassId = parseInt(tempSelected.val());
	                        tempTeacherOrClassName = tempSelected.html();
	                        if (tempTeacherOrClassId == -1) {
	                            $("spErrorAddTip").show();
	                        } else {
	                            $("spErrorAddTip").hide();
	                        }
	                    });
	                }
	            }
	        }
	    });
	}
	
	//分配班级或老师
	function AllotTeacherOrClass() {
	
	    $.ajax({
	        type: "POST",
	        url: "/OrgUser/StudentManage/EditStudentClassInfo",
	        data: {
	            studentClassInfoList: tempRequestLessonList
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                if (data.Data >= 0) {
	                    if (tempRequestLessonList != null && tempRequestLessonList.length > 0) {
	                        currentSelectStuObj.html("分配");
	                    } else {
	                        currentSelectStuObj.html("管理");
	                    }
	                    tempLessonInfoList = new Array();     //从服务端获取的学生报课信息
	                    tempRequestLessonList = new Array();      //修改后的学生报课信息
	                    tempAddLessonIndex = -1;         //新增的报课信息的临时ID，一直以负数的形式存在
	                    tempTeacherOrClassId = -1;      //选择的教师或班级ID
	                    tempTeacherOrClassName = "";      //选择的教师或班级名称
	                    tempCurentLessonId = 0;              //修改或添加的课程唯一ID
	                    tempCurrentSelectSubject = "-1";     //添加时选择的科目ID
	                    tempCurrentSelectBigGrade = "-1";    //添加时选择的大年级
	                    tempCurrentSelectSubjectDesc = "";     //添加时选择的科目ID
	                    tempCurrentSelectBigGradeDesc = "";    //添加时选择的大年级
	                    tempCurrentSelectClassType = 1;    //添加时选择的班级类型
	                    $("#divStudentLessonList").addClass("hidden");
	                } else {
	                    if (data.Data == -2) {
	                        PopuClient.PopTipShow("选择的班级下，没有指定科目指定大年级的老师信息！");
	                    } else {
	                        PopuClient.PopTipShow("管理或分配老师失败！");
	                    }
	                }
	            } else {
	                PopuClient.PopTipShow(data.Result);
	            }
	        }
	    });
	}
	
	//筛选学生，包含搜索和表格下拉框修改
	function SearchStudent() {
	    currentSearchWord = $("#txtSearchStudent").val();
	    GetStudentList();
	}
	
	//通过复选框，勾选去取消勾选用户
	function SeletedUserInfo() {
	    var tempUserId = $(this).attr("userId");
	    var tempUserName = $(this).attr("userName");
	    var tempUserAccount = $(this).attr("userAccount");
	    var tempUserInfo = { "UserId": tempUserId, "UserName": tempUserName, "UserAccount": tempUserAccount };
	    if ($(this).is(':checked')) {
	        tempUserList.push(tempUserInfo);
	    } else {
	        var tempIndex = -1;
	        $.each(tempUserList, function (index, value) {
	            if (value.UserId == tempUserId) {
	                tempIndex = index;
	            }
	        });
	        if (tempIndex >= 0) {
	            tempUserList.splice(tempIndex, 1);
	        }
	    }
	}
	
	//显示批量续费窗口
	function ShowRenewArea(event) {
	    if (event == 0) {
	        $("#h5AccoutRenew").html("账号续费        <img id=\"imgAccountRenew\" src=\"@BaseConfig.ImgUrl/bundle/img/close.png\" class=\"popclose cursor\">");
	    } else {
	        $("#h5AccoutRenew").html("账号激活        <img id=\"imgAccountRenew\" src=\"@BaseConfig.ImgUrl/bundle/img/close.png\" class=\"popclose cursor\">");
	    }
	    if (tempUserList != null && tempUserList.length > 0) {
	        //续费类型
	        var renewTypeFlags = -1;
	        $("#imgAccountRenew").click(function () {
	            $("#divAccountRenew").addClass("hidden");
	        });
	        //显示学生列表及批次列表
	        var tempRenewUserTpl = __webpack_require__(99);
	        $("#ulRenewUserList").html(tempRenewUserTpl(tempUserList));
	        $("#ulRenewUserList >li>i[name='spRenewDeleteUser']").click(function () {
	            var tempIndex = -1;
	            var tempUserId = $(this).attr("userId");
	            $.each(tempUserList, function (index, value) {
	                if (value.UserId == tempUserId) {
	                    tempIndex = index;
	                }
	            });
	            if (tempIndex >= 0) {
	                tempUserList.splice(tempIndex, 1);
	            }
	            if (tempUserList.length == 0) {
	                $("#divAccountRenew").addClass("hidden");
	            }
	        });
	        //显示批次列表
	        $.ajax({
	            type: "POST",
	            url: "/Org/CommonManage/GetBatchList",
	            data: {},
	            dataType: "json",
	            error: function (data) {
	                //debugger;
	            },
	            success: function (data) {
	                if (data.OK) {
	                    var tempBList = data.Data;
	                    if (tempBList != null || tempBList != undefined || tempBList.length > 0) {
	                        var tpStudentBList = new Array();
	                        for (var i = 0; i < tempBList.length; i++) {
	                            var tpBInfo = tempBList[i];
	                            if (tpBInfo.AccountType == 3) {
	                                tpStudentBList.push(tpBInfo);
	                            }
	                        }
	                        var tempBatchTpl = __webpack_require__(73);
	                        $("#ulRenewBatchList").html(tempBatchTpl(tpStudentBList));
	                        renewTypeFlags = event;
	                        //添加选中事件
	                        tempBatchIdList.splice(0, tempBatchIdList.length);
	                        $("#ulRenewBatchList input[type='checkbox']").click(function () {
	                            var temBID = $(this).attr("batchId");
	                            if ($(this).is(':checked')) {
	                                tempBatchIdList.push(temBID);
	                            } else {
	                                if (tempBatchIdList.indexOf(temBID) > 0) {
	                                    tempBatchIdList.remove(temBID);
	                                }
	                            }
	                        });
	                    }
	                } else {
	
	                }
	            }
	        });
	        $("#btnAccountRenew").click(renewTypeFlags, MoreActiveOrRenew);
	        $("#divRenewTip").hide();
	        $("#divAccountRenew").removeClass("hidden");
	    } else {
	        PopuClient.PopTipShow("请选择续费用户！");
	    }
	}
	
	//批量激活或批量续费
	//参数：opFlags，1为激活，0为续费
	function MoreActiveOrRenew(opFlags) {
	    if (tempUserList == null || tempUserList.length <= 0) {
	        PopuClient.PopTipShow("请选择续费用户！");
	        return;
	    }
	    if (tempBatchIdList == null || tempBatchIdList.length <= 0) {
	        PopuClient.PopTipShow("请选择续费批次！");
	        return;
	    }
	    var tempRenewUserIds = "";
	    var tempRenewBatchIds = "";
	    for (var i = 0; i < tempUserList.length; i++) {
	        tempRenewUserIds += tempUserList[i].UserId + ",";
	    }
	    for (var i = 0; i < tempBatchIdList.length; i++) {
	        tempRenewBatchIds += tempBatchIdList[i] + ",";
	    }
	    //请求账号详情
	    $.ajax({
	        type: "POST",
	        url: "/Org/StudentManage/RenewOrActiveStudents",
	        data: {
	            userIds: tempRenewUserIds,
	            batchIDs: tempRenewBatchIds,
	            renewType: renewTypeFlags
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                $("#divAccountRenew").addClass("hidden");
	                if (data.Data) {
	                    PopuClient.PopTipShow("续费成功！");
	                } else {
	                    PopuClient.PopTipShow("续费失败！");
	                }
	            } else {
	                if (data.Code == "11-014") {
	                    $("#divRenewTip >div").html("您创建的学生账号已达上限，请联系我们购买！");
	                    $("#divRenewTip").show();
	                }
	            }
	        }
	    });
	}
	
	//显示添加学生弹出框
	function ShowAddStudentArea() {
	    $("#imgAddStudentClose").click(function () {
	        $("#divAddStudent").addClass("hidden");
	    });
	    $("#btnAddStudentSubmit").click(AddStudentSubmit);
	    $.ajax({
	        type: "POST",
	        url: "/Org/CommonManage/GetBatchList",
	        data: {},
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                if (data.Data != null && data.Data != undefined && data.Data.length > 0) {
	                    var batchList = data.Data;
	                    var tempStudentBatchList = new Array();
	                    for (var i = 0; i < batchList.length; i++) {
	                        if (batchList[i].AccountType == 3) {
	                            tempStudentBatchList.push(batchList[i]);
	                        }
	                    }
	                    var batchListTpl = __webpack_require__(73);
	                    $("#ulAddStuBatchList").html(batchListTpl(tempStudentBatchList));
	                    //添加选中事件
	                    $("#ulAddStuBatchList input[type='checkbox']").click(function () {
	                        var temBID = $(this).attr("batchId");
	                        if ($(this).is(':checked')) {
	                            tempBatchIdList.push(temBID);
	                        } else {
	                            if (tempBatchIdList.indexOf(temBID) > 0) {
	                                tempBatchIdList.remove(temBID);
	                            }
	                        }
	                    });
	                    //激活与暂不激活状态
	                    $("#divActiveAccount input[name='isActive']").click(function () {
	                        tempActiveStatus = parseInt($(this).val());
	                    });
	                    $("#divAddStudent").removeClass("hidden");
	                }
	            } else {
	                //var html = '<tr class="font12"><td colspan=4>' + data.Result + '</td></tr>';
	                //$("#idTableClass tbody").html(html);
	            }
	        }
	    });
	}
	
	//添加学生
	function AddStudentSubmit() {
	    var tempUserName = $("#txtStudentName").val();
	    if (tempUserName == null || tempUserName == undefined || tempUserName == "") {
	        $("#divErrorStuNameTip").html("学生姓名不能为空!");
	        $("#divErrorStuNameTip").show();
	        return;
	    } else if (tempUserName.length > 8) {
	        $("#divErrorStuNameTip").html("学生姓名不能超过8位!");
	        $("#divErrorStuNameTip").show();
	        return;
	    } else {
	        $("#divErrorStuNameTip").hide();
	    }
	    var tempStuPhone = $("#txtStudentPhone").val();
	    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	    if (!myreg.test(tempAddUserPhone)) {
	        $("#divErrorStuPhoneTip").html("请输入有效的手机号码8位！");
	        $("#divErrorStuPhoneTip").show();
	        return;
	    }
	
	    var tempEmailAddr = $("txtStudentEmail").val();
	    //验证邮箱
	    if (tempEmailAddr != "" && tempEmailAddr != null && tempEmailAddr != undefined) {
	        if (/^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/.test(tempEmailAddr)) {
	            $("#divErrorStuEmailTip").hide();
	        } else {
	            $("#divErrorStuEmailTip").html("邮箱格式不正确！");
	            $("#divErrorStuEmailTip").show();
	            return;
	        }
	    } else {
	        $("#divErrorStuEmailTip").html("邮箱不能为空！");
	        $("#divErrorStuEmailTip").show();
	        return;
	    }
	    var tempBatchIds = "";
	    if (tempActiveStatus == 1) {
	        if (tempBatchIdList != null && tempBatchIdList.length > 0) {
	            for (var i = 0; i < tempBatchIdList.length; i++) {
	                tempBatchIds += tempBatchIdList[i] + ",";
	            }
	        } else {
	            PopuClient.PopTipShow("立即激活时批次不能为空！");
	            return;
	        }
	    }
	    $.ajax({
	        type: "POST",
	        url: "/OrgUser/StudentManage/AddStudent",
	        data: {
	            userName: tempUserName,
	            phoneNum: tempStuPhone,
	            emailAddr: tempEmailAddr,
	            activeStatus: tempActiveStatus,
	            batchIds: tempBatchIds
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                $("#divAddStudent").addClass("hidden");
	                if (data.Data != null && data.Data != undefined && data.Data != "") {
	                    $("#divCreateResultDesc").removeClass("success-bg").addClass("success-bg");
	                    $("#divCreateResultDesc").html("添加成功");
	                    $("#divCreateSuccessTip").html("恭喜您！成功创建并激活学生账号");
	                    $("#divStuAccount").html("账号：" + data.Data);
	                    $("#divCreateSuccessTip").show();
	                    $("#divStuAccount").show();
	                } else {
	                    $("#divCreateResultDesc").removeClass("success-bg").addClass("success-bg");
	                    $("#divCreateResultDesc").html("添加失败，请稍后再试！");
	                    $("#divCreateSuccessTip").hide();
	                    $("#divStuAccount").hide();
	                }
	            } else {
	                if (data.Code == "11-014") {
	                    $("#divNoAccountTip").show();
	                } else {
	                    $("#divNoAccountTip").hide();
	                    $("#divCreateResultDesc").removeClass("success-bg").addClass("success-bg");
	                    $("#divCreateResultDesc").html("添加失败，请稍后再试！");
	                    $("#divCreateSuccessTip").hide();
	                    $("#divStuAccount").hide();
	                }
	            }
	            $("#divCreateAccountSuccess").removeClass("hidden");
	            $("#btnCreateResultSubmit").click(function () {
	                $("#divCreateAccountSuccess").addClass("hidden");
	                currentPageIndex = 1;
	                currentPageSize = 10;
	                GetStudentList();
	            });
	        }
	    });
	}
	
	//显示学生账号详情弹出框
	function ShowAccountDetailsArea() {
	    $("#imgStuAccDetailsClose").click(function () {
	        $("#divStuAccountDetails").addClass("hidden");
	    });
	    $("#btnStuAccDetailsSubmit").click(function () {
	        $("#divStuAccountDetails").addClass("hidden");
	    });
	    //请求账号详情
	    $.ajax({
	        type: "POST",
	        url: "/Org/CommonManage/GetBatchList",
	        data: {},
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                var tempBList = data.Data;
	                if (tempBList != null || tempBList != undefined || tempBList.length > 0) {
	                    var tpStudentBList = new Array();
	                    for (var i = 0; i < tempBList.length; i++) {
	                        var tpBInfo = tempBList[i];
	                        if (tpBInfo.AccountType == 3) {
	                            tpStudentBList.push(tpBInfo);
	                        }
	                    }
	                    var tempBatchTpl = __webpack_require__(74);
	                    $("#tbAccountDeatails >tbody").html(tempBatchTpl(tpStudentBList));
	                }
	            } else {
	
	            }
	        }
	    });
	    $("#divStuAccountDetails").removeClass("hidden");
	}
	
	//显示学生详情页面
	function ShowStudentDetailPage() {
	    var tempStuId = $(this).attr("studentId");
	    window.location.href = "/OrgUser/StudentManage/StudentDetailsInfo?studentId=" + tempStuId;
	}
	
	//筛选学生类型事件
	function FilterStudentType() {
	    if ($("#selectStudentFilter") != null && $("#selectStudentFilter") != undefined) {
	        $("#selectStudentFilter").change(function () {
	            var tempSelected = $("#selectStudentFilter option:selected");
	            currentStuType = parseInt(tempSelected.val());
	            GetStudentList();
	        });
	    }
	}
	
	$(function () {
	    //初始化学生列表
	    GetStudentList();
	    //根据学生类型筛选
	    FilterStudentType();
	    //搜索绑定事件
	    $("#spSearchWord").click(SearchStudent);
	    $("#txtSearchStudent").keypress(function (event) {
	        if (event.keyCode == 13) {
	            SearchStudent();
	        }
	    });
	    //绑定按钮事件
	    if ($("#btnAddStudent") != null) {
	        $("#btnAddStudent").click(ShowAddStudentArea);
	    }
	    if ($("#btnMoreStudentRenew") != null) {
	        $("#btnMoreStudentRenew").click(0, ShowRenewArea);
	    }
	    if ($("#btnMoreStudentActive") != null) {
	        $("#btnMoreStudentActive").click(1, ShowRenewArea);
	    }
	});

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgUser/allstudentlist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,SchoolList=$data.SchoolList,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,StudentInfoList=$data.StudentInfoList,$out='';$out+=' <thead> <tr> <th>姓名</th> <th>账号</th> <th> <select class="select" id="selectClassType"> <option value="-1">类型</option> <option value="1">1对1</option> <option value="0">班课</option> </select> </th> <th>学管</th> <th> <select class="select" id="selectSchoolId"> <option value="-1">校区</option> ';
	$each(SchoolList,function($value,$index){
	$out+=' <option value="';
	$out+=$escape($value.OrgID);
	$out+='">';
	$out+=$escape($value.OrgName);
	$out+='</option> ';
	});
	$out+=' </select> </th> <th>操作</th> </tr> </thead> <tbody> ';
	$each(StudentInfoList,function($value,$index){
	$out+=' <tr> <td>';
	$out+=$escape($value.StudentName);
	$out+='</td> <td>';
	$out+=$escape($value.StudentAccount);
	$out+='</td> <td>';
	$out+=$escape($value.ClassTypeDesc);
	$out+='</td> <td>';
	$out+=$escape($value.ManagerName);
	$out+='</td> <td>';
	$out+=$escape($value.SchoolName);
	$out+='</td> <td> <span class="see-btn" name="btnViewStuDetails" studentId="';
	$out+=$escape($value.StudentID);
	$out+='">查看</span> </td> </tr> ';
	});
	$out+=' </tbody> ';
	return new String($out);
	});

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgUser/schoolstulistlist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,StudentList=$data.StudentList,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' <thead> <tr> <th>姓名</th> <th>账号</th> <th> <select class="select" id="selectClassType"> <option value="-1">类型</option> <option value="1">1对1</option> <option value="0">班课</option> </select> </th> <th>学管</th> <th>操作</th> </tr> </thead> <tbody> ';
	$each(StudentList,function($value,$index){
	$out+=' <tr> <td>';
	$out+=$escape($value.StudentName);
	$out+='</td> <td>';
	$out+=$escape($value.StudentAccount);
	$out+='</td> <td>';
	$out+=$escape($value.ClassTypeDesc);
	$out+='</td> <td>';
	$out+=$escape($value.ManagerName);
	$out+='</td> <td> <span class="see-btn" name="btnViewStuDetails" studentId="';
	$out+=$escape($value.StudentID);
	$out+='">查看</span> </td> </tr> ';
	});
	$out+=' </tbody> ';
	return new String($out);
	});

/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgUser/managerstulist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,StudentList=$data.StudentList,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' <thead> <tr> <th>姓名</th> <th>账号</th> <th> <select class="select" id="selectActiveStatus"> <option value="-1">激活状态</option> <option value="1">已激活</option> <option value="0">未激活</option> </select> </th> <th> <select class="select" id="selectExpireDays"> <option value="-1">到期时间</option> <option value="15">剩15天到期</option> <option value="30">剩30天到期</option> <option value="0">已到期</option> </select> </th> <th>创建时间</th> <th>操作</th> </tr> </thead> <tbody> ';
	$each(StudentList,function($value,$index){
	$out+=' <tr> <td>';
	$out+=$escape($value.StudentName);
	$out+='</td> <td>';
	$out+=$escape($value.StudentAccount);
	$out+='</td> <td>';
	$out+=$escape($value.ActiveStatusDesc);
	$out+='</td> <td>';
	$out+=$escape($value.ExpireTime);
	$out+='</td> <td>';
	$out+=$escape($value.CreateTime);
	$out+='</td> <td> ';
	if($value.ManagerId > 0){
	$out+=' <span class="see-btn mr5 w68" name="spSetStuManager" studentId="';
	$out+=$escape($value.StudentID);
	$out+='" managerId="';
	$out+=$escape($value.ManagerId);
	$out+='">修改学管</span> ';
	}else{
	$out+=' <span class="see-btn mr5 w68" name="spSetStuManager" studentId="';
	$out+=$escape($value.StudentID);
	$out+='" managerId="0">分配学管</span> ';
	}
	$out+=' <span class="see-btn" name="btnViewStuDetails" studentId="';
	$out+=$escape($value.StudentID);
	$out+='">查看</span> </td> </tr> ';
	});
	$out+=' </tbody> ';
	return new String($out);
	});

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgUser/ownstudentlist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,StudentList=$data.StudentList,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' <thead> <tr> <th> <input type="checkbox" name="all" class="middle ml20" />全选 </th> <th>姓名</th> <th>账号</th> <th> <select class="select" id="selectClassType"> <option value="-1">类型</option> <option value="1">1对1</option> <option value="0">班课</option> </select> </th> <th> <select class="select" id="selectBigGrade"> <option value="0">学段</option> <option value="x">小学</option> <option value="c">初中</option> <option value="g">高中</option> </select> </th> <th>学科</th> <th>老师/班级</th> <th> <select class="select" id="selectActiveStatus"> <option value="-1">激活状态</option> <option value="1">已激活</option> <option value="0">未激活</option> </select> </th> <th> <select class="select" id="selectExpireDays"> <option value="-1">到期时间</option> <option value="15">剩15天到期</option> <option value="30">剩30天到期</option> <option value="0">已到期</option> </select> </th> <th>操作</th> </tr> </thead> <tbody> ';
	$each(StudentList,function($value,$index){
	$out+=' <tr> <td> <input type="checkbox" name="ckCheckUser" class="middle ml20" userId="';
	$out+=$escape($value.StudentID);
	$out+='" userName="';
	$out+=$escape($value.StudentName);
	$out+='" userAccount="';
	$out+=$escape($value.StudentAccount);
	$out+='" /> </td> <td>';
	$out+=$escape($value.StudentName);
	$out+='</td> <td>';
	$out+=$escape($value.StudentAccount);
	$out+='</td> <td>';
	$out+=$escape($value.ClassTypeDesc);
	$out+='</td> <td>';
	$out+=$escape($value.BigGradeDesc);
	$out+='</td> <td>';
	$out+=$escape($value.SubjectDesc);
	$out+='</td> <td>';
	$out+=$escape($value.TeacherDesc);
	$out+='</td> <td>';
	$out+=$escape($value.ActiveStatusDesc);
	$out+='</td> <td>';
	$out+=$escape($value.ExpireTime);
	$out+='</td> <td> ';
	if($value.TeacherDesc != ""){
	$out+=' <span class="see-btn mr5 w68" name="spSetStuTeacher" studentId="';
	$out+=$escape($value.StudentID);
	$out+='">管理</span> ';
	}else{
	$out+=' <span class="see-btn mr5 w68" name="spSetStuTeacher" studentId="';
	$out+=$escape($value.StudentID);
	$out+='">分配</span> ';
	}
	$out+=' <span class="see-btn" name="btnViewStuDetails" studentId="';
	$out+=$escape($value.StudentID);
	$out+='">查看</span> </td> </tr> ';
	});
	$out+=' </tbody> ';
	return new String($out);
	});

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgUser/studymanangerlist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,StudyManagerListModel=$data.StudyManagerListModel,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(StudyManagerListModel,function($value,$index){
	$out+=' <li> <label> <input class="mr5 middle" type="radio" name="department-item" managerId="';
	$out+=$escape($value.SManagerID);
	$out+='"> <span>';
	$out+=$escape($value.SManagerName);
	$out+='</span> <span> (<i class="red">';
	$out+=$escape($value.StudentCount);
	$out+='</i>名学生) </span> </label> </li> ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgUser/stulessonlist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,StuLessonList=$data.StuLessonList,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(StuLessonList,function($value,$index){
	$out+=' <tr lessonClassId="';
	$out+=$escape($value.UserClassStudyId);
	$out+='"> <td>';
	$out+=$escape($value.ClassTypeDesc);
	$out+='</td> <td>';
	$out+=$escape($value.BigGradeDesc);
	$out+='</td> <td>';
	$out+=$escape($value.SubjectDesc);
	$out+='</td> <td>';
	$out+=$escape($value.ClassName);
	$out+='</td> <td>';
	$out+=$escape($value.SurplusClassHour);
	$out+='</td> <td> <i class="dustbin" name="btnDeleteLesson" lessonId="';
	$out+=$escape($value.UserClassStudyId);
	$out+='" courseId="';
	$out+=$escape($value.CourseID);
	$out+='" classId="';
	$out+=$escape($value.ClassId);
	$out+='" classType="';
	$out+=$escape($value.ClassType);
	$out+='" bigGrade="';
	$out+=$escape($value.BigGrade);
	$out+='" subjectId="';
	$out+=$escape($value.SubjectId);
	$out+='" smallGrade="';
	$out+=$escape($value.GradeId);
	$out+='"></i> </td> </tr> ';
	});
	return new String($out);
	});

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgUser/updatelessondata',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,ClassTypeDesc=$data.ClassTypeDesc,BigGradeDesc=$data.BigGradeDesc,SubjectDesc=$data.SubjectDesc,TitleName=$data.TitleName,$each=$utils.$each,TeacherOrClassList=$data.TeacherOrClassList,$value=$data.$value,$index=$data.$index,SurplusClassHour=$data.SurplusClassHour,UserClassStudyId=$data.UserClassStudyId,$out='';$out+=' <div class="mb15"> <span> 类别：<i class="normal"></i>';
	$out+=$escape(ClassTypeDesc);
	$out+=' </span> </div> <div class="mb15 overflow"> <span class="per45 left"> 学段：<i class="normal">';
	$out+=$escape(BigGradeDesc);
	$out+='</i> </span> <span class="per45 right"> 学科：<i class="normal">';
	$out+=$escape(SubjectDesc);
	$out+='</i> </span> </div> <div class="mb15 overflow"> <div class="teacher per45 left"> <span>';
	$out+=$escape(TitleName);
	$out+='：</span> <select class="selet-teacher" id="selectTeacherOrClass"> ';
	$each(TeacherOrClassList,function($value,$index){
	$out+=' <option value="';
	$out+=$escape($value.TeacherID);
	$out+='">';
	$out+=$escape($value.TeacherName);
	$out+='</option> ';
	});
	$out+=' </select> </div> <div class="sign-up per45 right"> <span>签约：</span> <input type="text" class="input-time" id="txtUpdateClassHour" text="';
	$out+=$escape(SurplusClassHour);
	$out+='"/>课时 </div> </div> <button class="ok-btn right" id="btnUpdateLessonInfo" lessonId="';
	$out+=$escape(UserClassStudyId);
	$out+='">确定</button>';
	return new String($out);
	});

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgUser/addlessondata',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,SubjectList=$data.SubjectList,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,TitleName=$data.TitleName,SurplusClassHour=$data.SurplusClassHour,UserClassStudyId=$data.UserClassStudyId,$out='';$out+=' <div class="mb15" id="divClassTypeChoose"> <span>类别：</span> <label class="mr10 cursor"> <input type="radio" class="mr5" name="type-choose" value="1"/> 一对一 </label> <label class="cursor"> <input type="radio" class="mr5" name="type-choose" value="0"/> 班课 </label> </div> <div class="teacher per45 left"> <span>学段：</span> <select class="selet-text" id="selectAddLessonBigGrade"> <option value="-1" selected="selected">选择学段</option> <option value="x">小学</option> <option value="c">初中</option> <option value="g">高中</option> </select> </div> <div class="sign-up per45 right"> <span>学科：</span> <select class="selet-text" id="selectAddLessonSubject"> <option value="-1" selected="selected">选择学科</option> ';
	$each(SubjectList,function($value,$index){
	$out+=' <option value="';
	$out+=$escape($value.SubjectId);
	$out+='">';
	$out+=$escape($value.SubjectDesc);
	$out+='</option> ';
	});
	$out+=' </select> </div> <div class="mb15 overflow"> <div class="teacher per45 left"> <span id="divTitle">';
	$out+=$escape(TitleName);
	$out+='：</span> <select class="selet-teacher" id="selectTeacherOrClass"> <option value="-1">选择';
	$out+=$escape(TitleName);
	$out+='</option> </select> </div> <div class="sign-up per45 right"> <span>签约：</span> <input type="text" class="input-time" id="txtAddClassHour" text="';
	$out+=$escape(SurplusClassHour);
	$out+='"/>课时 </div> </div> <button class="ok-btn right" id="btnAddLessonInfo" lessonId="';
	$out+=$escape(UserClassStudyId);
	$out+='">确定</button>';
	return new String($out);
	});

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgUser/renewstudentlist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,UserListModel=$data.UserListModel,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(UserListModel,function($value,$index){
	$out+=' <li> 学生：<span>';
	$out+=$escape($value.UserName);
	$out+=' (';
	$out+=$escape($value.UserAccount);
	$out+=')</span> <i class="dele-icon" name="spRenewDeleteUser" userId="';
	$out+=$escape($value.UserId);
	$out+='"></i> </li> ';
	});
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2RlcC9QYWdpbmF0b3IuanM/YmU4MSoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL3BvcHVwL3BvcHVwdGlwLmpzP2YwMzIqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZy9iYXRjaHNsaXN0LnRwbD9iMDY0Iiwid2VicGFjazovLy8uL09yZy90cGwvT3JnL2FjY291bnRkZXRhaWxzbGlzdC50cGw/M2NhZiIsIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnVXNlci9zdHVkZW50bWFuYWdlLmpzIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnVXNlci9hbGxzdHVkZW50bGlzdC50cGwiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9PcmdVc2VyL3NjaG9vbHN0dWxpc3RsaXN0LnRwbCIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZ1VzZXIvbWFuYWdlcnN0dWxpc3QudHBsIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnVXNlci9vd25zdHVkZW50bGlzdC50cGwiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9PcmdVc2VyL3N0dWR5bWFuYW5nZXJsaXN0LnRwbCIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZ1VzZXIvc3R1bGVzc29ubGlzdC50cGwiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9PcmdVc2VyL3VwZGF0ZWxlc3NvbmRhdGEudHBsIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnVXNlci9hZGRsZXNzb25kYXRhLnRwbCIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZ1VzZXIvcmVuZXdzdHVkZW50bGlzdC50cGwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7O0FDMzhCRDtBQUNBO0FBQ0E7QUFDQSxjQUFhLHFNQUFxTTtBQUNsTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7Ozs7QUM3QkQ7QUFDQTtBQUNBO0FBQ0EsY0FBYSxpS0FBaUs7QUFDOUs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7Ozs7QUNuQkQ7QUFDQTtBQUNBO0FBQ0EsY0FBYSxpS0FBaUs7QUFDOUs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7Ozs7QUNqQ0Q7QUFDQTtBQUNBO0FBQ0EsY0FBYSxpS0FBaUs7QUFDOUs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7OztBQzNDRDtBQUNBO0FBQ0E7QUFDQSxjQUFhLHFMQUFxTDtBQUNsTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7Ozs7QUNmRDtBQUNBO0FBQ0E7QUFDQSxjQUFhLHFLQUFxSztBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLEVBQUMsRTs7Ozs7OztBQ2xDRDtBQUNBO0FBQ0E7QUFDQSxjQUFhLHlYQUF5WDtBQUN0WTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7OztBQ3pCRDtBQUNBO0FBQ0E7QUFDQSxjQUFhLDJRQUEyUTtBQUN4UjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7Ozs7QUNyQkQ7QUFDQTtBQUNBO0FBQ0EsY0FBYSxxS0FBcUs7QUFDbEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLEVBQUMsRSIsImZpbGUiOiJzdHVkZW50bWFuYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypUTU9ESlM6e30qL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdGZ1bmN0aW9uIGEoYSwgYikge1xyXG5cdFx0cmV0dXJuICgvc3RyaW5nfGZ1bmN0aW9uLy50ZXN0KHR5cGVvZiBiKSA/IGggOiBnKShhLCBiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYihhLCBjKSB7XHJcblx0XHRyZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSAmJiAoYyA9IHR5cGVvZiBhLCBcIm51bWJlclwiID09PSBjID8gYSArPSBcIlwiIDogYSA9IFwiZnVuY3Rpb25cIiA9PT0gYyA/IGIoYS5jYWxsKGEpKSA6IFwiXCIpLCBhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjKGEpIHtcclxuXHRcdHJldHVybiBsW2FdXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkKGEpIHtcclxuXHRcdHJldHVybiBiKGEpLnJlcGxhY2UoLyYoPyFbXFx3I10rOyl8Wzw+XCInXS9nLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZShhLCBiKSB7XHJcblx0XHRpZiAobShhKSlmb3IgKHZhciBjID0gMCwgZCA9IGEubGVuZ3RoOyBkID4gYzsgYysrKWIuY2FsbChhLCBhW2NdLCBjLCBhKTsgZWxzZSBmb3IgKGMgaW4gYSliLmNhbGwoYSwgYVtjXSwgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoYSwgYikge1xyXG5cdFx0dmFyIGMgPSAvKFxcLylbXlxcL10rXFwxXFwuXFwuXFwxLywgZCA9IChcIi4vXCIgKyBhKS5yZXBsYWNlKC9bXlxcL10rJC8sIFwiXCIpLCBlID0gZCArIGI7XHJcblx0XHRmb3IgKGUgPSBlLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7IGUubWF0Y2goYyk7KWUgPSBlLnJlcGxhY2UoYywgXCIvXCIpO1xyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoYiwgYykge1xyXG5cdFx0dmFyIGQgPSBhLmdldChiKSB8fCBpKHtmaWxlbmFtZTogYiwgbmFtZTogXCJSZW5kZXIgRXJyb3JcIiwgbWVzc2FnZTogXCJUZW1wbGF0ZSBub3QgZm91bmRcIn0pO1xyXG5cdFx0cmV0dXJuIGMgPyBkKGMpIDogZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChhLCBiKSB7XHJcblx0XHRpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYikge1xyXG5cdFx0XHR2YXIgYyA9IGI7XHJcblx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBrKGMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBkID0galthXSA9IGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBiKGMsIGEpICsgXCJcIlxyXG5cdFx0XHR9IGNhdGNoIChkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGkoZCkoKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGQucHJvdG90eXBlID0gYi5wcm90b3R5cGUgPSBuLCBkLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYiArIFwiXCJcclxuXHRcdH0sIGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGkoYSkge1xyXG5cdFx0dmFyIGIgPSBcIntUZW1wbGF0ZSBFcnJvcn1cIiwgYyA9IGEuc3RhY2sgfHwgXCJcIjtcclxuXHRcdGlmIChjKWMgPSBjLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCJcXG5cIik7IGVsc2UgZm9yICh2YXIgZCBpbiBhKWMgKz0gXCI8XCIgKyBkICsgXCI+XFxuXCIgKyBhW2RdICsgXCJcXG5cXG5cIjtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IoYiArIFwiXFxuXFxuXCIgKyBjKSwgYlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGogPSBhLmNhY2hlID0ge30sIGsgPSB0aGlzLlN0cmluZywgbCA9IHtcclxuXHRcdFwiPFwiOiBcIiYjNjA7XCIsXHJcblx0XHRcIj5cIjogXCImIzYyO1wiLFxyXG5cdFx0J1wiJzogXCImIzM0O1wiLFxyXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcclxuXHRcdFwiJlwiOiBcIiYjMzg7XCJcclxuXHR9LCBtID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xyXG5cdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB7fS50b1N0cmluZy5jYWxsKGEpXHJcblx0XHR9LCBuID0gYS51dGlscyA9IHtcclxuXHRcdCRoZWxwZXJzOiB7fSwgJGluY2x1ZGU6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcblx0XHRcdHJldHVybiBhID0gZihjLCBhKSwgZyhhLCBiKVxyXG5cdFx0fSwgJHN0cmluZzogYiwgJGVzY2FwZTogZCwgJGVhY2g6IGVcclxuXHR9LCBvID0gYS5oZWxwZXJzID0gbi4kaGVscGVycztcclxuXHRhLmdldCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRyZXR1cm4galthLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKV1cclxuXHR9LCBhLmhlbHBlciA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRvW2FdID0gYlxyXG5cdH0sIG1vZHVsZS5leHBvcnRzID0gYVxyXG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdG1vZGpzLWxvYWRlci9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDggMTMgMTQgMTUgMTYgMTcgMTggMTkgMjEgMjMgMjUgMjYgMjcgMzEgMzIgMzMgMzcgMzhcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFBhZ2luYXRvcjogZnVuY3Rpb24gKHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgdG90YWxDb3VudCwgY2FsbGJhY2spIHtcclxuICAgICAgICAvL3RvZG8g57uR5a6a5LqL5Lu2XHJcbiAgICAgICBcclxuICAgICAgICB2YXIgdG90YWxQYWdlcztcclxuICAgICAgICBpZiAodG90YWxDb3VudCAlIHBhZ2VTaXplID09IDApIHtcclxuICAgICAgICAgICAgdG90YWxQYWdlcyA9IHRvdGFsQ291bnQgLyBwYWdlU2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvdGFsUGFnZXMgPSBwYXJzZUludCh0b3RhbENvdW50IC8gcGFnZVNpemUpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhZ2VQcmUgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgLSAxKSArICcgY2xhc3M9XCJwcmUtcGFnZSBpbmxpbmUgbXIyMFwiPuS4iuS4gOmhtTwvYT4nO1xyXG4gICAgICAgIHZhciBwYWdlTmV4dCA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDEpICsgJyBjbGFzcz1cIm5leHQtcGFnZSBpbmxpbmVcIj7kuIvkuIDpobU8L2E+JztcclxuICAgICAgICB2YXIgaW5kZXhQYWdlID0gJzxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPVwiMVwiIGNsYXNzPVwicHJlLXBhZ2UgaW5saW5lIG1yMjBcIj7pppbpobU8L2E+PC9saT4nO1xyXG5cclxuICAgICAgICB2YXIgbGFzdFBhZ2UgPSAnIDxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJyBjbGFzcz1cInByZS1wYWdlIGlubGluZSBtcjIwXCI+IOacq+mhtTwvYT4nO1xyXG4gICAgICAgIGlmICh0b3RhbFBhZ2VzIDwgcGFnZVNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlUHJlID0gXCJcIjtcclxuICAgICAgICAgICAgcGFnZU5leHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBpbmRleFBhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDw9IDEpIHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgICAgICBwYWdlUHJlID0gXCJcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gdG90YWxQYWdlcztcclxuICAgICAgICAgICAgcGFnZU5leHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG90YWxDb3VudCA+IDApIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAnPHVsIGNsYXNzPVwicGFnZS1ib3ggaW5saW5lIG1yMjBcIj4nO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VzID4gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09IDEpIC8v56ys5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3V0cHV0LkFwcGVuZChcIiA8YSBkaXNhYmxlZD0nZGlzYWJsZWQnIGNsYXNzPSdjb2xIJz7kuIrkuIDpobU8L2E+IFwiKTsvL+S4iuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5aSE55CG6aaW6aG16L+e5o6lXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpITnkIbkuIrkuIDpobXnmoTov57mjqVcclxuICAgICAgICAgICAgICAgICAgICAvL3BhZ2VQcmUgPSAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDEpICsgJz7kuIrkuIDpobU8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAvLyBvdXRwdXQuQXBwZW5kRm9ybWF0KFwiIDxhIGRhdGEtcGFnZUluZGV4PSd7MH0nIGNsYXNzPSdwYWdlTGluayc+5LiK5LiA6aG1PC9hPiBcIiwgY3VycmVudFBhZ2UgLSAxKTsvL+S4iuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgPiA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJpbnQgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA8IDQpLy80XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gaSArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiBkYXRhLW51bT0nICsgY3VycmVudFBhZ2UgKyAnPicgKyBjdXJyZW50UGFnZSArICc8L2E+IDwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSA2KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyA3ICsgJz4uLi48L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgdG90YWxQYWdlcyArICc+JyArIHRvdGFsUGFnZXMgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKGkgKyAxKSArICc+JyArIChpICsgMSkgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfS8vNFxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRQYWdlID49IDQgJiYgY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzIC0gMykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wYWdlbnVtPXBhZ2VudW0rJyA8bGkgZGF0YS1udW09JysoY3VycmVudFBhZ2UtMykrJz48YSBocmVmPVwiI1wiIG9uY2xpY2s9XCJQYWdpbmF0b3IoJytwYWdlU2l6ZSsnLCcrKGN1cnJlbnRQYWdlLTMpKycsJyArIHRvdGFsQ291bnQgKyAnKVwiPi4uLjwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCI+MTwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDMgPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDMpICsgJz4uLi48L2E+IDwvbGk+JzsvLzIwMTYwOTEzMDkzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gMykvL+S4remXtOW9k+WJjemhtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgZGF0YS1udW09JyArIChjdXJyZW50UGFnZSkgKyAnPicgKyBjdXJyZW50UGFnZSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gNikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyAzKSArICc+Li4uPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgdG90YWxQYWdlcyArICc+JyArIHRvdGFsUGFnZXMgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIGkgLSBwYXJzZUludChjdXJyaW50KSkgKyAnPicgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgaSAtIHBhcnNlSW50KGN1cnJpbnQpKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPVwiMVwiPjE8L2E+IDwvbGk+JzsvLzIwMTYwOTEzMDkzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBkYXRhLW51bT0nICsgKHBhcnNlSW50KHRvdGFsUGFnZXMpIC0gNikgKyAnPi4uLjwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxQYWdlcyAtIDYgKyBpID09IGN1cnJlbnRQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArICh0b3RhbFBhZ2VzIC0gNiArIGkpICsgJz4nICsgKHRvdGFsUGFnZXMgLSA2ICsgaSkgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSBpICsgMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAoaSArIDEpICsgJz4nICsgKGkgKyAxKSArICc8L2E+IDwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gdG90YWxQYWdlcykgLy/mnIDlkI7kuIDpobVcclxuICAgICAgICAgICAgICAgIHsvL+WkhOeQhuS4i+S4gOmhteWSjOWwvumhteeahOmTvuaOpVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3V0cHV0LkFwcGVuZChcIiA8YSBkaXNhYmxlZD0nZGlzYWJsZWQnIGNsYXNzPSdjb2xIJz7kuIvkuIDpobU8L2E+IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFBhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcykgey8v5aSE55CG5LiL5LiA6aG15ZKM5bC+6aG155qE6ZO+5o6lIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kRm9ybWF0KFwiIDxhIGRhdGEtcGFnZWluZGV4PSd7MH0nIGNsYXNzPSdwYWdlTGluayc+5LiL5LiA6aG1PC9hPiBcIiwgY3VycmVudFBhZ2UgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgIC8vIHBhZ2VQcmUgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyAxKSArICcgY2xhc3M9XCJuZXh0LXBhZ2UgaW5saW5lXCI+5LiL5LiA6aG1PC9hPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnPC91bD4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gaW5kZXhQYWdlICsgcGFnZVByZSArIHBhZ2VudW0gKyBwYWdlTmV4dCArIGxhc3RQYWdlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNwYWdpbmF0aW9uIGFcIikudW5iaW5kKFwiY2xpY2tcIik7XHJcbiAgICAgICAgJChcIiNwYWdpbmF0aW9uIGFcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJCh0aGlzKS5hdHRyKFwiZGF0YS1udW1cIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4vL2Z1bmN0aW9uIFBhZ2luYXRvcihwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHRvdGFsQ291bnQsIGNhbGxiYWNrKSB7XHJcblxyXG5cclxuLy99XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC9QYWdpbmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMTMgMTYgMTggMTkgMjEgMjYgMjcgMzEgMzMgMzhcbiAqKi8iLCIvL+mBrue9qVxyXG5mdW5jdGlvbiBNYXNrU2hvdygpIHtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNYXNrSGlkZSgpIHtcclxuICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG59XHJcbi8v5Lyg6YCS5pi+56S655qE5raI5oGvXHJcbmZ1bmN0aW9uIFBvcFRpcFNob3cob2JqKSB7XHJcbiAgICB2YXIgdGlwaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNCBoaWRkZW5cIiBpZD1cIm9rdGlwXCI+PHNwYW4gY2xhc3M9XCJwb3AtY2xvc2UgY3Vyc29yXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPjxwIGNsYXNzPVwibGluZTEwMFwiIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+JyArIG9iaiArICc8L3A+PC9kaXY+PC9kaXY+JztcclxuXHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZCh0aXBodG1sKTtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmFwcGVuZCh0aXBodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59XHJcbi8v5by55Ye656Gu6K6k5qGGXHJcbnZhciBPcGVuQ29uZnJpbVBvcCA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJwb3AtdXAgZm9udDE0XCI+PHNwYW4gY2xhc3M9XCJwb3AtY2xvc2UgY3Vyc29yXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPicgKyBvYmogKyAnPC9kaXY+PGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImhhbmRsZVwiPiA8c3BhbiBjbGFzcz1cIm9rXCIgaWQ9XCJDb25mcmltXCI+56Gu5a6aPC9zcGFuPiAmbmJzcDsmbmJzcDsmbmJzcDs8c3BhbiBjbGFzcz1cIm9rXCIgaWQ9XCJDYW5jZWxcIj7lj5bmtog8L3NwYW4+IDwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59O1xyXG4vL+W8ueWHuuehruiupOahhizmsqHmnInlj5bmtojmjInpkq5cclxudmFyIE9wZW5Db25mcmltUG9wTm9DYW5jZWwgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj4nICsgb2JqICsgJzwvZGl2PjxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJoYW5kbGVcIj4gPHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ29uZnJpbVwiPuehruWumjwvc3Bhbj4gPC9kaXY+PC9kaXY+JztcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuYXBwZW5kKGh0bWwpO1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLnBvcC11cFwiKS5zaG93KCk7XHJcbn07XHJcbi8vL+W8ueWHuuWkmumVv+aXtumXtOWQjua2iOWksVxyXG52YXIgT3BlblRpbWVIaWRlID0gZnVuY3Rpb24gKG9iaiwgdGltZSkge1xyXG4gICAgLy92YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wdXBcIj4gPGg1IGNsYXNzPVwiY2VudGVyIGZvbnQxNiBwb3B1cGhlYWRcIj7mtojmga/mj5DnpLo8aSBjbGFzcz1cInBvcGNsb3NlIGN1cnNvclwiPjwvaT48L2g1PjxkaXYgY2xhc3M9XCJwb3B1cGJveFwiPjxkaXYgY2xhc3M9XCJoYW5kbGUgZm9udDE0IGF1dG9cIj4nICsgb2JqICsgJzwvZGl2PjwvZGl2PjwvZGl2Pic7XHJcbiAgICB2YXIgaHRtbCA9ICcgIDxkaXYgY2xhc3M9XCJwb3B1cCBcIj48aDUgY2xhc3M9XCJjZW50ZXIgZm9udDE2IHBvcHVwaGVhZFwiPiDmtojmga/mj5DnpLo8aSBjbGFzcz1cInBvcGNsb3NlIGN1cnNvclwiPjwvaT48L2g1PjxkaXYgY2xhc3M9XCJwb3B1cGJveFwiPjxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtcIj48ZGl2IGNsYXNzPVwic3VjY2VzcyBhdXRvXCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tdG9wOjIwcHg7XCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImhhbmRsZSBzdWNjZXNzTGV0dGVyXCI+IDxzcGFuIGNsYXNzPVwibXQyMFwiPicrb2JqKyc8L3NwYW4+PC9kaXY+PC9kaXY+PC9kaXY+JztcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuYXBwZW5kKGh0bWwpO1xyXG4gICAgJChcIi5wb3B1cFwiKS5zaG93KCk7XHJcbiAgXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcHVwXCIpLmhpZGUoKTtcclxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0sIHRpbWUpO1xyXG5cclxufTtcclxuZnVuY3Rpb24gUG9wVGlwSGlkZSgpIHtcclxuICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbn1cclxuXHJcbmV4cG9ydHMuTWFza1Nob3cgPSBNYXNrU2hvdztcclxuZXhwb3J0cy5NYXNrSGlkZSA9IE1hc2tIaWRlO1xyXG5leHBvcnRzLlBvcFRpcFNob3cgPSBQb3BUaXBTaG93O1xyXG5leHBvcnRzLlBvcFRpcEhpZGUgPSBQb3BUaXBIaWRlO1xyXG5leHBvcnRzLk9wZW5Db25mcmltUG9wID0gT3BlbkNvbmZyaW1Qb3A7XHJcbmV4cG9ydHMuT3BlblRpbWVIaWRlID0gT3BlblRpbWVIaWRlO1xyXG4vL+WkhOeQhuW8ueWHuuahhueahOmakOiXj1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuZGVsZWdhdGUoXCIucG9wLWNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICAgICAvL2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3BjbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcC1jbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgLy9kb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcGNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC9wb3B1cC9wb3B1cHRpcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDggMTQgMjEgMjYgMzEgMzIgMzMgMzQgMzcgMzhcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmcvYmF0Y2hzbGlzdCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsQmF0Y2hMaXN0TW9kZWw9JGRhdGEuQmF0Y2hMaXN0TW9kZWwsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaChCYXRjaExpc3RNb2RlbCxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPGxpIGNsYXNzPVwiYmF0Y2hcIj4gPGlucHV0IGNsYXNzPVwibWlkZGxlIG1yNVwiIHR5cGU9XCJjaGVja2JveFwiIGJhdGNoSWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQmF0Y2hJRCk7XG4kb3V0Kz0nXCIgcm9sZUlkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlJvbGVJZCk7XG4kb3V0Kz0nXCIgYmF0Y2hUeXBlPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkFjY291bnRUeXBlKTtcbiRvdXQrPSdcIi8+IDxzcGFuPuWJqeS9mTxpIGNsYXNzPVwicmVkXCI+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkJhdGNoU3VycGx1c0NvdW50KTtcbiRvdXQrPSc8L2k+5LiqJztcbmlmKCR2YWx1ZS5BY2NvdW50VHlwZSA9PSAxKXtcbiRvdXQrPSfogIHluIgnO1xufVxuaWYoJHZhbHVlLkFjY291bnRUeXBlID09IDIpe1xuJG91dCs9J+WSqOivouW4iCc7XG59XG5pZigkdmFsdWUuQWNjb3VudFR5cGUgPT0gMyl7XG4kb3V0Kz0n5a2m55SfJztcbn1cbiRvdXQrPSfotKblj7fvvIzliankvZnml7bpl7Q8aSBjbGFzcz1cInJlZFwiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5CYXRjaFN1cnBsdXNEYXlzKTtcbiRvdXQrPSc8L2k+5aSpPC9zcGFuPiA8L2xpPiAnO1xufSk7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZy9iYXRjaHNsaXN0LnRwbFxuICoqIG1vZHVsZSBpZCA9IDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDMxIDM4XG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnL2FjY291bnRkZXRhaWxzbGlzdCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsQmF0Y2hMaXN0TW9kZWw9JGRhdGEuQmF0Y2hMaXN0TW9kZWwsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaChCYXRjaExpc3RNb2RlbCxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPHRyPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkJhdGNoSUQpO1xuJG91dCs9JzwvdGQ+ICc7XG5pZigkdmFsdWUuQWNjb3VudFR5cGUgPT0gMSl7XG4kb3V0Kz0nIDx0ZD7ogIHluIjotKblj7c8L3RkPiAnO1xufVxuJG91dCs9JyAnO1xuaWYoJHZhbHVlLkFjY291bnRUeXBlID09IDIpe1xuJG91dCs9JyA8dGQ+5ZKo6K+i5biI6LSm5Y+3PC90ZD4gJztcbn1cbiRvdXQrPScgJztcbmlmKCR2YWx1ZS5BY2NvdW50VHlwZSA9PSAzKXtcbiRvdXQrPScgPHRkPuWtpueUn+i0puWPtzwvdGQ+ICc7XG59XG4kb3V0Kz0nIDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQmF0Y2hTdXJwbHVzQ291bnQpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQmF0Y2hTdXJwbHVzRGF5cyk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5DcmVhdGVEYXRlKTtcbiRvdXQrPSc8L3RkPiA8L3RyPiAnO1xufSk7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZy9hY2NvdW50ZGV0YWlsc2xpc3QudHBsXG4gKiogbW9kdWxlIGlkID0gNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzEgMzhcbiAqKi8iLCJ2YXIgUGFnaW5hdG9yID0gcmVxdWlyZSgnUGFnaW5hdG9yLmpzJyk7ICAgICAgLy/liIbpobXlr7zoiKpcclxudmFyIFBvcHVDbGllbnQgPSByZXF1aXJlKFwicG9wdXAvcG9wdXB0aXAuanNcIik7ICAgICAvL+W8ueWHuuahhlxyXG4vL+afpeivouaIluetm+mAieWtpueUn+WIl+ihqOS4tOaXtuWPmOmHj1xyXG52YXIgY3VycmVudFBhZ2VJbmRleCA9IDE7ICAgIC8v5b2T5YmN6aG156CBXHJcbnZhciBjdXJyZW50UGFnZVNpemUgPSAxMDsgICAgLy/mr4/pobXlpJrlsJHmnaHmlbDmja5cclxudmFyIGN1cnJlbnRTdHVUeXBlID0gMTsgICAgICAvL+WtpueUn+exu+Wei++8jDDkuLrmiYDmnInlrabnlJ/vvIwx5Li65paw5re75Yqg5a2m55Sf77yMMuS4uuW3suW8gOivvuWtpueUn++8jDPkuLrlt7Lnu5Por77lrabnlJ9cclxudmFyIGN1cnJlbnRFeHBpcmVEYXlzID0gLTE7ICAgIC8v6L+H5pyf5pe26Ze077yMLTHooajnpLrmiYDmnInvvIww6KGo56S65bey6L+H5pyf77yM5YW25LuW5aSn5LqOMOeahOaVsOWtl+ihqOekuui/h+acn+eahOWkqeaVsFxyXG52YXIgY3VycmVudEFjdGl2ZVN0YXR1cyA9IC0xOyAgIC8v5r+A5rS754q25oCB77yMLTHooajnpLrmiYDmnInvvIww6KGo56S65pyq5r+A5rS777yMMeihqOekuuW3sua/gOa0u1xyXG52YXIgY3VycmVudENsYXNzVHlwZSA9IC0xOyAgIC8v5oql6K++57G75Z6L77yMLTHooajnpLrmiYDmnInvvIww6KGo56S654+t6K++77yMMeihqOekujHlr7kxXHJcbnZhciBjdXJyZW50QmlnR3JhZGUgPSBcIjBcIjsgICAgIC8v5a2m5q6177yMXCIwXCLooajnpLrmiYDmnInvvIzlhbbku5blj5blgLzkuLp4LGMsZ1xyXG52YXIgY3VycmVudFJvbGVJZCA9IC0xOyAgICAgLy/op5LoibJJRO+8jOeUqOadpeWkhOeQhuWkjeWQiOinkuiJsuaXtueahOmhtemdouWxleekuumAu+i+kVxyXG52YXIgY3VycmVudFNjaG9vbElkID0gLTE7ICAgIC8v5qCh5Yy6SUTvvIwtMeihqOekuuaJgOaciVxyXG52YXIgY3VycmVudFNlYXJjaFdvcmQgPSBcIlwiOyAgICAvL+aQnOe0ouWFs+mUruWtlyzkuLpcIlwi6KGo56S65pCc57Si5omA5pyJXHJcbnZhciBjdXJyZW50U2VsZWN0U3R1T2JqID0gbnVsbDsgICAgLy/lvZPliY3pgInkuK3nmoTkuIDooYzlrabnlJ/mlbDmja5cclxuXHJcbi8v5YiG6YWN5a2m566h5Li05pe25Y+Y6YePXHJcbnZhciBjdXJyZW50U2VsZWN0ZWRNYW5hZ2VySWQgPSAwOyAgICAgIC8v5b2T5YmN6YCJ5Lit55qE5a2m566hSURcclxudmFyIGN1cnJlbnRTdHVkZW50SWQgPSAwOyAgICAgICAgICAgLy/lvZPliY3pgInmi6nnmoTlrabnlJ9JRFxyXG5cclxuLy/mt7vliqDlrabnlJ/kuLTml7blj5jph49cclxudmFyIHRlbXBCYXRjaElkTGlzdCA9IG5ldyBBcnJheSgpOyAgICAvL+W9k+WJjemAieaLqeeahOaJueasoUlEXHJcbnZhciB0ZW1wQWN0aXZlU3RhdHVzID0gMDsgICAgICAgICAgICAvLzDooajnpLrmmoLkuI3mv4DmtLvvvIwx6KGo56S656uL5Y2z5r+A5rS7XHJcblxyXG4vL+i0puWPt+e7rei0ueS4tOaXtuaVsOaNrlxyXG52YXIgdGVtcFVzZXJMaXN0ID0gbmV3IEFycmF5KCk7ICAgIC8v55So5oi36YCJ5oup55qE57ut6LS5SUTliJfooajvvIzlhoXpg6jmoLzlvI/kuLp7XCJVc2VySWRcIjoxLFwiVXNlck5hbWVcIjpcIuW8oOS4iVwiLFwiVXNlckFjY291bnRcIjpcIjE4NjEyMzQ1XCJ9XHJcblxyXG4vL+WtpueUn+aKpeivvuS/oeaBr+S4tOaXtuaVsOaNrlxyXG52YXIgdGVtcExlc3NvbkluZm9MaXN0ID0gbmV3IEFycmF5KCk7ICAgICAvL+S7juacjeWKoeerr+iOt+WPlueahOWtpueUn+aKpeivvuS/oeaBr1xyXG52YXIgdGVtcFJlcXVlc3RMZXNzb25MaXN0ID0gbmV3IEFycmF5KCk7ICAgICAgLy/kv67mlLnlkI7nmoTlrabnlJ/miqXor77kv6Hmga/vvIzmoLzlvI/kuLp7XCJTdHVkZW50SWRcIjpcIlwiLFwiVXNlckNsYXNzSWRcIjpcIlwiLFwiT3BlcmF0ZUZsYWdzXCI6MCxcIkNsYXNzVHlwZVwiOlwiMVwiLFwiQmlnR3JhZGVcIjpcImNcIixcIlN1YmplY3RJZFwiOlwiMDFcIixcIkNsYXNzSWRcIjowLFwiQ2xhc3NOYW1lXCI6XCJcIixcIlRlYWNoZXJJZFwiOjAsXCJUZWFjaGVyTmFtZVwiOlwiXCIsXCJDbGFzc0hvdXJcIjowLFwiRWR1VHlwZVwiOjAsXCJDb3Vyc2VJRFwiOjAsXCJPbGRDbGFzc0lkXCI6MH1cclxudmFyIHRlbXBBZGRMZXNzb25JbmRleCA9IC0xOyAgICAgICAgIC8v5paw5aKe55qE5oql6K++5L+h5oGv55qE5Li05pe2SUTvvIzkuIDnm7Tku6XotJ/mlbDnmoTlvaLlvI/lrZjlnKhcclxudmFyIHRlbXBUZWFjaGVyT3JDbGFzc0lkID0gLTE7ICAgICAgLy/pgInmi6nnmoTmlZnluIjmiJbnj63nuqdJRFxyXG52YXIgdGVtcFRlYWNoZXJPckNsYXNzTmFtZSA9IFwiXCI7ICAgICAgLy/pgInmi6nnmoTmlZnluIjmiJbnj63nuqflkI3np7BcclxudmFyIHRlbXBDdXJlbnRMZXNzb25JZCA9IDA7ICAgICAgICAgICAgICAvL+S/ruaUueaIlua3u+WKoOeahOivvueoi+WUr+S4gElEXHJcbnZhciB0ZW1wQ3VycmVudFNlbGVjdFN1YmplY3QgPSBcIi0xXCI7ICAgICAvL+a3u+WKoOaXtumAieaLqeeahOenkeebrklEXHJcbnZhciB0ZW1wQ3VycmVudFNlbGVjdEJpZ0dyYWRlID0gXCItMVwiOyAgICAvL+a3u+WKoOaXtumAieaLqeeahOWkp+W5tOe6p1xyXG52YXIgdGVtcEN1cnJlbnRTZWxlY3RTdWJqZWN0RGVzYyA9IFwiXCI7ICAgICAvL+a3u+WKoOaXtumAieaLqeeahOenkeebrklEXHJcbnZhciB0ZW1wQ3VycmVudFNlbGVjdEJpZ0dyYWRlRGVzYyA9IFwiXCI7ICAgIC8v5re75Yqg5pe26YCJ5oup55qE5aSn5bm057qnXHJcbnZhciB0ZW1wQ3VycmVudFNlbGVjdENsYXNzVHlwZSA9IDE7ICAgIC8v5re75Yqg5pe26YCJ5oup55qE54+t57qn57G75Z6LXHJcblxyXG4vL+iOt+WPluWtpueUn+WIl+ihqFxyXG5mdW5jdGlvbiBHZXRTdHVkZW50TGlzdCgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmdVc2VyL1N0dWRlbnRNYW5hZ2UvR2V0U3R1ZGVudExpc3RcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHJvbGVJZDogY3VycmVudFJvbGVJZCxcclxuICAgICAgICAgICAga2V5V29yZDogY3VycmVudFNlYXJjaFdvcmQsXHJcbiAgICAgICAgICAgIGNsYXNzVHlwZTogY3VycmVudENsYXNzVHlwZSxcclxuICAgICAgICAgICAgYWN0aXZlU3RhdHVzOiBjdXJyZW50QWN0aXZlU3RhdHVzLFxyXG4gICAgICAgICAgICBleHBpcmVUaW1lOiBjdXJyZW50RXhwaXJlRGF5cyxcclxuICAgICAgICAgICAgc2Nob29sSWQ6IGN1cnJlbnRTY2hvb2xJZCxcclxuICAgICAgICAgICAgc3R1ZGVudFR5cGU6IGN1cnJlbnRTdHVUeXBlLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogY3VycmVudFBhZ2VTaXplLFxyXG4gICAgICAgICAgICBwYWdlTnVtOiBjdXJyZW50UGFnZUluZGV4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vZGVidWdnZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5PSykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0dWRlbnRJbmZvID0gZGF0YS5EYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0dWRlbnRJbmZvICE9IG51bGwgJiYgc3R1ZGVudEluZm8gIT0gdW5kZWZpbmVkICYmIHN0dWRlbnRJbmZvICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3NwQ2FuQWN0aXZlU3R1ZGVudENvdW50XCIpLmh0bWwoXCLlvZPliY3ov5jlj6/ku6Xmv4DmtLs8aSBjbGFzcz1cXFwicmVkXFxcIj4gXCIgKyBzdHVkZW50SW5mby5TdXJwbHVzU3R1Q291bnQgKyBcIiA8L2k+5ZCN5a2m55Sf6LSm5Y+3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2VG90YWxTdHVkZW50Q291bnRcIikuaHRtbChcIuWFseiuoTxpIGNsYXNzPVxcXCJyZWRcXFwiPiBcIiArIHN0dWRlbnRJbmZvLlN0dWRlbnRDb3VudCArIFwiIDwvaT7lkI3lrabnlJ9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0dWRlbnRJbmZvLlN0dWRlbnRJbmZvTGlzdCAhPSBudWxsICYmIHN0dWRlbnRJbmZvLlN0dWRlbnRJbmZvTGlzdCAhPSB1bmRlZmluZWQgJiYgc3R1ZGVudEluZm8uU3R1ZGVudEluZm9MaXN0ICE9IFwiXCIgJiYgc3R1ZGVudEluZm8uU3R1ZGVudEluZm9MaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0dWRlbnRJbmZvLlJvbGVJZCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFN0dUxpc3RUcGwgPSByZXF1aXJlKFwiT3JnVXNlci9hbGxzdHVkZW50bGlzdC50cGxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3RiU3R1ZGVudExpc3RcIikuaHRtbCh0ZW1wU3R1TGlzdFRwbChzdHVkZW50SW5mbykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzZWxlY3RDbGFzc1R5cGVcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFNlbGVjdGVkID0gJChcIiNzZWxlY3RDbGFzc1R5cGUgb3B0aW9uOnNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDbGFzc1R5cGUgPSBwYXJzZUludCh0ZW1wU2VsZWN0ZWQudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldFN0dWRlbnRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc2VsZWN0U2Nob29sSWRcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFNlbGVjdGVkID0gJChcIiNzZWxlY3RTY2hvb2xJZCBvcHRpb246c2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNjaG9vbElkID0gcGFyc2VJbnQodGVtcFNlbGVjdGVkLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXRTdHVkZW50TGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3R1ZGVudEluZm8uUm9sZUlkID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wU3R1TGlzdFRwbCA9IHJlcXVpcmUoXCJPcmdVc2VyL3NjaG9vbHN0dWxpc3RsaXN0LnRwbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdGJTdHVkZW50TGlzdFwiKS5odG1sKHRlbXBTdHVMaXN0VHBsKHN0dWRlbnRJbmZvLlN0dWRlbnRJbmZvTGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzZWxlY3RDbGFzc1R5cGVcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFNlbGVjdGVkID0gJChcIiNzZWxlY3RDbGFzc1R5cGUgb3B0aW9uOnNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDbGFzc1R5cGUgPSBwYXJzZUludCh0ZW1wU2VsZWN0ZWQudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldFN0dWRlbnRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHVkZW50SW5mby5Sb2xlSWQgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBTdHVMaXN0VHBsID0gcmVxdWlyZShcIk9yZ1VzZXIvbWFuYWdlcnN0dWxpc3QudHBsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0YlN0dWRlbnRMaXN0XCIpLmh0bWwodGVtcFN0dUxpc3RUcGwoc3R1ZGVudEluZm8uU3R1ZGVudEluZm9MaXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+a3u+WKoOWIhumFjeWtpueuoS/kv67mlLnlrabnrqHmjInpkq7kuovku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdGJTdHVkZW50TGlzdCBzcGFuW25hbWU9J3NwU2V0U3R1TWFuYWdlciddXCIpLmNsaWNrKFNob3dBbGxvdEFsbG90U3R1ZHlNYW5hbmdlckFyZWEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzZWxlY3RBY3RpdmVTdGF0dXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFNlbGVjdGVkID0gJChcIiNzZWxlY3RBY3RpdmVTdGF0dXMgb3B0aW9uOnNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVTdGF0dXMgPSBwYXJzZUludCh0ZW1wU2VsZWN0ZWQudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldFN0dWRlbnRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc2VsZWN0RXhwaXJlRGF5c1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wU2VsZWN0ZWQgPSAkKFwiI3NlbGVjdEV4cGlyZURheXMgb3B0aW9uOnNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFeHBpcmVEYXlzID0gcGFyc2VJbnQodGVtcFNlbGVjdGVkLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXRTdHVkZW50TGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3R1ZGVudEluZm8uUm9sZUlkID09IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wU3R1TGlzdFRwbCA9IHJlcXVpcmUoXCJPcmdVc2VyL293bnN0dWRlbnRsaXN0LnRwbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdGJTdHVkZW50TGlzdFwiKS5odG1sKHRlbXBTdHVMaXN0VHBsKHN0dWRlbnRJbmZvLlN0dWRlbnRJbmZvTGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDliIbphY0v566h55CG5oql6K++5L+h5oGv5oyJ6ZKu5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3RiU3R1ZGVudExpc3Qgc3BhbltuYW1lPSdzcFNldFN0dVRlYWNoZXInXVwiKS5jbGljayhTaG93QWxsb3RUZWFjaGVyT3JDbGFzc0FyZWEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzZWxlY3RBY3RpdmVTdGF0dXNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFNlbGVjdGVkID0gJChcIiNzZWxlY3RBY3RpdmVTdGF0dXMgb3B0aW9uOnNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVTdGF0dXMgPSBwYXJzZUludCh0ZW1wU2VsZWN0ZWQudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldFN0dWRlbnRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc2VsZWN0RXhwaXJlRGF5c1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wU2VsZWN0ZWQgPSAkKFwiI3NlbGVjdEV4cGlyZURheXMgb3B0aW9uOnNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFeHBpcmVEYXlzID0gcGFyc2VJbnQodGVtcFNlbGVjdGVkLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXRTdHVkZW50TGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3NlbGVjdENsYXNzVHlwZVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wU2VsZWN0ZWQgPSAkKFwiI3NlbGVjdENsYXNzVHlwZSBvcHRpb246c2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudENsYXNzVHlwZSA9IHBhcnNlSW50KHRlbXBTZWxlY3RlZC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0U3R1ZGVudExpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzZWxlY3RCaWdHcmFkZVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wU2VsZWN0ZWQgPSAkKFwiI3NlbGVjdEJpZ0dyYWRlIG9wdGlvbjpzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QmlnR3JhZGUgPSB0ZW1wU2VsZWN0ZWQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0U3R1ZGVudExpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ngrnlh7vlpI3pgInmoYbvvIzpgInkuK3nlKjmiLdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdGJTdHVkZW50TGlzdCBpbnB1dFtuYW1lPSdja0NoZWNrVXNlciddXCIpLmNsaWNrKFNlbGV0ZWRVc2VySW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDmn6XnnIvmjInpkq7kuovku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0YlN0dWRlbnRMaXN0IHNwYW5bbmFtZT0nYnRuVmlld1N0dURldGFpbHMnXVwiKS5jbGljayhTaG93U3R1ZGVudERldGFpbFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WGmeWIhumhtemAu+i+kVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYWdpbmF0b3IuUGFnaW5hdG9yKGN1cnJlbnRQYWdlU2l6ZSwgY3VycmVudFBhZ2VJbmRleCwgc3R1ZGVudEluZm8uU3R1ZGVudENvdW50LCBDaGFuZ2VQYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mmL7npLrmsqHmnInlrabnlJ/nmoTpobXpnaLkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBQb3B1Q2xpZW50LlBvcFRpcFNob3coXCLmsqHmnInmn6Xor6LliLDmlbDmja7vvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL3ZhciBodG1sID0gJzx0ciBjbGFzcz1cImZvbnQxMlwiPjx0ZCBjb2xzcGFuPTQ+JyArIGRhdGEuUmVzdWx0ICsgJzwvdGQ+PC90cj4nO1xyXG4gICAgICAgICAgICAgICAgLy8kKFwiI2lkVGFibGVDbGFzcyB0Ym9keVwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5pS55Y+Y6aG156CB6L+b6KGM5YiG6aG1XHJcbmZ1bmN0aW9uIENoYW5nZVBhZ2VJbmRleChwYWdlSW5kZXgpIHtcclxuICAgIGN1cnJlbnRQYWdlSW5kZXggPSBwYWdlSW5kZXg7XHJcbiAgICBHZXRTdHVkZW50TGlzdCgpO1xyXG59XHJcblxyXG4vL+aYvuekuuWIhumFjeWtpueuoeW8ueWHuuahhu+8jOatpOWkhOazqOaEj+WIsOW6leaYr+WIhumFjei/mOaYr+S/ruaUuVxyXG5mdW5jdGlvbiBTaG93QWxsb3RBbGxvdFN0dWR5TWFuYW5nZXJBcmVhKCkge1xyXG4gICAgdmFyIHRlbXBNYW5hZ2VySWQgPSAkKHRoaXMpLmF0dHIoXCJtYW5hZ2VySWRcIik7XHJcbiAgICB2YXIgdGVtcFN0dWRlbnRJZCA9ICQodGhpcykuYXR0cihcInN0dWRlbnRJZFwiKTtcclxuICAgIGN1cnJlbnRTdHVkZW50SWQgPSBwYXJzZUludCh0ZW1wU3R1ZGVudElkKTtcclxuICAgICQoXCIjaW1nQWxsb3RTdHVNYW5hZ2VyQ2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjZGl2QWxsb3RTdHVkeU1hbmFuZ2VyXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI2J0bkFsbG90TWFuYWdlclN1Ym1pdFwiKS5jbGljayhBbGxvdFN0dWR5TWFuYW5nZXIpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL09yZ1VzZXIvU3R1ZGVudE1hbmFnZS9HZXRBbGxTdHVkZW50TWFuYWdlclwiLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5EYXRhICE9IG51bGwgJiYgZGF0YS5EYXRhICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzY2hvb2xUcmVlVHBsID0gcmVxdWlyZShcIk9yZ1VzZXIvc3R1ZHltYW5hbmdlcmxpc3QudHBsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdWxTdHVkeU1hbmFnZXJMaXN0XCIpLmh0bWwoc2Nob29sVHJlZVRwbChkYXRhLkRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+a3u+WKoOmAieaLqemDqOmXqOS6i+S7tlxyXG4gICAgICAgICAgICAgICAgICAgICQoXCJkaXZBbGxvdFN0dWR5TWFuYW5nZXIgW25hbWU9J2RlcGFydG1lbnQtaXRlbSddXCIpLmNsaWNrKENoYW5nZU5ld01hbmFnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wTWFuYWdlcklkICE9IG51bGwgJiYgdGVtcE1hbmFnZXJJZCAhPSB1bmRlZmluZWQgJiYgdGVtcE1hbmFnZXJJZCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wTWFuYWdlcklkID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiZGl2QWxsb3RTdHVkeU1hbmFuZ2VyIFtuYW1lPSdkZXBhcnRtZW50LWl0ZW0nXTpmaXJzdFwiKS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcImRpdkFsbG90U3R1ZHlNYW5hbmdlciBbbmFtZT0nZGVwYXJ0bWVudC1pdGVtJ11cIikuZWFjaChmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHZhbHVlKS5hdHRyKFwibWFuYWdlcklkXCIpID09IHRlbXBNYW5hZ2VySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZSkuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2RpdkFsbG90U3R1ZHlNYW5hbmdlclwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+aUueWPmOWtpueuoVxyXG5mdW5jdGlvbiBDaGFuZ2VOZXdNYW5hZ2VyKCkge1xyXG4gICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUF0dHIoXCJjaGVja2VkXCIpO1xyXG4gICAgJCh0aGlzKS5hdHRyKFwiY2hlY2tlZFwiLCBcImNoZWNrZWRcIik7XHJcbiAgICBjdXJyZW50U2VsZWN0ZWRNYW5hZ2VySWQgPSBwYXJzZUludCgkKHRoaXMpLmF0dHIoXCJtYW5hZ2VySWRcIikpO1xyXG59XHJcblxyXG4vL+WIhumFjeWtpueuoVxyXG5mdW5jdGlvbiBBbGxvdFN0dWR5TWFuYW5nZXIoKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnVXNlci9TdHVkZW50TWFuYWdlL1NldFN0dWRlbnRNYW5hZ2VyXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBzdHVkZW50SWQ6IGN1cnJlbnRTdHVkZW50SWQsXHJcbiAgICAgICAgICAgIG1hbmFnZXJJZDogY3VycmVudFNlbGVjdGVkTWFuYWdlcklkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vZGVidWdnZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5PSykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2QWxsb3RTdHVkeU1hbmFuZ2VyXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBQb3B1Q2xpZW50LlBvcFRpcFNob3coXCLliIbphY3lrabnrqHlpLHotKXvvIzor7fnqI3lkI7lho3or5XvvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/mmL7npLrnrqHnkIbmiqXor77kv6Hmga/lvLnlh7rmoYZcclxuZnVuY3Rpb24gU2hvd0FsbG90VGVhY2hlck9yQ2xhc3NBcmVhKCkge1xyXG4gICAgY3VycmVudFNlbGVjdFN0dU9iaiA9ICQodGhpcyk7XHJcbiAgICB2YXIgdGVtcFN0dWRlbnRJZCA9ICQodGhpcykuYXR0cihcInN0dWRlbnRJZFwiKTtcclxuICAgIGN1cnJlbnRTdHVkZW50SWQgPSBwYXJzZUludCh0ZW1wU3R1ZGVudElkKTtcclxuICAgIHZhciB0ZW1wVGl0bGUgPSAkKHRoaXMpLmh0bWwoKTtcclxuICAgICQoXCIjaDVBbGxvdFRlYWNoZXJJbmZvXCIpLmh0bWwodGVtcFRpdGxlICsgXCIgICAgICAgICAgICA8aSBjbGFzcz1cXFwicG9wY2xvc2UgY3Vyc29yXFxcIiBpZD1cXFwiaUNsb3NlTGVzc29uQXJlYVxcXCI+PC9pPlwiKVxyXG4gICAgJChcIiNpQ2xvc2VMZXNzb25BcmVhXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI2RpdlN0dWRlbnRMZXNzb25MaXN0XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI2J0blN1Ym1pdFN0dUxlc3Nvbkxpc3RcIikuY2xpY2soQWxsb3RUZWFjaGVyT3JDbGFzcyk7XHJcbiAgICAvL+a3u+WKoOWSjOS/ruaUueaMiemSrue7keWumuS6i+S7tlxyXG4gICAgJChcIiNzcEFkZExlc3NvblwiKS5jbGljayhBZGRMZXNzb25JbmZvKTtcclxuICAgICQoXCIjc3BVcGRhdGVMZXNzb25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8v5aaC5p6c55So5oi35b2T5YmN5rKh5pyJ6YCJ5Lit5YiX6KGo5Lit55qE5p+Q5LiA6KGM77yM5YiZ6ZyA6KaB6YCJ5Lit56ys5LiA6KGMXHJcbiAgICAgICAgaWYgKHRlbXBDdXJlbnRMZXNzb25JZCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8v5p+l6K+i5piv5ZCm5pyJ5pyq5Yig6Zmk55qE5pWw5o2u77yM5aaC5p6c5pyJ77yM5YiZ6YCJ5Lit56ys5LiA6KGMXHJcbiAgICAgICAgICAgIHZhciB0ZW1wRWxlTGlzdCA9ICQoXCIjdGJTdHVMZXNzb25MaXN0ID50Ym9keT50cjp2aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICBpZiAodGVtcEVsZUxpc3QgIT0gbnVsbCAmJiB0ZW1wRWxlTGlzdCAhPSB1bmRlZmluZWQgJiYgdGVtcEVsZUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiN0YlN0dUxlc3Nvbkxpc3QgPnRib2R5PnRyOnZpc2libGVcIikuZmlyc3QoKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0ZW1wQWRkTGVzc29uSW5kZXggPSAtMTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmdVc2VyL1N0dWRlbnRNYW5hZ2UvR2V0U3R1ZGVudENsYXNzSW5mb0xpc3RcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHN0dWRlbnRJZDogY3VycmVudFN0dWRlbnRJZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wTGVzc29uSW5mb0xpc3QgPSBkYXRhLkRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAodGVtcExlc3NvbkluZm9MaXN0ICE9IG51bGwgJiYgdGVtcExlc3NvbkluZm9MaXN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wTGVzc29uSW5mb0xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBMZXNzb25JbmZvTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRtcFNvdXJjZURhdGEgPSB0ZW1wTGVzc29uSW5mb0xpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG1wVGFyZ2V0RGF0YSA9IHsgXCJTdHVkZW50SWRcIjogY3VycmVudFN0dWRlbnRJZCwgXCJVc2VyQ2xhc3NJZFwiOiB0bXBTb3VyY2VEYXRhLlVzZXJDbGFzc1N0dWR5SWQsIFwiT3BlcmF0ZUZsYWdzXCI6IDAsIFwiQ2xhc3NUeXBlXCI6IHRtcFNvdXJjZURhdGEuQ2xhc3NUeXBlLCBcIkJpZ0dyYWRlXCI6IHRtcFNvdXJjZURhdGEuQmlnR3JhZGUsIFwiU3ViamVjdElkXCI6IHRtcFNvdXJjZURhdGEuU3ViamVjdElkLCBcIkNsYXNzSWRcIjogdG1wU291cmNlRGF0YS5DbGFzc0lkLCBcIkNsYXNzTmFtZVwiOiB0bXBTb3VyY2VEYXRhLkNsYXNzTmFtZSwgXCJUZWFjaGVySWRcIjogMCwgXCJUZWFjaGVyTmFtZVwiOiBcIlwiLCBcIkNsYXNzSG91clwiOiB0bXBTb3VyY2VEYXRhLlN1cnBsdXNDbGFzc0hvdXIsIFwiRWR1VHlwZVwiOiAwLCBcIkNvdXJzZUlEXCI6IHRtcFNvdXJjZURhdGEuQ291cnNlSUQsIFwiT2xkQ2xhc3NJZFwiOiAwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUmVxdWVzdExlc3Nvbkxpc3QucHVzaCh0bXBUYXJnZXREYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVzc2VuTGlzdFRwbCA9IHJlcXVpcmUoXCJPcmdVc2VyL3N0dWxlc3Nvbmxpc3QudHBsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3RiU3R1TGVzc29uTGlzdCA+dGJvZHlcIikuaHRtbChsZXNzZW5MaXN0VHBsKGRhdGEuRGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+a3u+WKoOWIoOmZpOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwidGJTdHVMZXNzb25MaXN0IFtuYW1lPSdidG5EZWxldGVMZXNzb24nXVwiKS5jbGljayhEZWxldGVMZXNzb25JbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/pgInkuK3mlbDmja5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcInRiU3R1TGVzc29uTGlzdCA+dGJvZHk+dHJcIikuY2xpY2soU2VsZWN0TGVzc29uSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGl2U3R1ZGVudExlc3Nvbkxpc3RcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v56e76Zmk5a2m55Sf55qE5oql6K++5L+h5oGvXHJcbmZ1bmN0aW9uIERlbGV0ZUxlc3NvbkluZm8oKSB7XHJcbiAgICB2YXIgdGVtcExlc3NvbklkID0gJCh0aGlzKS5hdHRyKFwibGVzc29uSWRcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBSZXF1ZXN0TGVzc29uTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0ZW1wUmVxdWVzdExlc3Nvbkxpc3QuVXNlckNsYXNzSWQgPT0gdGVtcExlc3NvbklkKSB7XHJcbiAgICAgICAgICAgIHRlbXBSZXF1ZXN0TGVzc29uTGlzdC5PcGVyYXRlRmxhZ3MgPSAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+makOiXj+atpOihjFxyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKCk7XHJcbn1cclxuXHJcbi8v6YCJ5Lit6ZyA6KaB5L+u5pS55a2m55Sf5oql6K++5L+h5oGvXHJcbmZ1bmN0aW9uIFNlbGVjdExlc3NvbkluZm8oKSB7XHJcbiAgICAvL+WmguaenOaYr+iiq+makOiXj+eahOihjO+8jOWImeihqOekuuiiq+WIoOmZpO+8jOWboOatpOaXoOmcgOWBmuWkhOeQhlxyXG4gICAgaWYgKCQodGhpcykuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICQoXCIjc3BVcGRhdGVMZXNzb25cIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImNsaWNrLW9uXCIpO1xyXG4gICAgICAgICQoXCIjc3BVcGRhdGVMZXNzb25cIikuYWRkQ2xhc3MoXCJjbGljay1vblwiKTtcclxuICAgICAgICB2YXIgdG1wTGVzc29uSWQgPSAkKHRoaXMpLmF0dHIoXCJsZXNzb25DbGFzc0lkXCIpO1xyXG4gICAgICAgIHRlbXBDdXJlbnRMZXNzb25JZCA9IHBhcnNlSW50KHRtcExlc3NvbklkKTtcclxuICAgICAgICAvL+WxleekuuaVsOaNrlxyXG4gICAgICAgIHZhciBjdXJyZW50RGF0YSA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wTGVzc29uSW5mb0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRlbXBMZXNzb25JbmZvTGlzdFtpXS5Vc2VyQ2xhc3NTdHVkeUlkID09IHRlbXBDdXJlbnRMZXNzb25JZCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudERhdGEgPSB0ZW1wTGVzc29uSW5mb0xpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudERhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgdGVtcERhdGEgPSB7fTtcclxuICAgICAgICAgICAgdGVtcERhdGEuVXNlckNsYXNzU3R1ZHlJZCA9IGN1cnJlbnREYXRhLlVzZXJDbGFzc1N0dWR5SWQ7XHJcbiAgICAgICAgICAgIHRlbXBEYXRhLkJpZ0dyYWRlRGVzYyA9IGN1cnJlbnREYXRhLkJpZ0dyYWRlRGVzYztcclxuICAgICAgICAgICAgdGVtcERhdGEuU3ViamVjdERlc2MgPSBjdXJyZW50RGF0YS5TdWJqZWN0RGVzYztcclxuICAgICAgICAgICAgdGVtcERhdGEuU3VycGx1c0NsYXNzSG91ciA9IGN1cnJlbnREYXRhLlN1cnBsdXNDbGFzc0hvdXI7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0YS5DbGFzc1R5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGVtcERhdGEuVGl0bGVOYW1lID0gXCLnj63nuqdcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50RGF0YS5DbGFzc1R5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGVtcERhdGEuVGl0bGVOYW1lID0gXCLogIHluIhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+iOt+WPluaVmeW4iOaIluePree6p+S/oeaBr1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL09yZ1VzZXIvU3R1ZGVudE1hbmFnZS9HZXRUZWFjaGVyTGlzdEJ5U3ViamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzVHlwZTogY3VycmVudERhdGEuQ2xhc3NUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3RJZDogY3VycmVudERhdGEuU3ViamVjdElkLFxyXG4gICAgICAgICAgICAgICAgICAgIGJpZ0dyYWRlOiBjdXJyZW50RGF0YS5CaWdHcmFkZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5PSykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wRGF0YS5UZWFjaGVyT3JDbGFzc0xpc3QgPSBkYXRhLkRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy/liqDovb3mqKHmnb9cclxuICAgICAgICAgICAgdmFyIHRlbXBMZXNzb25JbmZvVHBsID0gcmVxdWlyZShcIk9yZ1VzZXIvdXBkYXRlbGVzc29uZGF0YS50cGxcIik7XHJcbiAgICAgICAgICAgICQoXCIjZGl2TWFuYWdlTGVzc29uSW5mb1wiKS5odG1sKHRlbXBMZXNzb25JbmZvVHBsKHRlbXBEYXRhKSk7XHJcbiAgICAgICAgICAgIC8v5re75Yqg55u45bqU55qE5LqL5Lu2XHJcbiAgICAgICAgICAgIGlmICgkKFwiI3NlbGVjdFRlYWNoZXJPckNsYXNzXCIpICE9IG51bGwgJiYgJChcIiNzZWxlY3RUZWFjaGVyT3JDbGFzc1wiKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjc2VsZWN0VGVhY2hlck9yQ2xhc3NcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFNlbGVjdGVkID0gJChcIiNzZWxlY3RUZWFjaGVyT3JDbGFzcyBvcHRpb246c2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcFRlYWNoZXJPckNsYXNzSWQgPSBwYXJzZUludCh0ZW1wU2VsZWN0ZWQudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBUZWFjaGVyT3JDbGFzc05hbWUgPSB0ZW1wU2VsZWN0ZWQuaHRtbCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQoXCIjYnRuVXBkYXRlTGVzc29uSW5mb1wiKSAhPSBudWxsICYmICQoXCIjYnRuVXBkYXRlTGVzc29uSW5mb1wiKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjYnRuVXBkYXRlTGVzc29uSW5mb1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBDbGFzc0hvdXIgPSBwYXJzZUludCgkKFwiI3R4dFVwZGF0ZUNsYXNzSG91clwiKS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wUmVxdWVzdExlc3Nvbkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBSZXF1ZXN0TGVzc29uTGlzdFtpXS5Vc2VyQ2xhc3NTdHVkeUlkID09IHRlbXBDdXJlbnRMZXNzb25JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFJlcXVlc3RMZXNzb25MaXN0W2ldLk9wZXJhdGVGbGFncyA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUmVxdWVzdExlc3Nvbkxpc3RbaV0uQ2xhc3NIb3VyID0gdGVtcENsYXNzSG91cjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wUmVxdWVzdExlc3Nvbkxpc3RbaV0uQ2xhc3NUeXBlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUmVxdWVzdExlc3Nvbkxpc3RbaV0uT2xkQ2xhc3NJZCA9IHRlbXBSZXF1ZXN0TGVzc29uTGlzdFtpXS5DbGFzc0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBSZXF1ZXN0TGVzc29uTGlzdFtpXS5DbGFzc0lkID0gdGVtcFRlYWNoZXJPckNsYXNzSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFJlcXVlc3RMZXNzb25MaXN0W2ldLkNsYXNzTmFtZSA9IHRlbXBUZWFjaGVyT3JDbGFzc05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZW1wUmVxdWVzdExlc3Nvbkxpc3RbaV0uQ2xhc3NUeXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUmVxdWVzdExlc3Nvbkxpc3RbaV0uVGVhY2hlcklkID0gdGVtcFRlYWNoZXJPckNsYXNzSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFJlcXVlc3RMZXNzb25MaXN0W2ldLlRlYWNoZXJOYW1lID0gdGVtcFRlYWNoZXJPckNsYXNzTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJlbnRMZXNzb25JZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL+a3u+WKoOWtpueUn+aKpeivvuS/oeaBr1xyXG5mdW5jdGlvbiBBZGRMZXNzb25JbmZvKCkge1xyXG4gICAgJChcIiNzcEFkZExlc3NvblwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiY2xpY2stb25cIik7XHJcbiAgICAkKFwiI3NwQWRkTGVzc29uXCIpLmFkZENsYXNzKFwiY2xpY2stb25cIik7XHJcbiAgICAvL+iOt+WPluaVsOaNrlxyXG4gICAgdmFyIHRlbXBEYXRhID0ge307XHJcbiAgICB0ZW1wQ3VyZW50TGVzc29uSWQgPSB0ZW1wQWRkTGVzc29uSW5kZXg7XHJcbiAgICB0ZW1wRGF0YS5Vc2VyQ2xhc3NTdHVkeUlkID0gdGVtcEN1cmVudExlc3NvbklkO1xyXG4gICAgdGVtcERhdGEuU3ViamVjdExpc3QgPSBjdXJyZW50RGF0YS5TdWJqZWN0RGVzYztcclxuICAgIHRlbXBEYXRhLlN1cnBsdXNDbGFzc0hvdXIgPSAwO1xyXG4gICAgdGVtcERhdGEuVGl0bGVOYW1lID0gXCLogIHluIhcIjtcclxuICAgIC8v6I635Y+W56eR55uuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnL0NvbW1vbk1hbmFnZS9HZXRTdWJqZWN0TGlzdFwiLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wRGF0YS5TdWJqZWN0TGlzdCA9IGRhdGEuRGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy/liqDovb3mqKHmnb9cclxuICAgIHZhciB0ZW1wTGVzc29uSW5mb1RwbCA9IHJlcXVpcmUoXCJPcmdVc2VyL2FkZGxlc3NvbmRhdGEudHBsXCIpO1xyXG4gICAgJChcIiNkaXZNYW5hZ2VMZXNzb25JbmZvXCIpLmh0bWwodGVtcExlc3NvbkluZm9UcGwodGVtcERhdGEpKTtcclxuICAgIC8v5re75Yqg55u45bqU55qE5LqL5Lu2XHJcbiAgICBpZiAoJChcIiNzZWxlY3RBZGRMZXNzb25CaWdHcmFkZVwiKSAhPSBudWxsICYmICQoXCIjc2VsZWN0QWRkTGVzc29uQmlnR3JhZGVcIikgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJChcIiNzZWxlY3RBZGRMZXNzb25CaWdHcmFkZVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdGVtcFNlbGVjdGVkID0gJChcIiNzZWxlY3RBZGRMZXNzb25CaWdHcmFkZSBvcHRpb246c2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIHRlbXBDdXJyZW50U2VsZWN0QmlnR3JhZGUgPSB0ZW1wU2VsZWN0ZWQudmFsKCk7XHJcbiAgICAgICAgICAgIHRlbXBDdXJyZW50U2VsZWN0QmlnR3JhZGVEZXNjID0gdGVtcFNlbGVjdGVkLmh0bWwoKTtcclxuICAgICAgICAgICAgaWYgKHRlbXBDdXJyZW50U2VsZWN0QmlnR3JhZGUgIT0gXCItMVwiICYmIHRlbXBDdXJyZW50U2VsZWN0U3ViamVjdCAhPSBcIi0xXCIpIHtcclxuICAgICAgICAgICAgICAgIEdldEFkZExlc3NvblRlYWNoZXJPckNsYXNzSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgJChcInNwRXJyb3JBZGRUaXBcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcInNwRXJyb3JBZGRUaXBcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoJChcIiNzZWxlY3RBZGRMZXNzb25TdWJqZWN0XCIpICE9IG51bGwgJiYgJChcIiNzZWxlY3RBZGRMZXNzb25TdWJqZWN0XCIpICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICQoXCIjc2VsZWN0QWRkTGVzc29uU3ViamVjdFwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdGVtcFNlbGVjdGVkID0gJChcIiNzZWxlY3RBZGRMZXNzb25TdWJqZWN0IG9wdGlvbjpzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgdGVtcEN1cnJlbnRTZWxlY3RTdWJqZWN0ID0gdGVtcFNlbGVjdGVkLnZhbCgpO1xyXG4gICAgICAgICAgICB0ZW1wQ3VycmVudFNlbGVjdFN1YmplY3REZXNjID0gdGVtcFNlbGVjdGVkLmh0bWwoKTtcclxuICAgICAgICAgICAgaWYgKHRlbXBDdXJyZW50U2VsZWN0QmlnR3JhZGUgIT0gXCItMVwiICYmIHRlbXBDdXJyZW50U2VsZWN0U3ViamVjdCAhPSBcIi0xXCIpIHtcclxuICAgICAgICAgICAgICAgIEdldEFkZExlc3NvblRlYWNoZXJPckNsYXNzSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgJChcInNwRXJyb3JBZGRUaXBcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcInNwRXJyb3JBZGRUaXBcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoJChcIiNkaXZDbGFzc1R5cGVDaG9vc2VcIikgIT0gbnVsbCAmJiAkKFwiI2RpdkNsYXNzVHlwZUNob29zZVwiKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAkKFwiI2RpdkNsYXNzVHlwZUNob29zZSBpbnB1dFtuYW1lPSd0eXBlLWNob29zZSddXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGVtcEN1cnJlbnRTZWxlY3RDbGFzc1R5cGUgPSBwYXJzZUludCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICAgICAgaWYgKHRlbXBDdXJyZW50U2VsZWN0Q2xhc3NUeXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZGl2VGl0bGVcIikuaHRtbChcIuiAgeW4iO+8mlwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZGl2VGl0bGVcIikuaHRtbChcIuePree6p++8mlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy/ngrnlh7vnoa7lrprkuovku7ZcclxuICAgIGlmICgkKFwiI2J0bkFkZExlc3NvbkluZm9cIikgIT0gbnVsbCAmJiAkKFwiI2J0bkFkZExlc3NvbkluZm9cIikgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJChcIiNidG5BZGRMZXNzb25JbmZvXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHRlbXBDbGFzc0hvdXIgPSBwYXJzZUludCgkKFwiI3R4dFVwZGF0ZUNsYXNzSG91clwiKS52YWwoKSk7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wQ3VycmVudFNlbGVjdEJpZ0dyYWRlICE9IFwiLTFcIiAmJiB0ZW1wQ3VycmVudFNlbGVjdFN1YmplY3QgIT0gXCItMVwiICYmIHRlbXBUZWFjaGVyT3JDbGFzc0lkICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wVGFyZ2V0RGF0YSA9IHsgXCJTdHVkZW50SWRcIjogY3VycmVudFN0dWRlbnRJZCwgXCJVc2VyQ2xhc3NJZFwiOiB0ZW1wQ3VyZW50TGVzc29uSWQsIFwiT3BlcmF0ZUZsYWdzXCI6IDAsIFwiQ2xhc3NUeXBlXCI6IHRlbXBDdXJyZW50U2VsZWN0Q2xhc3NUeXBlLCBcIkJpZ0dyYWRlXCI6IHRlbXBDdXJyZW50U2VsZWN0QmlnR3JhZGUsIFwiU3ViamVjdElkXCI6IHRlbXBDdXJyZW50U2VsZWN0U3ViamVjdCwgXCJDbGFzc0lkXCI6IHRlbXBUZWFjaGVyT3JDbGFzc0lkLCBcIkNsYXNzTmFtZVwiOiB0ZW1wVGVhY2hlck9yQ2xhc3NOYW1lLCBcIlRlYWNoZXJJZFwiOiAwLCBcIlRlYWNoZXJOYW1lXCI6IFwiXCIsIFwiQ2xhc3NIb3VyXCI6IHRlbXBDbGFzc0hvdXIsIFwiRWR1VHlwZVwiOiAwLCBcIkNvdXJzZUlEXCI6IDAsIFwiT2xkQ2xhc3NJZFwiOiAwIH07XHJcbiAgICAgICAgICAgICAgICB0ZW1wUmVxdWVzdExlc3Nvbkxpc3QucHVzaCh0bXBUYXJnZXREYXRhKTtcclxuICAgICAgICAgICAgICAgIHRlbXBBZGRMZXNzb25JbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgLy/mt7vliqDkuIDmnaHmlbDmja7liLDliJfooajkuK1cclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wVHJIdG1sID0gXCI8dHIgbGVzc29uQ2xhc3NJZD1cXFwiXCIgKyB0ZW1wQ3VyZW50TGVzc29uSWQgKyBcIlxcXCI+XCI7XHJcbiAgICAgICAgICAgICAgICBpZiAodGVtcEN1cnJlbnRTZWxlY3RDbGFzc1R5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBUckh0bWwgKz0gXCIgPHRkPjHlr7kxPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcFRySHRtbCArPSBcIiA8dGQ+54+t6K++PC90ZD5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRlbXBUckh0bWwgKz0gXCIgPHRkPlwiICsgdGVtcEN1cnJlbnRTZWxlY3RCaWdHcmFkZURlc2MgKyBcIjwvdGQ+XCI7XHJcbiAgICAgICAgICAgICAgICB0ZW1wVHJIdG1sICs9IFwiPHRkPlwiICsgdGVtcEN1cnJlbnRTZWxlY3RTdWJqZWN0RGVzYyArIFwiPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgIHRlbXBUckh0bWwgKz0gXCI8dGQ+XCIgKyB0ZW1wVGVhY2hlck9yQ2xhc3NOYW1lICsgXCI8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgdGVtcFRySHRtbCArPSBcIjx0ZD5cIiArIHRlbXBDbGFzc0hvdXIgKyBcIjwvdGQ+XCI7XHJcbiAgICAgICAgICAgICAgICB0ZW1wVHJIdG1sICs9IFwiPHRkPlwiO1xyXG4gICAgICAgICAgICAgICAgdGVtcFRySHRtbCArPSBcIjxpIGNsYXNzPVxcXCJkdXN0YmluXFxcIiBuYW1lPVxcXCJidG5EZWxldGVMZXNzb25cXFwiIGxlc3NvbklkPVxcXCJcIiArIHRlbXBDdXJlbnRMZXNzb25JZCArIFwiXFxcIj48L2k+XCI7XHJcbiAgICAgICAgICAgICAgICB0ZW1wVHJIdG1sICs9IFwiPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgIHRlbXBUckh0bWwgKz0gXCI8L3RyPlwiO1xyXG4gICAgICAgICAgICAgICAgLy/mt7vliqDliLDmnIDlkI7kuIDooYxcclxuICAgICAgICAgICAgICAgICQoXCIjdGJTdHVkZW50TGlzdCB0cjpsYXN0XCIpLmFmdGVyKHRlbXBUckh0bWwpO1xyXG4gICAgICAgICAgICAgICAgLy/mt7vliqDliKDpmaTmlbDmja5cclxuICAgICAgICAgICAgICAgICQoXCJ0YlN0dUxlc3Nvbkxpc3QgW25hbWU9J2J0bkRlbGV0ZUxlc3NvbiddOmxhc3RcIikuY2xpY2soRGVsZXRlTGVzc29uSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAvL+mAieS4reaVsOaNrlxyXG4gICAgICAgICAgICAgICAgJChcInRiU3R1TGVzc29uTGlzdCA+dGJvZHk+dHI6bGFzdFwiKS5jbGljayhTZWxlY3RMZXNzb25JbmZvKTtcclxuICAgICAgICAgICAgICAgICQoXCJzcEVycm9yQWRkVGlwXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCJzcEVycm9yQWRkVGlwXCIpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+a3u+WKoOivvueoi+S/oeaBr+aXtu+8jOiOt+WPluaVmeW4iOaIluePree6p+S/oeaBr1xyXG5mdW5jdGlvbiBHZXRBZGRMZXNzb25UZWFjaGVyT3JDbGFzc0luZm8oKSB7XHJcbiAgICAvL+iOt+WPluaVmeW4iOaIluePree6p+S/oeaBr1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL09yZ1VzZXIvU3R1ZGVudE1hbmFnZS9HZXRUZWFjaGVyTGlzdEJ5U3ViamVjdFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY2xhc3NUeXBlOiB0ZW1wQ3VycmVudFNlbGVjdENsYXNzVHlwZSxcclxuICAgICAgICAgICAgc3ViamVjdElkOiB0ZW1wQ3VycmVudFNlbGVjdFN1YmplY3QsXHJcbiAgICAgICAgICAgIGJpZ0dyYWRlOiB0ZW1wQ3VycmVudFNlbGVjdEJpZ0dyYWRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vZGVidWdnZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5PSykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRtcFRlYWNoZXJPckNsYXNzTHN0ID0gZGF0YS5EYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRtcFRlYWNoZXJPckNsYXNzTHN0ICE9IG51bGwgfHwgdG1wVGVhY2hlck9yQ2xhc3NMc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBPcHRpb25TdHIgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wQ3VycmVudFNlbGVjdENsYXNzVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBPcHRpb25TdHIgPSBcIjxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj7pgInmi6nogIHluIg8L29wdGlvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wT3B0aW9uU3RyID0gXCI8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+6YCJ5oup54+t57qnPC9vcHRpb24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG1wVGVhY2hlck9yQ2xhc3NMc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcE9wdGlvblN0ciArPSBcIjxvcHRpb24gdmFsdWU9XFxcIlwiICsgdG1wVGVhY2hlck9yQ2xhc3NMc3RbaV0uVGVhY2hlcklEICsgXCJcXFwiPlwiICsgdG1wVGVhY2hlck9yQ2xhc3NMc3RbaV0uVGVhY2hlck5hbWUgKyBcIjwvb3B0aW9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3NlbGVjdFRlYWNoZXJPckNsYXNzXCIpLmh0bWwodGVtcE9wdGlvblN0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDkuovku7ZcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3NlbGVjdFRlYWNoZXJPckNsYXNzXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wU2VsZWN0ZWQgPSAkKFwiI3NlbGVjdFRlYWNoZXJPckNsYXNzIG9wdGlvbjpzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFRlYWNoZXJPckNsYXNzSWQgPSBwYXJzZUludCh0ZW1wU2VsZWN0ZWQudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVGVhY2hlck9yQ2xhc3NOYW1lID0gdGVtcFNlbGVjdGVkLmh0bWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBUZWFjaGVyT3JDbGFzc0lkID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwic3BFcnJvckFkZFRpcFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwic3BFcnJvckFkZFRpcFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+WIhumFjeePree6p+aIluiAgeW4iFxyXG5mdW5jdGlvbiBBbGxvdFRlYWNoZXJPckNsYXNzKCkge1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmdVc2VyL1N0dWRlbnRNYW5hZ2UvRWRpdFN0dWRlbnRDbGFzc0luZm9cIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHN0dWRlbnRDbGFzc0luZm9MaXN0OiB0ZW1wUmVxdWVzdExlc3Nvbkxpc3RcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5EYXRhID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGVtcFJlcXVlc3RMZXNzb25MaXN0ICE9IG51bGwgJiYgdGVtcFJlcXVlc3RMZXNzb25MaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlbGVjdFN0dU9iai5odG1sKFwi5YiG6YWNXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZWxlY3RTdHVPYmouaHRtbChcIueuoeeQhlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcExlc3NvbkluZm9MaXN0ID0gbmV3IEFycmF5KCk7ICAgICAvL+S7juacjeWKoeerr+iOt+WPlueahOWtpueUn+aKpeivvuS/oeaBr1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBSZXF1ZXN0TGVzc29uTGlzdCA9IG5ldyBBcnJheSgpOyAgICAgIC8v5L+u5pS55ZCO55qE5a2m55Sf5oql6K++5L+h5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcEFkZExlc3NvbkluZGV4ID0gLTE7ICAgICAgICAgLy/mlrDlop7nmoTmiqXor77kv6Hmga/nmoTkuLTml7ZJRO+8jOS4gOebtOS7pei0n+aVsOeahOW9ouW8j+WtmOWcqFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBUZWFjaGVyT3JDbGFzc0lkID0gLTE7ICAgICAgLy/pgInmi6nnmoTmlZnluIjmiJbnj63nuqdJRFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBUZWFjaGVyT3JDbGFzc05hbWUgPSBcIlwiOyAgICAgIC8v6YCJ5oup55qE5pWZ5biI5oiW54+t57qn5ZCN56ewXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcEN1cmVudExlc3NvbklkID0gMDsgICAgICAgICAgICAgIC8v5L+u5pS55oiW5re75Yqg55qE6K++56iL5ZSv5LiASURcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wQ3VycmVudFNlbGVjdFN1YmplY3QgPSBcIi0xXCI7ICAgICAvL+a3u+WKoOaXtumAieaLqeeahOenkeebrklEXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcEN1cnJlbnRTZWxlY3RCaWdHcmFkZSA9IFwiLTFcIjsgICAgLy/mt7vliqDml7bpgInmi6nnmoTlpKflubTnuqdcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wQ3VycmVudFNlbGVjdFN1YmplY3REZXNjID0gXCJcIjsgICAgIC8v5re75Yqg5pe26YCJ5oup55qE56eR55uuSURcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wQ3VycmVudFNlbGVjdEJpZ0dyYWRlRGVzYyA9IFwiXCI7ICAgIC8v5re75Yqg5pe26YCJ5oup55qE5aSn5bm057qnXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcEN1cnJlbnRTZWxlY3RDbGFzc1R5cGUgPSAxOyAgICAvL+a3u+WKoOaXtumAieaLqeeahOePree6p+exu+Wei1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2U3R1ZGVudExlc3Nvbkxpc3RcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLkRhdGEgPT0gLTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUG9wdUNsaWVudC5Qb3BUaXBTaG93KFwi6YCJ5oup55qE54+t57qn5LiL77yM5rKh5pyJ5oyH5a6a56eR55uu5oyH5a6a5aSn5bm057qn55qE6ICB5biI5L+h5oGv77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvcHVDbGllbnQuUG9wVGlwU2hvdyhcIueuoeeQhuaIluWIhumFjeiAgeW4iOWksei0pe+8gVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBQb3B1Q2xpZW50LlBvcFRpcFNob3coZGF0YS5SZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v562b6YCJ5a2m55Sf77yM5YyF5ZCr5pCc57Si5ZKM6KGo5qC85LiL5ouJ5qGG5L+u5pS5XHJcbmZ1bmN0aW9uIFNlYXJjaFN0dWRlbnQoKSB7XHJcbiAgICBjdXJyZW50U2VhcmNoV29yZCA9ICQoXCIjdHh0U2VhcmNoU3R1ZGVudFwiKS52YWwoKTtcclxuICAgIEdldFN0dWRlbnRMaXN0KCk7XHJcbn1cclxuXHJcbi8v6YCa6L+H5aSN6YCJ5qGG77yM5Yu+6YCJ5Y675Y+W5raI5Yu+6YCJ55So5oi3XHJcbmZ1bmN0aW9uIFNlbGV0ZWRVc2VySW5mbygpIHtcclxuICAgIHZhciB0ZW1wVXNlcklkID0gJCh0aGlzKS5hdHRyKFwidXNlcklkXCIpO1xyXG4gICAgdmFyIHRlbXBVc2VyTmFtZSA9ICQodGhpcykuYXR0cihcInVzZXJOYW1lXCIpO1xyXG4gICAgdmFyIHRlbXBVc2VyQWNjb3VudCA9ICQodGhpcykuYXR0cihcInVzZXJBY2NvdW50XCIpO1xyXG4gICAgdmFyIHRlbXBVc2VySW5mbyA9IHsgXCJVc2VySWRcIjogdGVtcFVzZXJJZCwgXCJVc2VyTmFtZVwiOiB0ZW1wVXNlck5hbWUsIFwiVXNlckFjY291bnRcIjogdGVtcFVzZXJBY2NvdW50IH07XHJcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgIHRlbXBVc2VyTGlzdC5wdXNoKHRlbXBVc2VySW5mbyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciB0ZW1wSW5kZXggPSAtMTtcclxuICAgICAgICAkLmVhY2godGVtcFVzZXJMaXN0LCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5Vc2VySWQgPT0gdGVtcFVzZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgdGVtcEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGVtcEluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgdGVtcFVzZXJMaXN0LnNwbGljZSh0ZW1wSW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy/mmL7npLrmibnph4/nu63otLnnqpflj6NcclxuZnVuY3Rpb24gU2hvd1JlbmV3QXJlYShldmVudCkge1xyXG4gICAgaWYgKGV2ZW50ID09IDApIHtcclxuICAgICAgICAkKFwiI2g1QWNjb3V0UmVuZXdcIikuaHRtbChcIui0puWPt+e7rei0uSAgICAgICAgPGltZyBpZD1cXFwiaW1nQWNjb3VudFJlbmV3XFxcIiBzcmM9XFxcIkBCYXNlQ29uZmlnLkltZ1VybC9idW5kbGUvaW1nL2Nsb3NlLnBuZ1xcXCIgY2xhc3M9XFxcInBvcGNsb3NlIGN1cnNvclxcXCI+XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2g1QWNjb3V0UmVuZXdcIikuaHRtbChcIui0puWPt+a/gOa0uyAgICAgICAgPGltZyBpZD1cXFwiaW1nQWNjb3VudFJlbmV3XFxcIiBzcmM9XFxcIkBCYXNlQ29uZmlnLkltZ1VybC9idW5kbGUvaW1nL2Nsb3NlLnBuZ1xcXCIgY2xhc3M9XFxcInBvcGNsb3NlIGN1cnNvclxcXCI+XCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRlbXBVc2VyTGlzdCAhPSBudWxsICYmIHRlbXBVc2VyTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy/nu63otLnnsbvlnotcclxuICAgICAgICB2YXIgcmVuZXdUeXBlRmxhZ3MgPSAtMTtcclxuICAgICAgICAkKFwiI2ltZ0FjY291bnRSZW5ld1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIjZGl2QWNjb3VudFJlbmV3XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5pi+56S65a2m55Sf5YiX6KGo5Y+K5om55qyh5YiX6KGoXHJcbiAgICAgICAgdmFyIHRlbXBSZW5ld1VzZXJUcGwgPSByZXF1aXJlKFwiT3JnVXNlci9yZW5ld3N0dWRlbnRsaXN0LnRwbFwiKTtcclxuICAgICAgICAkKFwiI3VsUmVuZXdVc2VyTGlzdFwiKS5odG1sKHRlbXBSZW5ld1VzZXJUcGwodGVtcFVzZXJMaXN0KSk7XHJcbiAgICAgICAgJChcIiN1bFJlbmV3VXNlckxpc3QgPmxpPmlbbmFtZT0nc3BSZW5ld0RlbGV0ZVVzZXInXVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgdmFyIHRlbXBVc2VySWQgPSAkKHRoaXMpLmF0dHIoXCJ1c2VySWRcIik7XHJcbiAgICAgICAgICAgICQuZWFjaCh0ZW1wVXNlckxpc3QsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5Vc2VySWQgPT0gdGVtcFVzZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHRlbXBJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wVXNlckxpc3Quc3BsaWNlKHRlbXBJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRlbXBVc2VyTGlzdC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkaXZBY2NvdW50UmVuZXdcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aYvuekuuaJueasoeWIl+ihqFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL09yZy9Db21tb25NYW5hZ2UvR2V0QmF0Y2hMaXN0XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBCTGlzdCA9IGRhdGEuRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGVtcEJMaXN0ICE9IG51bGwgfHwgdGVtcEJMaXN0ICE9IHVuZGVmaW5lZCB8fCB0ZW1wQkxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHBTdHVkZW50Qkxpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wQkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cEJJbmZvID0gdGVtcEJMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRwQkluZm8uQWNjb3VudFR5cGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRwU3R1ZGVudEJMaXN0LnB1c2godHBCSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBCYXRjaFRwbCA9IHJlcXVpcmUoXCJPcmcvYmF0Y2hzbGlzdC50cGxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdWxSZW5ld0JhdGNoTGlzdFwiKS5odG1sKHRlbXBCYXRjaFRwbCh0cFN0dWRlbnRCTGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5ld1R5cGVGbGFncyA9IGV2ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+a3u+WKoOmAieS4reS6i+S7tlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wQmF0Y2hJZExpc3Quc3BsaWNlKDAsIHRlbXBCYXRjaElkTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3VsUmVuZXdCYXRjaExpc3QgaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtQklEID0gJCh0aGlzKS5hdHRyKFwiYmF0Y2hJZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEJhdGNoSWRMaXN0LnB1c2godGVtQklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBCYXRjaElkTGlzdC5pbmRleE9mKHRlbUJJRCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBCYXRjaElkTGlzdC5yZW1vdmUodGVtQklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiNidG5BY2NvdW50UmVuZXdcIikuY2xpY2socmVuZXdUeXBlRmxhZ3MsIE1vcmVBY3RpdmVPclJlbmV3KTtcclxuICAgICAgICAkKFwiI2RpdlJlbmV3VGlwXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI2RpdkFjY291bnRSZW5ld1wiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgUG9wdUNsaWVudC5Qb3BUaXBTaG93KFwi6K+36YCJ5oup57ut6LS555So5oi377yBXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+aJuemHj+a/gOa0u+aIluaJuemHj+e7rei0uVxyXG4vL+WPguaVsO+8mm9wRmxhZ3PvvIwx5Li65r+A5rS777yMMOS4uue7rei0uVxyXG5mdW5jdGlvbiBNb3JlQWN0aXZlT3JSZW5ldyhvcEZsYWdzKSB7XHJcbiAgICBpZiAodGVtcFVzZXJMaXN0ID09IG51bGwgfHwgdGVtcFVzZXJMaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgUG9wdUNsaWVudC5Qb3BUaXBTaG93KFwi6K+36YCJ5oup57ut6LS555So5oi377yBXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0ZW1wQmF0Y2hJZExpc3QgPT0gbnVsbCB8fCB0ZW1wQmF0Y2hJZExpc3QubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICBQb3B1Q2xpZW50LlBvcFRpcFNob3coXCLor7fpgInmi6nnu63otLnmibnmrKHvvIFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHRlbXBSZW5ld1VzZXJJZHMgPSBcIlwiO1xyXG4gICAgdmFyIHRlbXBSZW5ld0JhdGNoSWRzID0gXCJcIjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcFVzZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGVtcFJlbmV3VXNlcklkcyArPSB0ZW1wVXNlckxpc3RbaV0uVXNlcklkICsgXCIsXCI7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBCYXRjaElkTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRlbXBSZW5ld0JhdGNoSWRzICs9IHRlbXBCYXRjaElkTGlzdFtpXSArIFwiLFwiO1xyXG4gICAgfVxyXG4gICAgLy/or7fmsYLotKblj7for6bmg4VcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmcvU3R1ZGVudE1hbmFnZS9SZW5ld09yQWN0aXZlU3R1ZGVudHNcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZHM6IHRlbXBSZW5ld1VzZXJJZHMsXHJcbiAgICAgICAgICAgIGJhdGNoSURzOiB0ZW1wUmVuZXdCYXRjaElkcyxcclxuICAgICAgICAgICAgcmVuZXdUeXBlOiByZW5ld1R5cGVGbGFnc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvL2RlYnVnZ2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuT0spIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZGl2QWNjb3VudFJlbmV3XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFBvcHVDbGllbnQuUG9wVGlwU2hvdyhcIue7rei0ueaIkOWKn++8gVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUG9wdUNsaWVudC5Qb3BUaXBTaG93KFwi57ut6LS55aSx6LSl77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuQ29kZSA9PSBcIjExLTAxNFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZSZW5ld1RpcCA+ZGl2XCIpLmh0bWwoXCLmgqjliJvlu7rnmoTlrabnlJ/otKblj7flt7Lovr7kuIrpmZDvvIzor7fogZTns7vmiJHku6zotK3kubDvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZSZW5ld1RpcFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/mmL7npLrmt7vliqDlrabnlJ/lvLnlh7rmoYZcclxuZnVuY3Rpb24gU2hvd0FkZFN0dWRlbnRBcmVhKCkge1xyXG4gICAgJChcIiNpbWdBZGRTdHVkZW50Q2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjZGl2QWRkU3R1ZGVudFwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiNidG5BZGRTdHVkZW50U3VibWl0XCIpLmNsaWNrKEFkZFN0dWRlbnRTdWJtaXQpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL09yZy9Db21tb25NYW5hZ2UvR2V0QmF0Y2hMaXN0XCIsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvL2RlYnVnZ2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuT0spIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLkRhdGEgIT0gbnVsbCAmJiBkYXRhLkRhdGEgIT0gdW5kZWZpbmVkICYmIGRhdGEuRGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhdGNoTGlzdCA9IGRhdGEuRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFN0dWRlbnRCYXRjaExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhdGNoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmF0Y2hMaXN0W2ldLkFjY291bnRUeXBlID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBTdHVkZW50QmF0Y2hMaXN0LnB1c2goYmF0Y2hMaXN0W2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmF0Y2hMaXN0VHBsID0gcmVxdWlyZShcIk9yZy9iYXRjaHNsaXN0LnRwbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3VsQWRkU3R1QmF0Y2hMaXN0XCIpLmh0bWwoYmF0Y2hMaXN0VHBsKHRlbXBTdHVkZW50QmF0Y2hMaXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDpgInkuK3kuovku7ZcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3VsQWRkU3R1QmF0Y2hMaXN0IGlucHV0W3R5cGU9J2NoZWNrYm94J11cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtQklEID0gJCh0aGlzKS5hdHRyKFwiYmF0Y2hJZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBCYXRjaElkTGlzdC5wdXNoKHRlbUJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcEJhdGNoSWRMaXN0LmluZGV4T2YodGVtQklEKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wQmF0Y2hJZExpc3QucmVtb3ZlKHRlbUJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvL+a/gOa0u+S4juaaguS4jea/gOa0u+eKtuaAgVxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2QWN0aXZlQWNjb3VudCBpbnB1dFtuYW1lPSdpc0FjdGl2ZSddXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEFjdGl2ZVN0YXR1cyA9IHBhcnNlSW50KCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2QWRkU3R1ZGVudFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vdmFyIGh0bWwgPSAnPHRyIGNsYXNzPVwiZm9udDEyXCI+PHRkIGNvbHNwYW49ND4nICsgZGF0YS5SZXN1bHQgKyAnPC90ZD48L3RyPic7XHJcbiAgICAgICAgICAgICAgICAvLyQoXCIjaWRUYWJsZUNsYXNzIHRib2R5XCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/mt7vliqDlrabnlJ9cclxuZnVuY3Rpb24gQWRkU3R1ZGVudFN1Ym1pdCgpIHtcclxuICAgIHZhciB0ZW1wVXNlck5hbWUgPSAkKFwiI3R4dFN0dWRlbnROYW1lXCIpLnZhbCgpO1xyXG4gICAgaWYgKHRlbXBVc2VyTmFtZSA9PSBudWxsIHx8IHRlbXBVc2VyTmFtZSA9PSB1bmRlZmluZWQgfHwgdGVtcFVzZXJOYW1lID09IFwiXCIpIHtcclxuICAgICAgICAkKFwiI2RpdkVycm9yU3R1TmFtZVRpcFwiKS5odG1sKFwi5a2m55Sf5aeT5ZCN5LiN6IO95Li656m6IVwiKTtcclxuICAgICAgICAkKFwiI2RpdkVycm9yU3R1TmFtZVRpcFwiKS5zaG93KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmICh0ZW1wVXNlck5hbWUubGVuZ3RoID4gOCkge1xyXG4gICAgICAgICQoXCIjZGl2RXJyb3JTdHVOYW1lVGlwXCIpLmh0bWwoXCLlrabnlJ/lp5PlkI3kuI3og73otoXov4c45L2NIVwiKTtcclxuICAgICAgICAkKFwiI2RpdkVycm9yU3R1TmFtZVRpcFwiKS5zaG93KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2RpdkVycm9yU3R1TmFtZVRpcFwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgdGVtcFN0dVBob25lID0gJChcIiN0eHRTdHVkZW50UGhvbmVcIikudmFsKCk7XHJcbiAgICB2YXIgbXlyZWcgPSAvXigoKDEzWzAtOV17MX0pfCgxNVswLTldezF9KXwoMThbMC05XXsxfSkpK1xcZHs4fSkkLztcclxuICAgIGlmICghbXlyZWcudGVzdCh0ZW1wQWRkVXNlclBob25lKSkge1xyXG4gICAgICAgICQoXCIjZGl2RXJyb3JTdHVQaG9uZVRpcFwiKS5odG1sKFwi6K+36L6T5YWl5pyJ5pWI55qE5omL5py65Y+356CBOOS9je+8gVwiKTtcclxuICAgICAgICAkKFwiI2RpdkVycm9yU3R1UGhvbmVUaXBcIikuc2hvdygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGVtcEVtYWlsQWRkciA9ICQoXCJ0eHRTdHVkZW50RW1haWxcIikudmFsKCk7XHJcbiAgICAvL+mqjOivgemCrueusVxyXG4gICAgaWYgKHRlbXBFbWFpbEFkZHIgIT0gXCJcIiAmJiB0ZW1wRW1haWxBZGRyICE9IG51bGwgJiYgdGVtcEVtYWlsQWRkciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoL14oW2EtekEtWjAtOV0rW198X3wuXT8pKlthLXpBLVowLTldK0AoW2EtekEtWjAtOV0rW198X3wuXT8pKlthLXpBLVowLTldK1xcLig/OmNvbXxjbikkLy50ZXN0KHRlbXBFbWFpbEFkZHIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjZGl2RXJyb3JTdHVFbWFpbFRpcFwiKS5oaWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkaXZFcnJvclN0dUVtYWlsVGlwXCIpLmh0bWwoXCLpgq7nrrHmoLzlvI/kuI3mraPnoa7vvIFcIik7XHJcbiAgICAgICAgICAgICQoXCIjZGl2RXJyb3JTdHVFbWFpbFRpcFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjZGl2RXJyb3JTdHVFbWFpbFRpcFwiKS5odG1sKFwi6YKu566x5LiN6IO95Li656m677yBXCIpO1xyXG4gICAgICAgICQoXCIjZGl2RXJyb3JTdHVFbWFpbFRpcFwiKS5zaG93KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHRlbXBCYXRjaElkcyA9IFwiXCI7XHJcbiAgICBpZiAodGVtcEFjdGl2ZVN0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgaWYgKHRlbXBCYXRjaElkTGlzdCAhPSBudWxsICYmIHRlbXBCYXRjaElkTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcEJhdGNoSWRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wQmF0Y2hJZHMgKz0gdGVtcEJhdGNoSWRMaXN0W2ldICsgXCIsXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBQb3B1Q2xpZW50LlBvcFRpcFNob3coXCLnq4vljbPmv4DmtLvml7bmibnmrKHkuI3og73kuLrnqbrvvIFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnVXNlci9TdHVkZW50TWFuYWdlL0FkZFN0dWRlbnRcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiB0ZW1wVXNlck5hbWUsXHJcbiAgICAgICAgICAgIHBob25lTnVtOiB0ZW1wU3R1UGhvbmUsXHJcbiAgICAgICAgICAgIGVtYWlsQWRkcjogdGVtcEVtYWlsQWRkcixcclxuICAgICAgICAgICAgYWN0aXZlU3RhdHVzOiB0ZW1wQWN0aXZlU3RhdHVzLFxyXG4gICAgICAgICAgICBiYXRjaElkczogdGVtcEJhdGNoSWRzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vZGVidWdnZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5PSykge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkaXZBZGRTdHVkZW50XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuRGF0YSAhPSBudWxsICYmIGRhdGEuRGF0YSAhPSB1bmRlZmluZWQgJiYgZGF0YS5EYXRhICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2RpdkNyZWF0ZVJlc3VsdERlc2NcIikucmVtb3ZlQ2xhc3MoXCJzdWNjZXNzLWJnXCIpLmFkZENsYXNzKFwic3VjY2Vzcy1iZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2RpdkNyZWF0ZVJlc3VsdERlc2NcIikuaHRtbChcIua3u+WKoOaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2RpdkNyZWF0ZVN1Y2Nlc3NUaXBcIikuaHRtbChcIuaBreWWnOaCqO+8geaIkOWKn+WIm+W7uuW5tua/gOa0u+WtpueUn+i0puWPt1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2RpdlN0dUFjY291bnRcIikuaHRtbChcIui0puWPt++8mlwiICsgZGF0YS5EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2RpdkNyZWF0ZVN1Y2Nlc3NUaXBcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2U3R1QWNjb3VudFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2Q3JlYXRlUmVzdWx0RGVzY1wiKS5yZW1vdmVDbGFzcyhcInN1Y2Nlc3MtYmdcIikuYWRkQ2xhc3MoXCJzdWNjZXNzLWJnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2Q3JlYXRlUmVzdWx0RGVzY1wiKS5odG1sKFwi5re75Yqg5aSx6LSl77yM6K+356iN5ZCO5YaN6K+V77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2Q3JlYXRlU3VjY2Vzc1RpcFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZTdHVBY2NvdW50XCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLkNvZGUgPT0gXCIxMS0wMTRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2Tm9BY2NvdW50VGlwXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZOb0FjY291bnRUaXBcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2Q3JlYXRlUmVzdWx0RGVzY1wiKS5yZW1vdmVDbGFzcyhcInN1Y2Nlc3MtYmdcIikuYWRkQ2xhc3MoXCJzdWNjZXNzLWJnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2Q3JlYXRlUmVzdWx0RGVzY1wiKS5odG1sKFwi5re75Yqg5aSx6LSl77yM6K+356iN5ZCO5YaN6K+V77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2Q3JlYXRlU3VjY2Vzc1RpcFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZTdHVBY2NvdW50XCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKFwiI2RpdkNyZWF0ZUFjY291bnRTdWNjZXNzXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAkKFwiI2J0bkNyZWF0ZVJlc3VsdFN1Ym1pdFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2RpdkNyZWF0ZUFjY291bnRTdWNjZXNzXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2VJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZVNpemUgPSAxMDtcclxuICAgICAgICAgICAgICAgIEdldFN0dWRlbnRMaXN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+aYvuekuuWtpueUn+i0puWPt+ivpuaDheW8ueWHuuahhlxyXG5mdW5jdGlvbiBTaG93QWNjb3VudERldGFpbHNBcmVhKCkge1xyXG4gICAgJChcIiNpbWdTdHVBY2NEZXRhaWxzQ2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjZGl2U3R1QWNjb3VudERldGFpbHNcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICB9KTtcclxuICAgICQoXCIjYnRuU3R1QWNjRGV0YWlsc1N1Ym1pdFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNkaXZTdHVBY2NvdW50RGV0YWlsc1wiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG4gICAgLy/or7fmsYLotKblj7for6bmg4VcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmcvQ29tbW9uTWFuYWdlL0dldEJhdGNoTGlzdFwiLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcEJMaXN0ID0gZGF0YS5EYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBCTGlzdCAhPSBudWxsIHx8IHRlbXBCTGlzdCAhPSB1bmRlZmluZWQgfHwgdGVtcEJMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHBTdHVkZW50Qkxpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBCTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHBCSW5mbyA9IHRlbXBCTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRwQkluZm8uQWNjb3VudFR5cGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHBTdHVkZW50Qkxpc3QucHVzaCh0cEJJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEJhdGNoVHBsID0gcmVxdWlyZShcIk9yZy9hY2NvdW50ZGV0YWlsc2xpc3QudHBsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdGJBY2NvdW50RGVhdGFpbHMgPnRib2R5XCIpLmh0bWwodGVtcEJhdGNoVHBsKHRwU3R1ZGVudEJMaXN0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKFwiI2RpdlN0dUFjY291bnREZXRhaWxzXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG59XHJcblxyXG4vL+aYvuekuuWtpueUn+ivpuaDhemhtemdolxyXG5mdW5jdGlvbiBTaG93U3R1ZGVudERldGFpbFBhZ2UoKSB7XHJcbiAgICB2YXIgdGVtcFN0dUlkID0gJCh0aGlzKS5hdHRyKFwic3R1ZGVudElkXCIpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9PcmdVc2VyL1N0dWRlbnRNYW5hZ2UvU3R1ZGVudERldGFpbHNJbmZvP3N0dWRlbnRJZD1cIiArIHRlbXBTdHVJZDtcclxufVxyXG5cclxuLy/nrZvpgInlrabnlJ/nsbvlnovkuovku7ZcclxuZnVuY3Rpb24gRmlsdGVyU3R1ZGVudFR5cGUoKSB7XHJcbiAgICBpZiAoJChcIiNzZWxlY3RTdHVkZW50RmlsdGVyXCIpICE9IG51bGwgJiYgJChcIiNzZWxlY3RTdHVkZW50RmlsdGVyXCIpICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICQoXCIjc2VsZWN0U3R1ZGVudEZpbHRlclwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdGVtcFNlbGVjdGVkID0gJChcIiNzZWxlY3RTdHVkZW50RmlsdGVyIG9wdGlvbjpzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgY3VycmVudFN0dVR5cGUgPSBwYXJzZUludCh0ZW1wU2VsZWN0ZWQudmFsKCkpO1xyXG4gICAgICAgICAgICBHZXRTdHVkZW50TGlzdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIC8v5Yid5aeL5YyW5a2m55Sf5YiX6KGoXHJcbiAgICBHZXRTdHVkZW50TGlzdCgpO1xyXG4gICAgLy/moLnmja7lrabnlJ/nsbvlnovnrZvpgIlcclxuICAgIEZpbHRlclN0dWRlbnRUeXBlKCk7XHJcbiAgICAvL+aQnOe0oue7keWumuS6i+S7tlxyXG4gICAgJChcIiNzcFNlYXJjaFdvcmRcIikuY2xpY2soU2VhcmNoU3R1ZGVudCk7XHJcbiAgICAkKFwiI3R4dFNlYXJjaFN0dWRlbnRcIikua2V5cHJlc3MoZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgU2VhcmNoU3R1ZGVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy/nu5HlrprmjInpkq7kuovku7ZcclxuICAgIGlmICgkKFwiI2J0bkFkZFN0dWRlbnRcIikgIT0gbnVsbCkge1xyXG4gICAgICAgICQoXCIjYnRuQWRkU3R1ZGVudFwiKS5jbGljayhTaG93QWRkU3R1ZGVudEFyZWEpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQoXCIjYnRuTW9yZVN0dWRlbnRSZW5ld1wiKSAhPSBudWxsKSB7XHJcbiAgICAgICAgJChcIiNidG5Nb3JlU3R1ZGVudFJlbmV3XCIpLmNsaWNrKDAsIFNob3dSZW5ld0FyZWEpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQoXCIjYnRuTW9yZVN0dWRlbnRBY3RpdmVcIikgIT0gbnVsbCkge1xyXG4gICAgICAgICQoXCIjYnRuTW9yZVN0dWRlbnRBY3RpdmVcIikuY2xpY2soMSwgU2hvd1JlbmV3QXJlYSk7XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvanMvT3JnVXNlci9zdHVkZW50bWFuYWdlLmpzXG4gKiogbW9kdWxlIGlkID0gOTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzhcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmdVc2VyL2FsbHN0dWRlbnRsaXN0JyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlYWNoPSR1dGlscy4kZWFjaCxTY2hvb2xMaXN0PSRkYXRhLlNjaG9vbExpc3QsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsU3R1ZGVudEluZm9MaXN0PSRkYXRhLlN0dWRlbnRJbmZvTGlzdCwkb3V0PScnOyRvdXQrPScgPHRoZWFkPiA8dHI+IDx0aD7lp5PlkI08L3RoPiA8dGg+6LSm5Y+3PC90aD4gPHRoPiA8c2VsZWN0IGNsYXNzPVwic2VsZWN0XCIgaWQ9XCJzZWxlY3RDbGFzc1R5cGVcIj4gPG9wdGlvbiB2YWx1ZT1cIi0xXCI+57G75Z6LPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIxXCI+MeWvuTE8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjBcIj7nj63or748L29wdGlvbj4gPC9zZWxlY3Q+IDwvdGg+IDx0aD7lrabnrqE8L3RoPiA8dGg+IDxzZWxlY3QgY2xhc3M9XCJzZWxlY3RcIiBpZD1cInNlbGVjdFNjaG9vbElkXCI+IDxvcHRpb24gdmFsdWU9XCItMVwiPuagoeWMujwvb3B0aW9uPiAnO1xuJGVhY2goU2Nob29sTGlzdCxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPG9wdGlvbiB2YWx1ZT1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5PcmdJRCk7XG4kb3V0Kz0nXCI+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLk9yZ05hbWUpO1xuJG91dCs9Jzwvb3B0aW9uPiAnO1xufSk7XG4kb3V0Kz0nIDwvc2VsZWN0PiA8L3RoPiA8dGg+5pON5L2cPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiAnO1xuJGVhY2goU3R1ZGVudEluZm9MaXN0LGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8dHI+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU3R1ZGVudE5hbWUpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU3R1ZGVudEFjY291bnQpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQ2xhc3NUeXBlRGVzYyk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5NYW5hZ2VyTmFtZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TY2hvb2xOYW1lKTtcbiRvdXQrPSc8L3RkPiA8dGQ+IDxzcGFuIGNsYXNzPVwic2VlLWJ0blwiIG5hbWU9XCJidG5WaWV3U3R1RGV0YWlsc1wiIHN0dWRlbnRJZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdHVkZW50SUQpO1xuJG91dCs9J1wiPuafpeecizwvc3Bhbj4gPC90ZD4gPC90cj4gJztcbn0pO1xuJG91dCs9JyA8L3Rib2R5PiAnO1xucmV0dXJuIG5ldyBTdHJpbmcoJG91dCk7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL3RwbC9PcmdVc2VyL2FsbHN0dWRlbnRsaXN0LnRwbFxuICoqIG1vZHVsZSBpZCA9IDkxXG4gKiogbW9kdWxlIGNodW5rcyA9IDM4XG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnVXNlci9zY2hvb2xzdHVsaXN0bGlzdCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsU3R1ZGVudExpc3Q9JGRhdGEuU3R1ZGVudExpc3QsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nIDx0aGVhZD4gPHRyPiA8dGg+5aeT5ZCNPC90aD4gPHRoPui0puWPtzwvdGg+IDx0aD4gPHNlbGVjdCBjbGFzcz1cInNlbGVjdFwiIGlkPVwic2VsZWN0Q2xhc3NUeXBlXCI+IDxvcHRpb24gdmFsdWU9XCItMVwiPuexu+Weizwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMVwiPjHlr7kxPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIwXCI+54+t6K++PC9vcHRpb24+IDwvc2VsZWN0PiA8L3RoPiA8dGg+5a2m566hPC90aD4gPHRoPuaTjeS9nDwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gJztcbiRlYWNoKFN0dWRlbnRMaXN0LGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8dHI+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU3R1ZGVudE5hbWUpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU3R1ZGVudEFjY291bnQpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQ2xhc3NUeXBlRGVzYyk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5NYW5hZ2VyTmFtZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPiA8c3BhbiBjbGFzcz1cInNlZS1idG5cIiBuYW1lPVwiYnRuVmlld1N0dURldGFpbHNcIiBzdHVkZW50SWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU3R1ZGVudElEKTtcbiRvdXQrPSdcIj7mn6XnnIs8L3NwYW4+IDwvdGQ+IDwvdHI+ICc7XG59KTtcbiRvdXQrPScgPC90Ym9keT4gJztcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy90cGwvT3JnVXNlci9zY2hvb2xzdHVsaXN0bGlzdC50cGxcbiAqKiBtb2R1bGUgaWQgPSA5MlxuICoqIG1vZHVsZSBjaHVua3MgPSAzOFxuICoqLyIsInZhciB0ZW1wbGF0ZT1yZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdPcmcvdHBsL09yZ1VzZXIvbWFuYWdlcnN0dWxpc3QnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLFN0dWRlbnRMaXN0PSRkYXRhLlN0dWRlbnRMaXN0LCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRvdXQ9Jyc7JG91dCs9JyA8dGhlYWQ+IDx0cj4gPHRoPuWnk+WQjTwvdGg+IDx0aD7otKblj7c8L3RoPiA8dGg+IDxzZWxlY3QgY2xhc3M9XCJzZWxlY3RcIiBpZD1cInNlbGVjdEFjdGl2ZVN0YXR1c1wiPiA8b3B0aW9uIHZhbHVlPVwiLTFcIj7mv4DmtLvnirbmgIE8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjFcIj7lt7Lmv4DmtLs8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjBcIj7mnKrmv4DmtLs8L29wdGlvbj4gPC9zZWxlY3Q+IDwvdGg+IDx0aD4gPHNlbGVjdCBjbGFzcz1cInNlbGVjdFwiIGlkPVwic2VsZWN0RXhwaXJlRGF5c1wiPiA8b3B0aW9uIHZhbHVlPVwiLTFcIj7liLDmnJ/ml7bpl7Q8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjE1XCI+5YmpMTXlpKnliLDmnJ88L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjMwXCI+5YmpMzDlpKnliLDmnJ88L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjBcIj7lt7LliLDmnJ88L29wdGlvbj4gPC9zZWxlY3Q+IDwvdGg+IDx0aD7liJvlu7rml7bpl7Q8L3RoPiA8dGg+5pON5L2cPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiAnO1xuJGVhY2goU3R1ZGVudExpc3QsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDx0cj4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdHVkZW50TmFtZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdHVkZW50QWNjb3VudCk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5BY3RpdmVTdGF0dXNEZXNjKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkV4cGlyZVRpbWUpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQ3JlYXRlVGltZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPiAnO1xuaWYoJHZhbHVlLk1hbmFnZXJJZCA+IDApe1xuJG91dCs9JyA8c3BhbiBjbGFzcz1cInNlZS1idG4gbXI1IHc2OFwiIG5hbWU9XCJzcFNldFN0dU1hbmFnZXJcIiBzdHVkZW50SWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU3R1ZGVudElEKTtcbiRvdXQrPSdcIiBtYW5hZ2VySWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuTWFuYWdlcklkKTtcbiRvdXQrPSdcIj7kv67mlLnlrabnrqE8L3NwYW4+ICc7XG59ZWxzZXtcbiRvdXQrPScgPHNwYW4gY2xhc3M9XCJzZWUtYnRuIG1yNSB3NjhcIiBuYW1lPVwic3BTZXRTdHVNYW5hZ2VyXCIgc3R1ZGVudElkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlN0dWRlbnRJRCk7XG4kb3V0Kz0nXCIgbWFuYWdlcklkPVwiMFwiPuWIhumFjeWtpueuoTwvc3Bhbj4gJztcbn1cbiRvdXQrPScgPHNwYW4gY2xhc3M9XCJzZWUtYnRuXCIgbmFtZT1cImJ0blZpZXdTdHVEZXRhaWxzXCIgc3R1ZGVudElkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlN0dWRlbnRJRCk7XG4kb3V0Kz0nXCI+5p+l55yLPC9zcGFuPiA8L3RkPiA8L3RyPiAnO1xufSk7XG4kb3V0Kz0nIDwvdGJvZHk+ICc7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ1VzZXIvbWFuYWdlcnN0dWxpc3QudHBsXG4gKiogbW9kdWxlIGlkID0gOTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzhcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmdVc2VyL293bnN0dWRlbnRsaXN0JyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlYWNoPSR1dGlscy4kZWFjaCxTdHVkZW50TGlzdD0kZGF0YS5TdHVkZW50TGlzdCwkdmFsdWU9JGRhdGEuJHZhbHVlLCRpbmRleD0kZGF0YS4kaW5kZXgsJGVzY2FwZT0kdXRpbHMuJGVzY2FwZSwkb3V0PScnOyRvdXQrPScgPHRoZWFkPiA8dHI+IDx0aD4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhbGxcIiBjbGFzcz1cIm1pZGRsZSBtbDIwXCIgLz7lhajpgIkgPC90aD4gPHRoPuWnk+WQjTwvdGg+IDx0aD7otKblj7c8L3RoPiA8dGg+IDxzZWxlY3QgY2xhc3M9XCJzZWxlY3RcIiBpZD1cInNlbGVjdENsYXNzVHlwZVwiPiA8b3B0aW9uIHZhbHVlPVwiLTFcIj7nsbvlnos8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjFcIj4x5a+5MTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMFwiPuePreivvjwvb3B0aW9uPiA8L3NlbGVjdD4gPC90aD4gPHRoPiA8c2VsZWN0IGNsYXNzPVwic2VsZWN0XCIgaWQ9XCJzZWxlY3RCaWdHcmFkZVwiPiA8b3B0aW9uIHZhbHVlPVwiMFwiPuWtpuautTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwieFwiPuWwj+Wtpjwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiY1wiPuWIneS4rTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiZ1wiPumrmOS4rTwvb3B0aW9uPiA8L3NlbGVjdD4gPC90aD4gPHRoPuWtpuenkTwvdGg+IDx0aD7ogIHluIgv54+t57qnPC90aD4gPHRoPiA8c2VsZWN0IGNsYXNzPVwic2VsZWN0XCIgaWQ9XCJzZWxlY3RBY3RpdmVTdGF0dXNcIj4gPG9wdGlvbiB2YWx1ZT1cIi0xXCI+5r+A5rS754q25oCBPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIxXCI+5bey5r+A5rS7PC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIwXCI+5pyq5r+A5rS7PC9vcHRpb24+IDwvc2VsZWN0PiA8L3RoPiA8dGg+IDxzZWxlY3QgY2xhc3M9XCJzZWxlY3RcIiBpZD1cInNlbGVjdEV4cGlyZURheXNcIj4gPG9wdGlvbiB2YWx1ZT1cIi0xXCI+5Yiw5pyf5pe26Ze0PC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIxNVwiPuWJqTE15aSp5Yiw5pyfPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIzMFwiPuWJqTMw5aSp5Yiw5pyfPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIwXCI+5bey5Yiw5pyfPC9vcHRpb24+IDwvc2VsZWN0PiA8L3RoPiA8dGg+5pON5L2cPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiAnO1xuJGVhY2goU3R1ZGVudExpc3QsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDx0cj4gPHRkPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNrQ2hlY2tVc2VyXCIgY2xhc3M9XCJtaWRkbGUgbWwyMFwiIHVzZXJJZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdHVkZW50SUQpO1xuJG91dCs9J1wiIHVzZXJOYW1lPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlN0dWRlbnROYW1lKTtcbiRvdXQrPSdcIiB1c2VyQWNjb3VudD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdHVkZW50QWNjb3VudCk7XG4kb3V0Kz0nXCIgLz4gPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdHVkZW50TmFtZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdHVkZW50QWNjb3VudCk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5DbGFzc1R5cGVEZXNjKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkJpZ0dyYWRlRGVzYyk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdWJqZWN0RGVzYyk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5UZWFjaGVyRGVzYyk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5BY3RpdmVTdGF0dXNEZXNjKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkV4cGlyZVRpbWUpO1xuJG91dCs9JzwvdGQ+IDx0ZD4gJztcbmlmKCR2YWx1ZS5UZWFjaGVyRGVzYyAhPSBcIlwiKXtcbiRvdXQrPScgPHNwYW4gY2xhc3M9XCJzZWUtYnRuIG1yNSB3NjhcIiBuYW1lPVwic3BTZXRTdHVUZWFjaGVyXCIgc3R1ZGVudElkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlN0dWRlbnRJRCk7XG4kb3V0Kz0nXCI+566h55CGPC9zcGFuPiAnO1xufWVsc2V7XG4kb3V0Kz0nIDxzcGFuIGNsYXNzPVwic2VlLWJ0biBtcjUgdzY4XCIgbmFtZT1cInNwU2V0U3R1VGVhY2hlclwiIHN0dWRlbnRJZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdHVkZW50SUQpO1xuJG91dCs9J1wiPuWIhumFjTwvc3Bhbj4gJztcbn1cbiRvdXQrPScgPHNwYW4gY2xhc3M9XCJzZWUtYnRuXCIgbmFtZT1cImJ0blZpZXdTdHVEZXRhaWxzXCIgc3R1ZGVudElkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlN0dWRlbnRJRCk7XG4kb3V0Kz0nXCI+5p+l55yLPC9zcGFuPiA8L3RkPiA8L3RyPiAnO1xufSk7XG4kb3V0Kz0nIDwvdGJvZHk+ICc7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ1VzZXIvb3duc3R1ZGVudGxpc3QudHBsXG4gKiogbW9kdWxlIGlkID0gOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzhcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmdVc2VyL3N0dWR5bWFuYW5nZXJsaXN0JyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlYWNoPSR1dGlscy4kZWFjaCxTdHVkeU1hbmFnZXJMaXN0TW9kZWw9JGRhdGEuU3R1ZHlNYW5hZ2VyTGlzdE1vZGVsLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRvdXQ9Jyc7JG91dCs9JyAnO1xuJGVhY2goU3R1ZHlNYW5hZ2VyTGlzdE1vZGVsLGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8bGk+IDxsYWJlbD4gPGlucHV0IGNsYXNzPVwibXI1IG1pZGRsZVwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJkZXBhcnRtZW50LWl0ZW1cIiBtYW5hZ2VySWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU01hbmFnZXJJRCk7XG4kb3V0Kz0nXCI+IDxzcGFuPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TTWFuYWdlck5hbWUpO1xuJG91dCs9Jzwvc3Bhbj4gPHNwYW4+ICg8aSBjbGFzcz1cInJlZFwiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdHVkZW50Q291bnQpO1xuJG91dCs9JzwvaT7lkI3lrabnlJ8pIDwvc3Bhbj4gPC9sYWJlbD4gPC9saT4gJztcbn0pO1xuJG91dCs9JyAnO1xucmV0dXJuIG5ldyBTdHJpbmcoJG91dCk7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL3RwbC9PcmdVc2VyL3N0dWR5bWFuYW5nZXJsaXN0LnRwbFxuICoqIG1vZHVsZSBpZCA9IDk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDM4XG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnVXNlci9zdHVsZXNzb25saXN0JyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlYWNoPSR1dGlscy4kZWFjaCxTdHVMZXNzb25MaXN0PSRkYXRhLlN0dUxlc3Nvbkxpc3QsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaChTdHVMZXNzb25MaXN0LGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8dHIgbGVzc29uQ2xhc3NJZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Vc2VyQ2xhc3NTdHVkeUlkKTtcbiRvdXQrPSdcIj4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5DbGFzc1R5cGVEZXNjKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkJpZ0dyYWRlRGVzYyk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdWJqZWN0RGVzYyk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5DbGFzc05hbWUpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU3VycGx1c0NsYXNzSG91cik7XG4kb3V0Kz0nPC90ZD4gPHRkPiA8aSBjbGFzcz1cImR1c3RiaW5cIiBuYW1lPVwiYnRuRGVsZXRlTGVzc29uXCIgbGVzc29uSWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuVXNlckNsYXNzU3R1ZHlJZCk7XG4kb3V0Kz0nXCIgY291cnNlSWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQ291cnNlSUQpO1xuJG91dCs9J1wiIGNsYXNzSWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQ2xhc3NJZCk7XG4kb3V0Kz0nXCIgY2xhc3NUeXBlPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkNsYXNzVHlwZSk7XG4kb3V0Kz0nXCIgYmlnR3JhZGU9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQmlnR3JhZGUpO1xuJG91dCs9J1wiIHN1YmplY3RJZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdWJqZWN0SWQpO1xuJG91dCs9J1wiIHNtYWxsR3JhZGU9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuR3JhZGVJZCk7XG4kb3V0Kz0nXCI+PC9pPiA8L3RkPiA8L3RyPiAnO1xufSk7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ1VzZXIvc3R1bGVzc29ubGlzdC50cGxcbiAqKiBtb2R1bGUgaWQgPSA5NlxuICoqIG1vZHVsZSBjaHVua3MgPSAzOFxuICoqLyIsInZhciB0ZW1wbGF0ZT1yZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdPcmcvdHBsL09yZ1VzZXIvdXBkYXRlbGVzc29uZGF0YScsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZXNjYXBlPSR1dGlscy4kZXNjYXBlLENsYXNzVHlwZURlc2M9JGRhdGEuQ2xhc3NUeXBlRGVzYyxCaWdHcmFkZURlc2M9JGRhdGEuQmlnR3JhZGVEZXNjLFN1YmplY3REZXNjPSRkYXRhLlN1YmplY3REZXNjLFRpdGxlTmFtZT0kZGF0YS5UaXRsZU5hbWUsJGVhY2g9JHV0aWxzLiRlYWNoLFRlYWNoZXJPckNsYXNzTGlzdD0kZGF0YS5UZWFjaGVyT3JDbGFzc0xpc3QsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LFN1cnBsdXNDbGFzc0hvdXI9JGRhdGEuU3VycGx1c0NsYXNzSG91cixVc2VyQ2xhc3NTdHVkeUlkPSRkYXRhLlVzZXJDbGFzc1N0dWR5SWQsJG91dD0nJzskb3V0Kz0nIDxkaXYgY2xhc3M9XCJtYjE1XCI+IDxzcGFuPiDnsbvliKvvvJo8aSBjbGFzcz1cIm5vcm1hbFwiPjwvaT4nO1xuJG91dCs9JGVzY2FwZShDbGFzc1R5cGVEZXNjKTtcbiRvdXQrPScgPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIm1iMTUgb3ZlcmZsb3dcIj4gPHNwYW4gY2xhc3M9XCJwZXI0NSBsZWZ0XCI+IOWtpuaute+8mjxpIGNsYXNzPVwibm9ybWFsXCI+JztcbiRvdXQrPSRlc2NhcGUoQmlnR3JhZGVEZXNjKTtcbiRvdXQrPSc8L2k+IDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJwZXI0NSByaWdodFwiPiDlrabnp5HvvJo8aSBjbGFzcz1cIm5vcm1hbFwiPic7XG4kb3V0Kz0kZXNjYXBlKFN1YmplY3REZXNjKTtcbiRvdXQrPSc8L2k+IDwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XCJtYjE1IG92ZXJmbG93XCI+IDxkaXYgY2xhc3M9XCJ0ZWFjaGVyIHBlcjQ1IGxlZnRcIj4gPHNwYW4+JztcbiRvdXQrPSRlc2NhcGUoVGl0bGVOYW1lKTtcbiRvdXQrPSfvvJo8L3NwYW4+IDxzZWxlY3QgY2xhc3M9XCJzZWxldC10ZWFjaGVyXCIgaWQ9XCJzZWxlY3RUZWFjaGVyT3JDbGFzc1wiPiAnO1xuJGVhY2goVGVhY2hlck9yQ2xhc3NMaXN0LGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8b3B0aW9uIHZhbHVlPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlRlYWNoZXJJRCk7XG4kb3V0Kz0nXCI+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlRlYWNoZXJOYW1lKTtcbiRvdXQrPSc8L29wdGlvbj4gJztcbn0pO1xuJG91dCs9JyA8L3NlbGVjdD4gPC9kaXY+IDxkaXYgY2xhc3M9XCJzaWduLXVwIHBlcjQ1IHJpZ2h0XCI+IDxzcGFuPuetvue6pu+8mjwvc3Bhbj4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dC10aW1lXCIgaWQ9XCJ0eHRVcGRhdGVDbGFzc0hvdXJcIiB0ZXh0PVwiJztcbiRvdXQrPSRlc2NhcGUoU3VycGx1c0NsYXNzSG91cik7XG4kb3V0Kz0nXCIvPuivvuaXtiA8L2Rpdj4gPC9kaXY+IDxidXR0b24gY2xhc3M9XCJvay1idG4gcmlnaHRcIiBpZD1cImJ0blVwZGF0ZUxlc3NvbkluZm9cIiBsZXNzb25JZD1cIic7XG4kb3V0Kz0kZXNjYXBlKFVzZXJDbGFzc1N0dWR5SWQpO1xuJG91dCs9J1wiPuehruWumjwvYnV0dG9uPic7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ1VzZXIvdXBkYXRlbGVzc29uZGF0YS50cGxcbiAqKiBtb2R1bGUgaWQgPSA5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAzOFxuICoqLyIsInZhciB0ZW1wbGF0ZT1yZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdPcmcvdHBsL09yZ1VzZXIvYWRkbGVzc29uZGF0YScsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsU3ViamVjdExpc3Q9JGRhdGEuU3ViamVjdExpc3QsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsVGl0bGVOYW1lPSRkYXRhLlRpdGxlTmFtZSxTdXJwbHVzQ2xhc3NIb3VyPSRkYXRhLlN1cnBsdXNDbGFzc0hvdXIsVXNlckNsYXNzU3R1ZHlJZD0kZGF0YS5Vc2VyQ2xhc3NTdHVkeUlkLCRvdXQ9Jyc7JG91dCs9JyA8ZGl2IGNsYXNzPVwibWIxNVwiIGlkPVwiZGl2Q2xhc3NUeXBlQ2hvb3NlXCI+IDxzcGFuPuexu+WIq++8mjwvc3Bhbj4gPGxhYmVsIGNsYXNzPVwibXIxMCBjdXJzb3JcIj4gPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwibXI1XCIgbmFtZT1cInR5cGUtY2hvb3NlXCIgdmFsdWU9XCIxXCIvPiDkuIDlr7nkuIAgPC9sYWJlbD4gPGxhYmVsIGNsYXNzPVwiY3Vyc29yXCI+IDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cIm1yNVwiIG5hbWU9XCJ0eXBlLWNob29zZVwiIHZhbHVlPVwiMFwiLz4g54+t6K++IDwvbGFiZWw+IDwvZGl2PiA8ZGl2IGNsYXNzPVwidGVhY2hlciBwZXI0NSBsZWZ0XCI+IDxzcGFuPuWtpuaute+8mjwvc3Bhbj4gPHNlbGVjdCBjbGFzcz1cInNlbGV0LXRleHRcIiBpZD1cInNlbGVjdEFkZExlc3NvbkJpZ0dyYWRlXCI+IDxvcHRpb24gdmFsdWU9XCItMVwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj7pgInmi6nlrabmrrU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cInhcIj7lsI/lraY8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cImNcIj7liJ3kuK08L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cImdcIj7pq5jkuK08L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8ZGl2IGNsYXNzPVwic2lnbi11cCBwZXI0NSByaWdodFwiPiA8c3Bhbj7lrabnp5HvvJo8L3NwYW4+IDxzZWxlY3QgY2xhc3M9XCJzZWxldC10ZXh0XCIgaWQ9XCJzZWxlY3RBZGRMZXNzb25TdWJqZWN0XCI+IDxvcHRpb24gdmFsdWU9XCItMVwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj7pgInmi6nlrabnp5E8L29wdGlvbj4gJztcbiRlYWNoKFN1YmplY3RMaXN0LGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8b3B0aW9uIHZhbHVlPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlN1YmplY3RJZCk7XG4kb3V0Kz0nXCI+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlN1YmplY3REZXNjKTtcbiRvdXQrPSc8L29wdGlvbj4gJztcbn0pO1xuJG91dCs9JyA8L3NlbGVjdD4gPC9kaXY+IDxkaXYgY2xhc3M9XCJtYjE1IG92ZXJmbG93XCI+IDxkaXYgY2xhc3M9XCJ0ZWFjaGVyIHBlcjQ1IGxlZnRcIj4gPHNwYW4gaWQ9XCJkaXZUaXRsZVwiPic7XG4kb3V0Kz0kZXNjYXBlKFRpdGxlTmFtZSk7XG4kb3V0Kz0n77yaPC9zcGFuPiA8c2VsZWN0IGNsYXNzPVwic2VsZXQtdGVhY2hlclwiIGlkPVwic2VsZWN0VGVhY2hlck9yQ2xhc3NcIj4gPG9wdGlvbiB2YWx1ZT1cIi0xXCI+6YCJ5oupJztcbiRvdXQrPSRlc2NhcGUoVGl0bGVOYW1lKTtcbiRvdXQrPSc8L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8ZGl2IGNsYXNzPVwic2lnbi11cCBwZXI0NSByaWdodFwiPiA8c3Bhbj7nrb7nuqbvvJo8L3NwYW4+IDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQtdGltZVwiIGlkPVwidHh0QWRkQ2xhc3NIb3VyXCIgdGV4dD1cIic7XG4kb3V0Kz0kZXNjYXBlKFN1cnBsdXNDbGFzc0hvdXIpO1xuJG91dCs9J1wiLz7or77ml7YgPC9kaXY+IDwvZGl2PiA8YnV0dG9uIGNsYXNzPVwib2stYnRuIHJpZ2h0XCIgaWQ9XCJidG5BZGRMZXNzb25JbmZvXCIgbGVzc29uSWQ9XCInO1xuJG91dCs9JGVzY2FwZShVc2VyQ2xhc3NTdHVkeUlkKTtcbiRvdXQrPSdcIj7noa7lrpo8L2J1dHRvbj4nO1xucmV0dXJuIG5ldyBTdHJpbmcoJG91dCk7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL3RwbC9PcmdVc2VyL2FkZGxlc3NvbmRhdGEudHBsXG4gKiogbW9kdWxlIGlkID0gOThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzhcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmdVc2VyL3JlbmV3c3R1ZGVudGxpc3QnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLFVzZXJMaXN0TW9kZWw9JGRhdGEuVXNlckxpc3RNb2RlbCwkdmFsdWU9JGRhdGEuJHZhbHVlLCRpbmRleD0kZGF0YS4kaW5kZXgsJGVzY2FwZT0kdXRpbHMuJGVzY2FwZSwkb3V0PScnOyRvdXQrPScgJztcbiRlYWNoKFVzZXJMaXN0TW9kZWwsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDxsaT4g5a2m55Sf77yaPHNwYW4+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlVzZXJOYW1lKTtcbiRvdXQrPScgKCc7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Vc2VyQWNjb3VudCk7XG4kb3V0Kz0nKTwvc3Bhbj4gPGkgY2xhc3M9XCJkZWxlLWljb25cIiBuYW1lPVwic3BSZW5ld0RlbGV0ZVVzZXJcIiB1c2VySWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuVXNlcklkKTtcbiRvdXQrPSdcIj48L2k+IDwvbGk+ICc7XG59KTtcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy90cGwvT3JnVXNlci9yZW5ld3N0dWRlbnRsaXN0LnRwbFxuICoqIG1vZHVsZSBpZCA9IDk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDM4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==