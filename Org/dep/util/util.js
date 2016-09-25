/**
 * Created by humorHan on 2016/6/17.
 */
module.exports = {
	baseUrl: "http://localhost:63342/mfg_newb_webv2/html/demo/",
	//跳转页面，可以处理公用跳转逻辑
	redirectUrl: function(redirectUrl, fromUrl) {
		if (redirectUrl == "login.html") {
			window.location.href = this.baseUrl + redirectUrl;
		} else {
			if (this.getCookie("uname")) {
				window.location.href = this.baseUrl + redirectUrl;
			} else {
				window.location.href = this.baseUrl + "login.html";
			}
		}
	},
	//设置cookie
	setCookie: function(objName, objValue, objHours) {
		var str = objName + "=" + escape(objValue);

		if (objHours > 0) { //为0时不设定过期时间，浏览器关闭时cookie自动消失
			var date = new Date();
			var ms = objHours * 3600 * 1000;
			date.setTime(date.getTime() + ms);
			str += "; expires=" + date.toGMTString() + ";path=/";
		}
		document.cookie = str;
	},
	//获取cookie
	getCookie: function(objName) { //获取指定名称的cookie的值
		var arrStr = document.cookie.split("; ");
		for (var i = 0; i < arrStr.length; i++) {
			var temp = arrStr[i].split("=");
			if (temp[0] == objName) {
				return unescape(temp[1]);
			}
		}
	},
	// html转码
	htmlEncode: function(s) {
		var div = document.createElement('div');
		div.appendChild(document.createTextNode(s));
		return div.innerHTML;
	},
	// html解码
	htmldecode: function(s) {
		var div = document.createElement('div');
		div.innerHTML = s;
		return div.innerText || div.textContent;
	},//性别转换
	sextran: function (s) {
	    switch (s) {
	        case "0":
	            return "男";
	        case "1":
	            return "女";
	        
	        default:
	            return "未知";
	    }
	   
	    //return div.innerText || div.textContent;
	},//学科转换
	getSubjectName: function (s) {
        switch (s) {
            case "01":
                return "语文";
            case "02":
                return "数学";
            case "03":
                return "英语";
            case "04":
                return "物理";
            case "05":
                return "化学";
            case "06":
                return "地理";
            case "07":
                return "历史";
            case "08":
                return "政治";
            case "09":
                return "生物";
            case "14":
                return "奥数";
            default:
                return "";
        }
	},//学制转换
	edutypetran: function (s) {
	    switch (s) {
	        case 0:
	            return "六三制";
	        case 1:
	            return "五四制";
	        
	        default:
	            return "未知";
	    }
	    //return div.innerText || div.textContent;
	}
};