/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 755);
/******/ })
/************************************************************************/
/******/ ({

/***/ 350:
/* no static exports found */
/* all exports used */
/*!***************************************************************!*\
  !*** ./js/src/overlay-recirc-widget/overlay-recirc-widget.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// \"Overlay Recirc Circle\" widget\njQuery(document).ready(function ($) {\n\tvar $recircWidget = $('.recirc-widget');\n\tvar widgetIsHiddenCookie = getCookie('recircWidgetHidden');\n\tvar widgetIsCollapsedCookie = getCookie('recircWidgetCollapsed');\n\n\t// Stop if there's no recirc widget on the page or cookie is not allowed\n\tif (!$recircWidget.length) {\n\t\treturn;\n\t}\n\n\t// Show widget on timeout if it wasn't removed before\n\tvar widgetShowDelay = parseInt($recircWidget.data('widgetDelay')) * 1000;\n\n\tsetTimeout(function () {\n\t\tif (!widgetIsHiddenCookie) {\n\t\t\t$recircWidget.addClass('opened');\n\t\t}\n\t\t// If it was collapsed before, then keep it collapsed\n\t\tif (!widgetIsCollapsedCookie) {\n\t\t\t$recircWidget.removeClass('collapsed');\n\t\t}\n\t}, widgetShowDelay);\n\n\t// Extend/collapse widget text\n\t$('.recirc-widget__toggle').click(function () {\n\t\t// Set/delete cookie with widget collapsed status\n\t\tif (!$recircWidget.hasClass('collapsed')) {\n\t\t\tsetCookie('recircWidgetCollapsed', 'true', 24);\n\t\t} else {\n\t\t\tdocument.cookie = 'recircWidgetCollapsed=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';\n\t\t}\n\n\t\t$recircWidget.toggleClass('collapsed');\n\t});\n\n\t// Remove widget for 24 hours\n\t$('.recirc-widget__close').click(function () {\n\t\t$recircWidget.addClass('removed');\n\n\t\tsetCookie('recircWidgetHidden', 'true', 24);\n\t});\n\n\t// Get cookie function\n\tfunction getCookie(name) {\n\t\tvar matches = document.cookie.match(new RegExp(\"(?:^|; )\" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + \"=([^;]*)\"));\n\n\t\treturn matches ? decodeURIComponent(matches[1]) : undefined;\n\t}\n\n\t// Set cookie function\n\tfunction setCookie(name, value, hours) {\n\t\tvar expires = void 0;\n\n\t\tif (hours) {\n\t\t\tvar date = new Date();\n\t\t\tdate.setTime(date.getTime() + hours * 60 * 60 * 1000);\n\n\t\t\texpires = '; expires=' + date.toGMTString();\n\t\t} else {\n\t\t\texpires = '';\n\t\t}\n\n\t\tdocument.cookie = name + '=' + value + expires + '; path=/';\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9zcmMvb3ZlcmxheS1yZWNpcmMtd2lkZ2V0L292ZXJsYXktcmVjaXJjLXdpZGdldC5qcz8yY2FjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFwiT3ZlcmxheSBSZWNpcmMgQ2lyY2xlXCIgd2lkZ2V0XG5qUXVlcnkoIGRvY3VtZW50ICkucmVhZHkoIGZ1bmN0aW9uKCAkICkge1xuXHRsZXQgJHJlY2lyY1dpZGdldCA9ICQoICcucmVjaXJjLXdpZGdldCcgKTtcblx0bGV0IHdpZGdldElzSGlkZGVuQ29va2llID0gZ2V0Q29va2llKCAncmVjaXJjV2lkZ2V0SGlkZGVuJyApO1xuXHRsZXQgd2lkZ2V0SXNDb2xsYXBzZWRDb29raWUgPSBnZXRDb29raWUoICdyZWNpcmNXaWRnZXRDb2xsYXBzZWQnICk7XG5cblx0Ly8gU3RvcCBpZiB0aGVyZSdzIG5vIHJlY2lyYyB3aWRnZXQgb24gdGhlIHBhZ2Ugb3IgY29va2llIGlzIG5vdCBhbGxvd2VkXG5cdGlmICggISRyZWNpcmNXaWRnZXQubGVuZ3RoICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFNob3cgd2lkZ2V0IG9uIHRpbWVvdXQgaWYgaXQgd2Fzbid0IHJlbW92ZWQgYmVmb3JlXG5cdGxldCB3aWRnZXRTaG93RGVsYXkgPSBwYXJzZUludCggJHJlY2lyY1dpZGdldC5kYXRhKCAnd2lkZ2V0RGVsYXknICkgKSAqIDEwMDA7XG5cblx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCAhd2lkZ2V0SXNIaWRkZW5Db29raWUgKSB7XG5cdFx0XHQkcmVjaXJjV2lkZ2V0LmFkZENsYXNzKCAnb3BlbmVkJyApO1xuXHRcdH1cblx0XHQvLyBJZiBpdCB3YXMgY29sbGFwc2VkIGJlZm9yZSwgdGhlbiBrZWVwIGl0IGNvbGxhcHNlZFxuXHRcdGlmICggIXdpZGdldElzQ29sbGFwc2VkQ29va2llICkge1xuXHRcdFx0JHJlY2lyY1dpZGdldC5yZW1vdmVDbGFzcyggJ2NvbGxhcHNlZCcgKTtcblx0XHR9XG5cdH0sIHdpZGdldFNob3dEZWxheSApO1xuXG5cdC8vIEV4dGVuZC9jb2xsYXBzZSB3aWRnZXQgdGV4dFxuXHQkKCAnLnJlY2lyYy13aWRnZXRfX3RvZ2dsZScgKS5jbGljayggZnVuY3Rpb24gKCkge1xuXHRcdC8vIFNldC9kZWxldGUgY29va2llIHdpdGggd2lkZ2V0IGNvbGxhcHNlZCBzdGF0dXNcblx0XHRpZiAoICEkcmVjaXJjV2lkZ2V0Lmhhc0NsYXNzKCAnY29sbGFwc2VkJyApICkge1xuXHRcdFx0c2V0Q29va2llKCAncmVjaXJjV2lkZ2V0Q29sbGFwc2VkJywgJ3RydWUnLCAyNCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5jb29raWUgPSAncmVjaXJjV2lkZ2V0Q29sbGFwc2VkPTsgUGF0aD0vOyBFeHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyc7XG5cdFx0fVxuXG5cdFx0JHJlY2lyY1dpZGdldC50b2dnbGVDbGFzcyggJ2NvbGxhcHNlZCcgKTtcblx0fSApO1xuXG5cdC8vIFJlbW92ZSB3aWRnZXQgZm9yIDI0IGhvdXJzXG5cdCQoICcucmVjaXJjLXdpZGdldF9fY2xvc2UnICkuY2xpY2soIGZ1bmN0aW9uKCkge1xuXHRcdCRyZWNpcmNXaWRnZXQuYWRkQ2xhc3MoICdyZW1vdmVkJyApO1xuXG5cdFx0c2V0Q29va2llKCAncmVjaXJjV2lkZ2V0SGlkZGVuJywgJ3RydWUnLCAyNCApO1xuXHR9ICk7XG5cblx0Ly8gR2V0IGNvb2tpZSBmdW5jdGlvblxuXHRmdW5jdGlvbiBnZXRDb29raWUoIG5hbWUgKSB7XG5cdFx0bGV0IG1hdGNoZXMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChcblx0XHRcdFwiKD86Xnw7IClcIiArIG5hbWUucmVwbGFjZSgvKFtcXC4kPyp8e31cXChcXClcXFtcXF1cXFxcXFwvXFwrXl0pL2csICdcXFxcJDEnKSArIFwiPShbXjtdKilcIlxuXHRcdCkpO1xuXG5cdFx0cmV0dXJuIG1hdGNoZXMgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvLyBTZXQgY29va2llIGZ1bmN0aW9uXG5cdGZ1bmN0aW9uIHNldENvb2tpZSggbmFtZSwgdmFsdWUsIGhvdXJzICkge1xuXHRcdGxldCBleHBpcmVzO1xuXG5cdFx0aWYgKCBob3VycyApIHtcblx0XHRcdGxldCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdGRhdGUuc2V0VGltZSggZGF0ZS5nZXRUaW1lKCkgKyAoIGhvdXJzICogNjAgKiA2MCAqIDEwMDAgKSApO1xuXG5cdFx0XHRleHBpcmVzID0gJzsgZXhwaXJlcz0nICsgZGF0ZS50b0dNVFN0cmluZygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBpcmVzID0gJyc7XG5cdFx0fVxuXG5cdFx0ZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICsgZXhwaXJlcyArICc7IHBhdGg9Lyc7XG5cdH1cbn0gKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhc3NldHMvanMvc3JjL292ZXJsYXktcmVjaXJjLXdpZGdldC9vdmVybGF5LXJlY2lyYy13aWRnZXQuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///350\n");

/***/ }),

