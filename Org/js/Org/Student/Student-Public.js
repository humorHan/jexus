$(function () {
	    var arrNav = new Array();
	    arrNav.push("SuperManage");
	    arrNav.push("AreaManager");
	    arrNav.push("BerkeleyAdmin");
	    arrNav.push("Director");
	    arrNav.push("TeachingRecord");
	    arrNav.push("KnowledgeAssessment");
	    arrNav.push("WorkSituation");
	    arrNav.push("WrongTopic");
	    arrNav.push("MasterAnalysis");
	    arrNav.push("WorkDetail");
	    $(".org-item").click(function () {
	        var $this = $(this);
	        var $span = $this.find("span[id^=idHref]");
	        var action =$span.attr("data-item");
	        window.location.href = '/Org/StudentSupervision/'+action;
	    });
	    var url = window.location.href;
	    url = url.substring(url.lastIndexOf('/')+1, url.length);
	    $("#idHref" + url).parent().parent("li").addClass("active");
	
});