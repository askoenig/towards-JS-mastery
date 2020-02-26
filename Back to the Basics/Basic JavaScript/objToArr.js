// Write a function that converts an object into an array, where each element represents a key-value pair.

function toArray(obj) {
  let objArr = [];
  for (const property in obj) {
    objArr.push([property, obj[property]]);
  }
  return objArr;
}
