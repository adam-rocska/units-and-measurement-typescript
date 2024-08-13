import {PowerDimension} from "!src/dimensions/energy-heat-and-light/power/power-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("PowerDimension", () => {
  describe(".terawatts", () => {
    it('should have "TW" as its symbol.', () => {
      expect(PowerDimension.terawatts.symbol).toEqual("TW");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PowerDimension.terawatts.converter).toEqual(
        new LinearUnitConverter(1e12)
      );
    });
  });
  describe(".gigawatts", () => {
    it('should have "GW" as its symbol.', () => {
      expect(PowerDimension.gigawatts.symbol).toEqual("GW");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PowerDimension.gigawatts.converter).toEqual(
        new LinearUnitConverter(1e9)
      );
    });
  });
  describe(".megawatts", () => {
    it('should have "MW" as its symbol.', () => {
      expect(PowerDimension.megawatts.symbol).toEqual("MW");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PowerDimension.megawatts.converter).toEqual(
        new LinearUnitConverter(1000000.0)
      );
    });
  });
  describe(".kilowatts", () => {
    it('should have "kW" as its symbol.', () => {
      expect(PowerDimension.kilowatts.symbol).toEqual("kW");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PowerDimension.kilowatts.converter).toEqual(
        new LinearUnitConverter(1000.0)
      );
    });
  });
  describe(".watts", () => {
    it('should have "W" as its symbol.', () => {
      expect(PowerDimension.watts.symbol).toEqual("W");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PowerDimension.watts.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".milliwatts", () => {
    it('should have "mW" as its symbol.', () => {
      expect(PowerDimension.milliwatts.symbol).toEqual("mW");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PowerDimension.milliwatts.converter).toEqual(
        new LinearUnitConverter(0.001)
      );
    });
  });
  describe(".microwatts", () => {
    it('should have "µW" as its symbol.', () => {
      expect(PowerDimension.microwatts.symbol).toEqual("µW");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PowerDimension.microwatts.converter).toEqual(
        new LinearUnitConverter(0.000001)
      );
    });
  });
  describe(".nanowatts", () => {
    it('should have "nW" as its symbol.', () => {
      expect(PowerDimension.nanowatts.symbol).toEqual("nW");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PowerDimension.nanowatts.converter).toEqual(
        new LinearUnitConverter(1e-9)
      );
    });
  });
  describe(".picowatts", () => {
    it('should have "pW" as its symbol.', () => {
      expect(PowerDimension.picowatts.symbol).toEqual("pW");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PowerDimension.picowatts.converter).toEqual(
        new LinearUnitConverter(1e-12)
      );
    });
  });
  describe(".femtowatts", () => {
    it('should have "fW" as its symbol.', () => {
      expect(PowerDimension.femtowatts.symbol).toEqual("fW");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PowerDimension.femtowatts.converter).toEqual(
        new LinearUnitConverter(1e-15)
      );
    });
  });
  describe(".horsepower", () => {
    it('should have "hp" as its symbol.', () => {
      expect(PowerDimension.horsepower.symbol).toEqual("hp");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PowerDimension.horsepower.converter).toEqual(
        new LinearUnitConverter(745.7)
      );
    });
  });
});
