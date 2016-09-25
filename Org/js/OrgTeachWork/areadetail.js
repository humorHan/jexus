
var tplTable = require("OrgTeachWork/areadetail.tpl");
var pop = require("./PopCommon.js");
var module = {
    init: function () {

        //todo 逻辑函数
        this.render();

        this.initBtns();

    },
    //获取校区绑定
    render: function () {
        $.ajax({
            type: "post",
            url: "/OrgTeachWork/Organization/GetSchoolByArea",
            dataType: "json",
            data: {
                "AreaId": $("#areaid").val()
            },
            success: function (data) {
                if (data.result.Data) {

                    $("#areaname").html(data.result.Data[0].AreaName);
                    $("#managername").html(data.result.Data[0].ManageName);


                    var scids = "";
                    $.each(data.result.Data, function () {
                        scids += this.SchoolId;
                        scids += ",";


                    });
                    if (scids.length > 1) {
                        scids = scids.substring(0, scids.length - 1);
                    }

                    $("#schoolIds").val(scids);//赋一个学校id隐藏值

                    $("#d-schools").html(tplTable(data.result));
                }
                else {

                }
            }
        });

    },
    initBtns: function () {
        //todo 绑定事件

        //委托删除学校
        $('#d-schools').delegate(".deletesch", "click", function () {
            var id = "s" + this.id;
            $("#" + id).remove();
        });
    }


};

//绑定数据
$(function () {
    module.init();

    OptBtn();//初始化button
    OptAreaName();
    SubScOk();
    SubManOk();
    SubAreaOk();

});

//修改区域名
function OptAreaName() {

    $("#editimg").click(function () {

        $("#editimg").hide();
        $("#areaname").hide();
        $("#editok").show();
        $("#uareaname").show();


    });


}


//点击学校确定
function SubScOk() {

    $("#addScSub").click(function () {
        var str = "";//已选择的校区id
        $("#scList :checkbox").each((function () {

            if ($(this).is(":checked")) {
                str += this.id.replace("chk", "");
                str += ",";
            }

        }));

        if (str.length > 1) {
            str = str.substring(0, str.length - 1);//学校ids
        }
        var option = {};
        option.AreaId = $("#areaid").val();//大区id
        option.SchoolIds = str;

        $.ajax({
            type: "post",
            url: "/OrgTeachWork/Organization/AddSchoolForArea",
            dataType: "json",
            data: {
                data: JSON.stringify(option)
            },
            success: function () {//data.result;  

                //alert("处理成功");

                pop.PopTipShow('恭喜您，添加校区名成功!');
                setTimeout(pop.PopTipHide, 2000);
            }
        });


        //$(".addSc").hide();


    });

}


//点击经理确定
function SubManOk() {

    $("#addManSub").click(function () {

        var mangerId = $("#managerid").val();//经理id
        var option = {
        };
        option.AreaId = $("#areaid").val();//大区id
        option.ManagerId = mangerId;

        $.ajax({
            type: "post",
            url: "/OrgTeachWork/Organization/UpdateManageForArea",
            dataType: "json",
            data: {
                data: JSON.stringify(option)
            },
            success: function () {//data.result;  
               
                pop.PopTipShow('恭喜您，修改经理成功!');
                setTimeout(pop.PopTipHide, 2000);

            }
        });
        


    });

}


//点击大区名确定
function SubAreaOk() {

    $("#editok").click(function () {

        var areaName = $("#uareaname").val();//大区名
        var option = {
        };
        option.AreaId = $("#areaid").val();//大区id
        option.AreaName = areaName;

        //校验
        if (areaName.length < 1) {
            pop.PopTipShow('不能为空!');
            //alert("不能为空");
            return;

        }
        $.ajax({
            type: "post",
            url: "/OrgTeachWork/Organization/UpdateNameForArea",
            dataType: "json",
            data: {
                data: JSON.stringify(option)
            },
            success: function () {//data.result; 
                document.location.reload();


            }
        });



    });

}
//加载展示学校
function ShowSchs() {
    $.ajax({
        type: "post",
        url: "/OrgTeachWork/Organization/GetSchoolByArea",
        dataType: "json",
        data: {
            "AreaId": $("#areaid").val()

        },
        success: function (data) {

            if (data.result.Data) {
                $("#d-schools").html(tplTable(data.result));
            }
            else {

            }
        }
    });


}

