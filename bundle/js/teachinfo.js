webpackJsonp([39,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(100);


/***/ },

/***/ 100:
/***/ function(module, exports) {

	
	
	var module = function () {
	    this.init = function () {
	        //todo 逻辑函数  
	     
	        if (window.location.href.toLowerCase().indexOf("editteachinfo") > 0) {
	
	            OnBindSave();
	        }
	        else {
	            OnEdit();
	        }
	    };
	    var OnEdit = function () {
	        
	        $("#editpointer").click(function () {
	            location.href = "/OrgUserCenter/User/EditTeachInfo";
	        });
	    };
	    var OnBindSave = function () {
	        $("#btnSave").click(function () {
	            var seniority = $("#Seniority").val();
	            var reg = /^d+$/;
	            if ($.trim(seniority).length == 0)
	            {
	                alert("输入不能为空");
	                return;
	            }
	            if (!reg.test(seniority))
	            {
	                alert("输入格式不正确");
	                return;
	            }
	            $.ajax({
	                url: "/OrgUserCenter/User/UpdateUserTeachInfo",
	                data: {
	                    Seniority: seniority
	
	                },
	                dataType: "json",
	                type: "post",
	                success: function (e) {
	                   
	                },
	                error: function (e) {
	                   
	                }
	            });
	        });
	        
	    };
	    
	
	};
	
	//绑定数据
	$(function () {
	    new module().init();
	    // module.init(); 
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnVXNlckNlbnRlci90ZWFjaGluZm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxjQUFhO0FBQ2IsVUFBUzs7QUFFVDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0I7QUFDQSxFQUFDLEUiLCJmaWxlIjoidGVhY2hpbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG52YXIgbW9kdWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vdG9kbyDpgLvovpHlh73mlbAgIFxyXG4gICAgIFxyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJlZGl0dGVhY2hpbmZvXCIpID4gMCkge1xyXG5cclxuICAgICAgICAgICAgT25CaW5kU2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgT25FZGl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciBPbkVkaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJChcIiNlZGl0cG9pbnRlclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi9PcmdVc2VyQ2VudGVyL1VzZXIvRWRpdFRlYWNoSW5mb1wiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHZhciBPbkJpbmRTYXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjYnRuU2F2ZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzZW5pb3JpdHkgPSAkKFwiI1Nlbmlvcml0eVwiKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIHJlZyA9IC9eZCskLztcclxuICAgICAgICAgICAgaWYgKCQudHJpbShzZW5pb3JpdHkpLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIui+k+WFpeS4jeiDveS4uuepulwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlZy50ZXN0KHNlbmlvcml0eSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi6L6T5YWl5qC85byP5LiN5q2j56GuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL09yZ1VzZXJDZW50ZXIvVXNlci9VcGRhdGVVc2VyVGVhY2hJbmZvXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2VuaW9yaXR5OiBzZW5pb3JpdHlcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG59O1xyXG5cclxuLy/nu5HlrprmlbDmja5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBuZXcgbW9kdWxlKCkuaW5pdCgpO1xyXG4gICAgLy8gbW9kdWxlLmluaXQoKTsgXHJcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvanMvT3JnVXNlckNlbnRlci90ZWFjaGluZm8uanNcbiAqKiBtb2R1bGUgaWQgPSAxMDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzlcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9