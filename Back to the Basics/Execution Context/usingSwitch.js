// Create a function gradeCalculator which takes a grade (number) and returns its letter grade.

function gradeCalculator(grade) {
  //your code goes here...
  switch (true) {
    case grade >= 90:
      return "A";
      break;
    case grade >= 80:
      return "B";
      break;
    case grade >= 70:
      return "C";
      break;
    case grade >= 60:
      return "D";
      break;
    case grade <= 59:
      return "F";
      break;
  }
}

//Uncomment the lines below to test your code

console.log(gradeCalculator(92)); //=> "A"
console.log(gradeCalculator(84)); //=> "B"
console.log(gradeCalculator(70)); //=> "C"
console.log(gradeCalculator(61)); //=> "D"
console.log(gradeCalculator(43)); //=> "F"
