import {IlluminanceDimension} from "!src/dimensions/energy-heat-and-light/illuminance/illuminance-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("IlluminanceDimension", () => {
  describe(".lux", () => {
    it('should have "lx" as its symbol.', () => {
      expect(IlluminanceDimension.lux.symbol).toEqual("lx");
    });

    it("should have its unit conversion set properly.", () => {
      expect(IlluminanceDimension.lux.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
});
