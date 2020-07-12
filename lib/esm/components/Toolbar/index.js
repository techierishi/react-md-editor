import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import classnames from 'classnames';
import "./index.css";

var Toolbar = /*#__PURE__*/function (_Component) {
  _inherits(Toolbar, _Component);

  var _super = _createSuper(Toolbar);

  function Toolbar() {
    var _this;

    _classCallCheck(this, Toolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleClick = function (command) {
      var onCommand = _this.props.onCommand;
      onCommand && onCommand(command);
    };

    return _this;
  }

  _createClass(Toolbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          commands = _this$props.commands,
          active = _this$props.active;
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-toolbar")
      }, /*#__PURE__*/React.createElement("ul", null, commands.map(function (item, idx) {
        if (item.keyCommand === 'divider') {
          return /*#__PURE__*/React.createElement("li", _extends({
            key: idx
          }, item.liProps, {
            className: "".concat(prefixCls, "-toolbar-divider")
          }));
        }

        var activeBtn = active && (item.value ? active[item.keyCommand] && active[item.keyCommand] === item.value : active[item.keyCommand]);
        return /*#__PURE__*/React.createElement("li", _extends({
          key: idx
        }, item.liProps, {
          className: classnames({
            active: activeBtn
          })
        }), !item.buttonProps && item.icon, item.buttonProps && React.createElement('button', _objectSpread({
          type: 'button',
          disabled: active && active.preview && active.preview === 'preview' && !/(preview|fullscreen)/.test(item.keyCommand),
          "data-name": item.name
        }, item.buttonProps, {
          onClick: _this2.handleClick.bind(_this2, item)
        }), item.icon));
      })));
    }
  }]);

  return Toolbar;
}(Component);

Toolbar.defaultProps = {
  commands: []
};
export { Toolbar as default }; 
//# sourceMappingURL=index.js.map