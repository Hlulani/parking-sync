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
      max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   

  if (n > max) {
    return generate(max) + generate(n - max);
  }

  max = Math.pow(10, n + add);
  var min = max / 10; // Math.pow(10, n) basically

  var number = Math.floor(Math.random() * (max - min + 1)) + min;
  return ("" + number).substring(add);
}

function Home() {
  var generateSpaceId = function generateSpaceId() {
    var element = [];

    for (var index = 0; index < 51; index++) {
      element.push({
        barcode: generate(14)
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
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Results__WEBPACK_IMPORTED_MODULE_2__.default, {
      results: generateSpaceId()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2E5ZGFhOTlkMTUxMWZlYzdhNWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVNHLFFBQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQ25CLE1BQUlDLEdBQUcsR0FBRyxDQUFWO0FBQUEsTUFBYUMsR0FBRyxHQUFHLEtBQUtELEdBQXhCLENBRG1CLENBQ1k7O0FBRS9CLE1BQUtELENBQUMsR0FBR0UsR0FBVCxFQUFlO0FBQ1AsV0FBT0gsUUFBUSxDQUFDRyxHQUFELENBQVIsR0FBZ0JILFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHRSxHQUFMLENBQS9CO0FBQ1A7O0FBRURBLEVBQUFBLEdBQUcsR0FBVUMsSUFBSSxDQUFDQyxHQUFMLENBQVMsRUFBVCxFQUFhSixDQUFDLEdBQUNDLEdBQWYsQ0FBYjtBQUNBLE1BQUlJLEdBQUcsR0FBTUgsR0FBRyxHQUFDLEVBQWpCLENBUm1CLENBUUU7O0FBQ3JCLE1BQUlJLE1BQU0sR0FBR0gsSUFBSSxDQUFDSSxLQUFMLENBQVlKLElBQUksQ0FBQ0ssTUFBTCxNQUFpQk4sR0FBRyxHQUFHRyxHQUFOLEdBQVksQ0FBN0IsQ0FBWixJQUFnREEsR0FBN0Q7QUFFQSxTQUFPLENBQUMsS0FBS0MsTUFBTixFQUFjRyxTQUFkLENBQXdCUixHQUF4QixDQUFQO0FBQ0Q7O0FBRWMsU0FBU1MsSUFBVCxHQUFnQjtBQUU3QixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBTUMsT0FBTyxHQUFHLEVBQWhCOztBQUNBLFNBQUssSUFBSUMsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUcsRUFBNUIsRUFBZ0NBLEtBQUssRUFBckMsRUFBeUM7QUFDdkNELE1BQUFBLE9BQU8sQ0FBQ0UsSUFBUixDQUFhO0FBQ1hDLFFBQUFBLE9BQU8sRUFBRWhCLFFBQVEsQ0FBQyxFQUFEO0FBRE4sT0FBYjtBQUlEOztBQUVELFdBQU9hLE9BQVA7QUFDRCxHQVZEOztBQVlBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUUsOERBQUMsd0RBQUQ7QUFDQSxhQUFPLEVBQUVELGVBQWU7QUFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7S0ExQnVCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi8uLi9jb21wb25lbnRzL1Jlc3VsdHMnO1xuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlKG4pIHtcbiAgdmFyIGFkZCA9IDEsIG1heCA9IDEyIC0gYWRkOyAgIC8vIDEyIGlzIHRoZSBtaW4gc2FmZSBudW1iZXIgTWF0aC5yYW5kb20oKSBjYW4gZ2VuZXJhdGUgd2l0aG91dCBpdCBzdGFydGluZyB0byBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLiAgIFxuXG4gIGlmICggbiA+IG1heCApIHtcbiAgICAgICAgICByZXR1cm4gZ2VuZXJhdGUobWF4KSArIGdlbmVyYXRlKG4gLSBtYXgpO1xuICB9XG5cbiAgbWF4ICAgICAgICA9IE1hdGgucG93KDEwLCBuK2FkZCk7XG4gIHZhciBtaW4gICAgPSBtYXgvMTA7IC8vIE1hdGgucG93KDEwLCBuKSBiYXNpY2FsbHlcbiAgdmFyIG51bWJlciA9IE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKSArIG1pbjtcblxuICByZXR1cm4gKFwiXCIgKyBudW1iZXIpLnN1YnN0cmluZyhhZGQpOyBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBnZW5lcmF0ZVNwYWNlSWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA1MTsgaW5kZXgrKykge1xuICAgICAgZWxlbWVudC5wdXNoKHtcbiAgICAgICAgYmFyY29kZTogZ2VuZXJhdGUoMTQpXG4gICAgICB9KTtcbiAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5QYXJraW5nIFN5bmM8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8UmVzdWx0c1xuICAgICAgcmVzdWx0cz17Z2VuZXJhdGVTcGFjZUlkKCl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSGVhZGVyIiwiUmVzdWx0cyIsImdlbmVyYXRlIiwibiIsImFkZCIsIm1heCIsIk1hdGgiLCJwb3ciLCJtaW4iLCJudW1iZXIiLCJmbG9vciIsInJhbmRvbSIsInN1YnN0cmluZyIsIkhvbWUiLCJnZW5lcmF0ZVNwYWNlSWQiLCJlbGVtZW50IiwiaW5kZXgiLCJwdXNoIiwiYmFyY29kZSJdLCJzb3VyY2VSb290IjoiIn0=