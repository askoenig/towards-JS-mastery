// The program will take color names as input and output a two digit number, even if the input is more than two colors!

// The colors are mapped to the numbers from 0 to 9 in the sequence: Black - Brown - Red - Orange - Yellow - Green - Blue - Violet - Grey - White

export const decodedValue = ([firstColor, secondColor]) =>
  Number("" + colorValues[firstColor] + colorValues[secondColor]);
