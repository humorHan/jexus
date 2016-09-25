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
                    var tempDetailsTpl = require("OrgUser/editstudentdetails.tpl");
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