/***/ 351:
/* no static exports found */
/* all exports used */
/*!**************************************************************!*\
  !*** ./js/src/overlay-recirc-widget/overlay-video-widget.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Overlay Recirc Video widget\njQuery(document).ready(function ($) {\n\tvar $window = $(window);\n\tvar $recircVideo = $('.recirc-video');\n\tvar $recircVideoPlayer = $recircVideo.find('.jwplayer');\n\tvar recircVideoIsHiddenCookie = getCookie('recircVideoHidden');\n\tvar headerHeight = $('.site-header').height();\n\n\t// Stop if there's no recirc video widget on the page\n\tif (!$recircVideo.length || window.innerWidth > 767) {\n\t\treturn;\n\t}\n\n\t// Stop if cookies are not allowed\n\tif (typeof OnetrustActiveGroups !== 'undefined') {\n\t\t// eslint-disable-line no-extra-parens\n\t\tif (-1 === OnetrustActiveGroups.indexOf(',C0004,') || -1 === OnetrustActiveGroups.indexOf(',C0002,')) {\n\t\t\treturn;\n\t\t}\n\t}\n\n\t// Show and play the video on timeout if it wasn't removed before\n\tvar recircVideoShowDelay = parseInt($recircVideo.data('widgetDelay')) * 1000;\n\n\tsetTimeout(function () {\n\t\tif (!recircVideoIsHiddenCookie) {\n\t\t\t$recircVideo.addClass('opened');\n\t\t\tjwplayer($recircVideoPlayer[0]).play(); // Play video\n\t\t}\n\t}, recircVideoShowDelay);\n\n\t// Extend video\n\t$('.recirc-video__extend-btn').on('click', function () {\n\t\t$recircVideo.toggleClass('video-extended');\n\t\tstickyVideo();\n\t});\n\n\t// Update video position on scroll\n\t$window.scroll(debounce(stickyVideo, 100));\n\n\t// Close video\n\t$('.recirc-video__close-btn').on('click', function () {\n\t\tjwplayer($recircVideoPlayer[0]).pause();\n\t\t$recircVideo.removeClass('video-extended opened');\n\n\t\t// Remove widget for 24 hours\n\t\tsetCookie('recircVideoHidden', 'true', 24);\n\t});\n\n\t// Get cookie function\n\tfunction getCookie(name) {\n\t\tvar matches = document.cookie.match(new RegExp(\"(?:^|; )\" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + \"=([^;]*)\"));\n\n\t\treturn matches ? decodeURIComponent(matches[1]) : undefined;\n\t}\n\n\t// Set cookie function\n\tfunction setCookie(name, value, hours) {\n\t\tvar expires = void 0;\n\n\t\tif (hours) {\n\t\t\tvar date = new Date();\n\t\t\tdate.setTime(date.getTime() + hours * 60 * 60 * 1000);\n\n\t\t\texpires = '; expires=' + date.toGMTString();\n\t\t} else {\n\t\t\texpires = '';\n\t\t}\n\n\t\tdocument.cookie = name + '=' + value + expires + '; path=/';\n\t}\n\n\t// Update video position when scrolled to top, to prevent Top Nav overlap\n\tfunction stickyVideo() {\n\t\tif ($recircVideo.hasClass('video-extended') && $window.scrollTop() <= headerHeight) {\n\t\t\t$recircVideo.css('top', headerHeight - $window.scrollTop());\n\t\t} else {\n\t\t\t$recircVideo.css('top', '');\n\t\t}\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9zcmMvb3ZlcmxheS1yZWNpcmMtd2lkZ2V0L292ZXJsYXktdmlkZW8td2lkZ2V0LmpzP2FmNjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gT3ZlcmxheSBSZWNpcmMgVmlkZW8gd2lkZ2V0XG5qUXVlcnkoIGRvY3VtZW50ICkucmVhZHkoIGZ1bmN0aW9uKCAkICkge1xuXHRsZXQgJHdpbmRvdyA9ICQoIHdpbmRvdyApO1xuXHRsZXQgJHJlY2lyY1ZpZGVvID0gJCggJy5yZWNpcmMtdmlkZW8nICk7XG5cdGxldCAkcmVjaXJjVmlkZW9QbGF5ZXIgPSAkcmVjaXJjVmlkZW8uZmluZCggJy5qd3BsYXllcicgKTtcblx0bGV0IHJlY2lyY1ZpZGVvSXNIaWRkZW5Db29raWUgPSBnZXRDb29raWUoICdyZWNpcmNWaWRlb0hpZGRlbicgKTtcblx0bGV0IGhlYWRlckhlaWdodCA9ICQoICcuc2l0ZS1oZWFkZXInICkuaGVpZ2h0KCk7XG5cblx0Ly8gU3RvcCBpZiB0aGVyZSdzIG5vIHJlY2lyYyB2aWRlbyB3aWRnZXQgb24gdGhlIHBhZ2Vcblx0aWYgKCAhJHJlY2lyY1ZpZGVvLmxlbmd0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aCA+IDc2NyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTdG9wIGlmIGNvb2tpZXMgYXJlIG5vdCBhbGxvd2VkXG5cdGlmICggdHlwZW9mIE9uZXRydXN0QWN0aXZlR3JvdXBzICE9PSAndW5kZWZpbmVkJyApIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1leHRyYS1wYXJlbnNcblx0XHRpZiAoIC0xID09PSBPbmV0cnVzdEFjdGl2ZUdyb3Vwcy5pbmRleE9mKCAnLEMwMDA0LCcgKSB8fCAtMSA9PT0gT25ldHJ1c3RBY3RpdmVHcm91cHMuaW5kZXhPZiggJyxDMDAwMiwnICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblxuXHQvLyBTaG93IGFuZCBwbGF5IHRoZSB2aWRlbyBvbiB0aW1lb3V0IGlmIGl0IHdhc24ndCByZW1vdmVkIGJlZm9yZVxuXHRsZXQgcmVjaXJjVmlkZW9TaG93RGVsYXkgPSBwYXJzZUludCggJHJlY2lyY1ZpZGVvLmRhdGEoJ3dpZGdldERlbGF5JykgKSAqIDEwMDA7XG5cblx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCAhcmVjaXJjVmlkZW9Jc0hpZGRlbkNvb2tpZSApIHtcblx0XHRcdCRyZWNpcmNWaWRlby5hZGRDbGFzcyggJ29wZW5lZCcgKTtcblx0XHRcdGp3cGxheWVyKCRyZWNpcmNWaWRlb1BsYXllclswXSApLnBsYXkoKTsgLy8gUGxheSB2aWRlb1xuXHRcdH1cblx0fSwgcmVjaXJjVmlkZW9TaG93RGVsYXkgKTtcblxuXG5cdC8vIEV4dGVuZCB2aWRlb1xuXHQkKCAnLnJlY2lyYy12aWRlb19fZXh0ZW5kLWJ0bicgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0JHJlY2lyY1ZpZGVvLnRvZ2dsZUNsYXNzKCAndmlkZW8tZXh0ZW5kZWQnICk7XG5cdFx0c3RpY2t5VmlkZW8oKTtcblx0fSApO1xuXG5cblx0Ly8gVXBkYXRlIHZpZGVvIHBvc2l0aW9uIG9uIHNjcm9sbFxuXHQkd2luZG93LnNjcm9sbCggZGVib3VuY2UoIHN0aWNreVZpZGVvLCAxMDApICk7XG5cblxuXHQvLyBDbG9zZSB2aWRlb1xuXHQkKCAnLnJlY2lyYy12aWRlb19fY2xvc2UtYnRuJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRqd3BsYXllciggJHJlY2lyY1ZpZGVvUGxheWVyWzBdICkucGF1c2UoKTtcblx0XHQkcmVjaXJjVmlkZW8ucmVtb3ZlQ2xhc3MoICd2aWRlby1leHRlbmRlZCBvcGVuZWQnICk7XG5cblx0XHQvLyBSZW1vdmUgd2lkZ2V0IGZvciAyNCBob3Vyc1xuXHRcdHNldENvb2tpZSggJ3JlY2lyY1ZpZGVvSGlkZGVuJywgJ3RydWUnLCAyNCApO1xuXHR9ICk7XG5cblxuXHQvLyBHZXQgY29va2llIGZ1bmN0aW9uXG5cdGZ1bmN0aW9uIGdldENvb2tpZSggbmFtZSApIHtcblx0XHRsZXQgbWF0Y2hlcyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaCggbmV3IFJlZ0V4cChcblx0XHRcdFwiKD86Xnw7IClcIiArIG5hbWUucmVwbGFjZSgvKFtcXC4kPyp8e31cXChcXClcXFtcXF1cXFxcXFwvXFwrXl0pL2csICdcXFxcJDEnKSArIFwiPShbXjtdKilcIlxuXHRcdCkgKTtcblxuXHRcdHJldHVybiBtYXRjaGVzID8gZGVjb2RlVVJJQ29tcG9uZW50KCBtYXRjaGVzWzFdICkgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvLyBTZXQgY29va2llIGZ1bmN0aW9uXG5cdGZ1bmN0aW9uIHNldENvb2tpZSggbmFtZSwgdmFsdWUsIGhvdXJzICkge1xuXHRcdGxldCBleHBpcmVzO1xuXG5cdFx0aWYgKCBob3VycyApIHtcblx0XHRcdGxldCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdGRhdGUuc2V0VGltZSggZGF0ZS5nZXRUaW1lKCkgKyAoIGhvdXJzICogNjAgKiA2MCAqIDEwMDAgKSApO1xuXG5cdFx0XHRleHBpcmVzID0gJzsgZXhwaXJlcz0nICsgZGF0ZS50b0dNVFN0cmluZygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBpcmVzID0gJyc7XG5cdFx0fVxuXG5cdFx0ZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICsgZXhwaXJlcyArICc7IHBhdGg9Lyc7XG5cdH1cblxuXHQvLyBVcGRhdGUgdmlkZW8gcG9zaXRpb24gd2hlbiBzY3JvbGxlZCB0byB0b3AsIHRvIHByZXZlbnQgVG9wIE5hdiBvdmVybGFwXG5cdGZ1bmN0aW9uIHN0aWNreVZpZGVvKCkge1xuXHRcdGlmICggJHJlY2lyY1ZpZGVvLmhhc0NsYXNzKCAndmlkZW8tZXh0ZW5kZWQnICkgJiYgJHdpbmRvdy5zY3JvbGxUb3AoKSA8PSBoZWFkZXJIZWlnaHQgKSB7XG5cdFx0XHQkcmVjaXJjVmlkZW8uY3NzKCAndG9wJywgaGVhZGVySGVpZ2h0IC0gJHdpbmRvdy5zY3JvbGxUb3AoKSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkcmVjaXJjVmlkZW8uY3NzKCAndG9wJywgJycgKTtcblx0XHR9XG5cdH1cbn0gKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhc3NldHMvanMvc3JjL292ZXJsYXktcmVjaXJjLXdpZGdldC9vdmVybGF5LXZpZGVvLXdpZGdldC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///351\n");

/***/ }),

/***/ 755:
/* no static exports found */
/* all exports used */
/*!****************************************************************************************************************************!*\
  !*** multi ./js/src/overlay-recirc-widget/overlay-recirc-widget.js ./js/src/overlay-recirc-widget/overlay-video-widget.js ***!
  \****************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/src/overlay-recirc-widget/overlay-recirc-widget.js */350);
module.exports = __webpack_require__(/*! ./js/src/overlay-recirc-widget/overlay-video-widget.js */351);


/***/ })

/******/ });