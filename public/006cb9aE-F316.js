(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@kissmybutton/motorcortex-player/dist/motorcortex-player.umd.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@kissmybutton/motorcortex-player/dist/motorcortex-player.umd.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n(__webpack_require__(/*! @kissmybutton/motorcortex */ "./node_modules/@kissmybutton/motorcortex/dist/motorcortex.umd.js")):undefined}(this,(function(e){"use strict";function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;var t=function(e){return document.querySelectorAll(e)},o=function(e){return document.getElementById(e)},s=function(e){return document.getElementsByTagName(e)},i=function(e){return document.createElement(e)},l=function(){var e;return(e=document).addEventListener.apply(e,arguments)},a=function(){var e;return(e=document).removeEventListener.apply(e,arguments)},r=function(e,n){function t(e){return"number"==typeof e&&isFinite(e)}var o=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi"),s=null,i=null;if(Object.prototype.hasOwnProperty.call(e,"width")){var l=e.width.match(o)[0],a=e.width.substring(l.length);s=!t(Number(l))||"%"!==a&&"px"!==a?null:{number:Number(l),unit:a}}if(Object.prototype.hasOwnProperty.call(e,"height")){var r=e.height.match(o)[0],c=e.height.substring(r.length);i=!t(Number(r))||"%"!==c&&"px"!==c?null:{number:Number(r),unit:c}}var p=1,d=1;null!==s&&"px"===s.unit&&s.number>n.width&&(p=n.width/s.number),null!==i&&"px"===i.unit&&i.number>n.height&&(d=n.height/i.number);var u=1;u=d<=p?d:p;var m={};if(null!==s){var h;h="px"===s.unit?s.number*u:s.number/100*n.width*u;var g=n.width-h;m.left=g/2}if(null!==s){var v;v="px"===i.unit?i.number*u:i.number/100*n.height*u;var b=n.height-v;m.top=b/2}return{scale:u,position:m}},c=function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx".replace(/[xy]/g,(function(n){var t=(e+16*Math.random())%16|0;e=Math.floor(e/16);var o=Math.random()>.5,s=("x"==n?t:3&t|8).toString(16);return o?s.toUpperCase():s}))};var p=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e){var n=e.exports={};n.playSVG='\n  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">\n    <path fill="#999" fill-rule="nonzero" d="M16.224 8.515L2.582.245A1.7 1.7 0 0 0 0 1.702V18.24a1.7 1.7 0 0 0 2.582 1.455l13.642-8.27a1.7 1.7 0 0 0 0-2.91z"/>\n</svg>\n\n',n.dcSVG='\n  <svg class="svg" style="transform:scale(0.55)" version="1.0" xmlns="http://www.w3.org/2000/svg"\n width="1705.000000pt" height="1903.000000pt" viewBox="0 0 1705.000000 1903.000000"\n preserveAspectRatio="xMidYMid meet">\n<metadata>\nCreated by potrace 1.15, written by Peter Selinger 2001-2017\n</metadata>\n<g transform="translate(0.000000,1903.000000) scale(0.100000,-0.100000)"\nfill="#000000" stroke="none">\n<path d="M0 9515 l0 -9515 1583 0 1582 0 4430 4655 c2437 2561 4457 4687 4490\n4726 33 38 1164 1227 2513 2642 l2452 2572 0 2192 c0 1206 -2 2193 -4 2193 -3\n0 -1597 -1652 -3542 -3671 l-3538 -3671 -31 35 c-16 20 -1497 1683 -3290 3696\nl-3260 3661 -1692 0 -1693 0 0 -9515z m5504 2412 c1253 -1413 2279 -2574 2282\n-2580 3 -9 -3274 -3438 -4597 -4811 -5 -6 -9 1968 -9 4999 l0 5010 24 -25 c13\n-14 1048 -1181 2300 -2593z"/>\n<path d="M13924 7584 c-34 -17 -2029 -2158 -2029 -2178 0 -15 5121 -5400 5141\n-5404 12 -3 14 295 14 2241 l0 2245 -1478 1543 c-813 849 -1490 1550 -1505\n1557 -38 16 -105 15 -143 -4z"/>\n</g>\n</svg>\n',n.pauseSVG='\n  <svg class="svg" style="transform:scale(1.5)" width="100%" height="100%" viewBox="0 0 36 36" >\n    <path id="pause-icon" data-state="playing" d="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26" />\n  </svg>\n',n.replaySVG='\n  <svg class="svg" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">\n    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>\n    <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">\n      <path d="M5356.3,4203.8c-1247.8-153.1-2324.2-811.3-3000.7-1839.7c-379.4-578.2-596.5-1209-660.5-1933.4l-27.4-294.8H883.9c-431.9,0-783.9-6.9-783.9-18.3c0-9.2,477.6-493.7,1062.7-1078.7l1062.7-1062.7L3288.1-961.1C3873.1-376,4350.8,108.5,4350.8,117.6c0,11.4-356.5,18.3-790.7,18.3h-793l18.3,189.7C2831,876.3,2991,1338,3288.1,1779.1C4122.3,3026.9,5706,3472.5,7065.8,2841.8C7639.4,2578.9,8197,2035,8487.3,1461.4C8581,1274,8709,896.9,8754.7,666.1c48-246.8,54.8-811.3,9.1-1055.8C8567.3-1491.3,7788-2394,6720.7-2750.5c-315.4-107.4-541.6-139.4-941.6-139.4c-287.9,0-415.9,11.4-598.8,50.3c-523.3,112-973.6,335.9-1371.2,681c-75.4,68.6-148.5,123.4-160,123.4c-9.1,0-187.4-169.1-393.1-374.8c-434.2-434.2-420.5-363.4-105.1-628.5c852.4-710.7,1972.3-1055.8,3046.4-937c1627.2,176,2977.8,1257,3489.8,2790.4c457.1,1368.9,169.1,2843-777,3969.7C8322.7,3484,7417.8,4000.4,6503.6,4160.4C6197.4,4213,5619.2,4235.8,5356.3,4203.8z"/>\n      <path d="M4990.7,124.5c0-1503.8,4.6-1794,32-1778c16,9.1,505.1,413.6,1085.6,895.8C7113.8,78.8,7161.8,122.2,7122.9,161c-80,75.4-2109.4,1757.5-2120.8,1757.5C4995.3,1918.5,4990.7,1111.8,4990.7,124.5z"/>\n    </g></g>\n  </svg>\n',n.volumeSVG='\n  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n   viewBox="0 0 286.374 286.374" enable-background="new 0 0 286.374 286.374" xml:space="preserve">\n    <g id="Volume_2">\n      <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M233.636,26.767l-33.372,28.5c25.659,21.07,42.006,52.616,42.006,87.92\n        c0,35.305-16.347,66.851-42.006,87.921l33.372,28.499c32.324-28.869,52.738-70.268,52.738-116.421\n        C286.374,97.034,265.96,55.635,233.636,26.767z M177.737,74.513l-34.69,29.64c15.14,6.818,27.19,21.681,27.19,39.034\n        s-12.05,32.216-27.19,39.034l34.69,29.64c21.294-15.717,36.051-40.586,36.051-68.674C213.788,115.099,199.03,90.23,177.737,74.513z\n         M108.672,48.317L44.746,98.441H17.898C4.671,98.441,0,103.268,0,116.34v53.695c0,13.072,4.951,17.898,17.898,17.898h26.848\n        l63.926,50.068c7.668,4.948,16.558,6.505,16.558-7.365V55.683C125.23,41.813,116.34,43.37,108.672,48.317z"/>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n',n.volumeMuteSVG='\n  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n   viewBox="0 0 286.277 286.277" enable-background="new 0 0 286.277 286.277" xml:space="preserve">\n    <g id="Volume_none">\n      <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M245.102,143.151l36.98-37.071c5.593-5.605,5.593-14.681,0-20.284\n        l-10.124-10.142c-5.593-5.604-14.655-5.604-20.247,0l-36.98,37.071l-36.977-37.043c-5.594-5.603-14.654-5.603-20.247,0\n        l-10.124,10.143c-5.594,5.603-5.594,14.679,0,20.282l36.987,37.053l-36.961,37.051c-5.591,5.604-5.591,14.681,0,20.284\n        l10.126,10.141c5.593,5.604,14.654,5.604,20.247,0l36.96-37.05l36.97,37.035c5.592,5.605,14.654,5.605,20.247,0l10.124-10.141\n        c5.593-5.603,5.593-14.68,0-20.282L245.102,143.151z M108.674,48.296L44.747,98.42H17.9c-13.228,0-17.899,4.826-17.899,17.898\n        L0,142.719l0.001,27.295c0,13.072,4.951,17.898,17.899,17.898h26.847l63.927,50.068c7.667,4.948,16.557,6.505,16.557-7.365V55.662\n        C125.23,41.792,116.341,43.349,108.674,48.296z"/>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n',n.settingsSVG='\n  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n    <path fill="#999" fill-rule="nonzero" d="M17.812 7.52h-1.474a7.09 7.09 0 0 0-.604-1.456l1.043-1.042a1.187 1.187 0 0 0 0-1.68l-1.12-1.118a1.188 1.188 0 0 0-1.68 0l-1.043 1.042a7.05 7.05 0 0 0-1.455-.604V1.188C11.48.531 10.948 0 10.292 0H8.708c-.656 0-1.187.532-1.187 1.188v1.474a7.1 7.1 0 0 0-1.456.604L5.022 2.224a1.187 1.187 0 0 0-1.68 0l-1.12 1.12a1.188 1.188 0 0 0 0 1.68l1.044 1.042c-.256.46-.458.949-.604 1.455H1.188C.531 7.52 0 8.052 0 8.708v1.584c0 .656.532 1.187 1.188 1.187h1.474c.146.507.348.995.604 1.456L2.22 13.979a1.188 1.188 0 0 0 0 1.68l1.12 1.119a1.223 1.223 0 0 0 1.68 0l1.043-1.043c.462.255.95.458 1.457.605v1.472c0 .656.531 1.188 1.187 1.188h1.584c.656 0 1.187-.532 1.187-1.188V16.34c.506-.147.995-.35 1.456-.604l1.043 1.043a1.188 1.188 0 0 0 1.68 0l1.119-1.12a1.187 1.187 0 0 0 0-1.679l-1.043-1.043c.256-.461.458-.95.604-1.456h1.474A1.188 1.188 0 0 0 19 10.29V8.709c0-.656-.532-1.187-1.188-1.187zM9.5 13.459a3.958 3.958 0 1 1 0-7.916 3.958 3.958 0 0 1 0 7.916z"/>\n</svg>\n\n',n.arrowRightSVG='\n  <svg class="svg arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 50 80" xml:space="preserve">\n    <polyline fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n  </svg>\n',n.arrowLeftSVG='\n  <svg class="svg arrow" class="svg" width="100%" height="100%" viewBox="0 0 50 80" xml:space="preserve">\n    <polyline fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n  </svg> \n',n.fullScreenSVG='\n <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n    <g fill="#999" fill-rule="nonzero">\n        <path d="M18.802 1.942A1.746 1.746 0 0 0 17.06.2h-4.537a.99.99 0 1 0 0 1.98h4.102c.11 0 .198.088.198.197v2.588a.99.99 0 1 0 1.98 0V1.942zM.198 4.965a.99.99 0 0 0 1.98 0v-2.59a.198.198 0 0 1 .197-.199h4.102a.99.99 0 0 0 0-1.979H1.944C.983.2.204.978.202 1.94L.198 4.965zM18.802 17.056v-3.023a.99.99 0 1 0-1.98 0v2.592c0 .11-.088.198-.197.198h-4.102a.99.99 0 1 0 0 1.98h4.533c.964-.001 1.746-.783 1.746-1.747zM.198 17.056a1.746 1.746 0 0 0 1.746 1.742h4.533a.99.99 0 1 0 0-1.979H2.375a.198.198 0 0 1-.198-.194v-2.592a.99.99 0 1 0-1.98 0v3.023z"/>\n        <rect width="10.651" height="6.117" x="4.174" y="6.441" rx="1.954"/>\n    </g>\n</svg>\n\n',n.loopSVG='\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">\n    <g fill="#999" fill-rule="nonzero">\n        <path d="M16.773 15.476H16.3a1.25 1.25 0 0 0 0 2.5h.478a6.944 6.944 0 0 0 .98-13.823.251.251 0 0 1-.208-.246V1.93A1.25 1.25 0 0 0 15.584.906l-4.778 3.341a1.25 1.25 0 0 0 .717 2.274h4.764c2.829 0 4.963 1.925 4.963 4.478a4.482 4.482 0 0 1-4.477 4.477zM6.247 17.845c.12.02.208.124.208.246v1.976a1.249 1.249 0 0 0 1.966 1.024l4.773-3.34a1.251 1.251 0 0 0-.717-2.275H7.713c-2.829 0-4.963-1.925-4.963-4.476a4.482 4.482 0 0 1 4.477-4.479h.478a1.25 1.25 0 1 0 0-2.5h-.478a6.945 6.945 0 0 0-.98 13.824z"/>\n    </g>\n</svg>\n',n.loadingSVG='<svg class="lds-spinner" width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(30 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(60 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(90 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(120 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(150 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(180 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(210 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(240 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(270 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(300 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(330 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\n  </rect>\n</g></svg>'})),d={name:"mc-player",set playerName(e){this.name+="-"+e}},u=function(e,n){var t={default:{"settings-background-color":"whitesmoke","hms-background-color":"whitesmoke","background-color":"whitesmoke","grad-height":"0px",color:"black","svg-color":"black","loopbar-color":"#808086","speedbar-color":"#999","runningbar-color":"red","cursor-color":"red","speedbar-cursor-color":"red","button-opacity":"1","hover-color":"rgba(200, 200, 200, 0.5)","slider-off-color":"#ccc","slider-on-color":"red","preview-border":"1px solid rgba(0,0,0,1)",border:"1px solid rgba(255,255,255,0.2)","controls-border":"none","svg-selected-color":"red","loopbar-boundaries-style::before":"","loopbar-boundaries-style::after":"","theme-style":"","loopbar-boundaries-color":"#808086"},dark:{"settings-background-color":"black","hms-background-color":"black","background-color":"black","grad-height":"0px",color:"white","svg-color":"white","loopbar-color":"#808086","speedbar-color":"#999","runningbar-color":"red","cursor-color":"red","speedbar-cursor-color":"red","button-opacity":"1","hover-color":"rgba(90, 90, 90, 0.5)","slider-off-color":"#ccc","slider-on-color":"red","preview-border":"1px solid rgba(0,0,0,1)",border:"1px solid rgba(255,255,255,0.2)","controls-border":"none","svg-selected-color":"red","loopbar-boundaries-style::before":"","loopbar-boundaries-style::after":"","theme-style":"","loopbar-boundaries-color":"#808086"},whiteGold:{"settings-background-color":"white","hms-background-color":"white","background-color":"white","grad-height":"0px",color:"#a17f1a","svg-color":"#a17f1a","loopbar-color":"#808086","speedbar-color":"#999","runningbar-color":"#a17f1a","cursor-color":"#a17f1a","speedbar-cursor-color":"#a17f1a","button-opacity":"1","hover-color":"rgba(200, 200, 200, 0.5)","slider-off-color":"#ccc","slider-on-color":"#a17f1a","preview-border":"1px solid rgba(0,0,0,1)",border:"1px solid rgba(255,255,255,0.2)","controls-border":"none","svg-selected-color":"red","loopbar-boundaries-style::before":"","loopbar-boundaries-style::after":"","theme-style":"","loopbar-boundaries-color":"#808086"},darkGold:{"settings-background-color":"black","hms-background-color":"black","background-color":"black","grad-height":"0px",color:"#a17f1a","svg-color":"#a17f1a","loopbar-color":"#808086","speedbar-color":"#999","runningbar-color":"#a17f1a","cursor-color":"#a17f1a","speedbar-cursor-color":"#a17f1a","button-opacity":"1","hover-color":"rgba(90, 90, 90, 0.5)","slider-off-color":"#ccc","slider-on-color":"#a17f1a","preview-border":"1px solid rgba(0,0,0,1)",border:"1px solid rgba(255,255,255,0.2)","controls-border":"none","svg-selected-color":"red","loopbar-boundaries-style::before":"","loopbar-boundaries-style::after":"","theme-style":"","loopbar-boundaries-color":"#808086"},transparent:{"background-color":"transparent","settings-background-color":"rgba(0,0,0,0.5)","hms-background-color":"rgba(0,0,0,0.5)","preview-border":"1px solid rgba(0,0,0,1)",color:"#999","grad-height":"60px","svg-color":"#999","loopbar-color":"#808086","speedbar-color":"#999","runningbar-color":"red","cursor-color":"#9e2d11","cursor-style::before":'\n        box-shadow: 0px 0px 6px 6px red;\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        background-color: red;\n        position: relative;\n        left: -2px;\n        top: -2px;\n    ',"cursor-style::after":'\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        box-shadow: 0px 0px 6px 6px red;\n        content: "";\n        display: block;\n        position: absolute;\n        background-color: red;\n        right: -2px;\n        bottom: -2px;\n    ',"speedbar-cursor-color":"red","button-opacity":"1","hover-color":"rgba(200, 200, 200, 0.5)","slider-off-color":"#ccc","slider-on-color":"red",border:"1px solid rgba(255,255,255,0.1)","controls-border":"1px solid rgba(255,255,255,0.1)","svg-selected-color":"red","loopbar-boundaries-style":"\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #ff0000;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #ff0000;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ","loopbar-boundaries-style::before":'\n            width: 16px;\n        height: 5px;\n        background: #ff0000;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',"loopbar-boundaries-style::after":'\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #ff0000;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',"theme-style":"\n        #".concat(n,"-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    ")},"mc-green":{"background-color":"#141416","settings-background-color":"rgba(0,0,0,0.5)","hms-background-color":"rgba(0,0,0,0.5)","preview-border":"1px solid rgba(0,0,0,1)",color:"#999","grad-height":"0px","svg-color":"#999","loopbar-color":"rgba(0,184,139,0.2)","loopbar-boundaries-color":"#00b88b","totalbar-color":"rgba(255, 255, 255, 0.11)","speedbar-color":"#999","runningbar-color":"#00b88b","cursor-color":"#00b88b","speedbar-cursor-color":"#00b88b","button-opacity":"1","hover-color":"rgba(0,184,139,0.2)","slider-off-color":"#ccc","slider-on-color":"#00b88b",border:"1px solid rgba(255,255,255,0.1)","controls-border":"1px solid #151515","svg-selected-color":"#00b88b","loopbar-boundaries-style":"\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #00b88b;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #00b88b;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ","loopbar-boundaries-style::before":'\n            width: 16px;\n        height: 5px;\n        background: #00b88b;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',"loopbar-boundaries-style::after":'\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #00b88b;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',"theme-style":"\n        #".concat(n,"-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    ")},"mc-blue":{"background-color":"#141416","settings-background-color":"rgba(0,0,0,0.5)","hms-background-color":"rgba(0,0,0,0.5)","preview-border":"1px solid rgba(0,0,0,1)",color:"#999","grad-height":"0px","svg-color":"#999","loopbar-color":"rgba(0,153,225,0.2)","loopbar-boundaries-color":"#0099e1","totalbar-color":"rgba(255, 255, 255, 0.11)","speedbar-color":"#999","runningbar-color":"#0099e1","cursor-color":"#0099e1","speedbar-cursor-color":"#0099e1","button-opacity":"1","hover-color":"rgba(0,153,225,0.2)","slider-off-color":"#ccc","slider-on-color":"#0099e1",border:"1px solid rgba(255,255,255,0.1)","controls-border":"1px solid #151515","svg-selected-color":"#0099e1","loopbar-boundaries-style":"\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #0099e1;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #0099e1;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ","loopbar-boundaries-style::before":'\n            width: 16px;\n        height: 5px;\n        background: #0099e1;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',"loopbar-boundaries-style::after":'\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #0099e1;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',"theme-style":"\n        #".concat(n,"-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    ")},"on-top":{"background-height":"100%","pointer-event-panel-height":"calc(100% - 44px)","controls-bottom":"0px","settings-panel-bottom":"48px","controls-position":"0px"},"position-bottom":{"background-height":"calc(100% - 44px)","pointer-event-panel-height":"calc(100% - 44px)","controls-bottom":"-0px","settings-panel-bottom":"48px","controls-position":"40px"}};return t[e]},m=o,h=i,g=l,v=a,b=o;var f=l,y=a,x=l,w=a,k=l,B=a,L=o,M=l,E=a,T=o,S=l,C=a,z=o,P=o;function V(e,n){for(var t=n.parentNode;null!=t;){if(t==e)return!0;t=t.parentNode}return!1}var H=c,D=o,N=l,I=a,W=t,F=o,A=new e.TimeCapsule,U=o,R=s,G=i,J=r;return function(){function e(n){var t=this;for(var o in function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),n.id=n.id||Date.now(),n.preview=n.preview||!1,n.showVolume=n.showVolume||!1,n.showIndicator=n.showIndicator||!1,n.theme=n.theme||"transparent on-top",n.host=n.host||n.clip.props.host,n.buttons=n.buttons||{},n.timeFormat=n.timeFormat||"ss",n.scaleToFit=n.scaleToFit||!1,void 0===n.pointerEvents||null===n.pointerEvents?n.pointerEvents=!0:n.pointerEvents=Boolean(n.pointerEvents),n.onMillisecondChange=n.onMillisecondChange||null,n.speedValues=n.speedValues||[-4,-2,-1,-.5,0,.5,1,2,4],n.speedValues)isFinite(n.speedValues[o])||n.speedValues.splice(o,1);n.speedValues.sort((function(e,n){return e-n})),this.className=d.name,d.playerName=n.id,this.options=n,this.id=this.options.id,this.name=d.name,this.previewClip=null,this.clip=n.clip,this.clipClass=n.clipClass,this.state=this.clip.runTimeInfo.state,this.listeners={},this.previewScale=.25,this.settings={volume:1,journey:null,previousVolume:1,volumeMute:!1,needsUpdate:!0,resizeLoop:!1,loopJourney:!1,previewJourney:null,loopActivated:!1,requestingLoop:!1,playAfterResize:!1,loopStartMillisecond:0,loopLastPositionXPxls:0,loopLastPositionXPercentage:0,loopEndMillisecond:this.clip.duration},this.functions={millisecondChange:this.millisecondChange,createJourney:this.createJourney,createLoop:this.createLoop},function(e){e.elements={};var n=e.clip.props.host;if(n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",e.clip.props.host.style.position="relative",e.clip.props.host.style.zIndex="0",e.elements.mcPlayer=h("div"),e.elements.mcPlayer.id="".concat(e.name),e.elements.mcPlayer.className="".concat(e.className),e.elements.mcPlayer.innerHTML=function(e){return'\n  <div\n    class="pointer-event-panel"\n    id="'.concat(e.name,'-pointer-event-panel"\n  ></div>\n  <div\n    class="pointer-event-panel"\n    id="').concat(e.name,'-listener-helper"\n  ></div>\n  <div class="grad"></div>\n  <div class="background"></div>\n  <div id="').concat(e.name,'-controls">\n    <div id="').concat(e.name,'-totalbar">\n      <div id="').concat(e.name,'-hover-display">\n        <div id="').concat(e.name,'-hover-millisecond"></div>\n      </div>\n      <div id="').concat(e.name,'-loopbar">\n        <div\n          class="').concat(e.name,'-loop-boundaries"\n          id="').concat(e.name,'-loopbar-start"\n        ></div>\n        <div\n          class="').concat(e.name,'-loop-boundaries"\n          id="').concat(e.name,'-loopbar-end"\n        ></div>\n        <div id="').concat(e.name,'-helperbar"></div>\n        <div id="').concat(e.name,'-runningbar">\n          <div id="').concat(e.name,'-cursor"></div>\n        </div>\n      </div>\n    </div>\n    <div id="').concat(e.name,'-left-controls">\n      <div id="').concat(e.name,'-status-btn">\n        ').concat(e.svg.playSVG,'\n        <span id="').concat(e.name,'-indicator"></span>\n      </div>\n      <div id="').concat(e.name,'-volume">\n        <div id="').concat(e.name,'-volume-btn">\n          ').concat(e.svg.volumeSVG,'\n        </div>\n        <div id="').concat(e.name,'-volumebar-helper"></div>\n        <div id="').concat(e.name,'-volumebar">\n            <div id="').concat(e.name,'-volumebar-active">\n              <div id="').concat(e.name,'-volume-cursor"></div>\n            </div>\n        </div>\n      </div>\n      <div id="').concat(e.name,'-time-display">\n        <span id="').concat(e.name,'-time-current"></span>\n        <span id="').concat(e.name,'-time-separator"></span>\n        <span id="').concat(e.name,'-time-total"></span>\n      </div>\n    </div>\n    <div id="').concat(e.name,'-right-controls">\n      <div\n        id="').concat(e.name,'-loop-btn-container"\n      >\n        <div\n          id="').concat(e.name,'-loop-btn"\n        >').concat(e.svg.loopSVG,'</div>\n        <div\n          id="').concat(e.name,'-loop-time"\n        >\n          <span\n            id="').concat(e.name,'-loopbar-start-time"\n            class="').concat(e.name,'-loopbar-time"\n          ></span>\n          <span>:</span>\n          <span\n            id="').concat(e.name,'-loopbar-end-time"\n            class="').concat(e.name,'-loopbar-time"\n          ></span>\n        </div>\n      </div>\n      <div\n        id="').concat(e.name,'-settings-btn"\n      >').concat(e.svg.settingsSVG,'</div>\n      <div\n        id="').concat(e.name,'-dc-btn"\n      >\n        ').concat(e.svg.dcSVG,'\n      </div>\n      \n      <div\n        id="').concat(e.name,'-full-screen-btn"\n      >').concat(e.svg.fullScreenSVG,'</div>\n    </div>\n    \n\n  </div>\n  <div id="').concat(e.name,'-settings-panel">\n    <ul id="').concat(e.name,'-main-settings">\n      <li id="').concat(e.name,'-settings-pointer-events">\n        <label>Pointer Events</label>\n        <label class="switch settings-switch">\n          <input id="').concat(e.name,'-pointer-events-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="').concat(e.name,'-settings-preview">\n        <label>Show Preview</label>\n        <label class="switch settings-switch">\n          <input id="').concat(e.name,'-show-preview-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="').concat(e.name,'-settings-indicator">\n        <label>Show Indicator</label>\n        <label class="switch settings-switch">\n          <input id="').concat(e.name,'-show-indicator-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="').concat(e.name,'-settings-volume">\n        <label>Show Volume</label>\n        <label class="switch settings-switch">\n          <input id="').concat(e.name,'-show-volume-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="').concat(e.name,'-settings-speed-show">\n        <label>Speed</label>\n        <div class="').concat(e.name,'-speed-btn">').concat(e.svg.arrowRightSVG,'</div>\n        <span id="').concat(e.name,'-speed-current"></span>\n      </li>\n    </ul>\n    <ul id="').concat(e.name,'-speed-settings">\n      <li id="').concat(e.name,'-settings-speed-hide">\n        <div class="').concat(e.name,'-speed-btn">').concat(e.svg.arrowLeftSVG,"</div>\n        <label id=").concat(e.name,'-speed-runtime>Speed</label>\n      </li>\n      <li>\n        <div id="').concat(e.name,'-speed-value-helperbar"></div>\n        <div id="').concat(e.name,'-speed-value-bar">\n          <div\n            class="').concat(e.name,'-speed-value-step"\n            id="').concat(e.name,'-speed-cursor"\n          >\n            <div></div>\n          </div>\n        </div>\n        <div id="').concat(e.name,'-speed-value">\n        </div>\n      </li>\n    </ul>\n  </div>\n')}({svg:p,name:e.name}),"string"==typeof e.options.host){var t=document.querySelectorAll(e.options.host);for(var o in t)isNaN(o)||t[o].appendChild(e.elements.mcPlayer)}else e.options.host.appendChild(e.elements.mcPlayer);for(var s in e.elements.pointerEventPanel=m("".concat(e.name,"-pointer-event-panel")),e.elements.listenerHelper=m("".concat(e.name,"-listener-helper")),e.elements.loopBar=m("".concat(e.name,"-loopbar")),e.elements.totalBar=m("".concat(e.name,"-totalbar")),e.elements.indicator=m("".concat(e.name,"-indicator")),e.elements.loopButton=m("".concat(e.name,"-loop-btn")),e.elements.volumeBar=m("".concat(e.name,"-volumebar")),e.elements.totalTime=m("".concat(e.name,"-time-total")),e.elements.volumeControl=m("".concat(e.name,"-volume")),e.elements.volumeBtn=m("".concat(e.name,"-volume-btn")),e.elements.runningBar=m("".concat(e.name,"-runningbar")),e.elements.loopBarEnd=m("".concat(e.name,"-loopbar-end")),e.elements.statusButton=m("".concat(e.name,"-status-btn")),e.elements.speedBar=m("".concat(e.name,"-speed-value-bar")),e.elements.currentTime=m("".concat(e.name,"-time-current")),e.elements.timeDisplay=m("".concat(e.name,"-time-display")),e.elements.speedCurrent=m("".concat(e.name,"-speed-current")),e.elements.loopBarStart=m("".concat(e.name,"-loopbar-start")),e.elements.volumeCursor=m("".concat(e.name,"-volume-cursor")),e.elements.settingsButton=m("".concat(e.name,"-settings-btn")),e.elements.donkeyclipButton=m("".concat(e.name,"-dc-btn")),e.elements.timeSeparator=m("".concat(e.name,"-time-separator")),e.elements.settingsPanel=m("".concat(e.name,"-settings-panel")),e.elements.settingsMainPanel=m("".concat(e.name,"-main-settings")),e.elements.fullScreenButton=m("".concat(e.name,"-full-screen-btn")),e.elements.volumeBarHelper=m("".concat(e.name,"-volumebar-helper")),e.elements.volumeBarActive=m("".concat(e.name,"-volumebar-active")),e.elements.settingsSpeedPanel=m("".concat(e.name,"-speed-settings")),e.elements.settingsShowVolume=m("".concat(e.name,"-settings-volume")),e.elements.settingsShowPreview=m("".concat(e.name,"-settings-preview")),e.elements.settingsPointerEvents=m("".concat(e.name,"-settings-pointer-events")),e.elements.speedBarHelper=m("".concat(e.name,"-speed-value-helperbar")),e.elements.settingsShowIndicator=m("".concat(e.name,"-settings-indicator")),e.elements.settingsSpeedButtonShow=m("".concat(e.name,"-settings-speed-show")),e.elements.settingsSpeedButtonHide=m("".concat(e.name,"-settings-speed-hide")),e.elements.volumeBarActive.style.width=100*e.settings.volume+"%",e.elements.currentTime.innerHTML=e.timeFormat(0),e.elements.totalTime.innerHTML=e.timeFormat(e.clip.duration),e.elements.timeSeparator.innerHTML="/",e.elements.settingsPanel.classList.add("m-fadeOut","".concat(e.name,"-hide")),e.options.showIndicator?(e.elements.indicator.style.visibility="visible",e.elements.statusButton.style.width="35px",e.elements.statusButton.style.height="20px",e.elements.statusButton.style.bottom="5px"):e.elements.indicator.style.visibility="hidden",e.elements.indicator.innerHTML=e.clip.runTimeInfo.state,e.elements.settingsSpeedPanel.style.display="none",e.elements.settingsSpeedPanel.getElementsByTagName("li")[1].classList.add("no-hover"),e.elements.loopBarStart.style.left="0%",e.elements.loopBarStart.classList.add("m-fadeOut","".concat(e.name,"-hide")),e.elements.loopBarEnd.style.left="100%",e.elements.loopBarEnd.classList.add("m-fadeOut","".concat(e.name,"-hide")),e.elements.loopStartTime=m("".concat(e.name,"-loopbar-start-time")),e.elements.loopEndTime=m("".concat(e.name,"-loopbar-end-time")),e.elements.editableLoopStartTime=document.createElement("input"),e.elements.editableLoopStartTime.type="text",e.elements.editableLoopStartTime.size=m("".concat(e.name,"-time-total")).innerHTML.length+1,e.elements.editableLoopStartTime.maxLength=m("".concat(e.name,"-time-total")).innerHTML.length,e.elements.editableLoopStartTime.style.height=m("".concat(e.name,"-time-total")).offsetHeight,e.elements.editableLoopStartTime.value=m("".concat(e.name,"-loopbar-start-time")).innerHTML,e.elements.editableLoopStartTime.style.fontSize="8px",e.elements.editableLoopEndTime=document.createElement("input"),e.elements.editableLoopEndTime.type="text",e.elements.editableLoopEndTime.size=m("".concat(e.name,"-time-total")).innerHTML.length+1,e.elements.editableLoopEndTime.maxLength=m("".concat(e.name,"-time-total")).innerHTML.length,e.elements.editableLoopEndTime.style.height=m("".concat(e.name,"-time-total")).offsetHeight,e.elements.editableLoopEndTime.value=m("".concat(e.name,"-loopbar-start-time")).innerHTML,e.elements.editableLoopEndTime.pattern="d*",e.elements.editableLoopEndTime.style.fontSize="8px",m("".concat(e.name,"-loop-time")).classList.add("m-fadeOut","".concat(e.name,"-hide")),m("".concat(e.name,"-hover-display")).classList.add("m-fadeOut"),m("".concat(e.name,"-show-volume-checkbox")).checked=e.options.showVolume,m("".concat(e.name,"-show-indicator-checkbox")).checked=e.options.showIndicator,m("".concat(e.name,"-show-preview-checkbox")).checked=e.options.preview,m("".concat(e.name,"-pointer-events-checkbox")).checked=e.options.pointerEvents,e.options.pointerEvents?(e.elements.mcPlayer.style.pointerEvents="none",e.elements.pointerEventPanel.style.pointerEvents="auto",m("".concat(e.name,"-controls")).style.pointerEvents="auto",e.elements.settingsPanel.style.pointerEvents="auto"):(e.elements.mcPlayer.style.pointerEvents="none",e.elements.pointerEventPanel.style.pointerEvents="none",m("".concat(e.name,"-controls")).style.pointerEvents="auto",e.elements.settingsPanel.style.pointerEvents="auto"),e.elements.listenerHelper.style.pointerEvents="none",e.options.showVolume?(e.elements.timeDisplay.style.left="",e.elements.volumeControl.style.visibility="visible"):(e.elements.timeDisplay.style.left="45px",e.elements.volumeControl.style.visibility="hidden",e.elements.volumeControl.classList.toggle("".concat(e.name,"-hide")),e.elements.volumeControl.classList.toggle("".concat(e.name,"-volume-width-transition"))),e.options.speedValues){var i=h("div");i.className="".concat(e.name,"-speed-value-step");var l=h("div");l.className="".concat(e.name,"-speed-value"),l.dataset.speedValue=e.options.speedValues[s],l.innerHTML=e.options.speedValues[s],l.dataset.zone=s,m("".concat(e.name,"-speed-value")).prepend(l),e.elements.speedBar.prepend(i)}!1===e.options.buttons.fullScreen&&e.elements.fullScreenButton.remove(),!1===e.options.buttons.settings&&e.elements.settingsButton.remove(),!1===e.options.buttons.donkeyclip&&e.elements.donkeyclipButton.remove(),!1===e.options.buttons.loop&&e.elements.loopButton.remove()}(this),this.setTheme(),this.setSpeed(),this.subscribeToTimer(),this.subscribeToDurationChange(),this.addEventListeners(),this.scaleClipHost(),this.eventBroadcast("state-change",this.state),this.options.preview&&this.createPreviewDisplay(),this.resizeTimeout=setTimeout((function(){}),20),window.addEventListener("resize",(function(){clearTimeout(t.resizeTimeout),t.resizeTimeout=setTimeout((function(){t.options.preview&&t.setPreviewDimentions(),t.options.scaleToFit&&t.scaleClipHost()}),20)}))}var t,o,s;return t=e,(o=[{key:"scaleClipHost",value:function(){if(this.options.scaleToFit){var e=J(this.clip.props.containerParams,{width:this.clip.props.host.offsetWidth,height:this.clip.props.host.offsetHeight});this.clip.realClip.rootElement.style.transform="scale(".concat(e.scale),this.clip.realClip.rootElement.style.left=e.position.left+"px",this.clip.realClip.rootElement.style.top=e.position.top+"px"}}},{key:"createLoop",value:function(e,n){this.settings.loopStartMillisecond=e,this.settings.loopEndMillisecond=n,this.elements.loopBar.style.left=e/this.clip.duration*100+"%",this.elements.loopBar.style.width=(n-e)/this.clip.duration*100+"%",this.createJourney(this.clip,e),this.elements.runningBar.style.width="0%",!this.settings.loopActivated&&this.activateLoop(!1)}},{key:"createJourney",value:function(e,n){var t=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};setTimeout((function(){var s=o.before,i=void 0===s?null:s,l=o.after,a=void 0===l?null:l;i&&e[i](),t.settings.journey=A.startJourney(e),t.settings.journey.station(n),t.settings.journey.destination(),a&&e[a]()}),0)}},{key:"millisecondChange",value:function(e,n,t,o){var s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(this.state!==n&&(this.state=n,this.eventBroadcast("state-change",n)),!this.settings.needsUpdate)return this.clip.pause(),1;var i=this.clip,l=this.settings,a=l.loopActivated,r=l.loopEndMillisecond,c=l.loopStartMillisecond,p=this.clip.duration,d=this.elements,u=d.totalBar,m=d.loopBar,h=m.offsetWidth,g=m.offsetLeft/u.offsetWidth,v=e-p*g,b=p/u.offsetWidth*h;return e>=r&&a&&this.clip.speed>=0?(this.createJourney(i,c+1,{after:this.settings.playAfterResize||"playing"==this.clip.runTimeInfo.state?"play":null}),1):e>=r&&a&&this.clip.speed<0?(this.createJourney(i,r-1,{after:this.settings.playAfterResize||"playing"==this.clip.runTimeInfo.state?"play":null}),1):e<=c&&a&&this.clip.speed>=0?(this.createJourney(i,c+1,{after:this.settings.playAfterResize||"playing"==this.clip.runTimeInfo.state?"play":null}),1):e<=c&&a&&this.clip.speed<0?(this.createJourney(i,r-1,{after:this.settings.playAfterResize||"playing"==this.clip.runTimeInfo.state?"play":null}),1):(o&&this.createJourney(i,e,{after:this.settings.playAfterResize?"play":null}),this.elements.runningBar.style.width=v/b*100+"%",this.elements.currentTime.innerHTML=this.timeFormat(e),void(this.options.onMillisecondChange&&s&&this.options.onMillisecondChange(e)))}},{key:"eventBroadcast",value:function(e,n){var t=U("".concat(this.name,"-controls"));"state-change"===e?"paused"===n||"idle"===n||"transitional"===n||"armed"===n||"blocked"===n?(t.classList.value.includes("force-show-controls")||t.classList.toggle("force-show-controls"),this.elements.statusButton.innerHTML=p.playSVG,this.elements.statusButton.appendChild(this.elements.indicator),this.elements.indicator.innerHTML="".concat(n.charAt(0).toUpperCase()+n.slice(1)),"blocked"===n&&(this.elements.pointerEventPanel.innerHTML='\n            <div style="width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;">'.concat(p.loadingSVG,"</div>"))):(t.classList.value.includes("force-show-controls")&&t.classList.toggle("force-show-controls"),this.elements.statusButton.innerHTML=p.pauseSVG,this.elements.statusButton.appendChild(this.elements.indicator),this.elements.indicator.innerHTML="Playing",this.elements.pointerEventPanel.innerHTML="","playing"===n&&this.clip.runTimeInfo.currentMillisecond===this.clip.duration&&this.clip.speed>=0?this.createJourney(this.clip,1,{after:"play"}):"playing"===n&&0===this.clip.runTimeInfo.currentMillisecond&&this.clip.speed<0?this.createJourney(this.clip,this.clip.duration-1,{after:"play"}):"playing"===n&&this.clip.runTimeInfo.currentMillisecond===this.clip.duration&&this.clip.speed<0&&this.createJourney(this.clip,this.clip.duration-1,{after:"play"})):"duration-change"===e&&(this.elements.totalTime.innerHTML=this.timeFormat(this.clip.duration),this.settings.loopEndMillisecond=this.clip.duration,this.elements.pointerEventPanel.innerHTML="",this.millisecondChange(this.clip.runTimeInfo.currentMillisecond))}},{key:"subscribeToDurationChange",value:function(){this.clip.subscribeToDurationChange(this.subscribeToDurationChangeCallback.bind(this))}},{key:"subscribeToDurationChangeCallback",value:function(){this.eventBroadcast("duration-change")}},{key:"subscribeToTimer",value:function(){this.clip.subscribe(this.id,this.millisecondChange.bind(this))}},{key:"handleDragStart",value:function(){this.settings.needsUpdate=!0,this.settings.journey=A.startJourney(this.clip)}},{key:"timeFormat",value:function(e){if("ss"===this.options.timeFormat){var n=e/1e3/60/60,t=n%1*60,o=t%1*60,s=("0"+parseInt(n)).slice(-2),i=("0"+parseInt(t)).slice(-2),l=("0"+parseInt(o)).slice(-2);return"".concat("00"===s?"":s+":").concat(i,":").concat(l)}return e}},{key:"handleDrag",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];isFinite(e)||(e=0);var t=this.clip.duration,o=this.settings.journey,s=this.elements,i=s.loopBar,l=s.totalBar,a=s.runningBar,r=s.currentTime,c=e+i.offsetLeft,p=Math.round(t*c/l.offsetWidth);r.innerHTML=this.timeFormat(p),a.style.width=e/i.offsetWidth*100+"%",o.station(p),this.options.onMillisecondChange&&n&&this.options.onMillisecondChange(p)}},{key:"handleDragEnd",value:function(){this.settings.journey.destination()}},{key:"createProgressDrag",value:function(e){this.handleDragStart(),this.handleDrag(e),this.handleDragEnd()}},{key:"addEventListeners",value:function(){var e;(e=this).listeners.onCursorMoveLoopEnd=function(n){n.preventDefault();var t=(n.clientX||((n.touches||[])[0]||{}).clientX)-e.elements.totalBar.getBoundingClientRect().left;t<0?t=0:t>e.elements.totalBar.offsetWidth&&(t=e.elements.totalBar.offsetWidth),e.elements.runningBar.offsetWidth>=e.elements.loopBar.offsetWidth&&(e.elements.runningBar.style.width=e.elements.loopBar.offsetWidth+"px"),e.settings.loopLastPositionXPxls-t<0?e.elements.loopBar.style.width=Math.abs(e.settings.loopLastPositionXPxls-t)+"px":(e.elements.loopBar.style.left=t+"px",e.settings.loopLastPositionXPxls=t),e.settings.loopEndMillisecond=Math.round(e.clip.duration*((parseFloat(e.elements.loopBar.style.left)||0)+parseFloat(e.elements.loopBar.style.width))/e.elements.totalBar.offsetWidth),e.settings.loopEndMillisecond<e.clip.runTimeInfo.currentMillisecond&&(e.settings.loopJourney=!0),e.settings.loopStartMillisecond>e.settings.loopEndMillisecond&&(e.settings.loopStartMillisecond=e.settings.loopEndMillisecond,e.settings.loopJourney=!0),e.elements.loopEndTime.innerHTML=e.settings.loopEndMillisecond,e.elements.loopStartTime.innerHTML=e.settings.loopStartMillisecond},e.listeners.onMouseUpLoopEnd=function(n){if(e.elements.listenerHelper.style.pointerEvents="none",e.settings.resizeLoop=!1,n.preventDefault(),e.elements.runningBar.style.width=e.elements.runningBar.offsetWidth/e.elements.loopBar.offsetWidth*100+"%",e.elements.loopBar.style.left=e.elements.loopBar.offsetLeft/e.elements.totalBar.offsetWidth*100+"%",e.elements.loopBar.style.width=e.elements.loopBar.offsetWidth/e.elements.totalBar.offsetWidth*100+"%",e.settings.loopJourney&&(e.createProgressDrag(e.elements.runningBar.offsetWidth),e.settings.loopJourney=!1),w("mouseup",e.listeners.onMouseUpLoopEnd,!1),w("touchend",e.listeners.onMouseUpLoopEnd,!1),w("mousemove",e.listeners.onCursorMoveLoopEnd,!1),w("touchmove",e.listeners.onCursorMoveLoopEnd,!1),e.elements.loopBar.addEventListener("mousedown",e.listeners.onMouseDown,!1),e.elements.loopBar.addEventListener("touchstart",e.listeners.onMouseDown,{passive:!0},!1),e.settings.playAfterResize){var t;if("idle"===e.clip.runTimeInfo.state)t=e.clip.speed>=0?e.settings.loopStartMillisecond+1:e.settings.loopEndMillisecond-1,e.settings.needsUpdate=!0,e.createJourney(e.clip,t,{before:"pause",after:"play"});else if("completed"===e.clip.runTimeInfo.state){var o;o=e.clip.speed>=0?e.settings.loopStartMillisecond+1:e.settings.loopEndMillisecond-1,e.settings.needsUpdate=!0,e.createJourney(e.clip,o,{before:"pause",after:"play"})}else e.clip.play();e.settings.playAfterResize=!1}},e.listeners.onMouseDownLoopEnd=function(n){e.elements.listenerHelper.style.pointerEvents="auto",e.settings.resizeLoop=!0,e.settings.needsUpdate=!0,"playing"===e.clip.runTimeInfo.state&&(e.clip.pause(),e.settings.playAfterResize=!0),n.preventDefault(),e.elements.runningBar.style.width=e.elements.runningBar.offsetWidth+"px",e.elements.loopBar.style.left=e.elements.loopBar.offsetLeft+"px",e.elements.loopBar.style.width=e.elements.loopBar.offsetWidth+"px",e.elements.loopBar.removeEventListener("mousedown",e.listeners.onMouseDown,!1),e.elements.loopBar.removeEventListener("touchstart",e.listeners.onMouseDown,!1),e.listeners.onCursorMoveLoopEnd(n),x("mouseup",e.listeners.onMouseUpLoopEnd,!1),x("touchend",e.listeners.onMouseUpLoopEnd,!1),x("mousemove",e.listeners.onCursorMoveLoopEnd,!1),x("touchmove",e.listeners.onCursorMoveLoopEnd,!1)},e.elements.loopBarEnd.addEventListener("mousedown",e.listeners.onMouseDownLoopEnd,!1),e.elements.loopBarEnd.addEventListener("touchstart",e.listeners.onMouseDownLoopEnd,{passive:!1},!1),function(e){e.listeners.onCursorMove=function(n){n.preventDefault();var t=(n.clientX||((n.touches||[])[0]||{}).clientX)-e.elements.loopBar.getBoundingClientRect().left;t<0?t=0:t>e.elements.loopBar.offsetWidth&&(t=e.elements.loopBar.offsetWidth),e.handleDrag(t)},e.listeners.onMouseUp=function(){e.elements.listenerHelper.style.pointerEvents="none",B("mouseup",e.listeners.onMouseUp,!1),B("touchend",e.listeners.onMouseUp,!1),B("mousemove",e.listeners.onCursorMove,!1),B("touchmove",e.listeners.onCursorMove,!1),e.handleDragEnd(e.settings)},e.listeners.onMouseDown=function(n){e.elements.listenerHelper.style.pointerEvents="auto","playing"===e.clip.runTimeInfo.state&&(e.settings.playAfterResize=!0),e.handleDragStart(e.clip),e.listeners.onCursorMove(n),k("mouseup",e.listeners.onMouseUp,!1),k("touchend",e.listeners.onMouseUp,!1),k("mousemove",e.listeners.onCursorMove,!1),k("touchmove",e.listeners.onCursorMove,!1)},e.elements.loopBar.addEventListener("mousedown",e.listeners.onMouseDown,!1),e.elements.loopBar.addEventListener("touchstart",e.listeners.onMouseDown,{passive:!1},!1)}(this),function(e){e.listeners.onCursorMoveLoopStart=function(n){n.preventDefault();var t=n.clientX||((n.touches||[])[0]||{}).clientX,o=e.elements.totalBar.getBoundingClientRect(),s=Math.round(t-o.left),i=Math.round(e.settings.loopEndMillisecond/e.clip.duration*e.elements.totalBar.offsetWidth);s<0?s=0:s>e.elements.totalBar.offsetWidth&&(s=e.elements.totalBar.offsetWidth);var l=e.clip.runTimeInfo.currentMillisecond/e.clip.duration*e.elements.totalBar.offsetWidth-s;e.elements.loopBar.style.left=s+"px",e.elements.loopBar.style.width=i-s+"px",e.elements.runningBar.style.width=l+"px",e.settings.loopLastPositionXPxls=s,e.settings.loopStartMillisecond=Math.round(e.clip.duration*e.elements.loopBar.offsetLeft/e.elements.totalBar.offsetWidth),e.settings.loopEndMillisecond<e.settings.loopStartMillisecond&&(e.settings.loopEndMillisecond=e.settings.loopStartMillisecond,e.elements.loopBar.style.width="0px",e.elements.runningBar.style.width="0px"),e.elements.loopEndTime.innerHTML=e.settings.loopEndMillisecond,e.elements.loopStartTime.innerHTML=e.settings.loopStartMillisecond,e.settings.loopStartMillisecond>e.clip.runTimeInfo.currentMillisecond&&(e.settings.loopJourney=!0)},e.listeners.onMouseUpLoopStart=function(n){var t;(e.elements.listenerHelper.style.pointerEvents="none",e.settings.resizeLoop=!1,n.preventDefault(),e.settings.loopJourney&&(e.createProgressDrag(e.elements.runningBar.offsetWidth),e.settings.loopJourney=!1),e.elements.loopBar.style.left=e.elements.loopBar.offsetLeft/e.elements.totalBar.offsetWidth*100+"%",e.elements.loopBar.style.width=e.elements.loopBar.offsetWidth/e.elements.totalBar.offsetWidth*100+"%",e.settings.loopStartMillisecond=Math.round(e.clip.duration*e.elements.loopBar.offsetLeft/e.elements.totalBar.offsetWidth),e.elements.runningBar.style.width=e.elements.runningBar.offsetWidth/e.elements.loopBar.offsetWidth*100+"%",y("mouseup",e.listeners.onMouseUpLoopStart,!1),y("touchend",e.listeners.onMouseUpLoopStart,!1),y("mousemove",e.listeners.onCursorMoveLoopStart,!1),y("touchmove",e.listeners.onCursorMoveLoopStart,!1),e.elements.loopBar.addEventListener("mousedown",e.listeners.onMouseDown,!1),e.elements.loopBar.addEventListener("touchstart",e.listeners.onMouseDown,{passive:!0},!1),e.settings.playAfterResize)&&("idle"===e.clip.runTimeInfo.state?(t=e.clip.speed>=0?e.settings.loopStartMillisecond+1:e.settings.loopEndMillisecond-1,e.settings.needsUpdate=!0,e.createJourney(e.clip,t,{before:"pause",after:"play"})):e.clip.play(),e.settings.playAfterResize=!1)},e.listeners.onMouseDownLoopStart=function(n){e.elements.listenerHelper.style.pointerEvents="auto",e.settings.resizeLoop=!0,n.preventDefault(),e.settings.needsUpdate=!0,"playing"===e.clip.runTimeInfo.state&&(e.clip.pause(),e.settings.playAfterResize=!0),e.elements.loopBar.removeEventListener("mousedown",e.listeners.onMouseDown,!1),e.elements.loopBar.removeEventListener("touchstart",e.listeners.onMouseDown,!1),e.listeners.onCursorMoveLoopStart(n),f("mouseup",e.listeners.onMouseUpLoopStart,!1),f("touchend",e.listeners.onMouseUpLoopStart,!1),f("mousemove",e.listeners.onCursorMoveLoopStart,!1),f("touchmove",e.listeners.onCursorMoveLoopStart,!1)},e.elements.loopBarStart.addEventListener("mousedown",e.listeners.onMouseDownLoopStart,!1),e.elements.loopBarStart.addEventListener("touchstart",e.listeners.onMouseDownLoopStart,{passive:!1},!1)}(this),function(e){e.listeners.editableLoopStartTime=function(){e.elements.editableLoopStartTime.value=e.elements.loopStartTime.innerHTML,e.elements.loopStartTime.replaceWith(e.elements.editableLoopStartTime),e.elements.editableLoopStartTime.focus()},e.listeners.editableLoopEndTime=function(){e.elements.editableLoopEndTime.value=e.elements.loopEndTime.innerHTML,e.elements.loopEndTime.replaceWith(e.elements.editableLoopEndTime),e.elements.editableLoopEndTime.focus()},e.elements.editableLoopEndTime.onkeydown=e.elements.editableLoopStartTime.onkeydown=function(n){n.preventDefault(),13===n.keyCode&&(e.elements.editableLoopStartTime.onfocusout(),e.elements.editableLoopEndTime.onfocusout()),8===n.keyCode&&(n.target.value=n.target.value.toString().substring(0,n.target.value.toString().length-1)),13===n.keyCode&&n.target.blur();var t=parseFloat((n.target.value||0).toString()+n.key);if(!(t>e.clip.duration))if(n.target.value=t,n.target===e.elements.editableLoopStartTime){var o=e.elements.totalBar.getBoundingClientRect(),s={preventDefault:function(){},clientX:e.elements.totalBar.offsetWidth/e.clip.duration*n.target.value+o.left};e.listeners.onMouseDownLoopStart(s),e.listeners.onCursorMoveLoopStart(s),e.listeners.onMouseUpLoopStart(s)}else if(n.target===e.elements.editableLoopEndTime){var i=e.elements.totalBar.getBoundingClientRect(),l={preventDefault:function(){},clientX:e.elements.totalBar.offsetWidth/e.clip.duration*n.target.value+i.left};e.listeners.onMouseDownLoopEnd(l),e.listeners.onCursorMoveLoopEnd(l),e.listeners.onMouseUpLoopEnd(l)}},e.elements.loopStartTime.onclick=e.listeners.editableLoopStartTime,e.elements.loopEndTime.onclick=e.listeners.editableLoopEndTime,e.elements.editableLoopStartTime.onfocusout=function(){e.elements.editableLoopStartTime.replaceWith(e.elements.loopStartTime)},e.elements.editableLoopEndTime.onfocusout=function(){e.elements.editableLoopEndTime.replaceWith(e.elements.loopEndTime)}}(this),function(e){var n=!1;e.elements.volumeBtn.onclick=function(){if(e.settings.volumeMute){e.elements.volumeBarActive.style.width=100*e.settings.previousVolume+"%",e.clip.setVolume(e.settings.previousVolume),e.settings.volumeMute=!1;var n=document.createElement("span");n.innerHTML=p.volumeSVG,e.elements.volumeBtn.getElementsByTagName("svg")[0].replaceWith(n)}else{e.settings.volumeMute=!0,e.elements.volumeBarActive.style.width="0%",e.clip.setVolume(0);var t=document.createElement("span");t.innerHTML=p.volumeMuteSVG,e.elements.volumeBtn.getElementsByTagName("svg")[0].replaceWith(t)}};var t=!1;e.elements.volumeBtn.onmouseover=function(){t=!0,e.elements.volumeCursor.classList.add("".concat(e.name,"-volume-cursor-transition")),e.elements.volumeBar.classList.add("".concat(e.name,"-volume-width-transition")),e.elements.volumeBarHelper.classList.add("".concat(e.name,"-volume-width-transition")),e.elements.timeDisplay.classList.add("".concat(e.name,"-time-width-transition"))},b("".concat(e.name,"-left-controls")).onmouseout=function(){if(t&&!n){var o=event.toElement||event.relatedTarget||event.target;(function(e,n){for(var t=n.parentNode;null!=t;){if(t==e)return!0;t=t.parentNode}return!1})(b("".concat(e.name,"-left-controls")),o)||o===b("".concat(e.name,"-left-controls"))||(t=!1,e.elements.volumeCursor.classList.remove("".concat(e.name,"-volume-cursor-transition")),e.elements.volumeBar.classList.remove("".concat(e.name,"-volume-width-transition")),e.elements.volumeBarHelper.classList.remove("".concat(e.name,"-volume-width-transition")),e.elements.timeDisplay.classList.remove("".concat(e.name,"-time-width-transition")))}},e.listeners.onCursorMoveVolumeBar=function(n){n.preventDefault();var t=(n.clientX||((n.touches||[])[0]||{}).clientX)-e.elements.volumeBarHelper.getBoundingClientRect().left;if(t<0?t=0:t>e.elements.volumeBarHelper.offsetWidth&&(t=e.elements.volumeBarHelper.offsetWidth),e.settings.volume=Number((t/e.elements.volumeBarHelper.offsetWidth).toFixed(2)),e.elements.volumeBarActive.style.width=100*e.settings.volume+"%",e.clip.setVolume(e.settings.volume),e.settings.volume>0){e.settings.volumeMute=!1;var o=document.createElement("span");o.innerHTML=p.volumeSVG,e.elements.volumeBtn.getElementsByTagName("svg")[0].replaceWith(o)}else if(0===e.settings.volume){e.settings.volumeMute=!0;var s=document.createElement("span");s.innerHTML=p.volumeMuteSVG,e.elements.volumeBtn.getElementsByTagName("svg")[0].replaceWith(s)}},e.listeners.onMouseUpVolumeBar=function(t){n=!1,e.elements.listenerHelper.style.pointerEvents="none",t.preventDefault(),e.settings.volume>0&&(e.settings.previousVolume=e.settings.volume),v("mouseup",e.listeners.onMouseUpVolumeBar,!1),v("touchend",e.listeners.onMouseUpVolumeBar,!1),v("mousemove",e.listeners.onCursorMoveVolumeBar,!1),v("touchmove",e.listeners.onCursorMoveVolumeBar,!1)},e.listeners.onMouseDownVolumeBar=function(t){n=!0,e.elements.listenerHelper.style.pointerEvents="auto",t.preventDefault(),e.listeners.onCursorMoveVolumeBar(t),g("mouseup",e.listeners.onMouseUpVolumeBar,!1),g("touchend",e.listeners.onMouseUpVolumeBar,!1),g("mousemove",e.listeners.onCursorMoveVolumeBar,!1),g("touchmove",e.listeners.onCursorMoveVolumeBar,!1)},e.elements.volumeBarHelper.addEventListener("mousedown",e.listeners.onMouseDownVolumeBar,!1),e.elements.volumeCursor.addEventListener("mousedown",e.listeners.onMouseDownVolumeBar,!1),e.elements.volumeBarHelper.addEventListener("touchstart",e.listeners.onMouseDownVolumeBar,{passive:!1},!1),e.elements.volumeCursor.addEventListener("touchstart",e.listeners.onMouseDownVolumeBar,{passive:!1},!1)}(this),function(e){e.elements.statusButton.onclick=function(n){return n.preventDefault(),"playing"===e.clip.runTimeInfo.state?e.clip.pause():"paused"===e.clip.runTimeInfo.state||"idle"===e.clip.runTimeInfo.state||"transitional"===e.clip.runTimeInfo.state||"armed"===e.clip.runTimeInfo.state?e.clip.play():"idle"===e.clip.runTimeInfo.state?e.clip.speed>=0?(e.clip.play(),e.settings.needsUpdate=!0):(e.createJourney(e.clip,e.settings.loopEndMillisecond-1,{before:"pause",after:"play"}),e.settings.needsUpdate=!0):"completed"===e.clip.runTimeInfo.state&&(e.clip.speed>=0?(e.createJourney(e.clip,0,{before:"pause",after:"play"}),e.settings.needsUpdate=!0):(e.createJourney(e.clip,e.settings.loopEndMillisecond-1,{before:"pause",after:"play"}),e.settings.needsUpdate=!0)),!1}}(this),function(e){e.elements.settingsShowIndicator.onclick=function(n){n.preventDefault();var t=L("".concat(e.name,"-show-indicator-checkbox"));t.checked?(t.checked=!1,e.elements.indicator.style.visibility="hidden"):(t.checked=!0,e.elements.indicator.style.visibility="visible")},e.elements.settingsPointerEvents.onclick=function(n){n.preventDefault();var t=L("".concat(e.name,"-pointer-events-checkbox"));t.checked?(t.checked=!1,e.options.pointerEvents=!1,e.elements.mcPlayer.style.pointerEvents="none",e.elements.pointerEventPanel.style.pointerEvents="none",L("".concat(e.name,"-controls")).style.pointerEvents="auto",e.elements.settingsPanel.style.pointerEvents="auto"):(t.checked=!0,e.elements.mcPlayer.style.pointerEvents="none",e.elements.pointerEventPanel.style.pointerEvents="auto",L("".concat(e.name,"-controls")).style.pointerEvents="auto",e.elements.settingsPanel.style.pointerEvents="auto")},e.elements.settingsShowVolume.onclick=function(n){n.preventDefault(),e.elements.volumeControl.classList.toggle("".concat(e.name,"-volume-width-transition")),e.elements.volumeControl.classList.toggle("".concat(e.name,"-hide"));var t=L("".concat(e.name,"-show-volume-checkbox"));t.checked?(t.checked=!1,e.elements.volumeControl.style.visibility="hidden",e.elements.timeDisplay.style.left="45px"):(t.checked=!0,e.elements.volumeControl.style.visibility="visible",e.elements.timeDisplay.style.left="")},e.elements.settingsShowPreview.onclick=function(n){n.preventDefault();var t=L("".concat(e.name,"-show-preview-checkbox"));t.checked?(t.checked=!1,L("".concat(e.name,"-hover-display")).style.visibility="hidden",L("".concat(e.name,"-hover-display")).style.display="none",e.options.preview=!1):(e.previewClip||e.createPreviewDisplay(),t.checked=!0,L("".concat(e.name,"-hover-display")).style.visibility="visible",L("".concat(e.name,"-hover-display")).style.display="flex",e.options.preview=!0)},e.elements.settingsButton.onclick=function(n){n.preventDefault();var t=L("".concat(e.name,"-controls")),o=function n(t){if(e.elements.settingsPanel.contains(t.target))return!0;e.elements.settingsPanel.classList.toggle("".concat(e.name,"-hide")),e.elements.settingsPanel.classList.toggle("m-fadeOut"),e.elements.settingsPanel.classList.toggle("m-fadeIn"),e.elements.settingsPanel.className.includes("m-fadeOut")&&(E("click",n,!1),e.eventBroadcast("state-change",e.state))};e.elements.settingsPanel.className.includes("m-fadeOut")?(t.classList.value.includes("force-show-controls")||t.classList.toggle("force-show-controls"),M("click",o,!1)):E("click",o,!1)}}(this),function(e){e.elements.settingsSpeedButtonShow.onclick=e.elements.settingsSpeedButtonHide.onclick=function(n){n.preventDefault(),e.elements.settingsPanel.classList.toggle("".concat(e.name,"-settings-speed-panel")),e.elements.settingsPanel.className.includes("".concat(e.name,"-settings-speed-panel"))?(e.elements.settingsMainPanel.style.display="none",e.elements.settingsSpeedPanel.style.display="block"):(e.elements.settingsSpeedPanel.style.display="none",e.elements.settingsMainPanel.style.display="block")};var n=function(n){n.preventDefault();var t=e.elements.speedBar.getBoundingClientRect(),o=(n.clientY||((n.touches||[])[0]||{}).clientY)-t.top;(o-=8)<0?o=0:o>e.elements.speedBar.offsetHeight-16&&(o=e.elements.speedBar.offsetHeight-16);var s=-1*((o=Math.floor(o))/(16*(e.options.speedValues.length-1))-1),i=1/(e.options.speedValues.length-1),l=e.calculateSpeed(i,e.options.speedValues,s);T("".concat(e.name,"-speed-runtime")).innerHTML=l+"0",T("".concat(e.name,"-speed-cursor")).style.top=o+"px",e.clip.executionSpeed=l},t=function t(o){var s;e.elements.listenerHelper.style.pointerEvents="none",o.preventDefault(),C("mouseup",t,!1),C("touchend",t,!1),C("mousemove",n,!1),C("touchmove",n,!1),T("".concat(e.name,"-speed-runtime")).innerHTML="Speed",s=1==e.clip.speed?"Normal":e.clip.speed,e.elements.speedCurrent.innerHTML=s},o=function(o){e.elements.listenerHelper.style.pointerEvents="auto",o.preventDefault(),n(o),S("mouseup",t,!1),S("touchend",t,!1),S("mousemove",n,!1),S("touchmove",n,!1)};e.elements.speedBarHelper.addEventListener("mousedown",o,!1),e.elements.speedBarHelper.addEventListener("touchstart",o,{passive:!1},!1)}(this),function(e){e.elements.loopButton.onclick=e.activateLoop=function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.settings.loopActivated=!e.settings.loopActivated,e.elements.loopButton.classList.toggle("svg-selected"),e.elements.loopBarStart.classList.toggle("m-fadeOut"),e.elements.loopBarEnd.classList.toggle("m-fadeOut"),e.elements.loopBarStart.classList.toggle("m-fadeIn"),e.elements.loopBarStart.classList.toggle("".concat(e.name,"-hide")),e.elements.loopBarEnd.classList.toggle("m-fadeIn"),e.elements.loopBarEnd.classList.toggle("".concat(e.name,"-hide")),z("".concat(e.name,"-loop-time")).classList.toggle("m-fadeOut"),z("".concat(e.name,"-loop-time")).classList.toggle("m-fadeIn"),z("".concat(e.name,"-loop-time")).classList.toggle("".concat(e.name,"-hide")),e.elements.loopEndTime.innerHTML=e.settings.loopEndMillisecond,e.elements.loopStartTime.innerHTML=e.settings.loopStartMillisecond,e.settings.needsUpdate=!0,e.settings.loopActivated||(e.elements.loopBar.style.left="0%",e.elements.loopBar.style.width="100%",e.settings.loopStartMillisecond=0,e.settings.loopEndMillisecond=e.clip.duration,e.settings.loopLastPositionXPxls=0,e.settings.loopLastPositionXPercentage=0,n&&(e.elements.runningBar.style.width=e.clip.runTimeInfo.currentMillisecond/e.clip.duration*100+"%"))}}(this),function(e){P("".concat(e.name,"-controls")).onmouseover=function(){e.settings.loopActivated&&(e.elements.loopBarStart.classList.remove("m-fadeOut"),e.elements.loopBarEnd.classList.remove("m-fadeOut"),e.elements.loopBarStart.classList.add("m-fadeIn"),e.elements.loopBarEnd.classList.add("m-fadeIn"))},P("".concat(e.name,"-controls")).onmouseout=function(n){var t=n.toElement||n.relatedTarget||n.target;V(this,t)||t===this||e.settings.loopActivated&&(e.elements.loopBarStart.classList.add("m-fadeOut"),e.elements.loopBarEnd.classList.add("m-fadeOut"),e.elements.loopBarStart.classList.remove("m-fadeIn"),e.elements.loopBarEnd.classList.remove("m-fadeIn"))};var n=!1;P("".concat(e.name,"-controls")).ontouchstart=function(t){var o=t.toElement||t.relatedTarget||t.target;V(e.elements.statusButton,o)||o===e.elements.statusButton||V(e.elements.settingsButton,o)||o===e.elements.settingsButton||V(e.elements.fullScreenButton,o)||o===e.elements.fullScreenButton||V(e.elements.loopButton,o)||o===e.elements.loopButton||V(e.elements.totalBar,o)||o===e.elements.totalBar||(e.elements.volumeControl.className="".concat(e.name,"-volume-width-transition"),e.elements.volumeBar.className="".concat(e.name,"-volume-width-transition"),e.elements.volumeBarHelper.className="".concat(e.name,"-volume-width-transition"),e.elements.timeDisplay.className="".concat(e.name,"-time-width-transition"),e.elements.volumeCursor.className="".concat(e.name,"-volume-cursor-transition"),n=!0)},window.addEventListener("touchstart",(function(t){var o=t.toElement||t.relatedTarget||t.target;V(P("".concat(e.name,"-controls")),o)||o===P("".concat(e.name,"-controls"))||n&&(e.elements.volumeControl.className="",e.elements.volumeBar.className="",e.elements.volumeBarHelper.className="",e.elements.timeDisplay.className="",e.elements.volumeCursor.className="")}))}(this),function(e){e.elements.fullScreenButton.addEventListener("click",(function(){var n=e.clip.props.host.className.includes("full-screen");e.clip.props.host!==e.options.host&&!n&&e.clip.props.host.appendChild(e.elements.mcPlayer),e.clip.props.host!==e.options.host&&n&&e.options.host.appendChild(e.elements.mcPlayer),n?e.exitFullscreen():e.launchIntoFullscreen(e.clip.props.host)}))}(this),function(e){e.elements.donkeyclipButton.addEventListener("click",(function(){var n=H(),t=window.open("https://donkeyclip.com?u=".concat(n)),o=e.clip.exportDefinition(),s=e.clipClass;window.addEventListener("message",(function(e){e.data===n&&t.postMessage(JSON.stringify({definition:o,clipClass:s,u:n}),"*")}),!1)}))}(this),function(e){if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var n=function(){e.options.preview&&(D("".concat(e.name,"-hover-display")).classList.toggle("m-fadeOut"),D("".concat(e.name,"-hover-display")).classList.toggle("m-fadeIn"),e.elements.loopBar.onmousemove=o)},t=function t(){e.options.preview&&(n(),e.elements.loopBar.onmouseover=e.elements.loopBar.onmouseout=n,e.elements.loopBar.onmousemove=o,I("mouseup",t,!1),I("touchend",t,!1),I("mousemove",o,!1),I("touchmove",o,!1))};e.elements.loopBar.onmouseover=e.elements.loopBar.onmouseout=n,e.elements.loopBar.onmousedown=function(){e.options.preview&&(e.elements.loopBar.onmouseover=e.elements.loopBar.onmouseout=null,e.elements.loopBar.onmousemove=null,N("mouseup",t,!1),N("touchend",t,!1),N("mousemove",o,!1),N("touchmove",o,!1))},e.elements.loopBar.onmouseup=function(){e.options.preview&&(I("mouseup",t,!1),I("touchend",t,!1),I("mousemove",o,!1),I("touchmove",o,!1),e.elements.loopBar.onmouseover=e.elements.loopBar.onmouseout=n,e.elements.loopBar.onmousemove=o)};var o=function(n){var t=n.clientX,o=e.elements.loopBar.getBoundingClientRect();if(t-o.left+e.settings.loopLastPositionXPxls>e.settings.loopLastPositionXPxls+e.elements.loopBar.offsetWidth&&!e.settings.resizeLoop)D("".concat(e.name,"-hover-millisecond")).innerHTML=e.settings.loopEndMillisecond;else if(t-o.left<0&&!e.settings.resizeLoop)D("".concat(e.name,"-hover-millisecond")).innerHTML=e.settings.loopStartMillisecond;else{var s=t-o.left+e.settings.loopLastPositionXPxls;s<0&&(s=0);var i=D("".concat(e.name,"-hover-display")).offsetWidth*e.previewScale,l=i/2,a=D("".concat(e.name,"-hover-display")).offsetWidth/2,r=s-a;s-l<0?r=0-(i+l):s+l>e.elements.totalBar.offsetWidth&&(r=e.elements.totalBar.offsetWidth-a-l);var c=Math.round(s/e.elements.totalBar.offsetWidth*e.clip.duration);if(e.options.preview){var p=c/e.clip.duration;e.previewClip.onProgress(p,c)}D("".concat(e.name,"-hover-millisecond")).innerHTML=c,D("".concat(e.name,"-hover-display")).style.left=r+"px"}}}}(this),function(e){document.addEventListener("fullscreenchange",(function(){e.elements.mcPlayer.classList.toggle("full-screen"),e.clip.props.host.classList.toggle("full-screen"),e.options.preview&&e.setPreviewDimentions()})),document.addEventListener("webkitfullscreenchange",(function(){e.elements.mcPlayer.classList.toggle("full-screen"),e.clip.props.host.classList.toggle("full-screen"),e.options.preview&&e.setPreviewDimentions()})),document.addEventListener("mozfullscreenchange",(function(){e.elements.mcPlayer.classList.toggle("full-screen"),e.clip.props.host.classList.toggle("full-screen"),e.options.preview&&e.setPreviewDimentions()})),document.addEventListener("MSFullscreenChange",(function(){e.elements.mcPlayer.classList.toggle("full-screen"),e.clip.props.host.classList.toggle("full-screen"),e.options.preview&&e.setPreviewDimentions()})),W("body")[0].addEventListener("click",(function(n){if(n.target.className==="".concat(e.name,"-speed-value")){var t=n.target.dataset.speedValue-0;e.clip.executionSpeed=n.target.dataset.speedValue,t=1==e.clip.speed?"Normal":e.clip.speed,e.elements.speedCurrent.innerHTML=t;var o=1/(e.options.speedValues.length-1),s=-1*(n.target.dataset.zone*o-1)*(16*(e.options.speedValues.length-1));F("".concat(e.name,"-speed-cursor")).style.top=s+"px"}}))}(this)}},{key:"launchIntoFullscreen",value:function(e){this.options.preview&&this.setPreviewDimentions(),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},{key:"exitFullscreen",value:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}},{key:"setTheme",value:function(){this.options.theme.replace(/\s\s+/g," "),this.options.theme.trim(),this.options.theme.includes("on-top")||this.options.theme.includes("position-bottom")||(this.options.theme+=" on-top");var e={};for(var n in this.options.theme.split(" ")){var t=u(this.options.theme.split(" ")[n],this.name);for(var o in t||{})e[o]=t[o]}var s=function(e,n,t){return"\n.background {\n  background-color: black;\n  width:100%;\n  height:".concat(e["background-height"],";;\n  position:absolute;\n  top:0px;\n  left:0px;\n  z-index:-2000;\n}\n\n.full-screen #").concat(n,"-controls {\n  position:fixed;\n  left:0px;\n  bottom:0px;\n}\n\n.full-screen #").concat(n,"-settings-panel {\n  position:fixed;\n  bottom: 45px;\n}\n\n.svg, .svg path {\n  fill: ").concat(e["svg-color"],";\n}\n\n.svg.arrow {\n  stroke: ").concat(e["svg-color"],";\n}\n\n.pointer-event-panel {\n  height: ").concat(e["pointer-event-panel-height"],";\n  display:flex;\n  align-items:center;\n  justify-content:center;\n}\n#").concat(n,"-pointer-event-panel{\n  width:100%;\n  position:absolute;\n  z-index:100;\n}\n#").concat(n,"-listener-helper{\n  width:100%;\n  height:calc( 100% - 45px );\n  position:absolute;\n  z-index:110;\n}\n.svg-selected svg{\n  fill: ").concat(e["svg-selected-color"],";\n  stroke: ").concat(e["svg-selected-color"],";\n}\n#").concat(n,"-hover-display{\n    border: ").concat(e["preview-border"],";\n    display: flex;\n    overflow:hidden;\n    background-color: black;\n    position: absolute;\n    bottom: 14px;\n    left: 0px;\n    align-items: flex-end;\n    justify-content: center;\n}\n\n#").concat(n,"-hover-millisecond {\n  background-color: ").concat(e["hms-background-color"],";\n  padding:3px;\n  height:18px;\n  margin:0px;\n  line-height:12px;\n  font-size:10px;\n  text-align: center;\n  min-width:20px;\n  max-width:100px;\n  z-index:2;\n}\n#").concat(n,",\n#").concat(n," ::before,\n#").concat(n," :::after,\n#").concat(n," div,\n#").concat(n," p,\n#").concat(n," span,\n#").concat(n," ul,\n#").concat(n," li {\n  font-weight: 400;\n  line-height: 1.9 !important;\n  color: ").concat(e.color,';\n  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;\n  box-sizing:border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n#').concat(n," {\n  line-height: 1.9;\n  font-size: 12px;\n  overflow:hidden;\n  height: calc(100% + ").concat(e["controls-position"],");\n  width:100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  color: ").concat(e.color,";\n  pointer-events:auto !important;\n}\n\n.force-show-controls {\n  height: 44px !important;\n  overflow:unset !important;\n}\n\n").concat(t.theme.includes("position-bottom")?"\n    #".concat(n,"-controls {\n      height: 44px !important;\n      overflow:unset !important;\n    }\n    "):"#".concat(n,":hover #").concat(n,"-controls {\n  height: 44px;\n  overflow:unset;\n}\n"),"\n\n#").concat(n,":hover {\n  pointer-events:none;\n}\n\n#").concat(n,"-settings-speed-hide {\n  text-align:right;\n}\n\n.grad {\n  background-image: linear-gradient(\n    rgba(100,100,100,00.01),\n    rgba(100,100,100,00.02),\n    rgba(100,100,100,00.03),\n    rgba(100,100,100,0.04),\n    rgba(100,100,100,0.05),\n    rgba(0,0,0,0.06),\n    rgba(0,0,0,0.07),\n    rgba(0,0,0,0.08),\n    rgba(0,0,0,0.09),\n    rgba(0,0,0,0.1),\n    rgba(0,0,0,0.2),\n    rgba(0,0,0,0.3),\n    rgba(0,0,0,0.4),\n    rgba(0,0,0,0.4),\n    rgba(0,0,0,0.5),\n    rgba(0,0,0,0.6),\n    rgba(0,0,0,0.7),\n    rgba(0,0,0,0.8),\n    rgba(0,0,0,0.9),\n    rgba(0,0,0,1)\n  );\n  position:absolute;\n  width:100%;\n  height:").concat(e["grad-height"],";\n  left:0px;\n  bottom:0px;\n  z-index:100;\n}\n\n#").concat(n,"-controls {\n  touch-action: none;\n  background-color: ").concat(e["background-color"],";\n  border: ").concat(e["controls-border"],";\n  position: absolute;\n  bottom: ").concat(e["controls-bottom"],";\n  left: 0px;\n  width: 100%;\n  z-index:100;\n  height: 0px;\n  overflow:hidden;\n  display:flex;\n  border-radius: 6px;\n  align-items:center;\n  -webkit-transition: height 0.2s ease;\n  -moz-transition: height 0.2s ease;\n  transition: height 0.2s ease;\n}\n\n#").concat(n,"-totalbar {\n  width: calc(100% - 20px);\n  height: 5px;\n  margin: 0px 10px 0px 10px;\n  background-color: ").concat(e["totalbar-color"],";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n\n#").concat(n,"-loopbar {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  background-color: ").concat(e["loopbar-color"],";\n}\n\n.").concat(n,"-loop-boundaries::before {\n  ").concat(e["loopbar-boundaries-style::before"],"\n\n}\n.").concat(n,"-loop-boundaries {\n  transform:translate(-50%,-37%);\n  position:absolute;\n  width:18px;\n  background-color:").concat(e["loopbar-boundaries-color"],";\n  height:18px;\n  border-radius:10px;\n  z-index:40;\n  ").concat(e["loopbar-boundaries-style"],"\n}\n\n.").concat(n,"-loop-boundaries::after {\n  ").concat(e["loopbar-boundaries-style::after"],"\n\n}\n\n#").concat(n,"-helperbar {\n  position: absolute;\n  height: 20px;\n  top: -10px;\n  left: 0px;\n  right: 0px;\n  z-index:2;\n}\n\n#").concat(n,"-runningbar {\n  position: relative;\n  width: 0px;\n  max-width:100%;\n  height: 100%;\n  background-color: ").concat(e["runningbar-color"],";\n}\n\n#").concat(n,"-cursor {\n  transform:translate(50%,-36%);\n  right: 0px;\n  overflow:hidden;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  background-color: ").concat(e["cursor-color"],";\n  border-radius: 10px;\n  z-index: 5;\n}\n\n#").concat(n,"-cursor::before {\n  ").concat(e["cursor-style::before"],"\n}\n\n#").concat(n,"-cursor::after {\n  ").concat(e["cursor-style::after"],"\n}\n\n#").concat(n,"-left-controls,#").concat(n,"-right-controls {\n    display: flex;\n    align-items:center;\n    height: 100%;\n    padding: 5px 5px 0px;\n}\n#").concat(n,"-right-controls {\n  position:absolute;\n  right:0px;\n}\n\n\n#").concat(n,"-left-controls > div,#").concat(n,"-right-controls > div {\n    display: inline-flex;\n    align-items:center;\n   margin:0 10px 0 10px;\n}\n\n\n\n/*#").concat(n,"-time-display {\n  display: table;\n  text-align: center;\n  width: auto;\n  height: 34px;\n  position: absolute;\n  left: 90px;\n  -webkit-transition: left 0.1s ease;\n  -moz-transition: left 0.1s ease;\n  transition: left 0.1s ease;\n}\n*/\n#").concat(n,"-time-display span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n#").concat(n,"-status-btn {\n  opacity: ").concat(e["button-opacity"],";\n}\n#").concat(n,"-status-btn svg{\n  width:20px;\n  height:18px;\n}\n#").concat(n,"-volume {\n  opacity: ").concat(e["button-opacity"],";\n  position: relative;\n}\n#").concat(n,"-volume-btn {\n  width: 20px;\n  height: 15px;\n}\n\n#").concat(n,"-volumebar {\n  width: 0px;\n  height: 3px;\n  background-color: ").concat(e["loopbar-color"],";\n  -webkit-transition: left 0.1s ease;\n  -moz-transition: left 0.1s ease;\n  transition: left 0.1s ease;\n  position:relative;\n  left:5px;\n}\n\n#").concat(n,"-volumebar-helper {\n  position: absolute;\n    width: 0px;\n    height: 15px;\n    bottom: 0px;\n    z-index: 10;\n    left: 25px;\n}\n\n#").concat(n,"-volumebar-active {\n  position: relative;\n  width: 0%;\n  height: 100%;\n  background-color: ").concat(e.color,";\n  position:relative;\n  bottom:0px;\n}\n\n#").concat(n,"-volume-cursor {\n  transform:translate(50%,-36%);\n  right: 0px;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  background-color: ").concat(e.color,";\n  border-radius: 10px;\n  z-index: 5;\n}\n\n.").concat(n,"-loopbar-time {\n  width:auto;\n  height:12px;\n  background-color:").concat(e["background-color"],";\n  line-height:10px;\n  font-size:10px;\n}\n\n#").concat(n,"-loop-time {\n  margin: 7px;\n}\n\n#").concat(n,"-dc-btn {\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    width: 20px;\n    height: 15px;\n    margin: 7px 10px 5px 0px;\n    transform: scale(1.5,1.5);\n}\n\n#").concat(n,"-loop-btn {\n  opacity: ").concat(e["button-opacity"],";\n  display:flex;\n  align-items:center;\n}\n\n\n#").concat(n,"-settings-btn {\n  opacity: ").concat(e["button-opacity"],";\n}\n\n#").concat(n,"-full-screen-btn {\n  opacity: ").concat(e["button-opacity"],";\n}\n\n.").concat(n,"-speed-btn {\n  opacity: ").concat(e["button-opacity"],";\n  height: 14px;\n}\n\n#").concat(n,"-settings-panel {\n  touch-action: none;\n  box-sizing: border-box;\n  position: absolute;\n  z-index:101;\n  background-color: ").concat(e["settings-background-color"],";\n  bottom: ").concat(e["settings-panel-bottom"],";\n  border: ").concat(e.border,";\n  right: 8px;\n  width: 167px;\n  padding: 5px;\n  margin: 0px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n.").concat(n,"-hide {\n  display:none !important;\n}\n\n#").concat(n,"-speed-value-bar {\n  position: relative;\n  width: 5px;\n  background-color: ").concat(e["speedbar-color"],";\n  display: inline-block;\n  box-sizing: border-box;\n  height: ").concat(16*t.speedValues.length,"px;\n  float: left;\n  margin-right:15px;\n}\n\n#").concat(n,"-speed-value-helperbar {\n  position: absolute;\n  width: 25px;\n  height: ").concat(16*t.speedValues.length,"px;\n  float: left;\n  left: 18px;\n  z-index:10;\n}\n\n\n#").concat(n,"-speed-value-bar:hover,\n#").concat(n,"-speed-value-helperbar {\n  cursor: pointer;\n}\n\n#").concat(n,"-volumebar:hover,\n#").concat(n,"-volumebar-helper:hover,\n#").concat(n,"-volume-btn:hover,\n#").concat(n,"-volumebar:active,\n#").concat(n,"-volumebar-helper:active,\n#").concat(n,"-volume-btn:active {\n  cursor:pointer;\n}\n\n#").concat(n,"-speed-cursor {\n  position: absolute;\n  background-color: ").concat(e["speedbar-cursor-color"],";\n  top: 0px;\n  left: 0px;\n}\n\n#").concat(n,"-speed-cursor div {\n  position: absolute;\n  background-color: ").concat(e["speedbar-cursor-color"],";\n  left: -2.5px;\n  top: -4px;\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n}\n\n#").concat(n,"-time-separator{\n  margin:0 3px;\n}\n#").concat(n,"-speed-cursor:hover {\n  cursor: pointer;\n}\n\n.").concat(n,"-speed-value-step {\n  width: 16px;\n  background-color: ").concat(e["speedbar-color"],";\n  display: inline-block;\n  box-sizing: border-box;\n  height: 2px;\n  margin-top: 7px;\n  margin-bottom: 7px;\n  float: left;\n}\n\n#").concat(n,"-speed-value {\n  display: inline-block;\n  box-sizing: border-box;\n  height: ").concat(16*t.speedValues.length,"px;\n  text-align: left;\n}\n\n.").concat(n,"-speed-value {\n  box-sizing: border-box;\n  height: 16px;\n  font-size: 12px;\n}\n\n#").concat(n,"-indicator {\n  font-size: 8px !important;\n  position: absolute;\n  bottom: -3px;\n  color: ").concat(e.color,";\n}\n\n/*#").concat(n,"-speed-settings {\n  height: ").concat(16*t.speedValues.length+32+10-2,"px;\n}*/\n\n#").concat(n,"-speed-settings li.no-hover { \n  height: ").concat(16*t.speedValues.length+10-2,"px !important; \n}\n#").concat(n,"-settings-panel.").concat(n,"-settings-speed-panel {\n  overflow: hidden;\n  width: 92px;\n  position:absolute;\n  z-index:120;\n  /*height: ").concat(16*t.speedValues.length+32+20,"px;*/\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(n,"-settings-panel.").concat(n,"-settings-speed-panel .").concat(n,"-speed-btn {\n  float: left;\n}\n\n.").concat(n,"-settings-speed-panel ul:first-child {\n  text-align: right;\n}\n\n#").concat(n,"-speed-current {\n  float: right;\n  padding-right: 10px\n}\n\n#").concat(n,"-settings-panel .").concat(n,"-speed-btn {\n  float: right;\n}\n\n#").concat(n,"-settings-panel ul {\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow: hidden;\n}\n\n#").concat(n,"-settings-panel.").concat(n,"-settings-speed-panel ul li {\n  min-width: 70px;\n  display: flex;\n  height: 32px;\n  align-items: center;\n  justify-content:center;\n}\n\n#").concat(n,"-settings-panel ul li.no-hover:hover {\n  background-color: transparent;\n  cursor: default;\n}\n\ndiv.").concat(n,"-speed-value:hover {\n  background-color: ").concat(e["hover-color"],";\n  cursor: pointer;\n}\n\n#").concat(n,"-settings-panel ul li {\n  /*position: relative;\n  width: 100%;\n  min-width: 154px;*/\n  list-style-type: none;\n  margin: 0px;\n  padding: 5px;\n  display: flex;\n  height:32px;\n  align-items:center;\n}\n\n#").concat(n,"-settings-panel ul li label {\n  margin: 0px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 32px;\n  height: 18px;\n}\n\n.switch input {\n  display: none;\n}\n\n.settings-switch {\n  position: absolute;\n  right: 24px;\n}\n\n.settings-switch::after {\n  clear: both;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ").concat(e["slider-off-color"],';\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 1px;\n  bottom: 1px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked+.slider {\n  background-color: ').concat(e["slider-on-color"],";\n}\n\ninput:focus+.slider {\n  box-shadow: 0 0 1px ").concat(e["slider-on-color"],";\n}\n\ninput:checked+.slider:before {\n  -webkit-transform: translateX(16px);\n  -ms-transform: translateX(16px);\n  transform: translateX(16px);\n}\n\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n\n.m-fadeOut {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s linear 300ms, opacity 300ms;\n}\n\n.m-fadeIn {\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0s linear 0s, opacity 300ms;\n}\n\n#").concat(n,"-settings-panel ul li:hover {\n  background-color: ").concat(e["hover-color"],";\n  cursor: pointer;\n}\n\n#").concat(n,"-settings-panel ul li label:hover {\n  cursor: pointer;\n}\n\n#").concat(n,"-loopbar:hover {\n  cursor: pointer;\n}\n\n#").concat(n,"-status-btn:hover {\n  cursor: pointer;\n}\n\n#").concat(n,"-controls:active #").concat(n,"-cursor,\n#").concat(n,"-controls:hover #").concat(n,"-cursor  {\n  width: 16px;\n  height: 16px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(n,"-volume .").concat(n,"-volume-cursor-transition {\n  width: 12px;\n  height: 12px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(n,"-volume .").concat(n,"-volume-width-transition\n {\n  width: 50px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(n,"-time-display.").concat(n,"-time-width-transition {\n  position:relative;\n  left: 10px;\n  -webkit-transition: left 0.3s ease;\n  -moz-transition: left 0.3s ease;\n  transition: left 0.3s ease;\n}\n\n#").concat(n,"-settings-speed:hover .").concat(n,"-speed-btn {\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(n,"-status-btn:hover {\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(n,"-loop-btn:hover,\n#").concat(n,"-dc-btn:hover\n {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n#").concat(n,"-settings-btn:hover {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(n,"-full-screen-btn:hover {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n").concat(e["theme-style"],"\n")}(e,this.name,this.options),i=G("style");i.styleSheet?i.styleSheet.cssText=s:i.appendChild(document.createTextNode(s)),R("head")[0].appendChild(i)}},{key:"setSpeed",value:function(){var e,n=this;e=1==this.clip.speed?"Normal":this.clip.speed,this.elements.speedCurrent.innerHTML=e;var t=-1*(function(){for(var e=0;e<n.options.speedValues.length-1;e++)if(n.options.speedValues[e]<=n.clip.speed&&n.options.speedValues[e+1]>n.clip.speed)return e+Math.abs((n.clip.speed-n.options.speedValues[e])/(n.options.speedValues[e]-n.options.speedValues[e+1]))}()*(1/(this.options.speedValues.length-1))-1)*(this.options.speedValues.length-1)*16;U("".concat(this.name,"-speed-cursor")).style.top=t+"px"}},{key:"calculateSpeed",value:function(e,n,t){var o=Math.floor(t/e);if(o===n.length-1)return n[o].toFixed(1);var s=(t/e%1*Math.abs(n[o]-n[o+1])+n[o]).toFixed(1);return 0==s?"0.0":s}},{key:"createPreviewDisplay",value:function(){this.previewClip=this.clip.paste(U("".concat(this.name,"-hover-display")));var e=U("".concat(this.name,"-hover-display"));window.previewClip=this.previewClip,e.style.position="absolute",e.style.zIndex=1,this.setPreviewDimentions()}},{key:"setPreviewDimentions",value:function(){var e=this.clip.props.host,n=this.previewClip.ownClip.props.host,t=e.offsetWidth,o=e.offsetHeight,s=t*this.previewScale;s>300&&(s=300,this.previewScale=s/t),U("".concat(this.name,"-hover-display")).style.width=t+"px",U("".concat(this.name,"-hover-display")).style.height=o+"px",n.style.transform="scale(".concat(this.previewScale,")"),n.style.transformOrigin="center bottom",n.style.boxSizing="border-box"}}])&&n(t.prototype,o),s&&n(t,s),e}()}));


/***/ }),

/***/ "./node_modules/@kissmybutton/motorcortex/dist/motorcortex.umd.js":
/*!************************************************************************!*\
  !*** ./node_modules/@kissmybutton/motorcortex/dist/motorcortex.umd.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(t,e){ true?e(exports):undefined}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?h(t):e}function f(t){return function(){var e,n=l(t);if(d()){var i=l(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return p(this,e)}}function v(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}function y(t,e,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=v(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function m(t,e,n,i){return(m="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,n,i){var r,a=v(t,e);if(a){if((r=Object.getOwnPropertyDescriptor(a,e)).set)return r.set.call(i,n),!0;if(!r.writable)return!1}if(r=Object.getOwnPropertyDescriptor(i,e)){if(!r.writable)return!1;r.value=n,Object.defineProperty(i,e,r)}else o(i,e,n);return!0})(t,e,n,i)}function g(t){return function(t){if(Array.isArray(t))return t}(t)||k(t)||_(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t){return function(t){if(Array.isArray(t))return x(t)}(t)||k(t)||_(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function w(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function I(t,e,n,i){var r=function(){(function(){return t});var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(n){e.forEach((function(e){e.kind===n&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var n=t.prototype;["method","field"].forEach((function(i){e.forEach((function(e){var r=e.placement;if(e.kind===i&&("static"===r||"prototype"===r)){var o="static"===r?t:n;this.defineClassElement(o,e)}}),this)}),this)},defineClassElement:function(t,e){var n=e.descriptor;if("field"===e.kind){var i=e.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(t)}}Object.defineProperty(t,e.key,n)},decorateClass:function(t,e){var n=[],i=[],r={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,r)}),this),t.forEach((function(t){if(!j(t))return n.push(t);var e=this.decorateElement(t,r);n.push(e.element),n.push.apply(n,e.extras),i.push.apply(i,e.finishers)}),this),!e)return{elements:n,finishers:i};var o=this.decorateConstructor(n,e);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(t,e,n){var i=e[t.placement];if(!n&&-1!==i.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");i.push(t.key)},decorateElement:function(t,e){for(var n=[],i=[],r=t.decorators,o=r.length-1;o>=0;o--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var s=this.fromElementDescriptor(t),u=this.toElementFinisherExtras((0,r[o])(s)||s);t=u.element,this.addElementPlacement(t,e),u.finisher&&i.push(u.finisher);var l=u.extras;if(l){for(var c=0;c<l.length;c++)this.addElementPlacement(l[c],e);n.push.apply(n,l)}}return{element:t,finishers:i,extras:n}},decorateConstructor:function(t,e){for(var n=[],i=e.length-1;i>=0;i--){var r=this.fromClassDescriptor(t),o=this.toClassDescriptor((0,e[i])(r)||r);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){t=o.elements;for(var a=0;a<t.length-1;a++)for(var s=a+1;s<t.length;s++)if(t[a].key===t[s].key&&t[a].placement===t[s].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:n}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){if(void 0!==t)return g(t).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var n=w(t.key),i=String(t.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:E(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var n=E(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:n}},runClassFinishers:function(t,e){for(var n=0;n<e.length;n++){var i=(0,e[n])(t);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");t=i}}return t},disallowProperty:function(t,e,n){if(void 0!==t[e])throw new TypeError(n+" can't have a ."+e+" property.")}};return t}();if(i)for(var o=0;o<i.length;o++)r=i[o](r);var a=e((function(t){r.initializeInstanceElements(t,s.elements)}),n),s=r.decorateClass(function(t){for(var e=[],n=function(t){return"method"===t.kind&&t.key===o.key&&t.placement===o.placement},i=0;i<t.length;i++){var r,o=t[i];if("method"===o.kind&&(r=e.find(n)))if(P(o.descriptor)||P(r.descriptor)){if(j(o)||j(r))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");r.descriptor=o.descriptor}else{if(j(o)){if(j(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");r.decorators=o.decorators}O(o,r)}else e.push(o)}return e}(a.d.map(C)),t);return r.initializeClassElements(a.F,s.elements),r.runClassFinishers(a.F,s.finishers)}function C(t){var e,n=w(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===t.kind?"field":"method",key:n,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(i.decorators=t.decorators),"field"===t.kind&&(i.initializer=t.value),i}function O(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function j(t){return t.decorators&&t.decorators.length}function P(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function E(t,e){var n=t[e];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+e+"' to be a function");return n}var A=function t(e,n){for(let i in n)"object"==typeof n[i]&&null!==n[i]?(e[i]=e[i]||{},t(e[i],n[i])):e[i]=n[i];return e},D={required:"The '{field}' field is required.",string:"The '{field}' field must be a string.",stringEmpty:"The '{field}' field must not be empty.",stringMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",stringMax:"The '{field}' field length must be less than or equal to {expected} characters long.",stringLength:"The '{field}' field length must be {expected} characters long.",stringPattern:"The '{field}' field fails to match the required pattern.",stringContains:"The '{field}' field must contain the '{expected}' text.",stringEnum:"The '{field}' field does not match any of the allowed values.",stringNumeric:"The '{field}' field must be a numeric string.",stringAlpha:"The '{field}' field must be an alphabetic string.",stringAlphanum:"The '{field}' field must be an alphanumeric string.",stringAlphadash:"The '{field}' field must be an alphadash string.",number:"The '{field}' field must be a number.",numberMin:"The '{field}' field must be greater than or equal to {expected}.",numberMax:"The '{field}' field must be less than or equal to {expected}.",numberEqual:"The '{field}' field must be equal to {expected}.",numberNotEqual:"The '{field}' field can't be equal to {expected}.",numberInteger:"The '{field}' field must be an integer.",numberPositive:"The '{field}' field must be a positive number.",numberNegative:"The '{field}' field must be a negative number.",array:"The '{field}' field must be an array.",arrayEmpty:"The '{field}' field must not be an empty array.",arrayMin:"The '{field}' field must contain at least {expected} items.",arrayMax:"The '{field}' field must contain less than or equal to {expected} items.",arrayLength:"The '{field}' field must contain {expected} items.",arrayContains:"The '{field}' field must contain the '{expected}' item.",arrayUnique:"The '{actual}' value in '{field}' field does not unique the '{expected}' values.",arrayEnum:"The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",boolean:"The '{field}' field must be a boolean.",date:"The '{field}' field must be a Date.",dateMin:"The '{field}' field must be greater than or equal to {expected}.",dateMax:"The '{field}' field must be less than or equal to {expected}.",enumValue:"The '{field}' field value '{expected}' does not match any of the allowed values.",equalValue:"The '{field}' field value must be equal to '{expected}'.",equalField:"The '{field}' field value must be equal to '{expected}' field value.",forbidden:"The '{field}' field is forbidden.",function:"The '{field}' field must be a function.",email:"The '{field}' field must be a valid e-mail.",luhn:"The '{field}' field must be a valid checksum luhn.",mac:"The '{field}' field must be a valid MAC address.",object:"The '{field}' must be an Object.",objectStrict:"The object '{field}' contains forbidden keys: '{actual}'.",url:"The '{field}' field must be a valid URL.",uuid:"The '{field}' field must be a valid UUID.",uuidVersion:"The '{field}' field must be a valid UUID version provided."},S=function(){return{}},M=function({schema:t,messages:e,customValidation:n},i,r){const o=[];if(o.push(`\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({type:"array",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`),!1===t.empty&&o.push(`\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({type:"arrayEmpty",actual:"value",messages:e})}\n\t\t\t}\n\t\t`),null!=t.min&&o.push(`\n\t\t\tif (len < ${t.min}) {\n\t\t\t\t${this.makeError({type:"arrayMin",expected:t.min,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&o.push(`\n\t\t\tif (len > ${t.max}) {\n\t\t\t\t${this.makeError({type:"arrayMax",expected:t.max,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.length&&o.push(`\n\t\t\tif (len !== ${t.length}) {\n\t\t\t\t${this.makeError({type:"arrayLength",expected:t.length,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.contains&&o.push(`\n\t\t\tif (value.indexOf(${JSON.stringify(t.contains)}) === -1) {\n\t\t\t\t${this.makeError({type:"arrayContains",expected:JSON.stringify(t.contains),actual:"value",messages:e})}\n\t\t\t}\n\t\t`),!0===t.unique&&o.push(`\n\t\t\tif(len > (new Set(value)).size) {\n\t\t\t\t${this.makeError({type:"arrayUnique",expected:"Array.from(new Set(value.filter((item, index) => value.indexOf(item) !== index)))",actual:"value",messages:e})}\n\t\t\t}\n\t\t`),null!=t.enum){const n=JSON.stringify(t.enum);o.push(`\n\t\t\tfor (var i = 0; i < value.length; i++) {\n\t\t\t\tif (${n}.indexOf(value[i]) === -1) {\n\t\t\t\t\t${this.makeError({type:"arrayEnum",expected:'"'+t.enum.join(", ")+'"',actual:"value[i]",messages:e})}\n\t\t\t\t}\n\t\t\t}\n\t\t`)}if(null!=t.items){o.push("\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t\tfor (var i = 0; i < arr.length; i++) {\n\t\t");const e=this.getRuleFromSchema(t.items);o.push(this.compileRule(e,r,i,'arr[i] = context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context);',"arr[i]")),o.push("\n\t\t\t}\n\t\t")}return o.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),{source:o.join("\n")}},T=function({schema:t,messages:e,customValidation:n},i){const r=[];let o=!1;return r.push("\n\t\tvar origValue = value;\n\t"),!0===t.convert&&(o=!0,r.push('\n\t\t\tif (typeof value !== "boolean") {\n\t\t\t\tif (\n\t\t\t\tvalue === 1\n\t\t\t\t|| value === "true"\n\t\t\t\t|| value === "1"\n\t\t\t\t|| value === "on"\n\t\t\t\t) {\n\t\t\t\t\tvalue = true;\n\t\t\t\t} else if (\n\t\t\t\tvalue === 0\n\t\t\t\t|| value === "false"\n\t\t\t\t|| value === "0"\n\t\t\t\t|| value === "off"\n\t\t\t\t) {\n\t\t\t\t\tvalue = false;\n\t\t\t\t}\n\t\t\t}\n\t\t')),r.push(`\n\t\tif (typeof value !== "boolean")\n\t\t\t${this.makeError({type:"boolean",actual:"origValue",messages:e})}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`),{sanitized:o,source:r.join("\n")}},B=function({schema:t,messages:e},n,i){const r=[];return"function"==typeof t.check&&(i.customs[n]={schema:t,messages:e},r.push(`\n\t\t\tconst rule = context.customs["${n}"];\n\t\t\tconst res = rule.schema.check.call(this, value, rule.schema, "${n}", parent, context);\n\t\t\tif (Array.isArray(res)) {\n\t\t\t\tres.forEach(err => errors.push(Object.assign({ message: rule.messages[err.type], field }, err)));\n\t\t\t}\n\n\t\t\treturn value;\n\t\t`)),{source:r.join("\n")}},V=function({schema:t,messages:e,customValidation:n},i){const r=[];let o=!1;return r.push("\n\t\tvar origValue = value;\n\t"),!0===t.convert&&(o=!0,r.push("\n\t\t\tif (!(value instanceof Date)) {\n\t\t\t\tvalue = new Date(value);\n\t\t\t}\n\t\t")),r.push(`\n\t\tif (!(value instanceof Date) || isNaN(value.getTime()))\n\t\t\t${this.makeError({type:"date",actual:"origValue",messages:e})}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`),{sanitized:o,source:r.join("\n")}};const $=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,N=/^\S+@\S+\.\S+$/;var z=function({schema:t,messages:e,customValidation:n},i){const r=[],o="precise"==t.mode?$:N;let a=!1;return r.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`),t.normalize&&(a=!0,r.push("\n\t\t\tvalue = value.trim().toLowerCase();\n\t\t")),r.push(`\n\t\tif (!${o.toString()}.test(value))\n\t\t\t${this.makeError({type:"email",actual:"value",messages:e})}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`),{sanitized:a,source:r.join("\n")}},L=function({schema:t,messages:e,customValidation:n},i){return{source:`\n\t\t\tif (${JSON.stringify(t.values||[])}.indexOf(value) === -1)\n\t\t\t\t${this.makeError({type:"enumValue",expected:'"'+t.values.join(", ")+'"',actual:"value",messages:e})}\n\t\t\t\n\t\t\t${n("value")}\n\n\t\t\treturn value;\n\t\t`}},R=function({schema:t,messages:e,customValidation:n},i){const r=[];return t.field?(t.strict?r.push(`\n\t\t\t\tif (value !== parent["${t.field}"])\n\t\t\t`):r.push(`\n\t\t\t\tif (value != parent["${t.field}"])\n\t\t\t`),r.push(`\n\t\t\t\t${this.makeError({type:"equalField",actual:"value",expected:JSON.stringify(t.field),messages:e})}\n\t\t`)):(t.strict?r.push(`\n\t\t\t\tif (value !== ${JSON.stringify(t.value)})\n\t\t\t`):r.push(`\n\t\t\t\tif (value != ${JSON.stringify(t.value)})\n\t\t\t`),r.push(`\n\t\t\t\t${this.makeError({type:"equalValue",actual:"value",expected:JSON.stringify(t.value),messages:e})}\n\t\t`)),r.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),{source:r.join("\n")}},F=function({schema:t,messages:e,customValidation:n},i){const r=[];return r.push("\n\t\tif (value !== null && value !== undefined) {\n\t"),t.remove?r.push("\n\t\t\treturn undefined;\n\t\t"):r.push(`\n\t\t\t${this.makeError({type:"forbidden",actual:"value",messages:e})}\n\t\t`),r.push(`\n\t\t}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`),{source:r.join("\n")}},G=function({schema:t,messages:e,customValidation:n},i){return{source:`\n\t\t\tif (typeof value !== "function")\n\t\t\t\t${this.makeError({type:"function",actual:"value",messages:e})}\n\n\t\t\t${n("value")}\n\n\t\t\treturn value;\n\t\t`}},q=function({schema:t,messages:e,customValidation:n},i,r){const o=[];o.push("\n\t\tvar prevErrLen = errors.length;\n\t\tvar errBefore;\n\t\tvar hasValid = false;\n\t\tvar newVal = value;\n\t");for(let e=0;e<t.rules.length;e++){o.push("\n\t\t\tif (!hasValid) {\n\t\t\t\terrBefore = errors.length;\n\t\t");const n=this.getRuleFromSchema(t.rules[e]);o.push(this.compileRule(n,r,i,"var tmpVal = context.fn[%%INDEX%%](value, field, parent, errors, context);","tmpVal")),o.push("\n\t\t\t\tif (errors.length == errBefore) {\n\t\t\t\t\thasValid = true;\n\t\t\t\t\tnewVal = tmpVal;\n\t\t\t\t}\n\t\t\t}\n\t\t")}return o.push(`\n\t\tif (hasValid) {\n\t\t\terrors.length = prevErrLen;\n\t\t}\n\t\t${n("newVal")}\n\t\treturn newVal;\n\t`),{source:o.join("\n")}},K=function({schema:t,messages:e,customValidation:n},i){const r=[];r.push("\n\t\tvar origValue = value;\n\t");let o=!1;return!0===t.convert&&(o=!0,r.push('\n\t\t\tif (typeof value !== "number") {\n\t\t\t\tvalue = Number(value);\n\t\t\t}\n\t\t')),r.push(`\n\t\tif (typeof value !== "number" || isNaN(value) || !isFinite(value)) {\n\t\t\t${this.makeError({type:"number",actual:"origValue",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`),null!=t.min&&r.push(`\n\t\t\tif (value < ${t.min}) {\n\t\t\t\t${this.makeError({type:"numberMin",expected:t.min,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&r.push(`\n\t\t\tif (value > ${t.max}) {\n\t\t\t\t${this.makeError({type:"numberMax",expected:t.max,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.equal&&r.push(`\n\t\t\tif (value !== ${t.equal}) {\n\t\t\t\t${this.makeError({type:"numberEqual",expected:t.equal,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.notEqual&&r.push(`\n\t\t\tif (value === ${t.notEqual}) {\n\t\t\t\t${this.makeError({type:"numberNotEqual",expected:t.notEqual,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.integer&&r.push(`\n\t\t\tif (value % 1 !== 0) {\n\t\t\t\t${this.makeError({type:"numberInteger",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.positive&&r.push(`\n\t\t\tif (value <= 0) {\n\t\t\t\t${this.makeError({type:"numberPositive",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.negative&&r.push(`\n\t\t\tif (value >= 0) {\n\t\t\t\t${this.makeError({type:"numberNegative",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),r.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),{sanitized:o,source:r.join("\n")}};const W=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,J=/["'\\\n\r\u2028\u2029]/g;function U(t){return t.replace(J,(function(t){switch(t){case'"':case"'":case"\\":return"\\"+t;case"\n":return"\\n";case"\r":return"\\r";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}}))}var H=function({schema:t,messages:e,customValidation:n},i,r){const o=[];o.push(`\n\t\tif (typeof value !== "object" || value === null || Array.isArray(value)) {\n\t\t\t${this.makeError({type:"object",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`);const a=t.properties||t.props;if(a){o.push("var parentObj = value;"),o.push("var parentField = field;");const n=Object.keys(a);for(let t=0;t<n.length;t++){const e=n[t],s=U(e),u=W.test(s)?`.${s}`:`['${s}']`,l=`parentObj${u}`,c=(i?i+".":"")+e;o.push(`\n// Field: ${U(c)}`),o.push(`field = parentField ? parentField + "${u}" : "${s}";`),o.push(`value = ${l};`);const d=this.getRuleFromSchema(a[e]);o.push(this.compileRule(d,r,c,`${l} = context.fn[%%INDEX%%](value, field, parentObj, errors, context);`,l))}if(t.strict){const n=Object.keys(a);o.push(`\n\t\t\t\tfield = parentField;\n\t\t\t\tvar invalidProps = [];\n\t\t\t\tvar props = Object.keys(parentObj);\n\n\t\t\t\tfor (let i = 0; i < props.length; i++) {\n\t\t\t\t\tif (${JSON.stringify(n)}.indexOf(props[i]) === -1) {\n\t\t\t\t\t\tinvalidProps.push(props[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (invalidProps.length) {\n\t\t\t`),"remove"==t.strict?o.push("\n\t\t\t\t\tinvalidProps.forEach(function(field) {\n\t\t\t\t\t\tdelete parentObj[field];\n\t\t\t\t\t});\n\t\t\t\t"):o.push(`\n\t\t\t\t\t${this.makeError({type:"objectStrict",expected:'"'+n.join(", ")+'"',actual:"invalidProps.join(', ')",messages:e})}\n\t\t\t\t`),o.push("\n\t\t\t\t}\n\t\t\t")}o.push("\n\t\t\treturn parentObj;\n\t\t")}else o.push(`\n\t\t\t${n("value")}\n\t\t\treturn value;\n\t\t`);return{source:o.join("\n")}};const Q=/^-?[0-9]\d*(\.\d+)?$/,X=/^[a-zA-Z]+$/,Z=/^[a-zA-Z0-9]+$/,Y=/^[a-zA-Z0-9_-]+$/;var tt=function({schema:t,messages:e,customValidation:n},i,r){const o=[];let a=!1;if(!0===t.convert&&(a=!0,o.push('\n\t\t\tif (typeof value !== "string") {\n\t\t\t\tvalue = String(value);\n\t\t\t}\n\t\t')),o.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar origValue = value;\n\t`),t.trim&&(a=!0,o.push("\n\t\t\tvalue = value.trim();\n\t\t")),t.trimLeft&&(a=!0,o.push("\n\t\t\tvalue = value.trimLeft();\n\t\t")),t.trimRight&&(a=!0,o.push("\n\t\t\tvalue = value.trimRight();\n\t\t")),t.padStart){a=!0;const e=null!=t.padChar?t.padChar:" ";o.push(`\n\t\t\tvalue = value.padStart(${t.padStart}, ${JSON.stringify(e)});\n\t\t`)}if(t.padEnd){a=!0;const e=null!=t.padChar?t.padChar:" ";o.push(`\n\t\t\tvalue = value.padEnd(${t.padEnd}, ${JSON.stringify(e)});\n\t\t`)}if(t.lowercase&&(a=!0,o.push("\n\t\t\tvalue = value.toLowerCase();\n\t\t")),t.uppercase&&(a=!0,o.push("\n\t\t\tvalue = value.toUpperCase();\n\t\t")),t.localeLowercase&&(a=!0,o.push("\n\t\t\tvalue = value.toLocaleLowerCase();\n\t\t")),t.localeUppercase&&(a=!0,o.push("\n\t\t\tvalue = value.toLocaleUpperCase();\n\t\t")),o.push("\n\t\t\tvar len = value.length;\n\t"),!1===t.empty&&o.push(`\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({type:"stringEmpty",actual:"value",messages:e})}\n\t\t\t}\n\t\t`),null!=t.min&&o.push(`\n\t\t\tif (len < ${t.min}) {\n\t\t\t\t${this.makeError({type:"stringMin",expected:t.min,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&o.push(`\n\t\t\tif (len > ${t.max}) {\n\t\t\t\t${this.makeError({type:"stringMax",expected:t.max,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.length&&o.push(`\n\t\t\tif (len !== ${t.length}) {\n\t\t\t\t${this.makeError({type:"stringLength",expected:t.length,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.pattern){let n=t.pattern;"string"==typeof t.pattern&&(n=new RegExp(t.pattern,t.patternFlags)),o.push(`\n\t\t\tif (!${n.toString()}.test(value))\n\t\t\t\t${this.makeError({type:"stringPattern",expected:'"'+n.toString().replace('"','\\"')+'"',actual:"origValue",messages:e})}\n\t\t`)}if(null!=t.contains&&o.push(`\n\t\t\tif (value.indexOf("${t.contains}") === -1) {\n\t\t\t\t${this.makeError({type:"stringContains",expected:'"'+t.contains+'"',actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.enum){const n=JSON.stringify(t.enum);o.push(`\n\t\t\tif (${n}.indexOf(value) === -1) {\n\t\t\t\t${this.makeError({type:"stringEnum",expected:'"'+t.enum.join(", ")+'"',actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`)}return!0===t.numeric&&o.push(`\n\t\t\tif (!${Q.toString()}.test(value) ) {\n\t\t\t\t${this.makeError({type:"stringNumeric",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.alpha&&o.push(`\n\t\t\tif(!${X.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlpha",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.alphanum&&o.push(`\n\t\t\tif(!${Z.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlphanum",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.alphadash&&o.push(`\n\t\t\tif(!${Y.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlphadash",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),o.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),{sanitized:a,source:o.join("\n")}};const et=/^https?:\/\/\S+/;var nt=function({schema:t,messages:e,customValidation:n},i){const r=[];return r.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tif (!${et.toString()}.test(value)) {\n\t\t\t${this.makeError({type:"url",actual:"value",messages:e})}\n\t\t}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`),{source:r.join("\n")}};const it=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;var rt=function({schema:t,messages:e},n){const i=[];return i.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar val = value.toLowerCase();\n\t\tif (!${it.toString()}.test(val)) {\n\t\t\t${this.makeError({type:"uuid",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tconst version = val.charAt(14) | 0;\n\t`),t.version&&i.push(`\n\t\t\tif (${t.version} !== version) {\n\t\t\t\t${this.makeError({type:"uuidVersion",expected:t.version,actual:"version",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),i.push(`\n\t\tswitch (version) {\n\t\tcase 1:\n\t\tcase 2:\n\t\t\tbreak;\n\t\tcase 3:\n\t\tcase 4:\n\t\tcase 5:\n\t\t\tif (["8", "9", "a", "b"].indexOf(value.charAt(19)) === -1) {\n\t\t\t\t${this.makeError({type:"uuid",actual:"value",messages:e})}\n\t\t\t}\n\t\t}\n\n\t\treturn value;\n\t`),{source:i.join("\n")}};const ot=/^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;var at=function({schema:t,messages:e,customValidation:n},i){return{source:`\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tvar v = value.toLowerCase();\n\t\t\tif (!${ot.toString()}.test(v)) {\n\t\t\t\t${this.makeError({type:"mac",actual:"value",messages:e})}\n\t\t\t}\n\t\t\t${n("value")}\n\t\t\treturn value;\n\t\t`}},st=function({schema:t,messages:e,customValidation:n},i){return{source:`\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (typeof value !== "string")\n\t\t\t\tvalue = String(value);\n\n\t\t\tval = value.replace(/\\D+/g, "");\n\n\t\t\tvar array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];\n\t\t\tvar len = val ? val.length : 0,\n\t\t\t\tbit = 1,\n\t\t\t\tsum = 0;\n\t\t\twhile (len--) {\n\t\t\t\tsum += !(bit ^= 1) ? parseInt(val[len], 10) : array[val[len]];\n\t\t\t}\n\n\t\t\tif (!(sum % 10 === 0 && sum > 0)) {\n\t\t\t\t${this.makeError({type:"luhn",actual:"value",messages:e})}\n\t\t\t}\n\n\t\t\t${n("value")}\n\n\t\t\treturn value;\n\t\t`}},ut="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function lt(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}function ct(t,e){return t(e={exports:{}},e.exports),e.exports}let dt,ht,pt,ft;var vt=function(t){dt||(dt=lt(),ht={parser:"babel",useTabs:!1,printWidth:120,trailingComma:"none",tabWidth:4,singleQuote:!1,semi:!0,bracketSpacing:!0},pt=lt(),ft={language:"js",theme:pt.fromJson({keyword:["white","bold"],built_in:"magenta",literal:"cyan",number:"magenta",regexp:"red",string:["yellow","bold"],symbol:"plain",class:"blue",attr:"plain",function:["white","bold"],title:"plain",params:"green",comment:"grey"})});const e=dt.format(t,ht);return pt.highlight(e,ft)};var yt=class{constructor(t){this.opts={messages:A({},D)},t&&A(this.opts,t),this.messages=this.opts.messages,this.rules={any:S,array:M,boolean:T,custom:B,date:V,email:z,enum:L,equal:R,forbidden:F,function:G,multi:q,number:K,object:H,string:tt,url:nt,uuid:rt,mac:at,luhn:st},this.aliases={},this.cache=new Map}validate(t,e){return this.compile(e)(t)}wrapRequiredCheckSourceCode(t,e,n){const i=[],r=null!=t.schema.default?JSON.stringify(t.schema.default):null;return i.push("\n\t\t\tif (value === undefined || value === null) {\n\t\t"),!0===t.schema.optional||"forbidden"==t.schema.type?null!=r&&n?i.push(`${n} = ${r};`):i.push("// Do nothing, it's an optional field"):null!=r&&n?i.push(`${n} = ${r};`):i.push(this.makeError({type:"required",actual:"value",messages:t.messages})),i.push("} else {"),e&&i.push(e),i.push("\t\t}"),i.join("\n")}compile(t){if(null===t||"object"!=typeof t)throw new Error("Invalid schema.");const e=this,n={index:0,rules:[],fn:[],customs:{}};if(this.cache.clear(),!0!==t.$$root)if(Array.isArray(t)){t=this.getRuleFromSchema(t).schema}else{const e=Object.assign({},t);t={type:"object",strict:e.$$strict,properties:e},delete e.$$strict}const i=["var errors = [];","var field;"],r=this.getRuleFromSchema(t);i.push(this.compileRule(r,n,null,"context.fn[%%INDEX%%](value, field, null, errors, context);","value")),i.push("if (errors.length) {"),i.push('\n\t\t\treturn errors.map(err => {\n\t\t\t\tif (err.message)\n\t\t\t\t\terr.message = err.message\n\t\t\t\t\t\t.replace(/\\{field\\}/g, err.field || "")\n\t\t\t\t\t\t.replace(/\\{expected\\}/g, err.expected != null ? err.expected : "")\n\t\t\t\t\t\t.replace(/\\{actual\\}/g, err.actual != null ? err.actual : "");\n\n\t\t\t\treturn err;\n\t\t\t});\n\t\t'),i.push("}"),i.push("return true;");const o=i.join("\n"),a=new Function("value","context",o);if(this.opts.debug){let t=function(t){return t};"undefined"==typeof window&&(t=vt),n.fn.forEach((e,n)=>console.log(t(`// Context.fn[${n}]\n`+e.toString()))),console.log(t("// Main check function\n"+a.toString()))}return this.cache.clear(),function(t){return n.data=t,a.call(e,t,n)}}compileRule(t,e,n,i,r){const o=[],a=this.cache.get(t.schema);if(a)(t=a).cycle=!0,t.cycleStack=[],o.push(this.wrapRequiredCheckSourceCode(t,`\n\t\t\t\tvar rule = context.rules[${t.index}];\n\t\t\t\tif (rule.cycleStack.indexOf(value) === -1) {\n\t\t\t\t\trule.cycleStack.push(value);\n\t\t\t\t\t${i.replace("%%INDEX%%",t.index)}\n\t\t\t\t\trule.cycleStack.pop(value);\n\t\t\t\t}\n\t\t\t`,r));else{this.cache.set(t.schema,t),t.index=e.index,e.rules[e.index]=t,"function"==typeof t.schema.custom&&(e.customs[n]={schema:t.schema,messages:t.messages},t.customValidation=t=>`\n\t\t\t\t\tconst rule = context.customs["${n}"];\n\t\t\t\t\tconst res = rule.schema.custom.call(this, ${t}, rule.schema, "${n}", parent, context);\n\t\t\t\t\tif (Array.isArray(res)) {\n\t\t\t\t\t\tres.forEach(err => errors.push(Object.assign({ message: rule.messages[err.type], field }, err)));\n\t\t\t\t\t}\n\t\t\t\t`),e.index++;const a=t.ruleFunction.call(this,t,n,e);if(a.source){const n=new Function("value","field","parent","errors","context",a.source);e.fn[t.index]=n,o.push(this.wrapRequiredCheckSourceCode(t,i.replace("%%INDEX%%",t.index),r))}else o.push(this.wrapRequiredCheckSourceCode(t))}return o.join("\n")}getRuleFromSchema(t){if("string"==typeof t){const e=t.split("|").map(t=>t.trim());t={type:e[0]},e.slice(1).map(e=>{const n=e.indexOf(":");if(-1!==n){const i=e.substr(0,n).trim();let r=e.substr(n+1).trim();"true"===r||"false"===r?r="true"===r:Number.isNaN(Number(r))||(r=Number(r)),t[i]=r}else e.startsWith("no-")?t[e.slice(3)]=!1:t[e]=!0})}else if(Array.isArray(t)){if(0==t.length)throw new Error("Invalid schema.");(t={type:"multi",rules:t}).rules.map(t=>this.getRuleFromSchema(t)).every(t=>1==t.schema.optional)&&(t.optional=!0)}const e=this.aliases[t.type];e&&(delete t.type,t=Object.assign({},e,t));const n=this.rules[t.type];if(!n)throw new Error("Invalid '"+t.type+"' type in validator schema.");return{messages:Object.assign({},this.messages,t.messages),schema:t,ruleFunction:n,customValidation:()=>""}}makeError({type:t,field:e,expected:n,actual:i,messages:r}){const o={type:`"${t}"`,message:`"${r[t]}"`};return o.field=e?`"${e}"`:"field",n&&(o.expected=n),i&&(o.actual=i),`errors.push({ ${Object.keys(o).map(t=>`${t}: ${o[t]}`).join(", ")} });`}add(t,e){this.rules[t]=e}alias(t,e){if(this.rules[t])throw new Error("Alias name must not be a rule name");this.aliases[t]=e}},mt=new RegExp(/^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/,"gi"),gt=new RegExp(/^[-+]?\d+$/),bt=function(){var t=new yt({messages:{color:"The '{field}' field must be an a valid color! Actual: {actual}",measurement:"The '{field}' must be a measurement with specs that are not met. Please check schema definition. Actual: {actual}"}});return t.add("measurement",(function(t,e,n){var i=t.schema,r=t.messages,o=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)("+i.units.join("|")+")$","gi"),a=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi"),s=i.units.join(", ");return{source:"\n        if(typeof value !== 'string' && !(value instanceof String)){\n          ".concat(this.makeError({type:"measurement",actual:"value",units:s,messages:r}),"\n          return ;\n        }\n        if(!value.match(").concat(o,")){\n          ").concat(this.makeError({type:"measurement",actual:"value",units:s,messages:r}),"\n        } else {\n          var numberPart = value.match(").concat(a,")[0];\n          if(").concat(Object.prototype.hasOwnProperty.call(i,"min"),"){\n            if(").concat(i.min," > numberPart){\n              ").concat(this.makeError({type:"measurement",actual:"value",units:s,messages:r}),"\n            }\n          }\n          if(").concat(Object.prototype.hasOwnProperty.call(i,"max"),"){\n            if(").concat(i.max," < numberPart){\n              ").concat(this.makeError({type:"measurement",actual:"value",units:s,messages:r}),"\n            }\n          }\n           if(").concat(Object.prototype.hasOwnProperty.call(i,"integer"),"){\n            if(!numberPart.match(").concat(gt,")){\n              ").concat(this.makeError({type:"measurement",actual:"value",units:s,messages:r}),"\n            }\n          }\n        }\n        return value;\n      ")}})),t.add("html",(function(t,e,n){t.schema;var i=t.messages;return{source:"\n        if(value === null){\n          ".concat(this.makeError({type:"html",actual:"value",messages:i}),"\n        } else {\n          return value;\n        }\n      ")}})),t.add("css",(function(t,e,n){t.schema;var i=t.messages;return{source:"\n        if(value === null){\n          ".concat(this.makeError({type:"css",actual:"value",messages:i}),"\n        } else {\n          return value;\n        }\n      ")}})),t.add("color",(function(t,e,n){t.schema;var i=t.messages;return{source:"\n        if(typeof value !== 'string' && !(value instanceof String)){\n          ".concat(this.makeError({type:"measurement",actual:"value",messages:i}),"\n          return ;\n        }\n        if(!value.match(").concat(mt,') && [\n            "aliceblue",\n            "antiquewhite",\n            "aqua",\n            "aquamarine",\n            "azure",\n            "beige",\n            "bisque",\n            "black",\n            "blanchedalmond",\n            "blue",\n            "blueviolet",\n            "brown",\n            "burlywood",\n            "cadetblue",\n            "chartreuse",\n            "chocolate",\n            "coral",\n            "cornflowerblue",\n            "cornsilk",\n            "crimson",\n            "cyan",\n            "darkblue",\n            "darkcyan",\n            "darkgoldenrod",\n            "darkgray",\n            "darkgrey",\n            "darkgreen",\n            "darkkhaki",\n            "darkmagenta",\n            "darkolivegreen",\n            "darkorange",\n            "darkorchid",\n            "darkred",\n            "darksalmon",\n            "darkseagreen",\n            "darkslateblue",\n            "darkslategray",\n            "darkslategrey",\n            "darkturquoise",\n            "darkviolet",\n            "deeppink",\n            "deepskyblue",\n            "dimgray",\n            "dimgrey",\n            "dodgerblue",\n            "firebrick",\n            "floralwhite",\n            "forestgreen",\n            "fuchsia",\n            "gainsboro",\n            "ghostwhite",\n            "gold",\n            "goldenrod",\n            "gray",\n            "grey",\n            "green",\n            "greenyellow",\n            "honeydew",\n            "hotpink",\n            "indianred",\n            "indigo",\n            "ivory",\n            "khaki",\n            "lavender",\n            "lavenderblush",\n            "lawngreen",\n            "lemonchiffon",\n            "lightblue",\n            "lightcoral",\n            "lightcyan",\n            "lightgoldenrodyellow",\n            "lightgray",\n            "lightgrey",\n            "lightgreen",\n            "lightpink",\n            "lightsalmon",\n            "lightseagreen",\n            "lightskyblue",\n            "lightslategray",\n            "lightslategrey",\n            "lightsteelblue",\n            "lightyellow",\n            "lime",\n            "limegreen",\n            "linen",\n            "magenta",\n            "maroon",\n            "mediumaquamarine",\n            "mediumblue",\n            "mediumorchid",\n            "mediumpurple",\n            "mediumseagreen",\n            "mediumslateblue",\n            "mediumspringgreen",\n            "mediumturquoise",\n            "mediumvioletred",\n            "midnightblue",\n            "mintcream",\n            "mistyrose",\n            "moccasin",\n            "navajowhite",\n            "navy",\n            "oldlace",\n            "olive",\n            "olivedrab",\n            "orange",\n            "orangered",\n            "orchid",\n            "palegoldenrod",\n            "palegreen",\n            "paleturquoise",\n            "palevioletred",\n            "papayawhip",\n            "peachpuff",\n            "peru",\n            "pink",\n            "plum",\n            "powderblue",\n            "purple",\n            "rebeccapurple",\n            "red",\n            "rosybrown",\n            "royalblue",\n            "saddlebrown",\n            "salmon",\n            "sandybrown",\n            "seagreen",\n            "seashell",\n            "sienna",\n            "silver",\n            "skyblue",\n            "slateblue",\n            "slategray",\n            "slategrey",\n            "snow",\n            "springgreen",\n            "steelblue",\n            "tan",\n            "teal",\n            "thistle",\n            "tomato",\n            "turquoise",\n            "violet",\n            "wheat",\n            "white",\n            "whitesmoke",\n            "yellow",\n            "yellowgreen",\n          ].indexOf(value.toLowerCase()) < 0){\n          ').concat(this.makeError({type:"color",actual:"value",messages:i}),"\n        }\n        return value;\n      ")}})),t},kt=[{key:"info",style:"color: #666;",level:5},{key:"notice",style:"background: rgba(0, 0, 0, 0.8); color:white; padding:8px;",level:4},{key:"warning",style:"color: black; background: orange;",level:2},{key:"error",style:"color: black; background: red;",level:1}],_t=1;window.AudioContext=window.AudioContext||window.webkitAudioContext;var xt=new window.AudioContext;function wt(t){return"number"==typeof t&&isFinite(t)}function It(t){return"string"==typeof t||t instanceof String}function Ct(t){return"object"===e(t)}function Ot(t){return t.charAt(0).toUpperCase()+t.slice(1)}function jt(t){if(null===t&&void 0===t)return{result:!0,analysis:{width:null,height:null}};var e=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi");if(!Ct(t))return{result:!1,errors:['originalDims should be an object containing the "width" and "height" keys']};if(!Object.prototype.hasOwnProperty.call(t,"width")||!Object.prototype.hasOwnProperty.call(t,"height"))return{result:!1,errors:['originalDims should be an object containing both the "width" and "height" keys']};if(!It(t.width))return{result:!1,errors:["originalDims.width should be defined either on px or %."]};if(!It(t.height))return{result:!1,errors:["originalDims.height should be defined either on px or %."]};var n=t.width.match(e)[0],i=t.width.substring(n.length);if(!wt(Number(n))||"%"!==i&&"px"!==i)return{result:!1,errors:["originalDims.width should be defined either on px or %."]};var r=t.height.match(e)[0],o=t.height.substring(r.length);return!wt(Number(r))||"%"!=o&&"px"!=o?{result:!1,errors:["originalDims.heigth should be defined either on px or %."]}:{result:!0,analysis:Pt(t)}}function Pt(t){var e=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi"),n=null,i=null;if(Ct(t)&&null!=t){if(Object.prototype.hasOwnProperty.call(t,"width")&&It(t.width)){var r=t.width.match(e)[0],o=t.width.substring(r.length);n=!wt(Number(r))||"%"!==o&&"px"!==o?null:{number:Number(r),unit:o}}if(Object.prototype.hasOwnProperty.call(t,"height")&&It(t.height)){var a=t.height.match(e)[0],s=t.height.substring(a.length);i=!wt(Number(a))||"%"!=s&&"px"!=s?null:{number:Number(a),unit:s}}}return{width:n,height:i}}function Et(t,e){return Math.round(t/e)*e}function At(t){var e=t.split("___");return{mcid:e[0],attribute:e[1]}}function Dt(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function St(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t?"_":"-";return Dt()+Dt()+e+Dt()+e+Dt()}function Mt(t,e){return new Function("return `".concat(t,"`;")).call(e)}function Tt(t,e){return"".concat(t).concat("___").concat(e)}var Bt=function(){function t(e){n(this,t);var i=_t;e&&Object.prototype.hasOwnProperty.call(e,"logLevel")&&(i=e.logLevel);for(var r=0;r<kt.length;r++){var o=kt[r];i>=o.level?this[o.key]=window.console.log.bind(window.console,"MotorCortex - ".concat(o.key,": ")):this[o.key]=function(){}}this.log=i>=3?window.console.log.bind(window.console,"MotorCortex - "):function(){}}return r(t,[{key:"validateProps",value:function(t,e,n){var i=bt().validate(t,e);if(i.length>0){for(var r="Error on plugin's \"".concat(n.plugin_npm_name,'" "').concat(n.ClassName,'" instantiation. Errors (op props):'),o=0;o<i.length;o++)r+="\n - ".concat(i[o].message,". ").concat(i[o].actual," provided");return console.error(r),{result:!1,errors:i}}return{result:!0}}},{key:"getElementByMCID",value:function(t,e){return t.rootElement.querySelectorAll("[".concat("data-motorcortex2-id",'="').concat(e,'"]'))[0]}},{key:"buildInitialValuesValidationRules",value:function(t){var e=JSON.parse(JSON.stringify(t));return function t(e){if(("string"==typeof e||e instanceof String)&&(e={type:e}),e.optional=!0,"object"===e.type)for(var n in e.props)t(e.props[n])}(e),e}},{key:"systoleDiastoleProjections",value:function(t,e,n){for(var i=[],r=0;r<t.length;r++){var o=t[r],a=o.parentMillisecond-n;1!==e&&i.push({id:o.incident.id,start:a*e+n,end:a*e+n+o.incident.duration*e,startDelta:a*e+n-o.millisecond})}return i}}]),t}(),Vt=new Bt;function $t(t){return t.result?{result:!0,execute:t.execute}:{result:!1,errors:t.errors}}var Nt=function(){function t(e){n(this,t),this.runTimeInfo=e.runTimeInfo,this.context=e.context,this.onInitialise(),this.getIncidentById=e.getIncidentById}return r(t,[{key:"onInitialise",value:function(){}},{key:"_resize",value:function(){Vt.log("Please overwite the _resize method of the Channel")}},{key:"addIncidents",value:function(t){return $t(this.checkAddition(t))}},{key:"editIncidents",value:function(t,e){return $t(this.checkEdit(t,e))}},{key:"removeIncidents",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return $t(this.checkDelete(t,e))}},{key:"recalcScratchValues",value:function(t){}},{key:"checkAddition",value:function(t){return{result:!0,execute:function(){}}}},{key:"checkEdit",value:function(t,e){return{result:!0,execute:function(){}}}},{key:"checkDelete",value:function(t){return{result:!0,execute:function(){}}}},{key:"checkResizedIncidents",value:function(t){return{result:!0,execute:function(){}}}},{key:"moveTo",value:function(t,e,n){}}],[{key:"type",get:function(){return"plain"}}]),t}();function zt(t){t.descriptor.value=function(t){this.duration=this.duration*t}}var Lt="up",Rt="down",Ft="native.tree.bypass",Gt=I(null,(function(t){return{F:function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,e),t(this),this.parentNode=null,this.isNode=!1,Object.prototype.hasOwnProperty.call(i,"id")?this.id=i.id:this.id=St(),this.props=i},d:[{kind:"get",key:"delay",value:function(){return Object.prototype.hasOwnProperty.call(this.props,"delay")?this.props.delay:0}},{kind:"set",key:"delay",value:function(t){0!==t&&(this.props.delay=t)}},{kind:"get",key:"hiatus",value:function(){return Object.prototype.hasOwnProperty.call(this.props,"hiatus")?this.props.hiatus:0}},{kind:"set",key:"hiatus",value:function(t){0!==t&&(this.props.hiatus=t)}},{kind:"get",key:"repeats",value:function(){return Object.prototype.hasOwnProperty.call(this.props,"repeats")?this.props.repeats:1}},{kind:"set",key:"repeats",value:function(t){this.props.repeats=t}},{kind:"get",key:"duration",value:function(){return this.repeats*(this.delay+this.props.duration+this.hiatus)}},{kind:"set",key:"duration",value:function(t){var e=t/this.duration;this.props.duration*=e,this.hiatus*=e,this.delay*=e}},{kind:"method",key:"setNewDuration",value:function(t){this.duration=t,this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:Lt})}},{kind:"method",decorators:[zt],key:"systoleDiastole",value:function(){}},{kind:"get",key:"hasParent",value:function(){return null!==this.parentNode}},{kind:"method",key:"attachToNode",value:function(t){this.parentNode=t}},{kind:"method",key:"detachFromParent",value:function(){this.parentNode=null}},{kind:"method",key:"putMessageOnPipe",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(Object.prototype.hasOwnProperty.call(i,"direction")||(i.direction=Rt),i.direction!==Rt||Object.prototype.hasOwnProperty.call(i,"positionDelta")||(i.positionDelta=0),i.selfExecute){var r="handle".concat(Ot(t)),o="function"==typeof this[r];if(o){var a=this[r](n,e);if(a!==Ft){var u={response:a,responder:this};return i.direction===Lt?u:[s({},u,{positionDelta:i.positionDelta})]}}}return i.direction===Lt?this.hasParent?this.parentNode.putMessageOnPipe(t,e,n,{selfExecute:!0,direction:Lt}):{response:!1,responder:null}:[]}},{kind:"method",key:"bypass",value:function(){return Ft}},{kind:"get",key:"positionOnPyramidion",value:function(){return this.getPositionOnPyramidion()}},{kind:"method",key:"getPositionOnPyramidion",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.hasParent){var e=this.putMessageOnPipe("getPositionOnPyramidion",{delta:t,id:this.id},"Parent",{selfExecute:!1,direction:Lt});return e.response}return t}}]}})),qt="The Leaf with the requested id couldn't be found on the Tree",Kt=I(null,(function(t,e){var i=function(e){u(r,e);var i=f(r);function r(){var e,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n(this,r),e=i.call(this,o),t(h(e)),e.isNode=!0,e.children={},e.calculatedDuration=0,e}return r}(e);return{F:i,d:[{kind:"get",key:"duration",value:function(){return this.calculatedDuration}},{kind:"set",key:"duration",value:function(t){var e=t/this.duration;for(var n in this.props&&Object.prototype.hasOwnProperty.call(this.props,"duration")&&(this.props.duration=t),this.calculatedDuration=t,this.children){var i=this.children[n];this.editPosition(i.id,i.position*e,!0),i.leaf.systoleDiastole(e)}}},{kind:"method",key:"setNewDuration",value:function(t){this.duration=t,this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:Lt})}},{kind:"method",key:"_calculateDuration",value:function(){var t=0;for(var e in this.children){var n=this.children[e];n.position+n.leaf.duration>t&&(t=n.position+n.leaf.duration)}return t!==this.calculatedDuration&&(this.props&&Object.prototype.hasOwnProperty.call(this.props,"duration")&&(this.props.duration=t),this.calculatedDuration=t,!0)}},{kind:"method",decorators:[zt],key:"systoleDiastole",value:function(){}},{kind:"method",key:"handleRecalcDuration",value:function(t,e){return!this._calculateDuration()||this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:Lt})}},{kind:"method",key:"getLeafById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Object.prototype.hasOwnProperty.call(this.children,t))return this.children[t].leaf;if(e)return null;for(var n in this.children){var i=this.children[n].leaf;if(i.isNode){var r=i.getLeafById(t);if(null!=r)return r}}return null}},{kind:"method",key:"getLeafPosition",value:function(t){if(Object.prototype.hasOwnProperty.call(this.children,t))return this.children[t].position;var e=this.putMessageOnPipe("getLeafPosition",{id:t},"Groups",{selfExecute:!1,direction:Rt});return e.length>0?e[0].positionDelta+e[0].response:void 0}},{kind:"method",key:"handleGetLeafPosition",value:function(t,e){return this.getLeafPosition(e.id)}},{kind:"method",key:"checkAddition",value:function(t,e){return t.hasParent?{result:!1,reason:"Leaf has already been attached to another Node"}:e<0?{result:!1,reason:"Negative positioning of childs on nodes is not allowed"}:{result:!0}}},{kind:"method",key:"addChild",value:function(t,e){return t.hasParent?{result:!1,reason:"Leaf has already been attached to another Node"}:(this.children[t.id]={id:t.id,leaf:t,position:e},t.attachToNode(this),this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:Lt}),{result:!0})}},{kind:"method",key:"checkRemoveChild",value:function(t){return Object.prototype.hasOwnProperty.call(this.children,t)?{result:!0}:{result:!1,reason:qt}}},{kind:"method",key:"removeChild",value:function(t){return this.children[t].leaf.detachFromParent(),delete this.children[t],this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:Lt}),{result:!0}}},{kind:"method",key:"checkEditPosition",value:function(t,e){return e<0?{result:!1,reason:"Negative positioning of childs on nodes is not allowed"}:Object.prototype.hasOwnProperty.call(this.children,t)?{result:!0}:{result:!1,reason:qt}}},{kind:"method",key:"editPosition",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(Object.prototype.hasOwnProperty.call(this.children,t))return this.children[t].position=e,n||this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:Lt}),{result:!0}}},{kind:"method",key:"putMessageOnPipe",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(Object.prototype.hasOwnProperty.call(r,"direction")||(r.direction=Rt),r.direction!==Rt||Object.prototype.hasOwnProperty.call(r,"positionDelta")||(r.positionDelta=0),r.direction===Lt)return y(l(i.prototype),"putMessageOnPipe",this).call(this,t,e,n,r);var o=y(l(i.prototype),"putMessageOnPipe",this).call(this,t,e,n,r);if(o.length>0)return o;for(var a in this.children){var u=this.children[a].leaf,c=s({},r,{selfExecute:!0,positionDelta:r.positionDelta+this.children[a].position});o=o.concat(u.putMessageOnPipe(t,e,n,c))}return o}},{kind:"method",key:"handleGetPositionOnPyramidion",value:function(t,e){var n=e.delta+this.getLeafPosition(e.id);return this.getPositionOnPyramidion(n)}}]}}),Gt);function Wt(t){t.descriptor.value=function(t){void 0===this.blockID&&(this.blockID=St()),this.DescriptiveIncident.putMessageOnPipe("setBlock",{id:this.blockID,description:t,incidentId:this.DescriptiveIncident.id,realIncidentId:this.id},"rootClip",{selfExecute:!0,direction:Lt})}}function Jt(t){t.descriptor.value=function(t){return this.id===t?this:this.bypass()}}function Ut(t){t.descriptor.value=function(){this.DescriptiveIncident.putMessageOnPipe("unBlock",{id:this.blockID},"rootClip",{selfExecute:!0,direction:Lt})}}var Ht=I(null,(function(t,e){var i=function(e){u(r,e);var i=f(r);function r(e,o){var a;return n(this,r),a=i.call(this,o),t(h(a)),a.mc_plugin_npm_name="motor-cortex-js",a.plugin_channel_class=Nt,a.hasIncidents=!0,a.onGroupInitialise(),a.calculatedDuration=0,a}return r}(e);return{F:i,d:[{kind:"method",key:"onGroupInitialise",value:function(){}},{kind:"method",key:"handleAddIncident",value:function(t,e){if(this.id===t){var n=(0,e.incidentFromDescription)(e.incident,e.contextData,e.audio);return null===n?this.bypass():n}return this.bypass()}},{kind:"method",key:"handleMoveIncident",value:function(t,e){if(this.id===t){var n=this.getLeafById(e.incidentId,!0);return null===n?this.bypass():n}return this.bypass()}},{kind:"method",key:"handleRemoveIncident",value:function(t,e){if(this.id===t){var n=this.getLeafById(e.incidentId,!0);return null===n?this.bypass():n}return this.bypass()}},{kind:"method",decorators:[Jt],key:"handleResize",value:function(){}},{kind:"method",key:"removeChild",value:function(t){this.children[t].leaf.lastWish(),y(l(i.prototype),"removeChild",this).call(this,t)}},{kind:"method",key:"getIncidentsByChannel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={};for(var i in n["motor-cortex-js"]=[{millisecond:t,parentMillisecond:e,incident:this,id:this.id}],this.children){var r=this.children[i],o=r.leaf.getIncidentsByChannel(t+r.position,t);for(var a in o)Object.prototype.hasOwnProperty.call(n,a)?n[a]=n[a].concat(o[a]):n[a]=o[a]}return n}},{kind:"method",key:"lastWish",value:function(){for(var t in this.children)this.children[t].leaf.lastWish()}},{kind:"method",decorators:[Wt],key:"setBlock",value:function(){}},{kind:"method",decorators:[Ut],key:"unblock",value:function(){}}]}}),Kt),Qt=ct((function(t,e){var n="[object Arguments]",i="[object Map]",r="[object Object]",o="[object Set]",a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/,u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,l=/\\(\\)?/g,c=/^\[object .+?Constructor\]$/,d=/^(?:0|[1-9]\d*)$/,h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h[n]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h[i]=h["[object Number]"]=h[r]=h["[object RegExp]"]=h[o]=h["[object String]"]=h["[object WeakMap]"]=!1;var p="object"==typeof ut&&ut&&ut.Object===Object&&ut,f="object"==typeof self&&self&&self.Object===Object&&self,v=p||f||Function("return this")(),y=e&&!e.nodeType&&e,m=y&&t&&!t.nodeType&&t,g=m&&m.exports===y,b=g&&p.process,k=function(){try{return b&&b.binding&&b.binding("util")}catch(t){}}(),_=k&&k.isTypedArray;function x(t,e){for(var n=-1,i=null==t?0:t.length,r=0,o=[];++n<i;){var a=t[n];e(a,n,t)&&(o[r++]=a)}return o}function w(t,e){for(var n=-1,i=null==t?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1}function I(t){var e=-1,n=Array(t.size);return t.forEach((function(t,i){n[++e]=[i,t]})),n}function C(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var O,j,P,E=Array.prototype,A=Function.prototype,D=Object.prototype,S=v["__core-js_shared__"],M=A.toString,T=D.hasOwnProperty,B=(O=/[^.]+$/.exec(S&&S.keys&&S.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"",V=D.toString,$=RegExp("^"+M.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),N=g?v.Buffer:void 0,z=v.Symbol,L=v.Uint8Array,R=D.propertyIsEnumerable,F=E.splice,G=z?z.toStringTag:void 0,q=Object.getOwnPropertySymbols,K=N?N.isBuffer:void 0,W=(j=Object.keys,P=Object,function(t){return j(P(t))}),J=Mt(v,"DataView"),U=Mt(v,"Map"),H=Mt(v,"Promise"),Q=Mt(v,"Set"),X=Mt(v,"WeakMap"),Z=Mt(Object,"create"),Y=Ft(J),tt=Ft(U),et=Ft(H),nt=Ft(Q),it=Ft(X),rt=z?z.prototype:void 0,ot=rt?rt.valueOf:void 0,at=rt?rt.toString:void 0;function st(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function lt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function dt(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new ct;++e<n;)this.add(t[e])}function ht(t){var e=this.__data__=new lt(t);this.size=e.size}function pt(t,e){var n=Wt(t),i=!n&&Kt(t),r=!n&&!i&&Ut(t),o=!n&&!i&&!r&&te(t),a=n||i||r||o,s=a?function(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}(t.length,String):[],u=s.length;for(var l in t)!e&&!T.call(t,l)||a&&("length"==l||r&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Vt(l,u))||s.push(l);return s}function ft(t,e){for(var n=t.length;n--;)if(qt(t[n][0],e))return n;return-1}st.prototype.clear=function(){this.__data__=Z?Z(null):{},this.size=0},st.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},st.prototype.get=function(t){var e=this.__data__;if(Z){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return T.call(e,t)?e[t]:void 0},st.prototype.has=function(t){var e=this.__data__;return Z?void 0!==e[t]:T.call(e,t)},st.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Z&&void 0===e?"__lodash_hash_undefined__":e,this},lt.prototype.clear=function(){this.__data__=[],this.size=0},lt.prototype.delete=function(t){var e=this.__data__,n=ft(e,t);return!(n<0)&&(n==e.length-1?e.pop():F.call(e,n,1),--this.size,!0)},lt.prototype.get=function(t){var e=this.__data__,n=ft(e,t);return n<0?void 0:e[n][1]},lt.prototype.has=function(t){return ft(this.__data__,t)>-1},lt.prototype.set=function(t,e){var n=this.__data__,i=ft(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this},ct.prototype.clear=function(){this.size=0,this.__data__={hash:new st,map:new(U||lt),string:new st}},ct.prototype.delete=function(t){var e=St(this,t).delete(t);return this.size-=e?1:0,e},ct.prototype.get=function(t){return St(this,t).get(t)},ct.prototype.has=function(t){return St(this,t).has(t)},ct.prototype.set=function(t,e){var n=St(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this},dt.prototype.add=dt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},dt.prototype.has=function(t){return this.__data__.has(t)},ht.prototype.clear=function(){this.__data__=new lt,this.size=0},ht.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},ht.prototype.get=function(t){return this.__data__.get(t)},ht.prototype.has=function(t){return this.__data__.has(t)},ht.prototype.set=function(t,e){var n=this.__data__;if(n instanceof lt){var i=n.__data__;if(!U||i.length<199)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new ct(i)}return n.set(t,e),this.size=n.size,this};var vt,yt,mt=(vt=function(t,e){return t&&bt(t,e,ee)},function(t,e){if(null==t)return t;if(!Jt(t))return vt(t,e);for(var n=t.length,i=yt?n:-1,r=Object(t);(yt?i--:++i<n)&&!1!==e(r[i],i,r););return t});function gt(t,e){var n=[];return mt(t,(function(t,i,r){e(t,i,r)&&n.push(t)})),n}var bt=function(t){return function(e,n,i){for(var r=-1,o=Object(e),a=i(e),s=a.length;s--;){var u=a[t?s:++r];if(!1===n(o[u],u,o))break}return e}}();function kt(t,e){for(var n=0,i=(e=Et(e,t)).length;null!=t&&n<i;)t=t[Rt(e[n++])];return n&&n==i?t:void 0}function _t(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":G&&G in Object(t)?function(t){var e=T.call(t,G),n=t[G];try{t[G]=void 0;var i=!0}catch(t){}var r=V.call(t);i&&(e?t[G]=n:delete t[G]);return r}(t):function(t){return V.call(t)}(t)}function xt(t,e){return null!=t&&e in Object(t)}function wt(t){return Zt(t)&&_t(t)==n}function It(t,e,a,s,u){return t===e||(null==t||null==e||!Zt(t)&&!Zt(e)?t!=t&&e!=e:function(t,e,a,s,u,l){var c=Wt(t),d=Wt(e),h=c?"[object Array]":Bt(t),p=d?"[object Array]":Bt(e),f=(h=h==n?r:h)==r,v=(p=p==n?r:p)==r,y=h==p;if(y&&Ut(t)){if(!Ut(e))return!1;c=!0,f=!1}if(y&&!f)return l||(l=new ht),c||te(t)?At(t,e,a,s,u,l):function(t,e,n,r,a,s,u){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!s(new L(t),new L(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return qt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case i:var l=I;case o:var c=1&r;if(l||(l=C),t.size!=e.size&&!c)return!1;var d=u.get(t);if(d)return d==e;r|=2,u.set(t,e);var h=At(l(t),l(e),r,a,s,u);return u.delete(t),h;case"[object Symbol]":if(ot)return ot.call(t)==ot.call(e)}return!1}(t,e,h,a,s,u,l);if(!(1&a)){var m=f&&T.call(t,"__wrapped__"),g=v&&T.call(e,"__wrapped__");if(m||g){var b=m?t.value():t,k=g?e.value():e;return l||(l=new ht),u(b,k,a,s,l)}}if(!y)return!1;return l||(l=new ht),function(t,e,n,i,r,o){var a=1&n,s=Dt(t),u=s.length,l=Dt(e).length;if(u!=l&&!a)return!1;var c=u;for(;c--;){var d=s[c];if(!(a?d in e:T.call(e,d)))return!1}var h=o.get(t);if(h&&o.get(e))return h==e;var p=!0;o.set(t,e),o.set(e,t);var f=a;for(;++c<u;){d=s[c];var v=t[d],y=e[d];if(i)var m=a?i(y,v,d,e,t,o):i(v,y,d,t,e,o);if(!(void 0===m?v===y||r(v,y,n,i,o):m)){p=!1;break}f||(f="constructor"==d)}if(p&&!f){var g=t.constructor,b=e.constructor;g==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof g&&g instanceof g&&"function"==typeof b&&b instanceof b||(p=!1)}return o.delete(t),o.delete(e),p}(t,e,a,s,u,l)}(t,e,a,s,It,u))}function Ct(t){return!(!Xt(t)||function(t){return!!B&&B in t}(t))&&(Ht(t)?$:c).test(Ft(t))}function Ot(t){return"function"==typeof t?t:null==t?ne:"object"==typeof t?Wt(t)?function(t,e){if($t(t)&&Nt(e))return zt(Rt(t),e);return function(n){var i=function(t,e,n){var i=null==t?void 0:kt(t,e);return void 0===i?n:i}(n,t);return void 0===i&&i===e?function(t,e){return null!=t&&function(t,e,n){e=Et(e,t);var i=-1,r=e.length,o=!1;for(;++i<r;){var a=Rt(e[i]);if(!(o=null!=t&&n(t,a)))break;t=t[a]}if(o||++i!=r)return o;return!!(r=null==t?0:t.length)&&Qt(r)&&Vt(a,r)&&(Wt(t)||Kt(t))}(t,e,xt)}(n,t):It(e,i,3)}}(t[0],t[1]):function(t){var e=function(t){var e=ee(t),n=e.length;for(;n--;){var i=e[n],r=t[i];e[n]=[i,r,Nt(r)]}return e}(t);if(1==e.length&&e[0][2])return zt(e[0][0],e[0][1]);return function(n){return n===t||function(t,e,n,i){var r=n.length,o=r,a=!i;if(null==t)return!o;for(t=Object(t);r--;){var s=n[r];if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++r<o;){var u=(s=n[r])[0],l=t[u],c=s[1];if(a&&s[2]){if(void 0===l&&!(u in t))return!1}else{var d=new ht;if(i)var h=i(l,c,u,t,e,d);if(!(void 0===h?It(c,l,3,i,d):h))return!1}}return!0}(n,t,e)}}(t):$t(e=t)?(n=Rt(e),function(t){return null==t?void 0:t[n]}):function(t){return function(e){return kt(e,t)}}(e);var e,n}function jt(t){if(n=(e=t)&&e.constructor,i="function"==typeof n&&n.prototype||D,e!==i)return W(t);var e,n,i,r=[];for(var o in Object(t))T.call(t,o)&&"constructor"!=o&&r.push(o);return r}function Pt(t){if("string"==typeof t)return t;if(Wt(t))return function(t,e){for(var n=-1,i=null==t?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r}(t,Pt)+"";if(Yt(t))return at?at.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Et(t,e){return Wt(t)?t:$t(t,e)?[t]:Lt(function(t){return null==t?"":Pt(t)}(t))}function At(t,e,n,i,r,o){var a=1&n,s=t.length,u=e.length;if(s!=u&&!(a&&u>s))return!1;var l=o.get(t);if(l&&o.get(e))return l==e;var c=-1,d=!0,h=2&n?new dt:void 0;for(o.set(t,e),o.set(e,t);++c<s;){var p=t[c],f=e[c];if(i)var v=a?i(f,p,c,e,t,o):i(p,f,c,t,e,o);if(void 0!==v){if(v)continue;d=!1;break}if(h){if(!w(e,(function(t,e){if(a=e,!h.has(a)&&(p===t||r(p,t,n,i,o)))return h.push(e);var a}))){d=!1;break}}else if(p!==f&&!r(p,f,n,i,o)){d=!1;break}}return o.delete(t),o.delete(e),d}function Dt(t){return function(t,e,n){var i=e(t);return Wt(t)?i:function(t,e){for(var n=-1,i=e.length,r=t.length;++n<i;)t[r+n]=e[n];return t}(i,n(t))}(t,ee,Tt)}function St(t,e){var n,i,r=t.__data__;return("string"==(i=typeof(n=e))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==n:null===n)?r["string"==typeof e?"string":"hash"]:r.map}function Mt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Ct(n)?n:void 0}var Tt=q?function(t){return null==t?[]:(t=Object(t),x(q(t),(function(e){return R.call(t,e)})))}:function(){return[]},Bt=_t;function Vt(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&d.test(t))&&t>-1&&t%1==0&&t<e}function $t(t,e){if(Wt(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Yt(t))||(s.test(t)||!a.test(t)||null!=e&&t in Object(e))}function Nt(t){return t==t&&!Xt(t)}function zt(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}(J&&"[object DataView]"!=Bt(new J(new ArrayBuffer(1)))||U&&Bt(new U)!=i||H&&"[object Promise]"!=Bt(H.resolve())||Q&&Bt(new Q)!=o||X&&"[object WeakMap]"!=Bt(new X))&&(Bt=function(t){var e=_t(t),n=e==r?t.constructor:void 0,a=n?Ft(n):"";if(a)switch(a){case Y:return"[object DataView]";case tt:return i;case et:return"[object Promise]";case nt:return o;case it:return"[object WeakMap]"}return e});var Lt=function(t){var e=Gt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(u,(function(t,n,i,r){e.push(i?r.replace(l,"$1"):n||t)})),e}));function Rt(t){if("string"==typeof t||Yt(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Ft(t){if(null!=t){try{return M.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Gt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],o=n.cache;if(o.has(r))return o.get(r);var a=t.apply(this,i);return n.cache=o.set(r,a)||o,a};return n.cache=new(Gt.Cache||ct),n}function qt(t,e){return t===e||t!=t&&e!=e}Gt.Cache=ct;var Kt=wt(function(){return arguments}())?wt:function(t){return Zt(t)&&T.call(t,"callee")&&!R.call(t,"callee")},Wt=Array.isArray;function Jt(t){return null!=t&&Qt(t.length)&&!Ht(t)}var Ut=K||function(){return!1};function Ht(t){if(!Xt(t))return!1;var e=_t(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Qt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function Xt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Zt(t){return null!=t&&"object"==typeof t}function Yt(t){return"symbol"==typeof t||Zt(t)&&"[object Symbol]"==_t(t)}var te=_?function(t){return function(e){return t(e)}}(_):function(t){return Zt(t)&&Qt(t.length)&&!!h[_t(t)]};function ee(t){return Jt(t)?pt(t):jt(t)}function ne(t){return t}t.exports=function(t,e){return(Wt(t)?x:gt)(t,Ot(e))}})),Xt=ct((function(t,e){var n="[object Arguments]",i="[object Map]",r="[object Object]",o="[object Set]",a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/,u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,l=/\\(\\)?/g,c=/^\[object .+?Constructor\]$/,d=/^(?:0|[1-9]\d*)$/,h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h[n]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h[i]=h["[object Number]"]=h[r]=h["[object RegExp]"]=h[o]=h["[object String]"]=h["[object WeakMap]"]=!1;var p="object"==typeof ut&&ut&&ut.Object===Object&&ut,f="object"==typeof self&&self&&self.Object===Object&&self,v=p||f||Function("return this")(),y=e&&!e.nodeType&&e,m=y&&t&&!t.nodeType&&t,g=m&&m.exports===y,b=g&&p.process,k=function(){try{return b&&b.binding&&b.binding("util")}catch(t){}}(),_=k&&k.isTypedArray;function x(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function w(t,e){for(var n=-1,i=null==t?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r}function I(t,e){for(var n=-1,i=e.length,r=t.length;++n<i;)t[r+n]=e[n];return t}function C(t,e){for(var n=-1,i=null==t?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1}function O(t){return function(e){return t(e)}}function j(t){var e=-1,n=Array(t.size);return t.forEach((function(t,i){n[++e]=[i,t]})),n}function P(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var E,A,D,S=Array.prototype,M=Function.prototype,T=Object.prototype,B=v["__core-js_shared__"],V=M.toString,$=T.hasOwnProperty,N=(E=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+E:"",z=T.toString,L=RegExp("^"+V.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),R=g?v.Buffer:void 0,F=v.Symbol,G=v.Uint8Array,q=T.propertyIsEnumerable,K=S.splice,W=F?F.isConcatSpreadable:void 0,J=F?F.toStringTag:void 0,U=function(){try{var t=Ft(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),H=Object.getOwnPropertySymbols,Q=R?R.isBuffer:void 0,X=(A=Object.keys,D=Object,function(t){return A(D(t))}),Z=Math.max,Y=Date.now,tt=Ft(v,"DataView"),et=Ft(v,"Map"),nt=Ft(v,"Promise"),it=Ft(v,"Set"),rt=Ft(v,"WeakMap"),ot=Ft(Object,"create"),at=te(tt),st=te(et),lt=te(nt),ct=te(it),dt=te(rt),ht=F?F.prototype:void 0,pt=ht?ht.valueOf:void 0,ft=ht?ht.toString:void 0;function vt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function gt(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new mt;++e<n;)this.add(t[e])}function bt(t){var e=this.__data__=new yt(t);this.size=e.size}function kt(t,e){var n=oe(t),i=!n&&re(t),r=!n&&!i&&se(t),o=!n&&!i&&!r&&pe(t),a=n||i||r||o,s=a?function(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}(t.length,String):[],u=s.length;for(var l in t)!e&&!$.call(t,l)||a&&("length"==l||r&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Wt(l,u))||s.push(l);return s}function _t(t,e){for(var n=t.length;n--;)if(ie(t[n][0],e))return n;return-1}vt.prototype.clear=function(){this.__data__=ot?ot(null):{},this.size=0},vt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},vt.prototype.get=function(t){var e=this.__data__;if(ot){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return $.call(e,t)?e[t]:void 0},vt.prototype.has=function(t){var e=this.__data__;return ot?void 0!==e[t]:$.call(e,t)},vt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ot&&void 0===e?"__lodash_hash_undefined__":e,this},yt.prototype.clear=function(){this.__data__=[],this.size=0},yt.prototype.delete=function(t){var e=this.__data__,n=_t(e,t);return!(n<0)&&(n==e.length-1?e.pop():K.call(e,n,1),--this.size,!0)},yt.prototype.get=function(t){var e=this.__data__,n=_t(e,t);return n<0?void 0:e[n][1]},yt.prototype.has=function(t){return _t(this.__data__,t)>-1},yt.prototype.set=function(t,e){var n=this.__data__,i=_t(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this},mt.prototype.clear=function(){this.size=0,this.__data__={hash:new vt,map:new(et||yt),string:new vt}},mt.prototype.delete=function(t){var e=Rt(this,t).delete(t);return this.size-=e?1:0,e},mt.prototype.get=function(t){return Rt(this,t).get(t)},mt.prototype.has=function(t){return Rt(this,t).has(t)},mt.prototype.set=function(t,e){var n=Rt(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this},gt.prototype.add=gt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},gt.prototype.has=function(t){return this.__data__.has(t)},bt.prototype.clear=function(){this.__data__=new yt,this.size=0},bt.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},bt.prototype.get=function(t){return this.__data__.get(t)},bt.prototype.has=function(t){return this.__data__.has(t)},bt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof yt){var i=n.__data__;if(!et||i.length<199)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new mt(i)}return n.set(t,e),this.size=n.size,this};var xt,wt,It=(xt=function(t,e){return t&&Ct(t,e,fe)},function(t,e){if(null==t)return t;if(!ae(t))return xt(t,e);for(var n=t.length,i=wt?n:-1,r=Object(t);(wt?i--:++i<n)&&!1!==e(r[i],i,r););return t});var Ct=function(t){return function(e,n,i){for(var r=-1,o=Object(e),a=i(e),s=a.length;s--;){var u=a[t?s:++r];if(!1===n(o[u],u,o))break}return e}}();function Ot(t,e){for(var n=0,i=(e=$t(e,t)).length;null!=t&&n<i;)t=t[Yt(e[n++])];return n&&n==i?t:void 0}function jt(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":J&&J in Object(t)?function(t){var e=$.call(t,J),n=t[J];try{t[J]=void 0;var i=!0}catch(t){}var r=z.call(t);i&&(e?t[J]=n:delete t[J]);return r}(t):function(t){return z.call(t)}(t)}function Pt(t,e){return null!=t&&e in Object(t)}function Et(t){return de(t)&&jt(t)==n}function At(t,e,a,s,u){return t===e||(null==t||null==e||!de(t)&&!de(e)?t!=t&&e!=e:function(t,e,a,s,u,l){var c=oe(t),d=oe(e),h=c?"[object Array]":qt(t),p=d?"[object Array]":qt(e),f=(h=h==n?r:h)==r,v=(p=p==n?r:p)==r,y=h==p;if(y&&se(t)){if(!se(e))return!1;c=!0,f=!1}if(y&&!f)return l||(l=new bt),c||pe(t)?zt(t,e,a,s,u,l):function(t,e,n,r,a,s,u){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!s(new G(t),new G(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ie(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case i:var l=j;case o:var c=1&r;if(l||(l=P),t.size!=e.size&&!c)return!1;var d=u.get(t);if(d)return d==e;r|=2,u.set(t,e);var h=zt(l(t),l(e),r,a,s,u);return u.delete(t),h;case"[object Symbol]":if(pt)return pt.call(t)==pt.call(e)}return!1}(t,e,h,a,s,u,l);if(!(1&a)){var m=f&&$.call(t,"__wrapped__"),g=v&&$.call(e,"__wrapped__");if(m||g){var b=m?t.value():t,k=g?e.value():e;return l||(l=new bt),u(b,k,a,s,l)}}if(!y)return!1;return l||(l=new bt),function(t,e,n,i,r,o){var a=1&n,s=Lt(t),u=s.length,l=Lt(e).length;if(u!=l&&!a)return!1;var c=u;for(;c--;){var d=s[c];if(!(a?d in e:$.call(e,d)))return!1}var h=o.get(t);if(h&&o.get(e))return h==e;var p=!0;o.set(t,e),o.set(e,t);var f=a;for(;++c<u;){d=s[c];var v=t[d],y=e[d];if(i)var m=a?i(y,v,d,e,t,o):i(v,y,d,t,e,o);if(!(void 0===m?v===y||r(v,y,n,i,o):m)){p=!1;break}f||(f="constructor"==d)}if(p&&!f){var g=t.constructor,b=e.constructor;g==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof g&&g instanceof g&&"function"==typeof b&&b instanceof b||(p=!1)}return o.delete(t),o.delete(e),p}(t,e,a,s,u,l)}(t,e,a,s,At,u))}function Dt(t){return!(!ce(t)||function(t){return!!N&&N in t}(t))&&(ue(t)?L:c).test(te(t))}function St(t){return"function"==typeof t?t:null==t?ve:"object"==typeof t?oe(t)?function(t,e){if(Ut(t)&&Ht(e))return Qt(Yt(t),e);return function(n){var i=function(t,e,n){var i=null==t?void 0:Ot(t,e);return void 0===i?n:i}(n,t);return void 0===i&&i===e?function(t,e){return null!=t&&function(t,e,n){e=$t(e,t);var i=-1,r=e.length,o=!1;for(;++i<r;){var a=Yt(e[i]);if(!(o=null!=t&&n(t,a)))break;t=t[a]}if(o||++i!=r)return o;return!!(r=null==t?0:t.length)&&le(r)&&Wt(a,r)&&(oe(t)||re(t))}(t,e,Pt)}(n,t):At(e,i,3)}}(t[0],t[1]):function(t){var e=function(t){var e=fe(t),n=e.length;for(;n--;){var i=e[n],r=t[i];e[n]=[i,r,Ht(r)]}return e}(t);if(1==e.length&&e[0][2])return Qt(e[0][0],e[0][1]);return function(n){return n===t||function(t,e,n,i){var r=n.length,o=r,a=!i;if(null==t)return!o;for(t=Object(t);r--;){var s=n[r];if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++r<o;){var u=(s=n[r])[0],l=t[u],c=s[1];if(a&&s[2]){if(void 0===l&&!(u in t))return!1}else{var d=new bt;if(i)var h=i(l,c,u,t,e,d);if(!(void 0===h?At(c,l,3,i,d):h))return!1}}return!0}(n,t,e)}}(t):Ut(e=t)?(n=Yt(e),function(t){return null==t?void 0:t[n]}):function(t){return function(e){return Ot(e,t)}}(e);var e,n}function Mt(t){if(n=(e=t)&&e.constructor,i="function"==typeof n&&n.prototype||T,e!==i)return X(t);var e,n,i,r=[];for(var o in Object(t))$.call(t,o)&&"constructor"!=o&&r.push(o);return r}function Tt(t,e,n){var i=-1;return e=w(e.length?e:[ve],O(St)),function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}(function(t,e){var n=-1,i=ae(t)?Array(t.length):[];return It(t,(function(t,r,o){i[++n]=e(t,r,o)})),i}(t,(function(t,n,r){return{criteria:w(e,(function(e){return e(t)})),index:++i,value:t}})),(function(t,e){return function(t,e,n){var i=-1,r=t.criteria,o=e.criteria,a=r.length,s=n.length;for(;++i<a;){var u=Nt(r[i],o[i]);if(u){if(i>=s)return u;var l=n[i];return u*("desc"==l?-1:1)}}return t.index-e.index}(t,e,n)}))}var Bt=U?function(t,e){return U(t,"toString",{configurable:!0,enumerable:!1,value:(n=e,function(){return n}),writable:!0});var n}:ve;function Vt(t){if("string"==typeof t)return t;if(oe(t))return w(t,Vt)+"";if(he(t))return ft?ft.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function $t(t,e){return oe(t)?t:Ut(t,e)?[t]:Zt(function(t){return null==t?"":Vt(t)}(t))}function Nt(t,e){if(t!==e){var n=void 0!==t,i=null===t,r=t==t,o=he(t),a=void 0!==e,s=null===e,u=e==e,l=he(e);if(!s&&!l&&!o&&t>e||o&&a&&u&&!s&&!l||i&&a&&u||!n&&u||!r)return 1;if(!i&&!o&&!l&&t<e||l&&n&&r&&!i&&!o||s&&n&&r||!a&&r||!u)return-1}return 0}function zt(t,e,n,i,r,o){var a=1&n,s=t.length,u=e.length;if(s!=u&&!(a&&u>s))return!1;var l=o.get(t);if(l&&o.get(e))return l==e;var c=-1,d=!0,h=2&n?new gt:void 0;for(o.set(t,e),o.set(e,t);++c<s;){var p=t[c],f=e[c];if(i)var v=a?i(f,p,c,e,t,o):i(p,f,c,t,e,o);if(void 0!==v){if(v)continue;d=!1;break}if(h){if(!C(e,(function(t,e){if(a=e,!h.has(a)&&(p===t||r(p,t,n,i,o)))return h.push(e);var a}))){d=!1;break}}else if(p!==f&&!r(p,f,n,i,o)){d=!1;break}}return o.delete(t),o.delete(e),d}function Lt(t){return function(t,e,n){var i=e(t);return oe(t)?i:I(i,n(t))}(t,fe,Gt)}function Rt(t,e){var n,i,r=t.__data__;return("string"==(i=typeof(n=e))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==n:null===n)?r["string"==typeof e?"string":"hash"]:r.map}function Ft(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Dt(n)?n:void 0}var Gt=H?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,i=null==t?0:t.length,r=0,o=[];++n<i;){var a=t[n];e(a,n,t)&&(o[r++]=a)}return o}(H(t),(function(e){return q.call(t,e)})))}:function(){return[]},qt=jt;function Kt(t){return oe(t)||re(t)||!!(W&&t&&t[W])}function Wt(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&d.test(t))&&t>-1&&t%1==0&&t<e}function Jt(t,e,n){if(!ce(n))return!1;var i=typeof e;return!!("number"==i?ae(n)&&Wt(e,n.length):"string"==i&&e in n)&&ie(n[e],t)}function Ut(t,e){if(oe(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!he(t))||(s.test(t)||!a.test(t)||null!=e&&t in Object(e))}function Ht(t){return t==t&&!ce(t)}function Qt(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}(tt&&"[object DataView]"!=qt(new tt(new ArrayBuffer(1)))||et&&qt(new et)!=i||nt&&"[object Promise]"!=qt(nt.resolve())||it&&qt(new it)!=o||rt&&"[object WeakMap]"!=qt(new rt))&&(qt=function(t){var e=jt(t),n=e==r?t.constructor:void 0,a=n?te(n):"";if(a)switch(a){case at:return"[object DataView]";case st:return i;case lt:return"[object Promise]";case ct:return o;case dt:return"[object WeakMap]"}return e});var Xt=function(t){var e=0,n=0;return function(){var i=Y(),r=16-(i-n);if(n=i,r>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Bt);var Zt=function(t){var e=ne(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(u,(function(t,n,i,r){e.push(i?r.replace(l,"$1"):n||t)})),e}));function Yt(t){if("string"==typeof t||he(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function te(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var ee=function(t,e){return Xt(function(t,e,n){return e=Z(void 0===e?t.length-1:e,0),function(){for(var i=arguments,r=-1,o=Z(i.length-e,0),a=Array(o);++r<o;)a[r]=i[e+r];r=-1;for(var s=Array(e+1);++r<e;)s[r]=i[r];return s[e]=n(a),x(t,this,s)}}(t,e,ve),t+"")}((function(t,e){if(null==t)return[];var n=e.length;return n>1&&Jt(t,e[0],e[1])?e=[]:n>2&&Jt(e[0],e[1],e[2])&&(e=[e[0]]),Tt(t,function t(e,n,i,r,o){var a=-1,s=e.length;for(i||(i=Kt),o||(o=[]);++a<s;){var u=e[a];n>0&&i(u)?n>1?t(u,n-1,i,r,o):I(o,u):r||(o[o.length]=u)}return o}(e,1),[])}));function ne(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],o=n.cache;if(o.has(r))return o.get(r);var a=t.apply(this,i);return n.cache=o.set(r,a)||o,a};return n.cache=new(ne.Cache||mt),n}function ie(t,e){return t===e||t!=t&&e!=e}ne.Cache=mt;var re=Et(function(){return arguments}())?Et:function(t){return de(t)&&$.call(t,"callee")&&!q.call(t,"callee")},oe=Array.isArray;function ae(t){return null!=t&&le(t.length)&&!ue(t)}var se=Q||function(){return!1};function ue(t){if(!ce(t))return!1;var e=jt(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function le(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function ce(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function de(t){return null!=t&&"object"==typeof t}function he(t){return"symbol"==typeof t||de(t)&&"[object Symbol]"==jt(t)}var pe=_?O(_):function(t){return de(t)&&le(t.length)&&!!h[jt(t)]};function fe(t){return ae(t)?kt(t):Mt(t)}function ve(t){return t}t.exports=ee})),Zt=function(t){u(i,t);var e=f(i);function i(){return n(this,i),e.apply(this,arguments)}return r(i,[{key:"onInitialise",value:function(){this.incidents=[],this.incidentsById={}}},{key:"_incidentById",value:function(t){return this.incidentsById[t]}},{key:"_resize",value:function(t){for(var e=0;e<this.incidents.length;e++)this.incidents[e].millisecond=this.incidents[e].millisecond*t}},{key:"checkAddition",value:function(t){for(var e=[],n={},i=[],r=0;r<t.length;r++)n[t[r].id]=t[r].incident,i.push({id:t[r].id,millisecond:t[r].millisecond}),Object.prototype.hasOwnProperty.call(this.incidentsById,t[r].id)&&(Vt.error("Incident with the id ".concat(t[r].id," already exists. Addition is rejected.")),e.push({type:"Already existing id",meta:{id:t[r].id}}));if(e.length>0)return{result:!1,errors:e};var o=this;return{result:!0,execute:function(){o.incidentsById=Object.assign(o.incidentsById,n),o.incidents=o.incidents.concat(i),o.incidents=Xt(o.incidents,[function(t){return t.millisecond}]);for(var e=0;e<t.length;e++)o._incidentById(t[e].id)._onGetContextOnce(o.context)}}}},{key:"checkEdit",value:function(t,e){var n=this;return{result:!0,execute:function(){for(var i=0;i<t.length;i++)for(var r=0;r<n.incidents.length;r++)if(n.incidents[r].id===t[i].id){n.incidents[r].millisecond+=e;break}n.incidents=Xt(n.incidents,[function(t){return t.millisecond}])}}}},{key:"checkDelete",value:function(t){for(var e=this,n=[],i=0;i<t.length;i++)n.push(t[i].id);return{result:!0,execute:function(){var t=Qt(e.incidents,(function(t){return-1===n.indexOf(t.id)}));e.incidents=t;for(var i=0;i<n.length;i++)delete e.incidentsById[n[i]]}}}},{key:"checkResizedIncidents",value:function(t){var e=this;return{result:!0,execute:function(){for(var n=0;n<t.length;n++)for(var i=0;i<e.incidents.length;i++)if(e.incidents[i].id===t[n].id){e.incidents[i].millisecond+=t[n].startDelta;break}e.incidents=Xt(e.incidents,[function(t){return t.millisecond}])}}}},{key:"moveTo",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(i)for(var r=0;r<this.incidents.length;r++){var o=this.incidents[r],a=this._incidentById(o.id);e<o.millisecond?a.onProgress(0,0,n,!0):e>o.millisecond+a.duration?a.onProgress(1,a.duration,n,!0):a.onProgress((e-o.millisecond)/a.duration,e-o.millisecond,n,!0)}else{var s,u=this;s=Qt(this.incidents,e>t?function(n){return n.millisecond+u._incidentById(n.id).duration>=t&&n.millisecond+u._incidentById(n.id).duration<=e||u._incidentById(n.id).duration+n.millisecond>=e&&n.millisecond<=e}:function(n){return n.millisecond+u._incidentById(n.id).duration>=e&&n.millisecond+u._incidentById(n.id).duration<=t||u._incidentById(n.id).duration+n.millisecond>=t&&n.millisecond<=t});for(var l=0;l<s.length;l++){var c=s[l],d=this._incidentById(c.id),h=(e-c.millisecond)/d.duration>=1,p=h?1:(e-c.millisecond)/d.duration,f=h?d.duration:e-c.millisecond;d.onProgress(p,f,n,!1)}}}}]),i}(Nt),Yt="function"==typeof Float32Array;function te(t,e){return 1-3*e+3*t}function ee(t,e){return 3*e-6*t}function ne(t){return 3*t}function ie(t,e,n){return((te(e,n)*t+ee(e,n))*t+ne(e))*t}function re(t,e,n){return 3*te(e,n)*t*t+2*ee(e,n)*t+ne(e)}function oe(t){return t}var ae=function(t,e,n,i){if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&n===i)return oe;for(var r=Yt?new Float32Array(11):new Array(11),o=0;o<11;++o)r[o]=ie(.1*o,t,n);function a(e){for(var i=0,o=1;10!==o&&r[o]<=e;++o)i+=.1;--o;var a=i+.1*((e-r[o])/(r[o+1]-r[o])),s=re(a,t,n);return s>=.001?function(t,e,n,i){for(var r=0;r<4;++r){var o=re(e,n,i);if(0===o)return e;e-=(ie(e,n,i)-t)/o}return e}(e,a,t,n):0===s?a:function(t,e,n,i,r){var o,a,s=0;do{(o=ie(a=e+(n-e)/2,i,r)-t)>0?n=a:e=a}while(Math.abs(o)>1e-7&&++s<10);return a}(e,i,i+.1,t,n)}return function(t){return 0===t?0:1===t?1:ie(a(t),e,i)}};function se(t){t.descriptor.value=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={};return n[this.mc_plugin_npm_name]=[{millisecond:t,parentMillisecond:e,incident:this,id:this.id}],n}}var ue=I(null,(function(t){return{F:function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;n(this,e),t(this),this.attrs=i,this.props=r,this.dna=o,this.context=o.context,this.mcid=o.mcid,this.id=r.id||St(),this.modelId=r.modelId,this.gotContext=!1,this.plugin_channel_class=Nt,this.mc_plugin_npm_name="motor-cortex-js",Object.prototype.hasOwnProperty.call(r,"plugin_channel_class")&&(this.plugin_channel_class=r.plugin_channel_class),Object.prototype.hasOwnProperty.call(r,"mc_plugin_npm_name")&&(this.mc_plugin_npm_name=r.mc_plugin_npm_name),this.hasIncidents=!1,this.initialValues={},this.userDefinedInitialValues=i.initialValues||{},this.pureInitialValues=null,this.autoGenerated=!1,this.onInitialise(i,r)},d:[{kind:"get",key:"selector",value:function(){return this.props.selector}},{kind:"get",key:"animAttributes",value:function(){return this.attrs.animatedAttrs}},{kind:"set",key:"animAttributes",value:function(t){this.attrs.animatedAttrs[this.attributeKey]=t}},{kind:"method",key:"getScratchValue",value:function(){return 0}},{kind:"get",key:"element",value:function(){return null===this.contex?[]:this.context.getElementByMCID?this.context.getElementByMCID(this.mcid):this.context.getElements(this.selector)[0]}},{kind:"get",key:"attributeKey",value:function(){return Object.keys(this.attrs.animatedAttrs)[0]}},{kind:"get",key:"targetValue",value:function(){return this.animAttributes[this.attributeKey]}},{kind:"method",key:"getElementAttribute",value:function(t){return this.element.getAttribute(t)}},{kind:"method",decorators:[se],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"hasUserDefinedInitialValue",value:function(){return!!Object.prototype.hasOwnProperty.call(this.userDefinedInitialValues,this.attributeKey)}},{kind:"method",key:"setInitialValue",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(n&&(this.pureInitialValues=JSON.parse(JSON.stringify(t))),this.hasUserDefinedInitialValue())if("object"===e(this.targetValue)){for(var i in this.userDefinedInitialValues[this.attributeKey])t[i]=this.userDefinedInitialValues[this.attributeKey][i];this.initialValues[this.attributeKey]=t}else this.initialValues[this.attributeKey]=this.userDefinedInitialValues[this.attributeKey];else this.initialValues[this.attributeKey]=t}},{kind:"get",key:"initialValue",value:function(){return this.initialValues[this.attributeKey]}},{kind:"method",key:"getInitialValue",value:function(){return this.initialValues[this.attributeKey]}},{kind:"method",key:"_onGetContextOnce",value:function(){try{if(!0===this.context.fragment)return;this.gotContext||(this.onGetContext(),this.gotContext=!0)}catch(t){console.log(t),console.log(this.mcid)}}},{kind:"method",key:"onGetContext",value:function(){Vt.info('Overwritte the "onGetContext" method with the code you want to get executed',"info")}},{kind:"method",key:"lastWish",value:function(){}},{kind:"method",key:"onInitialise",value:function(){Vt.info('Overwritte the "onInialise" method with the code you want to get executed',"info")}},{kind:"method",key:"onProgress",value:function(t,e){}},{kind:"method",decorators:[Wt],key:"setBlock",value:function(){}},{kind:"method",decorators:[Ut],key:"unblock",value:function(){}}]}})),le=function(t){u(i,t);var e=f(i);function i(t,r,o){var a;return n(this,i),(a=e.call(this,t,r,o)).runTimeInfo={currentMillisecond:0},a}return r(i,[{key:"lastWish",value:function(){this.ownClip&&this.ownClip.ownContext.unmount()}},{key:"onGetContext",value:function(){var t=this,e=this.DescriptiveIncident.realClip.exportConstructionArguments(),n=Vt.getElementByMCID(this.context,this.mcid),i=s({},e.props,{selector:void 0,host:n,containerParams:this.DescriptiveIncident.props.containerParams||{},originalDims:this.DescriptiveIncident.constructor.originalDims||{}});this.ownClip=new this.DescriptiveIncident.constructor.Incident(e.attrs,i),this.ownClip.DescriptiveIncident=this.DescriptiveIncident,this.DescriptiveIncident.realClip.addContext({clipId:this.id,context:this.ownClip.ownContext,unblock:function(){return t.unblock()}},!0)}},{key:"onProgress",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!1!==this.DescriptiveIncident.realClip.context.contextLoaded){for(var i in this.DescriptiveIncident.realClip.instantiatedChannels){var r=this.DescriptiveIncident.realClip.instantiatedChannels[i];r.moveTo(this.runTimeInfo.currentMillisecond,e,this.id,n)}this.runTimeInfo.currentMillisecond=e,this.ownClip.onAfterProgress(t,e)}else this.setBlock()}},{key:"duration",get:function(){return this.DescriptiveIncident.realClip.duration},set:function(t){this.DescriptiveIncident.realClip._resize(t/this.realClip.duration)}}]),i}(ue);function ce(t){Object.prototype.hasOwnProperty.call(t,"dnaExtras")||(t.dnaExtras={});var e=new t.Incident(t.attrs,s({},t.props,{id:t.id||St()}),s({},t.dnaExtras,{context:t.context,mcid:t.mcid}));return e.mc_plugin_npm_name=t.plugin_npm_name,e.plugin_channel_class=t.Channel,e.DescriptiveIncident=t.DescriptiveIncident,e}var de={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0==t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1==t?1:1*(1-Math.pow(2,-10*t/1))},easeInOutExpo:function(t){return 0==t?0:1==t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,i=1;return 0==t?0:1==(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n))},easeOutElastic:function(t){var e=1.70158,n=0,i=1;return 0==t?0:1==(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,i=1;return 0==t?0:2==(t/=.5)?1:(n||(n=.3*1.5*1),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),t<1?i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)*-.5:i*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-de.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?7.5625*t*t*1:t<2/2.75?1*(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return t<.5?.5*de.easeInBounce(2*t):.5*de.easeOutBounce(2*t-1)+.5}},he=I(null,(function(t,e){return{F:function(e){u(r,e);var i=f(r);function r(e,o,a,s){var u;return n(this,r),u=i.call(this,{id:"".concat(e.incidentId,"_").concat(a)}),t(h(u)),u.contexts={},u.constructionIngredients=e,u.mcid=a,u._duration=s.realClip.duration,u.DescriptiveIncident=s,u.mc_plugin_npm_name=e.plugin_npm_name,u.plugin_channel_class=e.Channel,u.addContext(o),s.realClip.subscribeToDurationChange((function(t){u._duration=t,u.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:Lt})})),u.easing=de.linear,Object.prototype.hasOwnProperty.call(u.DescriptiveIncident.props,"easing")&&(Array.isArray(u.DescriptiveIncident.props.easing)?u.easing=ae(u.DescriptiveIncident.props.easing[0],u.DescriptiveIncident.props.easing[1],u.DescriptiveIncident.props.easing[2],u.DescriptiveIncident.props.easing[3]):u.easing=de[u.DescriptiveIncident.props.easing]),u}return r}(e),d:[{kind:"get",key:"originalContext",value:function(){return this.contexts[this.originalContextKey]}},{kind:"get",key:"duration",value:function(){return this._duration}},{kind:"method",key:"onProgress",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=this.easing(t)||0,o=r*this.duration;!1!==this.originalContext.context.contextLoaded&&this.contexts[n].onProgress(r,o,i)}},{kind:"method",key:"addContext",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];0===Object.keys(this.contexts).length&&(this.originalContextKey=t.clipId);var n=s({},this.constructionIngredients,{context:t.context,mcid:this.mcid,Incident:le,DescriptiveIncident:this.DescriptiveIncident});this.contexts[t.clipId]=ce(n),e&&this.contexts[t.clipId]._onGetContextOnce()}},{kind:"method",key:"handleAddContext",value:function(t,e){return this.addContext(e,!0),!0}},{kind:"method",key:"handleContextLoaded",value:function(t,e){this._onGetContextOnce()}},{kind:"method",decorators:[se],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"gotContext",value:function(){for(var t in this.contexts)this.contexts[t].gotContext()}},{kind:"method",key:"_onGetContextOnce",value:function(){if(!1!==this.originalContext.contextLoaded)for(var t in this.contexts)this.contexts[t]._onGetContextOnce()}},{kind:"method",key:"lastWish",value:function(){for(var t in this.contexts)this.contexts[t].lastWish()}},{kind:"method",key:"onGetContext",value:function(){if(!1!==this.originalContext.contextLoaded)for(var t in this.contexts)this.contexts[t].onGetContext()}}]}}),Gt),pe=I(null,(function(t,i){var r=function(i){u(o,i);var r=f(o);function o(i,a,u,l){var c;return n(this,o),c=r.call(this,s({},i.props,{id:null!==l?"".concat(i.incidentId,"_").concat(u,"_").concat(l):"".concat(i.incidentId,"_").concat(u)})),t(h(c)),c.contexts={},c.constructionIngredients=i,c.mcid=u,c.attribute=l,c.mc_plugin_npm_name=i.plugin_npm_name,c.plugin_channel_class=i.Channel,c.DescriptiveIncident=i.DescriptiveIncident,c.addContext(a),null!==l&&("object"===e(c.constructionIngredients.attrs.animatedAttrs[c.attribute])?c.originalAnimatedAttributeValue=s({},c.constructionIngredients.attrs.animatedAttrs[c.attribute]):c.originalAnimatedAttributeValue=c.constructionIngredients.attrs.animatedAttrs[c.attribute]),c.easing=de.linear,Object.prototype.hasOwnProperty.call(c.props,"easing")&&(Array.isArray(c.props.easing)?c.easing=ae(c.props.easing[0],c.props.easing[1],c.props.easing[2],c.props.easing[3]):c.easing=de[c.props.easing]),c}return o}(i);return{F:r,d:[{kind:"get",key:"originalContext",value:function(){return this.contexts[this.originalContextKey]}},{kind:"get",key:"duration",value:function(){return y(l(r.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(t){for(var e in function(t,e,n,i,r){if(!m(t,e,n,i||t)&&r)throw new Error("failed to set property")}(l(r.prototype),"duration",t,this,!0),this.contexts)this.contexts[e].duration=t}},{kind:"method",key:"addContext",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!1;0===Object.keys(this.contexts).length&&(this.originalContextKey=t.clipId,this.originalClipContext=t.context,n=!0);var i=s({},this.constructionIngredients,{context:t.context,mcid:this.mcid}),r=ce(i);this.contexts[t.clipId]=r,n||null===this.attribute||this.contexts[t.clipId].setInitialValue(this.getInitialValue()),e&&this.contexts[t.clipId]._onGetContextOnce()}},{kind:"method",key:"handleAddContext",value:function(t,e){return this.addContext(e,!0),!0}},{kind:"method",key:"handleContextLoaded",value:function(t,e){return this._onGetContextOnce(),!0}},{kind:"method",decorators:[se],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"onProgress",value:function(t,e,n){var i=e%(this.delay+this.props.duration+this.hiatus);0!==e&&0===i&&(i=this.delay+this.props.duration);var r=i-this.delay;r<0?r=0:r>this.props.duration&&(r=this.props.duration);var o=r/this.props.duration,a=this.easing(o),s=a*this.props.duration;if(void 0!==n)!1!==this.originalContext.context.contextLoaded&&this.contexts[n].onProgress(a,s);else for(var u in this.contexts)this.originalContextKey===u&&!0===this.originalContext.fragment||this.contexts[u].onProgress(a,s)}},{kind:"get",key:"animatedAttributeValue",value:function(){return this.constructionIngredients.attrs.animatedAttrs[this.attribute]}},{kind:"set",key:"animatedAttributeValue",value:function(t){this.constructionIngredients.attrs.animatedAttrs[this.attribute]=t}},{kind:"method",key:"gotContext",value:function(){for(var t in this.contexts)this.contexts[t].gotContext()}},{kind:"method",key:"_onGetContextOnce",value:function(){if(!1!==this.originalContext.context.contextLoaded)for(var t in this.contexts)this.contexts[t]._onGetContextOnce()}},{kind:"method",key:"lastWish",value:function(){for(var t in this.contexts)this.contexts[t].lastWish()}},{kind:"method",key:"onGetContext",value:function(){if(!1!==this.originalContext.contextLoaded)for(var t in this.contexts)this.contexts[t].onGetContext()}},{kind:"method",key:"getInitialValue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t&&(t=this.attribute),this.originalContext.getInitialValue()}},{kind:"get",key:"initialValue",value:function(){return this.getInitialValue()}},{kind:"get",key:"scratchValue",value:function(){return this.originalContext.scratchValue}},{kind:"get",key:"pureInitialValues",value:function(){return this.originalContext.pureInitialValues}},{kind:"method",key:"setInitialValue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];for(var n in null===t&&(t=this.getScratchValue()),this.contexts)this.contexts[n].setInitialValue(JSON.parse(JSON.stringify(t)),e)}},{kind:"method",key:"getScratchValue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!1===this.originalContext.context.contextLoaded)return 0;if(null===t){var e=Object.keys(this.contexts);if(Object.prototype.hasOwnProperty.call(this.originalClipContext,"nonFragmentedContext")){var n=s({},this.constructionIngredients,{context:this.originalClipContext.nonFragmentedContext,mcid:this.mcid}),i=ce(n);return i.getScratchValue()}return 1===e.length?this.originalContext.getScratchValue():this.contexts[e[1]].getScratchValue()}return this.contexts[t].getScratchValue()}},{kind:"method",key:"setCompoAttrKeyValue",value:function(t,e){for(var n in this.contexts)this.contexts[n].attrs.animatedAttrs[this.attribute][t]=e,this.contexts[n].lastWish(),this.contexts[n].onGetContext()}},{kind:"method",key:"play",value:function(t,e,n){return this.contexts[n].play(e)}},{kind:"method",key:"stop",value:function(t){this.contexts[t].stop()}}]}}),Gt),fe=function(t){u(i,t);var e=f(i);function i(t,r,o,a){var s;return n(this,i),(s=e.call(this,{},{id:"".concat(t.id,"_").concat(o)})).mcid=o,s.selector=a,s.setUp(t,r),s}return r(i,[{key:"setUp",value:function(t,e){for(var n in t.attrs.animatedAttrs){var i={};i[n]=t.attrs.animatedAttrs[n];var r=s({},t.attrs,{animatedAttrs:i}),o=s({},t.props,{selector:this.selector}),a={incidentId:t.id,attrs:r,props:o,Incident:t.constructor.Incident,plugin_npm_name:t.constructor.plugin_npm_name,Channel:t.constructor.Channel,DescriptiveIncident:t},u=new pe(a,e,this.mcid,n);this.addChild(u,0)}}}]),i}(Ht),ve=function(t){u(i,t);var e=f(i);function i(t,r){var o;return n(this,i),(o=e.call(this,{},{id:t.id})).contexts={},o.contexts[r.clipId]=r.context,o.originalContextKey=r.clipId,o.instantiatedCopiesContexts=r.instantiatedCopiesContexts,o.setUp(t,r),o}return r(i,[{key:"setUp",value:function(t,e){for(var n,i,r=this.originalContext.getElements(t.selector()),o=r.length,a=0;a<o;a++){for(var s in n=r[a],i=this._getElementMCID(n),this.instantiatedCopiesContexts)this._setElementMCID(this.instantiatedCopiesContexts[s],this.instantiatedCopiesContexts[s].getElements(t.selector())[a],i);this._createElementIncident(n,t,e,a,o,i)}}},{key:"_getElementMCID",value:function(t){var e=this.originalContext.getMCID(t);return e||(e=St(!0),this.originalContext.setMCID(t,e)),e}},{key:"_setElementMCID",value:function(t,e,n){t.getMCID(e)||t.setMCID(e,n)}},{key:"_createElementIncident",value:function(t,e,n,i,r,o){if(Object.prototype.hasOwnProperty.call(e.attrs,"animatedAttrs")){var a=new fe(e,n,o,n.context.getElementSelectorByMCID(o));this.addChild(a,0)}else if(Object.prototype.hasOwnProperty.call(e.attrs,"keyframes"));else{var u=e.attrs,l=s({},e.props,{selector:this.selector}),c={incidentId:e.id,attrs:u,props:l,Incident:e.constructor.Incident,plugin_npm_name:e.constructor.plugin_npm_name,Channel:e.constructor.Channel,DescriptiveIncident:e},d=new pe(c,n,o,null);this.addChild(d,0)}}},{key:"originalContext",get:function(){return this.contexts[this.originalContextKey]}}]),i}(Ht),ye=function(t){u(i,t);var e=f(i);function i(t,r){var o;return n(this,i),(o=e.call(this,t,r)).realClip=t.realClip,o}return r(i,[{key:"_createElementIncident",value:function(t,e,n,i,r,o){var a=e.realClip.exportConstructionArguments(),u={incidentId:e.id,attrs:a.attrs,props:s({},a.props,{selector:n.context.getElementSelectorByMCID(o),runTimeInfo:e.runTimeInfo}),Incident:e.constructor.Incident,plugin_npm_name:e.constructor.plugin_npm_name,Channel:Zt,DescriptiveIncident:e},l=new he(u,n,o,e);this.addChild(l,0)}},{key:"duration",get:function(){return y(l(i.prototype),"duration",this)},set:function(t){this.realClip._resize(t/this.realClip.duration),this._duration=t}}]),i}(ve);function me(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(i&&"off"===t.audio||!i&&"only"===t.audio)return null;if(Object.prototype.hasOwnProperty.call(t.props,"selector")&&(!i&&"~"===t.props.selector.charAt(0)||i&&"~"!==t.props.selector.charAt(0)&&!t.constructor.isClip))return null;if(t.constructor.isClip){if(!Object.prototype.hasOwnProperty.call(t.props,"selector")||i)return i?t.audioClip:t.realClip;(n=new ye(t,e)).plugin_channel_class=Nt}else if(t.constructor.isGroup)for(var r in n=ce({id:t.id,attrs:t.attrs,props:t.props,Incident:t.constructor.Incident,plugin_npm_name:t.constructor.plugin_npm_name,Channel:t.constructor.Channel,DescriptiveIncident:t}),t.children){var o=me(t.children[r].leaf,e);null!==o&&n.addChild(o,t.children[r].position)}else n=new ve(t,e);return n}var ge=function(t){u(i,t);var e=f(i);function i(t,r){var o;return n(this,i),(o=e.call(this,t,r)).attrs=t,o.props=r,o.isTheClip=!0,o.blockingWaitings={},o.instantiatedChannels={},o.isHostedClip=!0,o.instantiatedCopiesContexts={},o.instantiatedCopiesUnblockingMethods=[],o.onClipInitialise(),o.runTimeInfo=o.props.runTimeInfo,o.durationSubs=[],o.audioClip=!1,o}return r(i,[{key:"onClipInitialise",value:function(){}},{key:"contextLoading",value:function(){this.context.contextLoaded=!1}},{key:"contextLoaded",value:function(){for(var t in this.context.contextLoaded=!0,this.putMessageOnPipe("contextLoaded",{},{},{selfExecute:!1,direction:Rt}),this.instantiatedChannels)this.instantiatedChannels[t].recalcScratchValues();for(var e=0;e<this.instantiatedCopiesUnblockingMethods.length;e++)this.instantiatedCopiesUnblockingMethods[e]();this.unblock()}},{key:"getElements",value:function(t){if(null!==this.props.host&&void 0!==this.props.host)return this.context.getElements(t);var e=[];for(var n in this.instantiatedCopiesContexts)for(var i=this.instantiatedCopiesContexts[n].getElements(t),r=0;r<i.length;r++)e.push(i[r]);return e}},{key:"addContext",value:function(t){this.instantiatedCopiesContexts[t.clipId]=t.context,t.instantiatedCopiesContexts=this.instantiatedCopiesContexts,this.instantiatedCopiesUnblockingMethods.push(t.unblock);var e=this.putMessageOnPipe("addContext",t,{},{selfExecute:!1,direction:Rt});if(1===Object.keys(this.instantiatedCopiesContexts).length){for(var n in this.instantiatedChannels)this.instantiatedChannels[n].recalcScratchValues(t.clipId);this.context.nonFragmentedContext=t.context}return e}},{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:this.props}}},{key:"_resize",value:function(t){for(var e in this.instantiatedChannels)this.instantiatedChannels[e]._resize(t);this.setNewDuration(this.duration*t);for(var n=0;n<this.durationSubs.length;n++)this.durationSubs[n](this.duration)}},{key:"addIncident",value:function(t){for(var e=this,n=this.putMessageOnPipe("addIncident",{incident:t.incident,millisecond:t.millisecond,parentGroupId:t.parentGroupId,incidentFromDescription:me,contextData:{clipId:this.id,context:this.context,instantiatedCopiesContexts:this.instantiatedCopiesContexts},audio:this.audioClip},t.parentGroupId,{selfExecute:!0,direction:Rt}),i={},r=0;r<n.length;r++){var o=n[r].response.getIncidentsByChannel(n[r].positionDelta+t.millisecond);for(var a in o){var s;Object.prototype.hasOwnProperty.call(i,a)||(i[a]=[]),(s=i[a]).push.apply(s,b(o[a]))}}var u=this.checkAddition(i);if(u.result){return{result:!0,execute:function(){u.execute();for(var i=0;i<n.length;i++)for(var r in n[i].responder.addChild(n[i].response,t.millisecond),n[i].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:Lt}),e.instantiatedCopiesContexts)n[i].responder.putMessageOnPipe("addContext",{clipId:r,context:e.instantiatedCopiesContexts[r]},"ContextAwareIncidents",{selfExecute:!1,direction:Rt})}}}return u}},{key:"checkAddition",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all-or-nothing",n=!0,i=[],r=[];for(var o in t){Object.prototype.hasOwnProperty.call(this.instantiatedChannels,o)||(this.instantiatedChannels[o]=new t[o][0].incident.plugin_channel_class({runTimeInfo:this.runTimeInfo,context:this.context,subscribe:this.props.subscribe}));var a=this.instantiatedChannels[o].addIncidents(t[o],e);n=n&&a.result,a.result?r.push(a.execute):i=i.concat(a.errors)}var s=function(){for(var t=0;t<r.length;t++)r[t]()},u={result:n,errors:i,execute:s};return u}},{key:"moveIncident",value:function(t){for(var e=this.putMessageOnPipe("moveIncident",{incidentId:t.id,millisecond:t.millisecond,parentGroupId:t.parentGroupId,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},t.parentGroupId,{selfExecute:!0,direction:Rt}),n={},i=0;i<e.length;i++){var r=e[i].response.getIncidentsByChannel(e[i].positionDelta+t.millisecond);for(var o in r){var a;Object.prototype.hasOwnProperty.call(n,o)||(n[o]=[]),(a=n[o]).push.apply(a,b(r[o]))}}var s=this.checkMove(n,t.positionDelta);if(s.result){return{result:!0,execute:function(){s.execute();for(var n=0;n<e.length;n++)e[n].responder.editPosition(e[n].response.id,t.millisecond),e[n].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:Lt})}}}return s}},{key:"checkMove",value:function(t,e){var n=!0,i=[],r=[];for(var o in t){var a=this.instantiatedChannels[o].editIncidents(t[o],e);n=n&&a.result,a.result?r.push(a.execute):i=i.concat(a.errors)}return{result:n,errors:i,execute:function(){for(var t=0;t<r.length;t++)r[t]()}}}},{key:"removeIncident",value:function(t){for(var e=this.putMessageOnPipe("removeIncident",{incidentId:t.id,parentGroupId:t.parentGroupId,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},t.parentGroupId,{selfExecute:!0,direction:Rt}),n={},i=0;i<e.length;i++){var r=e[i].response.getIncidentsByChannel();for(var o in r){var a;Object.prototype.hasOwnProperty.call(n,o)||(n[o]=[]),(a=n[o]).push.apply(a,b(r[o]))}}var s=this.checkDelete(n);if(s.result){return{result:!0,execute:function(){s.execute();for(var t=0;t<e.length;t++)e[t].responder.removeChild(e[t].response.id),e[t].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:Lt})}}}return s}},{key:"checkDelete",value:function(t){var e=!0,n=[],i=[];for(var r in t){var o=this.instantiatedChannels[r].removeIncidents(t[r]);e=e&&o.result,o.result?i.push(o.execute):n=n.concat(o.errors)}return{result:e,errors:n,execute:function(){for(var t=0;t<i.length;t++)i[t]()}}}},{key:"resizeIncident",value:function(t){for(var e=this.putMessageOnPipe("resize",{incidentId:t.id,newSize:t.newSize,fraction:t.fraction,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},t.id,{selfExecute:!1,direction:Rt}),n={},i=0;i<e.length;i++){var r=e[i].response.getIncidentsByChannel(e[i].positionDelta);for(var o in r){var a;Object.prototype.hasOwnProperty.call(n,o)||(n[o]=[]),(a=n[o]).push.apply(a,b(r[o]))}}var s=0;e.length>0&&(s=e[0].positionDelta);var u=this.checkResize(t.fraction,n,s);if(u.result){return{result:!0,execute:function(){u.execute();for(var n=0;n<e.length;n++)e[n].responder.setNewDuration(t.newSize)}}}return u}},{key:"checkResize",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=!0,r=[],o=[];for(var a in e){var s=Vt.systoleDiastoleProjections(e[a],t,n),u=this.instantiatedChannels[a].checkResizedIncidents(s);i=i&&u.result,u.result?o.push(u.execute):r=r.concat(u.errors)}var l=function(){for(var t=0;t<o.length;t++)o[t]()},c={result:i,errors:r,execute:l};return c}},{key:"getIncidentsByChannel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e={};return e["@kissmybutton/self-contained-incidents"]=[{millisecond:t,incident:this,id:this.id}],e}},{key:"setVolume",value:function(t){this.volume=parseFloat(t)}},{key:"_onGetContextOnce",value:function(t){}},{key:"handleRecalcDuration",value:function(t,e){if(this._calculateDuration())for(var n=0;n<this.durationSubs.length;n++)this.durationSubs[n](this.duration);return!0}},{key:"onProgress",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!1!==this.contextReady){for(var r in n||(n=this.id),this.instantiatedChannels){var o=this.instantiatedChannels[r];o.moveTo(this.runTimeInfo.currentMillisecond,e,n,i)}this.onAfterProgress(t,e)}else this.setBlock()}},{key:"onAfterProgress",value:function(t,e){}},{key:"flash",value:function(){for(var t in this.instantiatedChannels){this.instantiatedChannels[t].moveTo(0,this.runTimeInfo.currentMillisecond,this.id,!0)}}},{key:"subscribeToDurationChange",value:function(t){this.durationSubs.push(t)}},{key:"handleSetBlockingWaiting",value:function(t,e){}},{key:"handleRemoveBlockingWaiting",value:function(t,e){}},{key:"contextReady",get:function(){return this.context.contextLoaded}},{key:"context",get:function(){return this.ownContext}}]),i}(Ht),be=function(){function t(){n(this,t),this.output=xt.createGain(),this.gainNode=xt.createGain(),xt.createStereoPanner&&(this.pannerNode=xt.createStereoPanner()),xt.createStereoPanner?(this.pannerNode.connect(this.gainNode),this.gainNode.connect(this.output),this.input=this.pannerNode):(this.gainNode.connect(this.output),this.input=this.gainNode)}return r(t,[{key:"connect",value:function(t){this.output.connect(t)}},{key:"disconnect",value:function(){this.output.disconnect()}}]),t}();function ke(t){for(var e=window.atob(t),n=e.length,i=new Uint8Array(n),r=0;r<n;r++)i[r]=e.charCodeAt(r);return i.buffer}var _e=/\[data(-mcid="+\w+")+\]/g,xe=function(){function t(){n(this,t),this.subscribers=[]}return r(t,[{key:"sub",value:function(t,e){this.subscribers.push(e)}},{key:"pub",value:function(t){for(var e=0;e<this.subscribers.length;e++)this.subscribers[e](t)}}]),t}(),we=function(){function t(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;n(this,t),this.totalSources=i.length,this.audioSources={},this.elementsByMCID={};for(var o=function(t){var n=i[t],o={mcid:n.mcid||St(),id:n.id,src:n.src,classes:n.classes||[],base64:n.base64||!1,pubSub:new xe,soundLoaded:!1,startValues:n.startValues||{}};if(e.audioSources[o.id]=o,e.elementsByMCID[o.mcid]=o,n.base64)xt.decodeAudioData(ke(n.src),(function(t){e._setBuffer(o,t,r)}));else{var a=new XMLHttpRequest;a.open("GET",o.src,!0),a.responseType="arraybuffer",e.soundLoaded=!1,a.onload=function(){xt.decodeAudioData(a.response,(function(t){e._setBuffer(o,t,r)}),e.onError)},a.send()}},a=0;a<i.length;a++)o(a);this.context={document:document,window:window,rootElement:document.body,unmount:function(){},masterNode:r,audioContext:xt,getElements:this.getElements.bind(this),getMCID:this.getMCID.bind(this),setMCID:this.setMCID.bind(this),getElementSelectorByMCID:this.getElementSelectorByMCID.bind(this),getElementByMCID:this.getElementByMCID.bind(this)}}return r(t,[{key:"_setBuffer",value:function(t,e,n){t.soundLoaded=!0,t.buffer=e,t.effectsAudioNode=new be,t.effectsAudioNode.connect(n.input),t.pubSub.pub()}},{key:"getElementByMCID",value:function(t){return Object.prototype.hasOwnProperty.call(this.elementsByMCID,t)?this.elementsByMCID[t]:null}},{key:"getElements",value:function(t){if("~"!==t.charAt(0)){if(_e.exec(t)){var e=t.split('"')[1];return this.elementsByMCID[e]}return[]}if("#"===(t=t.substr(1)).charAt(0))return Object.prototype.hasOwnProperty.call(this.audioSources,t.substr(1))?[this.audioSources[t.substr(1)]]:[];if("."===t.charAt(0)){var n=t.substr(1),i=[];for(var r in this.audioSources)r.classes.indexOf(n)>=0&&i.push(r);return i}}},{key:"getMCID",value:function(t){return t.mcid}},{key:"setMCID",value:function(t,e){t.mcid=e}},{key:"getElementSelectorByMCID",value:function(t){return'[data-mcid="'.concat(t,'"]')}}]),t}(),Ie=function(t){u(i,t);var e=f(i);function i(t,r){var o;n(this,i),(o=e.call(this,t,r)).audioNode=new be,o.audioNode.connect(xt.destination);var a=new we(o.props.audioSources,o.audioNode);return o.ownContext=s({},a.context,{isHostedClip:!0,contextLoaded:!0}),o.audioClip=!0,o}return r(i,[{key:"onProgress",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];y(l(i.prototype),"onProgress",this).call(this,t,e,this.id,r)}},{key:"_onGetContextOnce",value:function(t){this.audioNode.disconnect(),this.parentClipContext=t,this.audioNode.connect(t.masterNode.input)}},{key:"lastWish",value:function(){this.audioNode.output.disconnect(),this.audioNode.output.connect(xt.destination)}},{key:"setVolume",value:function(t){this.audioNode.output.gain.value=t}}]),i}(ge),Ce=function(t){u(i,t);var e=f(i);function i(){return n(this,i),e.apply(this,arguments)}return r(i,[{key:"onProgress",value:function(t){var e=this;if(!this.element.soundLoaded)return this.setBlock("loading sound"),this.element.pubSub.sub(this.id,(function(){e.unblock()})),!1;if("gain"===this.attributeKey){var n=(this.targetValue-this.getInitialValue())*t+this.getInitialValue();this.element.effectsAudioNode.gainNode.gain.value=n}else if("pan"===this.attributeKey){var i=(this.targetValue-this.getInitialValue())*t+this.getInitialValue();this.element.effectsAudioNode.pannerNode.pan.value=i}}},{key:"getScratchValue",value:function(){return"pan"===this.attributeKey?Object.prototype.hasOwnProperty.call(this.element.startValues,"pan")?this.element.startValues.pan:0:"gain"===this.attributeKey?Object.prototype.hasOwnProperty.call(this.element.startValues,"gain")?this.element.startValues.gain:1:void 0}}]),i}(ue),Oe=function(t){u(i,t);var e=f(i);function i(t){var r;return n(this,i),(r=e.call(this,t)).playingIncidentsIds=[],r.transitioned=!1,t.subscribe(St(),r._stateChange.bind(h(r)),0,1,!0),r}return r(i,[{key:"_stateChange",value:function(t,e){"paused"!==e&&"idle"!==e&&"blocked"!==e||(this._stopPlayingIncidents(),this.transitioned=!0)}},{key:"_stopPlayingIncidents",value:function(){for(var t=0;t<this.playingIncidentsIds.length;t++){var e=this.playingIncidentsIds[t].split("|||");this._incidentById(e[0]).stop(e[1])}this.playingIncidentsIds=[]}},{key:"moveTo",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("transitional"===this.runTimeInfo.state||i){this.transitioned=!0,this._stopPlayingIncidents();for(var r=0;r<this.incidents.length;r++){var o=this.incidents[r],a=this._incidentById(o.id);e<o.millisecond?a.onProgress(0,0,n,!0):e>o.millisecond+a.duration?a.onProgress(1,a.duration,n,!0):a.onProgress((e-o.millisecond)/a.duration,e-o.millisecond,n,!0)}}else{this.transitioned&&(t=0,this.transitioned=!1);for(var s=this,u=Qt(this.incidents,(function(n){return n.millisecond>=t&&n.millisecond<e&&n.millisecond+s._incidentById(n.id).duration>e})),l=Qt(this.incidents,(function(n){return s._incidentById(n.id).duration+n.millisecond>t&&s._incidentById(n.id).duration+n.millisecond<=e})),c=0;c<u.length;c++){var d=u[c],h=this._incidentById(d.id),p=(e-d.millisecond)/h.duration>=1,f=p?1:(e-d.millisecond)/h.duration,v=p?h.duration:e-d.millisecond,y=h.play(f,v,n);!0===y&&this.playingIncidentsIds.push("".concat(d.id).concat("|||").concat(n))}for(var m=0;m<l.length;m++){var g=l[m],b=this._incidentById(g.id);b.stop(n);var k=this.playingIncidentsIds.indexOf("".concat(g.id).concat("|||").concat(n));k>-1&&this.playingIncidentsIds.splice(k,1)}this.runTimeInfo.currentMillisecond=e}}}]),i}(Zt),je=I(null,(function(t){return{F:function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;n(this,e),t(this),this.attrs=i,this.props=r,this.dna=o,this.context=o.context,this.mcid=o.mcid,this.id=r.id||St(),this.modelId=r.modelId,this.gotContext=!1,this.plugin_channel_class=Oe,this.mc_plugin_npm_name="motor-cortex-js-media-playback",Object.prototype.hasOwnProperty.call(r,"plugin_channel_class")&&(this.plugin_channel_class=r.plugin_channel_class),Object.prototype.hasOwnProperty.call(r,"mc_plugin_npm_name")&&(this.mc_plugin_npm_name=r.mc_plugin_npm_name),this.hasIncidents=!1,this.autoGenerated=!1,this.onInitialise(i,r)},d:[{kind:"get",key:"selector",value:function(){return this.props.selector}},{kind:"get",key:"element",value:function(){return this.context.getElementByMCID(this.mcid)}},{kind:"method",decorators:[se],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"_onGetContextOnce",value:function(){try{if(!0===this.context.fragment)return;this.gotContext||(this.onGetContext(),this.gotContext=!0)}catch(t){console.log(t),console.log(this.mcid)}}},{kind:"method",key:"onGetContext",value:function(){Vt.info('Overwritte the "onGetContext" method with the code you want to get executed',"info")}},{kind:"method",key:"lastWish",value:function(){}},{kind:"method",key:"onInitialise",value:function(){Vt.info('Overwritte the "onInialise" method with the code you want to get executed',"info")}},{kind:"method",key:"onProgress",value:function(t,e){}},{kind:"method",key:"play",value:function(t){return!0}},{kind:"method",key:"stop",value:function(){}},{kind:"method",decorators:[Wt],key:"setBlock",value:function(){}},{kind:"method",decorators:[Ut],key:"unblock",value:function(){}}]}})),Pe={npm_name:"@kissmybutton/motorcortex-soundsystem",incidents:[{exportable:function(t){u(i,t);var e=f(i);function i(){return n(this,i),e.apply(this,arguments)}return r(i,[{key:"play",value:function(t){var e=this;if(!this.element.soundLoaded)return this.setBlock("loading sound"),this.element.pubSub.sub(this.id,(function(){e.unblock()})),!1;var n=0;return Object.prototype.hasOwnProperty.call(this.props,"startFrom")&&(n=this.props.startFrom),this.audioNode=xt.createBufferSource(),this.audioNode.buffer=this.element.buffer,this.audioNode.connect(this.element.effectsAudioNode.input),this.audioNode.start(0,(t+n)/1e3),!0}},{key:"stop",value:function(){this.audioNode.stop()}}]),i}(je),name:"AudioPlayback"},{exportable:Ce,name:"AudioEffect"}],Clip:{exportable:Ie},audio:"only"},Ee=ct((function(t,e){var n="[object Arguments]",i="[object Map]",r="[object Object]",o="[object Set]",a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/,u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,l=/^\s+|\s+$/g,c=/\\(\\)?/g,d=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,p=/^\[object .+?Constructor\]$/,f=/^0o[0-7]+$/i,v=/^(?:0|[1-9]\d*)$/,y={};y["[object Float32Array]"]=y["[object Float64Array]"]=y["[object Int8Array]"]=y["[object Int16Array]"]=y["[object Int32Array]"]=y["[object Uint8Array]"]=y["[object Uint8ClampedArray]"]=y["[object Uint16Array]"]=y["[object Uint32Array]"]=!0,y[n]=y["[object Array]"]=y["[object ArrayBuffer]"]=y["[object Boolean]"]=y["[object DataView]"]=y["[object Date]"]=y["[object Error]"]=y["[object Function]"]=y[i]=y["[object Number]"]=y[r]=y["[object RegExp]"]=y[o]=y["[object String]"]=y["[object WeakMap]"]=!1;var m=parseInt,g="object"==typeof ut&&ut&&ut.Object===Object&&ut,b="object"==typeof self&&self&&self.Object===Object&&self,k=g||b||Function("return this")(),_=e&&!e.nodeType&&e,x=_&&t&&!t.nodeType&&t,w=x&&x.exports===_,I=w&&g.process,C=function(){try{return I&&I.binding&&I.binding("util")}catch(t){}}(),O=C&&C.isTypedArray;function j(t,e){for(var n=-1,i=null==t?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1}function P(t){var e=-1,n=Array(t.size);return t.forEach((function(t,i){n[++e]=[i,t]})),n}function E(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var A,D,S,M=Array.prototype,T=Function.prototype,B=Object.prototype,V=k["__core-js_shared__"],$=T.toString,N=B.hasOwnProperty,z=(A=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"",L=B.toString,R=RegExp("^"+$.call(N).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),F=w?k.Buffer:void 0,G=k.Symbol,q=k.Uint8Array,K=B.propertyIsEnumerable,W=M.splice,J=G?G.toStringTag:void 0,U=Object.getOwnPropertySymbols,H=F?F.isBuffer:void 0,Q=(D=Object.keys,S=Object,function(t){return D(S(t))}),X=Math.max,Z=Mt(k,"DataView"),Y=Mt(k,"Map"),tt=Mt(k,"Promise"),et=Mt(k,"Set"),nt=Mt(k,"WeakMap"),it=Mt(Object,"create"),rt=Ft(Z),ot=Ft(Y),at=Ft(tt),st=Ft(et),lt=Ft(nt),ct=G?G.prototype:void 0,dt=ct?ct.valueOf:void 0,ht=ct?ct.toString:void 0;function pt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function vt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function yt(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new vt;++e<n;)this.add(t[e])}function mt(t){var e=this.__data__=new ft(t);this.size=e.size}function gt(t,e){var n=Wt(t),i=!n&&Kt(t),r=!n&&!i&&Jt(t),o=!n&&!i&&!r&&Yt(t),a=n||i||r||o,s=a?function(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}(t.length,String):[],u=s.length;for(var l in t)!e&&!N.call(t,l)||a&&("length"==l||r&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Vt(l,u))||s.push(l);return s}function bt(t,e){for(var n=t.length;n--;)if(qt(t[n][0],e))return n;return-1}function kt(t,e){for(var n=0,i=(e=Et(e,t)).length;null!=t&&n<i;)t=t[Rt(e[n++])];return n&&n==i?t:void 0}function _t(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":J&&J in Object(t)?function(t){var e=N.call(t,J),n=t[J];try{t[J]=void 0;var i=!0}catch(t){}var r=L.call(t);i&&(e?t[J]=n:delete t[J]);return r}(t):function(t){return L.call(t)}(t)}function xt(t,e){return null!=t&&e in Object(t)}function wt(t){return Xt(t)&&_t(t)==n}function It(t,e,a,s,u){return t===e||(null==t||null==e||!Xt(t)&&!Xt(e)?t!=t&&e!=e:function(t,e,a,s,u,l){var c=Wt(t),d=Wt(e),h=c?"[object Array]":Bt(t),p=d?"[object Array]":Bt(e),f=(h=h==n?r:h)==r,v=(p=p==n?r:p)==r,y=h==p;if(y&&Jt(t)){if(!Jt(e))return!1;c=!0,f=!1}if(y&&!f)return l||(l=new mt),c||Yt(t)?At(t,e,a,s,u,l):function(t,e,n,r,a,s,u){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!s(new q(t),new q(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return qt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case i:var l=P;case o:var c=1&r;if(l||(l=E),t.size!=e.size&&!c)return!1;var d=u.get(t);if(d)return d==e;r|=2,u.set(t,e);var h=At(l(t),l(e),r,a,s,u);return u.delete(t),h;case"[object Symbol]":if(dt)return dt.call(t)==dt.call(e)}return!1}(t,e,h,a,s,u,l);if(!(1&a)){var m=f&&N.call(t,"__wrapped__"),g=v&&N.call(e,"__wrapped__");if(m||g){var b=m?t.value():t,k=g?e.value():e;return l||(l=new mt),u(b,k,a,s,l)}}if(!y)return!1;return l||(l=new mt),function(t,e,n,i,r,o){var a=1&n,s=Dt(t),u=s.length,l=Dt(e).length;if(u!=l&&!a)return!1;var c=u;for(;c--;){var d=s[c];if(!(a?d in e:N.call(e,d)))return!1}var h=o.get(t);if(h&&o.get(e))return h==e;var p=!0;o.set(t,e),o.set(e,t);var f=a;for(;++c<u;){d=s[c];var v=t[d],y=e[d];if(i)var m=a?i(y,v,d,e,t,o):i(v,y,d,t,e,o);if(!(void 0===m?v===y||r(v,y,n,i,o):m)){p=!1;break}f||(f="constructor"==d)}if(p&&!f){var g=t.constructor,b=e.constructor;g==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof g&&g instanceof g&&"function"==typeof b&&b instanceof b||(p=!1)}return o.delete(t),o.delete(e),p}(t,e,a,s,u,l)}(t,e,a,s,It,u))}function Ct(t){return!(!Qt(t)||function(t){return!!z&&z in t}(t))&&(Ut(t)?R:p).test(Ft(t))}function Ot(t){return"function"==typeof t?t:null==t?ee:"object"==typeof t?Wt(t)?function(t,e){if($t(t)&&Nt(e))return zt(Rt(t),e);return function(n){var i=function(t,e,n){var i=null==t?void 0:kt(t,e);return void 0===i?n:i}(n,t);return void 0===i&&i===e?function(t,e){return null!=t&&function(t,e,n){e=Et(e,t);var i=-1,r=e.length,o=!1;for(;++i<r;){var a=Rt(e[i]);if(!(o=null!=t&&n(t,a)))break;t=t[a]}if(o||++i!=r)return o;return!!(r=null==t?0:t.length)&&Ht(r)&&Vt(a,r)&&(Wt(t)||Kt(t))}(t,e,xt)}(n,t):It(e,i,3)}}(t[0],t[1]):function(t){var e=function(t){var e=te(t),n=e.length;for(;n--;){var i=e[n],r=t[i];e[n]=[i,r,Nt(r)]}return e}(t);if(1==e.length&&e[0][2])return zt(e[0][0],e[0][1]);return function(n){return n===t||function(t,e,n,i){var r=n.length,o=r,a=!i;if(null==t)return!o;for(t=Object(t);r--;){var s=n[r];if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++r<o;){var u=(s=n[r])[0],l=t[u],c=s[1];if(a&&s[2]){if(void 0===l&&!(u in t))return!1}else{var d=new mt;if(i)var h=i(l,c,u,t,e,d);if(!(void 0===h?It(c,l,3,i,d):h))return!1}}return!0}(n,t,e)}}(t):$t(e=t)?(n=Rt(e),function(t){return null==t?void 0:t[n]}):function(t){return function(e){return kt(e,t)}}(e);var e,n}function jt(t){if(n=(e=t)&&e.constructor,i="function"==typeof n&&n.prototype||B,e!==i)return Q(t);var e,n,i,r=[];for(var o in Object(t))N.call(t,o)&&"constructor"!=o&&r.push(o);return r}function Pt(t){if("string"==typeof t)return t;if(Wt(t))return function(t,e){for(var n=-1,i=null==t?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r}(t,Pt)+"";if(Zt(t))return ht?ht.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Et(t,e){return Wt(t)?t:$t(t,e)?[t]:Lt(function(t){return null==t?"":Pt(t)}(t))}function At(t,e,n,i,r,o){var a=1&n,s=t.length,u=e.length;if(s!=u&&!(a&&u>s))return!1;var l=o.get(t);if(l&&o.get(e))return l==e;var c=-1,d=!0,h=2&n?new yt:void 0;for(o.set(t,e),o.set(e,t);++c<s;){var p=t[c],f=e[c];if(i)var v=a?i(f,p,c,e,t,o):i(p,f,c,t,e,o);if(void 0!==v){if(v)continue;d=!1;break}if(h){if(!j(e,(function(t,e){if(a=e,!h.has(a)&&(p===t||r(p,t,n,i,o)))return h.push(e);var a}))){d=!1;break}}else if(p!==f&&!r(p,f,n,i,o)){d=!1;break}}return o.delete(t),o.delete(e),d}function Dt(t){return function(t,e,n){var i=e(t);return Wt(t)?i:function(t,e){for(var n=-1,i=e.length,r=t.length;++n<i;)t[r+n]=e[n];return t}(i,n(t))}(t,te,Tt)}function St(t,e){var n,i,r=t.__data__;return("string"==(i=typeof(n=e))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==n:null===n)?r["string"==typeof e?"string":"hash"]:r.map}function Mt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Ct(n)?n:void 0}pt.prototype.clear=function(){this.__data__=it?it(null):{},this.size=0},pt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},pt.prototype.get=function(t){var e=this.__data__;if(it){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return N.call(e,t)?e[t]:void 0},pt.prototype.has=function(t){var e=this.__data__;return it?void 0!==e[t]:N.call(e,t)},pt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=it&&void 0===e?"__lodash_hash_undefined__":e,this},ft.prototype.clear=function(){this.__data__=[],this.size=0},ft.prototype.delete=function(t){var e=this.__data__,n=bt(e,t);return!(n<0)&&(n==e.length-1?e.pop():W.call(e,n,1),--this.size,!0)},ft.prototype.get=function(t){var e=this.__data__,n=bt(e,t);return n<0?void 0:e[n][1]},ft.prototype.has=function(t){return bt(this.__data__,t)>-1},ft.prototype.set=function(t,e){var n=this.__data__,i=bt(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this},vt.prototype.clear=function(){this.size=0,this.__data__={hash:new pt,map:new(Y||ft),string:new pt}},vt.prototype.delete=function(t){var e=St(this,t).delete(t);return this.size-=e?1:0,e},vt.prototype.get=function(t){return St(this,t).get(t)},vt.prototype.has=function(t){return St(this,t).has(t)},vt.prototype.set=function(t,e){var n=St(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this},yt.prototype.add=yt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},yt.prototype.has=function(t){return this.__data__.has(t)},mt.prototype.clear=function(){this.__data__=new ft,this.size=0},mt.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},mt.prototype.get=function(t){return this.__data__.get(t)},mt.prototype.has=function(t){return this.__data__.has(t)},mt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof ft){var i=n.__data__;if(!Y||i.length<199)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new vt(i)}return n.set(t,e),this.size=n.size,this};var Tt=U?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,i=null==t?0:t.length,r=0,o=[];++n<i;){var a=t[n];e(a,n,t)&&(o[r++]=a)}return o}(U(t),(function(e){return K.call(t,e)})))}:function(){return[]},Bt=_t;function Vt(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&v.test(t))&&t>-1&&t%1==0&&t<e}function $t(t,e){if(Wt(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Zt(t))||(s.test(t)||!a.test(t)||null!=e&&t in Object(e))}function Nt(t){return t==t&&!Qt(t)}function zt(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}(Z&&"[object DataView]"!=Bt(new Z(new ArrayBuffer(1)))||Y&&Bt(new Y)!=i||tt&&"[object Promise]"!=Bt(tt.resolve())||et&&Bt(new et)!=o||nt&&"[object WeakMap]"!=Bt(new nt))&&(Bt=function(t){var e=_t(t),n=e==r?t.constructor:void 0,a=n?Ft(n):"";if(a)switch(a){case rt:return"[object DataView]";case ot:return i;case at:return"[object Promise]";case st:return o;case lt:return"[object WeakMap]"}return e});var Lt=function(t){var e=Gt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(u,(function(t,n,i,r){e.push(i?r.replace(c,"$1"):n||t)})),e}));function Rt(t){if("string"==typeof t||Zt(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Ft(t){if(null!=t){try{return $.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Gt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],o=n.cache;if(o.has(r))return o.get(r);var a=t.apply(this,i);return n.cache=o.set(r,a)||o,a};return n.cache=new(Gt.Cache||vt),n}function qt(t,e){return t===e||t!=t&&e!=e}Gt.Cache=vt;var Kt=wt(function(){return arguments}())?wt:function(t){return Xt(t)&&N.call(t,"callee")&&!K.call(t,"callee")},Wt=Array.isArray;var Jt=H||function(){return!1};function Ut(t){if(!Qt(t))return!1;var e=_t(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Ht(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function Qt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Xt(t){return null!=t&&"object"==typeof t}function Zt(t){return"symbol"==typeof t||Xt(t)&&"[object Symbol]"==_t(t)}var Yt=O?function(t){return function(e){return t(e)}}(O):function(t){return Xt(t)&&Ht(t.length)&&!!y[_t(t)]};function te(t){return null!=(e=t)&&Ht(e.length)&&!Ut(e)?gt(t):jt(t);var e}function ee(t){return t}t.exports=function(t,e,n){var i=null==t?0:t.length;if(!i)return-1;var r,o,a=null==n?0:(r=function(t){return t?(t=function(t){if("number"==typeof t)return t;if(Zt(t))return NaN;if(Qt(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Qt(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=h.test(t);return n||f.test(t)?m(t.slice(2),n?2:8):d.test(t)?NaN:+t}(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}(n),o=r%1,r==r?o?r-o:r:0);return a<0&&(a=X(i+a,0)),function(t,e,n,i){for(var r=t.length,o=n+(i?1:-1);i?o--:++o<r;)if(e(t[o],o,t))return o;return-1}(t,Ot(e),a)}})),Ae=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;n(this,t),this.realArray=[],null!=e&&(this.realArray=e)}return r(t,[{key:"_hasOwnProperty",value:function(t){return Object.prototype.hasOwnProperty.call(this.realArray,t)}},{key:"_get",value:function(t){return this.realArray[t]}},{key:"_set",value:function(t,e){this.realArray[t]=e}},{key:"_keys",value:function(){return Object.keys(this.realArray)}},{key:"_delete",value:function(t){return delete this.realArray[t]}},{key:"_export",value:function(){return this.realArray}}]),t}();function De(t,e,n,i){var r=!1;for(var o in e)Object.prototype.hasOwnProperty.call(n,o)||(r=!0,i[o]=e[o]);return t.animatedAttributeValue=i,r}function Se(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=t[i],a=e._get(o.id);a.setInitialValue(n,r);var s=De(a,a.initialValue,a.originalAnimatedAttributeValue,JSON.parse(JSON.stringify(a.animatedAttributeValue)));s&&(a.lastWish(),a.onGetContext()),s&&i<t.length-1&&Se(t,e,a.animatedAttributeValue,i+1,!1)}var Me=function(){function t(e){n(this,t),this.originalArray=e,this.extraArray={},this.addedKeys=[],this.removedKeys=[]}return r(t,[{key:"_hasOwnProperty",value:function(t){return Object.prototype.hasOwnProperty.call(this.originalArray,t)||Object.prototype.hasOwnProperty.call(this.extraArray,t)}},{key:"_get",value:function(t){return Object.prototype.hasOwnProperty.call(this.extraArray,t)?this.extraArray[t]:Object.prototype.hasOwnProperty.call(this.originalArray,t)?(this.extraArray[t]=s({},this.originalArray[t]),this.extraArray[t]):void 0}},{key:"_set",value:function(t,e){this.extraArray[t]=e,Object.prototype.hasOwnProperty.call(this.originalArray,t)||this.addedKeys.push(t);var n=this.removedKeys.indexOf(t);n>-1&&this.removedKeys.splice(n,1)}},{key:"_keys",value:function(){for(var t=Object.keys(this.originalArray).concat(this.addedKeys),e=0;e<this.removedKeys.length;e++){var n=this.removedKeys.indexOf(this.removedKeys[e]);t.splice(n,1)}return t}},{key:"_delete",value:function(t){var e=this.addedKeys.indexOf(t);return e>-1?(this.addedKeys.splice(e),delete this.extraArray[t]):this.removedKeys.push(t)}},{key:"_export",value:function(){for(var t in this.extraArray)this.originalArray[t]=this.extraArray[t];for(var e=0;e<this.removedKeys.length;e++)delete this.originalArray[this.removedKeys[e]];return this.originalArray}}]),t}(),Te=function(t){u(i,t);var e=f(i);function i(){return n(this,i),e.apply(this,arguments)}return r(i,[{key:"_get",value:function(t){return Object.prototype.hasOwnProperty.call(this.extraArray,t)?this.extraArray[t]:Object.prototype.hasOwnProperty.call(this.originalArray,t)?this.originalArray[t]:void 0}}]),i}(Me),Be=function(t){u(i,t);var e=f(i);function i(){return n(this,i),e.apply(this,arguments)}return r(i,[{key:"_get",value:function(t){if(Object.prototype.hasOwnProperty.call(this.extraArray,t))return this.extraArray[t];if(Object.prototype.hasOwnProperty.call(this.originalArray,t)){this.extraArray[t]=[];for(var e=0;e<this.originalArray[t].length;e++)this.extraArray[t].push({id:this.originalArray[t][e].id,millisecond:1*this.originalArray[t][e].millisecond});return this.extraArray[t]}}}]),i}(Me),Ve=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,t),this.lanes=new Ae({}),e.lanes&&(this.lanes=e.lanes),this.comboAttributes={},null!=e.comboAttributes&&(this.comboAttributes=e.comboAttributes),this.runTimeInfo=e.runTimeInfo,this.belongingLaneKeysByAnimationId=new Ae({}),e.belongingLaneKeysByAnimationId&&(this.belongingLaneKeysByAnimationId=e.belongingLaneKeysByAnimationId),this.incidentsById=new Ae({}),e.incidentsById&&(this.incidentsById=e.incidentsById)}return r(t,[{key:"_resize",value:function(t){for(var e=this.lanes._keys(),n=0;n<e.length;n++)for(var i=e[n],r=this.lanes._get(i),o=0;o<r.length;o++)r[o].millisecond=r[o].millisecond*t}},{key:"createTestLanesSanbox",value:function(){var e={lanes:new Be(this.lanes._export()),belongingLaneKeysByAnimationId:new Me(this.belongingLaneKeysByAnimationId._export()),incidentsById:new Te(this.incidentsById._export())};return this.comboAttributes&&(e.comboAttributes=this.comboAttributes),new t(e)}},{key:"getLanesCopy",value:function(t){for(var e=[],n=0;n<t.length;n++)e.push({id:t[n].id,millisecond:1*t[n].millisecond});return e}},{key:"getLaneElementsClone",value:function(t){return{id:t.id,millisecond:1*t.millisecond}}},{key:"applySandboxChanges",value:function(t){this.lanes=new Ae(t.lanes._export()),this.belongingLaneKeysByAnimationId=new Ae(t.belongingLaneKeysByAnimationId._export()),this.incidentsById=new Ae(t.incidentsById._export())}},{key:"getLane",value:function(t,e){return this.lanes._get(Tt(t,e))}},{key:"laneExists",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=Tt(t,e);return!!this.lanes._hasOwnProperty(i)||(n&&this.lanes._set(i,[]),!1)}},{key:"getOverlappingAnims",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=this,a=Qt(this.lanes._get(Tt(e,n)),(function(e){var n=t.incident.duration;return null!=r&&(n=r),e.id!==t.incident.id&&i.indexOf(e.id)<0&&(e.millisecond>=t.millisecond&&e.millisecond<n+t.millisecond||e.millisecond+o.incidentsById._get(e.id).duration>t.millisecond&&e.millisecond+o.incidentsById._get(e.id).duration<=n+t.millisecond||e.millisecond<t.millisecond&&e.millisecond+o.incidentsById._get(e.id).duration>n+t.millisecond)}));return a}},{key:"addElementToLane",value:function(t,e,n,i){var r=Tt(t,e);this.incidentsById._set(i.id,i);var o={millisecond:n,id:i.id};this.laneExists(t,e,!0);var a=this.lanes._get(r);a.push(o),a=Xt(a,["millisecond"]),this.lanes._set(r,a),this.belongingLaneKeysByAnimationId._hasOwnProperty(i.id)||this.belongingLaneKeysByAnimationId._set(i.id,[]),this.belongingLaneKeysByAnimationId._get(i.id).push(r);var s=Ee(a,(function(t){return t.id===i.id}));if(0===s?a.length>1?i.setInitialValue(this.incidentsById._get(a[1].id).pureInitialValues):i.setInitialValue():i.setInitialValue(this.incidentsById._get(a[s-1].id).animatedAttributeValue),Object.prototype.hasOwnProperty.call(this.comboAttributes,e)){var u=i.initialValue;Se(a,this.incidentsById,u,s)}s+1<a.length&&(this.incidentsById._get(a[s+1].id).setInitialValue(i.animatedAttributeValue),this.incidentsById._get(a[s+1].id).gotContext&&(this.incidentsById._get(a[s+1].id).lastWish(),this.incidentsById._get(a[s+1].id).onGetContext()))}},{key:"updateLane",value:function(t,e){for(var n=this,i={},r=0;r<t.length;r++)for(var o=this.belongingLaneKeysByAnimationId._get(t[r]),a=0;a<o.length;a++){var s=o[a];Object.prototype.hasOwnProperty.call(i,s)||(i[s]={animations:[],lane:this.lanes._get(s),laneData:At(o[a])}),i[s].animations.push(t[r])}for(var u in i){for(var l=i[u],c=l.lane,d=l.laneData,h=Xt(this.getLanesCopy(c),["millisecond"]),p=Object.prototype.hasOwnProperty.call(this.comboAttributes,d.attribute),f=0;f<c.length;f++)l.animations.indexOf(c[f].id)>=0&&(c[f].millisecond+=e);var v=Xt(c,["millisecond"]);this.lanes._set(u,v),c=v;for(var y=function(t){var e=l.animations[t],i=Ee(h,(function(t){return t.id===e})),r=Ee(c,(function(t){return t.id===e})),o=n.incidentsById._get(c[r].id);if(i!==r||r>1){if(i+1<c.length)if(0===i)p?Se(c,n.incidentsById,o.pureInitialValues,0,!0):(n.incidentsById._get(h[1].id).setInitialValue(o.pureInitialValues),n.incidentsById._get(h[1].id).onGetContext());else if(p){var a=r>i?i:r;Se(c,n.incidentsById,n.incidentsById._get(h[i-1].id).animatedAttributeValue,a,!0)}else n.incidentsById._get(h[i+1].id).setInitialValue(n.incidentsById._get(h[i-1].id).animatedAttributeValue),n.incidentsById._get(h[i+1].id).onGetContext();0===r?p?Se(c,n.incidentsById,n.incidentsById._get(h[0].id).pureInitialValues,r,!0):(o.setInitialValue(n.incidentsById._get(h[0].id).pureInitialValues),o.onGetContext()):p?Se(c,n.incidentsById,n.incidentsById._get(c[r-1].id).animatedAttributeValue,r,!0):(o.setInitialValue(n.incidentsById._get(c[r-1].id).animatedAttributeValue),o.onGetContext()),r+1<c.length&&(p?Se(c,n.incidentsById,o.animatedAttributeValue,r+1,!0):(n.incidentsById._get(c[r+1].id).setInitialValue(o.animatedAttributeValue),n.incidentsById._get(c[r+1].id).onGetContext()))}},m=0;m<l.animations.length;m++)y(m)}}},{key:"deleteAnimations",value:function(t){for(var e={},n=0;n<t.length;n++){for(var i=t[n],r=this.belongingLaneKeysByAnimationId._get(i),o=0;o<r.length;o++){for(var a=this.lanes._get(r[o]),u=-1,l=0;l<a.length;l++)if(a[l].id===i){u=l;break}for(var c=s({},a[u]),d=this.incidentsById._get(c.id),h=At(r[o]),p=[],f=0;f<a.length;f++)a[f].id!==i&&p.push(a[f]);this.lanes._set(r[o],p),0===(a=this.lanes._get(r[o])).length?(d.onProgress(0,0),this.lanes._delete(r[o]),Object.prototype.hasOwnProperty.call(e,r[o])&&delete e[r[o]]):(e[r[o]]=At(r[o]),u<a.length&&!1!==this.incidentsById._get(c.id).pureInitialValues&&(Object.prototype.hasOwnProperty.call(this.comboAttributes,h.attribute)?Se(a,this.incidentsById,this.incidentsById._get(c.id).pureInitialValues,u,!0):(this.incidentsById._get(a[u].id).setInitialValue(this.incidentsById._get(c.id).pureInitialValues),this.incidentsById._get(a[u].id).onGetContext())))}this.belongingLaneKeysByAnimationId._delete(t[n])}return e}},{key:"recalcScratchValues",value:function(t){for(var e=this.lanes._keys(),n=0;n<e.length;n++){var i=e[n],r=this.lanes._get(i);if(r.length>0){var o=this.incidentsById._get(r[0].id),a=o.getScratchValue(t),s=At(i);Object.prototype.hasOwnProperty.call(this.comboAttributes,s.attribute)?Se(r,this.incidentsById,a,0,!0):o.setInitialValue(a),o.lastWish(),o.onGetContext()}}}}]),t}(),$e=function(t){u(i,t);var e=f(i);function i(t){var r;return n(this,i),(r=e.call(this,t)).comboAttributes={},r.fixedAttributeName="_",null!=t.comboAttributes&&(r.comboAttributes=t.comboAttributes),r.LanesHandler=new Ve({comboAttributes:r.comboAttributes,runTimeInfo:r.runTimeInfo}),r}return r(i,[{key:"setComboAttributes",value:function(t){this.comboAttributes=t,this.LanesHandler=new Ve({comboAttributes:this.comboAttributes})}},{key:"_resize",value:function(t){this.LanesHandler._resize(t)}},{key:"checkAddition",value:function(t){for(var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all-or-nothing",i=this.LanesHandler.createTestLanesSanbox(),r=[],o=[],a=function(n){var a=!1,s=t[n],u=s.incident,l=u.mcid,c=u.attribute||e.fixedAttributeName;i.laneExists(l,c);var d=i.getOverlappingAnims(s,l,c);d.length>0&&(a=!0,o.push({type:"unauthorised, overlapping incidents on the same element",meta:{element_mcid:l,attribute:c,incident:s,overlappingAnims:d}})),a||r.push((function(){i.addElementToLane(l,c,s.millisecond,u),u._onGetContextOnce()}))},s=0;s<t.length;s++)a(s);if(o.length>0&&"all-or-nothing"===n)return{result:!1,errors:o};var u=this,l=function(){for(var t=0;t<r.length;t++)r[t]();u.LanesHandler.applySandboxChanges(i)};return{result:!0,errors:o,execute:l}}},{key:"checkEdit",value:function(t,e){for(var n=[],i=0;i<t.length;i++)n.push(t[i].id);for(var r=this.LanesHandler.createTestLanesSanbox(),o=[],a=0;a<t.length;a++)for(var s=t[a].incident.id,u=t[a].incident.mcid,l=t[a].incident.attribute||this.fixedAttributeName,c=r.getLane(u,l),d=0;d<c.length;d++)if(c[d].id===s){var h=c[d],p=r.getLaneElementsClone(h);p.millisecond+=e,p.incident=r.incidentsById._get(p.id);var f=r.getOverlappingAnims(p,u,l,n);f.length>0&&o.push({type:"anauthorised, overlapping animations on the same element",meta:{element_mcid:u,attribute:l,newAnimation:p,overlappingAnims:f}});break}if(o.length>0)return{result:!1,errors:o};var v=this;return{result:!0,execute:function(){v.LanesHandler.updateLane(n,e)}}}},{key:"checkResizedIncidents",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],i=0;i<t.length;i++)n.push(t[i].id);for(var r=this.LanesHandler.createTestLanesSanbox(),o=[],a=0;a<t.length;a++)for(var s=this.LanesHandler.incidentsById._get(t[a].id),u=s.mcid,l=s.attribute||this.fixedAttributeName,c=r.getLane(u,l),d={mcid:u,attribute:l},h=t[a].end-t[a].start,p=0;p<c.length;p++)if(c[p].id===t[a].id){if(!e){var f=c[p],v=r.getLaneElementsClone(f);v.millisecond+=t[a].startDelta,v.incident=r.incidentsById._get(v.id);var y=r.getOverlappingAnims(v,d.mcid,d.attribute,n,h);y.length>0&&o.push({type:"anauthorised overlapping animations on the same element",meta:{element_mcid:d.mcid,attribute:d.attribute,newAnimation:v,overlappingAnims:y}})}break}if(o.length>0)return{result:!1,errors:o};var m=this,g=function(){for(var e=0;e<t.length;e++)m.LanesHandler.updateLane([t[e].id],t[e].startDelta)};return{execute:g,result:!0}}},{key:"checkDelete",value:function(t){for(var e=[],n=0;n<t.length;n++)e.push(t[n].id);var i=this;return{result:!0,execute:function(){i.LanesHandler.deleteAnimations(e)}}}},{key:"recalcScratchValues",value:function(t){this.LanesHandler.recalcScratchValues(t)}},{key:"slipIntoLaneForwards",value:function(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=this,s=Qt(t,(function(t){return t.millisecond+a.incidentsById._get(t.id).duration>=n&&t.millisecond+a.incidentsById._get(t.id).duration<=i||a.incidentsById._get(t.id).duration+t.millisecond>=i&&t.millisecond<=i}));if(0===s.length){if(o&&0===n){var u=this.incidentsById._get(t[0].id);u.onProgress(0,0,r)}return!0}var l=(s=Xt(s,[function(t){return t.millisecond}])).length-1,c=this.incidentsById._get(s[l].id),d=s[l].millisecond;if(c.duration+d<=i)c.onProgress(1,c.duration,r);else{var h=(i-d)/c.duration;c.onProgress(h,i-d,r)}}},{key:"slipToLaneBackwards",value:function(t,e,n,i,r){var o=this,a=Qt(t,(function(t){var e=o.incidentsById._get(t.id).duration+t.millisecond;return e<=i&&e>=n||t.millisecond>=n&&t.millisecond<=i||t.millisecond<n&&e>i}));if(0===a.length)return!0;a=Xt(a,[function(t){return t.millisecond}]);var s=this.incidentsById._get(a[0].id),u=a[0].millisecond;if(u>=i)s.onProgress(0,0,r);else{var l=(i-u)/s.duration;s.onProgress(l,i-u,r)}}},{key:"moveTo",value:function(t,e,n){for(var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=this.lanes._keys(),o=0;o<r.length;o++){var a=r[o],s=this.lanes._get(a),u=At(a);t<=e?this.slipIntoLaneForwards(s,u,t,e,n,i):t>e&&this.slipToLaneBackwards(s,u,t,e,n,i)}}},{key:"lanes",get:function(){return this.LanesHandler.lanes}},{key:"incidentsById",get:function(){return this.LanesHandler.incidentsById}}],[{key:"type",get:function(){return"attributes"}}]),i}(Nt),Ne=function(){function t(){n(this,t),this.customEntities={}}return r(t,[{key:"calcClipDims",value:function(t){var e={use:!1,width:null,height:null};return Object.prototype.hasOwnProperty.call(t,"originalDims")&&null!==t.originalDims.width&&void 0!==t.originalDims.width&&null!==t.originalDims.height&&void 0!==t.originalDims.height?{use:!0,width:t.originalDims.width.number+t.originalDims.width.unit,height:t.originalDims.height.number+t.originalDims.height.unit}:(Object.prototype.hasOwnProperty.call(t,"containerParams")&&(Object.prototype.hasOwnProperty.call(t.containerParams,"width")&&(e.use=!0,e.width=t.containerParams.width),Object.prototype.hasOwnProperty.call(t.containerParams,"height")&&(e.use=!0,e.height=t.containerParams.height)),e)}},{key:"scalingCalculator",value:function(t){if(!Object.prototype.hasOwnProperty.call(t,"containerParams")||!Object.prototype.hasOwnProperty.call(t,"originalDims"))return{width:1,height:1};if(!(null!==t.originalDims.width&&void 0!==t.originalDims.width||null!==t.originalDims.height&&void 0!==t.originalDims.height))return{width:1,height:1};var e=Pt(t.containerParams),n=null,i=null;return null!==e.width&&null!==t.originalDims.width&&(e.width.unit===t.originalDims.width.unit?n=e.width.number/t.originalDims.width.number:Vt.warning("containerParams and originalDims width of Incident have different dimensions.\n          containerParams.width will be ignored")),null!==e.height&&null!==t.originalDims.height&&(e.height.unit===t.originalDims.height.unit?i=e.height.number/t.originalDims.height.number:Vt.warning("containerParams and originalDims height of Incident have different dimensions.\n          containerParams.width will be ignored")),null===n&&null===i?{width:1,height:1}:(null!==n&null===i?i=n:null!==i&null===n&&(n=i),{width:n,height:i})}},{key:"getElementByMCID",value:function(t){if(Object.prototype.hasOwnProperty.call(this.customEntities,t))return this.customEntities[t];if(Object.prototype.hasOwnProperty.call(this.elementsByMCID,t))return this.elementsByMCID[t];var e=this.context.rootElement.querySelector(this.getElementSelectorByMCID(t));return this.elementsByMCID[t]=e,e}},{key:"getElements",value:function(t){if(null==t||""===t)return[];if("!"===t.charAt(0)){if("#"===(t=t.substr(1)).charAt(0))return[this.customEntities[t.substr(1)]];if("."===t.charAt(0)){var e=[];for(var n in this.customEntities){var i=this.customEntities[n];i.classes.indexOf(t.substr(1))>-1&&e.push(i)}return e}}return Array.from(this.context.rootElement.querySelectorAll(t))}},{key:"getMCID",value:function(t){return!0===t.customEntity?t.id:t.getAttribute("data-motorcortex2-id")}},{key:"setMCID",value:function(t,e){t.setAttribute("data-motorcortex2-id",e)}},{key:"getElementSelectorByMCID",value:function(t){return Object.prototype.hasOwnProperty.call(this.customEntities,t)?"!#".concat(t):"[".concat("data-motorcortex2-id",'="').concat(t,'"]')}},{key:"setCustomEntity",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return Object.prototype.hasOwnProperty.call(this.customEntities,t)?(Vt.error("Clip ".concat(this.id," already has custom Entity with id: ").concat(t)),!1):(this.customEntities[t]={id:t,entity:e,classes:n,customEntity:!0},!0)}}]),t}(),ze=function(t){u(r,t);var i=f(r);function r(){var t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n(this,r),t=i.call(this),!Ct(o))return Vt.error("ContextHandler expects an object on its constructor. ".concat(e(o)," passed")),p(t,!1);if(!Object.prototype.hasOwnProperty.call(o,"html"))return Vt.error("ContextHandler expects the html key on its constructor properties which is missing"),p(t,!1);if(!Object.prototype.hasOwnProperty.call(o,"css"))return Vt.error("ContextHandler expects the css key on its constructor properties which is missing"),p(t,!1);if(Object.prototype.hasOwnProperty.call(o,"initParams")||Vt.info("ContextHandler got null initParams"),!Object.prototype.hasOwnProperty.call(o,"host"))return Vt.error("ContextHandler expects the host key on its constructor properties which is missing"),p(t,!1);t.isDOM=!0;var a=o.host.ownerDocument;if(!a.getElementById("@kissmybutton/motorcortex/iframeContextHandler/css")){var s="\n            iframe[seamless]{\n                background-color: transparent;\n                border: 0px none transparent;\n                padding: 0px;\n                overflow: hidden;\n            }\n            ",u=a.createElement("style");u.id="@kissmybutton/motorcortex/iframeContextHandler/css",u.type="text/css";var l=a.head||a.getElementsByTagName("head")[0];u.styleSheet?u.styleSheet.cssText=s:u.appendChild(a.createTextNode(s)),l.appendChild(u)}var c=a.createElement("iframe");o.host.appendChild(c);var d=t.scalingCalculator(o),f=t.calcClipDims(o);c.setAttribute("seamless","seamless"),!0===f.use&&(null!==f.width&&c.setAttribute("width",f.width),null!==f.height&&c.setAttribute("height",f.height)),c.style.transform="scale(".concat(d.width,", ").concat(d.height,")"),c.style.transformOrigin="top left",c.style.position="absolute",c.src="";var v=c.contentWindow||c.contentDocument;v.document&&(v=v.document),v.write(Mt(o.html,{params:o.initParams}));var y="\n        body{\n            padding:0;\n            margin:0;\n        }\n        ",m=v.createElement("style");m.type="text/css",m.styleSheet?m.styleSheet.cssText=Mt(o.css,{params:o.initParams})+y:m.appendChild(a.createTextNode(o.css+y));var g=v.head||v.getElementsByTagName("head")[0];if(g.appendChild(m),Object.prototype.hasOwnProperty.call(o,"fonts"))for(var b=0;b<o.fonts.length;b++){var k=o.fonts[b];if("google-font"===k.type){var _=v.createElement("link");_.setAttribute("rel","stylesheet"),_.setAttribute("href",k.src),g.appendChild(_)}}return t.rootElement=c,v.close(),t.context={document:v,window:c.contentWindow||c,clipContainer:c,rootElement:v.body,unmount:function(){o.host.removeChild(c)},getElements:t.getElements.bind(h(t)),getMCID:t.getMCID.bind(h(t)),setMCID:t.setMCID.bind(h(t)),getElementSelectorByMCID:t.getElementSelectorByMCID.bind(h(t)),getElementByMCID:t.getElementByMCID.bind(h(t)),setCustomEntity:t.setCustomEntity.bind(h(t))},t.elementsByMCID={},t}return r}(Ne),Le=function(t){u(r,t);var i=f(r);function r(){var t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n(this,r),t=i.call(this),!Ct(o))return Vt.error("ContextHandler expects an object on its constructor. ".concat(e(o)," passed")),p(t,!1);if(!Object.prototype.hasOwnProperty.call(o,"html"))return Vt.error("ContextHandler expects the html key on its constructor properties which is missing"),p(t,!1);if(!Object.prototype.hasOwnProperty.call(o,"css"))return Vt.error("ContextHandler expects the css key on its constructor properties which is missing"),p(t,!1);if(!Object.prototype.hasOwnProperty.call(o,"host"))return Vt.error("ContextHandler expects the host key on its constructor properties which is missing"),p(t,!1);t.isDOM=!0;var a=o.host.shadowRoot;a||(a=o.host.attachShadow({mode:"open"}));var s=document.createElement("div"),u=t.scalingCalculator(o),l=t.calcClipDims(o);s.setAttribute("data-motorocortex-container","true"),!0===l.use&&(null!==l.width&&(s.style.width=l.width),null!==l.height&&(s.style.height=l.height)),s.style.transform="scale(".concat(u.width,", ").concat(u.height,")"),s.style.transformOrigin="top left",s.style.position="absolute",s.innerHTML=Mt("".concat(o.html),{params:o.initParams}),a.appendChild(s);var c=document.createElement("slot");a.appendChild(c);var d=document.createElement("style");if(d.type="text/css",d.styleSheet?d.styleSheet.cssText=Mt(o.css,{params:o.initParams}):d.appendChild(document.createTextNode(o.css)),a.appendChild(d),t.fontTags=[],Object.prototype.hasOwnProperty.call(o,"fonts"))for(var f=0;f<o.fonts.length;f++){var v=o.fonts[f];if("google-font"===v.type){var y=document.createElement("link");y.setAttribute("rel","stylesheet"),y.setAttribute("href",v.src),document.getElementsByTagName("head")[0].appendChild(y),t.fontTags.push(y)}}return s.style.overflow="hidden",t.rootElement=s,t.context={document:document,window:window,clipContainer:t.rootElement,rootElement:s,unmount:function(){try{a.innerHTML="";for(var t=0;t<this.fontTags.length;t++)document.getElementsByTagName("head")[0].removeChild(this.fontTags[t])}catch(t){Vt.warning("The element of the Clip to be removed seems not to exist any more")}},getElements:t.getElements.bind(h(t)),getMCID:t.getMCID.bind(h(t)),setMCID:t.setMCID.bind(h(t)),getElementSelectorByMCID:t.getElementSelectorByMCID.bind(h(t)),getElementByMCID:t.getElementByMCID.bind(h(t)),setCustomEntity:t.setCustomEntity.bind(h(t))},t.elementsByMCID={},t}return r}(Ne),Re=function(t){u(i,t);var e=f(i);function i(){var t,r,o,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n(this,i),null===u?(r={},o=a):(r=a,o=u),o=s({},o,{html:""!==(t=e.call(this,r,o)).html?t.html:o.html,css:""!==t.css?t.css:o.css,fonts:t.fonts.length>0?t.fonts:o.fonts});var l="closed";t.clipType=l;var c=new(document.head.createShadowRoot||document.head.attachShadow?Le:ze)(o);return t.ownContext=s({},c.context,{isHostedClip:t.isHostedClip,contextLoaded:!0}),t.iframe=c.iframeElement,t.forceExportIncidents=!0,t.onAfterRender(),t}return r(i,[{key:"onAfterRender",value:function(){}},{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:s({},this.props,{host:void 0,html:this.ownContext.rootElement.innerHTML})}}},{key:"setCustomEntity",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return this.context.setCustomEntity(t,e,n)}},{key:"html",get:function(){return""}},{key:"css",get:function(){return""}},{key:"fonts",get:function(){return[]}},{key:"rootElement",get:function(){return this.ownContext.clipContainer}}]),i}(ge),Fe=function(t){u(r,t);var i=f(r);function r(){var t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,r),t=i.call(this);var a=s({},o);if(!Ct(a))return Vt.error("HTMLFragmentContextHandler expects an object on its constructor. ".concat(e(a)," passed")),p(t,!1);Object.prototype.hasOwnProperty.call(a,"html")||(a.html=""),t.isDOM=!0;var u=document.createDocumentFragment(),l=document.createElement("div");return Object.prototype.hasOwnProperty.call(a,"containerParams")&&(Object.prototype.hasOwnProperty.call(a,"width")&&(l.style.width=a.containerParams.width),Object.prototype.hasOwnProperty.call(a,"height")&&(l.style.height=a.containerParams.height)),l.innerHTML=Mt(a.html,{params:a.initParams}),u.appendChild(l),l.style.overflow="hidden",t.rootElement=l,t.context={document:document,window:window,clipContainer:t.rootElement,rootElement:l,unmount:function(){a.host.removeChild(u)},getElements:t.getElements.bind(h(t)),getMCID:t.getMCID.bind(h(t)),setMCID:t.setMCID.bind(h(t)),getElementSelectorByMCID:t.getElementSelectorByMCID.bind(h(t)),getElementByMCID:t.getElementByMCID.bind(h(t)),setCustomEntity:t.setCustomEntity.bind(h(t)),fragment:!0},t.elementsByMCID={},t}return r}(Ne),Ge=function(t){u(i,t);var e=f(i);function i(){var t,r,o,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n(this,i),null===u?(r={},o=a):(r=a,o=u),t=e.call(this,r,o);var l=new Fe(s({},o,{html:Object.prototype.hasOwnProperty.call(o,"html")?o.html:t.html,css:Object.prototype.hasOwnProperty.call(o,"css")?o.css:t.css,fonts:Object.prototype.hasOwnProperty.call(o,"fonts")?o.fonts:t.fonts}));return t.ownContext=s({},l.context,{isHostedClip:!1}),t.iframe=l.iframeElement,t.forceExportIncidents=!0,t.onDOMCLipInitialise(),t}return r(i,[{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:s({},this.props,{html:this.ownContext.rootElement.innerHTML})}}},{key:"onDOMCLipInitialise",value:function(){}},{key:"rootElement",get:function(){return this.ownContext.clipContainer}}]),i}(ge),qe=function(){function t(){n(this,t)}return r(t,[{key:"addIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"moveIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"removeIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"resizeIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"getIncidentsByChannel",value:function(){return{}}},{key:"flash",value:function(){}},{key:"_resize",value:function(){}},{key:"onProgress",value:function(){}},{key:"duration",get:function(){return 0}}]),t}(),Ke=["cm","mm","in","px","pt","pc","em","ex","ch","rem","vw","vh","vmin","vmax","%"],We=[{type:"string",optional:!0,default:"linear",enum:["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]},{type:"array",optional:!0,length:4,items:{type:"number"}}],Je={type:"string",empty:!1,trim:!0,optional:!0},Ue={type:"string",empty:!1,optional:!1},He={type:"html",optional:!0},Qe={type:"css",optional:!0},Xe={type:"array",optional:!0,items:{type:"object",props:{type:"string",src:"string"}}},Ze={type:"array",items:{type:"object",strict:!0,props:{src:"string",id:"string",mcid:{type:"string",optional:!0},classes:{type:"array",optional:!0,items:"string"},base64:{type:"boolean",optional:!0}}},optional:!0},Ye={props:{type:"object",props:{id:Je,selector:s({},Ue,{optional:!0}),easing:We,duration:{type:"number",optional:!1,integer:!0,positive:!0},startFrom:{type:"number",integer:!0,min:0,optional:!0},repeats:{type:"number",integer:!0,min:1,optional:!0},hiatus:{type:"number",integer:!0,min:0,optional:!0},delay:{type:"number",integer:!0,min:0,optional:!0}}}},tn={type:"object",optional:!0,props:{width:{type:"measurement",units:Ke,optional:!0},height:{type:"measurement",units:Ke,optional:!0}}},en={type:"string",enum:["on","off"],optional:!0},nn={props:[{type:"object",strict:!0,props:{id:Je,selector:s({},Ue,{optional:!0}),easing:We,html:He,css:Qe,audioSources:Ze,audio:en,containerParams:tn,fonts:Xe,initParams:{type:"object",optional:!0}}},{type:"object",strict:!0,props:{id:Je,host:{type:"any",optional:!1},html:He,css:Qe,audioSources:Ze,audio:en,containerParams:tn,fonts:Xe,initParams:{type:"object",optional:!0}}},{type:"object",strict:!0,props:{root:{type:"boolean",optional:!0},id:Je,audioSources:Ze,audio:s({},en,{enum:["on"]})}}]},rn={selector:s({},Ue,{optional:!0,strict:!0})},on="mc.descriptive.decisionAuthority",an=bt();function sn(t){t.descriptor.value=function(t){if(this.attrsValidationRules){var e=JSON.parse(JSON.stringify(this.attrsValidationRules));Object.prototype.hasOwnProperty.call(this.attrsValidationRules,"animatedAttrs")&&(e.initialValues=Vt.buildInitialValuesValidationRules(e.animatedAttrs));var n=an.validate(t,e);if(n.length>0)return{result:!1,errors:n}}return!0===this.putMessageOnPipe("checkForClip",{},on,{selfExecute:!0,direction:Lt}).response?this.manageEditAttrProps(t,"attrs"):(this.attrs=t,{result:!0})}}function un(t){t.descriptor.value=function(t){var e=Vt.validateProps({props:t},this.propsValidationRules,this.constructor);return e.result?!0===this.putMessageOnPipe("checkForClip",{},on,{selfExecute:!0,direction:Lt}).response?this.manageEditAttrProps(t,"props"):(this.props=t,{result:!0}):e}}function ln(t){t.descriptor.value=function(){return null!==this.props.host&&void 0!==this.props.host?[this.props.host]:this.hasParent&&this.putMessageOnPipe("checkForClip",{},on,{selfExecute:!0,direction:Lt}).response?this.putMessageOnPipe("getElements",{selector:this.selector()},on,{selfExecute:!1,direction:Lt}).response:[]}}function cn(t){t.descriptor.value=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{check:!0};if(t===this.duration)return{result:!0,meta:{unprocessed:!0}};if(t<=0)return{result:!1,reason:"Size must always be > 0"};if(e.check&&this.hasParent){var n=this.putMessageOnPipe("checkResize",{id:this.id,newSize:t,fraction:t/this.duration},on,{selfExecute:!1,direction:Lt});if(!n.response.result)return n.response}return this.setNewDuration(t),{result:!0}}}function dn(t){t.descriptor.value=function(){return null===this.inheritedSelector?Object.prototype.hasOwnProperty.call(this.props,"selector")?this.props.selector:null:Object.prototype.hasOwnProperty.call(this.props,"selector")?"&"===this.props.selector.charAt(0)?this.inheritedSelector+this.props.selector.substring(1):"".concat(this.inheritedSelector," ").concat(this.props.selector):this.inheritedSelector}}var hn=I(null,(function(t,i){var r=function(e){u(r,e);var i=f(r);function r(){var e,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n(this,r),null===a?(e=i.call(this,o),t(h(e)),e.attrs={},e.props=o):(e=i.call(this,a),t(h(e)),e.attrs=o,e.props=a);var s=Vt.validateProps(e.props,rn,e.constructor);return s.result?(e.attrsValidationRules={},e.propsValidationRules=rn,e._inheritedSelector=null,e.passiveAddition=!0,e._buildTree(),e.passiveAddition=!1,p(e)):p(e,s)}return r}(i);return{F:r,d:[{kind:"field",static:!0,key:"Incident",value:function(){return Ht}},{kind:"field",static:!0,key:"plugin_npm_name",value:function(){return"motor-cortex-js"}},{kind:"field",static:!0,key:"Channel",value:function(){return Nt}},{kind:"field",static:!0,key:"ClassName",value:function(){return"Group"}},{kind:"field",static:!0,key:"isGroup",value:function(){return!0}},{kind:"method",decorators:[sn],key:"editAttributes",value:function(){}},{kind:"method",decorators:[un],key:"editProperties",value:function(){}},{kind:"method",decorators:[cn],key:"resize",value:function(){}},{kind:"method",decorators:[dn],key:"selector",value:function(){}},{kind:"method",decorators:[ln],key:"getElements",value:function(){}},{kind:"method",key:"_buildTree",value:function(){this.buildTree()}},{kind:"method",key:"_rebuildTree",value:function(){for(var t in this.children){var e=this.children[t];!0===e.leaf.passive&&this.removeIncident(e.id)}this.passiveAddition=!0,this.buildTree(),this.passiveAddition=!1}},{kind:"method",key:"buildTree",value:function(){}},{kind:"method",key:"manageEditAttrProps",value:function(t,e){var n=this.parentNode,i=n.getLeafPosition(this.id),r=JSON.parse(JSON.stringify(this[e]));this[e]=t,n.removeIncident(this.id),this._rebuildTree();var o=n.addIncident(this,i);return o.result||(this[e]=r,this._rebuildTree(),n.addIncident(this,i)),o}},{kind:"method",key:"detachFromParent",value:function(){y(l(r.prototype),"detachFromParent",this).call(this),this.inheritedSelector=null}},{kind:"get",key:"inheritedSelector",value:function(){return this._inheritedSelector}},{kind:"set",key:"inheritedSelector",value:function(t){for(var e in this._inheritedSelector=t,this.children){this.children[e].leaf.inheritedSelector=this.selector()}}},{kind:"get",key:"selectorToPassToChildren",value:function(){return this.selector()}},{kind:"method",key:"exportDefinition",value:function(){var t={ClassName:this.constructor.ClassName,plugin:this.constructor.plugin||this.constructor.plugin_npm_name,plugin_npm_name:this.constructor.plugin_npm_name,attrs:this.attrs,props:this.props,incidents:{},duration:this.duration};for(var e in this.children){var n=this.children[e];!0!==n.leaf.passive&&(t.incidents[e]={id:n.id,position:n.position,leaf:n.leaf.exportDefinition()})}return t}},{kind:"method",key:"exportLiveDefinition",value:function(){var t={Class:this.constructor,attrs:JSON.parse(JSON.stringify(this.attrs)),props:JSON.parse(JSON.stringify(this.props)),attrsValidationRules:this.attrsValidationRules||null,incidents:{}};for(var e in this.children){var n=this.children[e];!0!==n.leaf.passive&&(t.incidents[e]={id:n.id,position:n.position,leaf:n.leaf.exportLiveDefinition()})}return t}},{kind:"method",key:"addIncident",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{check:!0};if(t.inheritedSelector=this.selectorToPassToChildren,!0===n.check){var i=y(l(r.prototype),"checkAddition",this).call(this,t,e);if(!i.result)return t.inheritedSelector=null,i;var o=this.putMessageOnPipe("checkForClip",{},on,{selfExecute:!0,direction:Lt});if(!0===o.response){var a=t.putMessageOnPipe("checkForInvalidSelectors",{},null,{selfExecute:!0,direction:Rt});if(a.length>0){for(var s=[],u=0;u<a.length;u++)s.push(a[u].response);return{result:!1,errors:s}}}var c=this.putMessageOnPipe("checkAddition",{incident:t,millisecond:e,parentGroupId:this.id},on,{selfExecute:!0,direction:Lt});if(!c.response.result)return t.inheritedSelector=null,c.response}!0===this.passiveAddition&&(t.passive=!0);var d=this.addChild(t,e);return d.result||(t.inheritedSelector=null),d}},{kind:"method",key:"moveIncident",value:function(t,n){var i=t;"object"===e(t)&&(i=t.id);var o=y(l(r.prototype),"checkEditPosition",this).call(this,i,n);if(!o.result)return o;var a=n-this.getLeafPosition(i);if(0===a)return{result:!0};var s=this.putMessageOnPipe("checkMove",{id:i,millisecond:n,positionDelta:a,parentGroupId:this.id},on,{selfExecute:!0,direction:Lt});return s.response.result?this.editPosition(i,n):s.response}},{kind:"method",key:"removeIncident",value:function(t){var n=t;"object"===e(t)&&(n=t.id);var i=y(l(r.prototype),"checkRemoveChild",this).call(this,n);if(!i.result)return i;var o=this.putMessageOnPipe("checkDeletion",{id:n,parentGroupId:this.id},on,{selfExecute:!0,direction:Lt});return o.response.result?this.removeChild(n):o.response}},{kind:"method",key:"handleCheckForClip",value:function(t,e){return!!this.hasParent&&this.bypass()}},{kind:"method",key:"handleCheckAddition",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckMove",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckDeletion",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckResize",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}}]}}),Kt),pn=function(t){u(i,t);var e=f(i);function i(t,r){var o;return n(this,i),(o=e.call(this,t,r)).runTimeInfo={currentMillisecond:0,state:"idle"},o.listeners={},o.previousTimeStamp=-1,o.speed=1,o}return r(i,[{key:"_setState",value:function(t){if(t!==this.runTimeInfo.state)for(var e in this.runTimeInfo.state=t,this.putMessageOnPipe("setState",t,"Clips",{selfExecute:!1,direction:Rt}),this.listeners){this.listeners[e].funct(this.runTimeInfo.currentMillisecond,t)}}},{key:"handleSetState",value:function(t,e){this._setState(e)}},{key:"play",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("idle"===this.runTimeInfo.state||"paused"===this.runTimeInfo.state||"armed"===this.runTimeInfo.state||"transitional"===this.runTimeInfo.state||"blocked"===this.runTimeInfo.state){if("paused"===this.runTimeInfo.state){var n=(new Date).getTime()-this.pauseMoment;this.previousTimeStamp+=n}this._setState("playing"),this.onPlay(),e||window.requestAnimationFrame((function(e){t.step(e)}))}}},{key:"pause",value:function(){"playing"===this.runTimeInfo.state&&(this._setState("paused"),this.pauseMoment=(new Date).getTime(),this.onWait())}},{key:"arm",value:function(){"transitional"===this.runTimeInfo.state&&this._setState("armed")}},{key:"complete",value:function(){this._setState("idle"),this.previousTimeStamp=-1}},{key:"stop",value:function(){this._setState("transitional"),this.previousTimeStamp=-1}},{key:"block",value:function(){this._setState("blocked"),this.previousTimeStamp=-1}},{key:"onPlay",value:function(){}},{key:"onWait",value:function(){}},{key:"playableProgress",value:function(t,e){if(this.isTheRootClip){for(var n in this.listeners){var i=this.listeners[n];!0!==i.onlyOnStateChange&&(Math.abs(e+i.cavaDelta-this.runTimeInfo.currentMillisecond)>i.threshold?(i.funct(Et(e,i.roundTo),this.runTimeInfo.state),i.cavaDelta=0):i.cavaDelta+=Math.abs(e-this.runTimeInfo.currentMillisecond))}return this.onProgress(t,e),this.runTimeInfo.currentMillisecond=e,!0}return!1}},{key:"step",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("playing"===this.runTimeInfo.state){var n=this;-1===this.previousTimeStamp&&(this.previousTimeStamp=t);var i={milliseconds:Math.round(this.runTimeInfo.currentMillisecond+(t-this.previousTimeStamp)*this.speed),fraction:(this.runTimeInfo.currentMillisecond+(t-this.previousTimeStamp)*this.speed)/this.duration};if(i.fraction>=1)return this.playableProgress(1,this.duration),void this.complete();if(i.fraction<0)return this.playableProgress(0,0),void this.complete();this.playableProgress(i.fraction,i.milliseconds),this.previousTimeStamp=t,e||window.requestAnimationFrame(n.step.bind(n))}}},{key:"subscribe",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];n||(n=0),i||(i=1),this.listeners[t]={funct:e,threshold:n,roundTo:i,cavaDelta:0,onlyOnStateChange:r}}},{key:"unsubscribe",value:function(t){Object.prototype.hasOwnProperty.call(this.listeners,t)&&delete this.listeners[t]}},{key:"subscribeToDurationChange",value:function(t){return!!this.isTheRootClip&&(this.realClip.subscribeToDurationChange(t),!0)}},{key:"executionSpeed",set:function(t){if(!this.isTheRootClip)return!1;this.speed=parseFloat(t)}}]),i}(hn),fn=function(){function t(e){n(this,t),this.runTimeInfo={currentMillisecond:0,state:"transitional"},this.id=St(),this.realClip=e.descriptiveIncident.realClip;var i=e.descriptiveIncident.realClip.exportConstructionArguments(),r=s({},i.props,{selector:void 0,host:e.host,id:this.id});this.ownClip=new e.descriptiveIncident.constructor.Incident(i.attrs,r),e.descriptiveIncident.realClip.addContext({clipId:this.id,context:this.ownClip.ownContext,synchronize:e.synchronize,runTimeInfo:this.runTimeInfo},!0)}return r(t,[{key:"onProgress",value:function(t,e){for(var n in this.realClip.instantiatedChannels){this.realClip.instantiatedChannels[n].moveTo(this.runTimeInfo.currentMillisecond,e,this.id,!0)}this.runTimeInfo.currentMillisecond=e}}]),t}(),vn=function(t){u(i,t);var e=f(i);function i(t){var r,o,a,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n(this,i),null===u?(o={},a=t):(o=t,a=u);var l=(r=e.call(this,o,a))._validateProps();if(!l.result)return p(r,l);r.attrsValidationRules={},r.propsValidationRules=nn,r.isTheRootClip=!1;var c={id:r.id,attrs:o,props:s({},a,{html:Object.prototype.hasOwnProperty.call(a,"html")?a.html:r.html,css:Object.prototype.hasOwnProperty.call(a,"css")?a.css:r.css,fonts:Object.prototype.hasOwnProperty.call(a,"fonts")?a.fonts:r.fonts,runTimeInfo:r.runTimeInfo,subscribe:r.subscribe.bind(h(r))}),plugin_npm_name:r.constructor.plugin_npm_name,Channel:r.constructor.Channel,DescriptiveIncident:h(r)};if(r.audio="on",Object.prototype.hasOwnProperty.call(r.constructor,"audio")&&(r.audio=r.constructor.audio),Object.prototype.hasOwnProperty.call(a,"audio")&&(r.audio=a.audio),Object.prototype.hasOwnProperty.call(a,"selector")&&void 0!==a.selector&&!0!==r.constructor.customClip)c.Incident=Ge;else if(Object.prototype.hasOwnProperty.call(a,"selector")&&void 0!==a.selector&&!0===r.constructor.customClip){delete c.props.selector;var d=new Ge({html:'<div id="clip-container"></div>'});c.props.host=d.rootElement,c.Incident=r.constructor.Incident}else"only"===r.audio&&!0!==r.props.root?r.isTheRootClip=!1:(r.isTheRootClip=!0,r.blockingWaitings={},c.Incident=r.constructor.Incident);if("on"===r.audio||"off"===r.audio?r.realClip=ce(c):r.realClip=new qe,"on"===r.audio||"only"===r.audio){var f={id:r.id,attrs:{},props:{audioSources:Object.prototype.hasOwnProperty.call(a,"audioSources")?a.audioSources:r.audioSources,runTimeInfo:r.runTimeInfo,subscribe:r.subscribe.bind(h(r))},plugin_npm_name:r.constructor.plugin_npm_name,Channel:r.constructor.Channel,Incident:Ie,DescriptiveIncident:h(r)};r.audioClip=ce(f)}else r.audio="off",r.audioClip=new qe;return r.passiveAddition=!0,r._buildTree(),r.passiveAddition=!1,r}return r(i,[{key:"_validateProps",value:function(){return Vt.validateProps({props:this.props},nn,this.constructor)}},{key:"_buildTree",value:function(){void 0!==this.realClip&&this.buildTree()}},{key:"resize",value:function(t){return this.realClip._resize(t/this.duration),this.audioClip._resize(t/this.duration),this.duration=t,this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:Lt}),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:Lt}),{result:!0}}},{key:"manageEditAttrProps",value:function(t,e){return{result:!1,errors:["Clips attributes and properties can not be edited"]}}},{key:"handleCheckForClip",value:function(t,e){return!0}},{key:"handleGetElements",value:function(t,e){return this.realClip.getElements(e.selector)}},{key:"handleCheckAddition",value:function(t,e){var n=this.realClip.addIncident(e),i=this.audioClip.addIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:Lt}),{result:!0}):n}},{key:"handleCheckMove",value:function(t,e){var n=this.realClip.moveIncident(e),i=this.audioClip.moveIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:Lt}),{result:!0}):n}},{key:"handleCheckDeletion",value:function(t,e){var n=this.realClip.removeIncident(e),i=this.audioClip.removeIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:Lt}),{result:!0}):n}},{key:"handleCheckResize",value:function(t,e){var n=this.realClip.resizeIncident(e),i=this.audioClip.resizeIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:Lt}),{result:!0}):n}},{key:"handleFlash",value:function(t,e){if(!this.isTheRootClip)return this.bypass();this.flash()}},{key:"handleSetBlock",value:function(t,e){if(!this.isTheRootClip)return this.bypass();"transitional"!==this.runTimeInfo.state&&("blocked"!==this.runTimeInfo.state&&(this.statusBeforeBlock=this.runTimeInfo.state),this.blockingWaitings[e.id]=e,this.block())}},{key:"handleUnBlock",value:function(t,e){if(!this.isTheRootClip)return this.bypass();Object.prototype.hasOwnProperty.call(this.blockingWaitings,e.id)&&(delete this.blockingWaitings[e.id],0===Object.keys(this.blockingWaitings).length&&("playing"===this.statusBeforeBlock?(this.previousTimeStamp=-1,this.play()):this.arm()))}},{key:"stop",value:function(){y(l(i.prototype),"stop",this).call(this),this.blockingWaitings={}}},{key:"onProgress",value:function(t,e){this.realClip.onProgress(t,e),this.audioClip.onProgress(t,e)}},{key:"paste",value:function(t){return this.isTheRootClip?new fn({host:t,descriptiveIncident:this}):null}},{key:"flash",value:function(){this.realClip.flash()}},{key:"setVolume",value:function(t){return t<0||t>1?{result:!1,errors:[{type:"invalid volume number"}]}:"off"===this.audio?{result:!1,errors:[{type:"can not set volume of Clip with audio off"}]}:(this.audioClip.setVolume(t),{result:!0})}},{key:"selectorToPassToChildren",get:function(){return null}},{key:"inheritedSelector",get:function(){return this._inheritedSelector},set:function(t){this._inheritedSelector=t}},{key:"html",get:function(){return""}},{key:"css",get:function(){return""}},{key:"fonts",get:function(){return[]}},{key:"audioSources",get:function(){return[]}}]),i}(pn);o(vn,"isClip",!0),o(vn,"Incident",Re),o(vn,"plugin_npm_name","@kissmybutton/self-contained-incidents"),o(vn,"Channel",Zt),o(vn,"ClassName","Clip");var yn=function(t){u(i,t);var e=f(i);function i(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n(this,i);var o={audio:"only",audioSources:t};return null!==r&&(o.id=r),e.call(this,o)}return i}(vn),mn=I(null,(function(t,e){var i=function(e){u(r,e);var i=f(r);function r(e,o){var a;n(this,r),void 0===o&&(o=e,e={}),a=i.call(this,o),t(h(a));var s=Vt.validateProps({props:o},Ye,a.constructor);return s.result?(a.inheritedSelector=null,a.attrs=e,Object.prototype.hasOwnProperty.call(o,"duration")||(o.duration=0),a.props=o,a.attrsValidationRules={},a.propsValidationRules=Ye,a.passive=!1,a):p(a,s)}return r}(e);return{F:i,d:[{kind:"field",static:!0,key:"Incident",value:function(){return ue}},{kind:"field",static:!0,key:"plugin_npm_name",value:function(){return"motor-cortex-js-attribute"}},{kind:"field",static:!0,key:"Channel",value:function(){return $e}},{kind:"field",static:!0,key:"ClassName",value:function(){return"Incident"}},{kind:"method",decorators:[sn],key:"editAttributes",value:function(){}},{kind:"method",decorators:[un],key:"editProperties",value:function(){}},{kind:"method",decorators:[cn],key:"resize",value:function(){}},{kind:"method",decorators:[dn],key:"selector",value:function(){}},{kind:"method",decorators:[ln],key:"getElements",value:function(){}},{kind:"method",key:"manageEditAttrProps",value:function(t,e){var n=this.parentNode,i=n.getLeafPosition(this.id);n.removeIncident(this.id);var r=JSON.parse(JSON.stringify(this[e]));this[e]=t;var o=n.addIncident(this,i);return o.result||(n.removeIncident(this.id),this[e]=r,n.addIncident(this,i)),o}},{kind:"method",key:"detachFromParent",value:function(){y(l(i.prototype),"detachFromParent",this).call(this),this.inheritedSelector=null}},{kind:"method",key:"handleCheckForInvalidSelectors",value:function(){var t=this.selector();return null===t?{id:this.id,ClassName:this.constructor.ClassName,plugin_npm_name:this.constructor.plugin_npm_name,error:"null selector"}:"&"===t.charAt(0)?{id:this.id,ClassName:this.constructor.ClassName,plugin_npm_name:this.constructor.plugin_npm_name,error:"relative selector with no inherited selector",selector:t}:this.bypass()}},{kind:"method",key:"exportDefinition",value:function(){return{ClassName:this.constructor.ClassName,plugin:this.constructor.plugin||this.constructor.plugin_npm_name,plugin_npm_name:this.constructor.plugin_npm_name,attrs:this.attrs,props:this.props}}},{kind:"method",key:"exportLiveDefinition",value:function(){return{Class:this.constructor,attrs:JSON.parse(JSON.stringify(this.attrs)),props:JSON.parse(JSON.stringify(this.props)),attrsValidationRules:this.attrsValidationRules||null}}}]}}),Gt),gn=bt();var bn=function(){function t(e){if(n(this,t),!Object.prototype.hasOwnProperty.call(e,"incident"))return Vt.error('Journey constructor expects an Incident on its properties on the key "incident"'),!1;this.memory=e.calpuleMemory,this.stations=[],this.incident=e.incident,this.startMillisecond=1*this.incident.runTimeInfo.currentMillisecond,this.startState="".concat(this.incident.runTimeInfo.state),this.incident.stop()}return r(t,[{key:"station",value:function(t){this.stations.length>0&&this.stations[this.stations.length-1],this.stations.push(t),this.incident.playableProgress(t/this.incident.duration,t)}},{key:"destination",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!=t?this.station(t):t=this.stations[this.stations.length-1],this.incident.playableProgress(t/this.incident.duration,t),"playing"===this.startState||"blocked"===this.startState&&"playing"===this.incident.statusBeforeBlock?this.incident.play():t>=this.incident.duration?this.incident.complete():this.incident.arm(),this.memory.push(this.exportJourneyLog)}},{key:"exportJourneyLog",value:function(){return{startMillisecond:this.startMillisecond,startState:this.startState,stations:this.stations}}}]),t}(),kn=function(){function t(){n(this,t),this.memory=[]}return r(t,[{key:"startJourney",value:function(t){return t?new bn({incident:t,calpuleMemory:this.memory}):(Vt.error("startJourney expects an Incident as an argument"),!1)}}]),t}(),_n=bt(),xn=new Bt({logLevel:0});function wn(t){if(Object.prototype.hasOwnProperty.call(t,"default")&&(t=t.default),Object.prototype.hasOwnProperty.call(t,"npm_name")||(t.npm_name="plugin_".concat((new Date).getTime())),!function(t){Object.prototype.hasOwnProperty.call(t,"default")&&(t=t.default);var n=t.npm_name,i=!0;if(Object.prototype.hasOwnProperty.call(t,"name")||xn.error("Warning on plugin ".concat(n,'. A plugin is always good to have its name on\n        its main.js file, under the key "name". It\'s missing from this plugin')),Object.prototype.hasOwnProperty.call(t,"incidents")||Object.prototype.hasOwnProperty.call(t,"Clip")||(xn.error("Error on plugin ".concat(n,'. A plugin must expose at least one Incident or a Clip.\n        Exposed plugin Incidents should be defined on the "incidents" key of the main.js file while Clips on the "Clip".')),i=!1),Object.prototype.hasOwnProperty.call(t,"incidents")&&!Array.isArray(t.incidents))xn.error("Error on plugin ".concat(n,'. thePlugin exposed Incidents are defined on the "incidents" key of the main.js file in array format.\n        Please refer to the documentation')),i=!1;else if(Object.prototype.hasOwnProperty.call(t,"incidents"))for(var r=0;r<t.incidents.length;r++){var o=t.incidents[r];if("object"===e(o.exportable)&&Object.prototype.hasOwnProperty.call(o.exportable,"default")&&(o.exportable=o.exportable.default),o.exportable.prototype instanceof hn||o.exportable.prototype instanceof vn||o.exportable.prototype instanceof ue||o.exportable.prototype instanceof je||(xn.error("Error on plugin ".concat(n,". Exportable Incidents by any plugin must extend one of the base classes provided by MotorCortex.\n                ").concat(o.exportable.constructor.name," doesn't.\n                Please refer to documentation")),i=!1),o.exportable.prototype instanceof vn)if(Object.prototype.hasOwnProperty.call(o,"originalDims"))!1===jt(o.originalDims).result&&(xn.error("Error on plugin ".concat(n,". Invalid originalDims value passed on ").concat(o.name)),i=!1);else xn.log("Warning on plugin ".concat(n,'. It\'s always good to provide originalDims\n            when exposing Incidents extending API.Clip. By defining their original dims the users\n            of your plugin will be able to define the desired dimensions of your Incident by\n            the "containerParams object"'));Object.prototype.hasOwnProperty.call(o,"name")||(xn.error("Error on plugin ".concat(n,'. Exportable Incidents by any plugin must have the "name" key which defines the name of the exported Incident.\n                Please refer to documentation')),i=!1),Object.prototype.hasOwnProperty.call(o,"propTypes")||xn.log("Warning on plugin ".concat(n,".\n                It's always good for plugins to define the supported propTypes of their exposed Incidents' supported properties.\n                ").concat(o.exportable.constructor.name," doesn't.\n                Please refer to documentation"),"warning")}return i}(t))return!1;var i={};if(Object.prototype.hasOwnProperty.call(t,"Clip"))if(Object.prototype.hasOwnProperty.call(t.Clip,"exportable")){var r,a,s=(a=r=function(t){u(i,t);var e=f(i);function i(){return n(this,i),e.apply(this,arguments)}return i}(vn),o(r,"Incident",t.Clip.exportable),o(r,"audio",t.audio?t.audio:"off"),o(r,"customClip",!0),a);i.Clip=function e(i,r){n(this,e);var o=i,a=r;void 0===r&&(o={},a=i);var u=new s(o,a);if(Object.prototype.hasOwnProperty.call(t.Clip,"attributesValidationRules")){var l=JSON.parse(JSON.stringify(t.Clip.attributesValidationRules)),c=_n.validate(o,l);if(c.length>0){for(var d="Error on plugin's \"".concat(t.npm_name,'" Clip instantiation. Errors:'),h=0;h<c.length;h++)d+="\n - ".concat(c[h].message,". ").concat(c[h].actual," provided");return console.error(d),{result:!1,errors:c}}u.attrsValidationRules=t.Clip.attributesValidationRules}else xn.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(t.npm_name,".").concat(u.constructor.name," doesn't provide it"));return u}}else{var l,c,d=(c=l=function(t){u(i,t);var e=f(i);function i(){return n(this,i),e.apply(this,arguments)}return i}(vn),o(l,"Incident",t.Clip),o(l,"plugin",t.npm_name),o(l,"audio",t.audio?t.audio:"off"),o(l,"customClip",!0),c);xn.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(t.npm_name,".Clip doesn't provide it")),i.Clip=d}var h=$e;if(Object.prototype.hasOwnProperty.call(t,"compositeAttributes")&&(h=function(e){u(r,e);var i=f(r);function r(e){return n(this,r),e.comboAttributes=t.compositeAttributes,i.call(this,e)}return r}($e)),Object.prototype.hasOwnProperty.call(t,"incidents"))for(var p=function(e){var r,a,s=t.incidents[e].exportable,l=void 0;if(s.prototype instanceof ue)a=r=function(t){u(i,t);var e=f(i);function i(){return n(this,i),e.apply(this,arguments)}return i}(mn),o(r,"Incident",s),o(r,"plugin_npm_name",t.npm_name),o(r,"plugin",t.npm_name),o(r,"ClassName",t.incidents[e].name),o(r,"Channel",h),o(r,"audio",t.audio?t.audio:"off"),l=a;else if(s.prototype instanceof je){var c,d;d=c=function(t){u(i,t);var e=f(i);function i(){return n(this,i),e.apply(this,arguments)}return i}(mn),o(c,"Incident",s),o(c,"plugin_npm_name","@kissmybutton/media-playback"),o(c,"plugin",t.npm_name),o(c,"ClassName",t.incidents[e].name),o(c,"Channel",Oe),o(c,"audio",t.audio?t.audio:"off"),l=d}else if(s.prototype instanceof vn){var p,v;v=p=function(t){u(i,t);var e=f(i);function i(){return n(this,i),e.apply(this,arguments)}return i}(s),o(p,"plugin",t.npm_name),o(p,"ClassName",t.incidents[e].name),o(p,"audio",t.audio?t.audio:"on"),o(p,"originalDims",jt(t.incidents[e].originalDims).analysis),l=v}else if(s.prototype instanceof hn){var y,m;m=y=function(t){u(i,t);var e=f(i);function i(){return n(this,i),e.apply(this,arguments)}return i}(s),o(y,"plugin",t.npm_name),o(y,"ClassName",t.incidents[e].name),l=m}Object.defineProperty(i,t.incidents[e].name,{get:function(){return function i(r,o){n(this,i);var a=new l(r,o);if(Object.prototype.hasOwnProperty.call(t.incidents[e],"attributesValidationRules")){var s=JSON.parse(JSON.stringify(t.incidents[e].attributesValidationRules));Object.prototype.hasOwnProperty.call(t.incidents[e].attributesValidationRules,"animatedAttrs")&&(s.initialValues=xn.buildInitialValuesValidationRules(s.animatedAttrs));var u=_n.validate(r,s);if(u.length>0){for(var c="Error on plugin's \"".concat(t.npm_name,'" "').concat(t.incidents[e].name,'" instantiation. Errors:'),d=0;d<u.length;d++)c+="\n - ".concat(u[d].message,". ").concat(u[d].actual," provided");return console.error(c),{result:!1,errors:u}}a.attrsValidationRules=t.incidents[e].attributesValidationRules}else xn.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(t.npm_name,".").concat(a.constructor.name," doesn't provide it"));return a}}})},v=0;v<t.incidents.length;v++)p(v);return i}var In=wn(Pe),Cn=vn,On=hn,jn=In.Clip,Pn=In.AudioPlayback,En={MonoIncident:ue,Group:On,Clip:Cn,AudioClip:yn,MediaPlayback:je,ExtendableClip:ge,DOMClip:Re,easings:de,clipFromDefinition:function t(e){if(null!==e.attrsValidationRules&&void 0!==e.attrsValidationRules){var n=gn.validate(e.attrs,e.attrsValidationRules);if(!0!==n)return{result:!1,errors:n}}var i=new e.Class(e.attrs,e.props);if(!1===i.result)return i;if(null!==e.attrsValidationRules&&void 0!==e.attrsValidationRules&&(i.attrsValidationRules=e.attrsValidationRules),Object.prototype.hasOwnProperty.call(e,"incidents"))for(var r in e.incidents){var o=e.incidents[r],a=t(o.leaf);if(!1===a.result)return a;var s=i.addIncident(a,o.position);if(!1===s.result)return s}return i}},An={API:En,Group:On,Clip:Cn,loadPlugin:wn,AudioClip:jn,AudioPlayback:Pn,AudioEffect:In.AudioEffect,TimeCapsule:kn};t.API=En,t.AudioClip=jn,t.AudioPlayback=Pn,t.Clip=Cn,t.Group=On,t.TimeCapsule=kn,t.default=An,t.loadPlugin=wn,Object.defineProperty(t,"__esModule",{value:!0})}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/fn/promise.js":
/*!********************************************!*\
  !*** ./node_modules/core-js/fn/promise.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.try.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.try.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./public/files/006cb9aE-F316.js":
/*!***************************************!*\
  !*** ./public/files/006cb9aE-F316.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kissmybutton_motorcortex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kissmybutton/motorcortex */ "./node_modules/@kissmybutton/motorcortex/dist/motorcortex.umd.js");
/* harmony import */ var _kissmybutton_motorcortex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kissmybutton_motorcortex__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


window.mc = {
  plugins: {},
  Clip: {},
  Player: {}
};
window.MotorCortex = _kissmybutton_motorcortex__WEBPACK_IMPORTED_MODULE_0___default.a;
var Plugins = {};
var Settings = {
  "allow_scale_up": true,
  "host_element": "#cliproot",
  "dimensions": null,
  "player": {
    "theme": "mc-green position-bottom",
    "host": ".player-section",
    "pointerEvents": false
  },
  "autoPlay": false,
  "filename": "006cb9aE-F316.js"
};
var IgnoredPlugins = "motor-cortex-js,@kissmybutton/self-contained-incidents,@kissmybutton/programmatic-incidents".split(',');
var Json = {
  "ClassName": "Clip",
  "plugin": "@kissmybutton/self-contained-incidents",
  "plugin_npm_name": "@kissmybutton/self-contained-incidents",
  "attrs": {},
  "props": {
    "host": {},
    "html": "",
    "css": "",
    "fonts": [],
    "initParams": {
      "Param0": "awd"
    },
    "containerParams": {
      "width": "500px",
      "height": "500px"
    }
  },
  "incidents": {},
  "duration": 0
};
false;
var Host = document.querySelector(Settings.host_element);
var Wrapper = document.createElement('div');

var Player = __webpack_require__(/*! @kissmybutton/motorcortex-player */ "./node_modules/@kissmybutton/motorcortex-player/dist/motorcortex-player.umd.js");

function populateIncident(incident) {
  var pl_name = incident.plugin || incident.plugin_npm_name;

  if (!pl_name) {
    return;
  }

  ;
  var plugin_channel_class, Class;

  if (IgnoredPlugins.includes(pl_name)) {
    Class = _kissmybutton_motorcortex__WEBPACK_IMPORTED_MODULE_0___default.a.API[incident.ClassName];
  } else {
    Class = Plugins[pl_name].loadedPlugin[incident.ClassName];
  }

  return Object.assign(incident, {
    state: '',
    Class: Class
  });
}

function iterateIncidents(structure) {
  // we going to take advantage
  // of javascript mutability
  structure = populateIncident(structure);

  for (var _i in structure.incidents) {
    var incident = structure.incidents[_i].leaf;
    incident.props.id = structure.incidents[_i].id;
    incident = populateIncident(incident);

    if (incident.hasOwnProperty('incidents')) {
      iterateIncidents(incident);
    }
  }
} // begin


iterateIncidents(Json);

function stretch(initialX, targetedX, initialY, targetedY) {
  var ratioX = targetedX / initialX;
  var ratioY = targetedY / initialY;
  var height = ClipElement.offsetHeight * ratioY;
  Host.setAttribute('style', 'height: ' + height + 'px; overflow: hidden');
  ClipElement.setAttribute('style', 'transform: scale(' + ratioX + ', ' + ratioY + ');transform-origin: left top');
}

function scale(initial, targeted) {
  var ratio = targeted / initial;
  var height = ClipElement.offsetHeight * ratio;
  Host.setAttribute('style', 'height: ' + height + 'px; overflow: hidden');
  ClipElement.setAttribute('style', 'transform: scale(' + ratio + ');transform-origin: top center');
}

function setupHost() {
  if (Host === null) {
    throw new Error('The host element is missing from the DOM.');
  }

  Wrapper.className = 'mc-wrapper';
  Wrapper.id = "mc-wrapper";
  Wrapper.style.width = "100%";
  Wrapper.style.height = "100%";
  Host.appendChild(Wrapper);

  if (Json.props.containerParams.scaleX) {
    Wrapper.style.transform += "scaleX(" + Json.props.containerParams.scaleX + ")";
  }

  if (Json.props.containerParams.scaleY) {
    Wrapper.style.transform += "scaleY(" + Json.props.containerParams.scaleY + ")";
  }

  Json.props.host = Wrapper;
  var Clip = _kissmybutton_motorcortex__WEBPACK_IMPORTED_MODULE_0___default.a.API.clipFromDefinition(Json);
  var ClipElement = Clip.props.host;
  ClipElement.style.position = "relative";
  window.mc.Clip = Clip;
  return {
    Clip: Clip,
    ClipElement: ClipElement,
    hostWidth: Host.offsetWidth,
    hostHeight: Host.offsetHeight
  };
}

function calculateScaling() {
  var allow_scale_up = Settings.allow_scale_up,
      dimensions = Settings.dimensions; // the clip width and height

  var _Json$props$container = Json.props.containerParams,
      width = _Json$props$container.width,
      height = _Json$props$container.height;

  if (width.toString().includes('%')) {
    width = parseFloat(width) / 100 * hostWidth;
  } else {
    width = parseFloat(width);
  }

  if (height.toString().includes('%')) {
    height = parseFloat(height) / 100 * hostHeight;
  } else {
    height = parseFloat(height);
  }

  var difX = width - hostWidth;
  var difY = height - hostHeight;
}

var playerHost = Host;

var _setupHost = setupHost(),
    Clip = _setupHost.Clip,
    ClipElement = _setupHost.ClipElement,
    hostWidth = _setupHost.hostWidth,
    hostHeight = _setupHost.hostHeight; // calculateScaling();


if (Settings.player) {
  window.mc.Player = new Player(_objectSpread({
    clip: Clip,
    theme: Settings.player.theme || "transparent position-default",
    onMillisecondChange: Settings.player.onMillisecondChange || null,
    host: playerHost,
    buttons: {
      donkeyclip: false
    }
  }, Settings.player));
}

if (Settings.autoPlay) {
  Clip.play();
}

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi core-js/fn/promise public/files/006cb9aE-F316.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/fn/promise */"./node_modules/core-js/fn/promise.js");
module.exports = __webpack_require__(/*! public/files/006cb9aE-F316.js */"./public/files/006cb9aE-F316.js");


/***/ })

/******/ });
});
//# sourceMappingURL=bundle.js.map