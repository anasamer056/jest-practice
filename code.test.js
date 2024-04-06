import { capitalize } from "./code.js";

describe("Main functions", () => {
  test("Capitalize", () => {
    const data = [
      {
        input: "word",
        output: "Word",
      },
      {
        input: "two words",
        output: "Two words",
      },
      {
        input: "Already capital",
        output: "Already capital",
      },
      {
        input: "ALL CAPS",
        output: "ALL CAPS",
      },
      {
        input: "Title Case",
        output: "Title Case",
      },
    ];
    data.forEach((item) => {
      expect(capitalize(item.input)).toEqual(item.output);
    });
  });
});
