var userSex = "";
var userBirthday;
var u = require("popup/popuptip.js");
var module = function () {
    this.init = function () {
        //todo 逻辑函数 
        if (window.location.href.toLowerCase().indexOf("editbaseinfo") > 0)
        {
            OnIDCard();
            OnBind();            
            BindSex();
            BindSave();
        }
        else
        {
            OnEdit();
        }      
    };
    var OnIDCard = function () {
        var txts = document.getElementsByName("idcard");
        OnID(txts,function(i){
            var _o = this;
            this.onkeyup = function ()
            {
                if (i == 0)
                {
                    if (_o.value.length >= 5) {
                        if (txts[i + 1]) {
                            txts[i + 1].focus();
                            //txts[i].setAttribute("readOnly", true);
                        }
                    }
                    else {
                        _o.value = _o.value.slice(0, 5);
                    }
                }
                if(i==1)
                {
                    if (_o.value.length >= 8) {
                        if (txts[i + 1]) {
                            txts[i + 1].focus();
                            //txts[i].setAttribute("readOnly", true);
                        }
                    }
                    else {
                        _o.value = _o.value.slice(0, 8);
                    }
                }
                if (i == 2) {
                    if (_o.value.length >=4) {
                        //txts[i].setAttribute("readOnly", true);
                        txts[i].blur();
                    }
                    else {
                        _o.value = _o.value.slice(0, 4);
                    }
                }
               
            }
        });
       
    };
    var OnID = function (arr, fn) {
        for(var i=0,len=arr.length;i<len;i++)
        {
            fn.call(arr[i], i, arr);
        }
    };
    var OnBind = function () {
        var Sex = $("#usersex").val();
        var Age = $("#userage").val();
        if (Sex == "女")
        {
            $("#rbFemale").attr("checked", true);
            userSex = "1";
        }
        if (Sex == "男")
        {
            userSex = "0";
            $("#rbMale").attr("checked", true);
        }
       
        //$('#datetimepicker').datetimepicker({
        //    format: "m月d日", timepicker: false, todayButton: true, onSelectDate: function (selDate) {
        //        userBirthday = selDate.getFullYear() + "-" + (selDate.getMonth() + 1) + "-" + selDate.getDate();
        //    }
        //});
        //if (Age != undefined && Age != "") {
        //    userBirthday = Age;
        //    Age = Age.replace(/-/g, "/");
        //    var date1 = new Date(Age);
        //    $('#datetimepicker').val((date1.getMonth() + 1) + "月" + date1.getDate() + "日");
        //} else {
        //    var date2 = new Date();
        //    userBirthday = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate();
        //    $('#datetimepicker').val((date2.getMonth() + 1) + "月" + date2.getDate() + "日");
        //}
       
    };
    var BindSex = function () {
        $('#rbMale').click(function () {
            userSex = "0";
        });

        $('#rbFemale').click(function () {
            userSex = "1";
        });
    };
    var BindSave = function () {
        $("#btnSave").click(function () {
            if (!CheckMail($("#mail").val())) {
                // u.PopTipShow("邮箱格式不正确");
                alert("邮箱格式不正确");
                return;
            }
            if (!CheckIDCard($("#idcard1").val() + $("#idcard2").val() + $("#idcard3").val())) {
                // u.PopTipShow("身份证格式不正确");
                alert("身份证格式不正确");
                return;
            }
            $.ajax({
                url: "/OrgUserCenter/User/UpdateUserBaseInfo",
                data: {
                    sex: userSex,
                    birthday: userBirthday,
                    mail: $("#mail").val(),
                    idcard: $("#idcard1").val() + $("#idcard2").val() + $("#idcard3").val()
                },
                dataType: "json",
                type: "post",
                success: function (e) {
                    location.href = "/OrgUserCenter/User/BaseInfo";
                }
            });
        });
    };
    var OnEdit = function () {
        $("#editPointer").click(function () {
            location.href = "/OrgUserCenter/User/EditBaseInfo";
        });
    };
    var CheckMail = function (obj) {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(obj))
        {
            return false;
        }
        return true;
    };
    var CheckIDCard = function (obj) {
        var reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
       
        if(!reg.test(obj))
        {
            return false;
        }
        return true;
    };
   
};

//绑定数据
$(function () {
    new module().init();
    // module.init(); 
});