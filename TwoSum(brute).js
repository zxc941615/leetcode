/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var x, y;
  for (x = 0; x < nums.length; x++) {
    // console.log(x);
    for (y = x + 1; y < nums.length; y++) {
      // console.log(y);
      if (nums[x] + nums[y] == target) {
        return [x, y];
      }
    }
  }
  return [];
};
