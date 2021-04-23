const multiply = require('./multiply');

describe('Multiply', () => {
  it('fixed tests', () => {
    expect(multiply(1, 1)).toEqual(1);
    expect(multiply(2, 1)).toEqual(2);
    expect(multiply(2, 2)).toEqual(4);
    expect(multiply(3, 5)).toEqual(15);
  });

  it('random tests', () => {
    for (let i = 0; i < 100; i += 1) {
      const [a, b] = [Math.floor(Math.random() * 50), Math.floor(Math.random() * 50)];
      expect(multiply(a, b)).toEqual(a * b);
    }
  });
});
