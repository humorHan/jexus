webpackJsonp([32,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(76);


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

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	var currentShowUserId = 0;   //当前显示的用户的ID
	var PopuClient = __webpack_require__(24);    //弹出框
	var currentUserDetailsInfo = null;        //当前用户的详细信息
	
	//设置部门临时数据
	var tempOrgId = "0";     //校区或部门ID
	var tempParentId = "-1";     //所属父ID
	var tempOrgLevel = "-1";    //机构登记，1位校区，2为部门
	var tempOrgName = "";       //校区或部门名称
	
	//获取用户详细数据
	function GetUserDeatailsData() {
	    $.ajax({
	        type: "POST",
	        url: "/Org/UserManage/GetUserDetailsInfo",
	        data: {
	            userId: currentShowUserId
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                currentUserDetailsInfo = data.Data;
	                if (currentUserDetailsInfo != null && currentUserDetailsInfo != undefined) {
	                    var tempDetailsTpl = __webpack_require__(77);
	                    $("#divUserDetailsInfo").html(tempDetailsTpl(currentUserDetailsInfo));
	                    //添加禁用、启用事件
	                    $("#spDetailsOpen").click(0, OpenOrCloseUserAccount);
	                    $("#spDetailsClose").click(1, OpenOrCloseUserAccount);
	                }
	            } else {
	                if (data.Code == "11-003") {
	                    PopuClient.PopTipShow("参数错误！");
	                }
	            }
	        }
	    });
	}
	
	//禁用或者启用账号
	//参数：opType，1为禁用，0为启用
	function OpenOrCloseUserAccount(opType) {
	    $.ajax({
	        type: "POST",
	        url: "/Org/UserManage/EditUserAccountStatus",
	        data: {
	            userId: currentShowUserId,
	            operateType: opType
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                if (data.Data) {
	                    if (opType == 0) {
	                        $("#spDetailsOpen").hide();
	                        $("#spDetailsClose").show();
	                    } else {
	                        $("#spDetailsOpen").show();
	                        $("#spDetailsClose").hide();
	                    }
	                }
	            } else {
	                if (data.Code == "11-003") {
	                    PopuClient.PopTipShow("参数错误！");
	                }
	            }
	        }
	    });
	}
	
	//编辑用户详细信息
	function EditUserDeatailsData() {
	    if (currentUserDetailsInfo != null && currentUserDetailsInfo != undefined) {
	        // 隐藏操作按钮和二级导航菜单
	        $("#divDetailsSecMenu").hide();
	        $("#divUserDetailsOperate").hide();
	        var tempEditDetailsTpl = __webpack_require__(78);
	        $("#divUserDetailsInfo").html(tempEditDetailsTpl(currentUserDetailsInfo));
	        //绑定性别点击事件
	        $("#divUserDetailsInfo input[name='sex']").click(function () {
	            var tempValue = $(this).val();
	            $(this).siblings().removeClass("ml10");
	            $(this).addClass("ml10");
	            if (tempValue == "1") {
	                currentUserDetailsInfo.UserSex = "男";
	            } else {
	                currentUserDetailsInfo.UserSex = "女";
	            }
	        });
	        //绑定确定、取消事件
	        $("#spSaveEditedDetailsInfo").click(SaveUpdatedUserDetails);
	        $("#spCancelEditedDetailsInfo").click(function () {
	            $("#divDetailsSecMenu").show();
	            $("#divUserDetailsOperate").show();
	            var tempDetailsTpl = __webpack_require__(77);
	            $("#divUserDetailsInfo").html(tempDetailsTpl(currentUserDetailsInfo));
	        });
	        //操作成功后，显示操作按钮和二级菜单
	        $("#divDetailsSecMenu").show();
	        $("#divUserDetailsOperate").show();
	    }
	}
	
	//保存修改后的用户信息
	function SaveUpdatedUserDetails() {
	    var tempUserName = $("txtDetailsUserName").val();
	    var tempEntryTime = "";
	    if ($("txtDetailsEntryTime") != null && $("txtDetailsEntryTime") != undefined) {
	        currentUserDetailsInfo.EntryTime = $("txtDetailsEntryTime").val();
	    }
	    var tempQQNum = $("txtDetailsQQNum").val();
	    var tempPhoneNum = $("txtDetailsPhoneNum").val();
	    var tempEmailAddr = $("txtDetailsEmailAddr").val();
	    var tempIdCardNumSub1 = $("txtDetailsIDCardNumSub1").val();
	    var tempIdCardNumSub2 = $("txtDetailsIDCardNumSub2").val();
	    var tempIdCardNumSub3 = $("txtDetailsIDCardNumSub3").val();
	    //验证姓名
	    if (tempUserName == "" || tempUserName == undefined) {
	        PopuClient.PopTipShow("姓名不能为空！");
	        return;
	    }
	    if (tempUserName.length > 8) {
	        PopuClient.PopTipShow("姓名不能超过8位！");
	        return;
	    }
	    currentUserDetailsInfo.UserName = tempUserName;
	    //验证QQ
	    if (tempQQNum != "" && tempQQNum != null && tempQQNum != undefined) {
	        if (/^[1-9]\d{4,8}$/.test(tempQQNum)) {
	            currentUserDetailsInfo.QQNum = tempQQNum;
	            $("#divDetailsQQTipArea").hide();
	        } else {
	            $("#divDetailsQQTipArea").show();
	            return;
	        }
	    }
	    //验证手机
	    if (tempPhoneNum != "" && tempPhoneNum != null && tempPhoneNum != undefined) {
	        if (/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(tempPhoneNum)) {
	            currentUserDetailsInfo.PhoneNum = tempPhoneNum;
	            $("#divDetailsPhoneTipArea").hide();
	        } else {
	            $("#divDetailsPhoneTipArea").show();
	            return;
	        }
	    }
	    //验证邮箱
	    if (tempEmailAddr != "" && tempEmailAddr != null && tempEmailAddr != undefined) {
	        if (/^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/.test(tempEmailAddr)) {
	            currentUserDetailsInfo.EmailAddr = tempEmailAddr;
	            $("#divDetailsEmailTipArea").hide();
	        } else {
	            $("#divDetailsEmailTipArea").show();
	            return;
	        }
	    }
	    //验证身份证号
	    if (tempIdCardNumSub1 != "" && tempIdCardNumSub1 != undefined && tempIdCardNumSub2 != "" && tempIdCardNumSub2 != undefined && tempIdCardNumSub3 != "" && tempIdCardNumSub3 != undefined) {
	        //验证格式
	        var tempIdCardNum = tempIdCardNumSub1 + tempIdCardNumSub2 + tempIdCardNumSub3;
	        if (IdentityCodeValid(tempIdCardNum)) {
	            currentUserDetailsInfo.IDCardNum = tempIdCardNum;
	            $("#divDetailsIdCardTipArea").hide();
	        } else {
	            $("#divDetailsIdCardTipArea").show();
	            return;
	        }
	    }
	    var tempUserSex = "";
	    if (currentUserDetailsInfo.UserSex == "男") {
	        tempUserSex = "1";
	    } else {
	        tempUserSex = "0";
	    }
	    //提交修改
	    $.ajax({
	        type: "POST",
	        url: "/Org/UserManage/EditUserDetailsInfo",
	        data: {
	            userId: currentShowUserId,
	            userName: currentUserDetailsInfo.UserName,
	            userSex: tempUserSex,
	            EntryTime: currentUserDetailsInfo.EntryTime,
	            QQNum: currentUserDetailsInfo.QQNum,
	            IDCardNum: currentUserDetailsInfo.IDCardNum,
	            PhoneNum: currentUserDetailsInfo.PhoneNum,
	            EmailAddr: currentUserDetailsInfo.EmailAddr
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                if (data.Data) {
	                    $("#divDetailsSecMenu").show();
	                    $("#divUserDetailsOperate").show();
	                    var tempDetailsTpl = __webpack_require__(77);
	                    $("#divUserDetailsInfo").html(tempDetailsTpl(currentUserDetailsInfo));
	                }
	            } else {
	                if (data.Code == "11-003") {
	                    PopuClient.PopTipShow("参数错误！");
	                }
	            }
	        }
	    });
	}
	
	//设置部门
	function ShowSetUserDepartmentArea() {
	    $("#imgSetDepartClose").click(function () {
	        $("#divUserDetailsSetDepart").addClass("hidden");
	    });
	    $("#btnUserDetailsSetDepartSubmit").click(SetUserDepartment);
	    $.ajax({
	        type: "POST",
	        url: "/Org/CommonManage/GetOrgTreeByUserId",
	        data: {
	            departmentID: currentUserDetailsInfo.DepartId
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                if (data.Data != null && data.Data != undefined) {
	                    var schoolTreeTpl = __webpack_require__(68);
	                    $("#ulUserDetailSetDepartment").html(schoolTreeTpl(data.Data));
	                    //添加选择部门事件
	                    $("[name='department-item']").click(ChangeNewDepartment);
	                    $("#divUserDetailsSetDepart").removeClass("hidden");
	                }
	            }
	        }
	    });
	}
	
	//点击改变部门事件
	function ChangeNewDepartment() {
	    tempOrgId = $(this).attr("orgId");
	    tempParentId = $(this).attr("parentId");
	    tempOrgLevel = $(this).attr("orgLevel");
	    tempOrgName = $(this).attr("orgName");
	}
	
	//保存用户选择的新部门
	function SetUserDepartment() {
	    $.ajax({
	        type: "POST",
	        url: "/Org/UserManage/ResetUserDepart",
	        data: {
	            userId: currentShowUserId,
	            departId: tempOrgId
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                if (data.Data) {
	                    if (tempOrgLevel == 1) {
	                        currentUserDetailsInfo.SchoolId = tempOrgId;
	                        currentUserDetailsInfo.SchoolName = tempOrgName;
	                        currentUserDetailsInfo.OrgDesc = tempOrgName;
	                    } else if (tempOrgLevel == 2) {
	                        currentUserDetailsInfo.DepartId = tempOrgId;
	                        currentUserDetailsInfo.DepartName = tempOrgName;
	                        currentUserDetailsInfo.OrgDesc = currentUserDetailsInfo.SchoolName + " " + tempOrgName;
	                    }
	                    //关闭弹窗
	                    $("#divUserDetailsSetDepart").removeClass("hidden");
	                    //刷新数据
	                    var tempDetailsTpl = __webpack_require__(77);
	                    $("#divUserDetailsInfo").html(tempDetailsTpl(currentUserDetailsInfo));
	                    tempOrgId = "0";
	                    tempParentId = "-1";
	                    tempOrgLevel = "-1";
	                    tempOrgName = "";
	                } else {
	                    PopuClient.PopTipShow("设置部门失败！");
	                }
	            } else {
	                PopuClient.PopTipShow(data.Result);
	            }
	        }
	    });
	}
	
	//重置密码
	function ResetUserPWD() {
	    $.ajax({
	        type: "POST",
	        url: "/Org/UserManage/ResetUserPwd",
	        data: {
	            userId: currentShowUserId
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                if (data.Data) {
	                    $("#divDetailsSecMenu").show();
	                    $("#divUserDetailsOperate").show();
	                    var tempDetailsTpl = __webpack_require__(77);
	                    $("#divUserDetailsInfo").html(tempDetailsTpl(currentUserDetailsInfo));
	                }
	            } else {
	                if (data.Code == "11-003") {
	                    PopuClient.PopTipShow("参数错误！");
	                } else {
	                    PopuClient.PopTipShow(data.Result);
	                }
	            }
	        }
	    });
	}
	
	//验证身份证号
	function IdentityCodeValid(code) {
	    var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 " };
	    var tip = "";
	    var pass = true;
	
	    if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
	        tip = "身份证号格式错误";
	        pass = false;
	    }
	
	    else if (!city[code.substr(0, 2)]) {
	        tip = "地址编码错误";
	        pass = false;
	    }
	    else {
	        //18位身份证需要验证最后一位校验位
	        if (code.length == 18) {
	            code = code.split('');
	            //∑(ai×Wi)(mod 11)
	            //加权因子
	            var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
	            //校验位
	            var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
	            var sum = 0;
	            var ai = 0;
	            var wi = 0;
	            for (var i = 0; i < 17; i++) {
	                ai = code[i];
	                wi = factor[i];
	                sum += ai * wi;
	            }
	            var last = parity[sum % 11];
	            if (parity[sum % 11] != code[17]) {
	                tip = "校验位错误";
	                pass = false;
	            }
	        }
	    }
	    //if(!pass) alert(tip);
	    return pass;
	}
	
	//页面加载完成后事件
	$(function () {
	    currentShowUserId = $("#hidShowUserId").val();
	    //页面加载完成后，获取用户详细数据
	    GetUserDeatailsData();
	    //添加事件
	    $("#btnEditUserDetailsInfo").click(EditUserDeatailsData);
	    $("#btnSetDepartMent").click(ShowSetUserDepartmentArea);
	    $("#btnResetPWD").click(ResetUserPWD);
	});

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/Org/orguserdetail',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,UserAccount=$data.UserAccount,EnalbeFlags=$data.EnalbeFlags,UserName=$data.UserName,UserSex=$data.UserSex,RoleName=$data.RoleName,OrgDesc=$data.OrgDesc,ExpireTime=$data.ExpireTime,EntryTime=$data.EntryTime,IsTeacher=$data.IsTeacher,TeachSubjectDesc=$data.TeachSubjectDesc,QQNum=$data.QQNum,IDCardNum=$data.IDCardNum,PhoneNum=$data.PhoneNum,EmailAddr=$data.EmailAddr,$out='';$out+=' <div class="triangle-bg"></div> <div class="user-info-detail"> <div class="user-detail-bg"></div> <div class="font12 mt12"> 账号：<i class="black">';
	$out+=$escape(UserAccount);
	$out+='</i> ';
	if(EnalbeFlags == 1){
	$out+=' <span id="spDetailsClose" class="close ml5">禁用</span> <span id="spDetailsOpen" class="open ml5" style="display: none">启用</span> ';
	}
	$out+=' ';
	if(EnalbeFlags == 0){
	$out+=' <span id="spDetailsOpen" class="open ml5">启用</span> <span id="spDetailsClose" class="close ml5" style="display: none">禁用</span> ';
	}
	$out+=' </div> </div> <div class="detail-content"> <div class="item"> <span> 姓名：<i class="black">';
	$out+=$escape(UserName);
	$out+='</i> </span> <span class="sex ml20"> 性别：<i class="black">';
	$out+=$escape(UserSex);
	$out+='</i> </span> </div> <div class="item"> <span> 角色：<i class="black">';
	$out+=$escape(RoleName);
	$out+='</i> </span> <span class="sex ml20"> 所属：<i class="black">';
	$out+=$escape(OrgDesc);
	$out+='</i> </span> </div> <div class="item"> <span> 到期时间：<i class="black">';
	$out+=$escape(ExpireTime);
	$out+='</i> </span> </div> <div class="item"> <span> 入职时间：<i class="black">';
	$out+=$escape(EntryTime);
	$out+='</i> </span> </div> ';
	if(IsTeacher == 1){
	$out+=' <div class="item"> <span> 所授学科：<i class="black">';
	$out+=$escape(TeachSubjectDesc);
	$out+='</i> </span> </div> ';
	}
	$out+=' <div class="item"> <span> QQ：<i class="black">';
	$out+=$escape(QQNum);
	$out+='</i> </span> <span class="sex ml20"> 身份证号：<i class="black">';
	$out+=$escape(IDCardNum);
	$out+='</i> </span> </div> <div class="item"> <span> 手机号码：<i class="black">';
	$out+=$escape(PhoneNum);
	$out+='</i> </span> <span class="sex ml20"> 邮箱：<i class="black">';
	$out+=$escape(EmailAddr);
	$out+='</i> </span> </div> </div>';
	return new String($out);
	});

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/Org/editorguserdetail',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,UserAccount=$data.UserAccount,UserSex=$data.UserSex,IsTeacher=$data.IsTeacher,RoleName=$data.RoleName,OrgDesc=$data.OrgDesc,TeachSubjectDesc=$data.TeachSubjectDesc,EntryTime=$data.EntryTime,QQNum=$data.QQNum,IDCardNumSub1=$data.IDCardNumSub1,IDCardNumSub2=$data.IDCardNumSub2,IDCardNumSub3=$data.IDCardNumSub3,PhoneNum=$data.PhoneNum,EmailAddr=$data.EmailAddr,$out='';$out+=' <div class="triangle-bg"></div> <div class="user-info-detail"> <div class="user-detail-bg"></div> <div class="font12 mt12"> 账号：<i class="black">';
	$out+=$escape(UserAccount);
	$out+='</i> </div> <div></div> </div> <div class="detail-content"> <div class="item"> <span> 姓名： <input class="name input-small black" placeholder="请输入姓名" type="text" text="';
	$out+=$escape(UserAccount);
	$out+='" id="txtDetailsUserName"/> </span> <span class="sex ml20"> 性别： ';
	if(UserSex == "男"){
	$out+=' <label> <input class="black middle" name="sex" type="radio" value="1" checked="" /> <i class="black"> 男 </i> <input class="black middle ml10" name="sex" type="radio" value="0"/> <i class="black"> 女 </i> </label> ';
	}else{
	$out+=' <label> <input class="black middle ml10" name="sex" type="radio" value="1"/> <i class="black"> 男 </i> <input class="black middle " name="sex" type="radio" value="0" checked=""/> <i class="black"> 女 </i> </label> ';
	}
	$out+=' </span> </div> ';
	if(IsTeacher == 1){
	$out+=' <div class="item"> <span> 角色：<i class="black">';
	$out+=$escape(RoleName);
	$out+='</i> </span> <span class="sex ml20"> 所属：<i class="black">';
	$out+=$escape(OrgDesc);
	$out+='</i> </span> </div> ';
	}else{
	$out+=' <div class="item"> <span> 角色：<i class="black">';
	$out+=$escape(RoleName);
	$out+='</i> </span> </div> <div class="item"> <span class="sex ml20"> 所属：<i class="black">';
	$out+=$escape(OrgDesc);
	$out+='</i> </span> </div> ';
	}
	$out+=' <div class="item"> <span> 到期时间：<i class="black">2016-10-1</i> </span> </div> ';
	if(IsTeacher == 1){
	$out+=' <div class="item"> <span> 教龄：<i class="black">';
	$out+=$escape(TeachSubjectDesc);
	$out+='</i> </span> <span class="sex ml20"> 入职时间： <input class="number1 input-small black middle" placeholder="请选择入职时间" type="text" text="';
	$out+=$escape(EntryTime);
	$out+='" id="txtDetailsEntryTime"/> </span> </div> ';
	}
	$out+=' ';
	if(IsTeacher == 1){
	$out+=' <div class="item"> <span> 所授学科：<i class="black">';
	$out+=$escape(TeachSubjectDesc);
	$out+='</i> </span> </div> ';
	}
	$out+=' <div> <span> QQ： <input class="qq input-small black" placeholder="请输入QQ账号" type="text" text="';
	$out+=$escape(QQNum);
	$out+='" id="txtDetailsQQNum"/> </span> <span class="sex ml20"> 身份证号： <input class="number1 input-small black middle" placeholder="411325" type="text" text="';
	$out+=$escape(IDCardNumSub1);
	$out+='" id="txtDetailsIDCardNumSub1"/> <input class="number2 input-small black middle" placeholder="19961212" type="text" text="';
	$out+=$escape(IDCardNumSub2);
	$out+='" id="txtDetailsIDCardNumSub2"/> <input class="number3 input-small black middle" placeholder="8888" type="text" text="';
	$out+=$escape(IDCardNumSub3);
	$out+='" id="txtDetailsIDCardNumSub3"/> </span> </div> <div class="tips" id="divDetailsQQTipArea"> <span class="qq-tip error-tip left">您输入的信息有误!</span> </div> <div class="tips" id="divDetailsIdCardTipArea"> <span class="number-tip error-tip right">您输入的信息有误</span> </div> <div> <span> 手机号码： <input class="phone input-small black middle" placeholder="请输入手机号码" type="text" text="';
	$out+=$escape(PhoneNum);
	$out+='" id="txtDetailsPhoneNum"/> </span> <span class="ml20"> 邮箱： <input class="email input-small black middle" placeholder="请输入邮箱地址" type="text" text="';
	$out+=$escape(EmailAddr);
	$out+='" id="txtDetailsEmailAddr"/> </span> </div> <div class="tips" id="divDetailsPhoneTipArea"> <span class="phone-tip error-tip left" style="display:none;">您输入的信息有误!</span> </div> <div class="tips" id="divDetailsEmailTipArea"> <span class="email-tip error-tip right" style="display:none;">您输入的信息有误</span> </div> </div> <div class="handle"> <span class="submit" id="spSaveEditedDetailsInfo">保存</span> <span class="cancel ml40" id="spCancelEditedDetailsInfo">取消</span> </div>';
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2RlcC9wb3B1cC9wb3B1cHRpcC5qcz9mMDMyKioqKiIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZy9zY2hvb2x0cmVlbGlzdC50cGw/N2NlNCIsIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnL29yZ3VzZXJkZXRhaWxzLmpzIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnL29yZ3VzZXJkZXRhaWwudHBsIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnL2VkaXRvcmd1c2VyZGV0YWlsLnRwbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQSx5Q0FBd0MsT0FBTywyQkFBMkI7QUFDMUU7O0FBRUE7QUFDQTtBQUNBLHNDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSwwQkFBeUIsaUVBQWlFO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBLGFBQVksZUFBZTtBQUMzQixrREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCO0FBQ3JCLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsR0FBRTtBQUNGLGtDQUFpQztBQUNqQyxJQUFHO0FBQ0gsZUFBYztBQUNkO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGLEVBQUMsRzs7Ozs7OztBQzlFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0S0FBMks7O0FBRTNLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMk1BQTBNLE1BQU0sTUFBTTtBQUN0TjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0tBQXVLLHdEQUF3RCxnQkFBZ0I7QUFDL087QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMLEVBQUM7Ozs7Ozs7OztBQ2pGRDtBQUNBO0FBQ0E7QUFDQSxjQUFhLHlLQUF5SztBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsRUFBQyxFOzs7Ozs7O0FDaENELDJCQUEwQjtBQUMxQiwwQ0FBOEM7QUFDOUMsbUNBQWtDOztBQUVsQztBQUNBLHFCQUFvQjtBQUNwQix5QkFBd0I7QUFDeEIseUJBQXdCO0FBQ3hCLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCLElBQUk7QUFDMUI7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUIsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtBQUM3RDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQSx3QkFBdUIsRUFBRSxjQUFjLEVBQUUsc0NBQXNDLEVBQUU7QUFDakY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7Ozs7QUMzWEQ7QUFDQTtBQUNBO0FBQ0EsY0FBYSxzYkFBc2I7QUFDbmM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7Ozs7QUN6Q0Q7QUFDQTtBQUNBO0FBQ0EsY0FBYSxnYkFBZ2I7QUFDN2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEpBQTZKLHFJQUFxSTtBQUNsUztBQUNBLEVBQUMsRSIsImZpbGUiOiJvcmd1c2VyZGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qVE1PREpTOnt9Ki9cclxuIWZ1bmN0aW9uICgpIHtcclxuXHRmdW5jdGlvbiBhKGEsIGIpIHtcclxuXHRcdHJldHVybiAoL3N0cmluZ3xmdW5jdGlvbi8udGVzdCh0eXBlb2YgYikgPyBoIDogZykoYSwgYilcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGIoYSwgYykge1xyXG5cdFx0cmV0dXJuIFwic3RyaW5nXCIgIT0gdHlwZW9mIGEgJiYgKGMgPSB0eXBlb2YgYSwgXCJudW1iZXJcIiA9PT0gYyA/IGEgKz0gXCJcIiA6IGEgPSBcImZ1bmN0aW9uXCIgPT09IGMgPyBiKGEuY2FsbChhKSkgOiBcIlwiKSwgYVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYyhhKSB7XHJcblx0XHRyZXR1cm4gbFthXVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZChhKSB7XHJcblx0XHRyZXR1cm4gYihhKS5yZXBsYWNlKC8mKD8hW1xcdyNdKzspfFs8PlwiJ10vZywgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGUoYSwgYikge1xyXG5cdFx0aWYgKG0oYSkpZm9yICh2YXIgYyA9IDAsIGQgPSBhLmxlbmd0aDsgZCA+IGM7IGMrKyliLmNhbGwoYSwgYVtjXSwgYywgYSk7IGVsc2UgZm9yIChjIGluIGEpYi5jYWxsKGEsIGFbY10sIGMpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmKGEsIGIpIHtcclxuXHRcdHZhciBjID0gLyhcXC8pW15cXC9dK1xcMVxcLlxcLlxcMS8sIGQgPSAoXCIuL1wiICsgYSkucmVwbGFjZSgvW15cXC9dKyQvLCBcIlwiKSwgZSA9IGQgKyBiO1xyXG5cdFx0Zm9yIChlID0gZS5yZXBsYWNlKC9cXC9cXC5cXC8vZywgXCIvXCIpOyBlLm1hdGNoKGMpOyllID0gZS5yZXBsYWNlKGMsIFwiL1wiKTtcclxuXHRcdHJldHVybiBlXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnKGIsIGMpIHtcclxuXHRcdHZhciBkID0gYS5nZXQoYikgfHwgaSh7ZmlsZW5hbWU6IGIsIG5hbWU6IFwiUmVuZGVyIEVycm9yXCIsIG1lc3NhZ2U6IFwiVGVtcGxhdGUgbm90IGZvdW5kXCJ9KTtcclxuXHRcdHJldHVybiBjID8gZChjKSA6IGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGgoYSwgYikge1xyXG5cdFx0aWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGIpIHtcclxuXHRcdFx0dmFyIGMgPSBiO1xyXG5cdFx0XHRiID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgayhjKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR2YXIgZCA9IGpbYV0gPSBmdW5jdGlvbiAoYykge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgYihjLCBhKSArIFwiXCJcclxuXHRcdFx0fSBjYXRjaCAoZCkge1xyXG5cdFx0XHRcdHJldHVybiBpKGQpKClcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBkLnByb3RvdHlwZSA9IGIucHJvdG90eXBlID0gbiwgZC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIGIgKyBcIlwiXHJcblx0XHR9LCBkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpKGEpIHtcclxuXHRcdHZhciBiID0gXCJ7VGVtcGxhdGUgRXJyb3J9XCIsIGMgPSBhLnN0YWNrIHx8IFwiXCI7XHJcblx0XHRpZiAoYyljID0gYy5zcGxpdChcIlxcblwiKS5zbGljZSgwLCAyKS5qb2luKFwiXFxuXCIpOyBlbHNlIGZvciAodmFyIGQgaW4gYSljICs9IFwiPFwiICsgZCArIFwiPlxcblwiICsgYVtkXSArIFwiXFxuXFxuXCI7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gXCJvYmplY3RcIiA9PSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKGIgKyBcIlxcblxcblwiICsgYyksIGJcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBqID0gYS5jYWNoZSA9IHt9LCBrID0gdGhpcy5TdHJpbmcsIGwgPSB7XHJcblx0XHRcIjxcIjogXCImIzYwO1wiLFxyXG5cdFx0XCI+XCI6IFwiJiM2MjtcIixcclxuXHRcdCdcIic6IFwiJiMzNDtcIixcclxuXHRcdFwiJ1wiOiBcIiYjMzk7XCIsXHJcblx0XHRcIiZcIjogXCImIzM4O1wiXHJcblx0fSwgbSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGEpIHtcclxuXHRcdFx0cmV0dXJuIFwiW29iamVjdCBBcnJheV1cIiA9PT0ge30udG9TdHJpbmcuY2FsbChhKVxyXG5cdFx0fSwgbiA9IGEudXRpbHMgPSB7XHJcblx0XHQkaGVscGVyczoge30sICRpbmNsdWRlOiBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG5cdFx0XHRyZXR1cm4gYSA9IGYoYywgYSksIGcoYSwgYilcclxuXHRcdH0sICRzdHJpbmc6IGIsICRlc2NhcGU6IGQsICRlYWNoOiBlXHJcblx0fSwgbyA9IGEuaGVscGVycyA9IG4uJGhlbHBlcnM7XHJcblx0YS5nZXQgPSBmdW5jdGlvbiAoYSkge1xyXG5cdFx0cmV0dXJuIGpbYS5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIildXHJcblx0fSwgYS5oZWxwZXIgPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0b1thXSA9IGJcclxuXHR9LCBtb2R1bGUuZXhwb3J0cyA9IGFcclxufSgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA4IDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIxIDIzIDI1IDI2IDI3IDMxIDMyIDMzIDM3IDM4XG4gKiovIiwiLy/pga7nvalcclxuZnVuY3Rpb24gTWFza1Nob3coKSB7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWFza0hpZGUoKSB7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxufVxyXG4vL+S8oOmAkuaYvuekuueahOa2iOaBr1xyXG5mdW5jdGlvbiBQb3BUaXBTaG93KG9iaikge1xyXG4gICAgdmFyIHRpcGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcC11cCBmb250MTQgaGlkZGVuXCIgaWQ9XCJva3RpcFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj48cCBjbGFzcz1cImxpbmUxMDBcIiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiPicgKyBvYmogKyAnPC9wPjwvZGl2PjwvZGl2Pic7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5hcHBlbmQodGlwaHRtbCk7XHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5hcHBlbmQodGlwaHRtbCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxuICAgICQoXCIucG9wLXVwXCIpLnNob3coKTtcclxufVxyXG4vL+W8ueWHuuehruiupOahhlxyXG52YXIgT3BlbkNvbmZyaW1Qb3AgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj4nICsgb2JqICsgJzwvZGl2PjxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJoYW5kbGVcIj4gPHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ29uZnJpbVwiPuehruWumjwvc3Bhbj4gJm5ic3A7Jm5ic3A7Jm5ic3A7PHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ2FuY2VsXCI+5Y+W5raIPC9zcGFuPiA8L2Rpdj48L2Rpdj4nO1xyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5hcHBlbmQoaHRtbCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxuICAgICQoXCIucG9wLXVwXCIpLnNob3coKTtcclxufTtcclxuLy/lvLnlh7rnoa7orqTmoYYs5rKh5pyJ5Y+W5raI5oyJ6ZKuXHJcbnZhciBPcGVuQ29uZnJpbVBvcE5vQ2FuY2VsID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcC11cCBmb250MTRcIj48c3BhbiBjbGFzcz1cInBvcC1jbG9zZSBjdXJzb3JcIj48L3NwYW4+PGRpdiBjbGFzcz1cInBvcC1jb250ZW50XCI+JyArIG9iaiArICc8L2Rpdj48YnIgLz48YnIgLz48ZGl2IGNsYXNzPVwiaGFuZGxlXCI+IDxzcGFuIGNsYXNzPVwib2tcIiBpZD1cIkNvbmZyaW1cIj7noa7lrpo8L3NwYW4+IDwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59O1xyXG4vLy/lvLnlh7rlpJrplb/ml7bpl7TlkI7mtojlpLFcclxudmFyIE9wZW5UaW1lSGlkZSA9IGZ1bmN0aW9uIChvYmosIHRpbWUpIHtcclxuICAgIC8vdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcHVwXCI+IDxoNSBjbGFzcz1cImNlbnRlciBmb250MTYgcG9wdXBoZWFkXCI+5raI5oGv5o+Q56S6PGkgY2xhc3M9XCJwb3BjbG9zZSBjdXJzb3JcIj48L2k+PC9oNT48ZGl2IGNsYXNzPVwicG9wdXBib3hcIj48ZGl2IGNsYXNzPVwiaGFuZGxlIGZvbnQxNCBhdXRvXCI+JyArIG9iaiArICc8L2Rpdj48L2Rpdj48L2Rpdj4nO1xyXG4gICAgdmFyIGh0bWwgPSAnICA8ZGl2IGNsYXNzPVwicG9wdXAgXCI+PGg1IGNsYXNzPVwiY2VudGVyIGZvbnQxNiBwb3B1cGhlYWRcIj4g5raI5oGv5o+Q56S6PGkgY2xhc3M9XCJwb3BjbG9zZSBjdXJzb3JcIj48L2k+PC9oNT48ZGl2IGNsYXNzPVwicG9wdXBib3hcIj48ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+PGRpdiBjbGFzcz1cInN1Y2Nlc3MgYXV0b1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXRvcDoyMHB4O1wiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJoYW5kbGUgc3VjY2Vzc0xldHRlclwiPiA8c3BhbiBjbGFzcz1cIm10MjBcIj4nK29iaisnPC9zcGFuPjwvZGl2PjwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxuICAgICQoXCIucG9wdXBcIikuc2hvdygpO1xyXG4gIFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3B1cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9LCB0aW1lKTtcclxuXHJcbn07XHJcbmZ1bmN0aW9uIFBvcFRpcEhpZGUoKSB7XHJcbiAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59XHJcblxyXG5leHBvcnRzLk1hc2tTaG93ID0gTWFza1Nob3c7XHJcbmV4cG9ydHMuTWFza0hpZGUgPSBNYXNrSGlkZTtcclxuZXhwb3J0cy5Qb3BUaXBTaG93ID0gUG9wVGlwU2hvdztcclxuZXhwb3J0cy5Qb3BUaXBIaWRlID0gUG9wVGlwSGlkZTtcclxuZXhwb3J0cy5PcGVuQ29uZnJpbVBvcCA9IE9wZW5Db25mcmltUG9wO1xyXG5leHBvcnRzLk9wZW5UaW1lSGlkZSA9IE9wZW5UaW1lSGlkZTtcclxuLy/lpITnkIblvLnlh7rmoYbnmoTpmpDol49cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcC1jbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgLy9kb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuZGVsZWdhdGUoXCIucG9wY2xvc2VcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3AtY2xvc2VcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5wb3AtdXBcIikuaGlkZSgpO1xyXG4gICAgICAgIC8vZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3BjbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9kZXAvcG9wdXAvcG9wdXB0aXAuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSA4IDE0IDIxIDI2IDMxIDMyIDMzIDM0IDM3IDM4XG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnL3NjaG9vbHRyZWVsaXN0JyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlYWNoPSR1dGlscy4kZWFjaCxTY2hvb2xMaXN0TW9kZWw9JGRhdGEuU2Nob29sTGlzdE1vZGVsLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRvdXQ9Jyc7JG91dCs9JyAnO1xuJGVhY2goU2Nob29sTGlzdE1vZGVsLGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyAnO1xuaWYoJHZhbHVlLk9yZ0xldmVsID09MSApe1xuJG91dCs9JyA8bGkgY2xhc3M9XCJkZXBhcnRtZW50LXNjaG9vbFwiPiA8bGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1yNSBtaWRkbGVcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZGVwYXJ0bWVudC1pdGVtXCIgb3JnSWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuT3JnSUQpO1xuJG91dCs9J1wiIHBhcmVudElkID0gXCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuUGFyZW50T3JnSUQpO1xuJG91dCs9J1wiIG9yZ0xldmVsID0gXCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuT3JnTGV2ZWwpO1xuJG91dCs9J1wiIG9yZ05hbWU9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuT3JnTmFtZSk7XG4kb3V0Kz0nXCIvPiA8c3BhbiBjbGFzcz1cIm1pZGRsZVwiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5PcmdOYW1lKTtcbiRvdXQrPSc8L3NwYW4+IDwvbGFiZWw+IDwvbGk+ICc7XG59XG4kb3V0Kz0nIDxsaT4gPGxhYmVsPiA8aW5wdXQgY2xhc3M9XCJtcjUgbWlkZGxlXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImRlcGFydG1lbnQtaXRlbVwiIG9yZ0lkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLk9yZ0lEKTtcbiRvdXQrPSdcIiBwYXJlbnRJZCA9IFwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlBhcmVudE9yZ0lEKTtcbiRvdXQrPSdcIiBvcmdMZXZlbCA9IFwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLk9yZ0xldmVsKTtcbiRvdXQrPSdcIiBvcmdOYW1lPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLk9yZ05hbWUpO1xuJG91dCs9J1wiLz4gPHNwYW4gY2xhc3M9XCJtaWRkbGVcIj4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuT3JnTmFtZSk7XG4kb3V0Kz0nPC9zcGFuPiA8L2xhYmVsPiA8L2xpPiAnO1xufSk7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZy9zY2hvb2x0cmVlbGlzdC50cGxcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAzMSAzMlxuICoqLyIsInZhciBjdXJyZW50U2hvd1VzZXJJZCA9IDA7ICAgLy/lvZPliY3mmL7npLrnmoTnlKjmiLfnmoRJRFxyXG52YXIgUG9wdUNsaWVudCA9IHJlcXVpcmUoXCJwb3B1cC9wb3B1cHRpcC5qc1wiKTsgICAgLy/lvLnlh7rmoYZcclxudmFyIGN1cnJlbnRVc2VyRGV0YWlsc0luZm8gPSBudWxsOyAgICAgICAgLy/lvZPliY3nlKjmiLfnmoTor6bnu4bkv6Hmga9cclxuXHJcbi8v6K6+572u6YOo6Zeo5Li05pe25pWw5o2uXHJcbnZhciB0ZW1wT3JnSWQgPSBcIjBcIjsgICAgIC8v5qCh5Yy65oiW6YOo6ZeoSURcclxudmFyIHRlbXBQYXJlbnRJZCA9IFwiLTFcIjsgICAgIC8v5omA5bGe54i2SURcclxudmFyIHRlbXBPcmdMZXZlbCA9IFwiLTFcIjsgICAgLy/mnLrmnoTnmbvorrDvvIwx5L2N5qCh5Yy677yMMuS4uumDqOmXqFxyXG52YXIgdGVtcE9yZ05hbWUgPSBcIlwiOyAgICAgICAvL+agoeWMuuaIlumDqOmXqOWQjeensFxyXG5cclxuLy/ojrflj5bnlKjmiLfor6bnu4bmlbDmja5cclxuZnVuY3Rpb24gR2V0VXNlckRlYXRhaWxzRGF0YSgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmcvVXNlck1hbmFnZS9HZXRVc2VyRGV0YWlsc0luZm9cIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogY3VycmVudFNob3dVc2VySWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VXNlckRldGFpbHNJbmZvID0gZGF0YS5EYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRVc2VyRGV0YWlsc0luZm8gIT0gbnVsbCAmJiBjdXJyZW50VXNlckRldGFpbHNJbmZvICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wRGV0YWlsc1RwbCA9IHJlcXVpcmUoXCJPcmcvb3JndXNlcmRldGFpbC50cGxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZVc2VyRGV0YWlsc0luZm9cIikuaHRtbCh0ZW1wRGV0YWlsc1RwbChjdXJyZW50VXNlckRldGFpbHNJbmZvKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDnpoHnlKjjgIHlkK/nlKjkuovku7ZcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3NwRGV0YWlsc09wZW5cIikuY2xpY2soMCwgT3Blbk9yQ2xvc2VVc2VyQWNjb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzcERldGFpbHNDbG9zZVwiKS5jbGljaygxLCBPcGVuT3JDbG9zZVVzZXJBY2NvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLkNvZGUgPT0gXCIxMS0wMDNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIFBvcHVDbGllbnQuUG9wVGlwU2hvdyhcIuWPguaVsOmUmeivr++8gVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+emgeeUqOaIluiAheWQr+eUqOi0puWPt1xyXG4vL+WPguaVsO+8mm9wVHlwZe+8jDHkuLrnpoHnlKjvvIww5Li65ZCv55SoXHJcbmZ1bmN0aW9uIE9wZW5PckNsb3NlVXNlckFjY291bnQob3BUeXBlKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnL1VzZXJNYW5hZ2UvRWRpdFVzZXJBY2NvdW50U3RhdHVzXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB1c2VySWQ6IGN1cnJlbnRTaG93VXNlcklkLFxyXG4gICAgICAgICAgICBvcGVyYXRlVHlwZTogb3BUeXBlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vZGVidWdnZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5PSykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3NwRGV0YWlsc09wZW5cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3NwRGV0YWlsc0Nsb3NlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3NwRGV0YWlsc09wZW5cIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3NwRGV0YWlsc0Nsb3NlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5Db2RlID09IFwiMTEtMDAzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBQb3B1Q2xpZW50LlBvcFRpcFNob3coXCLlj4LmlbDplJnor6/vvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/nvJbovpHnlKjmiLfor6bnu4bkv6Hmga9cclxuZnVuY3Rpb24gRWRpdFVzZXJEZWF0YWlsc0RhdGEoKSB7XHJcbiAgICBpZiAoY3VycmVudFVzZXJEZXRhaWxzSW5mbyAhPSBudWxsICYmIGN1cnJlbnRVc2VyRGV0YWlsc0luZm8gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy8g6ZqQ6JeP5pON5L2c5oyJ6ZKu5ZKM5LqM57qn5a+86Iiq6I+c5Y2VXHJcbiAgICAgICAgJChcIiNkaXZEZXRhaWxzU2VjTWVudVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNkaXZVc2VyRGV0YWlsc09wZXJhdGVcIikuaGlkZSgpO1xyXG4gICAgICAgIHZhciB0ZW1wRWRpdERldGFpbHNUcGwgPSByZXF1aXJlKFwiT3JnL2VkaXRvcmd1c2VyZGV0YWlsLnRwbFwiKTtcclxuICAgICAgICAkKFwiI2RpdlVzZXJEZXRhaWxzSW5mb1wiKS5odG1sKHRlbXBFZGl0RGV0YWlsc1RwbChjdXJyZW50VXNlckRldGFpbHNJbmZvKSk7XHJcbiAgICAgICAgLy/nu5HlrprmgKfliKvngrnlh7vkuovku7ZcclxuICAgICAgICAkKFwiI2RpdlVzZXJEZXRhaWxzSW5mbyBpbnB1dFtuYW1lPSdzZXgnXVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wVmFsdWUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJtbDEwXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwibWwxMFwiKTtcclxuICAgICAgICAgICAgaWYgKHRlbXBWYWx1ZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFVzZXJEZXRhaWxzSW5mby5Vc2VyU2V4ID0gXCLnlLdcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyRGV0YWlsc0luZm8uVXNlclNleCA9IFwi5aWzXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+e7keWumuehruWumuOAgeWPlua2iOS6i+S7tlxyXG4gICAgICAgICQoXCIjc3BTYXZlRWRpdGVkRGV0YWlsc0luZm9cIikuY2xpY2soU2F2ZVVwZGF0ZWRVc2VyRGV0YWlscyk7XHJcbiAgICAgICAgJChcIiNzcENhbmNlbEVkaXRlZERldGFpbHNJbmZvXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIiNkaXZEZXRhaWxzU2VjTWVudVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjZGl2VXNlckRldGFpbHNPcGVyYXRlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgdmFyIHRlbXBEZXRhaWxzVHBsID0gcmVxdWlyZShcIk9yZy9vcmd1c2VyZGV0YWlsLnRwbFwiKTtcclxuICAgICAgICAgICAgJChcIiNkaXZVc2VyRGV0YWlsc0luZm9cIikuaHRtbCh0ZW1wRGV0YWlsc1RwbChjdXJyZW50VXNlckRldGFpbHNJbmZvKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mk43kvZzmiJDlip/lkI7vvIzmmL7npLrmk43kvZzmjInpkq7lkozkuoznuqfoj5zljZVcclxuICAgICAgICAkKFwiI2RpdkRldGFpbHNTZWNNZW51XCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI2RpdlVzZXJEZXRhaWxzT3BlcmF0ZVwiKS5zaG93KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5L+d5a2Y5L+u5pS55ZCO55qE55So5oi35L+h5oGvXHJcbmZ1bmN0aW9uIFNhdmVVcGRhdGVkVXNlckRldGFpbHMoKSB7XHJcbiAgICB2YXIgdGVtcFVzZXJOYW1lID0gJChcInR4dERldGFpbHNVc2VyTmFtZVwiKS52YWwoKTtcclxuICAgIHZhciB0ZW1wRW50cnlUaW1lID0gXCJcIjtcclxuICAgIGlmICgkKFwidHh0RGV0YWlsc0VudHJ5VGltZVwiKSAhPSBudWxsICYmICQoXCJ0eHREZXRhaWxzRW50cnlUaW1lXCIpICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyRGV0YWlsc0luZm8uRW50cnlUaW1lID0gJChcInR4dERldGFpbHNFbnRyeVRpbWVcIikudmFsKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgdGVtcFFRTnVtID0gJChcInR4dERldGFpbHNRUU51bVwiKS52YWwoKTtcclxuICAgIHZhciB0ZW1wUGhvbmVOdW0gPSAkKFwidHh0RGV0YWlsc1Bob25lTnVtXCIpLnZhbCgpO1xyXG4gICAgdmFyIHRlbXBFbWFpbEFkZHIgPSAkKFwidHh0RGV0YWlsc0VtYWlsQWRkclwiKS52YWwoKTtcclxuICAgIHZhciB0ZW1wSWRDYXJkTnVtU3ViMSA9ICQoXCJ0eHREZXRhaWxzSURDYXJkTnVtU3ViMVwiKS52YWwoKTtcclxuICAgIHZhciB0ZW1wSWRDYXJkTnVtU3ViMiA9ICQoXCJ0eHREZXRhaWxzSURDYXJkTnVtU3ViMlwiKS52YWwoKTtcclxuICAgIHZhciB0ZW1wSWRDYXJkTnVtU3ViMyA9ICQoXCJ0eHREZXRhaWxzSURDYXJkTnVtU3ViM1wiKS52YWwoKTtcclxuICAgIC8v6aqM6K+B5aeT5ZCNXHJcbiAgICBpZiAodGVtcFVzZXJOYW1lID09IFwiXCIgfHwgdGVtcFVzZXJOYW1lID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIFBvcHVDbGllbnQuUG9wVGlwU2hvdyhcIuWnk+WQjeS4jeiDveS4uuepuu+8gVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGVtcFVzZXJOYW1lLmxlbmd0aCA+IDgpIHtcclxuICAgICAgICBQb3B1Q2xpZW50LlBvcFRpcFNob3coXCLlp5PlkI3kuI3og73otoXov4c45L2N77yBXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGN1cnJlbnRVc2VyRGV0YWlsc0luZm8uVXNlck5hbWUgPSB0ZW1wVXNlck5hbWU7XHJcbiAgICAvL+mqjOivgVFRXHJcbiAgICBpZiAodGVtcFFRTnVtICE9IFwiXCIgJiYgdGVtcFFRTnVtICE9IG51bGwgJiYgdGVtcFFRTnVtICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmICgvXlsxLTldXFxkezQsOH0kLy50ZXN0KHRlbXBRUU51bSkpIHtcclxuICAgICAgICAgICAgY3VycmVudFVzZXJEZXRhaWxzSW5mby5RUU51bSA9IHRlbXBRUU51bTtcclxuICAgICAgICAgICAgJChcIiNkaXZEZXRhaWxzUVFUaXBBcmVhXCIpLmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RpdkRldGFpbHNRUVRpcEFyZWFcIikuc2hvdygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/pqozor4HmiYvmnLpcclxuICAgIGlmICh0ZW1wUGhvbmVOdW0gIT0gXCJcIiAmJiB0ZW1wUGhvbmVOdW0gIT0gbnVsbCAmJiB0ZW1wUGhvbmVOdW0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKC9eKCgoMTNbMC05XXsxfSl8KDE1WzAtOV17MX0pfCgxOFswLTldezF9KSkrXFxkezh9KSQvLnRlc3QodGVtcFBob25lTnVtKSkge1xyXG4gICAgICAgICAgICBjdXJyZW50VXNlckRldGFpbHNJbmZvLlBob25lTnVtID0gdGVtcFBob25lTnVtO1xyXG4gICAgICAgICAgICAkKFwiI2RpdkRldGFpbHNQaG9uZVRpcEFyZWFcIikuaGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGl2RGV0YWlsc1Bob25lVGlwQXJlYVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+mqjOivgemCrueusVxyXG4gICAgaWYgKHRlbXBFbWFpbEFkZHIgIT0gXCJcIiAmJiB0ZW1wRW1haWxBZGRyICE9IG51bGwgJiYgdGVtcEVtYWlsQWRkciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoL14oW2EtekEtWjAtOV0rW198X3wuXT8pKlthLXpBLVowLTldK0AoW2EtekEtWjAtOV0rW198X3wuXT8pKlthLXpBLVowLTldK1xcLig/OmNvbXxjbikkLy50ZXN0KHRlbXBFbWFpbEFkZHIpKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyRGV0YWlsc0luZm8uRW1haWxBZGRyID0gdGVtcEVtYWlsQWRkcjtcclxuICAgICAgICAgICAgJChcIiNkaXZEZXRhaWxzRW1haWxUaXBBcmVhXCIpLmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RpdkRldGFpbHNFbWFpbFRpcEFyZWFcIikuc2hvdygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/pqozor4Houqvku73or4Hlj7dcclxuICAgIGlmICh0ZW1wSWRDYXJkTnVtU3ViMSAhPSBcIlwiICYmIHRlbXBJZENhcmROdW1TdWIxICE9IHVuZGVmaW5lZCAmJiB0ZW1wSWRDYXJkTnVtU3ViMiAhPSBcIlwiICYmIHRlbXBJZENhcmROdW1TdWIyICE9IHVuZGVmaW5lZCAmJiB0ZW1wSWRDYXJkTnVtU3ViMyAhPSBcIlwiICYmIHRlbXBJZENhcmROdW1TdWIzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIC8v6aqM6K+B5qC85byPXHJcbiAgICAgICAgdmFyIHRlbXBJZENhcmROdW0gPSB0ZW1wSWRDYXJkTnVtU3ViMSArIHRlbXBJZENhcmROdW1TdWIyICsgdGVtcElkQ2FyZE51bVN1YjM7XHJcbiAgICAgICAgaWYgKElkZW50aXR5Q29kZVZhbGlkKHRlbXBJZENhcmROdW0pKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyRGV0YWlsc0luZm8uSURDYXJkTnVtID0gdGVtcElkQ2FyZE51bTtcclxuICAgICAgICAgICAgJChcIiNkaXZEZXRhaWxzSWRDYXJkVGlwQXJlYVwiKS5oaWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkaXZEZXRhaWxzSWRDYXJkVGlwQXJlYVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgdGVtcFVzZXJTZXggPSBcIlwiO1xyXG4gICAgaWYgKGN1cnJlbnRVc2VyRGV0YWlsc0luZm8uVXNlclNleCA9PSBcIueUt1wiKSB7XHJcbiAgICAgICAgdGVtcFVzZXJTZXggPSBcIjFcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGVtcFVzZXJTZXggPSBcIjBcIjtcclxuICAgIH1cclxuICAgIC8v5o+Q5Lqk5L+u5pS5XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnL1VzZXJNYW5hZ2UvRWRpdFVzZXJEZXRhaWxzSW5mb1wiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBjdXJyZW50U2hvd1VzZXJJZCxcclxuICAgICAgICAgICAgdXNlck5hbWU6IGN1cnJlbnRVc2VyRGV0YWlsc0luZm8uVXNlck5hbWUsXHJcbiAgICAgICAgICAgIHVzZXJTZXg6IHRlbXBVc2VyU2V4LFxyXG4gICAgICAgICAgICBFbnRyeVRpbWU6IGN1cnJlbnRVc2VyRGV0YWlsc0luZm8uRW50cnlUaW1lLFxyXG4gICAgICAgICAgICBRUU51bTogY3VycmVudFVzZXJEZXRhaWxzSW5mby5RUU51bSxcclxuICAgICAgICAgICAgSURDYXJkTnVtOiBjdXJyZW50VXNlckRldGFpbHNJbmZvLklEQ2FyZE51bSxcclxuICAgICAgICAgICAgUGhvbmVOdW06IGN1cnJlbnRVc2VyRGV0YWlsc0luZm8uUGhvbmVOdW0sXHJcbiAgICAgICAgICAgIEVtYWlsQWRkcjogY3VycmVudFVzZXJEZXRhaWxzSW5mby5FbWFpbEFkZHJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZEZXRhaWxzU2VjTWVudVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZVc2VyRGV0YWlsc09wZXJhdGVcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wRGV0YWlsc1RwbCA9IHJlcXVpcmUoXCJPcmcvb3JndXNlcmRldGFpbC50cGxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZVc2VyRGV0YWlsc0luZm9cIikuaHRtbCh0ZW1wRGV0YWlsc1RwbChjdXJyZW50VXNlckRldGFpbHNJbmZvKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5Db2RlID09IFwiMTEtMDAzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBQb3B1Q2xpZW50LlBvcFRpcFNob3coXCLlj4LmlbDplJnor6/vvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/orr7nva7pg6jpl6hcclxuZnVuY3Rpb24gU2hvd1NldFVzZXJEZXBhcnRtZW50QXJlYSgpIHtcclxuICAgICQoXCIjaW1nU2V0RGVwYXJ0Q2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjZGl2VXNlckRldGFpbHNTZXREZXBhcnRcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICB9KTtcclxuICAgICQoXCIjYnRuVXNlckRldGFpbHNTZXREZXBhcnRTdWJtaXRcIikuY2xpY2soU2V0VXNlckRlcGFydG1lbnQpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL09yZy9Db21tb25NYW5hZ2UvR2V0T3JnVHJlZUJ5VXNlcklkXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkZXBhcnRtZW50SUQ6IGN1cnJlbnRVc2VyRGV0YWlsc0luZm8uRGVwYXJ0SWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5EYXRhICE9IG51bGwgJiYgZGF0YS5EYXRhICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzY2hvb2xUcmVlVHBsID0gcmVxdWlyZShcIk9yZy9zY2hvb2x0cmVlbGlzdC50cGxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN1bFVzZXJEZXRhaWxTZXREZXBhcnRtZW50XCIpLmh0bWwoc2Nob29sVHJlZVRwbChkYXRhLkRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+a3u+WKoOmAieaLqemDqOmXqOS6i+S7tlxyXG4gICAgICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nZGVwYXJ0bWVudC1pdGVtJ11cIikuY2xpY2soQ2hhbmdlTmV3RGVwYXJ0bWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZVc2VyRGV0YWlsc1NldERlcGFydFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+eCueWHu+aUueWPmOmDqOmXqOS6i+S7tlxyXG5mdW5jdGlvbiBDaGFuZ2VOZXdEZXBhcnRtZW50KCkge1xyXG4gICAgdGVtcE9yZ0lkID0gJCh0aGlzKS5hdHRyKFwib3JnSWRcIik7XHJcbiAgICB0ZW1wUGFyZW50SWQgPSAkKHRoaXMpLmF0dHIoXCJwYXJlbnRJZFwiKTtcclxuICAgIHRlbXBPcmdMZXZlbCA9ICQodGhpcykuYXR0cihcIm9yZ0xldmVsXCIpO1xyXG4gICAgdGVtcE9yZ05hbWUgPSAkKHRoaXMpLmF0dHIoXCJvcmdOYW1lXCIpO1xyXG59XHJcblxyXG4vL+S/neWtmOeUqOaIt+mAieaLqeeahOaWsOmDqOmXqFxyXG5mdW5jdGlvbiBTZXRVc2VyRGVwYXJ0bWVudCgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmcvVXNlck1hbmFnZS9SZXNldFVzZXJEZXBhcnRcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogY3VycmVudFNob3dVc2VySWQsXHJcbiAgICAgICAgICAgIGRlcGFydElkOiB0ZW1wT3JnSWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBPcmdMZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyRGV0YWlsc0luZm8uU2Nob29sSWQgPSB0ZW1wT3JnSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyRGV0YWlsc0luZm8uU2Nob29sTmFtZSA9IHRlbXBPcmdOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VXNlckRldGFpbHNJbmZvLk9yZ0Rlc2MgPSB0ZW1wT3JnTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRlbXBPcmdMZXZlbCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyRGV0YWlsc0luZm8uRGVwYXJ0SWQgPSB0ZW1wT3JnSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyRGV0YWlsc0luZm8uRGVwYXJ0TmFtZSA9IHRlbXBPcmdOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VXNlckRldGFpbHNJbmZvLk9yZ0Rlc2MgPSBjdXJyZW50VXNlckRldGFpbHNJbmZvLlNjaG9vbE5hbWUgKyBcIiBcIiArIHRlbXBPcmdOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL+WFs+mXreW8ueeql1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2VXNlckRldGFpbHNTZXREZXBhcnRcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/liLfmlrDmlbDmja5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcERldGFpbHNUcGwgPSByZXF1aXJlKFwiT3JnL29yZ3VzZXJkZXRhaWwudHBsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGl2VXNlckRldGFpbHNJbmZvXCIpLmh0bWwodGVtcERldGFpbHNUcGwoY3VycmVudFVzZXJEZXRhaWxzSW5mbykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBPcmdJZCA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBQYXJlbnRJZCA9IFwiLTFcIjtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wT3JnTGV2ZWwgPSBcIi0xXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcE9yZ05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBQb3B1Q2xpZW50LlBvcFRpcFNob3coXCLorr7nva7pg6jpl6jlpLHotKXvvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBQb3B1Q2xpZW50LlBvcFRpcFNob3coZGF0YS5SZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v6YeN572u5a+G56CBXHJcbmZ1bmN0aW9uIFJlc2V0VXNlclBXRCgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmcvVXNlck1hbmFnZS9SZXNldFVzZXJQd2RcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogY3VycmVudFNob3dVc2VySWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZEZXRhaWxzU2VjTWVudVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZVc2VyRGV0YWlsc09wZXJhdGVcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wRGV0YWlsc1RwbCA9IHJlcXVpcmUoXCJPcmcvb3JndXNlcmRldGFpbC50cGxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkaXZVc2VyRGV0YWlsc0luZm9cIikuaHRtbCh0ZW1wRGV0YWlsc1RwbChjdXJyZW50VXNlckRldGFpbHNJbmZvKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5Db2RlID09IFwiMTEtMDAzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBQb3B1Q2xpZW50LlBvcFRpcFNob3coXCLlj4LmlbDplJnor6/vvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFBvcHVDbGllbnQuUG9wVGlwU2hvdyhkYXRhLlJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/pqozor4Houqvku73or4Hlj7dcclxuZnVuY3Rpb24gSWRlbnRpdHlDb2RlVmFsaWQoY29kZSkge1xyXG4gICAgdmFyIGNpdHkgPSB7IDExOiBcIuWMl+S6rFwiLCAxMjogXCLlpKnmtKVcIiwgMTM6IFwi5rKz5YyXXCIsIDE0OiBcIuWxseilv1wiLCAxNTogXCLlhoXokpnlj6RcIiwgMjE6IFwi6L695a6BXCIsIDIyOiBcIuWQieael1wiLCAyMzogXCLpu5HpvpnmsZ8gXCIsIDMxOiBcIuS4iua1t1wiLCAzMjogXCLmsZ/oi49cIiwgMzM6IFwi5rWZ5rGfXCIsIDM0OiBcIuWuieW+vVwiLCAzNTogXCLnpo/lu7pcIiwgMzY6IFwi5rGf6KW/XCIsIDM3OiBcIuWxseS4nFwiLCA0MTogXCLmsrPljZdcIiwgNDI6IFwi5rmW5YyXIFwiLCA0MzogXCLmuZbljZdcIiwgNDQ6IFwi5bm/5LicXCIsIDQ1OiBcIuW5v+ilv1wiLCA0NjogXCLmtbfljZdcIiwgNTA6IFwi6YeN5bqGXCIsIDUxOiBcIuWbm+W3nVwiLCA1MjogXCLotLXlt55cIiwgNTM6IFwi5LqR5Y2XXCIsIDU0OiBcIuilv+iXjyBcIiwgNjE6IFwi6ZmV6KW/XCIsIDYyOiBcIueUmOiCg1wiLCA2MzogXCLpnZLmtbdcIiwgNjQ6IFwi5a6B5aSPXCIsIDY1OiBcIuaWsOeWhlwiLCA3MTogXCLlj7Dmub5cIiwgODE6IFwi6aaZ5rivXCIsIDgyOiBcIua+s+mXqFwiLCA5MTogXCLlm73lpJYgXCIgfTtcclxuICAgIHZhciB0aXAgPSBcIlwiO1xyXG4gICAgdmFyIHBhc3MgPSB0cnVlO1xyXG5cclxuICAgIGlmICghY29kZSB8fCAhL15cXGR7Nn0oMTh8MTl8MjApP1xcZHsyfSgwWzEtOV18MVsxMl0pKDBbMS05XXxbMTJdXFxkfDNbMDFdKVxcZHszfShcXGR8WCkkL2kudGVzdChjb2RlKSkge1xyXG4gICAgICAgIHRpcCA9IFwi6Lqr5Lu96K+B5Y+35qC85byP6ZSZ6K+vXCI7XHJcbiAgICAgICAgcGFzcyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKCFjaXR5W2NvZGUuc3Vic3RyKDAsIDIpXSkge1xyXG4gICAgICAgIHRpcCA9IFwi5Zyw5Z2A57yW56CB6ZSZ6K+vXCI7XHJcbiAgICAgICAgcGFzcyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8xOOS9jei6q+S7veivgemcgOimgemqjOivgeacgOWQjuS4gOS9jeagoemqjOS9jVxyXG4gICAgICAgIGlmIChjb2RlLmxlbmd0aCA9PSAxOCkge1xyXG4gICAgICAgICAgICBjb2RlID0gY29kZS5zcGxpdCgnJyk7XHJcbiAgICAgICAgICAgIC8v4oiRKGFpw5dXaSkobW9kIDExKVxyXG4gICAgICAgICAgICAvL+WKoOadg+WboOWtkFxyXG4gICAgICAgICAgICB2YXIgZmFjdG9yID0gWzcsIDksIDEwLCA1LCA4LCA0LCAyLCAxLCA2LCAzLCA3LCA5LCAxMCwgNSwgOCwgNCwgMl07XHJcbiAgICAgICAgICAgIC8v5qCh6aqM5L2NXHJcbiAgICAgICAgICAgIHZhciBwYXJpdHkgPSBbMSwgMCwgJ1gnLCA5LCA4LCA3LCA2LCA1LCA0LCAzLCAyXTtcclxuICAgICAgICAgICAgdmFyIHN1bSA9IDA7XHJcbiAgICAgICAgICAgIHZhciBhaSA9IDA7XHJcbiAgICAgICAgICAgIHZhciB3aSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYWkgPSBjb2RlW2ldO1xyXG4gICAgICAgICAgICAgICAgd2kgPSBmYWN0b3JbaV07XHJcbiAgICAgICAgICAgICAgICBzdW0gKz0gYWkgKiB3aTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbGFzdCA9IHBhcml0eVtzdW0gJSAxMV07XHJcbiAgICAgICAgICAgIGlmIChwYXJpdHlbc3VtICUgMTFdICE9IGNvZGVbMTddKSB7XHJcbiAgICAgICAgICAgICAgICB0aXAgPSBcIuagoemqjOS9jemUmeivr1wiO1xyXG4gICAgICAgICAgICAgICAgcGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9pZighcGFzcykgYWxlcnQodGlwKTtcclxuICAgIHJldHVybiBwYXNzO1xyXG59XHJcblxyXG4vL+mhtemdouWKoOi9veWujOaIkOWQjuS6i+S7tlxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIGN1cnJlbnRTaG93VXNlcklkID0gJChcIiNoaWRTaG93VXNlcklkXCIpLnZhbCgpO1xyXG4gICAgLy/pobXpnaLliqDovb3lrozmiJDlkI7vvIzojrflj5bnlKjmiLfor6bnu4bmlbDmja5cclxuICAgIEdldFVzZXJEZWF0YWlsc0RhdGEoKTtcclxuICAgIC8v5re75Yqg5LqL5Lu2XHJcbiAgICAkKFwiI2J0bkVkaXRVc2VyRGV0YWlsc0luZm9cIikuY2xpY2soRWRpdFVzZXJEZWF0YWlsc0RhdGEpO1xyXG4gICAgJChcIiNidG5TZXREZXBhcnRNZW50XCIpLmNsaWNrKFNob3dTZXRVc2VyRGVwYXJ0bWVudEFyZWEpO1xyXG4gICAgJChcIiNidG5SZXNldFBXRFwiKS5jbGljayhSZXNldFVzZXJQV0QpO1xyXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2pzL09yZy9vcmd1c2VyZGV0YWlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDMyXG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnL29yZ3VzZXJkZXRhaWwnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVzY2FwZT0kdXRpbHMuJGVzY2FwZSxVc2VyQWNjb3VudD0kZGF0YS5Vc2VyQWNjb3VudCxFbmFsYmVGbGFncz0kZGF0YS5FbmFsYmVGbGFncyxVc2VyTmFtZT0kZGF0YS5Vc2VyTmFtZSxVc2VyU2V4PSRkYXRhLlVzZXJTZXgsUm9sZU5hbWU9JGRhdGEuUm9sZU5hbWUsT3JnRGVzYz0kZGF0YS5PcmdEZXNjLEV4cGlyZVRpbWU9JGRhdGEuRXhwaXJlVGltZSxFbnRyeVRpbWU9JGRhdGEuRW50cnlUaW1lLElzVGVhY2hlcj0kZGF0YS5Jc1RlYWNoZXIsVGVhY2hTdWJqZWN0RGVzYz0kZGF0YS5UZWFjaFN1YmplY3REZXNjLFFRTnVtPSRkYXRhLlFRTnVtLElEQ2FyZE51bT0kZGF0YS5JRENhcmROdW0sUGhvbmVOdW09JGRhdGEuUGhvbmVOdW0sRW1haWxBZGRyPSRkYXRhLkVtYWlsQWRkciwkb3V0PScnOyRvdXQrPScgPGRpdiBjbGFzcz1cInRyaWFuZ2xlLWJnXCI+PC9kaXY+IDxkaXYgY2xhc3M9XCJ1c2VyLWluZm8tZGV0YWlsXCI+IDxkaXYgY2xhc3M9XCJ1c2VyLWRldGFpbC1iZ1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwiZm9udDEyIG10MTJcIj4g6LSm5Y+377yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKFVzZXJBY2NvdW50KTtcbiRvdXQrPSc8L2k+ICc7XG5pZihFbmFsYmVGbGFncyA9PSAxKXtcbiRvdXQrPScgPHNwYW4gaWQ9XCJzcERldGFpbHNDbG9zZVwiIGNsYXNzPVwiY2xvc2UgbWw1XCI+56aB55SoPC9zcGFuPiA8c3BhbiBpZD1cInNwRGV0YWlsc09wZW5cIiBjbGFzcz1cIm9wZW4gbWw1XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+5ZCv55SoPC9zcGFuPiAnO1xufVxuJG91dCs9JyAnO1xuaWYoRW5hbGJlRmxhZ3MgPT0gMCl7XG4kb3V0Kz0nIDxzcGFuIGlkPVwic3BEZXRhaWxzT3BlblwiIGNsYXNzPVwib3BlbiBtbDVcIj7lkK/nlKg8L3NwYW4+IDxzcGFuIGlkPVwic3BEZXRhaWxzQ2xvc2VcIiBjbGFzcz1cImNsb3NlIG1sNVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPuemgeeUqDwvc3Bhbj4gJztcbn1cbiRvdXQrPScgPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiZGV0YWlsLWNvbnRlbnRcIj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPHNwYW4+IOWnk+WQje+8mjxpIGNsYXNzPVwiYmxhY2tcIj4nO1xuJG91dCs9JGVzY2FwZShVc2VyTmFtZSk7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDxzcGFuIGNsYXNzPVwic2V4IG1sMjBcIj4g5oCn5Yir77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKFVzZXJTZXgpO1xuJG91dCs9JzwvaT4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPHNwYW4+IOinkuiJsu+8mjxpIGNsYXNzPVwiYmxhY2tcIj4nO1xuJG91dCs9JGVzY2FwZShSb2xlTmFtZSk7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDxzcGFuIGNsYXNzPVwic2V4IG1sMjBcIj4g5omA5bGe77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKE9yZ0Rlc2MpO1xuJG91dCs9JzwvaT4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPHNwYW4+IOWIsOacn+aXtumXtO+8mjxpIGNsYXNzPVwiYmxhY2tcIj4nO1xuJG91dCs9JGVzY2FwZShFeHBpcmVUaW1lKTtcbiRvdXQrPSc8L2k+IDwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XCJpdGVtXCI+IDxzcGFuPiDlhaXogYzml7bpl7TvvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoRW50cnlUaW1lKTtcbiRvdXQrPSc8L2k+IDwvc3Bhbj4gPC9kaXY+ICc7XG5pZihJc1RlYWNoZXIgPT0gMSl7XG4kb3V0Kz0nIDxkaXYgY2xhc3M9XCJpdGVtXCI+IDxzcGFuPiDmiYDmjojlrabnp5HvvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoVGVhY2hTdWJqZWN0RGVzYyk7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDwvZGl2PiAnO1xufVxuJG91dCs9JyA8ZGl2IGNsYXNzPVwiaXRlbVwiPiA8c3Bhbj4gUVHvvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoUVFOdW0pO1xuJG91dCs9JzwvaT4gPC9zcGFuPiA8c3BhbiBjbGFzcz1cInNleCBtbDIwXCI+IOi6q+S7veivgeWPt++8mjxpIGNsYXNzPVwiYmxhY2tcIj4nO1xuJG91dCs9JGVzY2FwZShJRENhcmROdW0pO1xuJG91dCs9JzwvaT4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPHNwYW4+IOaJi+acuuWPt+egge+8mjxpIGNsYXNzPVwiYmxhY2tcIj4nO1xuJG91dCs9JGVzY2FwZShQaG9uZU51bSk7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDxzcGFuIGNsYXNzPVwic2V4IG1sMjBcIj4g6YKu566x77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKEVtYWlsQWRkcik7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDwvZGl2PiA8L2Rpdj4nO1xucmV0dXJuIG5ldyBTdHJpbmcoJG91dCk7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL3RwbC9Pcmcvb3JndXNlcmRldGFpbC50cGxcbiAqKiBtb2R1bGUgaWQgPSA3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAzMlxuICoqLyIsInZhciB0ZW1wbGF0ZT1yZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdPcmcvdHBsL09yZy9lZGl0b3JndXNlcmRldGFpbCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZXNjYXBlPSR1dGlscy4kZXNjYXBlLFVzZXJBY2NvdW50PSRkYXRhLlVzZXJBY2NvdW50LFVzZXJTZXg9JGRhdGEuVXNlclNleCxJc1RlYWNoZXI9JGRhdGEuSXNUZWFjaGVyLFJvbGVOYW1lPSRkYXRhLlJvbGVOYW1lLE9yZ0Rlc2M9JGRhdGEuT3JnRGVzYyxUZWFjaFN1YmplY3REZXNjPSRkYXRhLlRlYWNoU3ViamVjdERlc2MsRW50cnlUaW1lPSRkYXRhLkVudHJ5VGltZSxRUU51bT0kZGF0YS5RUU51bSxJRENhcmROdW1TdWIxPSRkYXRhLklEQ2FyZE51bVN1YjEsSURDYXJkTnVtU3ViMj0kZGF0YS5JRENhcmROdW1TdWIyLElEQ2FyZE51bVN1YjM9JGRhdGEuSURDYXJkTnVtU3ViMyxQaG9uZU51bT0kZGF0YS5QaG9uZU51bSxFbWFpbEFkZHI9JGRhdGEuRW1haWxBZGRyLCRvdXQ9Jyc7JG91dCs9JyA8ZGl2IGNsYXNzPVwidHJpYW5nbGUtYmdcIj48L2Rpdj4gPGRpdiBjbGFzcz1cInVzZXItaW5mby1kZXRhaWxcIj4gPGRpdiBjbGFzcz1cInVzZXItZGV0YWlsLWJnXCI+PC9kaXY+IDxkaXYgY2xhc3M9XCJmb250MTIgbXQxMlwiPiDotKblj7fvvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoVXNlckFjY291bnQpO1xuJG91dCs9JzwvaT4gPC9kaXY+IDxkaXY+PC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiZGV0YWlsLWNvbnRlbnRcIj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPHNwYW4+IOWnk+WQje+8miA8aW5wdXQgY2xhc3M9XCJuYW1lIGlucHV0LXNtYWxsIGJsYWNrXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlp5PlkI1cIiB0eXBlPVwidGV4dFwiIHRleHQ9XCInO1xuJG91dCs9JGVzY2FwZShVc2VyQWNjb3VudCk7XG4kb3V0Kz0nXCIgaWQ9XCJ0eHREZXRhaWxzVXNlck5hbWVcIi8+IDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzZXggbWwyMFwiPiDmgKfliKvvvJogJztcbmlmKFVzZXJTZXggPT0gXCLnlLdcIil7XG4kb3V0Kz0nIDxsYWJlbD4gPGlucHV0IGNsYXNzPVwiYmxhY2sgbWlkZGxlXCIgbmFtZT1cInNleFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMVwiIGNoZWNrZWQ9XCJcIiAvPiA8aSBjbGFzcz1cImJsYWNrXCI+IOeUtyA8L2k+IDxpbnB1dCBjbGFzcz1cImJsYWNrIG1pZGRsZSBtbDEwXCIgbmFtZT1cInNleFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMFwiLz4gPGkgY2xhc3M9XCJibGFja1wiPiDlpbMgPC9pPiA8L2xhYmVsPiAnO1xufWVsc2V7XG4kb3V0Kz0nIDxsYWJlbD4gPGlucHV0IGNsYXNzPVwiYmxhY2sgbWlkZGxlIG1sMTBcIiBuYW1lPVwic2V4XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIxXCIvPiA8aSBjbGFzcz1cImJsYWNrXCI+IOeUtyA8L2k+IDxpbnB1dCBjbGFzcz1cImJsYWNrIG1pZGRsZSBcIiBuYW1lPVwic2V4XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIwXCIgY2hlY2tlZD1cIlwiLz4gPGkgY2xhc3M9XCJibGFja1wiPiDlpbMgPC9pPiA8L2xhYmVsPiAnO1xufVxuJG91dCs9JyA8L3NwYW4+IDwvZGl2PiAnO1xuaWYoSXNUZWFjaGVyID09IDEpe1xuJG91dCs9JyA8ZGl2IGNsYXNzPVwiaXRlbVwiPiA8c3Bhbj4g6KeS6Imy77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKFJvbGVOYW1lKTtcbiRvdXQrPSc8L2k+IDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzZXggbWwyMFwiPiDmiYDlsZ7vvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoT3JnRGVzYyk7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDwvZGl2PiAnO1xufWVsc2V7XG4kb3V0Kz0nIDxkaXYgY2xhc3M9XCJpdGVtXCI+IDxzcGFuPiDop5LoibLvvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoUm9sZU5hbWUpO1xuJG91dCs9JzwvaT4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPHNwYW4gY2xhc3M9XCJzZXggbWwyMFwiPiDmiYDlsZ7vvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoT3JnRGVzYyk7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDwvZGl2PiAnO1xufVxuJG91dCs9JyA8ZGl2IGNsYXNzPVwiaXRlbVwiPiA8c3Bhbj4g5Yiw5pyf5pe26Ze077yaPGkgY2xhc3M9XCJibGFja1wiPjIwMTYtMTAtMTwvaT4gPC9zcGFuPiA8L2Rpdj4gJztcbmlmKElzVGVhY2hlciA9PSAxKXtcbiRvdXQrPScgPGRpdiBjbGFzcz1cIml0ZW1cIj4gPHNwYW4+IOaVmem+hO+8mjxpIGNsYXNzPVwiYmxhY2tcIj4nO1xuJG91dCs9JGVzY2FwZShUZWFjaFN1YmplY3REZXNjKTtcbiRvdXQrPSc8L2k+IDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzZXggbWwyMFwiPiDlhaXogYzml7bpl7TvvJogPGlucHV0IGNsYXNzPVwibnVtYmVyMSBpbnB1dC1zbWFsbCBibGFjayBtaWRkbGVcIiBwbGFjZWhvbGRlcj1cIuivt+mAieaLqeWFpeiBjOaXtumXtFwiIHR5cGU9XCJ0ZXh0XCIgdGV4dD1cIic7XG4kb3V0Kz0kZXNjYXBlKEVudHJ5VGltZSk7XG4kb3V0Kz0nXCIgaWQ9XCJ0eHREZXRhaWxzRW50cnlUaW1lXCIvPiA8L3NwYW4+IDwvZGl2PiAnO1xufVxuJG91dCs9JyAnO1xuaWYoSXNUZWFjaGVyID09IDEpe1xuJG91dCs9JyA8ZGl2IGNsYXNzPVwiaXRlbVwiPiA8c3Bhbj4g5omA5o6I5a2m56eR77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKFRlYWNoU3ViamVjdERlc2MpO1xuJG91dCs9JzwvaT4gPC9zcGFuPiA8L2Rpdj4gJztcbn1cbiRvdXQrPScgPGRpdj4gPHNwYW4+IFFR77yaIDxpbnB1dCBjbGFzcz1cInFxIGlucHV0LXNtYWxsIGJsYWNrXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVRUei0puWPt1wiIHR5cGU9XCJ0ZXh0XCIgdGV4dD1cIic7XG4kb3V0Kz0kZXNjYXBlKFFRTnVtKTtcbiRvdXQrPSdcIiBpZD1cInR4dERldGFpbHNRUU51bVwiLz4gPC9zcGFuPiA8c3BhbiBjbGFzcz1cInNleCBtbDIwXCI+IOi6q+S7veivgeWPt++8miA8aW5wdXQgY2xhc3M9XCJudW1iZXIxIGlucHV0LXNtYWxsIGJsYWNrIG1pZGRsZVwiIHBsYWNlaG9sZGVyPVwiNDExMzI1XCIgdHlwZT1cInRleHRcIiB0ZXh0PVwiJztcbiRvdXQrPSRlc2NhcGUoSURDYXJkTnVtU3ViMSk7XG4kb3V0Kz0nXCIgaWQ9XCJ0eHREZXRhaWxzSURDYXJkTnVtU3ViMVwiLz4gPGlucHV0IGNsYXNzPVwibnVtYmVyMiBpbnB1dC1zbWFsbCBibGFjayBtaWRkbGVcIiBwbGFjZWhvbGRlcj1cIjE5OTYxMjEyXCIgdHlwZT1cInRleHRcIiB0ZXh0PVwiJztcbiRvdXQrPSRlc2NhcGUoSURDYXJkTnVtU3ViMik7XG4kb3V0Kz0nXCIgaWQ9XCJ0eHREZXRhaWxzSURDYXJkTnVtU3ViMlwiLz4gPGlucHV0IGNsYXNzPVwibnVtYmVyMyBpbnB1dC1zbWFsbCBibGFjayBtaWRkbGVcIiBwbGFjZWhvbGRlcj1cIjg4ODhcIiB0eXBlPVwidGV4dFwiIHRleHQ9XCInO1xuJG91dCs9JGVzY2FwZShJRENhcmROdW1TdWIzKTtcbiRvdXQrPSdcIiBpZD1cInR4dERldGFpbHNJRENhcmROdW1TdWIzXCIvPiA8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVwidGlwc1wiIGlkPVwiZGl2RGV0YWlsc1FRVGlwQXJlYVwiPiA8c3BhbiBjbGFzcz1cInFxLXRpcCBlcnJvci10aXAgbGVmdFwiPuaCqOi+k+WFpeeahOS/oeaBr+acieivryE8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVwidGlwc1wiIGlkPVwiZGl2RGV0YWlsc0lkQ2FyZFRpcEFyZWFcIj4gPHNwYW4gY2xhc3M9XCJudW1iZXItdGlwIGVycm9yLXRpcCByaWdodFwiPuaCqOi+k+WFpeeahOS/oeaBr+acieivrzwvc3Bhbj4gPC9kaXY+IDxkaXY+IDxzcGFuPiDmiYvmnLrlj7fnoIHvvJogPGlucHV0IGNsYXNzPVwicGhvbmUgaW5wdXQtc21hbGwgYmxhY2sgbWlkZGxlXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXmiYvmnLrlj7fnoIFcIiB0eXBlPVwidGV4dFwiIHRleHQ9XCInO1xuJG91dCs9JGVzY2FwZShQaG9uZU51bSk7XG4kb3V0Kz0nXCIgaWQ9XCJ0eHREZXRhaWxzUGhvbmVOdW1cIi8+IDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJtbDIwXCI+IOmCrueuse+8miA8aW5wdXQgY2xhc3M9XCJlbWFpbCBpbnB1dC1zbWFsbCBibGFjayBtaWRkbGVcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpemCrueuseWcsOWdgFwiIHR5cGU9XCJ0ZXh0XCIgdGV4dD1cIic7XG4kb3V0Kz0kZXNjYXBlKEVtYWlsQWRkcik7XG4kb3V0Kz0nXCIgaWQ9XCJ0eHREZXRhaWxzRW1haWxBZGRyXCIvPiA8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVwidGlwc1wiIGlkPVwiZGl2RGV0YWlsc1Bob25lVGlwQXJlYVwiPiA8c3BhbiBjbGFzcz1cInBob25lLXRpcCBlcnJvci10aXAgbGVmdFwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPuaCqOi+k+WFpeeahOS/oeaBr+acieivryE8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVwidGlwc1wiIGlkPVwiZGl2RGV0YWlsc0VtYWlsVGlwQXJlYVwiPiA8c3BhbiBjbGFzcz1cImVtYWlsLXRpcCBlcnJvci10aXAgcmlnaHRcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj7mgqjovpPlhaXnmoTkv6Hmga/mnInor688L3NwYW4+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cImhhbmRsZVwiPiA8c3BhbiBjbGFzcz1cInN1Ym1pdFwiIGlkPVwic3BTYXZlRWRpdGVkRGV0YWlsc0luZm9cIj7kv53lrZg8L3NwYW4+IDxzcGFuIGNsYXNzPVwiY2FuY2VsIG1sNDBcIiBpZD1cInNwQ2FuY2VsRWRpdGVkRGV0YWlsc0luZm9cIj7lj5bmtog8L3NwYW4+IDwvZGl2Pic7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZy9lZGl0b3JndXNlcmRldGFpbC50cGxcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAzMlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=