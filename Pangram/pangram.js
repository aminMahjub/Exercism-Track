export const isPangram = (string) => {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let lowerString = string.toLowerCase();
  if (lowerString === "") {
    return false;
  }
  var alphabetLentgh = alphabet.length;
  for (let i = 0; i < alphabetLentgh; i++) {
    if (lowerString.includes(alphabet[i]) === false)
     return false
  }
  return true
  };