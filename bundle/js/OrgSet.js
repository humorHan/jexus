webpackJsonp([4,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


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

/***/ 15:
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
	        $('#main-content-wrapper').delegate("#perset", "click", function () {
	            
	            window.location.href = "/OrgSystemSet/OrgSet/Index";
	           
	        });
	    }
	
	
	};
	///保存数据
	function OptSave() {
	    $("#btnSave").click(function () {
	        var orgid = $("#orgid").val();//赋值
	        var orgname = $("#orgname").val();//赋值
	        var orgsetday = 0;  //$("#orgsetday").val();//天数暂时隐藏，设置为0
	        //if (!pub.IsPlusInt(orgsetday)) {
	        //    pop.PopTipShow('必须为整数!');
	        //    return;
	
	        //}//产品去掉了业绩天数
	      
	        if (orgname.length < 1) {
	            
	            pop.PopTipShow('机构名不能为空');
	            return;
	        }
	       
	        //保存系统设置
	        var option = {};
	        option.OrgId = orgid;
	        option.OrgName = orgname;
	        option.OrgTimeSet = orgsetday;
	        $.post("/OrgSystemSet/OrgSet/OrgSetSave", { "data": JSON.stringify(option) }, function () {
	            
	            pop.PopTipShow('恭喜您，设置成功!');
	            setTimeout(pop.PopTipHide, 2000);
	        }, "json");
	
	
	    });
	
	
	
	}
	//绑定数据
	$(function () {
	    module.init();
	    OptSave();
	  
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
	


/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnVGVhY2hXb3JrL1BvcENvbW1vbi5qcz9lOTNlKiIsIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnU3lzdGVtU2V0L09yZ1NldC5qcyIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL2NoZWNrL3B1Yi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxS0FBb0s7O0FBRXBLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMk1BQTBNLE1BQU0sTUFBTTtBQUN0TjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMLEVBQUM7Ozs7Ozs7Ozs7QUN4REQ7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsY0FBYTtBQUNiOztBQUVBOztBQUVBLDZEQUE0RDtBQUM1RDtBQUNBLHdFQUF1RTtBQUN2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTOztBQUVULE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQztBQUN0QywyQ0FBMEM7QUFDMUMsMkJBQTBCLDBCQUEwQjtBQUNwRDtBQUNBO0FBQ0E7O0FBRUEsWUFBVzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFtRCxpQ0FBaUM7O0FBRXBGO0FBQ0E7QUFDQSxVQUFTOzs7QUFHVCxNQUFLOzs7O0FBSUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDOzs7Ozs7Ozs7OztBQzFGRDtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsNkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ik9yZ1NldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8v6YGu572pXHJcbmZ1bmN0aW9uIE1hc2tTaG93KCkge1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5zaG93KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1hc2tIaWRlKCkge1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbn1cclxuLy/kvKDpgJLmmL7npLrnmoTmtojmga9cclxuZnVuY3Rpb24gUG9wVGlwU2hvdyhvYmopIHtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIHZhciB0aXBodG1sID0gJzxkaXYgY2xhc3M9XCJwb3AtdXAgZm9udDE0XCIgaWQ9XCJva3RpcFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj48cCBjbGFzcz1cImxpbmUxMDBcIiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiPicgKyBvYmogKyAnPC9wPjwvZGl2PjwvZGl2Pic7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5hcHBlbmQodGlwaHRtbCk7XHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5hcHBlbmQodGlwaHRtbCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxuICAgICQoXCIucG9wLXVwXCIpLnNob3coKTtcclxufVxyXG4vL+W8ueWHuuehruiupOahhlxyXG52YXIgT3BlbkNvbmZyaW1Qb3AgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj4nICsgb2JqICsgJzwvZGl2PjxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJoYW5kbGVcIj4gPHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ29uZnJpbVwiPuehruWumjwvc3Bhbj4gJm5ic3A7Jm5ic3A7Jm5ic3A7PHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ2FuY2VsXCI+5Y+W5raIPC9zcGFuPiA8L2Rpdj48L2Rpdj4nO1xyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5hcHBlbmQoaHRtbCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBQb3BUaXBIaWRlKCkge1xyXG4gICAgJChcIi5wb3AtdXBcIikuaGlkZSgpO1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxufVxyXG4vL+makOiXj+a3u+WKoOeahOagt+W8j+W9k+W8ueWHuuahhuWSjOa3u+WKoOahhumHjeWPoOeahFxyXG5mdW5jdGlvbiBBZGRIaWRlKCkge1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydHMuTWFza1Nob3cgPSBNYXNrU2hvdztcclxuZXhwb3J0cy5NYXNrSGlkZSA9IE1hc2tIaWRlO1xyXG5leHBvcnRzLlBvcFRpcFNob3cgPSBQb3BUaXBTaG93O1xyXG5leHBvcnRzLlBvcFRpcEhpZGUgPSBQb3BUaXBIaWRlO1xyXG5leHBvcnRzLk9wZW5Db25mcmltUG9wID0gT3BlbkNvbmZyaW1Qb3A7XHJcbmV4cG9ydHMuQWRkSGlkZSA9IEFkZEhpZGU7XHJcblxyXG4vL+WkhOeQhuW8ueWHuuahhueahOmakOiXj1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuZGVsZWdhdGUoXCIucG9wLWNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICAgICAvL2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3BjbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmdUZWFjaFdvcmsvUG9wQ29tbW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDcgMTIgMTUgMTZcbiAqKi8iLCJcclxudmFyIHBvcCA9IHJlcXVpcmUoXCJPcmdUZWFjaFdvcmsvUG9wQ29tbW9uLmpzXCIpO1xyXG52YXIgcHViID0gcmVxdWlyZShcImNoZWNrL3B1Yi5qc1wiKTsvL+agoemqjFxyXG52YXIgbW9kdWxlID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdG9kbyDpgLvovpHlh73mlbBcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW5pdEJ0bnMoKTtcclxuXHJcbiAgICB9LFxyXG4gICAgLy/ojrflj5bmnLrmnoTorr7nva7nu5HlrppcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL09yZ1N5c3RlbVNldC9PcmdTZXQvT3JnU2V0R2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0LkRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI29yZ2lkXCIpLnZhbChkYXRhLnJlc3VsdC5EYXRhLk9yZ0lkKTsvL+i1i+WAvFxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjb3JnbmFtZVwiKS52YWwoZGF0YS5yZXN1bHQuRGF0YS5PcmdOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgIC8vICQoXCIjb3Jnc2V0ZGF5XCIpLnZhbChkYXRhLnJlc3VsdC5EYXRhLk9yZ1RpbWVTZXQpOy8v5pqC5pe26ZqQ6JeP77yM5LiN6K6+572u5Lia57up5aSp5pWwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdEJ0bnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3RvZG8g57uR5a6a5LqL5Lu2XHJcblxyXG4gICAgICAgIC8v6L+b6KGM6Lez6L2sXHJcbiAgICAgICAgJCgnI21haW4tY29udGVudC13cmFwcGVyJykuZGVsZWdhdGUoXCIjcGVyc2V0XCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9PcmdTeXN0ZW1TZXQvT3JnU2V0L0luZGV4XCI7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufTtcclxuLy8v5L+d5a2Y5pWw5o2uXHJcbmZ1bmN0aW9uIE9wdFNhdmUoKSB7XHJcbiAgICAkKFwiI2J0blNhdmVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvcmdpZCA9ICQoXCIjb3JnaWRcIikudmFsKCk7Ly/otYvlgLxcclxuICAgICAgICB2YXIgb3JnbmFtZSA9ICQoXCIjb3JnbmFtZVwiKS52YWwoKTsvL+i1i+WAvFxyXG4gICAgICAgIHZhciBvcmdzZXRkYXkgPSAwOyAgLy8kKFwiI29yZ3NldGRheVwiKS52YWwoKTsvL+WkqeaVsOaaguaXtumakOiXj++8jOiuvue9ruS4ujBcclxuICAgICAgICAvL2lmICghcHViLklzUGx1c0ludChvcmdzZXRkYXkpKSB7XHJcbiAgICAgICAgLy8gICAgcG9wLlBvcFRpcFNob3coJ+W/hemhu+S4uuaVtOaVsCEnKTtcclxuICAgICAgICAvLyAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vfS8v5Lqn5ZOB5Y675o6J5LqG5Lia57up5aSp5pWwXHJcbiAgICAgIFxyXG4gICAgICAgIGlmIChvcmduYW1lLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBvcC5Qb3BUaXBTaG93KCfmnLrmnoTlkI3kuI3og73kuLrnqbonKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC8v5L+d5a2Y57O757uf6K6+572uXHJcbiAgICAgICAgdmFyIG9wdGlvbiA9IHt9O1xyXG4gICAgICAgIG9wdGlvbi5PcmdJZCA9IG9yZ2lkO1xyXG4gICAgICAgIG9wdGlvbi5PcmdOYW1lID0gb3JnbmFtZTtcclxuICAgICAgICBvcHRpb24uT3JnVGltZVNldCA9IG9yZ3NldGRheTtcclxuICAgICAgICAkLnBvc3QoXCIvT3JnU3lzdGVtU2V0L09yZ1NldC9PcmdTZXRTYXZlXCIsIHsgXCJkYXRhXCI6IEpTT04uc3RyaW5naWZ5KG9wdGlvbikgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcG9wLlBvcFRpcFNob3coJ+aBreWWnOaCqO+8jOiuvue9ruaIkOWKnyEnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChwb3AuUG9wVGlwSGlkZSwgMjAwMCk7XHJcbiAgICAgICAgfSwgXCJqc29uXCIpO1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxufVxyXG4vL+e7keWumuaVsOaNrlxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIG1vZHVsZS5pbml0KCk7XHJcbiAgICBPcHRTYXZlKCk7XHJcbiAgXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2pzL09yZ1N5c3RlbVNldC9PcmdTZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSA0XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0JGlkOiBmdW5jdGlvbiAocykge1xyXG5cdCAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocyk7XHJcblx0fSxcclxuICAgIC8v5Yik5pat5bCP5pWwIFxyXG5cdElzRmxvYXQ6IGZ1bmN0aW9uIChzKSB7XHJcblx0ICAgIGlmICghL15bK1xcLV0/XFxkKyguXFxkKyk/JC8udGVzdChzKSlcclxuXHQgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHQgICAgZWxzZVxyXG5cdCAgICAgICAgcmV0dXJuIHRydWU7XHJcblx0fSxcclxuICAgIC8v5Yik5pat5q2j5bCP5pWwXHJcblx0SXNQbHVzRmxvYXQ6IGZ1bmN0aW9uIChzKSB7IFxyXG5cdCAgICBpZiAoIS9eWytdP1xcZCsoLlxcZCspPyQvLnRlc3QocykpXHJcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0ICAgIGVsc2VcclxuXHQgICAgICAgIHJldHVybiB0cnVlO1xyXG5cdH0sXHJcbiAgICAvLyDliKTmlq3mraPmlbTmlbBcclxuXHRJc1BsdXNJbnQ6IGZ1bmN0aW9uIChzKSB7XHJcblx0ICAgIGlmICghL15cXGQqJC8udGVzdChzKSlcclxuXHQgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHQgICAgZWxzZVxyXG5cdCAgICAgICAgcmV0dXJuIHRydWU7XHJcblx0fSxcclxuICAgIC8vIOWIpOaWreaYr+WQpuS4uuWtl+avjeWSjOaVsOWtl1xyXG5cdENoZWNrTmFtZTogZnVuY3Rpb24gKHMpIHtcclxuXHQgICAgaWYgKCEvXltBLVphLXowLTkuXy1dKyQvLnRlc3QocykpXHJcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0ICAgIGVsc2VcclxuXHQgICAgICAgIHJldHVybiB0cnVlO1xyXG5cdH0sIC8vIOajgOa1i0VtYWls5qC85byPXHJcblx0SXNFbWFpbDogZnVuY3Rpb24gKHMpIHtcclxuXHQgICAgdmFyIHBhdHRlcm4gPSAvXihbYS16QS1aMC05Ll8tXSkrQChbYS16QS1aMC05Xy1dKSsoXFwuW2EtekEtWjAtOV8tXSkrLztcclxuXHQgICAgZmxhZyA9IHBhdHRlcm4udGVzdChzKTtcclxuXHQgICAgaWYgKCFmbGFnKSB7XHJcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0ICAgIH1cclxuXHQgICAgcmV0dXJuICh0cnVlKTtcclxuXHR9LCAvLyDmr5TovoPkuKTkuKrmlbDmmK/lkKbnm7jlkIxcclxuXHRDb21wVmFsdWU6IGZ1bmN0aW9uIChzMSwgczIpIHtcclxuXHQgICAgaWYgKHMxICE9IHMyKSB7XHJcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0ICAgIH1cclxuXHQgICAgZWxzZVxyXG5cdCAgICAgICAgcmV0dXJuIHRydWU7XHJcblx0fSwgLy8g5Yik5pat5a2X56ym5piv5ZCm5Li656m6XHJcblx0SXNFbXB0eTogZnVuY3Rpb24gKHMpIHtcclxuXHQgICAgaWYgKHMgPT0gXCJcIikge1xyXG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdCAgICB9XHJcblx0ICAgIGVsc2VcclxuXHQgICAgICAgIHJldHVybiB0cnVlO1xyXG5cdH0sXHJcbiAgICAvLyDlj5ZSYWRpb0xpc3TnmoTlgLxcclxuXHRHZXRSYWRpb0xpc3Q6IGZ1bmN0aW9uIChzKSB7XHJcblx0ICAgIHZhciByYWRMaXN0SXRlbXMgPSBkb2N1bWVudC5hbGwocyk7XHJcblx0ICAgIHZhciByYWRMaXN0SXRlc0NvdW50ID0gcmFkTGlzdEl0ZW1zLmxlbmd0aCAtIDE7XHJcblx0ICAgIHZhciByYWRMaXN0Q2hlY2tlZFZhbHVlID0gXCJcIjtcclxuXHJcblx0ICAgIC8v6YGN5q23SXRlbeeahFRleHTlkoxWYWx1ZVxyXG5cdCAgICBmb3IgKHZhciBpID0gMTsgaSA8PSByYWRMaXN0SXRlc0NvdW50OyBpKyspIHtcclxuXHQgICAgICAgIGlmIChyYWRMaXN0SXRlbXNbaV0uY2hlY2tlZClcclxuXHQgICAgICAgICAgICByYWRMaXN0Q2hlY2tlZFZhbHVlID0gcmFkTGlzdEl0ZW1zW2ldLnZhbHVlO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICByZXR1cm4gcmFkTGlzdENoZWNrZWRWYWx1ZTtcclxuXHR9LCAvLyDliKTmlq3lrZfnrKbmmK/lkKbkuLrnqbpcclxuXHRTZXRmb2N1czogZnVuY3Rpb24gKCkge1xyXG5cdCAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XHJcblx0fVxyXG59XHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC9jaGVjay9wdWIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSA0IDEyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==