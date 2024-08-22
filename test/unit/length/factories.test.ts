import {length} from "!src/length/factories";
import {megameters, kilometers, hectometers, decameters, meters, decimeters, centimeters, millimeters, micrometers, nanometers, picometers, twips, points, picas, inches, feet, yards, miles, scandinavianMiles, lightyears, nauticalMiles, fathoms, furlongs, astronomicalUnits, parsecs} from "!src/length/factories";
import {linearConversion} from "!src/conversion";

describe("!src/length/factories aliasing", () => {
  describe('length["Mm"]', () => {
    it('should be aliased by "megameters".', () => {
      expect(megameters).toBe(length["Mm"]);
    });
  });


  describe('length["kM"]', () => {
    it('should be aliased by "kilometers".', () => {
      expect(kilometers).toBe(length["kM"]);
    });
  });


  describe('length["hm"]', () => {
    it('should be aliased by "hectometers".', () => {
      expect(hectometers).toBe(length["hm"]);
    });
  });


  describe('length["dam"]', () => {
    it('should be aliased by "decameters".', () => {
      expect(decameters).toBe(length["dam"]);
    });
  });


  describe('length["m"]', () => {
    it('should be aliased by "meters".', () => {
      expect(meters).toBe(length["m"]);
    });
  });


  describe('length["dm"]', () => {
    it('should be aliased by "decimeters".', () => {
      expect(decimeters).toBe(length["dm"]);
    });
  });


  describe('length["cm"]', () => {
    it('should be aliased by "centimeters".', () => {
      expect(centimeters).toBe(length["cm"]);
    });
  });


  describe('length["mm"]', () => {
    it('should be aliased by "millimeters".', () => {
      expect(millimeters).toBe(length["mm"]);
    });
  });


  describe('length["µm"]', () => {
    it('should be aliased by "micrometers".', () => {
      expect(micrometers).toBe(length["µm"]);
    });
  });


  describe('length["nm"]', () => {
    it('should be aliased by "nanometers".', () => {
      expect(nanometers).toBe(length["nm"]);
    });
  });


  describe('length["pm"]', () => {
    it('should be aliased by "picometers".', () => {
      expect(picometers).toBe(length["pm"]);
    });
  });


  describe('length["tw"]', () => {
    it('should be aliased by "twips".', () => {
      expect(twips).toBe(length["tw"]);
    });
  });


  describe('length["pt"]', () => {
    it('should be aliased by "points".', () => {
      expect(points).toBe(length["pt"]);
    });
  });


  describe('length["P"]', () => {
    it('should be aliased by "picas".', () => {
      expect(picas).toBe(length["P"]);
    });
  });


  describe('length["in"]', () => {
    it('should be aliased by "inches".', () => {
      expect(inches).toBe(length["in"]);
    });
  });


  describe('length["ft"]', () => {
    it('should be aliased by "feet".', () => {
      expect(feet).toBe(length["ft"]);
    });
  });


  describe('length["yd"]', () => {
    it('should be aliased by "yards".', () => {
      expect(yards).toBe(length["yd"]);
    });
  });


  describe('length["mi"]', () => {
    it('should be aliased by "miles".', () => {
      expect(miles).toBe(length["mi"]);
    });
  });


  describe('length["smi"]', () => {
    it('should be aliased by "scandinavianMiles".', () => {
      expect(scandinavianMiles).toBe(length["smi"]);
    });
  });


  describe('length["ly"]', () => {
    it('should be aliased by "lightyears".', () => {
      expect(lightyears).toBe(length["ly"]);
    });
  });


  describe('length["NM"]', () => {
    it('should be aliased by "nauticalMiles".', () => {
      expect(nauticalMiles).toBe(length["NM"]);
    });
  });


  describe('length["ftm"]', () => {
    it('should be aliased by "fathoms".', () => {
      expect(fathoms).toBe(length["ftm"]);
    });
  });


  describe('length["fur"]', () => {
    it('should be aliased by "furlongs".', () => {
      expect(furlongs).toBe(length["fur"]);
    });
  });


  describe('length["ua"]', () => {
    it('should be aliased by "astronomicalUnits".', () => {
      expect(astronomicalUnits).toBe(length["ua"]);
    });
  });


  describe('length["pc"]', () => {
    it('should be aliased by "parsecs".', () => {
      expect(parsecs).toBe(length["pc"]);
    });
  });

});

describe("length", () => {
});
