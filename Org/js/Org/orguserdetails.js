var currentShowUserId = 0;   //当前显示的用户的ID
var PopuClient = require("popup/popuptip.js");    //弹出框
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
                    var tempDetailsTpl = require("Org/orguserdetail.tpl");
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
        var tempEditDetailsTpl = require("Org/editorguserdetail.tpl");
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
            var tempDetailsTpl = require("Org/orguserdetail.tpl");
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
                    var tempDetailsTpl = require("Org/orguserdetail.tpl");
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
                    var schoolTreeTpl = require("Org/schooltreelist.tpl");
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
                    var tempDetailsTpl = require("Org/orguserdetail.tpl");
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
                    var tempDetailsTpl = require("Org/orguserdetail.tpl");
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