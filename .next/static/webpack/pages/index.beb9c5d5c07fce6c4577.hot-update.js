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
    console.log("spance", space);
    func(space);
    debugger;
    console.log("ínside");
    setTicketModal(function (isShown) {
      return !isShown;
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "flex flex-row",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "w-8 h-8 bg-".concat(color, "-400 m-2"),
      onClick: handleTicketSelection
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmViOWM1ZDVjMDdmY2U2YzQ1NzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLFNBQVNHLFlBQVQsT0FBOEQ7QUFBQSxNQUF0Q0MsS0FBc0MsUUFBdENBLEtBQXNDO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUFBLE1BQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxNQUFsQkMsY0FBa0IsUUFBbEJBLGNBQWtCOztBQUM1RCxNQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDbENDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JOLEtBQXRCO0FBQ0FFLElBQUFBLElBQUksQ0FBQ0YsS0FBRCxDQUFKO0FBQ0E7QUFDQUssSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBSCxJQUFBQSxjQUFjLENBQUMsVUFBQ0ksT0FBRDtBQUFBLGFBQWEsQ0FBQ0EsT0FBZDtBQUFBLEtBQUQsQ0FBZDtBQUNELEdBTkQ7O0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDJCQUNFO0FBQ0UsZUFBUyx1QkFBZ0JOLEtBQWhCLGFBRFg7QUFFRSxhQUFPLEVBQUVHO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztLQWhCUUw7QUFpQlQsK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXJraW5nU3BhY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpY2tldE1vZGFsIGZyb20gXCIuLy4uL3BhZ2VzL3RpY2tldE1vZGFsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFBhcmtpbmdTcGFjZSh7IHNwYWNlLCBjb2xvciwgZnVuYywgc2V0VGlja2V0TW9kYWwgfSkge1xyXG4gIGNvbnN0IGhhbmRsZVRpY2tldFNlbGVjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic3BhbmNlXCIsIHNwYWNlKTtcclxuICAgIGZ1bmMoc3BhY2UpO1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICBjb25zb2xlLmxvZyhcIsOtbnNpZGVcIik7XHJcbiAgICBzZXRUaWNrZXRNb2RhbCgoaXNTaG93bikgPT4gIWlzU2hvd24pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgdy04IGgtOCBiZy0ke2NvbG9yfS00MDAgbS0yYH1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVUaWNrZXRTZWxlY3Rpb259XHJcbiAgICAgID48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGFya2luZ1NwYWNlO1xyXG4iXSwibmFtZXMiOlsiVGlja2V0TW9kYWwiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlBhcmtpbmdTcGFjZSIsInNwYWNlIiwiY29sb3IiLCJmdW5jIiwic2V0VGlja2V0TW9kYWwiLCJoYW5kbGVUaWNrZXRTZWxlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiaXNTaG93biJdLCJzb3VyY2VSb290IjoiIn0=