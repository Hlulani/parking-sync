"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ParkingSpace.js":
/*!************************************!*\
  !*** ./components/ParkingSpace.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_ticketModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pages/ticketModal */ "./pages/ticketModal.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\HBALOYI\\Documents\\Reactjs\\parking-sync\\parking-sync\\components\\ParkingSpace.js";




function ParkingSpace(_ref) {
  var space = _ref.space,
      color = _ref.color,
      func = _ref.func,
      setTicketModal = _ref.setTicketModal;

  var handleTicketSelection = function handleTicketSelection() {
    if (func(space)) {
      console.log('ínside');
      setTicketModal(function (isShown) {
        return !isShown;
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "flex flex-row",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "w-8 h-8 bg-".concat(color, "-400 m-2"),
      onClick: handleTicketSelection,
      children: "Hello"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

_c = ParkingSpace;
/* harmony default export */ __webpack_exports__["default"] = (ParkingSpace);

var _c;

$RefreshReg$(_c, "ParkingSpace");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTQ5MDUyMWY0MjVjNjE3ODI2YzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUVBLFNBQVNHLFlBQVQsT0FBNEQ7QUFBQSxNQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFBQSxNQUFqQkMsY0FBaUIsUUFBakJBLGNBQWlCOztBQUV4RCxNQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDaEMsUUFBR0YsSUFBSSxDQUFDRixLQUFELENBQVAsRUFBZTtBQUNYSyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FILE1BQUFBLGNBQWMsQ0FBQyxVQUFBSSxPQUFPO0FBQUEsZUFBSSxDQUFDQSxPQUFMO0FBQUEsT0FBUixDQUFkO0FBQ0g7QUFDSixHQUxEOztBQU1BLHNCQUNJO0FBQUssYUFBUyxFQUFHLGVBQWpCO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLHVCQUFnQk4sS0FBaEIsYUFBZDtBQUErQyxhQUFPLEVBQUVHLHFCQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztLQWZRTDtBQWlCVCwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhcmtpbmdTcGFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFRpY2tldE1vZGFsIGZyb20gJy4vLi4vcGFnZXMvdGlja2V0TW9kYWwnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBQYXJraW5nU3BhY2Uoe3NwYWNlLCBjb2xvciwgZnVuYywgc2V0VGlja2V0TW9kYWx9KSB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGlja2V0U2VsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGZ1bmMoc3BhY2UpKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ8OtbnNpZGUnKTtcclxuICAgICAgICAgICAgc2V0VGlja2V0TW9kYWwoaXNTaG93biA9PiAhaXNTaG93bik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctOCBoLTggYmctJHtjb2xvcn0tNDAwIG0tMmB9IG9uQ2xpY2s9e2hhbmRsZVRpY2tldFNlbGVjdGlvbn0+XHJcbiAgICAgICAgSGVsbG9cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcmtpbmdTcGFjZVxyXG4iXSwibmFtZXMiOlsiVGlja2V0TW9kYWwiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlBhcmtpbmdTcGFjZSIsInNwYWNlIiwiY29sb3IiLCJmdW5jIiwic2V0VGlja2V0TW9kYWwiLCJoYW5kbGVUaWNrZXRTZWxlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiaXNTaG93biJdLCJzb3VyY2VSb290IjoiIn0=