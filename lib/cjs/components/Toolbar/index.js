"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Toolbar = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Toolbar, _Component);

  var _super = _createSuper(Toolbar);

  function Toolbar() {
    var _this;

    (0, _classCallCheck2.default)(this, Toolbar);

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

  (0, _createClass2.default)(Toolbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          commands = _this$props.commands,
          active = _this$props.active;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "-toolbar")
      }, /*#__PURE__*/_react.default.createElement("ul", null, commands.map(function (item, idx) {
        if (item.keyCommand === 'divider') {
          return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
            key: idx
          }, item.liProps, {
            className: "".concat(prefixCls, "-toolbar-divider")
          }));
        }

        var activeBtn = active && (item.value ? active[item.keyCommand] && active[item.keyCommand] === item.value : active[item.keyCommand]);
        return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
          key: idx
        }, item.liProps, {
          className: (0, _classnames.default)({
            active: activeBtn
          })
        }), !item.buttonProps && item.icon, item.buttonProps && _react.default.createElement('button', _objectSpread({
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
}(_react.Component);

exports.default = Toolbar;
Toolbar.defaultProps = {
  commands: []
};
module.exports = exports.default; 
//# sourceMappingURL=index.js.map