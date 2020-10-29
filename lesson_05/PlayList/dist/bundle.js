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

/***/ "./src/components/media.js":
/*!*********************************!*\
  !*** ./src/components/media.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Media = /*#__PURE__*/function () {
  function Media(title, duration) {
    _classCallCheck(this, Media);

    this.title = title;
    this.duration = duration;
    this.isPlaying = false;
  }

  _createClass(Media, [{
    key: "play",
    value: function play() {
      this.isPlaying = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isPlaying = false;
    }
  }]);

  return Media;
}();

/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ }),

/***/ "./src/components/movie.js":
/*!*********************************!*\
  !*** ./src/components/movie.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ "./src/components/media.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Movie = /*#__PURE__*/function (_Media) {
  _inherits(Movie, _Media);

  var _super = _createSuper(Movie);

  function Movie(title, duration, year) {
    var _this;

    _classCallCheck(this, Movie);

    _this = _super.call(this, _assertThisInitialized(_this));
    _this.year = year;
    return _this;
  }

  _createClass(Movie, [{
    key: "toHtml",
    value: function toHtml() {
      return "<div class=\"row py-3 ".concat(this.isPlaying ? 'current' : '', "\">\n\t\t<div class=\"col-sm-9\">").concat(this.title, " - ").concat(this.year, "</div>\n\t\t<div class=\"col-sm-3\">").concat(this.duration, "</div>\n\t\t</div>");
    }
  }]);

  return Movie;
}(_media__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/playlist.js":
/*!************************************!*\
  !*** ./src/components/playlist.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\advanced-js\\lesson_05\\PlayList\\src\\components\\playlist.js: Unexpected character '​' (36:1)\n\n  34 | \t\t});\n  35 | \t}\n> 36 | }​\n     |  ^\n  37 | export default PlayList;\n    at Parser._raise (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:799:17)\n    at Parser.raiseWithData (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:792:17)\n    at Parser.raise (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:786:17)\n    at Parser.getTokenFromCode (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:8416:16)\n    at Parser.nextToken (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:7882:12)\n    at Parser.next (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:7807:10)\n    at Parser.parseClassBody (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:12397:10)\n    at Parser.parseClass (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:12339:22)\n    at Parser.parseStatementContent (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:11619:21)\n    at Parser.parseStatement (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:11577:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:12159:25)\n    at Parser.parseBlockBody (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:12145:10)\n    at Parser.parseTopLevel (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:11508:10)\n    at Parser.parse (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:13328:10)\n    at parse (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\parser\\lib\\index.js:13381:38)\n    at parser (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\gensync\\index.js:261:32)\n    at D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (D:\\advanced-js\\lesson_05\\PlayList\\node_modules\\gensync\\index.js:223:11)");

/***/ }),

/***/ "./src/components/song.js":
/*!********************************!*\
  !*** ./src/components/song.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ "./src/components/media.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Song = /*#__PURE__*/function (_Media) {
  _inherits(Song, _Media);

  var _super = _createSuper(Song);

  function Song(title, duration, artist) {
    var _this;

    _classCallCheck(this, Song);

    _this = _super.call(this, _assertThisInitialized(_this));
    _this.artist = artist;
    return _this;
  }

  _createClass(Song, [{
    key: "toHtml",
    value: function toHtml() {
      return "<div class=\"row py-3 ".concat(this.isPlaying ? 'current' : '', "\">\n\t\t<div class=\"col-sm-9\">").concat(this.title, " - ").concat(this.artist, "</div>\n\t\t<div class=\"col-sm-3\">").concat(this.duration, "</div>\n\t\t</div>");
    }
  }]);

  return Song;
}(_media__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/song */ "./src/components/song.js");
/* harmony import */ var _components_movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/movie */ "./src/components/movie.js");
/* harmony import */ var _components_playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/playlist */ "./src/components/playlist.js");
/* harmony import */ var _components_playlist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_playlist__WEBPACK_IMPORTED_MODULE_2__);



var play = document.getElementById('btn-play');
var stop = document.getElementById('btn-stop');
var next = document.getElementById('btn-next');

play.onclick = function () {
  playList.play();
  playList.render(list);
};

stop.onclick = function () {
  playList.stop();
  playList.render(list);
};

next.onclick = function () {
  playList.next();
  playList.render(list);
};

