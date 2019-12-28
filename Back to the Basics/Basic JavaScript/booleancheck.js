// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
  let arr1min = Math.min(...arr1);
  let arr1max = Math.max(...arr1);
  let arr2min = Math.min(...arr2);
  let arr2max = Math.max(...arr2);
  console.log(arr1min, arr1max, arr2min, arr2max);
  if (arr1min > arr2min && arr1max < arr2max) return true;
  else return false;
}
//Refactor:

function canNest(arr1, arr2) {
  return (
    Math.min(...arr1) > Math.min(...arr2) && Math.max(arr1) < Math.max(arr2)
  );
}
