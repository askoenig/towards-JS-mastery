function countVowels(str) {
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      counter++;
    }
  }
  return counter;
}

// refactor

function countVowels(str) {
  return str.match(/[aeiou]/g).length;
}
