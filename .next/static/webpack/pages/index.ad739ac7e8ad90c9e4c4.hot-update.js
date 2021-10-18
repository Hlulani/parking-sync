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
    var _results$find;

    selectedSpaces(spaceId);
    var barcode = (_results$find = results.find(function (item, index) {
      return index === spaceId;
    })) === null || _results$find === void 0 ? void 0 : _results$find.barcode;
    setSelectedBarcode(barcode);
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
        lineNumber: 24,
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
              lineNumber: 36,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "border-4 border-green-600 border-double\r bg-green-400 w-full h-96 mx-8 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        className: "p-2 pl-5 pr-5 bg-gray-400 text-gray-100 text-lg rounded-lg focus:border-4 \r border-gray-300  w-full mt-4",
        children: "Exit Parking"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "relative text-gray-700 mt-8 mr-8 mb-8 ml-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          className: "w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline",
          type: "text",
          placeholder: "Enter parking barcode"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          className: "absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-black rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700",
          children: "Exit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_pages_ticketModal__WEBPACK_IMPORTED_MODULE_3__.default, {
      showModal: showModal,
      setTicketModal: setTicketModal,
      barcode: selectedBarcode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWQ3MzlhYzdlOGFkOTBjOWU0YzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ksT0FBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLDBCQUFoQkMsT0FBZ0I7QUFBQSxNQUFoQkEsT0FBZ0IsNkJBQU4sRUFBTTs7QUFDakMsa0JBQXNDSiwrQ0FBUSxFQUE5QztBQUFBLE1BQU9LLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQThDTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQSxNQUFPTyxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSx3QkFBb0NULHFEQUFBLENBQWUsS0FBZixDQUFwQztBQUFBO0FBQUEsTUFBT1UsU0FBUDtBQUFBLE1BQWtCQyxjQUFsQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQWE7QUFBQTs7QUFDL0JOLElBQUFBLGNBQWMsQ0FBQ00sT0FBRCxDQUFkO0FBQ0EsUUFBTUMsT0FBTyxvQkFBR1QsT0FBTyxDQUFDVSxJQUFSLENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsYUFBaUJBLEtBQUssS0FBS0osT0FBM0I7QUFBQSxLQUFiLENBQUgsa0RBQUcsY0FBa0RDLE9BQWxFO0FBQ0FMLElBQUFBLGtCQUFrQixDQUFDSyxPQUFELENBQWxCO0FBQ0FJLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJOLE9BQXZCO0FBQ0QsR0FMRDs7QUFPQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JkLE9BQS9CO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBQyx5RUFEWjtBQUFBLDhCQUlFO0FBQUssaUJBQVMsRUFBQyw4REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBT0U7QUFBSyxpQkFBUyxFQUFDLHFEQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHlCQUFmO0FBQUEsb0JBQ0dBLE9BQU8sQ0FBQ2UsR0FBUixDQUFZLGlCQUFzQjtBQUFBLGdCQUFwQk4sT0FBb0IsU0FBcEJBLE9BQW9CO0FBQUEsZ0JBQVhHLEtBQVcsU0FBWEEsS0FBVztBQUNqQ0MsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ0wsY0FBQUEsT0FBTyxFQUFQQTtBQUFELGFBQVo7QUFDQSxnQkFBSU8sS0FBSyxHQUFHLE1BQVo7O0FBQ0EsZ0JBQUlmLFdBQVcsS0FBS1csS0FBcEIsRUFBMkI7QUFDekJJLGNBQUFBLEtBQUssR0FBRyxRQUFSO0FBQ0Q7O0FBQ0QsZ0NBQ0UsOERBQUMsa0RBQUQ7QUFFRSxtQkFBSyxFQUFFQSxLQUZUO0FBR0Usa0JBQUksRUFBRVQsV0FIUjtBQUlFLG1CQUFLLEVBQUVLLEtBSlQ7QUFLRSw0QkFBYyxFQUFFTjtBQUxsQixlQUNPTSxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFTRCxXQWZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQThCRTtBQUNFLGVBQVMsRUFBQywwRUFEWjtBQUFBLDhCQUlFO0FBQ0UsaUJBQVMsRUFBQywyR0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBV0U7QUFBSyxpQkFBUyxFQUFDLDRDQUFmO0FBQUEsZ0NBQ0U7QUFDRSxtQkFBUyxFQUFDLDZGQURaO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxxQkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU1FO0FBQVEsbUJBQVMsRUFBQyxzSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJGLGVBc0RFLDhEQUFDLHVEQUFEO0FBQWEsZUFBUyxFQUFFUCxTQUF4QjtBQUFtQyxvQkFBYyxFQUFFQyxjQUFuRDtBQUFtRSxhQUFPLEVBQUVIO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyREQ7O0dBeEVRSjs7S0FBQUE7QUEwRVQsK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFya2luZ1NwYWNlIGZyb20gXCIuL1BhcmtpbmdTcGFjZVwiO1xyXG5pbXBvcnQgVGlja2V0TW9kYWwgZnJvbSAnLi8uLi9wYWdlcy90aWNrZXRNb2RhbCc7XHJcblxyXG5mdW5jdGlvbiBSZXN1bHRzKHsgcmVzdWx0cyA9IFtdIH0pIHtcclxuICBjb25zdCBbc2VsZWN0U3BhY2UsIHNlbGVjdGVkU3BhY2VzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQmFyY29kZSwgc2V0U2VsZWN0ZWRCYXJjb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFRpY2tldE1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoc3BhY2VJZCkgPT4ge1xyXG4gICAgc2VsZWN0ZWRTcGFjZXMoc3BhY2VJZCk7XHJcbiAgICBjb25zdCBiYXJjb2RlID0gcmVzdWx0cy5maW5kKChpdGVtLCBpbmRleCkgPT4gaW5kZXggPT09IHNwYWNlSWQpPy5iYXJjb2RlO1xyXG4gICAgc2V0U2VsZWN0ZWRCYXJjb2RlKGJhcmNvZGUpO1xyXG4gICAgY29uc29sZS5sb2coJ3NwYWNlSWQnLCBzcGFjZUlkKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhcIkNoYW5nZWQgUmVzdWx0c1wiLCByZXN1bHRzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IC4uLlwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTQgYm9yZGVyLWdyZWVuLTYwMCBib3JkZXItZG91YmxlXHJcbiAgICAgICAgICAgICAgICAgICAgYmctZ3JlZW4tNDAwIHctZnVsbCBoLTk2IG14LThcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCAgbXQtOCBtci04ICBtbC0xMCBmb250LWJvbGQgbWItMTAgdGV4dC1ncmF5LTIwMCAuLi5cIj5cclxuICAgICAgICAgIEdFVCBZT1VSIFBBUktJTkcgVElDS0VUXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItNCAgYm9yZGVyLXNvbGlkIGJnLXdoaXRlIHctOTkgaC02NCBteC04IG10LThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcIiA+XHJcbiAgICAgICAgICAgIHtyZXN1bHRzLm1hcCgoe2JhcmNvZGUgLGluZGV4fSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtiYXJjb2RlfSlcclxuICAgICAgICAgICAgICBsZXQgY29sb3IgPSBcImdyYXlcIjtcclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0U3BhY2UgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwieWVsbG93XCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UGFya2luZ1NwYWNlXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgICAgICAgICAgICAgZnVuYz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgIHNwYWNlPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgc2V0VGlja2V0TW9kYWw9e3NldFRpY2tldE1vZGFsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX0gXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTQgYm9yZGVyLWdyZWVuLTYwMCBib3JkZXItZG91YmxlXHJcbiAgICAgICAgICAgICAgICAgICAgYmctZ3JlZW4tNDAwIHctZnVsbCBoLTk2IG14LTggXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBwbC01IHByLTUgYmctZ3JheS00MDAgdGV4dC1ncmF5LTEwMCB0ZXh0LWxnIHJvdW5kZWQtbGcgZm9jdXM6Ym9yZGVyLTQgXHJcbiAgICBib3JkZXItZ3JheS0zMDAgIHctZnVsbCBtdC00XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBFeGl0IFBhcmtpbmdcclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LWdyYXktNzAwIG10LTggbXItOCBtYi04IG1sLThcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBwbC0zIHByLTggdGV4dC1iYXNlIHBsYWNlaG9sZGVyLWdyYXktNjAwIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBhcmtpbmcgYmFyY29kZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBweC00IGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJnLWJsYWNrIHJvdW5kZWQtci1sZyBob3ZlcjpiZy1pbmRpZ28tNTAwIGZvY3VzOmJnLWluZGlnby03MDBcIj5cclxuICAgICAgICAgICAgRXhpdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFRpY2tldE1vZGFsIHNob3dNb2RhbD17c2hvd01vZGFsfSBzZXRUaWNrZXRNb2RhbD17c2V0VGlja2V0TW9kYWx9IGJhcmNvZGU9e3NlbGVjdGVkQmFyY29kZX0vPlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUGFya2luZ1NwYWNlIiwiVGlja2V0TW9kYWwiLCJSZXN1bHRzIiwicmVzdWx0cyIsInNlbGVjdFNwYWNlIiwic2VsZWN0ZWRTcGFjZXMiLCJzZWxlY3RlZEJhcmNvZGUiLCJzZXRTZWxlY3RlZEJhcmNvZGUiLCJzaG93TW9kYWwiLCJzZXRUaWNrZXRNb2RhbCIsImhhbmRsZUNsaWNrIiwic3BhY2VJZCIsImJhcmNvZGUiLCJmaW5kIiwiaXRlbSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIm1hcCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==