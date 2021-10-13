"use strict";
(() => {
var exports = {};
exports.id = "pages/ticketModal";
exports.ids = ["pages/ticketModal"];
exports.modules = {

/***/ "./pages/ticketModal.js":
/*!******************************!*\
  !*** ./pages/ticketModal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TicketModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/Modal */ "@material-tailwind/react/Modal");
/* harmony import */ var _material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/ModalHeader */ "@material-tailwind/react/ModalHeader");
/* harmony import */ var _material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/ModalBody */ "@material-tailwind/react/ModalBody");
/* harmony import */ var _material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/ModalFooter */ "@material-tailwind/react/ModalFooter");
/* harmony import */ var _material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/Button */ "@material-tailwind/react/Button");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\HBALOYI\\Documents\\Reactjs\\parking-sync\\parking-sync\\pages\\ticketModal.js";








function TicketModal() {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      color: "teal",
      type: "button",
      onClick: e => setShowModalCode(true),
      ripple: "light",
      children: "Open small Modal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_material_tailwind_react_Modal__WEBPACK_IMPORTED_MODULE_1___default()), {
      size: "sm",
      active: showModal,
      toggler: () => setShowModal(false),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_material_tailwind_react_ModalHeader__WEBPACK_IMPORTED_MODULE_2___default()), {
        toggler: () => setShowModal(false),
        children: "Modal Title"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_material_tailwind_react_ModalBody__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "text-base leading-relaxed text-gray-600 font-normal",
          children: "I always felt like I could do anything. That\u2019s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can\u2019t do anything, you won\u2019t do anything. I was taught I could do everything."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_material_tailwind_react_ModalFooter__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
          color: "red",
          buttonType: "link",
          onClick: e => setShowModalCode(false),
          ripple: "dark",
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
          color: "green",
          onClick: e => setShowModalCode(false),
          ripple: "light",
          children: "Save Changes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "@material-tailwind/react/Button":
/*!**************************************************!*\
  !*** external "@material-tailwind/react/Button" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/Button");

/***/ }),

/***/ "@material-tailwind/react/Modal":
/*!*************************************************!*\
  !*** external "@material-tailwind/react/Modal" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/Modal");

/***/ }),

/***/ "@material-tailwind/react/ModalBody":
/*!*****************************************************!*\
  !*** external "@material-tailwind/react/ModalBody" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/ModalBody");

/***/ }),

/***/ "@material-tailwind/react/ModalFooter":
/*!*******************************************************!*\
  !*** external "@material-tailwind/react/ModalFooter" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/ModalFooter");

/***/ }),

