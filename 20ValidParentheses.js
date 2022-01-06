/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i of s) {
    if (map[i]) {
      stack.push(map[i]);
    } else if (stack.pop() !== i) {
      return false;
    }
  }
  return !stack.length;
};
