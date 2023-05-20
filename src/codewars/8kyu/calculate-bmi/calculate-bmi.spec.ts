import { bmi } from "./calculate-bmi";
import { assert } from "chai";

describe("Kata.bmi", function () {
  it("should pass a sample test according to the specifications provided", function () {
    assert.strictEqual(bmi(80, 1.8), "Normal");
  });
});
