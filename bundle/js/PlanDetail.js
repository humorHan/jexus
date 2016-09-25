webpackJsonp([6,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);


/***/ },

/***/ 20:
/***/ function(module, exports) {

	
	var request = {
	    render: function () {
	        var PlanIndex = 13;
	        $.post("/Org/TeachSupervision/GetPlanIndexContent2", { PlanIndex }, function (data) {
	            
	            $("#TitleName").html(data.models["titlename"]);
	            $("#f_ktyr").html(data.models["firstmark"]);
	            $("#f_jxmb").html(data.models["targetmark"]);
	            $("#f_zndfx").html(data.models["diffmark"]);
	            $("#f_summarymark").html(data.models["summarymark"]); 
	            $("#jiaoxuegc").html( GetGC(data.list));
	        });
	    }
	
	}
	
	function GetGC(list) {
	    var str = "<li>";
	
	    for (var i = 0; i < list.length; i++) {
	        //取知识点
	        str += list[i]["pointname"];
	        str += "<div class='mt20 mb20 pl15'><div class='mb20'>";
	        for (var m = 0; m < list[i].list.length; m++) {
	            str += list[i].list[0]["pointname"]+"<br/>";
	        }
	        str += "</div>";
	        for (var j = 0; j < list[i].list.length; j++) {
	            str += " <p class='mt20 mb20'>";
	            str += "考法"+(j+1)+":"+list[i].list[j]["pointname"];
	            str += "</p>";
	            str += "<div class='mb20 overflow'>";
	            //取考法 list[i].list[j]["pointname"]      
	                var lt = 1; var lx = 1;
	                for (var h = 0; h < list[i].list[j].list.length; h++) {
	                    //取题
	                    //list[i].list[j].list[h]
	                    if (list[i].list[j].list[h]["pointtype"]==1) {//例题
	                        str += "<span class='sift-test '> 精选例题</span>";
	                        str += "<div class='align-left mb20'>";
	                        str += "<p class='line40'>";
	                        str += " 例题" + lt;
	                        lt++;
	                    } else {
	                        str += "<span class='sift-test '> 随堂练习</span>";
	                        str += "<div class='align-left mb20'>";
	                        str += "<p class='line40'>";
	                        str += " 练习" + lx;
	                        lx++;
	                    } 
	                    str += " </p>";
	                    str += "<div>";
	                    var f_body=list[i].list[j].list[h]["body"];
	                    if (f_body != null) {
	                        str += f_body;
	                    }
	                   
	
	                    str += " </div>";
	                    str += " </div>";
	                }            
	        }
	
	        str += " </div>";
	        str += " </div>";
	    }
	    str += " </li>";
	    return str;
	}
	
	
	
	
	
	
	
	  var el = document.getElementById("left-menu");
	  var org= document.getElementById("middle-org");    
	    function changeMenuHeight(){
	        el.style.height = document.documentElement.clientHeight + 'px';
	        document.getElementById("top-head").style.width = document.documentElement.clientWidth - 130 + 'px';
	        if (org) {
	            org.style.height = document.documentElement.clientHeight - 80 + 'px';
	        }
	    }
	
	$(document).ready(function () {
	    request.render();
	    changeMenuHeight();
	
	});


/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnL1BsYW5EZXRhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBOEQsWUFBWTs7QUFFMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSx3QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLHdCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQjtBQUMzQixnQ0FBK0IsaUNBQWlDO0FBQ2hFO0FBQ0E7QUFDQSxtRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxrQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBLGtEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUMiLCJmaWxlIjoiUGxhbkRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgcmVxdWVzdCA9IHtcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBQbGFuSW5kZXggPSAxMztcclxuICAgICAgICAkLnBvc3QoXCIvT3JnL1RlYWNoU3VwZXJ2aXNpb24vR2V0UGxhbkluZGV4Q29udGVudDJcIiwgeyBQbGFuSW5kZXggfSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCIjVGl0bGVOYW1lXCIpLmh0bWwoZGF0YS5tb2RlbHNbXCJ0aXRsZW5hbWVcIl0pO1xyXG4gICAgICAgICAgICAkKFwiI2Zfa3R5clwiKS5odG1sKGRhdGEubW9kZWxzW1wiZmlyc3RtYXJrXCJdKTtcclxuICAgICAgICAgICAgJChcIiNmX2p4bWJcIikuaHRtbChkYXRhLm1vZGVsc1tcInRhcmdldG1hcmtcIl0pO1xyXG4gICAgICAgICAgICAkKFwiI2Zfem5kZnhcIikuaHRtbChkYXRhLm1vZGVsc1tcImRpZmZtYXJrXCJdKTtcclxuICAgICAgICAgICAgJChcIiNmX3N1bW1hcnltYXJrXCIpLmh0bWwoZGF0YS5tb2RlbHNbXCJzdW1tYXJ5bWFya1wiXSk7IFxyXG4gICAgICAgICAgICAkKFwiI2ppYW94dWVnY1wiKS5odG1sKCBHZXRHQyhkYXRhLmxpc3QpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdldEdDKGxpc3QpIHtcclxuICAgIHZhciBzdHIgPSBcIjxsaT5cIjtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvL+WPluefpeivhueCuVxyXG4gICAgICAgIHN0ciArPSBsaXN0W2ldW1wicG9pbnRuYW1lXCJdO1xyXG4gICAgICAgIHN0ciArPSBcIjxkaXYgY2xhc3M9J210MjAgbWIyMCBwbDE1Jz48ZGl2IGNsYXNzPSdtYjIwJz5cIjtcclxuICAgICAgICBmb3IgKHZhciBtID0gMDsgbSA8IGxpc3RbaV0ubGlzdC5sZW5ndGg7IG0rKykge1xyXG4gICAgICAgICAgICBzdHIgKz0gbGlzdFtpXS5saXN0WzBdW1wicG9pbnRuYW1lXCJdK1wiPGJyLz5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyICs9IFwiPC9kaXY+XCI7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBsaXN0W2ldLmxpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgc3RyICs9IFwiIDxwIGNsYXNzPSdtdDIwIG1iMjAnPlwiO1xyXG4gICAgICAgICAgICBzdHIgKz0gXCLogIPms5VcIisoaisxKStcIjpcIitsaXN0W2ldLmxpc3Rbal1bXCJwb2ludG5hbWVcIl07XHJcbiAgICAgICAgICAgIHN0ciArPSBcIjwvcD5cIjtcclxuICAgICAgICAgICAgc3RyICs9IFwiPGRpdiBjbGFzcz0nbWIyMCBvdmVyZmxvdyc+XCI7XHJcbiAgICAgICAgICAgIC8v5Y+W6ICD5rOVIGxpc3RbaV0ubGlzdFtqXVtcInBvaW50bmFtZVwiXSAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGx0ID0gMTsgdmFyIGx4ID0gMTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGggPSAwOyBoIDwgbGlzdFtpXS5saXN0W2pdLmxpc3QubGVuZ3RoOyBoKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WPlumimFxyXG4gICAgICAgICAgICAgICAgICAgIC8vbGlzdFtpXS5saXN0W2pdLmxpc3RbaF1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdFtpXS5saXN0W2pdLmxpc3RbaF1bXCJwb2ludHR5cGVcIl09PTEpIHsvL+S+i+mimFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8c3BhbiBjbGFzcz0nc2lmdC10ZXN0ICc+IOeyvumAieS+i+mimDwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPGRpdiBjbGFzcz0nYWxpZ24tbGVmdCBtYjIwJz5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPHAgY2xhc3M9J2xpbmU0MCc+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIiDkvovpophcIiArIGx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsdCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjxzcGFuIGNsYXNzPSdzaWZ0LXRlc3QgJz4g6ZqP5aCC57uD5LmgPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8ZGl2IGNsYXNzPSdhbGlnbi1sZWZ0IG1iMjAnPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8cCBjbGFzcz0nbGluZTQwJz5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiIOe7g+S5oFwiICsgbHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGx4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCIgPC9wPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjxkaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZfYm9keT1saXN0W2ldLmxpc3Rbal0ubGlzdFtoXVtcImJvZHlcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZfYm9keSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBmX2JvZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIiA8L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCIgPC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdHIgKz0gXCIgPC9kaXY+XCI7XHJcbiAgICAgICAgc3RyICs9IFwiIDwvZGl2PlwiO1xyXG4gICAgfVxyXG4gICAgc3RyICs9IFwiIDwvbGk+XCI7XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1tZW51XCIpO1xyXG4gIHZhciBvcmc9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkZGxlLW9yZ1wiKTsgICAgXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VNZW51SGVpZ2h0KCl7XHJcbiAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3AtaGVhZFwiKS5zdHlsZS53aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIDEzMCArICdweCc7XHJcbiAgICAgICAgaWYgKG9yZykge1xyXG4gICAgICAgICAgICBvcmcuc3R5bGUuaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIDgwICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICByZXF1ZXN0LnJlbmRlcigpO1xyXG4gICAgY2hhbmdlTWVudUhlaWdodCgpO1xyXG5cclxufSk7XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvanMvT3JnL1BsYW5EZXRhaWwuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSA2XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==