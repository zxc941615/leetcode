/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let answer = 0;
  let strArray = s.split("");
  for (let x = 0; x < strArray.length; x++) {
    answer += symbol[strArray[x]];
    if (
      strArray[x - 1] !== undefined &&
      symbol[strArray[x]] > symbol[strArray[x - 1]]
    ) {
      console.log(answer);
      answer -= 2 * symbol[strArray[x - 1]];
    }
  }
  return answer;
};
