// Write a function that converts an object into an array of keys and values.

function objectToArray(obj) {
  let newArr = [];
  for (let property in obj) {
    newArr.push([property, obj[property]]);
  }
  return newArr;
}
