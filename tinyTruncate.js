const tinyTruncate = (
  text = null,
  length = 0,
  wholeWords = false,
  separator = '…'
) => {
  if (!text || length < 1 || text.length <= length) return text;

  if (!wholeWords) return `${text.substring(0, length).trim()}${separator}`;

  // find first space after length
  const firstSpace = text.substring(length - 1).indexOf(' ');

  // no space found, return whole text
  if (firstSpace === -1) return text.trim();

  return `${text.substring(0, length - 1 + firstSpace).trim()}${separator}`;
};

export default tinyTruncate;
