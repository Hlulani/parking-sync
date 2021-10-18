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
    var barcode = results.find(function (item, index) {
      return index === space;
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmZhNWIwZDg0MTg4MjNkZDIyZDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ksT0FBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLDBCQUFoQkMsT0FBZ0I7QUFBQSxNQUFoQkEsT0FBZ0IsNkJBQU4sRUFBTTs7QUFDakMsa0JBQXNDSiwrQ0FBUSxFQUE5QztBQUFBLE1BQU9LLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQThDTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQSxNQUFPTyxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSx3QkFBb0NULHFEQUFBLENBQWUsS0FBZixDQUFwQztBQUFBO0FBQUEsTUFBT1UsU0FBUDtBQUFBLE1BQWtCQyxjQUFsQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQWE7QUFDL0JOLElBQUFBLGNBQWMsQ0FBQ00sT0FBRCxDQUFkO0FBQ0EsUUFBTUMsT0FBTyxHQUFHVCxPQUFPLENBQUNVLElBQVIsQ0FBYSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxhQUFpQkEsS0FBSyxLQUFLQyxLQUEzQjtBQUFBLEtBQWIsQ0FBaEI7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QlAsT0FBdkI7QUFDRCxHQUpEOztBQU1BTSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQmYsT0FBL0I7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFDLHlFQURaO0FBQUEsOEJBSUU7QUFBSyxpQkFBUyxFQUFDLDhEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFPRTtBQUFLLGlCQUFTLEVBQUMscURBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMseUJBQWY7QUFBQSxvQkFDR0EsT0FBTyxDQUFDZ0IsR0FBUixDQUFZLGlCQUFzQjtBQUFBLGdCQUFwQlAsT0FBb0IsU0FBcEJBLE9BQW9CO0FBQUEsZ0JBQVhHLEtBQVcsU0FBWEEsS0FBVztBQUNqQ0UsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ04sY0FBQUEsT0FBTyxFQUFQQTtBQUFELGFBQVo7QUFDQSxnQkFBSVEsS0FBSyxHQUFHLE1BQVo7O0FBQ0EsZ0JBQUloQixXQUFXLEtBQUtXLEtBQXBCLEVBQTJCO0FBQ3pCSyxjQUFBQSxLQUFLLEdBQUcsUUFBUjtBQUNEOztBQUNELGdDQUNFLDhEQUFDLGtEQUFEO0FBRUUsbUJBQUssRUFBRUEsS0FGVDtBQUdFLGtCQUFJLEVBQUVWLFdBSFI7QUFJRSxtQkFBSyxFQUFFSyxLQUpUO0FBS0UsNEJBQWMsRUFBRU47QUFMbEIsZUFDT00sS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBU0QsV0FmQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUE4QkU7QUFDRSxlQUFTLEVBQUMsMEVBRFo7QUFBQSw4QkFJRTtBQUNFLGlCQUFTLEVBQUMsMkdBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQVdFO0FBQUssaUJBQVMsRUFBQyw0Q0FBZjtBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBQyw2RkFEWjtBQUVFLGNBQUksRUFBQyxNQUZQO0FBR0UscUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFNRTtBQUFRLG1CQUFTLEVBQUMsc0lBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlCRixlQXFFRSw4REFBQyx1REFBRDtBQUFhLGVBQVMsRUFBRVAsU0FBeEI7QUFBbUMsb0JBQWMsRUFBRUM7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBFRDs7R0F0RlFQOztLQUFBQTtBQXdGVCwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Jlc3VsdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYXJraW5nU3BhY2UgZnJvbSBcIi4vUGFya2luZ1NwYWNlXCI7XHJcbmltcG9ydCBUaWNrZXRNb2RhbCBmcm9tICcuLy4uL3BhZ2VzL3RpY2tldE1vZGFsJztcclxuXHJcbmZ1bmN0aW9uIFJlc3VsdHMoeyByZXN1bHRzID0gW10gfSkge1xyXG4gIGNvbnN0IFtzZWxlY3RTcGFjZSwgc2VsZWN0ZWRTcGFjZXNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2VsZWN0ZWRCYXJjb2RlLCBzZXRTZWxlY3RlZEJhcmNvZGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0VGlja2V0TW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChzcGFjZUlkKSA9PiB7XHJcbiAgICBzZWxlY3RlZFNwYWNlcyhzcGFjZUlkKTtcclxuICAgIGNvbnN0IGJhcmNvZGUgPSByZXN1bHRzLmZpbmQoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCA9PT0gc3BhY2UpO1xyXG4gICAgY29uc29sZS5sb2coJ3NwYWNlSWQnLCBzcGFjZUlkKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhcIkNoYW5nZWQgUmVzdWx0c1wiLCByZXN1bHRzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IC4uLlwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTQgYm9yZGVyLWdyZWVuLTYwMCBib3JkZXItZG91YmxlXHJcbiAgICAgICAgICAgICAgICAgICAgYmctZ3JlZW4tNDAwIHctZnVsbCBoLTk2IG14LThcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCAgbXQtOCBtci04ICBtbC0xMCBmb250LWJvbGQgbWItMTAgdGV4dC1ncmF5LTIwMCAuLi5cIj5cclxuICAgICAgICAgIEdFVCBZT1VSIFBBUktJTkcgVElDS0VUXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItNCAgYm9yZGVyLXNvbGlkIGJnLXdoaXRlIHctOTkgaC02NCBteC04IG10LThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcIiA+XHJcbiAgICAgICAgICAgIHtyZXN1bHRzLm1hcCgoe2JhcmNvZGUgLGluZGV4fSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtiYXJjb2RlfSlcclxuICAgICAgICAgICAgICBsZXQgY29sb3IgPSBcImdyYXlcIjtcclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0U3BhY2UgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwieWVsbG93XCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UGFya2luZ1NwYWNlXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgICAgICAgICAgICAgZnVuYz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgIHNwYWNlPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgc2V0VGlja2V0TW9kYWw9e3NldFRpY2tldE1vZGFsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX0gXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTQgYm9yZGVyLWdyZWVuLTYwMCBib3JkZXItZG91YmxlXHJcbiAgICAgICAgICAgICAgICAgICAgYmctZ3JlZW4tNDAwIHctZnVsbCBoLTk2IG14LTggXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBwbC01IHByLTUgYmctZ3JheS00MDAgdGV4dC1ncmF5LTEwMCB0ZXh0LWxnIHJvdW5kZWQtbGcgZm9jdXM6Ym9yZGVyLTQgXHJcbiAgICBib3JkZXItZ3JheS0zMDAgIHctZnVsbCBtdC00XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBFeGl0IFBhcmtpbmdcclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LWdyYXktNzAwIG10LTggbXItOCBtYi04IG1sLThcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBwbC0zIHByLTggdGV4dC1iYXNlIHBsYWNlaG9sZGVyLWdyYXktNjAwIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBhcmtpbmcgYmFyY29kZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBweC00IGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJnLWJsYWNrIHJvdW5kZWQtci1sZyBob3ZlcjpiZy1pbmRpZ28tNTAwIGZvY3VzOmJnLWluZGlnby03MDBcIj5cclxuICAgICAgICAgICAgRXhpdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFya2luZyBiYXJjb2RlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgZm9jdXM6Ym9yZGVyLWJsdWUtMzAwIG10LTggbXItOCBtYi04IG1sLTggYWxpZ24tbWlkZGxlIHJvdW5kZWQtbGcgaC0xMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIHBsLTMgcHItOCB0ZXh0LWJhc2UgcGxhY2Vob2xkZXItZ3JheS02MDAgYm9yZGVyIHJvdW5kZWQtbGcgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFya2luZyBiYXJjb2RlXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBweC00IGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgcm91bmRlZC1yLWxnIGhvdmVyOmJnLWluZGlnby01MDAgZm9jdXM6YmctaW5kaWdvLTcwMFwiPlxyXG4gICAgICAgICAgICBFeGl0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VGlja2V0TW9kYWwgc2hvd01vZGFsPXtzaG93TW9kYWx9IHNldFRpY2tldE1vZGFsPXtzZXRUaWNrZXRNb2RhbH0vPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJib3JkZXItci00IGJvcmRlci1pbmRpZ28tNjAwIC4uLlwiPjwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUGFya2luZ1NwYWNlIiwiVGlja2V0TW9kYWwiLCJSZXN1bHRzIiwicmVzdWx0cyIsInNlbGVjdFNwYWNlIiwic2VsZWN0ZWRTcGFjZXMiLCJzZWxlY3RlZEJhcmNvZGUiLCJzZXRTZWxlY3RlZEJhcmNvZGUiLCJzaG93TW9kYWwiLCJzZXRUaWNrZXRNb2RhbCIsImhhbmRsZUNsaWNrIiwic3BhY2VJZCIsImJhcmNvZGUiLCJmaW5kIiwiaXRlbSIsImluZGV4Iiwic3BhY2UiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9