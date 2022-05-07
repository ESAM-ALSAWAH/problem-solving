/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let arr = [];
  nums.map((item) => {
    if (item % 2 === 0) arr = [item, ...arr];
    else arr = [...arr, item];
  });
  return arr
};