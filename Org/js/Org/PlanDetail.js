
var request = {
    render: function () {
        var PlanIndex = 13;
        $.post("/Org/TeachSupervision/GetPlanIndexContent2", { PlanIndex }, function (data) {
            
            $("#TitleName").html(data.models["titlename"]);
            $("#f_ktyr").html(data.models["firstmark"]);
            $("#f_jxmb").html(data.models["targetmark"]);
            $("#f_zndfx").html(data.models["diffmark"]);
            $("#f_summarymark").html(data.models["summarymark"]); 
            $("#jiaoxuegc").html( GetGC(data.list));
        });
    }

}

function GetGC(list) {
    var str = "<li>";

    for (var i = 0; i < list.length; i++) {
        //取知识点
        str += list[i]["pointname"];
        str += "<div class='mt20 mb20 pl15'><div class='mb20'>";
        for (var m = 0; m < list[i].list.length; m++) {
            str += list[i].list[0]["pointname"]+"<br/>";
        }
        str += "</div>";
        for (var j = 0; j < list[i].list.length; j++) {
            str += " <p class='mt20 mb20'>";
            str += "考法"+(j+1)+":"+list[i].list[j]["pointname"];
            str += "</p>";
            str += "<div class='mb20 overflow'>";
            //取考法 list[i].list[j]["pointname"]      
                var lt = 1; var lx = 1;
                for (var h = 0; h < list[i].list[j].list.length; h++) {
                    //取题
                    //list[i].list[j].list[h]
                    if (list[i].list[j].list[h]["pointtype"]==1) {//例题
                        str += "<span class='sift-test '> 精选例题</span>";
                        str += "<div class='align-left mb20'>";
                        str += "<p class='line40'>";
                        str += " 例题" + lt;
                        lt++;
                    } else {
                        str += "<span class='sift-test '> 随堂练习</span>";
                        str += "<div class='align-left mb20'>";
                        str += "<p class='line40'>";
                        str += " 练习" + lx;
                        lx++;
                    } 
                    str += " </p>";
                    str += "<div>";
                    var f_body=list[i].list[j].list[h]["body"];
                    if (f_body != null) {
                        str += f_body;
                    }
                   

                    str += " </div>";
                    str += " </div>";
                }            
        }

        str += " </div>";
        str += " </div>";
    }
    str += " </li>";
    return str;
}







  var el = document.getElementById("left-menu");
  var org= document.getElementById("middle-org");    
    function changeMenuHeight(){
        el.style.height = document.documentElement.clientHeight + 'px';
        document.getElementById("top-head").style.width = document.documentElement.clientWidth - 130 + 'px';
        if (org) {
            org.style.height = document.documentElement.clientHeight - 80 + 'px';
        }
    }

$(document).ready(function () {
    request.render();
    changeMenuHeight();

});
