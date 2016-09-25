
var tplTable = require("OrgTeachWork/areadeletesc.tpl");
var pop = require("popup/popuptip.js");
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
            var id ="s"+ this.id;
            $("#"+id).remove();
        });
    }


};
///保存数据
function OptSave() {
    $("#btnSave").click(function () {
        var schoolIds = "";

        var dele = $(".deletesch");
       
        $.map(dele, function (item) {
            schoolIds += item.id;
            schoolIds += ",";
        });
        if (schoolIds.length > 1) {
            schoolIds = schoolIds.substring(0, schoolIds.length - 1);
        }
        //删除大区下面学校
        var option = {};
        option.AreaID = $("#areaid").val();
        option.SchoolIds = schoolIds;
        $.post("/OrgTeachWork/Organization/DeleteSchoolByArea", { "data": JSON.stringify(option) }, function () {
            //alert("删除成功");
            pop.PopTipShow('恭喜您，修改校区成功!');
            setTimeout(pop.PopTipHide, 2000);
            //$("#oktip").show();
        }, "json");


    });


    
}


///取消删除
function OptCancel() {
   
    $("#btnCancel").click(function () {
        document.location.reload();
    });
}


//点击大区名确定
function SubAreaOk() {

    $("#editok").click(function () {

        var areaName = $("#uareaname").val();//经理id
        var option = {};
        option.AreaId = $("#areaid").val();//大区id
        option.AreaName = areaName;
       
        //校验
        if (areaName.length < 1) {

            alert("不能为空");
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

                //alert("处理成功");
               
                $("#oktip").show();
                document.location.reload();

                $(".addman").hide();

            }
        });



    });

}
//绑定数据
$(function () {
    module.init();
    OptBtn();
    OptSave();
    OptCancel();
    SubAreaOk();
});

//处理按钮
function OptBtn() {

    ///修改区域名
    $("#editimg").click(function () {

        $("#editimg").hide();
        $("#areaname").hide();
        $("#editok").show();
        $("#uareaname").show();


    });

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



