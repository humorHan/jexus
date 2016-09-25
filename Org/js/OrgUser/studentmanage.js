var Paginator = require('Paginator.js');      //分页导航
var PopuClient = require("popup/popuptip.js");     //弹出框
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
                            var tempStuListTpl = require("OrgUser/allstudentlist.tpl");
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
                            var tempStuListTpl = require("OrgUser/schoolstulistlist.tpl");
                            $("#tbStudentList").html(tempStuListTpl(studentInfo.StudentInfoList));
                            $("#selectClassType").change(function () {
                                var tempSelected = $("#selectClassType option:selected");
                                currentClassType = parseInt(tempSelected.val());
                                GetStudentList();
                            });
                        }
                        else if (studentInfo.RoleId == 4) {
                            var tempStuListTpl = require("OrgUser/managerstulist.tpl");
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
                            var tempStuListTpl = require("OrgUser/ownstudentlist.tpl");
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
                    var schoolTreeTpl = require("OrgUser/studymanangerlist.tpl");
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
                        var lessenListTpl = require("OrgUser/stulessonlist.tpl");
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
            var tempLessonInfoTpl = require("OrgUser/updatelessondata.tpl");
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
    var tempLessonInfoTpl = require("OrgUser/addlessondata.tpl");
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
        var tempRenewUserTpl = require("OrgUser/renewstudentlist.tpl");
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
                        var tempBatchTpl = require("Org/batchslist.tpl");
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
                    var batchListTpl = require("Org/batchslist.tpl");
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
                    var tempBatchTpl = require("Org/accountdetailslist.tpl");
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