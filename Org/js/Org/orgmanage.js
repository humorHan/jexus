var Paginator = require('Paginator.js');
var PopuClient = require("popup/popuptip.js");
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
                    var schoolTreeTpl = require("Org/schooltreelist.tpl");
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
                        var userListTpl = require("Org/alluserlist.tpl");
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
                        var userListTpl = require("Org/teacherlist.tpl");
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
                var userListTpl = require("Org/orgrolelist.tpl");
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
                    var subjectListTpl = require("Org/subjectslist.tpl");
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
                    var batchListTpl = require("Org/batchslist.tpl");
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
                    var batchListTpl = require("Org/batchslist.tpl");
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
                    var tempBatchTpl = require("Org/accountdetailslist.tpl");
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
        var tempRenewUserTpl = require("Org/renewuserlist.tpl");
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
                        var tempBatchTpl = require("Org/batchslist.tpl");
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