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



    it.each([1, 10, 100])('should convert %dB to b.', v => {
      const bitsConversion = linearConversion(1);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to b.', v => {
      const bitsConversion = linearConversion(1);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to b.', v => {
      const bitsConversion = linearConversion(1);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to b.', v => {
      const bitsConversion = linearConversion(1);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to b.', v => {
      const bitsConversion = linearConversion(1);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to b.', v => {
      const bitsConversion = linearConversion(1);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to b.', v => {
      const bitsConversion = linearConversion(1);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to b.', v => {
      const bitsConversion = linearConversion(1);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to b.', v => {
      const bitsConversion = linearConversion(1);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to b.', v => {
      const bitsConversion = linearConversion(1);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to b.', v => {
      const bitsConversion = linearConversion(1);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to b.', v => {
      const bitsConversion = linearConversion(1);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to b.', v => {
      const bitsConversion = linearConversion(1);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to b.', v => {
      const bitsConversion = linearConversion(1);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to b.', v => {
      const bitsConversion = linearConversion(1);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to b.', v => {
      const bitsConversion = linearConversion(1);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to b.', v => {
      const bitsConversion = linearConversion(1);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to b.', v => {
      const bitsConversion = linearConversion(1);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to b.', v => {
      const bitsConversion = linearConversion(1);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to b.', v => {
      const bitsConversion = linearConversion(1);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to b.', v => {
      const bitsConversion = linearConversion(1);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to b.', v => {
      const bitsConversion = linearConversion(1);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to b.', v => {
      const bitsConversion = linearConversion(1);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to b.', v => {
      const bitsConversion = linearConversion(1);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        bitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "b"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["b"](conversionCandidate)).toEqual(expected);
      expect(bits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to b.', v => {
      const bitsConversion = linearConversion(1);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        bitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to B.', v => {
      const bytesConversion = linearConversion(8);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dkb to B.', v => {
      const bytesConversion = linearConversion(8);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to B.', v => {
      const bytesConversion = linearConversion(8);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to B.', v => {
      const bytesConversion = linearConversion(8);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to B.', v => {
      const bytesConversion = linearConversion(8);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to B.', v => {
      const bytesConversion = linearConversion(8);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to B.', v => {
      const bytesConversion = linearConversion(8);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to B.', v => {
      const bytesConversion = linearConversion(8);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to B.', v => {
      const bytesConversion = linearConversion(8);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to B.', v => {
      const bytesConversion = linearConversion(8);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to B.', v => {
      const bytesConversion = linearConversion(8);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to B.', v => {
      const bytesConversion = linearConversion(8);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to B.', v => {
      const bytesConversion = linearConversion(8);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to B.', v => {
      const bytesConversion = linearConversion(8);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to B.', v => {
      const bytesConversion = linearConversion(8);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to B.', v => {
      const bytesConversion = linearConversion(8);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to B.', v => {
      const bytesConversion = linearConversion(8);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to B.', v => {
      const bytesConversion = linearConversion(8);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to B.', v => {
      const bytesConversion = linearConversion(8);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to B.', v => {
      const bytesConversion = linearConversion(8);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to B.', v => {
      const bytesConversion = linearConversion(8);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to B.', v => {
      const bytesConversion = linearConversion(8);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to B.', v => {
      const bytesConversion = linearConversion(8);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to B.', v => {
      const bytesConversion = linearConversion(8);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        bytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "B"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["B"](conversionCandidate)).toEqual(expected);
      expect(bytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to B.', v => {
      const bytesConversion = linearConversion(8);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        bytesConversion[1],
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

    it.each([1, 10, 100])('should convert %db to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dMb to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        kilobitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["kb"](conversionCandidate)).toEqual(expected);
      expect(kilobits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to kb.', v => {
      const kilobitsConversion = linearConversion(1000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        kilobitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dGb to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        megabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Mb"](conversionCandidate)).toEqual(expected);
      expect(megabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to Mb.', v => {
      const megabitsConversion = linearConversion(100000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        megabitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dTb to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        gigabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Gb"](conversionCandidate)).toEqual(expected);
      expect(gigabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to Gb.', v => {
      const gigabitsConversion = linearConversion(1000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        gigabitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dPb to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        terabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Tb"](conversionCandidate)).toEqual(expected);
      expect(terabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to Tb.', v => {
      const terabitsConversion = linearConversion(10000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        terabitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dEb to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        petabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Pb"](conversionCandidate)).toEqual(expected);
      expect(petabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to Pb.', v => {
      const petabitsConversion = linearConversion(100000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        petabitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dZb to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        exabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Eb"](conversionCandidate)).toEqual(expected);
      expect(exabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to Eb.', v => {
      const exabitsConversion = linearConversion(1000000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        exabitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dYb to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        zettabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Zb"](conversionCandidate)).toEqual(expected);
      expect(zettabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to Zb.', v => {
      const zettabitsConversion = linearConversion(10000000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        zettabitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dKib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        yottabitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yb"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Yb"](conversionCandidate)).toEqual(expected);
      expect(yottabits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to Yb.', v => {
      const yottabitsConversion = linearConversion(100000000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        yottabitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dKB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        kibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Kib"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Kib"](conversionCandidate)).toEqual(expected);
      expect(kibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to Kib.', v => {
      const kibibitsConversion = linearConversion(1024);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        kibibitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dMib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        kilobytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "KB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["KB"](conversionCandidate)).toEqual(expected);
      expect(kilobytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to KB.', v => {
      const kilobytesConversion = linearConversion(8192);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        kilobytesConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dMB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        mebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mib"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Mib"](conversionCandidate)).toEqual(expected);
      expect(mebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to Mib.', v => {
      const mebibitsConversion = linearConversion(102400);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        mebibitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dGib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        megabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["MB"](conversionCandidate)).toEqual(expected);
      expect(megabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to MB.', v => {
      const megabytesConversion = linearConversion(819200);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        megabytesConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dGB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        gibibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Gib"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Gib"](conversionCandidate)).toEqual(expected);
      expect(gibibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to Gib.', v => {
      const gibibitsConversion = linearConversion(1024000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        gibibitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dTib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        gigabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["GB"](conversionCandidate)).toEqual(expected);
      expect(gigabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to GB.', v => {
      const gigabytesConversion = linearConversion(8192000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        gigabytesConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dTB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        tebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Tib"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Tib"](conversionCandidate)).toEqual(expected);
      expect(tebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to Tib.', v => {
      const tebibitsConversion = linearConversion(10240000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        tebibitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dPib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        terabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "TB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["TB"](conversionCandidate)).toEqual(expected);
      expect(terabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to TB.', v => {
      const terabytesConversion = linearConversion(81920000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        terabytesConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dPB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        pebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Pib"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Pib"](conversionCandidate)).toEqual(expected);
      expect(pebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to Pib.', v => {
      const pebibitsConversion = linearConversion(102400000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        pebibitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dEib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        petabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "PB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["PB"](conversionCandidate)).toEqual(expected);
      expect(petabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to PB.', v => {
      const petabytesConversion = linearConversion(819200000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        petabytesConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dEB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        exbibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Eib"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Eib"](conversionCandidate)).toEqual(expected);
      expect(exbibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to Eib.', v => {
      const exbibitsConversion = linearConversion(1024000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        exbibitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dZib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        exabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "EB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["EB"](conversionCandidate)).toEqual(expected);
      expect(exabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to EB.', v => {
      const exabytesConversion = linearConversion(8192000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        exabytesConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dZB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        zebibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Zib"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["Zib"](conversionCandidate)).toEqual(expected);
      expect(zebibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to Zib.', v => {
      const zebibitsConversion = linearConversion(10240000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        zebibitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dYib to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        zettabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ZB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["ZB"](conversionCandidate)).toEqual(expected);
      expect(zettabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYB to ZB.', v => {
      const zettabytesConversion = linearConversion(81920000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        zettabytesConversion[1],
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

    it.each([1, 10, 100])('should convert %db to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        yobibitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Yib"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["Yib"](conversionCandidate)).toEqual(expected);
      expect(yobibits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dYB to Yib.', v => {
      const yobibitsConversion = linearConversion(102400000000);
      const yottabytesConversion = linearConversion(819200000000);

      const [toBase, fromBase] = [
        yottabytesConversion[0],
        yobibitsConversion[1],
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

    it.each([1, 10, 100])('should convert %db to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const bitsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        bitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "b"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const bytesConversion = linearConversion(8);

      const [toBase, fromBase] = [
        bytesConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "B"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const kilobitsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilobitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "kb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const megabitsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        megabitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Mb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const gigabitsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigabitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Gb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const terabitsConversion = linearConversion(10000000);

      const [toBase, fromBase] = [
        terabitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Tb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const petabitsConversion = linearConversion(100000000);

      const [toBase, fromBase] = [
        petabitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Pb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const exabitsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        exabitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Eb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const zettabitsConversion = linearConversion(10000000000);

      const [toBase, fromBase] = [
        zettabitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Zb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYb to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const yottabitsConversion = linearConversion(100000000000);

      const [toBase, fromBase] = [
        yottabitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Yb"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const kibibitsConversion = linearConversion(1024);

      const [toBase, fromBase] = [
        kibibitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Kib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dKB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const kilobytesConversion = linearConversion(8192);

      const [toBase, fromBase] = [
        kilobytesConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "KB"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const mebibitsConversion = linearConversion(102400);

      const [toBase, fromBase] = [
        mebibitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Mib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const megabytesConversion = linearConversion(819200);

      const [toBase, fromBase] = [
        megabytesConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "MB"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const gibibitsConversion = linearConversion(1024000);

      const [toBase, fromBase] = [
        gibibitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Gib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const gigabytesConversion = linearConversion(8192000);

      const [toBase, fromBase] = [
        gigabytesConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "GB"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const tebibitsConversion = linearConversion(10240000);

      const [toBase, fromBase] = [
        tebibitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Tib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dTB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const terabytesConversion = linearConversion(81920000);

      const [toBase, fromBase] = [
        terabytesConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "TB"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const pebibitsConversion = linearConversion(102400000);

      const [toBase, fromBase] = [
        pebibitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Pib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dPB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const petabytesConversion = linearConversion(819200000);

      const [toBase, fromBase] = [
        petabytesConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "PB"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const exbibitsConversion = linearConversion(1024000000);

      const [toBase, fromBase] = [
        exbibitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Eib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dEB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const exabytesConversion = linearConversion(8192000000);

      const [toBase, fromBase] = [
        exabytesConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "EB"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const zebibitsConversion = linearConversion(10240000000);

      const [toBase, fromBase] = [
        zebibitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Zib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dZB to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const zettabytesConversion = linearConversion(81920000000);

      const [toBase, fromBase] = [
        zettabytesConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "ZB"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dYib to YB.', v => {
      const yottabytesConversion = linearConversion(819200000000);
      const yobibitsConversion = linearConversion(102400000000);

      const [toBase, fromBase] = [
        yobibitsConversion[0],
        yottabytesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "YB"] as const;
      const conversionCandidate = [v, "Yib"] as const;

      expect(information["YB"](conversionCandidate)).toEqual(expected);
      expect(yottabytes(conversionCandidate)).toEqual(expected);
    });


  });

});
