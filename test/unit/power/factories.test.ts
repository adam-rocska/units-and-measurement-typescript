import {power} from "!src/power/factories";
import {terawatts, gigawatts, megawatts, kilowatts, watts, milliwatts, microwatts, nanowatts, picowatts, femtowatts, horsepower} from "!src/power/factories";
import {linearConversion} from "!src/conversion";

describe("!src/power/factories aliasing", () => {
  describe('power["TW"]', () => {
    it('should be aliased by "terawatts".', () => {
      expect(terawatts).toBe(power["TW"]);
    });
  });


  describe('power["GW"]', () => {
    it('should be aliased by "gigawatts".', () => {
      expect(gigawatts).toBe(power["GW"]);
    });
  });


  describe('power["MW"]', () => {
    it('should be aliased by "megawatts".', () => {
      expect(megawatts).toBe(power["MW"]);
    });
  });


  describe('power["kW"]', () => {
    it('should be aliased by "kilowatts".', () => {
      expect(kilowatts).toBe(power["kW"]);
    });
  });


  describe('power["W"]', () => {
    it('should be aliased by "watts".', () => {
      expect(watts).toBe(power["W"]);
    });
  });


  describe('power["mW"]', () => {
    it('should be aliased by "milliwatts".', () => {
      expect(milliwatts).toBe(power["mW"]);
    });
  });


  describe('power["µW"]', () => {
    it('should be aliased by "microwatts".', () => {
      expect(microwatts).toBe(power["µW"]);
    });
  });


  describe('power["nW"]', () => {
    it('should be aliased by "nanowatts".', () => {
      expect(nanowatts).toBe(power["nW"]);
    });
  });


  describe('power["pW"]', () => {
    it('should be aliased by "picowatts".', () => {
      expect(picowatts).toBe(power["pW"]);
    });
  });


  describe('power["fW"]', () => {
    it('should be aliased by "femtowatts".', () => {
      expect(femtowatts).toBe(power["fW"]);
    });
  });


  describe('power["hp"]', () => {
    it('should be aliased by "horsepower".', () => {
      expect(horsepower).toBe(power["hp"]);
    });
  });

});

