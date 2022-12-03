"use strict";
exports.id = 997;
exports.ids = [997];
exports.modules = {

/***/ 1676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ ProjectLandingContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ProjectLandingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ 8997:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Projects": () => (/* binding */ Projects),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UI_templates_ProjectsHero_ProjectsHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8125);
/* harmony import */ var _components_UI_templates_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1868);
/* harmony import */ var _components_UI_templates_ProjectsSubheading_ProjectsSubheading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6068);
/* harmony import */ var _contexts_ProjectLandingContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1676);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_UI_templates_ProjectsHero_ProjectsHero__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_6__]);
([_components_UI_templates_ProjectsHero_ProjectsHero__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Projects = ()=>{
    const { 0: projectLandingId , 1: setProjectLandingId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_ProjectLandingContext__WEBPACK_IMPORTED_MODULE_5__/* .ProjectLandingContext.Provider */ .U.Provider, {
        value: {
            projectLandingId,
            setProjectLandingId
        },
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
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_templates_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_templates_ProjectsHero_ProjectsHero__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    projectId: projectLandingId
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_templates_ProjectsSubheading_ProjectsSubheading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    projectId: projectLandingId,
                    projectKey: projectLandingId
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;