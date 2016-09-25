webpackJsonp([37,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	module.exports = __webpack_require__(88);


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

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	
	var tplTable = __webpack_require__(87);
	__webpack_require__(12);
	var module = {
	    init: function () {
	        //todo 逻辑函数
	        this.render();
	        this.initBtns();
	       
	    },
	
	    render: function () {
	        //加载学生信息
	        $.ajax({
	            type: "post",
	            url: "/OrgZiXun/ZiXunGuanLi/GetOrgStuDetails",
	            dataType: "json",
	            data: {
	
	            },
	            success: function (data) {
	
	                if (data.result.Data) {
	                    if (data.result.Data) {
	                        debugger;
	                        $("#main-content-wrapper").html(tplTable(data.result.Data));
	                       
	                    }
	                    else {
	
	                       alert("无数据");
	
	
	                    }
	                }
	                else {
	
	
	                }
	            }
	        });
	
	
	
	    },
	    initBtns: function () {
	        //todo 绑定事件
	      
	        //委托删除学校
	        //$('#scaList').delegate(".dustbin", "click", function () {
	        //    var obj = $(this).attr("data-id");
	        //    $("#a" + obj).remove();
	        //    $("#chk" + obj).attr("checked", false);
	
	        //});
	    }
	
	
	};
	
	
	//绑定数据
	$(function () {
	    module.init();
	});
	
	
	$(function () {
	
	  
	
	
	});
	


/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgEvaluation/studentdetails',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,StuAccount=$data.StuAccount,ExpireTime=$data.ExpireTime,StuName=$data.StuName,ShowIsEnable=$data.ShowIsEnable,Sex=$data.Sex,BirthDay=$data.BirthDay,EduType=$data.EduType,Phone=$data.Phone,Qq=$data.Qq,OldSchoolName=$data.OldSchoolName,OldClass=$data.OldClass,Email=$data.Email,FamAddress=$data.FamAddress,$each=$utils.$each,AlreadySubjects=$data.AlreadySubjects,$value=$data.$value,$index=$data.$index,ParentsData=$data.ParentsData,OldScores=$data.OldScores,$out='';$out+=' <div id="main-content"> <div class="crumb mt40 mb30 font16"> 查看学生 > 学生详情 </div> <div class="line"></div> <div class="detail font14"> <div class="triangle-bg"></div> <div class="user-info-detail"> <div class="user-detail-bg"></div> <div class="font12 mt12"> 账号：<i class="black">';
	$out+=$escape(StuAccount);
	$out+='</i> </div> <div class="font12 mt12"> 到期日期：<i class="black">';
	$out+=$escape($helpers. dateFormat(ExpireTime ,  "yyyy-MM-dd"));
	$out+='</i> </div> </div> <div class="detail-content"> <div class="item"> <span> 姓名：<i class="black">';
	$out+=$escape(StuName);
	$out+='</i> </span> <span class="status-active ml20">';
	$out+=$escape(ShowIsEnable);
	$out+='</span> </div> <div class="item"> <span> 性别：<i class="black">';
	$out+=$escape($helpers. sextran(Sex ));
	$out+='</i> </span> <span class="ml20"> 生日：<i class="black">';
	$out+=$escape($helpers. dateFormat(BirthDay ,  "yyyy-MM-dd"));
	$out+='</i> </span> </div> <div class="item"> <span> 角色：<i class="black">学生</i> </span> <span class="ml20"> 学制：<i class="black">';
	$out+=$escape($helpers. edutypetran(EduType ));
	$out+='</i> </span> </div> <div class="item"> <span> 手机号码：<i class="black">';
	$out+=$escape(Phone);
	$out+='</i> </span> <span class="ml20"> QQ：<i class="black">';
	$out+=$escape(Qq);
	$out+='</i> </span> </div> <div class="item"> <span> 所在学校：<i class="black">';
	$out+=$escape(OldSchoolName);
	$out+='</i> </span> <span class="ml20"> 所在班级：<i class="black">';
	$out+=$escape(OldClass);
	$out+='</i> </span> </div> <div class="item"> <span> 邮箱地址：<i class="black">';
	$out+=$escape(Email);
	$out+='</i> </span> </div> <div class="item"> <span> 家庭住址：<i class="black">';
	$out+=$escape(FamAddress);
	$out+='</i> </span> </div> <div class="item"> <div class="mb15">已报学科：</div> <table class="small-table"> <thead> <tr> <th>学科</th> <th>类型</th> <th>补课老师</th> <th>剩余课时</th> <th>报班时间</th> </tr> </thead> <tbody> ';
	$each(AlreadySubjects,function($value,$index){
	$out+=' <tr> <td>';
	$out+=$escape($helpers. getSubjectName($value.Subject ));
	$out+='</td> <td>';
	$out+=$escape($value.ClassType);
	$out+='</td> <td>';
	$out+=$escape($value.TeachName);
	$out+='</td> <td>';
	$out+=$escape($value.ClassHour);
	$out+='</td> <td>';
	$out+=$escape($helpers. dateFormat($value.ContactTime ,  "yyyy-MM-dd"));
	$out+='</td> </tr> ';
	});
	$out+=' </tbody> </table> </div> <div class="item"> <div class="mb15">家长信息：</div> <table class="small-table"> <thead> <tr> <th>关系</th> <th>姓名</th> <th>工作单位</th> <th>联系方式</th> </tr> </thead> <tbody> ';
	$each(ParentsData,function($value,$index){
	$out+=' <tr> <td>';
	$out+=$escape($value.RelationShip);
	$out+='</td> <td>';
	$out+=$escape($value.Name);
	$out+='</td> <td>';
	$out+=$escape($value.WorkInfo);
	$out+='</td> <td>';
	$out+=$escape($value.Phone);
	$out+='</td> </tr> ';
	});
	$out+=' </tbody> </table> </div> <div class="item"> <div class="mb15">入学前主要学科成绩：</div> <table class="small-table"> <thead> <tr> <th>科目</th> <th>数学</th> <th>语文</th> <th>英语</th> <th>物理</th> <th>化学</th> <th>地理</th> <th>历史</th> <th>政治</th> <th>生物</th> </tr> </thead> <tbody> <tr> <td>满分</td> <td>';
	$out+=$escape(OldScores.TMathScore);
	$out+='</td> <td>';
	$out+=$escape(OldScores.TChinScore);
	$out+='</td> <td>';
	$out+=$escape(OldScores.TEngScore);
	$out+='</td> <td>';
	$out+=$escape(OldScores.TPhyScore);
	$out+='</td> <td>';
	$out+=$escape(OldScores.TCheScore);
	$out+='</td> <td>';
	$out+=$escape(OldScores.TGeoScore);
	$out+='</td> <td>';
	$out+=$escape(OldScores.THisScore);
	$out+='</td> <td>';
	$out+=$escape(OldScores.TPolScore);
	$out+='</td> <td>';
	$out+=$escape(OldScores.TBioScore);
	$out+='</td> </tr> <tr> <td>成绩</td> <td class="red">';
	$out+=$escape(OldScores.MathScore);
	$out+='</td> <td class="red">';
	$out+=$escape(OldScores.ChinScore);
	$out+='</td> <td class="red">';
	$out+=$escape(OldScores.EngScore);
	$out+='</td> <td class="red">';
	$out+=$escape(OldScores.PhyScore);
	$out+='</td> <td class="red">';
	$out+=$escape(OldScores.CheScore);
	$out+='</td> <td class="red">';
	$out+=$escape(OldScores.GeoScore);
	$out+='</td> <td class="red">';
	$out+=$escape(OldScores.HisScore);
	$out+='</td> <td class="red">';
	$out+=$escape(OldScores.PolScore);
	$out+='</td> <td class="red">';
	$out+=$escape(OldScores.BioScore);
	$out+='</td> </tr> </tbody> </table> </div> </div> </div> <div class="content-bottom"></div> </div> ';
	return new String($out);
	});

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	var currentShowStudentId = 0;    //当前查看的学生ID
	var currentStudentDetailsInfo = null;    //当前用户详情原始数据
	var PopuClient = __webpack_require__(24);
	
	//获取学生详细数据
	function GetStudentDeatailsData() {
	    $.ajax({
	        type: "POST",
	        url: "/OrgUser/StudentManage/GetStudentDetailsInfo",
	        data: {
	            studentId: currentShowStudentId
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                currentStudentDetailsInfo = data.Data;
	                if (currentStudentDetailsInfo != null && currentStudentDetailsInfo != undefined) {
	                    var tempDetailsTpl = __webpack_require__(89);
	                    $("#divDetailsMainArea").html(tempDetailsTpl(currentStudentDetailsInfo));
	                    //添加用户的历史成绩信息
	                    if (currentStudentDetailsInfo.ScoreDetails != null && currentStudentDetailsInfo.ScoreDetails != undefined && currentStudentDetailsInfo.ScoreDetails.length > 0) {
	                        var tempTotalScoreStr = "<tr><td>满分</td>";
	                        var tempCurrentScoreStr = "<tr><td>成绩</td>";
	                        for (var i = 0; i < currentStudentDetailsInfo.ScoreDetails.length; i++) {
	                            var tempScoreInfo = currentStudentDetailsInfo.ScoreDetails[i];
	                            if (tempScoreInfo.SubjectID == "02") {
	                                tempTotalScoreStr += "<td subjectId=\"02\">" + tempScoreInfo.TotalScore + "分</td>";
	                                tempCurrentScoreStr += "<td class=\"red\" subjectId=\"02\">" + tempScoreInfo.UserScore + "分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "01") {
	                                tempTotalScoreStr += "<td subjectId=\"01\">" + tempScoreInfo.TotalScore + "分</td>";
	                                tempCurrentScoreStr += "<td class=\"red\" subjectId=\"01\">" + tempScoreInfo.UserScore + "分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "03") {
	                                tempTotalScoreStr += "<td subjectId=\"03\">" + tempScoreInfo.TotalScore + "分</td>";
	                                tempCurrentScoreStr += "<td class=\"red\" subjectId=\"03\">" + tempScoreInfo.UserScore + "分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "04") {
	                                tempTotalScoreStr += "<td subjectId=\"04\">" + tempScoreInfo.TotalScore + "分</td>";
	                                tempCurrentScoreStr += "<td class=\"red\" subjectId=\"04\">" + tempScoreInfo.UserScore + "分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "05") {
	                                tempTotalScoreStr += "<td subjectId=\"05\">" + tempScoreInfo.TotalScore + "分</td>";
	                                tempCurrentScoreStr += "<td class=\"red\" subjectId=\"05\">" + tempScoreInfo.UserScore + "分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "06") {
	                                tempTotalScoreStr += "<td subjectId=\"06\">" + tempScoreInfo.TotalScore + "分</td>";
	                                tempCurrentScoreStr += "<td class=\"red\" subjectId=\"06\">" + tempScoreInfo.UserScore + "分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "07") {
	                                tempTotalScoreStr += "<td subjectId=\"07\">" + tempScoreInfo.TotalScore + "分</td>";
	                                tempCurrentScoreStr += "<td class=\"red\" subjectId=\"07\">" + tempScoreInfo.UserScore + "分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "08") {
	                                tempTotalScoreStr += "<td subjectId=\"08\">" + tempScoreInfo.TotalScore + "分</td>";
	                                tempCurrentScoreStr += "<td class=\"red\" subjectId=\"08\">" + tempScoreInfo.UserScore + "分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "09") {
	                                tempTotalScoreStr += "<td subjectId=\"09\">" + tempScoreInfo.TotalScore + "分</td>";
	                                tempCurrentScoreStr += "<td class=\"red\" subjectId=\"09\">" + tempScoreInfo.UserScore + "分</td>";
	                            }
	                        }
	                        //添加行标签
	                        tempTotalScoreStr += "</tr>";
	                        tempCurrentScoreStr += "</tr>";
	                        $("#tbHistoryScoreList >tbody").html(tempTotalScoreStr + tempCurrentScoreStr);
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
	
	//编辑学生信息
	function EditStudentDeatails() {
	    window.location.href = "/OrgUser/StudentManage/EditStudentDetailsPage?studentId=" + tempStuId;
	}
	
	//重置密码
	function ResetStudentPWD() {
	    PopuClient.OpenConfrimPopNoCancel("重置密码后，该账号密码将恢复初始密码！")
	    if ($("#Confrim") != null && $("#Confrim") != undefined) {
	        $("#Confrim").click(function () {
	            $.ajax({
	                type: "POST",
	                url: "/Org/UserManage/ResetUserPwd",
	                data: {
	                    userId: currentShowStudentId
	                },
	                dataType: "json",
	                error: function (data) {
	                    //debugger;
	                },
	                success: function (data) {
	                    if (data.OK) {
	                        if (data.Data) {
	                            $(".pop-mask").hide();
	                            $(".pop-up").hide();
	                            $("#Confrim").unbind("click");
	                            $(".pop-up").remove();
	                            PopuClient.OpenConfrimPopNoCancel("恭喜您！该账号密码已重置成功！")
	                            $("#Confrim").click(function () {
	                                $(".pop-mask").hide();
	                                $(".pop-up").hide();
	                                $("#Confrim").unbind("click");
	                                $(".pop-up").remove();
	                            });
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
	        });
	    }
	}
	
	//页面加载完成后事件
	$(function () {
	    currentShowStudentId = $("#hidShoStudentId").val();
	    //页面加载完成后，获取用户详细数据
	    GetStudentDeatailsData();
	    //添加事件
	    if ($("#btnEditUserDetailsInfo") != null && $("#btnEditUserDetailsInfo") != undefined) {
	        $("#btnEditUserDetailsInfo").click(EditStudentDeatails);
	    }
	    if ($("#btnResetPWD") != null && $("#btnResetPWD") != undefined) {
	        $("#btnResetPWD").click(ResetStudentPWD);
	    }
	});

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgUser/studentdetails',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,StudentAccount=$data.StudentAccount,ExpireTime=$data.ExpireTime,StudentName=$data.StudentName,ActiveStatus=$data.ActiveStatus,StudentSex=$data.StudentSex,StudentAge=$data.StudentAge,EduTypeDesc=$data.EduTypeDesc,PhoneNum=$data.PhoneNum,QQNum=$data.QQNum,SchoolName=$data.SchoolName,ClassName=$data.ClassName,EmailAddr=$data.EmailAddr,Address=$data.Address,$each=$utils.$each,ClassTypeList=$data.ClassTypeList,$value=$data.$value,$index=$data.$index,$out='';$out+=' <div class="triangle-bg"></div> <div class="user-info-detail"> <div class="user-detail-bg"></div> <div class="font12 mt12"> 账号：<i class="black">';
	$out+=$escape(StudentAccount);
	$out+='</i> </div> <div class="font12 mt12"> 到期日期：<i class="black">';
	$out+=$escape(ExpireTime);
	$out+='</i> </div> </div> <div class="detail-content"> <div class="item"> <span> 姓名：<i class="black">';
	$out+=$escape(StudentName);
	$out+='</i> </span> ';
	if(ActiveStatus == 0){
	$out+=' <span class="status ml20">未激活</span> ';
	}else{
	$out+=' <span class="status-active ml20">已激活</span> ';
	}
	$out+=' </div> <div class="item"> <span> 性别：<i class="black">';
	if(StudentSex==0){
	$out+='女';
	}
	if(StudentSex==1){
	$out+='男';
	}
	$out+='</i> </span> <span class="ml20"> 年龄：<i class="black">';
	$out+=$escape(StudentAge);
	$out+='</i> </span> </div> <div class="item"> <span> 角色：<i class="black">学生</i> </span> <span class="ml20"> 学制：<i class="black">';
	$out+=$escape(EduTypeDesc);
	$out+='</i> </span> </div> <div class="item"> <span> 手机号码：<i class="black">';
	$out+=$escape(PhoneNum);
	$out+='</i> </span> <span class="ml20"> QQ：<i class="black">';
	$out+=$escape(QQNum);
	$out+='</i> </span> </div> <div class="item"> <span> 所在学校：<i class="black">';
	$out+=$escape(SchoolName);
	$out+='</i> </span> <span class="ml20"> 所在班级：<i class="black">';
	$out+=$escape(ClassName);
	$out+='</i> </span> </div> <div class="item"> <span> 邮箱地址：<i class="black">';
	$out+=$escape(EmailAddr);
	$out+='</i> </span> </div> <div class="item"> <span> 家庭住址：<i class="black">';
	$out+=$escape(Address);
	$out+='</i> </span> </div> <div class="item"> <div class="mb15">已报学科：</div> <table class="small-table"> <thead> <tr> <th>学科</th> <th>类型</th> <th>补课老师</th> <th>剩余课时</th> <th>报班时间</th> </tr> </thead> <tbody> ';
	$each(ClassTypeList,function($value,$index){
	$out+=' <tr> <td>';
	$out+=$escape($value.BigGradeDesc);
	$out+=$escape($value.SubjectDesc);
	$out+='</td> <td>';
	$out+=$escape($value.ClassTypeDesc);
	$out+='</td> <td>';
	$out+=$escape($value.ClassName);
	$out+='</td> <td>';
	if($value.SurplusClassHour >0){
	$out+=$escape($value.SurplusClassHour);
	$out+='课时';
	}else{
	$out+='已结课';
	}
	$out+='</td> <td>';
	$out+=$escape($value.CreateClassDate);
	$out+='</td> </tr> ';
	});
	$out+=' </tbody> </table> </div> <div class="item"> <div class="mb15">家长信息：</div> <table class="small-table"> <thead> <tr> <th>关系</th> <th>姓名</th> <th>工作单位</th> <th>联系方式</th> </tr> </thead> <tbody> ';
	$each(ClassTypeList,function($value,$index){
	$out+=' <tr> <td>';
	$out+=$escape($value.RelationDesc);
	$out+='</td> <td>';
	$out+=$escape($value.ParentName);
	$out+='</td> <td>';
	$out+=$escape($value.ParentJob);
	$out+='</td> <td>';
	$out+=$escape($value.ParentPhone);
	$out+='</td> </tr> ';
	});
	$out+=' </tbody> </table> </div> <div class="item"> <div class="mb15">入学前主要学科成绩：</div> <table class="small-table" id="tbHistoryScoreList"> <thead> <tr> <th>科目</th> <th>数学</th> <th>语文</th> <th>英语</th> <th>物理</th> <th>化学</th> <th>地理</th> <th>历史</th> <th>政治</th> <th>生物</th> </tr> </thead> <tbody> <tr> <td>满分</td> <td subjectId="02">暂无</td> <td subjectId="01">暂无</td> <td subjectId="03">暂无</td> <td subjectId="04">暂无</td> <td subjectId="05">暂无</td> <td subjectId="06">暂无</td> <td subjectId="07">暂无</td> <td subjectId="08">暂无</td> <td subjectId="09">暂无</td> </tr> <tr> <td>成绩</td> <td class="red" subjectId="02">暂无</td> <td class="red" subjectId="01">暂无</td> <td class="red" subjectId="03">暂无</td> <td class="red" subjectId="04">暂无</td> <td class="red" subjectId="05">暂无</td> <td class="red" subjectId="06">暂无</td> <td class="red" subjectId="07">暂无</td> <td class="red" subjectId="08">暂无</td> <td class="red" subjectId="09">暂无</td> </tr> </tbody> </table> </div> </div>';
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL3RlbXBsYXRlLWhlbHBlci5qcz9kMWVmKiIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL3V0aWwvdXRpbC5qcz85YjMyKioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2RlcC9wb3B1cC9wb3B1cHRpcC5qcz9mMDMyKioqKioqKiIsIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnRXZhbHVhdGlvbi9zdHVkZW50ZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZ0V2YWx1YXRpb24vc3R1ZGVudGRldGFpbHMudHBsIiwid2VicGFjazovLy8uL09yZy9qcy9PcmdVc2VyL3N0dWRlbnRkZXRhaWxzLmpzIiwid2VicGFjazovLy8uL09yZy90cGwvT3JnVXNlci9zdHVkZW50ZGV0YWlscy50cGwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFrQztBQUNsQzs7QUFFQTtBQUNBLHlDQUF3QyxPQUFPLDJCQUEyQjtBQUMxRTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXFDLFlBQVk7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QixpRUFBaUU7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0EsYUFBWSxlQUFlO0FBQzNCLGtEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBcUI7QUFDckIsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixHQUFFO0FBQ0Ysa0NBQWlDO0FBQ2pDLElBQUc7QUFDSCxlQUFjO0FBQ2Q7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0YsRUFBQyxHOzs7Ozs7O0FDOUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7OztBQzVERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFZLG9DQUFvQztBQUNoRDtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsZ0NBQStCO0FBQy9CLHdDQUF1QztBQUN2QyxrQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRLQUEySzs7QUFFM0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyTUFBME0sTUFBTSxNQUFNO0FBQ3ROO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3S0FBdUssd0RBQXdELGdCQUFnQjtBQUMvTztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUwsRUFBQzs7Ozs7Ozs7OztBQ2hGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxVQUFTOzs7O0FBSVQsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFXO0FBQ1g7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7QUFHRDs7Ozs7QUFLQSxFQUFDOzs7Ozs7Ozs7QUN4RUQ7QUFDQTtBQUNBO0FBQ0EsY0FBYSxpaEJBQWloQjtBQUM5aEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7Ozs7QUM3RkQsOEJBQTZCO0FBQzdCLHNDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsbURBQW1EO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7Ozs7QUM1SUQ7QUFDQTtBQUNBO0FBQ0EsY0FBYSx5Z0JBQXlnQjtBQUN0aEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBQyxFIiwiZmlsZSI6InN0dWRlbnRkZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypUTU9ESlM6e30qL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdGZ1bmN0aW9uIGEoYSwgYikge1xyXG5cdFx0cmV0dXJuICgvc3RyaW5nfGZ1bmN0aW9uLy50ZXN0KHR5cGVvZiBiKSA/IGggOiBnKShhLCBiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYihhLCBjKSB7XHJcblx0XHRyZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSAmJiAoYyA9IHR5cGVvZiBhLCBcIm51bWJlclwiID09PSBjID8gYSArPSBcIlwiIDogYSA9IFwiZnVuY3Rpb25cIiA9PT0gYyA/IGIoYS5jYWxsKGEpKSA6IFwiXCIpLCBhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjKGEpIHtcclxuXHRcdHJldHVybiBsW2FdXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkKGEpIHtcclxuXHRcdHJldHVybiBiKGEpLnJlcGxhY2UoLyYoPyFbXFx3I10rOyl8Wzw+XCInXS9nLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZShhLCBiKSB7XHJcblx0XHRpZiAobShhKSlmb3IgKHZhciBjID0gMCwgZCA9IGEubGVuZ3RoOyBkID4gYzsgYysrKWIuY2FsbChhLCBhW2NdLCBjLCBhKTsgZWxzZSBmb3IgKGMgaW4gYSliLmNhbGwoYSwgYVtjXSwgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoYSwgYikge1xyXG5cdFx0dmFyIGMgPSAvKFxcLylbXlxcL10rXFwxXFwuXFwuXFwxLywgZCA9IChcIi4vXCIgKyBhKS5yZXBsYWNlKC9bXlxcL10rJC8sIFwiXCIpLCBlID0gZCArIGI7XHJcblx0XHRmb3IgKGUgPSBlLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7IGUubWF0Y2goYyk7KWUgPSBlLnJlcGxhY2UoYywgXCIvXCIpO1xyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoYiwgYykge1xyXG5cdFx0dmFyIGQgPSBhLmdldChiKSB8fCBpKHtmaWxlbmFtZTogYiwgbmFtZTogXCJSZW5kZXIgRXJyb3JcIiwgbWVzc2FnZTogXCJUZW1wbGF0ZSBub3QgZm91bmRcIn0pO1xyXG5cdFx0cmV0dXJuIGMgPyBkKGMpIDogZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChhLCBiKSB7XHJcblx0XHRpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYikge1xyXG5cdFx0XHR2YXIgYyA9IGI7XHJcblx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBrKGMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBkID0galthXSA9IGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBiKGMsIGEpICsgXCJcIlxyXG5cdFx0XHR9IGNhdGNoIChkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGkoZCkoKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGQucHJvdG90eXBlID0gYi5wcm90b3R5cGUgPSBuLCBkLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYiArIFwiXCJcclxuXHRcdH0sIGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGkoYSkge1xyXG5cdFx0dmFyIGIgPSBcIntUZW1wbGF0ZSBFcnJvcn1cIiwgYyA9IGEuc3RhY2sgfHwgXCJcIjtcclxuXHRcdGlmIChjKWMgPSBjLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCJcXG5cIik7IGVsc2UgZm9yICh2YXIgZCBpbiBhKWMgKz0gXCI8XCIgKyBkICsgXCI+XFxuXCIgKyBhW2RdICsgXCJcXG5cXG5cIjtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IoYiArIFwiXFxuXFxuXCIgKyBjKSwgYlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGogPSBhLmNhY2hlID0ge30sIGsgPSB0aGlzLlN0cmluZywgbCA9IHtcclxuXHRcdFwiPFwiOiBcIiYjNjA7XCIsXHJcblx0XHRcIj5cIjogXCImIzYyO1wiLFxyXG5cdFx0J1wiJzogXCImIzM0O1wiLFxyXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcclxuXHRcdFwiJlwiOiBcIiYjMzg7XCJcclxuXHR9LCBtID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xyXG5cdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB7fS50b1N0cmluZy5jYWxsKGEpXHJcblx0XHR9LCBuID0gYS51dGlscyA9IHtcclxuXHRcdCRoZWxwZXJzOiB7fSwgJGluY2x1ZGU6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcblx0XHRcdHJldHVybiBhID0gZihjLCBhKSwgZyhhLCBiKVxyXG5cdFx0fSwgJHN0cmluZzogYiwgJGVzY2FwZTogZCwgJGVhY2g6IGVcclxuXHR9LCBvID0gYS5oZWxwZXJzID0gbi4kaGVscGVycztcclxuXHRhLmdldCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRyZXR1cm4galthLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKV1cclxuXHR9LCBhLmhlbHBlciA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRvW2FdID0gYlxyXG5cdH0sIG1vZHVsZS5leHBvcnRzID0gYVxyXG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdG1vZGpzLWxvYWRlci9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDggMTMgMTQgMTUgMTYgMTcgMTggMTkgMjEgMjMgMjUgMjYgMjcgMzEgMzIgMzMgMzcgMzhcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSBodW1vckhhbiBvbiAyMDE2LzUvMjYuXHJcbiAqL1xyXG52YXIgYXJ0ID0gcmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XHJcbnZhciB1PXJlcXVpcmUoXCJ1dGlsL3V0aWxcIik7XHJcblxyXG4vL+aXtumXtOaIs+i9rOWMluaWueazlVxyXG5hcnQuaGVscGVyKCdkYXRlRm9ybWF0JywgZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCkge1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGUucmVwbGFjZShcIi9EYXRlKFwiLCBcIlwiKS5yZXBsYWNlKFwiKS9cIiwgXCJcIiksIDEwKSk7XHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICB2YXIgbWFwID0ge1xyXG4gICAgICAgIFwiWVwiOiBkYXRlLmdldFllYXIoKSxcclxuICAgICAgICBcIk1cIjogZGF0ZS5nZXRNb250aCgpICsgMSwgLy/mnIjku71cclxuICAgICAgICBcImRcIjogZGF0ZS5nZXREYXRlKCksIC8v5pelXHJcbiAgICAgICAgXCJoXCI6IGRhdGUuZ2V0SG91cnMoKSwgLy/lsI/ml7ZcclxuICAgICAgICBcIm1cIjogZGF0ZS5nZXRNaW51dGVzKCksIC8v5YiGXHJcbiAgICAgICAgXCJzXCI6IGRhdGUuZ2V0U2Vjb25kcygpLCAvL+enklxyXG4gICAgICAgIFwicVwiOiBNYXRoLmZsb29yKChkYXRlLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6plxyXG4gICAgICAgIFwiU1wiOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8v5q+r56eSXHJcbiAgICB9O1xyXG4gICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoLyhbeU1kaG1zcVNdKSsvZywgZnVuY3Rpb24gKGFsbCwgdCkge1xyXG4gICAgICAgIHZhciB2ID0gbWFwW3RdO1xyXG4gICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKGFsbC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB2ID0gJzAnICsgdjtcclxuICAgICAgICAgICAgICAgIHYgPSB2LnN1YnN0cih2Lmxlbmd0aCAtIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0ID09PSAneScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChkYXRlLmdldEZ1bGxZZWFyKCkgKyAnJykuc3Vic3RyKDQgLSBhbGwubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZvcm1hdDtcclxufSk7XHJcbi8v6I635Y+W56eR55uuXHJcbmFydC5oZWxwZXIoJ2dldFN1YmplY3ROYW1lJyxmdW5jdGlvbihzdWJqZWN0KXtcclxuICAgIHJldHVybiB1LmdldFN1YmplY3ROYW1lKHN1YmplY3QpO1xyXG59KTtcclxuLy/ojrflj5bpmLbmrrVcclxuYXJ0LmhlbHBlcignZ2V0U3RhZ2VTdHInLGZ1bmN0aW9uKHN0YWdlKXtcclxuICAgICAgICByZXR1cm4gdS5nZXRTdGFnZVN0cihzdGFnZSk7XHJcbn0pO1xyXG4vL+i9rOeggSDmraPnoa7nrZTmoYhcclxuYXJ0LmhlbHBlcigndW5Fc2NhcGUnLCBmdW5jdGlvbihhbnN3ZXIpe1xyXG4gICAgaWYgKCFhbnN3ZXIpe1xyXG4gICAgICAgIHJldHVybiBcIuacquS9nOetlFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5lc2NhcGUoYW5zd2VyKTtcclxuICAgIH1cclxufSk7XHJcbi8v5oCn5Yir6L2s5o2iXHJcbmFydC5oZWxwZXIoJ3NleHRyYW4nLCBmdW5jdGlvbiAocykge1xyXG4gICAgcmV0dXJuIHUuc2V4dHJhbihzKTtcclxufSk7XHJcblxyXG4vL+WtpuWItui9rOaNolxyXG5hcnQuaGVscGVyKCdlZHV0eXBldHJhbicsIGZ1bmN0aW9uIChzKSB7XHJcbiAgICByZXR1cm4gdS5lZHV0eXBldHJhbihzKTtcclxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9kZXAvdGVtcGxhdGUtaGVscGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAyMSAzN1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGh1bW9ySGFuIG9uIDIwMTYvNi8xNy5cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGJhc2VVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDo2MzM0Mi9tZmdfbmV3Yl93ZWJ2Mi9odG1sL2RlbW8vXCIsXHJcblx0Ly/ot7PovazpobXpnaLvvIzlj6/ku6XlpITnkIblhaznlKjot7PovazpgLvovpFcclxuXHRyZWRpcmVjdFVybDogZnVuY3Rpb24ocmVkaXJlY3RVcmwsIGZyb21VcmwpIHtcclxuXHRcdGlmIChyZWRpcmVjdFVybCA9PSBcImxvZ2luLmh0bWxcIikge1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuYmFzZVVybCArIHJlZGlyZWN0VXJsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuZ2V0Q29va2llKFwidW5hbWVcIikpIHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuYmFzZVVybCArIHJlZGlyZWN0VXJsO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5iYXNlVXJsICsgXCJsb2dpbi5odG1sXCI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdC8v6K6+572uY29va2llXHJcblx0c2V0Q29va2llOiBmdW5jdGlvbihvYmpOYW1lLCBvYmpWYWx1ZSwgb2JqSG91cnMpIHtcclxuXHRcdHZhciBzdHIgPSBvYmpOYW1lICsgXCI9XCIgKyBlc2NhcGUob2JqVmFsdWUpO1xyXG5cclxuXHRcdGlmIChvYmpIb3VycyA+IDApIHsgLy/kuLow5pe25LiN6K6+5a6a6L+H5pyf5pe26Ze077yM5rWP6KeI5Zmo5YWz6Zet5pe2Y29va2ll6Ieq5Yqo5raI5aSxXHJcblx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0dmFyIG1zID0gb2JqSG91cnMgKiAzNjAwICogMTAwMDtcclxuXHRcdFx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgbXMpO1xyXG5cdFx0XHRzdHIgKz0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvR01UU3RyaW5nKCkgKyBcIjtwYXRoPS9cIjtcclxuXHRcdH1cclxuXHRcdGRvY3VtZW50LmNvb2tpZSA9IHN0cjtcclxuXHR9LFxyXG5cdC8v6I635Y+WY29va2llXHJcblx0Z2V0Q29va2llOiBmdW5jdGlvbihvYmpOYW1lKSB7IC8v6I635Y+W5oyH5a6a5ZCN56ew55qEY29va2ll55qE5YC8XHJcblx0XHR2YXIgYXJyU3RyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyclN0ci5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgdGVtcCA9IGFyclN0cltpXS5zcGxpdChcIj1cIik7XHJcblx0XHRcdGlmICh0ZW1wWzBdID09IG9iak5hbWUpIHtcclxuXHRcdFx0XHRyZXR1cm4gdW5lc2NhcGUodGVtcFsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdC8vIGh0bWzovaznoIFcclxuXHRodG1sRW5jb2RlOiBmdW5jdGlvbihzKSB7XHJcblx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocykpO1xyXG5cdFx0cmV0dXJuIGRpdi5pbm5lckhUTUw7XHJcblx0fSxcclxuXHQvLyBodG1s6Kej56CBXHJcblx0aHRtbGRlY29kZTogZnVuY3Rpb24ocykge1xyXG5cdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZGl2LmlubmVySFRNTCA9IHM7XHJcblx0XHRyZXR1cm4gZGl2LmlubmVyVGV4dCB8fCBkaXYudGV4dENvbnRlbnQ7XHJcblx0fSwvL+aAp+WIq+i9rOaNolxyXG5cdHNleHRyYW46IGZ1bmN0aW9uIChzKSB7XHJcblx0ICAgIHN3aXRjaCAocykge1xyXG5cdCAgICAgICAgY2FzZSBcIjBcIjpcclxuXHQgICAgICAgICAgICByZXR1cm4gXCLnlLdcIjtcclxuXHQgICAgICAgIGNhc2UgXCIxXCI6XHJcblx0ICAgICAgICAgICAgcmV0dXJuIFwi5aWzXCI7XHJcblx0ICAgICAgICBcclxuXHQgICAgICAgIGRlZmF1bHQ6XHJcblx0ICAgICAgICAgICAgcmV0dXJuIFwi5pyq55+lXCI7XHJcblx0ICAgIH1cclxuXHQgICBcclxuXHQgICAgLy9yZXR1cm4gZGl2LmlubmVyVGV4dCB8fCBkaXYudGV4dENvbnRlbnQ7XHJcblx0fSwvL+Wtpuenkei9rOaNolxyXG5cdGdldFN1YmplY3ROYW1lOiBmdW5jdGlvbiAocykge1xyXG4gICAgICAgIHN3aXRjaCAocykge1xyXG4gICAgICAgICAgICBjYXNlIFwiMDFcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuivreaWh1wiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuaVsOWtplwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuiLseivrVwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIueJqeeQhlwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuWMluWtplwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDZcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuWcsOeQhlwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDdcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuWOhuWPslwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDhcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuaUv+ayu1wiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMDlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIueUn+eJqVwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiMTRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuWlpeaVsFwiO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG5cdH0sLy/lrabliLbovazmjaJcclxuXHRlZHV0eXBldHJhbjogZnVuY3Rpb24gKHMpIHtcclxuXHQgICAgc3dpdGNoIChzKSB7XHJcblx0ICAgICAgICBjYXNlIDA6XHJcblx0ICAgICAgICAgICAgcmV0dXJuIFwi5YWt5LiJ5Yi2XCI7XHJcblx0ICAgICAgICBjYXNlIDE6XHJcblx0ICAgICAgICAgICAgcmV0dXJuIFwi5LqU5Zub5Yi2XCI7XHJcblx0ICAgICAgICBcclxuXHQgICAgICAgIGRlZmF1bHQ6XHJcblx0ICAgICAgICAgICAgcmV0dXJuIFwi5pyq55+lXCI7XHJcblx0ICAgIH1cclxuXHQgICAgLy9yZXR1cm4gZGl2LmlubmVyVGV4dCB8fCBkaXYudGV4dENvbnRlbnQ7XHJcblx0fVxyXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvZGVwL3V0aWwvdXRpbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMjEgMjkgMzdcbiAqKi8iLCIvL+mBrue9qVxyXG5mdW5jdGlvbiBNYXNrU2hvdygpIHtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNYXNrSGlkZSgpIHtcclxuICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG59XHJcbi8v5Lyg6YCS5pi+56S655qE5raI5oGvXHJcbmZ1bmN0aW9uIFBvcFRpcFNob3cob2JqKSB7XHJcbiAgICB2YXIgdGlwaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNCBoaWRkZW5cIiBpZD1cIm9rdGlwXCI+PHNwYW4gY2xhc3M9XCJwb3AtY2xvc2UgY3Vyc29yXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPjxwIGNsYXNzPVwibGluZTEwMFwiIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+JyArIG9iaiArICc8L3A+PC9kaXY+PC9kaXY+JztcclxuXHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZCh0aXBodG1sKTtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmFwcGVuZCh0aXBodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59XHJcbi8v5by55Ye656Gu6K6k5qGGXHJcbnZhciBPcGVuQ29uZnJpbVBvcCA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJwb3AtdXAgZm9udDE0XCI+PHNwYW4gY2xhc3M9XCJwb3AtY2xvc2UgY3Vyc29yXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPicgKyBvYmogKyAnPC9kaXY+PGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImhhbmRsZVwiPiA8c3BhbiBjbGFzcz1cIm9rXCIgaWQ9XCJDb25mcmltXCI+56Gu5a6aPC9zcGFuPiAmbmJzcDsmbmJzcDsmbmJzcDs8c3BhbiBjbGFzcz1cIm9rXCIgaWQ9XCJDYW5jZWxcIj7lj5bmtog8L3NwYW4+IDwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59O1xyXG4vL+W8ueWHuuehruiupOahhizmsqHmnInlj5bmtojmjInpkq5cclxudmFyIE9wZW5Db25mcmltUG9wTm9DYW5jZWwgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj4nICsgb2JqICsgJzwvZGl2PjxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJoYW5kbGVcIj4gPHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ29uZnJpbVwiPuehruWumjwvc3Bhbj4gPC9kaXY+PC9kaXY+JztcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuYXBwZW5kKGh0bWwpO1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLnBvcC11cFwiKS5zaG93KCk7XHJcbn07XHJcbi8vL+W8ueWHuuWkmumVv+aXtumXtOWQjua2iOWksVxyXG52YXIgT3BlblRpbWVIaWRlID0gZnVuY3Rpb24gKG9iaiwgdGltZSkge1xyXG4gICAgLy92YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wdXBcIj4gPGg1IGNsYXNzPVwiY2VudGVyIGZvbnQxNiBwb3B1cGhlYWRcIj7mtojmga/mj5DnpLo8aSBjbGFzcz1cInBvcGNsb3NlIGN1cnNvclwiPjwvaT48L2g1PjxkaXYgY2xhc3M9XCJwb3B1cGJveFwiPjxkaXYgY2xhc3M9XCJoYW5kbGUgZm9udDE0IGF1dG9cIj4nICsgb2JqICsgJzwvZGl2PjwvZGl2PjwvZGl2Pic7XHJcbiAgICB2YXIgaHRtbCA9ICcgIDxkaXYgY2xhc3M9XCJwb3B1cCBcIj48aDUgY2xhc3M9XCJjZW50ZXIgZm9udDE2IHBvcHVwaGVhZFwiPiDmtojmga/mj5DnpLo8aSBjbGFzcz1cInBvcGNsb3NlIGN1cnNvclwiPjwvaT48L2g1PjxkaXYgY2xhc3M9XCJwb3B1cGJveFwiPjxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtcIj48ZGl2IGNsYXNzPVwic3VjY2VzcyBhdXRvXCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tdG9wOjIwcHg7XCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImhhbmRsZSBzdWNjZXNzTGV0dGVyXCI+IDxzcGFuIGNsYXNzPVwibXQyMFwiPicrb2JqKyc8L3NwYW4+PC9kaXY+PC9kaXY+PC9kaXY+JztcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuYXBwZW5kKGh0bWwpO1xyXG4gICAgJChcIi5wb3B1cFwiKS5zaG93KCk7XHJcbiAgXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcHVwXCIpLmhpZGUoKTtcclxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0sIHRpbWUpO1xyXG5cclxufTtcclxuZnVuY3Rpb24gUG9wVGlwSGlkZSgpIHtcclxuICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbn1cclxuXHJcbmV4cG9ydHMuTWFza1Nob3cgPSBNYXNrU2hvdztcclxuZXhwb3J0cy5NYXNrSGlkZSA9IE1hc2tIaWRlO1xyXG5leHBvcnRzLlBvcFRpcFNob3cgPSBQb3BUaXBTaG93O1xyXG5leHBvcnRzLlBvcFRpcEhpZGUgPSBQb3BUaXBIaWRlO1xyXG5leHBvcnRzLk9wZW5Db25mcmltUG9wID0gT3BlbkNvbmZyaW1Qb3A7XHJcbmV4cG9ydHMuT3BlblRpbWVIaWRlID0gT3BlblRpbWVIaWRlO1xyXG4vL+WkhOeQhuW8ueWHuuahhueahOmakOiXj1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuZGVsZWdhdGUoXCIucG9wLWNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICAgICAvL2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3BjbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcC1jbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgLy9kb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcGNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC9wb3B1cC9wb3B1cHRpcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDggMTQgMjEgMjYgMzEgMzIgMzMgMzQgMzcgMzhcbiAqKi8iLCJcclxudmFyIHRwbFRhYmxlID0gcmVxdWlyZShcIk9yZ0V2YWx1YXRpb24vc3R1ZGVudGRldGFpbHMudHBsXCIpO1xyXG5yZXF1aXJlKFwidGVtcGxhdGUtaGVscGVyLmpzXCIpO1xyXG52YXIgbW9kdWxlID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vdG9kbyDpgLvovpHlh73mlbBcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdEJ0bnMoKTtcclxuICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL+WKoOi9veWtpueUn+S/oeaBr1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL09yZ1ppWHVuL1ppWHVuR3VhbkxpL0dldE9yZ1N0dURldGFpbHNcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdC5EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0LkRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuaHRtbCh0cGxUYWJsZShkYXRhLnJlc3VsdC5EYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIuaXoOaVsOaNrlwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBpbml0QnRuczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vdG9kbyDnu5Hlrprkuovku7ZcclxuICAgICAgXHJcbiAgICAgICAgLy/lp5TmiZjliKDpmaTlrabmoKFcclxuICAgICAgICAvLyQoJyNzY2FMaXN0JykuZGVsZWdhdGUoXCIuZHVzdGJpblwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICB2YXIgb2JqID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgICAgICAvLyAgICAkKFwiI2FcIiArIG9iaikucmVtb3ZlKCk7XHJcbiAgICAgICAgLy8gICAgJChcIiNjaGtcIiArIG9iaikuYXR0cihcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG5cclxuICAgICAgICAvL30pO1xyXG4gICAgfVxyXG5cclxuXHJcbn07XHJcblxyXG5cclxuLy/nu5HlrprmlbDmja5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBtb2R1bGUuaW5pdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgXHJcblxyXG5cclxufSk7XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2pzL09yZ0V2YWx1YXRpb24vc3R1ZGVudGRldGFpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSA4NlxuICoqIG1vZHVsZSBjaHVua3MgPSAzN1xuICoqLyIsInZhciB0ZW1wbGF0ZT1yZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdPcmcvdHBsL09yZ0V2YWx1YXRpb24vc3R1ZGVudGRldGFpbHMnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVzY2FwZT0kdXRpbHMuJGVzY2FwZSxTdHVBY2NvdW50PSRkYXRhLlN0dUFjY291bnQsRXhwaXJlVGltZT0kZGF0YS5FeHBpcmVUaW1lLFN0dU5hbWU9JGRhdGEuU3R1TmFtZSxTaG93SXNFbmFibGU9JGRhdGEuU2hvd0lzRW5hYmxlLFNleD0kZGF0YS5TZXgsQmlydGhEYXk9JGRhdGEuQmlydGhEYXksRWR1VHlwZT0kZGF0YS5FZHVUeXBlLFBob25lPSRkYXRhLlBob25lLFFxPSRkYXRhLlFxLE9sZFNjaG9vbE5hbWU9JGRhdGEuT2xkU2Nob29sTmFtZSxPbGRDbGFzcz0kZGF0YS5PbGRDbGFzcyxFbWFpbD0kZGF0YS5FbWFpbCxGYW1BZGRyZXNzPSRkYXRhLkZhbUFkZHJlc3MsJGVhY2g9JHV0aWxzLiRlYWNoLEFscmVhZHlTdWJqZWN0cz0kZGF0YS5BbHJlYWR5U3ViamVjdHMsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LFBhcmVudHNEYXRhPSRkYXRhLlBhcmVudHNEYXRhLE9sZFNjb3Jlcz0kZGF0YS5PbGRTY29yZXMsJG91dD0nJzskb3V0Kz0nIDxkaXYgaWQ9XCJtYWluLWNvbnRlbnRcIj4gPGRpdiBjbGFzcz1cImNydW1iIG10NDAgbWIzMCBmb250MTZcIj4g5p+l55yL5a2m55SfID4g5a2m55Sf6K+m5oOFIDwvZGl2PiA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PiA8ZGl2IGNsYXNzPVwiZGV0YWlsIGZvbnQxNFwiPiA8ZGl2IGNsYXNzPVwidHJpYW5nbGUtYmdcIj48L2Rpdj4gPGRpdiBjbGFzcz1cInVzZXItaW5mby1kZXRhaWxcIj4gPGRpdiBjbGFzcz1cInVzZXItZGV0YWlsLWJnXCI+PC9kaXY+IDxkaXYgY2xhc3M9XCJmb250MTIgbXQxMlwiPiDotKblj7fvvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoU3R1QWNjb3VudCk7XG4kb3V0Kz0nPC9pPiA8L2Rpdj4gPGRpdiBjbGFzcz1cImZvbnQxMiBtdDEyXCI+IOWIsOacn+aXpeacn++8mjxpIGNsYXNzPVwiYmxhY2tcIj4nO1xuJG91dCs9JGVzY2FwZSgkaGVscGVycy4gZGF0ZUZvcm1hdChFeHBpcmVUaW1lICwgIFwieXl5eS1NTS1kZFwiKSk7XG4kb3V0Kz0nPC9pPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XCJkZXRhaWwtY29udGVudFwiPiA8ZGl2IGNsYXNzPVwiaXRlbVwiPiA8c3Bhbj4g5aeT5ZCN77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKFN0dU5hbWUpO1xuJG91dCs9JzwvaT4gPC9zcGFuPiA8c3BhbiBjbGFzcz1cInN0YXR1cy1hY3RpdmUgbWwyMFwiPic7XG4kb3V0Kz0kZXNjYXBlKFNob3dJc0VuYWJsZSk7XG4kb3V0Kz0nPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPHNwYW4+IOaAp+WIq++8mjxpIGNsYXNzPVwiYmxhY2tcIj4nO1xuJG91dCs9JGVzY2FwZSgkaGVscGVycy4gc2V4dHJhbihTZXggKSk7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWwyMFwiPiDnlJ/ml6XvvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoJGhlbHBlcnMuIGRhdGVGb3JtYXQoQmlydGhEYXkgLCAgXCJ5eXl5LU1NLWRkXCIpKTtcbiRvdXQrPSc8L2k+IDwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XCJpdGVtXCI+IDxzcGFuPiDop5LoibLvvJo8aSBjbGFzcz1cImJsYWNrXCI+5a2m55SfPC9pPiA8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWwyMFwiPiDlrabliLbvvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoJGhlbHBlcnMuIGVkdXR5cGV0cmFuKEVkdVR5cGUgKSk7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiaXRlbVwiPiA8c3Bhbj4g5omL5py65Y+356CB77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKFBob25lKTtcbiRvdXQrPSc8L2k+IDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJtbDIwXCI+IFFR77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKFFxKTtcbiRvdXQrPSc8L2k+IDwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XCJpdGVtXCI+IDxzcGFuPiDmiYDlnKjlrabmoKHvvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoT2xkU2Nob29sTmFtZSk7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWwyMFwiPiDmiYDlnKjnj63nuqfvvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoT2xkQ2xhc3MpO1xuJG91dCs9JzwvaT4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPHNwYW4+IOmCrueuseWcsOWdgO+8mjxpIGNsYXNzPVwiYmxhY2tcIj4nO1xuJG91dCs9JGVzY2FwZShFbWFpbCk7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiaXRlbVwiPiA8c3Bhbj4g5a625bqt5L2P5Z2A77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKEZhbUFkZHJlc3MpO1xuJG91dCs9JzwvaT4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPGRpdiBjbGFzcz1cIm1iMTVcIj7lt7LmiqXlrabnp5HvvJo8L2Rpdj4gPHRhYmxlIGNsYXNzPVwic21hbGwtdGFibGVcIj4gPHRoZWFkPiA8dHI+IDx0aD7lrabnp5E8L3RoPiA8dGg+57G75Z6LPC90aD4gPHRoPuihpeivvuiAgeW4iDwvdGg+IDx0aD7liankvZnor77ml7Y8L3RoPiA8dGg+5oql54+t5pe26Ze0PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiAnO1xuJGVhY2goQWxyZWFkeVN1YmplY3RzLGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8dHI+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkaGVscGVycy4gZ2V0U3ViamVjdE5hbWUoJHZhbHVlLlN1YmplY3QgKSk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5DbGFzc1R5cGUpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuVGVhY2hOYW1lKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkNsYXNzSG91cik7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCRoZWxwZXJzLiBkYXRlRm9ybWF0KCR2YWx1ZS5Db250YWN0VGltZSAsICBcInl5eXktTU0tZGRcIikpO1xuJG91dCs9JzwvdGQ+IDwvdHI+ICc7XG59KTtcbiRvdXQrPScgPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxkaXYgY2xhc3M9XCJpdGVtXCI+IDxkaXYgY2xhc3M9XCJtYjE1XCI+5a626ZW/5L+h5oGv77yaPC9kaXY+IDx0YWJsZSBjbGFzcz1cInNtYWxsLXRhYmxlXCI+IDx0aGVhZD4gPHRyPiA8dGg+5YWz57O7PC90aD4gPHRoPuWnk+WQjTwvdGg+IDx0aD7lt6XkvZzljZXkvY08L3RoPiA8dGg+6IGU57O75pa55byPPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiAnO1xuJGVhY2goUGFyZW50c0RhdGEsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDx0cj4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5SZWxhdGlvblNoaXApO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuTmFtZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Xb3JrSW5mbyk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5QaG9uZSk7XG4kb3V0Kz0nPC90ZD4gPC90cj4gJztcbn0pO1xuJG91dCs9JyA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPGRpdiBjbGFzcz1cIm1iMTVcIj7lhaXlrabliY3kuLvopoHlrabnp5HmiJDnu6nvvJo8L2Rpdj4gPHRhYmxlIGNsYXNzPVwic21hbGwtdGFibGVcIj4gPHRoZWFkPiA8dHI+IDx0aD7np5Hnm648L3RoPiA8dGg+5pWw5a2mPC90aD4gPHRoPuivreaWhzwvdGg+IDx0aD7oi7Hor608L3RoPiA8dGg+54mp55CGPC90aD4gPHRoPuWMluWtpjwvdGg+IDx0aD7lnLDnkIY8L3RoPiA8dGg+5Y6G5Y+yPC90aD4gPHRoPuaUv+ayuzwvdGg+IDx0aD7nlJ/niak8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0cj4gPHRkPua7oeWIhjwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZShPbGRTY29yZXMuVE1hdGhTY29yZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKE9sZFNjb3Jlcy5UQ2hpblNjb3JlKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoT2xkU2NvcmVzLlRFbmdTY29yZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKE9sZFNjb3Jlcy5UUGh5U2NvcmUpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZShPbGRTY29yZXMuVENoZVNjb3JlKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoT2xkU2NvcmVzLlRHZW9TY29yZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKE9sZFNjb3Jlcy5USGlzU2NvcmUpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZShPbGRTY29yZXMuVFBvbFNjb3JlKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoT2xkU2NvcmVzLlRCaW9TY29yZSk7XG4kb3V0Kz0nPC90ZD4gPC90cj4gPHRyPiA8dGQ+5oiQ57upPC90ZD4gPHRkIGNsYXNzPVwicmVkXCI+JztcbiRvdXQrPSRlc2NhcGUoT2xkU2NvcmVzLk1hdGhTY29yZSk7XG4kb3V0Kz0nPC90ZD4gPHRkIGNsYXNzPVwicmVkXCI+JztcbiRvdXQrPSRlc2NhcGUoT2xkU2NvcmVzLkNoaW5TY29yZSk7XG4kb3V0Kz0nPC90ZD4gPHRkIGNsYXNzPVwicmVkXCI+JztcbiRvdXQrPSRlc2NhcGUoT2xkU2NvcmVzLkVuZ1Njb3JlKTtcbiRvdXQrPSc8L3RkPiA8dGQgY2xhc3M9XCJyZWRcIj4nO1xuJG91dCs9JGVzY2FwZShPbGRTY29yZXMuUGh5U2NvcmUpO1xuJG91dCs9JzwvdGQ+IDx0ZCBjbGFzcz1cInJlZFwiPic7XG4kb3V0Kz0kZXNjYXBlKE9sZFNjb3Jlcy5DaGVTY29yZSk7XG4kb3V0Kz0nPC90ZD4gPHRkIGNsYXNzPVwicmVkXCI+JztcbiRvdXQrPSRlc2NhcGUoT2xkU2NvcmVzLkdlb1Njb3JlKTtcbiRvdXQrPSc8L3RkPiA8dGQgY2xhc3M9XCJyZWRcIj4nO1xuJG91dCs9JGVzY2FwZShPbGRTY29yZXMuSGlzU2NvcmUpO1xuJG91dCs9JzwvdGQ+IDx0ZCBjbGFzcz1cInJlZFwiPic7XG4kb3V0Kz0kZXNjYXBlKE9sZFNjb3Jlcy5Qb2xTY29yZSk7XG4kb3V0Kz0nPC90ZD4gPHRkIGNsYXNzPVwicmVkXCI+JztcbiRvdXQrPSRlc2NhcGUoT2xkU2NvcmVzLkJpb1Njb3JlKTtcbiRvdXQrPSc8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiY29udGVudC1ib3R0b21cIj48L2Rpdj4gPC9kaXY+ICc7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ0V2YWx1YXRpb24vc3R1ZGVudGRldGFpbHMudHBsXG4gKiogbW9kdWxlIGlkID0gODdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzdcbiAqKi8iLCJ2YXIgY3VycmVudFNob3dTdHVkZW50SWQgPSAwOyAgICAvL+W9k+WJjeafpeeci+eahOWtpueUn0lEXHJcbnZhciBjdXJyZW50U3R1ZGVudERldGFpbHNJbmZvID0gbnVsbDsgICAgLy/lvZPliY3nlKjmiLfor6bmg4Xljp/lp4vmlbDmja5cclxudmFyIFBvcHVDbGllbnQgPSByZXF1aXJlKFwicG9wdXAvcG9wdXB0aXAuanNcIik7XHJcblxyXG4vL+iOt+WPluWtpueUn+ivpue7huaVsOaNrlxyXG5mdW5jdGlvbiBHZXRTdHVkZW50RGVhdGFpbHNEYXRhKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL09yZ1VzZXIvU3R1ZGVudE1hbmFnZS9HZXRTdHVkZW50RGV0YWlsc0luZm9cIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHN0dWRlbnRJZDogY3VycmVudFNob3dTdHVkZW50SWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3R1ZGVudERldGFpbHNJbmZvID0gZGF0YS5EYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdHVkZW50RGV0YWlsc0luZm8gIT0gbnVsbCAmJiBjdXJyZW50U3R1ZGVudERldGFpbHNJbmZvICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wRGV0YWlsc1RwbCA9IHJlcXVpcmUoXCJPcmdVc2VyL3N0dWRlbnRkZXRhaWxzLnRwbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2RpdkRldGFpbHNNYWluQXJlYVwiKS5odG1sKHRlbXBEZXRhaWxzVHBsKGN1cnJlbnRTdHVkZW50RGV0YWlsc0luZm8pKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+a3u+WKoOeUqOaIt+eahOWOhuWPsuaIkOe7qeS/oeaBr1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3R1ZGVudERldGFpbHNJbmZvLlNjb3JlRGV0YWlscyAhPSBudWxsICYmIGN1cnJlbnRTdHVkZW50RGV0YWlsc0luZm8uU2NvcmVEZXRhaWxzICE9IHVuZGVmaW5lZCAmJiBjdXJyZW50U3R1ZGVudERldGFpbHNJbmZvLlNjb3JlRGV0YWlscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wVG90YWxTY29yZVN0ciA9IFwiPHRyPjx0ZD7mu6HliIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEN1cnJlbnRTY29yZVN0ciA9IFwiPHRyPjx0ZD7miJDnu6k8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRTdHVkZW50RGV0YWlsc0luZm8uU2NvcmVEZXRhaWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFNjb3JlSW5mbyA9IGN1cnJlbnRTdHVkZW50RGV0YWlsc0luZm8uU2NvcmVEZXRhaWxzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBTY29yZUluZm8uU3ViamVjdElEID09IFwiMDJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUb3RhbFNjb3JlU3RyICs9IFwiPHRkIHN1YmplY3RJZD1cXFwiMDJcXFwiPlwiICsgdGVtcFNjb3JlSW5mby5Ub3RhbFNjb3JlICsgXCLliIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJyZW50U2NvcmVTdHIgKz0gXCI8dGQgY2xhc3M9XFxcInJlZFxcXCIgc3ViamVjdElkPVxcXCIwMlxcXCI+XCIgKyB0ZW1wU2NvcmVJbmZvLlVzZXJTY29yZSArIFwi5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBTY29yZUluZm8uU3ViamVjdElEID09IFwiMDFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUb3RhbFNjb3JlU3RyICs9IFwiPHRkIHN1YmplY3RJZD1cXFwiMDFcXFwiPlwiICsgdGVtcFNjb3JlSW5mby5Ub3RhbFNjb3JlICsgXCLliIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJyZW50U2NvcmVTdHIgKz0gXCI8dGQgY2xhc3M9XFxcInJlZFxcXCIgc3ViamVjdElkPVxcXCIwMVxcXCI+XCIgKyB0ZW1wU2NvcmVJbmZvLlVzZXJTY29yZSArIFwi5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBTY29yZUluZm8uU3ViamVjdElEID09IFwiMDNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUb3RhbFNjb3JlU3RyICs9IFwiPHRkIHN1YmplY3RJZD1cXFwiMDNcXFwiPlwiICsgdGVtcFNjb3JlSW5mby5Ub3RhbFNjb3JlICsgXCLliIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJyZW50U2NvcmVTdHIgKz0gXCI8dGQgY2xhc3M9XFxcInJlZFxcXCIgc3ViamVjdElkPVxcXCIwM1xcXCI+XCIgKyB0ZW1wU2NvcmVJbmZvLlVzZXJTY29yZSArIFwi5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBTY29yZUluZm8uU3ViamVjdElEID09IFwiMDRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUb3RhbFNjb3JlU3RyICs9IFwiPHRkIHN1YmplY3RJZD1cXFwiMDRcXFwiPlwiICsgdGVtcFNjb3JlSW5mby5Ub3RhbFNjb3JlICsgXCLliIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJyZW50U2NvcmVTdHIgKz0gXCI8dGQgY2xhc3M9XFxcInJlZFxcXCIgc3ViamVjdElkPVxcXCIwNFxcXCI+XCIgKyB0ZW1wU2NvcmVJbmZvLlVzZXJTY29yZSArIFwi5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBTY29yZUluZm8uU3ViamVjdElEID09IFwiMDVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUb3RhbFNjb3JlU3RyICs9IFwiPHRkIHN1YmplY3RJZD1cXFwiMDVcXFwiPlwiICsgdGVtcFNjb3JlSW5mby5Ub3RhbFNjb3JlICsgXCLliIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJyZW50U2NvcmVTdHIgKz0gXCI8dGQgY2xhc3M9XFxcInJlZFxcXCIgc3ViamVjdElkPVxcXCIwNVxcXCI+XCIgKyB0ZW1wU2NvcmVJbmZvLlVzZXJTY29yZSArIFwi5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBTY29yZUluZm8uU3ViamVjdElEID09IFwiMDZcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUb3RhbFNjb3JlU3RyICs9IFwiPHRkIHN1YmplY3RJZD1cXFwiMDZcXFwiPlwiICsgdGVtcFNjb3JlSW5mby5Ub3RhbFNjb3JlICsgXCLliIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJyZW50U2NvcmVTdHIgKz0gXCI8dGQgY2xhc3M9XFxcInJlZFxcXCIgc3ViamVjdElkPVxcXCIwNlxcXCI+XCIgKyB0ZW1wU2NvcmVJbmZvLlVzZXJTY29yZSArIFwi5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBTY29yZUluZm8uU3ViamVjdElEID09IFwiMDdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUb3RhbFNjb3JlU3RyICs9IFwiPHRkIHN1YmplY3RJZD1cXFwiMDdcXFwiPlwiICsgdGVtcFNjb3JlSW5mby5Ub3RhbFNjb3JlICsgXCLliIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJyZW50U2NvcmVTdHIgKz0gXCI8dGQgY2xhc3M9XFxcInJlZFxcXCIgc3ViamVjdElkPVxcXCIwN1xcXCI+XCIgKyB0ZW1wU2NvcmVJbmZvLlVzZXJTY29yZSArIFwi5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBTY29yZUluZm8uU3ViamVjdElEID09IFwiMDhcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUb3RhbFNjb3JlU3RyICs9IFwiPHRkIHN1YmplY3RJZD1cXFwiMDhcXFwiPlwiICsgdGVtcFNjb3JlSW5mby5Ub3RhbFNjb3JlICsgXCLliIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJyZW50U2NvcmVTdHIgKz0gXCI8dGQgY2xhc3M9XFxcInJlZFxcXCIgc3ViamVjdElkPVxcXCIwOFxcXCI+XCIgKyB0ZW1wU2NvcmVJbmZvLlVzZXJTY29yZSArIFwi5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBTY29yZUluZm8uU3ViamVjdElEID09IFwiMDlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUb3RhbFNjb3JlU3RyICs9IFwiPHRkIHN1YmplY3RJZD1cXFwiMDlcXFwiPlwiICsgdGVtcFNjb3JlSW5mby5Ub3RhbFNjb3JlICsgXCLliIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJyZW50U2NvcmVTdHIgKz0gXCI8dGQgY2xhc3M9XFxcInJlZFxcXCIgc3ViamVjdElkPVxcXCIwOVxcXCI+XCIgKyB0ZW1wU2NvcmVJbmZvLlVzZXJTY29yZSArIFwi5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+a3u+WKoOihjOagh+etvlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVG90YWxTY29yZVN0ciArPSBcIjwvdHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJyZW50U2NvcmVTdHIgKz0gXCI8L3RyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3RiSGlzdG9yeVNjb3JlTGlzdCA+dGJvZHlcIikuaHRtbCh0ZW1wVG90YWxTY29yZVN0ciArIHRlbXBDdXJyZW50U2NvcmVTdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLkNvZGUgPT0gXCIxMS0wMDNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIFBvcHVDbGllbnQuUG9wVGlwU2hvdyhcIuWPguaVsOmUmeivr++8gVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+e8lui+keWtpueUn+S/oeaBr1xyXG5mdW5jdGlvbiBFZGl0U3R1ZGVudERlYXRhaWxzKCkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9PcmdVc2VyL1N0dWRlbnRNYW5hZ2UvRWRpdFN0dWRlbnREZXRhaWxzUGFnZT9zdHVkZW50SWQ9XCIgKyB0ZW1wU3R1SWQ7XHJcbn1cclxuXHJcbi8v6YeN572u5a+G56CBXHJcbmZ1bmN0aW9uIFJlc2V0U3R1ZGVudFBXRCgpIHtcclxuICAgIFBvcHVDbGllbnQuT3BlbkNvbmZyaW1Qb3BOb0NhbmNlbChcIumHjee9ruWvhueggeWQju+8jOivpei0puWPt+WvhueggeWwhuaBouWkjeWIneWni+Wvhuegge+8gVwiKVxyXG4gICAgaWYgKCQoXCIjQ29uZnJpbVwiKSAhPSBudWxsICYmICQoXCIjQ29uZnJpbVwiKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAkKFwiI0NvbmZyaW1cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL09yZy9Vc2VyTWFuYWdlL1Jlc2V0VXNlclB3ZFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogY3VycmVudFNob3dTdHVkZW50SWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2RlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuT0spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI0NvbmZyaW1cIikudW5iaW5kKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnBvcC11cFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvcHVDbGllbnQuT3BlbkNvbmZyaW1Qb3BOb0NhbmNlbChcIuaBreWWnOaCqO+8geivpei0puWPt+WvhueggeW3sumHjee9ruaIkOWKn++8gVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNDb25mcmltXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNDb25mcmltXCIpLnVuYmluZChcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucG9wLXVwXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5Db2RlID09IFwiMTEtMDAzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvcHVDbGllbnQuUG9wVGlwU2hvdyhcIuWPguaVsOmUmeivr++8gVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvcHVDbGllbnQuUG9wVGlwU2hvdyhkYXRhLlJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+mhtemdouWKoOi9veWujOaIkOWQjuS6i+S7tlxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIGN1cnJlbnRTaG93U3R1ZGVudElkID0gJChcIiNoaWRTaG9TdHVkZW50SWRcIikudmFsKCk7XHJcbiAgICAvL+mhtemdouWKoOi9veWujOaIkOWQju+8jOiOt+WPlueUqOaIt+ivpue7huaVsOaNrlxyXG4gICAgR2V0U3R1ZGVudERlYXRhaWxzRGF0YSgpO1xyXG4gICAgLy/mt7vliqDkuovku7ZcclxuICAgIGlmICgkKFwiI2J0bkVkaXRVc2VyRGV0YWlsc0luZm9cIikgIT0gbnVsbCAmJiAkKFwiI2J0bkVkaXRVc2VyRGV0YWlsc0luZm9cIikgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJChcIiNidG5FZGl0VXNlckRldGFpbHNJbmZvXCIpLmNsaWNrKEVkaXRTdHVkZW50RGVhdGFpbHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQoXCIjYnRuUmVzZXRQV0RcIikgIT0gbnVsbCAmJiAkKFwiI2J0blJlc2V0UFdEXCIpICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICQoXCIjYnRuUmVzZXRQV0RcIikuY2xpY2soUmVzZXRTdHVkZW50UFdEKTtcclxuICAgIH1cclxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmdVc2VyL3N0dWRlbnRkZXRhaWxzLmpzXG4gKiogbW9kdWxlIGlkID0gODhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzdcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmdVc2VyL3N0dWRlbnRkZXRhaWxzJyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsU3R1ZGVudEFjY291bnQ9JGRhdGEuU3R1ZGVudEFjY291bnQsRXhwaXJlVGltZT0kZGF0YS5FeHBpcmVUaW1lLFN0dWRlbnROYW1lPSRkYXRhLlN0dWRlbnROYW1lLEFjdGl2ZVN0YXR1cz0kZGF0YS5BY3RpdmVTdGF0dXMsU3R1ZGVudFNleD0kZGF0YS5TdHVkZW50U2V4LFN0dWRlbnRBZ2U9JGRhdGEuU3R1ZGVudEFnZSxFZHVUeXBlRGVzYz0kZGF0YS5FZHVUeXBlRGVzYyxQaG9uZU51bT0kZGF0YS5QaG9uZU51bSxRUU51bT0kZGF0YS5RUU51bSxTY2hvb2xOYW1lPSRkYXRhLlNjaG9vbE5hbWUsQ2xhc3NOYW1lPSRkYXRhLkNsYXNzTmFtZSxFbWFpbEFkZHI9JGRhdGEuRW1haWxBZGRyLEFkZHJlc3M9JGRhdGEuQWRkcmVzcywkZWFjaD0kdXRpbHMuJGVhY2gsQ2xhc3NUeXBlTGlzdD0kZGF0YS5DbGFzc1R5cGVMaXN0LCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkb3V0PScnOyRvdXQrPScgPGRpdiBjbGFzcz1cInRyaWFuZ2xlLWJnXCI+PC9kaXY+IDxkaXYgY2xhc3M9XCJ1c2VyLWluZm8tZGV0YWlsXCI+IDxkaXYgY2xhc3M9XCJ1c2VyLWRldGFpbC1iZ1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwiZm9udDEyIG10MTJcIj4g6LSm5Y+377yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKFN0dWRlbnRBY2NvdW50KTtcbiRvdXQrPSc8L2k+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiZm9udDEyIG10MTJcIj4g5Yiw5pyf5pel5pyf77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKEV4cGlyZVRpbWUpO1xuJG91dCs9JzwvaT4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiZGV0YWlsLWNvbnRlbnRcIj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPHNwYW4+IOWnk+WQje+8mjxpIGNsYXNzPVwiYmxhY2tcIj4nO1xuJG91dCs9JGVzY2FwZShTdHVkZW50TmFtZSk7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+ICc7XG5pZihBY3RpdmVTdGF0dXMgPT0gMCl7XG4kb3V0Kz0nIDxzcGFuIGNsYXNzPVwic3RhdHVzIG1sMjBcIj7mnKrmv4DmtLs8L3NwYW4+ICc7XG59ZWxzZXtcbiRvdXQrPScgPHNwYW4gY2xhc3M9XCJzdGF0dXMtYWN0aXZlIG1sMjBcIj7lt7Lmv4DmtLs8L3NwYW4+ICc7XG59XG4kb3V0Kz0nIDwvZGl2PiA8ZGl2IGNsYXNzPVwiaXRlbVwiPiA8c3Bhbj4g5oCn5Yir77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG5pZihTdHVkZW50U2V4PT0wKXtcbiRvdXQrPSflpbMnO1xufVxuaWYoU3R1ZGVudFNleD09MSl7XG4kb3V0Kz0n55S3Jztcbn1cbiRvdXQrPSc8L2k+IDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJtbDIwXCI+IOW5tOm+hO+8mjxpIGNsYXNzPVwiYmxhY2tcIj4nO1xuJG91dCs9JGVzY2FwZShTdHVkZW50QWdlKTtcbiRvdXQrPSc8L2k+IDwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XCJpdGVtXCI+IDxzcGFuPiDop5LoibLvvJo8aSBjbGFzcz1cImJsYWNrXCI+5a2m55SfPC9pPiA8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWwyMFwiPiDlrabliLbvvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoRWR1VHlwZURlc2MpO1xuJG91dCs9JzwvaT4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPHNwYW4+IOaJi+acuuWPt+egge+8mjxpIGNsYXNzPVwiYmxhY2tcIj4nO1xuJG91dCs9JGVzY2FwZShQaG9uZU51bSk7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWwyMFwiPiBRUe+8mjxpIGNsYXNzPVwiYmxhY2tcIj4nO1xuJG91dCs9JGVzY2FwZShRUU51bSk7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiaXRlbVwiPiA8c3Bhbj4g5omA5Zyo5a2m5qCh77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKFNjaG9vbE5hbWUpO1xuJG91dCs9JzwvaT4gPC9zcGFuPiA8c3BhbiBjbGFzcz1cIm1sMjBcIj4g5omA5Zyo54+t57qn77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKENsYXNzTmFtZSk7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiaXRlbVwiPiA8c3Bhbj4g6YKu566x5Zyw5Z2A77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKEVtYWlsQWRkcik7XG4kb3V0Kz0nPC9pPiA8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiaXRlbVwiPiA8c3Bhbj4g5a625bqt5L2P5Z2A77yaPGkgY2xhc3M9XCJibGFja1wiPic7XG4kb3V0Kz0kZXNjYXBlKEFkZHJlc3MpO1xuJG91dCs9JzwvaT4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPGRpdiBjbGFzcz1cIm1iMTVcIj7lt7LmiqXlrabnp5HvvJo8L2Rpdj4gPHRhYmxlIGNsYXNzPVwic21hbGwtdGFibGVcIj4gPHRoZWFkPiA8dHI+IDx0aD7lrabnp5E8L3RoPiA8dGg+57G75Z6LPC90aD4gPHRoPuihpeivvuiAgeW4iDwvdGg+IDx0aD7liankvZnor77ml7Y8L3RoPiA8dGg+5oql54+t5pe26Ze0PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiAnO1xuJGVhY2goQ2xhc3NUeXBlTGlzdCxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPHRyPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkJpZ0dyYWRlRGVzYyk7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdWJqZWN0RGVzYyk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5DbGFzc1R5cGVEZXNjKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkNsYXNzTmFtZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG5pZigkdmFsdWUuU3VycGx1c0NsYXNzSG91ciA+MCl7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdXJwbHVzQ2xhc3NIb3VyKTtcbiRvdXQrPSfor77ml7YnO1xufWVsc2V7XG4kb3V0Kz0n5bey57uT6K++Jztcbn1cbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkNyZWF0ZUNsYXNzRGF0ZSk7XG4kb3V0Kz0nPC90ZD4gPC90cj4gJztcbn0pO1xuJG91dCs9JyA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPGRpdiBjbGFzcz1cIm1iMTVcIj7lrrbplb/kv6Hmga/vvJo8L2Rpdj4gPHRhYmxlIGNsYXNzPVwic21hbGwtdGFibGVcIj4gPHRoZWFkPiA8dHI+IDx0aD7lhbPns7s8L3RoPiA8dGg+5aeT5ZCNPC90aD4gPHRoPuW3peS9nOWNleS9jTwvdGg+IDx0aD7ogZTns7vmlrnlvI88L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+ICc7XG4kZWFjaChDbGFzc1R5cGVMaXN0LGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8dHI+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuUmVsYXRpb25EZXNjKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlBhcmVudE5hbWUpO1xuJG91dCs9JzwvdGQ+IDx0ZD4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuUGFyZW50Sm9iKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlBhcmVudFBob25lKTtcbiRvdXQrPSc8L3RkPiA8L3RyPiAnO1xufSk7XG4kb3V0Kz0nIDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiaXRlbVwiPiA8ZGl2IGNsYXNzPVwibWIxNVwiPuWFpeWtpuWJjeS4u+imgeWtpuenkeaIkOe7qe+8mjwvZGl2PiA8dGFibGUgY2xhc3M9XCJzbWFsbC10YWJsZVwiIGlkPVwidGJIaXN0b3J5U2NvcmVMaXN0XCI+IDx0aGVhZD4gPHRyPiA8dGg+56eR55uuPC90aD4gPHRoPuaVsOWtpjwvdGg+IDx0aD7or63mloc8L3RoPiA8dGg+6Iux6K+tPC90aD4gPHRoPueJqeeQhjwvdGg+IDx0aD7ljJblraY8L3RoPiA8dGg+5Zyw55CGPC90aD4gPHRoPuWOhuWPsjwvdGg+IDx0aD7mlL/msrs8L3RoPiA8dGg+55Sf54mpPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHI+IDx0ZD7mu6HliIY8L3RkPiA8dGQgc3ViamVjdElkPVwiMDJcIj7mmoLml6A8L3RkPiA8dGQgc3ViamVjdElkPVwiMDFcIj7mmoLml6A8L3RkPiA8dGQgc3ViamVjdElkPVwiMDNcIj7mmoLml6A8L3RkPiA8dGQgc3ViamVjdElkPVwiMDRcIj7mmoLml6A8L3RkPiA8dGQgc3ViamVjdElkPVwiMDVcIj7mmoLml6A8L3RkPiA8dGQgc3ViamVjdElkPVwiMDZcIj7mmoLml6A8L3RkPiA8dGQgc3ViamVjdElkPVwiMDdcIj7mmoLml6A8L3RkPiA8dGQgc3ViamVjdElkPVwiMDhcIj7mmoLml6A8L3RkPiA8dGQgc3ViamVjdElkPVwiMDlcIj7mmoLml6A8L3RkPiA8L3RyPiA8dHI+IDx0ZD7miJDnu6k8L3RkPiA8dGQgY2xhc3M9XCJyZWRcIiBzdWJqZWN0SWQ9XCIwMlwiPuaaguaXoDwvdGQ+IDx0ZCBjbGFzcz1cInJlZFwiIHN1YmplY3RJZD1cIjAxXCI+5pqC5pegPC90ZD4gPHRkIGNsYXNzPVwicmVkXCIgc3ViamVjdElkPVwiMDNcIj7mmoLml6A8L3RkPiA8dGQgY2xhc3M9XCJyZWRcIiBzdWJqZWN0SWQ9XCIwNFwiPuaaguaXoDwvdGQ+IDx0ZCBjbGFzcz1cInJlZFwiIHN1YmplY3RJZD1cIjA1XCI+5pqC5pegPC90ZD4gPHRkIGNsYXNzPVwicmVkXCIgc3ViamVjdElkPVwiMDZcIj7mmoLml6A8L3RkPiA8dGQgY2xhc3M9XCJyZWRcIiBzdWJqZWN0SWQ9XCIwN1wiPuaaguaXoDwvdGQ+IDx0ZCBjbGFzcz1cInJlZFwiIHN1YmplY3RJZD1cIjA4XCI+5pqC5pegPC90ZD4gPHRkIGNsYXNzPVwicmVkXCIgc3ViamVjdElkPVwiMDlcIj7mmoLml6A8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPC9kaXY+JztcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy90cGwvT3JnVXNlci9zdHVkZW50ZGV0YWlscy50cGxcbiAqKiBtb2R1bGUgaWQgPSA4OVxuICoqIG1vZHVsZSBjaHVua3MgPSAzN1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=