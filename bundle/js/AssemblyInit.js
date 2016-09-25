webpackJsonp([0,41],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var date = new Date().getHours();
	var tplPoint = __webpack_require__(2);
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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgExam/pointlist',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,N=$data.N,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(N,function($value,$index){
	$out+=' <li data-value="';
	$out+=$escape($value.PointID);
	$out+='">';
	$out+=$escape($value.PointName);
	$out+='</li> ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ },
/* 3 */
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

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnRXhhbS9Bc3NlbWJseUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9PcmdFeGFtL3BvaW50bGlzdC50cGwiLCJ3ZWJwYWNrOi8vLy4vfi90bW9kanMtbG9hZGVyL3J1bnRpbWUuanM/ODk2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEIsYUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUztBQUNUO0FBQ0E7QUFDQSxpREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBUzs7QUFFVDs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QixvQkFBb0I7QUFDbEQ7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQSwrQ0FBOEM7QUFDOUMsbUNBQWtDO0FBQ2xDLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7O0FBR2IsVUFBUztBQUNUOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQzVLRDtBQUNBO0FBQ0E7QUFDQSxjQUFhLDZJQUE2STtBQUMxSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDYkQsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQSx5Q0FBd0MsT0FBTywyQkFBMkI7QUFDMUU7O0FBRUE7QUFDQTtBQUNBLHNDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSwwQkFBeUIsaUVBQWlFO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBLGFBQVksZUFBZTtBQUMzQixrREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCO0FBQ3JCLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsR0FBRTtBQUNGLGtDQUFpQztBQUNqQyxJQUFHO0FBQ0gsZUFBYztBQUNkO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGLEVBQUMsRyIsImZpbGUiOiJBc3NlbWJseUluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcclxudmFyIHRwbFBvaW50ID0gcmVxdWlyZShcIk9yZ0V4YW0vcG9pbnRsaXN0LnRwbFwiKTtcclxudmFyIGxhc3RHcmFkZSA9ICcwJzsvL+esrOS4gOasoVxyXG52YXIgcGFyYSA9IHsgU3ViamVjdElEOiAzLCBTdGFnZUlEOiAneCcsIEdyYWRlSUQ6IDEsIGRhdGE6ICcnLCBQYXBlck5hbWU6ICcnIH07XHJcblxyXG52YXIgbW9kdWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vdG9kbyDpgLvovpHlh73mlbAgXHJcbiAgICAgICAgTG9hZFN1YmplY3RCeUdyYWRlKDEsIHRoaXMpO1xyXG4gICAgICAgIG9uQ2xpY2tQYXJhKCk7XHJcbiAgICAgICAgb25DbGlja1BhcmEyKCk7XHJcbiAgICAgICAgTG9hZFBvaW50TGlzdCgpO1xyXG4gICAgICAgICQoXCIjTTFcIikudGV4dChHZXRJbmZvKCkpO1xyXG4gICAgICAgICQoXCIjWFwiKS50ZXh0KCk7XHJcbiAgICAgICAgb25OZXh0Q2xpY2soKTtcclxuICAgIH07XHJcbiAgICB2YXIgR2V0SW5mbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZGF0ZSA+PSA1ICYmIGRhdGUgPCA4ID8gXCLml6nkuIrlpb1cIlxyXG4gICAgICAgICAgICA6IGRhdGUgPj0gOCAmJiBkYXRlIDwgMTIgPyBcIuS4iuWNiOWlvVwiXHJcbiAgICAgICAgICAgIDogZGF0ZSA+PSAxMiAmJiBkYXRlIDwgMTMgPyBcIuS4reetieWlvVwiXHJcbiAgICAgICAgICAgIDogZGF0ZSA+PSAxMyAmJiBkYXRlIDwgMTggPyBcIuS4i+WNiOWlvVwiXHJcbiAgICAgICAgICAgIDogXCLmmZrkuIrlpb1cIjtcclxuICAgIH07XHJcbiAgICB2YXIgb25DbGlja1BhcmEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNHcmFkZUlEIGxpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGdyYWRlaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWFyZWFpZFwiKTtcclxuICAgICAgICAgICAgcGFyYS5TdGFnZUlEID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1hXCIpO1xyXG4gICAgICAgICAgICBwYXJhLkdyYWRlSUQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWFyZWFpZFwiKTtcclxuICAgICAgICAgICAgTG9hZFN1YmplY3RCeUdyYWRlKGdyYWRlaWQsIHRoaXMpO1xyXG4gICAgICAgICAgICBvbkNsaWNrUGFyYUl0ZW0odGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uQ2xpY2tQYXJhMiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI1N1YmplY3RJRCBsaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFN1YmplY3RJRCA9ICQodGhpcykuYXR0cihcImRhdGEtYXJlYWlkXCIpO1xyXG4gICAgICAgICAgICAvL+eCueWHu+W5tOe6p+WKoOi9veenkeebrlxyXG4gICAgICAgICAgICBvbkNsaWNrUGFyYUl0ZW0odGhpcyk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHZhciBvbkNsaWNrUGFyYUl0ZW0gPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgJChvYmopLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7Ly/pgY3ljoZcclxuICAgICAgIFxyXG4gICAgICAgICQob2JqKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICBpZiAoJChvYmopLmF0dHIoXCJkYXRhLWFcIikpIHtcclxuICAgICAgICAgICAgcGFyYS5HcmFkZUlEID0gJChvYmopLmF0dHIoXCJkYXRhLWFyZWFpZFwiKTtcclxuICAgICAgICAgICAgcGFyYS5TdGFnZUlEID0gJChvYmopLmF0dHIoXCJkYXRhLWFcIik7XHJcbiAgICAgICAgICAgIHBhcmEuU3ViamVjdElEID0gJChcIiNTdWJqZWN0SUQgbGlcIikuZmlsdGVyKCdsaVtjbGFzcz1cImFjdGl2ZVwiXScpLmF0dHIoXCJkYXRhLWFyZWFpZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHBhcmEuU3ViamVjdElEID0gJChvYmopLmF0dHIoXCJkYXRhLWFyZWFpZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBMb2FkUG9pbnRMaXN0KCk7Ly/ojrflj5bnn6Xor4bngrlcclxuICAgIH07XHJcbiAgICB2YXIgTG9hZFN1YmplY3RCeUdyYWRlID0gZnVuY3Rpb24gKGdyYWRlaWQsIG9iaikgLy/liqDovb3mnInmlYjnp5Hnm65cclxuICAgIHtcclxuICAgICAgICB2YXIgc3ViamVjdDEgPSAkKCc8bGkgZGF0YS1hcmVhaWQ9XCIyXCIgY2xhc3M9XCJhY3RpdmVcIj7mlbDlraY8L2xpPjxsaSBkYXRhLWFyZWFpZD1cIjNcIj7oi7Hor608L2xpPjxsaSBkYXRhLWFyZWFpZD1cIjRcIj7niannkIY8L2xpPjxsaSBkYXRhLWFyZWFpZD1cIjVcIj7ljJblraY8L2xpPicpO1xyXG4gICAgICAgIHZhciBzdWJqZWN0MiA9ICQoJzxsaSBkYXRhLWFyZWFpZD1cIjE0XCIgY2xhc3M9XCJhY3RpdmVcIj7lpaXmlbA8L2xpPjxsaSBkYXRhLWFyZWFpZD1cIjNcIj7oi7Hor608L2xpPicpO1xyXG4gICAgICAgIHZhciBzdWJqZWN0MyA9ICQoJzxsaSBkYXRhLWFyZWFpZD1cIjNcIiBjbGFzcz1cImFjdGl2ZVwiPuiLseivrTwvbGk+Jyk7XHJcbiAgICAgICAgJChcIiNTdWJqZWN0SURcIikuaHRtbChcIlwiKTtcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGdyYWRlaWQpID49IDEgJiYgcGFyc2VJbnQoZ3JhZGVpZCkgPD0gMikge1xyXG4gICAgICAgICAgICAkKFwiI1N1YmplY3RJRFwiKS5hcHBlbmQoc3ViamVjdDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwYXJzZUludChncmFkZWlkKSA+PSAxICYmIHBhcnNlSW50KGdyYWRlaWQpIDw9IDUpIHtcclxuXHJcbiAgICAgICAgICAgICQoXCIjU3ViamVjdElEXCIpLmFwcGVuZChzdWJqZWN0Mik7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoZ3JhZGVpZCkgPT0gNikge1xyXG5cclxuICAgICAgICAgICAgJChcIiNTdWJqZWN0SURcIikuYXBwZW5kKHN1YmplY3QyKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChncmFkZWlkKSA+IDYpIHtcclxuICAgICAgICAgICAgJChcIiNTdWJqZWN0SURcIikuYXBwZW5kKHN1YmplY3QxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25DbGlja1BhcmEyKCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIExvYWRQb2ludExpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL09yZ0V4YW0vQ3JlYXRlRXhhbS9HZXRNaXhJbml0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgU3RhZ2VJRDogcGFyYS5TdGFnZUlELFxyXG4gICAgICAgICAgICAgICAgU3ViamVjdElEOiBwYXJhLlN1YmplY3RJRCxcclxuICAgICAgICAgICAgICAgIGVkdTogcGFyYS5lZHUsXHJcbiAgICAgICAgICAgICAgICBhcnRTY2llbmNlOiBwYXJhLmFydFNjaWVuY2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNQb2ludHNcIikuaHRtbCh0cGxQb2ludChkYXRhLk4pKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI04xXCIpLmh0bWwoZGF0YS5OLk4xICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNOMlwiKS5odG1sKGRhdGEuTi5OMik7XHJcbiAgICAgICAgICAgICAgICAgICAgb25CYW5kUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdGFibGVJRFwiKS5odG1sKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uQmFuZFBvaW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjUG9pbnRzIGxpXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cihcImNsYXNzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHsgXCJjbGFzc1wiOiBcImFjdGl2ZVwiIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uTmV4dENsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgJChcIiNuZXh0XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9ICQoXCIjcGFwZXJuYW1lXCIpLnZhbCgpOyAvLyDojrflj5blgLxcclxuICAgICAgICAgICAgdmFsdWUgPSAkLnRyaW0odmFsdWUpOyAvLyDnlKhqUXVlcnnnmoR0cmlt5pa55rOV5Yig6Zmk5YmN5ZCO56m65qC8XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAnJykgey8vIOWIpOaWreaYr+WQpuaYr+epuuWtl+espuS4su+8jOiAjOS4jeaYr251bGxcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi6L6T5YWl5LiN6IO95Li656m6IVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmEuUGFwZXJOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHQgPSBbXTtcclxuICAgICAgICAgICAgJChcIiNQb2ludHMgbGlcIikuZWFjaChmdW5jdGlvbiAoaSwgaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgUG9pbnRzTW9kZWwgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBQb2ludHNNb2RlbC5Qb2ludElEID0gJChqKS5hdHRyKFwiZGF0YS12YWx1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBQb2ludHNNb2RlbC5Qb2ludE5hbWUgPSAkKGopLnRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0LnB1c2goUG9pbnRzTW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHQubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi6K+36YCJ5oup55+l6K+G54K5IVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXJhLmRhdGEgPSBKU09OLnN0cmluZ2lmeSh0KTtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICAgIHVybDogXCIvT3JnRXhhbS9DcmVhdGVFeGFtL1NhdmVCb29rRXhhbVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIFN0YWdlSUQ6IHBhcmEuU3RhZ2VJRCxcclxuICAgICAgICAgICAgICAgICAgICBHcmFkZUlEOiBwYXJhLkdyYWRlSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgU3ViamVjdElEOiBwYXJhLlN1YmplY3RJRCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwYXJhLlBhcGVyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBwYXJhLmRhdGFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLk9LKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBFeGFtSUQgPSBkYXRhLklEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL09yZ0V4YW0vQ3JlYXRlRXhhbS9GaWx0ZXJUZXN0P1U9TSZFeGFtSUQ9XCIgKyBkYXRhLklEICsgXCImU3ViamVjdElEPVwiICsgcGFyYS5TdWJqZWN0SUQgKyBcIiZTdGFnZUlEPVwiICsgcGFyYS5TdGFnZUlEO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiBcclxufVxyXG5cclxuLy/nu5HlrprmlbDmja5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBuZXcgbW9kdWxlKCkuaW5pdCgpO1xyXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2pzL09yZ0V4YW0vQXNzZW1ibHlJbml0LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnRXhhbS9wb2ludGxpc3QnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLE49JGRhdGEuTiwkdmFsdWU9JGRhdGEuJHZhbHVlLCRpbmRleD0kZGF0YS4kaW5kZXgsJGVzY2FwZT0kdXRpbHMuJGVzY2FwZSwkb3V0PScnOyRvdXQrPScgJztcbiRlYWNoKE4sZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDxsaSBkYXRhLXZhbHVlPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlBvaW50SUQpO1xuJG91dCs9J1wiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5Qb2ludE5hbWUpO1xuJG91dCs9JzwvbGk+ICc7XG59KTtcbiRvdXQrPScgJztcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy90cGwvT3JnRXhhbS9wb2ludGxpc3QudHBsXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypUTU9ESlM6e30qL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdGZ1bmN0aW9uIGEoYSwgYikge1xyXG5cdFx0cmV0dXJuICgvc3RyaW5nfGZ1bmN0aW9uLy50ZXN0KHR5cGVvZiBiKSA/IGggOiBnKShhLCBiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYihhLCBjKSB7XHJcblx0XHRyZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSAmJiAoYyA9IHR5cGVvZiBhLCBcIm51bWJlclwiID09PSBjID8gYSArPSBcIlwiIDogYSA9IFwiZnVuY3Rpb25cIiA9PT0gYyA/IGIoYS5jYWxsKGEpKSA6IFwiXCIpLCBhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjKGEpIHtcclxuXHRcdHJldHVybiBsW2FdXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkKGEpIHtcclxuXHRcdHJldHVybiBiKGEpLnJlcGxhY2UoLyYoPyFbXFx3I10rOyl8Wzw+XCInXS9nLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZShhLCBiKSB7XHJcblx0XHRpZiAobShhKSlmb3IgKHZhciBjID0gMCwgZCA9IGEubGVuZ3RoOyBkID4gYzsgYysrKWIuY2FsbChhLCBhW2NdLCBjLCBhKTsgZWxzZSBmb3IgKGMgaW4gYSliLmNhbGwoYSwgYVtjXSwgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoYSwgYikge1xyXG5cdFx0dmFyIGMgPSAvKFxcLylbXlxcL10rXFwxXFwuXFwuXFwxLywgZCA9IChcIi4vXCIgKyBhKS5yZXBsYWNlKC9bXlxcL10rJC8sIFwiXCIpLCBlID0gZCArIGI7XHJcblx0XHRmb3IgKGUgPSBlLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7IGUubWF0Y2goYyk7KWUgPSBlLnJlcGxhY2UoYywgXCIvXCIpO1xyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoYiwgYykge1xyXG5cdFx0dmFyIGQgPSBhLmdldChiKSB8fCBpKHtmaWxlbmFtZTogYiwgbmFtZTogXCJSZW5kZXIgRXJyb3JcIiwgbWVzc2FnZTogXCJUZW1wbGF0ZSBub3QgZm91bmRcIn0pO1xyXG5cdFx0cmV0dXJuIGMgPyBkKGMpIDogZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChhLCBiKSB7XHJcblx0XHRpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYikge1xyXG5cdFx0XHR2YXIgYyA9IGI7XHJcblx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBrKGMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBkID0galthXSA9IGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBiKGMsIGEpICsgXCJcIlxyXG5cdFx0XHR9IGNhdGNoIChkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGkoZCkoKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGQucHJvdG90eXBlID0gYi5wcm90b3R5cGUgPSBuLCBkLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYiArIFwiXCJcclxuXHRcdH0sIGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGkoYSkge1xyXG5cdFx0dmFyIGIgPSBcIntUZW1wbGF0ZSBFcnJvcn1cIiwgYyA9IGEuc3RhY2sgfHwgXCJcIjtcclxuXHRcdGlmIChjKWMgPSBjLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCJcXG5cIik7IGVsc2UgZm9yICh2YXIgZCBpbiBhKWMgKz0gXCI8XCIgKyBkICsgXCI+XFxuXCIgKyBhW2RdICsgXCJcXG5cXG5cIjtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IoYiArIFwiXFxuXFxuXCIgKyBjKSwgYlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGogPSBhLmNhY2hlID0ge30sIGsgPSB0aGlzLlN0cmluZywgbCA9IHtcclxuXHRcdFwiPFwiOiBcIiYjNjA7XCIsXHJcblx0XHRcIj5cIjogXCImIzYyO1wiLFxyXG5cdFx0J1wiJzogXCImIzM0O1wiLFxyXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcclxuXHRcdFwiJlwiOiBcIiYjMzg7XCJcclxuXHR9LCBtID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xyXG5cdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB7fS50b1N0cmluZy5jYWxsKGEpXHJcblx0XHR9LCBuID0gYS51dGlscyA9IHtcclxuXHRcdCRoZWxwZXJzOiB7fSwgJGluY2x1ZGU6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcblx0XHRcdHJldHVybiBhID0gZihjLCBhKSwgZyhhLCBiKVxyXG5cdFx0fSwgJHN0cmluZzogYiwgJGVzY2FwZTogZCwgJGVhY2g6IGVcclxuXHR9LCBvID0gYS5oZWxwZXJzID0gbi4kaGVscGVycztcclxuXHRhLmdldCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRyZXR1cm4galthLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKV1cclxuXHR9LCBhLmhlbHBlciA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRvW2FdID0gYlxyXG5cdH0sIG1vZHVsZS5leHBvcnRzID0gYVxyXG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdG1vZGpzLWxvYWRlci9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDggMTMgMTQgMTUgMTYgMTcgMTggMTkgMjEgMjMgMjUgMjYgMjcgMzEgMzIgMzMgMzcgMzhcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9