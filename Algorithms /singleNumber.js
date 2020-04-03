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

// refactored:

var singleNumber = function(nums) {
  const store = {};
  for (let i = 0; i < nums.length; i++) {
    if (store[nums[i]] === undefined) store[nums[i]] = 1;
    else store[nums[i]] = store[nums[i]] + 1;
  }
  for (let key in store) {
    if (store[key] === 1) return key;
  }
};
