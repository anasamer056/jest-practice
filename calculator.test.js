import Calculator from "./calculator.js";

describe("Calculator object", () => {
  test("add", () => {
    const data = [
      {
        x: 2,
        y: 3,
        output: 5,
      },
      {
        x: -2,
        y: -5,
        output: -7,
      },
      {
        x: -2,
        y: 3,
        output: 1,
      },
      {
        x: 2,
        y: -3,
        output: -1,
      },
    ];
    data.forEach((item) => {
      expect(new Calculator().add(item.x, item.y)).toBe(item.output);
    });
  });

  test("subtract", () => {
    const data = [
      {
        x: 2,
        y: 3,
        output: -1,
      },
      {
        x: -2,
        y: -5,
        output: 3,
      },
      {
        x: -2,
        y: 3,
        output: -5,
      },
      {
        x: 2,
        y: -3,
        output: 5,
      },
    ];
    data.forEach((item) => {
      expect(new Calculator().subtract(item.x, item.y)).toBe(item.output);
    });
  });

  test("divide", () => {
    const data = [
      {
        x: 2,
        y: 3,
        output: 2/3,
      },
      {
        x: -2,
        y: -5,
        output: -2/-5,
      },
      {
        x: -2,
        y: 3,
        output: -2/3,
      },
      {
        x: 2,
        y: -3,
        output: 2/-3,
      },
      {
        x: 0,
        y: 2,
        output: 0,
      },
    ];
    data.forEach((item) => {
      expect(new Calculator().divide(item.x, item.y)).toBeCloseTo(item.output);
    });

    expect(()=>{new Calculator().divide(5, 0)}).toThrow(Error);
  });

  test("multiply", () => {
    const data = [
      {
        x: 2,
        y: 3,
        output: 6,
      },
      {
        x: -2,
        y: -5,
        output: 10,
      },
      {
        x: -2,
        y: 3,
        output: -6,
      },
      {
        x: 2,
        y: -3,
        output: -6,
      },
      {
        x: 0,
        y: 2,
        output: 0,
      },
      {
        x: 2,
        y: 0,
        output: 0,
      },

    ];
    data.forEach((item) => {
      expect(new Calculator().multiply(item.x, item.y)).toBe(item.output);
    });
  });
});