//加载展示学校结束


//加载经理列表
function OptMans() {


    $.ajax({
        type: "post",
        url: "/OrgTeachWork/Organization/GetManageByOrg",
        dataType: "json",
        data: {

        },
        success: function (data) {

            if (data.result.Data) {
                var manName = $("#managername").text();//经理名

                var jlhtml = "";
                for (var key in data.result.Data) {
                    if (data.result.Data[key].ManageId != undefined) {
                        //jlhtml += '<li id="' + data.result.Data[key].ManageId + '">' + data.result.Data[key].ManageName + '</li>';
                        if (data.result.Data[key].ManageName == manName) {
                            jlhtml += '<option  selected="selected" value="' + data.result.Data[key].ManageId + '">' + data.result.Data[key].ManageName + '</option>';

                        } else {
                            jlhtml += '<option value="' + data.result.Data[key].ManageId + '">' + data.result.Data[key].ManageName + '</option>';
                        }


                    }
                }
                $("#managerid").html(jlhtml);

            }
            else {


            }
        }
    });

}
//加载经理结束

//加载学校列表
function OptScs() {
    $.ajax({
        type: "post",
        url: "/OrgTeachWork/Organization/GetSchoolsByOrgId",
        dataType: "json",
        data: {
            OrgId: 1

        },
        success: function (data) {//data.result;
            var schtml = "";
            var alChks = $("#schoolIds").val();

            for (var key in data.result.Data) {
                if (data.result.Data[key].SchoolName != undefined) {
                    if (alChks.indexOf(data.result.Data[key].SchoolId) != -1) {
                        schtml += ' <p class="mb10" ><input type="checkbox" checked="checked" class="mr20" id="chk' + data.result.Data[key].SchoolId + '">' + BindStrCut(data.result.Data[key].SchoolName) + '<br> </p>';

                    } else {
                        schtml += ' <p class="mb10" ><input type="checkbox" class="mr20" id="chk' + data.result.Data[key].SchoolId + '">' + BindStrCut(data.result.Data[key].SchoolName) + '<br> </p>';
                    }


                }
            }
            $("#scList").html(schtml);
            OptStrCut();

        }
    });

}
//加载学校列表结束


//处理按钮
function OptBtn() {

    $("#deleteSc").click(function () {
        var areaIdStr = $("#areaid").val();//区域id
        window.location.href = '/OrgTeachWork/Organization/OrgDeleteSchoolList?AreaId=' + areaIdStr;

    });
    //添加校区
    $("#addSc").click(function () {
        $(".pop-mask").show();
        $(".add-sch").show();
        OptScs();

    });
    //修改经理
    $("#updateMan").click(function () {
        $(".pop-mask").show();
        $(".addman").show();
        OptMans();
    });
    //自定义下拉列表框开始
    //$(".sele-text").click(function () {

    //    var listbox = $(".listbox");
    //    listbox.show();
    //    var li = listbox.find("li");
    //    for (var i = 0; i < li.length; i++) {
    //        li.eq(i).click(function () {
    //            var a = $(this).text();
    //            var b = this.id;

    //            $(".sele-text").text(a);
    //            $("#mangehi").val(b);
    //            listbox.hide();
    //        });
    //    }
    //});
    //自定义下拉列表框结束
    //处理自定义下拉框的事件
    $(document).click(function (event) {

        if (event.target.nodeName.toLowerCase() == "img") {

        } else {
            //对修改的进行更改
            $("#editimg").show();
            $("#areaname").show();
            $("#editok").hide();
            $("#uareaname").hide();

        }


    });


}





///处理截断字符串
function BindStrCut(obj) {

    if (obj.length > 4) {
        obj = obj.substring(0, 4) + "...";
        return obj;
    }
    return obj;


};
//截断字符串
function OptStrCut() {
    //弹出框截字处理开始

    var li = $(".schright li");
    for (var i = 0; i < li.length; i++) {
        if (li.eq(i).find(".schname").text() > 4) {
            var text = li.eq(i).find(".schname").text().substring(0, 4);
            li.eq(i).find(".schname").text(text + "...");
        }
    }

}