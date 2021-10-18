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
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Results__WEBPACK_IMPORTED_MODULE_2__.default, {
      results: generateSpaceId()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzZlNmEwZDk3YTM0MjdiNDkxNTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVNHLFFBQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQ25CLE1BQUlDLEdBQUcsR0FBRyxDQUFWO0FBQUEsTUFBYUMsR0FBRyxHQUFHLEtBQUtELEdBQXhCOztBQUNBLE1BQUtELENBQUMsR0FBR0UsR0FBVCxFQUFlO0FBQ1AsV0FBT0gsUUFBUSxDQUFDRyxHQUFELENBQVIsR0FBZ0JILFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHRSxHQUFMLENBQS9CO0FBQ1A7O0FBRURBLEVBQUFBLEdBQUcsR0FBVUMsSUFBSSxDQUFDQyxHQUFMLENBQVMsRUFBVCxFQUFhSixDQUFDLEdBQUNDLEdBQWYsQ0FBYjtBQUNBLE1BQUlJLEdBQUcsR0FBTUgsR0FBRyxHQUFDLEVBQWpCO0FBQ0EsTUFBSUksTUFBTSxHQUFHSCxJQUFJLENBQUNJLEtBQUwsQ0FBWUosSUFBSSxDQUFDSyxNQUFMLE1BQWlCTixHQUFHLEdBQUdHLEdBQU4sR0FBWSxDQUE3QixDQUFaLElBQWdEQSxHQUE3RDtBQUVBLFNBQU8sQ0FBQyxLQUFLQyxNQUFOLEVBQWNHLFNBQWQsQ0FBd0JSLEdBQXhCLENBQVA7QUFDRDs7QUFFYyxTQUFTUyxJQUFULEdBQWdCO0FBQzdCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFNQyxPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsU0FBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBRyxFQUE1QixFQUFnQ0EsS0FBSyxFQUFyQyxFQUF5QztBQUN2Q0QsTUFBQUEsT0FBTyxDQUFDRSxJQUFSLENBQWE7QUFDWEMsUUFBQUEsT0FBTyxFQUFFaEIsUUFBUSxDQUFDLEVBQUQsQ0FETjtBQUVYYyxRQUFBQSxLQUFLLEVBQUxBO0FBRlcsT0FBYjtBQUlEOztBQUNELFdBQU9ELE9BQVA7QUFDRCxHQVREOztBQVVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUUsOERBQUMsd0RBQUQ7QUFDQSxhQUFPLEVBQUVELGVBQWU7QUFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7S0F2QnVCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi8uLi9jb21wb25lbnRzL1Jlc3VsdHMnO1xuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlKG4pIHtcbiAgdmFyIGFkZCA9IDEsIG1heCA9IDEyIC0gYWRkOyAgXG4gIGlmICggbiA+IG1heCApIHtcbiAgICAgICAgICByZXR1cm4gZ2VuZXJhdGUobWF4KSArIGdlbmVyYXRlKG4gLSBtYXgpO1xuICB9XG5cbiAgbWF4ICAgICAgICA9IE1hdGgucG93KDEwLCBuK2FkZCk7XG4gIHZhciBtaW4gICAgPSBtYXgvMTA7IFxuICB2YXIgbnVtYmVyID0gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSApICsgbWluO1xuXG4gIHJldHVybiAoXCJcIiArIG51bWJlcikuc3Vic3RyaW5nKGFkZCk7IFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBnZW5lcmF0ZVNwYWNlSWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA1MTsgaW5kZXgrKykge1xuICAgICAgZWxlbWVudC5wdXNoKHtcbiAgICAgICAgYmFyY29kZTogZ2VuZXJhdGUoMTIpLFxuICAgICAgICBpbmRleFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UGFya2luZyBTeW5jPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPFJlc3VsdHNcbiAgICAgIHJlc3VsdHM9e2dlbmVyYXRlU3BhY2VJZCgpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsiSGVhZCIsIkhlYWRlciIsIlJlc3VsdHMiLCJnZW5lcmF0ZSIsIm4iLCJhZGQiLCJtYXgiLCJNYXRoIiwicG93IiwibWluIiwibnVtYmVyIiwiZmxvb3IiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJIb21lIiwiZ2VuZXJhdGVTcGFjZUlkIiwiZWxlbWVudCIsImluZGV4IiwicHVzaCIsImJhcmNvZGUiXSwic291cmNlUm9vdCI6IiJ9