var playlist = new Playlist();
var song1 = new _components_song__WEBPACK_IMPORTED_MODULE_0__["default"]('Let It Be', '4:30', 'The Beatles');
var song2 = new _components_song__WEBPACK_IMPORTED_MODULE_0__["default"]('Hit The Road Jack', '3:55', 'Ray Charles');
var song3 = new _components_song__WEBPACK_IMPORTED_MODULE_0__["default"]('Smoke On The Water', '4:45', 'Deep Purple');
var movie = new _components_movie__WEBPACK_IMPORTED_MODULE_1__["default"]('Avatar', '2:20:35', '2012');
playlist.add(song1);
playlist.add(song2);
playlist.add(song3);
playlist.add(movie);
var list = document.getElementById('list');

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/scss/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW92aWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc29uZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJNZWRpYSIsInRpdGxlIiwiZHVyYXRpb24iLCJpc1BsYXlpbmciLCJNb3ZpZSIsInllYXIiLCJTb25nIiwiYXJ0aXN0IiwicGxheSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdG9wIiwibmV4dCIsIm9uY2xpY2siLCJwbGF5TGlzdCIsInJlbmRlciIsImxpc3QiLCJwbGF5bGlzdCIsIlBsYXlsaXN0Iiwic29uZzEiLCJzb25nMiIsInNvbmczIiwibW92aWUiLCJhZGQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFD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LENBQUNNLEdBQVQsQ0FBYUgsS0FBYjtBQUNBSCxRQUFRLENBQUNNLEdBQVQsQ0FBYUYsS0FBYjtBQUNBSixRQUFRLENBQUNNLEdBQVQsQ0FBYUQsS0FBYjtBQUVBLElBQU1OLElBQUksR0FBR1AsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWIsQzs7Ozs7Ozs7Ozs7QUNsQ0EsdUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY2xhc3MgTWVkaWEge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0aXRsZSwgZHVyYXRpb24pIHtcclxuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcclxuXHRcdHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuXHRcdHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRwbGF5KCkge1xyXG5cdFx0dGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0c3RvcCgpIHtcclxuXHRcdHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVkaWE7IiwiaW1wb3J0IE1lZGlhIGZyb20gJy4vbWVkaWEnO1xyXG5cclxuY2xhc3MgTW92aWUgZXh0ZW5kcyBNZWRpYSB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKHRpdGxlLCBkdXJhdGlvbiwgeWVhcikge1xyXG5cdFx0c3VwZXIodGhpcyk7XHJcblx0XHR0aGlzLnllYXIgPSB5ZWFyO1xyXG5cdH1cclxuXHJcblx0dG9IdG1sICgpIHtcclxuXHRcdHJldHVybiBgPGRpdiBjbGFzcz1cInJvdyBweS0zICR7dGhpcy5pc1BsYXlpbmcgPyAnY3VycmVudCc6ICcnfVwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbC1zbS05XCI+JHt0aGlzLnRpdGxlfSAtICR7dGhpcy55ZWFyfTwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+JHt0aGlzLmR1cmF0aW9ufTwvZGl2PlxyXG5cdFx0PC9kaXY+YFxyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgTWVkaWEgZnJvbSAnLi9tZWRpYSc7XHJcblxyXG5jbGFzcyBTb25nIGV4dGVuZHMgTWVkaWEge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yICh0aXRsZSwgZHVyYXRpb24sIGFydGlzdCkge1xyXG5cdFx0c3VwZXIodGhpcyk7XHJcblx0XHR0aGlzLmFydGlzdCA9IGFydGlzdDtcclxuXHR9XHJcblxyXG5cdHRvSHRtbCAoKSB7XHJcblx0XHRyZXR1cm4gYDxkaXYgY2xhc3M9XCJyb3cgcHktMyAke3RoaXMuaXNQbGF5aW5nID8gJ2N1cnJlbnQnOiAnJ31cIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPiR7dGhpcy50aXRsZX0gLSAke3RoaXMuYXJ0aXN0fTwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+JHt0aGlzLmR1cmF0aW9ufTwvZGl2PlxyXG5cdFx0PC9kaXY+YFxyXG5cdH1cclxuXHJcblxyXG59IiwiaW1wb3J0IFNvbmcgZnJvbSAnLi9jb21wb25lbnRzL3NvbmcnO1xyXG5pbXBvcnQgTW92aWUgZnJvbSAnLi9jb21wb25lbnRzL21vdmllJztcclxuaW1wb3J0IFBsYXlMaXN0IGZyb20gJy4vY29tcG9uZW50cy9wbGF5bGlzdCc7XHJcblxyXG5cclxuY29uc3QgcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcGxheScpO1xyXG5jb25zdCBzdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zdG9wJyk7XHJcbmNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLW5leHQnKTtcclxuXHJcbnBsYXkub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICBwbGF5TGlzdC5wbGF5KCk7XHJcbiAgICBwbGF5TGlzdC5yZW5kZXIobGlzdClcclxufVxyXG5zdG9wLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG4gICAgcGxheUxpc3Quc3RvcCgpO1xyXG4gICAgcGxheUxpc3QucmVuZGVyKGxpc3QpXHJcbn1cclxubmV4dC5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuICAgIHBsYXlMaXN0Lm5leHQoKTtcclxuICAgIHBsYXlMaXN0LnJlbmRlcihsaXN0KVxyXG59XHJcblxyXG5jb25zdCBwbGF5bGlzdCA9IG5ldyBQbGF5bGlzdDtcclxuXHJcbmNvbnN0IHNvbmcxID0gbmV3IFNvbmcoJ0xldCBJdCBCZScsICc0OjMwJywgJ1RoZSBCZWF0bGVzJyk7XHJcbmNvbnN0IHNvbmcyID0gbmV3IFNvbmcoJ0hpdCBUaGUgUm9hZCBKYWNrJywgJzM6NTUnLCAnUmF5IENoYXJsZXMnKTtcclxuY29uc3Qgc29uZzMgPSBuZXcgU29uZygnU21va2UgT24gVGhlIFdhdGVyJywgJzQ6NDUnLCAnRGVlcCBQdXJwbGUnKTtcclxuY29uc3QgbW92aWUgPSBuZXcgTW92aWUoJ0F2YXRhcicsICcyOjIwOjM1JywgJzIwMTInKTtcclxuXHJcbnBsYXlsaXN0LmFkZChzb25nMSk7XHJcbnBsYXlsaXN0LmFkZChzb25nMik7XHJcbnBsYXlsaXN0LmFkZChzb25nMyk7XHJcbnBsYXlsaXN0LmFkZChtb3ZpZSk7XHJcblxyXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9