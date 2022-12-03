exports.id = 424;
exports.ids = [424];
exports.modules = {

/***/ 9603:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "AnimatedTextWord_container___lUqd",
	"animated_text": "AnimatedTextWord_animated_text__7i_ls"
};


/***/ }),

/***/ 7329:
/***/ ((module) => {

// Exports
module.exports = {
	"left_items_image_container": "ProjectDisplayMain_left_items_image_container__lG4Y8"
};


/***/ }),

/***/ 7153:
/***/ ((module) => {

// Exports
module.exports = {
	"tabs": "LandingTabs_tabs__2_hPm",
	"max_container": "LandingTabs_max_container__rfZOj",
	"blue_bg": "LandingTabs_blue_bg__Ur9Jh",
	"white_bg": "LandingTabs_white_bg___43wQ",
	"rainbowGradient": "LandingTabs_rainbowGradient__XPjvg",
	"innerSquare": "LandingTabs_innerSquare__cekV_",
	"button_parent": "LandingTabs_button_parent__jGNMo",
	"button_shadow_parent": "LandingTabs_button_shadow_parent__MgvOw",
	"active_text": "LandingTabs_active_text___SrEy",
	"active_rainbowGradient": "LandingTabs_active_rainbowGradient__E6WRF"
};


/***/ }),

/***/ 7958:
/***/ ((module) => {

// Exports
module.exports = {
	"text_layout_box": "TextLayoutBox_text_layout_box__GKcTY",
	"text_layout_box_container": "TextLayoutBox_text_layout_box_container__M9xZO"
};


/***/ }),

/***/ 5539:
/***/ ((module) => {

// Exports
module.exports = {
	"projects_hero": "ProjectsHero_projects_hero__F_sJY",
	"hero_content": "ProjectsHero_hero_content__Qr9yi",
	"left_items": "ProjectsHero_left_items__HxTHm",
	"left_items_image_container": "ProjectsHero_left_items_image_container__uty03",
	"right_items": "ProjectsHero_right_items__e3o4q",
	"text_row": "ProjectsHero_text_row__p_FWg",
	"text_layout": "ProjectsHero_text_layout__y1G13",
	"line_div": "ProjectsHero_line_div__zuDE4",
	"stack_row": "ProjectsHero_stack_row__Zr0Wk",
	"stack_text": "ProjectsHero_stack_text__hCdq_"
};


/***/ }),

/***/ 3306:
/***/ ((module) => {

// Exports
module.exports = {
	"subheading_parent": "ProjectsSubheading_subheading_parent__U6l8k",
	"paragraph_text": "ProjectsSubheading_paragraph_text___xbwc",
	"left_items": "ProjectsSubheading_left_items__Pa02I",
	"right_items": "ProjectsSubheading_right_items__RrQOH",
	"subheading_content": "ProjectsSubheading_subheading_content__P7637"
};


/***/ }),

