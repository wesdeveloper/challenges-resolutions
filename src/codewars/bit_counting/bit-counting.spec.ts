import { countBits } from './bit-counting';

/**
 * Description:
 * Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */
describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(countBits(0)).toEqual(0);
    expect(countBits(4)).toEqual(1);
    expect(countBits(7)).toEqual(3);
    expect(countBits(9)).toEqual(2);
    expect(countBits(10)).toEqual(2);
    expect(countBits(26)).toEqual(3);
    expect(countBits(77231418)).toEqual(14);
    expect(countBits(12525589)).toEqual(11);
    expect(countBits(3811)).toEqual(8);
    expect(countBits(392902058)).toEqual(17);
    expect(countBits(1044)).toEqual(3);
    expect(countBits(10030245)).toEqual(10);
    expect(countBits(183337941)).toEqual(16);
    expect(countBits(20478766)).toEqual(14);
    expect(countBits(103021)).toEqual(9);
    expect(countBits(287)).toEqual(6);
    expect(countBits(115370965)).toEqual(15);
    expect(countBits(31)).toEqual(5);
    expect(countBits(417862)).toEqual(7);
    expect(countBits(626031)).toEqual(12);
    expect(countBits(89)).toEqual(4);
    expect(countBits(674259)).toEqual(10);
  });
});

describe('Random tests', () => {
  function randint(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < 100; i += 1) {
    const num = randint(0, 10 ** randint(1, 10));
    const expected = [...num.toString(2)].reduce((a, b) => a + +b, 0);
    it(`countBits(${num}) should equal ${expected}`, () => {
      expect(countBits(num)).toEqual(expected);
    });
  }
});
