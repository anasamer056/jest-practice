import { capitalize, reverseString} from "./code.js";

describe("Main functions", () => {
  test("capitalize", () => {
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

  test("reverseString", () => {
    const data = [
      {
        input: "word",
        output: "drow"
      },
      {
        input: "two words",
        output: "sdrow owt"
      },
      {
        input: "ALL CAPS",
        output: "SPAC LLA"
      },
      {
        input: "  leading",
        output: "gnidael  "
      }
    ]
    data.forEach((item)=>{
      expect(reverseString(item.input)).toEqual(item.output);
    })
  });
});
