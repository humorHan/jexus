

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