import CaesarCipher from "./caesarCipher.js";

describe("caesarCipher", ()=>{
    test("encrypt", ()=>{
      const data = [
        {
          input: "word",
          output: "zrug",
          shift: 3
        },
        {
          input: "WORD",
          output: "ZRUG",
          shift: 3
        },
        {
          input: "word",
          output: "umpb",
          shift: 50
        },
        {
          input: "WORD",
          output: "UMPB",
          shift: 50
        },
        {
          input: "word!",
          output: "umpb!",
          shift: 50
        },
        {
          input: "1word",
          output: "1umpb",
          shift: 50
        },
      ]; 
      data.forEach((item)=>{
        expect(new CaesarCipher().encrypt(item.input, item.shift)).toEqual(item.output);
      })
    })
  })
  