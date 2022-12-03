exports.id = 868;
exports.ids = [868];
exports.modules = {

/***/ 8338:
/***/ ((module) => {

// Exports
module.exports = {
	"main_button": "ThemeButton3_main_button__CUTZ5",
	"main_button_overlay": "ThemeButton3_main_button_overlay__bv9Tu",
	"main_button_text": "ThemeButton3_main_button_text__HmVje"
};


/***/ }),

/***/ 1628:
/***/ ((module) => {

// Exports
module.exports = {
	"nav_parent": "NavBar_nav_parent__YW92W",
	"nav_bar": "NavBar_nav_bar__qnsYM",
	"nav_content": "NavBar_nav_content__wltXI",
	"logo_letter": "NavBar_logo_letter__rUj2U"
};


/***/ }),

/***/ 58:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeButton3_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8338);
/* harmony import */ var _ThemeButton3_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ThemeButton3_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




const ThemeButton3 = ({ button_text ="My Work" , button_link ="/"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: button_link,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: (_ThemeButton3_module_css__WEBPACK_IMPORTED_MODULE_3___default().main_button),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_ThemeButton3_module_css__WEBPACK_IMPORTED_MODULE_3___default().main_button_overlay),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_ThemeButton3_module_css__WEBPACK_IMPORTED_MODULE_3___default().main_button_text),
                        children: button_text
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeButton3);


/***/ }),

/***/ 1868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1628);
/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_ThemeButton3_ThemeButton3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58);





const NavBar = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav_parent),
        children: [
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav_bar),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav_content),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo_letter),
                                children: "D"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_ThemeButton3_ThemeButton3__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            button_text: "Resume"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);


/***/ })

};
;