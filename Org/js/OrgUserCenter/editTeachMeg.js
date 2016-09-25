
var module = function () {
    this.init = function () {
        //todo 逻辑函数  
        // OnBind();
    };
    var OnBind = function () {
     

        $("#btnSave").click(function () {
           // location.href = "/OrgUserCenter/User/UpdateUserTeachInfo";
        });
    };


};

//绑定数据
$(function () {
    new module().init();
    // module.init(); 
});