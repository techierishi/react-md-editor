"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactMarkdownPreview = _interopRequireDefault(require("@uiw/react-markdown-preview"));

var _TextArea = _interopRequireDefault(require("./components/TextArea"));

var _Toolbar = _interopRequireDefault(require("./components/Toolbar"));

var _DragBar = _interopRequireDefault(require("./components/DragBar"));

var _commands = require("./commands");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MDEditor = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(MDEditor, _React$PureComponent);

  var _super = _createSuper(MDEditor);

  function MDEditor(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MDEditor);
    _this = _super.call(this, props);
    _this.preview = _react.default.createRef();
    _this.textarea = _react.default.createRef();
    _this.commandOrchestrator = void 0;
    _this.leftScroll = false;

    _this.handleScroll = function (e) {
      var preview = _this.preview.current.mdp.current;
      var textarea = _this.textarea.current.warp.current;

      if (textarea && preview) {
        var scale = (textarea.scrollHeight - textarea.offsetHeight) / (preview.scrollHeight - preview.offsetHeight);

        if (e.target === textarea && _this.leftScroll) {
          preview.scrollTop = textarea.scrollTop / scale;
        }

        if (e.target === preview && !_this.leftScroll) {
          textarea.scrollTop = preview.scrollTop * scale;
        }
      }
    };

    _this.handleCommand = function (command) {
      if (command.keyCommand === 'preview') {
        _this.setState({
          preview: command.value
        });
      }

      if (command.keyCommand === 'fullscreen') {
        _this.setState({
          fullscreen: !_this.state.fullscreen
        });

        document.body.style.overflow = _this.state.fullscreen ? 'initial' : 'hidden';
      }

      _this.commandOrchestrator.executeCommand(command);
    };

    _this.state = {
      height: props.height,
      preview: props.preview,
      fullscreen: props.fullscreen,
      value: props.value
    };
    return _this;
  }

  (0, _createClass2.default)(MDEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleChange(this.state.value);
      this.commandOrchestrator = new _commands.TextAreaCommandOrchestrator(this.textarea.current.text.current);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.preview !== this.props.preview) {
        this.setState({
          preview: nextProps.preview
        });
      }

      if (nextProps.fullscreen !== this.props.fullscreen) {
        this.setState({
          fullscreen: nextProps.fullscreen
        });
      }

      if (nextProps.value !== this.props.value) {
        this.setState({
          value: nextProps.value
        }, function () {
          _this2.handleChange(nextProps.value);
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(mdStr) {
      var onChange = this.props.onChange;
      this.preview.current.renderHTML(mdStr);
      onChange && onChange(mdStr || '');
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this3 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          value = _this$props.value,
          commands = _this$props.commands,
          height = _this$props.height,
          visiableDragbar = _this$props.visiableDragbar,
          preview = _this$props.preview,
          fullscreen = _this$props.fullscreen,
          previewOptions = _this$props.previewOptions,
          textareaProps = _this$props.textareaProps,
          maxHeight = _this$props.maxHeight,
          minHeight = _this$props.minHeight,
          autoFocus = _this$props.autoFocus,
          tabSize = _this$props.tabSize,
          onChange = _this$props.onChange,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["prefixCls", "className", "value", "commands", "height", "visiableDragbar", "preview", "fullscreen", "previewOptions", "textareaProps", "maxHeight", "minHeight", "autoFocus", "tabSize", "onChange"]);
      var cls = (0, _classnames2.default)(className, prefixCls, (_classnames = {}, (0, _defineProperty2.default)(_classnames, "".concat(prefixCls, "-show-").concat(this.state.preview), this.state.preview), (0, _defineProperty2.default)(_classnames, "".concat(prefixCls, "-fullscreen"), this.state.fullscreen), _classnames));
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        className: cls,
        style: {
          height: this.state.fullscreen ? '100%' : this.state.height
        }
      }, other), /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
        active: {
          fullscreen: this.state.fullscreen,
          preview: this.state.preview
        },
        prefixCls: prefixCls,
        commands: commands,
        onCommand: this.handleCommand
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "-content"),
        style: {
          height: this.state.fullscreen ? 'calc(100% - 29px)' : this.state.height - 29
        }
      }, /(edit|live)/.test(this.state.preview) && /*#__PURE__*/_react.default.createElement(_TextArea.default, (0, _extends2.default)({
        ref: this.textarea,
        tabSize: tabSize,
        className: "".concat(prefixCls, "-input"),
        prefixCls: prefixCls,
        value: this.state.value,
        autoFocus: autoFocus
      }, textareaProps, {
        onScroll: this.handleScroll,
        onMouseOver: function onMouseOver() {
          return _this3.leftScroll = true;
        },
        onMouseLeave: function onMouseLeave() {
          return _this3.leftScroll = false;
        },
        onChange: this.handleChange.bind(this)
      })), /*#__PURE__*/_react.default.createElement(_reactMarkdownPreview.default, (0, _extends2.default)({}, previewOptions, {
        ref: this.preview,
        onScroll: this.handleScroll,
        className: "".concat(prefixCls, "-preview")
      })), visiableDragbar && this.state.preview !== 'preview' && !this.state.fullscreen && /*#__PURE__*/_react.default.createElement(_DragBar.default, {
        prefixCls: prefixCls,
        height: this.state.height,
        maxHeight: maxHeight,
        minHeight: minHeight,
        onChange: function onChange(newHeight) {
          _this3.setState({
            height: newHeight
          });
        }
      })));
    }
  }]);
  return MDEditor;
}(_react.default.PureComponent);

exports.default = MDEditor;
MDEditor.Markdown = _reactMarkdownPreview.default;
MDEditor.displayName = 'MDEditor';
MDEditor.defaultProps = {
  value: '',
  prefixCls: 'w-md-editor',
  height: 200,
  minHeight: 100,
  maxHeight: 1200,
  tabSize: 2,
  visiableDragbar: true,
  preview: 'live',
  fullscreen: false,
  commands: (0, _commands.getCommands)()
};
module.exports = exports.default; 
//# sourceMappingURL=MDEditor.js.map