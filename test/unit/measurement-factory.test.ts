import {UnitMeasurement, DimensionMeasurement, Measurement} from "!src/factory";

describe("UnitMeasurement", () => {
  const meters: Measurement<"m"> = UnitMeasurement("m");

  describe("when given a number", () => {
    it("returns a measurement", () => {
      expect(meters(1)).toEqual([1, "m"]);
    });
  });

  describe("when given a measurement", () => {
    it("returns the measurement", () => {
      expect(meters([1, "m"])).toEqual([1, "m"]);
    });

    it("returns a new instance", () => {
      const measurement = meters([1, "m"]);
      expect(meters(measurement)).not.toBe(measurement);
    });
  });
});

describe("DimensionMeasurement", () => {
  const {m: meters, cm: centimeters} = DimensionMeasurement({
    m: [v => v, v => v],
    cm: [v => v / 100, v => v * 100],
  });

  describe("when given a number", () => {
    it("returns a measurement", () => {
      expect(meters(1)).toEqual([1, "m"]);
      expect(centimeters(100)).toEqual([100, "cm"]);
    });
  });

  describe("when given a measurement", () => {
    describe("of the same unit", () => {
      it("returns the measurement", () => {
        expect(meters([1, "m"])).toEqual([1, "m"]);
        expect(centimeters([100, "cm"])).toEqual([100, "cm"]);
      });

      it("returns a new instance", () => {
        const measurement = meters([1, "m"]);
        expect(meters(measurement)).not.toBe(measurement);
      });
    });

    describe("of a different unit", () => {
      it("returns the converted measurement", () => {
        expect(meters([100, "cm"])).toEqual([1, "m"]);
        expect(centimeters([1, "m"])).toEqual([100, "cm"]);
      });
    });
  });

});

describe("Measurement", () => {
  describe("when built based on a single unit", () => {
    const meters: Measurement<"m"> = Measurement("m");

    describe("when given a number", () => {
      it("returns a measurement", () => {
        expect(meters(1)).toEqual([1, "m"]);
      });
    });

    describe("when given a measurement", () => {
      it("returns the measurement", () => {
        expect(meters([1, "m"])).toEqual([1, "m"]);
      });

      it("returns a new instance", () => {
        const measurement = meters([1, "m"]);
        expect(meters(measurement)).not.toBe(measurement);
      });
    });
  });

  describe("when built based on a dimension", () => {
    const {m: meters, cm: centimeters} = Measurement({
      m: [v => v, v => v],
      cm: [v => v / 100, v => v * 100],
    });

    describe("when given a number", () => {
      it("returns a measurement", () => {
        expect(meters(1)).toEqual([1, "m"]);
        expect(centimeters(100)).toEqual([100, "cm"]);
      });
    });

    describe("when given a measurement", () => {
      describe("of the same unit", () => {
        it("returns the measurement", () => {
          expect(meters([1, "m"])).toEqual([1, "m"]);
          expect(centimeters([100, "cm"])).toEqual([100, "cm"]);
        });

        it("returns a new instance", () => {
          const measurement = meters([1, "m"]);
          expect(meters(measurement)).not.toBe(measurement);
        });
      });

      describe("of a different unit", () => {
        it("returns the converted measurement", () => {
          expect(meters([100, "cm"])).toEqual([1, "m"]);
          expect(centimeters([1, "m"])).toEqual([100, "cm"]);
        });
      });
    });
  });
});