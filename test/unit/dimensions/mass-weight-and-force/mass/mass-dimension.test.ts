import {MassDimension} from "!src/dimensions/mass-weight-and-force/mass/mass-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("MassDimension", () => {
  describe(".kilograms", () => {
    it('should have "kg" as its symbol.', () => {
      expect(MassDimension.kilograms.symbol).toEqual("kg");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.kilograms.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".grams", () => {
    it('should have "g" as its symbol.', () => {
      expect(MassDimension.grams.symbol).toEqual("g");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.grams.converter).toEqual(
        new LinearUnitConverter(0.001)
      );
    });
  });
  describe(".decigrams", () => {
    it('should have "dg" as its symbol.', () => {
      expect(MassDimension.decigrams.symbol).toEqual("dg");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.decigrams.converter).toEqual(
        new LinearUnitConverter(0.0001)
      );
    });
  });
  describe(".centigrams", () => {
    it('should have "cg" as its symbol.', () => {
      expect(MassDimension.centigrams.symbol).toEqual("cg");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.centigrams.converter).toEqual(
        new LinearUnitConverter(0.00001)
      );
    });
  });
  describe(".milligrams", () => {
    it('should have "mg" as its symbol.', () => {
      expect(MassDimension.milligrams.symbol).toEqual("mg");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.milligrams.converter).toEqual(
        new LinearUnitConverter(0.000001)
      );
    });
  });
  describe(".micrograms", () => {
    it('should have "µg" as its symbol.', () => {
      expect(MassDimension.micrograms.symbol).toEqual("µg");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.micrograms.converter).toEqual(
        new LinearUnitConverter(1e-9)
      );
    });
  });
  describe(".nanograms", () => {
    it('should have "ng" as its symbol.', () => {
      expect(MassDimension.nanograms.symbol).toEqual("ng");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.nanograms.converter).toEqual(
        new LinearUnitConverter(1e-12)
      );
    });
  });
  describe(".picograms", () => {
    it('should have "pg" as its symbol.', () => {
      expect(MassDimension.picograms.symbol).toEqual("pg");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.picograms.converter).toEqual(
        new LinearUnitConverter(1e-15)
      );
    });
  });
  describe(".ounces", () => {
    it('should have "oz" as its symbol.', () => {
      expect(MassDimension.ounces.symbol).toEqual("oz");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.ounces.converter).toEqual(
        new LinearUnitConverter(0.0283495)
      );
    });
  });
  describe(".pounds", () => {
    it('should have "lb" as its symbol.', () => {
      expect(MassDimension.pounds.symbol).toEqual("lb");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.pounds.converter).toEqual(
        new LinearUnitConverter(0.453592)
      );
    });
  });
  describe(".stones", () => {
    it('should have "st" as its symbol.', () => {
      expect(MassDimension.stones.symbol).toEqual("st");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.stones.converter).toEqual(
        new LinearUnitConverter(0.157473)
      );
    });
  });
  describe(".metricTons", () => {
    it('should have "t" as its symbol.', () => {
      expect(MassDimension.metricTons.symbol).toEqual("t");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.metricTons.converter).toEqual(
        new LinearUnitConverter(1000)
      );
    });
  });
  describe(".shortTons", () => {
    it('should have "ton" as its symbol.', () => {
      expect(MassDimension.shortTons.symbol).toEqual("ton");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.shortTons.converter).toEqual(
        new LinearUnitConverter(907.185)
      );
    });
  });
  describe(".carats", () => {
    it('should have "ct" as its symbol.', () => {
      expect(MassDimension.carats.symbol).toEqual("ct");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.carats.converter).toEqual(
        new LinearUnitConverter(0.0002)
      );
    });
  });
  describe(".ouncesTroy", () => {
    it('should have "oz t" as its symbol.', () => {
      expect(MassDimension.ouncesTroy.symbol).toEqual("oz t");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.ouncesTroy.converter).toEqual(
        new LinearUnitConverter(0.03110348)
      );
    });
  });
  describe(".slugs", () => {
    it('should have "slug" as its symbol.', () => {
      expect(MassDimension.slugs.symbol).toEqual("slug");
    });

    it("should have its unit conversion set properly.", () => {
      expect(MassDimension.slugs.converter).toEqual(
        new LinearUnitConverter(14.5939)
      );
    });
  });
});
