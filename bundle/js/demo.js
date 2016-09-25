webpackJsonp([23,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(49);


/***/ },

/***/ 3:
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

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by humorHan on 2016/6/17.
	 */
	console.log('demo.js');
	var demoTpl = __webpack_require__(50);
	
	__webpack_require__(51);
	var calender = __webpack_require__(55);
	
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

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/demo/test',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$each($data,function($value,$index){
	$out+=' ';
	$out+=$escape($value);
	$out+=' ';
	});
	return new String($out);
	});

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(54)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./calender-plugin.min.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./calender-plugin.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(53)();
	// imports
	
	
	// module
	exports.push([module.id, ".flatpickr-input,.flatpickr-wrapper input{z-index:1;cursor:pointer}.flatpickr-wrapper{position:absolute;display:inline-block}.flatpickr-wrapper.inline,.flatpickr-wrapper.inline .flatpickr-calendar,.flatpickr-wrapper.static{position:relative}.flatpickr-wrapper.static .flatpickr-calendar{position:absolute}.flatpickr-wrapper.inline .flatpickr-calendar,.flatpickr-wrapper.open .flatpickr-calendar{z-index:99999;visibility:visible}.flatpickr-calendar{background:#fff;border:1px solid #ddd;font-size:90%;border-radius:3px;position:absolute;top:100%;left:0;visibility:hidden;width:256px}.flatpickr-calendar.hasWeeks{width:288px}.flatpickr-calendar.hasWeeks .flatpickr-weekdays span{width:12.5%}.flatpickr-calendar:after,.flatpickr-calendar:before{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:after,.flatpickr-calendar.arrowTop:before{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#ddd}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:after,.flatpickr-calendar.arrowBottom:before{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#ddd}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-month{background:0 0;color:#000;padding:4px 5px 2px;text-align:center;position:relative}.flatpickr-next-month,.flatpickr-prev-month{text-decoration:none;cursor:pointer;position:absolute;top:.5rem}.flatpickr-next-month i,.flatpickr-prev-month i{position:relative}.flatpickr-next-month:hover,.flatpickr-prev-month:hover{color:#f99595}.flatpickr-prev-month{float:left;left:.5rem}.flatpickr-next-month{float:right;right:.5rem}.flatpickr-current-month{font-size:135%;font-weight:300;color:rgba(0,0,0,.7);display:inline-block}.flatpickr-current-month .cur_month{font-weight:700;color:#000}.flatpickr-current-month .cur_year{background:0 0;box-sizing:border-box;color:inherit;cursor:default;padding:0 0 0 2px;margin:0;width:3.15em;display:inline;font-size:inherit;font-weight:300;line-height:inherit;height:initial;border:0}.flatpickr-current-month .cur_year:hover{background:rgba(0,0,0,.05)}.flatpickr-weekdays{font-size:90%;background:0 0;padding:2px 0 4px;text-align:center}.flatpickr-weekdays span{opacity:.54;text-align:center;display:inline-block;width:14.28%;font-weight:700}.flatpickr-weeks{width:32px;float:left}.flatpickr-days{padding-top:1px;outline:0}.flatpickr-days span,.flatpickr-weeks span{background:0 0;border:1px solid transparent;border-radius:150px;box-sizing:border-box;color:#393939;cursor:pointer;display:inline-block;font-weight:300;width:34px;height:34px;line-height:33px;margin:0 1px 1px;text-align:center}.flatpickr-days span.disabled,.flatpickr-days span.disabled:hover,.flatpickr-days span.nextMonthDay,.flatpickr-days span.prevMonthDay,.flatpickr-weeks span.disabled,.flatpickr-weeks span.disabled:hover,.flatpickr-weeks span.nextMonthDay,.flatpickr-weeks span.prevMonthDay{color:rgba(57,57,57,.3);background:0 0;border-color:transparent;cursor:default}.flatpickr-days span.nextMonthDay:focus,.flatpickr-days span.nextMonthDay:hover,.flatpickr-days span.prevMonthDay:focus,.flatpickr-days span.prevMonthDay:hover,.flatpickr-days span:focus,.flatpickr-days span:hover,.flatpickr-weeks span.nextMonthDay:focus,.flatpickr-weeks span.nextMonthDay:hover,.flatpickr-weeks span.prevMonthDay:focus,.flatpickr-weeks span.prevMonthDay:hover,.flatpickr-weeks span:focus,.flatpickr-weeks span:hover{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-days span.today,.flatpickr-weeks span.today{border-color:#f99595}.flatpickr-days span.today:focus,.flatpickr-days span.today:hover,.flatpickr-weeks span.today:focus,.flatpickr-weeks span.today:hover{border-color:#f99595;background:#f99595;color:#fff}.flatpickr-days span.selected,.flatpickr-days span.selected:focus,.flatpickr-days span.selected:hover,.flatpickr-weeks span.selected,.flatpickr-weeks span.selected:focus,.flatpickr-weeks span.selected:hover{background:#446cb3;color:#fff;border-color:#446cb3}.flatpickr-am-pm,.flatpickr-time input[type=number],.flatpickr-time-separator{height:38px;display:inline-block;line-height:38px;color:#393939}.flatpickr-time{overflow:auto;text-align:center;border-top:0;outline:0}.flatpickr-time input[type=number]{background:0 0;-webkit-appearance:none;-moz-appearance:textfield;box-shadow:none;border:0;border-radius:0;width:33%;min-width:33%;text-align:center;margin:0;padding:0;cursor:pointer;font-weight:700}.flatpickr-am-pm:focus,.flatpickr-am-pm:hover,.flatpickr-time input[type=number]:focus,.flatpickr-time input[type=number]:hover{background:#f0f0f0}.flatpickr-time input[type=number].flatpickr-minute{width:26%;font-weight:300}.flatpickr-time input[type=number].flatpickr-second{font-weight:300}.flatpickr-time input[type=number]:focus{outline:0;border:0}.flatpickr-time.has-seconds input[type=number]{width:25%;min-width:25%}.flatpickr-days+.flatpickr-time{border-top:1px solid #ddd}.flatpickr-am-pm{outline:0;width:21%;padding:0 2%;cursor:pointer;text-align:left;font-weight:300}@media all and (-ms-high-contrast:none){.flatpickr-month{padding:0}}", ""]);
	
	// exports


/***/ },

