import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import "./index.css";

var DragBar = /*#__PURE__*/function (_Component) {
  _inherits(DragBar, _Component);

  var _super = _createSuper(DragBar);

  function DragBar() {
    var _this;

    _classCallCheck(this, DragBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.drag = void 0;

    _this.handleMouseMove = function (event) {
      if (_this.drag) {
        var newHeight = _this.drag.height + event.clientY - _this.drag.dragY;

        if (newHeight >= _this.props.minHeight && newHeight <= _this.props.maxHeight) {
          _this.props.onChange(_this.drag.height + (event.clientY - _this.drag.dragY));
        }
      }
    };

    _this.handleMouseUp = function () {
      _this.drag = undefined;
    };

    _this.handleMouseDown = function (event) {
      _this.drag = {
        height: _this.props.height,
        dragY: event.clientY
      };
    };

    return _this;
  }

  _createClass(DragBar, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: "render",
    value: function render() {
      var prefixCls = this.props.prefixCls;
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-bar"),
        onMouseDown: this.handleMouseDown
      }, /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 512 512",
        height: "100%"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"
      })));
    }
  }]);

  return DragBar;
}(Component);

export { DragBar as default }; 
//# sourceMappingURL=index.js.map