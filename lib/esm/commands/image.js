import * as React from 'react';
import { selectWord } from '../utils/markdownUtils';
export var image = {
  name: 'image',
  keyCommand: 'image',
  buttonProps: {
    'aria-label': 'Add image'
  },
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"
  })),
  execute: function execute(state, api) {
    // Select everything
    var newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection
    });
    var state1 = api.setSelectionRange(newSelectionRange); // Replaces the current selection with the image

    var imageTemplate = state1.selectedText || "https://example.com/your-image.png";
    api.replaceSelection("![](".concat(imageTemplate, ")")); // Adjust the selection to not contain the **

    api.setSelectionRange({
      start: 4 + state1.selection.start,
      end: 4 + state1.selection.start + imageTemplate.length
    });
  }
}; 
//# sourceMappingURL=image.js.map