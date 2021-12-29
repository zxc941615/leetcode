/**
 * @param {string[]} strs
 * @return {string}
 */
// number 14
var longestCommonPrefix = function (strs) {
  let min = strs[0].length;
  for (let j = 0; j < strs.length; j++) {
    if (strs[j] === "") {
      return "";
    }
    if (min > strs[j].length) {
      min = strs[j].length;
    }
  }
  let answer = "";
  for (let i = 0; i < min; i++) {
    let tempChar = strs[0][i];
    let result = i;
    for (let element of strs) {
      let compare = element.indexOf(tempChar, i);
      if (compare !== result) {
        result = -1;
        break;
      }
    }
    if (result !== -1) {
      answer += tempChar;
    } else {
      break;
    }
  }
  return answer;
};
