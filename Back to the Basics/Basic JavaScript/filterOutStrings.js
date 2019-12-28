//Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.

function filterArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") newArr.push(arr[i]);
  }
  return newArr;
}

//refactor

function filterArray(arr) {
  return arr.filter(num => typeof num === "number");
}
