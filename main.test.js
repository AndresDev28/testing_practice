import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./main.js";

// 1. Capitalize
describe('Capitalize', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  
  test('keeps capitalize string as is', () => {
    expect(capitalize("Hello")).toBe("Hello");
  });
  
  test('capitalize one single character', () => {
    expect(capitalize("a")).toBe("A");
  });
  
  test('trow an Error message when the array is empty', () => {
    expect(() => capitalize()).toThrow(/You must/);
  });
});

// 2- Reverse a string
describe('Reverse', () => {
  test('reverse a normal string', () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  
  test('when is one character return the same one', () => {
    expect(reverseString("a")).toBe("a");
  });
  
  test('throw an Error message if there is no parameter', () => {
    expect(() => reverseString()).toThrow(Error);
  });
  
  test('reverse a string with spaces', () => {
    expect(reverseString("How are you?")).toBe("?uoy era woH");
  });
});

// 3- Calculator
describe('Calculator', () => {
  // calculator.add test
  test('add two positive numbers', () => {
    expect(calculator.add(2, 5)).toEqual(7);
  });
  test('add a positive number and negative number', () => {
    expect(calculator.add(2, -3)).toBe(-1);
  });
  test('add two negative numbers', () => {
    expect(calculator.add(-4, -3)).toEqual(-7);
  });
  test('throw an Error if one or both parameters are missing', () => {
    expect(() => calculator.add()).toThrow(Error);
  });

  // calculator.subtract test
  test('Subtract a smaller number from a larger one (positive result)', () => {
    expect(calculator.subtract(3, 2)).toEqual(1);
  });
  test('Subtract a larger number from a smaller one (negative result)', () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
  });
  test('throw an Error if one or both parameters are missing', () => {
    expect(() => calculator.subtract()).toThrow(Error);
  });

  // calculator.multiply test
  test('multiply two posive numbers', () => {
    expect(calculator.multiply(3, 5)).toEqual(15);
  });
  test('multiply a positive number with negative', () => {
    expect(calculator.multiply(-3, 5)).toEqual(-15);
  });
  test('multiply two negative numbers', () => {
    expect(calculator.multiply(-3, -5)).toEqual(15);
  });
  test('multiply by zero', () => {
    expect(calculator.multiply(3, 0)).toEqual(0);
  });
  test('throw an Error if one or both parameters are missing', () => {
    expect(() => calculator.multiply()).toThrow(Error);
  });

  // calculator.divide test
  test('divide two numbers', () => {
    expect(calculator.divide(4, 2)).toEqual(2);
  });
  test('throws an error if divided by zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow(Error);
  });
  test('divide zero by other number', () => {
    expect(calculator.divide(0, 6)).toEqual(0);
  });
  test('throw an Error if one or both parameters are missing', () => {
    expect(() => calculator.divide()).toThrow(Error);
  });
});

// 4- CaesarCipher
describe('caesarCipher', () => {
  test('shift lowercase letters', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
  });

  test('shift uppercase letters', () => {
    expect(caesarCipher("ABC", 3)).toBe("DEF");
  });

  test('preserve uppercase and lowercase', () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test('handles punctuation and spaces', () => {
    expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!");
  });

  test('handles negative shift factors', () => {
    expect(caesarCipher('def', -3)).toBe('abc');
  });

  test('handles large shift factors', () => {
    expect(caesarCipher('abc', 27)).toBe('bcd'); // 27 % 26 = 1
  });
  
  test('handles zero shift factor', () => {
    expect(caesarCipher('abc', 0)).toBe('abc');
  });
  
  test('handles large negative shift factors', () => {
    expect(caesarCipher('def', -29)).toBe('abc'); // -29 % 26 = -3, then -3 + 26 = 23
  });
});

// 5- analyzeArray
describe('analyzeArray', () => {
  test('throw an error when is an empty array', () => {
    expect(() => analyzeArray()).toThrow(Error);
  });

  test('returns the correct object for agiven array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });

  test('array with a single element', () => {
    expect(analyzeArray([2])).toEqual({
      average: 2,
      min: 2,
      max: 2,
      length: 1
    });
  });

  test('return the correct object of array with positive a negative numbers', () => {
    const result = analyzeArray([1, -8, 3, 4, 2, -6]);
    expect(result.average).toBeCloseTo(-0.67, 2); // 2 decimales de precisión
    expect(result.min).toBe(-8);
    expect(result.max).toBe(4);
    expect(result.length).toBe(6);
  });

  test('handles array with duplicates numbers', () => {
    const result = analyzeArray([1, 2, 3, 2, 1, 4]);
    expect(result.average).toBeCloseTo(2.17, 2);
    expect(result.min).toBe(1);
    expect(result.max).toBe(4);
    expect(result.length).toBe(6);
  });
});
