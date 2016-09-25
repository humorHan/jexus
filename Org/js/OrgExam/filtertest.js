var Paginator = require('Paginator.js');
var para = { ExamID: 0, Edu: 0, artScience: '', SubjectID: '', StageID: '' };
var QuestionType = 0;//0是公共题库 1 是收藏的题库
var Url = "/OrgExam/CreateExam/GetQuesList"; // GetStoreList
var ids = 0;
var diff = "0";
var sorttype = 0;//排序类型:0时间;1;组卷次数;2难
var sort = 1;//排序 0升序;1降序
var tplTable = require("OrgExam/filtertestpoints.tpl");

var tplQuestion = require("OrgExam/questionlist.tpl");
var module = function () {
    this.init = function () {
        OnBind();
        GetPointList();
        SelectDone();
        OnWrongSave();
    };
    var OnBind = function () {
        CancelSave();
        $('dt').click(function () {
            $(this).next().toggle();
        });
        //监听 范围 公共题库 
        $(".filter-title li").click(function () {
          
            if ($(this).text().toString().indexOf('范围') == -1) {
                $(this).siblings().removeClass("actived");
                $(this).addClass("actived");
                if($(this).text().toString().indexOf('公共题库')>=0)
                {
                    QuestionType = 0;
                    Url = "/OrgExam/CreateExam/GetQuesList";
                }
                if ($(this).text().toString().indexOf('收藏') >= 0) {
                    QuestionType = 1;
                    Url = "/OrgExam/CreateExam/GetStoreList";
                }
            }
        });

        //监听难度 li 有点问题 li 中包括难度
        $(".diff_ul li").click(function () {    
            if ($(this).text().toString().indexOf('难度') == -1) {
                $(this).siblings().removeAttr("class")
                $(this).addClass("actived");
                diff = $(this).attr("value");
                GetQuestionlist(1);
            }
        });
        //监听知识点 dd
        $(".leftTree").delegate('.second_tree dd', 'click', function () {
            //重置排序
            $('.clickjs1').children().removeClass('clickState2').removeClass('clickState1').addClass('easyTodif');
            $('.clickjs2').children().removeClass('clickState2').removeClass('clickState1').addClass('easyTodif');
            $('.clickjs0').addClass('actived').siblings().removeClass('actived');

            $(this).siblings().removeClass("clickTree");
            $(this).addClass("clickTree");
            ids = $(this).attr("data-secid");
           
            GetQuestionlist(1);
        });
       
        //纠错
        $("#questionlist").delegate('.wrongPosition span', 'click', function () {
            //alert($(this).attr("data-qid"));
            $("[class='ml5']").html("试题" + $(this).attr("data-qid"));
            $("[class='ml5']").attr("data-itemid", $(this).attr("data-qid"));
            $("[class='mypopup find_wrong hidden']").show();
            $(".pop-mask").show();
        });
        $("#selType").change(function () {
              
            $(this).children('option:selected').attr("selected", true).siblings().removeAttr("selected");
            //alert($(this).val());
        });
        //关闭按钮
        $("[class='popclose cursor']").click(function () {
            $("[class='mypopup find_wrong hidden']").hide();
            $("[class='mypopup save_testPaper hidden']").hide();
            $("#textarea").html("");
            $(".pop-mask").hide();
        });
        $("[class='goto_top gotoAfter']").click(function () {
            $(document).scrollTop(0);    
        });
        //保存试卷 监听 减号
        $(".mutilp").click(function () {
            if (parseInt($("#sumHour").html()) >= 2)
            {
                $("#sumHour").html(parseInt($("#sumHour").html()) - 1)
             }
           
            $("[class='input myInput']").val(function (i, value) {
                if (value == null || typeof (value) == "undefined" || isNaN(value))
                {
                    value = 1;
                }
                if (value == 1)
                {
                    return parseInt(value)

                }
                if (value >= 2)
                {
                    return parseInt(value) - 1;
         
                }
                        
        });
        });
        //保存试卷 监听 加号
        $(".add").click(function () {
            $("#sumHour").html(parseInt($("#sumHour").html()) + 1)
            $("[class='input myInput']").val(function (i, value) {
                return parseInt(value) + 1;
               
               
                        });
        });
        //加入收藏 加入试题
        $("#questionlist").delegate('.mr20 span', 'click', function () {
            if ($(this).hasClass("mr20"))//加入试题
            {
                if($(this).hasClass("noClick"))//移除试题
                {
                    $(this).html("加入试题篮");
                    $(this).prev().removeClass("click_addTobasket").removeClass("addto_basket").addClass("addto_basket");
                    $(this).removeClass("noClick");
                    $(".mun_span").html(function (i, value) {
                        return parseInt(value) - 1;
                    });
                }
                else
                {
                    $(this).html("移除试题篮");
                    $(this).prev().removeClass("addto_basket").removeClass("click_addTobasket").addClass("click_addTobasket");
                    $(this).addClass("noClick");
                    $(".mun_span").html(function (i, value) {
                        return parseInt(value) + 1;
                    });
                }
            }
            else //加入收藏
            {
                if ($(this).hasClass("noClick")) {
                    $(this).html("收藏试题");
                    $(this).prev().removeClass("click_collection").removeClass("collection").addClass("collection");
                    $(this).removeClass("noClick");
                }
                else {
                    $(this).html("取消收藏");
                    $(this).prev().removeClass("collection").removeClass("click_collection").addClass("click_collection");
                    $(this).addClass("noClick");
                }
            }

        });
        $("[class='wrongspan hiddened']").click(function () {

        });
        /*难易程度点击时候的js*/
        var num = 0;
        $('.clickjs1').click(function () {
            sorttype = 1;
            $(this).addClass('actived').siblings().removeClass('actived');
            //$(this).children().removeClass('readyTimes');
            $(this).children().removeClass('easyTodif');
            $(this).next().children().removeClass('clickState2');
            $(this).next().children().removeClass('clickState1').addClass('easyTodif');
            if (num % 2 == 0) {
                $(this).children().removeClass('clickState2');
                $(this).children().addClass('clickState1');
                sort = 1;//降序
            } else {
                $(this).children().removeClass('clickState1');
                $(this).children().addClass('clickState2');
                sort = 0;//升序
            }
            GetQuestionlist(1);
            num++;
        });
        var cont = 0;
        $('.clickjs2').click(function () {
            sorttype = 2;
            $(this).children().removeClass('easyTodif');
            $(this).addClass('actived').siblings().removeClass('actived');
            $('.clickjs1').children().removeClass('clickState1');
            $('.clickjs1').children().removeClass('clickState2').addClass('easyTodif');
            if (cont % 2 == 0) {
                $(this).children().removeClass('clickState2');
                $(this).children().addClass('clickState1');
                sort = 1;//降序
            } else {
                $(this).children().removeClass('clickState1');
                $(this).children().addClass('clickState2');
                sort = 0;//升序
            }
            GetQuestionlist(1);
            cont++;
        });
        $('.clickjs0').click(function () {
            sorttype = 0;
            $('.clickjs1').children().removeClass('clickState2').removeClass('clickState1').addClass('easyTodif');
            $('.clickjs2').children().removeClass('clickState2').removeClass('clickState1').addClass('easyTodif');
            $(this).addClass('actived').siblings().removeClass('actived');
            num = 0;
            cont = 0;
            sort = 1;
            GetQuestionlist(1);
        })
        para.ExamID = $("#ExamID").val();
        para.Edu = $("#edu").val();
        para.SubjectID = $("#SubjectID").val();
        para.StageID = $("#StageID").val();
        para.artScience = $("#artScience").val();
    };

    var GetPointList = function () {
        $.ajax({
            type: "post",
            url: "/OrgExam/CreateExam/GetMixIndex",
            dataType: "json",
            data: {
                ExamID: para.ExamID,
                edu: para.Edu,
                artScience: para.artScience
            },
            success: function (data) {
                if (data) {
                    $(".leftTree").html(tplTable(data.N));

                  
                   // alert(JSON.stringify(data.N.P));
                }
                else {
                    //$(".leftTree").html(tplTable(data.N));
                }
            },
            complete:function(data)
            {
                if ($(".second_tree dd").hasClass("clickTree"));
                {
                    ids = $(".second_tree").find(".clickTree").attr("data-secid");
                   
                    GetQuestionlist(1);
                   // alert($(".second_tree dd").attr("data-secid"));
                    //$(".second_tree dd").hasClass("clickTree")
                }

            },
            error:function(data)
            {

            }
        });
    };
  
    var GetQuestionlist = function (f) {
       
        $.ajax({
            type: "post",
            url: Url,
            dataType: "json",
            data: {
                IsGood: -1,
                f_id: ids,
                diff: diff,
                style: 1,
                currentPage: f,
                sorttype: sorttype,//排序类型:0时间;1;组卷次数;2难易
                sort: sort//排序 0升序;1降序
            },
            success: function (data) {
                if (data) {
                    $("#questionlist").html(tplQuestion(data));
                    Paginator.Paginator(10, f, data.TotalCount, paging);
                    $("#Qtotal").html(data.TotalCount);
                }
                else {
                    $("#questionlist").html("");
                    $("#Qtotal").html("0");
                }
            },
            error: function (data) {

            }
        });
    };
    var paging = function (page) {

        GetQuestionlist(page);
    };
    var GetItemCollectState = function () {
        $.ajax({
            type: "post",
            url: "/OrgExam/CreateExam/GetItemCollectState",
            dataType: "json",
            data: {
                ExamID: para.ExamID,
                edu: para.Edu,
                artScience: para.artScience
            },
            success: function (data) {
                if (data) {
                    // $(".leftTree").html(tplTable(data.List));
                    alert(data);
                }
                else {
                    $(".leftTree").html(tplTable(data.List));
                }
            },
            error: function (data) {

            }
        });
    };
    //预览
    var preSee = function () {
        $(".preSee").click(function () {
            //$.ajax({
            //    type: "post",
            //    url: "/OrgExam/CreateExam/GetMixIndex",
            //    dataType: "json",
            //    data: {
            //        ExamID: para.ExamID,
            //        edu: para.Edu,
            //        artScience: para.artScience
            //    },
            //    success: function (data) {
            //        if (data) {
            //            // $(".leftTree").html(tplTable(data.List));
            //            alert(data);
            //        }
            //        else {
            //            $(".leftTree").html(tplTable(data.List));
            //        }
            //    },
            //    error: function (data) {

            //    }
            //});
            //$("#preSeeShow").show();
        });
    };
    //完成筛选
    var SelectDone = function () {
        $("#SelectDone").click(function () {
            $("[class='mypopup save_testPaper hidden']").show();
            $(".pop-mask").show();
        });
    };
    //确定保存
    var ConfirmSave = function () {
        $("#ConfirmSave").click(function () {

        });
    };
    //取消保存
    var CancelSave = function () {
        $("#CancelSave").click(function () {
            $("[class='mypopup save_testPaper hidden']").hide();
            $(".pop-mask").hide();
        });
    };
    //纠错确定事件
    var OnWrongSave = function () {
        $("#WrongSave").click(function () {
            var selType = $("#selType").val();
            var textarea = $("#textarea").val();
            if ($.trim(textarea) == "") {
                $("#textarea").focus();
                return;
            }
            var q = $("[class='ml5']").attr("data-itemid");
           
            $.ajax({
                type: "POST",
                url: '/Resource/Questions/AddDebugQuestion' + "?abcdate=" + new Date().getTime(),
                data: {
                    qid: q,
                    content: textarea,
                    typeid: selType
                },
                success: function (data) {
                    if (data.submit == "11-001") {
                        
                    } else {
                      
                    }
                }
            });

        });
    };
    //添加收藏
    var AddItem = function () {

    };
    //取消收藏
    var RemoveItem = function () {

    };
};

//绑定数据
$(function () {
    new module().init();
   
});