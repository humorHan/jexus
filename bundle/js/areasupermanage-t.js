webpackJsonp([16,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(34);


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

/***/ 5:
/***/ function(module, exports) {

	//遮罩
	function MaskShow() {
	    $(".pop-mask").show();
	}
	
	function MaskHide() {
	    $(".pop-mask").hide();
	    $(".add").hide();
	}
	//传递显示的消息
	function PopTipShow(obj) {
	    $(".add").hide();
	    var tiphtml = '<div class="pop-up font14" id="oktip"><span class="pop-close cursor"></span><div class="pop-content"><p class="line100" style="text-align:center;">' + obj + '</p></div></div>';
	
	    $("#main-content-wrapper").append(tiphtml);
	    $("#main-content-org-wrapper").append(tiphtml);
	    $(".pop-mask").show();
	    $(".pop-up").show();
	}
	//弹出确认框
	var OpenConfrimPop = function (obj) {
	    var html = '<div class="pop-up font14"><span class="pop-close cursor"></span><div class="pop-content">' + obj + '</div><br /><br /><div class="handle"> <span class="ok" id="Confrim">确定</span> &nbsp;&nbsp;&nbsp;<span class="ok" id="Cancel">取消</span> </div></div>';
	    $("#main-content-wrapper").append(html);
	};
	
	function PopTipHide() {
	    $(".pop-up").hide();
	    $(".pop-mask").hide();
	    $(".add").hide();
	    document.location.reload();
	}
	//隐藏添加的样式当弹出框和添加框重叠的
	function AddHide() {
	    $(".add").hide();
	    
	}
	
	exports.MaskShow = MaskShow;
	exports.MaskHide = MaskHide;
	exports.PopTipShow = PopTipShow;
	exports.PopTipHide = PopTipHide;
	exports.OpenConfrimPop = OpenConfrimPop;
	exports.AddHide = AddHide;
	
	//处理弹出框的隐藏
	$(function () {
	    $("#main-content-wrapper").delegate(".pop-close", "click", function () {
	        $(".pop-mask").hide();
	        $(".pop-up").hide();
	        //document.location.reload();
	    });
	
	    $("#main-content-wrapper").delegate(".popclose", "click", function () {
	        $(".pop-mask").hide();
	        $(".add").hide();
	    });
	
	});
	


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

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	
	var tplTable = __webpack_require__(35);
	var pop = __webpack_require__(5);
	var Paginator = __webpack_require__(8);
	
	var module = {
	    init: function () {
	        //todo 逻辑函数
	        //this.loadOrgMsg();
	        this.render();
	        this.initBtns();
	
	    },
	
	    render: function () {
	        //加载大区信息
	        $.ajax({
	            type: "post",
	            url: "/OrgTeachWork/Organization/GetOrgMsg",
	            dataType: "json",
	            data: {
	
	            },
	            success: function (data) {
	
	                if (data.result.Data) {
	                    $("#OrgName").html(data.result.Data.OrgName);
	                    $("#AreaCount").html(data.result.Data.AreaCount);
	                    loadOrgMsg();//成功之后在加载
	                }
	                else {
	
	
	                }
	            }
	        });
	
	
	
	    },
	    initBtns: function () {
	        //todo 绑定事件
	        ///处理截断字符串
	        function BindStrCut(obj) {
	
	            if (obj.length > 4) {
	                obj = obj.substring(0, 4) + "...";
	                return obj;
	            }
	            return obj;
	
	
	        };
	
	        //委托选学校
	        $('#scList').delegate(".checkbox", "click", function () {
	            var id = $(this).attr("data-id");
	            var name = BindStrCut($(this).attr("data-name"));
	            var temp = "";
	            temp += "<li class='overflow' id=a" + id + "><span class='left schname'>" + name + "</span> <i  data-id=" + id + " class='dustbin cursor right'   ></i></li>";
	            if ($("#a" + id).length > 0) {
	                $("#a" + id).remove();
	            } else {
	                $("#scaList").append(temp);
	            }
	        });
	
	        //委托删除学校
	        $('#scaList').delegate(".dustbin", "click", function () {
	            var obj = $(this).attr("data-id");
	            $("#a" + obj).remove();
	            $("#chk" + obj).attr("checked", false);
	
	        });
	    }
	
	
	};
	//加载学校列表
	function loadOrgMsg(page) {
	
	    if (page == undefined) {
	        page = 1;
	    }
	
	    //加载列表
	    $.ajax({
	        type: "post",
	        url: "/OrgTeachWork/Organization/GetAreaList",
	        dataType: "json",
	        data: {
	            SerchName: escape($("#txtserch").val()),
	            PageIndex: page,
	            PageSize: 10
	        },
	        success: function (data) {
	
	            if (data.result.Data) {
	                $("#tb").html(tplTable(data.result));
	                Paginator.Paginator(10, page, data.TotalCount, loadOrgMsg);
	            }
	            else {
	
	
	                $("#tb").html("");//清空数据
	                $("#pagination").html("");//分页控件不显示
	
	
	            }
	        }
	    });
	
	}
	
	
	
	//绑定数据
	$(function () {
	    module.init();
	
	});
	
	
	$(function () {
	    var timer = null;
	    //点击搜索框开始
	    $(".search").click(function () {
	
	        $(this).css("background", "#cb441e");
	        var serchtext = $(".search-text");
	
	        serchtext.show();
	        if (!(serchtext.hasClass("on"))) {
	            serchtext.stop();
	            serchtext.animate({
	                width: "160px"
	            }, 1000);
	            serchtext.addClass("on");
	
	        } else {
	            serchtext.stop();
	            serchtext.animate({
	                width: "0px"
	            }, 1000);
	            serchtext.removeClass("on");
	            $(this).css("background", "");
	
	            module.init();
	
	
	        }
	    });
	    //点击搜索框结束
	    //添加班级弹出框开始
	    $(".addarea").click(function () {
	        pop.MaskShow();
	        clearForm();//清除表单
	        //加载经理列表
	        $.ajax({
	            type: "post",
	            url: "/OrgTeachWork/Organization/GetManageByOrg",
	            async: false,
	            dataType: "json",
	            data: {
	
	            },
	            success: function (data) {
	
	                if (data.result.Data) {
	
	                    var jlhtml = "";
	                    jlhtml += '<option value="0">请选择</option>';
	                    for (var key in data.result.Data) {
	                        if (data.result.Data[key].ManageId != undefined) {
	                            //<li>北京校区</li>
	                            //jlhtml += '<li id="' + data.result.Data[key].ManageId + '">' + data.result.Data[key].ManageName + '</li>';
	                            jlhtml += '<option value="' + data.result.Data[key].ManageId + '">' + data.result.Data[key].ManageName + '</option>';
	                        }
	                    }
	                    $("#managerid").html(jlhtml);
	
	                    InitScls();
	                }
	                else {
	
	
	                }
	            }
	        });
	
	
	        //加载经理
	        $(".createArea").show();
	        clearInterval(timer);
	
	    });
	    //加载学校列表
	    function InitScls() {
	
	        //加载学校列表
	        $.ajax({
	            type: "post",
	            url: "/OrgTeachWork/Organization/GetSchoolsByOrgId",
	            dataType: "json",
	            data: {
	                OrgId: 1
	
	            },
	            success: function (data) {//data.result;  
	                var schtml = "";
	
	                for (var key in data.result.Data) {
	                    if (data.result.Data[key].SchoolName != undefined) {
	                        schtml += '<li><input type="checkbox"  class="checkbox" data-id="' + data.result.Data[key].SchoolId + '" data-name="' + data.result.Data[key].SchoolName + '"  id="chk' + data.result.Data[key].SchoolId + '" "/>' + BindStrCut(data.result.Data[key].SchoolName) + '</li>';
	                    }
	                }
	                $("#scList").html(schtml);
	
	
	
	            }
	        });
	        //加载列表结束
	
	    }
	
	
	    $(".submit").click(function () {
	        //校验
	        if ($("#areaname").val() == "") {
	            $("#addtip").removeClass("hidden");
	            $("#addtip").html('<span class="alert-news">请输入大区名称！</span>');
	            return;
	
	        }
	        if ($("#managerid").val() == "0") {
	            $("#addtip").removeClass("hidden");
	            $("#addtip").html('<span class="alert-news">请选择经理！</span>');
	            return;
	
	        }
	
	        OptChSc();//经理信息
	        // submitResult();
	        var option = {};
	        option.Name = $("#areaname").val();
	        option.ManagerId = $("#managerid").val();
	        option.SchoolIds = $("#schstrs").val();
	        $.ajax({
	            type: "post",
	            url: "/OrgTeachWork/Organization/AddArea",
	            dataType: "json",
	            data: {
	                data: JSON.stringify(option)
	            },
	            success: function (data) {//data.result;  
	
	                alert("处理成功");
	
	            }
	        });
	        document.location.reload();
	
	        $(".createArea").hide();
	
	
	    });
	
	
	    //$(".popclose").click(function () {
	    //    $(".createArea").hide();
	    //});
	    //添加班级弹出框结束
	
	
	    //清空信息
	    function clearForm() {
	        var input = $("#form1").children().find("input");
	        for (var i = 0; i < input.length; i++) {
	            $(input[i]).val("");
	        }
	        var list = $("#Sex").children().find("i");
	        $("#scaList").html("");
	    }
	    ///处理截断字符串
	    function BindStrCut(obj) {
	
	        if (obj.length > 4) {
	            obj = obj.substring(0, 4) + "...";
	            return obj;
	        }
	        return obj;
	
	    };
	
	    //组装选择学校列表
	    function OptChSc() {
	
	        var str = "";
	        $("#scList :checkbox").each((function () {
	
	            if ($(this).is(":checked")) {
	                str += this.id.replace("chk", "");
	                str += ",";
	            }
	
	
	        }));
	
	        if (str.length > 1) {
	            $("#schstrs").val(str.substring(0, str.length - 1));
	        }
	
	
	    }
	
	
	
	    //自定义下拉列表框开始
	    //$(".scharea").click(function () {
	    //    //$(this).css("border","1px solid #cb441e");
	    //    var listbox = $(".listbox");
	    //    listbox.show();
	    //    var li = listbox.find("li");
	    //    for (var i = 0; i < li.length; i++) {
	    //        li.eq(i).click(function () {
	    //            var a = $(this).text();
	    //            var b = this.id;
	
	    //            $(".scharea").text(a);
	    //            $("#mangehi").val(b);
	    //            listbox.hide();
	    //        });
	    //    }
	    //});
	    //自定义下拉列表框结束
	    //处理自定义下拉框的事件
	    //$(document).click(function (event) {
	
	    //    if (event.target.nodeName.toLowerCase() == "span") {
	
	    //    } else {
	    //        $(".listbox").hide();
	    //    }
	
	    //});
	
	
	});
	


/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgTeachWork/areasupermanage',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,Data=$data.Data,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(Data,function($value,$index){
	$out+=' <tr class="font12"> <td>';
	$out+=$escape($value.AreaName);
	$out+='</td> <td>';
	$out+=$escape($value.UserName);
	$out+='</td> <td>';
	$out+=$escape($value.UserID);
	$out+='</td> <td>';
	$out+=$escape($value.Campus);
	$out+='</td> <td> <a href="/OrgTeachWork/Organization/OrgAreaDetail?AreaId=';
	$out+=$escape($value.AreaID);
	$out+='" class="see-btn look black">查看</a> </td> </tr> ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2pzL09yZ1RlYWNoV29yay9Qb3BDb21tb24uanM/ZTkzZSoqKioqKiIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL1BhZ2luYXRvci5qcz9iZTgxKioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2pzL09yZ1RlYWNoV29yay9hcmVhc3VwZXJtYW5hZ2UtdC5qcyIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZ1RlYWNoV29yay9hcmVhc3VwZXJtYW5hZ2UudHBsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFrQztBQUNsQzs7QUFFQTtBQUNBLHlDQUF3QyxPQUFPLDJCQUEyQjtBQUMxRTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXFDLFlBQVk7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QixpRUFBaUU7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0EsYUFBWSxlQUFlO0FBQzNCLGtEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBcUI7QUFDckIsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixHQUFFO0FBQ0Ysa0NBQWlDO0FBQ2pDLElBQUc7QUFDSCxlQUFjO0FBQ2Q7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0YsRUFBQyxHOzs7Ozs7O0FDOUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUtBQW9LOztBQUVwSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJNQUEwTSxNQUFNLE1BQU07QUFDdE47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTCxFQUFDOzs7Ozs7Ozs7QUN6REQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLHNGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFLEVBQUUsK0NBQStDO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXVDLFFBQVE7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUEsd0NBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBLGtHQUFpRztBQUNqRztBQUNBO0FBQ0Esd0lBQXVJO0FBQ3ZJOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXVDLFFBQVE7QUFDL0M7O0FBRUEsa0dBQWlHO0FBQ2pHLGtJQUFpSTtBQUNqSTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBbUMsZ0JBQWdCO0FBQ25EOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUErQzs7QUFFL0MsaUVBQWdFLEVBQUU7QUFDbEU7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7OztBQ2xMQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsVUFBUzs7OztBQUlULE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxtQ0FBa0M7QUFDbEMsMkNBQTBDOzs7QUFHMUM7QUFDQTtBQUNBLE1BQUs7O0FBRUw7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiOztBQUVBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFVBQVM7OztBQUdUO0FBQ0E7QUFDQTs7QUFFQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFhO0FBQ2IsdUNBQXNDLGM7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLHVDQUFzQyxjOztBQUV0Qzs7QUFFQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTs7O0FBR0EsTUFBSzs7O0FBR0w7QUFDQTtBQUNBLFFBQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7OztBQUdBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCLGVBQWU7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBLFlBQVc7QUFDWDtBQUNBOztBQUVBLFFBQU87OztBQUdQLEVBQUM7Ozs7Ozs7OztBQzVWRDtBQUNBO0FBQ0E7QUFDQSxjQUFhLG1KQUFtSjtBQUNoSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUMsRSIsImZpbGUiOiJhcmVhc3VwZXJtYW5hZ2UtdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qVE1PREpTOnt9Ki9cclxuIWZ1bmN0aW9uICgpIHtcclxuXHRmdW5jdGlvbiBhKGEsIGIpIHtcclxuXHRcdHJldHVybiAoL3N0cmluZ3xmdW5jdGlvbi8udGVzdCh0eXBlb2YgYikgPyBoIDogZykoYSwgYilcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGIoYSwgYykge1xyXG5cdFx0cmV0dXJuIFwic3RyaW5nXCIgIT0gdHlwZW9mIGEgJiYgKGMgPSB0eXBlb2YgYSwgXCJudW1iZXJcIiA9PT0gYyA/IGEgKz0gXCJcIiA6IGEgPSBcImZ1bmN0aW9uXCIgPT09IGMgPyBiKGEuY2FsbChhKSkgOiBcIlwiKSwgYVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYyhhKSB7XHJcblx0XHRyZXR1cm4gbFthXVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZChhKSB7XHJcblx0XHRyZXR1cm4gYihhKS5yZXBsYWNlKC8mKD8hW1xcdyNdKzspfFs8PlwiJ10vZywgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGUoYSwgYikge1xyXG5cdFx0aWYgKG0oYSkpZm9yICh2YXIgYyA9IDAsIGQgPSBhLmxlbmd0aDsgZCA+IGM7IGMrKyliLmNhbGwoYSwgYVtjXSwgYywgYSk7IGVsc2UgZm9yIChjIGluIGEpYi5jYWxsKGEsIGFbY10sIGMpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmKGEsIGIpIHtcclxuXHRcdHZhciBjID0gLyhcXC8pW15cXC9dK1xcMVxcLlxcLlxcMS8sIGQgPSAoXCIuL1wiICsgYSkucmVwbGFjZSgvW15cXC9dKyQvLCBcIlwiKSwgZSA9IGQgKyBiO1xyXG5cdFx0Zm9yIChlID0gZS5yZXBsYWNlKC9cXC9cXC5cXC8vZywgXCIvXCIpOyBlLm1hdGNoKGMpOyllID0gZS5yZXBsYWNlKGMsIFwiL1wiKTtcclxuXHRcdHJldHVybiBlXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnKGIsIGMpIHtcclxuXHRcdHZhciBkID0gYS5nZXQoYikgfHwgaSh7ZmlsZW5hbWU6IGIsIG5hbWU6IFwiUmVuZGVyIEVycm9yXCIsIG1lc3NhZ2U6IFwiVGVtcGxhdGUgbm90IGZvdW5kXCJ9KTtcclxuXHRcdHJldHVybiBjID8gZChjKSA6IGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGgoYSwgYikge1xyXG5cdFx0aWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGIpIHtcclxuXHRcdFx0dmFyIGMgPSBiO1xyXG5cdFx0XHRiID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgayhjKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR2YXIgZCA9IGpbYV0gPSBmdW5jdGlvbiAoYykge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgYihjLCBhKSArIFwiXCJcclxuXHRcdFx0fSBjYXRjaCAoZCkge1xyXG5cdFx0XHRcdHJldHVybiBpKGQpKClcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBkLnByb3RvdHlwZSA9IGIucHJvdG90eXBlID0gbiwgZC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIGIgKyBcIlwiXHJcblx0XHR9LCBkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpKGEpIHtcclxuXHRcdHZhciBiID0gXCJ7VGVtcGxhdGUgRXJyb3J9XCIsIGMgPSBhLnN0YWNrIHx8IFwiXCI7XHJcblx0XHRpZiAoYyljID0gYy5zcGxpdChcIlxcblwiKS5zbGljZSgwLCAyKS5qb2luKFwiXFxuXCIpOyBlbHNlIGZvciAodmFyIGQgaW4gYSljICs9IFwiPFwiICsgZCArIFwiPlxcblwiICsgYVtkXSArIFwiXFxuXFxuXCI7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gXCJvYmplY3RcIiA9PSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKGIgKyBcIlxcblxcblwiICsgYyksIGJcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBqID0gYS5jYWNoZSA9IHt9LCBrID0gdGhpcy5TdHJpbmcsIGwgPSB7XHJcblx0XHRcIjxcIjogXCImIzYwO1wiLFxyXG5cdFx0XCI+XCI6IFwiJiM2MjtcIixcclxuXHRcdCdcIic6IFwiJiMzNDtcIixcclxuXHRcdFwiJ1wiOiBcIiYjMzk7XCIsXHJcblx0XHRcIiZcIjogXCImIzM4O1wiXHJcblx0fSwgbSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGEpIHtcclxuXHRcdFx0cmV0dXJuIFwiW29iamVjdCBBcnJheV1cIiA9PT0ge30udG9TdHJpbmcuY2FsbChhKVxyXG5cdFx0fSwgbiA9IGEudXRpbHMgPSB7XHJcblx0XHQkaGVscGVyczoge30sICRpbmNsdWRlOiBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG5cdFx0XHRyZXR1cm4gYSA9IGYoYywgYSksIGcoYSwgYilcclxuXHRcdH0sICRzdHJpbmc6IGIsICRlc2NhcGU6IGQsICRlYWNoOiBlXHJcblx0fSwgbyA9IGEuaGVscGVycyA9IG4uJGhlbHBlcnM7XHJcblx0YS5nZXQgPSBmdW5jdGlvbiAoYSkge1xyXG5cdFx0cmV0dXJuIGpbYS5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIildXHJcblx0fSwgYS5oZWxwZXIgPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0b1thXSA9IGJcclxuXHR9LCBtb2R1bGUuZXhwb3J0cyA9IGFcclxufSgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA4IDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIxIDIzIDI1IDI2IDI3IDMxIDMyIDMzIDM3IDM4XG4gKiovIiwiLy/pga7nvalcclxuZnVuY3Rpb24gTWFza1Nob3coKSB7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWFza0hpZGUoKSB7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxufVxyXG4vL+S8oOmAkuaYvuekuueahOa2iOaBr1xyXG5mdW5jdGlvbiBQb3BUaXBTaG93KG9iaikge1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgdmFyIHRpcGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcC11cCBmb250MTRcIiBpZD1cIm9rdGlwXCI+PHNwYW4gY2xhc3M9XCJwb3AtY2xvc2UgY3Vyc29yXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPjxwIGNsYXNzPVwibGluZTEwMFwiIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+JyArIG9iaiArICc8L3A+PC9kaXY+PC9kaXY+JztcclxuXHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZCh0aXBodG1sKTtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LW9yZy13cmFwcGVyXCIpLmFwcGVuZCh0aXBodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59XHJcbi8v5by55Ye656Gu6K6k5qGGXHJcbnZhciBPcGVuQ29uZnJpbVBvcCA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJwb3AtdXAgZm9udDE0XCI+PHNwYW4gY2xhc3M9XCJwb3AtY2xvc2UgY3Vyc29yXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPicgKyBvYmogKyAnPC9kaXY+PGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImhhbmRsZVwiPiA8c3BhbiBjbGFzcz1cIm9rXCIgaWQ9XCJDb25mcmltXCI+56Gu5a6aPC9zcGFuPiAmbmJzcDsmbmJzcDsmbmJzcDs8c3BhbiBjbGFzcz1cIm9rXCIgaWQ9XCJDYW5jZWxcIj7lj5bmtog8L3NwYW4+IDwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIFBvcFRpcEhpZGUoKSB7XHJcbiAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59XHJcbi8v6ZqQ6JeP5re75Yqg55qE5qC35byP5b2T5by55Ye65qGG5ZKM5re75Yqg5qGG6YeN5Y+g55qEXHJcbmZ1bmN0aW9uIEFkZEhpZGUoKSB7XHJcbiAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0cy5NYXNrU2hvdyA9IE1hc2tTaG93O1xyXG5leHBvcnRzLk1hc2tIaWRlID0gTWFza0hpZGU7XHJcbmV4cG9ydHMuUG9wVGlwU2hvdyA9IFBvcFRpcFNob3c7XHJcbmV4cG9ydHMuUG9wVGlwSGlkZSA9IFBvcFRpcEhpZGU7XHJcbmV4cG9ydHMuT3BlbkNvbmZyaW1Qb3AgPSBPcGVuQ29uZnJpbVBvcDtcclxuZXhwb3J0cy5BZGRIaWRlID0gQWRkSGlkZTtcclxuXHJcbi8v5aSE55CG5by55Ye65qGG55qE6ZqQ6JePXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3AtY2xvc2VcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5wb3AtdXBcIikuaGlkZSgpO1xyXG4gICAgICAgIC8vZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcGNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2pzL09yZ1RlYWNoV29yay9Qb3BDb21tb24uanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNyAxMiAxNSAxNlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUGFnaW5hdG9yOiBmdW5jdGlvbiAocGFnZVNpemUsIGN1cnJlbnRQYWdlLCB0b3RhbENvdW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIC8vdG9kbyDnu5Hlrprkuovku7ZcclxuICAgICAgIFxyXG4gICAgICAgIHZhciB0b3RhbFBhZ2VzO1xyXG4gICAgICAgIGlmICh0b3RhbENvdW50ICUgcGFnZVNpemUgPT0gMCkge1xyXG4gICAgICAgICAgICB0b3RhbFBhZ2VzID0gdG90YWxDb3VudCAvIHBhZ2VTaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG90YWxQYWdlcyA9IHBhcnNlSW50KHRvdGFsQ291bnQgLyBwYWdlU2l6ZSkgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGFnZVByZSA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDEpICsgJyBjbGFzcz1cInByZS1wYWdlIGlubGluZSBtcjIwXCI+5LiK5LiA6aG1PC9hPic7XHJcbiAgICAgICAgdmFyIHBhZ2VOZXh0ID0gJzxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgMSkgKyAnIGNsYXNzPVwibmV4dC1wYWdlIGlubGluZVwiPuS4i+S4gOmhtTwvYT4nO1xyXG4gICAgICAgIHZhciBpbmRleFBhZ2UgPSAnPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCIgY2xhc3M9XCJwcmUtcGFnZSBpbmxpbmUgbXIyMFwiPummlumhtTwvYT48L2xpPic7XHJcblxyXG4gICAgICAgIHZhciBsYXN0UGFnZSA9ICcgPGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIHRvdGFsUGFnZXMgKyAnIGNsYXNzPVwicHJlLXBhZ2UgaW5saW5lIG1yMjBcIj4g5pyr6aG1PC9hPic7XHJcbiAgICAgICAgaWYgKHRvdGFsUGFnZXMgPCBwYWdlU2l6ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZ2VQcmUgPSBcIlwiO1xyXG4gICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGluZGV4UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxhc3RQYWdlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgICAgIHBhZ2VQcmUgPSBcIlwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlID49IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICBwYWdlTmV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxhc3RQYWdlID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0b3RhbENvdW50ID4gMCkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgcGFnZW51bSA9ICc8dWwgY2xhc3M9XCJwYWdlLWJveCBpbmxpbmUgbXIyMFwiPic7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gMSkgLy/nrKzkuIDpobVcclxuICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kKFwiIDxhIGRpc2FibGVkPSdkaXNhYmxlZCcgY2xhc3M9J2NvbEgnPuS4iuS4gOmhtTwvYT4gXCIpOy8v5LiK5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpITnkIbpppbpobXov57mjqVcclxuICAgICAgICAgICAgICAgICAgICAvL+WkhOeQhuS4iuS4gOmhteeahOi/nuaOpVxyXG4gICAgICAgICAgICAgICAgICAgIC8vcGFnZVByZSA9ICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMSkgKyAnPuS4iuS4gOmhtTwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG91dHB1dC5BcHBlbmRGb3JtYXQoXCIgPGEgZGF0YS1wYWdlSW5kZXg9J3swfScgY2xhc3M9J3BhZ2VMaW5rJz7kuIrkuIDpobU8L2E+IFwiLCBjdXJyZW50UGFnZSAtIDEpOy8v5LiK5LiA6aG1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWxQYWdlcyA+IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmludCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgNCkvLzRcclxuICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSBpICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtbnVtPScgKyBjdXJyZW50UGFnZSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDYpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIDcgKyAnPi4uLjwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJz4nICsgdG90YWxQYWdlcyArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAoaSArIDEpICsgJz4nICsgKGkgKyAxKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9Ly80XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFBhZ2UgPj0gNCAmJiBjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgLSAzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BhZ2VudW09cGFnZW51bSsnIDxsaSBkYXRhLW51bT0nKyhjdXJyZW50UGFnZS0zKSsnPjxhIGhyZWY9XCIjXCIgb25jbGljaz1cIlBhZ2luYXRvcignK3BhZ2VTaXplKycsJysoY3VycmVudFBhZ2UtMykrJywnICsgdG90YWxDb3VudCArICcpXCI+Li4uPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT1cIjFcIj4xPC9hPiA8L2xpPic7Ly8yMDE2MDkxMzA5MzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMyA+IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMykgKyAnPi4uLjwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSAzKS8v5Lit6Ze05b2T5YmN6aG1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiBkYXRhLW51bT0nICsgKGN1cnJlbnRQYWdlKSArICc+JyArIGN1cnJlbnRQYWdlICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSA2KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDMpICsgJz4uLi48L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyB0b3RhbFBhZ2VzICsgJz4nICsgdG90YWxQYWdlcyArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgIGRhdGEtbnVtPScgKyAocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgaSAtIHBhcnNlSW50KGN1cnJpbnQpKSArICc+JyArIChwYXJzZUludChjdXJyZW50UGFnZSkgKyBpIC0gcGFyc2VJbnQoY3VycmludCkpICsgJzwvYT4gPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09XCIxXCI+MTwvYT4gPC9saT4nOy8vMjAxNjA5MTMwOTMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGRhdGEtbnVtPScgKyAocGFyc2VJbnQodG90YWxQYWdlcykgLSA2KSArICc+Li4uPC9hPiA8L2xpPic7Ly8yMDE2MDkxMzA5MzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VzIC0gNiArIGkgPT0gY3VycmVudFBhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICcgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJhY3RpdmVcIiAgZGF0YS1udW09JyArIGN1cnJlbnRQYWdlICsgJz4nICsgY3VycmVudFBhZ2UgKyAnPC9hPiA8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHRvdGFsUGFnZXMgLSA2ICsgaSkgKyAnPicgKyAodG90YWxQYWdlcyAtIDYgKyBpKSArICc8L2E+IDwvbGk+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbFBhZ2VzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09IGkgKyAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW51bSA9IHBhZ2VudW0gKyAnIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiYWN0aXZlXCIgZGF0YS1udW09JyArIGN1cnJlbnRQYWdlICsgJz4nICsgY3VycmVudFBhZ2UgKyAnPC9hPiA8L2xpPic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VudW0gPSBwYWdlbnVtICsgJyA8bGk+PGEgaHJlZj1cIiNcIiAgZGF0YS1udW09JyArIChpICsgMSkgKyAnPicgKyAoaSArIDEpICsgJzwvYT4gPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PSB0b3RhbFBhZ2VzKSAvL+acgOWQjuS4gOmhtVxyXG4gICAgICAgICAgICAgICAgey8v5aSE55CG5LiL5LiA6aG15ZKM5bC+6aG155qE6ZO+5o6lXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdXRwdXQuQXBwZW5kKFwiIDxhIGRpc2FibGVkPSdkaXNhYmxlZCcgY2xhc3M9J2NvbEgnPuS4i+S4gOmhtTwvYT4gXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzKSB7Ly/lpITnkIbkuIvkuIDpobXlkozlsL7pobXnmoTpk77mjqUgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL291dHB1dC5BcHBlbmRGb3JtYXQoXCIgPGEgZGF0YS1wYWdlaW5kZXg9J3swfScgY2xhc3M9J3BhZ2VMaW5rJz7kuIvkuIDpobU8L2E+IFwiLCBjdXJyZW50UGFnZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgLy8gcGFnZVByZSA9ICc8YSBocmVmPVwiI1wiICBkYXRhLW51bT0nICsgKHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDEpICsgJyBjbGFzcz1cIm5leHQtcGFnZSBpbmxpbmVcIj7kuIvkuIDpobU8L2E+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYWdlbnVtID0gcGFnZW51bSArICc8L3VsPic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBpbmRleFBhZ2UgKyBwYWdlUHJlICsgcGFnZW51bSArIHBhZ2VOZXh0ICsgbGFzdFBhZ2U7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI3BhZ2luYXRpb24gYVwiKS51bmJpbmQoXCJjbGlja1wiKTtcclxuICAgICAgICAkKFwiI3BhZ2luYXRpb24gYVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygkKHRoaXMpLmF0dHIoXCJkYXRhLW51bVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi8vZnVuY3Rpb24gUGFnaW5hdG9yKHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgdG90YWxDb3VudCwgY2FsbGJhY2spIHtcclxuXHJcblxyXG4vL31cclxuXHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvZGVwL1BhZ2luYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAxMyAxNiAxOCAxOSAyMSAyNiAyNyAzMSAzMyAzOFxuICoqLyIsIlxyXG52YXIgdHBsVGFibGUgPSByZXF1aXJlKFwiT3JnVGVhY2hXb3JrL2FyZWFzdXBlcm1hbmFnZS50cGxcIik7XHJcbnZhciBwb3AgPSByZXF1aXJlKFwiLi9Qb3BDb21tb24uanNcIik7XHJcbnZhciBQYWdpbmF0b3IgPSByZXF1aXJlKCdQYWdpbmF0b3IuanMnKTtcclxuXHJcbnZhciBtb2R1bGUgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy90b2RvIOmAu+i+keWHveaVsFxyXG4gICAgICAgIC8vdGhpcy5sb2FkT3JnTXNnKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRCdG5zKCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL+WKoOi9veWkp+WMuuS/oeaBr1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL09yZ1RlYWNoV29yay9Pcmdhbml6YXRpb24vR2V0T3JnTXNnXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjT3JnTmFtZVwiKS5odG1sKGRhdGEucmVzdWx0LkRhdGEuT3JnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNBcmVhQ291bnRcIikuaHRtbChkYXRhLnJlc3VsdC5EYXRhLkFyZWFDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE9yZ01zZygpOy8v5oiQ5Yqf5LmL5ZCO5Zyo5Yqg6L29XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdEJ0bnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3RvZG8g57uR5a6a5LqL5Lu2XHJcbiAgICAgICAgLy8v5aSE55CG5oiq5pat5a2X56ym5LiyXHJcbiAgICAgICAgZnVuY3Rpb24gQmluZFN0ckN1dChvYmopIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChvYmoubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICAgICAgb2JqID0gb2JqLnN1YnN0cmluZygwLCA0KSArIFwiLi4uXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+WnlOaJmOmAieWtpuagoVxyXG4gICAgICAgICQoJyNzY0xpc3QnKS5kZWxlZ2F0ZShcIi5jaGVja2JveFwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSBCaW5kU3RyQ3V0KCQodGhpcykuYXR0cihcImRhdGEtbmFtZVwiKSk7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wID0gXCJcIjtcclxuICAgICAgICAgICAgdGVtcCArPSBcIjxsaSBjbGFzcz0nb3ZlcmZsb3cnIGlkPWFcIiArIGlkICsgXCI+PHNwYW4gY2xhc3M9J2xlZnQgc2NobmFtZSc+XCIgKyBuYW1lICsgXCI8L3NwYW4+IDxpICBkYXRhLWlkPVwiICsgaWQgKyBcIiBjbGFzcz0nZHVzdGJpbiBjdXJzb3IgcmlnaHQnICAgPjwvaT48L2xpPlwiO1xyXG4gICAgICAgICAgICBpZiAoJChcIiNhXCIgKyBpZCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNhXCIgKyBpZCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3NjYUxpc3RcIikuYXBwZW5kKHRlbXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8v5aeU5omY5Yig6Zmk5a2m5qChXHJcbiAgICAgICAgJCgnI3NjYUxpc3QnKS5kZWxlZ2F0ZShcIi5kdXN0YmluXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgICAgICAgICAgJChcIiNhXCIgKyBvYmopLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI2Noa1wiICsgb2JqKS5hdHRyKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn07XHJcbi8v5Yqg6L295a2m5qCh5YiX6KGoXHJcbmZ1bmN0aW9uIGxvYWRPcmdNc2cocGFnZSkge1xyXG5cclxuICAgIGlmIChwYWdlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHBhZ2UgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqg6L295YiX6KGoXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogXCIvT3JnVGVhY2hXb3JrL09yZ2FuaXphdGlvbi9HZXRBcmVhTGlzdFwiLFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIFNlcmNoTmFtZTogZXNjYXBlKCQoXCIjdHh0c2VyY2hcIikudmFsKCkpLFxyXG4gICAgICAgICAgICBQYWdlSW5kZXg6IHBhZ2UsXHJcbiAgICAgICAgICAgIFBhZ2VTaXplOiAxMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdC5EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3RiXCIpLmh0bWwodHBsVGFibGUoZGF0YS5yZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgIFBhZ2luYXRvci5QYWdpbmF0b3IoMTAsIHBhZ2UsIGRhdGEuVG90YWxDb3VudCwgbG9hZE9yZ01zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjdGJcIikuaHRtbChcIlwiKTsvL+a4heepuuaVsOaNrlxyXG4gICAgICAgICAgICAgICAgJChcIiNwYWdpbmF0aW9uXCIpLmh0bWwoXCJcIik7Ly/liIbpobXmjqfku7bkuI3mmL7npLpcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8v57uR5a6a5pWw5o2uXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgbW9kdWxlLmluaXQoKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRpbWVyID0gbnVsbDtcclxuICAgIC8v54K55Ye75pCc57Si5qGG5byA5aeLXHJcbiAgICAkKFwiLnNlYXJjaFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICQodGhpcykuY3NzKFwiYmFja2dyb3VuZFwiLCBcIiNjYjQ0MWVcIik7XHJcbiAgICAgICAgdmFyIHNlcmNodGV4dCA9ICQoXCIuc2VhcmNoLXRleHRcIik7XHJcblxyXG4gICAgICAgIHNlcmNodGV4dC5zaG93KCk7XHJcbiAgICAgICAgaWYgKCEoc2VyY2h0ZXh0Lmhhc0NsYXNzKFwib25cIikpKSB7XHJcbiAgICAgICAgICAgIHNlcmNodGV4dC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHNlcmNodGV4dC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE2MHB4XCJcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIHNlcmNodGV4dC5hZGRDbGFzcyhcIm9uXCIpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXJjaHRleHQuc3RvcCgpO1xyXG4gICAgICAgICAgICBzZXJjaHRleHQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIwcHhcIlxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgc2VyY2h0ZXh0LnJlbW92ZUNsYXNzKFwib25cIik7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKFwiYmFja2dyb3VuZFwiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIG1vZHVsZS5pbml0KCk7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8v54K55Ye75pCc57Si5qGG57uT5p2fXHJcbiAgICAvL+a3u+WKoOePree6p+W8ueWHuuahhuW8gOWni1xyXG4gICAgJChcIi5hZGRhcmVhXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwb3AuTWFza1Nob3coKTtcclxuICAgICAgICBjbGVhckZvcm0oKTsvL+a4hemZpOihqOWNlVxyXG4gICAgICAgIC8v5Yqg6L2957uP55CG5YiX6KGoXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvT3JnVGVhY2hXb3JrL09yZ2FuaXphdGlvbi9HZXRNYW5hZ2VCeU9yZ1wiLFxyXG4gICAgICAgICAgICBhc3luYzogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgamxodG1sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBqbGh0bWwgKz0gJzxvcHRpb24gdmFsdWU9XCIwXCI+6K+36YCJ5oupPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YS5yZXN1bHQuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YVtrZXldLk1hbmFnZUlkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy88bGk+5YyX5Lqs5qCh5Yy6PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vamxodG1sICs9ICc8bGkgaWQ9XCInICsgZGF0YS5yZXN1bHQuRGF0YVtrZXldLk1hbmFnZUlkICsgJ1wiPicgKyBkYXRhLnJlc3VsdC5EYXRhW2tleV0uTWFuYWdlTmFtZSArICc8L2xpPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbGh0bWwgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgZGF0YS5yZXN1bHQuRGF0YVtrZXldLk1hbmFnZUlkICsgJ1wiPicgKyBkYXRhLnJlc3VsdC5EYXRhW2tleV0uTWFuYWdlTmFtZSArICc8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbWFuYWdlcmlkXCIpLmh0bWwoamxodG1sKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgSW5pdFNjbHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8v5Yqg6L2957uP55CGXHJcbiAgICAgICAgJChcIi5jcmVhdGVBcmVhXCIpLnNob3coKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuXHJcbiAgICB9KTtcclxuICAgIC8v5Yqg6L295a2m5qCh5YiX6KGoXHJcbiAgICBmdW5jdGlvbiBJbml0U2NscygpIHtcclxuXHJcbiAgICAgICAgLy/liqDovb3lrabmoKHliJfooahcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9PcmdUZWFjaFdvcmsvT3JnYW5pemF0aW9uL0dldFNjaG9vbHNCeU9yZ0lkXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgT3JnSWQ6IDFcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7Ly9kYXRhLnJlc3VsdDsgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHNjaHRtbCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEucmVzdWx0LkRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YVtrZXldLlNjaG9vbE5hbWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaHRtbCArPSAnPGxpPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAgY2xhc3M9XCJjaGVja2JveFwiIGRhdGEtaWQ9XCInICsgZGF0YS5yZXN1bHQuRGF0YVtrZXldLlNjaG9vbElkICsgJ1wiIGRhdGEtbmFtZT1cIicgKyBkYXRhLnJlc3VsdC5EYXRhW2tleV0uU2Nob29sTmFtZSArICdcIiAgaWQ9XCJjaGsnICsgZGF0YS5yZXN1bHQuRGF0YVtrZXldLlNjaG9vbElkICsgJ1wiIFwiLz4nICsgQmluZFN0ckN1dChkYXRhLnJlc3VsdC5EYXRhW2tleV0uU2Nob29sTmFtZSkgKyAnPC9saT4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICQoXCIjc2NMaXN0XCIpLmh0bWwoc2NodG1sKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5Yqg6L295YiX6KGo57uT5p2fXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkKFwiLnN1Ym1pdFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy/moKHpqoxcclxuICAgICAgICBpZiAoJChcIiNhcmVhbmFtZVwiKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICQoXCIjYWRkdGlwXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAkKFwiI2FkZHRpcFwiKS5odG1sKCc8c3BhbiBjbGFzcz1cImFsZXJ0LW5ld3NcIj7or7fovpPlhaXlpKfljLrlkI3np7DvvIE8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkKFwiI21hbmFnZXJpZFwiKS52YWwoKSA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICAkKFwiI2FkZHRpcFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgJChcIiNhZGR0aXBcIikuaHRtbCgnPHNwYW4gY2xhc3M9XCJhbGVydC1uZXdzXCI+6K+36YCJ5oup57uP55CG77yBPC9zcGFuPicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT3B0Q2hTYygpOy8v57uP55CG5L+h5oGvXHJcbiAgICAgICAgLy8gc3VibWl0UmVzdWx0KCk7XHJcbiAgICAgICAgdmFyIG9wdGlvbiA9IHt9O1xyXG4gICAgICAgIG9wdGlvbi5OYW1lID0gJChcIiNhcmVhbmFtZVwiKS52YWwoKTtcclxuICAgICAgICBvcHRpb24uTWFuYWdlcklkID0gJChcIiNtYW5hZ2VyaWRcIikudmFsKCk7XHJcbiAgICAgICAgb3B0aW9uLlNjaG9vbElkcyA9ICQoXCIjc2Noc3Ryc1wiKS52YWwoKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9PcmdUZWFjaFdvcmsvT3JnYW5pemF0aW9uL0FkZEFyZWFcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShvcHRpb24pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7Ly9kYXRhLnJlc3VsdDsgIFxyXG5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi5aSE55CG5oiQ5YqfXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuICAgICAgICAkKFwiLmNyZWF0ZUFyZWFcIikuaGlkZSgpO1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8kKFwiLnBvcGNsb3NlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICQoXCIuY3JlYXRlQXJlYVwiKS5oaWRlKCk7XHJcbiAgICAvL30pO1xyXG4gICAgLy/mt7vliqDnj63nuqflvLnlh7rmoYbnu5PmnZ9cclxuXHJcblxyXG4gICAgLy/muIXnqbrkv6Hmga9cclxuICAgIGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcclxuICAgICAgICB2YXIgaW5wdXQgPSAkKFwiI2Zvcm0xXCIpLmNoaWxkcmVuKCkuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJChpbnB1dFtpXSkudmFsKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGlzdCA9ICQoXCIjU2V4XCIpLmNoaWxkcmVuKCkuZmluZChcImlcIik7XHJcbiAgICAgICAgJChcIiNzY2FMaXN0XCIpLmh0bWwoXCJcIik7XHJcbiAgICB9XHJcbiAgICAvLy/lpITnkIbmiKrmlq3lrZfnrKbkuLJcclxuICAgIGZ1bmN0aW9uIEJpbmRTdHJDdXQob2JqKSB7XHJcblxyXG4gICAgICAgIGlmIChvYmoubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICBvYmogPSBvYmouc3Vic3RyaW5nKDAsIDQpICsgXCIuLi5cIjtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIC8v57uE6KOF6YCJ5oup5a2m5qCh5YiX6KGoXHJcbiAgICBmdW5jdGlvbiBPcHRDaFNjKCkge1xyXG5cclxuICAgICAgICB2YXIgc3RyID0gXCJcIjtcclxuICAgICAgICAkKFwiI3NjTGlzdCA6Y2hlY2tib3hcIikuZWFjaCgoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgc3RyICs9IHRoaXMuaWQucmVwbGFjZShcImNoa1wiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIHN0ciArPSBcIixcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgJChcIiNzY2hzdHJzXCIpLnZhbChzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvL+iHquWumuS5ieS4i+aLieWIl+ihqOahhuW8gOWni1xyXG4gICAgLy8kKFwiLnNjaGFyZWFcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgLy8kKHRoaXMpLmNzcyhcImJvcmRlclwiLFwiMXB4IHNvbGlkICNjYjQ0MWVcIik7XHJcbiAgICAvLyAgICB2YXIgbGlzdGJveCA9ICQoXCIubGlzdGJveFwiKTtcclxuICAgIC8vICAgIGxpc3Rib3guc2hvdygpO1xyXG4gICAgLy8gICAgdmFyIGxpID0gbGlzdGJveC5maW5kKFwibGlcIik7XHJcbiAgICAvLyAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgbGkuZXEoaSkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgICAgICB2YXIgYSA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgLy8gICAgICAgICAgICB2YXIgYiA9IHRoaXMuaWQ7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAkKFwiLnNjaGFyZWFcIikudGV4dChhKTtcclxuICAgIC8vICAgICAgICAgICAgJChcIiNtYW5nZWhpXCIpLnZhbChiKTtcclxuICAgIC8vICAgICAgICAgICAgbGlzdGJveC5oaWRlKCk7XHJcbiAgICAvLyAgICAgICAgfSk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvL30pO1xyXG4gICAgLy/oh6rlrprkuYnkuIvmi4nliJfooajmoYbnu5PmnZ9cclxuICAgIC8v5aSE55CG6Ieq5a6a5LmJ5LiL5ouJ5qGG55qE5LqL5Lu2XHJcbiAgICAvLyQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgIC8vICAgIGlmIChldmVudC50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSBcInNwYW5cIikge1xyXG5cclxuICAgIC8vICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgJChcIi5saXN0Ym94XCIpLmhpZGUoKTtcclxuICAgIC8vICAgIH1cclxuXHJcbiAgICAvL30pO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmdUZWFjaFdvcmsvYXJlYXN1cGVybWFuYWdlLXQuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxNlxuICoqLyIsInZhciB0ZW1wbGF0ZT1yZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdPcmcvdHBsL09yZ1RlYWNoV29yay9hcmVhc3VwZXJtYW5hZ2UnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLERhdGE9JGRhdGEuRGF0YSwkdmFsdWU9JGRhdGEuJHZhbHVlLCRpbmRleD0kZGF0YS4kaW5kZXgsJGVzY2FwZT0kdXRpbHMuJGVzY2FwZSwkb3V0PScnOyRvdXQrPScgJztcbiRlYWNoKERhdGEsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDx0ciBjbGFzcz1cImZvbnQxMlwiPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLkFyZWFOYW1lKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlVzZXJOYW1lKTtcbiRvdXQrPSc8L3RkPiA8dGQ+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlVzZXJJRCk7XG4kb3V0Kz0nPC90ZD4gPHRkPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5DYW1wdXMpO1xuJG91dCs9JzwvdGQ+IDx0ZD4gPGEgaHJlZj1cIi9PcmdUZWFjaFdvcmsvT3JnYW5pemF0aW9uL09yZ0FyZWFEZXRhaWw/QXJlYUlkPSc7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5BcmVhSUQpO1xuJG91dCs9J1wiIGNsYXNzPVwic2VlLWJ0biBsb29rIGJsYWNrXCI+5p+l55yLPC9hPiA8L3RkPiA8L3RyPiAnO1xufSk7XG4kb3V0Kz0nICc7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ1RlYWNoV29yay9hcmVhc3VwZXJtYW5hZ2UudHBsXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTZcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9