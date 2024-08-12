import {InformationDimension} from "!src/dimensions/information-storage/information/information-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("InformationDimension", () => {
  describe(".bits", () => {
    it('should have "b" as its symbol.', () => {
      expect(InformationDimension.bits.symbol).toEqual("b");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.bits.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".bytes", () => {
    it('should have "B" as its symbol.', () => {
      expect(InformationDimension.bytes.symbol).toEqual("B");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.bytes.converter).toEqual(
        new LinearUnitConverter(8)
      );
    });
  });
  describe(".kilobits", () => {
    it('should have "kb" as its symbol.', () => {
      expect(InformationDimension.kilobits.symbol).toEqual("kb");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.kilobits.converter).toEqual(
        new LinearUnitConverter(1000)
      );
    });
  });
  describe(".megabits", () => {
    it('should have "Mb" as its symbol.', () => {
      expect(InformationDimension.megabits.symbol).toEqual("Mb");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.megabits.converter).toEqual(
        new LinearUnitConverter(100000)
      );
    });
  });
  describe(".gigabits", () => {
    it('should have "Gb" as its symbol.', () => {
      expect(InformationDimension.gigabits.symbol).toEqual("Gb");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.gigabits.converter).toEqual(
        new LinearUnitConverter(1000000)
      );
    });
  });
  describe(".terabits", () => {
    it('should have "Tb" as its symbol.', () => {
      expect(InformationDimension.terabits.symbol).toEqual("Tb");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.terabits.converter).toEqual(
        new LinearUnitConverter(10000000)
      );
    });
  });
  describe(".petabits", () => {
    it('should have "Pb" as its symbol.', () => {
      expect(InformationDimension.petabits.symbol).toEqual("Pb");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.petabits.converter).toEqual(
        new LinearUnitConverter(100000000)
      );
    });
  });
  describe(".exabits", () => {
    it('should have "Eb" as its symbol.', () => {
      expect(InformationDimension.exabits.symbol).toEqual("Eb");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.exabits.converter).toEqual(
        new LinearUnitConverter(1000000000)
      );
    });
  });
  describe(".zettabits", () => {
    it('should have "Zb" as its symbol.', () => {
      expect(InformationDimension.zettabits.symbol).toEqual("Zb");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.zettabits.converter).toEqual(
        new LinearUnitConverter(10000000000)
      );
    });
  });
  describe(".yottabits", () => {
    it('should have "Yb" as its symbol.', () => {
      expect(InformationDimension.yottabits.symbol).toEqual("Yb");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.yottabits.converter).toEqual(
        new LinearUnitConverter(100000000000)
      );
    });
  });
  describe(".kibibits", () => {
    it('should have "Kib" as its symbol.', () => {
      expect(InformationDimension.kibibits.symbol).toEqual("Kib");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.kibibits.converter).toEqual(
        new LinearUnitConverter(1024)
      );
    });
  });
  describe(".kilobytes", () => {
    it('should have "KB" as its symbol.', () => {
      expect(InformationDimension.kilobytes.symbol).toEqual("KB");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.kilobytes.converter).toEqual(
        new LinearUnitConverter(8192)
      );
    });
  });
  describe(".mebibits", () => {
    it('should have "Mib" as its symbol.', () => {
      expect(InformationDimension.mebibits.symbol).toEqual("Mib");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.mebibits.converter).toEqual(
        new LinearUnitConverter(102400)
      );
    });
  });
  describe(".megabytes", () => {
    it('should have "MB" as its symbol.', () => {
      expect(InformationDimension.megabytes.symbol).toEqual("MB");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.megabytes.converter).toEqual(
        new LinearUnitConverter(819200)
      );
    });
  });
  describe(".gibibits", () => {
    it('should have "Gib" as its symbol.', () => {
      expect(InformationDimension.gibibits.symbol).toEqual("Gib");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.gibibits.converter).toEqual(
        new LinearUnitConverter(1024000)
      );
    });
  });
  describe(".gigabytes", () => {
    it('should have "GB" as its symbol.', () => {
      expect(InformationDimension.gigabytes.symbol).toEqual("GB");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.gigabytes.converter).toEqual(
        new LinearUnitConverter(8192000)
      );
    });
  });
  describe(".tebibits", () => {
    it('should have "Tib" as its symbol.', () => {
      expect(InformationDimension.tebibits.symbol).toEqual("Tib");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.tebibits.converter).toEqual(
        new LinearUnitConverter(10240000)
      );
    });
  });
  describe(".terabytes", () => {
    it('should have "TB" as its symbol.', () => {
      expect(InformationDimension.terabytes.symbol).toEqual("TB");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.terabytes.converter).toEqual(
        new LinearUnitConverter(81920000)
      );
    });
  });
  describe(".pebibits", () => {
    it('should have "Pib" as its symbol.', () => {
      expect(InformationDimension.pebibits.symbol).toEqual("Pib");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.pebibits.converter).toEqual(
        new LinearUnitConverter(102400000)
      );
    });
  });
  describe(".petabytes", () => {
    it('should have "PB" as its symbol.', () => {
      expect(InformationDimension.petabytes.symbol).toEqual("PB");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.petabytes.converter).toEqual(
        new LinearUnitConverter(819200000)
      );
    });
  });
  describe(".exbibits", () => {
    it('should have "Eib" as its symbol.', () => {
      expect(InformationDimension.exbibits.symbol).toEqual("Eib");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.exbibits.converter).toEqual(
        new LinearUnitConverter(1024000000)
      );
    });
  });
  describe(".exabytes", () => {
    it('should have "EB" as its symbol.', () => {
      expect(InformationDimension.exabytes.symbol).toEqual("EB");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.exabytes.converter).toEqual(
        new LinearUnitConverter(8192000000)
      );
    });
  });
  describe(".zebibits", () => {
    it('should have "Zib" as its symbol.', () => {
      expect(InformationDimension.zebibits.symbol).toEqual("Zib");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.zebibits.converter).toEqual(
        new LinearUnitConverter(10240000000)
      );
    });
  });
  describe(".zettabytes", () => {
    it('should have "ZB" as its symbol.', () => {
      expect(InformationDimension.zettabytes.symbol).toEqual("ZB");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.zettabytes.converter).toEqual(
        new LinearUnitConverter(81920000000)
      );
    });
  });
  describe(".yobibits", () => {
    it('should have "Yib" as its symbol.', () => {
      expect(InformationDimension.yobibits.symbol).toEqual("Yib");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.yobibits.converter).toEqual(
        new LinearUnitConverter(102400000000)
      );
    });
  });
  describe(".yottabytes", () => {
    it('should have "YB" as its symbol.', () => {
      expect(InformationDimension.yottabytes.symbol).toEqual("YB");
    });

    it("should have its unit conversion set properly.", () => {
      expect(InformationDimension.yottabytes.converter).toEqual(
        new LinearUnitConverter(819200000000)
      );
    });
  });
});
