import {findAverage} from "./calculate-averege";
import {assert} from "chai";

describe("findAverage", () => {
  it('should calculate avg of given numbers',() => {
    assert.strictEqual(findAverage([1,1,1]), 1);
  });
});
