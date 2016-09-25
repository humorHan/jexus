webpackJsonp([34,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(81);


/***/ },

/***/ 24:
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
	    var tiphtml = '<div class="pop-up font14 hidden" id="oktip"><span class="pop-close cursor"></span><div class="pop-content"><p class="line100" style="text-align:center;">' + obj + '</p></div></div>';
	
	    $("#main-content-wrapper").append(tiphtml);
	    $("#main-content-org-wrapper").append(tiphtml);
	    $(".pop-mask").show();
	    $(".pop-up").show();
	}
	//弹出确认框
	var OpenConfrimPop = function (obj) {
	    var html = '<div class="pop-up font14"><span class="pop-close cursor"></span><div class="pop-content">' + obj + '</div><br /><br /><div class="handle"> <span class="ok" id="Confrim">确定</span> &nbsp;&nbsp;&nbsp;<span class="ok" id="Cancel">取消</span> </div></div>';
	    $("#main-content-wrapper").append(html);
	    $(".pop-mask").show();
	    $(".pop-up").show();
	};
	//弹出确认框,没有取消按钮
	var OpenConfrimPopNoCancel = function (obj) {
	    var html = '<div class="pop-up font14"><span class="pop-close cursor"></span><div class="pop-content">' + obj + '</div><br /><br /><div class="handle"> <span class="ok" id="Confrim">确定</span> </div></div>';
	    $("#main-content-wrapper").append(html);
	    $(".pop-mask").show();
	    $(".pop-up").show();
	};
	///弹出多长时间后消失
	var OpenTimeHide = function (obj, time) {
	    //var html = '<div class="popup"> <h5 class="center font16 popuphead">消息提示<i class="popclose cursor"></i></h5><div class="popupbox"><div class="handle font14 auto">' + obj + '</div></div></div>';
	    var html = '  <div class="popup "><h5 class="center font16 popuphead"> 消息提示<i class="popclose cursor"></i></h5><div class="popupbox"><div style="text-align:center;"><div class="success auto" style="display:inline-block;margin-top:20px;"></div></div><div class="handle successLetter"> <span class="mt20">'+obj+'</span></div></div></div>';
	    $("#main-content-wrapper").append(html);
	    $(".popup").show();
	  
	    setTimeout(function () {
	        $(".popup").hide();
	        document.location.reload();
	    }, time);
	
	};
	function PopTipHide() {
	    $(".pop-up").hide();
	    $(".pop-mask").hide();
	    $(".add").hide();
	    document.location.reload();
	}
	
	exports.MaskShow = MaskShow;
	exports.MaskHide = MaskHide;
	exports.PopTipShow = PopTipShow;
	exports.PopTipHide = PopTipHide;
	exports.OpenConfrimPop = OpenConfrimPop;
	exports.OpenTimeHide = OpenTimeHide;
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
	    $("#main-content-org-wrapper").delegate(".pop-close", "click", function () {
	        $(".pop-mask").hide();
	        $(".pop-up").hide();
	        //document.location.reload();
	    });
	
	    $("#main-content-org-wrapper").delegate(".popclose", "click", function () {
	        $(".pop-mask").hide();
	        $(".add").hide();
	    });
	
	});
	


