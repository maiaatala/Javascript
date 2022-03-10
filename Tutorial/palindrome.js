function verifyPalindrome(string) {
  if (!string) return;
  string = string.replace(/ /g, ""); //removes space from string
  return console.log(string == string.split("").reverse().join(""));
  // transforms string into array, reverses the array, transforms aray into string.
}

function verifyPalindrome2(string) {
  if (!string) return;
  string = string.replace(/ /g, ""); //removes space from string

  // you only need to verify half the string, cuz it "folds in itself"
  for (i = 0; i < string.lenght / 2; i++) {
    if (string([i]) != string[string.lenght - 1 - i]) {
      return console.log(false);
    }
  }

  return console.log(true);
}

// * strings dont have a reverse function... arrays do

let str = "roma me tem amor";
// str = "radar";

verifyPalindrome2(str);
