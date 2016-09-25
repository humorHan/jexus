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

