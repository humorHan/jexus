
var tplTable = require("OrgTeachWork/areadeletesc.tpl");
var pop = require("OrgTeachWork/PopCommon.js");
 require("upload/ajaxfileupload.js");
var module = {
    init: function () {

        //todo 逻辑函数
        this.render();
        this.initBtns();

    },
    //对页面的数据进行绑定
    render: function () {
        $.ajax({
            type: "post",
            url: "/OrgSystemSet/OrgSet/PersonalSetGet",
            dataType: "json",
            data: {
                //后天获取机构id

            },
            success: function (data) {

                if (data.result.Data) {
                   
                    //赋值
                    $("#img0").attr("src", data.result.Data.LogoUrl);
                    $("#img1").attr("src", data.result.Data.CyclePic1);
                    $("#img2").attr("src", data.result.Data.CyclePic2);
                    $("#img3").attr("src", data.result.Data.CyclePic3);
                    $("#companyPhone").val(data.result.Data.CompanyPhone);
                    $("#companySite").val(data.result.Data.CompanySite);
                    $("#companyDayBeg").val(data.result.Data.CompanyDayBeg);
                    $("#companyDayEnd").val(data.result.Data.CompanyDayEnd);
                    $("#commpanyTimeBeg").val(data.result.Data.CommpanyTimeBeg);
                    $("#commpanyTimeEnd").val(data.result.Data.CommpanyTimeEnd);

                }
                else {

                }
            }
        });

    },
    initBtns: function () {
        //todo 绑定事件

        //进行跳转
        $('#main-content-wrapper').delegate("#orgset", "click", function () {

            window.location.href = "/OrgSystemSet/OrgSet/OrgSet";
        });
        //删除图片
        $("#main-content-wrapper").delegate(".dele-img", "click", function () {
           
            var idNum = this.id.replace("deimg", "");
            var localImg = "../../../bundle/img/upload.png"; //本地图片展示
            $("#img" + idNum).attr("src", localImg);
            $("#deimg" + idNum).css("display", "none");

        });

        //进行跳转
        $('#main-content-wrapper').delegate("#uploadPic1", "change", function () {
            FileUpload('1');
        }).delegate("#uploadPic2", "change", function () {
            FileUpload('2');
        }).delegate("#uploadPic3", "change", function () {
                FileUpload('3');
            }).delegate("#uploadPic0", "change", function () {
                FileUpload('0');
            });
    }


};


//绑定数据
$(function () {
    module.init();
    OptImg();
    OptSave();
    //FileUpload();

});
exports.FileUpload = FileUpload;

///保存数据
function OptSave() {

    $("#btnSave").click(function () {
        //组装数据，进行传递
        var LogoUrl = $("#img0")[0].src;
        var CyclePic1 = $("#img1")[0].src;
        var CyclePic2 = $("#img2")[0].src;
        var CyclePic3 = $("#img3")[0].src;
        var CompanyPhone = $("#companyPhone").val();
        var CompanySite = $("#companySite").val();
        var CompanyDayBeg = $("#companyDayBeg").val();
        var CompanyDayEnd = $("#companyDayEnd").val();
        var CommpanyTimeBeg = $("#commpanyTimeBeg").val();
        var CommpanyTimeEnd = $("#commpanyTimeEnd").val();
        var option = {};
        option.LogoUrl = LogoUrl;
        option.CyclePic1 = CyclePic1;
        option.CyclePic2 = CyclePic2;
        option.CyclePic3 = CyclePic3;
        option.CompanyPhone = CompanyPhone;
        option.CompanySite = CompanySite;
        option.CompanyDayBeg = CompanyDayBeg;
        option.CompanyDayEnd = CompanyDayEnd;
        option.CommpanyTimeBeg = CommpanyTimeBeg;
        option.CommpanyTimeEnd = CommpanyTimeEnd;
       
        if (chkForm('companyPhone') == false) {
           
            return;//校验可以都封装到里面
        }

        $.ajax({
            type: "post",
            url: "/OrgSystemSet/OrgSet/PersonalSetSave",
            dataType: "json",
            data: {
                data: JSON.stringify(option)
            },
            success: function () { //data.result;

                alert("处理成功");

                //$("#oktip").show();
                document.location.reload();

                $(".addman").hide();

            }
        });

       
    });


}
//图片上传
function FileUpload(type) {
    $.ajaxFileUpload
    (
        {
            url: '/OrgSet/Upload', //用于文件上传的服务器端请求地址
            type: 'post',
            data: {}, //此参数非常严谨，写错一个引号都不行
            secureuri: false, //一般设置为false
            fileElementId: 'uploadPic' + type, //文件上传空间的id属性  <input type="file" id="file" name="file" />
            dataType: 'JSON', //返回值类型 一般设置为json
            success: function (data) //服务器成功响应处理函数
            {

                if (data.Result != "ok") {
                    flag = false;
                    //alert(data.Result);
                    if (type==0) {
                        $("#imgtip0" ).html('<p class="alert-error mb10 "><b>提示： 上传失败！</b> ' + data.Result + '</p>');
                    } else {
                        $("#imgtip1").html('<p class="alert-error mb10 "><b>提示： 上传失败！</b> ' + data.Result + '</p>');
                        
                    }
                    $("#deimg" + type).css("display", "none");
                    return;
                }
                $("#img" + type).attr("src", data.imgPath1);
                if (typeof (data.error) != 'undefined') {
                    if (data.error != '') {
                        alert(data.error);
                    } else {
                        alert(data.msg);
                    }
                }
            },
            error: function (data, status, e) //服务器响应失败处理函数
            {
                alert(e);
            }
        }
    );

    $("#deimg" + type).css("display", "block");
    return false;
}

//加载点击事件
function OptImg() {
    
    $("#img0").click(function () {
        $("#uploadPic0").click();
    });
    $("#img1").click(function () {
        $("#uploadPic1").click();
    });
    $("#img2").click(function () {
        $("#uploadPic2").click();
    });

    $("#img3").click(function () {
        $("#uploadPic3").click();
    });


}


//校验是不是电话
function IsMobile(obj) {
    return (/^1[3|4|5|7|8]\d{9}$/.test(obj));
}
function IsTel(obj) {
    return (/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(obj));
}
//校验是不是电话
function chkForm(obj) {
    var tel = $("#" + obj).val();
   
    if (IsMobile(tel) || IsTel(tel)) {
        return true;
    } else {
        $("#phonetip").html('<p class="alert-error mb10 "><b>提示： </b>' + '请输入正确的手机号码或电话号码\n\n例如:13916752109或0712-3614072！' + '</p>');
        $("#companyPhone").focus();
        return false;
    }

}


