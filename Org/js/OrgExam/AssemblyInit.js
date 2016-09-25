var date = new Date().getHours();
var tplPoint = require("OrgExam/pointlist.tpl");
var lastGrade = '0';//第一次
var para = { SubjectID: 3, StageID: 'x', GradeID: 1, data: '', PaperName: '' };

var module = function () {
    this.init = function () {
        //todo 逻辑函数 
        LoadSubjectByGrade(1, this);
        onClickPara();
        onClickPara2();
        LoadPointList();
        $("#M1").text(GetInfo());
        $("#X").text();
        onNextClick();
    };
    var GetInfo = function () {
        return date >= 5 && date < 8 ? "早上好"
            : date >= 8 && date < 12 ? "上午好"
            : date >= 12 && date < 13 ? "中等好"
            : date >= 13 && date < 18 ? "下午好"
            : "晚上好";
    };
    var onClickPara = function () {
        $("#GradeID li").click(function () {
            var gradeid = $(this).attr("data-areaid");
            para.StageID = $(this).attr("data-a");
            para.GradeID = $(this).attr("data-areaid");
            LoadSubjectByGrade(gradeid, this);
            onClickParaItem(this);
        });
    };
    var onClickPara2 = function () {
        $("#SubjectID li").click(function () {
            SubjectID = $(this).attr("data-areaid");
            //点击年级加载科目
            onClickParaItem(this);

        });
    };
    var onClickParaItem = function (obj) {
        $(obj).siblings().removeClass("active");//遍历
       
        $(obj).addClass("active");
        if ($(obj).attr("data-a")) {
            para.GradeID = $(obj).attr("data-areaid");
            para.StageID = $(obj).attr("data-a");
            para.SubjectID = $("#SubjectID li").filter('li[class="active"]').attr("data-areaid");
        }
        else {
            para.SubjectID = $(obj).attr("data-areaid");
        }
       
        LoadPointList();//获取知识点
    };
    var LoadSubjectByGrade = function (gradeid, obj) //加载有效科目
    {
        var subject1 = $('<li data-areaid="2" class="active">数学</li><li data-areaid="3">英语</li><li data-areaid="4">物理</li><li data-areaid="5">化学</li>');
        var subject2 = $('<li data-areaid="14" class="active">奥数</li><li data-areaid="3">英语</li>');
        var subject3 = $('<li data-areaid="3" class="active">英语</li>');
        $("#SubjectID").html("");

        if (parseInt(gradeid) >= 1 && parseInt(gradeid) <= 2) {
            $("#SubjectID").append(subject3);
        }
        else if (parseInt(gradeid) >= 1 && parseInt(gradeid) <= 5) {

            $("#SubjectID").append(subject2);

        } else if (parseInt(gradeid) == 6) {

            $("#SubjectID").append(subject2);

        } else if (parseInt(gradeid) > 6) {
            $("#SubjectID").append(subject1);
        }
        onClickPara2();
    };
    var LoadPointList = function () {
      
        $.ajax({
            type: "post",
            url: "/OrgExam/CreateExam/GetMixInit",
            dataType: "json",
            data: {
                StageID: para.StageID,
                SubjectID: para.SubjectID,
                edu: para.edu,
                artScience: para.artScience
            },
            success: function (data) {
                if (data) {
                    $("#Points").html(tplPoint(data.N));
                    $("#N1").html(data.N.N1 + 1);
                    $("#N2").html(data.N.N2);
                    onBandPoint();
                }
                else {
                    $("#tableID").html("");
                }
            }
        });
    };
    var onBandPoint = function () {
        $("#Points li").click(function () {
            if ($(this).hasClass("active")) {
                $(this).removeAttr("class");
            }
            else {
                $(this).attr({ "class": "active" });
            }
        });
    };
    var onNextClick = function () {
       
        $("#next").click(function () {

            var value = $("#papername").val(); // 获取值
            value = $.trim(value); // 用jQuery的trim方法删除前后空格
            if (value == '') {// 判断是否是空字符串，而不是null
                alert("输入不能为空!");
                return;
            } else {
                para.PaperName = value;
            }
            var t = [];
            $("#Points li").each(function (i, j) {
                if ($(this).hasClass("active")) {
                    var PointsModel = {};
                    PointsModel.PointID = $(j).attr("data-value");
                    PointsModel.PointName = $(j).text();
                    t.push(PointsModel);
                }
            });
            if (t.length == 0) {
                alert("请选择知识点!");
                return;
            }
            para.data = JSON.stringify(t);

            $.ajax({
                type: "post",
                url: "/OrgExam/CreateExam/SaveBookExam",
                dataType: "json",
                data: {
                    StageID: para.StageID,
                    GradeID: para.GradeID,
                    SubjectID: para.SubjectID,
                    name: para.PaperName,
                    data: para.data
                },
                success: function (data) {
                    if (data.OK) {
                        var ExamID = data.ID;
                       // alert(JSON.stringify(data));
                        location.href = "/OrgExam/CreateExam/FilterTest?U=M&ExamID=" + data.ID + "&SubjectID=" + para.SubjectID + "&StageID=" + para.StageID;
                    }
                    else {
                    }
                }
            });
           
           
        });
    };

 
}

//绑定数据
$(function () {
    new module().init();
});