// The program will take color names as input and output a two digit number, even if the input is more than two colors!

// The colors are mapped to the numbers from 0 to 9 in the sequence: Black - Brown - Red - Orange - Yellow - Green - Blue - Violet - Grey - White

export const decodedValue = colorArr =>
  Number("" + colorValues[colorArr[0]] + colorValues[colorArr[1]]);

// refactor:

export const decodedValue = ([firstColor, secondColor]) =>
  Number("" + colorValues[firstColor] + colorValues[secondColor]);

//   meaningless refactor:

export const decodedValue = ([firstColor, secondColor]) =>
  Number(`${colorValues[firstColor]}` + `${colorValues[secondColor]}`);

// final refactor:

export const decodedValue = ([firstColor, secondColor]) =>
  colorValues[firstColor] * 10 + colorValues[secondColor];

const colorValues = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};
