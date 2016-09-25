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