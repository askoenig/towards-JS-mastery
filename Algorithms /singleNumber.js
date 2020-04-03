// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

var singleNumber = function(nums) {
  while (nums.length > 0) {
    let num = nums.shift();
    if (nums.includes(num)) {
      let index = nums.indexOf(num);
      nums.splice(index, 1);
    } else {
      return num;
    }
  }
};
