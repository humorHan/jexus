
var tplTable = require("OrgEvaluation/SignUp.tpl");
require("check/jquery.validate.min.js");
var pop = require("popup/popuptip.js");
var module = {
    init: function () {
        //todo 逻辑函数
        //this.loadOrgMsg();
        this.render();
        this.initBtns();

    },

    render: function () {
        //机构名赋值
        $.ajax({
            type: "post",
            url: "/OrgTeachWork/Organization/GetOrgMsg",
            dataType: "json",
            data: {

            },
            success: function (data) {
                if (data.result.Data) {
                    $("#orgName").html(data.result.Data.OrgName);
                    //$("#AreaCount").html(data.result.Data.AreaCount);

                    //loadCounselors();

                }
                else {


                }
            }
        });



    },
    initBtns: function () {

        //activenow

        //立即激活,请求数据绑定
        $('.sign-up-box').delegate("#activenow", "click", function () {

            $("#accountlist").removeClass("hidden");
            //加载数据
            //accountlist
            $.ajax({
                type: "post",
                url: "/OrgZiXun/ZiXunGuanLi/GetOrgLeftStuAccount",
                dataType: "json",
                data: {

                },
                success: function (data) {
                    debugger;
                    if (data.result.Data) {
                        $("#accountlist").html(tplTable(data.result.Data));//绑定账号
                    }
                    else {


                    }
                }
            });


        });
        //不是立即激活
        $('.sign-up-box').delegate("#activelate", "click", function () {

            $("#accountlist").addClass("hidden");//隐藏账号列表

        });

        //保存按钮进行点击（下一步）
        //$('.sign-up-box').delegate("#btnsave", "click", function () {

        //    alert("进行验证数据保存数据");

        //});



    }


};



//绑定数据
$(function () {
    module.init();
    validateData();
    OptSave();
});


//保存数据的验证
function OptSave() {
    $("#btnsave").click(function () {
        if ($("#form1").valid()) {
            // submitResult();
            var option = {};
            option.StuName = $("#StuName").val();
            option.Phone = $("#Phone").val();
            option.Email = $("#Email").val();
            option.ClassType = $("input[name='classtype']:checked").val();
            option.GradeType = $("#GradeType").val();
            option.EduType = $("input[name='edutype']:checked").val();
            option.Subject = $("#Subject").val();
            option.ClassHour = $("#ClassHour").val();
            option.IsActive = $("input[name='activetype']:checked").val();
            option.AcccountId = $("#schstrs").val();
            debugger;
            $.ajax({
                type: "post",
                url: "/Area/Exam/SaveStuContract",///OrgTeachWork/Organization/AddArea  //"/Area/Exam/SaveStuContract"
                dataType: "json",
                data: {
                    data: JSON.stringify(option)
                },
                success: function (data) {//data.result;  

                    alert("处理成功");

                }
            });
            document.location.reload();

            $(".createArea").hide();
        }

    });



}

// 手机号码验证
jQuery.validator.addMethod("phone", function (value, element) {
    var length = value.length;
    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, '<span class="alert-error">请输入正确手机号码！</span>');


///验证数据
function validateData() {
    $("#form1").validate({
        submitHandler: function () {

        },
        rules: {
            Name: {
                required: true,
                rangelength: [1, 5]
            },
            Phone: {
                required: true,
                phone: true
            },
            Email: {
                required: true,
                email: true
            },
            ClassHour: {
                required: true,
                range: [0, 9999]
            }
        },
        messages: {
            Name:
            {
                required: '<span class="alert-error">学生姓名不能为空！</span>',
                rangelength: '<span class="alert-error">学生姓名最长15个字!</span>'
            },
            Phone: {
                required: '<span class="alert-error">手机号码不能为空！</span>',
                phone: '<span class="alert-error">请输入正确手机号码！</span>'
            },
            Email: {
                required: '<span class="alert-error">邮箱不能为空！</span>',
                email: '<span class="alert-error">请输入正确邮箱地址！</span>'
            },
            ClassHour: {
                required: '<span class="alert-error">课时不能为空！</span>',
                range: '<span class="alert-error">课时只能是小于9999数字！</span>'
            }
        }
    });
}

