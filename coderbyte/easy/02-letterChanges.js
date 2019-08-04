/**
 * Have the function LetterChanges(str) take the str parameter being passed and
 * modify it using the following algorithm. Replace every letter in the string
 * with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 * Then capitalize every vowel in this new string (a, e, i, o, u) and finally
 * return this modified string.
 *  */

function LetterChanges(str) { 
  str = str.trim().toLowerCase();

  return str.split('').map(changeAlphabet).join(""); 
}
 
function changeAlphabet(letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  const indexOf = alphabet.indexOf(letter);
  
  let newLetter = indexOf != -1 ? alphabet[indexOf + 1] : letter;
  
  if(isVowel(newLetter)){
    newLetter += newLetter.toUpperCase();
  }
    
  return newLetter;
}

function isVowel(str){
  return ['a', 'e', 'i', 'o', 'u'].indexOf(str) != -1;
}

// keep this function call here 
LetterChanges(readline());