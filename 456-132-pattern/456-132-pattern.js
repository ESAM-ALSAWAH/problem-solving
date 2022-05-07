/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
 if (nums === null || nums.length === 0) {
        return false;
    }
    let n = nums.length;
    let left = new Array(n).fill(null), min = Infinity;
    let right = new Array(n).fill(null);
    // fill left[]
    for (let i = 0; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
        if (nums[i] > min) {
            left[i] = min;
        }
    }
    // fill right[]
    let stack = [];
    for (let i = n-1; i >= 0; i--) {
        let elem = null;
        // we keep a decreasing stack
        // this means that this while loop allows us to go through all numbers less than
        // current number on the right and hence we can get the maximum less number
        while (stack.length > 0 && nums[i] > stack[stack.length-1]) {
            if (!elem) elem = stack.pop();
            else elem = Math.max(elem, stack.pop());
        }
        right[i] = elem;
        stack.push(nums[i]);
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (left[i] !== null && right[i] !== null && left[i] < right[i]) {
            return true;
        }
    }
    return false;
};