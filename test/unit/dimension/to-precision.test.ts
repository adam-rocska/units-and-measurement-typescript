import {Conversions} from "!src/dimension/conversion";
import {measurement} from "!src/dimension/measurement";
import {toPrecision} from "!src/dimension/to-precision";

describe("toPrecision", () => {
  const conversions: Conversions<"m" | "cm" | "in"> = {
    m: [v => v, v => v],
    cm: [v => v / 100, v => v * 100],
    in: [v => v / 39.37, v => v * 39.37]
  };

  it("should return the measurement with the precision number of fraction digits", () => {
    const testM = measurement(conversions, 0.1 + 0.2, "m");
    const testCm = measurement(conversions, 0.1 + 0.2, "cm");
    const testIn = measurement(conversions, 0.1 + 0.2, "in");

    expect(toPrecision(testM, 1).value).toEqual(0.3);
    expect(toPrecision(testM, 1).m.value).toEqual(0.3);
    expect(toPrecision(testM, 1).cm.value).toBeCloseTo(30);
    expect(toPrecision(testM, 1).in.value).toBeCloseTo(11.81);

    expect(toPrecision(testCm, 1).value).toEqual(0.3);
    expect(toPrecision(testCm, 1).m.value).toBeCloseTo(0.003);
    expect(toPrecision(testCm, 1).cm.value).toEqual(0.3);
    expect(toPrecision(testCm, 1).in.value).toBeCloseTo(0.12);

    expect(toPrecision(testIn, 1).value).toEqual(0.3);
    expect(toPrecision(testIn, 1).m.value).toBeCloseTo(0.0076);
    expect(toPrecision(testIn, 1).cm.value).toBeCloseTo(0.76);
    expect(toPrecision(testIn, 1).in.value).toEqual(0.3);
  });

});