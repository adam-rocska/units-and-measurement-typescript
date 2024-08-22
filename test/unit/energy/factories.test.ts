import {energy} from "!src/energy/factories";
import {kilojoules, joules, kilocalories, calories, kilowattHours, wattHours, electronvolts} from "!src/energy/factories";
import {linearConversion} from "!src/conversion";

describe("!src/energy/factories aliasing", () => {
  describe('energy["kJ"]', () => {
    it('should be aliased by "kilojoules".', () => {
      expect(kilojoules).toBe(energy["kJ"]);
    });
  });


  describe('energy["J"]', () => {
    it('should be aliased by "joules".', () => {
      expect(joules).toBe(energy["J"]);
    });
  });


  describe('energy["kCal"]', () => {
    it('should be aliased by "kilocalories".', () => {
      expect(kilocalories).toBe(energy["kCal"]);
    });
  });


  describe('energy["cal"]', () => {
    it('should be aliased by "calories".', () => {
      expect(calories).toBe(energy["cal"]);
    });
  });


  describe('energy["kWh"]', () => {
    it('should be aliased by "kilowattHours".', () => {
      expect(kilowattHours).toBe(energy["kWh"]);
    });
  });


  describe('energy["Wh"]', () => {
    it('should be aliased by "wattHours".', () => {
      expect(wattHours).toBe(energy["Wh"]);
    });
  });


  describe('energy["eV"]', () => {
    it('should be aliased by "electronvolts".', () => {
      expect(electronvolts).toBe(energy["eV"]);
    });
  });

});

