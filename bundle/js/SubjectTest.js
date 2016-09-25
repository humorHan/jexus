webpackJsonp([12,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(28);


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

/***/ 16:
/***/ function(module, exports) {

	module.exports = {
		$id: function (s) {
		    return document.getElementById(s);
		},
	    //判断小数 
		IsFloat: function (s) {
		    if (!/^[+\-]?\d+(.\d+)?$/.test(s))
		        return false;
		    else
		        return true;
		},
	    //判断正小数
		IsPlusFloat: function (s) { 
		    if (!/^[+]?\d+(.\d+)?$/.test(s))
		        return false;
		    else
		        return true;
		},
	    // 判断正整数
		IsPlusInt: function (s) {
		    if (!/^\d*$/.test(s))
		        return false;
		    else
		        return true;
		},
	    // 判断是否为字母和数字
		CheckName: function (s) {
		    if (!/^[A-Za-z0-9._-]+$/.test(s))
		        return false;
		    else
		        return true;
		}, // 检测Email格式
		IsEmail: function (s) {
		    var pattern = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
		    flag = pattern.test(s);
		    if (!flag) {
		        return false;
		    }
		    return (true);
		}, // 比较两个数是否相同
		CompValue: function (s1, s2) {
		    if (s1 != s2) {
		        return false;
		    }
		    else
		        return true;
		}, // 判断字符是否为空
		IsEmpty: function (s) {
		    if (s == "") {
		        return false;
		    }
		    else
		        return true;
		},
	    // 取RadioList的值
		GetRadioList: function (s) {
		    var radListItems = document.all(s);
		    var radListItesCount = radListItems.length - 1;
		    var radListCheckedValue = "";
	
		    //遍歷Item的Text和Value
		    for (var i = 1; i <= radListItesCount; i++) {
		        if (radListItems[i].checked)
		            radListCheckedValue = radListItems[i].value;
		    }
	
		    return radListCheckedValue;
		}, // 判断字符是否为空
		Setfocus: function () {
		    document.body.focus();
		}
	}
	


/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	
	var pop = __webpack_require__(5);
	var pub = __webpack_require__(16);//校验
	var module = {
	    init: function () {
	        
	        //todo 逻辑函数
	        this.render();
	        
	        this.initBtns();
	
	    },
	    //获取机构设置绑定
	    render: function () {
	        $.ajax({
	            type: "post",
	            url: "/OrgSystemSet/OrgSet/OrgSetGet",
	            dataType: "json",
	            data: {
	              
	
	            },
	            success: function (data) {
	                
	                if (data.result.Data) {
	                    
	                    $("#orgid").val(data.result.Data.OrgId);//赋值
	                    $("#orgname").val(data.result.Data.OrgName);
	                   // $("#orgsetday").val(data.result.Data.OrgTimeSet);//暂时隐藏，不设置业绩天数
	                }
	                else {
	
	                }
	            }
	        });
	
	    },
	    initBtns: function () {
	        //todo 绑定事件
	
	        //进行跳转
	        $('#main-content-wrapper').delegate("#learnurl", "click", function () {
	            
	            window.location.href = "/OrgExam/Index/LearnTest";
	           
	        });
	    }
	
	
	};
	
	//绑定数据
	$(function () {
	    module.init();
	  
	});
	
	
	


/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnVGVhY2hXb3JrL1BvcENvbW1vbi5qcz9lOTNlKioqKiIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL2NoZWNrL3B1Yi5qcz9hYjRhIiwid2VicGFjazovLy8uL09yZy9qcy9PcmdFeGFtL1N1YmplY3RUZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFLQUFvSzs7QUFFcEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyTUFBME0sTUFBTSxNQUFNO0FBQ3ROO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUwsRUFBQzs7Ozs7Ozs7O0FDekREO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSw2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN0RUE7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsY0FBYTtBQUNiOztBQUVBOztBQUVBLDZEQUE0RDtBQUM1RDtBQUNBLHdFQUF1RTtBQUN2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTOztBQUVULE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBUztBQUNUOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQyIsImZpbGUiOiJTdWJqZWN0VGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8v6YGu572pXHJcbmZ1bmN0aW9uIE1hc2tTaG93KCkge1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5zaG93KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1hc2tIaWRlKCkge1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbn1cclxuLy/kvKDpgJLmmL7npLrnmoTmtojmga9cclxuZnVuY3Rpb24gUG9wVGlwU2hvdyhvYmopIHtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIHZhciB0aXBodG1sID0gJzxkaXYgY2xhc3M9XCJwb3AtdXAgZm9udDE0XCIgaWQ9XCJva3RpcFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj48cCBjbGFzcz1cImxpbmUxMDBcIiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiPicgKyBvYmogKyAnPC9wPjwvZGl2PjwvZGl2Pic7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5hcHBlbmQodGlwaHRtbCk7XHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5hcHBlbmQodGlwaHRtbCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxuICAgICQoXCIucG9wLXVwXCIpLnNob3coKTtcclxufVxyXG4vL+W8ueWHuuehruiupOahhlxyXG52YXIgT3BlbkNvbmZyaW1Qb3AgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj4nICsgb2JqICsgJzwvZGl2PjxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJoYW5kbGVcIj4gPHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ29uZnJpbVwiPuehruWumjwvc3Bhbj4gJm5ic3A7Jm5ic3A7Jm5ic3A7PHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ2FuY2VsXCI+5Y+W5raIPC9zcGFuPiA8L2Rpdj48L2Rpdj4nO1xyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5hcHBlbmQoaHRtbCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBQb3BUaXBIaWRlKCkge1xyXG4gICAgJChcIi5wb3AtdXBcIikuaGlkZSgpO1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxufVxyXG4vL+makOiXj+a3u+WKoOeahOagt+W8j+W9k+W8ueWHuuahhuWSjOa3u+WKoOahhumHjeWPoOeahFxyXG5mdW5jdGlvbiBBZGRIaWRlKCkge1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydHMuTWFza1Nob3cgPSBNYXNrU2hvdztcclxuZXhwb3J0cy5NYXNrSGlkZSA9IE1hc2tIaWRlO1xyXG5leHBvcnRzLlBvcFRpcFNob3cgPSBQb3BUaXBTaG93O1xyXG5leHBvcnRzLlBvcFRpcEhpZGUgPSBQb3BUaXBIaWRlO1xyXG5leHBvcnRzLk9wZW5Db25mcmltUG9wID0gT3BlbkNvbmZyaW1Qb3A7XHJcbmV4cG9ydHMuQWRkSGlkZSA9IEFkZEhpZGU7XHJcblxyXG4vL+WkhOeQhuW8ueWHuuahhueahOmakOiXj1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuZGVsZWdhdGUoXCIucG9wLWNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICAgICAvL2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3BjbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmdUZWFjaFdvcmsvUG9wQ29tbW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDcgMTIgMTUgMTZcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHQkaWQ6IGZ1bmN0aW9uIChzKSB7XHJcblx0ICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzKTtcclxuXHR9LFxyXG4gICAgLy/liKTmlq3lsI/mlbAgXHJcblx0SXNGbG9hdDogZnVuY3Rpb24gKHMpIHtcclxuXHQgICAgaWYgKCEvXlsrXFwtXT9cXGQrKC5cXGQrKT8kLy50ZXN0KHMpKVxyXG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdCAgICBlbHNlXHJcblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHR9LFxyXG4gICAgLy/liKTmlq3mraPlsI/mlbBcclxuXHRJc1BsdXNGbG9hdDogZnVuY3Rpb24gKHMpIHsgXHJcblx0ICAgIGlmICghL15bK10/XFxkKyguXFxkKyk/JC8udGVzdChzKSlcclxuXHQgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHQgICAgZWxzZVxyXG5cdCAgICAgICAgcmV0dXJuIHRydWU7XHJcblx0fSxcclxuICAgIC8vIOWIpOaWreato+aVtOaVsFxyXG5cdElzUGx1c0ludDogZnVuY3Rpb24gKHMpIHtcclxuXHQgICAgaWYgKCEvXlxcZCokLy50ZXN0KHMpKVxyXG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdCAgICBlbHNlXHJcblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHR9LFxyXG4gICAgLy8g5Yik5pat5piv5ZCm5Li65a2X5q+N5ZKM5pWw5a2XXHJcblx0Q2hlY2tOYW1lOiBmdW5jdGlvbiAocykge1xyXG5cdCAgICBpZiAoIS9eW0EtWmEtejAtOS5fLV0rJC8udGVzdChzKSlcclxuXHQgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHQgICAgZWxzZVxyXG5cdCAgICAgICAgcmV0dXJuIHRydWU7XHJcblx0fSwgLy8g5qOA5rWLRW1haWzmoLzlvI9cclxuXHRJc0VtYWlsOiBmdW5jdGlvbiAocykge1xyXG5cdCAgICB2YXIgcGF0dGVybiA9IC9eKFthLXpBLVowLTkuXy1dKStAKFthLXpBLVowLTlfLV0pKyhcXC5bYS16QS1aMC05Xy1dKSsvO1xyXG5cdCAgICBmbGFnID0gcGF0dGVybi50ZXN0KHMpO1xyXG5cdCAgICBpZiAoIWZsYWcpIHtcclxuXHQgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHQgICAgfVxyXG5cdCAgICByZXR1cm4gKHRydWUpO1xyXG5cdH0sIC8vIOavlOi+g+S4pOS4quaVsOaYr+WQpuebuOWQjFxyXG5cdENvbXBWYWx1ZTogZnVuY3Rpb24gKHMxLCBzMikge1xyXG5cdCAgICBpZiAoczEgIT0gczIpIHtcclxuXHQgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHQgICAgfVxyXG5cdCAgICBlbHNlXHJcblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHR9LCAvLyDliKTmlq3lrZfnrKbmmK/lkKbkuLrnqbpcclxuXHRJc0VtcHR5OiBmdW5jdGlvbiAocykge1xyXG5cdCAgICBpZiAocyA9PSBcIlwiKSB7XHJcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0ICAgIH1cclxuXHQgICAgZWxzZVxyXG5cdCAgICAgICAgcmV0dXJuIHRydWU7XHJcblx0fSxcclxuICAgIC8vIOWPllJhZGlvTGlzdOeahOWAvFxyXG5cdEdldFJhZGlvTGlzdDogZnVuY3Rpb24gKHMpIHtcclxuXHQgICAgdmFyIHJhZExpc3RJdGVtcyA9IGRvY3VtZW50LmFsbChzKTtcclxuXHQgICAgdmFyIHJhZExpc3RJdGVzQ291bnQgPSByYWRMaXN0SXRlbXMubGVuZ3RoIC0gMTtcclxuXHQgICAgdmFyIHJhZExpc3RDaGVja2VkVmFsdWUgPSBcIlwiO1xyXG5cclxuXHQgICAgLy/pgY3mrbdJdGVt55qEVGV4dOWSjFZhbHVlXHJcblx0ICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHJhZExpc3RJdGVzQ291bnQ7IGkrKykge1xyXG5cdCAgICAgICAgaWYgKHJhZExpc3RJdGVtc1tpXS5jaGVja2VkKVxyXG5cdCAgICAgICAgICAgIHJhZExpc3RDaGVja2VkVmFsdWUgPSByYWRMaXN0SXRlbXNbaV0udmFsdWU7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHJldHVybiByYWRMaXN0Q2hlY2tlZFZhbHVlO1xyXG5cdH0sIC8vIOWIpOaWreWtl+espuaYr+WQpuS4uuepulxyXG5cdFNldGZvY3VzOiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcclxuXHR9XHJcbn1cclxuXHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvZGVwL2NoZWNrL3B1Yi5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDQgMTJcbiAqKi8iLCJcclxudmFyIHBvcCA9IHJlcXVpcmUoXCJPcmdUZWFjaFdvcmsvUG9wQ29tbW9uLmpzXCIpO1xyXG52YXIgcHViID0gcmVxdWlyZShcImNoZWNrL3B1Yi5qc1wiKTsvL+agoemqjFxyXG52YXIgbW9kdWxlID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdG9kbyDpgLvovpHlh73mlbBcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW5pdEJ0bnMoKTtcclxuXHJcbiAgICB9LFxyXG4gICAgLy/ojrflj5bmnLrmnoTorr7nva7nu5HlrppcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL09yZ1N5c3RlbVNldC9PcmdTZXQvT3JnU2V0R2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0LkRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI29yZ2lkXCIpLnZhbChkYXRhLnJlc3VsdC5EYXRhLk9yZ0lkKTsvL+i1i+WAvFxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjb3JnbmFtZVwiKS52YWwoZGF0YS5yZXN1bHQuRGF0YS5PcmdOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgIC8vICQoXCIjb3Jnc2V0ZGF5XCIpLnZhbChkYXRhLnJlc3VsdC5EYXRhLk9yZ1RpbWVTZXQpOy8v5pqC5pe26ZqQ6JeP77yM5LiN6K6+572u5Lia57up5aSp5pWwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdEJ0bnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3RvZG8g57uR5a6a5LqL5Lu2XHJcblxyXG4gICAgICAgIC8v6L+b6KGM6Lez6L2sXHJcbiAgICAgICAgJCgnI21haW4tY29udGVudC13cmFwcGVyJykuZGVsZWdhdGUoXCIjbGVhcm51cmxcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL09yZ0V4YW0vSW5kZXgvTGVhcm5UZXN0XCI7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufTtcclxuXHJcbi8v57uR5a6a5pWw5o2uXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgbW9kdWxlLmluaXQoKTtcclxuICBcclxufSk7XHJcblxyXG5cclxuXHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvanMvT3JnRXhhbS9TdWJqZWN0VGVzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDEyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==