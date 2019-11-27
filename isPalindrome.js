function isPalindrome(string) {
  let toCheck = ""

  for (let i = string.length - 1; i >= 0; i--) {
    toCheck = toCheck.concat(string[i]);
  }

  return string === toCheck;
}