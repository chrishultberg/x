webpackHotUpdate_N_E(3,{

/***/ "./components/System/WindowManager/ProcessWindow.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/ProcessWindow.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/windowmanager */ \"./utils/windowmanager.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/ProcessWindow.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\")];\n    },\n    modules: ['@/components/System/WindowManager/Window']\n  }\n});\n_c2 = Window;\nvar windowZindex = _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"baseZindex\"] + _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"windowsZindexLevel\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"zindexLevelSize\"];\n\nvar ProcessWindow = function ProcessWindow(_ref) {\n  _s();\n\n  var _ref$loader = _ref.loader,\n      App = _ref$loader.loader,\n      loadedAppOptions = _ref$loader.loadedAppOptions,\n      _ref$loader$loaderOpt = _ref$loader.loaderOptions,\n      defaultWidth = _ref$loader$loaderOpt.width,\n      defaultHeight = _ref$loader$loaderOpt.height,\n      bgColor = _ref.bgColor,\n      initialHeight = _ref.height,\n      icon = _ref.icon,\n      id = _ref.id,\n      launchElement = _ref.launchElement,\n      lockAspectRatio = _ref.lockAspectRatio,\n      maximized = _ref.maximized,\n      minimized = _ref.minimized,\n      name = _ref.name,\n      taskbarElement = _ref.taskbarElement,\n      initialWidth = _ref.width,\n      windowed = _ref.windowed,\n      x = _ref.x,\n      y = _ref.y;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__[\"SessionContext\"]),\n      foreground = _useContext.foreground,\n      getState = _useContext.getState,\n      saveState = _useContext.saveState,\n      _useContext$session = _useContext.session,\n      foregroundId = _useContext$session.foregroundId,\n      stackOrder = _useContext$session.stackOrder;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__[\"ProcessContext\"]),\n      processes = _useContext2.processes,\n      close = _useContext2.close,\n      maximize = _useContext2.maximize,\n      minimize = _useContext2.minimize,\n      position = _useContext2.position,\n      restore = _useContext2.restore,\n      size = _useContext2.size;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useState\"])(false),\n      maximizeWindow = _useState[0],\n      setMaximizeWindow = _useState[1];\n\n  var _getState = getState({\n    id: id\n  }),\n      previousX = _getState.x,\n      previousY = _getState.y;\n\n  var _getMaxDimensions = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getMaxDimensions\"])(initialWidth, initialHeight, defaultWidth, defaultHeight, lockAspectRatio),\n      height = _getMaxDimensions.height,\n      width = _getMaxDimensions.width;\n\n  var defaultX = -Math.floor(width / 2) + window.innerWidth * 0.5;\n  var defaultY = -Math.floor(height / 2) + window.innerHeight * 0.45;\n  var windowOptions = {\n    onMinimize: function onMinimize() {\n      return minimize(id);\n    },\n    onMaximize: function onMaximize() {\n      return maximized ? restore(id, 'maximized') : maximize(id);\n    },\n    onClose: function onClose() {\n      saveState({\n        height: height,\n        id: id,\n        width: width,\n        x: !previousX ? defaultX + x : x,\n        y: !previousY ? defaultY + y : y\n      });\n      close(id);\n    },\n    onFocus: function onFocus() {\n      return foreground(id);\n    },\n    onBlur: function onBlur(event) {\n      if (event.relatedTarget !== taskbarElement) {\n        foreground('');\n      }\n    },\n    updatePosition: position(id),\n    zIndex: windowZindex + stackOrder.slice().reverse().indexOf(id),\n    maximized: maximizeWindow,\n    minimized: minimized,\n    id: id,\n    height: height,\n    width: width\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (foregroundId === id && minimized) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder.filter(function (stackId) {\n        return stackId !== id;\n      })));\n    } else if (!stackOrder.includes(id)) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder));\n    }\n  }, [foregroundId, id, minimized, processes, stackOrder]);\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (maximized) {\n      setMaximizeWindow(true);\n    } else if (maximizeWindow) {\n      setTimeout(function () {\n        return setMaximizeWindow(false);\n      }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MILLISECONDS_IN_SECOND\"]);\n    }\n  }, [maximized]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].article, _objectSpread(_objectSpread({\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animatedWindows,\n    style: {\n      zIndex: foregroundId === id ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"foregroundZindex\"] : windowOptions.zIndex,\n      height: height,\n      width: width\n    }\n  }, Object(_utils_motions__WEBPACK_IMPORTED_MODULE_10__[\"windowMotionSettings\"])({\n    initialX: previousX || defaultX,\n    initialY: previousY || defaultY,\n    animation: maximized && minimized && 'maxmin' || maximized && 'maximized' || minimized && 'minimized' || 'start',\n    height: height,\n    width: width,\n    x: previousX ? x : defaultX - x,\n    y: previousY ? y : defaultY - y,\n    taskbarElement: taskbarElement,\n    launchElement: launchElement\n  })), {}, {\n    children: windowed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Window, _objectSpread(_objectSpread({\n      icon: icon,\n      name: name,\n      bgColor: bgColor,\n      lockAspectRatio: lockAspectRatio,\n      updateSize: size(id)\n    }, windowOptions), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 160,\n        columnNumber: 11\n      }, _this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 9\n    }, _this)\n  }), id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 127,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProcessWindow, \"/nMTEAAVdHGUbs0PPngxMaLeid4=\");\n\n_c3 = ProcessWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessWindow);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"ProcessWindow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeD82Y2MwIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJ3aW5kb3daaW5kZXgiLCJiYXNlWmluZGV4Iiwid2luZG93c1ppbmRleExldmVsIiwiemluZGV4TGV2ZWxTaXplIiwiUHJvY2Vzc1dpbmRvdyIsImxvYWRlciIsIkFwcCIsImxvYWRlZEFwcE9wdGlvbnMiLCJsb2FkZXJPcHRpb25zIiwiZGVmYXVsdFdpZHRoIiwid2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwiaGVpZ2h0IiwiYmdDb2xvciIsImluaXRpYWxIZWlnaHQiLCJpY29uIiwiaWQiLCJsYXVuY2hFbGVtZW50IiwibG9ja0FzcGVjdFJhdGlvIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwibmFtZSIsInRhc2tiYXJFbGVtZW50IiwiaW5pdGlhbFdpZHRoIiwid2luZG93ZWQiLCJ4IiwieSIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJnZXRTdGF0ZSIsInNhdmVTdGF0ZSIsInNlc3Npb24iLCJmb3JlZ3JvdW5kSWQiLCJzdGFja09yZGVyIiwiUHJvY2Vzc0NvbnRleHQiLCJwcm9jZXNzZXMiLCJjbG9zZSIsIm1heGltaXplIiwibWluaW1pemUiLCJwb3NpdGlvbiIsInJlc3RvcmUiLCJzaXplIiwidXNlU3RhdGUiLCJtYXhpbWl6ZVdpbmRvdyIsInNldE1heGltaXplV2luZG93IiwicHJldmlvdXNYIiwicHJldmlvdXNZIiwiZ2V0TWF4RGltZW5zaW9ucyIsImRlZmF1bHRYIiwiTWF0aCIsImZsb29yIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRlZmF1bHRZIiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3dPcHRpb25zIiwib25NaW5pbWl6ZSIsIm9uTWF4aW1pemUiLCJvbkNsb3NlIiwib25Gb2N1cyIsIm9uQmx1ciIsImV2ZW50IiwicmVsYXRlZFRhcmdldCIsInVwZGF0ZVBvc2l0aW9uIiwiekluZGV4Iiwic2xpY2UiLCJyZXZlcnNlIiwiaW5kZXhPZiIsInVzZUVmZmVjdCIsImdldE5leHRWaXNpYmxlV2luZG93IiwiZmlsdGVyIiwic3RhY2tJZCIsImluY2x1ZGVzIiwic2V0VGltZW91dCIsIk1BWElNSVpFX0FOSU1BVElPTl9TUEVFRF9JTl9TRUNPTkRTIiwiTUlMTElTRUNPTkRTX0lOX1NFQ09ORCIsInN0eWxlcyIsImFuaW1hdGVkV2luZG93cyIsImZvcmVncm91bmRaaW5kZXgiLCJ3aW5kb3dNb3Rpb25TZXR0aW5ncyIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJhbmltYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsbURBQU87QUFBQSxTQUFDLDZLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsOEZBQVI7QUFBQTtBQUFBLGNBQVEsMENBQVI7QUFBQTtBQUFBLEVBQXRCO01BQU1ELE07QUFFTixJQUFNRSxZQUFZLEdBQUdDLDJEQUFVLEdBQUdDLG1FQUFrQixHQUFHQyxnRUFBdkQ7O0FBRUEsSUFBTUMsYUFBZ0MsR0FBRyxTQUFuQ0EsYUFBbUMsT0FvQm5DO0FBQUE7O0FBQUEseUJBbkJKQyxNQW1CSTtBQUFBLE1BbEJNQyxHQWtCTixlQWxCRkQsTUFrQkU7QUFBQSxNQWpCRkUsZ0JBaUJFLGVBakJGQSxnQkFpQkU7QUFBQSwwQ0FoQkZDLGFBZ0JFO0FBQUEsTUFoQnNCQyxZQWdCdEIseUJBaEJlQyxLQWdCZjtBQUFBLE1BaEI0Q0MsYUFnQjVDLHlCQWhCb0NDLE1BZ0JwQztBQUFBLE1BZEpDLE9BY0ksUUFkSkEsT0FjSTtBQUFBLE1BYklDLGFBYUosUUFiSkYsTUFhSTtBQUFBLE1BWkpHLElBWUksUUFaSkEsSUFZSTtBQUFBLE1BWEpDLEVBV0ksUUFYSkEsRUFXSTtB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LFVBQUksRUFBRU0sSUFGUjtBQUdFLGFBQU8sRUFBRVIsT0FIWDtBQUlFLHFCQUFlLEVBQUVLLGVBSm5CO0FBS0UsZ0JBQVUsRUFBRXdCLElBQUksQ0FBQzFCLEVBQUQ7QUFMbEIsT0FNTXdDLGFBTk47QUFBQSw2QkFRRSxxRUFBQyxHQUFELGtDQUFTakQsZ0JBQVQsR0FBK0JpRCxhQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURPLGdCQVlQLHFFQUFDLEdBQUQsa0NBQVNqRCxnQkFBVCxHQUErQmlELGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwQ0osTUFDT3hDLEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUNELENBOUlEOztHQUFNWixhOztNQUFBQSxhO0FBZ0pTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd01hbmFnZXIvUHJvY2Vzc1dpbmRvdy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvd01hbmFnZXIubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IFByb2Nlc3MgfSBmcm9tICdAL3V0aWxzL3Byb2Nlc3MnO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHtcbiAgYmFzZVppbmRleCxcbiAgZm9yZWdyb3VuZFppbmRleCxcbiAgTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMsXG4gIE1JTExJU0VDT05EU19JTl9TRUNPTkQsXG4gIHdpbmRvd3NaaW5kZXhMZXZlbCxcbiAgemluZGV4TGV2ZWxTaXplXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldE5leHRWaXNpYmxlV2luZG93LCBnZXRNYXhEaW1lbnNpb25zIH0gZnJvbSAnQC91dGlscy93aW5kb3dtYW5hZ2VyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgUHJvY2Vzc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Byb2Nlc3NNYW5hZ2VyJztcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9TZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2luZG93TW90aW9uU2V0dGluZ3MgfSBmcm9tICdAL3V0aWxzL21vdGlvbnMnO1xuXG5jb25zdCBXaW5kb3cgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvdycpKTtcblxuY29uc3Qgd2luZG93WmluZGV4ID0gYmFzZVppbmRleCArIHdpbmRvd3NaaW5kZXhMZXZlbCAqIHppbmRleExldmVsU2l6ZTtcblxuY29uc3QgUHJvY2Vzc1dpbmRvdzogUmVhY3QuRkM8UHJvY2Vzcz4gPSAoe1xuICBsb2FkZXI6IHtcbiAgICBsb2FkZXI6IEFwcCxcbiAgICBsb2FkZWRBcHBPcHRpb25zLFxuICAgIGxvYWRlck9wdGlvbnM6IHsgd2lkdGg6IGRlZmF1bHRXaWR0aCwgaGVpZ2h0OiBkZWZhdWx0SGVpZ2h0IH1cbiAgfSxcbiAgYmdDb2xvcixcbiAgaGVpZ2h0OiBpbml0aWFsSGVpZ2h0LFxuICBpY29uLFxuICBpZCxcbiAgbGF1bmNoRWxlbWVudCxcbiAgbG9ja0FzcGVjdFJhdGlvLFxuICBtYXhpbWl6ZWQsXG4gIG1pbmltaXplZCxcbiAgbmFtZSxcbiAgdGFza2JhckVsZW1lbnQsXG4gIHdpZHRoOiBpbml0aWFsV2lkdGgsXG4gIHdpbmRvd2VkLFxuICB4LFxuICB5XG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmb3JlZ3JvdW5kLFxuICAgIGdldFN0YXRlLFxuICAgIHNhdmVTdGF0ZSxcbiAgICBzZXNzaW9uOiB7IGZvcmVncm91bmRJZCwgc3RhY2tPcmRlciB9XG4gIH0gPSB1c2VDb250ZXh0KFNlc3Npb25Db250ZXh0KTtcbiAgY29uc3Qge1xuICAgIHByb2Nlc3NlcyxcbiAgICBjbG9zZSxcbiAgICBtYXhpbWl6ZSxcbiAgICBtaW5pbWl6ZSxcbiAgICBwb3NpdGlvbixcbiAgICByZXN0b3JlLFxuICAgIHNpemVcbiAgfSA9IHVzZUNvbnRleHQoUHJvY2Vzc0NvbnRleHQpO1xuICBjb25zdCBbbWF4aW1pemVXaW5kb3csIHNldE1heGltaXplV2luZG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB4OiBwcmV2aW91c1gsIHk6IHByZXZpb3VzWSB9ID0gZ2V0U3RhdGUoe1xuICAgIGlkXG4gIH0pO1xuICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGdldE1heERpbWVuc2lvbnMoXG4gICAgaW5pdGlhbFdpZHRoLFxuICAgIGluaXRpYWxIZWlnaHQsXG4gICAgZGVmYXVsdFdpZHRoLFxuICAgIGRlZmF1bHRIZWlnaHQsXG4gICAgbG9ja0FzcGVjdFJhdGlvXG4gICk7XG4gIGNvbnN0IGRlZmF1bHRYID0gLU1hdGguZmxvb3Iod2lkdGggLyAyKSArIHdpbmRvdy5pbm5lcldpZHRoICogMC41O1xuICBjb25zdCBkZWZhdWx0WSA9IC1NYXRoLmZsb29yKGhlaWdodCAvIDIpICsgd2luZG93LmlubmVySGVpZ2h0ICogMC40NTtcbiAgY29uc3Qgd2luZG93T3B0aW9ucyA9IHtcbiAgICBvbk1pbmltaXplOiAoKSA9PiBtaW5pbWl6ZShpZCksXG4gICAgb25NYXhpbWl6ZTogKCkgPT4gKG1heGltaXplZCA/IHJlc3RvcmUoaWQsICdtYXhpbWl6ZWQnKSA6IG1heGltaXplKGlkKSksXG4gICAgb25DbG9zZTogKCkgPT4ge1xuICAgICAgc2F2ZVN0YXRlKHtcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBpZCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIHg6ICFwcmV2aW91c1ggPyBkZWZhdWx0WCArIHggOiB4LFxuICAgICAgICB5OiAhcHJldmlvdXNZID8gZGVmYXVsdFkgKyB5IDogeVxuICAgICAgfSk7XG4gICAgICBjbG9zZShpZCk7XG4gICAgfSxcbiAgICBvbkZvY3VzOiAoKSA9PiBmb3JlZ3JvdW5kKGlkKSxcbiAgICBvbkJsdXI6IChldmVudDogUmVhY3QuRm9jdXNFdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IHRhc2tiYXJFbGVtZW50KSB7XG4gICAgICAgIGZvcmVncm91bmQoJycpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlUG9zaXRpb246IHBvc2l0aW9uKGlkKSxcbiAgICB6SW5kZXg6IHdpbmRvd1ppbmRleCArIHN0YWNrT3JkZXIuc2xpY2UoKS5yZXZlcnNlKCkuaW5kZXhPZihpZCksXG4gICAgbWF4aW1pemVkOiBtYXhpbWl6ZVdpbmRvdyxcbiAgICBtaW5pbWl6ZWQsXG4gICAgaWQsXG4gICAgaGVpZ2h0LFxuICAgIHdpZHRoXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZm9yZWdyb3VuZElkID09PSBpZCAmJiBtaW5pbWl6ZWQpIHtcbiAgICAgIGZvcmVncm91bmQoXG4gICAgICAgIGdldE5leHRWaXNpYmxlV2luZG93KFxuICAgICAgICAgIHByb2Nlc3NlcyxcbiAgICAgICAgICBzdGFja09yZGVyLmZpbHRlcigoc3RhY2tJZCkgPT4gc3RhY2tJZCAhPT0gaWQpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghc3RhY2tPcmRlci5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIGZvcmVncm91bmQoZ2V0TmV4dFZpc2libGVXaW5kb3cocHJvY2Vzc2VzLCBzdGFja09yZGVyKSk7XG4gICAgfVxuICB9LCBbZm9yZWdyb3VuZElkLCBpZCwgbWluaW1pemVkLCBwcm9jZXNzZXMsIHN0YWNrT3JkZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtYXhpbWl6ZWQpIHtcbiAgICAgIHNldE1heGltaXplV2luZG93KHRydWUpO1xuICAgIH0gZWxzZSBpZiAobWF4aW1pemVXaW5kb3cpIHtcbiAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHNldE1heGltaXplV2luZG93KGZhbHNlKSxcbiAgICAgICAgTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMgKiBNSUxMSVNFQ09ORFNfSU5fU0VDT05EXG4gICAgICApO1xuICAgIH1cbiAgfSwgW21heGltaXplZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5hcnRpY2xlXG4gICAgICBrZXk9e2lkfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYW5pbWF0ZWRXaW5kb3dzfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgekluZGV4OiBmb3JlZ3JvdW5kSWQgPT09IGlkID8gZm9yZWdyb3VuZFppbmRleCA6IHdpbmRvd09wdGlvbnMuekluZGV4LFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoXG4gICAgICB9fVxuICAgICAgey4uLndpbmRvd01vdGlvblNldHRpbmdzKHtcbiAgICAgICAgaW5pdGlhbFg6IHByZXZpb3VzWCB8fCBkZWZhdWx0WCxcbiAgICAgICAgaW5pdGlhbFk6IHByZXZpb3VzWSB8fCBkZWZhdWx0WSxcbiAgICAgICAgYW5pbWF0aW9uOlxuICAgICAgICAgIChtYXhpbWl6ZWQgJiYgbWluaW1pemVkICYmICdtYXhtaW4nKSB8fFxuICAgICAgICAgIChtYXhpbWl6ZWQgJiYgJ21heGltaXplZCcpIHx8XG4gICAgICAgICAgKG1pbmltaXplZCAmJiAnbWluaW1pemVkJykgfHxcbiAgICAgICAgICAnc3RhcnQnLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICB4OiBwcmV2aW91c1ggPyB4IDogZGVmYXVsdFggLSB4LFxuICAgICAgICB5OiBwcmV2aW91c1kgPyB5IDogZGVmYXVsdFkgLSB5LFxuICAgICAgICB0YXNrYmFyRWxlbWVudCxcbiAgICAgICAgbGF1bmNoRWxlbWVudFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge3dpbmRvd2VkID8gKFxuICAgICAgICA8V2luZG93XG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGJnQ29sb3I9e2JnQ29sb3J9XG4gICAgICAgICAgbG9ja0FzcGVjdFJhdGlvPXtsb2NrQXNwZWN0UmF0aW99XG4gICAgICAgICAgdXBkYXRlU2l6ZT17c2l6ZShpZCl9XG4gICAgICAgICAgey4uLndpbmRvd09wdGlvbnN9XG4gICAgICAgID5cbiAgICAgICAgICA8QXBwIHsuLi5sb2FkZWRBcHBPcHRpb25zfSB7Li4ud2luZG93T3B0aW9uc30gLz5cbiAgICAgICAgPC9XaW5kb3c+XG4gICAgICApIDogKFxuICAgICAgICA8QXBwIHsuLi5sb2FkZWRBcHBPcHRpb25zfSB7Li4ud2luZG93T3B0aW9uc30gLz5cbiAgICAgICl9XG4gICAgPC9tb3Rpb24uYXJ0aWNsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NXaW5kb3c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/WindowManager/ProcessWindow.tsx\n");

/***/ })

})