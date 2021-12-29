/**
 * @param {number} x
 * @return {boolean}
 */
// number 9
var isPalindrome = function (x) {
  Text = x.toString();
  reverseText = Text.split("").reverse().join("");
  return Text == reverseText ? true : false;
};
