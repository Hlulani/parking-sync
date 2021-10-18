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
    console.log('spance', space);
    func(space);
    debugger;
    console.log('ínside');
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
      lineNumber: 16,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTRiMDVlZGViNTdmYjIxNDEyNDcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUVBLFNBQVNHLFlBQVQsT0FBNEQ7QUFBQSxNQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFBQSxNQUFqQkMsY0FBaUIsUUFBakJBLGNBQWlCOztBQUV4RCxNQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDaENDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JOLEtBQXRCO0FBQ0FFLElBQUFBLElBQUksQ0FBQ0YsS0FBRCxDQUFKO0FBQ0E7QUFDSUssSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBSCxJQUFBQSxjQUFjLENBQUMsVUFBQUksT0FBTztBQUFBLGFBQUksQ0FBQ0EsT0FBTDtBQUFBLEtBQVIsQ0FBZDtBQUNQLEdBTkQ7O0FBT0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUcsZUFBakI7QUFBQSwyQkFDQTtBQUFLLGVBQVMsdUJBQWdCTixLQUFoQixhQUFkO0FBQStDLGFBQU8sRUFBRUc7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztLQWhCUUw7QUFrQlQsK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXJraW5nU3BhY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBUaWNrZXRNb2RhbCBmcm9tICcuLy4uL3BhZ2VzL3RpY2tldE1vZGFsJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gUGFya2luZ1NwYWNlKHtzcGFjZSwgY29sb3IsIGZ1bmMsIHNldFRpY2tldE1vZGFsfSkge1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRpY2tldFNlbGVjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3BhbmNlJywgc3BhY2UpO1xyXG4gICAgICAgIGZ1bmMoc3BhY2UpO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnw61uc2lkZScpO1xyXG4gICAgICAgICAgICBzZXRUaWNrZXRNb2RhbChpc1Nob3duID0+ICFpc1Nob3duKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTggaC04IGJnLSR7Y29sb3J9LTQwMCBtLTJgfSBvbkNsaWNrPXtoYW5kbGVUaWNrZXRTZWxlY3Rpb259PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFya2luZ1NwYWNlXHJcbiJdLCJuYW1lcyI6WyJUaWNrZXRNb2RhbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUGFya2luZ1NwYWNlIiwic3BhY2UiLCJjb2xvciIsImZ1bmMiLCJzZXRUaWNrZXRNb2RhbCIsImhhbmRsZVRpY2tldFNlbGVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpc1Nob3duIl0sInNvdXJjZVJvb3QiOiIifQ==