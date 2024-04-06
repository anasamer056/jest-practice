export default class CaesarCipher {
  encrypt(str, shift) {
    let res = "";
    for (let char of str) {
      res += this.#shiftChar(char, shift);
    }
    return res;
  }
  #shiftChar(char, shift) {
    if (/[A-Z]/.test(char)) {
      let code = char.charCodeAt(0) - 65 + shift;
      code %= 26;
      return String.fromCharCode(code + 65);
    } else if (/[a-z]/.test(char)) {
      let code = char.charCodeAt(0) - 97 + shift;
      code %= 26;
      return String.fromCharCode(code + 97);
    } else return char;
  }
}

// console.log()
