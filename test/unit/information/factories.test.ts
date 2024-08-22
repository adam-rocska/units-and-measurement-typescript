import {information} from "!src/information/factories";
import {bits, bytes, kilobits, megabits, gigabits, terabits, petabits, exabits, zettabits, yottabits, kibibits, kilobytes, mebibits, megabytes, gibibits, gigabytes, tebibits, terabytes, pebibits, petabytes, exbibits, exabytes, zebibits, zettabytes, yobibits, yottabytes} from "!src/information/factories";
import {linearConversion} from "!src/conversion";

describe("!src/information/factories aliasing", () => {
  describe('information["b"]', () => {
    it('should be aliased by "bits".', () => {
      expect(bits).toBe(information["b"]);
    });
  });


  describe('information["B"]', () => {
    it('should be aliased by "bytes".', () => {
      expect(bytes).toBe(information["B"]);
    });
  });


  describe('information["kb"]', () => {
    it('should be aliased by "kilobits".', () => {
      expect(kilobits).toBe(information["kb"]);
    });
  });


  describe('information["Mb"]', () => {
    it('should be aliased by "megabits".', () => {
      expect(megabits).toBe(information["Mb"]);
    });
  });


  describe('information["Gb"]', () => {
    it('should be aliased by "gigabits".', () => {
      expect(gigabits).toBe(information["Gb"]);
    });
  });


  describe('information["Tb"]', () => {
    it('should be aliased by "terabits".', () => {
      expect(terabits).toBe(information["Tb"]);
    });
  });


  describe('information["Pb"]', () => {
    it('should be aliased by "petabits".', () => {
      expect(petabits).toBe(information["Pb"]);
    });
  });


  describe('information["Eb"]', () => {
    it('should be aliased by "exabits".', () => {
      expect(exabits).toBe(information["Eb"]);
    });
  });


  describe('information["Zb"]', () => {
    it('should be aliased by "zettabits".', () => {
      expect(zettabits).toBe(information["Zb"]);
    });
  });


  describe('information["Yb"]', () => {
    it('should be aliased by "yottabits".', () => {
      expect(yottabits).toBe(information["Yb"]);
    });
  });


  describe('information["Kib"]', () => {
    it('should be aliased by "kibibits".', () => {
      expect(kibibits).toBe(information["Kib"]);
    });
  });


  describe('information["KB"]', () => {
    it('should be aliased by "kilobytes".', () => {
      expect(kilobytes).toBe(information["KB"]);
    });
  });


  describe('information["Mib"]', () => {
    it('should be aliased by "mebibits".', () => {
      expect(mebibits).toBe(information["Mib"]);
    });
  });


  describe('information["MB"]', () => {
    it('should be aliased by "megabytes".', () => {
      expect(megabytes).toBe(information["MB"]);
    });
  });


  describe('information["Gib"]', () => {
    it('should be aliased by "gibibits".', () => {
      expect(gibibits).toBe(information["Gib"]);
    });
  });


  describe('information["GB"]', () => {
    it('should be aliased by "gigabytes".', () => {
      expect(gigabytes).toBe(information["GB"]);
    });
  });


  describe('information["Tib"]', () => {
    it('should be aliased by "tebibits".', () => {
      expect(tebibits).toBe(information["Tib"]);
    });
  });


  describe('information["TB"]', () => {
    it('should be aliased by "terabytes".', () => {
      expect(terabytes).toBe(information["TB"]);
    });
  });


  describe('information["Pib"]', () => {
    it('should be aliased by "pebibits".', () => {
      expect(pebibits).toBe(information["Pib"]);
    });
  });


  describe('information["PB"]', () => {
    it('should be aliased by "petabytes".', () => {
      expect(petabytes).toBe(information["PB"]);
    });
  });


  describe('information["Eib"]', () => {
    it('should be aliased by "exbibits".', () => {
      expect(exbibits).toBe(information["Eib"]);
    });
  });


  describe('information["EB"]', () => {
    it('should be aliased by "exabytes".', () => {
      expect(exabytes).toBe(information["EB"]);
    });
  });


  describe('information["Zib"]', () => {
    it('should be aliased by "zebibits".', () => {
      expect(zebibits).toBe(information["Zib"]);
    });
  });


  describe('information["ZB"]', () => {
    it('should be aliased by "zettabytes".', () => {
      expect(zettabytes).toBe(information["ZB"]);
    });
  });


  describe('information["Yib"]', () => {
    it('should be aliased by "yobibits".', () => {
      expect(yobibits).toBe(information["Yib"]);
    });
  });


  describe('information["YB"]', () => {
    it('should be aliased by "yottabytes".', () => {
      expect(yottabytes).toBe(information["YB"]);
    });
  });

});

describe("information", () => {
});
