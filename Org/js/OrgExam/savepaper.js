//列排序
var pointColumn = 1;
//列排序，当前第几个
var pointColumnIndex = 1;
//知识点
var bsP = {};
//试题
var bsI = {};
var bss = "";
var iss = 1;
var jss = 1;
var UTrim = '/Exam/Index/SubIndex@(ViewBag.U)';
var edu = '0';
var artScience = '0';
//var edu = '@ViewBag.edu';
//var artScience = '@ViewBag.artScience';
var ExamID = '@ViewBag.ExamID';
var SubjectID = '0@(ViewBag.SubjectID)';
var StageID = '@ViewBag.StageID';
var ExamCode = '';
//试卷信息
var examInfo;
//知识模块
var pointJson = [];
//试题信息
var itemJson = [];
//系统第一次加载
var isFirst = true;
var _PointID = "";
var _SecID = 0;
var _ExamKnowID = 0;
var _PointName = "";
var _PPointName = "";//父级
var _DefaultHour = 0;
var _Time = 0;//修改后课时

var p;
var module=function()
{
    this.init = function () {
      
    };
    var BigW = function () {
        return e == 1 ? "一"
           : e == 2 ? "二"
           : e == 3 ? "三"
           : e == 4 ? "四"
           : e == 5 ? "五"
           : e == 6 ? "六"
           : e == 7 ? "七"
           : e == 8 ? "八"
           : e == 9 ? "九"
           : e == 10 ? "十"
           : e == 11 ? "十一"
           : e == 12 ? "十二"
           : e == 13 ? "十三"
           : e == 14 ? "十四"
           : e == 15 ? "十五"
           : e == 16 ? "十六"
           : e == 17 ? "十七"
           : e == 18 ? "十八"
           : e == 19 ? "十九"
           : e == 20 ? "二十"
           : e == 21 ? "二十一"
           : e == 22 ? "二十二"
           : e == 23 ? "二十三"
           : e == 24 ? "二十四"
           : e == 25 ? "二十五"
           : e == 26 ? "二十六"
           : e == 27 ? "二十七"
           : e == 28 ? "二十八"
           : e == 29 ? "二十九"
           : e == 30 ? "三十"
           : e == 31 ? "三十一"
           : e == 32 ? "三十二"
           : e == 33 ? "三十三"
           : e == 34 ? "三十四"
           : e == 35 ? "三十五"
           : e == 36 ? "三十六"
           : e == 37 ? "三十七"
           : e == 38 ? "三十八"
           : e == 39 ? "三十九"
           : e == 40 ? "四十"
           : e == 41 ? "四十一"
           : e == 42 ? "四十二"
           : e == 43 ? "四十三"
           : e == 44 ? "四十四"
           : e == 45 ? "四十五"
           : e == 46 ? "四十六"
           : e == 47 ? "四十七"
           : e == 48 ? "四十八"
           : e == 49 ? "四十九"
           : e == 50 ? "五十"
           : "";
    };
   
    var Big = function () {
        jss += 1;
        return "";
    };
    var BindIndex = function (e) {
        bss = e;
        iss += 1;
        return "";
    };
    var BindRightK = function () {
        pointColumn++;
        pointColumnIndex++;
        return "";
    };
    var GetPPointName = function (e) {
        var e0 = "";
        $.each(itemJson, function (i, j) {
            if (j) {
                if (e.toString() == j.ItemID.toString()) {
                    e0 = j.ParentPointID;
                    bsI = j;
                    //临时添加一个属性--试题对应的课时
                    var ti = $(("#LN a[data-secid='" + j.PointID + "']")).attr("data-time");
                    if (isNaN(ti) || ti == "")
                        bsI.Time = 1;
                    else bsI.Time = ti;
                    return false;
                }
            }
        });
        $.each(pointJson, function (i, j) {
            if (j) {
                if (e0 == j.PointID) {
                    bsP = j;
                    return false;
                }
            }
        });
        return "";
    };
    var BindRightKJS = function () {
        if (pointJson.length > 0) {

            pointColumn = 1;
            pointColumnIndex = 1;
            $("#rightK").html("");

            $("#rightKJS").tmpl(pointJson, {
                toString: function (f) {
                    return this.data.PointName.substring(0, 10);
                }
            }).appendTo("#rightK");
            var divhtml = $("#rightK").html();
            var reg = /<div data-id="a"><\/div>(.*?)<div data-id="b"><\/div>/gi;
            var newhtml = divhtml.replace(reg, "<ul>$1</ul>");
            $("#rightK").html(newhtml);


            var st = 0;
            $("#rightK li span[data-num='c']").each(function (i, j) {
                st += parseFloat($(this).html());
            });

            $("#TSum").html(st);
            $("#TSum").show();
        }
        else {
            $("#rightK").html("");
            $("#TSum").html(0);
            $("#TSum").hide();
            $('.english_show').hide();
            $('.all_checked').css('opacity', '1');
        }
    };
    var BindRight = function () {
        if (pointJson.length > 0) {
            $("#rightT").html("");
            $("#rightTJS").tmpl(pointJson, {
                toString: function (f) {
                    return this.data.PointName.substring(0, 3);
                }
            }).appendTo("#rightT");

            var st = 0;
            $("#rightT li span").each(function (i, j) {
                st += parseFloat($(this).html());
            });

            $("#TSum").html(st);
        }
        else {
            $("#rightT").html("");
            $("#TSum").html(0);
        }
    };

    var CalHeight = function () {
        $("#rightT,#rightItems").removeAttr("style");
        var _h1 = $(document.body).outerHeight(true);
        var _h2 = $("#rightItems").height();
        if (_h1 >= _h2) {
            $("#rightItems").css({ "display": "block", "top": ((_h1 - _h2) / 2).toString() + "px" });
        }
        else {
            $("#rightT").css({ "height": (_h1 - 225).toString() + "px", "overflow-y": "scroll" });
            $("#rightItems").css({ "display": "block", "height": _h1.toString() + "px", "top": "1px" });
        }
        $("#rightItems").css({
            "margin-left": "0",
            "right": "0"
        });
    };

    var RemoveAllPoint = function ()
    {
        itemJson = [];

        pointJson = [];
        //
        $("#contentIframe li a[data-addbasket]").each(function () {
            if (!$(this).hasClass("colG")) {
                $(this).addClass("colG");
                $(this).children("i").removeClass("delall").addClass("basket");
                $(this).children("span").html("加入试题篮");
            }
        });
        //
        $("#TSum").html(0);

        $("#TSum").hide();

        $("#rightK").html("");
    };
    //-------ExamKnowID-------PPointID-------PPointName---(+/-)-添加还是删除------单个移出试题(true)-----试题ID---_DefaultHour---_time---PointName
    
    var SubAddPoint = function (f1, f2, f3, f4, f5, f6, f7, f8, f9) {
        //

        //当右边是时 f2，PointID为PPointID；否则为PointID

        //f2为子
        var f20 = "";//父
        if (f4) {//添加
            f20 = f2.substring(0, f2.length - 2);
        }
        else {
            if (f5)//单个删除
            {
                f20 = f2.substring(0, f2.length - 2);
            }
            else {
                f20 = f2;
            }
        }

        if (f4) {
            var sa = false;
            if (pointJson.length > 0) {

                $.each(pointJson, function (i, j) {
                    if (j) {
                        if (j.PointID == f20) {
                            sa = true;
                            return false;
                        }
                    }
                });

                if (sa)//已经存在了
                {
                    pointJson = $.grep(pointJson, function (i, j) {
                        if (i) {
                            if (i.PointID == f20) {
                                //更新试题数量
                                i.Num = parseFloat(i.Num) + 1;
                                //该试题是否存在 ----更新课时
                                if (i[f9]) {
                                    if (i[f9]["a" + f6.toString()]);
                                    else {
                                        //
                                        i[f9]["a" + f6.toString()] = f7.toString() + "," + f8.toString();//标识
                                    }
                                }
                                else {
                                    i.DefaultHour = parseFloat(i.DefaultHour) + parseFloat(f7);
                                    i.ClassHour = parseFloat(i.ClassHour) + parseFloat(f7);
                                    //
                                    var itemN = new Array();//第一次添加要是数组
                                    itemN["a" + f6.toString()] = f7.toString() + "," + f8.toString();//标识
                                    i[f9] = itemN;//试题集合
                                }
                            }
                            return true;
                        }
                    });
                }
                //
            }
            if (pointJson.length == 0 || !sa) {
                var _pointJson = {};
                _pointJson.ExamID = ExamID;
                _pointJson.ExamKnowID = f1;
                _pointJson.ClassHour = f8;
                _pointJson.DefaultHour = f7;
                _pointJson.PointID = f20;
                _pointJson.PointName = f3;
                _pointJson.Num = 1;
                //在试题加载中处理 _pointJson[_PointID] = 1;//点位
                var itemN = new Array();//第一次添加要是数组
                itemN["a" + f6.toString()] = f7.toString() + "," + f8.toString();//标识
                _pointJson[f9] = itemN;//试题集合
                pointJson.push(_pointJson);
            }
        }
        else {
            pointJson = $.grep(pointJson, function (i, j) {
                if (i) {
                    if (i.PointID == f20) {
                        //f5是否点击右侧false---点击试题为true
                        i.Num = parseFloat(i.Num) - 1;

                        if (!f5 || i.Num == 0) {
                            return false;
                        }
                        else {
                            //修改课时
                            if (i[f9])//这道试题对应知识点是否存在
                            {
                                if (i[f9]["a" + f6.toString()]) {
                                    delete i[f9]["a" + f6.toString()];
                                }
                                //说明知识点下没有试题了
                                if (Object.getOwnPropertyNames(i[f9]).length == 1) {
                                    i.DefaultHour = parseFloat(i.DefaultHour) - parseFloat(f7);
                                    i.ClassHour = parseFloat(i.ClassHour) - parseFloat(f7) < 0 ? parseFloat(i.ClassHour)
                                        : parseFloat(i.ClassHour) - parseFloat(f7);
                                }
                            }

                            return true;
                        }
                    }
                    else
                        return true;
                }
                else
                    return false;
            });
            //改变当前试题状态
            if (!f5)//只有要右侧点击时
            {
                itemJson = $.grep(itemJson, function (i, j) {
                    if (i) {
                        if (i.ParentPointID == f20)
                            return false;
                        else
                            return true;
                    }
                    else
                        return false;
                });
                //如下特殊，不能换成f2
                if (_PointID.substring(0, _PointID.length - 2) == f20) {
                    $("#contentIframe li a[data-addbasket]").each(function () {
                        if (!$(this).hasClass("colG")) {
                            $(this).addClass("colG");
                            $(this).children("i").removeClass("delall").addClass("basket");
                            $(this).children("span").html("加入试题篮");
                        }
                    });
                }
            }
        }
        //BindRight();
        BindRightKJS();
    };
    //初始化知识模块
    var BindPoint = function (f1, f2, f3, f4, f5, f6)
    {
        if (isFirst && f4) {
            var _pointJson = {};
            _pointJson.ExamID = ExamID;
            _pointJson.ExamKnowID = f1;
            _pointJson.ClassHour = f5;
            _pointJson.DefaultHour = f6;
            _pointJson.PointID = f2;
            _pointJson.PointName = f3;
            _pointJson.Num = 0;
            if (itemJson.length > 0) {
                $.each(itemJson, function (i, j) {
                    if (j) {
                        if (j.ParentPointID == f2) {
                            _pointJson.Num = parseFloat(_pointJson.Num) + 1;
                        }
                    }
                });
            }
            else {
                _pointJson.Num = 1;
            }

            pointJson.push(_pointJson);
        }
        return "";
    };

    //当没有试题时--------------收藏
    var GetEmpty = function()
    {
        $("#contentIframe").html('<li style="text-align:center;">暂时没有试题</li>');
        $("#divPageList").html("");
        return "";
    };

    var Init0 = function (f) {
        ShowLoading($("#LN"));
        $.ajax({
            url: "/Exam/Exam/" + f,
            data: {
                ExamID: ExamID,
                edu: edu,
                artScience: artScience,
                SubjectID: SubjectID,
                StageID: StageID
            },
            dataType: "json",
            type: "post",
            success: function (e) {
                if (isFirst) {
                    ExamCode = e.N.T.ExamCode;
                    examInfo = e.N.T;
                    itemJson = e.N.I;
                }
                $("#LN").html("");
                if (e.N.P.length == 0) {
                    $("#L2").tmpl([{ "Level": -1 }]).appendTo("#LN");
                }
                else {
                    var OS = 0; var OS_S = 0;
                    for (var i = 0; i < e.N.P.length; i++) {
                        if (e.N.P[i].Level == 1) {
                            if (OS == 0) {
                                e.N.P[i].IsOpen = OS = 1;
                            }
                            $("#L2").tmpl(e.N.P[i]).appendTo("#LN");
                        }
                        else {
                            if (OS_S == 0) {
                                e.N.P[i].IsSelected = OS_S = 1;
                            }
                            $("#L2").tmpl(e.N.P[i]).appendTo(("#LN #" + e.N.P[i].ParentID));
                        }
                    }
                }
                if (isFirst) {
                    BindRightKJS();
                    // BindRight();//第一次绑定
                }
                isFirst = false;//重要

                $("#newRight").show();
            }
        });
    };

    var Init = function () {
        $("#LN,#contentIframe,#divPageList").html("");
        NanInit();
        if ($("#comType a[data-areaid][class*='colY']").attr("data-areaid") == "0") {
            Init0("GetMixIndex");
        }
        else {
            Init0("GetMixIndexKeep");
        }
    };
    var CloseOpen = function (f1) {
        $("#LN i[class*='li_close']").each(function () {
            if ($(this).siblings("a").attr("data-id") == f1);
            else {
                $(this).removeClass("li_close").addClass("li_open");
                $(this).siblings("ul").toggle(300);
            }
        });

        if ($(("#" + f1)).parent().children("i").hasClass("li_close")) {
            $(("#" + f1)).parent().children("i").removeClass("li_close").addClass("li_open");
        }
        else {
            $(("#" + f1)).parent().children("i").removeClass("li_open").addClass("li_close");
        }
        $("#" + f1).toggle(300);
    };

    var NanInit = function () {
        $("#totalQues").text(0);
    };
    var clickItem = function (f1, f2, f3, f4, f5, f6, f7)
    {
        _PointID = f1;
        _SecID = f2;
        _ExamKnowID = f3;
        _PointName = f4;
        _PPointName = f6;
        _Time = f5;
        _DefaultHour = f7;
        if ($(("a[data-id='" + f1 + "']")).hasClass("cur"));
        else {
            $("a[data-id]").removeClass("cur");
            $(("a[data-id='" + f1 + "']")).addClass("cur");
        }
        NanInit();

        GetItems(f1, f2, f3, f4, f5, f6, f7);
    };

    var GetItemCollectState = function (e0) {
        $.ajax({
            url: "/Exam/Exam/GetItemCollectState",
            async: false,
            data: {
                QID: e0,
            },
            dataType: "json",
            type: "post",
            success: function (e) {
                if (e) {
                    for (var i = 0; i < e.length; i++) {
                        $("#contentIframe li a[data-addstore='" + e[i] + "']").each(function (i, j) {
                            if (j) {
                                $(j).removeClass("colG");
                                $(j).children("i").removeClass("collect").addClass("hascollect");
                                $(j).children("span").text("取消收藏");
                            }
                        });
                    }
                }
            }
        });
    };

    //添加收藏
    var AddItem = function (e0, e1) {
        $.ajax({
            url: "/Exam/Exam/AddItemCollect",
            data: {
                QID: e0,
            },
            dataType: "json",
            type: "post",
            success: function (e) {
                if (e) {
                    if (e > 0) {
                        $(e1).removeClass("colG");
                        $(e1).children("i").removeClass("collect").addClass("hascollect");
                        $(e1).children("span").text("取消收藏");
                    }
                }
            }
        });
    };
    //取消收藏
    var RemoveItem = function (e0, e1) {
        $.ajax({
            url: "/Exam/Exam/RemoveItemCollect",
            data: {
                QID: e0,
            },
            dataType: "json",
            type: "post",
            success: function (e) {
                if (e) {
                    if (e > 0) {
                        $(e1).addClass("colG");
                        $(e1).children("i").removeClass("hascollect").addClass("collect");
                        $(e1).children("span").text("添加收藏");
                    }
                }
            }
        });
    };

    var GetItem = function (f) {

        if (_SecID == 0)
            return;

        ShowLoading($("#contentIframe"));

        var ids = _SecID;

        //之前的逻辑
        //ids = $("#" + _PointID).find("a[data-secid!='']").map(function () {
        //    return $(this).attr("data-secid");
        //}).get().join(",");

        //if (ids == "")//此时点击的是叶子
        //{
        //    ids = _SecID;
        //}

        //题型
        var diff = $("#diffId a[class*='colY']").attr("value");

        var st = $("#viewAdifficultysort a[class*='colY']");
        var sorttype = st.attr("data-sort");
        var sort = st.attr("data-sortV");

        var urlK = $("#comType a[class*='colY']").attr("data-areaid");

        //var url = urlK == "0" ? "/Resource/Questions/GetQuesList"
        //    : "/Resource/Questions/GetQuesListColl";

        var url = urlK == "0" ? "/Exam/Exam/GetQuesList"
           : "/Exam/Exam/GetStoreList";

        var _isGood = -1;
        if ((+SubjectID == 14) && (+StageID == 1))
            _isGood = 1;

        $.ajax({
            url: url,
            data: {
                IsGood: -1,
                f_id: ids,
                diff: diff,
                style: 1,
                currentPage: f,
                sorttype: sorttype,//排序类型:0时间;1;组卷次数;2难易
                sort: sort//排序 0升序;1降序
            },
            dataType: "json",
            type: "post",
            success: function (e) {
                $("#contentIframe").html("");
                if (e.Data) {
                    if (e.Data.length == 0) {
                        e.Data = null;
                    }
                }

                $("#BindQuesList_temp").tmpl(e).appendTo('#contentIframe');//根据模板绑定试题列表数据

                try {
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#contentIframe").get(0)]); //The formula format
                    $('.quizPutTag').html('　　　'); //Remove the answer
                } catch (e) {

                }


                $("#divPageList").html(e.PageNavigate);
                $('#totalQues').html(e.TotalCount); //试题总数


                if (e.Data && e.Data.length > 0) {
                    if (urlK == "0") {
                        var kID = $("#contentIframe li a[data-addstore]").map(function () {
                            return $(this).attr("data-addstore");
                        }).get().join(",");
                        GetItemCollectState(kID);//收藏
                    }
                    else {
                        $("#contentIframe li a[data-addstore]").each(function (i, j) {
                            if (j) {
                                $(j).removeClass("colG");
                                $(j).children("i").removeClass("collect").addClass("hascollect");
                                $(j).children("span").text("取消收藏");
                            }
                        });
                    }
                }
                /*********************************绑定试题相关 事件集合****************************************/
                /*绑定分页事件*/
                $(".pageLink").click(function () {
                    var pageIndex = $(this).attr("data-pageIndex");

                    GetItem(pageIndex);

                    return false;
                });

                /*解析 展开收起*/
                $("#contentIframe li").click(function () {
                    var d = $(this).find("div[data-value]");
                    if (d.has("span").length) {
                        if (d.is(":hidden")) {
                            d.show(300);
                        }
                        else {
                            d.hide(300);
                        }
                    }
                    else {
                        var rev = GetQuestionExtendInfo(d.attr("data-value"));
                        if (typeof (rev) != "undefined" && rev.length > 0) {
                            var temphtml = "<span class='mb10 b'>答案：</span><div>" + rev[0].Answer + "</div>";
                            temphtml += "<span class='mb10 b'>试题分析：</span><div>" + rev[0].Ways + "</div>";
                            d.html(temphtml);
                            MathJax.Hub.Queue(["Typeset", MathJax.Hub, d.get(0)]); //The formula format
                            $('.quizPutTag').html('　　　'); //Remove the answer
                        }
                        d.show(300);
                    }
                });


                /*纠错 绑定事件*/
                $("#contentIframe li").delegate("a[data-findwrong]", "click", function (event) {
                    event.stopPropagation();//阻止事件冒泡

                    var itemid = $(this).attr("data-findwrong");
                    $("#selType").val(14);
                    $("#spanItemID").attr("data-itemid", itemid);
                    $("#spanItemID").html("试题-" + itemid);
                    $("#textarea").val("");
                    $('body').css('overflow', 'hidden');
                    correctionDialog = art.dialog({
                        title: "纠错",
                        lock: true,
                        fixed: true,
                        drag: false,
                        content: $("#divcorrection")[0],
                        close: function () {
                            $('body').css('overflow', 'auto');
                        }
                    });

                });

                /*添加收藏 绑定事件*/
                $("#contentIframe li").delegate("a[data-addstore]", "click", function (event) {
                    event.stopPropagation();//阻止事件冒泡
                    var cur_qid = $(this).attr("data-addstore");
                    if ($(this).hasClass("colG")) {
                        AddItem(cur_qid, $(this));
                    }
                    else {
                        RemoveItem(cur_qid, $(this));
                    }
                });

                /*添加试题 绑定事件*/
                $("#contentIframe li").delegate("a[data-addbasket]", "click", function (event) {
                    event.stopPropagation();//阻止事件冒泡
                    var cur_qid = $(this).attr("data-addbasket");

                    if ($(this).hasClass("colG")) {
                        //添加试题
                        ActionItem(_ExamKnowID, _SecID, _PointID, cur_qid, $(this).attr("data-num"), _PointName, true);
                        SubAddPoint(_ExamKnowID, _PointID, _PPointName, true, false, cur_qid, _DefaultHour, _Time, _PointName);
                        //修改颜色
                        $(this).removeClass("colG");
                        $(this).children("i").removeClass("basket").addClass("delall");
                        $(this).children("span").html("移出试题篮");
                    }
                    else {
                        ActionItem(_ExamKnowID, _SecID, _PointID, cur_qid, $(this).attr("data-num"), _PointName, false);
                        SubAddPoint(_ExamKnowID, _PointID, _PPointName, false, true, cur_qid, _DefaultHour, _Time, _PointName);
                        $(this).addClass("colG");
                        $(this).children("i").removeClass("delall").addClass("basket");
                        $(this).children("span").html("加入试题篮");
                    }
                });

                /*打开试卷 绑定事件*/
                //$("#contentIframe li").delegate("a[class='colG hand']", "click", function (event) {
                //    event.stopPropagation();//阻止事件冒泡
                //    var cur_paperid = $(this).attr("paperid");

                //    var h = "/Resource/Questions/PaperDetail?paperid=" + cur_paperid;
                //    window.open(h, "").focus();
                //});

                //
                $("#contentIframe li a[data-addbasket]").each(function (i, j) {
                    if (j) {
                        var cur_qid = $(this).attr("data-addbasket");
                        var iJ = false;

                        $.each(itemJson, function (i, j) {
                            if (j) {
                                if (j.ItemID.toString() == cur_qid.toString() && j.PointName == _PointName) {
                                    iJ = true;
                                    return false;
                                }
                            }
                        });
                        if (iJ)//修改为取消添加
                        {
                            //修改颜色
                            $(this).removeClass("colG");
                            $(this).children("i").removeClass("basket").addClass("delall");
                            $(this).children("span").html("移出试题篮");
                            //重要---在加载试题的时候，修改知识模块的time
                            if (pointJson.length > 0) {
                                $.each(pointJson, function (m, n) {
                                    if (n) {
                                        if (n.PointID == _PointID.substring(0, _PointID.length - 2)) {
                                            if (n[_PointName]) {
                                                if (n[_PointName]["a" + cur_qid.toString()]);
                                                else
                                                    n[_PointName]["a" + cur_qid.toString()] = _DefaultHour.toString() + "," + _Time.toString();//标识
                                            }
                                            else {
                                                var itemN = new Array();
                                                itemN["a" + cur_qid.toString()] = _DefaultHour.toString() + "," + _Time.toString();//标识
                                                n[_PointName] = itemN;//试题集合
                                            }
                                        }
                                    }
                                });
                            }
                            //
                        }
                    }
                });

            }
        });
    };
    //操作试题//ExamKnowID-----secid---pointid-----ItemID-----DiffNum---------PointName------------+-true/false

    var ActionItem = function (f1, f2, f3, f4, f5, f6, f7) {
        if (f7) {
            var _itemJson = {};
            _itemJson.ExamKnowID = f1;
            _itemJson.ItemID = f4;
            _itemJson.ParentPointID = f3.substring(0, f3.length - 2);
            _itemJson.DiffNum = f5;
            _itemJson.PointID = f2;
            _itemJson.PointName = f6;
            itemJson.push(_itemJson);
        }
        else {
            if (itemJson.length > 0) {
                itemJson = $.grep(itemJson, function (i, j) {//移出
                    if (i) {
                        if (i.ItemID == f4 && i.PointID == f2 && i.PointName == f6)
                            return false;
                        else
                            return true;
                    }
                });
            }
        }
    };

    var GetItems = function (f1, f2, f3, f4, f5, f6, f7) {
        _PointID = f1;
        _SecID = f2;
        _ExamKnowID = f3;
        _PointName = f4;
        _PPointName = f6;
        _Time = f5;
        _DefaultHour = f7;
        GetItem(1);
        return "";
    };
    var Save = function () {
        var ij = true;
        $("#sumT :input").each(function (i, j) {
            if (j) {
                if (isNaN($(j).val()) || $(j).val() == "" || $(j).val() == "0") {
                    $(j).focus();
                    ij = false;
                    return false;
                }
            }
        });

        if ($("#ok").attr("data-on") == "0") {
            $("#ok").attr({ "data-on": "1" });
            return;
        }
        $("#ok").attr({ "data-on": "0" });
        if (ij) {
            //修改课时
            $("#sumT :input").each(function (i, j) {
                if (j) {
                    var ij = $(this).attr("id");
                    var ijV = $(this).val();
                    $.each(pointJson, function (x, y) {
                        if (y) {
                            if (y.PointID == ij) {
                                y.ClassHour = ijV;
                            }
                        }
                    });
                }
            });

            var ScheduledTime = 0;
            $.each(itemJson, function (i, j) {
                if (j) {
                    var DN = parseFloat(j.DiffNum);
                    ScheduledTime += DN <= 20 ? 1
                        : DN <= 40 ? 1.2
                        : DN <= 60 ? 1.5
                        : DN <= 80 ? 1.8
                        : 2;
                }
            });


            //
            $.ajax({
                url: "/Exam/Exam/SaveMixIndex",
                data: {
                    ExamName: escape($("#examName").val()),
                    ScheduledTime: Math.ceil(ScheduledTime),
                    ExamID: ExamID,
                    Points: JSON.stringify(pointJson),
                    Items: JSON.stringify(itemJson),
                    ExamCode: ExamCode
                },
                dataType: "json",
                type: "post",
                success: function (e) {
                    location.href = UTrim;//"/Exam/Index/SubIndexS";
                },
                error: function (e)//可能没有登录
                {
                    $("#ok").attr({ "data-on": "1" });
                }
            });
        } else {
            $("#ok").attr({ "data-on": "1" });
        }
    };

    var nextStep = function () {
        if ($("#TSum").html() == "0") {
            $('body').css('overflow', 'hidden');
            p = newBCommon.showdialog("#popSure", "提示");
            //$(".aui_title").css({ "margin-left": "150px" });
            return;
        }

        $("#examName").val(examInfo.ExamName);

        $("#sumT").html("");

        $("#popPointJS").tmpl(pointJson).appendTo("#sumT");

        var tTSum = 0;
        $("#sumT :input").each(function (i, j) {
            if (j) {
                tTSum += parseFloat($(this).val());
            }
        });

        $("#tT").html(tTSum);
        $('body').css('overflow', 'hidden');
        p = newBCommon.showdialog("#popID", "保存测评试卷");
    };

    var preView = function () {
        if ($("#TSum").html() == "0") {
            $('body').css('overflow', 'hidden');
            p = newBCommon.showdialog("#popInfo", "信息");
            return;
        }
        $('body').css('overflow', 'hidden');
        p = newBCommon.showdialog("#popPre", "预览试卷");

        $('.english_show').css('display', 'none');
        $('.all_checked').css('opacity', 1);

        ShowLoading($("#titleB"));

        bsP = {};

        bsI = {};

        bss = "";

        iss = 1;

        jss = 1;
        //排序
        var newItemJson = [];
        $.each(pointJson, function (i, j) {
            if (j) {
                $.each(itemJson, function (m, n) {
                    if (n) {
                        if (j.PointID == n.ParentPointID)
                            newItemJson.push(n);
                    }
                });
            }
        });

        var mID = $.map(newItemJson, function (i, j) { return i.ItemID }).toString();

        $.ajax({
            url: "/Exam/Exam/GetMixIndexPop",
            data: {
                data: mID
            },
            dataType: "json",
            type: "post",
            success: function (e) {
                $("#titleB").html("");
                $("#titleA").html(examInfo.ExamName);

                $("#popItems").tmpl(e.N.N).appendTo("#titleB");

                MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#titleB").get(0)]); //The formula format
                $('.quizPutTag').html('　　　'); //Remove the answer

                onClickPop();
            }
        });
    };

    var onClickPop = function () {
        $("#titleB a[data-ppointname]").click(function () {
            var _ExamKnowID1 = $(this).attr("data-ExamKnowID");
            var _SecID1 = $(this).attr("data-PointID");
            var _PointID1 = $(this).attr("data-PPointID") + "00";
            var _num1 = $(this).attr("data-diffnum");
            var _PointName1 = $(this).attr("data-PointName");
            var _PPointName1 = $(this).attr("data-PPointName");
            var _DefaultHour1 = $(this).attr("data-Default");


            var iID = $(this).attr("data-itemid");
            var $i = $(("#contentIframe li a[data-addbasket='" + iID + "']"));

            if ($(this).hasClass("colG")) {

                if ($i.length > 0) {
                    $i.click();
                }
                else {
                    //试题
                    ActionItem(_ExamKnowID1, _SecID1, _PointID1, iID, _num1, _PointName1, true);
                    SubAddPoint(_ExamKnowID1, _PointID1, _PPointName1, true, false, iID, _DefaultHour1, _DefaultHour1, _PointName1);
                }

                //
                $(this).removeClass("colG");
                $(this).children("i").removeClass("basket").addClass("delall");
                $(this).children("span").html("移出试题篮");
            }
            else {
                if ($i.length > 0) {
                    $i.click();
                }
                else {
                    ActionItem(_ExamKnowID1, _SecID1, _PointID1, iID, _num1, _PointName1, false);
                    SubAddPoint(_ExamKnowID1, _PointID1, _PPointName1, false, true, iID, _DefaultHour1, _DefaultHour1, _PointName1);
                }
                //
                $(this).addClass("colG");
                $(this).children("i").removeClass("delall").addClass("basket");
                $(this).children("span").html("加入试题篮");
            }
        });
    };

    var K = function () {
        var keynum = event.keyCode;
        if (keynum == 32 || keynum == 34 || keynum == 39 || keynum == 47 || keynum == 92 || keynum == 58 || keynum == 59 || keynum == 60 || keynum == 62 || keynum == 63 || keynum == 91 || keynum == 93 || keynum == 123 || keynum == 124 || keynum == 125)
            return false;
    };
    var S = function () {
        var keynum = event.keyCode;
        if (keynum >= 48 && keynum <= 57) {
            document.execCommand("Cut", false, true);
            var nT = $(event.currentTarget).val();
            //第一个字符不能为空，或者只能有两位字符
            if (nT == "" && keynum == 48)
                return false;
            else if (nT.length > 1) {
                return false;
            }
            else
                return true;
        }
        else
            return false;
    };

    var Sum = function () {
        var jV = 0;
        $("#sumT :input").each(function (i, j) {
            if (j) {
                if (isNaN($(j).val()) || $(j).val() == "");
                else {
                    jV += parseFloat($(j).val());
                }
            }
        });
        $("#tT").html(jV);
    };


    var sub = function (f) {
        var t = $("#" + f).val();

        if (t == "" || t == "1")
            return;

        t = parseFloat(t);
        $("#" + f).val(t - 1);

        var t0 = $("#tT").text();
        t0 = parseFloat(t0) - 1;
        $("#tT").text(t0);
    };
    var add = function (f) {
        var t = $("#" + f).val();
        if (t == "")
            t = 0;
        if (t == "99")
            return;
        t = parseFloat(t);
        $("#" + f).val(t + 1);
        var t0 = $("#tT").text();
        t0 = parseFloat(t0) + 1;
        $("#tT").text(t0);
    };

}




//绑定数据
$(function () {
    new module().init();
});