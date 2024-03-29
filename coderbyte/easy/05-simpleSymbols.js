/**
 * Have the function SimpleSymbols(str) take the str parameter being passed and
 * determine if it is an acceptable sequence by either returning the string true
 * or false. The str parameter will be composed of + and = symbols with several
 * characters between them (ie. ++d+===+c++==a) and for the string to be true
 * each letter must be surrounded by a + symbol. So the string to the left would
 * be false. The string will not be empty and will have at least one letter.
 */

function SimpleSymbols(str) {
  let result = str.split("").every(letterEval);

  return result ? true : false;
}

function letterEval(letter, index, array) {
  if (/[a-zA-Z]/.test(letter)) {
    if (index === 0 || index === array.length - 1) {
      return false;
    }

    if (array[index - 1] === "+" && array[index + 1] === "+") {
      return true;
    }
  } else {
    return true;
  }
}

// keep this function call here
SimpleSymbols("+a+"); //true
