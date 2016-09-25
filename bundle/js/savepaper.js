webpackJsonp([35,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(82);


/***/ },

/***/ 82:
/***/ function(module, exports) {

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

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnRXhhbS9zYXZlcGFwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQSxlQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsVUFBUzs7QUFFVCx1REFBc0Qsa0JBQWtCOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtGQUFpRjtBQUNqRiw4Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEUiLCJmaWxlIjoic2F2ZXBhcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/liJfmjpLluo9cclxudmFyIHBvaW50Q29sdW1uID0gMTtcclxuLy/liJfmjpLluo/vvIzlvZPliY3nrKzlh6DkuKpcclxudmFyIHBvaW50Q29sdW1uSW5kZXggPSAxO1xyXG4vL+efpeivhueCuVxyXG52YXIgYnNQID0ge307XHJcbi8v6K+V6aKYXHJcbnZhciBic0kgPSB7fTtcclxudmFyIGJzcyA9IFwiXCI7XHJcbnZhciBpc3MgPSAxO1xyXG52YXIganNzID0gMTtcclxudmFyIFVUcmltID0gJy9FeGFtL0luZGV4L1N1YkluZGV4QChWaWV3QmFnLlUpJztcclxudmFyIGVkdSA9ICcwJztcclxudmFyIGFydFNjaWVuY2UgPSAnMCc7XHJcbi8vdmFyIGVkdSA9ICdAVmlld0JhZy5lZHUnO1xyXG4vL3ZhciBhcnRTY2llbmNlID0gJ0BWaWV3QmFnLmFydFNjaWVuY2UnO1xyXG52YXIgRXhhbUlEID0gJ0BWaWV3QmFnLkV4YW1JRCc7XHJcbnZhciBTdWJqZWN0SUQgPSAnMEAoVmlld0JhZy5TdWJqZWN0SUQpJztcclxudmFyIFN0YWdlSUQgPSAnQFZpZXdCYWcuU3RhZ2VJRCc7XHJcbnZhciBFeGFtQ29kZSA9ICcnO1xyXG4vL+ivleWNt+S/oeaBr1xyXG52YXIgZXhhbUluZm87XHJcbi8v55+l6K+G5qih5Z2XXHJcbnZhciBwb2ludEpzb24gPSBbXTtcclxuLy/or5Xpopjkv6Hmga9cclxudmFyIGl0ZW1Kc29uID0gW107XHJcbi8v57O757uf56ys5LiA5qyh5Yqg6L29XHJcbnZhciBpc0ZpcnN0ID0gdHJ1ZTtcclxudmFyIF9Qb2ludElEID0gXCJcIjtcclxudmFyIF9TZWNJRCA9IDA7XHJcbnZhciBfRXhhbUtub3dJRCA9IDA7XHJcbnZhciBfUG9pbnROYW1lID0gXCJcIjtcclxudmFyIF9QUG9pbnROYW1lID0gXCJcIjsvL+eItue6p1xyXG52YXIgX0RlZmF1bHRIb3VyID0gMDtcclxudmFyIF9UaW1lID0gMDsvL+S/ruaUueWQjuivvuaXtlxyXG5cclxudmFyIHA7XHJcbnZhciBtb2R1bGU9ZnVuY3Rpb24oKVxyXG57XHJcbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIFxyXG4gICAgfTtcclxuICAgIHZhciBCaWdXID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBlID09IDEgPyBcIuS4gFwiXHJcbiAgICAgICAgICAgOiBlID09IDIgPyBcIuS6jFwiXHJcbiAgICAgICAgICAgOiBlID09IDMgPyBcIuS4iVwiXHJcbiAgICAgICAgICAgOiBlID09IDQgPyBcIuWbm1wiXHJcbiAgICAgICAgICAgOiBlID09IDUgPyBcIuS6lFwiXHJcbiAgICAgICAgICAgOiBlID09IDYgPyBcIuWFrVwiXHJcbiAgICAgICAgICAgOiBlID09IDcgPyBcIuS4g1wiXHJcbiAgICAgICAgICAgOiBlID09IDggPyBcIuWFq1wiXHJcbiAgICAgICAgICAgOiBlID09IDkgPyBcIuS5nVwiXHJcbiAgICAgICAgICAgOiBlID09IDEwID8gXCLljYFcIlxyXG4gICAgICAgICAgIDogZSA9PSAxMSA/IFwi5Y2B5LiAXCJcclxuICAgICAgICAgICA6IGUgPT0gMTIgPyBcIuWNgeS6jFwiXHJcbiAgICAgICAgICAgOiBlID09IDEzID8gXCLljYHkuIlcIlxyXG4gICAgICAgICAgIDogZSA9PSAxNCA/IFwi5Y2B5ZubXCJcclxuICAgICAgICAgICA6IGUgPT0gMTUgPyBcIuWNgeS6lFwiXHJcbiAgICAgICAgICAgOiBlID09IDE2ID8gXCLljYHlha1cIlxyXG4gICAgICAgICAgIDogZSA9PSAxNyA/IFwi5Y2B5LiDXCJcclxuICAgICAgICAgICA6IGUgPT0gMTggPyBcIuWNgeWFq1wiXHJcbiAgICAgICAgICAgOiBlID09IDE5ID8gXCLljYHkuZ1cIlxyXG4gICAgICAgICAgIDogZSA9PSAyMCA/IFwi5LqM5Y2BXCJcclxuICAgICAgICAgICA6IGUgPT0gMjEgPyBcIuS6jOWNgeS4gFwiXHJcbiAgICAgICAgICAgOiBlID09IDIyID8gXCLkuozljYHkuoxcIlxyXG4gICAgICAgICAgIDogZSA9PSAyMyA/IFwi5LqM5Y2B5LiJXCJcclxuICAgICAgICAgICA6IGUgPT0gMjQgPyBcIuS6jOWNgeWbm1wiXHJcbiAgICAgICAgICAgOiBlID09IDI1ID8gXCLkuozljYHkupRcIlxyXG4gICAgICAgICAgIDogZSA9PSAyNiA/IFwi5LqM5Y2B5YWtXCJcclxuICAgICAgICAgICA6IGUgPT0gMjcgPyBcIuS6jOWNgeS4g1wiXHJcbiAgICAgICAgICAgOiBlID09IDI4ID8gXCLkuozljYHlhatcIlxyXG4gICAgICAgICAgIDogZSA9PSAyOSA/IFwi5LqM5Y2B5LmdXCJcclxuICAgICAgICAgICA6IGUgPT0gMzAgPyBcIuS4ieWNgVwiXHJcbiAgICAgICAgICAgOiBlID09IDMxID8gXCLkuInljYHkuIBcIlxyXG4gICAgICAgICAgIDogZSA9PSAzMiA/IFwi5LiJ5Y2B5LqMXCJcclxuICAgICAgICAgICA6IGUgPT0gMzMgPyBcIuS4ieWNgeS4iVwiXHJcbiAgICAgICAgICAgOiBlID09IDM0ID8gXCLkuInljYHlm5tcIlxyXG4gICAgICAgICAgIDogZSA9PSAzNSA/IFwi5LiJ5Y2B5LqUXCJcclxuICAgICAgICAgICA6IGUgPT0gMzYgPyBcIuS4ieWNgeWFrVwiXHJcbiAgICAgICAgICAgOiBlID09IDM3ID8gXCLkuInljYHkuINcIlxyXG4gICAgICAgICAgIDogZSA9PSAzOCA/IFwi5LiJ5Y2B5YWrXCJcclxuICAgICAgICAgICA6IGUgPT0gMzkgPyBcIuS4ieWNgeS5nVwiXHJcbiAgICAgICAgICAgOiBlID09IDQwID8gXCLlm5vljYFcIlxyXG4gICAgICAgICAgIDogZSA9PSA0MSA/IFwi5Zub5Y2B5LiAXCJcclxuICAgICAgICAgICA6IGUgPT0gNDIgPyBcIuWbm+WNgeS6jFwiXHJcbiAgICAgICAgICAgOiBlID09IDQzID8gXCLlm5vljYHkuIlcIlxyXG4gICAgICAgICAgIDogZSA9PSA0NCA/IFwi5Zub5Y2B5ZubXCJcclxuICAgICAgICAgICA6IGUgPT0gNDUgPyBcIuWbm+WNgeS6lFwiXHJcbiAgICAgICAgICAgOiBlID09IDQ2ID8gXCLlm5vljYHlha1cIlxyXG4gICAgICAgICAgIDogZSA9PSA0NyA/IFwi5Zub5Y2B5LiDXCJcclxuICAgICAgICAgICA6IGUgPT0gNDggPyBcIuWbm+WNgeWFq1wiXHJcbiAgICAgICAgICAgOiBlID09IDQ5ID8gXCLlm5vljYHkuZ1cIlxyXG4gICAgICAgICAgIDogZSA9PSA1MCA/IFwi5LqU5Y2BXCJcclxuICAgICAgICAgICA6IFwiXCI7XHJcbiAgICB9O1xyXG4gICBcclxuICAgIHZhciBCaWcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAganNzICs9IDE7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9O1xyXG4gICAgdmFyIEJpbmRJbmRleCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgYnNzID0gZTtcclxuICAgICAgICBpc3MgKz0gMTtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH07XHJcbiAgICB2YXIgQmluZFJpZ2h0SyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwb2ludENvbHVtbisrO1xyXG4gICAgICAgIHBvaW50Q29sdW1uSW5kZXgrKztcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH07XHJcbiAgICB2YXIgR2V0UFBvaW50TmFtZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGUwID0gXCJcIjtcclxuICAgICAgICAkLmVhY2goaXRlbUpzb24sIGZ1bmN0aW9uIChpLCBqKSB7XHJcbiAgICAgICAgICAgIGlmIChqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50b1N0cmluZygpID09IGouSXRlbUlELnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlMCA9IGouUGFyZW50UG9pbnRJRDtcclxuICAgICAgICAgICAgICAgICAgICBic0kgPSBqO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Li05pe25re75Yqg5LiA5Liq5bGe5oCnLS3or5Xpopjlr7nlupTnmoTor77ml7ZcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGkgPSAkKChcIiNMTiBhW2RhdGEtc2VjaWQ9J1wiICsgai5Qb2ludElEICsgXCInXVwiKSkuYXR0cihcImRhdGEtdGltZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4odGkpIHx8IHRpID09IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJzSS5UaW1lID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGJzSS5UaW1lID0gdGk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJC5lYWNoKHBvaW50SnNvbiwgZnVuY3Rpb24gKGksIGopIHtcclxuICAgICAgICAgICAgaWYgKGopIHtcclxuICAgICAgICAgICAgICAgIGlmIChlMCA9PSBqLlBvaW50SUQpIHtcclxuICAgICAgICAgICAgICAgICAgICBic1AgPSBqO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfTtcclxuICAgIHZhciBCaW5kUmlnaHRLSlMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHBvaW50SnNvbi5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBwb2ludENvbHVtbiA9IDE7XHJcbiAgICAgICAgICAgIHBvaW50Q29sdW1uSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAkKFwiI3JpZ2h0S1wiKS5odG1sKFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgJChcIiNyaWdodEtKU1wiKS50bXBsKHBvaW50SnNvbiwge1xyXG4gICAgICAgICAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5Qb2ludE5hbWUuc3Vic3RyaW5nKDAsIDEwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuYXBwZW5kVG8oXCIjcmlnaHRLXCIpO1xyXG4gICAgICAgICAgICB2YXIgZGl2aHRtbCA9ICQoXCIjcmlnaHRLXCIpLmh0bWwoKTtcclxuICAgICAgICAgICAgdmFyIHJlZyA9IC88ZGl2IGRhdGEtaWQ9XCJhXCI+PFxcL2Rpdj4oLio/KTxkaXYgZGF0YS1pZD1cImJcIj48XFwvZGl2Pi9naTtcclxuICAgICAgICAgICAgdmFyIG5ld2h0bWwgPSBkaXZodG1sLnJlcGxhY2UocmVnLCBcIjx1bD4kMTwvdWw+XCIpO1xyXG4gICAgICAgICAgICAkKFwiI3JpZ2h0S1wiKS5odG1sKG5ld2h0bWwpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBzdCA9IDA7XHJcbiAgICAgICAgICAgICQoXCIjcmlnaHRLIGxpIHNwYW5bZGF0YS1udW09J2MnXVwiKS5lYWNoKGZ1bmN0aW9uIChpLCBqKSB7XHJcbiAgICAgICAgICAgICAgICBzdCArPSBwYXJzZUZsb2F0KCQodGhpcykuaHRtbCgpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI1RTdW1cIikuaHRtbChzdCk7XHJcbiAgICAgICAgICAgICQoXCIjVFN1bVwiKS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI3JpZ2h0S1wiKS5odG1sKFwiXCIpO1xyXG4gICAgICAgICAgICAkKFwiI1RTdW1cIikuaHRtbCgwKTtcclxuICAgICAgICAgICAgJChcIiNUU3VtXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLmVuZ2xpc2hfc2hvdycpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLmFsbF9jaGVja2VkJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIEJpbmRSaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocG9pbnRKc29uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgJChcIiNyaWdodFRcIikuaHRtbChcIlwiKTtcclxuICAgICAgICAgICAgJChcIiNyaWdodFRKU1wiKS50bXBsKHBvaW50SnNvbiwge1xyXG4gICAgICAgICAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5Qb2ludE5hbWUuc3Vic3RyaW5nKDAsIDMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5hcHBlbmRUbyhcIiNyaWdodFRcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3QgPSAwO1xyXG4gICAgICAgICAgICAkKFwiI3JpZ2h0VCBsaSBzcGFuXCIpLmVhY2goZnVuY3Rpb24gKGksIGopIHtcclxuICAgICAgICAgICAgICAgIHN0ICs9IHBhcnNlRmxvYXQoJCh0aGlzKS5odG1sKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoXCIjVFN1bVwiKS5odG1sKHN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjcmlnaHRUXCIpLmh0bWwoXCJcIik7XHJcbiAgICAgICAgICAgICQoXCIjVFN1bVwiKS5odG1sKDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIENhbEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI3JpZ2h0VCwjcmlnaHRJdGVtc1wiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7XHJcbiAgICAgICAgdmFyIF9oMSA9ICQoZG9jdW1lbnQuYm9keSkub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcbiAgICAgICAgdmFyIF9oMiA9ICQoXCIjcmlnaHRJdGVtc1wiKS5oZWlnaHQoKTtcclxuICAgICAgICBpZiAoX2gxID49IF9oMikge1xyXG4gICAgICAgICAgICAkKFwiI3JpZ2h0SXRlbXNcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIiwgXCJ0b3BcIjogKChfaDEgLSBfaDIpIC8gMikudG9TdHJpbmcoKSArIFwicHhcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjcmlnaHRUXCIpLmNzcyh7IFwiaGVpZ2h0XCI6IChfaDEgLSAyMjUpLnRvU3RyaW5nKCkgKyBcInB4XCIsIFwib3ZlcmZsb3cteVwiOiBcInNjcm9sbFwiIH0pO1xyXG4gICAgICAgICAgICAkKFwiI3JpZ2h0SXRlbXNcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIiwgXCJoZWlnaHRcIjogX2gxLnRvU3RyaW5nKCkgKyBcInB4XCIsIFwidG9wXCI6IFwiMXB4XCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjcmlnaHRJdGVtc1wiKS5jc3Moe1xyXG4gICAgICAgICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInJpZ2h0XCI6IFwiMFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBSZW1vdmVBbGxQb2ludCA9IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgaXRlbUpzb24gPSBbXTtcclxuXHJcbiAgICAgICAgcG9pbnRKc29uID0gW107XHJcbiAgICAgICAgLy9cclxuICAgICAgICAkKFwiI2NvbnRlbnRJZnJhbWUgbGkgYVtkYXRhLWFkZGJhc2tldF1cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcyhcImNvbEdcIikpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjb2xHXCIpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbihcImlcIikucmVtb3ZlQ2xhc3MoXCJkZWxhbGxcIikuYWRkQ2xhc3MoXCJiYXNrZXRcIik7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwic3BhblwiKS5odG1sKFwi5Yqg5YWl6K+V6aKY56+uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAkKFwiI1RTdW1cIikuaHRtbCgwKTtcclxuXHJcbiAgICAgICAgJChcIiNUU3VtXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgJChcIiNyaWdodEtcIikuaHRtbChcIlwiKTtcclxuICAgIH07XHJcbiAgICAvLy0tLS0tLS1FeGFtS25vd0lELS0tLS0tLVBQb2ludElELS0tLS0tLVBQb2ludE5hbWUtLS0oKy8tKS3mt7vliqDov5jmmK/liKDpmaQtLS0tLS3ljZXkuKrnp7vlh7ror5XpopgodHJ1ZSktLS0tLeivlemimElELS0tX0RlZmF1bHRIb3VyLS0tX3RpbWUtLS1Qb2ludE5hbWVcclxuICAgIFxyXG4gICAgdmFyIFN1YkFkZFBvaW50ID0gZnVuY3Rpb24gKGYxLCBmMiwgZjMsIGY0LCBmNSwgZjYsIGY3LCBmOCwgZjkpIHtcclxuICAgICAgICAvL1xyXG5cclxuICAgICAgICAvL+W9k+WPs+i+ueaYr+aXtiBmMu+8jFBvaW50SUTkuLpQUG9pbnRJRO+8m+WQpuWImeS4ulBvaW50SURcclxuXHJcbiAgICAgICAgLy9mMuS4uuWtkFxyXG4gICAgICAgIHZhciBmMjAgPSBcIlwiOy8v54i2XHJcbiAgICAgICAgaWYgKGY0KSB7Ly/mt7vliqBcclxuICAgICAgICAgICAgZjIwID0gZjIuc3Vic3RyaW5nKDAsIGYyLmxlbmd0aCAtIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGY1KS8v5Y2V5Liq5Yig6ZmkXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGYyMCA9IGYyLnN1YnN0cmluZygwLCBmMi5sZW5ndGggLSAyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGYyMCA9IGYyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZjQpIHtcclxuICAgICAgICAgICAgdmFyIHNhID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChwb2ludEpzb24ubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChwb2ludEpzb24sIGZ1bmN0aW9uIChpLCBqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGouUG9pbnRJRCA9PSBmMjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzYSkvL+W3sue7j+WtmOWcqOS6hlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SnNvbiA9ICQuZ3JlcChwb2ludEpzb24sIGZ1bmN0aW9uIChpLCBqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaS5Qb2ludElEID09IGYyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pu05paw6K+V6aKY5pWw6YePXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5OdW0gPSBwYXJzZUZsb2F0KGkuTnVtKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6Xor5XpopjmmK/lkKblrZjlnKggLS0tLeabtOaWsOivvuaXtlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpW2Y5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaVtmOV1bXCJhXCIgKyBmNi50b1N0cmluZygpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlbZjldW1wiYVwiICsgZjYudG9TdHJpbmcoKV0gPSBmNy50b1N0cmluZygpICsgXCIsXCIgKyBmOC50b1N0cmluZygpOy8v5qCH6K+GXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuRGVmYXVsdEhvdXIgPSBwYXJzZUZsb2F0KGkuRGVmYXVsdEhvdXIpICsgcGFyc2VGbG9hdChmNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuQ2xhc3NIb3VyID0gcGFyc2VGbG9hdChpLkNsYXNzSG91cikgKyBwYXJzZUZsb2F0KGY3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1OID0gbmV3IEFycmF5KCk7Ly/nrKzkuIDmrKHmt7vliqDopoHmmK/mlbDnu4RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU5bXCJhXCIgKyBmNi50b1N0cmluZygpXSA9IGY3LnRvU3RyaW5nKCkgKyBcIixcIiArIGY4LnRvU3RyaW5nKCk7Ly/moIfor4ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaVtmOV0gPSBpdGVtTjsvL+ivlemimOmbhuWQiFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb2ludEpzb24ubGVuZ3RoID09IDAgfHwgIXNhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3BvaW50SnNvbiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgX3BvaW50SnNvbi5FeGFtSUQgPSBFeGFtSUQ7XHJcbiAgICAgICAgICAgICAgICBfcG9pbnRKc29uLkV4YW1Lbm93SUQgPSBmMTtcclxuICAgICAgICAgICAgICAgIF9wb2ludEpzb24uQ2xhc3NIb3VyID0gZjg7XHJcbiAgICAgICAgICAgICAgICBfcG9pbnRKc29uLkRlZmF1bHRIb3VyID0gZjc7XHJcbiAgICAgICAgICAgICAgICBfcG9pbnRKc29uLlBvaW50SUQgPSBmMjA7XHJcbiAgICAgICAgICAgICAgICBfcG9pbnRKc29uLlBvaW50TmFtZSA9IGYzO1xyXG4gICAgICAgICAgICAgICAgX3BvaW50SnNvbi5OdW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgLy/lnKjor5XpopjliqDovb3kuK3lpITnkIYgX3BvaW50SnNvbltfUG9pbnRJRF0gPSAxOy8v54K55L2NXHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbU4gPSBuZXcgQXJyYXkoKTsvL+esrOS4gOasoea3u+WKoOimgeaYr+aVsOe7hFxyXG4gICAgICAgICAgICAgICAgaXRlbU5bXCJhXCIgKyBmNi50b1N0cmluZygpXSA9IGY3LnRvU3RyaW5nKCkgKyBcIixcIiArIGY4LnRvU3RyaW5nKCk7Ly/moIfor4ZcclxuICAgICAgICAgICAgICAgIF9wb2ludEpzb25bZjldID0gaXRlbU47Ly/or5Xpopjpm4blkIhcclxuICAgICAgICAgICAgICAgIHBvaW50SnNvbi5wdXNoKF9wb2ludEpzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwb2ludEpzb24gPSAkLmdyZXAocG9pbnRKc29uLCBmdW5jdGlvbiAoaSwgaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaS5Qb2ludElEID09IGYyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Y15piv5ZCm54K55Ye75Y+z5L6nZmFsc2UtLS3ngrnlh7vor5XpopjkuLp0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkuTnVtID0gcGFyc2VGbG9hdChpLk51bSkgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmNSB8fCBpLk51bSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+S/ruaUueivvuaXtlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlbZjldKS8v6L+Z6YGT6K+V6aKY5a+55bqU55+l6K+G54K55piv5ZCm5a2Y5ZyoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlbZjldW1wiYVwiICsgZjYudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGlbZjldW1wiYVwiICsgZjYudG9TdHJpbmcoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+05piO55+l6K+G54K55LiL5rKh5pyJ6K+V6aKY5LqGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGlbZjldKS5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLkRlZmF1bHRIb3VyID0gcGFyc2VGbG9hdChpLkRlZmF1bHRIb3VyKSAtIHBhcnNlRmxvYXQoZjcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLkNsYXNzSG91ciA9IHBhcnNlRmxvYXQoaS5DbGFzc0hvdXIpIC0gcGFyc2VGbG9hdChmNykgPCAwID8gcGFyc2VGbG9hdChpLkNsYXNzSG91cilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyc2VGbG9hdChpLkNsYXNzSG91cikgLSBwYXJzZUZsb2F0KGY3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL+aUueWPmOW9k+WJjeivlemimOeKtuaAgVxyXG4gICAgICAgICAgICBpZiAoIWY1KS8v5Y+q5pyJ6KaB5Y+z5L6n54K55Ye75pe2XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1Kc29uID0gJC5ncmVwKGl0ZW1Kc29uLCBmdW5jdGlvbiAoaSwgaikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpLlBhcmVudFBvaW50SUQgPT0gZjIwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8v5aaC5LiL54m55q6K77yM5LiN6IO95o2i5oiQZjJcclxuICAgICAgICAgICAgICAgIGlmIChfUG9pbnRJRC5zdWJzdHJpbmcoMCwgX1BvaW50SUQubGVuZ3RoIC0gMikgPT0gZjIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb250ZW50SWZyYW1lIGxpIGFbZGF0YS1hZGRiYXNrZXRdXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoXCJjb2xHXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiY29sR1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oXCJpXCIpLnJlbW92ZUNsYXNzKFwiZGVsYWxsXCIpLmFkZENsYXNzKFwiYmFza2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbihcInNwYW5cIikuaHRtbChcIuWKoOWFpeivlemimOevrlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vQmluZFJpZ2h0KCk7XHJcbiAgICAgICAgQmluZFJpZ2h0S0pTKCk7XHJcbiAgICB9O1xyXG4gICAgLy/liJ3lp4vljJbnn6Xor4bmqKHlnZdcclxuICAgIHZhciBCaW5kUG9pbnQgPSBmdW5jdGlvbiAoZjEsIGYyLCBmMywgZjQsIGY1LCBmNilcclxuICAgIHtcclxuICAgICAgICBpZiAoaXNGaXJzdCAmJiBmNCkge1xyXG4gICAgICAgICAgICB2YXIgX3BvaW50SnNvbiA9IHt9O1xyXG4gICAgICAgICAgICBfcG9pbnRKc29uLkV4YW1JRCA9IEV4YW1JRDtcclxuICAgICAgICAgICAgX3BvaW50SnNvbi5FeGFtS25vd0lEID0gZjE7XHJcbiAgICAgICAgICAgIF9wb2ludEpzb24uQ2xhc3NIb3VyID0gZjU7XHJcbiAgICAgICAgICAgIF9wb2ludEpzb24uRGVmYXVsdEhvdXIgPSBmNjtcclxuICAgICAgICAgICAgX3BvaW50SnNvbi5Qb2ludElEID0gZjI7XHJcbiAgICAgICAgICAgIF9wb2ludEpzb24uUG9pbnROYW1lID0gZjM7XHJcbiAgICAgICAgICAgIF9wb2ludEpzb24uTnVtID0gMDtcclxuICAgICAgICAgICAgaWYgKGl0ZW1Kc29uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICQuZWFjaChpdGVtSnNvbiwgZnVuY3Rpb24gKGksIGopIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoai5QYXJlbnRQb2ludElEID09IGYyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcG9pbnRKc29uLk51bSA9IHBhcnNlRmxvYXQoX3BvaW50SnNvbi5OdW0pICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3BvaW50SnNvbi5OdW0gPSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwb2ludEpzb24ucHVzaChfcG9pbnRKc29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIC8v5b2T5rKh5pyJ6K+V6aKY5pe2LS0tLS0tLS0tLS0tLS3mlLbol49cclxuICAgIHZhciBHZXRFbXB0eSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbnRlbnRJZnJhbWVcIikuaHRtbCgnPGxpIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+5pqC5pe25rKh5pyJ6K+V6aKYPC9saT4nKTtcclxuICAgICAgICAkKFwiI2RpdlBhZ2VMaXN0XCIpLmh0bWwoXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBJbml0MCA9IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgU2hvd0xvYWRpbmcoJChcIiNMTlwiKSk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcIi9FeGFtL0V4YW0vXCIgKyBmLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBFeGFtSUQ6IEV4YW1JRCxcclxuICAgICAgICAgICAgICAgIGVkdTogZWR1LFxyXG4gICAgICAgICAgICAgICAgYXJ0U2NpZW5jZTogYXJ0U2NpZW5jZSxcclxuICAgICAgICAgICAgICAgIFN1YmplY3RJRDogU3ViamVjdElELFxyXG4gICAgICAgICAgICAgICAgU3RhZ2VJRDogU3RhZ2VJRFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRmlyc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBFeGFtQ29kZSA9IGUuTi5ULkV4YW1Db2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4YW1JbmZvID0gZS5OLlQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUpzb24gPSBlLk4uSTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICQoXCIjTE5cIikuaHRtbChcIlwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChlLk4uUC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjTDJcIikudG1wbChbeyBcIkxldmVsXCI6IC0xIH1dKS5hcHBlbmRUbyhcIiNMTlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBPUyA9IDA7IHZhciBPU19TID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUuTi5QLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLk4uUFtpXS5MZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT1MgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuTi5QW2ldLklzT3BlbiA9IE9TID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjTDJcIikudG1wbChlLk4uUFtpXSkuYXBwZW5kVG8oXCIjTE5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT1NfUyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5OLlBbaV0uSXNTZWxlY3RlZCA9IE9TX1MgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNMMlwiKS50bXBsKGUuTi5QW2ldKS5hcHBlbmRUbygoXCIjTE4gI1wiICsgZS5OLlBbaV0uUGFyZW50SUQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0ZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQmluZFJpZ2h0S0pTKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQmluZFJpZ2h0KCk7Ly/nrKzkuIDmrKHnu5HlrppcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlzRmlyc3QgPSBmYWxzZTsvL+mHjeimgVxyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjbmV3UmlnaHRcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBJbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjTE4sI2NvbnRlbnRJZnJhbWUsI2RpdlBhZ2VMaXN0XCIpLmh0bWwoXCJcIik7XHJcbiAgICAgICAgTmFuSW5pdCgpO1xyXG4gICAgICAgIGlmICgkKFwiI2NvbVR5cGUgYVtkYXRhLWFyZWFpZF1bY2xhc3MqPSdjb2xZJ11cIikuYXR0cihcImRhdGEtYXJlYWlkXCIpID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgIEluaXQwKFwiR2V0TWl4SW5kZXhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBJbml0MChcIkdldE1peEluZGV4S2VlcFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIENsb3NlT3BlbiA9IGZ1bmN0aW9uIChmMSkge1xyXG4gICAgICAgICQoXCIjTE4gaVtjbGFzcyo9J2xpX2Nsb3NlJ11cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnNpYmxpbmdzKFwiYVwiKS5hdHRyKFwiZGF0YS1pZFwiKSA9PSBmMSk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImxpX2Nsb3NlXCIpLmFkZENsYXNzKFwibGlfb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoXCJ1bFwiKS50b2dnbGUoMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoJCgoXCIjXCIgKyBmMSkpLnBhcmVudCgpLmNoaWxkcmVuKFwiaVwiKS5oYXNDbGFzcyhcImxpX2Nsb3NlXCIpKSB7XHJcbiAgICAgICAgICAgICQoKFwiI1wiICsgZjEpKS5wYXJlbnQoKS5jaGlsZHJlbihcImlcIikucmVtb3ZlQ2xhc3MoXCJsaV9jbG9zZVwiKS5hZGRDbGFzcyhcImxpX29wZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKChcIiNcIiArIGYxKSkucGFyZW50KCkuY2hpbGRyZW4oXCJpXCIpLnJlbW92ZUNsYXNzKFwibGlfb3BlblwiKS5hZGRDbGFzcyhcImxpX2Nsb3NlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI1wiICsgZjEpLnRvZ2dsZSgzMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgTmFuSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI3RvdGFsUXVlc1wiKS50ZXh0KDApO1xyXG4gICAgfTtcclxuICAgIHZhciBjbGlja0l0ZW0gPSBmdW5jdGlvbiAoZjEsIGYyLCBmMywgZjQsIGY1LCBmNiwgZjcpXHJcbiAgICB7XHJcbiAgICAgICAgX1BvaW50SUQgPSBmMTtcclxuICAgICAgICBfU2VjSUQgPSBmMjtcclxuICAgICAgICBfRXhhbUtub3dJRCA9IGYzO1xyXG4gICAgICAgIF9Qb2ludE5hbWUgPSBmNDtcclxuICAgICAgICBfUFBvaW50TmFtZSA9IGY2O1xyXG4gICAgICAgIF9UaW1lID0gZjU7XHJcbiAgICAgICAgX0RlZmF1bHRIb3VyID0gZjc7XHJcbiAgICAgICAgaWYgKCQoKFwiYVtkYXRhLWlkPSdcIiArIGYxICsgXCInXVwiKSkuaGFzQ2xhc3MoXCJjdXJcIikpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiYVtkYXRhLWlkXVwiKS5yZW1vdmVDbGFzcyhcImN1clwiKTtcclxuICAgICAgICAgICAgJCgoXCJhW2RhdGEtaWQ9J1wiICsgZjEgKyBcIiddXCIpKS5hZGRDbGFzcyhcImN1clwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTmFuSW5pdCgpO1xyXG5cclxuICAgICAgICBHZXRJdGVtcyhmMSwgZjIsIGYzLCBmNCwgZjUsIGY2LCBmNyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBHZXRJdGVtQ29sbGVjdFN0YXRlID0gZnVuY3Rpb24gKGUwKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcIi9FeGFtL0V4YW0vR2V0SXRlbUNvbGxlY3RTdGF0ZVwiLFxyXG4gICAgICAgICAgICBhc3luYzogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFFJRDogZTAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnRJZnJhbWUgbGkgYVtkYXRhLWFkZHN0b3JlPSdcIiArIGVbaV0gKyBcIiddXCIpLmVhY2goZnVuY3Rpb24gKGksIGopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChqKS5yZW1vdmVDbGFzcyhcImNvbEdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChqKS5jaGlsZHJlbihcImlcIikucmVtb3ZlQ2xhc3MoXCJjb2xsZWN0XCIpLmFkZENsYXNzKFwiaGFzY29sbGVjdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGopLmNoaWxkcmVuKFwic3BhblwiKS50ZXh0KFwi5Y+W5raI5pS26JePXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLy/mt7vliqDmlLbol49cclxuICAgIHZhciBBZGRJdGVtID0gZnVuY3Rpb24gKGUwLCBlMSkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCIvRXhhbS9FeGFtL0FkZEl0ZW1Db2xsZWN0XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFFJRDogZTAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGUxKS5yZW1vdmVDbGFzcyhcImNvbEdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZTEpLmNoaWxkcmVuKFwiaVwiKS5yZW1vdmVDbGFzcyhcImNvbGxlY3RcIikuYWRkQ2xhc3MoXCJoYXNjb2xsZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGUxKS5jaGlsZHJlbihcInNwYW5cIikudGV4dChcIuWPlua2iOaUtuiXj1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvL+WPlua2iOaUtuiXj1xyXG4gICAgdmFyIFJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoZTAsIGUxKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcIi9FeGFtL0V4YW0vUmVtb3ZlSXRlbUNvbGxlY3RcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgUUlEOiBlMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZTEpLmFkZENsYXNzKFwiY29sR1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChlMSkuY2hpbGRyZW4oXCJpXCIpLnJlbW92ZUNsYXNzKFwiaGFzY29sbGVjdFwiKS5hZGRDbGFzcyhcImNvbGxlY3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZTEpLmNoaWxkcmVuKFwic3BhblwiKS50ZXh0KFwi5re75Yqg5pS26JePXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgR2V0SXRlbSA9IGZ1bmN0aW9uIChmKSB7XHJcblxyXG4gICAgICAgIGlmIChfU2VjSUQgPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBTaG93TG9hZGluZygkKFwiI2NvbnRlbnRJZnJhbWVcIikpO1xyXG5cclxuICAgICAgICB2YXIgaWRzID0gX1NlY0lEO1xyXG5cclxuICAgICAgICAvL+S5i+WJjeeahOmAu+i+kVxyXG4gICAgICAgIC8vaWRzID0gJChcIiNcIiArIF9Qb2ludElEKS5maW5kKFwiYVtkYXRhLXNlY2lkIT0nJ11cIikubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICByZXR1cm4gJCh0aGlzKS5hdHRyKFwiZGF0YS1zZWNpZFwiKTtcclxuICAgICAgICAvL30pLmdldCgpLmpvaW4oXCIsXCIpO1xyXG5cclxuICAgICAgICAvL2lmIChpZHMgPT0gXCJcIikvL+atpOaXtueCueWHu+eahOaYr+WPtuWtkFxyXG4gICAgICAgIC8ve1xyXG4gICAgICAgIC8vICAgIGlkcyA9IF9TZWNJRDtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgLy/popjlnotcclxuICAgICAgICB2YXIgZGlmZiA9ICQoXCIjZGlmZklkIGFbY2xhc3MqPSdjb2xZJ11cIikuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgICAgICB2YXIgc3QgPSAkKFwiI3ZpZXdBZGlmZmljdWx0eXNvcnQgYVtjbGFzcyo9J2NvbFknXVwiKTtcclxuICAgICAgICB2YXIgc29ydHR5cGUgPSBzdC5hdHRyKFwiZGF0YS1zb3J0XCIpO1xyXG4gICAgICAgIHZhciBzb3J0ID0gc3QuYXR0cihcImRhdGEtc29ydFZcIik7XHJcblxyXG4gICAgICAgIHZhciB1cmxLID0gJChcIiNjb21UeXBlIGFbY2xhc3MqPSdjb2xZJ11cIikuYXR0cihcImRhdGEtYXJlYWlkXCIpO1xyXG5cclxuICAgICAgICAvL3ZhciB1cmwgPSB1cmxLID09IFwiMFwiID8gXCIvUmVzb3VyY2UvUXVlc3Rpb25zL0dldFF1ZXNMaXN0XCJcclxuICAgICAgICAvLyAgICA6IFwiL1Jlc291cmNlL1F1ZXN0aW9ucy9HZXRRdWVzTGlzdENvbGxcIjtcclxuXHJcbiAgICAgICAgdmFyIHVybCA9IHVybEsgPT0gXCIwXCIgPyBcIi9FeGFtL0V4YW0vR2V0UXVlc0xpc3RcIlxyXG4gICAgICAgICAgIDogXCIvRXhhbS9FeGFtL0dldFN0b3JlTGlzdFwiO1xyXG5cclxuICAgICAgICB2YXIgX2lzR29vZCA9IC0xO1xyXG4gICAgICAgIGlmICgoK1N1YmplY3RJRCA9PSAxNCkgJiYgKCtTdGFnZUlEID09IDEpKVxyXG4gICAgICAgICAgICBfaXNHb29kID0gMTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIElzR29vZDogLTEsXHJcbiAgICAgICAgICAgICAgICBmX2lkOiBpZHMsXHJcbiAgICAgICAgICAgICAgICBkaWZmOiBkaWZmLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IDEsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogZixcclxuICAgICAgICAgICAgICAgIHNvcnR0eXBlOiBzb3J0dHlwZSwvL+aOkuW6j+exu+Weizow5pe26Ze0OzE757uE5Y235qyh5pWwOzLpmr7mmJNcclxuICAgICAgICAgICAgICAgIHNvcnQ6IHNvcnQvL+aOkuW6jyAw5Y2H5bqPOzHpmY3luo9cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudElmcmFtZVwiKS5odG1sKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLkRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5EYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNCaW5kUXVlc0xpc3RfdGVtcFwiKS50bXBsKGUpLmFwcGVuZFRvKCcjY29udGVudElmcmFtZScpOy8v5qC55o2u5qih5p2/57uR5a6a6K+V6aKY5YiX6KGo5pWw5o2uXHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBNYXRoSmF4Lkh1Yi5RdWV1ZShbXCJUeXBlc2V0XCIsIE1hdGhKYXguSHViLCAkKFwiI2NvbnRlbnRJZnJhbWVcIikuZ2V0KDApXSk7IC8vVGhlIGZvcm11bGEgZm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnF1aXpQdXRUYWcnKS5odG1sKCfjgIDjgIDjgIAnKTsgLy9SZW1vdmUgdGhlIGFuc3dlclxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNkaXZQYWdlTGlzdFwiKS5odG1sKGUuUGFnZU5hdmlnYXRlKTtcclxuICAgICAgICAgICAgICAgICQoJyN0b3RhbFF1ZXMnKS5odG1sKGUuVG90YWxDb3VudCk7IC8v6K+V6aKY5oC75pWwXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLkRhdGEgJiYgZS5EYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXJsSyA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga0lEID0gJChcIiNjb250ZW50SWZyYW1lIGxpIGFbZGF0YS1hZGRzdG9yZV1cIikubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmF0dHIoXCJkYXRhLWFkZHN0b3JlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5nZXQoKS5qb2luKFwiLFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgR2V0SXRlbUNvbGxlY3RTdGF0ZShrSUQpOy8v5pS26JePXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnRJZnJhbWUgbGkgYVtkYXRhLWFkZHN0b3JlXVwiKS5lYWNoKGZ1bmN0aW9uIChpLCBqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoaikucmVtb3ZlQ2xhc3MoXCJjb2xHXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoaikuY2hpbGRyZW4oXCJpXCIpLnJlbW92ZUNsYXNzKFwiY29sbGVjdFwiKS5hZGRDbGFzcyhcImhhc2NvbGxlY3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChqKS5jaGlsZHJlbihcInNwYW5cIikudGV4dChcIuWPlua2iOaUtuiXj1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKue7keWumuivlemimOebuOWFsyDkuovku7bpm4blkIgqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgICAgICAgICAgICAgLyrnu5HlrprliIbpobXkuovku7YqL1xyXG4gICAgICAgICAgICAgICAgJChcIi5wYWdlTGlua1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VJbmRleCA9ICQodGhpcykuYXR0cihcImRhdGEtcGFnZUluZGV4XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBHZXRJdGVtKHBhZ2VJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8q6Kej5p6QIOWxleW8gOaUtui1tyovXHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnRJZnJhbWUgbGlcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gJCh0aGlzKS5maW5kKFwiZGl2W2RhdGEtdmFsdWVdXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmhhcyhcInNwYW5cIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmlzKFwiOmhpZGRlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5zaG93KDMwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmhpZGUoMzAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldiA9IEdldFF1ZXN0aW9uRXh0ZW5kSW5mbyhkLmF0dHIoXCJkYXRhLXZhbHVlXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAocmV2KSAhPSBcInVuZGVmaW5lZFwiICYmIHJldi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGh0bWwgPSBcIjxzcGFuIGNsYXNzPSdtYjEwIGInPuetlOahiO+8mjwvc3Bhbj48ZGl2PlwiICsgcmV2WzBdLkFuc3dlciArIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1waHRtbCArPSBcIjxzcGFuIGNsYXNzPSdtYjEwIGInPuivlemimOWIhuaekO+8mjwvc3Bhbj48ZGl2PlwiICsgcmV2WzBdLldheXMgKyBcIjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5odG1sKHRlbXBodG1sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGhKYXguSHViLlF1ZXVlKFtcIlR5cGVzZXRcIiwgTWF0aEpheC5IdWIsIGQuZ2V0KDApXSk7IC8vVGhlIGZvcm11bGEgZm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucXVpelB1dFRhZycpLmh0bWwoJ+OAgOOAgOOAgCcpOyAvL1JlbW92ZSB0aGUgYW5zd2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5zaG93KDMwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8q57qg6ZSZIOe7keWumuS6i+S7tiovXHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnRJZnJhbWUgbGlcIikuZGVsZWdhdGUoXCJhW2RhdGEtZmluZHdyb25nXVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOy8v6Zi75q2i5LqL5Lu25YaS5rOhXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWZpbmR3cm9uZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3NlbFR5cGVcIikudmFsKDE0KTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3NwYW5JdGVtSURcIikuYXR0cihcImRhdGEtaXRlbWlkXCIsIGl0ZW1pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzcGFuSXRlbUlEXCIpLmh0bWwoXCLor5XpopgtXCIgKyBpdGVtaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdGV4dGFyZWFcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3Rpb25EaWFsb2cgPSBhcnQuZGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi57qg6ZSZXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJChcIiNkaXZjb3JyZWN0aW9uXCIpWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnYXV0bycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLyrmt7vliqDmlLbol48g57uR5a6a5LqL5Lu2Ki9cclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudElmcmFtZSBsaVwiKS5kZWxlZ2F0ZShcImFbZGF0YS1hZGRzdG9yZV1cIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsvL+mYu+atouS6i+S7tuWGkuazoVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJfcWlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1hZGRzdG9yZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImNvbEdcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkSXRlbShjdXJfcWlkLCAkKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZUl0ZW0oY3VyX3FpZCwgJCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLyrmt7vliqDor5Xpopgg57uR5a6a5LqL5Lu2Ki9cclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudElmcmFtZSBsaVwiKS5kZWxlZ2F0ZShcImFbZGF0YS1hZGRiYXNrZXRdXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7Ly/pmLvmraLkuovku7blhpLms6FcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyX3FpZCA9ICQodGhpcykuYXR0cihcImRhdGEtYWRkYmFza2V0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImNvbEdcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDor5XpophcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uSXRlbShfRXhhbUtub3dJRCwgX1NlY0lELCBfUG9pbnRJRCwgY3VyX3FpZCwgJCh0aGlzKS5hdHRyKFwiZGF0YS1udW1cIiksIF9Qb2ludE5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJBZGRQb2ludChfRXhhbUtub3dJRCwgX1BvaW50SUQsIF9QUG9pbnROYW1lLCB0cnVlLCBmYWxzZSwgY3VyX3FpZCwgX0RlZmF1bHRIb3VyLCBfVGltZSwgX1BvaW50TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5L+u5pS56aKc6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJjb2xHXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwiaVwiKS5yZW1vdmVDbGFzcyhcImJhc2tldFwiKS5hZGRDbGFzcyhcImRlbGFsbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbihcInNwYW5cIikuaHRtbChcIuenu+WHuuivlemimOevrlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbkl0ZW0oX0V4YW1Lbm93SUQsIF9TZWNJRCwgX1BvaW50SUQsIGN1cl9xaWQsICQodGhpcykuYXR0cihcImRhdGEtbnVtXCIpLCBfUG9pbnROYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN1YkFkZFBvaW50KF9FeGFtS25vd0lELCBfUG9pbnRJRCwgX1BQb2ludE5hbWUsIGZhbHNlLCB0cnVlLCBjdXJfcWlkLCBfRGVmYXVsdEhvdXIsIF9UaW1lLCBfUG9pbnROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImNvbEdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oXCJpXCIpLnJlbW92ZUNsYXNzKFwiZGVsYWxsXCIpLmFkZENsYXNzKFwiYmFza2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwic3BhblwiKS5odG1sKFwi5Yqg5YWl6K+V6aKY56+uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8q5omT5byA6K+V5Y23IOe7keWumuS6i+S7tiovXHJcbiAgICAgICAgICAgICAgICAvLyQoXCIjY29udGVudElmcmFtZSBsaVwiKS5kZWxlZ2F0ZShcImFbY2xhc3M9J2NvbEcgaGFuZCddXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsvL+mYu+atouS6i+S7tuWGkuazoVxyXG4gICAgICAgICAgICAgICAgLy8gICAgdmFyIGN1cl9wYXBlcmlkID0gJCh0aGlzKS5hdHRyKFwicGFwZXJpZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgICB2YXIgaCA9IFwiL1Jlc291cmNlL1F1ZXN0aW9ucy9QYXBlckRldGFpbD9wYXBlcmlkPVwiICsgY3VyX3BhcGVyaWQ7XHJcbiAgICAgICAgICAgICAgICAvLyAgICB3aW5kb3cub3BlbihoLCBcIlwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgLy99KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50SWZyYW1lIGxpIGFbZGF0YS1hZGRiYXNrZXRdXCIpLmVhY2goZnVuY3Rpb24gKGksIGopIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VyX3FpZCA9ICQodGhpcykuYXR0cihcImRhdGEtYWRkYmFza2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaUogPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChpdGVtSnNvbiwgZnVuY3Rpb24gKGksIGopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGouSXRlbUlELnRvU3RyaW5nKCkgPT0gY3VyX3FpZC50b1N0cmluZygpICYmIGouUG9pbnROYW1lID09IF9Qb2ludE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaUogPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlKKS8v5L+u5pS55Li65Y+W5raI5re75YqgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5L+u5pS56aKc6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiY29sR1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oXCJpXCIpLnJlbW92ZUNsYXNzKFwiYmFza2V0XCIpLmFkZENsYXNzKFwiZGVsYWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbihcInNwYW5cIikuaHRtbChcIuenu+WHuuivlemimOevrlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6YeN6KaBLS0t5Zyo5Yqg6L296K+V6aKY55qE5pe25YCZ77yM5L+u5pS555+l6K+G5qih5Z2X55qEdGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50SnNvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHBvaW50SnNvbiwgZnVuY3Rpb24gKG0sIG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLlBvaW50SUQgPT0gX1BvaW50SUQuc3Vic3RyaW5nKDAsIF9Qb2ludElELmxlbmd0aCAtIDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5bX1BvaW50TmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5bX1BvaW50TmFtZV1bXCJhXCIgKyBjdXJfcWlkLnRvU3RyaW5nKCldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbltfUG9pbnROYW1lXVtcImFcIiArIGN1cl9xaWQudG9TdHJpbmcoKV0gPSBfRGVmYXVsdEhvdXIudG9TdHJpbmcoKSArIFwiLFwiICsgX1RpbWUudG9TdHJpbmcoKTsvL+agh+ivhlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1OID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1OW1wiYVwiICsgY3VyX3FpZC50b1N0cmluZygpXSA9IF9EZWZhdWx0SG91ci50b1N0cmluZygpICsgXCIsXCIgKyBfVGltZS50b1N0cmluZygpOy8v5qCH6K+GXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5bX1BvaW50TmFtZV0gPSBpdGVtTjsvL+ivlemimOmbhuWQiFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8v5pON5L2c6K+V6aKYLy9FeGFtS25vd0lELS0tLS1zZWNpZC0tLXBvaW50aWQtLS0tLUl0ZW1JRC0tLS0tRGlmZk51bS0tLS0tLS0tLVBvaW50TmFtZS0tLS0tLS0tLS0tLSstdHJ1ZS9mYWxzZVxyXG5cclxuICAgIHZhciBBY3Rpb25JdGVtID0gZnVuY3Rpb24gKGYxLCBmMiwgZjMsIGY0LCBmNSwgZjYsIGY3KSB7XHJcbiAgICAgICAgaWYgKGY3KSB7XHJcbiAgICAgICAgICAgIHZhciBfaXRlbUpzb24gPSB7fTtcclxuICAgICAgICAgICAgX2l0ZW1Kc29uLkV4YW1Lbm93SUQgPSBmMTtcclxuICAgICAgICAgICAgX2l0ZW1Kc29uLkl0ZW1JRCA9IGY0O1xyXG4gICAgICAgICAgICBfaXRlbUpzb24uUGFyZW50UG9pbnRJRCA9IGYzLnN1YnN0cmluZygwLCBmMy5sZW5ndGggLSAyKTtcclxuICAgICAgICAgICAgX2l0ZW1Kc29uLkRpZmZOdW0gPSBmNTtcclxuICAgICAgICAgICAgX2l0ZW1Kc29uLlBvaW50SUQgPSBmMjtcclxuICAgICAgICAgICAgX2l0ZW1Kc29uLlBvaW50TmFtZSA9IGY2O1xyXG4gICAgICAgICAgICBpdGVtSnNvbi5wdXNoKF9pdGVtSnNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXRlbUpzb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbUpzb24gPSAkLmdyZXAoaXRlbUpzb24sIGZ1bmN0aW9uIChpLCBqKSB7Ly/np7vlh7pcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaS5JdGVtSUQgPT0gZjQgJiYgaS5Qb2ludElEID09IGYyICYmIGkuUG9pbnROYW1lID09IGY2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIEdldEl0ZW1zID0gZnVuY3Rpb24gKGYxLCBmMiwgZjMsIGY0LCBmNSwgZjYsIGY3KSB7XHJcbiAgICAgICAgX1BvaW50SUQgPSBmMTtcclxuICAgICAgICBfU2VjSUQgPSBmMjtcclxuICAgICAgICBfRXhhbUtub3dJRCA9IGYzO1xyXG4gICAgICAgIF9Qb2ludE5hbWUgPSBmNDtcclxuICAgICAgICBfUFBvaW50TmFtZSA9IGY2O1xyXG4gICAgICAgIF9UaW1lID0gZjU7XHJcbiAgICAgICAgX0RlZmF1bHRIb3VyID0gZjc7XHJcbiAgICAgICAgR2V0SXRlbSgxKTtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH07XHJcbiAgICB2YXIgU2F2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaWogPSB0cnVlO1xyXG4gICAgICAgICQoXCIjc3VtVCA6aW5wdXRcIikuZWFjaChmdW5jdGlvbiAoaSwgaikge1xyXG4gICAgICAgICAgICBpZiAoaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKCQoaikudmFsKCkpIHx8ICQoaikudmFsKCkgPT0gXCJcIiB8fCAkKGopLnZhbCgpID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChqKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlqID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICgkKFwiI29rXCIpLmF0dHIoXCJkYXRhLW9uXCIpID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgICQoXCIjb2tcIikuYXR0cih7IFwiZGF0YS1vblwiOiBcIjFcIiB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI29rXCIpLmF0dHIoeyBcImRhdGEtb25cIjogXCIwXCIgfSk7XHJcbiAgICAgICAgaWYgKGlqKSB7XHJcbiAgICAgICAgICAgIC8v5L+u5pS56K++5pe2XHJcbiAgICAgICAgICAgICQoXCIjc3VtVCA6aW5wdXRcIikuZWFjaChmdW5jdGlvbiAoaSwgaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGopIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWogPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWpWID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2gocG9pbnRKc29uLCBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHkuUG9pbnRJRCA9PSBpaikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkuQ2xhc3NIb3VyID0gaWpWO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIFNjaGVkdWxlZFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAkLmVhY2goaXRlbUpzb24sIGZ1bmN0aW9uIChpLCBqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBETiA9IHBhcnNlRmxvYXQoai5EaWZmTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICBTY2hlZHVsZWRUaW1lICs9IEROIDw9IDIwID8gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IEROIDw9IDQwID8gMS4yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogRE4gPD0gNjAgPyAxLjVcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBETiA8PSA4MCA/IDEuOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL0V4YW0vRXhhbS9TYXZlTWl4SW5kZXhcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBFeGFtTmFtZTogZXNjYXBlKCQoXCIjZXhhbU5hbWVcIikudmFsKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIFNjaGVkdWxlZFRpbWU6IE1hdGguY2VpbChTY2hlZHVsZWRUaW1lKSxcclxuICAgICAgICAgICAgICAgICAgICBFeGFtSUQ6IEV4YW1JRCxcclxuICAgICAgICAgICAgICAgICAgICBQb2ludHM6IEpTT04uc3RyaW5naWZ5KHBvaW50SnNvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgSXRlbXM6IEpTT04uc3RyaW5naWZ5KGl0ZW1Kc29uKSxcclxuICAgICAgICAgICAgICAgICAgICBFeGFtQ29kZTogRXhhbUNvZGVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFVUcmltOy8vXCIvRXhhbS9JbmRleC9TdWJJbmRleFNcIjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGUpLy/lj6/og73msqHmnInnmbvlvZVcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI29rXCIpLmF0dHIoeyBcImRhdGEtb25cIjogXCIxXCIgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjb2tcIikuYXR0cih7IFwiZGF0YS1vblwiOiBcIjFcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBuZXh0U3RlcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJChcIiNUU3VtXCIpLmh0bWwoKSA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgcCA9IG5ld0JDb21tb24uc2hvd2RpYWxvZyhcIiNwb3BTdXJlXCIsIFwi5o+Q56S6XCIpO1xyXG4gICAgICAgICAgICAvLyQoXCIuYXVpX3RpdGxlXCIpLmNzcyh7IFwibWFyZ2luLWxlZnRcIjogXCIxNTBweFwiIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKFwiI2V4YW1OYW1lXCIpLnZhbChleGFtSW5mby5FeGFtTmFtZSk7XHJcblxyXG4gICAgICAgICQoXCIjc3VtVFwiKS5odG1sKFwiXCIpO1xyXG5cclxuICAgICAgICAkKFwiI3BvcFBvaW50SlNcIikudG1wbChwb2ludEpzb24pLmFwcGVuZFRvKFwiI3N1bVRcIik7XHJcblxyXG4gICAgICAgIHZhciB0VFN1bSA9IDA7XHJcbiAgICAgICAgJChcIiNzdW1UIDppbnB1dFwiKS5lYWNoKGZ1bmN0aW9uIChpLCBqKSB7XHJcbiAgICAgICAgICAgIGlmIChqKSB7XHJcbiAgICAgICAgICAgICAgICB0VFN1bSArPSBwYXJzZUZsb2F0KCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCIjdFRcIikuaHRtbCh0VFN1bSk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgcCA9IG5ld0JDb21tb24uc2hvd2RpYWxvZyhcIiNwb3BJRFwiLCBcIuS/neWtmOa1i+ivhOivleWNt1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHByZVZpZXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQoXCIjVFN1bVwiKS5odG1sKCkgPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHAgPSBuZXdCQ29tbW9uLnNob3dkaWFsb2coXCIjcG9wSW5mb1wiLCBcIuS/oeaBr1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICBwID0gbmV3QkNvbW1vbi5zaG93ZGlhbG9nKFwiI3BvcFByZVwiLCBcIumihOiniOivleWNt1wiKTtcclxuXHJcbiAgICAgICAgJCgnLmVuZ2xpc2hfc2hvdycpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgJCgnLmFsbF9jaGVja2VkJykuY3NzKCdvcGFjaXR5JywgMSk7XHJcblxyXG4gICAgICAgIFNob3dMb2FkaW5nKCQoXCIjdGl0bGVCXCIpKTtcclxuXHJcbiAgICAgICAgYnNQID0ge307XHJcblxyXG4gICAgICAgIGJzSSA9IHt9O1xyXG5cclxuICAgICAgICBic3MgPSBcIlwiO1xyXG5cclxuICAgICAgICBpc3MgPSAxO1xyXG5cclxuICAgICAgICBqc3MgPSAxO1xyXG4gICAgICAgIC8v5o6S5bqPXHJcbiAgICAgICAgdmFyIG5ld0l0ZW1Kc29uID0gW107XHJcbiAgICAgICAgJC5lYWNoKHBvaW50SnNvbiwgZnVuY3Rpb24gKGksIGopIHtcclxuICAgICAgICAgICAgaWYgKGopIHtcclxuICAgICAgICAgICAgICAgICQuZWFjaChpdGVtSnNvbiwgZnVuY3Rpb24gKG0sIG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoai5Qb2ludElEID09IG4uUGFyZW50UG9pbnRJRClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1Kc29uLnB1c2gobik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIG1JRCA9ICQubWFwKG5ld0l0ZW1Kc29uLCBmdW5jdGlvbiAoaSwgaikgeyByZXR1cm4gaS5JdGVtSUQgfSkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcIi9FeGFtL0V4YW0vR2V0TWl4SW5kZXhQb3BcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogbUlEXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3RpdGxlQlwiKS5odG1sKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiN0aXRsZUFcIikuaHRtbChleGFtSW5mby5FeGFtTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNwb3BJdGVtc1wiKS50bXBsKGUuTi5OKS5hcHBlbmRUbyhcIiN0aXRsZUJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgTWF0aEpheC5IdWIuUXVldWUoW1wiVHlwZXNldFwiLCBNYXRoSmF4Lkh1YiwgJChcIiN0aXRsZUJcIikuZ2V0KDApXSk7IC8vVGhlIGZvcm11bGEgZm9ybWF0XHJcbiAgICAgICAgICAgICAgICAkKCcucXVpelB1dFRhZycpLmh0bWwoJ+OAgOOAgOOAgCcpOyAvL1JlbW92ZSB0aGUgYW5zd2VyXHJcblxyXG4gICAgICAgICAgICAgICAgb25DbGlja1BvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbkNsaWNrUG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjdGl0bGVCIGFbZGF0YS1wcG9pbnRuYW1lXVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfRXhhbUtub3dJRDEgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLUV4YW1Lbm93SURcIik7XHJcbiAgICAgICAgICAgIHZhciBfU2VjSUQxID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1Qb2ludElEXCIpO1xyXG4gICAgICAgICAgICB2YXIgX1BvaW50SUQxID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1QUG9pbnRJRFwiKSArIFwiMDBcIjtcclxuICAgICAgICAgICAgdmFyIF9udW0xID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1kaWZmbnVtXCIpO1xyXG4gICAgICAgICAgICB2YXIgX1BvaW50TmFtZTEgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLVBvaW50TmFtZVwiKTtcclxuICAgICAgICAgICAgdmFyIF9QUG9pbnROYW1lMSA9ICQodGhpcykuYXR0cihcImRhdGEtUFBvaW50TmFtZVwiKTtcclxuICAgICAgICAgICAgdmFyIF9EZWZhdWx0SG91cjEgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLURlZmF1bHRcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGlJRCA9ICQodGhpcykuYXR0cihcImRhdGEtaXRlbWlkXCIpO1xyXG4gICAgICAgICAgICB2YXIgJGkgPSAkKChcIiNjb250ZW50SWZyYW1lIGxpIGFbZGF0YS1hZGRiYXNrZXQ9J1wiICsgaUlEICsgXCInXVwiKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImNvbEdcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ivlemimFxyXG4gICAgICAgICAgICAgICAgICAgIEFjdGlvbkl0ZW0oX0V4YW1Lbm93SUQxLCBfU2VjSUQxLCBfUG9pbnRJRDEsIGlJRCwgX251bTEsIF9Qb2ludE5hbWUxLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBTdWJBZGRQb2ludChfRXhhbUtub3dJRDEsIF9Qb2ludElEMSwgX1BQb2ludE5hbWUxLCB0cnVlLCBmYWxzZSwgaUlELCBfRGVmYXVsdEhvdXIxLCBfRGVmYXVsdEhvdXIxLCBfUG9pbnROYW1lMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJjb2xHXCIpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbihcImlcIikucmVtb3ZlQ2xhc3MoXCJiYXNrZXRcIikuYWRkQ2xhc3MoXCJkZWxhbGxcIik7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwic3BhblwiKS5odG1sKFwi56e75Ye66K+V6aKY56+uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkaS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQWN0aW9uSXRlbShfRXhhbUtub3dJRDEsIF9TZWNJRDEsIF9Qb2ludElEMSwgaUlELCBfbnVtMSwgX1BvaW50TmFtZTEsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBTdWJBZGRQb2ludChfRXhhbUtub3dJRDEsIF9Qb2ludElEMSwgX1BQb2ludE5hbWUxLCBmYWxzZSwgdHJ1ZSwgaUlELCBfRGVmYXVsdEhvdXIxLCBfRGVmYXVsdEhvdXIxLCBfUG9pbnROYW1lMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImNvbEdcIik7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwiaVwiKS5yZW1vdmVDbGFzcyhcImRlbGFsbFwiKS5hZGRDbGFzcyhcImJhc2tldFwiKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oXCJzcGFuXCIpLmh0bWwoXCLliqDlhaXor5Xpopjnr65cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIEsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGtleW51bSA9IGV2ZW50LmtleUNvZGU7XHJcbiAgICAgICAgaWYgKGtleW51bSA9PSAzMiB8fCBrZXludW0gPT0gMzQgfHwga2V5bnVtID09IDM5IHx8IGtleW51bSA9PSA0NyB8fCBrZXludW0gPT0gOTIgfHwga2V5bnVtID09IDU4IHx8IGtleW51bSA9PSA1OSB8fCBrZXludW0gPT0gNjAgfHwga2V5bnVtID09IDYyIHx8IGtleW51bSA9PSA2MyB8fCBrZXludW0gPT0gOTEgfHwga2V5bnVtID09IDkzIHx8IGtleW51bSA9PSAxMjMgfHwga2V5bnVtID09IDEyNCB8fCBrZXludW0gPT0gMTI1KVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgdmFyIFMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGtleW51bSA9IGV2ZW50LmtleUNvZGU7XHJcbiAgICAgICAgaWYgKGtleW51bSA+PSA0OCAmJiBrZXludW0gPD0gNTcpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJDdXRcIiwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICB2YXIgblQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xyXG4gICAgICAgICAgICAvL+esrOS4gOS4quWtl+espuS4jeiDveS4uuepuu+8jOaIluiAheWPquiDveacieS4pOS9jeWtl+esplxyXG4gICAgICAgICAgICBpZiAoblQgPT0gXCJcIiAmJiBrZXludW0gPT0gNDgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5ULmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBTdW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGpWID0gMDtcclxuICAgICAgICAkKFwiI3N1bVQgOmlucHV0XCIpLmVhY2goZnVuY3Rpb24gKGksIGopIHtcclxuICAgICAgICAgICAgaWYgKGopIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc05hTigkKGopLnZhbCgpKSB8fCAkKGopLnZhbCgpID09IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalYgKz0gcGFyc2VGbG9hdCgkKGopLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjdFRcIikuaHRtbChqVik7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB2YXIgc3ViID0gZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICB2YXIgdCA9ICQoXCIjXCIgKyBmKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKHQgPT0gXCJcIiB8fCB0ID09IFwiMVwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHQgPSBwYXJzZUZsb2F0KHQpO1xyXG4gICAgICAgICQoXCIjXCIgKyBmKS52YWwodCAtIDEpO1xyXG5cclxuICAgICAgICB2YXIgdDAgPSAkKFwiI3RUXCIpLnRleHQoKTtcclxuICAgICAgICB0MCA9IHBhcnNlRmxvYXQodDApIC0gMTtcclxuICAgICAgICAkKFwiI3RUXCIpLnRleHQodDApO1xyXG4gICAgfTtcclxuICAgIHZhciBhZGQgPSBmdW5jdGlvbiAoZikge1xyXG4gICAgICAgIHZhciB0ID0gJChcIiNcIiArIGYpLnZhbCgpO1xyXG4gICAgICAgIGlmICh0ID09IFwiXCIpXHJcbiAgICAgICAgICAgIHQgPSAwO1xyXG4gICAgICAgIGlmICh0ID09IFwiOTlcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHQgPSBwYXJzZUZsb2F0KHQpO1xyXG4gICAgICAgICQoXCIjXCIgKyBmKS52YWwodCArIDEpO1xyXG4gICAgICAgIHZhciB0MCA9ICQoXCIjdFRcIikudGV4dCgpO1xyXG4gICAgICAgIHQwID0gcGFyc2VGbG9hdCh0MCkgKyAxO1xyXG4gICAgICAgICQoXCIjdFRcIikudGV4dCh0MCk7XHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy/nu5HlrprmlbDmja5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBuZXcgbW9kdWxlKCkuaW5pdCgpO1xyXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2pzL09yZ0V4YW0vc2F2ZXBhcGVyLmpzXG4gKiogbW9kdWxlIGlkID0gODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzVcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9