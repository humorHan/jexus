webpackJsonp([27,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(61);


/***/ },

/***/ 3:
/***/ function(module, exports) {

	/*TMODJS:{}*/
	!function () {
		function a(a, b) {
			return (/string|function/.test(typeof b) ? h : g)(a, b)
		}
	
		function b(a, c) {
			return "string" != typeof a && (c = typeof a, "number" === c ? a += "" : a = "function" === c ? b(a.call(a)) : ""), a
		}
	
		function c(a) {
			return l[a]
		}
	
		function d(a) {
			return b(a).replace(/&(?![\w#]+;)|[<>"']/g, c)
		}
	
		function e(a, b) {
			if (m(a))for (var c = 0, d = a.length; d > c; c++)b.call(a, a[c], c, a); else for (c in a)b.call(a, a[c], c)
		}
	
		function f(a, b) {
			var c = /(\/)[^\/]+\1\.\.\1/, d = ("./" + a).replace(/[^\/]+$/, ""), e = d + b;
			for (e = e.replace(/\/\.\//g, "/"); e.match(c);)e = e.replace(c, "/");
			return e
		}
	
		function g(b, c) {
			var d = a.get(b) || i({filename: b, name: "Render Error", message: "Template not found"});
			return c ? d(c) : d
		}
	
		function h(a, b) {
			if ("string" == typeof b) {
				var c = b;
				b = function () {
					return new k(c)
				}
			}
			var d = j[a] = function (c) {
				try {
					return new b(c, a) + ""
				} catch (d) {
					return i(d)()
				}
			};
			return d.prototype = b.prototype = n, d.toString = function () {
				return b + ""
			}, d
		}
	
		function i(a) {
			var b = "{Template Error}", c = a.stack || "";
			if (c)c = c.split("\n").slice(0, 2).join("\n"); else for (var d in a)c += "<" + d + ">\n" + a[d] + "\n\n";
			return function () {
				return "object" == typeof console && console.error(b + "\n\n" + c), b
			}
		}
	
		var j = a.cache = {}, k = this.String, l = {
			"<": "&#60;",
			">": "&#62;",
			'"': "&#34;",
			"'": "&#39;",
			"&": "&#38;"
		}, m = Array.isArray || function (a) {
				return "[object Array]" === {}.toString.call(a)
			}, n = a.utils = {
			$helpers: {}, $include: function (a, b, c) {
				return a = f(c, a), g(a, b)
			}, $string: b, $escape: d, $each: e
		}, o = a.helpers = n.$helpers;
		a.get = function (a) {
			return j[a.replace(/^\.\//, "")]
		}, a.helper = function (a, b) {
			o[a] = b
		}, module.exports = a
	}();

/***/ },

/***/ 8:
/***/ function(module, exports) {

	module.exports = {
	    Paginator: function (pageSize, currentPage, totalCount, callback) {
	        //todo 绑定事件
	       
	        var totalPages;
	        if (totalCount % pageSize == 0) {
	            totalPages = totalCount / pageSize;
	        }
	        else {
	            totalPages = parseInt(totalCount / pageSize) + 1;
	        }
	        var pagePre = '<a href="#"  data-num=' + (parseInt(currentPage) - 1) + ' class="pre-page inline mr20">上一页</a>';
	        var pageNext = '<a href="#"  data-num=' + (parseInt(currentPage) + 1) + ' class="next-page inline">下一页</a>';
	        var indexPage = '<a href="#"  data-num="1" class="pre-page inline mr20">首页</a></li>';
	
	        var lastPage = ' <a href="#"  data-num=' + totalPages + ' class="pre-page inline mr20"> 末页</a>';
	        if (totalPages < pageSize)
	        {
	            pagePre = "";
	            pageNext = "";
	            indexPage = "";
	            lastPage = "";
	        }
	       
	        if (currentPage <= 1) {
	            currentPage = 1;
	            pagePre = "";
	            
	        }
	        if (currentPage >= totalPages) {
	            currentPage = totalPages;
	            pageNext = "";
	            lastPage = "";
	        }
	
	        if (totalCount > 0) {
	           
	            var pagenum = '<ul class="page-box inline mr20">';
	
	
	            if (totalPages > 1) {
	                if (currentPage == 1) //第一页
	                {
	
	                    //output.Append(" <a disabled='disabled' class='colH'>上一页</a> ");//上一页
	                }
	                if (currentPage > 1) {
	                    //处理首页连接
	                    //处理上一页的连接
	                    //pagePre = ' <li><a href="#"  data-num=' + (parseInt(currentPage) - 1) + '>上一页</a> </li>';
	                    // output.AppendFormat(" <a data-pageIndex='{0}' class='pageLink'>上一页</a> ", currentPage - 1);//上一页
	                }
	                if (totalPages > 7) {
	                    var currint = 3;
	                    if (currentPage < 4)//4
	                    {
	
	                        for (var i = 0; i <= 6; i++) {
	                            if (currentPage == i + 1) {
	                                pagenum = pagenum + ' <li><a href="#" class="active" data-num=' + currentPage + '>' + currentPage + '</a> </li>';
	
	                            }
	                            else {
	                                if (i == 6) {
	
	                                    pagenum = pagenum + ' <li><a href="#"  data-num=' + 7 + '>...</a> </li>';
	                                    pagenum = pagenum + ' <li><a href="#"  data-num=' + totalPages + '>' + totalPages + '</a> </li>';
	                                }
	                                else {
	
	                                    pagenum = pagenum + ' <li><a href="#"  data-num=' + (i + 1) + '>' + (i + 1) + '</a> </li>';
	                                }
	                            }
	                        }
	                    }//4
	                    else if (currentPage >= 4 && currentPage < totalPages - 3) {
	
	                        for (var i = 0; i <= 6; i++) {
	                            if (i == 0) {
	                                //pagenum=pagenum+' <li data-num='+(currentPage-3)+'><a href="#" onclick="Paginator('+pageSize+','+(currentPage-3)+',' + totalCount + ')">...</a> </li>';
	                                pagenum = pagenum + ' <li><a href="#"  data-num="1">1</a> </li>';//201609130930
	                                if (parseInt(currentPage) - 3 > 1)
	                                {
	                                    pagenum = pagenum + ' <li><a href="#"  data-num=' + (parseInt(currentPage) - 3) + '>...</a> </li>';//201609130930
	                                }
	                                
	                            }
	                            else if (i == 3)//中间当前页
	                            {
	
	
	                                pagenum = pagenum + ' <li><a href="#" class="active" data-num=' + (currentPage) + '>' + currentPage + '</a> </li>';
	                            }
	                            else if (i == 6) {
	
	                                pagenum = pagenum + ' <li><a href="#" data-num=' + (parseInt(currentPage) + 3) + '>...</a> </li>';
	                                pagenum = pagenum + ' <li><a href="#"  data-num=' + totalPages + '>' + totalPages + '</a> </li>';
	                            }
	                            else {
	
	                                pagenum = pagenum + ' <li><a href="#"  data-num=' + (parseInt(currentPage) + i - parseInt(currint)) + '>' + (parseInt(currentPage) + i - parseInt(currint)) + '</a> </li>';
	                            }
	                        }
	
	                    }
	                    else {
	                        for (var i = 0; i <= 6; i++) {
	                            if (i == 0) {
	
	                                pagenum = pagenum + ' <li><a href="#"  data-num="1">1</a> </li>';//201609130930
	                                pagenum = pagenum + ' <li><a href="#" data-num=' + (parseInt(totalPages) - 6) + '>...</a> </li>';//201609130930
	                            }
	                            else {
	                                if (totalPages - 6 + i == currentPage) {
	
	
	                                    pagenum = pagenum + ' <li><a href="#" class="active"  data-num=' + currentPage + '>' + currentPage + '</a> </li>';
	                                }
	                                else {
	
	                                    pagenum = pagenum + ' <li><a href="#"  data-num=' + (totalPages - 6 + i) + '>' + (totalPages - 6 + i) + '</a> </li>';
	                                }
	                            }
	                        }
	                    }
	
	                }
	                else {
	                    for (var i = 0; i < totalPages; i++) {
	                        if (currentPage == i + 1) {
	
	                            pagenum = pagenum + ' <li><a href="#" class="active" data-num=' + currentPage + '>' + currentPage + '</a> </li>';
	
	                        }
	                        else {
	
	                            pagenum = pagenum + ' <li><a href="#"  data-num=' + (i + 1) + '>' + (i + 1) + '</a> </li>';
	
	                        }
	                    }
	                }
	                if (currentPage == totalPages) //最后一页
	                {//处理下一页和尾页的链接
	                  
	                   
	                    //output.Append(" <a disabled='disabled' class='colH'>下一页</a> ");
	                    pageNext = "";
	                    lastPage = "";
	                }
	                if (currentPage < totalPages) {//处理下一页和尾页的链接 
	                   
	                    //output.AppendFormat(" <a data-pageindex='{0}' class='pageLink'>下一页</a> ", currentPage + 1);
	                   // pagePre = '<a href="#"  data-num=' + (parseInt(currentPage) + 1) + ' class="next-page inline">下一页</a>';
	                }
	
	
	            }
	
	            pagenum = pagenum + '</ul>';
	            document.getElementById("pagination").innerHTML = indexPage + pagePre + pagenum + pageNext + lastPage;
	
	
	        }
	        else {
	            document.getElementById("pagination").innerHTML = "";
	        }
	        $("#pagination a").unbind("click");
	        $("#pagination a").bind("click", function () {
	            
	            if (callback) {
	                callback($(this).attr("data-num"));
	            }
	        });
	       
	    }
	}
	//function Paginator(pageSize, currentPage, totalCount, callback) {
	
	
	//}
	


/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	var Paginator = __webpack_require__(8);
	var para = { ExamID: 0, Edu: 0, artScience: '', SubjectID: '', StageID: '' };
	var QuestionType = 0;//0是公共题库 1 是收藏的题库
	var Url = "/OrgExam/CreateExam/GetQuesList"; // GetStoreList
	var ids = 0;
	var diff = "0";
	var sorttype = 0;//排序类型:0时间;1;组卷次数;2难
	var sort = 1;//排序 0升序;1降序
	var tplTable = __webpack_require__(62);
	
	var tplQuestion = __webpack_require__(63);
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

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgExam/filtertestpoints',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,P=$data.P,P1=$data.P1,i=$data.i,$escape=$utils.$escape,$value=$data.$value,$index=$data.$index,$out='';$out+=' ';
	$each(P,function(P1,i){
	$out+=' ';
	if(P1.PPointName==null ){
	$out+=' <dl class="mt20"> <dt class="on_open click">';
	$out+=$escape(P1.PointName);
	$out+='</dt> <div class="second_tree"> ';
	$each(P,function($value,$index){
	$out+=' ';
	if(P1.PointName == $value.PPointName){
	$out+=' ';
	if(($index)==1 ){
	$out+=' <dd class="clickTree" data-did="';
	$out+=$escape($value.ExamKnowID);
	$out+='" data-id="';
	$out+=$escape($value.PointID);
	$out+='" data-secid="';
	$out+=$escape($value.SecID);
	$out+='">';
	$out+=$escape($value.PointName);
	$out+='</dd> ';
	}else{
	$out+=' <dd data-did="';
	$out+=$escape($value.ExamKnowID);
	$out+='" data-id="';
	$out+=$escape($value.PointID);
	$out+='" data-secid="';
	$out+=$escape($value.SecID);
	$out+='">';
	$out+=$escape($value.PointName);
	$out+='</dd> ';
	}
	$out+=' ';
	}
	$out+=' ';
	});
	$out+=' </div> </dl> ';
	}
	$out+=' ';
	});
	return new String($out);
	});

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgExam/questionlist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,Data=$data.Data,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$string=$utils.$string,$out='';$out+=' ';
	$each(Data,function($value,$index){
	$out+=' <div class="test_outer"> <div class="ml40 mt20 contentdiv"> <div class="wrongPosition"> <span class="wrongspan hiddened" data-qid="';
	$out+=$escape($value.Qid);
	$out+='">纠错</span> </div> <p class="content"> ';
	$out+=$string($value.Body);
	$out+=' </p> </div> <ul class="process_dif"> <li>[难度：<span>';
	$out+=$escape($value.DifficultyDesc);
	$out+='</span>]</li> <li>组卷：&nbsp;<span class="active">';
	$out+=$escape($value.CombinaNnum);
	$out+='</span>&nbsp;次</li> <li style="float:right" class="mr20"> <span class="addto_basket"></span> <span class="middle mr20" data-qid="';
	$out+=$escape($value.Qid);
	$out+='">加入试题蓝</span> <span class="collection"></span> <span class="middle" data-qid="';
	$out+=$escape($value.Qid);
	$out+='">收藏试题</span> </li> </ul> <div class="analy ml40"> <p class="analy_p"> <span class="analy_title">解析：</span> 第三只小猫 试题分析：根据最短路线的知识可知，两点间的线中直线是最短的，所以找出直的线即可。 解：根据分析可知第三条线 </p> </div> </div> ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL09yZy9kZXAvUGFnaW5hdG9yLmpzP2JlODEqKioqKioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2pzL09yZ0V4YW0vZmlsdGVydGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZ0V4YW0vZmlsdGVydGVzdHBvaW50cy50cGwiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9PcmdFeGFtL3F1ZXN0aW9ubGlzdC50cGwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQWtDO0FBQ2xDOztBQUVBO0FBQ0EseUNBQXdDLE9BQU8sMkJBQTJCO0FBQzFFOztBQUVBO0FBQ0E7QUFDQSxzQ0FBcUMsWUFBWTtBQUNqRDtBQUNBOztBQUVBO0FBQ0EsMEJBQXlCLGlFQUFpRTtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQSxhQUFZLGVBQWU7QUFDM0Isa0RBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFxQjtBQUNyQixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLEdBQUU7QUFDRixrQ0FBaUM7QUFDakMsSUFBRztBQUNILGVBQWM7QUFDZDtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRixFQUFDLEc7Ozs7Ozs7QUM5RUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLHNGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFLEVBQUUsK0NBQStDO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXVDLFFBQVE7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUEsd0NBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBLGtHQUFpRztBQUNqRztBQUNBO0FBQ0Esd0lBQXVJO0FBQ3ZJOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXVDLFFBQVE7QUFDL0M7O0FBRUEsa0dBQWlHO0FBQ2pHLGtJQUFpSTtBQUNqSTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBbUMsZ0JBQWdCO0FBQ25EOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUErQzs7QUFFL0MsaUVBQWdFLEVBQUU7QUFDbEU7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7O0FDbkxBO0FBQ0EsYUFBWTtBQUNaLHNCQUFxQjtBQUNyQiw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLGtCQUFpQixXQUFXLEVBQUUsS0FBSztBQUNuQyxjQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0EsNkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxzQztBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFTO0FBQ1QsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLDBCQUF5QjtBQUN6QixVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7O0FBRUEsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QixjQUFhO0FBQ2I7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekIsY0FBYTtBQUNiO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQThDLEVBQUUsS0FBSztBQUNyRCxvQ0FBbUM7QUFDbkMsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25COztBQUVBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUEsc0JBQXFCOztBQUVyQjtBQUNBO0FBQ0EsY0FBYTs7QUFFYixVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDLEU7Ozs7Ozs7QUMxWkQ7QUFDQTtBQUNBO0FBQ0EsY0FBYSxtS0FBbUs7QUFDaEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxFQUFDLEU7Ozs7Ozs7QUM1Q0Q7QUFDQTtBQUNBO0FBQ0EsY0FBYSwwS0FBMEs7QUFDdkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUMsRSIsImZpbGUiOiJmaWx0ZXJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypUTU9ESlM6e30qL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdGZ1bmN0aW9uIGEoYSwgYikge1xyXG5cdFx0cmV0dXJuICgvc3RyaW5nfGZ1bmN0aW9uLy50ZXN0KHR5cGVvZiBiKSA/IGggOiBnKShhLCBiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYihhLCBjKSB7XHJcblx0XHRyZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSAmJiAoYyA9IHR5cGVvZiBhLCBcIm51bWJlclwiID09PSBjID8gYSArPSBcIlwiIDogYSA9IFwiZnVuY3Rpb25cIiA9PT0gYyA/IGIoYS5jYWxsKGEpKSA6IFwiXCIpLCBhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjKGEpIHtcclxuXHRcdHJldHVybiBsW2FdXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkKGEpIHtcclxuXHRcdHJldHVybiBiKGEpLnJlcGxhY2UoLyYoPyFbXFx3I10rOyl8Wzw+XCInXS9nLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZShhLCBiKSB7XHJcblx0XHRpZiAobShhKSlmb3IgKHZhciBjID0gMCwgZCA9IGEubGVuZ3RoOyBkID4gYzsgYysrKWIuY2FsbChhLCBhW2NdLCBjLCBhKTsgZWxzZSBmb3IgKGMgaW4gYSliLmNhbGwoYSwgYVtjXSwgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoYSwgYikge1xyXG5cdFx0dmFyIGMgPSAvKFxcLylbXlxcL10rXFwxXFwuXFwuXFwxLywgZCA9IChcIi4vXCIgKyBhKS5yZXBsYWNlKC9bXlxcL10rJC8sIFwiXCIpLCBlID0gZCArIGI7XHJcblx0XHRmb3IgKGUgPSBlLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7IGUubWF0Y2goYyk7KWUgPSBlLnJlcGxhY2UoYywgXCIvXCIpO1xyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoYiwgYykge1xyXG5cdFx0dmFyIGQgPSBhLmdldChiKSB8fCBpKHtmaWxlbmFtZTogYiwgbmFtZTogXCJSZW5kZXIgRXJyb3JcIiwgbWVzc2FnZTogXCJUZW1wbGF0ZSBub3QgZm91bmRcIn0pO1xyXG5cdFx0cmV0dXJuIGMgPyBkKGMpIDogZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChhLCBiKSB7XHJcblx0XHRpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYikge1xyXG5cdFx0XHR2YXIgYyA9IGI7XHJcblx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBrKGMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBkID0galthXSA9IGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBiKGMsIGEpICsgXCJcIlxyXG5cdFx0XHR9IGNhdGNoIChkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGkoZCkoKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGQucHJvdG90eXBlID0gYi5wcm90b3R5cGUgPSBuLCBkLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYiArIFwiXCJcclxuXHRcdH0sIGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGkoYSkge1xyXG5cdFx0dmFyIGIgPSBcIntUZW1wbGF0ZSBFcnJvcn1cIiwgYyA9IGEuc3RhY2sgfHwgXCJcIjtcclxuXHRcdGlmIChjKWMgPSBjLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCJcXG5cIik7IGVsc2UgZm9yICh2YXIgZCBpbiBhKWMgKz0gXCI8XCIgKyBkICsgXCI+XFxuXCIgKyBhW2RdICsgXCJcXG5cXG5cIjtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IoYiArIFwiXFxuXFxuXCIgKyBjKSwgYlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGogPSBhLmNhY2hlID0ge30sIGsgPSB0aGlzLlN0cmluZywgbCA9IHtcclxuXHRcdFwiPFwiOiBcIiYjNjA7XCIsXHJcblx0XHRcIj5cIjogXCImIzYyO1wiLFxyXG5cdFx0J1wiJzogXCImIzM0O1wiLFxyXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcclxuXHRcdFwiJlwiOiBcIiYjMzg7XCJcclxuXHR9LCBtID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xyXG5cdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB7fS50b1N0cmluZy5jYWxsKGEpXHJcblx0XHR9LCBuID0gYS51dGlscyA9IHtcclxuXHRcdCRoZWxwZXJzOiB7fSwgJGluY2x1ZGU6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcblx0XHRcdHJldHVybiBhID0gZihjLCBhKSwgZyhhLCBiKVxyXG5cdFx0fSwgJHN0cmluZzogYiwgJGVzY2FwZTogZCwgJGVhY2g6IGVcclxuXHR9LCBvID0gYS5oZWxwZXJzID0gbi4kaGVscGVycztcclxuXHRhLmdldCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRyZXR1cm4galthLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKV1cclxuXHR9LCBhLmhlbHBlciA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRvW2FdID0gYlxyXG5cdH0sIG1vZHVsZS5leHBvcnRzID0gYVxyXG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdG1vZGpzLWxvYWRlci9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDggMTMgMTQgMTUgMTYgMTcgMTggMTkgMjEgMjMgMjUgMjYgMjcgMzEgMzIgMzMgMzcgMzhcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFBhZ2luYXRvcjogZnVuY3Rpb24gKHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgdG90YWxDb3VudCwgY2FsbGJhY2spIHtcclxuICAgICAgICAvL3RvZG8g57uR5a6a5LqL5Lu2XHJcbiAgICAgICBcclxuICAgICAgICB2YXIgdG90YWxQYWdlcztcclxuICAgICAgICBpZiAodG90YWxDb3VudCAlIHBhZ2VTaXplID09IDApIHtcclxuICAgICAgICAgICAgdG90YWxQYWdlcyA9IHRvdGFsQ291bnQgLyBwYWdlU2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvdGFsUGFnZXMgPSBwYXJzZUludCh0b3RhbENvdW50IC8gcGFnZVNpemUpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhZ2VQcmUgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgLSAxKSArICcgY2xhc3M9XCJwcmUtcGFnZSBpbmxpbmUgbXIyMFwiPuS4iuS4gOmhtTwvYT4nO1xyXG4gICAgICAgIHZhciBwYWdlTmV4dCA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDEpICsgJyBjbGFzcz1cIm5leHQtcGFnZSBpbmxpbmVcIj7kuIvkuIDpobU8L2E+JztcclxuICAgICAgICB2YXIgaW5kZXhQYWdlID0gJzxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPVwiMVwiIGNsYXNzPVwicHJlLXBhZ2UgaW5saW5lIG1yMjBcIj7pppbpobU8L2E+PC9saT4nO1xyXG5cclxuICAgICAgICB2YXIgbGFzdFBhZ2UgPSAnIDxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJyBjbGFzcz1cInByZS1wYWdlIGlubGluZSBtcjIwXCI+IOacq+mhtTwvYT4nO1xyXG4gICAgICAgIGlmICh0b3RhbFBhZ2VzIDwgcGFnZVNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlUHJlID0gXCJcIjtcclxuICAgICAgICAgICAgcGFnZU5leHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBpbmRleFBhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDw9IDEpIHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgICAgICBwYWdlUHJlID0gXCJcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gdG90YWxQYWdlcztcclxuICAgICAgICAgICAgcGFnZU5leHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG90YWxDb3VudCA+IDApIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAnPHVsIGNsYXNzPVwicGFnZS1ib3ggaW5saW5lIG1yMjBcIj4nO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VzID4gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09IDEpIC8v56ys5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3V0cHV0LkFwcGVuZChcIiA8YSBkaXNhYmxlZD0nZGlzYWJsZWQnIGNsYXNzPSdjb2xIJz7kuIrkuIDpobU8L2E+IFwiKTsvL+S4iuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5aSE55CG6aaW6aG16L+e5o6lXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpITnkIbkuIrkuIDpobXnmoTov57mjqVcclxuICAgICAgICAgICAgICAgICAgICAvL3BhZ2VQcmUgPSAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDEpICsgJz7kuIrkuIDpobU8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAvLyBvdXRwdXQuQXBwZW5kRm9ybWF0KFwiIDxhIGRhdGEtcGFnZUluZGV4PSd7MH0nIGNsYXNzPSdwYWdlTGluayc+5LiK5LiA6aG1PC9hPiBcIiwgY3VycmVudFBhZ2UgLSAxKTsvL+S4iuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgPiA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJpbnQgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA8IDQpLy80XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gaSArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiBkYXRhLW51bT0nICsgY3VycmVudFBhZ2UgKyAnPicgKyBjdXJyZW50UGFnZSArICc8L2E+IDwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSA2KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyA3ICsgJz4uLi48L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgdG90YWxQYWdlcyArICc+JyArIHRvdGFsUGFnZXMgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKGkgKyAxKSArICc+JyArIChpICsgMSkgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfS8vNFxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRQYWdlID49IDQgJiYgY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzIC0gMykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wYWdlbnVtPXBhZ2VudW0rJyA8bGkgZGF0YS1udW09JysoY3VycmVudFBhZ2UtMykrJz48YSBocmVmPVwiI1wiIG9uY2xpY2s9XCJQYWdpbmF0b3IoJytwYWdlU2l6ZSsnLCcrKGN1cnJlbnRQYWdlLTMpKycsJyArIHRvdGFsQ291bnQgKyAnKVwiPi4uLjwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCI+MTwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDMgPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDMpICsgJz4uLi48L2E+IDwvbGk+JzsvLzIwMTYwOTEzMDkzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gMykvL+S4remXtOW9k+WJjemhtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgZGF0YS1udW09JyArIChjdXJyZW50UGFnZSkgKyAnPicgKyBjdXJyZW50UGFnZSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gNikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyAzKSArICc+Li4uPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgdG90YWxQYWdlcyArICc+JyArIHRvdGFsUGFnZXMgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIGkgLSBwYXJzZUludChjdXJyaW50KSkgKyAnPicgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgaSAtIHBhcnNlSW50KGN1cnJpbnQpKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPVwiMVwiPjE8L2E+IDwvbGk+JzsvLzIwMTYwOTEzMDkzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBkYXRhLW51bT0nICsgKHBhcnNlSW50KHRvdGFsUGFnZXMpIC0gNikgKyAnPi4uLjwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxQYWdlcyAtIDYgKyBpID09IGN1cnJlbnRQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArICh0b3RhbFBhZ2VzIC0gNiArIGkpICsgJz4nICsgKHRvdGFsUGFnZXMgLSA2ICsgaSkgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSBpICsgMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAoaSArIDEpICsgJz4nICsgKGkgKyAxKSArICc8L2E+IDwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gdG90YWxQYWdlcykgLy/mnIDlkI7kuIDpobVcclxuICAgICAgICAgICAgICAgIHsvL+WkhOeQhuS4i+S4gOmhteWSjOWwvumhteeahOmTvuaOpVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3V0cHV0LkFwcGVuZChcIiA8YSBkaXNhYmxlZD0nZGlzYWJsZWQnIGNsYXNzPSdjb2xIJz7kuIvkuIDpobU8L2E+IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFBhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcykgey8v5aSE55CG5LiL5LiA6aG15ZKM5bC+6aG155qE6ZO+5o6lIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kRm9ybWF0KFwiIDxhIGRhdGEtcGFnZWluZGV4PSd7MH0nIGNsYXNzPSdwYWdlTGluayc+5LiL5LiA6aG1PC9hPiBcIiwgY3VycmVudFBhZ2UgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgIC8vIHBhZ2VQcmUgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyAxKSArICcgY2xhc3M9XCJuZXh0LXBhZ2UgaW5saW5lXCI+5LiL5LiA6aG1PC9hPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnPC91bD4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gaW5kZXhQYWdlICsgcGFnZVByZSArIHBhZ2VudW0gKyBwYWdlTmV4dCArIGxhc3RQYWdlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNwYWdpbmF0aW9uIGFcIikudW5iaW5kKFwiY2xpY2tcIik7XHJcbiAgICAgICAgJChcIiNwYWdpbmF0aW9uIGFcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJCh0aGlzKS5hdHRyKFwiZGF0YS1udW1cIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4vL2Z1bmN0aW9uIFBhZ2luYXRvcihwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHRvdGFsQ291bnQsIGNhbGxiYWNrKSB7XHJcblxyXG5cclxuLy99XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC9QYWdpbmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMTMgMTYgMTggMTkgMjEgMjYgMjcgMzEgMzMgMzhcbiAqKi8iLCJ2YXIgUGFnaW5hdG9yID0gcmVxdWlyZSgnUGFnaW5hdG9yLmpzJyk7XHJcbnZhciBwYXJhID0geyBFeGFtSUQ6IDAsIEVkdTogMCwgYXJ0U2NpZW5jZTogJycsIFN1YmplY3RJRDogJycsIFN0YWdlSUQ6ICcnIH07XHJcbnZhciBRdWVzdGlvblR5cGUgPSAwOy8vMOaYr+WFrOWFsemimOW6kyAxIOaYr+aUtuiXj+eahOmimOW6k1xyXG52YXIgVXJsID0gXCIvT3JnRXhhbS9DcmVhdGVFeGFtL0dldFF1ZXNMaXN0XCI7IC8vIEdldFN0b3JlTGlzdFxyXG52YXIgaWRzID0gMDtcclxudmFyIGRpZmYgPSBcIjBcIjtcclxudmFyIHNvcnR0eXBlID0gMDsvL+aOkuW6j+exu+Weizow5pe26Ze0OzE757uE5Y235qyh5pWwOzLpmr5cclxudmFyIHNvcnQgPSAxOy8v5o6S5bqPIDDljYfluo87MemZjeW6j1xyXG52YXIgdHBsVGFibGUgPSByZXF1aXJlKFwiT3JnRXhhbS9maWx0ZXJ0ZXN0cG9pbnRzLnRwbFwiKTtcclxuXHJcbnZhciB0cGxRdWVzdGlvbiA9IHJlcXVpcmUoXCJPcmdFeGFtL3F1ZXN0aW9ubGlzdC50cGxcIik7XHJcbnZhciBtb2R1bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgT25CaW5kKCk7XHJcbiAgICAgICAgR2V0UG9pbnRMaXN0KCk7XHJcbiAgICAgICAgU2VsZWN0RG9uZSgpO1xyXG4gICAgICAgIE9uV3JvbmdTYXZlKCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIE9uQmluZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBDYW5jZWxTYXZlKCk7XHJcbiAgICAgICAgJCgnZHQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLnRvZ2dsZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v55uR5ZCsIOiMg+WbtCDlhazlhbHpopjlupMgXHJcbiAgICAgICAgJChcIi5maWx0ZXItdGl0bGUgbGlcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnRleHQoKS50b1N0cmluZygpLmluZGV4T2YoJ+iMg+WbtCcpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnRleHQoKS50b1N0cmluZygpLmluZGV4T2YoJ+WFrOWFsemimOW6kycpPj0wKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFF1ZXN0aW9uVHlwZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgVXJsID0gXCIvT3JnRXhhbS9DcmVhdGVFeGFtL0dldFF1ZXNMaXN0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS50ZXh0KCkudG9TdHJpbmcoKS5pbmRleE9mKCfmlLbol48nKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUXVlc3Rpb25UeXBlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBVcmwgPSBcIi9PcmdFeGFtL0NyZWF0ZUV4YW0vR2V0U3RvcmVMaXN0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy/nm5HlkKzpmr7luqYgbGkg5pyJ54K56Zeu6aKYIGxpIOS4reWMheaLrOmavuW6plxyXG4gICAgICAgICQoXCIuZGlmZl91bCBsaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7ICAgIFxyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS50ZXh0KCkudG9TdHJpbmcoKS5pbmRleE9mKCfpmr7luqYnKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUF0dHIoXCJjbGFzc1wiKVxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBkaWZmID0gJCh0aGlzKS5hdHRyKFwidmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICBHZXRRdWVzdGlvbmxpc3QoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+ebkeWQrOefpeivhueCuSBkZFxyXG4gICAgICAgICQoXCIubGVmdFRyZWVcIikuZGVsZWdhdGUoJy5zZWNvbmRfdHJlZSBkZCcsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy/ph43nva7mjpLluo9cclxuICAgICAgICAgICAgJCgnLmNsaWNranMxJykuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnY2xpY2tTdGF0ZTInKS5yZW1vdmVDbGFzcygnY2xpY2tTdGF0ZTEnKS5hZGRDbGFzcygnZWFzeVRvZGlmJyk7XHJcbiAgICAgICAgICAgICQoJy5jbGlja2pzMicpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2NsaWNrU3RhdGUyJykucmVtb3ZlQ2xhc3MoJ2NsaWNrU3RhdGUxJykuYWRkQ2xhc3MoJ2Vhc3lUb2RpZicpO1xyXG4gICAgICAgICAgICAkKCcuY2xpY2tqczAnKS5hZGRDbGFzcygnYWN0aXZlZCcpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZWQnKTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImNsaWNrVHJlZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImNsaWNrVHJlZVwiKTtcclxuICAgICAgICAgICAgaWRzID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1zZWNpZFwiKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgR2V0UXVlc3Rpb25saXN0KDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICAgICAgLy/nuqDplJlcclxuICAgICAgICAkKFwiI3F1ZXN0aW9ubGlzdFwiKS5kZWxlZ2F0ZSgnLndyb25nUG9zaXRpb24gc3BhbicsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9hbGVydCgkKHRoaXMpLmF0dHIoXCJkYXRhLXFpZFwiKSk7XHJcbiAgICAgICAgICAgICQoXCJbY2xhc3M9J21sNSddXCIpLmh0bWwoXCLor5XpophcIiArICQodGhpcykuYXR0cihcImRhdGEtcWlkXCIpKTtcclxuICAgICAgICAgICAgJChcIltjbGFzcz0nbWw1J11cIikuYXR0cihcImRhdGEtaXRlbWlkXCIsICQodGhpcykuYXR0cihcImRhdGEtcWlkXCIpKTtcclxuICAgICAgICAgICAgJChcIltjbGFzcz0nbXlwb3B1cCBmaW5kX3dyb25nIGhpZGRlbiddXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIi5wb3AtbWFza1wiKS5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiNzZWxUeXBlXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ29wdGlvbjpzZWxlY3RlZCcpLmF0dHIoXCJzZWxlY3RlZFwiLCB0cnVlKS5zaWJsaW5ncygpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgLy9hbGVydCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WFs+mXreaMiemSrlxyXG4gICAgICAgICQoXCJbY2xhc3M9J3BvcGNsb3NlIGN1cnNvciddXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIltjbGFzcz0nbXlwb3B1cCBmaW5kX3dyb25nIGhpZGRlbiddXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIltjbGFzcz0nbXlwb3B1cCBzYXZlX3Rlc3RQYXBlciBoaWRkZW4nXVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjdGV4dGFyZWFcIikuaHRtbChcIlwiKTtcclxuICAgICAgICAgICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIltjbGFzcz0nZ290b190b3AgZ290b0FmdGVyJ11cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGxUb3AoMCk7ICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5L+d5a2Y6K+V5Y23IOebkeWQrCDlh4/lj7dcclxuICAgICAgICAkKFwiLm11dGlscFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZUludCgkKFwiI3N1bUhvdXJcIikuaHRtbCgpKSA+PSAyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3N1bUhvdXJcIikuaHRtbChwYXJzZUludCgkKFwiI3N1bUhvdXJcIikuaHRtbCgpKSAtIDEpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCJbY2xhc3M9J2lucHV0IG15SW5wdXQnXVwiKS52YWwoZnVuY3Rpb24gKGksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgKHZhbHVlKSA9PSBcInVuZGVmaW5lZFwiIHx8IGlzTmFOKHZhbHVlKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gMSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID49IDIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKSAtIDE7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+S/neWtmOivleWNtyDnm5HlkKwg5Yqg5Y+3XHJcbiAgICAgICAgJChcIi5hZGRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiI3N1bUhvdXJcIikuaHRtbChwYXJzZUludCgkKFwiI3N1bUhvdXJcIikuaHRtbCgpKSArIDEpXHJcbiAgICAgICAgICAgICQoXCJbY2xhc3M9J2lucHV0IG15SW5wdXQnXVwiKS52YWwoZnVuY3Rpb24gKGksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpICsgMTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WKoOWFpeaUtuiXjyDliqDlhaXor5XpophcclxuICAgICAgICAkKFwiI3F1ZXN0aW9ubGlzdFwiKS5kZWxlZ2F0ZSgnLm1yMjAgc3BhbicsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJtcjIwXCIpKS8v5Yqg5YWl6K+V6aKYXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoXCJub0NsaWNrXCIpKS8v56e76Zmk6K+V6aKYXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5odG1sKFwi5Yqg5YWl6K+V6aKY56+uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucHJldigpLnJlbW92ZUNsYXNzKFwiY2xpY2tfYWRkVG9iYXNrZXRcIikucmVtb3ZlQ2xhc3MoXCJhZGR0b19iYXNrZXRcIikuYWRkQ2xhc3MoXCJhZGR0b19iYXNrZXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vQ2xpY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5tdW5fc3BhblwiKS5odG1sKGZ1bmN0aW9uIChpLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwoXCLnp7vpmaTor5Xpopjnr65cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkucmVtb3ZlQ2xhc3MoXCJhZGR0b19iYXNrZXRcIikucmVtb3ZlQ2xhc3MoXCJjbGlja19hZGRUb2Jhc2tldFwiKS5hZGRDbGFzcyhcImNsaWNrX2FkZFRvYmFza2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub0NsaWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIubXVuX3NwYW5cIikuaHRtbChmdW5jdGlvbiAoaSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSAvL+WKoOWFpeaUtuiXj1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcIm5vQ2xpY2tcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwoXCLmlLbol4/or5XpophcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkucmVtb3ZlQ2xhc3MoXCJjbGlja19jb2xsZWN0aW9uXCIpLnJlbW92ZUNsYXNzKFwiY29sbGVjdGlvblwiKS5hZGRDbGFzcyhcImNvbGxlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vQ2xpY2tcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwoXCLlj5bmtojmlLbol49cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkucmVtb3ZlQ2xhc3MoXCJjb2xsZWN0aW9uXCIpLnJlbW92ZUNsYXNzKFwiY2xpY2tfY29sbGVjdGlvblwiKS5hZGRDbGFzcyhcImNsaWNrX2NvbGxlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vQ2xpY2tcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIltjbGFzcz0nd3JvbmdzcGFuIGhpZGRlbmVkJ11cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAvKumavuaYk+eoi+W6pueCueWHu+aXtuWAmeeahGpzKi9cclxuICAgICAgICB2YXIgbnVtID0gMDtcclxuICAgICAgICAkKCcuY2xpY2tqczEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNvcnR0eXBlID0gMTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlZCcpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZWQnKTtcclxuICAgICAgICAgICAgLy8kKHRoaXMpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ3JlYWR5VGltZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdlYXN5VG9kaWYnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnY2xpY2tTdGF0ZTInKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnY2xpY2tTdGF0ZTEnKS5hZGRDbGFzcygnZWFzeVRvZGlmJyk7XHJcbiAgICAgICAgICAgIGlmIChudW0gJSAyID09IDApIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnY2xpY2tTdGF0ZTInKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oKS5hZGRDbGFzcygnY2xpY2tTdGF0ZTEnKTtcclxuICAgICAgICAgICAgICAgIHNvcnQgPSAxOy8v6ZmN5bqPXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2NsaWNrU3RhdGUxJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ2NsaWNrU3RhdGUyJyk7XHJcbiAgICAgICAgICAgICAgICBzb3J0ID0gMDsvL+WNh+W6j1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEdldFF1ZXN0aW9ubGlzdCgxKTtcclxuICAgICAgICAgICAgbnVtKys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGNvbnQgPSAwO1xyXG4gICAgICAgICQoJy5jbGlja2pzMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc29ydHR5cGUgPSAyO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2Vhc3lUb2RpZicpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVkJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlZCcpO1xyXG4gICAgICAgICAgICAkKCcuY2xpY2tqczEnKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdjbGlja1N0YXRlMScpO1xyXG4gICAgICAgICAgICAkKCcuY2xpY2tqczEnKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdjbGlja1N0YXRlMicpLmFkZENsYXNzKCdlYXN5VG9kaWYnKTtcclxuICAgICAgICAgICAgaWYgKGNvbnQgJSAyID09IDApIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnY2xpY2tTdGF0ZTInKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oKS5hZGRDbGFzcygnY2xpY2tTdGF0ZTEnKTtcclxuICAgICAgICAgICAgICAgIHNvcnQgPSAxOy8v6ZmN5bqPXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2NsaWNrU3RhdGUxJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ2NsaWNrU3RhdGUyJyk7XHJcbiAgICAgICAgICAgICAgICBzb3J0ID0gMDsvL+WNh+W6j1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEdldFF1ZXN0aW9ubGlzdCgxKTtcclxuICAgICAgICAgICAgY29udCsrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5jbGlja2pzMCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc29ydHR5cGUgPSAwO1xyXG4gICAgICAgICAgICAkKCcuY2xpY2tqczEnKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdjbGlja1N0YXRlMicpLnJlbW92ZUNsYXNzKCdjbGlja1N0YXRlMScpLmFkZENsYXNzKCdlYXN5VG9kaWYnKTtcclxuICAgICAgICAgICAgJCgnLmNsaWNranMyJykuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnY2xpY2tTdGF0ZTInKS5yZW1vdmVDbGFzcygnY2xpY2tTdGF0ZTEnKS5hZGRDbGFzcygnZWFzeVRvZGlmJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZWQnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmVkJyk7XHJcbiAgICAgICAgICAgIG51bSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnQgPSAwO1xyXG4gICAgICAgICAgICBzb3J0ID0gMTtcclxuICAgICAgICAgICAgR2V0UXVlc3Rpb25saXN0KDEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcGFyYS5FeGFtSUQgPSAkKFwiI0V4YW1JRFwiKS52YWwoKTtcclxuICAgICAgICBwYXJhLkVkdSA9ICQoXCIjZWR1XCIpLnZhbCgpO1xyXG4gICAgICAgIHBhcmEuU3ViamVjdElEID0gJChcIiNTdWJqZWN0SURcIikudmFsKCk7XHJcbiAgICAgICAgcGFyYS5TdGFnZUlEID0gJChcIiNTdGFnZUlEXCIpLnZhbCgpO1xyXG4gICAgICAgIHBhcmEuYXJ0U2NpZW5jZSA9ICQoXCIjYXJ0U2NpZW5jZVwiKS52YWwoKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIEdldFBvaW50TGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9PcmdFeGFtL0NyZWF0ZUV4YW0vR2V0TWl4SW5kZXhcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBFeGFtSUQ6IHBhcmEuRXhhbUlELFxyXG4gICAgICAgICAgICAgICAgZWR1OiBwYXJhLkVkdSxcclxuICAgICAgICAgICAgICAgIGFydFNjaWVuY2U6IHBhcmEuYXJ0U2NpZW5jZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmxlZnRUcmVlXCIpLmh0bWwodHBsVGFibGUoZGF0YS5OKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGRhdGEuTi5QKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyQoXCIubGVmdFRyZWVcIikuaHRtbCh0cGxUYWJsZShkYXRhLk4pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6ZnVuY3Rpb24oZGF0YSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoXCIuc2Vjb25kX3RyZWUgZGRcIikuaGFzQ2xhc3MoXCJjbGlja1RyZWVcIikpO1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkcyA9ICQoXCIuc2Vjb25kX3RyZWVcIikuZmluZChcIi5jbGlja1RyZWVcIikuYXR0cihcImRhdGEtc2VjaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBHZXRRdWVzdGlvbmxpc3QoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBhbGVydCgkKFwiLnNlY29uZF90cmVlIGRkXCIpLmF0dHIoXCJkYXRhLXNlY2lkXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyQoXCIuc2Vjb25kX3RyZWUgZGRcIikuaGFzQ2xhc3MoXCJjbGlja1RyZWVcIilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOmZ1bmN0aW9uKGRhdGEpXHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgXHJcbiAgICB2YXIgR2V0UXVlc3Rpb25saXN0ID0gZnVuY3Rpb24gKGYpIHtcclxuICAgICAgIFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6IFVybCxcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBJc0dvb2Q6IC0xLFxyXG4gICAgICAgICAgICAgICAgZl9pZDogaWRzLFxyXG4gICAgICAgICAgICAgICAgZGlmZjogZGlmZixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiAxLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IGYsXHJcbiAgICAgICAgICAgICAgICBzb3J0dHlwZTogc29ydHR5cGUsLy/mjpLluo/nsbvlnos6MOaXtumXtDsxO+e7hOWNt+asoeaVsDsy6Zq+5piTXHJcbiAgICAgICAgICAgICAgICBzb3J0OiBzb3J0Ly/mjpLluo8gMOWNh+W6jzsx6ZmN5bqPXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcXVlc3Rpb25saXN0XCIpLmh0bWwodHBsUXVlc3Rpb24oZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIFBhZ2luYXRvci5QYWdpbmF0b3IoMTAsIGYsIGRhdGEuVG90YWxDb3VudCwgcGFnaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI1F0b3RhbFwiKS5odG1sKGRhdGEuVG90YWxDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3F1ZXN0aW9ubGlzdFwiKS5odG1sKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjUXRvdGFsXCIpLmh0bWwoXCIwXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgcGFnaW5nID0gZnVuY3Rpb24gKHBhZ2UpIHtcclxuXHJcbiAgICAgICAgR2V0UXVlc3Rpb25saXN0KHBhZ2UpO1xyXG4gICAgfTtcclxuICAgIHZhciBHZXRJdGVtQ29sbGVjdFN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL09yZ0V4YW0vQ3JlYXRlRXhhbS9HZXRJdGVtQ29sbGVjdFN0YXRlXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgRXhhbUlEOiBwYXJhLkV4YW1JRCxcclxuICAgICAgICAgICAgICAgIGVkdTogcGFyYS5FZHUsXHJcbiAgICAgICAgICAgICAgICBhcnRTY2llbmNlOiBwYXJhLmFydFNjaWVuY2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJChcIi5sZWZ0VHJlZVwiKS5odG1sKHRwbFRhYmxlKGRhdGEuTGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5sZWZ0VHJlZVwiKS5odG1sKHRwbFRhYmxlKGRhdGEuTGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvL+mihOiniFxyXG4gICAgdmFyIHByZVNlZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnByZVNlZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vJC5hamF4KHtcclxuICAgICAgICAgICAgLy8gICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIC8vICAgIHVybDogXCIvT3JnRXhhbS9DcmVhdGVFeGFtL0dldE1peEluZGV4XCIsXHJcbiAgICAgICAgICAgIC8vICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgLy8gICAgZGF0YToge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgRXhhbUlEOiBwYXJhLkV4YW1JRCxcclxuICAgICAgICAgICAgLy8gICAgICAgIGVkdTogcGFyYS5FZHUsXHJcbiAgICAgICAgICAgIC8vICAgICAgICBhcnRTY2llbmNlOiBwYXJhLmFydFNjaWVuY2VcclxuICAgICAgICAgICAgLy8gICAgfSxcclxuICAgICAgICAgICAgLy8gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgLy8gJChcIi5sZWZ0VHJlZVwiKS5odG1sKHRwbFRhYmxlKGRhdGEuTGlzdCkpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGFsZXJ0KGRhdGEpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgJChcIi5sZWZ0VHJlZVwiKS5odG1sKHRwbFRhYmxlKGRhdGEuTGlzdCkpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIH1cclxuICAgICAgICAgICAgLy99KTtcclxuICAgICAgICAgICAgLy8kKFwiI3ByZVNlZVNob3dcIikuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8v5a6M5oiQ562b6YCJXHJcbiAgICB2YXIgU2VsZWN0RG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI1NlbGVjdERvbmVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiW2NsYXNzPSdteXBvcHVwIHNhdmVfdGVzdFBhcGVyIGhpZGRlbiddXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIi5wb3AtbWFza1wiKS5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy/noa7lrprkv53lrZhcclxuICAgIHZhciBDb25maXJtU2F2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI0NvbmZpcm1TYXZlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy/lj5bmtojkv53lrZhcclxuICAgIHZhciBDYW5jZWxTYXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjQ2FuY2VsU2F2ZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCJbY2xhc3M9J215cG9wdXAgc2F2ZV90ZXN0UGFwZXIgaGlkZGVuJ11cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvL+e6oOmUmeehruWumuS6i+S7tlxyXG4gICAgdmFyIE9uV3JvbmdTYXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjV3JvbmdTYXZlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNlbFR5cGUgPSAkKFwiI3NlbFR5cGVcIikudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0YXJlYSA9ICQoXCIjdGV4dGFyZWFcIikudmFsKCk7XHJcbiAgICAgICAgICAgIGlmICgkLnRyaW0odGV4dGFyZWEpID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjdGV4dGFyZWFcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcSA9ICQoXCJbY2xhc3M9J21sNSddXCIpLmF0dHIoXCJkYXRhLWl0ZW1pZFwiKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL1Jlc291cmNlL1F1ZXN0aW9ucy9BZGREZWJ1Z1F1ZXN0aW9uJyArIFwiP2FiY2RhdGU9XCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBxaWQ6IHEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dGFyZWEsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZWlkOiBzZWxUeXBlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdWJtaXQgPT0gXCIxMS0wMDFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy/mt7vliqDmlLbol49cclxuICAgIHZhciBBZGRJdGVtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH07XHJcbiAgICAvL+WPlua2iOaUtuiXj1xyXG4gICAgdmFyIFJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfTtcclxufTtcclxuXHJcbi8v57uR5a6a5pWw5o2uXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgbmV3IG1vZHVsZSgpLmluaXQoKTtcclxuICAgXHJcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvanMvT3JnRXhhbS9maWx0ZXJ0ZXN0LmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMjdcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmdFeGFtL2ZpbHRlcnRlc3Rwb2ludHMnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLFA9JGRhdGEuUCxQMT0kZGF0YS5QMSxpPSRkYXRhLmksJGVzY2FwZT0kdXRpbHMuJGVzY2FwZSwkdmFsdWU9JGRhdGEuJHZhbHVlLCRpbmRleD0kZGF0YS4kaW5kZXgsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaChQLGZ1bmN0aW9uKFAxLGkpe1xuJG91dCs9JyAnO1xuaWYoUDEuUFBvaW50TmFtZT09bnVsbCApe1xuJG91dCs9JyA8ZGwgY2xhc3M9XCJtdDIwXCI+IDxkdCBjbGFzcz1cIm9uX29wZW4gY2xpY2tcIj4nO1xuJG91dCs9JGVzY2FwZShQMS5Qb2ludE5hbWUpO1xuJG91dCs9JzwvZHQ+IDxkaXYgY2xhc3M9XCJzZWNvbmRfdHJlZVwiPiAnO1xuJGVhY2goUCxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgJztcbmlmKFAxLlBvaW50TmFtZSA9PSAkdmFsdWUuUFBvaW50TmFtZSl7XG4kb3V0Kz0nICc7XG5pZigoJGluZGV4KT09MSApe1xuJG91dCs9JyA8ZGQgY2xhc3M9XCJjbGlja1RyZWVcIiBkYXRhLWRpZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5FeGFtS25vd0lEKTtcbiRvdXQrPSdcIiBkYXRhLWlkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlBvaW50SUQpO1xuJG91dCs9J1wiIGRhdGEtc2VjaWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU2VjSUQpO1xuJG91dCs9J1wiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Qb2ludE5hbWUpO1xuJG91dCs9JzwvZGQ+ICc7XG59ZWxzZXtcbiRvdXQrPScgPGRkIGRhdGEtZGlkPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkV4YW1Lbm93SUQpO1xuJG91dCs9J1wiIGRhdGEtaWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuUG9pbnRJRCk7XG4kb3V0Kz0nXCIgZGF0YS1zZWNpZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5TZWNJRCk7XG4kb3V0Kz0nXCI+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlBvaW50TmFtZSk7XG4kb3V0Kz0nPC9kZD4gJztcbn1cbiRvdXQrPScgJztcbn1cbiRvdXQrPScgJztcbn0pO1xuJG91dCs9JyA8L2Rpdj4gPC9kbD4gJztcbn1cbiRvdXQrPScgJztcbn0pO1xucmV0dXJuIG5ldyBTdHJpbmcoJG91dCk7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL3RwbC9PcmdFeGFtL2ZpbHRlcnRlc3Rwb2ludHMudHBsXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMjdcbiAqKi8iLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnT3JnL3RwbC9PcmdFeGFtL3F1ZXN0aW9ubGlzdCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsRGF0YT0kZGF0YS5EYXRhLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRzdHJpbmc9JHV0aWxzLiRzdHJpbmcsJG91dD0nJzskb3V0Kz0nICc7XG4kZWFjaChEYXRhLGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8ZGl2IGNsYXNzPVwidGVzdF9vdXRlclwiPiA8ZGl2IGNsYXNzPVwibWw0MCBtdDIwIGNvbnRlbnRkaXZcIj4gPGRpdiBjbGFzcz1cIndyb25nUG9zaXRpb25cIj4gPHNwYW4gY2xhc3M9XCJ3cm9uZ3NwYW4gaGlkZGVuZWRcIiBkYXRhLXFpZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5RaWQpO1xuJG91dCs9J1wiPue6oOmUmTwvc3Bhbj4gPC9kaXY+IDxwIGNsYXNzPVwiY29udGVudFwiPiAnO1xuJG91dCs9JHN0cmluZygkdmFsdWUuQm9keSk7XG4kb3V0Kz0nIDwvcD4gPC9kaXY+IDx1bCBjbGFzcz1cInByb2Nlc3NfZGlmXCI+IDxsaT5b6Zq+5bqm77yaPHNwYW4+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkRpZmZpY3VsdHlEZXNjKTtcbiRvdXQrPSc8L3NwYW4+XTwvbGk+IDxsaT7nu4TljbfvvJombmJzcDs8c3BhbiBjbGFzcz1cImFjdGl2ZVwiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Db21iaW5hTm51bSk7XG4kb3V0Kz0nPC9zcGFuPiZuYnNwO+asoTwvbGk+IDxsaSBzdHlsZT1cImZsb2F0OnJpZ2h0XCIgY2xhc3M9XCJtcjIwXCI+IDxzcGFuIGNsYXNzPVwiYWRkdG9fYmFza2V0XCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm1pZGRsZSBtcjIwXCIgZGF0YS1xaWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuUWlkKTtcbiRvdXQrPSdcIj7liqDlhaXor5Xpopjok508L3NwYW4+IDxzcGFuIGNsYXNzPVwiY29sbGVjdGlvblwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJtaWRkbGVcIiBkYXRhLXFpZD1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5RaWQpO1xuJG91dCs9J1wiPuaUtuiXj+ivlemimDwvc3Bhbj4gPC9saT4gPC91bD4gPGRpdiBjbGFzcz1cImFuYWx5IG1sNDBcIj4gPHAgY2xhc3M9XCJhbmFseV9wXCI+IDxzcGFuIGNsYXNzPVwiYW5hbHlfdGl0bGVcIj7op6PmnpDvvJo8L3NwYW4+IOesrOS4ieWPquWwj+eMqyDor5XpopjliIbmnpDvvJrmoLnmja7mnIDnn63ot6/nur/nmoTnn6Xor4blj6/nn6XvvIzkuKTngrnpl7TnmoTnur/kuK3nm7Tnur/mmK/mnIDnn63nmoTvvIzmiYDku6Xmib7lh7rnm7TnmoTnur/ljbPlj6/jgIIg6Kej77ya5qC55o2u5YiG5p6Q5Y+v55+l56ys5LiJ5p2h57q/IDwvcD4gPC9kaXY+IDwvZGl2PiAnO1xufSk7XG4kb3V0Kz0nICc7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ0V4YW0vcXVlc3Rpb25saXN0LnRwbFxuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDI3XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==