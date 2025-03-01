// 1- Capitalize 

export function capitalize(string) {
  // check if an array was provided
  if (string === undefined || string.length === 0) {
    throw new Error("You must provide a string or a character");
  }
  // check if the first character is allready capitalized
  if (string[0] === string[0].toUpperCase()) {
    return string;
  }
  // check the rest of the cases.
  return string[0].toUpperCase() + string.substring(1);
}

// 2- Reverse a string

export function reverseString(string) {

  if (string === undefined || string.length === 0) {
    throw new Error("You must provide a string or a character");
  }

  // let invertedString = "";

  // for (let i = string.length - 1; i >= 0; i--) {
  //   invertedString += string[i];
  // }
  // return invertedString;
  return string.split('').reverse().join('');
}

// 3- Calculator

export const calculator = {
  add: function(a, b) {
    if (a === undefined || b === undefined) {
      throw new Error("Both parameters are required");
    }
    return a + b;
  },
  subtract: function(a, b) {
    if (a === undefined || b === undefined) {
      throw new Error("Both parameters are required");
    }
    return a - b;
  },
  multiply: function(a, b) {
    if (a === undefined || b === undefined) {
      throw new Error("Both parameters are required");
    }
    return a * b;
  },
  divide: function(a, b) {
    if (a === undefined || b === undefined) {
      throw new Error("Both parameters are required");
    }
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

// 4- Caesar Cipher

export function caesarCipher(string, shiftFactor) {
  
  if (string === undefined || shiftFactor === undefined) { // Check if the parameters are valid
    throw new Error("Both parameters are required")
  }

  shiftFactor = shiftFactor % 26; // ShiftFactor normalized
  if (shiftFactor < 0) {
    shiftFactor += 26;
  }

  let stringShifted = ""; // Final result

  for (let i = 0; i < string.length; i++) { // Loop every character of the string
    const asciiCode = string.charCodeAt(i);

    if (asciiCode >= 97 && asciiCode <= 122) { // Lowercase condition
      let newCode = asciiCode + shiftFactor; // Apply the shiftFactor

      if (newCode > 122) { // Wrap-around managment fron 'z'to 'a'
        newCode -= 26;
      }else if (newCode < 97) {
        newCode += 26;
      }
      stringShifted += String.fromCharCode(newCode);
    }else if (asciiCode >= 65 && asciiCode <= 90) { // Uppercase condition
      let newCode = asciiCode + shiftFactor;

      if (newCode > 90) {
        newCode -= 26;
      }else if (newCode < 65) {
        newCode += 26;
      }
      stringShifted += String.fromCharCode(newCode);
    }else { // Other characters
      stringShifted += string[i];
    }
  }
  return stringShifted;
}

// 5- Analyze an Array

export function analyzeArray(array) {
  if (array === undefined) {
    throw new Error('Can not analize an empty array');
  }

  let average = array.reduce((acumulator, value) => acumulator + value, 0);
  
  let min = Math.min(...array);
  let max = Math.max(...array);

  // for (let i = 1; i < array.length; i++) {
  //   if (array[i] < min) {
  //     min = array[i];
  //   }
  //   if (array[i] > max) {
  //     max = array[i];
  //   }
  // }
  
  const length = array.length;
  
  const objectArray = {
    average: average / array.length,
    min: min,
    max: max,
    length: length
  };
  
  return objectArray;
}