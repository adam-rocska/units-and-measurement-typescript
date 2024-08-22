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



    it.each([1, 10, 100])('should convert %dGW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigawattsConversion[0],
        terawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megawattsConversion[0],
        terawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilowattsConversion[0],
        terawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        wattsConversion[0],
        terawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliwattsConversion[0],
        terawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microwattsConversion[0],
        terawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanowattsConversion[0],
        terawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picowattsConversion[0],
        terawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfW to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        femtowattsConversion[0],
        terawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["TW"](conversionCandidate)).toEqual(expected);
      expect(terawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhp to TW.', v => {
      const terawattsConversion = linearConversion(1000000000000);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        horsepowerConversion[0],
        terawattsConversion[1],
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

    it.each([1, 10, 100])('should convert %dTW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terawattsConversion[0],
        gigawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dMW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megawattsConversion[0],
        gigawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilowattsConversion[0],
        gigawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        wattsConversion[0],
        gigawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliwattsConversion[0],
        gigawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microwattsConversion[0],
        gigawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanowattsConversion[0],
        gigawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picowattsConversion[0],
        gigawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfW to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        femtowattsConversion[0],
        gigawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["GW"](conversionCandidate)).toEqual(expected);
      expect(gigawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhp to GW.', v => {
      const gigawattsConversion = linearConversion(1000000000);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        horsepowerConversion[0],
        gigawattsConversion[1],
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

    it.each([1, 10, 100])('should convert %dTW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terawattsConversion[0],
        megawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigawattsConversion[0],
        megawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dkW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilowattsConversion[0],
        megawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        wattsConversion[0],
        megawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliwattsConversion[0],
        megawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microwattsConversion[0],
        megawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanowattsConversion[0],
        megawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picowattsConversion[0],
        megawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfW to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        femtowattsConversion[0],
        megawattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["MW"](conversionCandidate)).toEqual(expected);
      expect(megawatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhp to MW.', v => {
      const megawattsConversion = linearConversion(1000000);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        horsepowerConversion[0],
        megawattsConversion[1],
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

    it.each([1, 10, 100])('should convert %dTW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terawattsConversion[0],
        kilowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigawattsConversion[0],
        kilowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megawattsConversion[0],
        kilowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        wattsConversion[0],
        kilowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliwattsConversion[0],
        kilowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microwattsConversion[0],
        kilowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanowattsConversion[0],
        kilowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picowattsConversion[0],
        kilowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfW to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        femtowattsConversion[0],
        kilowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["kW"](conversionCandidate)).toEqual(expected);
      expect(kilowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhp to kW.', v => {
      const kilowattsConversion = linearConversion(1000);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        horsepowerConversion[0],
        kilowattsConversion[1],
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

    it.each([1, 10, 100])('should convert %dTW to W.', v => {
      const wattsConversion = linearConversion(1);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terawattsConversion[0],
        wattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGW to W.', v => {
      const wattsConversion = linearConversion(1);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigawattsConversion[0],
        wattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMW to W.', v => {
      const wattsConversion = linearConversion(1);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megawattsConversion[0],
        wattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkW to W.', v => {
      const wattsConversion = linearConversion(1);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilowattsConversion[0],
        wattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmW to W.', v => {
      const wattsConversion = linearConversion(1);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliwattsConversion[0],
        wattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµW to W.', v => {
      const wattsConversion = linearConversion(1);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microwattsConversion[0],
        wattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnW to W.', v => {
      const wattsConversion = linearConversion(1);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanowattsConversion[0],
        wattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpW to W.', v => {
      const wattsConversion = linearConversion(1);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picowattsConversion[0],
        wattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfW to W.', v => {
      const wattsConversion = linearConversion(1);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        femtowattsConversion[0],
        wattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "W"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["W"](conversionCandidate)).toEqual(expected);
      expect(watts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhp to W.', v => {
      const wattsConversion = linearConversion(1);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        horsepowerConversion[0],
        wattsConversion[1],
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

    it.each([1, 10, 100])('should convert %dTW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terawattsConversion[0],
        milliwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigawattsConversion[0],
        milliwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megawattsConversion[0],
        milliwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilowattsConversion[0],
        milliwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        wattsConversion[0],
        milliwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dµW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microwattsConversion[0],
        milliwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanowattsConversion[0],
        milliwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picowattsConversion[0],
        milliwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfW to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        femtowattsConversion[0],
        milliwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["mW"](conversionCandidate)).toEqual(expected);
      expect(milliwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhp to mW.', v => {
      const milliwattsConversion = linearConversion(0.001);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        horsepowerConversion[0],
        milliwattsConversion[1],
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

    it.each([1, 10, 100])('should convert %dTW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terawattsConversion[0],
        microwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigawattsConversion[0],
        microwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megawattsConversion[0],
        microwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilowattsConversion[0],
        microwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        wattsConversion[0],
        microwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliwattsConversion[0],
        microwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dnW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanowattsConversion[0],
        microwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picowattsConversion[0],
        microwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfW to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        femtowattsConversion[0],
        microwattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["µW"](conversionCandidate)).toEqual(expected);
      expect(microwatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhp to µW.', v => {
      const microwattsConversion = linearConversion(0.000001);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        horsepowerConversion[0],
        microwattsConversion[1],
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

    it.each([1, 10, 100])('should convert %dTW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terawattsConversion[0],
        nanowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigawattsConversion[0],
        nanowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megawattsConversion[0],
        nanowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilowattsConversion[0],
        nanowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        wattsConversion[0],
        nanowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliwattsConversion[0],
        nanowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microwattsConversion[0],
        nanowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dpW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picowattsConversion[0],
        nanowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfW to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        femtowattsConversion[0],
        nanowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["nW"](conversionCandidate)).toEqual(expected);
      expect(nanowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhp to nW.', v => {
      const nanowattsConversion = linearConversion(1e-9);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        horsepowerConversion[0],
        nanowattsConversion[1],
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

    it.each([1, 10, 100])('should convert %dTW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terawattsConversion[0],
        picowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigawattsConversion[0],
        picowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megawattsConversion[0],
        picowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilowattsConversion[0],
        picowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        wattsConversion[0],
        picowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliwattsConversion[0],
        picowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microwattsConversion[0],
        picowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanowattsConversion[0],
        picowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dfW to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        femtowattsConversion[0],
        picowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pW"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["pW"](conversionCandidate)).toEqual(expected);
      expect(picowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhp to pW.', v => {
      const picowattsConversion = linearConversion(1e-12);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        horsepowerConversion[0],
        picowattsConversion[1],
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

    it.each([1, 10, 100])('should convert %dTW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terawattsConversion[0],
        femtowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigawattsConversion[0],
        femtowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megawattsConversion[0],
        femtowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilowattsConversion[0],
        femtowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        wattsConversion[0],
        femtowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliwattsConversion[0],
        femtowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microwattsConversion[0],
        femtowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanowattsConversion[0],
        femtowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpW to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picowattsConversion[0],
        femtowattsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fW"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["fW"](conversionCandidate)).toEqual(expected);
      expect(femtowatts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dhp to fW.', v => {
      const femtowattsConversion = linearConversion(1e-15);
      const horsepowerConversion = linearConversion(745.7);

      const [toBase, fromBase] = [
        horsepowerConversion[0],
        femtowattsConversion[1],
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

    it.each([1, 10, 100])('should convert %dTW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const terawattsConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terawattsConversion[0],
        horsepowerConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "TW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const gigawattsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigawattsConversion[0],
        horsepowerConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "GW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const megawattsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megawattsConversion[0],
        horsepowerConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "MW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const kilowattsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilowattsConversion[0],
        horsepowerConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "kW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const wattsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        wattsConversion[0],
        horsepowerConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "W"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const milliwattsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliwattsConversion[0],
        horsepowerConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "mW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const microwattsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microwattsConversion[0],
        horsepowerConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "µW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const nanowattsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanowattsConversion[0],
        horsepowerConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "nW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const picowattsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picowattsConversion[0],
        horsepowerConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "pW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfW to hp.', v => {
      const horsepowerConversion = linearConversion(745.7);
      const femtowattsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        femtowattsConversion[0],
        horsepowerConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hp"] as const;
      const conversionCandidate = [v, "fW"] as const;

      expect(power["hp"](conversionCandidate)).toEqual(expected);
      expect(horsepower(conversionCandidate)).toEqual(expected);
    });


  });

});
