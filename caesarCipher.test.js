import CaesarCipher from "./caesarCipher.js";

describe("encrypt", () => {
  const data = [
    {
      input: "word",
      output: "zrug",
      shift: 3,
    },

    {
      input: "WORD",
      output: "ZRUG",
      shift: 3,
    },
    {
      input: "word",
      output: "umpb",
      shift: 50,
    },
    {
      input: "WORD",
      output: "YQTF",
      shift: -50,
    },
    {
      input: "word!",
      output: "umpb!",
      shift: 50,
    },
    {
      input: "1word",
      output: "1umpb",
      shift: 50,
    },
    {
      input: "1word!",
      output: "1yqtf!",
      shift: -50,
    },
    {
      input: "WoRd",
      output: "UmPb",
      shift: 50,
    },
    {
      input: "WoRd",
      output: "YqTf",
      shift: -50,
    },
    {
      input: "word",
      output: "tloa",
      shift: -3,
    },
    {
      input: "word",
      output: "yqtf",
      shift: -50,
    },
    {
      input: "!@#$%^&*()",
      output: "!@#$%^&*()",
      shift: -50,
    },
    {
      input: "",
      output: "",
      shift: -50,
    },
    {
        input: "word",
        output: "word",
        shift: 0,
      },
  ];
  data.forEach((item) => {
    test(`${item.input} to ${item.output} by ${item.shift}`, () => {
      expect(new CaesarCipher().encrypt(item.input, item.shift)).toEqual(
        item.output
      );
    });
  });
});

describe("decrypt", () => {
  const data = [
    {
      input: "zrug",
      output: "word",
      shift: 3,
    },
    {
      input: "ZRUG",
      output: "WORD",
      shift: 3,
    },
    {
      input: "umpb",
      output: "word",
      shift: 50,
    },
    {
      input: "UMPB",
      output: "WORD",
      shift: 50,
    },
    {
      input: "umpb!",
      output: "word!",
      shift: 50,
    },
    {
      input: "1umpb",
      output: "1word",
      shift: 50,
    },
    {
      input: "UmPb",
      output: "WoRd",
      shift: 50,
    },
    {
      input: "YQTF",
      output: "WORD",
      shift: -50,
    },

    {
      input: "1yqtf!",
      output: "1word!",
      shift: -50,
    },

    {
      input: "YqTf",
      output: "WoRd",
      shift: -50,
    },

    {
      input: "tloa",
      output: "word",
      shift: -3,
    },
    {
      input: "yqtf",
      output: "word",
      shift: -50,
    },
    {
      input: "!@#$%^&*()",
      output: "!@#$%^&*()",
      shift: -50,
    },
    {
      input: "",
      output: "",
      shift: -50,
    },
    {
        input: "word",
        output: "word",
        shift: 0,
      },
  ];
  data.forEach((item) => {
    test(`${item.input} to ${item.output} by ${item.shift}`, () => {
      expect(new CaesarCipher().decrypt(item.input, item.shift)).toEqual(
        item.output
      );
    });
  });
});
