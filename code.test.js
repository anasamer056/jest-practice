import { analyzeArray, capitalize, reverseString } from "./code.js";

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
        output: "drow",
      },
      {
        input: "two words",
        output: "sdrow owt",
      },
      {
        input: "ALL CAPS",
        output: "SPAC LLA",
      },
      {
        input: "  leading",
        output: "gnidael  ",
      },
    ];
    data.forEach((item) => {
      expect(reverseString(item.input)).toEqual(item.output);
    });
  });
});

describe("Analyze Array", () => {
  const data = [
    {
      input: [1, 8, 3, 4, 2, 6],
      output: {
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      },
    },
    {
      input: [0, 0, 0, 0],
      output: {
        average: 0,
        min: 0,
        max: 0,
        length: 4,
      },
    },
    {
      input: [10, -5, 20, 15, 3],
      output: {
        average: 8.6,
        min: -5,
        max: 20,
        length: 5,
      },
    },
    {
      input: [100, 200, 300],
      output: {
        average: 200,
        min: 100,
        max: 300,
        length: 3,
      },
    },
    {
      input: [-10, -20, -30, -40, -50],
      output: {
        average: -30,
        min: -50,
        max: -10,
        length: 5,
      },
    },
    {
      input: [-10],
      output: {
        average: -10,
        min: -10,
        max: -10,
        length: 1,
      },
    },
  ];

  data.forEach((item)=>{
    test(`${item.input}`, ()=>{
      expect(analyzeArray(item.input)).toEqual(item.output);
    })
  })

  test("Should throw an error if array is empty", ()=>{
    expect(()=>{analyzeArray([])}).toThrow(Error);
  })
});
