import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import classnames from 'classnames';
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown.js';
import hotkeys from './hotkeys';
import "./index.css";

var TextArea = /*#__PURE__*/function (_Component) {
  _inherits(TextArea, _Component);

  var _super = _createSuper(TextArea);

  function TextArea(props) {
    var _this;

    _classCallCheck(this, TextArea);

    _this = _super.call(this, props);
    _this.preElm = React.createRef();
    _this.warp = React.createRef();
    _this.text = React.createRef();
    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(TextArea, [{
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
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
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
      var _highlight = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var value, pre, html;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                value = this.state.value;
                pre = this.preElm.current;
                html = Prism.highlight(value, Prism.languages.markdown, 'markdown');
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
          otherProps = _objectWithoutProperties(_this$props, ["prefixCls", "className", "onChange", "onScroll", "tabSize", "style"]);

      return /*#__PURE__*/React.createElement("div", {
        ref: this.warp,
        className: classnames("".concat(prefixCls, "-aree"), className),
        onScroll: onScroll
      }, /*#__PURE__*/React.createElement("div", {
        className: classnames("".concat(prefixCls, "-text"))
      }, /*#__PURE__*/React.createElement("pre", {
        ref: this.preElm,
        className: classnames("".concat(prefixCls, "-text-pre"), 'wmde-markdown-color')
      }), /*#__PURE__*/React.createElement("textarea", _extends({}, otherProps, {
        ref: this.text,
        onKeyDown: hotkeys.bind(this, {
          tabSize: tabSize
        }),
        className: "".concat(prefixCls, "-text-input"),
        value: this.state.value,
        onChange: this.handleChange.bind(this)
      }))));
    }
  }]);

  return TextArea;
}(Component);

TextArea.defaultProps = {
  tabSize: 2,
  autoFocus: true,
  spellCheck: false
};
TextArea.state = void 0;
export { TextArea as default }; 
//# sourceMappingURL=index.js.map