/***/ 53:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var flatpickr = function flatpickr(selector, config) {
		var elements = void 0;
	
		var createInstance = function createInstance(element) {
			if (element._flatpickr) {
				element._flatpickr.destroy();
			}
	
			element._flatpickr = new flatpickr.init(element, config);
			return element._flatpickr;
		};
	
		if (selector.nodeName) {
			return createInstance(selector);
		}
		/*
	 Utilize the performance of native getters if applicable
	 https://jsperf.com/getelementsbyclassname-vs-queryselectorall/18
	 https://jsperf.com/jquery-vs-javascript-performance-comparison/22
	 */
		else if (/^#[a-zA-Z0-9\-_]*$/.test(selector)) {
				return createInstance(document.getElementById(selector.slice(1)));
			} else if (/^\.[a-zA-Z0-9\-_]*$/.test(selector)) {
				elements = document.getElementsByClassName(selector.slice(1));
			} else {
				elements = document.querySelectorAll(selector);
			}
	
		var instances = [];
	
		for (var i = 0; i < elements.length; i++) {
			instances.push(createInstance(elements[i]));
		}
	
		if (instances.length === 1) {
			return instances[0];
		}
	
		return {
			calendars: instances,
			byID: function byID(id) {
				return document.getElementById(id)._flatpickr;
			}
		};
	};
	
	/**
	 * @constructor
	 */
	flatpickr.init = function (element, instanceConfig) {
		function createElement(tag, className, content) {
			var newElement = document.createElement(tag);
	
			if (content) {
				newElement.textContent = content;
			}
	
			if (className) {
				newElement.className = className;
			}
	
			return newElement;
		}
	
		var debounce = function debounce(func, wait, immediate) {
			var timeout = void 0;
			return function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
	
				var context = this;
	
				var later = function later() {
					timeout = null;
					if (!immediate) {
						func.apply(context, args);
					}
				};
	
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (immediate && !timeout) {
					func.apply(context, args);
				}
			};
		};
	
		// functions
		var self = this;
		var parseConfig = void 0,
		    init = void 0,
		    wrap = void 0,
		    uDate = void 0,
		    equalDates = void 0,
		    pad = void 0,
		    monthToStr = void 0,
		    isEnabled = void 0,
		    buildMonthNavigation = void 0,
		    buildWeekdays = void 0,
		    buildCalendar = void 0,
		    buildDays = void 0,
		    buildWeeks = void 0,
		    buildTime = void 0,
		    timeWrapper = void 0,
		    yearScroll = void 0,
		    updateValue = void 0,
		    amPMToggle = void 0,
		    onKeyDown = void 0,
		    onResize = void 0,
		    updateNavigationCurrentMonth = void 0,
		    handleYearChange = void 0,
		    changeMonth = void 0,
		    getDaysinMonth = void 0,
		    documentClick = void 0,
		    selectDate = void 0,
		    getRandomCalendarIdStr = void 0,
		    bind = void 0,
		    triggerChange = void 0;
	
		// elements & variables
		var calendarContainer = void 0,
		    weekdayContainer = void 0,
		    timeContainer = void 0,
		    navigationCurrentMonth = void 0,
		    monthsNav = void 0,
		    prevMonthNav = void 0,
		    currentYearElement = void 0,
		    currentMonthElement = void 0,
		    nextMonthNav = void 0,
		    calendar = void 0,
		    weekNumbers = void 0,
		    now = new Date(),
		    wrapperElement = void 0,
		    clickEvt = void 0;
	
		self.formats = {
			// weekday name, short, e.g. Thu
			D: function D() {
				return self.l10n.weekdays.shorthand[self.formats.w()];
			},
	
			// full month name e.g. January
			F: function F() {
				return monthToStr(self.formats.n() - 1, false);
			},
	
			// hours with leading zero e.g. 03
			H: function H() {
				return pad(self.selectedDateObj.getHours());
			},
	
			// day (1-30) with ordinal suffix e.g. 1st, 2nd
			J: function J() {
				return self.formats.j() + self.l10n.ordinal(self.formats.j());
			},
	
			// AM/PM
			K: function K() {
				return self.selectedDateObj.getHours() > 11 ? "PM" : "AM";
			},
	
			// shorthand month e.g. Jan, Sep, Oct, etc
			M: function M() {
				return monthToStr(self.formats.n() - 1, true);
			},
	
			// seconds 00-59
			S: function S() {
				return pad(self.selectedDateObj.getSeconds());
			},
	
			// unix timestamp
			U: function U() {
				return self.selectedDateObj.getTime() / 1000;
			},
	
			// full year e.g. 2016
			Y: function Y() {
				return self.selectedDateObj.getFullYear();
			},
	
			// day in month, padded (01-30)
			d: function d() {
				return pad(self.formats.j());
			},
	
			// hour from 1-12 (am/pm)
			h: function h() {
				return self.selectedDateObj.getHours() % 12 ? self.selectedDateObj.getHours() % 12 : 12;
			},
	
			// minutes, padded with leading zero e.g. 09
			i: function i() {
				return pad(self.selectedDateObj.getMinutes());
			},
	
			// day in month (1-30)
			j: function j() {
				return self.selectedDateObj.getDate();
			},
	
			// weekday name, full, e.g. Thursday
			l: function l() {
				return self.l10n.weekdays.longhand[self.formats.w()];
			},
	
			// padded month number (01-12)
			m: function m() {
				return pad(self.formats.n());
			},
	
			// the month number (1-12)
			n: function n() {
				return self.selectedDateObj.getMonth() + 1;
			},
	
			// seconds 0-59
			s: function s() {
				return self.selectedDateObj.getSeconds();
			},
	
			// number of the day of the week
			w: function w() {
				return self.selectedDateObj.getDay();
			},
	
			// last two digits of year e.g. 16 for 2016
			y: function y() {
				return String(self.formats.Y()).substring(2);
			}
		};
	
		self.defaultConfig = {
			/* if true, dates will be parsed, formatted, and displayed in UTC.
	  preloading date strings w/ timezones is recommended but not necessary */
			utc: false,
	
			// wrap: see https://chmln.github.io/flatpickr/#strap
			wrap: false,
	
			// enables week numbers
			weekNumbers: false,
	
			allowInput: false,
	
			/*
	  	clicking on input opens the date(time)picker.
	  	disable if you wish to open the calendar manually with .open()
	  */
			clickOpens: true,
	
			// display time picker in 24 hour mode
			time_24hr: false,
	
			// enables the time picker functionality
			enableTime: false,
	
			// noCalendar: true will hide the calendar. use for a time picker along w/ enableTime
			noCalendar: false,
	
			// more date format chars at https://chmln.github.io/flatpickr/#dateformat
			dateFormat: "Y-m-d",
	
			// altInput - see https://chmln.github.io/flatpickr/#altinput
			altInput: false,
	
			// the created altInput element will have this class.
			altInputClass: "",
	
			// same as dateFormat, but for altInput
			altFormat: "F j, Y", // defaults to e.g. June 10, 2016
	
			// defaultDate - either a datestring or a date object. used for datetimepicker"s initial value
			defaultDate: null,
	
			// the minimum date that user can pick (inclusive)
			minDate: null,
	
			// the maximum date that user can pick (inclusive)
			maxDate: null,
	
			// dateparser that transforms a given string to a date object
			parseDate: null,
	
			// see https://chmln.github.io/flatpickr/#disable
			enable: [],
	
			// see https://chmln.github.io/flatpickr/#disable
			disable: [],
	
			// display the short version of month names - e.g. Sep instead of September
			shorthandCurrentMonth: false,
	
			// displays calendar inline. see https://chmln.github.io/flatpickr/#inline-calendar
			inline: false,
	
			// position calendar inside wrapper and next to the input element
			// leave at false unless you know what you"re doing
			static: false,
	
			// code for previous/next icons. this is where you put your custom icon code e.g. fontawesome
			prevArrow: "&lt;",
			nextArrow: "&gt;",
	
			// enables seconds in the time picker
			enableSeconds: false,
	
			// step size used when scrolling/incrementing the hour element
			hourIncrement: 1,
	
			// step size used when scrolling/incrementing the minute element
			minuteIncrement: 5,
	
			// onChange callback when user selects a date or time
			onChange: null, // function (dateObj, dateStr) {}
	
			// called every time calendar is opened
			onOpen: null, // function (dateObj, dateStr) {}
	
			// called every time calendar is closed
			onClose: null, // function (dateObj, dateStr) {}
	
			onValueUpdate: null
		};
	
		init = function init() {
			instanceConfig = instanceConfig || {};
	
			self.element = element;
	
			parseConfig();
	
			self.input = self.config.wrap ? element.querySelector("[data-input]") : element;
			self.input.classList.add("flatpickr-input");
	
			if (self.config.defaultDate) {
				self.config.defaultDate = uDate(self.config.defaultDate);
			}
	
			if (self.input.value || self.config.defaultDate) {
				self.selectedDateObj = uDate(self.config.defaultDate || self.input.value);
			}
	
			wrap();
			buildCalendar();
			bind();
	
			self.uDate = uDate;
			self.jumpToDate();
			updateValue();
		};
	
		parseConfig = function parseConfig() {
			self.config = {};
	
			Object.keys(self.defaultConfig).forEach(function (key) {
				if (instanceConfig.hasOwnProperty(key)) {
					self.config[key] = instanceConfig[key];
				} else if (self.element.dataset && self.element.dataset.hasOwnProperty(key.toLowerCase())) {
					self.config[key] = self.element.dataset[key.toLowerCase()];
				} else if (!self.element.dataset && self.element.hasAttribute("data-" + key)) {
					self.config[key] = self.element.getAttribute("data-" + key);
				} else {
					self.config[key] = flatpickr.init.prototype.defaultConfig[key] || self.defaultConfig[key];
				}
	
				if (typeof self.defaultConfig[key] === "boolean") {
					self.config[key] = self.config[key] === true || self.config[key] === "" || self.config[key] === "true";
				}
	
				if (key === "enableTime" && self.config[key]) {
					self.defaultConfig.dateFormat = !self.config.time_24hr ? "Y-m-d h:i K" : "Y-m-d H:i";
					self.defaultConfig.altFormat = !self.config.time_24hr ? "F j Y, h:i K" : "F j, Y H:i";
				} else if (key === "noCalendar" && self.config[key]) {
					self.defaultConfig.dateFormat = "h:i K";
					self.defaultConfig.altFormat = "h:i K";
				}
			});
		};
	
		getRandomCalendarIdStr = function getRandomCalendarIdStr() {
			var randNum = void 0,
			    idStr = void 0;
			do {
				randNum = Math.round(Math.random() * Math.pow(10, 10));
				idStr = "flatpickr-" + randNum;
			} while (document.getElementById(idStr) !== null);
	
			return idStr;
		};
	
		uDate = function uDate(date, timeless) {
			timeless = timeless || false;
	
			if (date === "today") {
				date = new Date();
				timeless = true;
			} else if (typeof date === "string") {
				date = date.trim();
	
				if (self.config.parseDate) {
					date = self.config.parseDate(date);
				} else if (/^\d\d\d\d\-\d{1,2}\-\d\d$/.test(date)) {
					// this utc datestring gets parsed, but incorrectly by Date.parse
					date = new Date(date.replace(/(\d)-(\d)/g, "$1/$2"));
				} else if (Date.parse(date)) {
					date = new Date(date);
				} else if (/^\d\d\d\d\-\d\d\-\d\d/.test(date)) {
					// disable special utc datestring
					date = new Date(date.replace(/(\d)-(\d)/g, "$1/$2"));
				} else if (/^(\d?\d):(\d\d)/.test(date)) {
					// time-only picker
					var matches = date.match(/^(\d?\d):(\d\d)(:(\d\d))?/),
					    seconds = matches[4] !== undefined ? matches[4] : 0;
	
					date = new Date();
					date.setHours(matches[1], matches[2], seconds, 0);
				} else {
					console.error("flatpickr: invalid date string " + date);
					console.info(self.element);
				}
			}
	
			if (!(date instanceof Date) || !date.getTime()) {
				return null;
			}
	
			if (self.config.utc && !date.fp_isUTC) {
				date = date.fp_toUTC();
			}
	
			if (timeless) {
				date.setHours(0, 0, 0, 0);
			}
	
			return date;
		};
	
		equalDates = function equalDates(date1, date2) {
			return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
		};
	
		wrap = function wrap() {
			wrapperElement = createElement("div", "flatpickr-wrapper");
	
			if (self.config.inline || self.config.static) {
				// Wrap input and place calendar underneath
				self.element.parentNode.insertBefore(wrapperElement, self.element);
				wrapperElement.appendChild(self.element);
	
				wrapperElement.classList.add(self.config.inline ? "inline" : "static");
			} else {
				// Insert at bottom of BODY tag to display outside
				// of relative positioned elements with css "overflow: hidden;"
				// property set.
				document.body.appendChild(wrapperElement);
			}
	
			if (self.config.altInput) {
				// replicate self.element
				self.altInput = createElement(self.input.nodeName, self.config.altInputClass + " flatpickr-input");
				self.altInput.placeholder = self.input.placeholder;
				self.altInput.type = "text";
	
				self.input.type = "hidden";
				self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
			}
		};
	
		getDaysinMonth = function getDaysinMonth() {
			var month = arguments.length <= 0 || arguments[0] === undefined ? self.currentMonth : arguments[0];
	
			var yr = self.currentYear;
	
			if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) {
				return 29;
			}
	
			return self.l10n.daysInMonth[month];
		};
	
		updateValue = function updateValue(e) {
			if (self.config.noCalendar && !self.selectedDateObj) {
				// picking time only and method triggered from picker
				self.selectedDateObj = new Date();
			} else if (!self.selectedDateObj) {
				return;
			}
	
			if (e) {
				e.target.blur();
			}
	
			var timeHasChanged = void 0;
	
			if (self.config.enableTime) {
				var previousTimestamp = self.selectedDateObj.getTime();
	
				// update time
				var hours = parseInt(self.hourElement.value, 10) || 0,
				    seconds = void 0;
	
				var minutes = (60 + (parseInt(self.minuteElement.value, 10) || 0)) % 60;
	
				if (self.config.enableSeconds) {
					seconds = (60 + parseInt(self.secondElement.value, 10) || 0) % 60;
				}
	
				if (!self.config.time_24hr) {
					// the real number of hours for the date object
					hours = hours % 12 + 12 * (self.amPM.innerHTML === "PM");
				}
	
				self.selectedDateObj.setHours(hours, minutes, seconds === undefined ? self.selectedDateObj.getSeconds() : seconds);
	
				self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (hours % 12 === 0) : hours);
				self.minuteElement.value = pad(minutes);
	
				if (seconds !== undefined) {
					self.secondElement.value = pad(seconds);
				}
	
				timeHasChanged = self.selectedDateObj.getTime() !== previousTimestamp;
			}
	
			self.input.value = self.formatDate(self.config.dateFormat);
	
			if (self.altInput) {
				self.altInput.value = self.formatDate(self.config.altFormat);
			}
	
			if (e && (timeHasChanged || e.target.classList.contains("flatpickr-day"))) {
				triggerChange();
			}
	
			if (self.config.onValueUpdate) {
				self.config.onValueUpdate(self.selectedDateObj, self.input.value);
			}
		};
	
		pad = function pad(num) {
			return ("0" + num).slice(-2);
		};
	
		self.formatDate = function (dateFormat) {
			var formattedDate = "";
			var formatPieces = dateFormat.split("");
	
			for (var i = 0; i < formatPieces.length; i++) {
				var c = formatPieces[i];
				if (self.formats.hasOwnProperty(c) && formatPieces[i - 1] !== "\\") {
					formattedDate += self.formats[c]();
				} else if (c !== "\\") {
					formattedDate += c;
				}
			}
	
			return formattedDate;
		};
	
		monthToStr = function monthToStr(date, shorthand) {
			if (shorthand || self.config.shorthandCurrentMonth) {
				return self.l10n.months.shorthand[date];
			}
	
			return self.l10n.months.longhand[date];
		};
	
		isEnabled = function isEnabled(dateToCheck) {
			if (self.config.minDate && dateToCheck < self.config.minDate || self.config.maxDate && dateToCheck > self.config.maxDate) {
				return false;
			}
	
			dateToCheck = uDate(dateToCheck, true); // timeless
	
			var bool = self.config.enable.length > 0,
			    array = bool ? self.config.enable : self.config.disable;
	
			var d = void 0;
	
			for (var i = 0; i < array.length; i++) {
				d = array[i];
	
				if (d instanceof Function && d(dateToCheck)) {
					// disabled by function
					return bool;
				} else if ( // disabled weekday
				typeof d === "string" && /^wkd/.test(d) && dateToCheck.getDay() === (parseInt(d.slice(-1), 10) + self.l10n.firstDayOfWeek - 1) % 7) {
					return bool;
				} else if ((d instanceof Date || typeof d === "string" && !/^wkd/.test(d)) && uDate(d, true).getTime() === dateToCheck.getTime()) {
					// disabled by date string
					return bool;
				} else if ( // disabled by range
				(typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && d.hasOwnProperty("from") && dateToCheck >= uDate(d.from) && dateToCheck <= uDate(d.to)) {
					return bool;
				}
			}
	
			return !bool;
		};
	
		yearScroll = function yearScroll(event) {
			event.preventDefault();
	
			var delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.deltaY));
			self.currentYear = event.target.value = parseInt(event.target.value, 10) + delta;
			self.redraw();
		};
	
		timeWrapper = function timeWrapper(e) {
			e.preventDefault();
	
			var min = parseInt(e.target.min, 10),
			    max = parseInt(e.target.max, 10),
			    step = parseInt(e.target.step, 10),
			    value = parseInt(e.target.value, 10);
	
			var newValue = value;
	
			if (e.type === "wheel") {
				newValue = value + step * Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));
			}
	
			if (newValue <= min) {
				newValue = max - step;
			} else if (newValue >= max) {
				newValue = min + step;
			}
	
			e.target.value = pad(newValue);
		};
	
		updateNavigationCurrentMonth = function updateNavigationCurrentMonth() {
			currentMonthElement.textContent = monthToStr(self.currentMonth) + " ";
			currentYearElement.value = self.currentYear;
		};
	
		handleYearChange = function handleYearChange() {
			if (self.currentMonth < 0 || self.currentMonth > 11) {
				self.currentYear += self.currentMonth % 11;
				self.currentMonth = (self.currentMonth + 12) % 12;
			}
		};
	
		documentClick = function documentClick(e) {
			var isCalendarElement = wrapperElement.contains(e.target),
			    isInput = self.element.contains(e.target) || e.target === self.altInput;
	
			if (self.isOpen && !isCalendarElement && !isInput) {
				self.close();
			}
		};
	
		changeMonth = function changeMonth(offset) {
			self.currentMonth += offset;
	
			handleYearChange();
			updateNavigationCurrentMonth();
			buildDays();
			(self.config.noCalendar ? timeContainer : calendar).focus();
		};
	
		selectDate = function selectDate(e) {
			e.preventDefault();
			e.stopPropagation();
	
			if (self.config.allowInput && e.target === (self.altInput || self.input) && e.which === 13) {
				self.setDate((self.altInput || self.input).value);
				self.redraw();
			} else if (e.target.classList.contains("flatpickr-day")) {
				var isPrevMonthDay = e.target.classList.contains("prevMonthDay"),
				    isNextMonthDay = e.target.classList.contains("nextMonthDay"),
				    monthNum = self.currentMonth - isPrevMonthDay + isNextMonthDay;
	
				if (isPrevMonthDay || isNextMonthDay) {
					changeMonth(+isNextMonthDay - isPrevMonthDay);
				}
	
				self.selectedDateObj = new Date(self.currentYear, monthNum, e.target.innerHTML);
	
				updateValue(e);
				buildDays();
			}
		};
	
		buildCalendar = function buildCalendar() {
			calendarContainer = createElement("div", "flatpickr-calendar");
			calendarContainer.id = getRandomCalendarIdStr();
	
			calendar = createElement("div", "flatpickr-days");
			calendar.tabIndex = -1;
	
			if (!self.config.noCalendar) {
				buildMonthNavigation();
				buildWeekdays();
	
				if (self.config.weekNumbers) {
					buildWeeks();
				}
	
				buildDays();
	
				calendarContainer.appendChild(calendar);
			}
	
			wrapperElement.appendChild(calendarContainer);
	
			if (self.config.enableTime) {
				buildTime();
			}
		};
	
		buildMonthNavigation = function buildMonthNavigation() {
			monthsNav = createElement("div", "flatpickr-month");
	
			prevMonthNav = createElement("span", "flatpickr-prev-month");
			prevMonthNav.innerHTML = self.config.prevArrow;
	
			currentMonthElement = createElement("span", "cur_month");
	
			currentYearElement = createElement("input", "cur_year");
			currentYearElement.type = "number";
			currentYearElement.title = self.l10n.scrollTitle;
	
			nextMonthNav = createElement("span", "flatpickr-next-month");
			nextMonthNav.innerHTML = self.config.nextArrow;
	
			navigationCurrentMonth = createElement("span", "flatpickr-current-month");
			navigationCurrentMonth.appendChild(currentMonthElement);
			navigationCurrentMonth.appendChild(currentYearElement);
	
			monthsNav.appendChild(prevMonthNav);
			monthsNav.appendChild(navigationCurrentMonth);
			monthsNav.appendChild(nextMonthNav);
	
			calendarContainer.appendChild(monthsNav);
			updateNavigationCurrentMonth();
		};
	
		buildWeekdays = function buildWeekdays() {
			weekdayContainer = createElement("div", "flatpickr-weekdays");
			var firstDayOfWeek = self.l10n.firstDayOfWeek;
	
			var weekdays = self.l10n.weekdays.shorthand.slice();
	
			if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
				weekdays = [].concat(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
			}
	
			if (self.config.weekNumbers) {
				weekdayContainer.innerHTML = "<span>" + self.l10n.weekAbbreviation + "</span>";
			}
	
			weekdayContainer.innerHTML += "<span>" + weekdays.join("</span><span>") + "</span>";
	
			calendarContainer.appendChild(weekdayContainer);
		};
	
		buildWeeks = function buildWeeks() {
			calendarContainer.classList.add("hasWeeks");
	
			weekNumbers = createElement("div", "flatpickr-weeks");
			calendarContainer.appendChild(weekNumbers);
		};
	
		buildDays = function buildDays() {
			var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7,
			    daysInMonth = getDaysinMonth(),
			    prevMonthDays = getDaysinMonth((self.currentMonth - 1 + 12) % 12),
			    days = document.createDocumentFragment();
	
			var dayNumber = prevMonthDays + 1 - firstOfMonth,
			    currentDate = void 0,
			    dateIsDisabled = void 0;
	
			if (self.config.weekNumbers) {
				weekNumbers.innerHTML = "";
			}
	
			calendar.innerHTML = "";
	
			self.config.minDate = uDate(self.config.minDate, true);
			self.config.maxDate = uDate(self.config.maxDate, true);
	
			// prepend days from the ending of previous month
			for (; dayNumber <= prevMonthDays; dayNumber++) {
				var curDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber, 0, 0, 0, 0, 0),
				    dateIsEnabled = isEnabled(curDate),
				    dayElem = createElement("span", dateIsEnabled ? "flatpickr-day prevMonthDay" : "disabled", dayNumber);
	
				if (dateIsEnabled) {
					dayElem.tabIndex = 0;
				}
	
				days.appendChild(dayElem);
			}
	
			// Start at 1 since there is no 0th day
			for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
				currentDate = new Date(self.currentYear, self.currentMonth, dayNumber, 0, 0, 0, 0, 0);
	
				if (self.config.weekNumbers && dayNumber % 7 === 1) {
					weekNumbers.appendChild(createElement("span", "disabled flatpickr-day", currentDate.fp_getWeek()));
				}
	
				dateIsDisabled = !isEnabled(currentDate);
	
				var dayElement = createElement("span", dateIsDisabled ? "disabled" : "flatpickr-day", dayNumber);
	
				if (!dateIsDisabled) {
					dayElement.tabIndex = 0;
	
					if (equalDates(currentDate, now)) {
						dayElement.classList.add("today");
					}
	
					if (self.selectedDateObj && equalDates(currentDate, self.selectedDateObj)) {
						dayElement.classList.add("selected");
					}
				}
	
				days.appendChild(dayElement);
			}
	
			// append days from the next month
			for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++) {
				var _curDate = new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth, 0, 0, 0, 0, 0),
				    _dateIsEnabled = isEnabled(_curDate),
				    _dayElement = createElement("span", _dateIsEnabled ? "nextMonthDay flatpickr-day" : "disabled", dayNum % daysInMonth);
	
				if (self.config.weekNumbers && dayNum % 7 === 1) {
					weekNumbers.appendChild(createElement("span", "disabled", _curDate.fp_getWeek()));
				}
	
				if (_dateIsEnabled) {
					_dayElement.tabIndex = 0;
				}
	
				days.appendChild(_dayElement);
			}
	
			calendar.appendChild(days);
		};
	
		buildTime = function buildTime() {
			timeContainer = createElement("div", "flatpickr-time");
			timeContainer.tabIndex = -1;
			var separator = createElement("span", "flatpickr-time-separator", ":");
	
			self.hourElement = createElement("input", "flatpickr-hour");
			self.minuteElement = createElement("input", "flatpickr-minute");
	
			self.hourElement.tabIndex = self.minuteElement.tabIndex = 0;
			self.hourElement.type = self.minuteElement.type = "number";
	
			self.hourElement.value = self.selectedDateObj ? pad(self.selectedDateObj.getHours()) : 12;
	
			self.minuteElement.value = self.selectedDateObj ? pad(self.selectedDateObj.getMinutes()) : "00";
	
			self.hourElement.step = self.config.hourIncrement;
			self.minuteElement.step = self.config.minuteIncrement;
	
			self.hourElement.min = -self.config.time_24hr;
			self.hourElement.max = self.config.time_24hr ? 24 : 13;
	
			self.minuteElement.min = -self.minuteElement.step;
			self.minuteElement.max = 60;
	
			self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;
	
			timeContainer.appendChild(self.hourElement);
			timeContainer.appendChild(separator);
			timeContainer.appendChild(self.minuteElement);
	
			if (self.config.enableSeconds) {
				timeContainer.classList.add("has-seconds");
	
				self.secondElement = createElement("input", "flatpickr-second");
				self.secondElement.type = "number";
				self.secondElement.value = self.selectedDateObj ? pad(self.selectedDateObj.getSeconds()) : "00";
	
				self.secondElement.step = self.minuteElement.step;
				self.secondElement.min = self.minuteElement.min;
				self.secondElement.max = self.minuteElement.max;
	
				timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
				timeContainer.appendChild(self.secondElement);
			}
	
			if (!self.config.time_24hr) {
				// add self.amPM if appropriate
				self.amPM = createElement("span", "flatpickr-am-pm", ["AM", "PM"][self.hourElement.value > 11 | 0]);
				self.amPM.title = self.l10n.toggleTitle;
				self.amPM.tabIndex = 0;
				timeContainer.appendChild(self.amPM);
			}
	
			calendarContainer.appendChild(timeContainer);
		};
	
		bind = function bind() {
			document.addEventListener("keydown", onKeyDown);
			window.addEventListener("resize", onResize);
	
			if (self.config.clickOpens) {
				(self.altInput || self.input).addEventListener("click", self.open);
				(self.altInput || self.input).addEventListener("focus", self.open);
			}
	
			if (self.config.wrap && self.element.querySelector("[data-open]")) {
				self.element.querySelector("[data-open]").addEventListener("click", self.open);
			}
	
			if (self.config.wrap && self.element.querySelector("[data-close]")) {
				self.element.querySelector("[data-close]").addEventListener("click", self.close);
			}
	
			if (self.config.wrap && self.element.querySelector("[data-toggle]")) {
				self.element.querySelector("[data-toggle]").addEventListener("click", self.toggle);
			}
	
			if (self.config.wrap && self.element.querySelector("[data-clear]")) {
				self.element.querySelector("[data-clear]").addEventListener("click", self.clear);
			}
	
			if (!self.config.noCalendar) {
				prevMonthNav.addEventListener("click", function () {
					changeMonth(-1);
				});
	
				nextMonthNav.addEventListener("click", function () {
					changeMonth(1);
				});
	
				currentYearElement.addEventListener("wheel", yearScroll);
				currentYearElement.addEventListener("focus", currentYearElement.select);
	
				currentYearElement.addEventListener("input", function (event) {
					self.currentYear = parseInt(event.target.value, 10);
					self.redraw();
				});
	
				calendar.addEventListener("click", selectDate);
			}
	
			document.addEventListener("click", documentClick);
			document.addEventListener("blur", documentClick, true);
	
			if (self.config.enableTime) {
				self.hourElement.addEventListener("wheel", timeWrapper);
				self.minuteElement.addEventListener("wheel", timeWrapper);
	
				self.hourElement.addEventListener("input", timeWrapper);
				self.minuteElement.addEventListener("input", timeWrapper);
	
				self.hourElement.addEventListener("mouseout", updateValue);
				self.minuteElement.addEventListener("mouseout", updateValue);
	
				self.hourElement.addEventListener("change", updateValue);
				self.minuteElement.addEventListener("change", updateValue);
	
				self.hourElement.addEventListener("focus", self.hourElement.select);
				self.minuteElement.addEventListener("focus", self.minuteElement.select);
	
				if (self.config.enableSeconds) {
					self.secondElement.addEventListener("wheel", timeWrapper);
					self.secondElement.addEventListener("input", timeWrapper);
					self.secondElement.addEventListener("mouseout", updateValue);
					self.secondElement.addEventListener("change", updateValue);
					self.secondElement.addEventListener("focus", self.secondElement.select);
				}
	
				if (!self.config.time_24hr) {
					self.amPM.addEventListener("click", amPMToggle);
	
					self.amPM.addEventListener("wheel", amPMToggle);
					self.amPM.addEventListener("mouseout", updateValue);
	
					self.amPM.addEventListener("keydown", function (e) {
						if (e.which === 38 || e.which === 40) {
							amPMToggle(e);
						}
					});
				}
			}
	
			if (document.createEvent) {
				clickEvt = document.createEvent("MouseEvent");
				// without all these args ms edge spergs out
				clickEvt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			} else {
				clickEvt = new MouseEvent("click", {
					view: window,
					bubbles: true,
					cancelable: true
				});
			}
		};
	
		self.open = function () {
			if (self.isOpen || (self.altInput || self.input).disabled || self.config.inline) {
				return;
			} else if (!self.config.static) {
				self.positionCalendar();
			}
	
			self.isOpen = true;
	
			wrapperElement.classList.add("open");
	
			if (!self.config.allowInput) {
				(self.altInput || self.input).blur();
				(self.config.noCalendar ? timeContainer : calendar).focus();
			}
	
			(self.altInput || self.input).classList.add("active");
	
			if (self.config.onOpen) {
				self.config.onOpen(self.selectedDateObj, self.input.value);
			}
		};
	
		// For calendars inserted in BODY (as opposed to inline wrapper)
		// it"s necessary to properly calculate top/left position.
		self.positionCalendar = function () {
			var calendarHeight = calendarContainer.offsetHeight,
			    input = self.altInput || self.input,
			    inputBounds = input.getBoundingClientRect(),
			    distanceFromBottom = window.innerHeight - inputBounds.bottom + input.offsetHeight;
	
			var top = void 0,
			    left = window.pageXOffset + inputBounds.left;
	
			if (distanceFromBottom < calendarHeight) {
				top = window.pageYOffset - calendarHeight + inputBounds.top - 2;
				calendarContainer.classList.remove("arrowTop");
				calendarContainer.classList.add("arrowBottom");
			} else {
				top = window.pageYOffset + input.offsetHeight + inputBounds.top + 2;
				calendarContainer.classList.remove("arrowBottom");
				calendarContainer.classList.add("arrowTop");
			}
	
			wrapperElement.style.top = top + "px";
			wrapperElement.style.left = left + "px";
		};
	
		self.toggle = function () {
			if (self.isOpen) {
				self.close();
			} else {
				self.open();
			}
		};
	
		self.close = function () {
			self.isOpen = false;
			wrapperElement.classList.remove("open");
			(self.altInput || self.input).classList.remove("active");
	
			if (self.config.onClose) {
				self.config.onClose(self.selectedDateObj, self.input.value);
			}
		};
	
		self.clear = function () {
			self.input.value = "";
	
			if (self.altInput) {
				self.altInput.value = "";
			}
	
			self.selectedDateObj = null;
	
			triggerChange();
			self.jumpToDate();
		};
	
		triggerChange = function triggerChange() {
			self.input.dispatchEvent(clickEvt);
	
			if (self.config.onChange) {
				self.config.onChange(self.selectedDateObj, self.input.value);
			}
		};
	
		self.destroy = function () {
			document.removeEventListener("click", documentClick, false);
	
			if (self.altInput) {
				self.altInput.parentNode.removeChild(self.altInput);
			}
	
			if (self.config.inline) {
				var parent = self.element.parentNode,
				    removedElement = parent.removeChild(self.element);
	
				parent.removeChild(calendarContainer);
				parent.parentNode.replaceChild(removedElement, parent);
			} else {
				document.getElementsByTagName("body")[0].removeChild(wrapperElement);
			}
		};
	
		self.redraw = function () {
			if (self.config.noCalendar) {
				return;
			}
	
			updateNavigationCurrentMonth();
			buildDays();
		};
	
		self.jumpToDate = function (jumpDate) {
			jumpDate = uDate(jumpDate || self.selectedDateObj || self.config.defaultDate || self.config.minDate || now);
	
			self.currentYear = jumpDate.getFullYear();
			self.currentMonth = jumpDate.getMonth();
			self.redraw();
		};
	
		self.setDate = function (date, triggerChangeEvent) {
			date = uDate(date);
	
			if (date instanceof Date && date.getTime()) {
				self.selectedDateObj = uDate(date);
				self.jumpToDate(self.selectedDateObj);
				updateValue();
	
				if (triggerChangeEvent) {
					triggerChange();
				}
			}
		};
	
		self.setTime = function (hour, minute, triggerChangeEvent) {
			if (!self.selectedDateObj) {
				return;
			}
	
			self.hourElement.value = parseInt(hour, 10) % 24;
			self.minuteElement.value = parseInt(minute || 0, 10) % 60;
	
			if (!self.config.time_24hr) {
				self.amPM.innerHTML = hour > 11 ? "PM" : "AM";
			}
	
			updateValue();
	
			if (triggerChangeEvent) {
				triggerChange();
			}
		};
	
		self.set = function (key, value) {
			if (key in self.config) {
				self.config[key] = value;
				self.jumpToDate();
			}
		};
	
		amPMToggle = function amPMToggle(e) {
			e.preventDefault();
			self.amPM.textContent = ["AM", "PM"][self.amPM.innerHTML === "AM" | 0];
		};
	
		onKeyDown = function onKeyDown(e) {
			if (!self.isOpen || self.config.enableTime && timeContainer.contains(e.target)) {
				return;
			}
	
			switch (e.which) {
				case 13:
					selectDate(e);
					break;
	
				case 27:
					self.close();
					break;
	
				case 37:
					changeMonth(-1);
					break;
	
				case 38:
					e.preventDefault();
					self.currentYear++;
					self.redraw();
					break;
	
				case 39:
					changeMonth(1);
					break;
	
				case 40:
					e.preventDefault();
					self.currentYear--;
					self.redraw();
					break;
	
				default:
					break;
			}
		};
	
		onResize = debounce(function () {
			if (self.isOpen && !self.config.inline && !self.config.static) {
				self.positionCalendar();
			}
		}, 300);
	
		try {
			init();
		} catch (error) {
			// skip and carry on
			console.error(error);
			console.info(self.element);
		}
	
		return self;
	};
	
	flatpickr.init.prototype = {
	
		defaultConfig: {},
	
		l10n: {
			weekdays: {
				shorthand: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
				longhand: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
			},
			months: {
				shorthand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
				longhand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
			},
			daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			firstDayOfWeek: 0,
			ordinal: function ordinal(nth) {
				var s = nth % 100;
				if (s > 3 && s < 21) return "th";
				switch (s % 10) {
					case 1:
						return "st";
					case 2:
						return "nd";
					case 3:
						return "rd";
					default:
						return "th";
				}
			},
			weekAbbreviation: "Wk",
			scrollTitle: "Scroll to increment",
			toggleTitle: "Click to toggle"
		}
	
	};
	
	Date.prototype.fp_incr = function (days) {
		return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(days, 10));
	};
	
	Date.prototype.fp_isUTC = false;
	Date.prototype.fp_toUTC = function () {
		var newDate = new Date(this.getTime() + this.getTimezoneOffset() * 60000);
		newDate.fp_isUTC = true;
	
		return newDate;
	};
	
	Date.prototype.fp_getWeek = function () {
		var date = new Date(this.getTime());
		date.setHours(0, 0, 0, 0);
	
		// Thursday in current week decides the year.
		date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
		// January 4 is always in week 1.
		var week1 = new Date(date.getFullYear(), 0, 4);
		// Adjust to Thursday in week 1 and count number of weeks from date to week1.
		return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
	};
	
	// classList polyfill
	if (!("classList" in document.documentElement) && Object.defineProperty && typeof HTMLElement !== "undefined") {
		Object.defineProperty(HTMLElement.prototype, "classList", {
			get: function get() {
				var selfElements = this;
				function update(fn) {
					return function (value) {
						var classes = selfElements.className.split(/\s+/);
						var index = classes.indexOf(value);
	
						fn(classes, index, value);
						selfElements.className = classes.join(" ");
					};
				}
	
				var ret = {
					add: update(function (classes, index, value) {
						return ~index || classes.push(value);
					}),
					remove: update(function (classes, index) {
						return ~index && classes.splice(index, 1);
					}),
					toggle: update(function (classes, index, value) {
						if (~index) {
							classes.splice(index, 1);
						} else {
							classes.push(value);
						}
					}),
					contains: function contains(value) {
						return !! ~selfElements.className.split(/\s+/).indexOf(value);
					}
				};
	
				return ret;
			}
		});
	}
	
	if (true) {
		module.exports = flatpickr;
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcz84OTY2KioqKioqKioqKioqIiwid2VicGFjazovLy8uL09yZy9qcy9kZW1vL2RlbW8uanMiLCJ3ZWJwYWNrOi8vLy4vT3JnL3RwbC9kZW1vL3Rlc3QudHBsIiwid2VicGFjazovLy8uL09yZy9kZXAvY2FsZW5kYXIvY2FsZW5kZXItcGx1Z2luLm1pbi5jc3M/YzM1YSIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL2NhbGVuZGFyL2NhbGVuZGVyLXBsdWdpbi5taW4uY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL09yZy9kZXAvY2FsZW5kYXIvY2FsZW5kZXItcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFrQztBQUNsQzs7QUFFQTtBQUNBLHlDQUF3QyxPQUFPLDJCQUEyQjtBQUMxRTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXFDLFlBQVk7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QixpRUFBaUU7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0EsYUFBWSxlQUFlO0FBQzNCLGtEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBcUI7QUFDckIsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixHQUFFO0FBQ0Ysa0NBQWlDO0FBQ2pDLElBQUc7QUFDSCxlQUFjO0FBQ2Q7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0YsRUFBQyxHOzs7Ozs7O0FDOUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7OztBQzlCRDtBQUNBO0FBQ0E7QUFDQSxjQUFhLG1JQUFtSTtBQUNoSjtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxFQUFDLEU7Ozs7Ozs7QUNURDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLHFFQUFvRSxVQUFVLGVBQWUsbUJBQW1CLGtCQUFrQixxQkFBcUIsa0dBQWtHLGtCQUFrQiw4Q0FBOEMsa0JBQWtCLDBGQUEwRixjQUFjLG1CQUFtQixvQkFBb0IsZ0JBQWdCLHNCQUFzQixjQUFjLGtCQUFrQixrQkFBa0IsU0FBUyxPQUFPLGtCQUFrQixZQUFZLDZCQUE2QixZQUFZLHNEQUFzRCxZQUFZLHFEQUFxRCxrQkFBa0IsY0FBYyxvQkFBb0IseUJBQXlCLFdBQVcsU0FBUyxRQUFRLFVBQVUsMkJBQTJCLGlCQUFpQixjQUFjLDBCQUEwQixpQkFBaUIsY0FBYyx1RUFBdUUsWUFBWSxvQ0FBb0MseUJBQXlCLG1DQUFtQyx5QkFBeUIsNkVBQTZFLFNBQVMsdUNBQXVDLHNCQUFzQixzQ0FBc0Msc0JBQXNCLGlCQUFpQixlQUFlLFdBQVcsb0JBQW9CLGtCQUFrQixrQkFBa0IsNENBQTRDLHFCQUFxQixlQUFlLGtCQUFrQixVQUFVLGdEQUFnRCxrQkFBa0Isd0RBQXdELGNBQWMsc0JBQXNCLFdBQVcsV0FBVyxzQkFBc0IsWUFBWSxZQUFZLHlCQUF5QixlQUFlLGdCQUFnQixxQkFBcUIscUJBQXFCLG9DQUFvQyxnQkFBZ0IsV0FBVyxtQ0FBbUMsZUFBZSxzQkFBc0IsY0FBYyxlQUFlLGtCQUFrQixTQUFTLGFBQWEsZUFBZSxrQkFBa0IsZ0JBQWdCLG9CQUFvQixlQUFlLFNBQVMseUNBQXlDLDJCQUEyQixvQkFBb0IsY0FBYyxlQUFlLGtCQUFrQixrQkFBa0IseUJBQXlCLFlBQVksa0JBQWtCLHFCQUFxQixhQUFhLGdCQUFnQixpQkFBaUIsV0FBVyxXQUFXLGdCQUFnQixnQkFBZ0IsVUFBVSwyQ0FBMkMsZUFBZSw2QkFBNkIsb0JBQW9CLHNCQUFzQixjQUFjLGVBQWUscUJBQXFCLGdCQUFnQixXQUFXLFlBQVksaUJBQWlCLGlCQUFpQixrQkFBa0IsZ1JBQWdSLHdCQUF3QixlQUFlLHlCQUF5QixlQUFlLGtiQUFrYixlQUFlLFVBQVUsbUJBQW1CLHFCQUFxQix1REFBdUQscUJBQXFCLHNJQUFzSSxxQkFBcUIsbUJBQW1CLFdBQVcsK01BQStNLG1CQUFtQixXQUFXLHFCQUFxQiw4RUFBOEUsWUFBWSxxQkFBcUIsaUJBQWlCLGNBQWMsZ0JBQWdCLGNBQWMsa0JBQWtCLGFBQWEsVUFBVSxtQ0FBbUMsZUFBZSx3QkFBd0IsMEJBQTBCLGdCQUFnQixTQUFTLGdCQUFnQixVQUFVLGNBQWMsa0JBQWtCLFNBQVMsVUFBVSxlQUFlLGdCQUFnQixnSUFBZ0ksbUJBQW1CLG9EQUFvRCxVQUFVLGdCQUFnQixvREFBb0QsZ0JBQWdCLHlDQUF5QyxVQUFVLFNBQVMsK0NBQStDLFVBQVUsY0FBYyxnQ0FBZ0MsMEJBQTBCLGlCQUFpQixVQUFVLFVBQVUsYUFBYSxlQUFlLGdCQUFnQixnQkFBZ0Isd0NBQXdDLGlCQUFpQixXQUFXOztBQUU1cks7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0EseUNBQXdDLGdCQUFnQjtBQUN4RCxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBLG1CQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0EsU0FBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLGtCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQSxpQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBdUQ7QUFDdkQ7O0FBRUEsOEJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3JQQTs7QUFFQSxxR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLGtHQUFrRzs7QUFFOU87QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQSxpQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUVBQWtFLGFBQWE7QUFDL0U7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBa0I7QUFDbEIsbUJBQWtCOztBQUVsQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLEtBQUk7QUFDSjtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsS0FBSSx5QkFBeUIsSUFBSTtBQUNqQztBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBLGtFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUF5Qzs7QUFFekM7QUFDQTs7QUFFQTs7QUFFQSxrQkFBaUIsa0JBQWtCO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFRLDRCQUE0QjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBcUIsMEJBQTBCO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUNBQW9DLDZCQUE2QjtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG1CQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBLEUiLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qVE1PREpTOnt9Ki9cclxuIWZ1bmN0aW9uICgpIHtcclxuXHRmdW5jdGlvbiBhKGEsIGIpIHtcclxuXHRcdHJldHVybiAoL3N0cmluZ3xmdW5jdGlvbi8udGVzdCh0eXBlb2YgYikgPyBoIDogZykoYSwgYilcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGIoYSwgYykge1xyXG5cdFx0cmV0dXJuIFwic3RyaW5nXCIgIT0gdHlwZW9mIGEgJiYgKGMgPSB0eXBlb2YgYSwgXCJudW1iZXJcIiA9PT0gYyA/IGEgKz0gXCJcIiA6IGEgPSBcImZ1bmN0aW9uXCIgPT09IGMgPyBiKGEuY2FsbChhKSkgOiBcIlwiKSwgYVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYyhhKSB7XHJcblx0XHRyZXR1cm4gbFthXVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZChhKSB7XHJcblx0XHRyZXR1cm4gYihhKS5yZXBsYWNlKC8mKD8hW1xcdyNdKzspfFs8PlwiJ10vZywgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGUoYSwgYikge1xyXG5cdFx0aWYgKG0oYSkpZm9yICh2YXIgYyA9IDAsIGQgPSBhLmxlbmd0aDsgZCA+IGM7IGMrKyliLmNhbGwoYSwgYVtjXSwgYywgYSk7IGVsc2UgZm9yIChjIGluIGEpYi5jYWxsKGEsIGFbY10sIGMpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmKGEsIGIpIHtcclxuXHRcdHZhciBjID0gLyhcXC8pW15cXC9dK1xcMVxcLlxcLlxcMS8sIGQgPSAoXCIuL1wiICsgYSkucmVwbGFjZSgvW15cXC9dKyQvLCBcIlwiKSwgZSA9IGQgKyBiO1xyXG5cdFx0Zm9yIChlID0gZS5yZXBsYWNlKC9cXC9cXC5cXC8vZywgXCIvXCIpOyBlLm1hdGNoKGMpOyllID0gZS5yZXBsYWNlKGMsIFwiL1wiKTtcclxuXHRcdHJldHVybiBlXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnKGIsIGMpIHtcclxuXHRcdHZhciBkID0gYS5nZXQoYikgfHwgaSh7ZmlsZW5hbWU6IGIsIG5hbWU6IFwiUmVuZGVyIEVycm9yXCIsIG1lc3NhZ2U6IFwiVGVtcGxhdGUgbm90IGZvdW5kXCJ9KTtcclxuXHRcdHJldHVybiBjID8gZChjKSA6IGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGgoYSwgYikge1xyXG5cdFx0aWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGIpIHtcclxuXHRcdFx0dmFyIGMgPSBiO1xyXG5cdFx0XHRiID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgayhjKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR2YXIgZCA9IGpbYV0gPSBmdW5jdGlvbiAoYykge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgYihjLCBhKSArIFwiXCJcclxuXHRcdFx0fSBjYXRjaCAoZCkge1xyXG5cdFx0XHRcdHJldHVybiBpKGQpKClcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBkLnByb3RvdHlwZSA9IGIucHJvdG90eXBlID0gbiwgZC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIGIgKyBcIlwiXHJcblx0XHR9LCBkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpKGEpIHtcclxuXHRcdHZhciBiID0gXCJ7VGVtcGxhdGUgRXJyb3J9XCIsIGMgPSBhLnN0YWNrIHx8IFwiXCI7XHJcblx0XHRpZiAoYyljID0gYy5zcGxpdChcIlxcblwiKS5zbGljZSgwLCAyKS5qb2luKFwiXFxuXCIpOyBlbHNlIGZvciAodmFyIGQgaW4gYSljICs9IFwiPFwiICsgZCArIFwiPlxcblwiICsgYVtkXSArIFwiXFxuXFxuXCI7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gXCJvYmplY3RcIiA9PSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKGIgKyBcIlxcblxcblwiICsgYyksIGJcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBqID0gYS5jYWNoZSA9IHt9LCBrID0gdGhpcy5TdHJpbmcsIGwgPSB7XHJcblx0XHRcIjxcIjogXCImIzYwO1wiLFxyXG5cdFx0XCI+XCI6IFwiJiM2MjtcIixcclxuXHRcdCdcIic6IFwiJiMzNDtcIixcclxuXHRcdFwiJ1wiOiBcIiYjMzk7XCIsXHJcblx0XHRcIiZcIjogXCImIzM4O1wiXHJcblx0fSwgbSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGEpIHtcclxuXHRcdFx0cmV0dXJuIFwiW29iamVjdCBBcnJheV1cIiA9PT0ge30udG9TdHJpbmcuY2FsbChhKVxyXG5cdFx0fSwgbiA9IGEudXRpbHMgPSB7XHJcblx0XHQkaGVscGVyczoge30sICRpbmNsdWRlOiBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG5cdFx0XHRyZXR1cm4gYSA9IGYoYywgYSksIGcoYSwgYilcclxuXHRcdH0sICRzdHJpbmc6IGIsICRlc2NhcGU6IGQsICRlYWNoOiBlXHJcblx0fSwgbyA9IGEuaGVscGVycyA9IG4uJGhlbHBlcnM7XHJcblx0YS5nZXQgPSBmdW5jdGlvbiAoYSkge1xyXG5cdFx0cmV0dXJuIGpbYS5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIildXHJcblx0fSwgYS5oZWxwZXIgPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0b1thXSA9IGJcclxuXHR9LCBtb2R1bGUuZXhwb3J0cyA9IGFcclxufSgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA4IDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIxIDIzIDI1IDI2IDI3IDMxIDMyIDMzIDM3IDM4XG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGh1bW9ySGFuIG9uIDIwMTYvNi8xNy5cbiAqL1xuY29uc29sZS5sb2coJ2RlbW8uanMnKTtcbnZhciBkZW1vVHBsID0gcmVxdWlyZShcImRlbW8vdGVzdC50cGxcIik7XG5cbnJlcXVpcmUoJ2NhbGVuZGFyL2NhbGVuZGVyLXBsdWdpbi5taW4uY3NzJyk7XG52YXIgY2FsZW5kZXIgPSByZXF1aXJlKCdjYWxlbmRhci9jYWxlbmRlci1wbHVnaW4uanMnKTtcblxudmFyIGRlbW8gPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oKXtcbiAgICAgICAgLy90b2RvIOmAu+i+keWHveaVsFxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLmluaXRCdG5zKCk7XG4gICAgICAgIHRoaXMuaW5pdENhbGVuZGFyKCk7XG4gICAgfSxcbiAgICBpbml0Q2FsZW5kYXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNhbGVuZGVyKFwiLnRleHRcIik7XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBhcnIgPSBbMSwyLDMsNCw1XTtcbiAgICAgICAgJChcIi5kb20yXCIpLmh0bWwoZGVtb1RwbChhcnIpKTtcbiAgICB9LFxuICAgIGluaXRCdG5zOiBmdW5jdGlvbigpe1xuICAgICAgICAvL3RvZG8g57uR5a6a5LqL5Lu2XG4gICAgfVxufTtcblxuJChmdW5jdGlvbigpe1xuICAgZGVtby5pbml0KCk7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2pzL2RlbW8vZGVtby5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDIzXG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ09yZy90cGwvZGVtby90ZXN0JyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlYWNoPSR1dGlscy4kZWFjaCwkdmFsdWU9JGRhdGEuJHZhbHVlLCRpbmRleD0kZGF0YS4kaW5kZXgsJGVzY2FwZT0kdXRpbHMuJGVzY2FwZSwkb3V0PScnOyRlYWNoKCRkYXRhLGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyAnO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUpO1xuJG91dCs9JyAnO1xufSk7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvdHBsL2RlbW8vdGVzdC50cGxcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAyM1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY2FsZW5kZXItcGx1Z2luLm1pbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY2FsZW5kZXItcGx1Z2luLm1pbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jYWxlbmRlci1wbHVnaW4ubWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9kZXAvY2FsZW5kYXIvY2FsZW5kZXItcGx1Z2luLm1pbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAyM1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZsYXRwaWNrci1pbnB1dCwuZmxhdHBpY2tyLXdyYXBwZXIgaW5wdXR7ei1pbmRleDoxO2N1cnNvcjpwb2ludGVyfS5mbGF0cGlja3Itd3JhcHBlcntwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmlubGluZS1ibG9ja30uZmxhdHBpY2tyLXdyYXBwZXIuaW5saW5lLC5mbGF0cGlja3Itd3JhcHBlci5pbmxpbmUgLmZsYXRwaWNrci1jYWxlbmRhciwuZmxhdHBpY2tyLXdyYXBwZXIuc3RhdGlje3Bvc2l0aW9uOnJlbGF0aXZlfS5mbGF0cGlja3Itd3JhcHBlci5zdGF0aWMgLmZsYXRwaWNrci1jYWxlbmRhcntwb3NpdGlvbjphYnNvbHV0ZX0uZmxhdHBpY2tyLXdyYXBwZXIuaW5saW5lIC5mbGF0cGlja3ItY2FsZW5kYXIsLmZsYXRwaWNrci13cmFwcGVyLm9wZW4gLmZsYXRwaWNrci1jYWxlbmRhcnt6LWluZGV4Ojk5OTk5O3Zpc2liaWxpdHk6dmlzaWJsZX0uZmxhdHBpY2tyLWNhbGVuZGFye2JhY2tncm91bmQ6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNkZGQ7Zm9udC1zaXplOjkwJTtib3JkZXItcmFkaXVzOjNweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTAwJTtsZWZ0OjA7dmlzaWJpbGl0eTpoaWRkZW47d2lkdGg6MjU2cHh9LmZsYXRwaWNrci1jYWxlbmRhci5oYXNXZWVrc3t3aWR0aDoyODhweH0uZmxhdHBpY2tyLWNhbGVuZGFyLmhhc1dlZWtzIC5mbGF0cGlja3Itd2Vla2RheXMgc3Bhbnt3aWR0aDoxMi41JX0uZmxhdHBpY2tyLWNhbGVuZGFyOmFmdGVyLC5mbGF0cGlja3ItY2FsZW5kYXI6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7cG9pbnRlci1ldmVudHM6bm9uZTtib3JkZXI6c29saWQgdHJhbnNwYXJlbnQ7Y29udGVudDonJztoZWlnaHQ6MDt3aWR0aDowO2xlZnQ6MjJweH0uZmxhdHBpY2tyLWNhbGVuZGFyOmJlZm9yZXtib3JkZXItd2lkdGg6NXB4O21hcmdpbjowIC01cHh9LmZsYXRwaWNrci1jYWxlbmRhcjphZnRlcntib3JkZXItd2lkdGg6NHB4O21hcmdpbjowIC00cHh9LmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDphZnRlciwuZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZXtib3R0b206MTAwJX0uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZXtib3JkZXItYm90dG9tLWNvbG9yOiNkZGR9LmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDphZnRlcntib3JkZXItYm90dG9tLWNvbG9yOiNmZmZ9LmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlciwuZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmJlZm9yZXt0b3A6MTAwJX0uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmJlZm9yZXtib3JkZXItdG9wLWNvbG9yOiNkZGR9LmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlcntib3JkZXItdG9wLWNvbG9yOiNmZmZ9LmZsYXRwaWNrci1tb250aHtiYWNrZ3JvdW5kOjAgMDtjb2xvcjojMDAwO3BhZGRpbmc6NHB4IDVweCAycHg7dGV4dC1hbGlnbjpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmV9LmZsYXRwaWNrci1uZXh0LW1vbnRoLC5mbGF0cGlja3ItcHJldi1tb250aHt0ZXh0LWRlY29yYXRpb246bm9uZTtjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LjVyZW19LmZsYXRwaWNrci1uZXh0LW1vbnRoIGksLmZsYXRwaWNrci1wcmV2LW1vbnRoIGl7cG9zaXRpb246cmVsYXRpdmV9LmZsYXRwaWNrci1uZXh0LW1vbnRoOmhvdmVyLC5mbGF0cGlja3ItcHJldi1tb250aDpob3Zlcntjb2xvcjojZjk5NTk1fS5mbGF0cGlja3ItcHJldi1tb250aHtmbG9hdDpsZWZ0O2xlZnQ6LjVyZW19LmZsYXRwaWNrci1uZXh0LW1vbnRoe2Zsb2F0OnJpZ2h0O3JpZ2h0Oi41cmVtfS5mbGF0cGlja3ItY3VycmVudC1tb250aHtmb250LXNpemU6MTM1JTtmb250LXdlaWdodDozMDA7Y29sb3I6cmdiYSgwLDAsMCwuNyk7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5jdXJfbW9udGh7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiMwMDB9LmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5jdXJfeWVhcntiYWNrZ3JvdW5kOjAgMDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6aW5oZXJpdDtjdXJzb3I6ZGVmYXVsdDtwYWRkaW5nOjAgMCAwIDJweDttYXJnaW46MDt3aWR0aDozLjE1ZW07ZGlzcGxheTppbmxpbmU7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6MzAwO2xpbmUtaGVpZ2h0OmluaGVyaXQ7aGVpZ2h0OmluaXRpYWw7Ym9yZGVyOjB9LmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5jdXJfeWVhcjpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA1KX0uZmxhdHBpY2tyLXdlZWtkYXlze2ZvbnQtc2l6ZTo5MCU7YmFja2dyb3VuZDowIDA7cGFkZGluZzoycHggMCA0cHg7dGV4dC1hbGlnbjpjZW50ZXJ9LmZsYXRwaWNrci13ZWVrZGF5cyBzcGFue29wYWNpdHk6LjU0O3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjE0LjI4JTtmb250LXdlaWdodDo3MDB9LmZsYXRwaWNrci13ZWVrc3t3aWR0aDozMnB4O2Zsb2F0OmxlZnR9LmZsYXRwaWNrci1kYXlze3BhZGRpbmctdG9wOjFweDtvdXRsaW5lOjB9LmZsYXRwaWNrci1kYXlzIHNwYW4sLmZsYXRwaWNrci13ZWVrcyBzcGFue2JhY2tncm91bmQ6MCAwO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czoxNTBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6IzM5MzkzOTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXdlaWdodDozMDA7d2lkdGg6MzRweDtoZWlnaHQ6MzRweDtsaW5lLWhlaWdodDozM3B4O21hcmdpbjowIDFweCAxcHg7dGV4dC1hbGlnbjpjZW50ZXJ9LmZsYXRwaWNrci1kYXlzIHNwYW4uZGlzYWJsZWQsLmZsYXRwaWNrci1kYXlzIHNwYW4uZGlzYWJsZWQ6aG92ZXIsLmZsYXRwaWNrci1kYXlzIHNwYW4ubmV4dE1vbnRoRGF5LC5mbGF0cGlja3ItZGF5cyBzcGFuLnByZXZNb250aERheSwuZmxhdHBpY2tyLXdlZWtzIHNwYW4uZGlzYWJsZWQsLmZsYXRwaWNrci13ZWVrcyBzcGFuLmRpc2FibGVkOmhvdmVyLC5mbGF0cGlja3Itd2Vla3Mgc3Bhbi5uZXh0TW9udGhEYXksLmZsYXRwaWNrci13ZWVrcyBzcGFuLnByZXZNb250aERheXtjb2xvcjpyZ2JhKDU3LDU3LDU3LC4zKTtiYWNrZ3JvdW5kOjAgMDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOmRlZmF1bHR9LmZsYXRwaWNrci1kYXlzIHNwYW4ubmV4dE1vbnRoRGF5OmZvY3VzLC5mbGF0cGlja3ItZGF5cyBzcGFuLm5leHRNb250aERheTpob3ZlciwuZmxhdHBpY2tyLWRheXMgc3Bhbi5wcmV2TW9udGhEYXk6Zm9jdXMsLmZsYXRwaWNrci1kYXlzIHNwYW4ucHJldk1vbnRoRGF5OmhvdmVyLC5mbGF0cGlja3ItZGF5cyBzcGFuOmZvY3VzLC5mbGF0cGlja3ItZGF5cyBzcGFuOmhvdmVyLC5mbGF0cGlja3Itd2Vla3Mgc3Bhbi5uZXh0TW9udGhEYXk6Zm9jdXMsLmZsYXRwaWNrci13ZWVrcyBzcGFuLm5leHRNb250aERheTpob3ZlciwuZmxhdHBpY2tyLXdlZWtzIHNwYW4ucHJldk1vbnRoRGF5OmZvY3VzLC5mbGF0cGlja3Itd2Vla3Mgc3Bhbi5wcmV2TW9udGhEYXk6aG92ZXIsLmZsYXRwaWNrci13ZWVrcyBzcGFuOmZvY3VzLC5mbGF0cGlja3Itd2Vla3Mgc3Bhbjpob3ZlcntjdXJzb3I6cG9pbnRlcjtvdXRsaW5lOjA7YmFja2dyb3VuZDojZTZlNmU2O2JvcmRlci1jb2xvcjojZTZlNmU2fS5mbGF0cGlja3ItZGF5cyBzcGFuLnRvZGF5LC5mbGF0cGlja3Itd2Vla3Mgc3Bhbi50b2RheXtib3JkZXItY29sb3I6I2Y5OTU5NX0uZmxhdHBpY2tyLWRheXMgc3Bhbi50b2RheTpmb2N1cywuZmxhdHBpY2tyLWRheXMgc3Bhbi50b2RheTpob3ZlciwuZmxhdHBpY2tyLXdlZWtzIHNwYW4udG9kYXk6Zm9jdXMsLmZsYXRwaWNrci13ZWVrcyBzcGFuLnRvZGF5OmhvdmVye2JvcmRlci1jb2xvcjojZjk5NTk1O2JhY2tncm91bmQ6I2Y5OTU5NTtjb2xvcjojZmZmfS5mbGF0cGlja3ItZGF5cyBzcGFuLnNlbGVjdGVkLC5mbGF0cGlja3ItZGF5cyBzcGFuLnNlbGVjdGVkOmZvY3VzLC5mbGF0cGlja3ItZGF5cyBzcGFuLnNlbGVjdGVkOmhvdmVyLC5mbGF0cGlja3Itd2Vla3Mgc3Bhbi5zZWxlY3RlZCwuZmxhdHBpY2tyLXdlZWtzIHNwYW4uc2VsZWN0ZWQ6Zm9jdXMsLmZsYXRwaWNrci13ZWVrcyBzcGFuLnNlbGVjdGVkOmhvdmVye2JhY2tncm91bmQ6IzQ0NmNiMztjb2xvcjojZmZmO2JvcmRlci1jb2xvcjojNDQ2Y2IzfS5mbGF0cGlja3ItYW0tcG0sLmZsYXRwaWNrci10aW1lIGlucHV0W3R5cGU9bnVtYmVyXSwuZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9ye2hlaWdodDozOHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2xpbmUtaGVpZ2h0OjM4cHg7Y29sb3I6IzM5MzkzOX0uZmxhdHBpY2tyLXRpbWV7b3ZlcmZsb3c6YXV0bzt0ZXh0LWFsaWduOmNlbnRlcjtib3JkZXItdG9wOjA7b3V0bGluZTowfS5mbGF0cGlja3ItdGltZSBpbnB1dFt0eXBlPW51bWJlcl17YmFja2dyb3VuZDowIDA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDtib3gtc2hhZG93Om5vbmU7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czowO3dpZHRoOjMzJTttaW4td2lkdGg6MzMlO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjowO3BhZGRpbmc6MDtjdXJzb3I6cG9pbnRlcjtmb250LXdlaWdodDo3MDB9LmZsYXRwaWNrci1hbS1wbTpmb2N1cywuZmxhdHBpY2tyLWFtLXBtOmhvdmVyLC5mbGF0cGlja3ItdGltZSBpbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMsLmZsYXRwaWNrci10aW1lIGlucHV0W3R5cGU9bnVtYmVyXTpob3ZlcntiYWNrZ3JvdW5kOiNmMGYwZjB9LmZsYXRwaWNrci10aW1lIGlucHV0W3R5cGU9bnVtYmVyXS5mbGF0cGlja3ItbWludXRle3dpZHRoOjI2JTtmb250LXdlaWdodDozMDB9LmZsYXRwaWNrci10aW1lIGlucHV0W3R5cGU9bnVtYmVyXS5mbGF0cGlja3Itc2Vjb25ke2ZvbnQtd2VpZ2h0OjMwMH0uZmxhdHBpY2tyLXRpbWUgaW5wdXRbdHlwZT1udW1iZXJdOmZvY3Vze291dGxpbmU6MDtib3JkZXI6MH0uZmxhdHBpY2tyLXRpbWUuaGFzLXNlY29uZHMgaW5wdXRbdHlwZT1udW1iZXJde3dpZHRoOjI1JTttaW4td2lkdGg6MjUlfS5mbGF0cGlja3ItZGF5cysuZmxhdHBpY2tyLXRpbWV7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RkZH0uZmxhdHBpY2tyLWFtLXBte291dGxpbmU6MDt3aWR0aDoyMSU7cGFkZGluZzowIDIlO2N1cnNvcjpwb2ludGVyO3RleHQtYWxpZ246bGVmdDtmb250LXdlaWdodDozMDB9QG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpey5mbGF0cGlja3ItbW9udGh7cGFkZGluZzowfX1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vT3JnL2RlcC9jYWxlbmRhci9jYWxlbmRlci1wbHVnaW4ubWluLmNzc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDIzXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMjNcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAyM1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIGZsYXRwaWNrciA9IGZ1bmN0aW9uIGZsYXRwaWNrcihzZWxlY3RvciwgY29uZmlnKSB7XG5cdHZhciBlbGVtZW50cyA9IHZvaWQgMDtcblxuXHR2YXIgY3JlYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShlbGVtZW50KSB7XG5cdFx0aWYgKGVsZW1lbnQuX2ZsYXRwaWNrcikge1xuXHRcdFx0ZWxlbWVudC5fZmxhdHBpY2tyLmRlc3Ryb3koKTtcblx0XHR9XG5cblx0XHRlbGVtZW50Ll9mbGF0cGlja3IgPSBuZXcgZmxhdHBpY2tyLmluaXQoZWxlbWVudCwgY29uZmlnKTtcblx0XHRyZXR1cm4gZWxlbWVudC5fZmxhdHBpY2tyO1xuXHR9O1xuXG5cdGlmIChzZWxlY3Rvci5ub2RlTmFtZSkge1xuXHRcdHJldHVybiBjcmVhdGVJbnN0YW5jZShzZWxlY3Rvcik7XG5cdH1cblx0LypcbiBVdGlsaXplIHRoZSBwZXJmb3JtYW5jZSBvZiBuYXRpdmUgZ2V0dGVycyBpZiBhcHBsaWNhYmxlXG4gaHR0cHM6Ly9qc3BlcmYuY29tL2dldGVsZW1lbnRzYnljbGFzc25hbWUtdnMtcXVlcnlzZWxlY3RvcmFsbC8xOFxuIGh0dHBzOi8vanNwZXJmLmNvbS9qcXVlcnktdnMtamF2YXNjcmlwdC1wZXJmb3JtYW5jZS1jb21wYXJpc29uLzIyXG4gKi9cblx0ZWxzZSBpZiAoL14jW2EtekEtWjAtOVxcLV9dKiQvLnRlc3Qoc2VsZWN0b3IpKSB7XG5cdFx0XHRyZXR1cm4gY3JlYXRlSW5zdGFuY2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3Iuc2xpY2UoMSkpKTtcblx0XHR9IGVsc2UgaWYgKC9eXFwuW2EtekEtWjAtOVxcLV9dKiQvLnRlc3Qoc2VsZWN0b3IpKSB7XG5cdFx0XHRlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZWN0b3Iuc2xpY2UoMSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXHRcdH1cblxuXHR2YXIgaW5zdGFuY2VzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdGluc3RhbmNlcy5wdXNoKGNyZWF0ZUluc3RhbmNlKGVsZW1lbnRzW2ldKSk7XG5cdH1cblxuXHRpZiAoaW5zdGFuY2VzLmxlbmd0aCA9PT0gMSkge1xuXHRcdHJldHVybiBpbnN0YW5jZXNbMF07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNhbGVuZGFyczogaW5zdGFuY2VzLFxuXHRcdGJ5SUQ6IGZ1bmN0aW9uIGJ5SUQoaWQpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuX2ZsYXRwaWNrcjtcblx0XHR9XG5cdH07XG59O1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mbGF0cGlja3IuaW5pdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBpbnN0YW5jZUNvbmZpZykge1xuXHRmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lLCBjb250ZW50KSB7XG5cdFx0dmFyIG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cblx0XHRpZiAoY29udGVudCkge1xuXHRcdFx0bmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG5cdFx0fVxuXG5cdFx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdFx0bmV3RWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ld0VsZW1lbnQ7XG5cdH1cblxuXHR2YXIgZGVib3VuY2UgPSBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcblx0XHR2YXIgdGltZW91dCA9IHZvaWQgMDtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0Zm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0XHRcdFx0YXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuXG5cdFx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbiBsYXRlcigpIHtcblx0XHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRcdGlmICghaW1tZWRpYXRlKSB7XG5cdFx0XHRcdFx0ZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcdFx0aWYgKGltbWVkaWF0ZSAmJiAhdGltZW91dCkge1xuXHRcdFx0XHRmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cblx0Ly8gZnVuY3Rpb25zXG5cdHZhciBzZWxmID0gdGhpcztcblx0dmFyIHBhcnNlQ29uZmlnID0gdm9pZCAwLFxuXHQgICAgaW5pdCA9IHZvaWQgMCxcblx0ICAgIHdyYXAgPSB2b2lkIDAsXG5cdCAgICB1RGF0ZSA9IHZvaWQgMCxcblx0ICAgIGVxdWFsRGF0ZXMgPSB2b2lkIDAsXG5cdCAgICBwYWQgPSB2b2lkIDAsXG5cdCAgICBtb250aFRvU3RyID0gdm9pZCAwLFxuXHQgICAgaXNFbmFibGVkID0gdm9pZCAwLFxuXHQgICAgYnVpbGRNb250aE5hdmlnYXRpb24gPSB2b2lkIDAsXG5cdCAgICBidWlsZFdlZWtkYXlzID0gdm9pZCAwLFxuXHQgICAgYnVpbGRDYWxlbmRhciA9IHZvaWQgMCxcblx0ICAgIGJ1aWxkRGF5cyA9IHZvaWQgMCxcblx0ICAgIGJ1aWxkV2Vla3MgPSB2b2lkIDAsXG5cdCAgICBidWlsZFRpbWUgPSB2b2lkIDAsXG5cdCAgICB0aW1lV3JhcHBlciA9IHZvaWQgMCxcblx0ICAgIHllYXJTY3JvbGwgPSB2b2lkIDAsXG5cdCAgICB1cGRhdGVWYWx1ZSA9IHZvaWQgMCxcblx0ICAgIGFtUE1Ub2dnbGUgPSB2b2lkIDAsXG5cdCAgICBvbktleURvd24gPSB2b2lkIDAsXG5cdCAgICBvblJlc2l6ZSA9IHZvaWQgMCxcblx0ICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGggPSB2b2lkIDAsXG5cdCAgICBoYW5kbGVZZWFyQ2hhbmdlID0gdm9pZCAwLFxuXHQgICAgY2hhbmdlTW9udGggPSB2b2lkIDAsXG5cdCAgICBnZXREYXlzaW5Nb250aCA9IHZvaWQgMCxcblx0ICAgIGRvY3VtZW50Q2xpY2sgPSB2b2lkIDAsXG5cdCAgICBzZWxlY3REYXRlID0gdm9pZCAwLFxuXHQgICAgZ2V0UmFuZG9tQ2FsZW5kYXJJZFN0ciA9IHZvaWQgMCxcblx0ICAgIGJpbmQgPSB2b2lkIDAsXG5cdCAgICB0cmlnZ2VyQ2hhbmdlID0gdm9pZCAwO1xuXG5cdC8vIGVsZW1lbnRzICYgdmFyaWFibGVzXG5cdHZhciBjYWxlbmRhckNvbnRhaW5lciA9IHZvaWQgMCxcblx0ICAgIHdlZWtkYXlDb250YWluZXIgPSB2b2lkIDAsXG5cdCAgICB0aW1lQ29udGFpbmVyID0gdm9pZCAwLFxuXHQgICAgbmF2aWdhdGlvbkN1cnJlbnRNb250aCA9IHZvaWQgMCxcblx0ICAgIG1vbnRoc05hdiA9IHZvaWQgMCxcblx0ICAgIHByZXZNb250aE5hdiA9IHZvaWQgMCxcblx0ICAgIGN1cnJlbnRZZWFyRWxlbWVudCA9IHZvaWQgMCxcblx0ICAgIGN1cnJlbnRNb250aEVsZW1lbnQgPSB2b2lkIDAsXG5cdCAgICBuZXh0TW9udGhOYXYgPSB2b2lkIDAsXG5cdCAgICBjYWxlbmRhciA9IHZvaWQgMCxcblx0ICAgIHdlZWtOdW1iZXJzID0gdm9pZCAwLFxuXHQgICAgbm93ID0gbmV3IERhdGUoKSxcblx0ICAgIHdyYXBwZXJFbGVtZW50ID0gdm9pZCAwLFxuXHQgICAgY2xpY2tFdnQgPSB2b2lkIDA7XG5cblx0c2VsZi5mb3JtYXRzID0ge1xuXHRcdC8vIHdlZWtkYXkgbmFtZSwgc2hvcnQsIGUuZy4gVGh1XG5cdFx0RDogZnVuY3Rpb24gRCgpIHtcblx0XHRcdHJldHVybiBzZWxmLmwxMG4ud2Vla2RheXMuc2hvcnRoYW5kW3NlbGYuZm9ybWF0cy53KCldO1xuXHRcdH0sXG5cblx0XHQvLyBmdWxsIG1vbnRoIG5hbWUgZS5nLiBKYW51YXJ5XG5cdFx0RjogZnVuY3Rpb24gRigpIHtcblx0XHRcdHJldHVybiBtb250aFRvU3RyKHNlbGYuZm9ybWF0cy5uKCkgLSAxLCBmYWxzZSk7XG5cdFx0fSxcblxuXHRcdC8vIGhvdXJzIHdpdGggbGVhZGluZyB6ZXJvIGUuZy4gMDNcblx0XHRIOiBmdW5jdGlvbiBIKCkge1xuXHRcdFx0cmV0dXJuIHBhZChzZWxmLnNlbGVjdGVkRGF0ZU9iai5nZXRIb3VycygpKTtcblx0XHR9LFxuXG5cdFx0Ly8gZGF5ICgxLTMwKSB3aXRoIG9yZGluYWwgc3VmZml4IGUuZy4gMXN0LCAybmRcblx0XHRKOiBmdW5jdGlvbiBKKCkge1xuXHRcdFx0cmV0dXJuIHNlbGYuZm9ybWF0cy5qKCkgKyBzZWxmLmwxMG4ub3JkaW5hbChzZWxmLmZvcm1hdHMuaigpKTtcblx0XHR9LFxuXG5cdFx0Ly8gQU0vUE1cblx0XHRLOiBmdW5jdGlvbiBLKCkge1xuXHRcdFx0cmV0dXJuIHNlbGYuc2VsZWN0ZWREYXRlT2JqLmdldEhvdXJzKCkgPiAxMSA/IFwiUE1cIiA6IFwiQU1cIjtcblx0XHR9LFxuXG5cdFx0Ly8gc2hvcnRoYW5kIG1vbnRoIGUuZy4gSmFuLCBTZXAsIE9jdCwgZXRjXG5cdFx0TTogZnVuY3Rpb24gTSgpIHtcblx0XHRcdHJldHVybiBtb250aFRvU3RyKHNlbGYuZm9ybWF0cy5uKCkgLSAxLCB0cnVlKTtcblx0XHR9LFxuXG5cdFx0Ly8gc2Vjb25kcyAwMC01OVxuXHRcdFM6IGZ1bmN0aW9uIFMoKSB7XG5cdFx0XHRyZXR1cm4gcGFkKHNlbGYuc2VsZWN0ZWREYXRlT2JqLmdldFNlY29uZHMoKSk7XG5cdFx0fSxcblxuXHRcdC8vIHVuaXggdGltZXN0YW1wXG5cdFx0VTogZnVuY3Rpb24gVSgpIHtcblx0XHRcdHJldHVybiBzZWxmLnNlbGVjdGVkRGF0ZU9iai5nZXRUaW1lKCkgLyAxMDAwO1xuXHRcdH0sXG5cblx0XHQvLyBmdWxsIHllYXIgZS5nLiAyMDE2XG5cdFx0WTogZnVuY3Rpb24gWSgpIHtcblx0XHRcdHJldHVybiBzZWxmLnNlbGVjdGVkRGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuXHRcdH0sXG5cblx0XHQvLyBkYXkgaW4gbW9udGgsIHBhZGRlZCAoMDEtMzApXG5cdFx0ZDogZnVuY3Rpb24gZCgpIHtcblx0XHRcdHJldHVybiBwYWQoc2VsZi5mb3JtYXRzLmooKSk7XG5cdFx0fSxcblxuXHRcdC8vIGhvdXIgZnJvbSAxLTEyIChhbS9wbSlcblx0XHRoOiBmdW5jdGlvbiBoKCkge1xuXHRcdFx0cmV0dXJuIHNlbGYuc2VsZWN0ZWREYXRlT2JqLmdldEhvdXJzKCkgJSAxMiA/IHNlbGYuc2VsZWN0ZWREYXRlT2JqLmdldEhvdXJzKCkgJSAxMiA6IDEyO1xuXHRcdH0sXG5cblx0XHQvLyBtaW51dGVzLCBwYWRkZWQgd2l0aCBsZWFkaW5nIHplcm8gZS5nLiAwOVxuXHRcdGk6IGZ1bmN0aW9uIGkoKSB7XG5cdFx0XHRyZXR1cm4gcGFkKHNlbGYuc2VsZWN0ZWREYXRlT2JqLmdldE1pbnV0ZXMoKSk7XG5cdFx0fSxcblxuXHRcdC8vIGRheSBpbiBtb250aCAoMS0zMClcblx0XHRqOiBmdW5jdGlvbiBqKCkge1xuXHRcdFx0cmV0dXJuIHNlbGYuc2VsZWN0ZWREYXRlT2JqLmdldERhdGUoKTtcblx0XHR9LFxuXG5cdFx0Ly8gd2Vla2RheSBuYW1lLCBmdWxsLCBlLmcuIFRodXJzZGF5XG5cdFx0bDogZnVuY3Rpb24gbCgpIHtcblx0XHRcdHJldHVybiBzZWxmLmwxMG4ud2Vla2RheXMubG9uZ2hhbmRbc2VsZi5mb3JtYXRzLncoKV07XG5cdFx0fSxcblxuXHRcdC8vIHBhZGRlZCBtb250aCBudW1iZXIgKDAxLTEyKVxuXHRcdG06IGZ1bmN0aW9uIG0oKSB7XG5cdFx0XHRyZXR1cm4gcGFkKHNlbGYuZm9ybWF0cy5uKCkpO1xuXHRcdH0sXG5cblx0XHQvLyB0aGUgbW9udGggbnVtYmVyICgxLTEyKVxuXHRcdG46IGZ1bmN0aW9uIG4oKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5zZWxlY3RlZERhdGVPYmouZ2V0TW9udGgoKSArIDE7XG5cdFx0fSxcblxuXHRcdC8vIHNlY29uZHMgMC01OVxuXHRcdHM6IGZ1bmN0aW9uIHMoKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5zZWxlY3RlZERhdGVPYmouZ2V0U2Vjb25kcygpO1xuXHRcdH0sXG5cblx0XHQvLyBudW1iZXIgb2YgdGhlIGRheSBvZiB0aGUgd2Vla1xuXHRcdHc6IGZ1bmN0aW9uIHcoKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5zZWxlY3RlZERhdGVPYmouZ2V0RGF5KCk7XG5cdFx0fSxcblxuXHRcdC8vIGxhc3QgdHdvIGRpZ2l0cyBvZiB5ZWFyIGUuZy4gMTYgZm9yIDIwMTZcblx0XHR5OiBmdW5jdGlvbiB5KCkge1xuXHRcdFx0cmV0dXJuIFN0cmluZyhzZWxmLmZvcm1hdHMuWSgpKS5zdWJzdHJpbmcoMik7XG5cdFx0fVxuXHR9O1xuXG5cdHNlbGYuZGVmYXVsdENvbmZpZyA9IHtcblx0XHQvKiBpZiB0cnVlLCBkYXRlcyB3aWxsIGJlIHBhcnNlZCwgZm9ybWF0dGVkLCBhbmQgZGlzcGxheWVkIGluIFVUQy5cbiAgcHJlbG9hZGluZyBkYXRlIHN0cmluZ3Mgdy8gdGltZXpvbmVzIGlzIHJlY29tbWVuZGVkIGJ1dCBub3QgbmVjZXNzYXJ5ICovXG5cdFx0dXRjOiBmYWxzZSxcblxuXHRcdC8vIHdyYXA6IHNlZSBodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvI3N0cmFwXG5cdFx0d3JhcDogZmFsc2UsXG5cblx0XHQvLyBlbmFibGVzIHdlZWsgbnVtYmVyc1xuXHRcdHdlZWtOdW1iZXJzOiBmYWxzZSxcblxuXHRcdGFsbG93SW5wdXQ6IGZhbHNlLFxuXG5cdFx0LypcbiAgXHRjbGlja2luZyBvbiBpbnB1dCBvcGVucyB0aGUgZGF0ZSh0aW1lKXBpY2tlci5cbiAgXHRkaXNhYmxlIGlmIHlvdSB3aXNoIHRvIG9wZW4gdGhlIGNhbGVuZGFyIG1hbnVhbGx5IHdpdGggLm9wZW4oKVxuICAqL1xuXHRcdGNsaWNrT3BlbnM6IHRydWUsXG5cblx0XHQvLyBkaXNwbGF5IHRpbWUgcGlja2VyIGluIDI0IGhvdXIgbW9kZVxuXHRcdHRpbWVfMjRocjogZmFsc2UsXG5cblx0XHQvLyBlbmFibGVzIHRoZSB0aW1lIHBpY2tlciBmdW5jdGlvbmFsaXR5XG5cdFx0ZW5hYmxlVGltZTogZmFsc2UsXG5cblx0XHQvLyBub0NhbGVuZGFyOiB0cnVlIHdpbGwgaGlkZSB0aGUgY2FsZW5kYXIuIHVzZSBmb3IgYSB0aW1lIHBpY2tlciBhbG9uZyB3LyBlbmFibGVUaW1lXG5cdFx0bm9DYWxlbmRhcjogZmFsc2UsXG5cblx0XHQvLyBtb3JlIGRhdGUgZm9ybWF0IGNoYXJzIGF0IGh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci8jZGF0ZWZvcm1hdFxuXHRcdGRhdGVGb3JtYXQ6IFwiWS1tLWRcIixcblxuXHRcdC8vIGFsdElucHV0IC0gc2VlIGh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci8jYWx0aW5wdXRcblx0XHRhbHRJbnB1dDogZmFsc2UsXG5cblx0XHQvLyB0aGUgY3JlYXRlZCBhbHRJbnB1dCBlbGVtZW50IHdpbGwgaGF2ZSB0aGlzIGNsYXNzLlxuXHRcdGFsdElucHV0Q2xhc3M6IFwiXCIsXG5cblx0XHQvLyBzYW1lIGFzIGRhdGVGb3JtYXQsIGJ1dCBmb3IgYWx0SW5wdXRcblx0XHRhbHRGb3JtYXQ6IFwiRiBqLCBZXCIsIC8vIGRlZmF1bHRzIHRvIGUuZy4gSnVuZSAxMCwgMjAxNlxuXG5cdFx0Ly8gZGVmYXVsdERhdGUgLSBlaXRoZXIgYSBkYXRlc3RyaW5nIG9yIGEgZGF0ZSBvYmplY3QuIHVzZWQgZm9yIGRhdGV0aW1lcGlja2VyXCJzIGluaXRpYWwgdmFsdWVcblx0XHRkZWZhdWx0RGF0ZTogbnVsbCxcblxuXHRcdC8vIHRoZSBtaW5pbXVtIGRhdGUgdGhhdCB1c2VyIGNhbiBwaWNrIChpbmNsdXNpdmUpXG5cdFx0bWluRGF0ZTogbnVsbCxcblxuXHRcdC8vIHRoZSBtYXhpbXVtIGRhdGUgdGhhdCB1c2VyIGNhbiBwaWNrIChpbmNsdXNpdmUpXG5cdFx0bWF4RGF0ZTogbnVsbCxcblxuXHRcdC8vIGRhdGVwYXJzZXIgdGhhdCB0cmFuc2Zvcm1zIGEgZ2l2ZW4gc3RyaW5nIHRvIGEgZGF0ZSBvYmplY3Rcblx0XHRwYXJzZURhdGU6IG51bGwsXG5cblx0XHQvLyBzZWUgaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyLyNkaXNhYmxlXG5cdFx0ZW5hYmxlOiBbXSxcblxuXHRcdC8vIHNlZSBodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvI2Rpc2FibGVcblx0XHRkaXNhYmxlOiBbXSxcblxuXHRcdC8vIGRpc3BsYXkgdGhlIHNob3J0IHZlcnNpb24gb2YgbW9udGggbmFtZXMgLSBlLmcuIFNlcCBpbnN0ZWFkIG9mIFNlcHRlbWJlclxuXHRcdHNob3J0aGFuZEN1cnJlbnRNb250aDogZmFsc2UsXG5cblx0XHQvLyBkaXNwbGF5cyBjYWxlbmRhciBpbmxpbmUuIHNlZSBodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvI2lubGluZS1jYWxlbmRhclxuXHRcdGlubGluZTogZmFsc2UsXG5cblx0XHQvLyBwb3NpdGlvbiBjYWxlbmRhciBpbnNpZGUgd3JhcHBlciBhbmQgbmV4dCB0byB0aGUgaW5wdXQgZWxlbWVudFxuXHRcdC8vIGxlYXZlIGF0IGZhbHNlIHVubGVzcyB5b3Uga25vdyB3aGF0IHlvdVwicmUgZG9pbmdcblx0XHRzdGF0aWM6IGZhbHNlLFxuXG5cdFx0Ly8gY29kZSBmb3IgcHJldmlvdXMvbmV4dCBpY29ucy4gdGhpcyBpcyB3aGVyZSB5b3UgcHV0IHlvdXIgY3VzdG9tIGljb24gY29kZSBlLmcuIGZvbnRhd2Vzb21lXG5cdFx0cHJldkFycm93OiBcIiZsdDtcIixcblx0XHRuZXh0QXJyb3c6IFwiJmd0O1wiLFxuXG5cdFx0Ly8gZW5hYmxlcyBzZWNvbmRzIGluIHRoZSB0aW1lIHBpY2tlclxuXHRcdGVuYWJsZVNlY29uZHM6IGZhbHNlLFxuXG5cdFx0Ly8gc3RlcCBzaXplIHVzZWQgd2hlbiBzY3JvbGxpbmcvaW5jcmVtZW50aW5nIHRoZSBob3VyIGVsZW1lbnRcblx0XHRob3VySW5jcmVtZW50OiAxLFxuXG5cdFx0Ly8gc3RlcCBzaXplIHVzZWQgd2hlbiBzY3JvbGxpbmcvaW5jcmVtZW50aW5nIHRoZSBtaW51dGUgZWxlbWVudFxuXHRcdG1pbnV0ZUluY3JlbWVudDogNSxcblxuXHRcdC8vIG9uQ2hhbmdlIGNhbGxiYWNrIHdoZW4gdXNlciBzZWxlY3RzIGEgZGF0ZSBvciB0aW1lXG5cdFx0b25DaGFuZ2U6IG51bGwsIC8vIGZ1bmN0aW9uIChkYXRlT2JqLCBkYXRlU3RyKSB7fVxuXG5cdFx0Ly8gY2FsbGVkIGV2ZXJ5IHRpbWUgY2FsZW5kYXIgaXMgb3BlbmVkXG5cdFx0b25PcGVuOiBudWxsLCAvLyBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF0ZVN0cikge31cblxuXHRcdC8vIGNhbGxlZCBldmVyeSB0aW1lIGNhbGVuZGFyIGlzIGNsb3NlZFxuXHRcdG9uQ2xvc2U6IG51bGwsIC8vIGZ1bmN0aW9uIChkYXRlT2JqLCBkYXRlU3RyKSB7fVxuXG5cdFx0b25WYWx1ZVVwZGF0ZTogbnVsbFxuXHR9O1xuXG5cdGluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuXHRcdGluc3RhbmNlQ29uZmlnID0gaW5zdGFuY2VDb25maWcgfHwge307XG5cblx0XHRzZWxmLmVsZW1lbnQgPSBlbGVtZW50O1xuXG5cdFx0cGFyc2VDb25maWcoKTtcblxuXHRcdHNlbGYuaW5wdXQgPSBzZWxmLmNvbmZpZy53cmFwID8gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaW5wdXRdXCIpIDogZWxlbWVudDtcblx0XHRzZWxmLmlucHV0LmNsYXNzTGlzdC5hZGQoXCJmbGF0cGlja3ItaW5wdXRcIik7XG5cblx0XHRpZiAoc2VsZi5jb25maWcuZGVmYXVsdERhdGUpIHtcblx0XHRcdHNlbGYuY29uZmlnLmRlZmF1bHREYXRlID0gdURhdGUoc2VsZi5jb25maWcuZGVmYXVsdERhdGUpO1xuXHRcdH1cblxuXHRcdGlmIChzZWxmLmlucHV0LnZhbHVlIHx8IHNlbGYuY29uZmlnLmRlZmF1bHREYXRlKSB7XG5cdFx0XHRzZWxmLnNlbGVjdGVkRGF0ZU9iaiA9IHVEYXRlKHNlbGYuY29uZmlnLmRlZmF1bHREYXRlIHx8IHNlbGYuaW5wdXQudmFsdWUpO1xuXHRcdH1cblxuXHRcdHdyYXAoKTtcblx0XHRidWlsZENhbGVuZGFyKCk7XG5cdFx0YmluZCgpO1xuXG5cdFx0c2VsZi51RGF0ZSA9IHVEYXRlO1xuXHRcdHNlbGYuanVtcFRvRGF0ZSgpO1xuXHRcdHVwZGF0ZVZhbHVlKCk7XG5cdH07XG5cblx0cGFyc2VDb25maWcgPSBmdW5jdGlvbiBwYXJzZUNvbmZpZygpIHtcblx0XHRzZWxmLmNvbmZpZyA9IHt9O1xuXG5cdFx0T2JqZWN0LmtleXMoc2VsZi5kZWZhdWx0Q29uZmlnKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdGlmIChpbnN0YW5jZUNvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdHNlbGYuY29uZmlnW2tleV0gPSBpbnN0YW5jZUNvbmZpZ1trZXldO1xuXHRcdFx0fSBlbHNlIGlmIChzZWxmLmVsZW1lbnQuZGF0YXNldCAmJiBzZWxmLmVsZW1lbnQuZGF0YXNldC5oYXNPd25Qcm9wZXJ0eShrZXkudG9Mb3dlckNhc2UoKSkpIHtcblx0XHRcdFx0c2VsZi5jb25maWdba2V5XSA9IHNlbGYuZWxlbWVudC5kYXRhc2V0W2tleS50b0xvd2VyQ2FzZSgpXTtcblx0XHRcdH0gZWxzZSBpZiAoIXNlbGYuZWxlbWVudC5kYXRhc2V0ICYmIHNlbGYuZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLVwiICsga2V5KSkge1xuXHRcdFx0XHRzZWxmLmNvbmZpZ1trZXldID0gc2VsZi5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtXCIgKyBrZXkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5jb25maWdba2V5XSA9IGZsYXRwaWNrci5pbml0LnByb3RvdHlwZS5kZWZhdWx0Q29uZmlnW2tleV0gfHwgc2VsZi5kZWZhdWx0Q29uZmlnW2tleV07XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2Ygc2VsZi5kZWZhdWx0Q29uZmlnW2tleV0gPT09IFwiYm9vbGVhblwiKSB7XG5cdFx0XHRcdHNlbGYuY29uZmlnW2tleV0gPSBzZWxmLmNvbmZpZ1trZXldID09PSB0cnVlIHx8IHNlbGYuY29uZmlnW2tleV0gPT09IFwiXCIgfHwgc2VsZi5jb25maWdba2V5XSA9PT0gXCJ0cnVlXCI7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrZXkgPT09IFwiZW5hYmxlVGltZVwiICYmIHNlbGYuY29uZmlnW2tleV0pIHtcblx0XHRcdFx0c2VsZi5kZWZhdWx0Q29uZmlnLmRhdGVGb3JtYXQgPSAhc2VsZi5jb25maWcudGltZV8yNGhyID8gXCJZLW0tZCBoOmkgS1wiIDogXCJZLW0tZCBIOmlcIjtcblx0XHRcdFx0c2VsZi5kZWZhdWx0Q29uZmlnLmFsdEZvcm1hdCA9ICFzZWxmLmNvbmZpZy50aW1lXzI0aHIgPyBcIkYgaiBZLCBoOmkgS1wiIDogXCJGIGosIFkgSDppXCI7XG5cdFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gXCJub0NhbGVuZGFyXCIgJiYgc2VsZi5jb25maWdba2V5XSkge1xuXHRcdFx0XHRzZWxmLmRlZmF1bHRDb25maWcuZGF0ZUZvcm1hdCA9IFwiaDppIEtcIjtcblx0XHRcdFx0c2VsZi5kZWZhdWx0Q29uZmlnLmFsdEZvcm1hdCA9IFwiaDppIEtcIjtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRnZXRSYW5kb21DYWxlbmRhcklkU3RyID0gZnVuY3Rpb24gZ2V0UmFuZG9tQ2FsZW5kYXJJZFN0cigpIHtcblx0XHR2YXIgcmFuZE51bSA9IHZvaWQgMCxcblx0XHQgICAgaWRTdHIgPSB2b2lkIDA7XG5cdFx0ZG8ge1xuXHRcdFx0cmFuZE51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIE1hdGgucG93KDEwLCAxMCkpO1xuXHRcdFx0aWRTdHIgPSBcImZsYXRwaWNrci1cIiArIHJhbmROdW07XG5cdFx0fSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRTdHIpICE9PSBudWxsKTtcblxuXHRcdHJldHVybiBpZFN0cjtcblx0fTtcblxuXHR1RGF0ZSA9IGZ1bmN0aW9uIHVEYXRlKGRhdGUsIHRpbWVsZXNzKSB7XG5cdFx0dGltZWxlc3MgPSB0aW1lbGVzcyB8fCBmYWxzZTtcblxuXHRcdGlmIChkYXRlID09PSBcInRvZGF5XCIpIHtcblx0XHRcdGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0dGltZWxlc3MgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGRhdGUgPSBkYXRlLnRyaW0oKTtcblxuXHRcdFx0aWYgKHNlbGYuY29uZmlnLnBhcnNlRGF0ZSkge1xuXHRcdFx0XHRkYXRlID0gc2VsZi5jb25maWcucGFyc2VEYXRlKGRhdGUpO1xuXHRcdFx0fSBlbHNlIGlmICgvXlxcZFxcZFxcZFxcZFxcLVxcZHsxLDJ9XFwtXFxkXFxkJC8udGVzdChkYXRlKSkge1xuXHRcdFx0XHQvLyB0aGlzIHV0YyBkYXRlc3RyaW5nIGdldHMgcGFyc2VkLCBidXQgaW5jb3JyZWN0bHkgYnkgRGF0ZS5wYXJzZVxuXHRcdFx0XHRkYXRlID0gbmV3IERhdGUoZGF0ZS5yZXBsYWNlKC8oXFxkKS0oXFxkKS9nLCBcIiQxLyQyXCIpKTtcblx0XHRcdH0gZWxzZSBpZiAoRGF0ZS5wYXJzZShkYXRlKSkge1xuXHRcdFx0XHRkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG5cdFx0XHR9IGVsc2UgaWYgKC9eXFxkXFxkXFxkXFxkXFwtXFxkXFxkXFwtXFxkXFxkLy50ZXN0KGRhdGUpKSB7XG5cdFx0XHRcdC8vIGRpc2FibGUgc3BlY2lhbCB1dGMgZGF0ZXN0cmluZ1xuXHRcdFx0XHRkYXRlID0gbmV3IERhdGUoZGF0ZS5yZXBsYWNlKC8oXFxkKS0oXFxkKS9nLCBcIiQxLyQyXCIpKTtcblx0XHRcdH0gZWxzZSBpZiAoL14oXFxkP1xcZCk6KFxcZFxcZCkvLnRlc3QoZGF0ZSkpIHtcblx0XHRcdFx0Ly8gdGltZS1vbmx5IHBpY2tlclxuXHRcdFx0XHR2YXIgbWF0Y2hlcyA9IGRhdGUubWF0Y2goL14oXFxkP1xcZCk6KFxcZFxcZCkoOihcXGRcXGQpKT8vKSxcblx0XHRcdFx0ICAgIHNlY29uZHMgPSBtYXRjaGVzWzRdICE9PSB1bmRlZmluZWQgPyBtYXRjaGVzWzRdIDogMDtcblxuXHRcdFx0XHRkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdFx0ZGF0ZS5zZXRIb3VycyhtYXRjaGVzWzFdLCBtYXRjaGVzWzJdLCBzZWNvbmRzLCAwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJmbGF0cGlja3I6IGludmFsaWQgZGF0ZSBzdHJpbmcgXCIgKyBkYXRlKTtcblx0XHRcdFx0Y29uc29sZS5pbmZvKHNlbGYuZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHx8ICFkYXRlLmdldFRpbWUoKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHNlbGYuY29uZmlnLnV0YyAmJiAhZGF0ZS5mcF9pc1VUQykge1xuXHRcdFx0ZGF0ZSA9IGRhdGUuZnBfdG9VVEMoKTtcblx0XHR9XG5cblx0XHRpZiAodGltZWxlc3MpIHtcblx0XHRcdGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGU7XG5cdH07XG5cblx0ZXF1YWxEYXRlcyA9IGZ1bmN0aW9uIGVxdWFsRGF0ZXMoZGF0ZTEsIGRhdGUyKSB7XG5cdFx0cmV0dXJuIGRhdGUxLmdldERhdGUoKSA9PT0gZGF0ZTIuZ2V0RGF0ZSgpICYmIGRhdGUxLmdldE1vbnRoKCkgPT09IGRhdGUyLmdldE1vbnRoKCkgJiYgZGF0ZTEuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZTIuZ2V0RnVsbFllYXIoKTtcblx0fTtcblxuXHR3cmFwID0gZnVuY3Rpb24gd3JhcCgpIHtcblx0XHR3cmFwcGVyRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd3JhcHBlclwiKTtcblxuXHRcdGlmIChzZWxmLmNvbmZpZy5pbmxpbmUgfHwgc2VsZi5jb25maWcuc3RhdGljKSB7XG5cdFx0XHQvLyBXcmFwIGlucHV0IGFuZCBwbGFjZSBjYWxlbmRhciB1bmRlcm5lYXRoXG5cdFx0XHRzZWxmLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlckVsZW1lbnQsIHNlbGYuZWxlbWVudCk7XG5cdFx0XHR3cmFwcGVyRWxlbWVudC5hcHBlbmRDaGlsZChzZWxmLmVsZW1lbnQpO1xuXG5cdFx0XHR3cmFwcGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKHNlbGYuY29uZmlnLmlubGluZSA/IFwiaW5saW5lXCIgOiBcInN0YXRpY1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gSW5zZXJ0IGF0IGJvdHRvbSBvZiBCT0RZIHRhZyB0byBkaXNwbGF5IG91dHNpZGVcblx0XHRcdC8vIG9mIHJlbGF0aXZlIHBvc2l0aW9uZWQgZWxlbWVudHMgd2l0aCBjc3MgXCJvdmVyZmxvdzogaGlkZGVuO1wiXG5cdFx0XHQvLyBwcm9wZXJ0eSBzZXQuXG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdyYXBwZXJFbGVtZW50KTtcblx0XHR9XG5cblx0XHRpZiAoc2VsZi5jb25maWcuYWx0SW5wdXQpIHtcblx0XHRcdC8vIHJlcGxpY2F0ZSBzZWxmLmVsZW1lbnRcblx0XHRcdHNlbGYuYWx0SW5wdXQgPSBjcmVhdGVFbGVtZW50KHNlbGYuaW5wdXQubm9kZU5hbWUsIHNlbGYuY29uZmlnLmFsdElucHV0Q2xhc3MgKyBcIiBmbGF0cGlja3ItaW5wdXRcIik7XG5cdFx0XHRzZWxmLmFsdElucHV0LnBsYWNlaG9sZGVyID0gc2VsZi5pbnB1dC5wbGFjZWhvbGRlcjtcblx0XHRcdHNlbGYuYWx0SW5wdXQudHlwZSA9IFwidGV4dFwiO1xuXG5cdFx0XHRzZWxmLmlucHV0LnR5cGUgPSBcImhpZGRlblwiO1xuXHRcdFx0c2VsZi5pbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLmFsdElucHV0LCBzZWxmLmlucHV0Lm5leHRTaWJsaW5nKTtcblx0XHR9XG5cdH07XG5cblx0Z2V0RGF5c2luTW9udGggPSBmdW5jdGlvbiBnZXREYXlzaW5Nb250aCgpIHtcblx0XHR2YXIgbW9udGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBzZWxmLmN1cnJlbnRNb250aCA6IGFyZ3VtZW50c1swXTtcblxuXHRcdHZhciB5ciA9IHNlbGYuY3VycmVudFllYXI7XG5cblx0XHRpZiAobW9udGggPT09IDEgJiYgKHlyICUgNCA9PT0gMCAmJiB5ciAlIDEwMCAhPT0gMCB8fCB5ciAlIDQwMCA9PT0gMCkpIHtcblx0XHRcdHJldHVybiAyOTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2VsZi5sMTBuLmRheXNJbk1vbnRoW21vbnRoXTtcblx0fTtcblxuXHR1cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKGUpIHtcblx0XHRpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhciAmJiAhc2VsZi5zZWxlY3RlZERhdGVPYmopIHtcblx0XHRcdC8vIHBpY2tpbmcgdGltZSBvbmx5IGFuZCBtZXRob2QgdHJpZ2dlcmVkIGZyb20gcGlja2VyXG5cdFx0XHRzZWxmLnNlbGVjdGVkRGF0ZU9iaiA9IG5ldyBEYXRlKCk7XG5cdFx0fSBlbHNlIGlmICghc2VsZi5zZWxlY3RlZERhdGVPYmopIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZSkge1xuXHRcdFx0ZS50YXJnZXQuYmx1cigpO1xuXHRcdH1cblxuXHRcdHZhciB0aW1lSGFzQ2hhbmdlZCA9IHZvaWQgMDtcblxuXHRcdGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XG5cdFx0XHR2YXIgcHJldmlvdXNUaW1lc3RhbXAgPSBzZWxmLnNlbGVjdGVkRGF0ZU9iai5nZXRUaW1lKCk7XG5cblx0XHRcdC8vIHVwZGF0ZSB0aW1lXG5cdFx0XHR2YXIgaG91cnMgPSBwYXJzZUludChzZWxmLmhvdXJFbGVtZW50LnZhbHVlLCAxMCkgfHwgMCxcblx0XHRcdCAgICBzZWNvbmRzID0gdm9pZCAwO1xuXG5cdFx0XHR2YXIgbWludXRlcyA9ICg2MCArIChwYXJzZUludChzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUsIDEwKSB8fCAwKSkgJSA2MDtcblxuXHRcdFx0aWYgKHNlbGYuY29uZmlnLmVuYWJsZVNlY29uZHMpIHtcblx0XHRcdFx0c2Vjb25kcyA9ICg2MCArIHBhcnNlSW50KHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSwgMTApIHx8IDApICUgNjA7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghc2VsZi5jb25maWcudGltZV8yNGhyKSB7XG5cdFx0XHRcdC8vIHRoZSByZWFsIG51bWJlciBvZiBob3VycyBmb3IgdGhlIGRhdGUgb2JqZWN0XG5cdFx0XHRcdGhvdXJzID0gaG91cnMgJSAxMiArIDEyICogKHNlbGYuYW1QTS5pbm5lckhUTUwgPT09IFwiUE1cIik7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGYuc2VsZWN0ZWREYXRlT2JqLnNldEhvdXJzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzID09PSB1bmRlZmluZWQgPyBzZWxmLnNlbGVjdGVkRGF0ZU9iai5nZXRTZWNvbmRzKCkgOiBzZWNvbmRzKTtcblxuXHRcdFx0c2VsZi5ob3VyRWxlbWVudC52YWx1ZSA9IHBhZCghc2VsZi5jb25maWcudGltZV8yNGhyID8gKDEyICsgaG91cnMpICUgMTIgKyAxMiAqIChob3VycyAlIDEyID09PSAwKSA6IGhvdXJzKTtcblx0XHRcdHNlbGYubWludXRlRWxlbWVudC52YWx1ZSA9IHBhZChtaW51dGVzKTtcblxuXHRcdFx0aWYgKHNlY29uZHMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUgPSBwYWQoc2Vjb25kcyk7XG5cdFx0XHR9XG5cblx0XHRcdHRpbWVIYXNDaGFuZ2VkID0gc2VsZi5zZWxlY3RlZERhdGVPYmouZ2V0VGltZSgpICE9PSBwcmV2aW91c1RpbWVzdGFtcDtcblx0XHR9XG5cblx0XHRzZWxmLmlucHV0LnZhbHVlID0gc2VsZi5mb3JtYXREYXRlKHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpO1xuXG5cdFx0aWYgKHNlbGYuYWx0SW5wdXQpIHtcblx0XHRcdHNlbGYuYWx0SW5wdXQudmFsdWUgPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5jb25maWcuYWx0Rm9ybWF0KTtcblx0XHR9XG5cblx0XHRpZiAoZSAmJiAodGltZUhhc0NoYW5nZWQgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhdHBpY2tyLWRheVwiKSkpIHtcblx0XHRcdHRyaWdnZXJDaGFuZ2UoKTtcblx0XHR9XG5cblx0XHRpZiAoc2VsZi5jb25maWcub25WYWx1ZVVwZGF0ZSkge1xuXHRcdFx0c2VsZi5jb25maWcub25WYWx1ZVVwZGF0ZShzZWxmLnNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5pbnB1dC52YWx1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdHBhZCA9IGZ1bmN0aW9uIHBhZChudW0pIHtcblx0XHRyZXR1cm4gKFwiMFwiICsgbnVtKS5zbGljZSgtMik7XG5cdH07XG5cblx0c2VsZi5mb3JtYXREYXRlID0gZnVuY3Rpb24gKGRhdGVGb3JtYXQpIHtcblx0XHR2YXIgZm9ybWF0dGVkRGF0ZSA9IFwiXCI7XG5cdFx0dmFyIGZvcm1hdFBpZWNlcyA9IGRhdGVGb3JtYXQuc3BsaXQoXCJcIik7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGZvcm1hdFBpZWNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGMgPSBmb3JtYXRQaWVjZXNbaV07XG5cdFx0XHRpZiAoc2VsZi5mb3JtYXRzLmhhc093blByb3BlcnR5KGMpICYmIGZvcm1hdFBpZWNlc1tpIC0gMV0gIT09IFwiXFxcXFwiKSB7XG5cdFx0XHRcdGZvcm1hdHRlZERhdGUgKz0gc2VsZi5mb3JtYXRzW2NdKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGMgIT09IFwiXFxcXFwiKSB7XG5cdFx0XHRcdGZvcm1hdHRlZERhdGUgKz0gYztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZm9ybWF0dGVkRGF0ZTtcblx0fTtcblxuXHRtb250aFRvU3RyID0gZnVuY3Rpb24gbW9udGhUb1N0cihkYXRlLCBzaG9ydGhhbmQpIHtcblx0XHRpZiAoc2hvcnRoYW5kIHx8IHNlbGYuY29uZmlnLnNob3J0aGFuZEN1cnJlbnRNb250aCkge1xuXHRcdFx0cmV0dXJuIHNlbGYubDEwbi5tb250aHMuc2hvcnRoYW5kW2RhdGVdO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZWxmLmwxMG4ubW9udGhzLmxvbmdoYW5kW2RhdGVdO1xuXHR9O1xuXG5cdGlzRW5hYmxlZCA9IGZ1bmN0aW9uIGlzRW5hYmxlZChkYXRlVG9DaGVjaykge1xuXHRcdGlmIChzZWxmLmNvbmZpZy5taW5EYXRlICYmIGRhdGVUb0NoZWNrIDwgc2VsZi5jb25maWcubWluRGF0ZSB8fCBzZWxmLmNvbmZpZy5tYXhEYXRlICYmIGRhdGVUb0NoZWNrID4gc2VsZi5jb25maWcubWF4RGF0ZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGRhdGVUb0NoZWNrID0gdURhdGUoZGF0ZVRvQ2hlY2ssIHRydWUpOyAvLyB0aW1lbGVzc1xuXG5cdFx0dmFyIGJvb2wgPSBzZWxmLmNvbmZpZy5lbmFibGUubGVuZ3RoID4gMCxcblx0XHQgICAgYXJyYXkgPSBib29sID8gc2VsZi5jb25maWcuZW5hYmxlIDogc2VsZi5jb25maWcuZGlzYWJsZTtcblxuXHRcdHZhciBkID0gdm9pZCAwO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZCA9IGFycmF5W2ldO1xuXG5cdFx0XHRpZiAoZCBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIGQoZGF0ZVRvQ2hlY2spKSB7XG5cdFx0XHRcdC8vIGRpc2FibGVkIGJ5IGZ1bmN0aW9uXG5cdFx0XHRcdHJldHVybiBib29sO1xuXHRcdFx0fSBlbHNlIGlmICggLy8gZGlzYWJsZWQgd2Vla2RheVxuXHRcdFx0dHlwZW9mIGQgPT09IFwic3RyaW5nXCIgJiYgL153a2QvLnRlc3QoZCkgJiYgZGF0ZVRvQ2hlY2suZ2V0RGF5KCkgPT09IChwYXJzZUludChkLnNsaWNlKC0xKSwgMTApICsgc2VsZi5sMTBuLmZpcnN0RGF5T2ZXZWVrIC0gMSkgJSA3KSB7XG5cdFx0XHRcdHJldHVybiBib29sO1xuXHRcdFx0fSBlbHNlIGlmICgoZCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGQgPT09IFwic3RyaW5nXCIgJiYgIS9ed2tkLy50ZXN0KGQpKSAmJiB1RGF0ZShkLCB0cnVlKS5nZXRUaW1lKCkgPT09IGRhdGVUb0NoZWNrLmdldFRpbWUoKSkge1xuXHRcdFx0XHQvLyBkaXNhYmxlZCBieSBkYXRlIHN0cmluZ1xuXHRcdFx0XHRyZXR1cm4gYm9vbDtcblx0XHRcdH0gZWxzZSBpZiAoIC8vIGRpc2FibGVkIGJ5IHJhbmdlXG5cdFx0XHQodHlwZW9mIGQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihkKSkgPT09IFwib2JqZWN0XCIgJiYgZC5oYXNPd25Qcm9wZXJ0eShcImZyb21cIikgJiYgZGF0ZVRvQ2hlY2sgPj0gdURhdGUoZC5mcm9tKSAmJiBkYXRlVG9DaGVjayA8PSB1RGF0ZShkLnRvKSkge1xuXHRcdFx0XHRyZXR1cm4gYm9vbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gIWJvb2w7XG5cdH07XG5cblx0eWVhclNjcm9sbCA9IGZ1bmN0aW9uIHllYXJTY3JvbGwoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dmFyIGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGV2ZW50LndoZWVsRGVsdGEgfHwgLWV2ZW50LmRlbHRhWSkpO1xuXHRcdHNlbGYuY3VycmVudFllYXIgPSBldmVudC50YXJnZXQudmFsdWUgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKSArIGRlbHRhO1xuXHRcdHNlbGYucmVkcmF3KCk7XG5cdH07XG5cblx0dGltZVdyYXBwZXIgPSBmdW5jdGlvbiB0aW1lV3JhcHBlcihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dmFyIG1pbiA9IHBhcnNlSW50KGUudGFyZ2V0Lm1pbiwgMTApLFxuXHRcdCAgICBtYXggPSBwYXJzZUludChlLnRhcmdldC5tYXgsIDEwKSxcblx0XHQgICAgc3RlcCA9IHBhcnNlSW50KGUudGFyZ2V0LnN0ZXAsIDEwKSxcblx0XHQgICAgdmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuXG5cdFx0dmFyIG5ld1ZhbHVlID0gdmFsdWU7XG5cblx0XHRpZiAoZS50eXBlID09PSBcIndoZWVsXCIpIHtcblx0XHRcdG5ld1ZhbHVlID0gdmFsdWUgKyBzdGVwICogTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGUud2hlZWxEZWx0YSB8fCAtZS5kZWx0YVkpKTtcblx0XHR9XG5cblx0XHRpZiAobmV3VmFsdWUgPD0gbWluKSB7XG5cdFx0XHRuZXdWYWx1ZSA9IG1heCAtIHN0ZXA7XG5cdFx0fSBlbHNlIGlmIChuZXdWYWx1ZSA+PSBtYXgpIHtcblx0XHRcdG5ld1ZhbHVlID0gbWluICsgc3RlcDtcblx0XHR9XG5cblx0XHRlLnRhcmdldC52YWx1ZSA9IHBhZChuZXdWYWx1ZSk7XG5cdH07XG5cblx0dXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCA9IGZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKSB7XG5cdFx0Y3VycmVudE1vbnRoRWxlbWVudC50ZXh0Q29udGVudCA9IG1vbnRoVG9TdHIoc2VsZi5jdXJyZW50TW9udGgpICsgXCIgXCI7XG5cdFx0Y3VycmVudFllYXJFbGVtZW50LnZhbHVlID0gc2VsZi5jdXJyZW50WWVhcjtcblx0fTtcblxuXHRoYW5kbGVZZWFyQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlWWVhckNoYW5nZSgpIHtcblx0XHRpZiAoc2VsZi5jdXJyZW50TW9udGggPCAwIHx8IHNlbGYuY3VycmVudE1vbnRoID4gMTEpIHtcblx0XHRcdHNlbGYuY3VycmVudFllYXIgKz0gc2VsZi5jdXJyZW50TW9udGggJSAxMTtcblx0XHRcdHNlbGYuY3VycmVudE1vbnRoID0gKHNlbGYuY3VycmVudE1vbnRoICsgMTIpICUgMTI7XG5cdFx0fVxuXHR9O1xuXG5cdGRvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiBkb2N1bWVudENsaWNrKGUpIHtcblx0XHR2YXIgaXNDYWxlbmRhckVsZW1lbnQgPSB3cmFwcGVyRWxlbWVudC5jb250YWlucyhlLnRhcmdldCksXG5cdFx0ICAgIGlzSW5wdXQgPSBzZWxmLmVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpIHx8IGUudGFyZ2V0ID09PSBzZWxmLmFsdElucHV0O1xuXG5cdFx0aWYgKHNlbGYuaXNPcGVuICYmICFpc0NhbGVuZGFyRWxlbWVudCAmJiAhaXNJbnB1dCkge1xuXHRcdFx0c2VsZi5jbG9zZSgpO1xuXHRcdH1cblx0fTtcblxuXHRjaGFuZ2VNb250aCA9IGZ1bmN0aW9uIGNoYW5nZU1vbnRoKG9mZnNldCkge1xuXHRcdHNlbGYuY3VycmVudE1vbnRoICs9IG9mZnNldDtcblxuXHRcdGhhbmRsZVllYXJDaGFuZ2UoKTtcblx0XHR1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XG5cdFx0YnVpbGREYXlzKCk7XG5cdFx0KHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgPyB0aW1lQ29udGFpbmVyIDogY2FsZW5kYXIpLmZvY3VzKCk7XG5cdH07XG5cblx0c2VsZWN0RGF0ZSA9IGZ1bmN0aW9uIHNlbGVjdERhdGUoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aWYgKHNlbGYuY29uZmlnLmFsbG93SW5wdXQgJiYgZS50YXJnZXQgPT09IChzZWxmLmFsdElucHV0IHx8IHNlbGYuaW5wdXQpICYmIGUud2hpY2ggPT09IDEzKSB7XG5cdFx0XHRzZWxmLnNldERhdGUoKHNlbGYuYWx0SW5wdXQgfHwgc2VsZi5pbnB1dCkudmFsdWUpO1xuXHRcdFx0c2VsZi5yZWRyYXcoKTtcblx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikpIHtcblx0XHRcdHZhciBpc1ByZXZNb250aERheSA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByZXZNb250aERheVwiKSxcblx0XHRcdCAgICBpc05leHRNb250aERheSA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5leHRNb250aERheVwiKSxcblx0XHRcdCAgICBtb250aE51bSA9IHNlbGYuY3VycmVudE1vbnRoIC0gaXNQcmV2TW9udGhEYXkgKyBpc05leHRNb250aERheTtcblxuXHRcdFx0aWYgKGlzUHJldk1vbnRoRGF5IHx8IGlzTmV4dE1vbnRoRGF5KSB7XG5cdFx0XHRcdGNoYW5nZU1vbnRoKCtpc05leHRNb250aERheSAtIGlzUHJldk1vbnRoRGF5KTtcblx0XHRcdH1cblxuXHRcdFx0c2VsZi5zZWxlY3RlZERhdGVPYmogPSBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBtb250aE51bSwgZS50YXJnZXQuaW5uZXJIVE1MKTtcblxuXHRcdFx0dXBkYXRlVmFsdWUoZSk7XG5cdFx0XHRidWlsZERheXMoKTtcblx0XHR9XG5cdH07XG5cblx0YnVpbGRDYWxlbmRhciA9IGZ1bmN0aW9uIGJ1aWxkQ2FsZW5kYXIoKSB7XG5cdFx0Y2FsZW5kYXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWNhbGVuZGFyXCIpO1xuXHRcdGNhbGVuZGFyQ29udGFpbmVyLmlkID0gZ2V0UmFuZG9tQ2FsZW5kYXJJZFN0cigpO1xuXG5cdFx0Y2FsZW5kYXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWRheXNcIik7XG5cdFx0Y2FsZW5kYXIudGFiSW5kZXggPSAtMTtcblxuXHRcdGlmICghc2VsZi5jb25maWcubm9DYWxlbmRhcikge1xuXHRcdFx0YnVpbGRNb250aE5hdmlnYXRpb24oKTtcblx0XHRcdGJ1aWxkV2Vla2RheXMoKTtcblxuXHRcdFx0aWYgKHNlbGYuY29uZmlnLndlZWtOdW1iZXJzKSB7XG5cdFx0XHRcdGJ1aWxkV2Vla3MoKTtcblx0XHRcdH1cblxuXHRcdFx0YnVpbGREYXlzKCk7XG5cblx0XHRcdGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbGVuZGFyKTtcblx0XHR9XG5cblx0XHR3cmFwcGVyRWxlbWVudC5hcHBlbmRDaGlsZChjYWxlbmRhckNvbnRhaW5lcik7XG5cblx0XHRpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xuXHRcdFx0YnVpbGRUaW1lKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGJ1aWxkTW9udGhOYXZpZ2F0aW9uID0gZnVuY3Rpb24gYnVpbGRNb250aE5hdmlnYXRpb24oKSB7XG5cdFx0bW9udGhzTmF2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1tb250aFwiKTtcblxuXHRcdHByZXZNb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXByZXYtbW9udGhcIik7XG5cdFx0cHJldk1vbnRoTmF2LmlubmVySFRNTCA9IHNlbGYuY29uZmlnLnByZXZBcnJvdztcblxuXHRcdGN1cnJlbnRNb250aEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImN1cl9tb250aFwiKTtcblxuXHRcdGN1cnJlbnRZZWFyRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcImN1cl95ZWFyXCIpO1xuXHRcdGN1cnJlbnRZZWFyRWxlbWVudC50eXBlID0gXCJudW1iZXJcIjtcblx0XHRjdXJyZW50WWVhckVsZW1lbnQudGl0bGUgPSBzZWxmLmwxMG4uc2Nyb2xsVGl0bGU7XG5cblx0XHRuZXh0TW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1uZXh0LW1vbnRoXCIpO1xuXHRcdG5leHRNb250aE5hdi5pbm5lckhUTUwgPSBzZWxmLmNvbmZpZy5uZXh0QXJyb3c7XG5cblx0XHRuYXZpZ2F0aW9uQ3VycmVudE1vbnRoID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItY3VycmVudC1tb250aFwiKTtcblx0XHRuYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmFwcGVuZENoaWxkKGN1cnJlbnRNb250aEVsZW1lbnQpO1xuXHRcdG5hdmlnYXRpb25DdXJyZW50TW9udGguYXBwZW5kQ2hpbGQoY3VycmVudFllYXJFbGVtZW50KTtcblxuXHRcdG1vbnRoc05hdi5hcHBlbmRDaGlsZChwcmV2TW9udGhOYXYpO1xuXHRcdG1vbnRoc05hdi5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uQ3VycmVudE1vbnRoKTtcblx0XHRtb250aHNOYXYuYXBwZW5kQ2hpbGQobmV4dE1vbnRoTmF2KTtcblxuXHRcdGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vbnRoc05hdik7XG5cdFx0dXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xuXHR9O1xuXG5cdGJ1aWxkV2Vla2RheXMgPSBmdW5jdGlvbiBidWlsZFdlZWtkYXlzKCkge1xuXHRcdHdlZWtkYXlDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWtkYXlzXCIpO1xuXHRcdHZhciBmaXJzdERheU9mV2VlayA9IHNlbGYubDEwbi5maXJzdERheU9mV2VlaztcblxuXHRcdHZhciB3ZWVrZGF5cyA9IHNlbGYubDEwbi53ZWVrZGF5cy5zaG9ydGhhbmQuc2xpY2UoKTtcblxuXHRcdGlmIChmaXJzdERheU9mV2VlayA+IDAgJiYgZmlyc3REYXlPZldlZWsgPCB3ZWVrZGF5cy5sZW5ndGgpIHtcblx0XHRcdHdlZWtkYXlzID0gW10uY29uY2F0KHdlZWtkYXlzLnNwbGljZShmaXJzdERheU9mV2Vlaywgd2Vla2RheXMubGVuZ3RoKSwgd2Vla2RheXMuc3BsaWNlKDAsIGZpcnN0RGF5T2ZXZWVrKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNlbGYuY29uZmlnLndlZWtOdW1iZXJzKSB7XG5cdFx0XHR3ZWVrZGF5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiPHNwYW4+XCIgKyBzZWxmLmwxMG4ud2Vla0FiYnJldmlhdGlvbiArIFwiPC9zcGFuPlwiO1xuXHRcdH1cblxuXHRcdHdlZWtkYXlDb250YWluZXIuaW5uZXJIVE1MICs9IFwiPHNwYW4+XCIgKyB3ZWVrZGF5cy5qb2luKFwiPC9zcGFuPjxzcGFuPlwiKSArIFwiPC9zcGFuPlwiO1xuXG5cdFx0Y2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2Vla2RheUNvbnRhaW5lcik7XG5cdH07XG5cblx0YnVpbGRXZWVrcyA9IGZ1bmN0aW9uIGJ1aWxkV2Vla3MoKSB7XG5cdFx0Y2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1dlZWtzXCIpO1xuXG5cdFx0d2Vla051bWJlcnMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWtzXCIpO1xuXHRcdGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWtOdW1iZXJzKTtcblx0fTtcblxuXHRidWlsZERheXMgPSBmdW5jdGlvbiBidWlsZERheXMoKSB7XG5cdFx0dmFyIGZpcnN0T2ZNb250aCA9IChuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCwgMSkuZ2V0RGF5KCkgLSBzZWxmLmwxMG4uZmlyc3REYXlPZldlZWsgKyA3KSAlIDcsXG5cdFx0ICAgIGRheXNJbk1vbnRoID0gZ2V0RGF5c2luTW9udGgoKSxcblx0XHQgICAgcHJldk1vbnRoRGF5cyA9IGdldERheXNpbk1vbnRoKChzZWxmLmN1cnJlbnRNb250aCAtIDEgKyAxMikgJSAxMiksXG5cdFx0ICAgIGRheXMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cblx0XHR2YXIgZGF5TnVtYmVyID0gcHJldk1vbnRoRGF5cyArIDEgLSBmaXJzdE9mTW9udGgsXG5cdFx0ICAgIGN1cnJlbnREYXRlID0gdm9pZCAwLFxuXHRcdCAgICBkYXRlSXNEaXNhYmxlZCA9IHZvaWQgMDtcblxuXHRcdGlmIChzZWxmLmNvbmZpZy53ZWVrTnVtYmVycykge1xuXHRcdFx0d2Vla051bWJlcnMuaW5uZXJIVE1MID0gXCJcIjtcblx0XHR9XG5cblx0XHRjYWxlbmRhci5pbm5lckhUTUwgPSBcIlwiO1xuXG5cdFx0c2VsZi5jb25maWcubWluRGF0ZSA9IHVEYXRlKHNlbGYuY29uZmlnLm1pbkRhdGUsIHRydWUpO1xuXHRcdHNlbGYuY29uZmlnLm1heERhdGUgPSB1RGF0ZShzZWxmLmNvbmZpZy5tYXhEYXRlLCB0cnVlKTtcblxuXHRcdC8vIHByZXBlbmQgZGF5cyBmcm9tIHRoZSBlbmRpbmcgb2YgcHJldmlvdXMgbW9udGhcblx0XHRmb3IgKDsgZGF5TnVtYmVyIDw9IHByZXZNb250aERheXM7IGRheU51bWJlcisrKSB7XG5cdFx0XHR2YXIgY3VyRGF0ZSA9IG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoIC0gMSwgZGF5TnVtYmVyLCAwLCAwLCAwLCAwLCAwKSxcblx0XHRcdCAgICBkYXRlSXNFbmFibGVkID0gaXNFbmFibGVkKGN1ckRhdGUpLFxuXHRcdFx0ICAgIGRheUVsZW0gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBkYXRlSXNFbmFibGVkID8gXCJmbGF0cGlja3ItZGF5IHByZXZNb250aERheVwiIDogXCJkaXNhYmxlZFwiLCBkYXlOdW1iZXIpO1xuXG5cdFx0XHRpZiAoZGF0ZUlzRW5hYmxlZCkge1xuXHRcdFx0XHRkYXlFbGVtLnRhYkluZGV4ID0gMDtcblx0XHRcdH1cblxuXHRcdFx0ZGF5cy5hcHBlbmRDaGlsZChkYXlFbGVtKTtcblx0XHR9XG5cblx0XHQvLyBTdGFydCBhdCAxIHNpbmNlIHRoZXJlIGlzIG5vIDB0aCBkYXlcblx0XHRmb3IgKGRheU51bWJlciA9IDE7IGRheU51bWJlciA8PSBkYXlzSW5Nb250aDsgZGF5TnVtYmVyKyspIHtcblx0XHRcdGN1cnJlbnREYXRlID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIGRheU51bWJlciwgMCwgMCwgMCwgMCwgMCk7XG5cblx0XHRcdGlmIChzZWxmLmNvbmZpZy53ZWVrTnVtYmVycyAmJiBkYXlOdW1iZXIgJSA3ID09PSAxKSB7XG5cdFx0XHRcdHdlZWtOdW1iZXJzLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZGlzYWJsZWQgZmxhdHBpY2tyLWRheVwiLCBjdXJyZW50RGF0ZS5mcF9nZXRXZWVrKCkpKTtcblx0XHRcdH1cblxuXHRcdFx0ZGF0ZUlzRGlzYWJsZWQgPSAhaXNFbmFibGVkKGN1cnJlbnREYXRlKTtcblxuXHRcdFx0dmFyIGRheUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBkYXRlSXNEaXNhYmxlZCA/IFwiZGlzYWJsZWRcIiA6IFwiZmxhdHBpY2tyLWRheVwiLCBkYXlOdW1iZXIpO1xuXG5cdFx0XHRpZiAoIWRhdGVJc0Rpc2FibGVkKSB7XG5cdFx0XHRcdGRheUVsZW1lbnQudGFiSW5kZXggPSAwO1xuXG5cdFx0XHRcdGlmIChlcXVhbERhdGVzKGN1cnJlbnREYXRlLCBub3cpKSB7XG5cdFx0XHRcdFx0ZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoc2VsZi5zZWxlY3RlZERhdGVPYmogJiYgZXF1YWxEYXRlcyhjdXJyZW50RGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVPYmopKSB7XG5cdFx0XHRcdFx0ZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZGF5cy5hcHBlbmRDaGlsZChkYXlFbGVtZW50KTtcblx0XHR9XG5cblx0XHQvLyBhcHBlbmQgZGF5cyBmcm9tIHRoZSBuZXh0IG1vbnRoXG5cdFx0Zm9yICh2YXIgZGF5TnVtID0gZGF5c0luTW9udGggKyAxOyBkYXlOdW0gPD0gNDIgLSBmaXJzdE9mTW9udGg7IGRheU51bSsrKSB7XG5cdFx0XHR2YXIgX2N1ckRhdGUgPSBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCArIDEsIGRheU51bSAlIGRheXNJbk1vbnRoLCAwLCAwLCAwLCAwLCAwKSxcblx0XHRcdCAgICBfZGF0ZUlzRW5hYmxlZCA9IGlzRW5hYmxlZChfY3VyRGF0ZSksXG5cdFx0XHQgICAgX2RheUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBfZGF0ZUlzRW5hYmxlZCA/IFwibmV4dE1vbnRoRGF5IGZsYXRwaWNrci1kYXlcIiA6IFwiZGlzYWJsZWRcIiwgZGF5TnVtICUgZGF5c0luTW9udGgpO1xuXG5cdFx0XHRpZiAoc2VsZi5jb25maWcud2Vla051bWJlcnMgJiYgZGF5TnVtICUgNyA9PT0gMSkge1xuXHRcdFx0XHR3ZWVrTnVtYmVycy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImRpc2FibGVkXCIsIF9jdXJEYXRlLmZwX2dldFdlZWsoKSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX2RhdGVJc0VuYWJsZWQpIHtcblx0XHRcdFx0X2RheUVsZW1lbnQudGFiSW5kZXggPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRkYXlzLmFwcGVuZENoaWxkKF9kYXlFbGVtZW50KTtcblx0XHR9XG5cblx0XHRjYWxlbmRhci5hcHBlbmRDaGlsZChkYXlzKTtcblx0fTtcblxuXHRidWlsZFRpbWUgPSBmdW5jdGlvbiBidWlsZFRpbWUoKSB7XG5cdFx0dGltZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItdGltZVwiKTtcblx0XHR0aW1lQ29udGFpbmVyLnRhYkluZGV4ID0gLTE7XG5cdFx0dmFyIHNlcGFyYXRvciA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yXCIsIFwiOlwiKTtcblxuXHRcdHNlbGYuaG91ckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJmbGF0cGlja3ItaG91clwiKTtcblx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJmbGF0cGlja3ItbWludXRlXCIpO1xuXG5cdFx0c2VsZi5ob3VyRWxlbWVudC50YWJJbmRleCA9IHNlbGYubWludXRlRWxlbWVudC50YWJJbmRleCA9IDA7XG5cdFx0c2VsZi5ob3VyRWxlbWVudC50eXBlID0gc2VsZi5taW51dGVFbGVtZW50LnR5cGUgPSBcIm51bWJlclwiO1xuXG5cdFx0c2VsZi5ob3VyRWxlbWVudC52YWx1ZSA9IHNlbGYuc2VsZWN0ZWREYXRlT2JqID8gcGFkKHNlbGYuc2VsZWN0ZWREYXRlT2JqLmdldEhvdXJzKCkpIDogMTI7XG5cblx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUgPSBzZWxmLnNlbGVjdGVkRGF0ZU9iaiA/IHBhZChzZWxmLnNlbGVjdGVkRGF0ZU9iai5nZXRNaW51dGVzKCkpIDogXCIwMFwiO1xuXG5cdFx0c2VsZi5ob3VyRWxlbWVudC5zdGVwID0gc2VsZi5jb25maWcuaG91ckluY3JlbWVudDtcblx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQuc3RlcCA9IHNlbGYuY29uZmlnLm1pbnV0ZUluY3JlbWVudDtcblxuXHRcdHNlbGYuaG91ckVsZW1lbnQubWluID0gLXNlbGYuY29uZmlnLnRpbWVfMjRocjtcblx0XHRzZWxmLmhvdXJFbGVtZW50Lm1heCA9IHNlbGYuY29uZmlnLnRpbWVfMjRociA/IDI0IDogMTM7XG5cblx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQubWluID0gLXNlbGYubWludXRlRWxlbWVudC5zdGVwO1xuXHRcdHNlbGYubWludXRlRWxlbWVudC5tYXggPSA2MDtcblxuXHRcdHNlbGYuaG91ckVsZW1lbnQudGl0bGUgPSBzZWxmLm1pbnV0ZUVsZW1lbnQudGl0bGUgPSBzZWxmLmwxMG4uc2Nyb2xsVGl0bGU7XG5cblx0XHR0aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYuaG91ckVsZW1lbnQpO1xuXHRcdHRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKTtcblx0XHR0aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYubWludXRlRWxlbWVudCk7XG5cblx0XHRpZiAoc2VsZi5jb25maWcuZW5hYmxlU2Vjb25kcykge1xuXHRcdFx0dGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFzLXNlY29uZHNcIik7XG5cblx0XHRcdHNlbGYuc2Vjb25kRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcImZsYXRwaWNrci1zZWNvbmRcIik7XG5cdFx0XHRzZWxmLnNlY29uZEVsZW1lbnQudHlwZSA9IFwibnVtYmVyXCI7XG5cdFx0XHRzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUgPSBzZWxmLnNlbGVjdGVkRGF0ZU9iaiA/IHBhZChzZWxmLnNlbGVjdGVkRGF0ZU9iai5nZXRTZWNvbmRzKCkpIDogXCIwMFwiO1xuXG5cdFx0XHRzZWxmLnNlY29uZEVsZW1lbnQuc3RlcCA9IHNlbGYubWludXRlRWxlbWVudC5zdGVwO1xuXHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50Lm1pbiA9IHNlbGYubWludXRlRWxlbWVudC5taW47XG5cdFx0XHRzZWxmLnNlY29uZEVsZW1lbnQubWF4ID0gc2VsZi5taW51dGVFbGVtZW50Lm1heDtcblxuXHRcdFx0dGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci10aW1lLXNlcGFyYXRvclwiLCBcIjpcIikpO1xuXHRcdFx0dGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLnNlY29uZEVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdGlmICghc2VsZi5jb25maWcudGltZV8yNGhyKSB7XG5cdFx0XHQvLyBhZGQgc2VsZi5hbVBNIGlmIGFwcHJvcHJpYXRlXG5cdFx0XHRzZWxmLmFtUE0gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1hbS1wbVwiLCBbXCJBTVwiLCBcIlBNXCJdW3NlbGYuaG91ckVsZW1lbnQudmFsdWUgPiAxMSB8IDBdKTtcblx0XHRcdHNlbGYuYW1QTS50aXRsZSA9IHNlbGYubDEwbi50b2dnbGVUaXRsZTtcblx0XHRcdHNlbGYuYW1QTS50YWJJbmRleCA9IDA7XG5cdFx0XHR0aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYuYW1QTSk7XG5cdFx0fVxuXG5cdFx0Y2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUNvbnRhaW5lcik7XG5cdH07XG5cblx0YmluZCA9IGZ1bmN0aW9uIGJpbmQoKSB7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XG5cblx0XHRpZiAoc2VsZi5jb25maWcuY2xpY2tPcGVucykge1xuXHRcdFx0KHNlbGYuYWx0SW5wdXQgfHwgc2VsZi5pbnB1dCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGYub3Blbik7XG5cdFx0XHQoc2VsZi5hbHRJbnB1dCB8fCBzZWxmLmlucHV0KS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgc2VsZi5vcGVuKTtcblx0XHR9XG5cblx0XHRpZiAoc2VsZi5jb25maWcud3JhcCAmJiBzZWxmLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW9wZW5dXCIpKSB7XG5cdFx0XHRzZWxmLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW9wZW5dXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxmLm9wZW4pO1xuXHRcdH1cblxuXHRcdGlmIChzZWxmLmNvbmZpZy53cmFwICYmIHNlbGYuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2xvc2VdXCIpKSB7XG5cdFx0XHRzZWxmLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNsb3NlXVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZi5jbG9zZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNlbGYuY29uZmlnLndyYXAgJiYgc2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2dnbGVdXCIpKSB7XG5cdFx0XHRzZWxmLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZ2dsZV1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGYudG9nZ2xlKTtcblx0XHR9XG5cblx0XHRpZiAoc2VsZi5jb25maWcud3JhcCAmJiBzZWxmLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNsZWFyXVwiKSkge1xuXHRcdFx0c2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jbGVhcl1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGYuY2xlYXIpO1xuXHRcdH1cblxuXHRcdGlmICghc2VsZi5jb25maWcubm9DYWxlbmRhcikge1xuXHRcdFx0cHJldk1vbnRoTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGNoYW5nZU1vbnRoKC0xKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRuZXh0TW9udGhOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y2hhbmdlTW9udGgoMSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y3VycmVudFllYXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB5ZWFyU2Nyb2xsKTtcblx0XHRcdGN1cnJlbnRZZWFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgY3VycmVudFllYXJFbGVtZW50LnNlbGVjdCk7XG5cblx0XHRcdGN1cnJlbnRZZWFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdHNlbGYuY3VycmVudFllYXIgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKTtcblx0XHRcdFx0c2VsZi5yZWRyYXcoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRjYWxlbmRhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0RGF0ZSk7XG5cdFx0fVxuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvY3VtZW50Q2xpY2spO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGRvY3VtZW50Q2xpY2ssIHRydWUpO1xuXG5cdFx0aWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpIHtcblx0XHRcdHNlbGYuaG91ckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRpbWVXcmFwcGVyKTtcblx0XHRcdHNlbGYubWludXRlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGltZVdyYXBwZXIpO1xuXG5cdFx0XHRzZWxmLmhvdXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB0aW1lV3JhcHBlcik7XG5cdFx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHRpbWVXcmFwcGVyKTtcblxuXHRcdFx0c2VsZi5ob3VyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgdXBkYXRlVmFsdWUpO1xuXHRcdFx0c2VsZi5taW51dGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB1cGRhdGVWYWx1ZSk7XG5cblx0XHRcdHNlbGYuaG91ckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVWYWx1ZSk7XG5cdFx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVWYWx1ZSk7XG5cblx0XHRcdHNlbGYuaG91ckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHNlbGYuaG91ckVsZW1lbnQuc2VsZWN0KTtcblx0XHRcdHNlbGYubWludXRlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgc2VsZi5taW51dGVFbGVtZW50LnNlbGVjdCk7XG5cblx0XHRcdGlmIChzZWxmLmNvbmZpZy5lbmFibGVTZWNvbmRzKSB7XG5cdFx0XHRcdHNlbGYuc2Vjb25kRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGltZVdyYXBwZXIpO1xuXHRcdFx0XHRzZWxmLnNlY29uZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHRpbWVXcmFwcGVyKTtcblx0XHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB1cGRhdGVWYWx1ZSk7XG5cdFx0XHRcdHNlbGYuc2Vjb25kRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZVZhbHVlKTtcblx0XHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBzZWxmLnNlY29uZEVsZW1lbnQuc2VsZWN0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFzZWxmLmNvbmZpZy50aW1lXzI0aHIpIHtcblx0XHRcdFx0c2VsZi5hbVBNLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhbVBNVG9nZ2xlKTtcblxuXHRcdFx0XHRzZWxmLmFtUE0uYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGFtUE1Ub2dnbGUpO1xuXHRcdFx0XHRzZWxmLmFtUE0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIHVwZGF0ZVZhbHVlKTtcblxuXHRcdFx0XHRzZWxmLmFtUE0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRpZiAoZS53aGljaCA9PT0gMzggfHwgZS53aGljaCA9PT0gNDApIHtcblx0XHRcdFx0XHRcdGFtUE1Ub2dnbGUoZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQpIHtcblx0XHRcdGNsaWNrRXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50XCIpO1xuXHRcdFx0Ly8gd2l0aG91dCBhbGwgdGhlc2UgYXJncyBtcyBlZGdlIHNwZXJncyBvdXRcblx0XHRcdGNsaWNrRXZ0LmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCAwLCAwLCAwLCAwLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsaWNrRXZ0ID0gbmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLCB7XG5cdFx0XHRcdHZpZXc6IHdpbmRvdyxcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdHNlbGYub3BlbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoc2VsZi5pc09wZW4gfHwgKHNlbGYuYWx0SW5wdXQgfHwgc2VsZi5pbnB1dCkuZGlzYWJsZWQgfHwgc2VsZi5jb25maWcuaW5saW5lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIGlmICghc2VsZi5jb25maWcuc3RhdGljKSB7XG5cdFx0XHRzZWxmLnBvc2l0aW9uQ2FsZW5kYXIoKTtcblx0XHR9XG5cblx0XHRzZWxmLmlzT3BlbiA9IHRydWU7XG5cblx0XHR3cmFwcGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcblxuXHRcdGlmICghc2VsZi5jb25maWcuYWxsb3dJbnB1dCkge1xuXHRcdFx0KHNlbGYuYWx0SW5wdXQgfHwgc2VsZi5pbnB1dCkuYmx1cigpO1xuXHRcdFx0KHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgPyB0aW1lQ29udGFpbmVyIDogY2FsZW5kYXIpLmZvY3VzKCk7XG5cdFx0fVxuXG5cdFx0KHNlbGYuYWx0SW5wdXQgfHwgc2VsZi5pbnB1dCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuXHRcdGlmIChzZWxmLmNvbmZpZy5vbk9wZW4pIHtcblx0XHRcdHNlbGYuY29uZmlnLm9uT3BlbihzZWxmLnNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5pbnB1dC52YWx1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEZvciBjYWxlbmRhcnMgaW5zZXJ0ZWQgaW4gQk9EWSAoYXMgb3Bwb3NlZCB0byBpbmxpbmUgd3JhcHBlcilcblx0Ly8gaXRcInMgbmVjZXNzYXJ5IHRvIHByb3Blcmx5IGNhbGN1bGF0ZSB0b3AvbGVmdCBwb3NpdGlvbi5cblx0c2VsZi5wb3NpdGlvbkNhbGVuZGFyID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBjYWxlbmRhckhlaWdodCA9IGNhbGVuZGFyQ29udGFpbmVyLm9mZnNldEhlaWdodCxcblx0XHQgICAgaW5wdXQgPSBzZWxmLmFsdElucHV0IHx8IHNlbGYuaW5wdXQsXG5cdFx0ICAgIGlucHV0Qm91bmRzID0gaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0ICAgIGRpc3RhbmNlRnJvbUJvdHRvbSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIGlucHV0Qm91bmRzLmJvdHRvbSArIGlucHV0Lm9mZnNldEhlaWdodDtcblxuXHRcdHZhciB0b3AgPSB2b2lkIDAsXG5cdFx0ICAgIGxlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgKyBpbnB1dEJvdW5kcy5sZWZ0O1xuXG5cdFx0aWYgKGRpc3RhbmNlRnJvbUJvdHRvbSA8IGNhbGVuZGFySGVpZ2h0KSB7XG5cdFx0XHR0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgLSBjYWxlbmRhckhlaWdodCArIGlucHV0Qm91bmRzLnRvcCAtIDI7XG5cdFx0XHRjYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYXJyb3dUb3BcIik7XG5cdFx0XHRjYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYXJyb3dCb3R0b21cIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCArIGlucHV0Lm9mZnNldEhlaWdodCArIGlucHV0Qm91bmRzLnRvcCArIDI7XG5cdFx0XHRjYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYXJyb3dCb3R0b21cIik7XG5cdFx0XHRjYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYXJyb3dUb3BcIik7XG5cdFx0fVxuXG5cdFx0d3JhcHBlckVsZW1lbnQuc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xuXHRcdHdyYXBwZXJFbGVtZW50LnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xuXHR9O1xuXG5cdHNlbGYudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmIChzZWxmLmlzT3Blbikge1xuXHRcdFx0c2VsZi5jbG9zZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZWxmLm9wZW4oKTtcblx0XHR9XG5cdH07XG5cblx0c2VsZi5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRzZWxmLmlzT3BlbiA9IGZhbHNlO1xuXHRcdHdyYXBwZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHRcdChzZWxmLmFsdElucHV0IHx8IHNlbGYuaW5wdXQpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cblx0XHRpZiAoc2VsZi5jb25maWcub25DbG9zZSkge1xuXHRcdFx0c2VsZi5jb25maWcub25DbG9zZShzZWxmLnNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5pbnB1dC52YWx1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdHNlbGYuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0c2VsZi5pbnB1dC52YWx1ZSA9IFwiXCI7XG5cblx0XHRpZiAoc2VsZi5hbHRJbnB1dCkge1xuXHRcdFx0c2VsZi5hbHRJbnB1dC52YWx1ZSA9IFwiXCI7XG5cdFx0fVxuXG5cdFx0c2VsZi5zZWxlY3RlZERhdGVPYmogPSBudWxsO1xuXG5cdFx0dHJpZ2dlckNoYW5nZSgpO1xuXHRcdHNlbGYuanVtcFRvRGF0ZSgpO1xuXHR9O1xuXG5cdHRyaWdnZXJDaGFuZ2UgPSBmdW5jdGlvbiB0cmlnZ2VyQ2hhbmdlKCkge1xuXHRcdHNlbGYuaW5wdXQuZGlzcGF0Y2hFdmVudChjbGlja0V2dCk7XG5cblx0XHRpZiAoc2VsZi5jb25maWcub25DaGFuZ2UpIHtcblx0XHRcdHNlbGYuY29uZmlnLm9uQ2hhbmdlKHNlbGYuc2VsZWN0ZWREYXRlT2JqLCBzZWxmLmlucHV0LnZhbHVlKTtcblx0XHR9XG5cdH07XG5cblx0c2VsZi5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb2N1bWVudENsaWNrLCBmYWxzZSk7XG5cblx0XHRpZiAoc2VsZi5hbHRJbnB1dCkge1xuXHRcdFx0c2VsZi5hbHRJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYuYWx0SW5wdXQpO1xuXHRcdH1cblxuXHRcdGlmIChzZWxmLmNvbmZpZy5pbmxpbmUpIHtcblx0XHRcdHZhciBwYXJlbnQgPSBzZWxmLmVsZW1lbnQucGFyZW50Tm9kZSxcblx0XHRcdCAgICByZW1vdmVkRWxlbWVudCA9IHBhcmVudC5yZW1vdmVDaGlsZChzZWxmLmVsZW1lbnQpO1xuXG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoY2FsZW5kYXJDb250YWluZXIpO1xuXHRcdFx0cGFyZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlbW92ZWRFbGVtZW50LCBwYXJlbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0ucmVtb3ZlQ2hpbGQod3JhcHBlckVsZW1lbnQpO1xuXHRcdH1cblx0fTtcblxuXHRzZWxmLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcblx0XHRidWlsZERheXMoKTtcblx0fTtcblxuXHRzZWxmLmp1bXBUb0RhdGUgPSBmdW5jdGlvbiAoanVtcERhdGUpIHtcblx0XHRqdW1wRGF0ZSA9IHVEYXRlKGp1bXBEYXRlIHx8IHNlbGYuc2VsZWN0ZWREYXRlT2JqIHx8IHNlbGYuY29uZmlnLmRlZmF1bHREYXRlIHx8IHNlbGYuY29uZmlnLm1pbkRhdGUgfHwgbm93KTtcblxuXHRcdHNlbGYuY3VycmVudFllYXIgPSBqdW1wRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdHNlbGYuY3VycmVudE1vbnRoID0ganVtcERhdGUuZ2V0TW9udGgoKTtcblx0XHRzZWxmLnJlZHJhdygpO1xuXHR9O1xuXG5cdHNlbGYuc2V0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlLCB0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcblx0XHRkYXRlID0gdURhdGUoZGF0ZSk7XG5cblx0XHRpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUgJiYgZGF0ZS5nZXRUaW1lKCkpIHtcblx0XHRcdHNlbGYuc2VsZWN0ZWREYXRlT2JqID0gdURhdGUoZGF0ZSk7XG5cdFx0XHRzZWxmLmp1bXBUb0RhdGUoc2VsZi5zZWxlY3RlZERhdGVPYmopO1xuXHRcdFx0dXBkYXRlVmFsdWUoKTtcblxuXHRcdFx0aWYgKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuXHRcdFx0XHR0cmlnZ2VyQ2hhbmdlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHNlbGYuc2V0VGltZSA9IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuXHRcdGlmICghc2VsZi5zZWxlY3RlZERhdGVPYmopIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZWxmLmhvdXJFbGVtZW50LnZhbHVlID0gcGFyc2VJbnQoaG91ciwgMTApICUgMjQ7XG5cdFx0c2VsZi5taW51dGVFbGVtZW50LnZhbHVlID0gcGFyc2VJbnQobWludXRlIHx8IDAsIDEwKSAlIDYwO1xuXG5cdFx0aWYgKCFzZWxmLmNvbmZpZy50aW1lXzI0aHIpIHtcblx0XHRcdHNlbGYuYW1QTS5pbm5lckhUTUwgPSBob3VyID4gMTEgPyBcIlBNXCIgOiBcIkFNXCI7XG5cdFx0fVxuXG5cdFx0dXBkYXRlVmFsdWUoKTtcblxuXHRcdGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcblx0XHRcdHRyaWdnZXJDaGFuZ2UoKTtcblx0XHR9XG5cdH07XG5cblx0c2VsZi5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdGlmIChrZXkgaW4gc2VsZi5jb25maWcpIHtcblx0XHRcdHNlbGYuY29uZmlnW2tleV0gPSB2YWx1ZTtcblx0XHRcdHNlbGYuanVtcFRvRGF0ZSgpO1xuXHRcdH1cblx0fTtcblxuXHRhbVBNVG9nZ2xlID0gZnVuY3Rpb24gYW1QTVRvZ2dsZShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IFtcIkFNXCIsIFwiUE1cIl1bc2VsZi5hbVBNLmlubmVySFRNTCA9PT0gXCJBTVwiIHwgMF07XG5cdH07XG5cblx0b25LZXlEb3duID0gZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcblx0XHRpZiAoIXNlbGYuaXNPcGVuIHx8IHNlbGYuY29uZmlnLmVuYWJsZVRpbWUgJiYgdGltZUNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKGUud2hpY2gpIHtcblx0XHRcdGNhc2UgMTM6XG5cdFx0XHRcdHNlbGVjdERhdGUoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI3OlxuXHRcdFx0XHRzZWxmLmNsb3NlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM3OlxuXHRcdFx0XHRjaGFuZ2VNb250aCgtMSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM4OlxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHNlbGYuY3VycmVudFllYXIrKztcblx0XHRcdFx0c2VsZi5yZWRyYXcoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzk6XG5cdFx0XHRcdGNoYW5nZU1vbnRoKDEpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA0MDpcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRzZWxmLmN1cnJlbnRZZWFyLS07XG5cdFx0XHRcdHNlbGYucmVkcmF3KCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH07XG5cblx0b25SZXNpemUgPSBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHNlbGYuaXNPcGVuICYmICFzZWxmLmNvbmZpZy5pbmxpbmUgJiYgIXNlbGYuY29uZmlnLnN0YXRpYykge1xuXHRcdFx0c2VsZi5wb3NpdGlvbkNhbGVuZGFyKCk7XG5cdFx0fVxuXHR9LCAzMDApO1xuXG5cdHRyeSB7XG5cdFx0aW5pdCgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIHNraXAgYW5kIGNhcnJ5IG9uXG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0Y29uc29sZS5pbmZvKHNlbGYuZWxlbWVudCk7XG5cdH1cblxuXHRyZXR1cm4gc2VsZjtcbn07XG5cbmZsYXRwaWNrci5pbml0LnByb3RvdHlwZSA9IHtcblxuXHRkZWZhdWx0Q29uZmlnOiB7fSxcblxuXHRsMTBuOiB7XG5cdFx0d2Vla2RheXM6IHtcblx0XHRcdHNob3J0aGFuZDogWyflkajml6UnLCAn5ZGo5LiAJywgJ+WRqOS6jCcsICflkajkuIknLCAn5ZGo5ZubJywgJ+WRqOS6lCcsICflkajlha0nXSxcblx0XHRcdGxvbmdoYW5kOiBbJ+WRqOaXpScsICflkajkuIAnLCAn5ZGo5LqMJywgJ+WRqOS4iScsICflkajlm5snLCAn5ZGo5LqUJywgJ+WRqOWFrSddXG5cdFx0fSxcblx0XHRtb250aHM6IHtcblx0XHRcdHNob3J0aGFuZDogWyfkuIDmnIgnLCAn5LqM5pyIJywgJ+S4ieaciCcsICflm5vmnIgnLCAn5LqU5pyIJywgJ+WFreaciCcsICfkuIPmnIgnLCAn5YWr5pyIJywgJ+S5neaciCcsICfljYHmnIgnLCAn5Y2B5LiA5pyIJywgJ+WNgeS6jOaciCddLFxuXHRcdFx0bG9uZ2hhbmQ6IFsn5LiA5pyIJywgJ+S6jOaciCcsICfkuInmnIgnLCAn5Zub5pyIJywgJ+S6lOaciCcsICflha3mnIgnLCAn5LiD5pyIJywgJ+WFq+aciCcsICfkuZ3mnIgnLCAn5Y2B5pyIJywgJ+WNgeS4gOaciCcsICfljYHkuozmnIgnXVxuXHRcdH0sXG5cdFx0ZGF5c0luTW9udGg6IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXSxcblx0XHRmaXJzdERheU9mV2VlazogMCxcblx0XHRvcmRpbmFsOiBmdW5jdGlvbiBvcmRpbmFsKG50aCkge1xuXHRcdFx0dmFyIHMgPSBudGggJSAxMDA7XG5cdFx0XHRpZiAocyA+IDMgJiYgcyA8IDIxKSByZXR1cm4gXCJ0aFwiO1xuXHRcdFx0c3dpdGNoIChzICUgMTApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHJldHVybiBcInN0XCI7XG5cdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRyZXR1cm4gXCJuZFwiO1xuXHRcdFx0XHRjYXNlIDM6XG5cdFx0XHRcdFx0cmV0dXJuIFwicmRcIjtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gXCJ0aFwiO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0d2Vla0FiYnJldmlhdGlvbjogXCJXa1wiLFxuXHRcdHNjcm9sbFRpdGxlOiBcIlNjcm9sbCB0byBpbmNyZW1lbnRcIixcblx0XHR0b2dnbGVUaXRsZTogXCJDbGljayB0byB0b2dnbGVcIlxuXHR9XG5cbn07XG5cbkRhdGUucHJvdG90eXBlLmZwX2luY3IgPSBmdW5jdGlvbiAoZGF5cykge1xuXHRyZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpICsgcGFyc2VJbnQoZGF5cywgMTApKTtcbn07XG5cbkRhdGUucHJvdG90eXBlLmZwX2lzVVRDID0gZmFsc2U7XG5EYXRlLnByb3RvdHlwZS5mcF90b1VUQyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG5ld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLmdldFRpbWUoKSArIHRoaXMuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKTtcblx0bmV3RGF0ZS5mcF9pc1VUQyA9IHRydWU7XG5cblx0cmV0dXJuIG5ld0RhdGU7XG59O1xuXG5EYXRlLnByb3RvdHlwZS5mcF9nZXRXZWVrID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZ2V0VGltZSgpKTtcblx0ZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuXHQvLyBUaHVyc2RheSBpbiBjdXJyZW50IHdlZWsgZGVjaWRlcyB0aGUgeWVhci5cblx0ZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMyAtIChkYXRlLmdldERheSgpICsgNikgJSA3KTtcblx0Ly8gSmFudWFyeSA0IGlzIGFsd2F5cyBpbiB3ZWVrIDEuXG5cdHZhciB3ZWVrMSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgNCk7XG5cdC8vIEFkanVzdCB0byBUaHVyc2RheSBpbiB3ZWVrIDEgYW5kIGNvdW50IG51bWJlciBvZiB3ZWVrcyBmcm9tIGRhdGUgdG8gd2VlazEuXG5cdHJldHVybiAxICsgTWF0aC5yb3VuZCgoKGRhdGUuZ2V0VGltZSgpIC0gd2VlazEuZ2V0VGltZSgpKSAvIDg2NDAwMDAwIC0gMyArICh3ZWVrMS5nZXREYXkoKSArIDYpICUgNykgLyA3KTtcbn07XG5cbi8vIGNsYXNzTGlzdCBwb2x5ZmlsbFxuaWYgKCEoXCJjbGFzc0xpc3RcIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiB0eXBlb2YgSFRNTEVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSwgXCJjbGFzc0xpc3RcIiwge1xuXHRcdGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHRcdFx0dmFyIHNlbGZFbGVtZW50cyA9IHRoaXM7XG5cdFx0XHRmdW5jdGlvbiB1cGRhdGUoZm4pIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRcdHZhciBjbGFzc2VzID0gc2VsZkVsZW1lbnRzLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pO1xuXHRcdFx0XHRcdHZhciBpbmRleCA9IGNsYXNzZXMuaW5kZXhPZih2YWx1ZSk7XG5cblx0XHRcdFx0XHRmbihjbGFzc2VzLCBpbmRleCwgdmFsdWUpO1xuXHRcdFx0XHRcdHNlbGZFbGVtZW50cy5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oXCIgXCIpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcmV0ID0ge1xuXHRcdFx0XHRhZGQ6IHVwZGF0ZShmdW5jdGlvbiAoY2xhc3NlcywgaW5kZXgsIHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIH5pbmRleCB8fCBjbGFzc2VzLnB1c2godmFsdWUpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0cmVtb3ZlOiB1cGRhdGUoZnVuY3Rpb24gKGNsYXNzZXMsIGluZGV4KSB7XG5cdFx0XHRcdFx0cmV0dXJuIH5pbmRleCAmJiBjbGFzc2VzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR0b2dnbGU6IHVwZGF0ZShmdW5jdGlvbiAoY2xhc3NlcywgaW5kZXgsIHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKH5pbmRleCkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHRcdGNvbnRhaW5zOiBmdW5jdGlvbiBjb250YWlucyh2YWx1ZSkge1xuXHRcdFx0XHRcdHJldHVybiAhISB+c2VsZkVsZW1lbnRzLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmluZGV4T2YodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblx0fSk7XG59XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gZmxhdHBpY2tyO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvZGVwL2NhbGVuZGFyL2NhbGVuZGVyLXBsdWdpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDIzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==