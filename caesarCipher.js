export default class CaesarCipher {
  encrypt(str, shift) {
    let res = "";
    for (let char of str) {
      if (/[A-Z]/.test(char)) {
        char = this.#incrementChar(char, "A".charCodeAt(0), shift);
      } else if (/[a-z]/.test(char)) {
        char = this.#incrementChar(char, "a".charCodeAt(0), shift);
      } 
      res += char;
    }
    return res;
  }


  decrypt(str, shift){
    let res = "";
    for (let char of str) {
      if (/[A-Z]/.test(char)) {
        char = this.#decrementChar(char, "Z".charCodeAt(0), shift);
      } else if (/[a-z]/.test(char)) {
        char = this.#decrementChar(char, "z".charCodeAt(0), shift);
      } 
      res += char;
    }
    return res;
  }


  #incrementChar(char, start, shift) {
    let code = char.charCodeAt(0) - start + shift;
    code %= 26;
    return String.fromCharCode(code + start);
  }
  #decrementChar(char, start, shift) {
    let code = char.charCodeAt(0) - start - shift;
    code %= 26;
    code = Math.abs(code);
    return String.fromCharCode(start - code);
  }
}

