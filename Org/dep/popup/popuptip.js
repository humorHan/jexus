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