describe("energy", () => {
  describe('kJ', () => {
    it.each([1, 10, 100])('should yield a kJ measurement when given a number.', v => {
      expect(energy["kJ"](v)).toEqual([v, "kJ"]);
      expect(kilojoules(v)).toEqual([v, "kJ"]);
    });



    it.each([1, 10, 100])('should convert J to kJ.', v => {
      const kilojoulesConversion = linearConversion(1000);
      const joulesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        joulesConversion[0],
        kilojoulesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kJ"] as const;
      const conversionCandidate = [v, "J"] as const;

      expect(energy["kJ"](conversionCandidate)).toEqual(expected);
      expect(kilojoules(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kCal to kJ.', v => {
      const kilojoulesConversion = linearConversion(1000);
      const kilocaloriesConversion = linearConversion(4184);

      const [toBase, fromBase] = [
        kilocaloriesConversion[0],
        kilojoulesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kJ"] as const;
      const conversionCandidate = [v, "kCal"] as const;

      expect(energy["kJ"](conversionCandidate)).toEqual(expected);
      expect(kilojoules(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cal to kJ.', v => {
      const kilojoulesConversion = linearConversion(1000);
      const caloriesConversion = linearConversion(4.184);

      const [toBase, fromBase] = [
        caloriesConversion[0],
        kilojoulesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kJ"] as const;
      const conversionCandidate = [v, "cal"] as const;

      expect(energy["kJ"](conversionCandidate)).toEqual(expected);
      expect(kilojoules(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kWh to kJ.', v => {
      const kilojoulesConversion = linearConversion(1000);
      const kilowattHoursConversion = linearConversion(3600000);

      const [toBase, fromBase] = [
        kilowattHoursConversion[0],
        kilojoulesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kJ"] as const;
      const conversionCandidate = [v, "kWh"] as const;

      expect(energy["kJ"](conversionCandidate)).toEqual(expected);
      expect(kilojoules(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Wh to kJ.', v => {
      const kilojoulesConversion = linearConversion(1000);
      const wattHoursConversion = linearConversion(3600);

      const [toBase, fromBase] = [
        wattHoursConversion[0],
        kilojoulesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kJ"] as const;
      const conversionCandidate = [v, "Wh"] as const;

      expect(energy["kJ"](conversionCandidate)).toEqual(expected);
      expect(kilojoules(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert eV to kJ.', v => {
      const kilojoulesConversion = linearConversion(1000);
      const electronvoltsConversion = linearConversion(1.60218e-19);

      const [toBase, fromBase] = [
        electronvoltsConversion[0],
        kilojoulesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kJ"] as const;
      const conversionCandidate = [v, "eV"] as const;

      expect(energy["kJ"](conversionCandidate)).toEqual(expected);
      expect(kilojoules(conversionCandidate)).toEqual(expected);
    });
  });


  describe('J', () => {
    it.each([1, 10, 100])('should yield a J measurement when given a number.', v => {
      expect(energy["J"](v)).toEqual([v, "J"]);
      expect(joules(v)).toEqual([v, "J"]);
    });

    it.each([1, 10, 100])('should convert kJ to J.', v => {
      const joulesConversion = linearConversion(1);
      const kilojoulesConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilojoulesConversion[0],
        joulesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "J"] as const;
      const conversionCandidate = [v, "kJ"] as const;

      expect(energy["J"](conversionCandidate)).toEqual(expected);
      expect(joules(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert kCal to J.', v => {
      const joulesConversion = linearConversion(1);
      const kilocaloriesConversion = linearConversion(4184);

      const [toBase, fromBase] = [
        kilocaloriesConversion[0],
        joulesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "J"] as const;
      const conversionCandidate = [v, "kCal"] as const;

      expect(energy["J"](conversionCandidate)).toEqual(expected);
      expect(joules(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cal to J.', v => {
      const joulesConversion = linearConversion(1);
      const caloriesConversion = linearConversion(4.184);

      const [toBase, fromBase] = [
        caloriesConversion[0],
        joulesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "J"] as const;
      const conversionCandidate = [v, "cal"] as const;

      expect(energy["J"](conversionCandidate)).toEqual(expected);
      expect(joules(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kWh to J.', v => {
      const joulesConversion = linearConversion(1);
      const kilowattHoursConversion = linearConversion(3600000);

      const [toBase, fromBase] = [
        kilowattHoursConversion[0],
        joulesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "J"] as const;
      const conversionCandidate = [v, "kWh"] as const;

      expect(energy["J"](conversionCandidate)).toEqual(expected);
      expect(joules(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Wh to J.', v => {
      const joulesConversion = linearConversion(1);
      const wattHoursConversion = linearConversion(3600);

      const [toBase, fromBase] = [
        wattHoursConversion[0],
        joulesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "J"] as const;
      const conversionCandidate = [v, "Wh"] as const;

      expect(energy["J"](conversionCandidate)).toEqual(expected);
      expect(joules(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert eV to J.', v => {
      const joulesConversion = linearConversion(1);
      const electronvoltsConversion = linearConversion(1.60218e-19);

      const [toBase, fromBase] = [
        electronvoltsConversion[0],
        joulesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "J"] as const;
      const conversionCandidate = [v, "eV"] as const;

      expect(energy["J"](conversionCandidate)).toEqual(expected);
      expect(joules(conversionCandidate)).toEqual(expected);
    });
  });


  describe('kCal', () => {
    it.each([1, 10, 100])('should yield a kCal measurement when given a number.', v => {
      expect(energy["kCal"](v)).toEqual([v, "kCal"]);
      expect(kilocalories(v)).toEqual([v, "kCal"]);
    });

    it.each([1, 10, 100])('should convert kJ to kCal.', v => {
      const kilocaloriesConversion = linearConversion(4184);
      const kilojoulesConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilojoulesConversion[0],
        kilocaloriesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kCal"] as const;
      const conversionCandidate = [v, "kJ"] as const;

      expect(energy["kCal"](conversionCandidate)).toEqual(expected);
      expect(kilocalories(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert J to kCal.', v => {
      const kilocaloriesConversion = linearConversion(4184);
      const joulesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        joulesConversion[0],
        kilocaloriesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kCal"] as const;
      const conversionCandidate = [v, "J"] as const;

      expect(energy["kCal"](conversionCandidate)).toEqual(expected);
      expect(kilocalories(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert cal to kCal.', v => {
      const kilocaloriesConversion = linearConversion(4184);
      const caloriesConversion = linearConversion(4.184);

      const [toBase, fromBase] = [
        caloriesConversion[0],
        kilocaloriesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kCal"] as const;
      const conversionCandidate = [v, "cal"] as const;

      expect(energy["kCal"](conversionCandidate)).toEqual(expected);
      expect(kilocalories(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kWh to kCal.', v => {
      const kilocaloriesConversion = linearConversion(4184);
      const kilowattHoursConversion = linearConversion(3600000);

      const [toBase, fromBase] = [
        kilowattHoursConversion[0],
        kilocaloriesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kCal"] as const;
      const conversionCandidate = [v, "kWh"] as const;

      expect(energy["kCal"](conversionCandidate)).toEqual(expected);
      expect(kilocalories(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Wh to kCal.', v => {
      const kilocaloriesConversion = linearConversion(4184);
      const wattHoursConversion = linearConversion(3600);

      const [toBase, fromBase] = [
        wattHoursConversion[0],
        kilocaloriesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kCal"] as const;
      const conversionCandidate = [v, "Wh"] as const;

      expect(energy["kCal"](conversionCandidate)).toEqual(expected);
      expect(kilocalories(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert eV to kCal.', v => {
      const kilocaloriesConversion = linearConversion(4184);
      const electronvoltsConversion = linearConversion(1.60218e-19);

      const [toBase, fromBase] = [
        electronvoltsConversion[0],
        kilocaloriesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kCal"] as const;
      const conversionCandidate = [v, "eV"] as const;

      expect(energy["kCal"](conversionCandidate)).toEqual(expected);
      expect(kilocalories(conversionCandidate)).toEqual(expected);
    });
  });


  describe('cal', () => {
    it.each([1, 10, 100])('should yield a cal measurement when given a number.', v => {
      expect(energy["cal"](v)).toEqual([v, "cal"]);
      expect(calories(v)).toEqual([v, "cal"]);
    });

    it.each([1, 10, 100])('should convert kJ to cal.', v => {
      const caloriesConversion = linearConversion(4.184);
      const kilojoulesConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilojoulesConversion[0],
        caloriesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cal"] as const;
      const conversionCandidate = [v, "kJ"] as const;

      expect(energy["cal"](conversionCandidate)).toEqual(expected);
      expect(calories(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert J to cal.', v => {
      const caloriesConversion = linearConversion(4.184);
      const joulesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        joulesConversion[0],
        caloriesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cal"] as const;
      const conversionCandidate = [v, "J"] as const;

      expect(energy["cal"](conversionCandidate)).toEqual(expected);
      expect(calories(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kCal to cal.', v => {
      const caloriesConversion = linearConversion(4.184);
      const kilocaloriesConversion = linearConversion(4184.0);

      const [toBase, fromBase] = [
        kilocaloriesConversion[0],
        caloriesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cal"] as const;
      const conversionCandidate = [v, "kCal"] as const;

      expect(energy["cal"](conversionCandidate)).toEqual(expected);
      expect(calories(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert kWh to cal.', v => {
      const caloriesConversion = linearConversion(4.184);
      const kilowattHoursConversion = linearConversion(3600000);

      const [toBase, fromBase] = [
        kilowattHoursConversion[0],
        caloriesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cal"] as const;
      const conversionCandidate = [v, "kWh"] as const;

      expect(energy["cal"](conversionCandidate)).toEqual(expected);
      expect(calories(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Wh to cal.', v => {
      const caloriesConversion = linearConversion(4.184);
      const wattHoursConversion = linearConversion(3600);

      const [toBase, fromBase] = [
        wattHoursConversion[0],
        caloriesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cal"] as const;
      const conversionCandidate = [v, "Wh"] as const;

      expect(energy["cal"](conversionCandidate)).toEqual(expected);
      expect(calories(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert eV to cal.', v => {
      const caloriesConversion = linearConversion(4.184);
      const electronvoltsConversion = linearConversion(1.60218e-19);

      const [toBase, fromBase] = [
        electronvoltsConversion[0],
        caloriesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cal"] as const;
      const conversionCandidate = [v, "eV"] as const;

      expect(energy["cal"](conversionCandidate)).toEqual(expected);
      expect(calories(conversionCandidate)).toEqual(expected);
    });
  });


  describe('kWh', () => {
    it.each([1, 10, 100])('should yield a kWh measurement when given a number.', v => {
      expect(energy["kWh"](v)).toEqual([v, "kWh"]);
      expect(kilowattHours(v)).toEqual([v, "kWh"]);
    });

    it.each([1, 10, 100])('should convert kJ to kWh.', v => {
      const kilowattHoursConversion = linearConversion(3600000);
      const kilojoulesConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilojoulesConversion[0],
        kilowattHoursConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kWh"] as const;
      const conversionCandidate = [v, "kJ"] as const;

      expect(energy["kWh"](conversionCandidate)).toEqual(expected);
      expect(kilowattHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert J to kWh.', v => {
      const kilowattHoursConversion = linearConversion(3600000);
      const joulesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        joulesConversion[0],
        kilowattHoursConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kWh"] as const;
      const conversionCandidate = [v, "J"] as const;

      expect(energy["kWh"](conversionCandidate)).toEqual(expected);
      expect(kilowattHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kCal to kWh.', v => {
      const kilowattHoursConversion = linearConversion(3600000);
      const kilocaloriesConversion = linearConversion(4184);

      const [toBase, fromBase] = [
        kilocaloriesConversion[0],
        kilowattHoursConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kWh"] as const;
      const conversionCandidate = [v, "kCal"] as const;

      expect(energy["kWh"](conversionCandidate)).toEqual(expected);
      expect(kilowattHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cal to kWh.', v => {
      const kilowattHoursConversion = linearConversion(3600000);
      const caloriesConversion = linearConversion(4.184);

      const [toBase, fromBase] = [
        caloriesConversion[0],
        kilowattHoursConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kWh"] as const;
      const conversionCandidate = [v, "cal"] as const;

      expect(energy["kWh"](conversionCandidate)).toEqual(expected);
      expect(kilowattHours(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Wh to kWh.', v => {
      const kilowattHoursConversion = linearConversion(3600000);
      const wattHoursConversion = linearConversion(3600);

      const [toBase, fromBase] = [
        wattHoursConversion[0],
        kilowattHoursConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kWh"] as const;
      const conversionCandidate = [v, "Wh"] as const;

      expect(energy["kWh"](conversionCandidate)).toEqual(expected);
      expect(kilowattHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert eV to kWh.', v => {
      const kilowattHoursConversion = linearConversion(3600000);
      const electronvoltsConversion = linearConversion(1.60218e-19);

      const [toBase, fromBase] = [
        electronvoltsConversion[0],
        kilowattHoursConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kWh"] as const;
      const conversionCandidate = [v, "eV"] as const;

      expect(energy["kWh"](conversionCandidate)).toEqual(expected);
      expect(kilowattHours(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Wh', () => {
    it.each([1, 10, 100])('should yield a Wh measurement when given a number.', v => {
      expect(energy["Wh"](v)).toEqual([v, "Wh"]);
      expect(wattHours(v)).toEqual([v, "Wh"]);
    });

    it.each([1, 10, 100])('should convert kJ to Wh.', v => {
      const wattHoursConversion = linearConversion(3600);
      const kilojoulesConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilojoulesConversion[0],
        wattHoursConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "Wh"] as const;
      const conversionCandidate = [v, "kJ"] as const;

      expect(energy["Wh"](conversionCandidate)).toEqual(expected);
      expect(wattHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert J to Wh.', v => {
      const wattHoursConversion = linearConversion(3600);
      const joulesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        joulesConversion[0],
        wattHoursConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "Wh"] as const;
      const conversionCandidate = [v, "J"] as const;

      expect(energy["Wh"](conversionCandidate)).toEqual(expected);
      expect(wattHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kCal to Wh.', v => {
      const wattHoursConversion = linearConversion(3600);
      const kilocaloriesConversion = linearConversion(4184);

      const [toBase, fromBase] = [
        kilocaloriesConversion[0],
        wattHoursConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "Wh"] as const;
      const conversionCandidate = [v, "kCal"] as const;

      expect(energy["Wh"](conversionCandidate)).toEqual(expected);
      expect(wattHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cal to Wh.', v => {
      const wattHoursConversion = linearConversion(3600);
      const caloriesConversion = linearConversion(4.184);

      const [toBase, fromBase] = [
        caloriesConversion[0],
        wattHoursConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "Wh"] as const;
      const conversionCandidate = [v, "cal"] as const;

      expect(energy["Wh"](conversionCandidate)).toEqual(expected);
      expect(wattHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kWh to Wh.', v => {
      const wattHoursConversion = linearConversion(3600);
      const kilowattHoursConversion = linearConversion(3600000);

      const [toBase, fromBase] = [
        kilowattHoursConversion[0],
        wattHoursConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "Wh"] as const;
      const conversionCandidate = [v, "kWh"] as const;

      expect(energy["Wh"](conversionCandidate)).toEqual(expected);
      expect(wattHours(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert eV to Wh.', v => {
      const wattHoursConversion = linearConversion(3600);
      const electronvoltsConversion = linearConversion(1.60218e-19);

      const [toBase, fromBase] = [
        electronvoltsConversion[0],
        wattHoursConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "Wh"] as const;
      const conversionCandidate = [v, "eV"] as const;

      expect(energy["Wh"](conversionCandidate)).toEqual(expected);
      expect(wattHours(conversionCandidate)).toEqual(expected);
    });
  });


  describe('eV', () => {
    it.each([1, 10, 100])('should yield a eV measurement when given a number.', v => {
      expect(energy["eV"](v)).toEqual([v, "eV"]);
      expect(electronvolts(v)).toEqual([v, "eV"]);
    });

    it.each([1, 10, 100])('should convert kJ to eV.', v => {
      const electronvoltsConversion = linearConversion(1.60218e-19);
      const kilojoulesConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilojoulesConversion[0],
        electronvoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "eV"] as const;
      const conversionCandidate = [v, "kJ"] as const;

      expect(energy["eV"](conversionCandidate)).toEqual(expected);
      expect(electronvolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert J to eV.', v => {
      const electronvoltsConversion = linearConversion(1.60218e-19);
      const joulesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        joulesConversion[0],
        electronvoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "eV"] as const;
      const conversionCandidate = [v, "J"] as const;

      expect(energy["eV"](conversionCandidate)).toEqual(expected);
      expect(electronvolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kCal to eV.', v => {
      const electronvoltsConversion = linearConversion(1.60218e-19);
      const kilocaloriesConversion = linearConversion(4184);

      const [toBase, fromBase] = [
        kilocaloriesConversion[0],
        electronvoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "eV"] as const;
      const conversionCandidate = [v, "kCal"] as const;

      expect(energy["eV"](conversionCandidate)).toEqual(expected);
      expect(electronvolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cal to eV.', v => {
      const electronvoltsConversion = linearConversion(1.60218e-19);
      const caloriesConversion = linearConversion(4.184);

      const [toBase, fromBase] = [
        caloriesConversion[0],
        electronvoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "eV"] as const;
      const conversionCandidate = [v, "cal"] as const;

      expect(energy["eV"](conversionCandidate)).toEqual(expected);
      expect(electronvolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kWh to eV.', v => {
      const electronvoltsConversion = linearConversion(1.60218e-19);
      const kilowattHoursConversion = linearConversion(3600000);

      const [toBase, fromBase] = [
        kilowattHoursConversion[0],
        electronvoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "eV"] as const;
      const conversionCandidate = [v, "kWh"] as const;

      expect(energy["eV"](conversionCandidate)).toEqual(expected);
      expect(electronvolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Wh to eV.', v => {
      const electronvoltsConversion = linearConversion(1.60218e-19);
      const wattHoursConversion = linearConversion(3600);

      const [toBase, fromBase] = [
        wattHoursConversion[0],
        electronvoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "eV"] as const;
      const conversionCandidate = [v, "Wh"] as const;

      expect(energy["eV"](conversionCandidate)).toEqual(expected);
      expect(electronvolts(conversionCandidate)).toEqual(expected);
    });


  });

});
