"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Projects.tsx":
/*!*************************************!*\
  !*** ./src/components/Projects.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./src/constants/index.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\n\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"project\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"project__inner\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"project__title\",\n                    children: [\n                        \"projects \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n                            children: \"나의 작업물\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 30\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"project__wrap\",\n                    children: _constants__WEBPACK_IMPORTED_MODULE_2__.projectsText.map((project, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                            className: \"project__item s\".concat(key + 1),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"num\",\n                                    children: [\n                                        key + 1,\n                                        \".\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                                    lineNumber: 16,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"title\",\n                                    children: project.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: project.code,\n                                    target: \"_blank\",\n                                    className: \"img\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        src: project.img,\n                                        alt: project.title,\n                                        layout: \"fill\",\n                                        // objectFit=\"cover\"\n                                        quality: 100\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                                        lineNumber: 19,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"btn\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: project.code,\n                                            children: \"code\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: project.view,\n                                            children: \"view\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"stack\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: project.stack[0]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: project.stack[1]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: project.stack[2]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, key, true, {\n                            fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gasds2s2/portfolio/src/components/Projects.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtDO0FBRVM7QUFDUztBQUVwRCxNQUFNRyxXQUFXO0lBQ2IscUJBQ0ksOERBQUNDO1FBQVFDLElBQUc7a0JBQ1IsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs7d0JBQWlCO3NDQUNsQiw4REFBQ0U7c0NBQUc7Ozs7Ozs7Ozs7Ozs4QkFFakIsOERBQUNIO29CQUFJQyxXQUFVOzhCQUNWTixvREFBWUEsQ0FBQ1MsR0FBRyxDQUFDLENBQUNDLFNBQVNDLG9CQUN4Qiw4REFBQ0M7NEJBQVFOLFdBQVcsa0JBQTBCLE9BQVJLLE1BQU07OzhDQUN4Qyw4REFBQ0U7b0NBQUtQLFdBQVU7O3dDQUFPSyxNQUFNO3dDQUFFOzs7Ozs7OzhDQUMvQiw4REFBQ0c7b0NBQUdSLFdBQVU7OENBQVNJLFFBQVFLLEtBQUs7Ozs7Ozs4Q0FDcEMsOERBQUNDO29DQUFFQyxNQUFNUCxRQUFRUSxJQUFJO29DQUFFQyxRQUFPO29DQUFTYixXQUFVOzhDQUM3Qyw0RUFBQ0wsa0RBQUtBO3dDQUNGbUIsS0FBS1YsUUFBUVcsR0FBRzt3Q0FDaEJDLEtBQUtaLFFBQVFLLEtBQUs7d0NBQ2xCUSxRQUFPO3dDQUNQLG9CQUFvQjt3Q0FDcEJDLFNBQVM7Ozs7Ozs7Ozs7OzhDQUdqQiw4REFBQ25CO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ1U7NENBQUVDLE1BQU1QLFFBQVFRLElBQUk7c0RBQUU7Ozs7OztzREFDdkIsOERBQUNGOzRDQUFFQyxNQUFNUCxRQUFRZSxJQUFJO3NEQUFFOzs7Ozs7Ozs7Ozs7OENBRTNCLDhEQUFDcEI7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDTztzREFBTUgsUUFBUWdCLEtBQUssQ0FBQyxFQUFFOzs7Ozs7c0RBQ3ZCLDhEQUFDYjtzREFBTUgsUUFBUWdCLEtBQUssQ0FBQyxFQUFFOzs7Ozs7c0RBQ3ZCLDhEQUFDYjtzREFBTUgsUUFBUWdCLEtBQUssQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7OzJCQW5CdUJmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQjlFO0tBcENNVDtBQXNDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy50c3g/OTI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHByb2plY3RzVGV4dCB9IGZyb20gJ0AvY29uc3RhbnRzJztcbmltcG9ydCBJbWFnZSwgeyBTdGF0aWNJbWFnZURhdGEgfSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJwcm9qZWN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RfX2lubmVyXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2plY3RfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzIDxlbT7rgpjsnZgg7J6R7JeF66y8PC9lbT5cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdF9fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdHNUZXh0Lm1hcCgocHJvamVjdCwga2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2Bwcm9qZWN0X19pdGVtIHMke2tleSArIDF9YH0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bVwiPntrZXkgKyAxfS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e3Byb2plY3QudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LmNvZGV9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWcgYXMgU3RhdGljSW1hZ2VEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LmNvZGV9PmNvZGU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3Qudmlld30+dmlldzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9qZWN0LnN0YWNrWzBdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb2plY3Quc3RhY2tbMV19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvamVjdC5zdGFja1syXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJwcm9qZWN0c1RleHQiLCJJbWFnZSIsIlByb2plY3RzIiwic2VjdGlvbiIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJlbSIsIm1hcCIsInByb2plY3QiLCJrZXkiLCJhcnRpY2xlIiwic3BhbiIsImgzIiwidGl0bGUiLCJhIiwiaHJlZiIsImNvZGUiLCJ0YXJnZXQiLCJzcmMiLCJpbWciLCJhbHQiLCJsYXlvdXQiLCJxdWFsaXR5IiwidmlldyIsInN0YWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Projects.tsx\n"));

/***/ })

});