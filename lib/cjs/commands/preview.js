"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.codeLive = exports.codeEdit = exports.codePreview = void 0;

var React = _interopRequireWildcard(require("react"));

var codePreview = {
  name: 'preview',
  keyCommand: 'preview',
  value: 'preview',
  buttonProps: {
    'aria-label': 'Preview code'
  },
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 520 520"
  }, /*#__PURE__*/React.createElement("polygon", {
    fill: "currentColor",
    points: "0 71.293 0 122 38.023 123 38.023 398 0 397 0 449.707 91.023 450.413 91.023 72.293"
  }), /*#__PURE__*/React.createElement("polygon", {
    fill: "currentColor",
    points: "148.023 72.293 520 71.293 520 122 200.023 124 200.023 397 520 396 520 449.707 148.023 450.413"
  })),
  execute: function execute() {}
};
exports.codePreview = codePreview;
var codeEdit = {
  name: 'edit',
  keyCommand: 'preview',
  value: 'edit',
  buttonProps: {
    'aria-label': 'Edit code'
  },
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 520 520"
  }, /*#__PURE__*/React.createElement("polygon", {
    fill: "currentColor",
    points: "0 71.293 0 122 319 122 319 397 0 397 0 449.707 372 449.413 372 71.293"
  }), /*#__PURE__*/React.createElement("polygon", {
    fill: "currentColor",
    points: "429 71.293 520 71.293 520 122 481 123 481 396 520 396 520 449.707 429 449.413"
  })),
  execute: function execute() {}
};
exports.codeEdit = codeEdit;
var codeLive = {
  name: 'live',
  keyCommand: 'preview',
  value: 'live',
  buttonProps: {
    'aria-label': 'Live code'
  },
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 520 520"
  }, /*#__PURE__*/React.createElement("polygon", {
    fill: "currentColor",
    points: "0 71.293 0 122 179 122 179 397 0 397 0 449.707 232 449.413 232 71.293"
  }), /*#__PURE__*/React.createElement("polygon", {
    fill: "currentColor",
    points: "289 71.293 520 71.293 520 122 341 123 341 396 520 396 520 449.707 289 449.413"
  })),
  execute: function execute() {}
};
exports.codeLive = codeLive; 
//# sourceMappingURL=preview.js.map