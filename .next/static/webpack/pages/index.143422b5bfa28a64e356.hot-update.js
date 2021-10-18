"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Results.js":
/*!*******************************!*\
  !*** ./components/Results.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_HBALOYI_Documents_Reactjs_parking_sync_parking_sync_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ParkingSpace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParkingSpace */ "./components/ParkingSpace.js");
/* harmony import */ var _pages_ticketModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../pages/ticketModal */ "./pages/ticketModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\HBALOYI\\Documents\\Reactjs\\parking-sync\\parking-sync\\components\\Results.js",
    _s = $RefreshSig$();






function Results(_ref) {
  _s();

  var _this = this;

  var _ref$results = _ref.results,
      results = _ref$results === void 0 ? [] : _ref$results;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      selectSpace = _useState[0],
      selectedSpaces = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      selectedBarcode = _useState2[0],
      setSelectedBarcode = _useState2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),
      _React$useState2 = (0,C_Users_HBALOYI_Documents_Reactjs_parking_sync_parking_sync_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      showModal = _React$useState2[0],
      setTicketModal = _React$useState2[1];

  var handleClick = function handleClick(spaceId) {
    selectedSpaces(spaceId);
    var barcode = results.find(item);
    console.log('spaceId', spaceId);
  };

  console.log("Changed Results", results);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "flex flex-row ...",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "border-4 border-green-600 border-double\r bg-green-400 w-full h-96 mx-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "text-3xl  mt-8 mr-8  ml-10 font-bold mb-10 text-gray-200 ...",
        children: "GET YOUR PARKING TICKET"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "border-4  border-solid bg-white w-99 h-64 mx-8 mt-8",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "flex flex-row flex-wrap",
          children: results.map(function (_ref2) {
            var barcode = _ref2.barcode,
                index = _ref2.index;
            console.log({
              barcode: barcode
            });
            var color = "gray";

            if (selectSpace === index) {
              color = "yellow";
            }

            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ParkingSpace__WEBPACK_IMPORTED_MODULE_2__.default, {
              color: color,
              func: handleClick,
              space: index,
              setTicketModal: setTicketModal
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "border-4 border-green-600 border-double\r bg-green-400 w-full h-96 mx-8 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        className: "p-2 pl-5 pr-5 bg-gray-400 text-gray-100 text-lg rounded-lg focus:border-4 \r border-gray-300  w-full mt-4",
        children: "Exit Parking"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "relative text-gray-700 mt-8 mr-8 mb-8 ml-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          className: "w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline",
          type: "text",
          placeholder: "Enter parking barcode"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          className: "absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-black rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700",
          children: "Exit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_pages_ticketModal__WEBPACK_IMPORTED_MODULE_3__.default, {
      showModal: showModal,
      setTicketModal: setTicketModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(Results, "QBTgTzQIodZgo9S3D2ykJTYg7UI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTQzNDIyYjViZmEyOGE2NGUzNTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ksT0FBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLDBCQUFoQkMsT0FBZ0I7QUFBQSxNQUFoQkEsT0FBZ0IsNkJBQU4sRUFBTTs7QUFDakMsa0JBQXNDSiwrQ0FBUSxFQUE5QztBQUFBLE1BQU9LLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQThDTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQSxNQUFPTyxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSx3QkFBb0NULHFEQUFBLENBQWUsS0FBZixDQUFwQztBQUFBO0FBQUEsTUFBT1UsU0FBUDtBQUFBLE1BQWtCQyxjQUFsQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQWE7QUFDL0JOLElBQUFBLGNBQWMsQ0FBQ00sT0FBRCxDQUFkO0FBQ0EsUUFBTUMsT0FBTyxHQUFHVCxPQUFPLENBQUNVLElBQVIsQ0FBYUMsSUFBYixDQUFoQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCTCxPQUF2QjtBQUNELEdBSkQ7O0FBTUFJLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCYixPQUEvQjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUMseUVBRFo7QUFBQSw4QkFJRTtBQUFLLGlCQUFTLEVBQUMsOERBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQU9FO0FBQUssaUJBQVMsRUFBQyxxREFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyx5QkFBZjtBQUFBLG9CQUNHQSxPQUFPLENBQUNjLEdBQVIsQ0FBWSxpQkFBc0I7QUFBQSxnQkFBcEJMLE9BQW9CLFNBQXBCQSxPQUFvQjtBQUFBLGdCQUFYTSxLQUFXLFNBQVhBLEtBQVc7QUFDakNILFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNKLGNBQUFBLE9BQU8sRUFBUEE7QUFBRCxhQUFaO0FBQ0EsZ0JBQUlPLEtBQUssR0FBRyxNQUFaOztBQUNBLGdCQUFJZixXQUFXLEtBQUtjLEtBQXBCLEVBQTJCO0FBQ3pCQyxjQUFBQSxLQUFLLEdBQUcsUUFBUjtBQUNEOztBQUNELGdDQUNFLDhEQUFDLGtEQUFEO0FBRUUsbUJBQUssRUFBRUEsS0FGVDtBQUdFLGtCQUFJLEVBQUVULFdBSFI7QUFJRSxtQkFBSyxFQUFFUSxLQUpUO0FBS0UsNEJBQWMsRUFBRVQ7QUFMbEIsZUFDT1MsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBU0QsV0FmQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUE4QkU7QUFDRSxlQUFTLEVBQUMsMEVBRFo7QUFBQSw4QkFJRTtBQUNFLGlCQUFTLEVBQUMsMkdBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQVdFO0FBQUssaUJBQVMsRUFBQyw0Q0FBZjtBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBQyw2RkFEWjtBQUVFLGNBQUksRUFBQyxNQUZQO0FBR0UscUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFNRTtBQUFRLG1CQUFTLEVBQUMsc0lBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlCRixlQXFFRSw4REFBQyx1REFBRDtBQUFhLGVBQVMsRUFBRVYsU0FBeEI7QUFBbUMsb0JBQWMsRUFBRUM7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBFRDs7R0F0RlFQOztLQUFBQTtBQXdGVCwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Jlc3VsdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYXJraW5nU3BhY2UgZnJvbSBcIi4vUGFya2luZ1NwYWNlXCI7XHJcbmltcG9ydCBUaWNrZXRNb2RhbCBmcm9tICcuLy4uL3BhZ2VzL3RpY2tldE1vZGFsJztcclxuXHJcbmZ1bmN0aW9uIFJlc3VsdHMoeyByZXN1bHRzID0gW10gfSkge1xyXG4gIGNvbnN0IFtzZWxlY3RTcGFjZSwgc2VsZWN0ZWRTcGFjZXNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2VsZWN0ZWRCYXJjb2RlLCBzZXRTZWxlY3RlZEJhcmNvZGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0VGlja2V0TW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChzcGFjZUlkKSA9PiB7XHJcbiAgICBzZWxlY3RlZFNwYWNlcyhzcGFjZUlkKTtcclxuICAgIGNvbnN0IGJhcmNvZGUgPSByZXN1bHRzLmZpbmQoaXRlbSlcclxuICAgIGNvbnNvbGUubG9nKCdzcGFjZUlkJywgc3BhY2VJZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJDaGFuZ2VkIFJlc3VsdHNcIiwgcmVzdWx0cyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyAuLi5cIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci00IGJvcmRlci1ncmVlbi02MDAgYm9yZGVyLWRvdWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGJnLWdyZWVuLTQwMCB3LWZ1bGwgaC05NiBteC04XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgIG10LTggbXItOCAgbWwtMTAgZm9udC1ib2xkIG1iLTEwIHRleHQtZ3JheS0yMDAgLi4uXCI+XHJcbiAgICAgICAgICBHRVQgWU9VUiBQQVJLSU5HIFRJQ0tFVFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTQgIGJvcmRlci1zb2xpZCBiZy13aGl0ZSB3LTk5IGgtNjQgbXgtOCBtdC04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC13cmFwXCIgPlxyXG4gICAgICAgICAgICB7cmVzdWx0cy5tYXAoKHtiYXJjb2RlICxpbmRleH0pID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7YmFyY29kZX0pXHJcbiAgICAgICAgICAgICAgbGV0IGNvbG9yID0gXCJncmF5XCI7XHJcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdFNwYWNlID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcInllbGxvd1wiO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFBhcmtpbmdTcGFjZVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIGZ1bmM9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICBzcGFjZT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIHNldFRpY2tldE1vZGFsPXtzZXRUaWNrZXRNb2RhbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9IFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci00IGJvcmRlci1ncmVlbi02MDAgYm9yZGVyLWRvdWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGJnLWdyZWVuLTQwMCB3LWZ1bGwgaC05NiBteC04IFwiXHJcbiAgICAgID5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcGwtNSBwci01IGJnLWdyYXktNDAwIHRleHQtZ3JheS0xMDAgdGV4dC1sZyByb3VuZGVkLWxnIGZvY3VzOmJvcmRlci00IFxyXG4gICAgYm9yZGVyLWdyYXktMzAwICB3LWZ1bGwgbXQtNFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRXhpdCBQYXJraW5nXHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1ncmF5LTcwMCBtdC04IG1yLTggbWItOCBtbC04XCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgcGwtMyBwci04IHRleHQtYmFzZSBwbGFjZWhvbGRlci1ncmF5LTYwMCBib3JkZXIgcm91bmRlZC1sZyBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXJraW5nIGJhcmNvZGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBmb250LWJvbGQgdGV4dC13aGl0ZSBiZy1ibGFjayByb3VuZGVkLXItbGcgaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1czpiZy1pbmRpZ28tNzAwXCI+XHJcbiAgICAgICAgICAgIEV4aXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBhcmtpbmcgYmFyY29kZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIGZvY3VzOmJvcmRlci1ibHVlLTMwMCBtdC04IG1yLTggbWItOCBtbC04IGFsaWduLW1pZGRsZSByb3VuZGVkLWxnIGgtMTBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBwbC0zIHByLTggdGV4dC1iYXNlIHBsYWNlaG9sZGVyLWdyYXktNjAwIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBhcmtpbmcgYmFyY29kZVwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBmb250LWJvbGQgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIHJvdW5kZWQtci1sZyBob3ZlcjpiZy1pbmRpZ28tNTAwIGZvY3VzOmJnLWluZGlnby03MDBcIj5cclxuICAgICAgICAgICAgRXhpdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFRpY2tldE1vZGFsIHNob3dNb2RhbD17c2hvd01vZGFsfSBzZXRUaWNrZXRNb2RhbD17c2V0VGlja2V0TW9kYWx9Lz5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXItNCBib3JkZXItaW5kaWdvLTYwMCAuLi5cIj48L2Rpdj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBhcmtpbmdTcGFjZSIsIlRpY2tldE1vZGFsIiwiUmVzdWx0cyIsInJlc3VsdHMiLCJzZWxlY3RTcGFjZSIsInNlbGVjdGVkU3BhY2VzIiwic2VsZWN0ZWRCYXJjb2RlIiwic2V0U2VsZWN0ZWRCYXJjb2RlIiwic2hvd01vZGFsIiwic2V0VGlja2V0TW9kYWwiLCJoYW5kbGVDbGljayIsInNwYWNlSWQiLCJiYXJjb2RlIiwiZmluZCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaW5kZXgiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=