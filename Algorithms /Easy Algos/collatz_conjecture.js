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

//
