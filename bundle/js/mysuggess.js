webpackJsonp([30,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(66);


/***/ },

/***/ 66:
/***/ function(module, exports) {

	var userMsg = '';
	var module = function () {
	    this.init = function () {
	        //todo 逻辑函数  
	        OnSave();
	        OnListener();
	    };
	    var OnListener = function () {
	        $('#content').bind('input propertychange', function () {
	            if ($(this).val().length <= 250)
	            {
	                $('.red').html($(this).val().length + '');
	            }
	            else
	            {
	                alert("超过限定的文字");
	                $(this).val().substring(0, 250);
	            }
	            
	        });
	    };
	    var OnSave = function () {
	        $("#btnSave").click(function () {
	            userMsg = $.trim($("#content").val());
	           
	            if(userMsg=='')
	            {
	                alert("不能输入为空");
	                return;
	            }
	            if (userMsg.length > 250)
	            {
	                alert("超过限定的文字");
	                return;
	
	            }
	            $.ajax({
	                url: "/OrgUserCenter/User/AddFeedback",
	                data: {
	                    content:userMsg
	                    
	                },
	                dataType: "json",
	                type: "post",
	                success: function (e) {
	                    $(".minoutre").hide();
	                    $(".sugOk").show();
	                }
	            });
	        });
	    };
	
	};
	
	//绑定数据
	$(function () {
	    new module().init();
	
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnVXNlckNlbnRlci9teXN1Z2dlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUMsRSIsImZpbGUiOiJteXN1Z2dlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdXNlck1zZyA9ICcnO1xyXG52YXIgbW9kdWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vdG9kbyDpgLvovpHlh73mlbAgIFxyXG4gICAgICAgIE9uU2F2ZSgpO1xyXG4gICAgICAgIE9uTGlzdGVuZXIoKTtcclxuICAgIH07XHJcbiAgICB2YXIgT25MaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcjY29udGVudCcpLmJpbmQoJ2lucHV0IHByb3BlcnR5Y2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKS5sZW5ndGggPD0gMjUwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKCcucmVkJykuaHRtbCgkKHRoaXMpLnZhbCgpLmxlbmd0aCArICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi6LaF6L+H6ZmQ5a6a55qE5paH5a2XXCIpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS52YWwoKS5zdWJzdHJpbmcoMCwgMjUwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgT25TYXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjYnRuU2F2ZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHVzZXJNc2cgPSAkLnRyaW0oJChcIiNjb250ZW50XCIpLnZhbCgpKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodXNlck1zZz09JycpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi5LiN6IO96L6T5YWl5Li656m6XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1c2VyTXNnLmxlbmd0aCA+IDI1MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCLotoXov4fpmZDlrprnmoTmloflrZdcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL09yZ1VzZXJDZW50ZXIvVXNlci9BZGRGZWVkYmFja1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dXNlck1zZ1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLm1pbm91dHJlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLnN1Z09rXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcbi8v57uR5a6a5pWw5o2uXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgbmV3IG1vZHVsZSgpLmluaXQoKTtcclxuXHJcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvanMvT3JnVXNlckNlbnRlci9teXN1Z2dlc3MuanNcbiAqKiBtb2R1bGUgaWQgPSA2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAzMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=