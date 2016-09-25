//点击搜索框开始
$(".serch").click(function () {
    $(this).css("background", "#cb441e");
    var serchtext = $(".serchtext");
    serchtext.show();
    if (!(serchtext.hasClass("on"))) {
        serchtext.stop();
        serchtext.animate({
            width: "160px"
        }, 1000);
        serchtext.addClass("on");
    }
    else {
        serchtext.stop();
        serchtext.animate({
            width: "0px"
        }, 1000);
        serchtext.removeClass("on");
        $(this).css("background", "");
    }
});
//点击搜索框结束
//自定义下拉列表框开始
$(".scharea").click(function () {
    $(this).css("border", "1px solid #cb441e");
    var listbox = $(".listbox");
    listbox.show();
    var li = listbox.find("li");
    for (var i = 0; i < li.length; i++) {
        li.eq(i).click(function () {
            var a = $(this).text();
            $(".scharea").text(a);
            listbox.hide();
        })
    }
});
//自定义下拉列表框结束