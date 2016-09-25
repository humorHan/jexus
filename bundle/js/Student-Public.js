webpackJsonp([9,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25);


/***/ },

/***/ 25:
/***/ function(module, exports) {

	$(function () {
		    var arrNav = new Array();
		    arrNav.push("SuperManage");
		    arrNav.push("AreaManager");
		    arrNav.push("BerkeleyAdmin");
		    arrNav.push("Director");
		    arrNav.push("TeachingRecord");
		    arrNav.push("KnowledgeAssessment");
		    arrNav.push("WorkSituation");
		    arrNav.push("WrongTopic");
		    arrNav.push("MasterAnalysis");
		    arrNav.push("WorkDetail");
		    $(".org-item").click(function () {
		        var $this = $(this);
		        var $span = $this.find("span[id^=idHref]");
		        var action =$span.attr("data-item");
		        window.location.href = '/Org/StudentSupervision/'+action;
		    });
		    var url = window.location.href;
		    url = url.substring(url.lastIndexOf('/')+1, url.length);
		    $("#idHref" + url).parent().parent("li").addClass("active");
		
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnL1N0dWRlbnQvU3R1ZGVudC1QdWJsaWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLEVBQUMsRSIsImZpbGUiOiJTdHVkZW50LVB1YmxpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG5cdCAgICB2YXIgYXJyTmF2ID0gbmV3IEFycmF5KCk7XHJcblx0ICAgIGFyck5hdi5wdXNoKFwiU3VwZXJNYW5hZ2VcIik7XHJcblx0ICAgIGFyck5hdi5wdXNoKFwiQXJlYU1hbmFnZXJcIik7XHJcblx0ICAgIGFyck5hdi5wdXNoKFwiQmVya2VsZXlBZG1pblwiKTtcclxuXHQgICAgYXJyTmF2LnB1c2goXCJEaXJlY3RvclwiKTtcclxuXHQgICAgYXJyTmF2LnB1c2goXCJUZWFjaGluZ1JlY29yZFwiKTtcclxuXHQgICAgYXJyTmF2LnB1c2goXCJLbm93bGVkZ2VBc3Nlc3NtZW50XCIpO1xyXG5cdCAgICBhcnJOYXYucHVzaChcIldvcmtTaXR1YXRpb25cIik7XHJcblx0ICAgIGFyck5hdi5wdXNoKFwiV3JvbmdUb3BpY1wiKTtcclxuXHQgICAgYXJyTmF2LnB1c2goXCJNYXN0ZXJBbmFseXNpc1wiKTtcclxuXHQgICAgYXJyTmF2LnB1c2goXCJXb3JrRGV0YWlsXCIpO1xyXG5cdCAgICAkKFwiLm9yZy1pdGVtXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblx0ICAgICAgICB2YXIgJHNwYW4gPSAkdGhpcy5maW5kKFwic3BhbltpZF49aWRIcmVmXVwiKTtcclxuXHQgICAgICAgIHZhciBhY3Rpb24gPSRzcGFuLmF0dHIoXCJkYXRhLWl0ZW1cIik7XHJcblx0ICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvT3JnL1N0dWRlbnRTdXBlcnZpc2lvbi8nK2FjdGlvbjtcclxuXHQgICAgfSk7XHJcblx0ICAgIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHQgICAgdXJsID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoJy8nKSsxLCB1cmwubGVuZ3RoKTtcclxuXHQgICAgJChcIiNpZEhyZWZcIiArIHVybCkucGFyZW50KCkucGFyZW50KFwibGlcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHJcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvanMvT3JnL1N0dWRlbnQvU3R1ZGVudC1QdWJsaWMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSA5XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==