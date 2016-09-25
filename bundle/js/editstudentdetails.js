webpackJsonp([25,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(57);


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

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	var currentShowStudentId = 0;    //当前查看的学生ID
	var currentStudentDetailsInfo = null;    //当前用户详情原始数据
	
	var currentEduType = 0;   //学制信息
	var currentStuSex = 0;    //学生性别
	var currentRelationId = -1;     //家长信息临时ID
	
	
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
	                    var tempDetailsTpl = __webpack_require__(58);
	                    $("#divEditStudentMainArea").html(tempDetailsTpl(currentStudentDetailsInfo));
	                    //添加用户的历史成绩信息
	                    if (currentStudentDetailsInfo.ScoreDetails != null && currentStudentDetailsInfo.ScoreDetails != undefined && currentStudentDetailsInfo.ScoreDetails.length > 0) {
	                        var tempTotalScoreStr = "<tr><td>满分</td>";
	                        var tempCurrentScoreStr = "<tr><td>成绩</td>";
	                        for (var i = 0; i < currentStudentDetailsInfo.ScoreDetails.length; i++) {
	                            var tempScoreInfo = currentStudentDetailsInfo.ScoreDetails[i];
	                            if (tempScoreInfo.SubjectID == "02") {
	                                tempTotalScoreStr += "<td><input subjectId=\"02\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.TotalScore + "\" />分</td>";
	                                tempCurrentScoreStr += "<td><input subjectId=\"02\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.UserScore + "\" />分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "01") {
	                                tempTotalScoreStr += "<td><input subjectId=\"01\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.TotalScore + "\" />分</td>";
	                                tempCurrentScoreStr += "<td><input subjectId=\"01\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.UserScore + "\" />分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "03") {
	                                tempTotalScoreStr += "<td><input subjectId=\"03\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.TotalScore + "\" />分</td>";
	                                tempCurrentScoreStr += "<td><input subjectId=\"03\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.UserScore + "\" />分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "04") {
	                                tempTotalScoreStr += "<td><input subjectId=\"04\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.TotalScore + "\" />分</td>";
	                                tempCurrentScoreStr += "<td><input subjectId=\"04\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.UserScore + "\" />分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "05") {
	                                tempTotalScoreStr += "<td><input subjectId=\"05\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.TotalScore + "\" />分</td>";
	                                tempCurrentScoreStr += "<td><input subjectId=\"05\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.UserScore + "\" />分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "06") {
	                                tempTotalScoreStr += "<td><input subjectId=\"06\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.TotalScore + "\" />分</td>";
	                                tempCurrentScoreStr += "<td><input subjectId=\"06\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.UserScore + "\" />分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "07") {
	                                tempTotalScoreStr += "<td><input subjectId=\"07\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.TotalScore + "\" />分</td>";
	                                tempCurrentScoreStr += "<td><input subjectId=\"07\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.UserScore + "\" />分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "08") {
	                                tempTotalScoreStr += "<td><input subjectId=\"08\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.TotalScore + "\" />分</td>";
	                                tempCurrentScoreStr += "<td><input subjectId=\"08\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.UserScore + "\" />分</td>";
	                            }
	                            else if (tempScoreInfo.SubjectID == "09") {
	                                tempTotalScoreStr += "<td><input subjectId=\"09\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.TotalScore + "\" />分</td>";
	                                tempCurrentScoreStr += "<td><input subjectId=\"09\" scoreId=\"" + tempScoreInfo.ScoreId + "\" class=\"input-small\" type=\"text\" value=\"" + tempScoreInfo.UserScore + "\" />分</td>";
	                            }
	                        }
	                        //添加行标签
	                        tempTotalScoreStr += "</tr>";
	                        tempCurrentScoreStr += "</tr>";
	                        $("#tbEditHistoryScoreList >tbody").html(tempTotalScoreStr + tempCurrentScoreStr);
	                        //添加相应的事件
	                        $("#spStudentSex input[name='sex']").click(ChangeStudentSex);
	                        $("#selectStudentEduType").change(function () {
	                            var tempSelected = $("#selectStudentEduType option:selected");
	                            currentEduType = parseInt(tempSelected.val());
	                        });
	                        $("#imgAddRelationInfo").click(AddParentInfo);
	                        $("#btnSaveStudentDetails").click(SaveStudentEditData);
	                        $("#btnCancelEditStudentDetails").click(function () {
	                            window.location.href = "/OrgUser/StudentManage/StudentDetailsInfo?studentId=" + currentShowStudentId;
	                        });
	                        //历史成绩输入框中，只能输入三位数字
	                        $("#tbEditHistoryScoreList >tbody input").keyup(function () {
	                            var v = $(this).val() || '';
	                            v = v.replace(/[^\d{3}]/g, '');
	                            $(this).val(v.substr(0, 3));
	                        });
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
	
	//修改学生性别
	function ChangeStudentSex() {
	    currentStuSex = parseInt($(this).val());
	    $(this).parent().siblings().find("input[name='sex']").addClass("ml10");
	    $(this).removeClass("ml10");
	}
	
	//添加家长信息
	function AddParentInfo() {
	    $("#imgAddRelationInfo").unbind("click");
	    $("#imgAddRelationInfo").remove();
	    //添加新行
	    var tempNewStr = "<tr relationId=\"" + currentRelationId + "\"><td><input class=\"input-small w65\" type=\"text\" value=\"\" name=\"txtRelationDesc\"/></td><td><input class=\"input-small w65\" type=\"text\" value=\"\"  name=\"txtParentName\"/></td><td><input class=\"input-small w98\" type=\"text\" value=\"\" name=\"txtParentJob\" /></td><td><input class=\"input-small w118\" type=\"text\" value=\"\" name=\"txtParentPhone\" /></td><td><img class=\"cursor\" src=\"@BaseConfig.ImgUrl/bundle/img/add.png\" id=\"imgAddRelationInfo\"/></td></tr>";
	    $("#tbParentRelationList tr:last").after(tempNewStr);
	    currentRelationId--;
	    $("#imgAddRelationInfo").click(AddParentInfo);
	}
	
	//保存修改的数据
	function SaveStudentEditData() {
	    //验证各种数据
	    //姓名
	    var tempStudentName = $("#txtStudentName").val();
	    if (tempStudentName == "" || tempStudentName == null || tempStudentName == undefined) {
	        $("#divStuNameErrTip").show();
	        return;
	    } else if (tempStudentName.length > 5 || !/^[a-zA-Z\u4e00-\u9fa5//d+]+$/.test(tempStudentName)) {
	        $("#divStuNameErrTip").show();
	        return;
	    } else {
	        $("#divStuNameErrTip").hide();
	    }
	    //生日
	    var tempStuBirthDay = "";
	
	    //手机号码
	    var tempStuPhone = $("#txtStudentPhone").val();
	    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	    if (!myreg.test(tempStuPhone)) {
	        $("#divStuPhoneErrTip span:first").removeClass("hidden");
	        $("#divStuPhoneErrTip span:first").siblings().addClass("hidden");
	        $("#divStuPhoneErrTip").show();
	        return;
	    } else {
	        $("#divStuPhoneErrTip").hide();
	    }
	    //QQ号码
	    var tempStuQQ = $("#txtStudentQQ").val();
	    if (tempStuQQ != "" && tempStuQQ != null && tempStuQQ != undefined && !/^[1-9][0-9]{4,13}$/.test(tempStuQQ)) {
	        $("#divStuPhoneErrTip span:last").removeClass("hidden");
	        $("#divStuPhoneErrTip span:last").siblings().addClass("hidden");
	        $("#divStuPhoneErrTip").show();
	        return;
	    } else {
	        $("#divStuPhoneErrTip").hide();
	    }
	
	    //学校名称
	    var tempStuSchoolName = $("#txtStudentSclName").val();
	    if (tempStuSchoolName != "" && tempStuSchoolName != null && tempStuSchoolName != undefined && tempStuSchoolName.length > 18) {
	        $("#divStuSchoolErrTip span:first").removeClass("hidden");
	        $("#divStuSchoolErrTip span:first").siblings().addClass("hidden");
	        $("#divStuSchoolErrTip").show();
	        return;
	    } else {
	        $("#divStuSchoolErrTip").hide();
	    }
	    //所在班级名称
	    var tempStuClassName = $("#txtStudentClassName").val();
	    if (tempStuClassName != "" && tempStuClassName != null && tempStuClassName != undefined && tempStuClassName.length > 8) {
	        $("#divStuSchoolErrTip span:last").removeClass("hidden");
	        $("#divStuSchoolErrTip span:last").siblings().addClass("hidden");
	        $("#divStuSchoolErrTip").show();
	        return;
	    } else {
	        $("#divStuSchoolErrTip").hide();
	    }
	
	    //邮箱地址
	    var tempStuEmail = $("#txtStudentEmail").val();
	    if (tempStuEmail != "" && tempStuEmail != null && tempStuEmail != undefined && !/^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/.test(tempStuEmail)) {
	        $("#divStuEmailErrTip").show();
	        return;
	    } else {
	        $("#divStuEmailErrTip").hide();
	    }
	    //家庭住址
	    var tempStuAddress = $("#txtStudentAddr").val();
	
	    //获取家庭关系
	    var tempParentDataArray = new Array();   //格式{"RelationId":0,"RelationDesc":"","ParentName":"","ParentJob":"","ParentPhone":""}
	    var relationIsError = false;    //关系是否有错误
	    $("#tbParentRelationList >tbody>tr").each(function () {
	        var tempPData = {};
	        tempPData.RelationId = parseInt($(this).attr("relationId"));
	        tempPData.RelationDesc = $(this).find("input[name='txtRelationDesc']").val();
	        if (tempPData.RelationDesc.length > 4) {
	            relationIsError = true;
	            return;
	        }
	        tempPData.ParentName = $(this).find("input[name='txtParentName']").val();
	        if (tempPData.ParentName.length > 6) {
	            relationIsError = true;
	            return;
	        }
	        tempPData.ParentJob = $(this).find("input[name='txtParentJob']").val();
	        if (tempPData.ParentJob.length > 12) {
	            relationIsError = true;
	            return;
	        }
	        tempPData.ParentPhone = $(this).find("input[name='txtParentPhone']").val();
	        if (!myreg.test(tempPData.ParentPhone)) {
	            relationIsError = true;
	            return;
	        }
	        tempParentDataArray.push(tempPData);
	    });
	    if (relationIsError) {
	        PopuClient.PopTipShow("家庭关系输入有误，请检查！");
	        return;
	    }
	
	    //获取历史分数
	    var tempHostoryScoreArray = new Array();   //格式:{"ScoreId":0,"SubjectID":"","SubjectDesc":"","UserScore":0,"TotalScore":0}
	    //获取总分
	    $("#tbEditHistoryScoreList >tbody>tr:first").find("input[type='text']").each(function () {
	        var tempScoreData = {};
	        tempScoreData.ScoreId = parseInt($(this).attr("scoreId"));
	        tempScoreData.SubjectID = $(this).attr("subjectId");
	        tempScoreData.SubjectDesc = "";
	        tempScoreData.UserScore = 0;
	        tempScoreData.TotalScore = parseFloat($(this).val());
	        tempHostoryScoreArray.push(tempScoreData);
	    });
	    //获取学生分数
	    $("#tbEditHistoryScoreList >tbody>tr:last").find("input[type='text']").each(function () {
	        var tempScoreId = parseInt($(this).attr("scoreId"));
	        var tempSubId = $(this).attr("subjectId");
	        var tempUserScore = parseFloat($(this).val());
	        for (var i = 0; i < tempHostoryScoreArray.length; i++) {
	            if (tempHostoryScoreArray[i].ScoreId == tempScoreId && tempHostoryScoreArray[i].SubjectID == tempSubId) {
	                tempHostoryScoreArray[i].UserScore = tempUserScore;
	                break;
	            }
	        }
	    });
	    //保存
	    $.ajax({
	        type: "POST",
	        url: "/OrgUser/StudentManage/EditStudentDetailsInfo",
	        data: {
	            studentId: currentShowStudentId,
	            studentName: tempStudentName,
	            studentSex: currentStuSex,
	            studentBirthday: tempStuBirthDay,
	            eduType: currentEduType,
	            phoneNum: tempStuPhone,
	            QQNum: tempStuQQ,
	            schoolName: tempStuSchoolName,
	            className: tempStuClassName,
	            emailAddr: tempStuEmail,
	            address: tempStuAddress,
	            parentsList: tempParentDataArray,
	            scoreDetails: tempHostoryScoreArray
	        },
	        dataType: "json",
	        error: function (data) {
	            //debugger;
	        },
	        success: function (data) {
	            if (data.OK) {
	                if (data.Data > 0) {
	                    window.location.href = "/OrgUser/StudentManage/StudentDetailsInfo?studentId=" + currentShowStudentId;
	                } else {
	                    PopuClient.PopTipShow(data.Result);
	                }
	            } else {
	                PopuClient.PopTipShow(data.Result);
	            }
	        }
	    });
	}
	
	//页面加载完成后事件
	$(function () {
	    currentShowStudentId = $("#hidShoStudentId").val();
	    //页面加载完成后，获取用户详细数据
	    GetStudentDeatailsData();
	    //添加事件
	});

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgUser/editstudentdetails',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,StudentAccount=$data.StudentAccount,ExpireTime=$data.ExpireTime,StudentName=$data.StudentName,StudentSex=$data.StudentSex,PhoneNum=$data.PhoneNum,QQNum=$data.QQNum,SchoolName=$data.SchoolName,ClassName=$data.ClassName,EmailAddr=$data.EmailAddr,Address=$data.Address,$each=$utils.$each,ClassTypeList=$data.ClassTypeList,$value=$data.$value,$index=$data.$index,$out='';$out+=' <div class="triangle-bg"></div> <div class="user-info-detail"> <div class="user-detail-bg"></div> <div class="font12 mt12"> 账号：<i class="black">';
	$out+=$escape(StudentAccount);
	$out+='</i> </div> <div class="font12 mt12"> 到期日期：<i class="black">';
	$out+=$escape(ExpireTime);
	$out+='</i> </div> </div> <div class="detail-content"> <div> 姓名 <input class="input-small w88" type="text" placeholder="请输入姓名" value="';
	$out+=$escape(StudentName);
	$out+='" id="txtStudentName"/> </div> <div class="tips" id="divStuNameErrTip" style="display:none;"> <div class="name-tip error-tip">输入信息有误！</div> </div> <div class="item"> <span class="sex mr20" id="spStudentSex"> 性别： ';
	if(StudentSex==0){
	$out+=' <label> <input class="black middle ml10" name="sex" type="radio" value="1"/> <i class="black"> 男 </i> </label> <label> <input class="black middle" name="sex" type="radio" checked="checked" value="0"/> <i class="black"> 女 </i> </label> ';
	}else{
	$out+=' <label> <input class="black middle " name="sex" type="radio" checked="checked" value="1"/> <i class="black"> 男 </i> </label> <label> <input class="black middle ml10" name="sex" type="radio" value="0"/> <i class="black"> 女 </i> </label> ';
	}
	$out+=' </span> 生日:  </div> <div class="item"> 角色： <i class="black mr20">学生</i> 学制： <select class="select" id="selectStudentEduType"> <option value="0" selected="selected">六三制</option> <option value="0">五四制</option> </select> </div> <div> 手机号码： <input class="w118 input-small mr20" type="text" placeholder="请输入手机号码" value="';
	$out+=$escape(PhoneNum);
	$out+='" id="txtStudentPhone"/> QQ： <input class="qq input-small black" placeholder="请输入QQ账号" type="text" value="';
	$out+=$escape(QQNum);
	$out+='" id="txtStudentQQ"/> </div> <div class="tips" id="divStuPhoneErrTip" style="display:none;"> <span class="phone-tip error-tip left">您输入的信息有误!</span> <span class="qq-tip error-tip right">您输入的信息有误</span> </div> <div> 所在学校： <input class="input-small w118 mr20" type="text" placeholder="请输入学校名称" value="';
	$out+=$escape(SchoolName);
	$out+='" id="txtStudentSclName"/> 所在班级： <input class="input-small w118" type="text" placeholder="请输入所在班级" value="';
	$out+=$escape(ClassName);
	$out+='" id="txtStudentClassName"/> </div> <div class="tips" id="divStuSchoolErrTip" style="display:none;"> <span class="school-tip error-tip left">您输入的信息有误!</span> <span class="grade-tip error-tip right">您输入的信息有误</span> </div> <div> 邮箱地址： <input class="email input-small black" placeholder="请输入邮箱地址" type="text" value="';
	$out+=$escape(EmailAddr);
	$out+='" id="txtStudentEmail" /> </div> <div class="tips" id="divStuEmailErrTip" style="display:none;"> <span class="email-tip error-tip left">您输入的信息有误!</span> </div> <div> 家庭住址： <input class="home-address input-small black" placeholder="请输入家庭住址" type="text" value="';
	$out+=$escape(Address);
	$out+='" id="txtStudentAddr"/> </div> <div class="tips" id="divStuAddrErrTip" style="display:none;"> <span class="home-address-tip error-tip left">您输入的信息有误!</span> </div> <div class="item"> <div class="mb15">已报学科：</div> <table class="small-table"> <thead> <tr> <th>学科</th> <th>类型</th> <th>补课老师</th> <th>剩余课时</th> <th>报班时间</th> </tr> </thead> <tbody> ';
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
	$out+=' </tbody> </table> </div> <div class="item"> <div class="mb15">家长信息：</div> <table class="small-table" id="tbParentRelationList"> <thead> <tr> <th>关系</th> <th>姓名</th> <th>工作单位</th> <th>联系方式</th> <th></th> </tr> </thead> <tbody> ';
	$each(ClassTypeList,function($value,$index){
	$out+=' <tr relationId="';
	$out+=$escape($value.RelationId);
	$out+='"> <td> <input class="input-small w65" type="text" value="';
	$out+=$escape($value.RelationDesc);
	$out+='" name="txtRelationDesc"/> </td> <td> <input class="input-small w65" type="text" value="';
	$out+=$escape($value.ParentName);
	$out+='" name="txtParentName"/> </td> <td> <input class="input-small w98" type="text" value="';
	$out+=$escape($value.ParentJob);
	$out+='" name="txtParentJob" /> </td> <td> <input class="input-small w118" type="text" value="';
	$out+=$escape($value.ParentPhone);
	$out+='" name="txtParentPhone" /> </td> <td> <img class="cursor" src="@BaseConfig.ImgUrl/bundle/img/add.png" id="imgAddRelationInfo"/> </td> </tr> ';
	});
	$out+=' </tbody> </table> </div> <div class="item"> <div class="mb15">入学前主要学科成绩：</div> <table class="small-table" id="tbEditHistoryScoreList"> <thead> <tr> <th>科目</th> <th>数学</th> <th>语文</th> <th>英语</th> <th>物理</th> <th>化学</th> <th>地理</th> <th>历史</th> <th>政治</th> <th>生物</th> </tr> </thead> <tbody> <tr> <td>满分</td> <td> <input subjectId="02" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="01" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="03" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="04" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="05" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="06" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="07" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="08" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="09" scoreId="0" class="input-small" type="text" value="0" />分 </td> </tr> <tr> <td>成绩</td> <td> <input subjectId="02" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="01" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="03" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="04" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="05" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="06" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="07" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="08" scoreId="0" class="input-small" type="text" value="0" />分 </td> <td> <input subjectId="09" scoreId="0" class="input-small" type="text" value="0" />分 </td> </tr> </tbody> </table> </div> </div> <div class="handle mb40"> <span class="submit" id="btnSaveStudentDetails">保存</span> <span class="cancel ml40" id="btnCancelEditStudentDetails">取消</span> </div>';
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnVXNlci9lZGl0c3R1ZGVudGRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9PcmdVc2VyL2VkaXRzdHVkZW50ZGV0YWlscy50cGwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQWtDO0FBQ2xDOztBQUVBO0FBQ0EseUNBQXdDLE9BQU8sMkJBQTJCO0FBQzFFOztBQUVBO0FBQ0E7QUFDQSxzQ0FBcUMsWUFBWTtBQUNqRDtBQUNBOztBQUVBO0FBQ0EsMEJBQXlCLGlFQUFpRTtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQSxhQUFZLGVBQWU7QUFDM0Isa0RBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFxQjtBQUNyQixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLEdBQUU7QUFDRixrQ0FBaUM7QUFDakMsSUFBRztBQUNILGVBQWM7QUFDZDtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRixFQUFDLEc7Ozs7Ozs7QUM5RUQsOEJBQTZCO0FBQzdCLHNDQUFxQzs7QUFFckMsd0JBQXVCO0FBQ3ZCLHVCQUFzQjtBQUN0Qiw0QkFBMkI7OztBQUczQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsbURBQW1EO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsaURBQWdELEVBQUU7QUFDbEQ7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE2QixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBd0YsS0FBSztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMEMsUUFBUTtBQUNsRCxpQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsa0NBQWtDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7Ozs7QUNsU0Q7QUFDQTtBQUNBO0FBQ0EsY0FBYSwrYUFBK2E7QUFDNWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1HQUFrRztBQUNsRztBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFpRztBQUNqRztBQUNBO0FBQ0E7QUFDQSwwR0FBeUc7QUFDekc7QUFDQSxzR0FBcUc7QUFDckc7QUFDQSxtR0FBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUMsRSIsImZpbGUiOiJlZGl0c3R1ZGVudGRldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlRNT0RKUzp7fSovXHJcbiFmdW5jdGlvbiAoKSB7XHJcblx0ZnVuY3Rpb24gYShhLCBiKSB7XHJcblx0XHRyZXR1cm4gKC9zdHJpbmd8ZnVuY3Rpb24vLnRlc3QodHlwZW9mIGIpID8gaCA6IGcpKGEsIGIpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBiKGEsIGMpIHtcclxuXHRcdHJldHVybiBcInN0cmluZ1wiICE9IHR5cGVvZiBhICYmIChjID0gdHlwZW9mIGEsIFwibnVtYmVyXCIgPT09IGMgPyBhICs9IFwiXCIgOiBhID0gXCJmdW5jdGlvblwiID09PSBjID8gYihhLmNhbGwoYSkpIDogXCJcIiksIGFcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGMoYSkge1xyXG5cdFx0cmV0dXJuIGxbYV1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGQoYSkge1xyXG5cdFx0cmV0dXJuIGIoYSkucmVwbGFjZSgvJig/IVtcXHcjXSs7KXxbPD5cIiddL2csIGMpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBlKGEsIGIpIHtcclxuXHRcdGlmIChtKGEpKWZvciAodmFyIGMgPSAwLCBkID0gYS5sZW5ndGg7IGQgPiBjOyBjKyspYi5jYWxsKGEsIGFbY10sIGMsIGEpOyBlbHNlIGZvciAoYyBpbiBhKWIuY2FsbChhLCBhW2NdLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZihhLCBiKSB7XHJcblx0XHR2YXIgYyA9IC8oXFwvKVteXFwvXStcXDFcXC5cXC5cXDEvLCBkID0gKFwiLi9cIiArIGEpLnJlcGxhY2UoL1teXFwvXSskLywgXCJcIiksIGUgPSBkICsgYjtcclxuXHRcdGZvciAoZSA9IGUucmVwbGFjZSgvXFwvXFwuXFwvL2csIFwiL1wiKTsgZS5tYXRjaChjKTspZSA9IGUucmVwbGFjZShjLCBcIi9cIik7XHJcblx0XHRyZXR1cm4gZVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZyhiLCBjKSB7XHJcblx0XHR2YXIgZCA9IGEuZ2V0KGIpIHx8IGkoe2ZpbGVuYW1lOiBiLCBuYW1lOiBcIlJlbmRlciBFcnJvclwiLCBtZXNzYWdlOiBcIlRlbXBsYXRlIG5vdCBmb3VuZFwifSk7XHJcblx0XHRyZXR1cm4gYyA/IGQoYykgOiBkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoKGEsIGIpIHtcclxuXHRcdGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBiKSB7XHJcblx0XHRcdHZhciBjID0gYjtcclxuXHRcdFx0YiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IGsoYylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dmFyIGQgPSBqW2FdID0gZnVuY3Rpb24gKGMpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IGIoYywgYSkgKyBcIlwiXHJcblx0XHRcdH0gY2F0Y2ggKGQpIHtcclxuXHRcdFx0XHRyZXR1cm4gaShkKSgpXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gZC5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSA9IG4sIGQudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBiICsgXCJcIlxyXG5cdFx0fSwgZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaShhKSB7XHJcblx0XHR2YXIgYiA9IFwie1RlbXBsYXRlIEVycm9yfVwiLCBjID0gYS5zdGFjayB8fCBcIlwiO1xyXG5cdFx0aWYgKGMpYyA9IGMuc3BsaXQoXCJcXG5cIikuc2xpY2UoMCwgMikuam9pbihcIlxcblwiKTsgZWxzZSBmb3IgKHZhciBkIGluIGEpYyArPSBcIjxcIiArIGQgKyBcIj5cXG5cIiArIGFbZF0gKyBcIlxcblxcblwiO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIFwib2JqZWN0XCIgPT0gdHlwZW9mIGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcihiICsgXCJcXG5cXG5cIiArIGMpLCBiXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgaiA9IGEuY2FjaGUgPSB7fSwgayA9IHRoaXMuU3RyaW5nLCBsID0ge1xyXG5cdFx0XCI8XCI6IFwiJiM2MDtcIixcclxuXHRcdFwiPlwiOiBcIiYjNjI7XCIsXHJcblx0XHQnXCInOiBcIiYjMzQ7XCIsXHJcblx0XHRcIidcIjogXCImIzM5O1wiLFxyXG5cdFx0XCImXCI6IFwiJiMzODtcIlxyXG5cdH0sIG0gPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRcdHJldHVybiBcIltvYmplY3QgQXJyYXldXCIgPT09IHt9LnRvU3RyaW5nLmNhbGwoYSlcclxuXHRcdH0sIG4gPSBhLnV0aWxzID0ge1xyXG5cdFx0JGhlbHBlcnM6IHt9LCAkaW5jbHVkZTogZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuXHRcdFx0cmV0dXJuIGEgPSBmKGMsIGEpLCBnKGEsIGIpXHJcblx0XHR9LCAkc3RyaW5nOiBiLCAkZXNjYXBlOiBkLCAkZWFjaDogZVxyXG5cdH0sIG8gPSBhLmhlbHBlcnMgPSBuLiRoZWxwZXJzO1xyXG5cdGEuZ2V0ID0gZnVuY3Rpb24gKGEpIHtcclxuXHRcdHJldHVybiBqW2EucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpXVxyXG5cdH0sIGEuaGVscGVyID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdG9bYV0gPSBiXHJcblx0fSwgbW9kdWxlLmV4cG9ydHMgPSBhXHJcbn0oKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90bW9kanMtbG9hZGVyL3J1bnRpbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgOCAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMSAyMyAyNSAyNiAyNyAzMSAzMiAzMyAzNyAzOFxuICoqLyIsInZhciBjdXJyZW50U2hvd1N0dWRlbnRJZCA9IDA7ICAgIC8v5b2T5YmN5p+l55yL55qE5a2m55SfSURcclxudmFyIGN1cnJlbnRTdHVkZW50RGV0YWlsc0luZm8gPSBudWxsOyAgICAvL+W9k+WJjeeUqOaIt+ivpuaDheWOn+Wni+aVsOaNrlxyXG5cclxudmFyIGN1cnJlbnRFZHVUeXBlID0gMDsgICAvL+WtpuWItuS/oeaBr1xyXG52YXIgY3VycmVudFN0dVNleCA9IDA7ICAgIC8v5a2m55Sf5oCn5YirXHJcbnZhciBjdXJyZW50UmVsYXRpb25JZCA9IC0xOyAgICAgLy/lrrbplb/kv6Hmga/kuLTml7ZJRFxyXG5cclxuXHJcbi8v6I635Y+W5a2m55Sf6K+m57uG5pWw5o2uXHJcbmZ1bmN0aW9uIEdldFN0dWRlbnREZWF0YWlsc0RhdGEoKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnVXNlci9TdHVkZW50TWFuYWdlL0dldFN0dWRlbnREZXRhaWxzSW5mb1wiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgc3R1ZGVudElkOiBjdXJyZW50U2hvd1N0dWRlbnRJZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvL2RlYnVnZ2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuT0spIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHVkZW50RGV0YWlsc0luZm8gPSBkYXRhLkRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0dWRlbnREZXRhaWxzSW5mbyAhPSBudWxsICYmIGN1cnJlbnRTdHVkZW50RGV0YWlsc0luZm8gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBEZXRhaWxzVHBsID0gcmVxdWlyZShcIk9yZ1VzZXIvZWRpdHN0dWRlbnRkZXRhaWxzLnRwbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2RpdkVkaXRTdHVkZW50TWFpbkFyZWFcIikuaHRtbCh0ZW1wRGV0YWlsc1RwbChjdXJyZW50U3R1ZGVudERldGFpbHNJbmZvKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDnlKjmiLfnmoTljoblj7LmiJDnu6nkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0dWRlbnREZXRhaWxzSW5mby5TY29yZURldGFpbHMgIT0gbnVsbCAmJiBjdXJyZW50U3R1ZGVudERldGFpbHNJbmZvLlNjb3JlRGV0YWlscyAhPSB1bmRlZmluZWQgJiYgY3VycmVudFN0dWRlbnREZXRhaWxzSW5mby5TY29yZURldGFpbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFRvdGFsU2NvcmVTdHIgPSBcIjx0cj48dGQ+5ruh5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBDdXJyZW50U2NvcmVTdHIgPSBcIjx0cj48dGQ+5oiQ57upPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50U3R1ZGVudERldGFpbHNJbmZvLlNjb3JlRGV0YWlscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBTY29yZUluZm8gPSBjdXJyZW50U3R1ZGVudERldGFpbHNJbmZvLlNjb3JlRGV0YWlsc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wU2NvcmVJbmZvLlN1YmplY3RJRCA9PSBcIjAyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVG90YWxTY29yZVN0ciArPSBcIjx0ZD48aW5wdXQgc3ViamVjdElkPVxcXCIwMlxcXCIgc2NvcmVJZD1cXFwiXCIgKyB0ZW1wU2NvcmVJbmZvLlNjb3JlSWQgKyBcIlxcXCIgY2xhc3M9XFxcImlucHV0LXNtYWxsXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwiXCIgKyB0ZW1wU2NvcmVJbmZvLlRvdGFsU2NvcmUgKyBcIlxcXCIgLz7liIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJyZW50U2NvcmVTdHIgKz0gXCI8dGQ+PGlucHV0IHN1YmplY3RJZD1cXFwiMDJcXFwiIHNjb3JlSWQ9XFxcIlwiICsgdGVtcFNjb3JlSW5mby5TY29yZUlkICsgXCJcXFwiIGNsYXNzPVxcXCJpbnB1dC1zbWFsbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlwiICsgdGVtcFNjb3JlSW5mby5Vc2VyU2NvcmUgKyBcIlxcXCIgLz7liIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGVtcFNjb3JlSW5mby5TdWJqZWN0SUQgPT0gXCIwMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFRvdGFsU2NvcmVTdHIgKz0gXCI8dGQ+PGlucHV0IHN1YmplY3RJZD1cXFwiMDFcXFwiIHNjb3JlSWQ9XFxcIlwiICsgdGVtcFNjb3JlSW5mby5TY29yZUlkICsgXCJcXFwiIGNsYXNzPVxcXCJpbnB1dC1zbWFsbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlwiICsgdGVtcFNjb3JlSW5mby5Ub3RhbFNjb3JlICsgXCJcXFwiIC8+5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wQ3VycmVudFNjb3JlU3RyICs9IFwiPHRkPjxpbnB1dCBzdWJqZWN0SWQ9XFxcIjAxXFxcIiBzY29yZUlkPVxcXCJcIiArIHRlbXBTY29yZUluZm8uU2NvcmVJZCArIFwiXFxcIiBjbGFzcz1cXFwiaW5wdXQtc21hbGxcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcIiArIHRlbXBTY29yZUluZm8uVXNlclNjb3JlICsgXCJcXFwiIC8+5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBTY29yZUluZm8uU3ViamVjdElEID09IFwiMDNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUb3RhbFNjb3JlU3RyICs9IFwiPHRkPjxpbnB1dCBzdWJqZWN0SWQ9XFxcIjAzXFxcIiBzY29yZUlkPVxcXCJcIiArIHRlbXBTY29yZUluZm8uU2NvcmVJZCArIFwiXFxcIiBjbGFzcz1cXFwiaW5wdXQtc21hbGxcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcIiArIHRlbXBTY29yZUluZm8uVG90YWxTY29yZSArIFwiXFxcIiAvPuWIhjwvdGQ+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEN1cnJlbnRTY29yZVN0ciArPSBcIjx0ZD48aW5wdXQgc3ViamVjdElkPVxcXCIwM1xcXCIgc2NvcmVJZD1cXFwiXCIgKyB0ZW1wU2NvcmVJbmZvLlNjb3JlSWQgKyBcIlxcXCIgY2xhc3M9XFxcImlucHV0LXNtYWxsXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwiXCIgKyB0ZW1wU2NvcmVJbmZvLlVzZXJTY29yZSArIFwiXFxcIiAvPuWIhjwvdGQ+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZW1wU2NvcmVJbmZvLlN1YmplY3RJRCA9PSBcIjA0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVG90YWxTY29yZVN0ciArPSBcIjx0ZD48aW5wdXQgc3ViamVjdElkPVxcXCIwNFxcXCIgc2NvcmVJZD1cXFwiXCIgKyB0ZW1wU2NvcmVJbmZvLlNjb3JlSWQgKyBcIlxcXCIgY2xhc3M9XFxcImlucHV0LXNtYWxsXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwiXCIgKyB0ZW1wU2NvcmVJbmZvLlRvdGFsU2NvcmUgKyBcIlxcXCIgLz7liIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJyZW50U2NvcmVTdHIgKz0gXCI8dGQ+PGlucHV0IHN1YmplY3RJZD1cXFwiMDRcXFwiIHNjb3JlSWQ9XFxcIlwiICsgdGVtcFNjb3JlSW5mby5TY29yZUlkICsgXCJcXFwiIGNsYXNzPVxcXCJpbnB1dC1zbWFsbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlwiICsgdGVtcFNjb3JlSW5mby5Vc2VyU2NvcmUgKyBcIlxcXCIgLz7liIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGVtcFNjb3JlSW5mby5TdWJqZWN0SUQgPT0gXCIwNVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFRvdGFsU2NvcmVTdHIgKz0gXCI8dGQ+PGlucHV0IHN1YmplY3RJZD1cXFwiMDVcXFwiIHNjb3JlSWQ9XFxcIlwiICsgdGVtcFNjb3JlSW5mby5TY29yZUlkICsgXCJcXFwiIGNsYXNzPVxcXCJpbnB1dC1zbWFsbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlwiICsgdGVtcFNjb3JlSW5mby5Ub3RhbFNjb3JlICsgXCJcXFwiIC8+5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wQ3VycmVudFNjb3JlU3RyICs9IFwiPHRkPjxpbnB1dCBzdWJqZWN0SWQ9XFxcIjA1XFxcIiBzY29yZUlkPVxcXCJcIiArIHRlbXBTY29yZUluZm8uU2NvcmVJZCArIFwiXFxcIiBjbGFzcz1cXFwiaW5wdXQtc21hbGxcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcIiArIHRlbXBTY29yZUluZm8uVXNlclNjb3JlICsgXCJcXFwiIC8+5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBTY29yZUluZm8uU3ViamVjdElEID09IFwiMDZcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUb3RhbFNjb3JlU3RyICs9IFwiPHRkPjxpbnB1dCBzdWJqZWN0SWQ9XFxcIjA2XFxcIiBzY29yZUlkPVxcXCJcIiArIHRlbXBTY29yZUluZm8uU2NvcmVJZCArIFwiXFxcIiBjbGFzcz1cXFwiaW5wdXQtc21hbGxcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcIiArIHRlbXBTY29yZUluZm8uVG90YWxTY29yZSArIFwiXFxcIiAvPuWIhjwvdGQ+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEN1cnJlbnRTY29yZVN0ciArPSBcIjx0ZD48aW5wdXQgc3ViamVjdElkPVxcXCIwNlxcXCIgc2NvcmVJZD1cXFwiXCIgKyB0ZW1wU2NvcmVJbmZvLlNjb3JlSWQgKyBcIlxcXCIgY2xhc3M9XFxcImlucHV0LXNtYWxsXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwiXCIgKyB0ZW1wU2NvcmVJbmZvLlVzZXJTY29yZSArIFwiXFxcIiAvPuWIhjwvdGQ+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZW1wU2NvcmVJbmZvLlN1YmplY3RJRCA9PSBcIjA3XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVG90YWxTY29yZVN0ciArPSBcIjx0ZD48aW5wdXQgc3ViamVjdElkPVxcXCIwN1xcXCIgc2NvcmVJZD1cXFwiXCIgKyB0ZW1wU2NvcmVJbmZvLlNjb3JlSWQgKyBcIlxcXCIgY2xhc3M9XFxcImlucHV0LXNtYWxsXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwiXCIgKyB0ZW1wU2NvcmVJbmZvLlRvdGFsU2NvcmUgKyBcIlxcXCIgLz7liIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDdXJyZW50U2NvcmVTdHIgKz0gXCI8dGQ+PGlucHV0IHN1YmplY3RJZD1cXFwiMDdcXFwiIHNjb3JlSWQ9XFxcIlwiICsgdGVtcFNjb3JlSW5mby5TY29yZUlkICsgXCJcXFwiIGNsYXNzPVxcXCJpbnB1dC1zbWFsbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlwiICsgdGVtcFNjb3JlSW5mby5Vc2VyU2NvcmUgKyBcIlxcXCIgLz7liIY8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGVtcFNjb3JlSW5mby5TdWJqZWN0SUQgPT0gXCIwOFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFRvdGFsU2NvcmVTdHIgKz0gXCI8dGQ+PGlucHV0IHN1YmplY3RJZD1cXFwiMDhcXFwiIHNjb3JlSWQ9XFxcIlwiICsgdGVtcFNjb3JlSW5mby5TY29yZUlkICsgXCJcXFwiIGNsYXNzPVxcXCJpbnB1dC1zbWFsbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlwiICsgdGVtcFNjb3JlSW5mby5Ub3RhbFNjb3JlICsgXCJcXFwiIC8+5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wQ3VycmVudFNjb3JlU3RyICs9IFwiPHRkPjxpbnB1dCBzdWJqZWN0SWQ9XFxcIjA4XFxcIiBzY29yZUlkPVxcXCJcIiArIHRlbXBTY29yZUluZm8uU2NvcmVJZCArIFwiXFxcIiBjbGFzcz1cXFwiaW5wdXQtc21hbGxcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcIiArIHRlbXBTY29yZUluZm8uVXNlclNjb3JlICsgXCJcXFwiIC8+5YiGPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBTY29yZUluZm8uU3ViamVjdElEID09IFwiMDlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUb3RhbFNjb3JlU3RyICs9IFwiPHRkPjxpbnB1dCBzdWJqZWN0SWQ9XFxcIjA5XFxcIiBzY29yZUlkPVxcXCJcIiArIHRlbXBTY29yZUluZm8uU2NvcmVJZCArIFwiXFxcIiBjbGFzcz1cXFwiaW5wdXQtc21hbGxcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcIiArIHRlbXBTY29yZUluZm8uVG90YWxTY29yZSArIFwiXFxcIiAvPuWIhjwvdGQ+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEN1cnJlbnRTY29yZVN0ciArPSBcIjx0ZD48aW5wdXQgc3ViamVjdElkPVxcXCIwOVxcXCIgc2NvcmVJZD1cXFwiXCIgKyB0ZW1wU2NvcmVJbmZvLlNjb3JlSWQgKyBcIlxcXCIgY2xhc3M9XFxcImlucHV0LXNtYWxsXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwiXCIgKyB0ZW1wU2NvcmVJbmZvLlVzZXJTY29yZSArIFwiXFxcIiAvPuWIhjwvdGQ+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDooYzmoIfnrb5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFRvdGFsU2NvcmVTdHIgKz0gXCI8L3RyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wQ3VycmVudFNjb3JlU3RyICs9IFwiPC90cj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0YkVkaXRIaXN0b3J5U2NvcmVMaXN0ID50Ym9keVwiKS5odG1sKHRlbXBUb3RhbFNjb3JlU3RyICsgdGVtcEN1cnJlbnRTY29yZVN0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5re75Yqg55u45bqU55qE5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc3BTdHVkZW50U2V4IGlucHV0W25hbWU9J3NleCddXCIpLmNsaWNrKENoYW5nZVN0dWRlbnRTZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3NlbGVjdFN0dWRlbnRFZHVUeXBlXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFNlbGVjdGVkID0gJChcIiNzZWxlY3RTdHVkZW50RWR1VHlwZSBvcHRpb246c2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWR1VHlwZSA9IHBhcnNlSW50KHRlbXBTZWxlY3RlZC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2ltZ0FkZFJlbGF0aW9uSW5mb1wiKS5jbGljayhBZGRQYXJlbnRJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNidG5TYXZlU3R1ZGVudERldGFpbHNcIikuY2xpY2soU2F2ZVN0dWRlbnRFZGl0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYnRuQ2FuY2VsRWRpdFN0dWRlbnREZXRhaWxzXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvT3JnVXNlci9TdHVkZW50TWFuYWdlL1N0dWRlbnREZXRhaWxzSW5mbz9zdHVkZW50SWQ9XCIgKyBjdXJyZW50U2hvd1N0dWRlbnRJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y6G5Y+y5oiQ57up6L6T5YWl5qGG5Lit77yM5Y+q6IO96L6T5YWl5LiJ5L2N5pWw5a2XXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdGJFZGl0SGlzdG9yeVNjb3JlTGlzdCA+dGJvZHkgaW5wdXRcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSAkKHRoaXMpLnZhbCgpIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHYucmVwbGFjZSgvW15cXGR7M31dL2csICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykudmFsKHYuc3Vic3RyKDAsIDMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuQ29kZSA9PSBcIjExLTAwM1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUG9wdUNsaWVudC5Qb3BUaXBTaG93KFwi5Y+C5pWw6ZSZ6K+v77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5L+u5pS55a2m55Sf5oCn5YirXHJcbmZ1bmN0aW9uIENoYW5nZVN0dWRlbnRTZXgoKSB7XHJcbiAgICBjdXJyZW50U3R1U2V4ID0gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuZmluZChcImlucHV0W25hbWU9J3NleCddXCIpLmFkZENsYXNzKFwibWwxMFwiKTtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJtbDEwXCIpO1xyXG59XHJcblxyXG4vL+a3u+WKoOWutumVv+S/oeaBr1xyXG5mdW5jdGlvbiBBZGRQYXJlbnRJbmZvKCkge1xyXG4gICAgJChcIiNpbWdBZGRSZWxhdGlvbkluZm9cIikudW5iaW5kKFwiY2xpY2tcIik7XHJcbiAgICAkKFwiI2ltZ0FkZFJlbGF0aW9uSW5mb1wiKS5yZW1vdmUoKTtcclxuICAgIC8v5re75Yqg5paw6KGMXHJcbiAgICB2YXIgdGVtcE5ld1N0ciA9IFwiPHRyIHJlbGF0aW9uSWQ9XFxcIlwiICsgY3VycmVudFJlbGF0aW9uSWQgKyBcIlxcXCI+PHRkPjxpbnB1dCBjbGFzcz1cXFwiaW5wdXQtc21hbGwgdzY1XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwiXFxcIiBuYW1lPVxcXCJ0eHRSZWxhdGlvbkRlc2NcXFwiLz48L3RkPjx0ZD48aW5wdXQgY2xhc3M9XFxcImlucHV0LXNtYWxsIHc2NVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlxcXCIgIG5hbWU9XFxcInR4dFBhcmVudE5hbWVcXFwiLz48L3RkPjx0ZD48aW5wdXQgY2xhc3M9XFxcImlucHV0LXNtYWxsIHc5OFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlxcXCIgbmFtZT1cXFwidHh0UGFyZW50Sm9iXFxcIiAvPjwvdGQ+PHRkPjxpbnB1dCBjbGFzcz1cXFwiaW5wdXQtc21hbGwgdzExOFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlxcXCIgbmFtZT1cXFwidHh0UGFyZW50UGhvbmVcXFwiIC8+PC90ZD48dGQ+PGltZyBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzcmM9XFxcIkBCYXNlQ29uZmlnLkltZ1VybC9idW5kbGUvaW1nL2FkZC5wbmdcXFwiIGlkPVxcXCJpbWdBZGRSZWxhdGlvbkluZm9cXFwiLz48L3RkPjwvdHI+XCI7XHJcbiAgICAkKFwiI3RiUGFyZW50UmVsYXRpb25MaXN0IHRyOmxhc3RcIikuYWZ0ZXIodGVtcE5ld1N0cik7XHJcbiAgICBjdXJyZW50UmVsYXRpb25JZC0tO1xyXG4gICAgJChcIiNpbWdBZGRSZWxhdGlvbkluZm9cIikuY2xpY2soQWRkUGFyZW50SW5mbyk7XHJcbn1cclxuXHJcbi8v5L+d5a2Y5L+u5pS555qE5pWw5o2uXHJcbmZ1bmN0aW9uIFNhdmVTdHVkZW50RWRpdERhdGEoKSB7XHJcbiAgICAvL+mqjOivgeWQhOenjeaVsOaNrlxyXG4gICAgLy/lp5PlkI1cclxuICAgIHZhciB0ZW1wU3R1ZGVudE5hbWUgPSAkKFwiI3R4dFN0dWRlbnROYW1lXCIpLnZhbCgpO1xyXG4gICAgaWYgKHRlbXBTdHVkZW50TmFtZSA9PSBcIlwiIHx8IHRlbXBTdHVkZW50TmFtZSA9PSBudWxsIHx8IHRlbXBTdHVkZW50TmFtZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAkKFwiI2RpdlN0dU5hbWVFcnJUaXBcIikuc2hvdygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAodGVtcFN0dWRlbnROYW1lLmxlbmd0aCA+IDUgfHwgIS9eW2EtekEtWlxcdTRlMDAtXFx1OWZhNS8vZCtdKyQvLnRlc3QodGVtcFN0dWRlbnROYW1lKSkge1xyXG4gICAgICAgICQoXCIjZGl2U3R1TmFtZUVyclRpcFwiKS5zaG93KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2RpdlN0dU5hbWVFcnJUaXBcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgLy/nlJ/ml6VcclxuICAgIHZhciB0ZW1wU3R1QmlydGhEYXkgPSBcIlwiO1xyXG5cclxuICAgIC8v5omL5py65Y+356CBXHJcbiAgICB2YXIgdGVtcFN0dVBob25lID0gJChcIiN0eHRTdHVkZW50UGhvbmVcIikudmFsKCk7XHJcbiAgICB2YXIgbXlyZWcgPSAvXigoKDEzWzAtOV17MX0pfCgxNVswLTldezF9KXwoMThbMC05XXsxfSkpK1xcZHs4fSkkLztcclxuICAgIGlmICghbXlyZWcudGVzdCh0ZW1wU3R1UGhvbmUpKSB7XHJcbiAgICAgICAgJChcIiNkaXZTdHVQaG9uZUVyclRpcCBzcGFuOmZpcnN0XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICQoXCIjZGl2U3R1UGhvbmVFcnJUaXAgc3BhbjpmaXJzdFwiKS5zaWJsaW5ncygpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICQoXCIjZGl2U3R1UGhvbmVFcnJUaXBcIikuc2hvdygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNkaXZTdHVQaG9uZUVyclRpcFwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICAvL1FR5Y+356CBXHJcbiAgICB2YXIgdGVtcFN0dVFRID0gJChcIiN0eHRTdHVkZW50UVFcIikudmFsKCk7XHJcbiAgICBpZiAodGVtcFN0dVFRICE9IFwiXCIgJiYgdGVtcFN0dVFRICE9IG51bGwgJiYgdGVtcFN0dVFRICE9IHVuZGVmaW5lZCAmJiAhL15bMS05XVswLTldezQsMTN9JC8udGVzdCh0ZW1wU3R1UVEpKSB7XHJcbiAgICAgICAgJChcIiNkaXZTdHVQaG9uZUVyclRpcCBzcGFuOmxhc3RcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgJChcIiNkaXZTdHVQaG9uZUVyclRpcCBzcGFuOmxhc3RcIikuc2libGluZ3MoKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAkKFwiI2RpdlN0dVBob25lRXJyVGlwXCIpLnNob3coKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjZGl2U3R1UGhvbmVFcnJUaXBcIikuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5a2m5qCh5ZCN56ewXHJcbiAgICB2YXIgdGVtcFN0dVNjaG9vbE5hbWUgPSAkKFwiI3R4dFN0dWRlbnRTY2xOYW1lXCIpLnZhbCgpO1xyXG4gICAgaWYgKHRlbXBTdHVTY2hvb2xOYW1lICE9IFwiXCIgJiYgdGVtcFN0dVNjaG9vbE5hbWUgIT0gbnVsbCAmJiB0ZW1wU3R1U2Nob29sTmFtZSAhPSB1bmRlZmluZWQgJiYgdGVtcFN0dVNjaG9vbE5hbWUubGVuZ3RoID4gMTgpIHtcclxuICAgICAgICAkKFwiI2RpdlN0dVNjaG9vbEVyclRpcCBzcGFuOmZpcnN0XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICQoXCIjZGl2U3R1U2Nob29sRXJyVGlwIHNwYW46Zmlyc3RcIikuc2libGluZ3MoKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAkKFwiI2RpdlN0dVNjaG9vbEVyclRpcFwiKS5zaG93KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2RpdlN0dVNjaG9vbEVyclRpcFwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICAvL+aJgOWcqOePree6p+WQjeensFxyXG4gICAgdmFyIHRlbXBTdHVDbGFzc05hbWUgPSAkKFwiI3R4dFN0dWRlbnRDbGFzc05hbWVcIikudmFsKCk7XHJcbiAgICBpZiAodGVtcFN0dUNsYXNzTmFtZSAhPSBcIlwiICYmIHRlbXBTdHVDbGFzc05hbWUgIT0gbnVsbCAmJiB0ZW1wU3R1Q2xhc3NOYW1lICE9IHVuZGVmaW5lZCAmJiB0ZW1wU3R1Q2xhc3NOYW1lLmxlbmd0aCA+IDgpIHtcclxuICAgICAgICAkKFwiI2RpdlN0dVNjaG9vbEVyclRpcCBzcGFuOmxhc3RcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgJChcIiNkaXZTdHVTY2hvb2xFcnJUaXAgc3BhbjpsYXN0XCIpLnNpYmxpbmdzKCkuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgJChcIiNkaXZTdHVTY2hvb2xFcnJUaXBcIikuc2hvdygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNkaXZTdHVTY2hvb2xFcnJUaXBcIikuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6YKu566x5Zyw5Z2AXHJcbiAgICB2YXIgdGVtcFN0dUVtYWlsID0gJChcIiN0eHRTdHVkZW50RW1haWxcIikudmFsKCk7XHJcbiAgICBpZiAodGVtcFN0dUVtYWlsICE9IFwiXCIgJiYgdGVtcFN0dUVtYWlsICE9IG51bGwgJiYgdGVtcFN0dUVtYWlsICE9IHVuZGVmaW5lZCAmJiAhL14oW2EtekEtWjAtOV0rW198X3wuXT8pKlthLXpBLVowLTldK0AoW2EtekEtWjAtOV0rW198X3wuXT8pKlthLXpBLVowLTldK1xcLig/OmNvbXxjbikkLy50ZXN0KHRlbXBTdHVFbWFpbCkpIHtcclxuICAgICAgICAkKFwiI2RpdlN0dUVtYWlsRXJyVGlwXCIpLnNob3coKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjZGl2U3R1RW1haWxFcnJUaXBcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgLy/lrrbluq3kvY/lnYBcclxuICAgIHZhciB0ZW1wU3R1QWRkcmVzcyA9ICQoXCIjdHh0U3R1ZGVudEFkZHJcIikudmFsKCk7XHJcblxyXG4gICAgLy/ojrflj5blrrbluq3lhbPns7tcclxuICAgIHZhciB0ZW1wUGFyZW50RGF0YUFycmF5ID0gbmV3IEFycmF5KCk7ICAgLy/moLzlvI97XCJSZWxhdGlvbklkXCI6MCxcIlJlbGF0aW9uRGVzY1wiOlwiXCIsXCJQYXJlbnROYW1lXCI6XCJcIixcIlBhcmVudEpvYlwiOlwiXCIsXCJQYXJlbnRQaG9uZVwiOlwiXCJ9XHJcbiAgICB2YXIgcmVsYXRpb25Jc0Vycm9yID0gZmFsc2U7ICAgIC8v5YWz57O75piv5ZCm5pyJ6ZSZ6K+vXHJcbiAgICAkKFwiI3RiUGFyZW50UmVsYXRpb25MaXN0ID50Ym9keT50clwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGVtcFBEYXRhID0ge307XHJcbiAgICAgICAgdGVtcFBEYXRhLlJlbGF0aW9uSWQgPSBwYXJzZUludCgkKHRoaXMpLmF0dHIoXCJyZWxhdGlvbklkXCIpKTtcclxuICAgICAgICB0ZW1wUERhdGEuUmVsYXRpb25EZXNjID0gJCh0aGlzKS5maW5kKFwiaW5wdXRbbmFtZT0ndHh0UmVsYXRpb25EZXNjJ11cIikudmFsKCk7XHJcbiAgICAgICAgaWYgKHRlbXBQRGF0YS5SZWxhdGlvbkRlc2MubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICByZWxhdGlvbklzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBQRGF0YS5QYXJlbnROYW1lID0gJCh0aGlzKS5maW5kKFwiaW5wdXRbbmFtZT0ndHh0UGFyZW50TmFtZSddXCIpLnZhbCgpO1xyXG4gICAgICAgIGlmICh0ZW1wUERhdGEuUGFyZW50TmFtZS5sZW5ndGggPiA2KSB7XHJcbiAgICAgICAgICAgIHJlbGF0aW9uSXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGVtcFBEYXRhLlBhcmVudEpvYiA9ICQodGhpcykuZmluZChcImlucHV0W25hbWU9J3R4dFBhcmVudEpvYiddXCIpLnZhbCgpO1xyXG4gICAgICAgIGlmICh0ZW1wUERhdGEuUGFyZW50Sm9iLmxlbmd0aCA+IDEyKSB7XHJcbiAgICAgICAgICAgIHJlbGF0aW9uSXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGVtcFBEYXRhLlBhcmVudFBob25lID0gJCh0aGlzKS5maW5kKFwiaW5wdXRbbmFtZT0ndHh0UGFyZW50UGhvbmUnXVwiKS52YWwoKTtcclxuICAgICAgICBpZiAoIW15cmVnLnRlc3QodGVtcFBEYXRhLlBhcmVudFBob25lKSkge1xyXG4gICAgICAgICAgICByZWxhdGlvbklzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBQYXJlbnREYXRhQXJyYXkucHVzaCh0ZW1wUERhdGEpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAocmVsYXRpb25Jc0Vycm9yKSB7XHJcbiAgICAgICAgUG9wdUNsaWVudC5Qb3BUaXBTaG93KFwi5a625bqt5YWz57O76L6T5YWl5pyJ6K+v77yM6K+35qOA5p+l77yBXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluWOhuWPsuWIhuaVsFxyXG4gICAgdmFyIHRlbXBIb3N0b3J5U2NvcmVBcnJheSA9IG5ldyBBcnJheSgpOyAgIC8v5qC85byPOntcIlNjb3JlSWRcIjowLFwiU3ViamVjdElEXCI6XCJcIixcIlN1YmplY3REZXNjXCI6XCJcIixcIlVzZXJTY29yZVwiOjAsXCJUb3RhbFNjb3JlXCI6MH1cclxuICAgIC8v6I635Y+W5oC75YiGXHJcbiAgICAkKFwiI3RiRWRpdEhpc3RvcnlTY29yZUxpc3QgPnRib2R5PnRyOmZpcnN0XCIpLmZpbmQoXCJpbnB1dFt0eXBlPSd0ZXh0J11cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRlbXBTY29yZURhdGEgPSB7fTtcclxuICAgICAgICB0ZW1wU2NvcmVEYXRhLlNjb3JlSWQgPSBwYXJzZUludCgkKHRoaXMpLmF0dHIoXCJzY29yZUlkXCIpKTtcclxuICAgICAgICB0ZW1wU2NvcmVEYXRhLlN1YmplY3RJRCA9ICQodGhpcykuYXR0cihcInN1YmplY3RJZFwiKTtcclxuICAgICAgICB0ZW1wU2NvcmVEYXRhLlN1YmplY3REZXNjID0gXCJcIjtcclxuICAgICAgICB0ZW1wU2NvcmVEYXRhLlVzZXJTY29yZSA9IDA7XHJcbiAgICAgICAgdGVtcFNjb3JlRGF0YS5Ub3RhbFNjb3JlID0gcGFyc2VGbG9hdCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB0ZW1wSG9zdG9yeVNjb3JlQXJyYXkucHVzaCh0ZW1wU2NvcmVEYXRhKTtcclxuICAgIH0pO1xyXG4gICAgLy/ojrflj5blrabnlJ/liIbmlbBcclxuICAgICQoXCIjdGJFZGl0SGlzdG9yeVNjb3JlTGlzdCA+dGJvZHk+dHI6bGFzdFwiKS5maW5kKFwiaW5wdXRbdHlwZT0ndGV4dCddXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ZW1wU2NvcmVJZCA9IHBhcnNlSW50KCQodGhpcykuYXR0cihcInNjb3JlSWRcIikpO1xyXG4gICAgICAgIHZhciB0ZW1wU3ViSWQgPSAkKHRoaXMpLmF0dHIoXCJzdWJqZWN0SWRcIik7XHJcbiAgICAgICAgdmFyIHRlbXBVc2VyU2NvcmUgPSBwYXJzZUZsb2F0KCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcEhvc3RvcnlTY29yZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wSG9zdG9yeVNjb3JlQXJyYXlbaV0uU2NvcmVJZCA9PSB0ZW1wU2NvcmVJZCAmJiB0ZW1wSG9zdG9yeVNjb3JlQXJyYXlbaV0uU3ViamVjdElEID09IHRlbXBTdWJJZCkge1xyXG4gICAgICAgICAgICAgICAgdGVtcEhvc3RvcnlTY29yZUFycmF5W2ldLlVzZXJTY29yZSA9IHRlbXBVc2VyU2NvcmU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy/kv53lrZhcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9PcmdVc2VyL1N0dWRlbnRNYW5hZ2UvRWRpdFN0dWRlbnREZXRhaWxzSW5mb1wiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgc3R1ZGVudElkOiBjdXJyZW50U2hvd1N0dWRlbnRJZCxcclxuICAgICAgICAgICAgc3R1ZGVudE5hbWU6IHRlbXBTdHVkZW50TmFtZSxcclxuICAgICAgICAgICAgc3R1ZGVudFNleDogY3VycmVudFN0dVNleCxcclxuICAgICAgICAgICAgc3R1ZGVudEJpcnRoZGF5OiB0ZW1wU3R1QmlydGhEYXksXHJcbiAgICAgICAgICAgIGVkdVR5cGU6IGN1cnJlbnRFZHVUeXBlLFxyXG4gICAgICAgICAgICBwaG9uZU51bTogdGVtcFN0dVBob25lLFxyXG4gICAgICAgICAgICBRUU51bTogdGVtcFN0dVFRLFxyXG4gICAgICAgICAgICBzY2hvb2xOYW1lOiB0ZW1wU3R1U2Nob29sTmFtZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiB0ZW1wU3R1Q2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBlbWFpbEFkZHI6IHRlbXBTdHVFbWFpbCxcclxuICAgICAgICAgICAgYWRkcmVzczogdGVtcFN0dUFkZHJlc3MsXHJcbiAgICAgICAgICAgIHBhcmVudHNMaXN0OiB0ZW1wUGFyZW50RGF0YUFycmF5LFxyXG4gICAgICAgICAgICBzY29yZURldGFpbHM6IHRlbXBIb3N0b3J5U2NvcmVBcnJheVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvL2RlYnVnZ2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuT0spIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLkRhdGEgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9PcmdVc2VyL1N0dWRlbnRNYW5hZ2UvU3R1ZGVudERldGFpbHNJbmZvP3N0dWRlbnRJZD1cIiArIGN1cnJlbnRTaG93U3R1ZGVudElkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBQb3B1Q2xpZW50LlBvcFRpcFNob3coZGF0YS5SZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgUG9wdUNsaWVudC5Qb3BUaXBTaG93KGRhdGEuUmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+mhtemdouWKoOi9veWujOaIkOWQjuS6i+S7tlxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIGN1cnJlbnRTaG93U3R1ZGVudElkID0gJChcIiNoaWRTaG9TdHVkZW50SWRcIikudmFsKCk7XHJcbiAgICAvL+mhtemdouWKoOi9veWujOaIkOWQju+8jOiOt+WPlueUqOaIt+ivpue7huaVsOaNrlxyXG4gICAgR2V0U3R1ZGVudERlYXRhaWxzRGF0YSgpO1xyXG4gICAgLy/mt7vliqDkuovku7ZcclxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmdVc2VyL2VkaXRzdHVkZW50ZGV0YWlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDI1XG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnVXNlci9lZGl0c3R1ZGVudGRldGFpbHMnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVzY2FwZT0kdXRpbHMuJGVzY2FwZSxTdHVkZW50QWNjb3VudD0kZGF0YS5TdHVkZW50QWNjb3VudCxFeHBpcmVUaW1lPSRkYXRhLkV4cGlyZVRpbWUsU3R1ZGVudE5hbWU9JGRhdGEuU3R1ZGVudE5hbWUsU3R1ZGVudFNleD0kZGF0YS5TdHVkZW50U2V4LFBob25lTnVtPSRkYXRhLlBob25lTnVtLFFRTnVtPSRkYXRhLlFRTnVtLFNjaG9vbE5hbWU9JGRhdGEuU2Nob29sTmFtZSxDbGFzc05hbWU9JGRhdGEuQ2xhc3NOYW1lLEVtYWlsQWRkcj0kZGF0YS5FbWFpbEFkZHIsQWRkcmVzcz0kZGF0YS5BZGRyZXNzLCRlYWNoPSR1dGlscy4kZWFjaCxDbGFzc1R5cGVMaXN0PSRkYXRhLkNsYXNzVHlwZUxpc3QsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRvdXQ9Jyc7JG91dCs9JyA8ZGl2IGNsYXNzPVwidHJpYW5nbGUtYmdcIj48L2Rpdj4gPGRpdiBjbGFzcz1cInVzZXItaW5mby1kZXRhaWxcIj4gPGRpdiBjbGFzcz1cInVzZXItZGV0YWlsLWJnXCI+PC9kaXY+IDxkaXYgY2xhc3M9XCJmb250MTIgbXQxMlwiPiDotKblj7fvvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoU3R1ZGVudEFjY291bnQpO1xuJG91dCs9JzwvaT4gPC9kaXY+IDxkaXYgY2xhc3M9XCJmb250MTIgbXQxMlwiPiDliLDmnJ/ml6XmnJ/vvJo8aSBjbGFzcz1cImJsYWNrXCI+JztcbiRvdXQrPSRlc2NhcGUoRXhwaXJlVGltZSk7XG4kb3V0Kz0nPC9pPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XCJkZXRhaWwtY29udGVudFwiPiA8ZGl2PiDlp5PlkI0gPGlucHV0IGNsYXNzPVwiaW5wdXQtc21hbGwgdzg4XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWnk+WQjVwiIHZhbHVlPVwiJztcbiRvdXQrPSRlc2NhcGUoU3R1ZGVudE5hbWUpO1xuJG91dCs9J1wiIGlkPVwidHh0U3R1ZGVudE5hbWVcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVwidGlwc1wiIGlkPVwiZGl2U3R1TmFtZUVyclRpcFwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPiA8ZGl2IGNsYXNzPVwibmFtZS10aXAgZXJyb3ItdGlwXCI+6L6T5YWl5L+h5oGv5pyJ6K+v77yBPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiaXRlbVwiPiA8c3BhbiBjbGFzcz1cInNleCBtcjIwXCIgaWQ9XCJzcFN0dWRlbnRTZXhcIj4g5oCn5Yir77yaICc7XG5pZihTdHVkZW50U2V4PT0wKXtcbiRvdXQrPScgPGxhYmVsPiA8aW5wdXQgY2xhc3M9XCJibGFjayBtaWRkbGUgbWwxMFwiIG5hbWU9XCJzZXhcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjFcIi8+IDxpIGNsYXNzPVwiYmxhY2tcIj4g55S3IDwvaT4gPC9sYWJlbD4gPGxhYmVsPiA8aW5wdXQgY2xhc3M9XCJibGFjayBtaWRkbGVcIiBuYW1lPVwic2V4XCIgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD1cImNoZWNrZWRcIiB2YWx1ZT1cIjBcIi8+IDxpIGNsYXNzPVwiYmxhY2tcIj4g5aWzIDwvaT4gPC9sYWJlbD4gJztcbn1lbHNle1xuJG91dCs9JyA8bGFiZWw+IDxpbnB1dCBjbGFzcz1cImJsYWNrIG1pZGRsZSBcIiBuYW1lPVwic2V4XCIgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD1cImNoZWNrZWRcIiB2YWx1ZT1cIjFcIi8+IDxpIGNsYXNzPVwiYmxhY2tcIj4g55S3IDwvaT4gPC9sYWJlbD4gPGxhYmVsPiA8aW5wdXQgY2xhc3M9XCJibGFjayBtaWRkbGUgbWwxMFwiIG5hbWU9XCJzZXhcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjBcIi8+IDxpIGNsYXNzPVwiYmxhY2tcIj4g5aWzIDwvaT4gPC9sYWJlbD4gJztcbn1cbiRvdXQrPScgPC9zcGFuPiDnlJ/ml6U6ICA8L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4g6KeS6Imy77yaIDxpIGNsYXNzPVwiYmxhY2sgbXIyMFwiPuWtpueUnzwvaT4g5a2m5Yi277yaIDxzZWxlY3QgY2xhc3M9XCJzZWxlY3RcIiBpZD1cInNlbGVjdFN0dWRlbnRFZHVUeXBlXCI+IDxvcHRpb24gdmFsdWU9XCIwXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPuWFreS4ieWItjwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMFwiPuS6lOWbm+WItjwvb3B0aW9uPiA8L3NlbGVjdD4gPC9kaXY+IDxkaXY+IOaJi+acuuWPt+egge+8miA8aW5wdXQgY2xhc3M9XCJ3MTE4IGlucHV0LXNtYWxsIG1yMjBcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5omL5py65Y+356CBXCIgdmFsdWU9XCInO1xuJG91dCs9JGVzY2FwZShQaG9uZU51bSk7XG4kb3V0Kz0nXCIgaWQ9XCJ0eHRTdHVkZW50UGhvbmVcIi8+IFFR77yaIDxpbnB1dCBjbGFzcz1cInFxIGlucHV0LXNtYWxsIGJsYWNrXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVRUei0puWPt1wiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCInO1xuJG91dCs9JGVzY2FwZShRUU51bSk7XG4kb3V0Kz0nXCIgaWQ9XCJ0eHRTdHVkZW50UVFcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVwidGlwc1wiIGlkPVwiZGl2U3R1UGhvbmVFcnJUaXBcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj4gPHNwYW4gY2xhc3M9XCJwaG9uZS10aXAgZXJyb3ItdGlwIGxlZnRcIj7mgqjovpPlhaXnmoTkv6Hmga/mnInor68hPC9zcGFuPiA8c3BhbiBjbGFzcz1cInFxLXRpcCBlcnJvci10aXAgcmlnaHRcIj7mgqjovpPlhaXnmoTkv6Hmga/mnInor688L3NwYW4+IDwvZGl2PiA8ZGl2PiDmiYDlnKjlrabmoKHvvJogPGlucHV0IGNsYXNzPVwiaW5wdXQtc21hbGwgdzExOCBtcjIwXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWtpuagoeWQjeensFwiIHZhbHVlPVwiJztcbiRvdXQrPSRlc2NhcGUoU2Nob29sTmFtZSk7XG4kb3V0Kz0nXCIgaWQ9XCJ0eHRTdHVkZW50U2NsTmFtZVwiLz4g5omA5Zyo54+t57qn77yaIDxpbnB1dCBjbGFzcz1cImlucHV0LXNtYWxsIHcxMThcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5omA5Zyo54+t57qnXCIgdmFsdWU9XCInO1xuJG91dCs9JGVzY2FwZShDbGFzc05hbWUpO1xuJG91dCs9J1wiIGlkPVwidHh0U3R1ZGVudENsYXNzTmFtZVwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XCJ0aXBzXCIgaWQ9XCJkaXZTdHVTY2hvb2xFcnJUaXBcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj4gPHNwYW4gY2xhc3M9XCJzY2hvb2wtdGlwIGVycm9yLXRpcCBsZWZ0XCI+5oKo6L6T5YWl55qE5L+h5oGv5pyJ6K+vITwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJncmFkZS10aXAgZXJyb3ItdGlwIHJpZ2h0XCI+5oKo6L6T5YWl55qE5L+h5oGv5pyJ6K+vPC9zcGFuPiA8L2Rpdj4gPGRpdj4g6YKu566x5Zyw5Z2A77yaIDxpbnB1dCBjbGFzcz1cImVtYWlsIGlucHV0LXNtYWxsIGJsYWNrXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXpgq7nrrHlnLDlnYBcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJztcbiRvdXQrPSRlc2NhcGUoRW1haWxBZGRyKTtcbiRvdXQrPSdcIiBpZD1cInR4dFN0dWRlbnRFbWFpbFwiIC8+IDwvZGl2PiA8ZGl2IGNsYXNzPVwidGlwc1wiIGlkPVwiZGl2U3R1RW1haWxFcnJUaXBcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj4gPHNwYW4gY2xhc3M9XCJlbWFpbC10aXAgZXJyb3ItdGlwIGxlZnRcIj7mgqjovpPlhaXnmoTkv6Hmga/mnInor68hPC9zcGFuPiA8L2Rpdj4gPGRpdj4g5a625bqt5L2P5Z2A77yaIDxpbnB1dCBjbGFzcz1cImhvbWUtYWRkcmVzcyBpbnB1dC1zbWFsbCBibGFja1wiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5a625bqt5L2P5Z2AXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIic7XG4kb3V0Kz0kZXNjYXBlKEFkZHJlc3MpO1xuJG91dCs9J1wiIGlkPVwidHh0U3R1ZGVudEFkZHJcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVwidGlwc1wiIGlkPVwiZGl2U3R1QWRkckVyclRpcFwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPiA8c3BhbiBjbGFzcz1cImhvbWUtYWRkcmVzcy10aXAgZXJyb3ItdGlwIGxlZnRcIj7mgqjovpPlhaXnmoTkv6Hmga/mnInor68hPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPGRpdiBjbGFzcz1cIm1iMTVcIj7lt7LmiqXlrabnp5HvvJo8L2Rpdj4gPHRhYmxlIGNsYXNzPVwic21hbGwtdGFibGVcIj4gPHRoZWFkPiA8dHI+IDx0aD7lrabnp5E8L3RoPiA8dGg+57G75Z6LPC90aD4gPHRoPuihpeivvuiAgeW4iDwvdGg+IDx0aD7liankvZnor77ml7Y8L3RoPiA8dGg+5oql54+t5pe26Ze0PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiAnO1xuJGVhY2goQ2xhc3NUeXBlTGlzdCxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPHRyPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkJpZ0dyYWRlRGVzYyk7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdWJqZWN0RGVzYyk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5DbGFzc1R5cGVEZXNjKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkNsYXNzTmFtZSk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG5pZigkdmFsdWUuU3VycGx1c0NsYXNzSG91ciA+MCl7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TdXJwbHVzQ2xhc3NIb3VyKTtcbiRvdXQrPSfor77ml7YnO1xufWVsc2V7XG4kb3V0Kz0n5bey57uT6K++Jztcbn1cbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkNyZWF0ZUNsYXNzRGF0ZSk7XG4kb3V0Kz0nPC90ZD4gPC90cj4gJztcbn0pO1xuJG91dCs9JyA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1cIj4gPGRpdiBjbGFzcz1cIm1iMTVcIj7lrrbplb/kv6Hmga/vvJo8L2Rpdj4gPHRhYmxlIGNsYXNzPVwic21hbGwtdGFibGVcIiBpZD1cInRiUGFyZW50UmVsYXRpb25MaXN0XCI+IDx0aGVhZD4gPHRyPiA8dGg+5YWz57O7PC90aD4gPHRoPuWnk+WQjTwvdGg+IDx0aD7lt6XkvZzljZXkvY08L3RoPiA8dGg+6IGU57O75pa55byPPC90aD4gPHRoPjwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gJztcbiRlYWNoKENsYXNzVHlwZUxpc3QsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDx0ciByZWxhdGlvbklkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlJlbGF0aW9uSWQpO1xuJG91dCs9J1wiPiA8dGQ+IDxpbnB1dCBjbGFzcz1cImlucHV0LXNtYWxsIHc2NVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuUmVsYXRpb25EZXNjKTtcbiRvdXQrPSdcIiBuYW1lPVwidHh0UmVsYXRpb25EZXNjXCIvPiA8L3RkPiA8dGQ+IDxpbnB1dCBjbGFzcz1cImlucHV0LXNtYWxsIHc2NVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuUGFyZW50TmFtZSk7XG4kb3V0Kz0nXCIgbmFtZT1cInR4dFBhcmVudE5hbWVcIi8+IDwvdGQ+IDx0ZD4gPGlucHV0IGNsYXNzPVwiaW5wdXQtc21hbGwgdzk4XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5QYXJlbnRKb2IpO1xuJG91dCs9J1wiIG5hbWU9XCJ0eHRQYXJlbnRKb2JcIiAvPiA8L3RkPiA8dGQ+IDxpbnB1dCBjbGFzcz1cImlucHV0LXNtYWxsIHcxMThcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlBhcmVudFBob25lKTtcbiRvdXQrPSdcIiBuYW1lPVwidHh0UGFyZW50UGhvbmVcIiAvPiA8L3RkPiA8dGQ+IDxpbWcgY2xhc3M9XCJjdXJzb3JcIiBzcmM9XCJAQmFzZUNvbmZpZy5JbWdVcmwvYnVuZGxlL2ltZy9hZGQucG5nXCIgaWQ9XCJpbWdBZGRSZWxhdGlvbkluZm9cIi8+IDwvdGQ+IDwvdHI+ICc7XG59KTtcbiRvdXQrPScgPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxkaXYgY2xhc3M9XCJpdGVtXCI+IDxkaXYgY2xhc3M9XCJtYjE1XCI+5YWl5a2m5YmN5Li76KaB5a2m56eR5oiQ57up77yaPC9kaXY+IDx0YWJsZSBjbGFzcz1cInNtYWxsLXRhYmxlXCIgaWQ9XCJ0YkVkaXRIaXN0b3J5U2NvcmVMaXN0XCI+IDx0aGVhZD4gPHRyPiA8dGg+56eR55uuPC90aD4gPHRoPuaVsOWtpjwvdGg+IDx0aD7or63mloc8L3RoPiA8dGg+6Iux6K+tPC90aD4gPHRoPueJqeeQhjwvdGg+IDx0aD7ljJblraY8L3RoPiA8dGg+5Zyw55CGPC90aD4gPHRoPuWOhuWPsjwvdGg+IDx0aD7mlL/msrs8L3RoPiA8dGg+55Sf54mpPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHI+IDx0ZD7mu6HliIY8L3RkPiA8dGQ+IDxpbnB1dCBzdWJqZWN0SWQ9XCIwMlwiIHNjb3JlSWQ9XCIwXCIgY2xhc3M9XCJpbnB1dC1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIwXCIgLz7liIYgPC90ZD4gPHRkPiA8aW5wdXQgc3ViamVjdElkPVwiMDFcIiBzY29yZUlkPVwiMFwiIGNsYXNzPVwiaW5wdXQtc21hbGxcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiMFwiIC8+5YiGIDwvdGQ+IDx0ZD4gPGlucHV0IHN1YmplY3RJZD1cIjAzXCIgc2NvcmVJZD1cIjBcIiBjbGFzcz1cImlucHV0LXNtYWxsXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIjBcIiAvPuWIhiA8L3RkPiA8dGQ+IDxpbnB1dCBzdWJqZWN0SWQ9XCIwNFwiIHNjb3JlSWQ9XCIwXCIgY2xhc3M9XCJpbnB1dC1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIwXCIgLz7liIYgPC90ZD4gPHRkPiA8aW5wdXQgc3ViamVjdElkPVwiMDVcIiBzY29yZUlkPVwiMFwiIGNsYXNzPVwiaW5wdXQtc21hbGxcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiMFwiIC8+5YiGIDwvdGQ+IDx0ZD4gPGlucHV0IHN1YmplY3RJZD1cIjA2XCIgc2NvcmVJZD1cIjBcIiBjbGFzcz1cImlucHV0LXNtYWxsXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIjBcIiAvPuWIhiA8L3RkPiA8dGQ+IDxpbnB1dCBzdWJqZWN0SWQ9XCIwN1wiIHNjb3JlSWQ9XCIwXCIgY2xhc3M9XCJpbnB1dC1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIwXCIgLz7liIYgPC90ZD4gPHRkPiA8aW5wdXQgc3ViamVjdElkPVwiMDhcIiBzY29yZUlkPVwiMFwiIGNsYXNzPVwiaW5wdXQtc21hbGxcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiMFwiIC8+5YiGIDwvdGQ+IDx0ZD4gPGlucHV0IHN1YmplY3RJZD1cIjA5XCIgc2NvcmVJZD1cIjBcIiBjbGFzcz1cImlucHV0LXNtYWxsXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIjBcIiAvPuWIhiA8L3RkPiA8L3RyPiA8dHI+IDx0ZD7miJDnu6k8L3RkPiA8dGQ+IDxpbnB1dCBzdWJqZWN0SWQ9XCIwMlwiIHNjb3JlSWQ9XCIwXCIgY2xhc3M9XCJpbnB1dC1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIwXCIgLz7liIYgPC90ZD4gPHRkPiA8aW5wdXQgc3ViamVjdElkPVwiMDFcIiBzY29yZUlkPVwiMFwiIGNsYXNzPVwiaW5wdXQtc21hbGxcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiMFwiIC8+5YiGIDwvdGQ+IDx0ZD4gPGlucHV0IHN1YmplY3RJZD1cIjAzXCIgc2NvcmVJZD1cIjBcIiBjbGFzcz1cImlucHV0LXNtYWxsXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIjBcIiAvPuWIhiA8L3RkPiA8dGQ+IDxpbnB1dCBzdWJqZWN0SWQ9XCIwNFwiIHNjb3JlSWQ9XCIwXCIgY2xhc3M9XCJpbnB1dC1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIwXCIgLz7liIYgPC90ZD4gPHRkPiA8aW5wdXQgc3ViamVjdElkPVwiMDVcIiBzY29yZUlkPVwiMFwiIGNsYXNzPVwiaW5wdXQtc21hbGxcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiMFwiIC8+5YiGIDwvdGQ+IDx0ZD4gPGlucHV0IHN1YmplY3RJZD1cIjA2XCIgc2NvcmVJZD1cIjBcIiBjbGFzcz1cImlucHV0LXNtYWxsXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIjBcIiAvPuWIhiA8L3RkPiA8dGQ+IDxpbnB1dCBzdWJqZWN0SWQ9XCIwN1wiIHNjb3JlSWQ9XCIwXCIgY2xhc3M9XCJpbnB1dC1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIwXCIgLz7liIYgPC90ZD4gPHRkPiA8aW5wdXQgc3ViamVjdElkPVwiMDhcIiBzY29yZUlkPVwiMFwiIGNsYXNzPVwiaW5wdXQtc21hbGxcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiMFwiIC8+5YiGIDwvdGQ+IDx0ZD4gPGlucHV0IHN1YmplY3RJZD1cIjA5XCIgc2NvcmVJZD1cIjBcIiBjbGFzcz1cImlucHV0LXNtYWxsXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIjBcIiAvPuWIhiA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XCJoYW5kbGUgbWI0MFwiPiA8c3BhbiBjbGFzcz1cInN1Ym1pdFwiIGlkPVwiYnRuU2F2ZVN0dWRlbnREZXRhaWxzXCI+5L+d5a2YPC9zcGFuPiA8c3BhbiBjbGFzcz1cImNhbmNlbCBtbDQwXCIgaWQ9XCJidG5DYW5jZWxFZGl0U3R1ZGVudERldGFpbHNcIj7lj5bmtog8L3NwYW4+IDwvZGl2Pic7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ1VzZXIvZWRpdHN0dWRlbnRkZXRhaWxzLnRwbFxuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDI1XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==