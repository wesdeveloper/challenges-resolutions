import { factorial } from './factorial';

describe('Basic tests', () => {
  it('Testing for 0', () => expect(factorial(0)).toEqual(1));
  it('Testing for 1', () => expect(factorial(1)).toEqual(1));
  it('Testing for 4', () => expect(factorial(4)).toEqual(24));
  it('Testing for 7', () => expect(factorial(7)).toEqual(5040));
  it('Testing for 17', () => expect(factorial(17)).toEqual(355687428096000));
});
