import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import classnames from 'classnames';
import MarkdownPreview from '@uiw/react-markdown-preview';
import TextArea from './components/TextArea';
import Toolbar from './components/Toolbar';
import DragBar from './components/DragBar';
import { getCommands, TextAreaCommandOrchestrator } from './commands';
import "./index.css";

var MDEditor = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MDEditor, _React$PureComponent);

  var _super = _createSuper(MDEditor);

  function MDEditor(props) {
    var _this;

    _classCallCheck(this, MDEditor);

    _this = _super.call(this, props);
    _this.preview = React.createRef();
    _this.textarea = React.createRef();
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

  _createClass(MDEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleChange(this.state.value);
      this.commandOrchestrator = new TextAreaCommandOrchestrator(this.textarea.current.text.current);
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
          other = _objectWithoutProperties(_this$props, ["prefixCls", "className", "value", "commands", "height", "visiableDragbar", "preview", "fullscreen", "previewOptions", "textareaProps", "maxHeight", "minHeight", "autoFocus", "tabSize", "onChange"]);

      var cls = classnames(className, prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-show-").concat(this.state.preview), this.state.preview), _defineProperty(_classnames, "".concat(prefixCls, "-fullscreen"), this.state.fullscreen), _classnames));
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls,
        style: {
          height: this.state.fullscreen ? '100%' : this.state.height
        }
      }, other), /*#__PURE__*/React.createElement(Toolbar, {
        active: {
          fullscreen: this.state.fullscreen,
          preview: this.state.preview
        },
        prefixCls: prefixCls,
        commands: commands,
        onCommand: this.handleCommand
      }), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content"),
        style: {
          height: this.state.fullscreen ? 'calc(100% - 29px)' : this.state.height - 29
        }
      }, /(edit|live)/.test(this.state.preview) && /*#__PURE__*/React.createElement(TextArea, _extends({
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
      })), /*#__PURE__*/React.createElement(MarkdownPreview, _extends({}, previewOptions, {
        ref: this.preview,
        onScroll: this.handleScroll,
        className: "".concat(prefixCls, "-preview")
      })), visiableDragbar && this.state.preview !== 'preview' && !this.state.fullscreen && /*#__PURE__*/React.createElement(DragBar, {
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
}(React.PureComponent);

MDEditor.Markdown = MarkdownPreview;
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
  commands: getCommands()
};
export { MDEditor as default }; 
//# sourceMappingURL=MDEditor.js.map