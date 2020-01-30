// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps

function largestSwap(num) {
  let reversedNum = Number(
    Array.from(num.toString())
      .reverse()
      .join("")
  );
  console.log(num, reversedNum);
  return reversedNum === num || reversedNum < num ? true : false;
}

//refactor that I don't understand

function largestSwap(num) {
  return num / 10 > num % 10;
}
