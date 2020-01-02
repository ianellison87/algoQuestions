function caesarCipherEncryptor(string, key) {
  let alpha = "abcdefghijklmnopqrstuvwxyz"
  let newString = ""

  for (let i = 0; i < string.length; i++) {
    let origionalIndex = alpha.indexOf(string[i]);
    console.log(alpha.indexOf(string[i]))
    let newIndex = (origionalIndex + key)%26
    // console.log(newIndex)
    // console.log(alpha[newIndex])
    newString = newString.concat(alpha[newIndex])
  }

  return newString
}

console.log(caesarCipherEncryptor("xyz", 2));