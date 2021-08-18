webpackHotUpdate_N_E("pages/[meetupID]",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./pages/[meetupID]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupID]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ "./components/meetups/MeetupDetails.js");



var _jsxFileName = "/home/zedith9903/Projects/practice/06-onwards-to-a-bigger-project-starting-project/pages/[meetupID]/index.js",
    _this = undefined;




var DetailPage = function DetailPage(props) {
  // const details = ;
  var meetup = props.meetupData;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: meetup.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        type: "description",
        content: "Browse a huge list of highly active React Meetups!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_2__["default"] // id={meetup.id}
    , {
      title: meetup.title,
      description: meetup.description,
      address: meetup.address,
      image: meetup.image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_c = DetailPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (DetailPage);

var _c;

$RefreshReg$(_c, "DetailPage");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElEXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJEZXRhaWxQYWdlIiwicHJvcHMiLCJtZWV0dXAiLCJtZWV0dXBEYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCLG1CQUFPLENBQUMscUZBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F0RDtBQUVBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUM3QjtBQUQ2QixNQUVUQyxNQUZTLEdBRUVELEtBRkYsQ0FFckJFLFVBRnFCO0FBRzdCLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQztBQUFBLGtCQUFRRCxNQUFNLENBQUNFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUM7QUFDQyxZQUFJLEVBQUMsYUFETjtBQUVDLGVBQU8sRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQVFDLHFFQUFDLHlFQUFELENBQ0M7QUFERDtBQUVDLFdBQUssRUFBRUYsTUFBTSxDQUFDRSxLQUZmO0FBR0MsaUJBQVcsRUFBRUYsTUFBTSxDQUFDRyxXQUhyQjtBQUlDLGFBQU8sRUFBRUgsTUFBTSxDQUFDSSxPQUpqQjtBQUtDLFdBQUssRUFBRUosTUFBTSxDQUFDSztBQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRDtBQUFBLGtCQUREO0FBa0JBLENBckJEOztLQUFNUCxVOztBQXlEU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW21lZXR1cElEXS41YzMwZjk1YTE1OGZjNjVkZTUzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQnKVxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcbmltcG9ydCBNZWV0dXBEZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsc1wiO1xuXG5jb25zdCBEZXRhaWxQYWdlID0gKHByb3BzKSA9PiB7XG5cdC8vIGNvbnN0IGRldGFpbHMgPSA7XG5cdGNvbnN0IHsgbWVldHVwRGF0YTogbWVldHVwIH0gPSBwcm9wcztcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT57bWVldHVwLnRpdGxlfTwvdGl0bGU+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0dHlwZT1cImRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRjb250ZW50PVwiQnJvd3NlIGEgaHVnZSBsaXN0IG9mIGhpZ2hseSBhY3RpdmUgUmVhY3QgTWVldHVwcyFcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PE1lZXR1cERldGFpbHNcblx0XHRcdFx0Ly8gaWQ9e21lZXR1cC5pZH1cblx0XHRcdFx0dGl0bGU9e21lZXR1cC50aXRsZX1cblx0XHRcdFx0ZGVzY3JpcHRpb249e21lZXR1cC5kZXNjcmlwdGlvbn1cblx0XHRcdFx0YWRkcmVzcz17bWVldHVwLmFkZHJlc3N9XG5cdFx0XHRcdGltYWdlPXttZWV0dXAuaW1hZ2V9XG5cdFx0XHQvPlxuXHRcdDwvPlxuXHQpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcblx0XHRcIm1vbmdvZGIrc3J2Oi8vemVkaXRoOTkwMzptaWxlc3RvbmUwOTAzQGNsdXN0ZXIwLmJjbTBoLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcblx0KTtcblx0Y29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblx0Y29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcblx0Y29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIFwiX2lkXCIpLnRvQXJyYXkoKTtcblx0Y29uc3QgcGF0aHMgPSBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xuXHRcdHBhcmFtczogeyBtZWV0dXBJRDogbWVldHVwLl9pZC50b1N0cmluZygpIH0sXG5cdH0pKTtcblx0Y2xpZW50LmNsb3NlKCk7XG5cdHJldHVybiB7XG5cdFx0cGF0aHMsXG5cdFx0ZmFsbGJhY2s6IGZhbHNlLFxuXHR9O1xufTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcblx0Ly8gY29uc29sZS5sb2coY3R4LnBhcmFtcy5tZWV0dXBJRCk7XG5cdGNvbnN0IG1lZXR1cElEID0gY3R4LnBhcmFtcy5tZWV0dXBJRDtcblx0Y29uc29sZS5sb2cobWVldHVwSUQpO1xuXHRjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuXHRcdFwibW9uZ29kYitzcnY6Ly96ZWRpdGg5OTAzOm1pbGVzdG9uZTA5MDNAY2x1c3RlcjAuYmNtMGgubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuXHQpO1xuXHRjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXHRjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xuXHRjb25zdCBtZWV0dXAgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHsgX2lkOiBPYmplY3RJZChtZWV0dXBJRCkgfSk7XG5cdGNvbnNvbGUubG9nKG1lZXR1cCk7XG5cdGNsaWVudC5jbG9zZSgpO1xuXHQvLyBjb25zdCB7IF9pZCwgdGl0bGUsIGltYWdlLCBhZGRyZXNzIH0gPSBtZWV0dXA7XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdG1lZXR1cERhdGE6IHsgLi4ubWVldHVwLCBfaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSB9LFxuXHRcdH0sXG5cdH07XG59O1xuZXhwb3J0IGRlZmF1bHQgRGV0YWlsUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=