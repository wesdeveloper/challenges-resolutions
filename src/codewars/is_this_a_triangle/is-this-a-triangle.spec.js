const isTriangle = require('./is-this-a-triangle');

/**
Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
 * */
describe('Is this a triangle', () => {
  it('Testing for fixed tests', () => {
    expect(isTriangle(1, 2, 2)).toEqual(true);
    expect(isTriangle(7, 2, 2)).toEqual(false);
  });
});