/***/ "@material-tailwind/react/ModalHeader":
/*!*******************************************************!*\
  !*** external "@material-tailwind/react/ModalHeader" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react/ModalHeader");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/ticketModal.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvdGlja2V0TW9kYWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVlLFNBQVNPLFdBQVQsR0FBdUI7QUFFbEMsUUFBTSxDQUFDQyxTQUFELEVBQVlDLFlBQVosSUFBNEJULHFEQUFBLENBQWUsS0FBZixDQUFsQztBQUVBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsd0VBQUQ7QUFDSSxXQUFLLEVBQUMsTUFEVjtBQUVJLFVBQUksRUFBQyxRQUZUO0FBR0ksYUFBTyxFQUFHVSxDQUFELElBQU9DLGdCQUFnQixDQUFDLElBQUQsQ0FIcEM7QUFJSSxZQUFNLEVBQUMsT0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBVUksOERBQUMsdUVBQUQ7QUFBTyxVQUFJLEVBQUMsSUFBWjtBQUFpQixZQUFNLEVBQUVILFNBQXpCO0FBQW9DLGFBQU8sRUFBRSxNQUFNQyxZQUFZLENBQUMsS0FBRCxDQUEvRDtBQUFBLDhCQUNJLDhEQUFDLDZFQUFEO0FBQWEsZUFBTyxFQUFFLE1BQU1BLFlBQVksQ0FBQyxLQUFELENBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSSw4REFBQywyRUFBRDtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQyxxREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQWFJLDhEQUFDLDZFQUFEO0FBQUEsZ0NBQ0ksOERBQUMsd0VBQUQ7QUFDSSxlQUFLLEVBQUMsS0FEVjtBQUVJLG9CQUFVLEVBQUMsTUFGZjtBQUdJLGlCQUFPLEVBQUdDLENBQUQsSUFBT0MsZ0JBQWdCLENBQUMsS0FBRCxDQUhwQztBQUlJLGdCQUFNLEVBQUMsTUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVVJLDhEQUFDLHdFQUFEO0FBQ0ksZUFBSyxFQUFDLE9BRFY7QUFFSSxpQkFBTyxFQUFHRCxDQUFELElBQU9DLGdCQUFnQixDQUFDLEtBQUQsQ0FGcEM7QUFHSSxnQkFBTSxFQUFDLE9BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVko7QUFBQSxrQkFESjtBQTZDSDs7Ozs7Ozs7OztBQ3hERDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bhcmtpbmctc3luYy8uL3BhZ2VzL3RpY2tldE1vZGFsLmpzIiwid2VicGFjazovL3Bhcmtpbmctc3luYy9leHRlcm5hbCBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIiIsIndlYnBhY2s6Ly9wYXJraW5nLXN5bmMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxcIiIsIndlYnBhY2s6Ly9wYXJraW5nLXN5bmMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxCb2R5XCIiLCJ3ZWJwYWNrOi8vcGFya2luZy1zeW5jL2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsRm9vdGVyXCIiLCJ3ZWJwYWNrOi8vcGFya2luZy1zeW5jL2V4dGVybmFsIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vcGFya2luZy1zeW5jL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wYXJraW5nLXN5bmMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxcIjtcclxuaW1wb3J0IE1vZGFsSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxIZWFkZXJcIjtcclxuaW1wb3J0IE1vZGFsQm9keSBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsQm9keVwiO1xyXG5pbXBvcnQgTW9kYWxGb290ZXIgZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9Nb2RhbEZvb3RlclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaWNrZXRNb2RhbCgpIHtcclxuXHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldFNob3dNb2RhbENvZGUodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICByaXBwbGU9XCJsaWdodFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE9wZW4gc21hbGwgTW9kYWxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8TW9kYWwgc2l6ZT1cInNtXCIgYWN0aXZlPXtzaG93TW9kYWx9IHRvZ2dsZXI9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZXI9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIE1vZGFsIFRpdGxlXHJcbiAgICAgICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbGVhZGluZy1yZWxheGVkIHRleHQtZ3JheS02MDAgZm9udC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSSBhbHdheXMgZmVsdCBsaWtlIEkgY291bGQgZG8gYW55dGhpbmcuIFRoYXTigJlzIHRoZSBtYWluIHRoaW5nIHBlb3BsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmUgY29udHJvbGxlZCBieSEgVGhvdWdodHMtIHRoZWlyIHBlcmNlcHRpb24gb2YgdGhlbXNlbHZlcyEgVGhleSdyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG93ZWQgZG93biBieSB0aGVpciBwZXJjZXB0aW9uIG9mIHRoZW1zZWx2ZXMuIElmIHlvdSdyZSB0YXVnaHQgeW91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbuKAmXQgZG8gYW55dGhpbmcsIHlvdSB3b27igJl0IGRvIGFueXRoaW5nLiBJIHdhcyB0YXVnaHQgSSBjb3VsZCBkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVyeXRoaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0U2hvd01vZGFsQ29kZShmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpcHBsZT1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldFNob3dNb2RhbENvZGUoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaXBwbGU9XCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTYXZlIENoYW5nZXNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsQm9keVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvTW9kYWxGb290ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L01vZGFsSGVhZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwiTW9kYWxIZWFkZXIiLCJNb2RhbEJvZHkiLCJNb2RhbEZvb3RlciIsIkJ1dHRvbiIsIlRpY2tldE1vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZSIsInNldFNob3dNb2RhbENvZGUiXSwic291cmNlUm9vdCI6IiJ9