webpackJsonp([5,41],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	/*TMODJS:{}*/
	!function () {
		function a(a, b) {
			return (/string|function/.test(typeof b) ? h : g)(a, b)
		}
	
		function b(a, c) {
			return "string" != typeof a && (c = typeof a, "number" === c ? a += "" : a = "function" === c ? b(a.call(a)) : ""), a
		}
	
		function c(a) {
			return l[a]
		}
	
		function d(a) {
			return b(a).replace(/&(?![\w#]+;)|[<>"']/g, c)
		}
	
		function e(a, b) {
			if (m(a))for (var c = 0, d = a.length; d > c; c++)b.call(a, a[c], c, a); else for (c in a)b.call(a, a[c], c)
		}
	
		function f(a, b) {
			var c = /(\/)[^\/]+\1\.\.\1/, d = ("./" + a).replace(/[^\/]+$/, ""), e = d + b;
			for (e = e.replace(/\/\.\//g, "/"); e.match(c);)e = e.replace(c, "/");
			return e
		}
	
		function g(b, c) {
			var d = a.get(b) || i({filename: b, name: "Render Error", message: "Template not found"});
			return c ? d(c) : d
		}
	
		function h(a, b) {
			if ("string" == typeof b) {
				var c = b;
				b = function () {
					return new k(c)
				}
			}
			var d = j[a] = function (c) {
				try {
					return new b(c, a) + ""
				} catch (d) {
					return i(d)()
				}
			};
			return d.prototype = b.prototype = n, d.toString = function () {
				return b + ""
			}, d
		}
	
		function i(a) {
			var b = "{Template Error}", c = a.stack || "";
			if (c)c = c.split("\n").slice(0, 2).join("\n"); else for (var d in a)c += "<" + d + ">\n" + a[d] + "\n\n";
			return function () {
				return "object" == typeof console && console.error(b + "\n\n" + c), b
			}
		}
	
		var j = a.cache = {}, k = this.String, l = {
			"<": "&#60;",
			">": "&#62;",
			'"': "&#34;",
			"'": "&#39;",
			"&": "&#38;"
		}, m = Array.isArray || function (a) {
				return "[object Array]" === {}.toString.call(a)
			}, n = a.utils = {
			$helpers: {}, $include: function (a, b, c) {
				return a = f(c, a), g(a, b)
			}, $string: b, $escape: d, $each: e
		}, o = a.helpers = n.$helpers;
		a.get = function (a) {
			return j[a.replace(/^\.\//, "")]
		}, a.helper = function (a, b) {
			o[a] = b
		}, module.exports = a
	}();

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

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
	


/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	
	var tplTable = __webpack_require__(18);
	var pop = __webpack_require__(5);
	 __webpack_require__(19);
	var module = {
	    init: function () {
	
	        //todo 逻辑函数
	        this.render();
	        this.initBtns();
	
	    },
	    //对页面的数据进行绑定
	    render: function () {
	        $.ajax({
	            type: "post",
	            url: "/OrgSystemSet/OrgSet/PersonalSetGet",
	            dataType: "json",
	            data: {
	                //后天获取机构id
	
	            },
	            success: function (data) {
	
	                if (data.result.Data) {
	                   
	                    //赋值
	                    $("#img0").attr("src", data.result.Data.LogoUrl);
	                    $("#img1").attr("src", data.result.Data.CyclePic1);
	                    $("#img2").attr("src", data.result.Data.CyclePic2);
	                    $("#img3").attr("src", data.result.Data.CyclePic3);
	                    $("#companyPhone").val(data.result.Data.CompanyPhone);
	                    $("#companySite").val(data.result.Data.CompanySite);
	                    $("#companyDayBeg").val(data.result.Data.CompanyDayBeg);
	                    $("#companyDayEnd").val(data.result.Data.CompanyDayEnd);
	                    $("#commpanyTimeBeg").val(data.result.Data.CommpanyTimeBeg);
	                    $("#commpanyTimeEnd").val(data.result.Data.CommpanyTimeEnd);
	
	                }
	                else {
	
	                }
	            }
	        });
	
	    },
	    initBtns: function () {
	        //todo 绑定事件
	
	        //进行跳转
	        $('#main-content-wrapper').delegate("#orgset", "click", function () {
	
	            window.location.href = "/OrgSystemSet/OrgSet/OrgSet";
	        });
	        //删除图片
	        $("#main-content-wrapper").delegate(".dele-img", "click", function () {
	           
	            var idNum = this.id.replace("deimg", "");
	            var localImg = "../../../bundle/img/upload.png"; //本地图片展示
	            $("#img" + idNum).attr("src", localImg);
	            $("#deimg" + idNum).css("display", "none");
	
	        });
	
	        //进行跳转
	        $('#main-content-wrapper').delegate("#uploadPic1", "change", function () {
	            FileUpload('1');
	        }).delegate("#uploadPic2", "change", function () {
	            FileUpload('2');
	        }).delegate("#uploadPic3", "change", function () {
	                FileUpload('3');
	            }).delegate("#uploadPic0", "change", function () {
	                FileUpload('0');
	            });
	    }
	
	
	};
	
	
	//绑定数据
	$(function () {
	    module.init();
	    OptImg();
	    OptSave();
	    //FileUpload();
	
	});
	exports.FileUpload = FileUpload;
	
	///保存数据
	function OptSave() {
	
	    $("#btnSave").click(function () {
	        //组装数据，进行传递
	        var LogoUrl = $("#img0")[0].src;
	        var CyclePic1 = $("#img1")[0].src;
	        var CyclePic2 = $("#img2")[0].src;
	        var CyclePic3 = $("#img3")[0].src;
	        var CompanyPhone = $("#companyPhone").val();
	        var CompanySite = $("#companySite").val();
	        var CompanyDayBeg = $("#companyDayBeg").val();
	        var CompanyDayEnd = $("#companyDayEnd").val();
	        var CommpanyTimeBeg = $("#commpanyTimeBeg").val();
	        var CommpanyTimeEnd = $("#commpanyTimeEnd").val();
	        var option = {};
	        option.LogoUrl = LogoUrl;
	        option.CyclePic1 = CyclePic1;
	        option.CyclePic2 = CyclePic2;
	        option.CyclePic3 = CyclePic3;
	        option.CompanyPhone = CompanyPhone;
	        option.CompanySite = CompanySite;
	        option.CompanyDayBeg = CompanyDayBeg;
	        option.CompanyDayEnd = CompanyDayEnd;
	        option.CommpanyTimeBeg = CommpanyTimeBeg;
	        option.CommpanyTimeEnd = CommpanyTimeEnd;
	       
	        if (chkForm('companyPhone') == false) {
	           
	            return;//校验可以都封装到里面
	        }
	
	        $.ajax({
	            type: "post",
	            url: "/OrgSystemSet/OrgSet/PersonalSetSave",
	            dataType: "json",
	            data: {
	                data: JSON.stringify(option)
	            },
	            success: function () { //data.result;
	
	                alert("处理成功");
	
	                //$("#oktip").show();
	                document.location.reload();
	
	                $(".addman").hide();
	
	            }
	        });
	
	       
	    });
	
	
	}
	//图片上传
	function FileUpload(type) {
	    $.ajaxFileUpload
	    (
	        {
	            url: '/OrgSet/Upload', //用于文件上传的服务器端请求地址
	            type: 'post',
	            data: {}, //此参数非常严谨，写错一个引号都不行
	            secureuri: false, //一般设置为false
	            fileElementId: 'uploadPic' + type, //文件上传空间的id属性  <input type="file" id="file" name="file" />
	            dataType: 'JSON', //返回值类型 一般设置为json
	            success: function (data) //服务器成功响应处理函数
	            {
	
	                if (data.Result != "ok") {
	                    flag = false;
	                    //alert(data.Result);
	                    if (type==0) {
	                        $("#imgtip0" ).html('<p class="alert-error mb10 "><b>提示： 上传失败！</b> ' + data.Result + '</p>');
	                    } else {
	                        $("#imgtip1").html('<p class="alert-error mb10 "><b>提示： 上传失败！</b> ' + data.Result + '</p>');
	                        
	                    }
	                    $("#deimg" + type).css("display", "none");
	                    return;
	                }
	                $("#img" + type).attr("src", data.imgPath1);
	                if (typeof (data.error) != 'undefined') {
	                    if (data.error != '') {
	                        alert(data.error);
	                    } else {
	                        alert(data.msg);
	                    }
	                }
	            },
	            error: function (data, status, e) //服务器响应失败处理函数
	            {
	                alert(e);
	            }
	        }
	    );
	
	    $("#deimg" + type).css("display", "block");
	    return false;
	}
	
	//加载点击事件
	function OptImg() {
	    
	    $("#img0").click(function () {
	        $("#uploadPic0").click();
	    });
	    $("#img1").click(function () {
	        $("#uploadPic1").click();
	    });
	    $("#img2").click(function () {
	        $("#uploadPic2").click();
	    });
	
	    $("#img3").click(function () {
	        $("#uploadPic3").click();
	    });
	
	
	}
	
	
	//校验是不是电话
	function IsMobile(obj) {
	    return (/^1[3|4|5|7|8]\d{9}$/.test(obj));
	}
	function IsTel(obj) {
	    return (/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(obj));
	}
	//校验是不是电话
	function chkForm(obj) {
	    var tel = $("#" + obj).val();
	   
	    if (IsMobile(tel) || IsTel(tel)) {
	        return true;
	    } else {
	        $("#phonetip").html('<p class="alert-error mb10 "><b>提示： </b>' + '请输入正确的手机号码或电话号码\n\n例如:13916752109或0712-3614072！' + '</p>');
	        $("#companyPhone").focus();
	        return false;
	    }
	
	}
	
	


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/OrgTeachWork/areadeletesc',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,Data=$data.Data,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
	$each(Data,function($value,$index){
	$out+=' <span class="schname" id="s';
	$out+=$escape($value.SchoolId);
	$out+='"> <i class="schlogo"></i> <em class="normal">';
	$out+=$escape($value.SchoolName.substring(0, 6));
	$out+='</em> <i class="deletesch" id="';
	$out+=$escape($value.SchoolId);
	$out+='"></i> </span> ';
	});
	$out+=' ';
	return new String($out);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	jQuery.extend({
	    createUploadIframe: function(id, uri)
	    {
	    	
	        //create frame
	        var frameId = 'jUploadFrame' + id;
	        var iframeHtml = '<iframe id="' + frameId + '" name="' + frameId + '" style="position:absolute; top:-9999px; left:-9999px"';
	        if(window.ActiveXObject)
	        {
	            if(typeof uri== 'boolean'){
	                iframeHtml += ' src="' + 'javascript:false' + '"';
	
	            }
	            else if(typeof uri== 'string'){
	                iframeHtml += ' src="' + uri + '"';
	
	            }	
	        }
	        iframeHtml += ' />';
	        jQuery(iframeHtml).appendTo(document.body);
	
	        return jQuery('#' + frameId).get(0);			
	    },
	    createUploadForm: function(id,fileElementId,data,fileElement)
	    {
	        //create form	
	        var formId = 'jUploadForm' + id;
	        var fileId = 'jUploadFile' + id;
	        var form = jQuery('<form  action="" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');	
	        if(data)
	        {
	            for(var i in data)
	            {
	                jQuery('<input type="hidden" name="' + i + '" value="' + data[i] + '" />').appendTo(form);
	            }			
	        }
	        //		var oldElement;
	        //		if(fileElement == null)
	        //			oldElement = jQuery('#' + fileElementId);
	        //		else
	        //			oldElement = fileElement;
	        //		
	        //		var newElement = jQuery(oldElement).clone();
	        //		jQuery(oldElement).attr('id', fileId);
	        //		jQuery(oldElement).before(newElement);
	        //		jQuery(oldElement).appendTo(form);
			
	        if(typeof(fileElementId) == 'string'){
	            fileElementId = [fileElementId];
	        }
	        for(var i in fileElementId){
	            var oldElement = jQuery('#' + fileElementId[i]);
	            var newElement = jQuery(oldElement).clone();
	            jQuery(oldElement).attr('id', fileId);
	            jQuery(oldElement).before(newElement);
	            jQuery(oldElement).appendTo(form);
	        }
			
			
			
	        //set attributes
	        jQuery(form).css('position', 'absolute');
	        jQuery(form).css('top', '-1200px');
	        jQuery(form).css('left', '-1200px');
	        jQuery(form).appendTo('body');		
	        return form;
	    },
	
	    ajaxFileUpload: function(s) {
	        // TODO introduce global settings, allowing the client to modify them for all requests, not only timeout		
	        s = jQuery.extend({}, jQuery.ajaxSettings, s);
	        var id = new Date().getTime()        
	        var form = jQuery.createUploadForm(id, s.fileElementId, (typeof(s.data)=='undefined'?false:s.data),s.fileElement);
	        var io = jQuery.createUploadIframe(id, s.secureuri);
	        var frameId = 'jUploadFrame' + id;
	        var formId = 'jUploadForm' + id;		
	        // Watch for a new set of requests
	        if ( s.global && ! jQuery.active++ )
	        {
	            jQuery.event.trigger( "ajaxStart" );
	        }            
	        var requestDone = false;
	        // Create the request object
	        var xml = {}   
	        if ( s.global )
	            jQuery.event.trigger("ajaxSend", [xml, s]);
	        // Wait for a response to come back
	        var uploadCallback = function(isTimeout)
	        {			
	            var io = document.getElementById(frameId);
	            try 
	            {				
	                if(io.contentWindow)
	                {
	                    xml.responseText = io.contentWindow.document.body?io.contentWindow.document.body.innerHTML:null;
	                    xml.responseXML = io.contentWindow.document.XMLDocument?io.contentWindow.document.XMLDocument:io.contentWindow.document;
						 
	                }else if(io.contentDocument)
	                {
	                    xml.responseText = io.contentDocument.document.body?io.contentDocument.document.body.innerHTML:null;
	                    xml.responseXML = io.contentDocument.document.XMLDocument?io.contentDocument.document.XMLDocument:io.contentDocument.document;
	                }						
	            }catch(e)
	            {
	                jQuery.handleError(s, xml, null, e);
	            }
	            if ( xml || isTimeout == "timeout") 
	            {				
	                requestDone = true;
	                var status;
	                try {
	                    status = isTimeout != "timeout" ? "success" : "error";
	                    // Make sure that the request was successful or notmodified
	                    if ( status != "error" )
	                    {
	                        // process the data (runs the xml through httpData regardless of callback)
	                        var data = jQuery.uploadHttpData( xml, s.dataType );    
	                        // If a local callback was specified, fire it and pass it the data
	                        if ( s.success )
	                            s.success( data, status );
	    
	                        // Fire the global callback
	                        if( s.global )
	                            jQuery.event.trigger( "ajaxSuccess", [xml, s] );
	                    } else
	                        jQuery.handleError(s, xml, status);
	                } catch(e) 
	                {
	                    status = "error";
	                    jQuery.handleError(s, xml, status, e);
	                }
	
	                // The request was completed
	                if( s.global )
	                    jQuery.event.trigger( "ajaxComplete", [xml, s] );
	
	                // Handle the global AJAX counter
	                if ( s.global && ! --jQuery.active )
	                    jQuery.event.trigger( "ajaxStop" );
	
	                // Process result
	                if ( s.complete )
	                    s.complete(xml, status);
	
	                jQuery(io).unbind();
	
	                setTimeout(function() {
	                    try {
	                        jQuery(io).remove();
	                        jQuery(form).remove();
	
	                    } catch (e) {
	                        jQuery.handleError(s, xml, null, e);
	                    }
	
	                }, 100);
	
	                xml = null;
	
	            }
	        }
	        // Timeout checker
	        if ( s.timeout > 0 ) 
	        {
	            setTimeout(function(){
	                // Check to see if the request is still happening
	                if( !requestDone ) uploadCallback( "timeout" );
	            }, s.timeout);
	        }
	        try 
	        {
	
	            var form = jQuery('#' + formId);
	            jQuery(form).attr('action', s.url);
	            jQuery(form).attr('method', 'POST');
	            jQuery(form).attr('target', frameId);
	            if(form.encoding)
	            {
	                jQuery(form).attr('encoding', 'multipart/form-data');      			
	            }
	            else
	            {	
	                jQuery(form).attr('enctype', 'multipart/form-data');			
	            }			
	            jQuery(form).submit();
	
	        } catch(e) 
	        {			
	            jQuery.handleError(s, xml, null, e);
	        }
			
	        jQuery('#' + frameId).load(uploadCallback);
	        return {abort: function(){
	            try
	            {
	                jQuery('#' + frameId).remove();
	                jQuery(form).remove();
	            }
	            catch(e){}
	        }};
	    },
	
	    uploadHttpData: function( r, type ) {
	        var data = !type;
	        data = type == "xml" || data ? r.responseXML : r.responseText;
			
	        // If the type is "script", eval it in global context
	        if ( type == "script" )
	            jQuery.globalEval( data );
	        // Get the JavaScript object, if JSON is used.
	        if ( type == "json") 
	            ////////////以下为新增代码///////////////
	            data = r.responseText;
	        var start = data.indexOf(">");
	        if(start != -1) {
	            var end = data.indexOf("<", start + 1);
	            if(end != -1) {
	                data = data.substring(start + 1, end);
	            }
	        }
	        ///////////以上为新增代码///////////////
	        eval( "data = " + data );
	        // evaluate scripts within html
	        if ( type == "html" )
	            jQuery("<div>").html(data).evalScripts();
	
	        return data;
	    },
		
	    handleError: function( s, xml, status, e ) {
	        // If a local callback was specified, fire it
	        if ( s.error )
	            s.error( xml, status, e );
	
	        // Fire the global callback
	        if ( s.global )
	            jQuery.event.trigger( "ajaxError", [xml, s, e] );
	    }
	});

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqIiwid2VicGFjazovLy8uL09yZy9qcy9PcmdUZWFjaFdvcmsvUG9wQ29tbW9uLmpzP2U5M2UqKiIsIndlYnBhY2s6Ly8vLi9PcmcvanMvT3JnU3lzdGVtU2V0L1BlclNldC5qcyIsIndlYnBhY2s6Ly8vLi9PcmcvdHBsL09yZ1RlYWNoV29yay9hcmVhZGVsZXRlc2MudHBsIiwid2VicGFjazovLy8uL09yZy9kZXAvdXBsb2FkL2FqYXhmaWxldXBsb2FkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFrQztBQUNsQzs7QUFFQTtBQUNBLHlDQUF3QyxPQUFPLDJCQUEyQjtBQUMxRTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXFDLFlBQVk7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QixpRUFBaUU7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0EsYUFBWSxlQUFlO0FBQzNCLGtEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBcUI7QUFDckIsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixHQUFFO0FBQ0Ysa0NBQWlDO0FBQ2pDLElBQUc7QUFDSCxlQUFjO0FBQ2Q7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0YsRUFBQyxHOzs7Ozs7O0FDOUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRSIsImZpbGUiOiJQZXJTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlRNT0RKUzp7fSovXHJcbiFmdW5jdGlvbiAoKSB7XHJcblx0ZnVuY3Rpb24gYShhLCBiKSB7XHJcblx0XHRyZXR1cm4gKC9zdHJpbmd8ZnVuY3Rpb24vLnRlc3QodHlwZW9mIGIpID8gaCA6IGcpKGEsIGIpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBiKGEsIGMpIHtcclxuXHRcdHJldHVybiBcInN0cmluZ1wiICE9IHR5cGVvZiBhICYmIChjID0gdHlwZW9mIGEsIFwibnVtYmVyXCIgPT09IGMgPyBhICs9IFwiXCIgOiBhID0gXCJmdW5jdGlvblwiID09PSBjID8gYihhLmNhbGwoYSkpIDogXCJcIiksIGFcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGMoYSkge1xyXG5cdFx0cmV0dXJuIGxbYV1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGQoYSkge1xyXG5cdFx0cmV0dXJuIGIoYSkucmVwbGFjZSgvJig/IVtcXHcjXSs7KXxbPD5cIiddL2csIGMpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBlKGEsIGIpIHtcclxuXHRcdGlmIChtKGEpKWZvciAodmFyIGMgPSAwLCBkID0gYS5sZW5ndGg7IGQgPiBjOyBjKyspYi5jYWxsKGEsIGFbY10sIGMsIGEpOyBlbHNlIGZvciAoYyBpbiBhKWIuY2FsbChhLCBhW2NdLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZihhLCBiKSB7XHJcblx0XHR2YXIgYyA9IC8oXFwvKVteXFwvXStcXDFcXC5cXC5cXDEvLCBkID0gKFwiLi9cIiArIGEpLnJlcGxhY2UoL1teXFwvXSskLywgXCJcIiksIGUgPSBkICsgYjtcclxuXHRcdGZvciAoZSA9IGUucmVwbGFjZSgvXFwvXFwuXFwvL2csIFwiL1wiKTsgZS5tYXRjaChjKTspZSA9IGUucmVwbGFjZShjLCBcIi9cIik7XHJcblx0XHRyZXR1cm4gZVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZyhiLCBjKSB7XHJcblx0XHR2YXIgZCA9IGEuZ2V0KGIpIHx8IGkoe2ZpbGVuYW1lOiBiLCBuYW1lOiBcIlJlbmRlciBFcnJvclwiLCBtZXNzYWdlOiBcIlRlbXBsYXRlIG5vdCBmb3VuZFwifSk7XHJcblx0XHRyZXR1cm4gYyA/IGQoYykgOiBkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoKGEsIGIpIHtcclxuXHRcdGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBiKSB7XHJcblx0XHRcdHZhciBjID0gYjtcclxuXHRcdFx0YiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IGsoYylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dmFyIGQgPSBqW2FdID0gZnVuY3Rpb24gKGMpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IGIoYywgYSkgKyBcIlwiXHJcblx0XHRcdH0gY2F0Y2ggKGQpIHtcclxuXHRcdFx0XHRyZXR1cm4gaShkKSgpXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gZC5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSA9IG4sIGQudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBiICsgXCJcIlxyXG5cdFx0fSwgZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaShhKSB7XHJcblx0XHR2YXIgYiA9IFwie1RlbXBsYXRlIEVycm9yfVwiLCBjID0gYS5zdGFjayB8fCBcIlwiO1xyXG5cdFx0aWYgKGMpYyA9IGMuc3BsaXQoXCJcXG5cIikuc2xpY2UoMCwgMikuam9pbihcIlxcblwiKTsgZWxzZSBmb3IgKHZhciBkIGluIGEpYyArPSBcIjxcIiArIGQgKyBcIj5cXG5cIiArIGFbZF0gKyBcIlxcblxcblwiO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIFwib2JqZWN0XCIgPT0gdHlwZW9mIGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcihiICsgXCJcXG5cXG5cIiArIGMpLCBiXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgaiA9IGEuY2FjaGUgPSB7fSwgayA9IHRoaXMuU3RyaW5nLCBsID0ge1xyXG5cdFx0XCI8XCI6IFwiJiM2MDtcIixcclxuXHRcdFwiPlwiOiBcIiYjNjI7XCIsXHJcblx0XHQnXCInOiBcIiYjMzQ7XCIsXHJcblx0XHRcIidcIjogXCImIzM5O1wiLFxyXG5cdFx0XCImXCI6IFwiJiMzODtcIlxyXG5cdH0sIG0gPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRcdHJldHVybiBcIltvYmplY3QgQXJyYXldXCIgPT09IHt9LnRvU3RyaW5nLmNhbGwoYSlcclxuXHRcdH0sIG4gPSBhLnV0aWxzID0ge1xyXG5cdFx0JGhlbHBlcnM6IHt9LCAkaW5jbHVkZTogZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuXHRcdFx0cmV0dXJuIGEgPSBmKGMsIGEpLCBnKGEsIGIpXHJcblx0XHR9LCAkc3RyaW5nOiBiLCAkZXNjYXBlOiBkLCAkZWFjaDogZVxyXG5cdH0sIG8gPSBhLmhlbHBlcnMgPSBuLiRoZWxwZXJzO1xyXG5cdGEuZ2V0ID0gZnVuY3Rpb24gKGEpIHtcclxuXHRcdHJldHVybiBqW2EucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpXVxyXG5cdH0sIGEuaGVscGVyID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdG9bYV0gPSBiXHJcblx0fSwgbW9kdWxlLmV4cG9ydHMgPSBhXHJcbn0oKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90bW9kanMtbG9hZGVyL3J1bnRpbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgOCAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMSAyMyAyNSAyNiAyNyAzMSAzMiAzMyAzNyAzOFxuICoqLyIsIi8v6YGu572pXHJcbmZ1bmN0aW9uIE1hc2tTaG93KCkge1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5zaG93KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1hc2tIaWRlKCkge1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbn1cclxuLy/kvKDpgJLmmL7npLrnmoTmtojmga9cclxuZnVuY3Rpb24gUG9wVGlwU2hvdyhvYmopIHtcclxuICAgICQoXCIuYWRkXCIpLmhpZGUoKTtcclxuICAgIHZhciB0aXBodG1sID0gJzxkaXYgY2xhc3M9XCJwb3AtdXAgZm9udDE0XCIgaWQ9XCJva3RpcFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj48cCBjbGFzcz1cImxpbmUxMDBcIiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiPicgKyBvYmogKyAnPC9wPjwvZGl2PjwvZGl2Pic7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5hcHBlbmQodGlwaHRtbCk7XHJcbiAgICAkKFwiI21haW4tY29udGVudC1vcmctd3JhcHBlclwiKS5hcHBlbmQodGlwaHRtbCk7XHJcbiAgICAkKFwiLnBvcC1tYXNrXCIpLnNob3coKTtcclxuICAgICQoXCIucG9wLXVwXCIpLnNob3coKTtcclxufVxyXG4vL+W8ueWHuuehruiupOahhlxyXG52YXIgT3BlbkNvbmZyaW1Qb3AgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicG9wLXVwIGZvbnQxNFwiPjxzcGFuIGNsYXNzPVwicG9wLWNsb3NlIGN1cnNvclwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwicG9wLWNvbnRlbnRcIj4nICsgb2JqICsgJzwvZGl2PjxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJoYW5kbGVcIj4gPHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ29uZnJpbVwiPuehruWumjwvc3Bhbj4gJm5ic3A7Jm5ic3A7Jm5ic3A7PHNwYW4gY2xhc3M9XCJva1wiIGlkPVwiQ2FuY2VsXCI+5Y+W5raIPC9zcGFuPiA8L2Rpdj48L2Rpdj4nO1xyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5hcHBlbmQoaHRtbCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBQb3BUaXBIaWRlKCkge1xyXG4gICAgJChcIi5wb3AtdXBcIikuaGlkZSgpO1xyXG4gICAgJChcIi5wb3AtbWFza1wiKS5oaWRlKCk7XHJcbiAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxufVxyXG4vL+makOiXj+a3u+WKoOeahOagt+W8j+W9k+W8ueWHuuahhuWSjOa3u+WKoOahhumHjeWPoOeahFxyXG5mdW5jdGlvbiBBZGRIaWRlKCkge1xyXG4gICAgJChcIi5hZGRcIikuaGlkZSgpO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydHMuTWFza1Nob3cgPSBNYXNrU2hvdztcclxuZXhwb3J0cy5NYXNrSGlkZSA9IE1hc2tIaWRlO1xyXG5leHBvcnRzLlBvcFRpcFNob3cgPSBQb3BUaXBTaG93O1xyXG5leHBvcnRzLlBvcFRpcEhpZGUgPSBQb3BUaXBIaWRlO1xyXG5leHBvcnRzLk9wZW5Db25mcmltUG9wID0gT3BlbkNvbmZyaW1Qb3A7XHJcbmV4cG9ydHMuQWRkSGlkZSA9IEFkZEhpZGU7XHJcblxyXG4vL+WkhOeQhuW8ueWHuuahhueahOmakOiXj1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuZGVsZWdhdGUoXCIucG9wLWNsb3NlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIucG9wLW1hc2tcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIucG9wLXVwXCIpLmhpZGUoKTtcclxuICAgICAgICAvL2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNtYWluLWNvbnRlbnQtd3JhcHBlclwiKS5kZWxlZ2F0ZShcIi5wb3BjbG9zZVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnBvcC1tYXNrXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmFkZFwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9PcmdUZWFjaFdvcmsvUG9wQ29tbW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDcgMTIgMTUgMTZcbiAqKi8iLCJcclxudmFyIHRwbFRhYmxlID0gcmVxdWlyZShcIk9yZ1RlYWNoV29yay9hcmVhZGVsZXRlc2MudHBsXCIpO1xyXG52YXIgcG9wID0gcmVxdWlyZShcIk9yZ1RlYWNoV29yay9Qb3BDb21tb24uanNcIik7XHJcbiByZXF1aXJlKFwidXBsb2FkL2FqYXhmaWxldXBsb2FkLmpzXCIpO1xyXG52YXIgbW9kdWxlID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvL3RvZG8g6YC76L6R5Ye95pWwXHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRCdG5zKCk7XHJcblxyXG4gICAgfSxcclxuICAgIC8v5a+56aG16Z2i55qE5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9PcmdTeXN0ZW1TZXQvT3JnU2V0L1BlcnNvbmFsU2V0R2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgLy/lkI7lpKnojrflj5bmnLrmnoRpZFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQuRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy/otYvlgLxcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2ltZzBcIikuYXR0cihcInNyY1wiLCBkYXRhLnJlc3VsdC5EYXRhLkxvZ29VcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjaW1nMVwiKS5hdHRyKFwic3JjXCIsIGRhdGEucmVzdWx0LkRhdGEuQ3ljbGVQaWMxKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2ltZzJcIikuYXR0cihcInNyY1wiLCBkYXRhLnJlc3VsdC5EYXRhLkN5Y2xlUGljMik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNpbWczXCIpLmF0dHIoXCJzcmNcIiwgZGF0YS5yZXN1bHQuRGF0YS5DeWNsZVBpYzMpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29tcGFueVBob25lXCIpLnZhbChkYXRhLnJlc3VsdC5EYXRhLkNvbXBhbnlQaG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb21wYW55U2l0ZVwiKS52YWwoZGF0YS5yZXN1bHQuRGF0YS5Db21wYW55U2l0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb21wYW55RGF5QmVnXCIpLnZhbChkYXRhLnJlc3VsdC5EYXRhLkNvbXBhbnlEYXlCZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29tcGFueURheUVuZFwiKS52YWwoZGF0YS5yZXN1bHQuRGF0YS5Db21wYW55RGF5RW5kKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2NvbW1wYW55VGltZUJlZ1wiKS52YWwoZGF0YS5yZXN1bHQuRGF0YS5Db21tcGFueVRpbWVCZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29tbXBhbnlUaW1lRW5kXCIpLnZhbChkYXRhLnJlc3VsdC5EYXRhLkNvbW1wYW55VGltZUVuZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSxcclxuICAgIGluaXRCdG5zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy90b2RvIOe7keWumuS6i+S7tlxyXG5cclxuICAgICAgICAvL+i/m+ihjOi3s+i9rFxyXG4gICAgICAgICQoJyNtYWluLWNvbnRlbnQtd3JhcHBlcicpLmRlbGVnYXRlKFwiI29yZ3NldFwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvT3JnU3lzdGVtU2V0L09yZ1NldC9PcmdTZXRcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WIoOmZpOWbvueJh1xyXG4gICAgICAgICQoXCIjbWFpbi1jb250ZW50LXdyYXBwZXJcIikuZGVsZWdhdGUoXCIuZGVsZS1pbWdcIiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBpZE51bSA9IHRoaXMuaWQucmVwbGFjZShcImRlaW1nXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB2YXIgbG9jYWxJbWcgPSBcIi4uLy4uLy4uL2J1bmRsZS9pbWcvdXBsb2FkLnBuZ1wiOyAvL+acrOWcsOWbvueJh+WxleekulxyXG4gICAgICAgICAgICAkKFwiI2ltZ1wiICsgaWROdW0pLmF0dHIoXCJzcmNcIiwgbG9jYWxJbWcpO1xyXG4gICAgICAgICAgICAkKFwiI2RlaW1nXCIgKyBpZE51bSkuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL+i/m+ihjOi3s+i9rFxyXG4gICAgICAgICQoJyNtYWluLWNvbnRlbnQtd3JhcHBlcicpLmRlbGVnYXRlKFwiI3VwbG9hZFBpYzFcIiwgXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBGaWxlVXBsb2FkKCcxJyk7XHJcbiAgICAgICAgfSkuZGVsZWdhdGUoXCIjdXBsb2FkUGljMlwiLCBcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIEZpbGVVcGxvYWQoJzInKTtcclxuICAgICAgICB9KS5kZWxlZ2F0ZShcIiN1cGxvYWRQaWMzXCIsIFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIEZpbGVVcGxvYWQoJzMnKTtcclxuICAgICAgICAgICAgfSkuZGVsZWdhdGUoXCIjdXBsb2FkUGljMFwiLCBcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBGaWxlVXBsb2FkKCcwJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn07XHJcblxyXG5cclxuLy/nu5HlrprmlbDmja5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBtb2R1bGUuaW5pdCgpO1xyXG4gICAgT3B0SW1nKCk7XHJcbiAgICBPcHRTYXZlKCk7XHJcbiAgICAvL0ZpbGVVcGxvYWQoKTtcclxuXHJcbn0pO1xyXG5leHBvcnRzLkZpbGVVcGxvYWQgPSBGaWxlVXBsb2FkO1xyXG5cclxuLy8v5L+d5a2Y5pWw5o2uXHJcbmZ1bmN0aW9uIE9wdFNhdmUoKSB7XHJcblxyXG4gICAgJChcIiNidG5TYXZlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL+e7hOijheaVsOaNru+8jOi/m+ihjOS8oOmAklxyXG4gICAgICAgIHZhciBMb2dvVXJsID0gJChcIiNpbWcwXCIpWzBdLnNyYztcclxuICAgICAgICB2YXIgQ3ljbGVQaWMxID0gJChcIiNpbWcxXCIpWzBdLnNyYztcclxuICAgICAgICB2YXIgQ3ljbGVQaWMyID0gJChcIiNpbWcyXCIpWzBdLnNyYztcclxuICAgICAgICB2YXIgQ3ljbGVQaWMzID0gJChcIiNpbWczXCIpWzBdLnNyYztcclxuICAgICAgICB2YXIgQ29tcGFueVBob25lID0gJChcIiNjb21wYW55UGhvbmVcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIENvbXBhbnlTaXRlID0gJChcIiNjb21wYW55U2l0ZVwiKS52YWwoKTtcclxuICAgICAgICB2YXIgQ29tcGFueURheUJlZyA9ICQoXCIjY29tcGFueURheUJlZ1wiKS52YWwoKTtcclxuICAgICAgICB2YXIgQ29tcGFueURheUVuZCA9ICQoXCIjY29tcGFueURheUVuZFwiKS52YWwoKTtcclxuICAgICAgICB2YXIgQ29tbXBhbnlUaW1lQmVnID0gJChcIiNjb21tcGFueVRpbWVCZWdcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIENvbW1wYW55VGltZUVuZCA9ICQoXCIjY29tbXBhbnlUaW1lRW5kXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciBvcHRpb24gPSB7fTtcclxuICAgICAgICBvcHRpb24uTG9nb1VybCA9IExvZ29Vcmw7XHJcbiAgICAgICAgb3B0aW9uLkN5Y2xlUGljMSA9IEN5Y2xlUGljMTtcclxuICAgICAgICBvcHRpb24uQ3ljbGVQaWMyID0gQ3ljbGVQaWMyO1xyXG4gICAgICAgIG9wdGlvbi5DeWNsZVBpYzMgPSBDeWNsZVBpYzM7XHJcbiAgICAgICAgb3B0aW9uLkNvbXBhbnlQaG9uZSA9IENvbXBhbnlQaG9uZTtcclxuICAgICAgICBvcHRpb24uQ29tcGFueVNpdGUgPSBDb21wYW55U2l0ZTtcclxuICAgICAgICBvcHRpb24uQ29tcGFueURheUJlZyA9IENvbXBhbnlEYXlCZWc7XHJcbiAgICAgICAgb3B0aW9uLkNvbXBhbnlEYXlFbmQgPSBDb21wYW55RGF5RW5kO1xyXG4gICAgICAgIG9wdGlvbi5Db21tcGFueVRpbWVCZWcgPSBDb21tcGFueVRpbWVCZWc7XHJcbiAgICAgICAgb3B0aW9uLkNvbW1wYW55VGltZUVuZCA9IENvbW1wYW55VGltZUVuZDtcclxuICAgICAgIFxyXG4gICAgICAgIGlmIChjaGtGb3JtKCdjb21wYW55UGhvbmUnKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm47Ly/moKHpqozlj6/ku6Xpg73lsIHoo4XliLDph4zpnaJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL09yZ1N5c3RlbVNldC9PcmdTZXQvUGVyc29uYWxTZXRTYXZlXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkob3B0aW9uKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7IC8vZGF0YS5yZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCLlpITnkIbmiJDlip9cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8kKFwiI29rdGlwXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIuYWRkbWFuXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbn1cclxuLy/lm77niYfkuIrkvKBcclxuZnVuY3Rpb24gRmlsZVVwbG9hZCh0eXBlKSB7XHJcbiAgICAkLmFqYXhGaWxlVXBsb2FkXHJcbiAgICAoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6ICcvT3JnU2V0L1VwbG9hZCcsIC8v55So5LqO5paH5Lu25LiK5Lyg55qE5pyN5Yqh5Zmo56uv6K+35rGC5Zyw5Z2AXHJcbiAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcclxuICAgICAgICAgICAgZGF0YToge30sIC8v5q2k5Y+C5pWw6Z2e5bi45Lil6LCo77yM5YaZ6ZSZ5LiA5Liq5byV5Y+36YO95LiN6KGMXHJcbiAgICAgICAgICAgIHNlY3VyZXVyaTogZmFsc2UsIC8v5LiA6Iis6K6+572u5Li6ZmFsc2VcclxuICAgICAgICAgICAgZmlsZUVsZW1lbnRJZDogJ3VwbG9hZFBpYycgKyB0eXBlLCAvL+aWh+S7tuS4iuS8oOepuumXtOeahGlk5bGe5oCnICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnSlNPTicsIC8v6L+U5Zue5YC857G75Z6LIOS4gOiIrOiuvue9ruS4umpzb25cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIC8v5pyN5Yqh5Zmo5oiQ5Yqf5ZON5bqU5aSE55CG5Ye95pWwXHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5SZXN1bHQgIT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYWxlcnQoZGF0YS5SZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlPT0wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjaW1ndGlwMFwiICkuaHRtbCgnPHAgY2xhc3M9XCJhbGVydC1lcnJvciBtYjEwIFwiPjxiPuaPkOekuu+8miDkuIrkvKDlpLHotKXvvIE8L2I+ICcgKyBkYXRhLlJlc3VsdCArICc8L3A+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNpbWd0aXAxXCIpLmh0bWwoJzxwIGNsYXNzPVwiYWxlcnQtZXJyb3IgbWIxMCBcIj48Yj7mj5DnpLrvvJog5LiK5Lyg5aSx6LSl77yBPC9iPiAnICsgZGF0YS5SZXN1bHQgKyAnPC9wPicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkZWltZ1wiICsgdHlwZSkuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJChcIiNpbWdcIiArIHR5cGUpLmF0dHIoXCJzcmNcIiwgZGF0YS5pbWdQYXRoMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChkYXRhLmVycm9yKSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBlKSAvL+acjeWKoeWZqOWTjeW6lOWksei0peWkhOeQhuWHveaVsFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgJChcIiNkZWltZ1wiICsgdHlwZSkuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vL+WKoOi9veeCueWHu+S6i+S7tlxyXG5mdW5jdGlvbiBPcHRJbWcoKSB7XHJcbiAgICBcclxuICAgICQoXCIjaW1nMFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiN1cGxvYWRQaWMwXCIpLmNsaWNrKCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjaW1nMVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiN1cGxvYWRQaWMxXCIpLmNsaWNrKCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjaW1nMlwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiN1cGxvYWRQaWMyXCIpLmNsaWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI2ltZzNcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjdXBsb2FkUGljM1wiKS5jbGljaygpO1xyXG4gICAgfSk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbi8v5qCh6aqM5piv5LiN5piv55S16K+dXHJcbmZ1bmN0aW9uIElzTW9iaWxlKG9iaikge1xyXG4gICAgcmV0dXJuICgvXjFbM3w0fDV8N3w4XVxcZHs5fSQvLnRlc3Qob2JqKSk7XHJcbn1cclxuZnVuY3Rpb24gSXNUZWwob2JqKSB7XHJcbiAgICByZXR1cm4gKC9eKFxcKFxcZHszLDR9XFwpfFxcZHszLDR9LXxcXHMpP1xcZHs3LDE0fSQvLnRlc3Qob2JqKSk7XHJcbn1cclxuLy/moKHpqozmmK/kuI3mmK/nlLXor51cclxuZnVuY3Rpb24gY2hrRm9ybShvYmopIHtcclxuICAgIHZhciB0ZWwgPSAkKFwiI1wiICsgb2JqKS52YWwoKTtcclxuICAgXHJcbiAgICBpZiAoSXNNb2JpbGUodGVsKSB8fCBJc1RlbCh0ZWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjcGhvbmV0aXBcIikuaHRtbCgnPHAgY2xhc3M9XCJhbGVydC1lcnJvciBtYjEwIFwiPjxiPuaPkOekuu+8miA8L2I+JyArICfor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7fnoIHmiJbnlLXor53lj7fnoIFcXG5cXG7kvovlpoI6MTM5MTY3NTIxMDnmiJYwNzEyLTM2MTQwNzLvvIEnICsgJzwvcD4nKTtcclxuICAgICAgICAkKFwiI2NvbXBhbnlQaG9uZVwiKS5mb2N1cygpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2pzL09yZ1N5c3RlbVNldC9QZXJTZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSA1XG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvT3JnVGVhY2hXb3JrL2FyZWFkZWxldGVzYycsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsRGF0YT0kZGF0YS5EYXRhLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRvdXQ9Jyc7JG91dCs9JyAnO1xuJGVhY2goRGF0YSxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPHNwYW4gY2xhc3M9XCJzY2huYW1lXCIgaWQ9XCJzJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLlNjaG9vbElkKTtcbiRvdXQrPSdcIj4gPGkgY2xhc3M9XCJzY2hsb2dvXCI+PC9pPiA8ZW0gY2xhc3M9XCJub3JtYWxcIj4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU2Nob29sTmFtZS5zdWJzdHJpbmcoMCwgNikpO1xuJG91dCs9JzwvZW0+IDxpIGNsYXNzPVwiZGVsZXRlc2NoXCIgaWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuU2Nob29sSWQpO1xuJG91dCs9J1wiPjwvaT4gPC9zcGFuPiAnO1xufSk7XG4kb3V0Kz0nICc7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL09yZ1RlYWNoV29yay9hcmVhZGVsZXRlc2MudHBsXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gNSAxNFxuICoqLyIsImpRdWVyeS5leHRlbmQoe1xyXG4gICAgY3JlYXRlVXBsb2FkSWZyYW1lOiBmdW5jdGlvbihpZCwgdXJpKVxyXG4gICAge1xyXG4gICAgXHRcclxuICAgICAgICAvL2NyZWF0ZSBmcmFtZVxyXG4gICAgICAgIHZhciBmcmFtZUlkID0gJ2pVcGxvYWRGcmFtZScgKyBpZDtcclxuICAgICAgICB2YXIgaWZyYW1lSHRtbCA9ICc8aWZyYW1lIGlkPVwiJyArIGZyYW1lSWQgKyAnXCIgbmFtZT1cIicgKyBmcmFtZUlkICsgJ1wiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IHRvcDotOTk5OXB4OyBsZWZ0Oi05OTk5cHhcIic7XHJcbiAgICAgICAgaWYod2luZG93LkFjdGl2ZVhPYmplY3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgdXJpPT0gJ2Jvb2xlYW4nKXtcclxuICAgICAgICAgICAgICAgIGlmcmFtZUh0bWwgKz0gJyBzcmM9XCInICsgJ2phdmFzY3JpcHQ6ZmFsc2UnICsgJ1wiJztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0eXBlb2YgdXJpPT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICAgICAgaWZyYW1lSHRtbCArPSAnIHNyYz1cIicgKyB1cmkgKyAnXCInO1xyXG5cclxuICAgICAgICAgICAgfVx0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmcmFtZUh0bWwgKz0gJyAvPic7XHJcbiAgICAgICAgalF1ZXJ5KGlmcmFtZUh0bWwpLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xyXG5cclxuICAgICAgICByZXR1cm4galF1ZXJ5KCcjJyArIGZyYW1lSWQpLmdldCgwKTtcdFx0XHRcclxuICAgIH0sXHJcbiAgICBjcmVhdGVVcGxvYWRGb3JtOiBmdW5jdGlvbihpZCxmaWxlRWxlbWVudElkLGRhdGEsZmlsZUVsZW1lbnQpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jcmVhdGUgZm9ybVx0XHJcbiAgICAgICAgdmFyIGZvcm1JZCA9ICdqVXBsb2FkRm9ybScgKyBpZDtcclxuICAgICAgICB2YXIgZmlsZUlkID0gJ2pVcGxvYWRGaWxlJyArIGlkO1xyXG4gICAgICAgIHZhciBmb3JtID0galF1ZXJ5KCc8Zm9ybSAgYWN0aW9uPVwiXCIgbWV0aG9kPVwiUE9TVFwiIG5hbWU9XCInICsgZm9ybUlkICsgJ1wiIGlkPVwiJyArIGZvcm1JZCArICdcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPjwvZm9ybT4nKTtcdFxyXG4gICAgICAgIGlmKGRhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgaW4gZGF0YSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCInICsgaSArICdcIiB2YWx1ZT1cIicgKyBkYXRhW2ldICsgJ1wiIC8+JykuYXBwZW5kVG8oZm9ybSk7XHJcbiAgICAgICAgICAgIH1cdFx0XHRcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdFx0dmFyIG9sZEVsZW1lbnQ7XHJcbiAgICAgICAgLy9cdFx0aWYoZmlsZUVsZW1lbnQgPT0gbnVsbClcclxuICAgICAgICAvL1x0XHRcdG9sZEVsZW1lbnQgPSBqUXVlcnkoJyMnICsgZmlsZUVsZW1lbnRJZCk7XHJcbiAgICAgICAgLy9cdFx0ZWxzZVxyXG4gICAgICAgIC8vXHRcdFx0b2xkRWxlbWVudCA9IGZpbGVFbGVtZW50O1xyXG4gICAgICAgIC8vXHRcdFxyXG4gICAgICAgIC8vXHRcdHZhciBuZXdFbGVtZW50ID0galF1ZXJ5KG9sZEVsZW1lbnQpLmNsb25lKCk7XHJcbiAgICAgICAgLy9cdFx0alF1ZXJ5KG9sZEVsZW1lbnQpLmF0dHIoJ2lkJywgZmlsZUlkKTtcclxuICAgICAgICAvL1x0XHRqUXVlcnkob2xkRWxlbWVudCkuYmVmb3JlKG5ld0VsZW1lbnQpO1xyXG4gICAgICAgIC8vXHRcdGpRdWVyeShvbGRFbGVtZW50KS5hcHBlbmRUbyhmb3JtKTtcclxuXHRcdFxyXG4gICAgICAgIGlmKHR5cGVvZihmaWxlRWxlbWVudElkKSA9PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgICAgIGZpbGVFbGVtZW50SWQgPSBbZmlsZUVsZW1lbnRJZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIgaSBpbiBmaWxlRWxlbWVudElkKXtcclxuICAgICAgICAgICAgdmFyIG9sZEVsZW1lbnQgPSBqUXVlcnkoJyMnICsgZmlsZUVsZW1lbnRJZFtpXSk7XHJcbiAgICAgICAgICAgIHZhciBuZXdFbGVtZW50ID0galF1ZXJ5KG9sZEVsZW1lbnQpLmNsb25lKCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShvbGRFbGVtZW50KS5hdHRyKCdpZCcsIGZpbGVJZCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShvbGRFbGVtZW50KS5iZWZvcmUobmV3RWxlbWVudCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShvbGRFbGVtZW50KS5hcHBlbmRUbyhmb3JtKTtcclxuICAgICAgICB9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcbiAgICAgICAgLy9zZXQgYXR0cmlidXRlc1xyXG4gICAgICAgIGpRdWVyeShmb3JtKS5jc3MoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XHJcbiAgICAgICAgalF1ZXJ5KGZvcm0pLmNzcygndG9wJywgJy0xMjAwcHgnKTtcclxuICAgICAgICBqUXVlcnkoZm9ybSkuY3NzKCdsZWZ0JywgJy0xMjAwcHgnKTtcclxuICAgICAgICBqUXVlcnkoZm9ybSkuYXBwZW5kVG8oJ2JvZHknKTtcdFx0XHJcbiAgICAgICAgcmV0dXJuIGZvcm07XHJcbiAgICB9LFxyXG5cclxuICAgIGFqYXhGaWxlVXBsb2FkOiBmdW5jdGlvbihzKSB7XHJcbiAgICAgICAgLy8gVE9ETyBpbnRyb2R1Y2UgZ2xvYmFsIHNldHRpbmdzLCBhbGxvd2luZyB0aGUgY2xpZW50IHRvIG1vZGlmeSB0aGVtIGZvciBhbGwgcmVxdWVzdHMsIG5vdCBvbmx5IHRpbWVvdXRcdFx0XHJcbiAgICAgICAgcyA9IGpRdWVyeS5leHRlbmQoe30sIGpRdWVyeS5hamF4U2V0dGluZ3MsIHMpO1xyXG4gICAgICAgIHZhciBpZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICAgICAgICBcclxuICAgICAgICB2YXIgZm9ybSA9IGpRdWVyeS5jcmVhdGVVcGxvYWRGb3JtKGlkLCBzLmZpbGVFbGVtZW50SWQsICh0eXBlb2Yocy5kYXRhKT09J3VuZGVmaW5lZCc/ZmFsc2U6cy5kYXRhKSxzLmZpbGVFbGVtZW50KTtcclxuICAgICAgICB2YXIgaW8gPSBqUXVlcnkuY3JlYXRlVXBsb2FkSWZyYW1lKGlkLCBzLnNlY3VyZXVyaSk7XHJcbiAgICAgICAgdmFyIGZyYW1lSWQgPSAnalVwbG9hZEZyYW1lJyArIGlkO1xyXG4gICAgICAgIHZhciBmb3JtSWQgPSAnalVwbG9hZEZvcm0nICsgaWQ7XHRcdFxyXG4gICAgICAgIC8vIFdhdGNoIGZvciBhIG5ldyBzZXQgb2YgcmVxdWVzdHNcclxuICAgICAgICBpZiAoIHMuZ2xvYmFsICYmICEgalF1ZXJ5LmFjdGl2ZSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGpRdWVyeS5ldmVudC50cmlnZ2VyKCBcImFqYXhTdGFydFwiICk7XHJcbiAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIHZhciByZXF1ZXN0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcmVxdWVzdCBvYmplY3RcclxuICAgICAgICB2YXIgeG1sID0ge30gICBcclxuICAgICAgICBpZiAoIHMuZ2xvYmFsIClcclxuICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LnRyaWdnZXIoXCJhamF4U2VuZFwiLCBbeG1sLCBzXSk7XHJcbiAgICAgICAgLy8gV2FpdCBmb3IgYSByZXNwb25zZSB0byBjb21lIGJhY2tcclxuICAgICAgICB2YXIgdXBsb2FkQ2FsbGJhY2sgPSBmdW5jdGlvbihpc1RpbWVvdXQpXHJcbiAgICAgICAge1x0XHRcdFxyXG4gICAgICAgICAgICB2YXIgaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmcmFtZUlkKTtcclxuICAgICAgICAgICAgdHJ5IFxyXG4gICAgICAgICAgICB7XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgIGlmKGlvLmNvbnRlbnRXaW5kb3cpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgeG1sLnJlc3BvbnNlVGV4dCA9IGlvLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keT9pby5jb250ZW50V2luZG93LmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MOm51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgeG1sLnJlc3BvbnNlWE1MID0gaW8uY29udGVudFdpbmRvdy5kb2N1bWVudC5YTUxEb2N1bWVudD9pby5jb250ZW50V2luZG93LmRvY3VtZW50LlhNTERvY3VtZW50OmlvLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcblx0XHRcdFx0XHQgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihpby5jb250ZW50RG9jdW1lbnQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgeG1sLnJlc3BvbnNlVGV4dCA9IGlvLmNvbnRlbnREb2N1bWVudC5kb2N1bWVudC5ib2R5P2lvLmNvbnRlbnREb2N1bWVudC5kb2N1bWVudC5ib2R5LmlubmVySFRNTDpudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHhtbC5yZXNwb25zZVhNTCA9IGlvLmNvbnRlbnREb2N1bWVudC5kb2N1bWVudC5YTUxEb2N1bWVudD9pby5jb250ZW50RG9jdW1lbnQuZG9jdW1lbnQuWE1MRG9jdW1lbnQ6aW8uY29udGVudERvY3VtZW50LmRvY3VtZW50O1xyXG4gICAgICAgICAgICAgICAgfVx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICB9Y2F0Y2goZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5LmhhbmRsZUVycm9yKHMsIHhtbCwgbnVsbCwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCB4bWwgfHwgaXNUaW1lb3V0ID09IFwidGltZW91dFwiKSBcclxuICAgICAgICAgICAge1x0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSBpc1RpbWVvdXQgIT0gXCJ0aW1lb3V0XCIgPyBcInN1Y2Nlc3NcIiA6IFwiZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bCBvciBub3Rtb2RpZmllZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RhdHVzICE9IFwiZXJyb3JcIiApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9jZXNzIHRoZSBkYXRhIChydW5zIHRoZSB4bWwgdGhyb3VnaCBodHRwRGF0YSByZWdhcmRsZXNzIG9mIGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGpRdWVyeS51cGxvYWRIdHRwRGF0YSggeG1sLCBzLmRhdGFUeXBlICk7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBhIGxvY2FsIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIGZpcmUgaXQgYW5kIHBhc3MgaXQgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzLnN1Y2Nlc3MgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zdWNjZXNzKCBkYXRhLCBzdGF0dXMgKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlIHRoZSBnbG9iYWwgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHMuZ2xvYmFsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5ldmVudC50cmlnZ2VyKCBcImFqYXhTdWNjZXNzXCIsIFt4bWwsIHNdICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5oYW5kbGVFcnJvcihzLCB4bWwsIHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IFwiZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkuaGFuZGxlRXJyb3IocywgeG1sLCBzdGF0dXMsIGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBjb21wbGV0ZWRcclxuICAgICAgICAgICAgICAgIGlmKCBzLmdsb2JhbCApXHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LnRyaWdnZXIoIFwiYWpheENvbXBsZXRlXCIsIFt4bWwsIHNdICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBnbG9iYWwgQUpBWCBjb3VudGVyXHJcbiAgICAgICAgICAgICAgICBpZiAoIHMuZ2xvYmFsICYmICEgLS1qUXVlcnkuYWN0aXZlIClcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZXZlbnQudHJpZ2dlciggXCJhamF4U3RvcFwiICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyByZXN1bHRcclxuICAgICAgICAgICAgICAgIGlmICggcy5jb21wbGV0ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcy5jb21wbGV0ZSh4bWwsIHN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGlvKS51bmJpbmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShpbykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShmb3JtKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuaGFuZGxlRXJyb3IocywgeG1sLCBudWxsLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB4bWwgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUaW1lb3V0IGNoZWNrZXJcclxuICAgICAgICBpZiAoIHMudGltZW91dCA+IDAgKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgcmVxdWVzdCBpcyBzdGlsbCBoYXBwZW5pbmdcclxuICAgICAgICAgICAgICAgIGlmKCAhcmVxdWVzdERvbmUgKSB1cGxvYWRDYWxsYmFjayggXCJ0aW1lb3V0XCIgKTtcclxuICAgICAgICAgICAgfSwgcy50aW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IFxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBmb3JtID0galF1ZXJ5KCcjJyArIGZvcm1JZCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShmb3JtKS5hdHRyKCdhY3Rpb24nLCBzLnVybCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShmb3JtKS5hdHRyKCdtZXRob2QnLCAnUE9TVCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkoZm9ybSkuYXR0cigndGFyZ2V0JywgZnJhbWVJZCk7XHJcbiAgICAgICAgICAgIGlmKGZvcm0uZW5jb2RpbmcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShmb3JtKS5hdHRyKCdlbmNvZGluZycsICdtdWx0aXBhcnQvZm9ybS1kYXRhJyk7ICAgICAgXHRcdFx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHRcclxuICAgICAgICAgICAgICAgIGpRdWVyeShmb3JtKS5hdHRyKCdlbmN0eXBlJywgJ211bHRpcGFydC9mb3JtLWRhdGEnKTtcdFx0XHRcclxuICAgICAgICAgICAgfVx0XHRcdFxyXG4gICAgICAgICAgICBqUXVlcnkoZm9ybSkuc3VibWl0KCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2goZSkgXHJcbiAgICAgICAge1x0XHRcdFxyXG4gICAgICAgICAgICBqUXVlcnkuaGFuZGxlRXJyb3IocywgeG1sLCBudWxsLCBlKTtcclxuICAgICAgICB9XHJcblx0XHRcclxuICAgICAgICBqUXVlcnkoJyMnICsgZnJhbWVJZCkubG9hZCh1cGxvYWRDYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHthYm9ydDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnIycgKyBmcmFtZUlkKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShmb3JtKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaChlKXt9XHJcbiAgICAgICAgfX07XHJcbiAgICB9LFxyXG5cclxuICAgIHVwbG9hZEh0dHBEYXRhOiBmdW5jdGlvbiggciwgdHlwZSApIHtcclxuICAgICAgICB2YXIgZGF0YSA9ICF0eXBlO1xyXG4gICAgICAgIGRhdGEgPSB0eXBlID09IFwieG1sXCIgfHwgZGF0YSA/IHIucmVzcG9uc2VYTUwgOiByLnJlc3BvbnNlVGV4dDtcclxuXHRcdFxyXG4gICAgICAgIC8vIElmIHRoZSB0eXBlIGlzIFwic2NyaXB0XCIsIGV2YWwgaXQgaW4gZ2xvYmFsIGNvbnRleHRcclxuICAgICAgICBpZiAoIHR5cGUgPT0gXCJzY3JpcHRcIiApXHJcbiAgICAgICAgICAgIGpRdWVyeS5nbG9iYWxFdmFsKCBkYXRhICk7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBKYXZhU2NyaXB0IG9iamVjdCwgaWYgSlNPTiBpcyB1c2VkLlxyXG4gICAgICAgIGlmICggdHlwZSA9PSBcImpzb25cIikgXHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vL+S7peS4i+S4uuaWsOWinuS7o+eggS8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICBkYXRhID0gci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gZGF0YS5pbmRleE9mKFwiPlwiKTtcclxuICAgICAgICBpZihzdGFydCAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgZW5kID0gZGF0YS5pbmRleE9mKFwiPFwiLCBzdGFydCArIDEpO1xyXG4gICAgICAgICAgICBpZihlbmQgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLnN1YnN0cmluZyhzdGFydCArIDEsIGVuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8vLy8vLy8vLy/ku6XkuIrkuLrmlrDlop7ku6PnoIEvLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBldmFsKCBcImRhdGEgPSBcIiArIGRhdGEgKTtcclxuICAgICAgICAvLyBldmFsdWF0ZSBzY3JpcHRzIHdpdGhpbiBodG1sXHJcbiAgICAgICAgaWYgKCB0eXBlID09IFwiaHRtbFwiIClcclxuICAgICAgICAgICAgalF1ZXJ5KFwiPGRpdj5cIikuaHRtbChkYXRhKS5ldmFsU2NyaXB0cygpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcblx0XHJcbiAgICBoYW5kbGVFcnJvcjogZnVuY3Rpb24oIHMsIHhtbCwgc3RhdHVzLCBlICkge1xyXG4gICAgICAgIC8vIElmIGEgbG9jYWwgY2FsbGJhY2sgd2FzIHNwZWNpZmllZCwgZmlyZSBpdFxyXG4gICAgICAgIGlmICggcy5lcnJvciApXHJcbiAgICAgICAgICAgIHMuZXJyb3IoIHhtbCwgc3RhdHVzLCBlICk7XHJcblxyXG4gICAgICAgIC8vIEZpcmUgdGhlIGdsb2JhbCBjYWxsYmFja1xyXG4gICAgICAgIGlmICggcy5nbG9iYWwgKVxyXG4gICAgICAgICAgICBqUXVlcnkuZXZlbnQudHJpZ2dlciggXCJhamF4RXJyb3JcIiwgW3htbCwgcywgZV0gKTtcclxuICAgIH1cclxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9kZXAvdXBsb2FkL2FqYXhmaWxldXBsb2FkLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gNVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=