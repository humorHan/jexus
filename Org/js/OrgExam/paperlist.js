var Paginator = require('Paginator.js');
var tplTable = require("OrgExam/paperlist.tpl");
var para = { SubjectID: 0, StageID: 0, GradeID: 0, data: '', PageIndex: 1, PageSize:10,ExamName:'',ExamCode:'' };
var u = require("popup/popuptip.js");
var module = function () {
    this.init = function () {
        //todo 逻辑函数  
        CreateExam();
        loadPaperList(1);
        Search();
        SearchKeyPress();
        onClickPara();
        onClickPara2();    
    };
    var paging = function (page) {
       
        loadPaperList(page);
    };
    var loadPaperList = function (page) {
        var tThis = this;
        $.ajax({
            type: "post",
            url: "/OrgExam/CreateExam/GetSubIndex",
            dataType: "json",
            data: {
                StageID: para.StageID,
                GradeID: para.GradeID,
                SubjectID: para.SubjectID,
                ExamName: para.ExamName,
                ExamCode:para.ExamCode,
                PageIndex: page,
                PageSize: para.PageSize
            },
            success: function (data) {
                if (data) {                 
                    $("#tableID tbody").html(tplTable(data.List));
                    var temp = data.Count;                 
                    Paginator.Paginator(para.PageSize, page, temp, paging);
                    OnCliDelete();
                }
                else {
                    $("#tableID tbody").html(tplTable(data.List));
                }
            }
        });

    };
    var onClickPara = function () {
        $("#GradeID li").click(function () {  
            var gradeid = $(this).attr("data-areaid");
            LoadSubjectByGrade(gradeid, this);
            onClickParaItem(this);
        });
    };
    var onClickPara2 = function ()
    {
        $("#SubjectID li").click(function () {
            //点击年级加载科目
            onClickParaItem(this);

        });
    };
    var onClickParaItem = function (obj)
    {
        $(obj).siblings().removeClass("active");//便利
        $(obj).addClass("active");
        if ($(obj).attr("data-a")) {
            para.GradeID = $(obj).attr("data-areaid");
            para.StageID = $(obj).attr("data-a");
            para.SubjectID = $("#SubjectID li").filter('li[class="active"]').attr("data-areaid");
        }
        else {
            para.SubjectID = $(obj).attr("data-areaid");
        }
        loadPaperList(1);
    };
    var LoadSubjectByGrade = function (gradeid, obj) //加载有效科目
    {
        var all = $('<li data-areaid="0" class="active">全部</li>');
        var subject1 = $('<li data-areaid="2">数学</li><li data-areaid="3">英语</li><li data-areaid="4">物理</li><li data-areaid="5">化学</li>');
        var subject2 = $('<li data-areaid="14"">奥数</li><li data-areaid="3">英语</li>');
        var subject3 = $('<li data-areaid="3">英语</li>');
        $("#SubjectID").html("");
        if (parseInt(gradeid) == 0) {
            $("#SubjectID").append(all);
            $("#SubjectID").append(subject2);
            $("#SubjectID").append(subject1);
        }
        else if (parseInt(gradeid) >= 1 && parseInt(gradeid) <= 2) {
            $("#SubjectID").append(all);
            $("#SubjectID").append(subject3);
        }
        else if (parseInt(gradeid) >= 1 && parseInt(gradeid) <= 5) {
            $("#SubjectID").append(all);
            $("#SubjectID").append(subject2);

        } else if (parseInt(gradeid) == 6) {
            $("#SubjectID").append(all);
            $("#SubjectID").append(subject2);
       
        } else if (parseInt(gradeid) > 6) {
            $("#SubjectID").append(all);
       
            $("#SubjectID").append(subject1);
        }
        onClickPara2();
    }
    var OnCliDelete = function () {

        $("#tableID").find("tr").each(function () {
            // alert("xx");
            //var tdArr = $(this).children().last().find("span");
            var tdArr = $(this).children().last().find("span");
            //tdArr.click(function () {
            //    console.log(3432);
            //})
            tdArr.map(function (i, index) {
                $(index).click(function () {
                    var type = $(this).attr("data-opt");
                    var value = $(this).attr("data-value");
                    if (type) {
                        switch (type) {
                            case "test":
                                StartTest(value);
                                break;
                            case "view":
                                GetView(value);
                                break;
                            case "edit":
                                EditPaper(value);
                                break;
                            case "del":
                                DelPaper(value);
                                break;
                        }
                    }

                })
            })

        });

    };
    //开始测试
    var StartTest = function (objid) {
        var url = '/Exam/Index/SetInfo?ExamType=0&ExamID=';

        $.ajax({
            url: "/OrgExam/CreateExam/SaveSub",
            data: {
                ExamID: objid
            },
            dataType: "json",
            type: "post",
            success: function (e) {
                location.href = url + e.ID;
            }
        });
    
    };
    //查看
    var GetView = function (objid) {
       // location.href = "/OrgExam/CreateExam/GetReView?ExamID="+objid;
    };
    //编辑
    var EditPaper = function (objid) {

    };
    //删除
    var DelPaper = function (objid) {
        u.OpenConfrimPop('你确认要删除本试卷吗？');     
        $("#main-content-wrapper").delegate("#Confrim", "click", function () {
         $(".pop-up").hide();
         $(".pop-mask").hide();
            $.ajax({
                type: "post",
                url: "/OrgExam/CreateExam/DeleteSub",
                dataType: "json",
                data: {
                    ExamID:objid
                },
                success: function (data) {
                    console.debug(data);              
                    if (data.OK) {
                        u.OpenTimeHide('操作成功', '2000');
                        //document.location.reload();
                    }
                    else {
                        u.OpenTimeHide('操作失败', '2000');
                       
                    }
                }
            });
        });
        $("#main-content-wrapper").delegate("#Cancel", "click", function () {
            $(".pop-up").hide();
            $(".pop-mask").hide();
        });
    };
    var CreateExam = function () {
        $("#CreateExam").click(function () {
            location.href = "/OrgExam/CreateExam/AssemblyInit";
        });    
    };
    var Search = function () {
        $("#searchText").keydown(function () {
           
            if (event.keyCode == 13 || event.keyCode == 9)//9为tab----13为enter
            {       
                para.ExamCode = $("#searchText").val();
                para.ExamName = $("#searchText").val();        
                loadPaperList(1);
            }
        });
        
    };
    var SearchKeyPress = function () {
        $("#searchText").keypress(function () {

            var keynum = event.keyCode;
            if (keynum == 32 || keynum == 34 || keynum == 39 || keynum == 47 || keynum == 92 || keynum == 58 || keynum == 59 || keynum == 60 || keynum == 62 || keynum == 63 || keynum == 91 || keynum == 93 || keynum == 123 || keynum == 124 || keynum == 125) {
                return false;
            }

        });
    };
};

//绑定数据
$(function () {
    new module().init();
    // module.init(); 
});