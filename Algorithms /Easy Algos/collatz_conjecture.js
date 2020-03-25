// The Collatz Conjecture or 3x+1 problem can be summarized as follows:

// Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

// Given a number n, return the number of steps required to reach 1.

// FIRST PASS:

export const steps = (n, count = 0) => {
  let counter = count;
  console.log(n, counter);
  if (n <= 0) {
    throw "Only positive numbers are allowed";
  } else if (n % 2 === 0) {
    let x = n / 2;
    counter++;
    return steps(x, counter);
  } else if (n % 3 === 0 || n % 5 === 0) {
    let x = n * 3 + 1;
    counter++;
    return steps(x, counter);
  } else {
    return counter;
  }
};

// above solution failed because high value args blow out the call stack
// SECOND PASS:

export const steps = (n, count = 0) => {
  let counter = count;
  console.log(n, counter);
  if (n <= 0) {
    throw "Only positive numbers are allowed";
  } else if (n > 10000) {
    for (let i = 0; i < n; i++) {
      if (n % 2 === 0) {
        n = n / 2;
        counter++;
      } else if (n % 3 === 0 || n % 5 === 0) {
        n = n * 3 + 1;
        counter++;
      }
    }
    return counter;
  } else if (n % 2 === 0) {
    let x = n / 2;
    counter++;
    return steps(x, counter);
  } else if (n % 3 === 0 || n % 5 === 0) {
    let x = n * 3 + 1;
    counter++;
    return steps(x, counter);
  } else {
    return counter;
  }
};

// here I tried to catch high value args to run them through a loop so as to avoid blowing out the stack via recursion. I think this acutally might have worked if my for loop syntax was better. Regardless, still far from optimal.
// THIRD PASS:

export const steps = n => {
  let counter = 0;
  if (n <= 0) {
    throw "Only positive numbers are allowed";
  } else {
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
        counter++;
      } else if (n % 3 === 0 || n % 5 === 0) {
        n = n * 3 + 1;
        counter++;
      }
    }
  }
  return counter;
};

// above I removed the recursion completely and incompetently tried to incorporate a while loop
// FINAL PASS:

export const steps = n => {
  if (n < 1) {
    throw "Only positive numbers are allowed";
  }
  let counter = 0;
  while (n !== 1) {
    n % 2 === 0 ? (n = n / 2) : (n = n * 3 + 1);
    counter++;
  }
  return counter;
};

//proper while loop and I believe minimal possible readable code
