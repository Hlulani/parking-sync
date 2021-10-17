"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Results.js":
/*!*******************************!*\
  !*** ./components/Results.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ParkingSpace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParkingSpace */ "./components/ParkingSpace.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\HBALOYI\\Documents\\Reactjs\\parking-sync\\parking-sync\\components\\Results.js",
    _s = $RefreshSig$();





function Results(_ref) {
  _s();

  var _this = this;

  var _ref$results = _ref.results,
      results = _ref$results === void 0 ? [] : _ref$results;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      selectSpace = _useState[0],
      selectedSpaces = _useState[1];

  var handleClick = function handleClick(spaceId) {
    selectedSpaces(spaceId);
  };

  console.log("Changed Results", results);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "flex flex-row ...",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "border-4 border-green-600 border-double\r bg-green-400 w-full h-96 mx-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "text-3xl  mt-8 mr-8  ml-10 font-bold mb-10 text-gray-200 ...",
        children: "GET YOUR PARKING TICKET"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "border-4  border-solid bg-white w-99 h-64 mx-8 mt-8",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "flex flex-row flex-wrap",
          children: results.map(function (space) {
            var color = "gray";

            if (selectSpace === space) {
              color = "yellow";
            }

            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ParkingSpace__WEBPACK_IMPORTED_MODULE_1__.default, {
              color: color,
              func: handleClick,
              space: space
            }, space, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "border-4 border-green-600 border-double\r bg-green-400 w-full h-96 mx-8 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        className: "p-2 pl-5 pr-5 bg-gray-400 text-gray-100 text-lg rounded-lg focus:border-4 \r border-gray-300  w-full mt-4",
        children: "Exit Parking"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "relative text-gray-700 mt-8 mr-8 mb-8 ml-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          className: "w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline",
          type: "text",
          placeholder: "Enter parking barcode"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
          className: "absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-black rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700",
          children: "Exit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_s(Results, "Dbo/Ta+WD+YsTiSLTjl17Tb6YY0=");

_c = Results;
/* harmony default export */ __webpack_exports__["default"] = (Results);

var _c;

$RefreshReg$(_c, "Results");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDcxZDczNDFlNzdlYjU3MWZiOTUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsU0FBU0csT0FBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLDBCQUFoQkMsT0FBZ0I7QUFBQSxNQUFoQkEsT0FBZ0IsNkJBQU4sRUFBTTs7QUFDakMsa0JBQXNDSCwrQ0FBUSxFQUE5QztBQUFBLE1BQU9JLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFhO0FBQy9CRixJQUFBQSxjQUFjLENBQUNFLE9BQUQsQ0FBZDtBQUNELEdBRkQ7O0FBSUFDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCTixPQUEvQjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUMseUVBRFo7QUFBQSw4QkFJRTtBQUFLLGlCQUFTLEVBQUMsOERBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQU9FO0FBQUssaUJBQVMsRUFBQyxxREFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyx5QkFBZjtBQUFBLG9CQUNHQSxPQUFPLENBQUNPLEdBQVIsQ0FBWSxVQUFDQyxLQUFELEVBQVc7QUFDdEIsZ0JBQUlDLEtBQUssR0FBRyxNQUFaOztBQUNBLGdCQUFJUixXQUFXLEtBQUtPLEtBQXBCLEVBQTJCO0FBQ3pCQyxjQUFBQSxLQUFLLEdBQUcsUUFBUjtBQUNEOztBQUNELGdDQUNFLDhEQUFDLGtEQUFEO0FBRUUsbUJBQUssRUFBRUEsS0FGVDtBQUdFLGtCQUFJLEVBQUVOLFdBSFI7QUFJRSxtQkFBSyxFQUFFSztBQUpULGVBQ09BLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQVFELFdBYkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBNEJFO0FBQ0UsZUFBUyxFQUFDLDBFQURaO0FBQUEsOEJBSUU7QUFDRSxpQkFBUyxFQUFDLDJHQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFXRTtBQUFLLGlCQUFTLEVBQUMsNENBQWY7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUMsNkZBRFo7QUFFRSxjQUFJLEVBQUMsTUFGUDtBQUdFLHFCQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUU7QUFBUSxtQkFBUyxFQUFDLHNJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1RUQ7O0dBL0VRVDs7S0FBQUE7QUFpRlQsK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFya2luZ1NwYWNlIGZyb20gXCIuL1BhcmtpbmdTcGFjZVwiO1xyXG5cclxuZnVuY3Rpb24gUmVzdWx0cyh7IHJlc3VsdHMgPSBbXSB9KSB7XHJcbiAgY29uc3QgW3NlbGVjdFNwYWNlLCBzZWxlY3RlZFNwYWNlc10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChzcGFjZUlkKSA9PiB7XHJcbiAgICBzZWxlY3RlZFNwYWNlcyhzcGFjZUlkKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhcIkNoYW5nZWQgUmVzdWx0c1wiLCByZXN1bHRzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IC4uLlwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTQgYm9yZGVyLWdyZWVuLTYwMCBib3JkZXItZG91YmxlXHJcbiAgICAgICAgICAgICAgICAgICAgYmctZ3JlZW4tNDAwIHctZnVsbCBoLTk2IG14LThcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCAgbXQtOCBtci04ICBtbC0xMCBmb250LWJvbGQgbWItMTAgdGV4dC1ncmF5LTIwMCAuLi5cIj5cclxuICAgICAgICAgIEdFVCBZT1VSIFBBUktJTkcgVElDS0VUXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItNCAgYm9yZGVyLXNvbGlkIGJnLXdoaXRlIHctOTkgaC02NCBteC04IG10LThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAge3Jlc3VsdHMubWFwKChzcGFjZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBjb2xvciA9IFwiZ3JheVwiO1xyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RTcGFjZSA9PT0gc3BhY2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJ5ZWxsb3dcIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxQYXJraW5nU3BhY2VcclxuICAgICAgICAgICAgICAgICAga2V5PXtzcGFjZX1cclxuICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBmdW5jPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgc3BhY2U9e3NwYWNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItNCBib3JkZXItZ3JlZW4tNjAwIGJvcmRlci1kb3VibGVcclxuICAgICAgICAgICAgICAgICAgICBiZy1ncmVlbi00MDAgdy1mdWxsIGgtOTYgbXgtOCBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHBsLTUgcHItNSBiZy1ncmF5LTQwMCB0ZXh0LWdyYXktMTAwIHRleHQtbGcgcm91bmRlZC1sZyBmb2N1czpib3JkZXItNCBcclxuICAgIGJvcmRlci1ncmF5LTMwMCAgdy1mdWxsIG10LTRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEV4aXQgUGFya2luZ1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtZ3JheS03MDAgbXQtOCBtci04IG1iLTggbWwtOFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIHBsLTMgcHItOCB0ZXh0LWJhc2UgcGxhY2Vob2xkZXItZ3JheS02MDAgYm9yZGVyIHJvdW5kZWQtbGcgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFya2luZyBiYXJjb2RlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIHB4LTQgZm9udC1ib2xkIHRleHQtd2hpdGUgYmctYmxhY2sgcm91bmRlZC1yLWxnIGhvdmVyOmJnLWluZGlnby01MDAgZm9jdXM6YmctaW5kaWdvLTcwMFwiPlxyXG4gICAgICAgICAgICBFeGl0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXJraW5nIGJhcmNvZGVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyBmb2N1czpib3JkZXItYmx1ZS0zMDAgbXQtOCBtci04IG1iLTggbWwtOCBhbGlnbi1taWRkbGUgcm91bmRlZC1sZyBoLTEwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgcGwtMyBwci04IHRleHQtYmFzZSBwbGFjZWhvbGRlci1ncmF5LTYwMCBib3JkZXIgcm91bmRlZC1sZyBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXJraW5nIGJhcmNvZGVcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIHB4LTQgZm9udC1ib2xkIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCByb3VuZGVkLXItbGcgaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1czpiZy1pbmRpZ28tNzAwXCI+XHJcbiAgICAgICAgICAgIEV4aXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1yLTQgYm9yZGVyLWluZGlnby02MDAgLi4uXCI+PC9kaXY+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0cztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQYXJraW5nU3BhY2UiLCJSZXN1bHRzIiwicmVzdWx0cyIsInNlbGVjdFNwYWNlIiwic2VsZWN0ZWRTcGFjZXMiLCJoYW5kbGVDbGljayIsInNwYWNlSWQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwic3BhY2UiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=