var Paginator = require('Paginator.js');
var Tpllist = require("OrgIndex/Tran.tpl");
var para = { SubjectID: 0, StageID: 0, GradeID: 0, data: '', PageIndex: 1, PageSize: 10, ExamName: '', ExamCode: '' };

var paging = function (page) {
    jobexamlist.init(page)
};

var Trandata = {
    init: function (PageIndex) {
        var workid = "2f320319ed3d42b897a0e44e7316326e";
        var targetid = "82";
        $.post("/Org/TeachSupervision/GetWorkAnalysisList", { workid, targetid, PageIndex }, function (data) {
            $("#f_Tranlist").html(Tpllist(data.Data));
            Paginator.Paginator(10, PageIndex, data.PageSum, paging);
            GetDetail();
        });
    }
}

function GetDetail() {
    $("[name=workid]").click(function () {   
       var id = $(this).attr("data-userid");
       var workid = $(this).attr("data-workid");
       var ispoen = $(this).attr("data-isopen");
       if (ispoen=="1") {          
           $("#tr_" + id).show();
           $(this).attr("data-isopen", "2")
           SetAnswer(id, workid);
       } else {
           $("#tr_" + id).hide();
           $(this).attr("data-isopen", "1")
       }

    });
}

function SetAnswer(id, workid) {
    if ($("#f_" + id).attr("data-isset") == "1") {
        return;
    }
    $.post("/Org/TeachSupervision/GetWorkAnalysisDetail", { workid: workid, UserID: id }, function (data) {      
        var str = "";
        for (var i = 0; i < data.Data.length; i++) {
            if (data.Data[i]["result"]=="1") {
                str += "<span>" + (i + 1) + "</span>" + $("#success").html();
            } else {
                str += "<span>" + (i + 1) + "</span>" + $("#error").html();
            }           
        }
        $("#td_" + id).html(str);
        if (str!="") {
            $("#f_" + id).attr("data-isset", "1")
        }
        
    });

}


$(document).ready(function () {

    Trandata.init(1);
  

});



