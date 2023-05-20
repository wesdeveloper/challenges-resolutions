import { digitize } from "./convert-number-to-reversed-array-of-digits";
import chai, { assert } from "chai";
chai.config.truncateThreshold = 0;

describe("digitize", function() {
  it("Sample test", function() {
    assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    assert.deepEqual(digitize(0),[0]);
  });
});
