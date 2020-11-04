webpackHotUpdate_N_E(3,{

/***/ "./components/System/WindowManager/ProcessWindow.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/ProcessWindow.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/windowmanager */ \"./utils/windowmanager.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/ProcessWindow.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\")];\n    },\n    modules: ['@/components/System/WindowManager/Window']\n  }\n});\n_c2 = Window;\nvar windowZindex = _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"baseZindex\"] + _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"windowsZindexLevel\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"zindexLevelSize\"];\n\nvar ProcessWindow = function ProcessWindow(_ref) {\n  _s();\n\n  var _ref$loader = _ref.loader,\n      App = _ref$loader.loader,\n      loadedAppOptions = _ref$loader.loadedAppOptions,\n      _ref$loader$loaderOpt = _ref$loader.loaderOptions,\n      defaultWidth = _ref$loader$loaderOpt.width,\n      defaultHeight = _ref$loader$loaderOpt.height,\n      bgColor = _ref.bgColor,\n      initialHeight = _ref.height,\n      icon = _ref.icon,\n      id = _ref.id,\n      launchElement = _ref.launchElement,\n      lockAspectRatio = _ref.lockAspectRatio,\n      maximized = _ref.maximized,\n      minimized = _ref.minimized,\n      name = _ref.name,\n      taskbarElement = _ref.taskbarElement,\n      initialWidth = _ref.width,\n      windowed = _ref.windowed,\n      x = _ref.x,\n      y = _ref.y;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__[\"SessionContext\"]),\n      foreground = _useContext.foreground,\n      getState = _useContext.getState,\n      saveState = _useContext.saveState,\n      _useContext$session = _useContext.session,\n      foregroundId = _useContext$session.foregroundId,\n      stackOrder = _useContext$session.stackOrder;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__[\"ProcessContext\"]),\n      processes = _useContext2.processes,\n      close = _useContext2.close,\n      maximize = _useContext2.maximize,\n      minimize = _useContext2.minimize,\n      position = _useContext2.position,\n      restore = _useContext2.restore,\n      size = _useContext2.size;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useState\"])(false),\n      maximizeWindow = _useState[0],\n      setMaximizeWindow = _useState[1];\n\n  var _getState = getState({\n    id: id\n  }),\n      previousX = _getState.x,\n      previousY = _getState.y;\n\n  var _getMaxDimensions = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getMaxDimensions\"])(initialWidth, initialHeight, defaultWidth, defaultHeight, lockAspectRatio),\n      height = _getMaxDimensions.height,\n      width = _getMaxDimensions.width;\n\n  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useMemo\"])(function () {\n    return {\n      x: Math.floor(-(width / 2) + window.innerWidth * 0.5),\n      y: Math.floor(-(height / 2) + window.innerHeight * 0.45)\n    };\n  }, []),\n      defaultX = _useMemo.x,\n      defaultY = _useMemo.y;\n\n  var processWindowRef = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useRef\"])(null);\n  var windowOptions = {\n    onMinimize: function onMinimize() {\n      return minimize(id);\n    },\n    onMaximize: function onMaximize() {\n      return maximized ? restore(id, 'maximized') : maximize(id);\n    },\n    onClose: function onClose() {\n      saveState({\n        height: height,\n        id: id,\n        width: width,\n        x: !previousX ? defaultX + x : x,\n        y: !previousY ? defaultY + y : y\n      });\n      close(id);\n    },\n    onFocus: function onFocus() {\n      return foreground(id);\n    },\n    onBlur: function onBlur(event) {\n      var _processWindowRef$cur;\n\n      // processWindowRef\n      if ((_processWindowRef$cur = processWindowRef.current) === null || _processWindowRef$cur === void 0 ? void 0 : _processWindowRef$cur.contains(event.relatedTarget)) {\n        processWindowRef.current.focus();\n      } else if (event.relatedTarget !== taskbarElement) {\n        console.log('I BLUR 1', event.relatedTarget);\n        foreground('');\n      } else {\n        console.log('I BLUR 2', event.relatedTarget);\n      }\n    },\n    updatePosition: position(id),\n    zIndex: windowZindex + stackOrder.slice().reverse().indexOf(id),\n    maximized: maximizeWindow,\n    minimized: minimized,\n    id: id,\n    height: height,\n    width: width\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (foregroundId === id && minimized) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder.filter(function (stackId) {\n        return stackId !== id;\n      })));\n    } else if (!stackOrder.includes(id)) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder));\n    }\n  }, [foregroundId, id, minimized, processes, stackOrder]);\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (maximized) {\n      setMaximizeWindow(true);\n    } else if (maximizeWindow) {\n      setTimeout(function () {\n        return setMaximizeWindow(false);\n      }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MILLISECONDS_IN_SECOND\"]);\n    }\n  }, [maximized]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].article, _objectSpread(_objectSpread({\n    ref: processWindowRef,\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animatedWindows,\n    style: {\n      zIndex: foregroundId === id ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"foregroundZindex\"] : windowOptions.zIndex,\n      height: height,\n      width: width\n    }\n  }, Object(_utils_motions__WEBPACK_IMPORTED_MODULE_10__[\"windowMotionSettings\"])({\n    initialX: previousX || defaultX,\n    initialY: previousY || defaultY,\n    animation: maximized && minimized && 'maxmin' || maximized && 'maximized' || minimized && 'minimized' || 'start',\n    height: height,\n    width: width,\n    x: x,\n    y: y,\n    taskbarElement: taskbarElement,\n    launchElement: launchElement\n  })), {}, {\n    children: windowed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Window, _objectSpread(_objectSpread({\n      icon: icon,\n      name: name,\n      bgColor: bgColor,\n      lockAspectRatio: lockAspectRatio,\n      updateSize: size(id)\n    }, windowOptions), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 174,\n        columnNumber: 11\n      }, _this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 9\n    }, _this)\n  }), id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 140,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProcessWindow, \"ANCLrjuICkJAK3vuZF6Jdmkj6J8=\");\n\n_c3 = ProcessWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessWindow);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"ProcessWindow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeD82Y2MwIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJ3aW5kb3daaW5kZXgiLCJiYXNlWmluZGV4Iiwid2luZG93c1ppbmRleExldmVsIiwiemluZGV4TGV2ZWxTaXplIiwiUHJvY2Vzc1dpbmRvdyIsImxvYWRlciIsIkFwcCIsImxvYWRlZEFwcE9wdGlvbnMiLCJsb2FkZXJPcHRpb25zIiwiZGVmYXVsdFdpZHRoIiwid2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwiaGVpZ2h0IiwiYmdDb2xvciIsImluaXRpYWxIZWlnaHQiLCJpY29uIiwiaWQiLCJsYXVuY2hFbGVtZW50IiwibG9ja0FzcGVjdFJhdGlvIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwibmFtZSIsInRhc2tiYXJFbGVtZW50IiwiaW5pdGlhbFdpZHRoIiwid2luZG93ZWQiLCJ4IiwieSIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJnZXRTdGF0ZSIsInNhdmVTdGF0ZSIsInNlc3Npb24iLCJmb3JlZ3JvdW5kSWQiLCJzdGFja09yZGVyIiwiUHJvY2Vzc0NvbnRleHQiLCJwcm9jZXNzZXMiLCJjbG9zZSIsIm1heGltaXplIiwibWluaW1pemUiLCJwb3NpdGlvbiIsInJlc3RvcmUiLCJzaXplIiwidXNlU3RhdGUiLCJtYXhpbWl6ZVdpbmRvdyIsInNldE1heGltaXplV2luZG93IiwicHJldmlvdXNYIiwicHJldmlvdXNZIiwiZ2V0TWF4RGltZW5zaW9ucyIsInVzZU1lbW8iLCJNYXRoIiwiZmxvb3IiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZWZhdWx0WCIsImRlZmF1bHRZIiwicHJvY2Vzc1dpbmRvd1JlZiIsInVzZVJlZiIsIndpbmRvd09wdGlvbnMiLCJvbk1pbmltaXplIiwib25NYXhpbWl6ZSIsIm9uQ2xvc2UiLCJvbkZvY3VzIiwib25CbHVyIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJyZWxhdGVkVGFyZ2V0IiwiZm9jdXMiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlUG9zaXRpb24iLCJ6SW5kZXgiLCJzbGljZSIsInJldmVyc2UiLCJpbmRleE9mIiwidXNlRWZmZWN0IiwiZ2V0TmV4dFZpc2libGVXaW5kb3ciLCJmaWx0ZXIiLCJzdGFja0lkIiwiaW5jbHVkZXMiLCJzZXRUaW1lb3V0IiwiTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMiLCJNSUxMSVNFQ09ORFNfSU5fU0VDT05EIiwic3R5bGVzIiwiYW5pbWF0ZWRXaW5kb3dzIiwiZm9yZWdyb3VuZFppbmRleCIsIndpbmRvd01vdGlvblNldHRpbmdzIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImFuaW1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxtREFBTztBQUFBLFNBQUMsNktBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4RkFBUjtBQUFBO0FBQUEsY0FBUSwwQ0FBUjtBQUFBO0FBQUEsRUFBdEI7TUFBTUQsTTtBQUVOLElBQU1FLFlBQVksR0FBR0MsMkRBQVUsR0FBR0MsbUVBQWtCLEdBQUdDLGdFQUF2RDs7QUFFQSxJQUFNQyxhQUFnQyxHQUFHLFNBQW5DQSxhQUFtQyxPQW9CbkM7QUFBQTs7QUFBQSx5QkFuQkpDLE1BbUJJO0FBQUEsTUFsQk1DLEdBa0JOLGVBbEJGRCxNQWtCRTtBQUFBLE1BakJGRSxnQkFpQkUsZUFqQkZBLGdCQWlCRTtBQUFBLDBDQWhCRkMsYUFnQkU7QUFBQSxNQWhCc0JDLFlBZ0J0Qix5QkFoQmVDLEtBZ0JmO0FBQUEsTUFoQjRDQyxhQWdCNUMseUJBaEJvQ0MsTUFnQnBDO0FBQUEsTUFkSkMsT0FjSSxRQWRKQSxPQWNJO0FBQUEsTUFiSUMsYUFhSixRQWJKRixNQWFJO0FBQUEsTUFaSkcsSUFZSSxRQVpKQSxJQVlJO0FBQUEsTUFYSkMsRUFXSSxRQVhKQSxFQVdJO0FBQUEsTUFWSkMsYUFVSSxRQVZKQSxhQVVJO0FBQUEsTUFUSkMsZUFTSSxRQVRKQSxlQVNJO0FBQUEsTUFSSkMsU0FRSSxRQVJKQSxTQVFJO0FBQUEsTUFQSkMsU0FPSSxRQVBKQSxTQU9JO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsY0FLSSxRQUxKQSxjQUtJO0FBQUEsTUFKR0MsWUFJSCxRQUpKYixLQUlJO0FBQUEsTUFISmMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsTUFGSkMsQ0FFSSxRQUZKQSxDQUVJO0FBQUEsTUFESkMsQ0FDSSxRQURKQSxDQUNJOztBQUFBLG9CQU1BQyx3REFBVSxDQUFDQyx1RUFBRCxDQU5WO0FBQUEsTUFFRkMsVUFGRSxlQUVGQSxVQUZFO0FBQUEsTUFHRkMsUUFIRSxlQUdGQSxRQUhFO0FBQUEsTUFJRkMsU0FKRSxlQUlGQSxTQUpFO0FBQUEsd0NBS0ZDLE9BTEU7QUFBQSxNQUtTQyxZQUxULHVCQUtTQSxZQUxUO0FBQUEsTUFLdUJDLFVBTHZCLHVCQUt1QkEsVUFMdkI7O0FBQUEscUJBZUFQLHdEQUFVLENBQUNRLHVFQUFELENBZlY7QUFBQSxNQVFGQyxTQVJFLGdCQVFGQSxTQVJFO0FBQUEsTUFTRkMsS0FURSxnQkFTRkEsS0FURTtBQUFBLE1BVUZDLFFBVkUsZ0JBVUZBLFFBVkU7QUFBQSxNQVdGQyxRQVhFLGdCQVdGQSxRQVhFO0FBQUEsTUFZRkMsUUFaRSxnQkFZRkEsUUFaRTtBQUFBLE1BYUZDLE9BYkUsZ0JBYUZBLE9BYkU7QUFBQSxNQWNGQyxJQWRFLGdCQWNGQSxJQWRFOztBQUFBLGtCQWdCd0NDLHNEQUFRLENBQUMsS0FBRCxDQWhCaEQ7QUFBQSxNQWdCR0MsY0FoQkg7QUFBQSxNQWdCbUJDLGlCQWhCbkI7O0FBQUEsa0JBaUJtQ2YsUUFBUSxDQUFDO0FBQzlDZCxNQUFFLEVBQUZBO0FBRDhDLEdBQUQsQ0FqQjNDO0FBQUEsTUFpQk84QixTQWpCUCxhQWlCSXJCLENBakJKO0FBQUEsTUFpQnFCc0IsU0FqQnJCLGFBaUJrQnJCLENBakJsQjs7QUFBQSwwQkFvQnNCc0IsNkVBQWdCLENBQ3hDekIsWUFEd0MsRUFFeENULGFBRndDLEVBR3hDTCxZQUh3QyxFQUl4Q0UsYUFKd0MsRUFLeENPLGVBTHdDLENBcEJ0QztBQUFBLE1Bb0JJTixNQXBCSixxQkFvQklBLE1BcEJKO0FBQUEsTUFvQllGLEtBcEJaLHFCQW9CWUEsS0FwQlo7O0FBQUEsaUJBMkJpQ3VDLHFEQUFPLENBQzFDO0FBQUEsV0FBTztBQUNMeEIsT0FBQyxFQUFFeUIsSUFBSSxDQUFDQyxLQUFMLENBQVcsRUFBRXpDLEtBQUssR0FBRyxDQUFWLElBQWUwQyxNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBOUMsQ0FERTtBQUVMM0IsT0FBQyxFQUFFd0IsSUFBSSxDQUFDQyxLQUFMLENBQVcsRUFBRXZDLE1BQU0sR0FBRyxDQUFYLElBQWdCd0MsTUFBTSxDQUFDRSxXQUFQLEdBQXFCLElBQWhEO0FBRkUsS0FBUDtBQUFBLEdBRDBDLEVBSzFDLEVBTDBDLENBM0J4QztBQUFBLE1BMkJPQyxRQTNCUCxZQTJCSTlCLENBM0JKO0FBQUEsTUEyQm9CK0IsUUEzQnBCLFlBMkJpQjlCLENBM0JqQjs7QUFrQ0osTUFBTStCLGdCQUFnQixHQUFHQyxvREFBTSxDQUFjLElBQWQsQ0FBL0I7QUFDQSxNQUFNQyxhQUFhLEdBQUc7QUFDcEJDLGNBQVUsRUFBRTtBQUFBLGFBQU1yQixRQUFRLENBQUN2QixFQUFELENBQWQ7QUFBQSxLQURRO0FBRXBCNkMsY0FBVSxFQUFFO0FBQUEsYUFBTzFDLFNBQVMsR0FBR3NCLE9BQU8sQ0FBQ3pCLEVBQUQsRUFBSyxXQUFMLENBQVYsR0FBOEJzQixRQUFRLENBQUN0QixFQUFELENBQXREO0FBQUEsS0FGUTtBQUdwQjhDLFdBQU8sRUFBRSxtQkFBTTtBQUNiL0IsZUFBUyxDQUFDO0FBQ1JuQixjQUFNLEVBQU5BLE1BRFE7QUFFUkksVUFBRSxFQUFGQSxFQUZRO0FBR1JOLGFBQUssRUFBTEEsS0FIUTtBQUlSZSxTQUFDLEVBQUUsQ0FBQ3FCLFNBQUQsR0FBYVMsUUFBUSxHQUFHOUIsQ0FBeEIsR0FBNEJBLENBSnZCO0FBS1JDLFNBQUMsRUFBRSxDQUFDcUIsU0FBRCxHQUFhUyxRQUFRLEdBQUc5QixDQUF4QixHQUE0QkE7QUFMdkIsT0FBRCxDQUFUO0FBT0FXLFdBQUssQ0FBQ3JCLEVBQUQsQ0FBTDtBQUNELEtBWm1CO0FBYXBCK0MsV0FBTyxFQUFFO0FBQUEsYUFBTWxDLFVBQVUsQ0FBQ2IsRUFBRCxDQUFoQjtBQUFBLEtBYlc7QUFjcEJnRCxVQUFNLEVBQUUsZ0JBQUNDLEtBQUQsRUFBNkI7QUFBQTs7QUFFbkM7QUFDQSxtQ0FBSVIsZ0JBQWdCLENBQUNTLE9BQXJCLDBEQUFJLHNCQUEwQkMsUUFBMUIsQ0FBbUNGLEtBQUssQ0FBQ0csYUFBekMsQ0FBSixFQUFxRTtBQUNuRVgsd0JBQWdCLENBQUNTLE9BQWpCLENBQXlCRyxLQUF6QjtBQUNELE9BRkQsTUFFTyxJQUFJSixLQUFLLENBQUNHLGFBQU4sS0FBd0I5QyxjQUE1QixFQUE0QztBQUNqRGdELGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JOLEtBQUssQ0FBQ0csYUFBOUI7QUFDQXZDLGtCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0QsT0FITSxNQUdBO0FBQ0x5QyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCTixLQUFLLENBQUNHLGFBQTlCO0FBQ0Q7QUFDRixLQXpCbUI7QUEwQnBCSSxrQkFBYyxFQUFFaEMsUUFBUSxDQUFDeEIsRUFBRCxDQTFCSjtBQTJCcEJ5RCxVQUFNLEVBQUV6RSxZQUFZLEdBQUdrQyxVQUFVLENBQUN3QyxLQUFYLEdBQW1CQyxPQUFuQixHQUE2QkMsT0FBN0IsQ0FBcUM1RCxFQUFyQyxDQTNCSDtBQTRCcEJHLGFBQVMsRUFBRXlCLGNBNUJTO0FBNkJwQnhCLGFBQVMsRUFBVEEsU0E3Qm9CO0FBOEJwQkosTUFBRSxFQUFGQSxFQTlCb0I7QUErQnBCSixVQUFNLEVBQU5BLE1BL0JvQjtBQWdDcEJGLFNBQUssRUFBTEE7QUFoQ29CLEdBQXRCO0FBbUNBbUUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSTVDLFlBQVksS0FBS2pCLEVBQWpCLElBQXVCSSxTQUEzQixFQUFzQztBQUNwQ1MsZ0JBQVUsQ0FDUmlELGlGQUFvQixDQUNsQjFDLFNBRGtCLEVBRWxCRixVQUFVLENBQUM2QyxNQUFYLENBQWtCLFVBQUNDLE9BQUQ7QUFBQSxlQUFhQSxPQUFPLEtBQUtoRSxFQUF6QjtBQUFBLE9BQWxCLENBRmtCLENBRFosQ0FBVjtBQU1ELEtBUEQsTUFPTyxJQUFJLENBQUNrQixVQUFVLENBQUMrQyxRQUFYLENBQW9CakUsRUFBcEIsQ0FBTCxFQUE4QjtBQUNuQ2EsZ0JBQVUsQ0FBQ2lELGlGQUFvQixDQUFDMUMsU0FBRCxFQUFZRixVQUFaLENBQXJCLENBQVY7QUFDRDtBQUNGLEdBWFEsRUFXTixDQUFDRCxZQUFELEVBQWVqQixFQUFmLEVBQW1CSSxTQUFuQixFQUE4QmdCLFNBQTlCLEVBQXlDRixVQUF6QyxDQVhNLENBQVQ7QUFhQTJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUkxRCxTQUFKLEVBQWU7QUFDYjBCLHVCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDRCxLQUZELE1BRU8sSUFBSUQsY0FBSixFQUFvQjtBQUN6QnNDLGdCQUFVLENBQ1I7QUFBQSxlQUFNckMsaUJBQWlCLENBQUMsS0FBRCxDQUF2QjtBQUFBLE9BRFEsRUFFUnNDLG9GQUFtQyxHQUFHQyx1RUFGOUIsQ0FBVjtBQUlEO0FBQ0YsR0FUUSxFQVNOLENBQUNqRSxTQUFELENBVE0sQ0FBVDtBQVdBLHNCQUNFLHFFQUFDLG9EQUFELENBQVEsT0FBUjtBQUVFLE9BQUcsRUFBRXNDLGdCQUZQO0FBR0UsYUFBUyxFQUFFNEIsNkZBQU0sQ0FBQ0MsZUFIcEI7QUFJRSxTQUFLLEVBQUU7QUFDTGIsWUFBTSxFQUFFeEMsWUFBWSxLQUFLakIsRUFBakIsR0FBc0J1RSxpRUFBdEIsR0FBeUM1QixhQUFhLENBQUNjLE1BRDFEO0FBRUw3RCxZQUFNLEVBQU5BLE1BRks7QUFHTEYsV0FBSyxFQUFMQTtBQUhLO0FBSlQsS0FTTThFLDRFQUFvQixDQUFDO0FBQ3ZCQyxZQUFRLEVBQUUzQyxTQUFTLElBQUlTLFFBREE7QUFFdkJtQyxZQUFRLEVBQUUzQyxTQUFTLElBQUlTLFFBRkE7QUFHdkJtQyxhQUFTLEVBQ054RSxTQUFTLElBQUlDLFNBQWIsSUFBMEIsUUFBM0IsSUFDQ0QsU0FBUyxJQUFJLFdBRGQsSUFFQ0MsU0FBUyxJQUFJLFdBRmQsSUFHQSxPQVBxQjtBQVF2QlIsVUFBTSxFQUFOQSxNQVJ1QjtBQVN2QkYsU0FBSyxFQUFMQSxLQVR1QjtBQVV2QmUsS0FBQyxFQUFEQSxDQVZ1QjtBQVd2QkMsS0FBQyxFQUFEQSxDQVh1QjtBQVl2Qkosa0JBQWMsRUFBZEEsY0FadUI7QUFhdkJMLGlCQUFhLEVBQWJBO0FBYnVCLEdBQUQsQ0FUMUI7QUFBQSxjQXlCR08sUUFBUSxnQkFDUCxxRUFBQyxNQUFEO0FBQ0UsVUFBSSxFQUFFVCxJQURSO0FBRUUsVUFBSSxFQUFFTSxJQUZSO0FBR0UsYUFBTyxFQUFFUixPQUhYO0FBSUUscUJBQWUsRUFBRUssZUFKbkI7QUFLRSxnQkFBVSxFQUFFd0IsSUFBSSxDQUFDMUIsRUFBRDtBQUxsQixPQU1NMkMsYUFOTjtBQUFBLDZCQVFFLHFFQUFDLEdBQUQsa0NBQVNwRCxnQkFBVCxHQUErQm9ELGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE8sZ0JBWVAscUVBQUMsR0FBRCxrQ0FBU3BELGdCQUFULEdBQStCb0QsYUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXJDSixNQUNPM0MsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQ0QsQ0E1SkQ7O0dBQU1aLGE7O01BQUFBLGE7QUE4SlNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1dpbmRvd01hbmFnZXIvV2luZG93TWFuYWdlci5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgUHJvY2VzcyB9IGZyb20gJ0AvdXRpbHMvcHJvY2Vzcyc7XG5cbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQge1xuICBiYXNlWmluZGV4LFxuICBmb3JlZ3JvdW5kWmluZGV4LFxuICBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyxcbiAgTUlMTElTRUNPTkRTX0lOX1NFQ09ORCxcbiAgd2luZG93c1ppbmRleExldmVsLFxuICB6aW5kZXhMZXZlbFNpemVcbn0gZnJvbSAnQC91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0TmV4dFZpc2libGVXaW5kb3csIGdldE1heERpbWVuc2lvbnMgfSBmcm9tICdAL3V0aWxzL3dpbmRvd21hbmFnZXInO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBQcm9jZXNzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvUHJvY2Vzc01hbmFnZXInO1xuaW1wb3J0IHsgU2Vzc2lvbkNvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Nlc3Npb25NYW5hZ2VyJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpbmRvd01vdGlvblNldHRpbmdzIH0gZnJvbSAnQC91dGlscy9tb3Rpb25zJztcblxuY29uc3QgV2luZG93ID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3cnKSk7XG5cbmNvbnN0IHdpbmRvd1ppbmRleCA9IGJhc2VaaW5kZXggKyB3aW5kb3dzWmluZGV4TGV2ZWwgKiB6aW5kZXhMZXZlbFNpemU7XG5cbmNvbnN0IFByb2Nlc3NXaW5kb3c6IFJlYWN0LkZDPFByb2Nlc3M+ID0gKHtcbiAgbG9hZGVyOiB7XG4gICAgbG9hZGVyOiBBcHAsXG4gICAgbG9hZGVkQXBwT3B0aW9ucyxcbiAgICBsb2FkZXJPcHRpb25zOiB7IHdpZHRoOiBkZWZhdWx0V2lkdGgsIGhlaWdodDogZGVmYXVsdEhlaWdodCB9XG4gIH0sXG4gIGJnQ29sb3IsXG4gIGhlaWdodDogaW5pdGlhbEhlaWdodCxcbiAgaWNvbixcbiAgaWQsXG4gIGxhdW5jaEVsZW1lbnQsXG4gIGxvY2tBc3BlY3RSYXRpbyxcbiAgbWF4aW1pemVkLFxuICBtaW5pbWl6ZWQsXG4gIG5hbWUsXG4gIHRhc2tiYXJFbGVtZW50LFxuICB3aWR0aDogaW5pdGlhbFdpZHRoLFxuICB3aW5kb3dlZCxcbiAgeCxcbiAgeVxufSkgPT4ge1xuICBjb25zdCB7XG4gICAgZm9yZWdyb3VuZCxcbiAgICBnZXRTdGF0ZSxcbiAgICBzYXZlU3RhdGUsXG4gICAgc2Vzc2lvbjogeyBmb3JlZ3JvdW5kSWQsIHN0YWNrT3JkZXIgfVxuICB9ID0gdXNlQ29udGV4dChTZXNzaW9uQ29udGV4dCk7XG4gIGNvbnN0IHtcbiAgICBwcm9jZXNzZXMsXG4gICAgY2xvc2UsXG4gICAgbWF4aW1pemUsXG4gICAgbWluaW1pemUsXG4gICAgcG9zaXRpb24sXG4gICAgcmVzdG9yZSxcbiAgICBzaXplXG4gIH0gPSB1c2VDb250ZXh0KFByb2Nlc3NDb250ZXh0KTtcbiAgY29uc3QgW21heGltaXplV2luZG93LCBzZXRNYXhpbWl6ZVdpbmRvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgeDogcHJldmlvdXNYLCB5OiBwcmV2aW91c1kgfSA9IGdldFN0YXRlKHtcbiAgICBpZFxuICB9KTtcbiAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSBnZXRNYXhEaW1lbnNpb25zKFxuICAgIGluaXRpYWxXaWR0aCxcbiAgICBpbml0aWFsSGVpZ2h0LFxuICAgIGRlZmF1bHRXaWR0aCxcbiAgICBkZWZhdWx0SGVpZ2h0LFxuICAgIGxvY2tBc3BlY3RSYXRpb1xuICApO1xuICBjb25zdCB7IHg6IGRlZmF1bHRYLCB5OiBkZWZhdWx0WSB9ID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgeDogTWF0aC5mbG9vcigtKHdpZHRoIC8gMikgKyB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNSksXG4gICAgICB5OiBNYXRoLmZsb29yKC0oaGVpZ2h0IC8gMikgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjQ1KVxuICAgIH0pLFxuICAgIFtdXG4gICk7XG4gIGNvbnN0IHByb2Nlc3NXaW5kb3dSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB3aW5kb3dPcHRpb25zID0ge1xuICAgIG9uTWluaW1pemU6ICgpID0+IG1pbmltaXplKGlkKSxcbiAgICBvbk1heGltaXplOiAoKSA9PiAobWF4aW1pemVkID8gcmVzdG9yZShpZCwgJ21heGltaXplZCcpIDogbWF4aW1pemUoaWQpKSxcbiAgICBvbkNsb3NlOiAoKSA9PiB7XG4gICAgICBzYXZlU3RhdGUoe1xuICAgICAgICBoZWlnaHQsXG4gICAgICAgIGlkLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgeDogIXByZXZpb3VzWCA/IGRlZmF1bHRYICsgeCA6IHgsXG4gICAgICAgIHk6ICFwcmV2aW91c1kgPyBkZWZhdWx0WSArIHkgOiB5XG4gICAgICB9KTtcbiAgICAgIGNsb3NlKGlkKTtcbiAgICB9LFxuICAgIG9uRm9jdXM6ICgpID0+IGZvcmVncm91bmQoaWQpLFxuICAgIG9uQmx1cjogKGV2ZW50OiBSZWFjdC5Gb2N1c0V2ZW50KSA9PiB7XG4gICAgICBcbiAgICAgIC8vIHByb2Nlc3NXaW5kb3dSZWZcbiAgICAgIGlmIChwcm9jZXNzV2luZG93UmVmLmN1cnJlbnQ/LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQgYXMgTm9kZSkpIHtcbiAgICAgICAgcHJvY2Vzc1dpbmRvd1JlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IHRhc2tiYXJFbGVtZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJIEJMVVIgMScsIGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG4gICAgICAgIGZvcmVncm91bmQoJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0kgQkxVUiAyJywgZXZlbnQucmVsYXRlZFRhcmdldClcbiAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVBvc2l0aW9uOiBwb3NpdGlvbihpZCksXG4gICAgekluZGV4OiB3aW5kb3daaW5kZXggKyBzdGFja09yZGVyLnNsaWNlKCkucmV2ZXJzZSgpLmluZGV4T2YoaWQpLFxuICAgIG1heGltaXplZDogbWF4aW1pemVXaW5kb3csXG4gICAgbWluaW1pemVkLFxuICAgIGlkLFxuICAgIGhlaWdodCxcbiAgICB3aWR0aFxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZvcmVncm91bmRJZCA9PT0gaWQgJiYgbWluaW1pemVkKSB7XG4gICAgICBmb3JlZ3JvdW5kKFxuICAgICAgICBnZXROZXh0VmlzaWJsZVdpbmRvdyhcbiAgICAgICAgICBwcm9jZXNzZXMsXG4gICAgICAgICAgc3RhY2tPcmRlci5maWx0ZXIoKHN0YWNrSWQpID0+IHN0YWNrSWQgIT09IGlkKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIXN0YWNrT3JkZXIuaW5jbHVkZXMoaWQpKSB7XG4gICAgICBmb3JlZ3JvdW5kKGdldE5leHRWaXNpYmxlV2luZG93KHByb2Nlc3Nlcywgc3RhY2tPcmRlcikpO1xuICAgIH1cbiAgfSwgW2ZvcmVncm91bmRJZCwgaWQsIG1pbmltaXplZCwgcHJvY2Vzc2VzLCBzdGFja09yZGVyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobWF4aW1pemVkKSB7XG4gICAgICBzZXRNYXhpbWl6ZVdpbmRvdyh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKG1heGltaXplV2luZG93KSB7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiBzZXRNYXhpbWl6ZVdpbmRvdyhmYWxzZSksXG4gICAgICAgIE1BWElNSVpFX0FOSU1BVElPTl9TUEVFRF9JTl9TRUNPTkRTICogTUlMTElTRUNPTkRTX0lOX1NFQ09ORFxuICAgICAgKTtcbiAgICB9XG4gIH0sIFttYXhpbWl6ZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uYXJ0aWNsZVxuICAgICAga2V5PXtpZH1cbiAgICAgIHJlZj17cHJvY2Vzc1dpbmRvd1JlZn1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuaW1hdGVkV2luZG93c31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHpJbmRleDogZm9yZWdyb3VuZElkID09PSBpZCA/IGZvcmVncm91bmRaaW5kZXggOiB3aW5kb3dPcHRpb25zLnpJbmRleCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aFxuICAgICAgfX1cbiAgICAgIHsuLi53aW5kb3dNb3Rpb25TZXR0aW5ncyh7XG4gICAgICAgIGluaXRpYWxYOiBwcmV2aW91c1ggfHwgZGVmYXVsdFgsXG4gICAgICAgIGluaXRpYWxZOiBwcmV2aW91c1kgfHwgZGVmYXVsdFksXG4gICAgICAgIGFuaW1hdGlvbjpcbiAgICAgICAgICAobWF4aW1pemVkICYmIG1pbmltaXplZCAmJiAnbWF4bWluJykgfHxcbiAgICAgICAgICAobWF4aW1pemVkICYmICdtYXhpbWl6ZWQnKSB8fFxuICAgICAgICAgIChtaW5pbWl6ZWQgJiYgJ21pbmltaXplZCcpIHx8XG4gICAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgdGFza2JhckVsZW1lbnQsXG4gICAgICAgIGxhdW5jaEVsZW1lbnRcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIHt3aW5kb3dlZCA/IChcbiAgICAgICAgPFdpbmRvd1xuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBiZ0NvbG9yPXtiZ0NvbG9yfVxuICAgICAgICAgIGxvY2tBc3BlY3RSYXRpbz17bG9ja0FzcGVjdFJhdGlvfVxuICAgICAgICAgIHVwZGF0ZVNpemU9e3NpemUoaWQpfVxuICAgICAgICAgIHsuLi53aW5kb3dPcHRpb25zfVxuICAgICAgICA+XG4gICAgICAgICAgPEFwcCB7Li4ubG9hZGVkQXBwT3B0aW9uc30gey4uLndpbmRvd09wdGlvbnN9IC8+XG4gICAgICAgIDwvV2luZG93PlxuICAgICAgKSA6IChcbiAgICAgICAgPEFwcCB7Li4ubG9hZGVkQXBwT3B0aW9uc30gey4uLndpbmRvd09wdGlvbnN9IC8+XG4gICAgICApfVxuICAgIDwvbW90aW9uLmFydGljbGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzV2luZG93O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/WindowManager/ProcessWindow.tsx\n");

/***/ })

})