/***/ 7756:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AnimatedTextWord_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9603);
/* harmony import */ var _AnimatedTextWord_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AnimatedTextWord_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const AnimatedTextWord = ({ text  })=>{
    const words = text.split(" ");
    const letters = Array.from(text);
    const container = {
        hidden: {
            opacity: 0,
            y: 0
        },
        visible: (i = 1)=>({
                opacity: 1,
                y: 0,
                transition: {
                    staggerChildren: 0.04,
                    staggerDirection: 1,
                    delayChildren: 0.12 * i
                }
            })
    };
    const child = {
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: "tween",
                damping: 35,
                stiffness: 500
            }
        },
        hidden: {
            opacity: 0,
            y: 10,
            x: -20,
            transition: {
                type: "tween",
                damping: 35,
                stiffness: 500
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        initial: "hidden",
        animate: "visible",
        className: (_AnimatedTextWord_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
        variants: container,
        children: letters.map((word, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
                variants: child,
                className: (_AnimatedTextWord_module_css__WEBPACK_IMPORTED_MODULE_3___default().animated_text),
                children: word === " " ? "\xa0" : word
            }, word - index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedTextWord);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LandingTabs_LandingTabs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/UI/atoms/LandingToggleButton/LandingToggleButton.js




const LandingToggleButton = ({ title  })=>{
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: styles.max_container,
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: styles.blue_bg
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: styles.white_bg
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: styles.button_parent,
                    children: /*#__PURE__*/ _jsx("div", {
                        className: styles.rainbowGradient,
                        children: /*#__PURE__*/ _jsx("div", {
                            className: styles.innerSquare,
                            children: /*#__PURE__*/ _jsx("h1", {
                                className: styles.h1,
                                children: title
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const LandingToggleButton_LandingToggleButton = ((/* unused pure expression or super */ null && (LandingToggleButton)));

// EXTERNAL MODULE: ./components/UI/molecules/LandingTabs/LandingTabs.module.css
var LandingTabs_module = __webpack_require__(7153);
var LandingTabs_module_default = /*#__PURE__*/__webpack_require__.n(LandingTabs_module);
;// CONCATENATED MODULE: ./components/UI/molecules/LandingTabs/LandingTabs.js





const options = [
    "Overview",
    "Challenges",
    "Github",
    "Site"
];
const LandingTabs = ()=>{
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(options[0]);
    const { 0: count , 1: setCount  } = (0,external_react_.useState)(0);
    const { 0: clickedId , 1: setClickedId  } = (0,external_react_.useState)(-1);
    const clickStyles = {
        h1_color: "rgba(191, 209, 217, 1)",
        RainbowGradient_background_color: "white",
        RainbowGradient_transform: "translateY(5px)"
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (LandingTabs_module_default()).tabs,
        children: options.map((option, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (LandingTabs_module_default()).max_container,
                onClick: ()=>setClickedId(i),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (LandingTabs_module_default()).blue_bg
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (LandingTabs_module_default()).white_bg
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (LandingTabs_module_default()).button_parent,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: i === clickedId ? (LandingTabs_module_default()).active_rainbowGradient : (LandingTabs_module_default()).rainbowGradient,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: i === clickedId ? (LandingTabs_module_default()).active_text : (LandingTabs_module_default()).innerSquare,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: option
                                })
                            }, i)
                        })
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const LandingTabs_LandingTabs = (LandingTabs);


/***/ }),

/***/ 8125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5539);
/* harmony import */ var _ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _molecules_LandingTabs_LandingTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2168);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1608);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_project_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2870);
/* harmony import */ var _atoms_AnimatedTextWord_AnimatedTextWord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7756);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_atoms_AnimatedTextWord_AnimatedTextWord__WEBPACK_IMPORTED_MODULE_5__]);
_atoms_AnimatedTextWord_AnimatedTextWord__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ProjectsHero = ({ projectId =0  })=>{
    const tagline = _public_project_data_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].projects */ .Z.projects[projectId].tagline;
    const page_project = _public_project_data_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].projects */ .Z.projects[projectId];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: (_ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6___default().projects_hero),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6___default().hero_content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6___default().left_items),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6___default().left_items_image_container),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: _public_project_data_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].projects */ .Z.projects[projectId].image_source[0],
                                alt: "Project Image",
                                layout: "fill"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6___default().right_items),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6___default().text_layout),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: _public_project_data_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].projects */ .Z.projects[projectId].name
                                }),
                                tagline.split(" ").length > 2 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6___default().text_row),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: tagline.split(" ")[0]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_AnimatedTextWord_AnimatedTextWord__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                text: tagline.split(" ").splice(-2).join(" ")
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6___default().text_row),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: tagline.split(" ")[0]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_AnimatedTextWord_AnimatedTextWord__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                text: tagline.split(" ").splice(-1).join(" ")
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6___default().line_div)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: page_project.landing_paragraph_info
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Tech Stack:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6___default().stack_row),
                                    children: _public_project_data_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].projects */ .Z.projects[projectId].tech_stack.map((stack, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6___default().stack_row),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: (_ProjectsHero_module_css__WEBPACK_IMPORTED_MODULE_6___default().stack_text),
                                                    children: stack
                                                }),
                                                i == _public_project_data_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].projects */ .Z.projects[projectId].tech_stack.length - 1 ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    children: "•"
                                                })
                                            ]
                                        }, 0 + i))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    children: "React • Django • AWS • Blender"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tech_array", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_LandingTabs_LandingTabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsHero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProjectsSubheading_ProjectsSubheading)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/UI/templates/ProjectsSubheading/ProjectsSubheading.module.css
