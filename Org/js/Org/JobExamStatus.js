var Paginator = require('Paginator.js');
var Tpllist = require("OrgIndex/JobExamstatus.tpl");
var planlist = require("OrgIndex/planlist.tpl");

var droplist = require("OrgIndex/droplist.tpl");
var para = { SubjectID: 0, StageID: 0, GradeID: 0, data: '', PageIndex: 1, PageSize: 10, ExamName: '', ExamCode: '' };
require("template-helper.js");
var types = 1;//1作业考试，2教案

var paging = function (page) {  
    jobexamlist.init(page)
};


var jobexamlist = {
    Tpl: '',
    init: function (PageIndex) {
        this.render(PageIndex);
    },
    render: function (PageIndex) {
        var UserID = 71010084;
        $.post("/Org/TeachSupervision/GetOnlineWorks", {
            UserID,
            PageIndex
        }, function (data) {
            $("#jobList").html(Tpllist(data.Data));
            Paginator.Paginator(10, PageIndex, data.PageSum, paging);
            $("#f_ShowNum").html(data.PageSum);
            $("#nametype").html("份作业");
            }
        );
    }
}

//教案
var planexamlist = {
    Tpl: '',
    init: function (PageIndex) {
        this.render(PageIndex);
    },
    render: function (PageIndex) {
        var CreateID = 71010084;
        $.post("/Org/TeachSupervision/GetPlanIndexList", {
            CreateID,
            PageIndex
        }, function (data) {
            $("#planList").html(planlist(data.Data));
            Paginator.Paginator(10, PageIndex, data.PageSum, paging);
            $("#f_ShowNum").html(data.PageSum);
            $("#nametype").html( "份教案");
            
        }
        );
    }
}

function loads() {
    $("#f_job").click(function () {
       
        $("#f_job").removeClass().addClass("title-nav title-nav-on");
        $("#f_plan").removeClass().addClass("title-nav ");
        if (types==2) {
            types = 1;//1作业考试，2教案
            $("#f_planlist").hide();
            $("#f_joblist").show();
            jobexamlist.init(1);
        }
       
    });
    $("#f_plan").click(function () {
        $("#f_job").removeClass().addClass("title-nav");
        $("#f_plan").removeClass().addClass("title-nav title-nav-on");
        if (types == 1) {
            types = 2;//1作业考试，2教案
            $("#f_planlist").show();
            $("#f_joblist").hide();
            planexamlist.init();
        }       
    });
}


$(document).ready(function () {

    loads();

  
    //jobexamlist.init(1);
    jobexamlist.init(1);
});

