var currentShowStudentId = 0;    //当前查看的学生ID
var currentStudentDetailsInfo = null;    //当前用户详情原始数据
var PopuClient = require("popup/popuptip.js");

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
                    var tempDetailsTpl = require("OrgUser/studentdetails.tpl");
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