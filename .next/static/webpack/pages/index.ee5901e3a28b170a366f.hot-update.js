"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/Results */ "./components/Results.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\HBALOYI\\Documents\\Reactjs\\parking-sync\\parking-sync\\pages\\index.js";





function generate(n) {
  var add = 1,
      max = 12 - add;

  if (n > max) {
    return generate(max) + generate(n - max);
  }

  max = Math.pow(10, n + add);
  var min = max / 10;
  var number = Math.floor(Math.random() * (max - min + 1)) + min;
  return ("" + number).substring(add);
}

function Home() {
  var generateSpaceId = function generateSpaceId() {
    var element = [];

    for (var index = 0; index < 51; index++) {
      element.push({
        barcode: generate(12),
        index: index
      });
    }

    return element;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: "Parking Sync"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Results__WEBPACK_IMPORTED_MODULE_2__.default, {
      results: generateSpaceId()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWU1OTAxZTNhMjhiMTcwYTM2NmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNHLFFBQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQ25CLE1BQUlDLEdBQUcsR0FBRyxDQUFWO0FBQUEsTUFDRUMsR0FBRyxHQUFHLEtBQUtELEdBRGI7O0FBRUEsTUFBSUQsQ0FBQyxHQUFHRSxHQUFSLEVBQWE7QUFDWCxXQUFPSCxRQUFRLENBQUNHLEdBQUQsQ0FBUixHQUFnQkgsUUFBUSxDQUFDQyxDQUFDLEdBQUdFLEdBQUwsQ0FBL0I7QUFDRDs7QUFFREEsRUFBQUEsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxFQUFULEVBQWFKLENBQUMsR0FBR0MsR0FBakIsQ0FBTjtBQUNBLE1BQUlJLEdBQUcsR0FBR0gsR0FBRyxHQUFHLEVBQWhCO0FBQ0EsTUFBSUksTUFBTSxHQUFHSCxJQUFJLENBQUNJLEtBQUwsQ0FBV0osSUFBSSxDQUFDSyxNQUFMLE1BQWlCTixHQUFHLEdBQUdHLEdBQU4sR0FBWSxDQUE3QixDQUFYLElBQThDQSxHQUEzRDtBQUNBLFNBQU8sQ0FBQyxLQUFLQyxNQUFOLEVBQWNHLFNBQWQsQ0FBd0JSLEdBQXhCLENBQVA7QUFDRDs7QUFFYyxTQUFTUyxJQUFULEdBQWdCO0FBQzdCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFNQyxPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsU0FBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBRyxFQUE1QixFQUFnQ0EsS0FBSyxFQUFyQyxFQUF5QztBQUN2Q0QsTUFBQUEsT0FBTyxDQUFDRSxJQUFSLENBQWE7QUFDWEMsUUFBQUEsT0FBTyxFQUFFaEIsUUFBUSxDQUFDLEVBQUQsQ0FETjtBQUVYYyxRQUFBQSxLQUFLLEVBQUxBO0FBRlcsT0FBYjtBQUlEOztBQUNELFdBQU9ELE9BQVA7QUFDRCxHQVREOztBQVVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUUsOERBQUMsd0RBQUQ7QUFBUyxhQUFPLEVBQUVELGVBQWU7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7S0FyQnVCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFJlc3VsdHMgZnJvbSBcIi4vLi4vY29tcG9uZW50cy9SZXN1bHRzXCI7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlKG4pIHtcbiAgdmFyIGFkZCA9IDEsXG4gICAgbWF4ID0gMTIgLSBhZGQ7XG4gIGlmIChuID4gbWF4KSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlKG1heCkgKyBnZW5lcmF0ZShuIC0gbWF4KTtcbiAgfVxuXG4gIG1heCA9IE1hdGgucG93KDEwLCBuICsgYWRkKTtcbiAgdmFyIG1pbiA9IG1heCAvIDEwO1xuICB2YXIgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgcmV0dXJuIChcIlwiICsgbnVtYmVyKS5zdWJzdHJpbmcoYWRkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZ2VuZXJhdGVTcGFjZUlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNTE7IGluZGV4KyspIHtcbiAgICAgIGVsZW1lbnQucHVzaCh7XG4gICAgICAgIGJhcmNvZGU6IGdlbmVyYXRlKDEyKSxcbiAgICAgICAgaW5kZXgsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UGFya2luZyBTeW5jPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPFJlc3VsdHMgcmVzdWx0cz17Z2VuZXJhdGVTcGFjZUlkKCl9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkhlYWRlciIsIlJlc3VsdHMiLCJnZW5lcmF0ZSIsIm4iLCJhZGQiLCJtYXgiLCJNYXRoIiwicG93IiwibWluIiwibnVtYmVyIiwiZmxvb3IiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJIb21lIiwiZ2VuZXJhdGVTcGFjZUlkIiwiZWxlbWVudCIsImluZGV4IiwicHVzaCIsImJhcmNvZGUiXSwic291cmNlUm9vdCI6IiJ9