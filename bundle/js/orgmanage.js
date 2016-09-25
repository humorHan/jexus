webpackJsonp([31,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(67);


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

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	var Paginator = __webpack_require__(8);
	var PopuClient = __webpack_require__(24);
	var currentLoginUserId = 0;    //当前登陆的用户ID
	var currentPageType = "0";    //0为所有员工，1为老师，2为咨询师
	var currentOrgId = "0";     //当前选中的校区/部门ID
	var currentOrgName = "";    //当前选中的校区/部门名称
	var currentOrgParentId = "0";      //当前选中的校区/部门父ID
	var currentOrgLevel = "0";      //当前选中的层级，1为校区，2为部门
	var currentPageIndex = 1;    //当前页码
	var currentRoleId = 0;    //当前选中的角色ID
	var currentExpireDays = -1;    //当前选择的过期时间长度
	var searchKeyWord = "";    //搜索关键字
	
	var globleOrgList = null;   //全局的组织结构数据集合
	
	//添加员工的临时数据
	var tempRoleList = new Array();   //创建用户选择的角色ID
	var tempBatchIdList = new Array();   //创建用户选择的批次ID
	var tempCheckSchoolId = 0;    //创建用户选择的校区ID
	var tempCheckDepartId = 0;    //创建用户选择的部门ID
	var tempAddUserName = "";        //创建用户填入的姓名
	var tempAddUserPhone = "";        //创建用户填入的电话
	var tempSubjectList = new Array();   //创建用户选择的科目编号
	var tempCurrentPopuName = "";      //创建用户时当前弹出的页面
	
	//账号续费临时数据
	var tempUserList = new Array();    //用户选择的续费ID列表，内部格式为{"UserId":1,"UserName":"张三","UserAccount":"18612345"}
	
	//初始化树
	function InitOrgTree() {
	    $.ajax({
	        type: "POST",
	        url: "/Org/BaseManage/GetOrgTreeList",
	        data: {},
	        dataType: "json",
	        //beforeSend: function (data) {
	        //    $("#idTableClass tbody").html('<tr class="font12"><td colspan="4">数据正在加载中...</td></tr>');
	        //},
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                var treelist = data.Data;
	                if (treelist != null && treelist != undefined) {
	                    globleOrgList = treelist;
	                    //查找机构信息
	                    var orgInfo = null;    //机构本身信息
	                    var schoolList = new Array();    //机构内的校区列表
	                    var departList = new Array();    //机构内的部门列表
	                    for (var i = 0; i < treelist.length; i++) {
	                        if (treelist[i].OrgLevel == 0) {
	                            orgInfo = treelist[i];
	                        } else if (treelist[i].OrgLevel == 1) {
	                            schoolList.push(treelist[i]);
	                        } else if (treelist[i].OrgLevel == 2) {
	                            departList.push(treelist[i]);
	                        }
	                    }
	                    //添加机构名称到顶层
	                    if (orgInfo != null && orgInfo != undefined) {
	                        $("#spanOrgName").html(orgInfo.OrgName);
	                        $("#divOrg").attr("orgId", orgInfo.OrgID);
	                        $("#divOrg").attr("parentId", orgInfo.ParentOrgID);
	                        $("#divOrg").attr("orgLevel", orgInfo.OrgLevel);
	                        $("#divOrg").click(ExpandSchool);
	                    } else {
	                        $("#spanOrgName").html("没有数据");
	                        $("#divOrg").attr("orgId", 0);
	                        $("#divOrg").attr("parentId", -1);
	                        $("#divOrg").attr("orgLevel", 0);
	                    }
	                    //添加校区菜单
	                    if (schoolList.length > 0) {
	                        for (var i = 0; i < schoolList.length; i++) {
	                            var tempElement = "<li name=\"liSchool\" class=\"org-item\" orgId=\"" + schoolList[i].OrgID + "\" parentId =\"" + schoolList[i].ParentOrgID + "\" orgLevel=\"" + schoolList[i].OrgLevel + "\" orgName=\"" + schoolList[i].OrgName + "\"><div class=\"org-item-content\"><span class=\"org-item-bg\"></span><span>" + schoolList[i].OrgName + "</span></div><div class=\"line\"></div><ul class=\"department font14\">";
	                            for (var j = 0; j < departList.length; j++) {
	                                tempElement += "<li name=\"liDepartment\" class=\"department-item\" orgId=\"" + departList[j].OrgID + "\" parentId =\"" + departList[j].ParentOrgID + "\" orgLevel=\"" + departList[i].OrgLevel + "\" orgName=\"" + departList[i].OrgName + "\">" + departList[j].OrgName + "<span class=\"delete hidden middle right\" name=\"spDeleteDepart\"></span></li>";
	                            }
	                            tempElement += "</ul></li>";
	                        }
	                        $("#ulSchoolArea").html(tempElement);
	                        //选中第一个校区的第一个部门
	                        $("[name='liSchool']:first").addClass("active");
	                        $("[name='liSchool']:first >ul>li:first").addClass("active");
	                        $("[name='liSchool']").click(ExpandSchool);
	                        $("[name='liDepartment']").click(ExpandSchool);
	                        $("[name='spDeleteDepart']").click(DeleteDepartment);
	                        //获取数据
	                        ExpandSchool();
	                    }
	                }
	            } else {
	                //var html = '<tr class="font12"><td colspan=4>' + data.Result + '</td></tr>';
	                //$("#idTableClass tbody").html(html);
	            }
	        }
	    });
	}
	
	//展开或者折叠校区信息
	function ExpandSchool(element) {
	    var tempObj = $(this);
	    var tempOrgLevel = tempObj.attr("orgLevel");
	    var tempOrgId = tempObj.attr("orgId");
	    var tempOrgParentId = tempObj.attr("parentId");
	    var tempOrgName = tempObj.attr("orgName");
	    if (tempOrgLevel != null && tempOrgLevel != undefined) {
	        if (tempOrgLevel == "1") {
	            //收起其他对象，展开当前对象
	            tempObj.siblings().removeClass("active");
	            $("[name='liSchool'] >ul>li").removeClass("active");
	            tempObj.addClass("active");
	            tempObj.children().find(">ul>li:first").addClass("active");
	        }
	        else if (tempOrgLevel == "2") {
	            tempObj.siblings().removeClass("active");
	            tempObj.addClass("active");
	        }
	        //点击获取列表中的数据
	        GetUserList(tempOrgId, tempOrgName, tempOrgParentId, tempOrgLevel);
	    }
	}
	
	//删除部门
	function DeleteDepartment() {
	    var tempObj = $(this).parent();
	    var tempOrgLevel = tempObj.attr("orgLevel");
	    var tempOrgId = tempObj.attr("orgId");
	    var tempOrgParentId = tempObj.attr("parentId");
	    var tempOrgName = tempObj.attr("orgName");
	    //如果是部门，则允许删除
	    if (tempOrgLevel != null && tempOrgLevel != undefined && tempOrgLevel == "2") {
	        $.ajax({
	            type: "POST",
	            url: "/Org/BaseManage/DeleteOrgDepartment",
	            data: {
	                departmentID: tempOrgId
	            },
	            dataType: "json",
	            error: function (data) {
	                //debugger;
	            },
	            success: function (data) {
	                if (data.OK) {
	                    if ($("#divDeleteDepartment").hasClass("hidden")) {
	
	                    } else {
	                        $("#divDeleteDepartment").addClass("hidden");
	                    }
	                } else {
	                    //查看是否是因为部门内有员工造成的删除失败
	                    if (data.Code == "11-008") {
	                        InitSchoolTreeList(tempOrgId);
	                        $("#imgDeletePartClose").click(function () {
	                            $("#divDeleteDepartment").addClass("hidden");
	                        });
	                        $("#divDeleteDepartment").removeClass("hidden");
	                    }
	                }
	            }
	        });
	    }
	}
	
	//初始化校区部门树菜单，主要在删除部门时使用
	function InitSchoolTreeList(departId) {
	    $.ajax({
	        type: "POST",
	        url: "/Org/CommonManage/GetOrgTreeByUserId",
	        data: {
	            departmentID: departId
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                if (data.Data != null && data.Data != undefined) {
	                    var schoolTreeTpl = __webpack_require__(68);
	                    $("#ulDeleteSchoolTree").html(schoolTreeTpl(data.Data));
	                    //添加选择部门事件
	                    var tempObj = { oldDepartId: departId };
	                    $("[name='department-item']").click(tempObj, SelectDeleteDepartment);
	                }
	            }
	        }
	    });
	}
	
	//选中要移动员工的部门或者校区
	function SelectDeleteDepartment(event) {
	    var tempOrgId = $(this).attr("orgId");
	    var tempParentId = $(this).attr("parentId");
	    var tempOrgLevel = $(this).attr("orgLevel");
	    var tempOldDepartId = event.oldDepartId;
	    $.ajax({
	        type: "POST",
	        url: "/Org/BaseManage/ChangeUserDepartment",
	        data: {
	            oldDepartID: tempOldDepartId,
	            newOrgId: tempOrgId,
	            orgType: tempOrgLevel
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                $.ajax({
	                    type: "POST",
	                    url: "/Org/BaseManage/DeleteOrgDepartment",
	                    data: {
	                        departmentID: tempOldDepartId
	                    },
	                    dataType: "json",
	                    error: function (data) {
	                        //debugger;
	                    },
	                    success: function (data) {
	                        if (data.OK) {
	                            $("#divDeleteDepartment").addClass("hidden");
	                            InitOrgTree();
	                        }
	                    }
	                });
	            }
	        }
	    });
	}
	
	//改变页码进行分页
	function ChangePageIndex(pageIndex) {
	    currentPageIndex = pageIndex;
	    GetUserList(currentOrgId, currentOrgName, currentOrgParentId, currentOrgLevel);
	}
	
	//获取机构下的用户列表
	function GetUserList(orgId, orgName, orgParentId, orgLevel) {
	    var tempOrgType = "1";
	    if (orgLevel == "1") {
	        tempOrgType = "1";
	    }
	    else if (orgLevel == "2") {
	        tempOrgType = "2";
	    }
	    $.ajax({
	        type: "POST",
	        url: "/Org/BaseManage/GetOrgUserList",
	        data: {
	            orgId: orgId,
	            orgName: orgName,
	            orgType: tempOrgType,
	            userType: currentPageType,
	            filterRoleId: currentRoleId,
	            filterExpireDay: currentExpireDays,
	            searchWord: searchKeyWord,
	            pageSize: 10,
	            pageNum: currentPageIndex
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                //设置部门名称显示
	                $("#divOrgName").html(orgName);
	                if (currentPageType == "0") {
	                    $("#spCanAddUserInfo").hide();
	                    $("#divTotalUserCountDesc").html("共计<i class=\"red\"> " + data.Data.UserTotalCount + " </i>名员工，禁用<i class=\"red\">" + data.Data.DisableCount + "</i>名");
	                    //隐藏到期时间列，显示角色列
	                    $("#thExpireTimeColumn").hide();
	                    $("#thRoleColumn").show();
	                    //添加角色列的数据
	                    if (data.Data.RoleList != null && data.Data.RoleList != undefined) {
	                        var tempLiString = "";
	                        for (var i = 0; i < data.Data.RoleList.length; i++) {
	                            var tempRoleInfo = data.Data.RoleList[i].split(",");
	                            if (tempRoleInfo != null && tempRoleInfo != undefined && tempRoleInfo.length > 1) {
	                                if (i == 0) {
	                                    tempLiString += "<li class=\"active\" roleId=\"0\">所有角色</li>";
	                                    tempLiString += "<li roleId=\"" + tempRoleInfo[0] + "\">" + tempRoleInfo[1] + "</li>";
	                                } else {
	                                    tempLiString += "<li roleId=\"" + tempRoleInfo[0] + "\">" + tempRoleInfo[1] + "</li>";
	                                }
	                            }
	                        }
	                        $("#ulRoleList").html(tempLiString);
	                        //添加点击事件
	                        $("#ulRoleList").click(function () {
	                            if ($("#ulRoleList").hasClass("hidden")) {
	                                $("#ulRoleList").removeClass("hidden");
	                            } else {
	                                $("#ulRoleList").addClass("hidden");
	                            }
	                        });
	                        $("#ulRoleList li").click(function () {
	                            if ($(this).hasClass("active")) {
	
	                            } else {
	                                $(this).siblings().removeClass("active");
	                                $(this).addClass("active");
	                                currentRoleId = parseInt($(this).attr("roleId"));
	                                //获取数据
	                                GetUserList(currentOrgId, currentOrgName, currentOrgParentId, currentOrgLevel);
	                            }
	                        });
	                    }
	                    //加载模板，显示列表数据
	                    if (data.Data.UserList != null && data.Data.UserList != undefined) {
	                        var userListTpl = __webpack_require__(69);
	                        $("#tableUserList >tbody").html(userListTpl(data.Data.UserList));
	                        //添加查看用户详情事件
	                        $("[name='btnShowUserDetails']").click(ShowUserDetails);
	                    }
	                } else {
	                    $("#spCanAddUserInfo").show();
	                    if (currentPageType == "1") {
	                        $("#spCanAddUserCountDesc").html("可添加老师账号<i class=\"red\"> " + data.Data.SurplusTeacherCount + " </i>个");
	                        $("#divTotalUserCountDesc").html("共计<i class=\"red\"> " + data.Data.UserTotalCount + " </i>名老师");
	                        $("#spCanAddUserCountDesc").click(1, ShowAccountDetails);
	                        $("#btnRenewMore").click(1, ShowRenewArea);
	                    }
	                    else if (currentPageType == "2") {
	                        $("#spCanAddUserCountDesc").html("可添加咨询师账号<i class=\"red\"> " + data.Data.SurplusCounselorCount + " </i>个");
	                        $("#divTotalUserCountDesc").html("共计<i class=\"red\"> " + UserTotalCount + " </i>名咨询师");
	                        $("#spCanAddUserCountDesc").click(2, ShowAccountDetails);
	                        $("#btnRenewMore").click(2, ShowRenewArea);
	                    }
	                    //隐藏角色列，显示到期时间列
	                    $("#thRoleColumn").hide();
	                    $("#thExpireTimeColumn").show();
	                    //添加列的点击事件
	                    $("#ulExpireTime").click(function () {
	                        if ($("#ulExpireTime").hasClass("hidden")) {
	                            $("#ulExpireTime").removeClass("hidden");
	                        } else {
	                            $("#ulExpireTime").addClass("hidden");
	                        }
	                    });
	                    $("#ulExpireTime li").click(function () {
	                        if ($(this).hasClass("active")) {
	
	                        } else {
	                            $(this).siblings().removeClass("active");
	                            $(this).addClass("active");
	                            currentRoleId = parseInt($(this).attr("expireDays"));
	                            //获取数据
	                            GetUserList(currentOrgId, currentOrgName, currentOrgParentId, currentOrgLevel);
	                        }
	                    });
	                    //加载模板，显示列表数据
	                    if (data.Data.UserList != null && data.Data.UserList != undefined) {
	                        var userListTpl = __webpack_require__(70);
	                        $("#tableUserList >tbody").html(userListTpl(data.Data.UserList));
	                        //添加查看用户详情事件
	                        $("[name='btnShowUserDetails']").click(ShowUserDetails);
	                        //点击复选框，选中用户
	                        $("#tableUserList input[name='ckCheckUser']").click(SeletedUserInfo);
	                    }
	                }
	                //写分页逻辑
	                Paginator.Paginator(10, currentPageIndex, data.Data.UserTotalCount, ChangePageIndex);
	            } else {
	                var html = '<tr class="font12"><td colspan=4>' + data.Data.Result + '</td></tr>';
	                $("#idTableClass tbody").html(html);
	            }
	        }
	    });
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
	
	//查找用户
	function SearchUser() {
	    var searchWord = $("#txtSearchWord").val();
	    if (searchWord == "" || searchWord == null || searchWord == undefined) {
	        return;
	    }
	    searchKeyWord = searchWord;
	    GetUserList(currentOrgId, currentOrgName, currentOrgParentId, currentOrgLevel);
	}
	
	//切换页面，0为全部员工列表页面，1为老师列表页面，2为咨询师列表页面
	function ChangePage(event) {
	    currentPageType = event.pageIndex;
	    //切换选项卡状态
	    if (pageIndex == "0") {
	        $("#spOrgAllUser").parent().siblings().removeClass("active");
	        $("#spOrgAllUser").parent().addClass("active");
	    }
	    else if (pageIndex == "1") {
	        $("#spOrgTeacherUser").parent().siblings().removeClass("active");
	        $("#spOrgTeacherUser").parent().addClass("active");
	    }
	    else if (pageIndex == "2") {
	        $("#spOrgCounselorUser").parent().siblings().removeClass("active");
	        $("#spOrgCounselorUser").parent().addClass("active");
	    }
	    //获取数据
	    GetUserList(currentOrgId, currentOrgName, currentOrgParentId, currentOrgLevel);
	}
	
	//验证数据是否为空
	function ValidataDataIsNull(validatedData) {
	    if (validatedData == "" || validatedData == null || validatedData == undefined) {
	        return false;
	    }
	    return true;
	}
	
	//查看用户详情
	function ShowUserDetails() {
	    //获取用户ID
	    var tempUserId = $(this).attr("userId");
	    window.location.href = "/Org/UserManage/UserDetailsInfo?userId=" + tempUserId;
	}
	
	//显示创建校区碳层
	function ShowCreateSchoolArea() {
	    $("#imgAddSchoolClose").click(function () {
	        $("#divAddSchool").addClass("hidden");
	    });
	    $("#btnAddSchool").click(AddSchool);
	    $("#divAddSchool").removeClass("hidden");
	}
	
	//创建校区
	function AddSchool() {
	    var tempSchoolName = $("#txtSchoolName").val();
	    if (tempSchoolName == "" || tempSchoolName == null || tempSchoolName == undefined) {
	        $("#divSchoolIsUsed").show();
	        $("#divSchoolIsUsed >div:first").html("校区名称不能为空！");
	        return;
	    }
	    $.ajax({
	        type: "POST",
	        url: "/Org/BaseManage/AddOrgSchool",
	        data: {
	            schoolName: tempSchoolName
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                $("#divAddSchool").addClass("hidden");
	                InitOrgTree();
	            } else {
	                $("#divSchoolIsUsed").show();
	                if (data.Code == "11-006") {
	                    $("#divSchoolIsUsed >div:first").html("校区数量已达到上限，无法进行创建！");
	                } else if (data.Code == "11-005") {
	                    $("#divSchoolIsUsed >div:first").html("该名称已被其他校区使用！");
	                }
	            }
	        }
	    });
	}
	
	//显示创建部门弹层
	function ShowCreateDepartArea() {
	    $("#imgAddPartClose").click(function () {
	        $("#divAddDepartment").addClass("hidden");
	    });
	    $("#btnAddDepartment").click(AddSchool);
	    $("#divAddDepartment").removeClass("hidden");
	}
	
	//创建校区
	function AddDepartment() {
	    var tempDepartName = $("#txtDepartName").val();
	    if (tempDepartName == "" || tempDepartName == null || tempDepartName == undefined) {
	        $("#divDepartIsUsed").show();
	        $("#divDepartIsUsed >div:first").html("部门名称不能为空！");
	        return;
	    }
	    var tempSchoolId = 0;
	    if (currentOrgLevel == "1") {
	        tempSchoolId = currentOrgId;
	    }
	    if (tempSchoolId == 0 || tempSchoolId == "0") {
	        $("#divDepartIsUsed").show();
	        $("#divDepartIsUsed >div:first").html("请先选择要创建部门的校区！");
	        return;
	    }
	    $.ajax({
	        type: "POST",
	        url: "/Org/BaseManage/AddOrgDepartment",
	        data: {
	            departmentName: tempDepartName,
	            schoolId: tempSchoolId
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                $("#divAddDepartment").addClass("hidden");
	                InitOrgTree();
	            } else {
	                $("#divDepartIsUsed").show();
	                if (data.Code == "11-007") {
	                    $("#divDepartIsUsed >div:first").html("该名称已被其他部门使用！");
	                }
	            }
	        }
	    });
	}
	
	//显示添加员工弹层
	function ShowAddNewUserArea() {
	    $("#imgAddUserClose").click(function () {
	        $("#divAddUser").addClass("hidden");
	    });
	    $("#btnAddNewUser").click(CheckPositionSubmit);
	    //获取角色列表
	    $.ajax({
	        type: "POST",
	        url: "/Org/CommonManage/GetPositionList",
	        data: {},
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                var userListTpl = __webpack_require__(71);
	                $("#ulAddUserPosition").html(userListTpl(data.Data));
	                //添加选中事件
	                $("#ulAddUserPosition input[type='checkbox']").click(function () {
	                    var tempRoleId = $(this).attr("roleId");
	                    if ($(this).is(':checked')) {
	                        if (tempRoleId == "2") {
	                            //隐藏校区、部门选择框
	                            $("#divAddUserDepartment").hide();
	
	                        } else {
	                            //初始化校区、部门
	                            InitAddUserSchoolList();
	                            //展示校区、部门选择框
	                            $("#divAddUserDepartment").show();
	                        }
	                        tempRoleList.push(tempRoleId);
	                    } else {
	                        if (tempRoleList.indexOf(tempRoleId) > 0) {
	                            tempRoleList.remove(tempRoleId);
	                        }
	                    }
	                });
	                //添加查看详情事件,此处弹层提示有问题
	                ShowRoleDesc();
	            } else {
	                //var html = '<tr class="font12"><td colspan=4>' + data.Result + '</td></tr>';
	                //$("#idTableClass tbody").html(html);
	            }
	        }
	    });
	
	    $("#divAddUser").removeClass("hidden");
	    tempCurrentPopuName = "divAddUser";
	}
	
	//初始化添加员工时校区与部门
	function InitAddUserSchoolList() {
	    //获取校区列表
	    var tempSchoolList = new Array();
	    if (globleOrgList != null && globleOrgList != undefined && globleOrgList.length > 0) {
	        for (var i = 0; i < globleOrgList.length; i++) {
	            var tempOrgInfo = globleOrgList[i];
	            if (tempOrgInfo.OrgLevel == 1) {
	                tempSchoolList.push(tempOrgInfo);
	            }
	        }
	        //添加校区列表
	        var tempSchoolString = "";
	        for (var i = 0; i < tempSchoolList.length; i++) {
	            tempSchoolString += "<option value=\"" + tempSchoolList[i].OrgID + "\">" + tempSchoolList[i].OrgName + "</option>";
	        }
	        $("#divAddUserDepartment >select[name='school']").html(tempSchoolString);
	        //添加选择事件
	        $("#divAddUserDepartment >select[name='school']>option").click(function () {
	            tempCheckSchoolId = parseInt($(this).attr("value"));
	            if (tempCheckSchoolId > 0) {
	                var tempDepartString = "";
	                for (var i = 0; i < globleOrgList.length; i++) {
	                    if (globleOrgList[i].ParentOrgID == tempCheckSchoolId) {
	                        tempDepartString += "<option value=\"" + globleOrgList[i].OrgID + "\">" + globleOrgList[i].OrgName + "</option>";
	                    }
	                }
	                $("#divAddUserDepartment >select[name='part']").html(tempDepartString);
	                $("#divAddUserDepartment >select[name='part']>option").click(function () {
	                    tempCheckDepartId = parseInt($(this).attr("value"));
	                });
	            }
	        });
	    }
	}
	
	//选择角色提交事件
	function CheckPositionSubmit() {
	    //验证用户输入的数据格式及内容
	    tempAddUserName = $("#txtAddUserName").val();
	    tempAddUserPhone = $("#txtAddUserPhone").val();
	    if (tempAddUserName == "" || tempAddUserName == undefined) {
	        $("#divAddNewUserTip >div").html("姓名不能为空！");
	        $("#divAddNewUserTip").show();
	        return;
	    }
	    if (tempAddUserName.length > 8) {
	        $("#divAddNewUserTip >div").html("姓名长度不能超过8位！");
	        $("#divAddNewUserTip").show();
	        return;
	    }
	    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	    if (!myreg.test(tempAddUserPhone)) {
	        $("#divAddNewUserTip >div").html("请输入有效的手机号码8位！");
	        $("#divAddNewUserTip").show();
	        return false;
	    }
	    //如果是老师，则弹出选择科目弹框
	    if (tempRoleList == null || tempRoleList == undefined || tempRoleList.length == 0) {
	        $("#divAddNewUserTip >div").html("职位不能为空！");
	        $("#divAddNewUserTip").show();
	        return;
	    }
	    var isTeacher = false;
	    var isCounselor = false;
	    var isAreaManager = false;
	    for (var i = 0; i < tempRoleList.length; i++) {
	        if (tempRoleList.indexOf("6")) {
	            isCounselor = true;
	        }
	        if (tempRoleList.indexOf("8")) {
	            isCounselor = true;
	        }
	        if (tempRoleList.indexOf("2")) {
	            isAreaManager = true;
	        }
	    }
	    //不是区域经理，就需要验证校区及部门是否填写
	    if (!isAreaManager) {
	        if (tempCheckSchoolId == 0 || tempCheckDepartId == 0) {
	            $("#divAddNewUserTip >div").html("部门不能为空！");
	            $("#divAddNewUserTip").show();
	            return;
	        }
	
	        if (isTeacher) {
	            if (isCounselor) {
	                InitTeacherSelectSubject(true);
	            } else {
	                InitTeacherSelectSubject(false);
	            }
	        }
	        else if (isCounselor) {
	            //如果是咨询师，则弹出选择批次弹框
	            $("#divAddUser").addClass("hidden");
	            $("#btnAddUserSubmitBatchs").click(AddNewUser);
	            InitCounselorBatchs();
	            $("#divAddUserBatchSelectPage").removeClass("hidden");
	            tempCurrentPopuName = "divAddUserBatchSelectPage";
	        }
	        else {
	            //直接申请创建
	            tempCurrentPopuName = "divAddUser";
	            AddNewUser();
	        }
	    }
	}
	
	//如果新创建的员工包含老师角色，则将弹出选择学科界面
	//参数说明：
	//isTeacerAndCounselor：是否是老师和咨询师的复合角色
	function InitTeacherSelectSubject(isTeacerAndCounselor) {
	    $("#divAddUser").addClass("hidden");
	    $("#btnAddUserCheckSubjectPage").click(AddNewUser);
	    $("#imgAddUserClose").click(function () {
	        $("#divSelectSubject").addClass("hidden");
	    });
	    //初始化科目列表及批次列表
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
	                //加载科目列表
	                if (data.Data != null && data.Data != undefined && data.Data.length > 0) {
	                    var subjectList = data.Data;
	                    var subjectListTpl = __webpack_require__(72);
	                    $("#ulAddUserSubjectList").html(subjectListTpl(subjectList));
	                    //添加选中事件
	                    $("#ulAddUserSubjectList input[type='checkbox']").click(function () {
	                        var temSID = $(this).attr("subjectId");
	                        if ($(this).is(':checked')) {
	                            tempSubjectList.push(temSID);
	                        } else {
	                            if (tempSubjectList.indexOf(temSID) > 0) {
	                                tempSubjectList.remove(temSID);
	                            }
	                        }
	                    });
	                }
	            } else {
	                //var html = '<tr class="font12"><td colspan=4>' + data.Result + '</td></tr>';
	                //$("#idTableClass tbody").html(html);
	            }
	        }
	    });
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
	                    var tempCounselorBatchList = new Array();
	                    var tempTeacherBatchList = new Array();
	                    for (var i = 0; i < batchList.length; i++) {
	                        if (batchList[i].AccountType == 1) {
	                            tempTeacherBatchList.push(batchList[i]);
	                        }
	                        if (batchList[i].AccountType == 2) {
	                            tempCounselorBatchList.push(batchList[i]);
	                        }
	                    }
	                    var batchListTpl = __webpack_require__(73);
	                    //如果是复合角色，则展示两个角色的批次信息，否则展示单一角色的批次信息
	                    if (isTeacerAndCounselor) {
	                        $("#ulAddTeacherBatchList").html(batchListTpl(tempTeacherBatchList));
	                        $("#ulAddCounselotBatchList").html(batchListTpl(tempCounselorBatchList));
	                        $("#ulAddCounselotBatchList").show();
	                        //添加选中事件
	                        $("#ulAddTeacherBatchList input[type='checkbox']").click(function () {
	                            var temBID = $(this).attr("batchId");
	                            if ($(this).is(':checked')) {
	                                tempBatchIdList.push(temBID);
	                            } else {
	                                if (tempBatchIdList.indexOf(temBID) > 0) {
	                                    tempBatchIdList.remove(temBID);
	                                }
	                            }
	                        });
	                        $("#ulAddCounselotBatchList input[type='checkbox']").click(function () {
	                            var temBID = $(this).attr("batchId");
	                            if ($(this).is(':checked')) {
	                                tempBatchIdList.push(temBID);
	                            } else {
	                                if (tempBatchIdList.indexOf(temBID) > 0) {
	                                    tempBatchIdList.remove(temBID);
	                                }
	                            }
	                        });
	                    } else {
	                        $("#ulAddTeacherBatchList").html(batchListTpl(tempTeacherBatchList));
	                        $("#ulAddCounselotBatchList").hide();
	                        //添加选中事件
	                        $("#ulAddTeacherBatchList input[type='checkbox']").click(function () {
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
	                }
	            } else {
	                //var html = '<tr class="font12"><td colspan=4>' + data.Result + '</td></tr>';
	                //$("#idTableClass tbody").html(html);
	            }
	        }
	    });
	    $("#divSelectSubject").removeClass("hidden");
	    tempCurrentPopuName = "divSelectSubject";
	}
	
	//新建员工是初始化咨询师批次列表
	function InitCounselorBatchs() {
	    $("#divAddUser").addClass("hidden");
	    $("#btnAddUserSubmitBatchs").click(AddNewUser);
	    $("#imgSelectBatchClose").click(function () {
	        $("#divAddUserBatchSelectPage").addClass("hidden");
	    });
	
	    //初始化批次列表
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
	                    var tempCounselorBatchList = new Array();
	                    for (var i = 0; i < batchList.length; i++) {
	                        if (batchList[i].AccountType == 2) {
	                            tempCounselorBatchList.push(batchList[i]);
	                        }
	                    }
	                    var batchListTpl = __webpack_require__(73);
	                    $("#ulAddUserBatchList").html(batchListTpl(tempCounselorBatchList));
	                    //添加选中事件
	                    $("#ulAddUserBatchList input[type='checkbox']").click(function () {
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
	                //var html = '<tr class="font12"><td colspan=4>' + data.Result + '</td></tr>';
	                //$("#idTableClass tbody").html(html);
	            }
	        }
	    });
	    $("#divAddUserBatchSelectPage").removeClass("hidden");
	    tempCurrentPopuName = "divAddUserBatchSelectPage";
	}
	
	//添加新员工
	function AddNewUser() {
	    var tempPositionIds = "";
	    var tempSubjectIds = "";
	    var tempBatchIds = "";
	    if (tempRoleList != null && tempRoleList.length > 0) {
	        for (var i = 0; i < tempRoleList.length; i++) {
	            tempPositionIds += tempRoleList[i] + ",";
	        }
	    }
	    if (tempSubjectList != null && tempSubjectList.length > 0) {
	        for (var i = 0; i < tempSubjectList.length; i++) {
	            tempSubjectIds += tempSubjectList[i] + ",";
	        }
	    }
	    if (tempBatchIdList != null && tempBatchIdList.length > 0) {
	        for (var i = 0; i < tempBatchIdList.length; i++) {
	            tempBatchIds += tempBatchIdList[i] + ",";
	        }
	    }
	    $.ajax({
	        type: "POST",
	        url: "/Org/UserManage/AddOrgUser",
	        data: {
	            userName: tempAddUserName,
	            userPhone: tempAddUserPhone,
	            positionId: tempPositionIds,
	            schoolId: tempCheckSchoolId,
	            departId: tempCheckDepartId,
	            subjectIds: tempSubjectIds,
	            batchIds: tempBatchIds
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                //关掉当前页面，弹出账号窗口
	                $("#" + tempCurrentPopuName).addClass("hidden");
	                $("#divCreateUserSuccess").removeClass("hidden");
	                $("#spAddUserSucessClose").click(function () {
	                    $("#divCreateUserSuccess").addClass("hidden");
	                });
	                if (data.Data != null && data.Data != undefined) {
	                    $("#divNewUserAccount").html("账号：" + data.Data.UserID);
	                    $("#divNewUserPWD").html("密码：" + data.Data.UserPWD);
	                    $("#divCreateUserSuccess").removeClass("hidden");
	                    $("#btnNewUserOK").click(function () {
	                        $("#divCreateUserSuccess").addClass("hidden");
	                        tempCurrentPopuName = "";
	                    });
	                }
	            } else {
	                //var html = '<tr class="font12"><td colspan=4>' + data.Result + '</td></tr>';
	                //$("#idTableClass tbody").html(html);
	            }
	        }
	    });
	}
	
	//新建员工时，弹出的角色说明信息
	function ShowRoleDesc() {
	    var x = 10;
	    var y = 20; //设置提示框相对于偏移位置，防止遮挡鼠标
	    $("#ulAddUserPosition >li[name='spRoleDesc']").hover(function (e) {  //鼠标移上事件
	        var tempRName = $(this).attr("roleName");
	        var tempRDesc = $(this).attr("roleDesc");
	        $("#pRoleDesc").html("<span style=\"font-weight:800;\">" + tempRName + "权限：</span>" + tempRDesc + "");
	        $(".superLimit").css({
	            "top": (e.pageY + y) + "px",
	            "left": (e.pageX + x) + "px"
	        }).show("fast"); //设置提示框的坐标，并显示
	    }, function () {  //鼠标移出事件
	
	        $(".superLimit").hide();  //移除弹出框
	    }).mousemove(function (e) {   //跟随鼠标移动事件
	        $(".superLimit").css({
	            "top": (e.pageY + y) + "px",
	            "left": (e.pageX + x) + "px"
	        });
	    });
	}
	
	//查看账号详情
	function ShowAccountDetails(event) {
	    $("#imgAccountDetails").click(function () {
	        $("#divAccountDetails").addClass("hidden");
	    });
	    $("#btnAccountDetailsSubmit").click(function () {
	        $("#divAccountDetails").addClass("hidden");
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
	                    var tpTeacherBList = new Array();
	                    var tpCounselorBList = new Array();
	                    for (var i = 0; i < tempBList.length; i++) {
	                        var tpBInfo = tempBList[i];
	                        if (tpBInfo.AccountType == 1) {
	                            tpTeacherBList.push(tpBInfo);
	                        } else if (tpBInfo.AccountType == 2) {
	                            tpCounselorBList.push(tpBInfo);
	                        }
	                    }
	                    var tempBatchTpl = __webpack_require__(74);
	                    if (event == 1) {
	                        $("#tbAccountDeatails >tbody").html(tempBatchTpl(tpTeacherBList));
	                    } else if (event == 2) {
	                        $("#tbAccountDeatails >tbody").html(tempBatchTpl(tpCounselorBList));
	                    }
	                }
	            } else {
	
	            }
	        }
	    });
	    $("#divAccountDetails").removeClass("hidden");
	}
	
	//显示批量续费窗口
	function ShowRenewArea(event) {
	    if (tempUserList != null && tempUserList.length > 0) {
	        //续费类型
	        var renewTypeFlags = -1;
	        $("#imgAccountRenew").click(function () {
	            $("#divAccountRenew").addClass("hidden");
	        });
	        //显示员工列表及批次列表
	        var tempRenewUserTpl = __webpack_require__(75);
	        $("#ulRenewUserList").html(tempRenewUserTpl(tempUserList));
	        $("#ulRenewUserList >li>span[name='spRenewDeleteUser']").click(function () {
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
	                        var tpTeacherBList = new Array();
	                        var tpCounselorBList = new Array();
	                        for (var i = 0; i < tempBList.length; i++) {
	                            var tpBInfo = tempBList[i];
	                            if (tpBInfo.AccountType == 1) {
	                                tpTeacherBList.push(tpBInfo);
	                            } else if (tpBInfo.AccountType == 2) {
	                                tpCounselorBList.push(tpBInfo);
	                            }
	                        }
	                        var tempBatchTpl = __webpack_require__(73);
	                        if (event == 1) {
	                            $("#ulRenewBatchList").html(tempBatchTpl(tpTeacherBList));
	                        } else if (event == 2) {
	                            $("#ulRenewBatchList").html(tempBatchTpl(tpCounselorBList));
	                        }
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
	        $("#btnAccountRenew").click(renewTypeFlags, MoreRenewAccount);
	        $("#divRenewTip").hide();
	        $("#divAccountRenew").removeClass("hidden");
	    } else {
	        PopuClient.PopTipShow("请选择续费用户！");
	    }
	}
	
	//账号批量续费
	function MoreRenewAccount(renewTypeFlags) {
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
	        url: "/Org/UserManage/MoreRenew",
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
	                    PopuClient.PopTipShow("请选择续费批次！");
	                }
	            } else {
	                if (data.Code == "11-011") {
	                    $("#divRenewTip >div").html("您创建的老师账号已达上限，请联系我们购买！");
	                    $("#divRenewTip").show();
	                } else if (data.Code == "11-010") {
	                    $("#divRenewTip >div").html("您创建的咨询师账号已达上限，请联系我们购买！");
	                    $("#divRenewTip").show();
	                }
	            }
	        }
	    });
	}
	
	$(function () {
	    //为页面切换添加方法
	    var tempPage1 = { pageIndex: "0" };
	    var tempPage2 = { pageIndex: "1" };
	    var tempPage3 = { pageIndex: "2" };
	    $("#spOrgAllUser").click(tempPage1, ChangePage);
	    $("#spOrgTeacherUser").click(tempPage2, ChangePage);
	    $("#spOrgCounselorUser").click(tempPage3, ChangePage);
	    //初始化组织结构树
	    InitOrgTree();
	    //添加搜索事件
	    $("#btnSearch").click(SearchUser);
	    //添加校区、添加部门事件
	    $("#btnAddSchool").click(ShowCreateSchoolArea);
	    $("#btnAddDepartment").click(ShowCreateDepartArea);
	    $("#btnAddUser").click(ShowAddNewUserArea);
	});

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/Org/schooltreelist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,SchoolListModel=$data.SchoolListModel,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(SchoolListModel,function($value,$index){
	$out+=' ';
	if($value.OrgLevel ==1 ){
	$out+=' <li class="department-school"> <label> <input class="mr5 middle" type="radio" name="department-item" orgId="';
	$out+=$escape($value.OrgID);
	$out+='" parentId = "';
	$out+=$escape($value.ParentOrgID);
	$out+='" orgLevel = "';
	$out+=$escape($value.OrgLevel);
	$out+='" orgName="';
	$out+=$escape($value.OrgName);
	$out+='"/> <span class="middle">';
	$out+=$escape($value.OrgName);
	$out+='</span> </label> </li> ';
	}
	$out+=' <li> <label> <input class="mr5 middle" type="radio" name="department-item" orgId="';
	$out+=$escape($value.OrgID);
	$out+='" parentId = "';
	$out+=$escape($value.ParentOrgID);
	$out+='" orgLevel = "';
	$out+=$escape($value.OrgLevel);
	$out+='" orgName="';
	$out+=$escape($value.OrgName);
	$out+='"/> <span class="middle">';
	$out+=$escape($value.OrgName);
	$out+='</span> </label> </li> ';
	});
	return new String($out);
	});

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/Org/alluserlist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,UserList=$data.UserList,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(UserList,function($value,$index){
	$out+=' <tr> <td><input type="checkbox" name="ckCheckUser" class="middle ml20" userId="';
	$out+=$escape($value.UserID);
	$out+='" userName="';
	$out+=$escape($value.UserName);
	$out+='" userAccount="';
	$out+=$escape($value.UserAccount);
	$out+='"></td> <td>';
	$out+=$escape($value.UserName);
	$out+='</td> <td>';
	$out+=$escape($value.UserAccount);
	$out+='</td> <td>';
	$out+=$escape($value.OrgDepartNameDesc);
	$out+='</td> <td>';
	$out+=$escape($value.RoleNameDesc);
	$out+='</td> <td>';
	$out+=$escape($value.CreateDate);
	$out+='</td> <td> <span class="see-btn" name="btnShowUserDetails" userId="';
	$out+=$escape($value.UserID);
	$out+='">查看</span> </td> </tr> ';
	});
	return new String($out);
	});

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/Org/teacherlist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,UserList=$data.UserList,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(UserList,function($value,$index){
	$out+=' <tr> <td><input type="checkbox" name="ckCheckUser" class="middle ml20" userId="';
	$out+=$escape($value.UserID);
	$out+='"></td> <td>';
	$out+=$escape($value.UserName);
	$out+='</td> <td>';
	$out+=$escape($value.UserAccount);
	$out+='</td> <td>';
	$out+=$escape($value.OrgDepartNameDesc);
	$out+='</td> <td>';
	$out+=$escape($value.CreateDate);
	$out+='</td> <td>';
	$out+=$escape($value.ExpairDate);
	$out+='</td> <td> <span class="see-btn" name="btnShowUserDetails" userId="';
	$out+=$escape($value.UserID);
	$out+='">查看</span> </td> </tr> ';
	});
	return new String($out);
	});

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/Org/orgrolelist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,RoleListModel=$data.RoleListModel,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(RoleListModel,function($value,$index){
	$out+=' <li class="place-item" roleId = "';
	$out+=$escape($value.PositionID);
	$out+='" leftNum="';
	$out+=$escape($value.LeftNum);
	$out+='"> <input class="middle mr5" type="checkbox" roleId="';
	$out+=$escape($value.PositionID);
	$out+='"/> ';
	if($value.PositionID == 6 ){
	$out+=' ';
	$out+=$escape($value.PositionName);
	$out+='(<span class="red">可创建咨询师账号';
	$out+=$escape($value.LeftNum);
	$out+='个</span>) ';
	}
	$out+=' ';
	if($value.PositionID == 8 ){
	$out+=' ';
	$out+=$escape($value.PositionName);
	$out+='(<span class="red">可创建老师账号';
	$out+=$escape($value.LeftNum);
	$out+='个</span>) ';
	}
	$out+=' ';
	$out+=$escape($value.PositionName);
	$out+=' <span name="spRoleDesc" class="place-bg right" roleId="';
	$out+=$escape($value.PositionID);
	$out+='" roleName="';
	$out+=$escape($value.PositionName);
	$out+='" roleDesc="';
	$out+=$escape($value.PositionDesc);
	$out+='"></span> </li> ';
	});
	return new String($out);
	});

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/Org/subjectslist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,ListModel=$data.ListModel,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(ListModel,function($value,$index){
	$out+=' <li class="subject-item" subjectId="';
	$out+=$escape($value.SubjectId);
	$out+='" bigGrade="';
	$out+=$escape($value.BigGrade);
	$out+='"> <label> <input class="middle" type="checkbox" subjectId="';
	$out+=$escape($value.SubjectId);
	$out+='" bigGrade="';
	$out+=$escape($value.BigGrade);
	$out+='"/>';
	$out+=$escape($value.SubjectDesc);
	$out+=' </label> </li> ';
	});
	return new String($out);
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

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/Org/renewuserlist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,UserListModel=$data.UserListModel,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(UserListModel,function($value,$index){
	$out+=' <li> ';
	$out+=$escape($value.UserName);
	$out+=' (';
	$out+=$escape($value.UserAccount);
	$out+=') <span class="teacher-bg ml20 middle" name="spRenewDeleteUser" userId="';
	$out+=$escape($value.UserId);
	$out+='"></span> </li> ';
	});
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL1BhZ2luYXRvci5qcz9iZTgxKioqKioqKiIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL3BvcHVwL3BvcHVwdGlwLmpzP2YwMzIqKioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2pzL09yZy9vcmdtYW5hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9Pcmcvc2Nob29sdHJlZWxpc3QudHBsIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnL2FsbHVzZXJsaXN0LnRwbCIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZy90ZWFjaGVybGlzdC50cGwiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9Pcmcvb3Jncm9sZWxpc3QudHBsIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnL3N1YmplY3RzbGlzdC50cGwiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9PcmcvYmF0Y2hzbGlzdC50cGwiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9PcmcvYWNjb3VudGRldGFpbHNsaXN0LnRwbCIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZy9yZW5ld3VzZXJsaXN0LnRwbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQSx5Q0FBd0MsT0FBTywyQkFBMkI7QUFDMUU7O0FBRUE7QUFDQTtBQUNBLHNDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSwwQkFBeUIsaUVBQWlFO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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cmNlc0NvbnRlbnQiOlsiLypUTU9ESlM6e30qL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdGZ1bmN0aW9uIGEoYSwgYikge1xyXG5cdFx0cmV0dXJuICgvc3RyaW5nfGZ1bmN0aW9uLy50ZXN0KHR5cGVvZiBiKSA/IGggOiBnKShhLCBiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYihhLCBjKSB7XHJcblx0XHRyZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSAmJiAoYyA9IHR5cGVvZiBhLCBcIm51bWJlclwiID09PSBjID8gYSArPSBcIlwiIDogYSA9IFwiZnVuY3Rpb25cIiA9PT0gYyA/IGIoYS5jYWxsKGEpKSA6IFwiXCIpLCBhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjKGEpIHtcclxuXHRcdHJldHVybiBsW2FdXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkKGEpIHtcclxuXHRcdHJldHVybiBiKGEpLnJlcGxhY2UoLyYoPyFbXFx3I10rOyl8Wzw+XCInXS9nLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZShhLCBiKSB7XHJcblx0XHRpZiAobShhKSlmb3IgKHZhciBjID0gMCwgZCA9IGEubGVuZ3RoOyBkID4gYzsgYysrKWIuY2FsbChhLCBhW2NdLCBjLCBhKTsgZWxzZSBmb3IgKGMgaW4gYSliLmNhbGwoYSwgYVtjXSwgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoYSwgYikge1xyXG5cdFx0dmFyIGMgPSAvKFxcLylbXlxcL10rXFwxXFwuXFwuXFwxLywgZCA9IChcIi4vXCIgKyBhKS5yZXBsYWNlKC9bXlxcL10rJC8sIFwiXCIpLCBlID0gZCArIGI7XHJcblx0XHRmb3IgKGUgPSBlLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7IGUubWF0Y2goYyk7KWUgPSBlLnJlcGxhY2UoYywgXCIvXCIpO1xyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoYiwgYykge1xyXG5cdFx0dmFyIGQgPSBhLmdldChiKSB8fCBpKHtmaWxlbmFtZTogYiwgbmFtZTogXCJSZW5kZXIgRXJyb3JcIiwgbWVzc2FnZTogXCJUZW1wbGF0ZSBub3QgZm91bmRcIn0pO1xyXG5cdFx0cmV0dXJuIGMgPyBkKGMpIDogZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChhLCBiKSB7XHJcblx0XHRpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYikge1xyXG5cdFx0XHR2YXIgYyA9IGI7XHJcblx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBrKGMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBkID0galthXSA9IGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBiKGMsIGEpICsgXCJcIlxyXG5cdFx0XHR9IGNhdGNoIChkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGkoZCkoKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGQucHJvdG90eXBlID0gYi5wcm90b3R5cGUgPSBuLCBkLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYiArIFwiXCJcclxuXHRcdH0sIGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGkoYSkge1xyXG5cdFx0dmFyIGIgPSBcIntUZW1wbGF0ZSBFcnJvcn1cIiwgYyA9IGEuc3RhY2sgfHwgXCJcIjtcclxuXHRcdGlmIChjKWMgPSBjLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCJcXG5cIik7IGVsc2UgZm9yICh2YXIgZCBpbiBhKWMgKz0gXCI8XCIgKyBkICsgXCI+XFxuXCIgKyBhW2RdICsgXCJcXG5cXG5cIjtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IoYiArIFwiXFxuXFxuXCIgKyBjKSwgYlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGogPSBhLmNhY2hlID0ge30sIGsgPSB0aGlzLlN0cmluZywgbCA9IHtcclxuXHRcdFwiPFwiOiBcIiYjNjA7XCIsXHJcblx0XHRcIj5cIjogXCImIzYyO1wiLFxyXG5cdFx0J1wiJzogXCImIzM0O1wiLFxyXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcclxuXHRcdFwiJlwiOiBcIiYjMzg7XCJcclxuXHR9LCBtID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xyXG5cdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB7fS50b1N0cmluZy5jYWxsKGEpXHJcblx0XHR9LCBuID0gYS51dGlscyA9IHtcclxuXHRcdCRoZWxwZXJzOiB7fSwgJGluY2x1ZGU6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcblx0XHRcdHJldHVybiBhID0gZihjLCBhKSwgZyhhLCBiKVxyXG5cdFx0fSwgJHN0cmluZzogYiwgJGVzY2FwZTogZCwgJGVhY2g6IGVcclxuXHR9LCBvID0gYS5oZWxwZXJzID0gbi4kaGVscGVycztcclxuXHRhLmdldCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRyZXR1cm4galthLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKV1cclxuXHR9LCBhLmhlbHBlciA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRvW2FdID0gYlxyXG5cdH0sIG1vZHVsZS5leHBvcnRzID0gYVxyXG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdG1vZGpzLWxvYWRlci9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDggMTMgMTQgMTUgMTYgMTcgMTggMTkgMjEgMjMgMjUgMjYgMjcgMzEgMzIgMzMgMzcgMzhcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFBhZ2luYXRvcjogZnVuY3Rpb24gKHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgdG90YWxDb3VudCwgY2FsbGJhY2spIHtcclxuICAgICAgICAvL3RvZG8g57uR5a6a5LqL5Lu2XHJcbiAgICAgICBcclxuICAgICAgICB2YXIgdG90YWxQYWdlcztcclxuICAgICAgICBpZiAodG90YWxDb3VudCAlIHBhZ2VTaXplID09IDApIHtcclxuICAgICAgICAgICAgdG90YWxQYWdlcyA9IHRvdGFsQ291bnQgLyBwYWdlU2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvdGFsUGFnZXMgPSBwYXJzZUludCh0b3RhbENvdW50IC8gcGFnZVNpemUpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhZ2VQcmUgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgLSAxKSArICcgY2xhc3M9XCJwcmUtcGFnZSBpbmxpbmUgbXIyMFwiPuS4iuS4gOmhtTwvYT4nO1xyXG4gICAgICAgIHZhciBwYWdlTmV4dCA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDEpICsgJyBjbGFzcz1cIm5leHQtcGFnZSBpbmxpbmVcIj7kuIvkuIDpobU8L2E+JztcclxuICAgICAgICB2YXIgaW5kZXhQYWdlID0gJzxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPVwiMVwiIGNsYXNzPVwicHJlLXBhZ2UgaW5saW5lIG1yMjBcIj7pppbpobU8L2E+PC9saT4nO1xyXG5cclxuICAgICAgICB2YXIgbGFzdFBhZ2UgPSAnIDxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJyBjbGFzcz1cInByZS1wYWdlIGlubGluZSBtcjIwXCI+IOacq+mhtTwvYT4nO1xyXG4gICAgICAgIGlmICh0b3RhbFBhZ2VzIDwgcGFnZVNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlUHJlID0gXCJcIjtcclxuICAgICAgICAgICAgcGFnZU5leHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBpbmRleFBhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDw9IDEpIHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgICAgICBwYWdlUHJlID0gXCJcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gdG90YWxQYWdlcztcclxuICAgICAgICAgICAgcGFnZU5leHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG90YWxDb3VudCA+IDApIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAnPHVsIGNsYXNzPVwicGFnZS1ib3ggaW5saW5lIG1yMjBcIj4nO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VzID4gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09IDEpIC8v56ys5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3V0cHV0LkFwcGVuZChcIiA8YSBkaXNhYmxlZD0nZGlzYWJsZWQnIGNsYXNzPSdjb2xIJz7kuIrkuIDpobU8L2E+IFwiKTsvL+S4iuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5aSE55CG6aaW6aG16L+e5o6lXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpITnkIbkuIrkuIDpobXnmoTov57mjqVcclxuICAgICAgICAgICAgICAgICAgICAvL3BhZ2VQcmUgPSAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDEpICsgJz7kuIrkuIDpobU8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAvLyBvdXRwdXQuQXBwZW5kRm9ybWF0KFwiIDxhIGRhdGEtcGFnZUluZGV4PSd7MH0nIGNsYXNzPSdwYWdlTGluayc+5LiK5LiA6aG1PC9hPiBcIiwgY3VycmVudFBhZ2UgLSAxKTsvL+S4iuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgPiA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJpbnQgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA8IDQpLy80XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gaSArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiBkYXRhLW51bT0nICsgY3VycmVudFBhZ2UgKyAnPicgKyBjdXJyZW50UGFnZSArICc8L2E+IDwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSA2KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyA3ICsgJz4uLi48L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgdG90YWxQYWdlcyArICc+JyArIHRvdGFsUGFnZXMgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKGkgKyAxKSArICc+JyArIChpICsgMSkgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfS8vNFxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRQYWdlID49IDQgJiYgY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzIC0gMykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wYWdlbnVtPXBhZ2VudW0rJyA8bGkgZGF0YS1udW09JysoY3VycmVudFBhZ2UtMykrJz48YSBocmVmPVwiI1wiIG9uY2xpY2s9XCJQYWdpbmF0b3IoJytwYWdlU2l6ZSsnLCcrKGN1cnJlbnRQYWdlLTMpKycsJyArIHRvdGFsQ291bnQgKyAnKVwiPi4uLjwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCI+MTwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDMgPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDMpICsgJz4uLi48L2E+IDwvbGk+JzsvLzIwMTYwOTEzMDkzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gMykvL+S4remXtOW9k+WJjemhtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgZGF0YS1udW09JyArIChjdXJyZW50UGFnZSkgKyAnPicgKyBjdXJyZW50UGFnZSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gNikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyAzKSArICc+Li4uPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgdG90YWxQYWdlcyArICc+JyArIHRvdGFsUGFnZXMgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIGkgLSBwYXJzZUludChjdXJyaW50KSkgKyAnPicgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgaSAtIHBhcnNlSW50KGN1cnJpbnQpKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPVwiMVwiPjE8L2E+IDwvbGk+JzsvLzIwMTYwOTEzMDkzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBkYXRhLW51bT0nICsgKHBhcnNlSW50KHRvdGFsUGFnZXMpIC0gNikgKyAnPi4uLjwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxQYWdlcyAtIDYgKyBpID09IGN1cnJlbnRQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArICh0b3RhbFBhZ2VzIC0gNiArIGkpICsgJz4nICsgKHRvdGFsUGFnZXMgLSA2ICsgaSkgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSBpICsgMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAoaSArIDEpICsgJz4nICsgKGkgKyAxKSArICc8L2E+IDwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gdG90YWxQYWdlcykgLy/mnIDlkI7kuIDpobVcclxuICAgICAgICAgICAgICAgIHsvL+WkhOeQhuS4i+S4gOmhteWSjOWwvumhteeahOmTvuaOpVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3V0cHV0LkFwcGVuZChcIiA8YSBkaXNhYmxlZD0nZGlzYWJsZWQnIGNsYXNzPSdjb2xIJz7kuIvkuIDpobU8L2E+IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFBhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcykgey8v5aSE55CG5LiL5LiA6aG15ZKM5bC+6aG155qE6ZO+5o6lIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kRm9ybWF0KFwiIDxhIGRhdGEtcGFnZWluZGV4PSd7MH0nIGNsYXNzPSdwYWdlTGluayc+5LiL5LiA6aG1PC9hPiBcIiwgY3VycmVudFBhZ2UgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgIC8vIHBhZ2VQcmUgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyAxKSArICcgY2xhc3M9XCJuZXh0LXBhZ2UgaW5saW5lXCI+5LiL5LiA6aG1PC9hPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnPC91bD4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gaW5kZXhQYWdlICsgcGFnZVByZSArIHBhZ2VudW0gKyBwYWdlTmV4dCArIGxhc3RQYWdlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNwYWdpbmF0aW9uIGFcIikudW5iaW5kKFwiY2xpY2tcIik7XHJcbiAgICAgICAgJChcIiNwYWdpbmF0aW9uIGFcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJCh0aGlzKS5hdHRyKFwiZGF0YS1udW1cIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4vL2Z1bmN0aW9uIFBhZ2luYXRvcihwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHRvdGFsQ291bnQsIGNhbGxiYWNrKSB7XHJcblxyXG5cclxuLy99XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC9QYWdpbmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMTMgMTYgMTggMTkgMjEgMjYgMjcgMzEgMzMgMzhcbiAqKi8iLCIvL+mBrue9qVxyXG5mdW5jdGlvbiBNYXNrU2hvdygpIHtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNYXNrSGlkZSgpIHtcclxuICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG59XHJcbi8v5Lyg6YCS5pi+56S655qE5raI5oGvXHJcbmZ1bmN0aW9uIFBvcFRpcFNob3cob2JqKSB7XHJcbiAgICB2YXIgdGlwaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNCBoaWRkZW5cIiBpZD1cIm9rdGlwXCI+PHNwYW4gY2xhc3M9XCJwb3AtY2xvc2UgY3Vyc29yXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPjxwIGNsYXNzPVwibGluZTEwMFwiIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+JyArIG9iaiArICc8L3A+PC9kaXY+PC9kaXY+JztcclxuXHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZCh0aXBodG1sKTtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmFwcGVuZCh0aXBodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59XHJcbi8v5by55Ye656Gu6K6k5qGGXHJcbnZhciBPcGVuQ29uZnJpbVBvcCA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJwb3AtdXAgZm9udDE0XCI+PHNwYW4gY2xhc3M9XCJwb3AtY2xvc2UgY3Vyc29yXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPicgKyBvYmogKyAnPC9kaXY+PGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImhhbmRsZVwiPiA8c3BhbiBjbGFzcz1cIm9rXCIgaWQ9XCJDb25mcmltXCI+56Gu5a6aPC9zcGFuPiAmbmJzcDsmbmJzcDsmbmJzcDs8c3BhbiBjbGFzcz1cIm9rXCIgaWQ9XCJDYW5jZWxcIj7lj5bmtog8L3NwYW4+IDwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59O1xyXG4vL+W8ueWHuuehruiupOahhizmsqHmnInlj5bmtojmjInpkq5cclxudmFyIE9wZW5Db25mcmltUG9wTm9DYW5jZWwgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj4nICsgb2JqICsgJzwvZGl2PjxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJoYW5kbGVcIj4gPHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ29uZnJpbVwiPuehruWumjwvc3Bhbj4gPC9kaXY+PC9kaXY+JztcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuYXBwZW5kKGh0bWwpO1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLnBvcC11cFwiKS5zaG93KCk7XHJcbn07XHJcbi8vL+W8ueWHuuWkmumVv+aXtumXtOWQjua2iOWksVxyXG52YXIgT3BlblRpbWVIaWRlID0gZnVuY3Rpb24gKG9iaiwgdGltZSkge1xyXG4gICAgLy92YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wdXBcIj4gPGg1IGNsYXNzPVwiY2VudGVyIGZvbnQxNiBwb3B1cGhlYWRcIj7mtojmga/mj5DnpLo8aSBjbGFzcz1cInBvcGNsb3NlIGN1cnNvclwiPjwvaT48L2g1PjxkaXYgY2xhc3M9XCJwb3B1cGJveFwiPjxkaXYgY2xhc3M9XCJoYW5kbGUgZm9udDE0IGF1dG9cIj4nICsgb2JqICsgJzwvZGl2PjwvZGl2PjwvZGl2Pic7XHJcbiAgICB2YXIgaHRtbCA9ICcgIDxkaXYgY2xhc3M9XCJwb3B1cCBcIj48aDUgY2xhc3M9XCJjZW50ZXIgZm9udDE2IHBvcHVwaGVhZFwiPiDmtojmga/mj5DnpLo8aSBjbGFzcz1cInBvcGNsb3NlIGN1cnNvclwiPjwvaT48L2g1PjxkaXYgY2xhc3M9XCJwb3B1cGJveFwiPjxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtcIj48ZGl2IGNsYXNzPVwic3VjY2VzcyBhdXRvXCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tdG9wOjIwcHg7XCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImhhbmRsZSBzdWNjZXNzTGV0dGVyXCI+IDxzcGFuIGNsYXNzPVwibXQyMFwiPicrb2JqKyc8L3NwYW4+PC9kaXY+PC9kaXY+PC9kaXY+JztcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuYXBwZW5kKGh0bWwpO1xyXG4gICAgJChcIi5wb3B1cFwiKS5zaG93KCk7XHJcbiAgXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcHVwXCIpLmhpZGUoKTtcclxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0sIHRpbWUpO1xyXG5cclxufTtcclxuZnVuY3Rpb24gUG9wVGlwSGlkZSgpIHtcclxuICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbn1cclxuXHJcbmV4cG9ydHMuTWFza1Nob3cgPSBNYXNrU2hvdztcclxuZXhwb3J0cy5NYXNrSGlkZSA9IE1hc2tIaWRlO1xyXG5leHBvcnRzLlBvcFRpcFNob3cgPSBQb3BUaXBTaG93O1xyXG5leHBvcnRzLlBvcFRpcEhpZGUgPSBQb3BUaXBIaWRlO1xyXG5leHBvcnRzLk9wZW5Db25mcmltUG9wID0gT3BlbkNvbmZyaW1Qb3A7XHJcbmV4cG9ydHMuT3BlblRpbWVIaWRlID0gT3BlblRpbWVIaWRlO1xyXG4vL+WkhOeQhuW8ueWHuuahhueahOmakOiXj1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuZGVsZWdhdGUoXCIucG9wLWNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICAgICAvL2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3BjbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcC1jbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgLy9kb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcGNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC9wb3B1cC9wb3B1cHRpcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDggMTQgMjEgMjYgMzEgMzIgMzMgMzQgMzcgMzhcbiAqKi8iLCJ2YXIgUGFnaW5hdG9yID0gcmVxdWlyZSgnUGFnaW5hdG9yLmpzJyk7XHJcbnZhciBQb3B1Q2xpZW50ID0gcmVxdWlyZShcInBvcHVwL3BvcHVwdGlwLmpzXCIpO1xyXG52YXIgY3VycmVudExvZ2luVXNlcklkID0gMDsgICAgLy/lvZPliY3nmbvpmYbnmoTnlKjmiLdJRFxyXG52YXIgY3VycmVudFBhZ2VUeXBlID0gXCIwXCI7ICAgIC8vMOS4uuaJgOacieWRmOW3pe+8jDHkuLrogIHluIjvvIwy5Li65ZKo6K+i5biIXHJcbnZhciBjdXJyZW50T3JnSWQgPSBcIjBcIjsgICAgIC8v5b2T5YmN6YCJ5Lit55qE5qCh5Yy6L+mDqOmXqElEXHJcbnZhciBjdXJyZW50T3JnTmFtZSA9IFwiXCI7ICAgIC8v5b2T5YmN6YCJ5Lit55qE5qCh5Yy6L+mDqOmXqOWQjeensFxyXG52YXIgY3VycmVudE9yZ1BhcmVudElkID0gXCIwXCI7ICAgICAgLy/lvZPliY3pgInkuK3nmoTmoKHljLov6YOo6Zeo54i2SURcclxudmFyIGN1cnJlbnRPcmdMZXZlbCA9IFwiMFwiOyAgICAgIC8v5b2T5YmN6YCJ5Lit55qE5bGC57qn77yMMeS4uuagoeWMuu+8jDLkuLrpg6jpl6hcclxudmFyIGN1cnJlbnRQYWdlSW5kZXggPSAxOyAgICAvL+W9k+WJjemhteeggVxyXG52YXIgY3VycmVudFJvbGVJZCA9IDA7ICAgIC8v5b2T5YmN6YCJ5Lit55qE6KeS6ImySURcclxudmFyIGN1cnJlbnRFeHBpcmVEYXlzID0gLTE7ICAgIC8v5b2T5YmN6YCJ5oup55qE6L+H5pyf5pe26Ze06ZW/5bqmXHJcbnZhciBzZWFyY2hLZXlXb3JkID0gXCJcIjsgICAgLy/mkJzntKLlhbPplK7lrZdcclxuXHJcbnZhciBnbG9ibGVPcmdMaXN0ID0gbnVsbDsgICAvL+WFqOWxgOeahOe7hOe7h+e7k+aehOaVsOaNrumbhuWQiFxyXG5cclxuLy/mt7vliqDlkZjlt6XnmoTkuLTml7bmlbDmja5cclxudmFyIHRlbXBSb2xlTGlzdCA9IG5ldyBBcnJheSgpOyAgIC8v5Yib5bu655So5oi36YCJ5oup55qE6KeS6ImySURcclxudmFyIHRlbXBCYXRjaElkTGlzdCA9IG5ldyBBcnJheSgpOyAgIC8v5Yib5bu655So5oi36YCJ5oup55qE5om55qyhSURcclxudmFyIHRlbXBDaGVja1NjaG9vbElkID0gMDsgICAgLy/liJvlu7rnlKjmiLfpgInmi6nnmoTmoKHljLpJRFxyXG52YXIgdGVtcENoZWNrRGVwYXJ0SWQgPSAwOyAgICAvL+WIm+W7uueUqOaIt+mAieaLqeeahOmDqOmXqElEXHJcbnZhciB0ZW1wQWRkVXNlck5hbWUgPSBcIlwiOyAgICAgICAgLy/liJvlu7rnlKjmiLfloavlhaXnmoTlp5PlkI1cclxudmFyIHRlbXBBZGRVc2VyUGhvbmUgPSBcIlwiOyAgICAgICAgLy/liJvlu7rnlKjmiLfloavlhaXnmoTnlLXor51cclxudmFyIHRlbXBTdWJqZWN0TGlzdCA9IG5ldyBBcnJheSgpOyAgIC8v5Yib5bu655So5oi36YCJ5oup55qE56eR55uu57yW5Y+3XHJcbnZhciB0ZW1wQ3VycmVudFBvcHVOYW1lID0gXCJcIjsgICAgICAvL+WIm+W7uueUqOaIt+aXtuW9k+WJjeW8ueWHuueahOmhtemdolxyXG5cclxuLy/otKblj7fnu63otLnkuLTml7bmlbDmja5cclxudmFyIHRlbXBVc2VyTGlzdCA9IG5ldyBBcnJheSgpOyAgICAvL+eUqOaIt+mAieaLqeeahOe7rei0uUlE5YiX6KGo77yM5YaF6YOo5qC85byP5Li6e1wiVXNlcklkXCI6MSxcIlVzZXJOYW1lXCI6XCLlvKDkuIlcIixcIlVzZXJBY2NvdW50XCI6XCIxODYxMjM0NVwifVxyXG5cclxuLy/liJ3lp4vljJbmoJFcclxuZnVuY3Rpb24gSW5pdE9yZ1RyZWUoKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnL0Jhc2VNYW5hZ2UvR2V0T3JnVHJlZUxpc3RcIixcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgLy9iZWZvcmVTZW5kOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8vICAgICQoXCIjaWRUYWJsZUNsYXNzIHRib2R5XCIpLmh0bWwoJzx0ciBjbGFzcz1cImZvbnQxMlwiPjx0ZCBjb2xzcGFuPVwiNFwiPuaVsOaNruato+WcqOWKoOi9veS4rS4uLjwvdGQ+PC90cj4nKTtcclxuICAgICAgICAvL30sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vZGVidWdnZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5PSykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyZWVsaXN0ID0gZGF0YS5EYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyZWVsaXN0ICE9IG51bGwgJiYgdHJlZWxpc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmxlT3JnTGlzdCA9IHRyZWVsaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5p+l5om+5py65p6E5L+h5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yZ0luZm8gPSBudWxsOyAgICAvL+acuuaehOacrOi6q+S/oeaBr1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzY2hvb2xMaXN0ID0gbmV3IEFycmF5KCk7ICAgIC8v5py65p6E5YaF55qE5qCh5Yy65YiX6KGoXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlcGFydExpc3QgPSBuZXcgQXJyYXkoKTsgICAgLy/mnLrmnoTlhoXnmoTpg6jpl6jliJfooahcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWVsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmVlbGlzdFtpXS5PcmdMZXZlbCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmdJbmZvID0gdHJlZWxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHJlZWxpc3RbaV0uT3JnTGV2ZWwgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nob29sTGlzdC5wdXNoKHRyZWVsaXN0W2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0cmVlbGlzdFtpXS5PcmdMZXZlbCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBhcnRMaXN0LnB1c2godHJlZWxpc3RbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8v5re75Yqg5py65p6E5ZCN56ew5Yiw6aG25bGCXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yZ0luZm8gIT0gbnVsbCAmJiBvcmdJbmZvICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3NwYW5PcmdOYW1lXCIpLmh0bWwob3JnSW5mby5PcmdOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZPcmdcIikuYXR0cihcIm9yZ0lkXCIsIG9yZ0luZm8uT3JnSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2Rpdk9yZ1wiKS5hdHRyKFwicGFyZW50SWRcIiwgb3JnSW5mby5QYXJlbnRPcmdJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGl2T3JnXCIpLmF0dHIoXCJvcmdMZXZlbFwiLCBvcmdJbmZvLk9yZ0xldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZPcmdcIikuY2xpY2soRXhwYW5kU2Nob29sKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3NwYW5PcmdOYW1lXCIpLmh0bWwoXCLmsqHmnInmlbDmja5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGl2T3JnXCIpLmF0dHIoXCJvcmdJZFwiLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZPcmdcIikuYXR0cihcInBhcmVudElkXCIsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZPcmdcIikuYXR0cihcIm9yZ0xldmVsXCIsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL+a3u+WKoOagoeWMuuiPnOWNlVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY2hvb2xMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzY2hvb2xMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEVsZW1lbnQgPSBcIjxsaSBuYW1lPVxcXCJsaVNjaG9vbFxcXCIgY2xhc3M9XFxcIm9yZy1pdGVtXFxcIiBvcmdJZD1cXFwiXCIgKyBzY2hvb2xMaXN0W2ldLk9yZ0lEICsgXCJcXFwiIHBhcmVudElkID1cXFwiXCIgKyBzY2hvb2xMaXN0W2ldLlBhcmVudE9yZ0lEICsgXCJcXFwiIG9yZ0xldmVsPVxcXCJcIiArIHNjaG9vbExpc3RbaV0uT3JnTGV2ZWwgKyBcIlxcXCIgb3JnTmFtZT1cXFwiXCIgKyBzY2hvb2xMaXN0W2ldLk9yZ05hbWUgKyBcIlxcXCI+PGRpdiBjbGFzcz1cXFwib3JnLWl0ZW0tY29udGVudFxcXCI+PHNwYW4gY2xhc3M9XFxcIm9yZy1pdGVtLWJnXFxcIj48L3NwYW4+PHNwYW4+XCIgKyBzY2hvb2xMaXN0W2ldLk9yZ05hbWUgKyBcIjwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lXFxcIj48L2Rpdj48dWwgY2xhc3M9XFxcImRlcGFydG1lbnQgZm9udDE0XFxcIj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZGVwYXJ0TGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBFbGVtZW50ICs9IFwiPGxpIG5hbWU9XFxcImxpRGVwYXJ0bWVudFxcXCIgY2xhc3M9XFxcImRlcGFydG1lbnQtaXRlbVxcXCIgb3JnSWQ9XFxcIlwiICsgZGVwYXJ0TGlzdFtqXS5PcmdJRCArIFwiXFxcIiBwYXJlbnRJZCA9XFxcIlwiICsgZGVwYXJ0TGlzdFtqXS5QYXJlbnRPcmdJRCArIFwiXFxcIiBvcmdMZXZlbD1cXFwiXCIgKyBkZXBhcnRMaXN0W2ldLk9yZ0xldmVsICsgXCJcXFwiIG9yZ05hbWU9XFxcIlwiICsgZGVwYXJ0TGlzdFtpXS5PcmdOYW1lICsgXCJcXFwiPlwiICsgZGVwYXJ0TGlzdFtqXS5PcmdOYW1lICsgXCI8c3BhbiBjbGFzcz1cXFwiZGVsZXRlIGhpZGRlbiBtaWRkbGUgcmlnaHRcXFwiIG5hbWU9XFxcInNwRGVsZXRlRGVwYXJ0XFxcIj48L3NwYW4+PC9saT5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBFbGVtZW50ICs9IFwiPC91bD48L2xpPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdWxTY2hvb2xBcmVhXCIpLmh0bWwodGVtcEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+mAieS4reesrOS4gOS4quagoeWMuueahOesrOS4gOS4qumDqOmXqFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiW25hbWU9J2xpU2Nob29sJ106Zmlyc3RcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbGlTY2hvb2wnXTpmaXJzdCA+dWw+bGk6Zmlyc3RcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbGlTY2hvb2wnXVwiKS5jbGljayhFeHBhbmRTY2hvb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiW25hbWU9J2xpRGVwYXJ0bWVudCddXCIpLmNsaWNrKEV4cGFuZFNjaG9vbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nc3BEZWxldGVEZXBhcnQnXVwiKS5jbGljayhEZWxldGVEZXBhcnRtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/ojrflj5bmlbDmja5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRXhwYW5kU2Nob29sKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy92YXIgaHRtbCA9ICc8dHIgY2xhc3M9XCJmb250MTJcIj48dGQgY29sc3Bhbj00PicgKyBkYXRhLlJlc3VsdCArICc8L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgIC8vJChcIiNpZFRhYmxlQ2xhc3MgdGJvZHlcIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+WxleW8gOaIluiAheaKmOWPoOagoeWMuuS/oeaBr1xyXG5mdW5jdGlvbiBFeHBhbmRTY2hvb2woZWxlbWVudCkge1xyXG4gICAgdmFyIHRlbXBPYmogPSAkKHRoaXMpO1xyXG4gICAgdmFyIHRlbXBPcmdMZXZlbCA9IHRlbXBPYmouYXR0cihcIm9yZ0xldmVsXCIpO1xyXG4gICAgdmFyIHRlbXBPcmdJZCA9IHRlbXBPYmouYXR0cihcIm9yZ0lkXCIpO1xyXG4gICAgdmFyIHRlbXBPcmdQYXJlbnRJZCA9IHRlbXBPYmouYXR0cihcInBhcmVudElkXCIpO1xyXG4gICAgdmFyIHRlbXBPcmdOYW1lID0gdGVtcE9iai5hdHRyKFwib3JnTmFtZVwiKTtcclxuICAgIGlmICh0ZW1wT3JnTGV2ZWwgIT0gbnVsbCAmJiB0ZW1wT3JnTGV2ZWwgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRlbXBPcmdMZXZlbCA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAvL+aUtui1t+WFtuS7luWvueixoe+8jOWxleW8gOW9k+WJjeWvueixoVxyXG4gICAgICAgICAgICB0ZW1wT2JqLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0nbGlTY2hvb2wnXSA+dWw+bGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHRlbXBPYmouYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHRlbXBPYmouY2hpbGRyZW4oKS5maW5kKFwiPnVsPmxpOmZpcnN0XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0ZW1wT3JnTGV2ZWwgPT0gXCIyXCIpIHtcclxuICAgICAgICAgICAgdGVtcE9iai5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB0ZW1wT2JqLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+eCueWHu+iOt+WPluWIl+ihqOS4reeahOaVsOaNrlxyXG4gICAgICAgIEdldFVzZXJMaXN0KHRlbXBPcmdJZCwgdGVtcE9yZ05hbWUsIHRlbXBPcmdQYXJlbnRJZCwgdGVtcE9yZ0xldmVsKTtcclxuICAgIH1cclxufVxyXG5cclxuLy/liKDpmaTpg6jpl6hcclxuZnVuY3Rpb24gRGVsZXRlRGVwYXJ0bWVudCgpIHtcclxuICAgIHZhciB0ZW1wT2JqID0gJCh0aGlzKS5wYXJlbnQoKTtcclxuICAgIHZhciB0ZW1wT3JnTGV2ZWwgPSB0ZW1wT2JqLmF0dHIoXCJvcmdMZXZlbFwiKTtcclxuICAgIHZhciB0ZW1wT3JnSWQgPSB0ZW1wT2JqLmF0dHIoXCJvcmdJZFwiKTtcclxuICAgIHZhciB0ZW1wT3JnUGFyZW50SWQgPSB0ZW1wT2JqLmF0dHIoXCJwYXJlbnRJZFwiKTtcclxuICAgIHZhciB0ZW1wT3JnTmFtZSA9IHRlbXBPYmouYXR0cihcIm9yZ05hbWVcIik7XHJcbiAgICAvL+WmguaenOaYr+mDqOmXqO+8jOWImeWFgeiuuOWIoOmZpFxyXG4gICAgaWYgKHRlbXBPcmdMZXZlbCAhPSBudWxsICYmIHRlbXBPcmdMZXZlbCAhPSB1bmRlZmluZWQgJiYgdGVtcE9yZ0xldmVsID09IFwiMlwiKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvT3JnL0Jhc2VNYW5hZ2UvRGVsZXRlT3JnRGVwYXJ0bWVudFwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50SUQ6IHRlbXBPcmdJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCIjZGl2RGVsZXRlRGVwYXJ0bWVudFwiKS5oYXNDbGFzcyhcImhpZGRlblwiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RpdkRlbGV0ZURlcGFydG1lbnRcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+afpeeci+aYr+WQpuaYr+WboOS4uumDqOmXqOWGheacieWRmOW3pemAoOaIkOeahOWIoOmZpOWksei0pVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLkNvZGUgPT0gXCIxMS0wMDhcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbml0U2Nob29sVHJlZUxpc3QodGVtcE9yZ0lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNpbWdEZWxldGVQYXJ0Q2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZEZWxldGVEZXBhcnRtZW50XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZEZWxldGVEZXBhcnRtZW50XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WIneWni+WMluagoeWMuumDqOmXqOagkeiPnOWNle+8jOS4u+imgeWcqOWIoOmZpOmDqOmXqOaXtuS9v+eUqFxyXG5mdW5jdGlvbiBJbml0U2Nob29sVHJlZUxpc3QoZGVwYXJ0SWQpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmcvQ29tbW9uTWFuYWdlL0dldE9yZ1RyZWVCeVVzZXJJZFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVwYXJ0bWVudElEOiBkZXBhcnRJZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvL2RlYnVnZ2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuT0spIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLkRhdGEgIT0gbnVsbCAmJiBkYXRhLkRhdGEgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjaG9vbFRyZWVUcGwgPSByZXF1aXJlKFwiT3JnL3NjaG9vbHRyZWVsaXN0LnRwbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3VsRGVsZXRlU2Nob29sVHJlZVwiKS5odG1sKHNjaG9vbFRyZWVUcGwoZGF0YS5EYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDpgInmi6npg6jpl6jkuovku7ZcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcE9iaiA9IHsgb2xkRGVwYXJ0SWQ6IGRlcGFydElkIH07XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIltuYW1lPSdkZXBhcnRtZW50LWl0ZW0nXVwiKS5jbGljayh0ZW1wT2JqLCBTZWxlY3REZWxldGVEZXBhcnRtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+mAieS4reimgeenu+WKqOWRmOW3peeahOmDqOmXqOaIluiAheagoeWMulxyXG5mdW5jdGlvbiBTZWxlY3REZWxldGVEZXBhcnRtZW50KGV2ZW50KSB7XHJcbiAgICB2YXIgdGVtcE9yZ0lkID0gJCh0aGlzKS5hdHRyKFwib3JnSWRcIik7XHJcbiAgICB2YXIgdGVtcFBhcmVudElkID0gJCh0aGlzKS5hdHRyKFwicGFyZW50SWRcIik7XHJcbiAgICB2YXIgdGVtcE9yZ0xldmVsID0gJCh0aGlzKS5hdHRyKFwib3JnTGV2ZWxcIik7XHJcbiAgICB2YXIgdGVtcE9sZERlcGFydElkID0gZXZlbnQub2xkRGVwYXJ0SWQ7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnL0Jhc2VNYW5hZ2UvQ2hhbmdlVXNlckRlcGFydG1lbnRcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG9sZERlcGFydElEOiB0ZW1wT2xkRGVwYXJ0SWQsXHJcbiAgICAgICAgICAgIG5ld09yZ0lkOiB0ZW1wT3JnSWQsXHJcbiAgICAgICAgICAgIG9yZ1R5cGU6IHRlbXBPcmdMZXZlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvL2RlYnVnZ2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuT0spIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9PcmcvQmFzZU1hbmFnZS9EZWxldGVPcmdEZXBhcnRtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBhcnRtZW50SUQ6IHRlbXBPbGREZXBhcnRJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2RlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuT0spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGl2RGVsZXRlRGVwYXJ0bWVudFwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluaXRPcmdUcmVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+aUueWPmOmhteeggei/m+ihjOWIhumhtVxyXG5mdW5jdGlvbiBDaGFuZ2VQYWdlSW5kZXgocGFnZUluZGV4KSB7XHJcbiAgICBjdXJyZW50UGFnZUluZGV4ID0gcGFnZUluZGV4O1xyXG4gICAgR2V0VXNlckxpc3QoY3VycmVudE9yZ0lkLCBjdXJyZW50T3JnTmFtZSwgY3VycmVudE9yZ1BhcmVudElkLCBjdXJyZW50T3JnTGV2ZWwpO1xyXG59XHJcblxyXG4vL+iOt+WPluacuuaehOS4i+eahOeUqOaIt+WIl+ihqFxyXG5mdW5jdGlvbiBHZXRVc2VyTGlzdChvcmdJZCwgb3JnTmFtZSwgb3JnUGFyZW50SWQsIG9yZ0xldmVsKSB7XHJcbiAgICB2YXIgdGVtcE9yZ1R5cGUgPSBcIjFcIjtcclxuICAgIGlmIChvcmdMZXZlbCA9PSBcIjFcIikge1xyXG4gICAgICAgIHRlbXBPcmdUeXBlID0gXCIxXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChvcmdMZXZlbCA9PSBcIjJcIikge1xyXG4gICAgICAgIHRlbXBPcmdUeXBlID0gXCIyXCI7XHJcbiAgICB9XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnL0Jhc2VNYW5hZ2UvR2V0T3JnVXNlckxpc3RcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG9yZ0lkOiBvcmdJZCxcclxuICAgICAgICAgICAgb3JnTmFtZTogb3JnTmFtZSxcclxuICAgICAgICAgICAgb3JnVHlwZTogdGVtcE9yZ1R5cGUsXHJcbiAgICAgICAgICAgIHVzZXJUeXBlOiBjdXJyZW50UGFnZVR5cGUsXHJcbiAgICAgICAgICAgIGZpbHRlclJvbGVJZDogY3VycmVudFJvbGVJZCxcclxuICAgICAgICAgICAgZmlsdGVyRXhwaXJlRGF5OiBjdXJyZW50RXhwaXJlRGF5cyxcclxuICAgICAgICAgICAgc2VhcmNoV29yZDogc2VhcmNoS2V5V29yZCxcclxuICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgICAgICBwYWdlTnVtOiBjdXJyZW50UGFnZUluZGV4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vZGVidWdnZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5PSykge1xyXG4gICAgICAgICAgICAgICAgLy/orr7nva7pg6jpl6jlkI3np7DmmL7npLpcclxuICAgICAgICAgICAgICAgICQoXCIjZGl2T3JnTmFtZVwiKS5odG1sKG9yZ05hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlVHlwZSA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjc3BDYW5BZGRVc2VySW5mb1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZUb3RhbFVzZXJDb3VudERlc2NcIikuaHRtbChcIuWFseiuoTxpIGNsYXNzPVxcXCJyZWRcXFwiPiBcIiArIGRhdGEuRGF0YS5Vc2VyVG90YWxDb3VudCArIFwiIDwvaT7lkI3lkZjlt6XvvIznpoHnlKg8aSBjbGFzcz1cXFwicmVkXFxcIj5cIiArIGRhdGEuRGF0YS5EaXNhYmxlQ291bnQgKyBcIjwvaT7lkI1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/pmpDol4/liLDmnJ/ml7bpl7TliJfvvIzmmL7npLrop5LoibLliJdcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3RoRXhwaXJlVGltZUNvbHVtblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN0aFJvbGVDb2x1bW5cIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5re75Yqg6KeS6Imy5YiX55qE5pWw5o2uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuRGF0YS5Sb2xlTGlzdCAhPSBudWxsICYmIGRhdGEuRGF0YS5Sb2xlTGlzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBMaVN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5EYXRhLlJvbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFJvbGVJbmZvID0gZGF0YS5EYXRhLlJvbGVMaXN0W2ldLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wUm9sZUluZm8gIT0gbnVsbCAmJiB0ZW1wUm9sZUluZm8gIT0gdW5kZWZpbmVkICYmIHRlbXBSb2xlSW5mby5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wTGlTdHJpbmcgKz0gXCI8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCIgcm9sZUlkPVxcXCIwXFxcIj7miYDmnInop5LoibI8L2xpPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wTGlTdHJpbmcgKz0gXCI8bGkgcm9sZUlkPVxcXCJcIiArIHRlbXBSb2xlSW5mb1swXSArIFwiXFxcIj5cIiArIHRlbXBSb2xlSW5mb1sxXSArIFwiPC9saT5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wTGlTdHJpbmcgKz0gXCI8bGkgcm9sZUlkPVxcXCJcIiArIHRlbXBSb2xlSW5mb1swXSArIFwiXFxcIj5cIiArIHRlbXBSb2xlSW5mb1sxXSArIFwiPC9saT5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN1bFJvbGVMaXN0XCIpLmh0bWwodGVtcExpU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDngrnlh7vkuovku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN1bFJvbGVMaXN0XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiI3VsUm9sZUxpc3RcIikuaGFzQ2xhc3MoXCJoaWRkZW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3VsUm9sZUxpc3RcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdWxSb2xlTGlzdFwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdWxSb2xlTGlzdCBsaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJvbGVJZCA9IHBhcnNlSW50KCQodGhpcykuYXR0cihcInJvbGVJZFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ojrflj5bmlbDmja5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXRVc2VyTGlzdChjdXJyZW50T3JnSWQsIGN1cnJlbnRPcmdOYW1lLCBjdXJyZW50T3JnUGFyZW50SWQsIGN1cnJlbnRPcmdMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL+WKoOi9veaooeadv++8jOaYvuekuuWIl+ihqOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLkRhdGEuVXNlckxpc3QgIT0gbnVsbCAmJiBkYXRhLkRhdGEuVXNlckxpc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1c2VyTGlzdFRwbCA9IHJlcXVpcmUoXCJPcmcvYWxsdXNlcmxpc3QudHBsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3RhYmxlVXNlckxpc3QgPnRib2R5XCIpLmh0bWwodXNlckxpc3RUcGwoZGF0YS5EYXRhLlVzZXJMaXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5re75Yqg5p+l55yL55So5oi36K+m5oOF5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nYnRuU2hvd1VzZXJEZXRhaWxzJ11cIikuY2xpY2soU2hvd1VzZXJEZXRhaWxzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjc3BDYW5BZGRVc2VySW5mb1wiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlVHlwZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3NwQ2FuQWRkVXNlckNvdW50RGVzY1wiKS5odG1sKFwi5Y+v5re75Yqg6ICB5biI6LSm5Y+3PGkgY2xhc3M9XFxcInJlZFxcXCI+IFwiICsgZGF0YS5EYXRhLlN1cnBsdXNUZWFjaGVyQ291bnQgKyBcIiA8L2k+5LiqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RpdlRvdGFsVXNlckNvdW50RGVzY1wiKS5odG1sKFwi5YWx6K6hPGkgY2xhc3M9XFxcInJlZFxcXCI+IFwiICsgZGF0YS5EYXRhLlVzZXJUb3RhbENvdW50ICsgXCIgPC9pPuWQjeiAgeW4iFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzcENhbkFkZFVzZXJDb3VudERlc2NcIikuY2xpY2soMSwgU2hvd0FjY291bnREZXRhaWxzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNidG5SZW5ld01vcmVcIikuY2xpY2soMSwgU2hvd1JlbmV3QXJlYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRQYWdlVHlwZSA9PSBcIjJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3NwQ2FuQWRkVXNlckNvdW50RGVzY1wiKS5odG1sKFwi5Y+v5re75Yqg5ZKo6K+i5biI6LSm5Y+3PGkgY2xhc3M9XFxcInJlZFxcXCI+IFwiICsgZGF0YS5EYXRhLlN1cnBsdXNDb3Vuc2Vsb3JDb3VudCArIFwiIDwvaT7kuKpcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGl2VG90YWxVc2VyQ291bnREZXNjXCIpLmh0bWwoXCLlhbHorqE8aSBjbGFzcz1cXFwicmVkXFxcIj4gXCIgKyBVc2VyVG90YWxDb3VudCArIFwiIDwvaT7lkI3lkqjor6LluIhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc3BDYW5BZGRVc2VyQ291bnREZXNjXCIpLmNsaWNrKDIsIFNob3dBY2NvdW50RGV0YWlscyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYnRuUmVuZXdNb3JlXCIpLmNsaWNrKDIsIFNob3dSZW5ld0FyZWEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL+makOiXj+inkuiJsuWIl++8jOaYvuekuuWIsOacn+aXtumXtOWIl1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdGhSb2xlQ29sdW1uXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3RoRXhwaXJlVGltZUNvbHVtblwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDliJfnmoTngrnlh7vkuovku7ZcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3VsRXhwaXJlVGltZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiI3VsRXhwaXJlVGltZVwiKS5oYXNDbGFzcyhcImhpZGRlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN1bEV4cGlyZVRpbWVcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3VsRXhwaXJlVGltZVwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdWxFeHBpcmVUaW1lIGxpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJvbGVJZCA9IHBhcnNlSW50KCQodGhpcykuYXR0cihcImV4cGlyZURheXNcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ojrflj5bmlbDmja5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldFVzZXJMaXN0KGN1cnJlbnRPcmdJZCwgY3VycmVudE9yZ05hbWUsIGN1cnJlbnRPcmdQYXJlbnRJZCwgY3VycmVudE9yZ0xldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yqg6L295qih5p2/77yM5pi+56S65YiX6KGo5pWw5o2uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuRGF0YS5Vc2VyTGlzdCAhPSBudWxsICYmIGRhdGEuRGF0YS5Vc2VyTGlzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVzZXJMaXN0VHBsID0gcmVxdWlyZShcIk9yZy90ZWFjaGVybGlzdC50cGxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdGFibGVVc2VyTGlzdCA+dGJvZHlcIikuaHRtbCh1c2VyTGlzdFRwbChkYXRhLkRhdGEuVXNlckxpc3QpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDmn6XnnIvnlKjmiLfor6bmg4Xkuovku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIltuYW1lPSdidG5TaG93VXNlckRldGFpbHMnXVwiKS5jbGljayhTaG93VXNlckRldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+eCueWHu+WkjemAieahhu+8jOmAieS4reeUqOaIt1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3RhYmxlVXNlckxpc3QgaW5wdXRbbmFtZT0nY2tDaGVja1VzZXInXVwiKS5jbGljayhTZWxldGVkVXNlckluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5YaZ5YiG6aG16YC76L6RXHJcbiAgICAgICAgICAgICAgICBQYWdpbmF0b3IuUGFnaW5hdG9yKDEwLCBjdXJyZW50UGFnZUluZGV4LCBkYXRhLkRhdGEuVXNlclRvdGFsQ291bnQsIENoYW5nZVBhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaHRtbCA9ICc8dHIgY2xhc3M9XCJmb250MTJcIj48dGQgY29sc3Bhbj00PicgKyBkYXRhLkRhdGEuUmVzdWx0ICsgJzwvdGQ+PC90cj4nO1xyXG4gICAgICAgICAgICAgICAgJChcIiNpZFRhYmxlQ2xhc3MgdGJvZHlcIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+mAmui/h+WkjemAieahhu+8jOWLvumAieWOu+WPlua2iOWLvumAieeUqOaIt1xyXG5mdW5jdGlvbiBTZWxldGVkVXNlckluZm8oKSB7XHJcbiAgICB2YXIgdGVtcFVzZXJJZCA9ICQodGhpcykuYXR0cihcInVzZXJJZFwiKTtcclxuICAgIHZhciB0ZW1wVXNlck5hbWUgPSAkKHRoaXMpLmF0dHIoXCJ1c2VyTmFtZVwiKTtcclxuICAgIHZhciB0ZW1wVXNlckFjY291bnQgPSAkKHRoaXMpLmF0dHIoXCJ1c2VyQWNjb3VudFwiKTtcclxuICAgIHZhciB0ZW1wVXNlckluZm8gPSB7IFwiVXNlcklkXCI6IHRlbXBVc2VySWQsIFwiVXNlck5hbWVcIjogdGVtcFVzZXJOYW1lLCBcIlVzZXJBY2NvdW50XCI6IHRlbXBVc2VyQWNjb3VudCB9O1xyXG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICB0ZW1wVXNlckxpc3QucHVzaCh0ZW1wVXNlckluZm8pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdGVtcEluZGV4ID0gLTE7XHJcbiAgICAgICAgJC5lYWNoKHRlbXBVc2VyTGlzdCwgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuVXNlcklkID09IHRlbXBVc2VySWQpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRlbXBJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRlbXBVc2VyTGlzdC5zcGxpY2UodGVtcEluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5p+l5om+55So5oi3XHJcbmZ1bmN0aW9uIFNlYXJjaFVzZXIoKSB7XHJcbiAgICB2YXIgc2VhcmNoV29yZCA9ICQoXCIjdHh0U2VhcmNoV29yZFwiKS52YWwoKTtcclxuICAgIGlmIChzZWFyY2hXb3JkID09IFwiXCIgfHwgc2VhcmNoV29yZCA9PSBudWxsIHx8IHNlYXJjaFdvcmQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2VhcmNoS2V5V29yZCA9IHNlYXJjaFdvcmQ7XHJcbiAgICBHZXRVc2VyTGlzdChjdXJyZW50T3JnSWQsIGN1cnJlbnRPcmdOYW1lLCBjdXJyZW50T3JnUGFyZW50SWQsIGN1cnJlbnRPcmdMZXZlbCk7XHJcbn1cclxuXHJcbi8v5YiH5o2i6aG16Z2i77yMMOS4uuWFqOmDqOWRmOW3peWIl+ihqOmhtemdou+8jDHkuLrogIHluIjliJfooajpobXpnaLvvIwy5Li65ZKo6K+i5biI5YiX6KGo6aG16Z2iXHJcbmZ1bmN0aW9uIENoYW5nZVBhZ2UoZXZlbnQpIHtcclxuICAgIGN1cnJlbnRQYWdlVHlwZSA9IGV2ZW50LnBhZ2VJbmRleDtcclxuICAgIC8v5YiH5o2i6YCJ6aG55Y2h54q25oCBXHJcbiAgICBpZiAocGFnZUluZGV4ID09IFwiMFwiKSB7XHJcbiAgICAgICAgJChcIiNzcE9yZ0FsbFVzZXJcIikucGFyZW50KCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiI3NwT3JnQWxsVXNlclwiKS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBhZ2VJbmRleCA9PSBcIjFcIikge1xyXG4gICAgICAgICQoXCIjc3BPcmdUZWFjaGVyVXNlclwiKS5wYXJlbnQoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCIjc3BPcmdUZWFjaGVyVXNlclwiKS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBhZ2VJbmRleCA9PSBcIjJcIikge1xyXG4gICAgICAgICQoXCIjc3BPcmdDb3Vuc2Vsb3JVc2VyXCIpLnBhcmVudCgpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcIiNzcE9yZ0NvdW5zZWxvclVzZXJcIikucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPluaVsOaNrlxyXG4gICAgR2V0VXNlckxpc3QoY3VycmVudE9yZ0lkLCBjdXJyZW50T3JnTmFtZSwgY3VycmVudE9yZ1BhcmVudElkLCBjdXJyZW50T3JnTGV2ZWwpO1xyXG59XHJcblxyXG4vL+mqjOivgeaVsOaNruaYr+WQpuS4uuepulxyXG5mdW5jdGlvbiBWYWxpZGF0YURhdGFJc051bGwodmFsaWRhdGVkRGF0YSkge1xyXG4gICAgaWYgKHZhbGlkYXRlZERhdGEgPT0gXCJcIiB8fCB2YWxpZGF0ZWREYXRhID09IG51bGwgfHwgdmFsaWRhdGVkRGF0YSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLy/mn6XnnIvnlKjmiLfor6bmg4VcclxuZnVuY3Rpb24gU2hvd1VzZXJEZXRhaWxzKCkge1xyXG4gICAgLy/ojrflj5bnlKjmiLdJRFxyXG4gICAgdmFyIHRlbXBVc2VySWQgPSAkKHRoaXMpLmF0dHIoXCJ1c2VySWRcIik7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL09yZy9Vc2VyTWFuYWdlL1VzZXJEZXRhaWxzSW5mbz91c2VySWQ9XCIgKyB0ZW1wVXNlcklkO1xyXG59XHJcblxyXG4vL+aYvuekuuWIm+W7uuagoeWMuueis+WxglxyXG5mdW5jdGlvbiBTaG93Q3JlYXRlU2Nob29sQXJlYSgpIHtcclxuICAgICQoXCIjaW1nQWRkU2Nob29sQ2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjZGl2QWRkU2Nob29sXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI2J0bkFkZFNjaG9vbFwiKS5jbGljayhBZGRTY2hvb2wpO1xyXG4gICAgJChcIiNkaXZBZGRTY2hvb2xcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbn1cclxuXHJcbi8v5Yib5bu65qCh5Yy6XHJcbmZ1bmN0aW9uIEFkZFNjaG9vbCgpIHtcclxuICAgIHZhciB0ZW1wU2Nob29sTmFtZSA9ICQoXCIjdHh0U2Nob29sTmFtZVwiKS52YWwoKTtcclxuICAgIGlmICh0ZW1wU2Nob29sTmFtZSA9PSBcIlwiIHx8IHRlbXBTY2hvb2xOYW1lID09IG51bGwgfHwgdGVtcFNjaG9vbE5hbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJChcIiNkaXZTY2hvb2xJc1VzZWRcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjZGl2U2Nob29sSXNVc2VkID5kaXY6Zmlyc3RcIikuaHRtbChcIuagoeWMuuWQjeensOS4jeiDveS4uuepuu+8gVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnL0Jhc2VNYW5hZ2UvQWRkT3JnU2Nob29sXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBzY2hvb2xOYW1lOiB0ZW1wU2Nob29sTmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvL2RlYnVnZ2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuT0spIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZGl2QWRkU2Nob29sXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgSW5pdE9yZ1RyZWUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZGl2U2Nob29sSXNVc2VkXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLkNvZGUgPT0gXCIxMS0wMDZcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2U2Nob29sSXNVc2VkID5kaXY6Zmlyc3RcIikuaHRtbChcIuagoeWMuuaVsOmHj+W3sui+vuWIsOS4iumZkO+8jOaXoOazlei/m+ihjOWIm+W7uu+8gVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5Db2RlID09IFwiMTEtMDA1XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2RpdlNjaG9vbElzVXNlZCA+ZGl2OmZpcnN0XCIpLmh0bWwoXCLor6XlkI3np7Dlt7Looqvlhbbku5bmoKHljLrkvb/nlKjvvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/mmL7npLrliJvlu7rpg6jpl6jlvLnlsYJcclxuZnVuY3Rpb24gU2hvd0NyZWF0ZURlcGFydEFyZWEoKSB7XHJcbiAgICAkKFwiI2ltZ0FkZFBhcnRDbG9zZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNkaXZBZGREZXBhcnRtZW50XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI2J0bkFkZERlcGFydG1lbnRcIikuY2xpY2soQWRkU2Nob29sKTtcclxuICAgICQoXCIjZGl2QWRkRGVwYXJ0bWVudFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxufVxyXG5cclxuLy/liJvlu7rmoKHljLpcclxuZnVuY3Rpb24gQWRkRGVwYXJ0bWVudCgpIHtcclxuICAgIHZhciB0ZW1wRGVwYXJ0TmFtZSA9ICQoXCIjdHh0RGVwYXJ0TmFtZVwiKS52YWwoKTtcclxuICAgIGlmICh0ZW1wRGVwYXJ0TmFtZSA9PSBcIlwiIHx8IHRlbXBEZXBhcnROYW1lID09IG51bGwgfHwgdGVtcERlcGFydE5hbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJChcIiNkaXZEZXBhcnRJc1VzZWRcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjZGl2RGVwYXJ0SXNVc2VkID5kaXY6Zmlyc3RcIikuaHRtbChcIumDqOmXqOWQjeensOS4jeiDveS4uuepuu+8gVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgdGVtcFNjaG9vbElkID0gMDtcclxuICAgIGlmIChjdXJyZW50T3JnTGV2ZWwgPT0gXCIxXCIpIHtcclxuICAgICAgICB0ZW1wU2Nob29sSWQgPSBjdXJyZW50T3JnSWQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGVtcFNjaG9vbElkID09IDAgfHwgdGVtcFNjaG9vbElkID09IFwiMFwiKSB7XHJcbiAgICAgICAgJChcIiNkaXZEZXBhcnRJc1VzZWRcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjZGl2RGVwYXJ0SXNVc2VkID5kaXY6Zmlyc3RcIikuaHRtbChcIuivt+WFiOmAieaLqeimgeWIm+W7uumDqOmXqOeahOagoeWMuu+8gVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnL0Jhc2VNYW5hZ2UvQWRkT3JnRGVwYXJ0bWVudFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVwYXJ0bWVudE5hbWU6IHRlbXBEZXBhcnROYW1lLFxyXG4gICAgICAgICAgICBzY2hvb2xJZDogdGVtcFNjaG9vbElkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vZGVidWdnZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5PSykge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkaXZBZGREZXBhcnRtZW50XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgSW5pdE9yZ1RyZWUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZGl2RGVwYXJ0SXNVc2VkXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLkNvZGUgPT0gXCIxMS0wMDdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2RGVwYXJ0SXNVc2VkID5kaXY6Zmlyc3RcIikuaHRtbChcIuivpeWQjeensOW3suiiq+WFtuS7lumDqOmXqOS9v+eUqO+8gVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+aYvuekuua3u+WKoOWRmOW3peW8ueWxglxyXG5mdW5jdGlvbiBTaG93QWRkTmV3VXNlckFyZWEoKSB7XHJcbiAgICAkKFwiI2ltZ0FkZFVzZXJDbG9zZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNkaXZBZGRVc2VyXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI2J0bkFkZE5ld1VzZXJcIikuY2xpY2soQ2hlY2tQb3NpdGlvblN1Ym1pdCk7XHJcbiAgICAvL+iOt+WPluinkuiJsuWIl+ihqFxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL09yZy9Db21tb25NYW5hZ2UvR2V0UG9zaXRpb25MaXN0XCIsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvL2RlYnVnZ2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuT0spIHtcclxuICAgICAgICAgICAgICAgIHZhciB1c2VyTGlzdFRwbCA9IHJlcXVpcmUoXCJPcmcvb3Jncm9sZWxpc3QudHBsXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiN1bEFkZFVzZXJQb3NpdGlvblwiKS5odG1sKHVzZXJMaXN0VHBsKGRhdGEuRGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgLy/mt7vliqDpgInkuK3kuovku7ZcclxuICAgICAgICAgICAgICAgICQoXCIjdWxBZGRVc2VyUG9zaXRpb24gaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBSb2xlSWQgPSAkKHRoaXMpLmF0dHIoXCJyb2xlSWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBSb2xlSWQgPT0gXCIyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6ZqQ6JeP5qCh5Yy644CB6YOo6Zeo6YCJ5oup5qGGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RpdkFkZFVzZXJEZXBhcnRtZW50XCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+WMluagoeWMuuOAgemDqOmXqFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5pdEFkZFVzZXJTY2hvb2xMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WxleekuuagoeWMuuOAgemDqOmXqOmAieaLqeahhlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZBZGRVc2VyRGVwYXJ0bWVudFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFJvbGVMaXN0LnB1c2godGVtcFJvbGVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBSb2xlTGlzdC5pbmRleE9mKHRlbXBSb2xlSWQpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFJvbGVMaXN0LnJlbW92ZSh0ZW1wUm9sZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy/mt7vliqDmn6XnnIvor6bmg4Xkuovku7Ys5q2k5aSE5by55bGC5o+Q56S65pyJ6Zeu6aKYXHJcbiAgICAgICAgICAgICAgICBTaG93Um9sZURlc2MoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vdmFyIGh0bWwgPSAnPHRyIGNsYXNzPVwiZm9udDEyXCI+PHRkIGNvbHNwYW49ND4nICsgZGF0YS5SZXN1bHQgKyAnPC90ZD48L3RyPic7XHJcbiAgICAgICAgICAgICAgICAvLyQoXCIjaWRUYWJsZUNsYXNzIHRib2R5XCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI2RpdkFkZFVzZXJcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICB0ZW1wQ3VycmVudFBvcHVOYW1lID0gXCJkaXZBZGRVc2VyXCI7XHJcbn1cclxuXHJcbi8v5Yid5aeL5YyW5re75Yqg5ZGY5bel5pe25qCh5Yy65LiO6YOo6ZeoXHJcbmZ1bmN0aW9uIEluaXRBZGRVc2VyU2Nob29sTGlzdCgpIHtcclxuICAgIC8v6I635Y+W5qCh5Yy65YiX6KGoXHJcbiAgICB2YXIgdGVtcFNjaG9vbExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgIGlmIChnbG9ibGVPcmdMaXN0ICE9IG51bGwgJiYgZ2xvYmxlT3JnTGlzdCAhPSB1bmRlZmluZWQgJiYgZ2xvYmxlT3JnTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnbG9ibGVPcmdMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wT3JnSW5mbyA9IGdsb2JsZU9yZ0xpc3RbaV07XHJcbiAgICAgICAgICAgIGlmICh0ZW1wT3JnSW5mby5PcmdMZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wU2Nob29sTGlzdC5wdXNoKHRlbXBPcmdJbmZvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+a3u+WKoOagoeWMuuWIl+ihqFxyXG4gICAgICAgIHZhciB0ZW1wU2Nob29sU3RyaW5nID0gXCJcIjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBTY2hvb2xMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRlbXBTY2hvb2xTdHJpbmcgKz0gXCI8b3B0aW9uIHZhbHVlPVxcXCJcIiArIHRlbXBTY2hvb2xMaXN0W2ldLk9yZ0lEICsgXCJcXFwiPlwiICsgdGVtcFNjaG9vbExpc3RbaV0uT3JnTmFtZSArIFwiPC9vcHRpb24+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjZGl2QWRkVXNlckRlcGFydG1lbnQgPnNlbGVjdFtuYW1lPSdzY2hvb2wnXVwiKS5odG1sKHRlbXBTY2hvb2xTdHJpbmcpO1xyXG4gICAgICAgIC8v5re75Yqg6YCJ5oup5LqL5Lu2XHJcbiAgICAgICAgJChcIiNkaXZBZGRVc2VyRGVwYXJ0bWVudCA+c2VsZWN0W25hbWU9J3NjaG9vbCddPm9wdGlvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRlbXBDaGVja1NjaG9vbElkID0gcGFyc2VJbnQoJCh0aGlzKS5hdHRyKFwidmFsdWVcIikpO1xyXG4gICAgICAgICAgICBpZiAodGVtcENoZWNrU2Nob29sSWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcERlcGFydFN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdsb2JsZU9yZ0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2xvYmxlT3JnTGlzdFtpXS5QYXJlbnRPcmdJRCA9PSB0ZW1wQ2hlY2tTY2hvb2xJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wRGVwYXJ0U3RyaW5nICs9IFwiPG9wdGlvbiB2YWx1ZT1cXFwiXCIgKyBnbG9ibGVPcmdMaXN0W2ldLk9yZ0lEICsgXCJcXFwiPlwiICsgZ2xvYmxlT3JnTGlzdFtpXS5PcmdOYW1lICsgXCI8L29wdGlvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkKFwiI2RpdkFkZFVzZXJEZXBhcnRtZW50ID5zZWxlY3RbbmFtZT0ncGFydCddXCIpLmh0bWwodGVtcERlcGFydFN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2RpdkFkZFVzZXJEZXBhcnRtZW50ID5zZWxlY3RbbmFtZT0ncGFydCddPm9wdGlvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcENoZWNrRGVwYXJ0SWQgPSBwYXJzZUludCgkKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+mAieaLqeinkuiJsuaPkOS6pOS6i+S7tlxyXG5mdW5jdGlvbiBDaGVja1Bvc2l0aW9uU3VibWl0KCkge1xyXG4gICAgLy/pqozor4HnlKjmiLfovpPlhaXnmoTmlbDmja7moLzlvI/lj4rlhoXlrrlcclxuICAgIHRlbXBBZGRVc2VyTmFtZSA9ICQoXCIjdHh0QWRkVXNlck5hbWVcIikudmFsKCk7XHJcbiAgICB0ZW1wQWRkVXNlclBob25lID0gJChcIiN0eHRBZGRVc2VyUGhvbmVcIikudmFsKCk7XHJcbiAgICBpZiAodGVtcEFkZFVzZXJOYW1lID09IFwiXCIgfHwgdGVtcEFkZFVzZXJOYW1lID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICQoXCIjZGl2QWRkTmV3VXNlclRpcCA+ZGl2XCIpLmh0bWwoXCLlp5PlkI3kuI3og73kuLrnqbrvvIFcIik7XHJcbiAgICAgICAgJChcIiNkaXZBZGROZXdVc2VyVGlwXCIpLnNob3coKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGVtcEFkZFVzZXJOYW1lLmxlbmd0aCA+IDgpIHtcclxuICAgICAgICAkKFwiI2RpdkFkZE5ld1VzZXJUaXAgPmRpdlwiKS5odG1sKFwi5aeT5ZCN6ZW/5bqm5LiN6IO96LaF6L+HOOS9je+8gVwiKTtcclxuICAgICAgICAkKFwiI2RpdkFkZE5ld1VzZXJUaXBcIikuc2hvdygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBteXJlZyA9IC9eKCgoMTNbMC05XXsxfSl8KDE1WzAtOV17MX0pfCgxOFswLTldezF9KSkrXFxkezh9KSQvO1xyXG4gICAgaWYgKCFteXJlZy50ZXN0KHRlbXBBZGRVc2VyUGhvbmUpKSB7XHJcbiAgICAgICAgJChcIiNkaXZBZGROZXdVc2VyVGlwID5kaXZcIikuaHRtbChcIuivt+i+k+WFpeacieaViOeahOaJi+acuuWPt+eggTjkvY3vvIFcIik7XHJcbiAgICAgICAgJChcIiNkaXZBZGROZXdVc2VyVGlwXCIpLnNob3coKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvL+WmguaenOaYr+iAgeW4iO+8jOWImeW8ueWHuumAieaLqeenkeebruW8ueahhlxyXG4gICAgaWYgKHRlbXBSb2xlTGlzdCA9PSBudWxsIHx8IHRlbXBSb2xlTGlzdCA9PSB1bmRlZmluZWQgfHwgdGVtcFJvbGVMaXN0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgJChcIiNkaXZBZGROZXdVc2VyVGlwID5kaXZcIikuaHRtbChcIuiBjOS9jeS4jeiDveS4uuepuu+8gVwiKTtcclxuICAgICAgICAkKFwiI2RpdkFkZE5ld1VzZXJUaXBcIikuc2hvdygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBpc1RlYWNoZXIgPSBmYWxzZTtcclxuICAgIHZhciBpc0NvdW5zZWxvciA9IGZhbHNlO1xyXG4gICAgdmFyIGlzQXJlYU1hbmFnZXIgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcFJvbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRlbXBSb2xlTGlzdC5pbmRleE9mKFwiNlwiKSkge1xyXG4gICAgICAgICAgICBpc0NvdW5zZWxvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0ZW1wUm9sZUxpc3QuaW5kZXhPZihcIjhcIikpIHtcclxuICAgICAgICAgICAgaXNDb3Vuc2Vsb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGVtcFJvbGVMaXN0LmluZGV4T2YoXCIyXCIpKSB7XHJcbiAgICAgICAgICAgIGlzQXJlYU1hbmFnZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5LiN5piv5Yy65Z+f57uP55CG77yM5bCx6ZyA6KaB6aqM6K+B5qCh5Yy65Y+K6YOo6Zeo5piv5ZCm5aGr5YaZXHJcbiAgICBpZiAoIWlzQXJlYU1hbmFnZXIpIHtcclxuICAgICAgICBpZiAodGVtcENoZWNrU2Nob29sSWQgPT0gMCB8fCB0ZW1wQ2hlY2tEZXBhcnRJZCA9PSAwKSB7XHJcbiAgICAgICAgICAgICQoXCIjZGl2QWRkTmV3VXNlclRpcCA+ZGl2XCIpLmh0bWwoXCLpg6jpl6jkuI3og73kuLrnqbrvvIFcIik7XHJcbiAgICAgICAgICAgICQoXCIjZGl2QWRkTmV3VXNlclRpcFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc1RlYWNoZXIpIHtcclxuICAgICAgICAgICAgaWYgKGlzQ291bnNlbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBJbml0VGVhY2hlclNlbGVjdFN1YmplY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBJbml0VGVhY2hlclNlbGVjdFN1YmplY3QoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzQ291bnNlbG9yKSB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5piv5ZKo6K+i5biI77yM5YiZ5by55Ye66YCJ5oup5om55qyh5by55qGGXHJcbiAgICAgICAgICAgICQoXCIjZGl2QWRkVXNlclwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgJChcIiNidG5BZGRVc2VyU3VibWl0QmF0Y2hzXCIpLmNsaWNrKEFkZE5ld1VzZXIpO1xyXG4gICAgICAgICAgICBJbml0Q291bnNlbG9yQmF0Y2hzKCk7XHJcbiAgICAgICAgICAgICQoXCIjZGl2QWRkVXNlckJhdGNoU2VsZWN0UGFnZVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgdGVtcEN1cnJlbnRQb3B1TmFtZSA9IFwiZGl2QWRkVXNlckJhdGNoU2VsZWN0UGFnZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy/nm7TmjqXnlLPor7fliJvlu7pcclxuICAgICAgICAgICAgdGVtcEN1cnJlbnRQb3B1TmFtZSA9IFwiZGl2QWRkVXNlclwiO1xyXG4gICAgICAgICAgICBBZGROZXdVc2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL+WmguaenOaWsOWIm+W7uueahOWRmOW3peWMheWQq+iAgeW4iOinkuiJsu+8jOWImeWwhuW8ueWHuumAieaLqeWtpuenkeeVjOmdolxyXG4vL+WPguaVsOivtOaYju+8mlxyXG4vL2lzVGVhY2VyQW5kQ291bnNlbG9y77ya5piv5ZCm5piv6ICB5biI5ZKM5ZKo6K+i5biI55qE5aSN5ZCI6KeS6ImyXHJcbmZ1bmN0aW9uIEluaXRUZWFjaGVyU2VsZWN0U3ViamVjdChpc1RlYWNlckFuZENvdW5zZWxvcikge1xyXG4gICAgJChcIiNkaXZBZGRVc2VyXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgJChcIiNidG5BZGRVc2VyQ2hlY2tTdWJqZWN0UGFnZVwiKS5jbGljayhBZGROZXdVc2VyKTtcclxuICAgICQoXCIjaW1nQWRkVXNlckNsb3NlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI2RpdlNlbGVjdFN1YmplY3RcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICB9KTtcclxuICAgIC8v5Yid5aeL5YyW56eR55uu5YiX6KGo5Y+K5om55qyh5YiX6KGoXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnL0NvbW1vbk1hbmFnZS9HZXRTdWJqZWN0TGlzdFwiLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WKoOi9veenkeebruWIl+ihqFxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuRGF0YSAhPSBudWxsICYmIGRhdGEuRGF0YSAhPSB1bmRlZmluZWQgJiYgZGF0YS5EYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3ViamVjdExpc3QgPSBkYXRhLkRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1YmplY3RMaXN0VHBsID0gcmVxdWlyZShcIk9yZy9zdWJqZWN0c2xpc3QudHBsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdWxBZGRVc2VyU3ViamVjdExpc3RcIikuaHRtbChzdWJqZWN0TGlzdFRwbChzdWJqZWN0TGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5re75Yqg6YCJ5Lit5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN1bEFkZFVzZXJTdWJqZWN0TGlzdCBpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbVNJRCA9ICQodGhpcykuYXR0cihcInN1YmplY3RJZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBTdWJqZWN0TGlzdC5wdXNoKHRlbVNJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcFN1YmplY3RMaXN0LmluZGV4T2YodGVtU0lEKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wU3ViamVjdExpc3QucmVtb3ZlKHRlbVNJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vdmFyIGh0bWwgPSAnPHRyIGNsYXNzPVwiZm9udDEyXCI+PHRkIGNvbHNwYW49ND4nICsgZGF0YS5SZXN1bHQgKyAnPC90ZD48L3RyPic7XHJcbiAgICAgICAgICAgICAgICAvLyQoXCIjaWRUYWJsZUNsYXNzIHRib2R5XCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmcvQ29tbW9uTWFuYWdlL0dldEJhdGNoTGlzdFwiLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5EYXRhICE9IG51bGwgJiYgZGF0YS5EYXRhICE9IHVuZGVmaW5lZCAmJiBkYXRhLkRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXRjaExpc3QgPSBkYXRhLkRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBDb3Vuc2Vsb3JCYXRjaExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFRlYWNoZXJCYXRjaExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhdGNoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmF0Y2hMaXN0W2ldLkFjY291bnRUeXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUZWFjaGVyQmF0Y2hMaXN0LnB1c2goYmF0Y2hMaXN0W2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmF0Y2hMaXN0W2ldLkFjY291bnRUeXBlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDb3Vuc2Vsb3JCYXRjaExpc3QucHVzaChiYXRjaExpc3RbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXRjaExpc3RUcGwgPSByZXF1aXJlKFwiT3JnL2JhdGNoc2xpc3QudHBsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c5piv5aSN5ZCI6KeS6Imy77yM5YiZ5bGV56S65Lik5Liq6KeS6Imy55qE5om55qyh5L+h5oGv77yM5ZCm5YiZ5bGV56S65Y2V5LiA6KeS6Imy55qE5om55qyh5L+h5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGVhY2VyQW5kQ291bnNlbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdWxBZGRUZWFjaGVyQmF0Y2hMaXN0XCIpLmh0bWwoYmF0Y2hMaXN0VHBsKHRlbXBUZWFjaGVyQmF0Y2hMaXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdWxBZGRDb3Vuc2Vsb3RCYXRjaExpc3RcIikuaHRtbChiYXRjaExpc3RUcGwodGVtcENvdW5zZWxvckJhdGNoTGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3VsQWRkQ291bnNlbG90QmF0Y2hMaXN0XCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDpgInkuK3kuovku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN1bEFkZFRlYWNoZXJCYXRjaExpc3QgaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtQklEID0gJCh0aGlzKS5hdHRyKFwiYmF0Y2hJZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEJhdGNoSWRMaXN0LnB1c2godGVtQklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBCYXRjaElkTGlzdC5pbmRleE9mKHRlbUJJRCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBCYXRjaElkTGlzdC5yZW1vdmUodGVtQklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3VsQWRkQ291bnNlbG90QmF0Y2hMaXN0IGlucHV0W3R5cGU9J2NoZWNrYm94J11cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbUJJRCA9ICQodGhpcykuYXR0cihcImJhdGNoSWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBCYXRjaElkTGlzdC5wdXNoKHRlbUJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wQmF0Y2hJZExpc3QuaW5kZXhPZih0ZW1CSUQpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wQmF0Y2hJZExpc3QucmVtb3ZlKHRlbUJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3VsQWRkVGVhY2hlckJhdGNoTGlzdFwiKS5odG1sKGJhdGNoTGlzdFRwbCh0ZW1wVGVhY2hlckJhdGNoTGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3VsQWRkQ291bnNlbG90QmF0Y2hMaXN0XCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDpgInkuK3kuovku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN1bEFkZFRlYWNoZXJCYXRjaExpc3QgaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtQklEID0gJCh0aGlzKS5hdHRyKFwiYmF0Y2hJZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEJhdGNoSWRMaXN0LnB1c2godGVtQklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBCYXRjaElkTGlzdC5pbmRleE9mKHRlbUJJRCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBCYXRjaElkTGlzdC5yZW1vdmUodGVtQklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vdmFyIGh0bWwgPSAnPHRyIGNsYXNzPVwiZm9udDEyXCI+PHRkIGNvbHNwYW49ND4nICsgZGF0YS5SZXN1bHQgKyAnPC90ZD48L3RyPic7XHJcbiAgICAgICAgICAgICAgICAvLyQoXCIjaWRUYWJsZUNsYXNzIHRib2R5XCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIjZGl2U2VsZWN0U3ViamVjdFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIHRlbXBDdXJyZW50UG9wdU5hbWUgPSBcImRpdlNlbGVjdFN1YmplY3RcIjtcclxufVxyXG5cclxuLy/mlrDlu7rlkZjlt6XmmK/liJ3lp4vljJblkqjor6LluIjmibnmrKHliJfooahcclxuZnVuY3Rpb24gSW5pdENvdW5zZWxvckJhdGNocygpIHtcclxuICAgICQoXCIjZGl2QWRkVXNlclwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICQoXCIjYnRuQWRkVXNlclN1Ym1pdEJhdGNoc1wiKS5jbGljayhBZGROZXdVc2VyKTtcclxuICAgICQoXCIjaW1nU2VsZWN0QmF0Y2hDbG9zZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNkaXZBZGRVc2VyQmF0Y2hTZWxlY3RQYWdlXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy/liJ3lp4vljJbmibnmrKHliJfooahcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmcvQ29tbW9uTWFuYWdlL0dldEJhdGNoTGlzdFwiLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5EYXRhICE9IG51bGwgJiYgZGF0YS5EYXRhICE9IHVuZGVmaW5lZCAmJiBkYXRhLkRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXRjaExpc3QgPSBkYXRhLkRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBDb3Vuc2Vsb3JCYXRjaExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhdGNoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmF0Y2hMaXN0W2ldLkFjY291bnRUeXBlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDb3Vuc2Vsb3JCYXRjaExpc3QucHVzaChiYXRjaExpc3RbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXRjaExpc3RUcGwgPSByZXF1aXJlKFwiT3JnL2JhdGNoc2xpc3QudHBsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdWxBZGRVc2VyQmF0Y2hMaXN0XCIpLmh0bWwoYmF0Y2hMaXN0VHBsKHRlbXBDb3Vuc2Vsb3JCYXRjaExpc3QpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+a3u+WKoOmAieS4reS6i+S7tlxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdWxBZGRVc2VyQmF0Y2hMaXN0IGlucHV0W3R5cGU9J2NoZWNrYm94J11cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtQklEID0gJCh0aGlzKS5hdHRyKFwiYmF0Y2hJZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBCYXRjaElkTGlzdC5wdXNoKHRlbUJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcEJhdGNoSWRMaXN0LmluZGV4T2YodGVtQklEKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wQmF0Y2hJZExpc3QucmVtb3ZlKHRlbUJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vdmFyIGh0bWwgPSAnPHRyIGNsYXNzPVwiZm9udDEyXCI+PHRkIGNvbHNwYW49ND4nICsgZGF0YS5SZXN1bHQgKyAnPC90ZD48L3RyPic7XHJcbiAgICAgICAgICAgICAgICAvLyQoXCIjaWRUYWJsZUNsYXNzIHRib2R5XCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIjZGl2QWRkVXNlckJhdGNoU2VsZWN0UGFnZVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIHRlbXBDdXJyZW50UG9wdU5hbWUgPSBcImRpdkFkZFVzZXJCYXRjaFNlbGVjdFBhZ2VcIjtcclxufVxyXG5cclxuLy/mt7vliqDmlrDlkZjlt6VcclxuZnVuY3Rpb24gQWRkTmV3VXNlcigpIHtcclxuICAgIHZhciB0ZW1wUG9zaXRpb25JZHMgPSBcIlwiO1xyXG4gICAgdmFyIHRlbXBTdWJqZWN0SWRzID0gXCJcIjtcclxuICAgIHZhciB0ZW1wQmF0Y2hJZHMgPSBcIlwiO1xyXG4gICAgaWYgKHRlbXBSb2xlTGlzdCAhPSBudWxsICYmIHRlbXBSb2xlTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wUm9sZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGVtcFBvc2l0aW9uSWRzICs9IHRlbXBSb2xlTGlzdFtpXSArIFwiLFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0ZW1wU3ViamVjdExpc3QgIT0gbnVsbCAmJiB0ZW1wU3ViamVjdExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcFN1YmplY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRlbXBTdWJqZWN0SWRzICs9IHRlbXBTdWJqZWN0TGlzdFtpXSArIFwiLFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0ZW1wQmF0Y2hJZExpc3QgIT0gbnVsbCAmJiB0ZW1wQmF0Y2hJZExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcEJhdGNoSWRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRlbXBCYXRjaElkcyArPSB0ZW1wQmF0Y2hJZExpc3RbaV0gKyBcIixcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnL1VzZXJNYW5hZ2UvQWRkT3JnVXNlclwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlck5hbWU6IHRlbXBBZGRVc2VyTmFtZSxcclxuICAgICAgICAgICAgdXNlclBob25lOiB0ZW1wQWRkVXNlclBob25lLFxyXG4gICAgICAgICAgICBwb3NpdGlvbklkOiB0ZW1wUG9zaXRpb25JZHMsXHJcbiAgICAgICAgICAgIHNjaG9vbElkOiB0ZW1wQ2hlY2tTY2hvb2xJZCxcclxuICAgICAgICAgICAgZGVwYXJ0SWQ6IHRlbXBDaGVja0RlcGFydElkLFxyXG4gICAgICAgICAgICBzdWJqZWN0SWRzOiB0ZW1wU3ViamVjdElkcyxcclxuICAgICAgICAgICAgYmF0Y2hJZHM6IHRlbXBCYXRjaElkc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvL2RlYnVnZ2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuT0spIHtcclxuICAgICAgICAgICAgICAgIC8v5YWz5o6J5b2T5YmN6aG16Z2i77yM5by55Ye66LSm5Y+356qX5Y+jXHJcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgdGVtcEN1cnJlbnRQb3B1TmFtZSkuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2RpdkNyZWF0ZVVzZXJTdWNjZXNzXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNzcEFkZFVzZXJTdWNlc3NDbG9zZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZDcmVhdGVVc2VyU3VjY2Vzc1wiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuRGF0YSAhPSBudWxsICYmIGRhdGEuRGF0YSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2Rpdk5ld1VzZXJBY2NvdW50XCIpLmh0bWwoXCLotKblj7fvvJpcIiArIGRhdGEuRGF0YS5Vc2VySUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2TmV3VXNlclBXRFwiKS5odG1sKFwi5a+G56CB77yaXCIgKyBkYXRhLkRhdGEuVXNlclBXRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZDcmVhdGVVc2VyU3VjY2Vzc1wiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2J0bk5ld1VzZXJPS1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGl2Q3JlYXRlVXNlclN1Y2Nlc3NcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJyZW50UG9wdU5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy92YXIgaHRtbCA9ICc8dHIgY2xhc3M9XCJmb250MTJcIj48dGQgY29sc3Bhbj00PicgKyBkYXRhLlJlc3VsdCArICc8L3RkPjwvdHI+JztcclxuICAgICAgICAgICAgICAgIC8vJChcIiNpZFRhYmxlQ2xhc3MgdGJvZHlcIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+aWsOW7uuWRmOW3peaXtu+8jOW8ueWHuueahOinkuiJsuivtOaYjuS/oeaBr1xyXG5mdW5jdGlvbiBTaG93Um9sZURlc2MoKSB7XHJcbiAgICB2YXIgeCA9IDEwO1xyXG4gICAgdmFyIHkgPSAyMDsgLy/orr7nva7mj5DnpLrmoYbnm7jlr7nkuo7lgY/np7vkvY3nva7vvIzpmLLmraLpga7mjKHpvKDmoIdcclxuICAgICQoXCIjdWxBZGRVc2VyUG9zaXRpb24gPmxpW25hbWU9J3NwUm9sZURlc2MnXVwiKS5ob3ZlcihmdW5jdGlvbiAoZSkgeyAgLy/pvKDmoIfnp7vkuIrkuovku7ZcclxuICAgICAgICB2YXIgdGVtcFJOYW1lID0gJCh0aGlzKS5hdHRyKFwicm9sZU5hbWVcIik7XHJcbiAgICAgICAgdmFyIHRlbXBSRGVzYyA9ICQodGhpcykuYXR0cihcInJvbGVEZXNjXCIpO1xyXG4gICAgICAgICQoXCIjcFJvbGVEZXNjXCIpLmh0bWwoXCI8c3BhbiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6ODAwO1xcXCI+XCIgKyB0ZW1wUk5hbWUgKyBcIuadg+mZkO+8mjwvc3Bhbj5cIiArIHRlbXBSRGVzYyArIFwiXCIpO1xyXG4gICAgICAgICQoXCIuc3VwZXJMaW1pdFwiKS5jc3Moe1xyXG4gICAgICAgICAgICBcInRvcFwiOiAoZS5wYWdlWSArIHkpICsgXCJweFwiLFxyXG4gICAgICAgICAgICBcImxlZnRcIjogKGUucGFnZVggKyB4KSArIFwicHhcIlxyXG4gICAgICAgIH0pLnNob3coXCJmYXN0XCIpOyAvL+iuvue9ruaPkOekuuahhueahOWdkOagh++8jOW5tuaYvuekulxyXG4gICAgfSwgZnVuY3Rpb24gKCkgeyAgLy/pvKDmoIfnp7vlh7rkuovku7ZcclxuXHJcbiAgICAgICAgJChcIi5zdXBlckxpbWl0XCIpLmhpZGUoKTsgIC8v56e76Zmk5by55Ye65qGGXHJcbiAgICB9KS5tb3VzZW1vdmUoZnVuY3Rpb24gKGUpIHsgICAvL+i3n+maj+m8oOagh+enu+WKqOS6i+S7tlxyXG4gICAgICAgICQoXCIuc3VwZXJMaW1pdFwiKS5jc3Moe1xyXG4gICAgICAgICAgICBcInRvcFwiOiAoZS5wYWdlWSArIHkpICsgXCJweFwiLFxyXG4gICAgICAgICAgICBcImxlZnRcIjogKGUucGFnZVggKyB4KSArIFwicHhcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5p+l55yL6LSm5Y+36K+m5oOFXHJcbmZ1bmN0aW9uIFNob3dBY2NvdW50RGV0YWlscyhldmVudCkge1xyXG4gICAgJChcIiNpbWdBY2NvdW50RGV0YWlsc1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNkaXZBY2NvdW50RGV0YWlsc1wiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiNidG5BY2NvdW50RGV0YWlsc1N1Ym1pdFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNkaXZBY2NvdW50RGV0YWlsc1wiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG4gICAgLy/or7fmsYLotKblj7for6bmg4VcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmcvQ29tbW9uTWFuYWdlL0dldEJhdGNoTGlzdFwiLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcEJMaXN0ID0gZGF0YS5EYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBCTGlzdCAhPSBudWxsIHx8IHRlbXBCTGlzdCAhPSB1bmRlZmluZWQgfHwgdGVtcEJMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHBUZWFjaGVyQkxpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHBDb3Vuc2Vsb3JCTGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcEJMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cEJJbmZvID0gdGVtcEJMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHBCSW5mby5BY2NvdW50VHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cFRlYWNoZXJCTGlzdC5wdXNoKHRwQkluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRwQkluZm8uQWNjb3VudFR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHBDb3Vuc2Vsb3JCTGlzdC5wdXNoKHRwQkluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wQmF0Y2hUcGwgPSByZXF1aXJlKFwiT3JnL2FjY291bnRkZXRhaWxzbGlzdC50cGxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0YkFjY291bnREZWF0YWlscyA+dGJvZHlcIikuaHRtbCh0ZW1wQmF0Y2hUcGwodHBUZWFjaGVyQkxpc3QpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0YkFjY291bnREZWF0YWlscyA+dGJvZHlcIikuaHRtbCh0ZW1wQmF0Y2hUcGwodHBDb3Vuc2Vsb3JCTGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIjZGl2QWNjb3VudERldGFpbHNcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbn1cclxuXHJcbi8v5pi+56S65om56YeP57ut6LS556qX5Y+jXHJcbmZ1bmN0aW9uIFNob3dSZW5ld0FyZWEoZXZlbnQpIHtcclxuICAgIGlmICh0ZW1wVXNlckxpc3QgIT0gbnVsbCAmJiB0ZW1wVXNlckxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8v57ut6LS557G75Z6LXHJcbiAgICAgICAgdmFyIHJlbmV3VHlwZUZsYWdzID0gLTE7XHJcbiAgICAgICAgJChcIiNpbWdBY2NvdW50UmVuZXdcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiI2RpdkFjY291bnRSZW5ld1wiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aYvuekuuWRmOW3peWIl+ihqOWPiuaJueasoeWIl+ihqFxyXG4gICAgICAgIHZhciB0ZW1wUmVuZXdVc2VyVHBsID0gcmVxdWlyZShcIk9yZy9yZW5ld3VzZXJsaXN0LnRwbFwiKTtcclxuICAgICAgICAkKFwiI3VsUmVuZXdVc2VyTGlzdFwiKS5odG1sKHRlbXBSZW5ld1VzZXJUcGwodGVtcFVzZXJMaXN0KSk7XHJcbiAgICAgICAgJChcIiN1bFJlbmV3VXNlckxpc3QgPmxpPnNwYW5bbmFtZT0nc3BSZW5ld0RlbGV0ZVVzZXInXVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgdmFyIHRlbXBVc2VySWQgPSAkKHRoaXMpLmF0dHIoXCJ1c2VySWRcIik7XHJcbiAgICAgICAgICAgICQuZWFjaCh0ZW1wVXNlckxpc3QsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5Vc2VySWQgPT0gdGVtcFVzZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHRlbXBJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wVXNlckxpc3Quc3BsaWNlKHRlbXBJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRlbXBVc2VyTGlzdC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkaXZBY2NvdW50UmVuZXdcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aYvuekuuaJueasoeWIl+ihqFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL09yZy9Db21tb25NYW5hZ2UvR2V0QmF0Y2hMaXN0XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBCTGlzdCA9IGRhdGEuRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGVtcEJMaXN0ICE9IG51bGwgfHwgdGVtcEJMaXN0ICE9IHVuZGVmaW5lZCB8fCB0ZW1wQkxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHBUZWFjaGVyQkxpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRwQ291bnNlbG9yQkxpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wQkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cEJJbmZvID0gdGVtcEJMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRwQkluZm8uQWNjb3VudFR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRwVGVhY2hlckJMaXN0LnB1c2godHBCSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRwQkluZm8uQWNjb3VudFR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRwQ291bnNlbG9yQkxpc3QucHVzaCh0cEJJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEJhdGNoVHBsID0gcmVxdWlyZShcIk9yZy9iYXRjaHNsaXN0LnRwbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdWxSZW5ld0JhdGNoTGlzdFwiKS5odG1sKHRlbXBCYXRjaFRwbCh0cFRlYWNoZXJCTGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdWxSZW5ld0JhdGNoTGlzdFwiKS5odG1sKHRlbXBCYXRjaFRwbCh0cENvdW5zZWxvckJMaXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZXdUeXBlRmxhZ3MgPSBldmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDpgInkuK3kuovku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEJhdGNoSWRMaXN0LnNwbGljZSgwLCB0ZW1wQmF0Y2hJZExpc3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN1bFJlbmV3QmF0Y2hMaXN0IGlucHV0W3R5cGU9J2NoZWNrYm94J11cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbUJJRCA9ICQodGhpcykuYXR0cihcImJhdGNoSWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBCYXRjaElkTGlzdC5wdXNoKHRlbUJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wQmF0Y2hJZExpc3QuaW5kZXhPZih0ZW1CSUQpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wQmF0Y2hJZExpc3QucmVtb3ZlKHRlbUJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjYnRuQWNjb3VudFJlbmV3XCIpLmNsaWNrKHJlbmV3VHlwZUZsYWdzLCBNb3JlUmVuZXdBY2NvdW50KTtcclxuICAgICAgICAkKFwiI2RpdlJlbmV3VGlwXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI2RpdkFjY291bnRSZW5ld1wiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgUG9wdUNsaWVudC5Qb3BUaXBTaG93KFwi6K+36YCJ5oup57ut6LS555So5oi377yBXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+i0puWPt+aJuemHj+e7rei0uVxyXG5mdW5jdGlvbiBNb3JlUmVuZXdBY2NvdW50KHJlbmV3VHlwZUZsYWdzKSB7XHJcbiAgICBpZiAodGVtcFVzZXJMaXN0ID09IG51bGwgfHwgdGVtcFVzZXJMaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgUG9wdUNsaWVudC5Qb3BUaXBTaG93KFwi6K+36YCJ5oup57ut6LS555So5oi377yBXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0ZW1wQmF0Y2hJZExpc3QgPT0gbnVsbCB8fCB0ZW1wQmF0Y2hJZExpc3QubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICBQb3B1Q2xpZW50LlBvcFRpcFNob3coXCLor7fpgInmi6nnu63otLnmibnmrKHvvIFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHRlbXBSZW5ld1VzZXJJZHMgPSBcIlwiO1xyXG4gICAgdmFyIHRlbXBSZW5ld0JhdGNoSWRzID0gXCJcIjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcFVzZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGVtcFJlbmV3VXNlcklkcyArPSB0ZW1wVXNlckxpc3RbaV0uVXNlcklkICsgXCIsXCI7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBCYXRjaElkTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRlbXBSZW5ld0JhdGNoSWRzICs9IHRlbXBCYXRjaElkTGlzdFtpXSArIFwiLFwiO1xyXG4gICAgfVxyXG4gICAgLy/or7fmsYLotKblj7for6bmg4VcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmcvVXNlck1hbmFnZS9Nb3JlUmVuZXdcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZHM6IHRlbXBSZW5ld1VzZXJJZHMsXHJcbiAgICAgICAgICAgIGJhdGNoSURzOiB0ZW1wUmVuZXdCYXRjaElkcyxcclxuICAgICAgICAgICAgcmVuZXdUeXBlOiByZW5ld1R5cGVGbGFnc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvL2RlYnVnZ2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuT0spIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZGl2QWNjb3VudFJlbmV3XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFBvcHVDbGllbnQuUG9wVGlwU2hvdyhcIue7rei0ueaIkOWKn++8gVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUG9wdUNsaWVudC5Qb3BUaXBTaG93KFwi6K+36YCJ5oup57ut6LS55om55qyh77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuQ29kZSA9PSBcIjExLTAxMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZSZW5ld1RpcCA+ZGl2XCIpLmh0bWwoXCLmgqjliJvlu7rnmoTogIHluIjotKblj7flt7Lovr7kuIrpmZDvvIzor7fogZTns7vmiJHku6zotK3kubDvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZSZW5ld1RpcFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuQ29kZSA9PSBcIjExLTAxMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZSZW5ld1RpcCA+ZGl2XCIpLmh0bWwoXCLmgqjliJvlu7rnmoTlkqjor6LluIjotKblj7flt7Lovr7kuIrpmZDvvIzor7fogZTns7vmiJHku6zotK3kubDvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZSZW5ld1RpcFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAvL+S4uumhtemdouWIh+aNoua3u+WKoOaWueazlVxyXG4gICAgdmFyIHRlbXBQYWdlMSA9IHsgcGFnZUluZGV4OiBcIjBcIiB9O1xyXG4gICAgdmFyIHRlbXBQYWdlMiA9IHsgcGFnZUluZGV4OiBcIjFcIiB9O1xyXG4gICAgdmFyIHRlbXBQYWdlMyA9IHsgcGFnZUluZGV4OiBcIjJcIiB9O1xyXG4gICAgJChcIiNzcE9yZ0FsbFVzZXJcIikuY2xpY2sodGVtcFBhZ2UxLCBDaGFuZ2VQYWdlKTtcclxuICAgICQoXCIjc3BPcmdUZWFjaGVyVXNlclwiKS5jbGljayh0ZW1wUGFnZTIsIENoYW5nZVBhZ2UpO1xyXG4gICAgJChcIiNzcE9yZ0NvdW5zZWxvclVzZXJcIikuY2xpY2sodGVtcFBhZ2UzLCBDaGFuZ2VQYWdlKTtcclxuICAgIC8v5Yid5aeL5YyW57uE57uH57uT5p6E5qCRXHJcbiAgICBJbml0T3JnVHJlZSgpO1xyXG4gICAgLy/mt7vliqDmkJzntKLkuovku7ZcclxuICAgICQoXCIjYnRuU2VhcmNoXCIpLmNsaWNrKFNlYXJjaFVzZXIpO1xyXG4gICAgLy/mt7vliqDmoKHljLrjgIHmt7vliqDpg6jpl6jkuovku7ZcclxuICAgICQoXCIjYnRuQWRkU2Nob29sXCIpLmNsaWNrKFNob3dDcmVhdGVTY2hvb2xBcmVhKTtcclxuICAgICQoXCIjYnRuQWRkRGVwYXJ0bWVudFwiKS5jbGljayhTaG93Q3JlYXRlRGVwYXJ0QXJlYSk7XHJcbiAgICAkKFwiI2J0bkFkZFVzZXJcIikuY2xpY2soU2hvd0FkZE5ld1VzZXJBcmVhKTtcclxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9Pcmcvb3JnbWFuYWdlLmpzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzFcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9Pcmcvc2Nob29sdHJlZWxpc3QnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLFNjaG9vbExpc3RNb2RlbD0kZGF0YS5TY2hvb2xMaXN0TW9kZWwsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaChTY2hvb2xMaXN0TW9kZWwsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nICc7XG5pZigkdmFsdWUuT3JnTGV2ZWwgPT0xICl7XG4kb3V0Kz0nIDxsaSBjbGFzcz1cImRlcGFydG1lbnQtc2Nob29sXCI+IDxsYWJlbD4gPGlucHV0IGNsYXNzPVwibXI1IG1pZGRsZVwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJkZXBhcnRtZW50LWl0ZW1cIiBvcmdJZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5PcmdJRCk7XG4kb3V0Kz0nXCIgcGFyZW50SWQgPSBcIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5QYXJlbnRPcmdJRCk7XG4kb3V0Kz0nXCIgb3JnTGV2ZWwgPSBcIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5PcmdMZXZlbCk7XG4kb3V0Kz0nXCIgb3JnTmFtZT1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5PcmdOYW1lKTtcbiRvdXQrPSdcIi8+IDxzcGFuIGNsYXNzPVwibWlkZGxlXCI+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLk9yZ05hbWUpO1xuJG91dCs9Jzwvc3Bhbj4gPC9sYWJlbD4gPC9saT4gJztcbn1cbiRvdXQrPScgPGxpPiA8bGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1yNSBtaWRkbGVcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZGVwYXJ0bWVudC1pdGVtXCIgb3JnSWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuT3JnSUQpO1xuJG91dCs9J1wiIHBhcmVudElkID0gXCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuUGFyZW50T3JnSUQpO1xuJG91dCs9J1wiIG9yZ0xldmVsID0gXCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuT3JnTGV2ZWwpO1xuJG91dCs9J1wiIG9yZ05hbWU9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuT3JnTmFtZSk7XG4kb3V0Kz0nXCIvPiA8c3BhbiBjbGFzcz1cIm1pZGRsZVwiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5PcmdOYW1lKTtcbiRvdXQrPSc8L3NwYW4+IDwvbGFiZWw+IDwvbGk+ICc7XG59KTtcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy90cGwvT3JnL3NjaG9vbHRyZWVsaXN0LnRwbFxuICoqIG1vZHVsZSBpZCA9IDY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDMxIDMyXG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnL2FsbHVzZXJsaXN0JyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlYWNoPSR1dGlscy4kZWFjaCxVc2VyTGlzdD0kZGF0YS5Vc2VyTGlzdCwkdmFsdWU9JGRhdGEuJHZhbHVlLCRpbmRleD0kZGF0YS4kaW5kZXgsJGVzY2FwZT0kdXRpbHMuJGVzY2FwZSwkb3V0PScnOyRvdXQrPScgJztcbiRlYWNoKFVzZXJMaXN0LGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8dHI+IDx0ZD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNrQ2hlY2tVc2VyXCIgY2xhc3M9XCJtaWRkbGUgbWwyMFwiIHVzZXJJZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Vc2VySUQpO1xuJG91dCs9J1wiIHVzZXJOYW1lPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlVzZXJOYW1lKTtcbiRvdXQrPSdcIiB1c2VyQWNjb3VudD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Vc2VyQWNjb3VudCk7XG4kb3V0Kz0nXCI+PC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Vc2VyTmFtZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Vc2VyQWNjb3VudCk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5PcmdEZXBhcnROYW1lRGVzYyk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Sb2xlTmFtZURlc2MpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQ3JlYXRlRGF0ZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPiA8c3BhbiBjbGFzcz1cInNlZS1idG5cIiBuYW1lPVwiYnRuU2hvd1VzZXJEZXRhaWxzXCIgdXNlcklkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlVzZXJJRCk7XG4kb3V0Kz0nXCI+5p+l55yLPC9zcGFuPiA8L3RkPiA8L3RyPiAnO1xufSk7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZy9hbGx1c2VybGlzdC50cGxcbiAqKiBtb2R1bGUgaWQgPSA2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAzMVxuICoqLyIsInZhciB0ZW1wbGF0ZT1yZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdPcmcvdHBsL09yZy90ZWFjaGVybGlzdCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsVXNlckxpc3Q9JGRhdGEuVXNlckxpc3QsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaChVc2VyTGlzdCxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPHRyPiA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJja0NoZWNrVXNlclwiIGNsYXNzPVwibWlkZGxlIG1sMjBcIiB1c2VySWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuVXNlcklEKTtcbiRvdXQrPSdcIj48L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlVzZXJOYW1lKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlVzZXJBY2NvdW50KTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLk9yZ0RlcGFydE5hbWVEZXNjKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkNyZWF0ZURhdGUpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuRXhwYWlyRGF0ZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPiA8c3BhbiBjbGFzcz1cInNlZS1idG5cIiBuYW1lPVwiYnRuU2hvd1VzZXJEZXRhaWxzXCIgdXNlcklkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlVzZXJJRCk7XG4kb3V0Kz0nXCI+5p+l55yLPC9zcGFuPiA8L3RkPiA8L3RyPiAnO1xufSk7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZy90ZWFjaGVybGlzdC50cGxcbiAqKiBtb2R1bGUgaWQgPSA3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAzMVxuICoqLyIsInZhciB0ZW1wbGF0ZT1yZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdPcmcvdHBsL09yZy9vcmdyb2xlbGlzdCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsUm9sZUxpc3RNb2RlbD0kZGF0YS5Sb2xlTGlzdE1vZGVsLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRvdXQ9Jyc7JG91dCs9JyAnO1xuJGVhY2goUm9sZUxpc3RNb2RlbCxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPGxpIGNsYXNzPVwicGxhY2UtaXRlbVwiIHJvbGVJZCA9IFwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlBvc2l0aW9uSUQpO1xuJG91dCs9J1wiIGxlZnROdW09XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuTGVmdE51bSk7XG4kb3V0Kz0nXCI+IDxpbnB1dCBjbGFzcz1cIm1pZGRsZSBtcjVcIiB0eXBlPVwiY2hlY2tib3hcIiByb2xlSWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuUG9zaXRpb25JRCk7XG4kb3V0Kz0nXCIvPiAnO1xuaWYoJHZhbHVlLlBvc2l0aW9uSUQgPT0gNiApe1xuJG91dCs9JyAnO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuUG9zaXRpb25OYW1lKTtcbiRvdXQrPScoPHNwYW4gY2xhc3M9XCJyZWRcIj7lj6/liJvlu7rlkqjor6LluIjotKblj7cnO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuTGVmdE51bSk7XG4kb3V0Kz0n5LiqPC9zcGFuPikgJztcbn1cbiRvdXQrPScgJztcbmlmKCR2YWx1ZS5Qb3NpdGlvbklEID09IDggKXtcbiRvdXQrPScgJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlBvc2l0aW9uTmFtZSk7XG4kb3V0Kz0nKDxzcGFuIGNsYXNzPVwicmVkXCI+5Y+v5Yib5bu66ICB5biI6LSm5Y+3JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkxlZnROdW0pO1xuJG91dCs9J+S4qjwvc3Bhbj4pICc7XG59XG4kb3V0Kz0nICc7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Qb3NpdGlvbk5hbWUpO1xuJG91dCs9JyA8c3BhbiBuYW1lPVwic3BSb2xlRGVzY1wiIGNsYXNzPVwicGxhY2UtYmcgcmlnaHRcIiByb2xlSWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuUG9zaXRpb25JRCk7XG4kb3V0Kz0nXCIgcm9sZU5hbWU9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuUG9zaXRpb25OYW1lKTtcbiRvdXQrPSdcIiByb2xlRGVzYz1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Qb3NpdGlvbkRlc2MpO1xuJG91dCs9J1wiPjwvc3Bhbj4gPC9saT4gJztcbn0pO1xucmV0dXJuIG5ldyBTdHJpbmcoJG91dCk7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL3RwbC9Pcmcvb3Jncm9sZWxpc3QudHBsXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzFcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9Pcmcvc3ViamVjdHNsaXN0JyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlYWNoPSR1dGlscy4kZWFjaCxMaXN0TW9kZWw9JGRhdGEuTGlzdE1vZGVsLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRvdXQ9Jyc7JG91dCs9JyAnO1xuJGVhY2goTGlzdE1vZGVsLGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8bGkgY2xhc3M9XCJzdWJqZWN0LWl0ZW1cIiBzdWJqZWN0SWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU3ViamVjdElkKTtcbiRvdXQrPSdcIiBiaWdHcmFkZT1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5CaWdHcmFkZSk7XG4kb3V0Kz0nXCI+IDxsYWJlbD4gPGlucHV0IGNsYXNzPVwibWlkZGxlXCIgdHlwZT1cImNoZWNrYm94XCIgc3ViamVjdElkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlN1YmplY3RJZCk7XG4kb3V0Kz0nXCIgYmlnR3JhZGU9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQmlnR3JhZGUpO1xuJG91dCs9J1wiLz4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU3ViamVjdERlc2MpO1xuJG91dCs9JyA8L2xhYmVsPiA8L2xpPiAnO1xufSk7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZy9zdWJqZWN0c2xpc3QudHBsXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzFcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmcvYmF0Y2hzbGlzdCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsQmF0Y2hMaXN0TW9kZWw9JGRhdGEuQmF0Y2hMaXN0TW9kZWwsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaChCYXRjaExpc3RNb2RlbCxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPGxpIGNsYXNzPVwiYmF0Y2hcIj4gPGlucHV0IGNsYXNzPVwibWlkZGxlIG1yNVwiIHR5cGU9XCJjaGVja2JveFwiIGJhdGNoSWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQmF0Y2hJRCk7XG4kb3V0Kz0nXCIgcm9sZUlkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlJvbGVJZCk7XG4kb3V0Kz0nXCIgYmF0Y2hUeXBlPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkFjY291bnRUeXBlKTtcbiRvdXQrPSdcIi8+IDxzcGFuPuWJqeS9mTxpIGNsYXNzPVwicmVkXCI+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkJhdGNoU3VycGx1c0NvdW50KTtcbiRvdXQrPSc8L2k+5LiqJztcbmlmKCR2YWx1ZS5BY2NvdW50VHlwZSA9PSAxKXtcbiRvdXQrPSfogIHluIgnO1xufVxuaWYoJHZhbHVlLkFjY291bnRUeXBlID09IDIpe1xuJG91dCs9J+WSqOivouW4iCc7XG59XG5pZigkdmFsdWUuQWNjb3VudFR5cGUgPT0gMyl7XG4kb3V0Kz0n5a2m55SfJztcbn1cbiRvdXQrPSfotKblj7fvvIzliankvZnml7bpl7Q8aSBjbGFzcz1cInJlZFwiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5CYXRjaFN1cnBsdXNEYXlzKTtcbiRvdXQrPSc8L2k+5aSpPC9zcGFuPiA8L2xpPiAnO1xufSk7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZy9iYXRjaHNsaXN0LnRwbFxuICoqIG1vZHVsZSBpZCA9IDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDMxIDM4XG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnL2FjY291bnRkZXRhaWxzbGlzdCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsQmF0Y2hMaXN0TW9kZWw9JGRhdGEuQmF0Y2hMaXN0TW9kZWwsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaChCYXRjaExpc3RNb2RlbCxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPHRyPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkJhdGNoSUQpO1xuJG91dCs9JzwvdGQ+ICc7XG5pZigkdmFsdWUuQWNjb3VudFR5cGUgPT0gMSl7XG4kb3V0Kz0nIDx0ZD7ogIHluIjotKblj7c8L3RkPiAnO1xufVxuJG91dCs9JyAnO1xuaWYoJHZhbHVlLkFjY291bnRUeXBlID09IDIpe1xuJG91dCs9JyA8dGQ+5ZKo6K+i5biI6LSm5Y+3PC90ZD4gJztcbn1cbiRvdXQrPScgJztcbmlmKCR2YWx1ZS5BY2NvdW50VHlwZSA9PSAzKXtcbiRvdXQrPScgPHRkPuWtpueUn+i0puWPtzwvdGQ+ICc7XG59XG4kb3V0Kz0nIDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQmF0Y2hTdXJwbHVzQ291bnQpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuQmF0Y2hTdXJwbHVzRGF5cyk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5DcmVhdGVEYXRlKTtcbiRvdXQrPSc8L3RkPiA8L3RyPiAnO1xufSk7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZy9hY2NvdW50ZGV0YWlsc2xpc3QudHBsXG4gKiogbW9kdWxlIGlkID0gNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzEgMzhcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmcvcmVuZXd1c2VybGlzdCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsVXNlckxpc3RNb2RlbD0kZGF0YS5Vc2VyTGlzdE1vZGVsLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRvdXQ9Jyc7JG91dCs9JyAnO1xuJGVhY2goVXNlckxpc3RNb2RlbCxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPGxpPiAnO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuVXNlck5hbWUpO1xuJG91dCs9JyAoJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlVzZXJBY2NvdW50KTtcbiRvdXQrPScpIDxzcGFuIGNsYXNzPVwidGVhY2hlci1iZyBtbDIwIG1pZGRsZVwiIG5hbWU9XCJzcFJlbmV3RGVsZXRlVXNlclwiIHVzZXJJZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Vc2VySWQpO1xuJG91dCs9J1wiPjwvc3Bhbj4gPC9saT4gJztcbn0pO1xucmV0dXJuIG5ldyBTdHJpbmcoJG91dCk7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL3RwbC9PcmcvcmVuZXd1c2VybGlzdC50cGxcbiAqKiBtb2R1bGUgaWQgPSA3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAzMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=