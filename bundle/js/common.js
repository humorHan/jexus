webpackJsonp([20,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(44);


/***/ },

/***/ 44:
/***/ function(module, exports) {

	/**
	 * Created by humorHan on 2016/9/1.
	 */
	var common = {
	    init: function(){
	        //搜索框事件 YD
	        this.initSearch();
	        //左侧菜单和头部绑定事件js HJY
	        this.initBtns();
	    },
	    initSearch: function(){
	        $(".search").click(function(){
	            $(this).css("background","#cb441e");
	            var searchText= $(".search-text");
	            searchText.show();
	            if(!(searchText.hasClass("search-on"))){
	                searchText.stop();
	                searchText.animate({
	                    width:"160px"
	                }, 1000 );
	                searchText.addClass("search-on");
	            } else{
	                searchText.stop();
	                searchText.animate({
	                    width:"0px"
	                }, 1000 );
	                searchText.removeClass("search-on");
	                $(this).css("background","");
	            }
	        });
	    },
	    initBtns: function(){
	        //点击左侧一级菜单
	        $('#left-menu').delegate(".person-center,.system-setting", "click", function(){
	            $("#left-menu").find(".active").removeClass("active");
	            $(this).addClass("active");
	        }).delegate('li div', 'click', function(){
	            $("#left-menu").find(".active").removeClass("active");
	            $(this).addClass("active").parent("li").addClass("active");
	        });
	        //切换教务教学
	        $('.head-handle').delegate('.home-item', 'click', function(){
	            var $el = $(".switch-btn");
	            if (!($(this).hasClass("active"))) {
	                $(this).index() == 2 ? $el.addClass("active") : $el.removeClass("active");
	                $(".head-handle").find(".home-item.active").removeClass("active");
	                $(this).addClass("active");
	            }
	        });
	    }
	};
	$(function(){
	    common.init();
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9PcmcvanMvY29tbW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBodW1vckhhbiBvbiAyMDE2LzkvMS5cbiAqL1xudmFyIGNvbW1vbiA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpe1xuICAgICAgICAvL+aQnOe0ouahhuS6i+S7tiBZRFxuICAgICAgICB0aGlzLmluaXRTZWFyY2goKTtcbiAgICAgICAgLy/lt6bkvqfoj5zljZXlkozlpLTpg6jnu5Hlrprkuovku7ZqcyBISllcbiAgICAgICAgdGhpcy5pbml0QnRucygpO1xuICAgIH0sXG4gICAgaW5pdFNlYXJjaDogZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5zZWFyY2hcIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykuY3NzKFwiYmFja2dyb3VuZFwiLFwiI2NiNDQxZVwiKTtcbiAgICAgICAgICAgIHZhciBzZWFyY2hUZXh0PSAkKFwiLnNlYXJjaC10ZXh0XCIpO1xuICAgICAgICAgICAgc2VhcmNoVGV4dC5zaG93KCk7XG4gICAgICAgICAgICBpZighKHNlYXJjaFRleHQuaGFzQ2xhc3MoXCJzZWFyY2gtb25cIikpKXtcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXh0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXh0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDpcIjE2MHB4XCJcbiAgICAgICAgICAgICAgICB9LCAxMDAwICk7XG4gICAgICAgICAgICAgICAgc2VhcmNoVGV4dC5hZGRDbGFzcyhcInNlYXJjaC1vblwiKTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXh0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXh0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDpcIjBweFwiXG4gICAgICAgICAgICAgICAgfSwgMTAwMCApO1xuICAgICAgICAgICAgICAgIHNlYXJjaFRleHQucmVtb3ZlQ2xhc3MoXCJzZWFyY2gtb25cIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaW5pdEJ0bnM6IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8v54K55Ye75bem5L6n5LiA57qn6I+c5Y2VXG4gICAgICAgICQoJyNsZWZ0LW1lbnUnKS5kZWxlZ2F0ZShcIi5wZXJzb24tY2VudGVyLC5zeXN0ZW0tc2V0dGluZ1wiLCBcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKFwiI2xlZnQtbWVudVwiKS5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pLmRlbGVnYXRlKCdsaSBkaXYnLCAnY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJChcIiNsZWZ0LW1lbnVcIikuZmluZChcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpLnBhcmVudChcImxpXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy/liIfmjaLmlZnliqHmlZnlraZcbiAgICAgICAgJCgnLmhlYWQtaGFuZGxlJykuZGVsZWdhdGUoJy5ob21lLWl0ZW0nLCAnY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyICRlbCA9ICQoXCIuc3dpdGNoLWJ0blwiKTtcbiAgICAgICAgICAgIGlmICghKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5pbmRleCgpID09IDIgPyAkZWwuYWRkQ2xhc3MoXCJhY3RpdmVcIikgOiAkZWwucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJChcIi5oZWFkLWhhbmRsZVwiKS5maW5kKFwiLmhvbWUtaXRlbS5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbiQoZnVuY3Rpb24oKXtcbiAgICBjb21tb24uaW5pdCgpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9jb21tb24uanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAyMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=