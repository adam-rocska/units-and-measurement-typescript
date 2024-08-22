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
  describe('b', () => {
    it.each([1, 10, 100])('should yield a b measurement when given a number.', v => {
      expect(information["b"](v)).toEqual([v, "b"]);
      expect(bits(v)).toEqual([v, "b"]);
    });



    it.each([1, 10, 100])('should convert B to b.', v => {
      const bitsConversion = linearConversion(1);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to b.', v => {
      const bitsConversion = linearConversion(1);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to b.', v => {
      const bitsConversion = linearConversion(1);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to b.', v => {
      const bitsConversion = linearConversion(1);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to b.', v => {
      const bitsConversion = linearConversion(1);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to b.', v => {
      const bitsConversion = linearConversion(1);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to b.', v => {
      const bitsConversion = linearConversion(1);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to b.', v => {
      const bitsConversion = linearConversion(1);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to b.', v => {
      const bitsConversion = linearConversion(1);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to b.', v => {
      const bitsConversion = linearConversion(1);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        bitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to b.', v => {
      const bitsConversion = linearConversion(1);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        bitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to b.', v => {
      const bitsConversion = linearConversion(1);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        bitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to b.', v => {
      const bitsConversion = linearConversion(1);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        bitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to b.', v => {
      const bitsConversion = linearConversion(1);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to b.', v => {
      const bitsConversion = linearConversion(1);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to b.', v => {
      const bitsConversion = linearConversion(1);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to b.', v => {
      const bitsConversion = linearConversion(1);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to b.', v => {
      const bitsConversion = linearConversion(1);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to b.', v => {
      const bitsConversion = linearConversion(1);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to b.', v => {
      const bitsConversion = linearConversion(1);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to b.', v => {
      const bitsConversion = linearConversion(1);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to b.', v => {
      const bitsConversion = linearConversion(1);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to b.', v => {
      const bitsConversion = linearConversion(1);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to b.', v => {
      const bitsConversion = linearConversion(1);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to b.', v => {
      const bitsConversion = linearConversion(1);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        bitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('B', () => {
    it.each([1, 10, 100])('should yield a B measurement when given a number.', v => {
      expect(information["B"](v)).toEqual([v, "B"]);
      expect(bytes(v)).toEqual([v, "B"]);
    });

    it.each([1, 10, 100])('should convert b to B.', v => {
      const bytesConversion = linearConversion(8);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bytesConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert kb to B.', v => {
      const bytesConversion = linearConversion(8);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to B.', v => {
      const bytesConversion = linearConversion(8);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to B.', v => {
      const bytesConversion = linearConversion(8);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to B.', v => {
      const bytesConversion = linearConversion(8);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to B.', v => {
      const bytesConversion = linearConversion(8);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to B.', v => {
      const bytesConversion = linearConversion(8);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to B.', v => {
      const bytesConversion = linearConversion(8);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to B.', v => {
      const bytesConversion = linearConversion(8);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to B.', v => {
      const bytesConversion = linearConversion(8);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        bytesConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to B.', v => {
      const bytesConversion = linearConversion(8);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        bytesConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to B.', v => {
      const bytesConversion = linearConversion(8);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        bytesConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to B.', v => {
      const bytesConversion = linearConversion(8);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        bytesConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to B.', v => {
      const bytesConversion = linearConversion(8);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to B.', v => {
      const bytesConversion = linearConversion(8);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to B.', v => {
      const bytesConversion = linearConversion(8);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to B.', v => {
      const bytesConversion = linearConversion(8);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to B.', v => {
      const bytesConversion = linearConversion(8);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to B.', v => {
      const bytesConversion = linearConversion(8);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to B.', v => {
      const bytesConversion = linearConversion(8);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to B.', v => {
      const bytesConversion = linearConversion(8);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to B.', v => {
      const bytesConversion = linearConversion(8);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to B.', v => {
      const bytesConversion = linearConversion(8);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to B.', v => {
      const bytesConversion = linearConversion(8);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to B.', v => {
      const bytesConversion = linearConversion(8);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        bytesConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });
  });


  describe('kb', () => {
    it.each([1, 10, 100])('should yield a kb measurement when given a number.', v => {
      expect(information["kb"](v)).toEqual([v, "kb"]);
      expect(kilobits(v)).toEqual([v, "kb"]);
    });

    it.each([1, 10, 100])('should convert b to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Mb to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        kilobitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Mb', () => {
    it.each([1, 10, 100])('should yield a Mb measurement when given a number.', v => {
      expect(information["Mb"](v)).toEqual([v, "Mb"]);
      expect(megabits(v)).toEqual([v, "Mb"]);
    });

    it.each([1, 10, 100])('should convert b to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Gb to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        megabitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Gb', () => {
    it.each([1, 10, 100])('should yield a Gb measurement when given a number.', v => {
      expect(information["Gb"](v)).toEqual([v, "Gb"]);
      expect(gigabits(v)).toEqual([v, "Gb"]);
    });

    it.each([1, 10, 100])('should convert b to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Tb to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        gigabitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Tb', () => {
    it.each([1, 10, 100])('should yield a Tb measurement when given a number.', v => {
      expect(information["Tb"](v)).toEqual([v, "Tb"]);
      expect(terabits(v)).toEqual([v, "Tb"]);
    });

    it.each([1, 10, 100])('should convert b to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Pb to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        terabitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Pb', () => {
    it.each([1, 10, 100])('should yield a Pb measurement when given a number.', v => {
      expect(information["Pb"](v)).toEqual([v, "Pb"]);
      expect(petabits(v)).toEqual([v, "Pb"]);
    });

    it.each([1, 10, 100])('should convert b to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Eb to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        petabitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Eb', () => {
    it.each([1, 10, 100])('should yield a Eb measurement when given a number.', v => {
      expect(information["Eb"](v)).toEqual([v, "Eb"]);
      expect(exabits(v)).toEqual([v, "Eb"]);
    });

    it.each([1, 10, 100])('should convert b to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Zb to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        exabitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Zb', () => {
    it.each([1, 10, 100])('should yield a Zb measurement when given a number.', v => {
      expect(information["Zb"](v)).toEqual([v, "Zb"]);
      expect(zettabits(v)).toEqual([v, "Zb"]);
    });

    it.each([1, 10, 100])('should convert b to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Yb to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        zettabitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Yb', () => {
    it.each([1, 10, 100])('should yield a Yb measurement when given a number.', v => {
      expect(information["Yb"](v)).toEqual([v, "Yb"]);
      expect(yottabits(v)).toEqual([v, "Yb"]);
    });

    it.each([1, 10, 100])('should convert b to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Kib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Kib', () => {
    it.each([1, 10, 100])('should yield a Kib measurement when given a number.', v => {
      expect(information["Kib"](v)).toEqual([v, "Kib"]);
      expect(kibibits(v)).toEqual([v, "Kib"]);
    });

    it.each([1, 10, 100])('should convert b to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert KB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        kibibitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('KB', () => {
    it.each([1, 10, 100])('should yield a KB measurement when given a number.', v => {
      expect(information["KB"](v)).toEqual([v, "KB"]);
      expect(kilobytes(v)).toEqual([v, "KB"]);
    });

    it.each([1, 10, 100])('should convert b to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Mib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        kilobytesConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Mib', () => {
    it.each([1, 10, 100])('should yield a Mib measurement when given a number.', v => {
      expect(information["Mib"](v)).toEqual([v, "Mib"]);
      expect(mebibits(v)).toEqual([v, "Mib"]);
    });

    it.each([1, 10, 100])('should convert b to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert MB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        mebibitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('MB', () => {
    it.each([1, 10, 100])('should yield a MB measurement when given a number.', v => {
      expect(information["MB"](v)).toEqual([v, "MB"]);
      expect(megabytes(v)).toEqual([v, "MB"]);
    });

    it.each([1, 10, 100])('should convert b to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Gib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        megabytesConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Gib', () => {
    it.each([1, 10, 100])('should yield a Gib measurement when given a number.', v => {
      expect(information["Gib"](v)).toEqual([v, "Gib"]);
      expect(gibibits(v)).toEqual([v, "Gib"]);
    });

    it.each([1, 10, 100])('should convert b to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert GB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        gibibitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('GB', () => {
    it.each([1, 10, 100])('should yield a GB measurement when given a number.', v => {
      expect(information["GB"](v)).toEqual([v, "GB"]);
      expect(gigabytes(v)).toEqual([v, "GB"]);
    });

    it.each([1, 10, 100])('should convert b to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Tib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        gigabytesConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Tib', () => {
    it.each([1, 10, 100])('should yield a Tib measurement when given a number.', v => {
      expect(information["Tib"](v)).toEqual([v, "Tib"]);
      expect(tebibits(v)).toEqual([v, "Tib"]);
    });

    it.each([1, 10, 100])('should convert b to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert TB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        tebibitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('TB', () => {
    it.each([1, 10, 100])('should yield a TB measurement when given a number.', v => {
      expect(information["TB"](v)).toEqual([v, "TB"]);
      expect(terabytes(v)).toEqual([v, "TB"]);
    });

    it.each([1, 10, 100])('should convert b to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Pib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        terabytesConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Pib', () => {
    it.each([1, 10, 100])('should yield a Pib measurement when given a number.', v => {
      expect(information["Pib"](v)).toEqual([v, "Pib"]);
      expect(pebibits(v)).toEqual([v, "Pib"]);
    });

    it.each([1, 10, 100])('should convert b to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert PB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        pebibitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('PB', () => {
    it.each([1, 10, 100])('should yield a PB measurement when given a number.', v => {
      expect(information["PB"](v)).toEqual([v, "PB"]);
      expect(petabytes(v)).toEqual([v, "PB"]);
    });

    it.each([1, 10, 100])('should convert b to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Eib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        petabytesConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Eib', () => {
    it.each([1, 10, 100])('should yield a Eib measurement when given a number.', v => {
      expect(information["Eib"](v)).toEqual([v, "Eib"]);
      expect(exbibits(v)).toEqual([v, "Eib"]);
    });

    it.each([1, 10, 100])('should convert b to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert EB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        exbibitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('EB', () => {
    it.each([1, 10, 100])('should yield a EB measurement when given a number.', v => {
      expect(information["EB"](v)).toEqual([v, "EB"]);
      expect(exabytes(v)).toEqual([v, "EB"]);
    });

    it.each([1, 10, 100])('should convert b to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Zib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        exabytesConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Zib', () => {
    it.each([1, 10, 100])('should yield a Zib measurement when given a number.', v => {
      expect(information["Zib"](v)).toEqual([v, "Zib"]);
      expect(zebibits(v)).toEqual([v, "Zib"]);
    });

    it.each([1, 10, 100])('should convert b to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert ZB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        zebibitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ZB', () => {
    it.each([1, 10, 100])('should yield a ZB measurement when given a number.', v => {
      expect(information["ZB"](v)).toEqual([v, "ZB"]);
      expect(zettabytes(v)).toEqual([v, "ZB"]);
    });

    it.each([1, 10, 100])('should convert b to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Yib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert YB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        zettabytesConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Yib', () => {
    it.each([1, 10, 100])('should yield a Yib measurement when given a number.', v => {
      expect(information["Yib"](v)).toEqual([v, "Yib"]);
      expect(yobibits(v)).toEqual([v, "Yib"]);
    });

    it.each([1, 10, 100])('should convert b to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert YB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yobibitsConversion[1],
        yottabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "YB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('YB', () => {
    it.each([1, 10, 100])('should yield a YB measurement when given a number.', v => {
      expect(information["YB"](v)).toEqual([v, "YB"]);
      expect(yottabytes(v)).toEqual([v, "YB"]);
    });

    it.each([1, 10, 100])('should convert b to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        bitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert B to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        bytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        kilobitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        megabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        gigabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        terabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        petabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        exabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        zettabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        yottabitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Kib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        kibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert KB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        kilobytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Mib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        mebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        megabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Gib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        gibibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        gigabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Tib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        tebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert TB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        terabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Pib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        pebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert PB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        petabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Eib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        exbibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert EB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        exabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Zib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        zebibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ZB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        zettabytesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Yib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yottabytesConversion[1],
        yobibitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });


  });

});
