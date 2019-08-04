/**
 * Have the function LetterCapitalize(str) take the str parameter being passed and
 * capitalize the first letter of each word. Words will be separated by only one
 */

function LetterCapitalize(str) {
  return str.split(" ")
    .map(item => item[0].toLocaleUpperCase() + item.slice(1))
    .join(" ");
}

LetterCapitalize("hello world"); //Hello World
