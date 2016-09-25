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