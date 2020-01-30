// reverse an integer

function rev(n) {
  let absolute = Math.abs(n);
  let stringifiedNum = absolute.toString();
  let reverse = stringifiedNum
    .split("")
    .reverse()
    .join("");
  return Number(reverse);
}

//refactor

function rev(n) {
  return Number(
    Math.abs(n)
      .toString()
      .split("")
      .reverse()
      .join("")
  );
}
