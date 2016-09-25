webpackJsonp([28,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(64);


/***/ },

/***/ 64:
/***/ function(module, exports) {

	
	
	
	$(function () {
	
	    $("#org-exit").click(function () {
	        exit();
	    });
	});
	
	
	function exit() {
	    $.ajax({
	        type: "post",
	        url: "/Home/Exit",
	        dataType: "json",
	        error: function (e) {
	        },
	        success: function (e) {
	            if (e.OK)
	                location.href = "/";
	        }
	    });
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgJChcIiNvcmctZXhpdFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZXhpdCgpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGV4aXQoKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogXCIvSG9tZS9FeGl0XCIsXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUuT0spXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2pzL09yZy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDI4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==