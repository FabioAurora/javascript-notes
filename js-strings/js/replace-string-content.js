// The replace() method replaces a specified value with another value in a string:
// Note
// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

//Example 1 :
let text = "Please visit Whales!";
let newText = text.replace("Whales", "Scotland");
console.log(text);
console.log(newText);

//Example 2: replacing case insensitive using /i flag
let text1 = 'Please visit Whales!'
let newText1 = text1.replace(/WHALES/i, 'Scotland');

// Example 3: replace all matches by using /g flag(global match)
let text2 = "Please visit Whales and Whales!";
let newtext2 = text2.replace(/whales/g, 'Scotland');