import getSurroundingWord from './getSurroundingWord';
export function selectWord(_ref) {
  var text = _ref.text,
      selection = _ref.selection;

  if (text && text.length && selection.start === selection.end) {
    // the user is pointing to a word
    return getSurroundingWord(text, selection.start);
  }

  return selection;
}
/**
 *  Gets the number of line-breaks that would have to be inserted before the given 'startPosition'
 *  to make sure there's an empty line between 'startPosition' and the previous text
 */

export function getBreaksNeededForEmptyLineBefore() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var startPosition = arguments.length > 1 ? arguments[1] : undefined;
  if (startPosition === 0) return 0; // rules:
  // - If we're in the first line, no breaks are needed
  // - Otherwise there must be 2 breaks before the previous character. Depending on how many breaks exist already, we
  //      may need to insert 0, 1 or 2 breaks

  var neededBreaks = 2;
  var isInFirstLine = true;

  for (var i = startPosition - 1; i >= 0 && neededBreaks >= 0; i--) {
    switch (text.charCodeAt(i)) {
      case 32:
        // blank space
        continue;

      case 10:
        // line break
        neededBreaks--;
        isInFirstLine = false;
        break;

      default:
        return neededBreaks;
    }
  }

  return isInFirstLine ? 0 : neededBreaks;
}
/**
 *  Gets the number of line-breaks that would have to be inserted after the given 'startPosition'
 *  to make sure there's an empty line between 'startPosition' and the next text
 */

export function getBreaksNeededForEmptyLineAfter() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var startPosition = arguments.length > 1 ? arguments[1] : undefined;
  if (startPosition === text.length - 1) return 0; // rules:
  // - If we're in the first line, no breaks are needed
  // - Otherwise there must be 2 breaks before the previous character. Depending on how many breaks exist already, we
  //      may need to insert 0, 1 or 2 breaks

  var neededBreaks = 2;
  var isInLastLine = true;

  for (var i = startPosition; i < text.length && neededBreaks >= 0; i++) {
    switch (text.charCodeAt(i)) {
      case 32:
        continue;

      case 10:
        {
          neededBreaks--;
          isInLastLine = false;
          break;
        }

      default:
        return neededBreaks;
    }
  }

  return isInLastLine ? 0 : neededBreaks;
} 
//# sourceMappingURL=markdownUtils.js.map