var ProjectsSubheading_module = __webpack_require__(3306);
var ProjectsSubheading_module_default = /*#__PURE__*/__webpack_require__.n(ProjectsSubheading_module);
// EXTERNAL MODULE: ./components/UI/molecules/TextLayoutBox/TextLayoutBox.module.css
var TextLayoutBox_module = __webpack_require__(7958);
var TextLayoutBox_module_default = /*#__PURE__*/__webpack_require__.n(TextLayoutBox_module);
;// CONCATENATED MODULE: ./components/UI/molecules/TextLayoutBox/TextLayoutBox.js



const TextLayoutBox = ({ header_text , paragraph_text , second_header_text , second_paragraph_text , third_header_text , third_paragraph_text ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (TextLayoutBox_module_default()).text_layout_box,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TextLayoutBox_module_default()).text_layout_box_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: header_text
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: paragraph_text
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TextLayoutBox_module_default()).text_layout_box_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: second_header_text
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: second_paragraph_text
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const TextLayoutBox_TextLayoutBox = (TextLayoutBox);

// EXTERNAL MODULE: ./components/UI/atoms/ProjectDisplayMain/ProjectDisplayMain.module.css
var ProjectDisplayMain_module = __webpack_require__(7329);
var ProjectDisplayMain_module_default = /*#__PURE__*/__webpack_require__.n(ProjectDisplayMain_module);
// EXTERNAL MODULE: ./node_modules/next/future/image.js
var future_image = __webpack_require__(1608);
var image_default = /*#__PURE__*/__webpack_require__.n(future_image);
// EXTERNAL MODULE: ./public/project_data.js + 2 modules
var project_data = __webpack_require__(2870);
;// CONCATENATED MODULE: ./components/UI/atoms/ProjectDisplayMain/ProjectDisplayMain.js





const ProjectDisplayMain = ({ projectId =0  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div_image_container", {
        className: (ProjectDisplayMain_module_default()).left_items_image_container,
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: project_data/* default.projects */.Z.projects[projectId].image_source[0],
            alt: "Project Image",
            layout: "fill"
        })
    });
};
/* harmony default export */ const ProjectDisplayMain_ProjectDisplayMain = (ProjectDisplayMain);

;// CONCATENATED MODULE: ./components/UI/templates/ProjectsSubheading/ProjectsSubheading.js






const ProjectsSubheading = ({ projectId =0  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ProjectsSubheading_module_default()).subheading_parent,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("subheading_content", {
            className: (ProjectsSubheading_module_default()).subheading_content,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ProjectsSubheading_module_default()).left_items,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ProjectDisplayMain_ProjectDisplayMain, {
                        projectId: projectId
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ProjectsSubheading_module_default()).right_items,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextLayoutBox_TextLayoutBox, {
                        header_text: "Intro",
                        paragraph_text: project_data/* default.projects */.Z.projects[projectId].story,
                        second_header_text: project_data/* default.projects */.Z.projects[projectId].second_heading,
                        second_paragraph_text: project_data/* default.projects */.Z.projects[projectId].second_description
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const ProjectsSubheading_ProjectsSubheading = (ProjectsSubheading);


/***/ })

};
;