describe("power", () => {
  describe('TW', () => {
    it.each([1, 10, 100])('should yield a TW measurement when given a number.', v => {
      expect(power["TW"](v)).toEqual([v, "TW"]);
      expect(terawatts(v)).toEqual([v, "TW"]);
    });



    it.each([1, 10, 100])('should convert GW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        terawattsConversion[1],
        gigawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        terawattsConversion[1],
        megawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        terawattsConversion[1],
        kilowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert W to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        terawattsConversion[1],
        wattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        terawattsConversion[1],
        milliwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        terawattsConversion[1],
        microwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        terawattsConversion[1],
        nanowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        terawattsConversion[1],
        picowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        terawattsConversion[1],
        femtowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hp to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        terawattsConversion[1],
        horsepowerConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "hp"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('GW', () => {
    it.each([1, 10, 100])('should yield a GW measurement when given a number.', v => {
      expect(power["GW"](v)).toEqual([v, "GW"]);
      expect(gigawatts(v)).toEqual([v, "GW"]);
    });

    it.each([1, 10, 100])('should convert TW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        gigawattsConversion[1],
        terawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert MW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigawattsConversion[1],
        megawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        gigawattsConversion[1],
        kilowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert W to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        gigawattsConversion[1],
        wattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gigawattsConversion[1],
        milliwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        gigawattsConversion[1],
        microwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        gigawattsConversion[1],
        nanowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        gigawattsConversion[1],
        picowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        gigawattsConversion[1],
        femtowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hp to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        gigawattsConversion[1],
        horsepowerConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "hp"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('MW', () => {
    it.each([1, 10, 100])('should yield a MW measurement when given a number.', v => {
      expect(power["MW"](v)).toEqual([v, "MW"]);
      expect(megawatts(v)).toEqual([v, "MW"]);
    });

    it.each([1, 10, 100])('should convert TW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        megawattsConversion[1],
        terawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        megawattsConversion[1],
        gigawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert kW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        megawattsConversion[1],
        kilowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert W to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        megawattsConversion[1],
        wattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        megawattsConversion[1],
        milliwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        megawattsConversion[1],
        microwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        megawattsConversion[1],
        nanowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        megawattsConversion[1],
        picowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        megawattsConversion[1],
        femtowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hp to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        megawattsConversion[1],
        horsepowerConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "hp"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('kW', () => {
    it.each([1, 10, 100])('should yield a kW measurement when given a number.', v => {
      expect(power["kW"](v)).toEqual([v, "kW"]);
      expect(kilowatts(v)).toEqual([v, "kW"]);
    });

    it.each([1, 10, 100])('should convert TW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        kilowattsConversion[1],
        terawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        kilowattsConversion[1],
        gigawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        kilowattsConversion[1],
        megawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert W to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilowattsConversion[1],
        wattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        kilowattsConversion[1],
        milliwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        kilowattsConversion[1],
        microwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        kilowattsConversion[1],
        nanowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        kilowattsConversion[1],
        picowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        kilowattsConversion[1],
        femtowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hp to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        kilowattsConversion[1],
        horsepowerConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "hp"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('W', () => {
    it.each([1, 10, 100])('should yield a W measurement when given a number.', v => {
      expect(power["W"](v)).toEqual([v, "W"]);
      expect(watts(v)).toEqual([v, "W"]);
    });

    it.each([1, 10, 100])('should convert TW to W.', v => {
      const wattsConversion = linearConversion(1);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        wattsConversion[1],
        terawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GW to W.', v => {
      const wattsConversion = linearConversion(1);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        wattsConversion[1],
        gigawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MW to W.', v => {
      const wattsConversion = linearConversion(1);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        wattsConversion[1],
        megawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kW to W.', v => {
      const wattsConversion = linearConversion(1);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        wattsConversion[1],
        kilowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert mW to W.', v => {
      const wattsConversion = linearConversion(1);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        wattsConversion[1],
        milliwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µW to W.', v => {
      const wattsConversion = linearConversion(1);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        wattsConversion[1],
        microwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nW to W.', v => {
      const wattsConversion = linearConversion(1);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        wattsConversion[1],
        nanowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pW to W.', v => {
      const wattsConversion = linearConversion(1);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        wattsConversion[1],
        picowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fW to W.', v => {
      const wattsConversion = linearConversion(1);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        wattsConversion[1],
        femtowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hp to W.', v => {
      const wattsConversion = linearConversion(1);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        wattsConversion[1],
        horsepowerConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "hp"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mW', () => {
    it.each([1, 10, 100])('should yield a mW measurement when given a number.', v => {
      expect(power["mW"](v)).toEqual([v, "mW"]);
      expect(milliwatts(v)).toEqual([v, "mW"]);
    });

    it.each([1, 10, 100])('should convert TW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        milliwattsConversion[1],
        terawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        milliwattsConversion[1],
        gigawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        milliwattsConversion[1],
        megawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        milliwattsConversion[1],
        kilowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert W to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        milliwattsConversion[1],
        wattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert µW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milliwattsConversion[1],
        microwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        milliwattsConversion[1],
        nanowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        milliwattsConversion[1],
        picowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        milliwattsConversion[1],
        femtowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hp to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        milliwattsConversion[1],
        horsepowerConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "hp"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('µW', () => {
    it.each([1, 10, 100])('should yield a µW measurement when given a number.', v => {
      expect(power["µW"](v)).toEqual([v, "µW"]);
      expect(microwatts(v)).toEqual([v, "µW"]);
    });

    it.each([1, 10, 100])('should convert TW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        microwattsConversion[1],
        terawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        microwattsConversion[1],
        gigawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        microwattsConversion[1],
        megawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        microwattsConversion[1],
        kilowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert W to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        microwattsConversion[1],
        wattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        microwattsConversion[1],
        milliwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert nW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microwattsConversion[1],
        nanowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        microwattsConversion[1],
        picowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        microwattsConversion[1],
        femtowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hp to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        microwattsConversion[1],
        horsepowerConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "hp"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('nW', () => {
    it.each([1, 10, 100])('should yield a nW measurement when given a number.', v => {
      expect(power["nW"](v)).toEqual([v, "nW"]);
      expect(nanowatts(v)).toEqual([v, "nW"]);
    });

    it.each([1, 10, 100])('should convert TW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        nanowattsConversion[1],
        terawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        nanowattsConversion[1],
        gigawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        nanowattsConversion[1],
        megawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        nanowattsConversion[1],
        kilowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert W to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        nanowattsConversion[1],
        wattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        nanowattsConversion[1],
        milliwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        nanowattsConversion[1],
        microwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert pW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanowattsConversion[1],
        picowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        nanowattsConversion[1],
        femtowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hp to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        nanowattsConversion[1],
        horsepowerConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "hp"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('pW', () => {
    it.each([1, 10, 100])('should yield a pW measurement when given a number.', v => {
      expect(power["pW"](v)).toEqual([v, "pW"]);
      expect(picowatts(v)).toEqual([v, "pW"]);
    });

    it.each([1, 10, 100])('should convert TW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        picowattsConversion[1],
        terawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        picowattsConversion[1],
        gigawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        picowattsConversion[1],
        megawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        picowattsConversion[1],
        kilowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert W to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        picowattsConversion[1],
        wattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        picowattsConversion[1],
        milliwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        picowattsConversion[1],
        microwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        picowattsConversion[1],
        nanowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert fW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picowattsConversion[1],
        femtowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hp to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        picowattsConversion[1],
        horsepowerConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "hp"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('fW', () => {
    it.each([1, 10, 100])('should yield a fW measurement when given a number.', v => {
      expect(power["fW"](v)).toEqual([v, "fW"]);
      expect(femtowatts(v)).toEqual([v, "fW"]);
    });

    it.each([1, 10, 100])('should convert TW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        femtowattsConversion[1],
        terawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        femtowattsConversion[1],
        gigawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        femtowattsConversion[1],
        megawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        femtowattsConversion[1],
        kilowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert W to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        femtowattsConversion[1],
        wattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        femtowattsConversion[1],
        milliwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        femtowattsConversion[1],
        microwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        femtowattsConversion[1],
        nanowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        femtowattsConversion[1],
        picowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert hp to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        femtowattsConversion[1],
        horsepowerConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "hp"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('hp', () => {
    it.each([1, 10, 100])('should yield a hp measurement when given a number.', v => {
      expect(power["hp"](v)).toEqual([v, "hp"]);
      expect(horsepower(v)).toEqual([v, "hp"]);
    });

    it.each([1, 10, 100])('should convert TW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        horsepowerConversion[1],
        terawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        horsepowerConversion[1],
        gigawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        horsepowerConversion[1],
        megawattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        horsepowerConversion[1],
        kilowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert W to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        horsepowerConversion[1],
        wattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        horsepowerConversion[1],
        milliwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        horsepowerConversion[1],
        microwattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        horsepowerConversion[1],
        nanowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        horsepowerConversion[1],
        picowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        horsepowerConversion[1],
        femtowattsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });


  });

});
