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
        barcode: gene
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmRiODMxMzk1NDZjZDlhY2NkZjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVNHLFFBQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQ25CLE1BQUlDLEdBQUcsR0FBRyxDQUFWO0FBQUEsTUFBYUMsR0FBRyxHQUFHLEtBQUtELEdBQXhCLENBRG1CLENBQ1k7O0FBRS9CLE1BQUtELENBQUMsR0FBR0UsR0FBVCxFQUFlO0FBQ1AsV0FBT0gsUUFBUSxDQUFDRyxHQUFELENBQVIsR0FBZ0JILFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHRSxHQUFMLENBQS9CO0FBQ1A7O0FBRURBLEVBQUFBLEdBQUcsR0FBVUMsSUFBSSxDQUFDQyxHQUFMLENBQVMsRUFBVCxFQUFhSixDQUFDLEdBQUNDLEdBQWYsQ0FBYjtBQUNBLE1BQUlJLEdBQUcsR0FBTUgsR0FBRyxHQUFDLEVBQWpCLENBUm1CLENBUUU7O0FBQ3JCLE1BQUlJLE1BQU0sR0FBR0gsSUFBSSxDQUFDSSxLQUFMLENBQVlKLElBQUksQ0FBQ0ssTUFBTCxNQUFpQk4sR0FBRyxHQUFHRyxHQUFOLEdBQVksQ0FBN0IsQ0FBWixJQUFnREEsR0FBN0Q7QUFFQSxTQUFPLENBQUMsS0FBS0MsTUFBTixFQUFjRyxTQUFkLENBQXdCUixHQUF4QixDQUFQO0FBQ0Q7O0FBRWMsU0FBU1MsSUFBVCxHQUFnQjtBQUU3QixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBTUMsT0FBTyxHQUFHLEVBQWhCOztBQUNBLFNBQUssSUFBSUMsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUcsRUFBNUIsRUFBZ0NBLEtBQUssRUFBckMsRUFBeUM7QUFDdkNELE1BQUFBLE9BQU8sQ0FBQ0UsSUFBUixDQUFhO0FBQ1hDLFFBQUFBLE9BQU8sRUFBRUM7QUFERSxPQUFiO0FBSUQ7O0FBRUQsV0FBT0osT0FBUDtBQUNELEdBVkQ7O0FBWUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRSw4REFBQyx3REFBRDtBQUNBLGFBQU8sRUFBRUQsZUFBZTtBQUR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDtLQTFCdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuLy4uL2NvbXBvbmVudHMvUmVzdWx0cyc7XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGUobikge1xuICB2YXIgYWRkID0gMSwgbWF4ID0gMTIgLSBhZGQ7ICAgLy8gMTIgaXMgdGhlIG1pbiBzYWZlIG51bWJlciBNYXRoLnJhbmRvbSgpIGNhbiBnZW5lcmF0ZSB3aXRob3V0IGl0IHN0YXJ0aW5nIHRvIHBhZCB0aGUgZW5kIHdpdGggemVyb3MuICAgXG5cbiAgaWYgKCBuID4gbWF4ICkge1xuICAgICAgICAgIHJldHVybiBnZW5lcmF0ZShtYXgpICsgZ2VuZXJhdGUobiAtIG1heCk7XG4gIH1cblxuICBtYXggICAgICAgID0gTWF0aC5wb3coMTAsIG4rYWRkKTtcbiAgdmFyIG1pbiAgICA9IG1heC8xMDsgLy8gTWF0aC5wb3coMTAsIG4pIGJhc2ljYWxseVxuICB2YXIgbnVtYmVyID0gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSApICsgbWluO1xuXG4gIHJldHVybiAoXCJcIiArIG51bWJlcikuc3Vic3RyaW5nKGFkZCk7IFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IGdlbmVyYXRlU3BhY2VJZCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDUxOyBpbmRleCsrKSB7XG4gICAgICBlbGVtZW50LnB1c2goe1xuICAgICAgICBiYXJjb2RlOiBnZW5lXG4gICAgICB9KTtcbiAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5QYXJraW5nIFN5bmM8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8UmVzdWx0c1xuICAgICAgcmVzdWx0cz17Z2VuZXJhdGVTcGFjZUlkKCl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSGVhZGVyIiwiUmVzdWx0cyIsImdlbmVyYXRlIiwibiIsImFkZCIsIm1heCIsIk1hdGgiLCJwb3ciLCJtaW4iLCJudW1iZXIiLCJmbG9vciIsInJhbmRvbSIsInN1YnN0cmluZyIsIkhvbWUiLCJnZW5lcmF0ZVNwYWNlSWQiLCJlbGVtZW50IiwiaW5kZXgiLCJwdXNoIiwiYmFyY29kZSIsImdlbmUiXSwic291cmNlUm9vdCI6IiJ9