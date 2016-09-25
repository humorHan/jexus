/**
 * Created by humorHan on 2016/6/17.
 */
console.log('demo.js');
var demoTpl = require("demo/test.tpl");

require('calendar/calender-plugin.min.css');
var calender = require('calendar/calender-plugin.js');

var demo = {
    init: function(){
        //todo 逻辑函数
        this.render();
        this.initBtns();
        this.initCalendar();
    },
    initCalendar: function(){
        calender(".text");
    },
    render: function(){
        var arr = [1,2,3,4,5];
        $(".dom2").html(demoTpl(arr));
    },
    initBtns: function(){
        //todo 绑定事件
    }
};

$(function(){
   demo.init();
});