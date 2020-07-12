"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _prismjs = _interopRequireDefault(require("prismjs"));

require("prismjs/components/prism-markdown.js");

var _hotkeys = _interopRequireDefault(require("./hotkeys"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TextArea = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(TextArea, _Component);

  var _super = _createSuper(TextArea);

  function TextArea(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TextArea);
    _this = _super.call(this, props);
    _this.preElm = _react.default.createRef();
    _this.warp = _react.default.createRef();
    _this.text = _react.default.createRef();
    _this.state = {
      value: props.value
    };
    return _this;
  }

  (0, _createClass2.default)(TextArea, [{
    key: "handleChange",
    value: function handleChange(e) {
      var _this2 = this;

      var onChange = this.props.onChange;
      this.setState({
        value: e.target.value
      }, function () {
        onChange && onChange(_this2.state.value);

        _this2.highlight();
      });
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.highlight();

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this3 = this;

      if (nextProps.value !== this.props.value) {
        this.setState({
          value: nextProps.value
        }, function () {
          _this3.highlight();
        });
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.value !== this.props.value || nextState.value !== this.state.value;
    }
  }, {
    key: "highlight",
    value: function () {
      var _highlight = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var value, pre, html;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                value = this.state.value;
                pre = this.preElm.current;
                html = _prismjs.default.highlight(value, _prismjs.default.languages.markdown, 'markdown');
                pre.innerHTML = "".concat(html, "<br />");

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function highlight() {
        return _highlight.apply(this, arguments);
      }

      return highlight;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          onChange = _this$props.onChange,
          onScroll = _this$props.onScroll,
          tabSize = _this$props.tabSize,
          style = _this$props.style,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["prefixCls", "className", "onChange", "onScroll", "tabSize", "style"]);
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: this.warp,
        className: (0, _classnames.default)("".concat(prefixCls, "-aree"), className),
        onScroll: onScroll
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)("".concat(prefixCls, "-text"))
      }, /*#__PURE__*/_react.default.createElement("pre", {
        ref: this.preElm,
        className: (0, _classnames.default)("".concat(prefixCls, "-text-pre"), 'wmde-markdown-color')
      }), /*#__PURE__*/_react.default.createElement("textarea", (0, _extends2.default)({}, otherProps, {
        ref: this.text,
        onKeyDown: _hotkeys.default.bind(this, {
          tabSize: tabSize
        }),
        className: "".concat(prefixCls, "-text-input"),
        value: this.state.value,
        onChange: this.handleChange.bind(this)
      }))));
    }
  }]);
  return TextArea;
}(_react.Component);

exports.default = TextArea;
TextArea.defaultProps = {
  tabSize: 2,
  autoFocus: true,
  spellCheck: false
};
TextArea.state = void 0;
module.exports = exports.default; 
//# sourceMappingURL=index.js.map