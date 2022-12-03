"use strict";
(() => {
var exports = {};
exports.id = 112;
exports.ids = [112,327];
exports.modules = {

/***/ 6577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_project_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2870);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UI_templates_ProjectsHero_ProjectsHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8125);
/* harmony import */ var _components_UI_templates_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1868);
/* harmony import */ var _components_UI_templates_ProjectsSubheading_ProjectsSubheading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6068);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_UI_templates_ProjectsHero_ProjectsHero__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_6__]);
([_components_UI_templates_ProjectsHero_ProjectsHero__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const variants = {
    hidden: {
        opacity: 0,
        x: 0,
        y: 0
    },
    enter: {
        opacity: 1,
        x: 0,
        y: 0
    },
    exit: {
        opacity: 0,
        x: 0,
        y: 0
    },
    duration: {
        opacity: 0,
        x: 0,
        y: 0
    },
    transition: {
        ease: "easeInOut",
        duration: 20
    }
};
const getStaticProps = async ({ params  })=>{
    const playlistList = _public_project_data__WEBPACK_IMPORTED_MODULE_1__/* ["default"].projects.filter */ .Z.projects.filter((p)=>p.id.toString() === params.id);
    return {
        props: {
            song: playlistList[0]
        }
    };
};
const getStaticPaths = async ()=>{
    const paths = _public_project_data__WEBPACK_IMPORTED_MODULE_1__/* ["default"].projects.map */ .Z.projects.map((song)=>({
            params: {
                id: song.id.toString()
            }
        }));
    return {
        paths,
        fallback: false
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ song  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.main, {
            variants: variants,
            initial: "hidden" // Set the initial state to variants.hidden
            ,
            animate: "enter" // Animated state to variants.enter
            ,
            exit: "exit" // Exit state (used later) to variants.exit
            ,
            transition: {
                type: "linear"
            },
            className: "",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_templates_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_templates_ProjectsHero_ProjectsHero__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    projectId: song.id - 1
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_templates_ProjectsSubheading_ProjectsSubheading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    projectId: song.id - 1
                })
            ]
        })
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,825,870,868,424], () => (__webpack_exec__(6577)));
module.exports = __webpack_exports__;

})();