/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	var userSex = "";
	var userBirthday;
	var u = __webpack_require__(24);
	var module = function () {
	    this.init = function () {
	        //todo 逻辑函数 
	        if (window.location.href.toLowerCase().indexOf("editbaseinfo") > 0)
	        {
	            OnIDCard();
	            OnBind();            
	            BindSex();
	            BindSave();
	        }
	        else
	        {
	            OnEdit();
	        }      
	    };
	    var OnIDCard = function () {
	        var txts = document.getElementsByName("idcard");
	        OnID(txts,function(i){
	            var _o = this;
	            this.onkeyup = function ()
	            {
	                if (i == 0)
	                {
	                    if (_o.value.length >= 5) {
	                        if (txts[i + 1]) {
	                            txts[i + 1].focus();
	                            //txts[i].setAttribute("readOnly", true);
	                        }
	                    }
	                    else {
	                        _o.value = _o.value.slice(0, 5);
	                    }
	                }
	                if(i==1)
	                {
	                    if (_o.value.length >= 8) {
	                        if (txts[i + 1]) {
	                            txts[i + 1].focus();
	                            //txts[i].setAttribute("readOnly", true);
	                        }
	                    }
	                    else {
	                        _o.value = _o.value.slice(0, 8);
	                    }
	                }
	                if (i == 2) {
	                    if (_o.value.length >=4) {
	                        //txts[i].setAttribute("readOnly", true);
	                        txts[i].blur();
	                    }
	                    else {
	                        _o.value = _o.value.slice(0, 4);
	                    }
	                }
	               
	            }
	        });
	       
	    };
	    var OnID = function (arr, fn) {
	        for(var i=0,len=arr.length;i<len;i++)
	        {
	            fn.call(arr[i], i, arr);
	        }
	    };
	    var OnBind = function () {
	        var Sex = $("#usersex").val();
	        var Age = $("#userage").val();
	        if (Sex == "女")
	        {
	            $("#rbFemale").attr("checked", true);
	            userSex = "1";
	        }
	        if (Sex == "男")
	        {
	            userSex = "0";
	            $("#rbMale").attr("checked", true);
	        }
	       
	        //$('#datetimepicker').datetimepicker({
	        //    format: "m月d日", timepicker: false, todayButton: true, onSelectDate: function (selDate) {
	        //        userBirthday = selDate.getFullYear() + "-" + (selDate.getMonth() + 1) + "-" + selDate.getDate();
	        //    }
	        //});
	        //if (Age != undefined && Age != "") {
	        //    userBirthday = Age;
	        //    Age = Age.replace(/-/g, "/");
	        //    var date1 = new Date(Age);
	        //    $('#datetimepicker').val((date1.getMonth() + 1) + "月" + date1.getDate() + "日");
	        //} else {
	        //    var date2 = new Date();
	        //    userBirthday = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate();
	        //    $('#datetimepicker').val((date2.getMonth() + 1) + "月" + date2.getDate() + "日");
	        //}
	       
	    };
	    var BindSex = function () {
	        $('#rbMale').click(function () {
	            userSex = "0";
	        });
	
	        $('#rbFemale').click(function () {
	            userSex = "1";
	        });
	    };
	    var BindSave = function () {
	        $("#btnSave").click(function () {
	            if (!CheckMail($("#mail").val())) {
	                // u.PopTipShow("邮箱格式不正确");
	                alert("邮箱格式不正确");
	                return;
	            }
	            if (!CheckIDCard($("#idcard1").val() + $("#idcard2").val() + $("#idcard3").val())) {
	                // u.PopTipShow("身份证格式不正确");
	                alert("身份证格式不正确");
	                return;
	            }
	            $.ajax({
	                url: "/OrgUserCenter/User/UpdateUserBaseInfo",
	                data: {
	                    sex: userSex,
	                    birthday: userBirthday,
	                    mail: $("#mail").val(),
	                    idcard: $("#idcard1").val() + $("#idcard2").val() + $("#idcard3").val()
	                },
	                dataType: "json",
	                type: "post",
	                success: function (e) {
	                    location.href = "/OrgUserCenter/User/BaseInfo";
	                }
	            });
	        });
	    };
	    var OnEdit = function () {
	        $("#editPointer").click(function () {
	            location.href = "/OrgUserCenter/User/EditBaseInfo";
	        });
	    };
	    var CheckMail = function (obj) {
	        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	        if (!myreg.test(obj))
	        {
	            return false;
	        }
	        return true;
	    };
	    var CheckIDCard = function (obj) {
	        var reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
	       
	        if(!reg.test(obj))
	        {
	            return false;
	        }
	        return true;
	    };
	   
	};
	
	//绑定数据
	$(function () {
	    new module().init();
	    // module.init(); 
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9PcmcvZGVwL3BvcHVwL3BvcHVwdGlwLmpzP2YwMzIqKioqKioiLCJ3ZWJwYWNrOi8vLy4vT3JnL2pzL09yZ1VzZXJDZW50ZXIvcGVyc29uQ2VudGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0S0FBMks7O0FBRTNLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMk1BQTBNLE1BQU0sTUFBTTtBQUN0TjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0tBQXVLLHdEQUF3RCxnQkFBZ0I7QUFDL087QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMLEVBQUM7Ozs7Ozs7OztBQ2pGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBLG9DQUFtQyxNQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSw2R0FBNEcsSUFBSTtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEwQixFQUFFLE1BQU0sR0FBRyxTQUFTLEVBQUUsTUFBTSxHQUFHOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0I7QUFDQSxFQUFDLEUiLCJmaWxlIjoicGVyc29uQ2VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/pga7nvalcclxuZnVuY3Rpb24gTWFza1Nob3coKSB7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWFza0hpZGUoKSB7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxufVxyXG4vL+S8oOmAkuaYvuekuueahOa2iOaBr1xyXG5mdW5jdGlvbiBQb3BUaXBTaG93KG9iaikge1xyXG4gICAgdmFyIHRpcGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcC11cCBmb250MTQgaGlkZGVuXCIgaWQ9XCJva3RpcFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj48cCBjbGFzcz1cImxpbmUxMDBcIiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiPicgKyBvYmogKyAnPC9wPjwvZGl2PjwvZGl2Pic7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5hcHBlbmQodGlwaHRtbCk7XHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5hcHBlbmQodGlwaHRtbCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxuICAgICQoXCIucG9wLXVwXCIpLnNob3coKTtcclxufVxyXG4vL+W8ueWHuuehruiupOahhlxyXG52YXIgT3BlbkNvbmZyaW1Qb3AgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj4nICsgb2JqICsgJzwvZGl2PjxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJoYW5kbGVcIj4gPHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ29uZnJpbVwiPuehruWumjwvc3Bhbj4gJm5ic3A7Jm5ic3A7Jm5ic3A7PHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ2FuY2VsXCI+5Y+W5raIPC9zcGFuPiA8L2Rpdj48L2Rpdj4nO1xyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5hcHBlbmQoaHRtbCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxuICAgICQoXCIucG9wLXVwXCIpLnNob3coKTtcclxufTtcclxuLy/lvLnlh7rnoa7orqTmoYYs5rKh5pyJ5Y+W5raI5oyJ6ZKuXHJcbnZhciBPcGVuQ29uZnJpbVBvcE5vQ2FuY2VsID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcC11cCBmb250MTRcIj48c3BhbiBjbGFzcz1cInBvcC1jbG9zZSBjdXJzb3JcIj48L3NwYW4+PGRpdiBjbGFzcz1cInBvcC1jb250ZW50XCI+JyArIG9iaiArICc8L2Rpdj48YnIgLz48YnIgLz48ZGl2IGNsYXNzPVwiaGFuZGxlXCI+IDxzcGFuIGNsYXNzPVwib2tcIiBpZD1cIkNvbmZyaW1cIj7noa7lrpo8L3NwYW4+IDwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxuICAgICQoXCIucG9wLW1hc2tcIikuc2hvdygpO1xyXG4gICAgJChcIi5wb3AtdXBcIikuc2hvdygpO1xyXG59O1xyXG4vLy/lvLnlh7rlpJrplb/ml7bpl7TlkI7mtojlpLFcclxudmFyIE9wZW5UaW1lSGlkZSA9IGZ1bmN0aW9uIChvYmosIHRpbWUpIHtcclxuICAgIC8vdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInBvcHVwXCI+IDxoNSBjbGFzcz1cImNlbnRlciBmb250MTYgcG9wdXBoZWFkXCI+5raI5oGv5o+Q56S6PGkgY2xhc3M9XCJwb3BjbG9zZSBjdXJzb3JcIj48L2k+PC9oNT48ZGl2IGNsYXNzPVwicG9wdXBib3hcIj48ZGl2IGNsYXNzPVwiaGFuZGxlIGZvbnQxNCBhdXRvXCI+JyArIG9iaiArICc8L2Rpdj48L2Rpdj48L2Rpdj4nO1xyXG4gICAgdmFyIGh0bWwgPSAnICA8ZGl2IGNsYXNzPVwicG9wdXAgXCI+PGg1IGNsYXNzPVwiY2VudGVyIGZvbnQxNiBwb3B1cGhlYWRcIj4g5raI5oGv5o+Q56S6PGkgY2xhc3M9XCJwb3BjbG9zZSBjdXJzb3JcIj48L2k+PC9oNT48ZGl2IGNsYXNzPVwicG9wdXBib3hcIj48ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+PGRpdiBjbGFzcz1cInN1Y2Nlc3MgYXV0b1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXRvcDoyMHB4O1wiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJoYW5kbGUgc3VjY2Vzc0xldHRlclwiPiA8c3BhbiBjbGFzcz1cIm10MjBcIj4nK29iaisnPC9zcGFuPjwvZGl2PjwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmFwcGVuZChodG1sKTtcclxuICAgICQoXCIucG9wdXBcIikuc2hvdygpO1xyXG4gIFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3B1cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9LCB0aW1lKTtcclxuXHJcbn07XHJcbmZ1bmN0aW9uIFBvcFRpcEhpZGUoKSB7XHJcbiAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59XHJcblxyXG5leHBvcnRzLk1hc2tTaG93ID0gTWFza1Nob3c7XHJcbmV4cG9ydHMuTWFza0hpZGUgPSBNYXNrSGlkZTtcclxuZXhwb3J0cy5Qb3BUaXBTaG93ID0gUG9wVGlwU2hvdztcclxuZXhwb3J0cy5Qb3BUaXBIaWRlID0gUG9wVGlwSGlkZTtcclxuZXhwb3J0cy5PcGVuQ29uZnJpbVBvcCA9IE9wZW5Db25mcmltUG9wO1xyXG5leHBvcnRzLk9wZW5UaW1lSGlkZSA9IE9wZW5UaW1lSGlkZTtcclxuLy/lpITnkIblvLnlh7rmoYbnmoTpmpDol49cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI21haW4tY29udGVudC13cmFwcGVyXCIpLmRlbGVnYXRlKFwiLnBvcC1jbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnBvcC11cFwiKS5oaWRlKCk7XHJcbiAgICAgICAgLy9kb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuZGVsZWdhdGUoXCIucG9wY2xvc2VcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3AtY2xvc2VcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5wb3AtdXBcIikuaGlkZSgpO1xyXG4gICAgICAgIC8vZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3BjbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9kZXAvcG9wdXAvcG9wdXB0aXAuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSA4IDE0IDIxIDI2IDMxIDMyIDMzIDM0IDM3IDM4XG4gKiovIiwidmFyIHVzZXJTZXggPSBcIlwiO1xyXG52YXIgdXNlckJpcnRoZGF5O1xyXG52YXIgdSA9IHJlcXVpcmUoXCJwb3B1cC9wb3B1cHRpcC5qc1wiKTtcclxudmFyIG1vZHVsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3RvZG8g6YC76L6R5Ye95pWwIFxyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJlZGl0YmFzZWluZm9cIikgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgT25JRENhcmQoKTtcclxuICAgICAgICAgICAgT25CaW5kKCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEJpbmRTZXgoKTtcclxuICAgICAgICAgICAgQmluZFNhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgT25FZGl0KCk7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgfTtcclxuICAgIHZhciBPbklEQ2FyZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdHh0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiaWRjYXJkXCIpO1xyXG4gICAgICAgIE9uSUQodHh0cyxmdW5jdGlvbihpKXtcclxuICAgICAgICAgICAgdmFyIF9vID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5vbmtleXVwID0gZnVuY3Rpb24gKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX28udmFsdWUubGVuZ3RoID49IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR4dHNbaSArIDFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHRzW2kgKyAxXS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90eHRzW2ldLnNldEF0dHJpYnV0ZShcInJlYWRPbmx5XCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfby52YWx1ZSA9IF9vLnZhbHVlLnNsaWNlKDAsIDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGk9PTEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9vLnZhbHVlLmxlbmd0aCA+PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eHRzW2kgKyAxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0c1tpICsgMV0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdHh0c1tpXS5zZXRBdHRyaWJ1dGUoXCJyZWFkT25seVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX28udmFsdWUgPSBfby52YWx1ZS5zbGljZSgwLCA4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9vLnZhbHVlLmxlbmd0aCA+PTQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90eHRzW2ldLnNldEF0dHJpYnV0ZShcInJlYWRPbmx5XCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHRzW2ldLmJsdXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9vLnZhbHVlID0gX28udmFsdWUuc2xpY2UoMCwgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICB9O1xyXG4gICAgdmFyIE9uSUQgPSBmdW5jdGlvbiAoYXJyLCBmbikge1xyXG4gICAgICAgIGZvcih2YXIgaT0wLGxlbj1hcnIubGVuZ3RoO2k8bGVuO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZuLmNhbGwoYXJyW2ldLCBpLCBhcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgT25CaW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBTZXggPSAkKFwiI3VzZXJzZXhcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIEFnZSA9ICQoXCIjdXNlcmFnZVwiKS52YWwoKTtcclxuICAgICAgICBpZiAoU2V4ID09IFwi5aWzXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkKFwiI3JiRmVtYWxlXCIpLmF0dHIoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB1c2VyU2V4ID0gXCIxXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChTZXggPT0gXCLnlLdcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJTZXggPSBcIjBcIjtcclxuICAgICAgICAgICAgJChcIiNyYk1hbGVcIikuYXR0cihcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLy8kKCcjZGF0ZXRpbWVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XHJcbiAgICAgICAgLy8gICAgZm9ybWF0OiBcIm3mnIhk5pelXCIsIHRpbWVwaWNrZXI6IGZhbHNlLCB0b2RheUJ1dHRvbjogdHJ1ZSwgb25TZWxlY3REYXRlOiBmdW5jdGlvbiAoc2VsRGF0ZSkge1xyXG4gICAgICAgIC8vICAgICAgICB1c2VyQmlydGhkYXkgPSBzZWxEYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIChzZWxEYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICsgc2VsRGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgLy8gICAgfVxyXG4gICAgICAgIC8vfSk7XHJcbiAgICAgICAgLy9pZiAoQWdlICE9IHVuZGVmaW5lZCAmJiBBZ2UgIT0gXCJcIikge1xyXG4gICAgICAgIC8vICAgIHVzZXJCaXJ0aGRheSA9IEFnZTtcclxuICAgICAgICAvLyAgICBBZ2UgPSBBZ2UucmVwbGFjZSgvLS9nLCBcIi9cIik7XHJcbiAgICAgICAgLy8gICAgdmFyIGRhdGUxID0gbmV3IERhdGUoQWdlKTtcclxuICAgICAgICAvLyAgICAkKCcjZGF0ZXRpbWVwaWNrZXInKS52YWwoKGRhdGUxLmdldE1vbnRoKCkgKyAxKSArIFwi5pyIXCIgKyBkYXRlMS5nZXREYXRlKCkgKyBcIuaXpVwiKTtcclxuICAgICAgICAvL30gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgdmFyIGRhdGUyID0gbmV3IERhdGUoKTtcclxuICAgICAgICAvLyAgICB1c2VyQmlydGhkYXkgPSBkYXRlMi5nZXRGdWxsWWVhcigpICsgXCItXCIgKyAoZGF0ZTIuZ2V0TW9udGgoKSArIDEpICsgXCItXCIgKyBkYXRlMi5nZXREYXRlKCk7XHJcbiAgICAgICAgLy8gICAgJCgnI2RhdGV0aW1lcGlja2VyJykudmFsKChkYXRlMi5nZXRNb250aCgpICsgMSkgKyBcIuaciFwiICsgZGF0ZTIuZ2V0RGF0ZSgpICsgXCLml6VcIik7XHJcbiAgICAgICAgLy99XHJcbiAgICAgICBcclxuICAgIH07XHJcbiAgICB2YXIgQmluZFNleCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcjcmJNYWxlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB1c2VyU2V4ID0gXCIwXCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNyYkZlbWFsZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdXNlclNleCA9IFwiMVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHZhciBCaW5kU2F2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiI2J0blNhdmVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIUNoZWNrTWFpbCgkKFwiI21haWxcIikudmFsKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB1LlBvcFRpcFNob3coXCLpgq7nrrHmoLzlvI/kuI3mraPnoa5cIik7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIumCrueuseagvOW8j+S4jeato+ehrlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIUNoZWNrSURDYXJkKCQoXCIjaWRjYXJkMVwiKS52YWwoKSArICQoXCIjaWRjYXJkMlwiKS52YWwoKSArICQoXCIjaWRjYXJkM1wiKS52YWwoKSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHUuUG9wVGlwU2hvdyhcIui6q+S7veivgeagvOW8j+S4jeato+ehrlwiKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi6Lqr5Lu96K+B5qC85byP5LiN5q2j56GuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL09yZ1VzZXJDZW50ZXIvVXNlci9VcGRhdGVVc2VyQmFzZUluZm9cIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXg6IHVzZXJTZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYmlydGhkYXk6IHVzZXJCaXJ0aGRheSxcclxuICAgICAgICAgICAgICAgICAgICBtYWlsOiAkKFwiI21haWxcIikudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgaWRjYXJkOiAkKFwiI2lkY2FyZDFcIikudmFsKCkgKyAkKFwiI2lkY2FyZDJcIikudmFsKCkgKyAkKFwiI2lkY2FyZDNcIikudmFsKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL09yZ1VzZXJDZW50ZXIvVXNlci9CYXNlSW5mb1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgT25FZGl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjZWRpdFBvaW50ZXJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvT3JnVXNlckNlbnRlci9Vc2VyL0VkaXRCYXNlSW5mb1wiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHZhciBDaGVja01haWwgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgdmFyIG15cmVnID0gL14oW2EtekEtWjAtOV0rW198XFxffFxcLl0/KSpbYS16QS1aMC05XStAKFthLXpBLVowLTldK1tffFxcX3xcXC5dPykqW2EtekEtWjAtOV0rXFwuW2EtekEtWl17MiwzfSQvO1xyXG4gICAgICAgIGlmICghbXlyZWcudGVzdChvYmopKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICB2YXIgQ2hlY2tJRENhcmQgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgdmFyIHJlZyA9IC9eWzEtOV17MX1bMC05XXsxNH0kfF5bMS05XXsxfVswLTldezE2fShbMC05XXxbeFhdKSQvO1xyXG4gICAgICAgXHJcbiAgICAgICAgaWYoIXJlZy50ZXN0KG9iaikpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgXHJcbn07XHJcblxyXG4vL+e7keWumuaVsOaNrlxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIG5ldyBtb2R1bGUoKS5pbml0KCk7XHJcbiAgICAvLyBtb2R1bGUuaW5pdCgpOyBcclxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmdVc2VyQ2VudGVyL3BlcnNvbkNlbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDM0XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==