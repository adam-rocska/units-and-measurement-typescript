import {angle} from "!src/angle/factories";
import {degrees, arcMinutes, arcSeconds, radians, gradians, revolutions} from "!src/angle/factories";
import {linearConversion} from "!src/conversion";

describe("!src/angle/factories aliasing", () => {
  describe('angle["°"]', () => {
    it('should be aliased by "degrees".', () => {
      expect(degrees).toBe(angle["°"]);
    });
  });


  describe('angle["ʹ"]', () => {
    it('should be aliased by "arcMinutes".', () => {
      expect(arcMinutes).toBe(angle["ʹ"]);
    });
  });


  describe('angle["ʺ"]', () => {
    it('should be aliased by "arcSeconds".', () => {
      expect(arcSeconds).toBe(angle["ʺ"]);
    });
  });


  describe('angle["rad"]', () => {
    it('should be aliased by "radians".', () => {
      expect(radians).toBe(angle["rad"]);
    });
  });


  describe('angle["grad"]', () => {
    it('should be aliased by "gradians".', () => {
      expect(gradians).toBe(angle["grad"]);
    });
  });


  describe('angle["rev"]', () => {
    it('should be aliased by "revolutions".', () => {
      expect(revolutions).toBe(angle["rev"]);
    });
  });

});

describe("angle", () => {
  describe('°', () => {
    it.each([1, 10, 100])('should yield a ° measurement when given a number.', v => {
      expect(angle["°"](v)).toEqual([v, "°"]);
      expect(degrees(v)).toEqual([v, "°"]);
    });



    it.each([1, 10, 100])('should convert ʹ to °.', v => {
      const degreesConversion = linearConversion(1);
      const arcMinutesConversion = linearConversion(0.016666666666666666);

      const [toBase, fromBase] = [
        degreesConversion[1],
        arcMinutesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "°"] as const;
      const conversionCandidate = [v, "ʹ"] as const;

      expect(angle["°"](conversionCandidate)).toEqual(expected);
      expect(degrees(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ʺ to °.', v => {
      const degreesConversion = linearConversion(1);
      const arcSecondsConversion = linearConversion(0.0002777777777777778);

      const [toBase, fromBase] = [
        degreesConversion[1],
        arcSecondsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "°"] as const;
      const conversionCandidate = [v, "ʺ"] as const;

      expect(angle["°"](conversionCandidate)).toEqual(expected);
      expect(degrees(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert rad to °.', v => {
      const degreesConversion = linearConversion(1);
      const radiansConversion = linearConversion(57.29577951308232);

      const [toBase, fromBase] = [
        degreesConversion[1],
        radiansConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "°"] as const;
      const conversionCandidate = [v, "rad"] as const;

      expect(angle["°"](conversionCandidate)).toEqual(expected);
      expect(degrees(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert grad to °.', v => {
      const degreesConversion = linearConversion(1);
      const gradiansConversion = linearConversion(0.9);

      const [toBase, fromBase] = [
        degreesConversion[1],
        gradiansConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "°"] as const;
      const conversionCandidate = [v, "grad"] as const;

      expect(angle["°"](conversionCandidate)).toEqual(expected);
      expect(degrees(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert rev to °.', v => {
      const degreesConversion = linearConversion(1);
      const revolutionsConversion = linearConversion(360);

      const [toBase, fromBase] = [
        degreesConversion[1],
        revolutionsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "°"] as const;
      const conversionCandidate = [v, "rev"] as const;

      expect(angle["°"](conversionCandidate)).toEqual(expected);
      expect(degrees(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ʹ', () => {
    it.each([1, 10, 100])('should yield a ʹ measurement when given a number.', v => {
      expect(angle["ʹ"](v)).toEqual([v, "ʹ"]);
      expect(arcMinutes(v)).toEqual([v, "ʹ"]);
    });

    it.each([1, 10, 100])('should convert ° to ʹ.', v => {
      const arcMinutesConversion = linearConversion(0.016666666666666666);
      const degreesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        arcMinutesConversion[1],
        degreesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ʹ"] as const;
      const conversionCandidate = [v, "°"] as const;

      expect(angle["ʹ"](conversionCandidate)).toEqual(expected);
      expect(arcMinutes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert ʺ to ʹ.', v => {
      const arcMinutesConversion = linearConversion(0.016666666666666666);
      const arcSecondsConversion = linearConversion(0.0002777777777777778);

      const [toBase, fromBase] = [
        arcMinutesConversion[1],
        arcSecondsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ʹ"] as const;
      const conversionCandidate = [v, "ʺ"] as const;

      expect(angle["ʹ"](conversionCandidate)).toEqual(expected);
      expect(arcMinutes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert rad to ʹ.', v => {
      const arcMinutesConversion = linearConversion(0.016666666666666666);
      const radiansConversion = linearConversion(57.29577951308232);

      const [toBase, fromBase] = [
        arcMinutesConversion[1],
        radiansConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ʹ"] as const;
      const conversionCandidate = [v, "rad"] as const;

      expect(angle["ʹ"](conversionCandidate)).toEqual(expected);
      expect(arcMinutes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert grad to ʹ.', v => {
      const arcMinutesConversion = linearConversion(0.016666666666666666);
      const gradiansConversion = linearConversion(0.9);

      const [toBase, fromBase] = [
        arcMinutesConversion[1],
        gradiansConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ʹ"] as const;
      const conversionCandidate = [v, "grad"] as const;

      expect(angle["ʹ"](conversionCandidate)).toEqual(expected);
      expect(arcMinutes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert rev to ʹ.', v => {
      const arcMinutesConversion = linearConversion(0.016666666666666666);
      const revolutionsConversion = linearConversion(360);

      const [toBase, fromBase] = [
        arcMinutesConversion[1],
        revolutionsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ʹ"] as const;
      const conversionCandidate = [v, "rev"] as const;

      expect(angle["ʹ"](conversionCandidate)).toEqual(expected);
      expect(arcMinutes(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ʺ', () => {
    it.each([1, 10, 100])('should yield a ʺ measurement when given a number.', v => {
      expect(angle["ʺ"](v)).toEqual([v, "ʺ"]);
      expect(arcSeconds(v)).toEqual([v, "ʺ"]);
    });

    it.each([1, 10, 100])('should convert ° to ʺ.', v => {
      const arcSecondsConversion = linearConversion(0.0002777777777777778);
      const degreesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        arcSecondsConversion[1],
        degreesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ʺ"] as const;
      const conversionCandidate = [v, "°"] as const;

      expect(angle["ʺ"](conversionCandidate)).toEqual(expected);
      expect(arcSeconds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ʹ to ʺ.', v => {
      const arcSecondsConversion = linearConversion(0.0002777777777777778);
      const arcMinutesConversion = linearConversion(0.016666666666666666);

      const [toBase, fromBase] = [
        arcSecondsConversion[1],
        arcMinutesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ʺ"] as const;
      const conversionCandidate = [v, "ʹ"] as const;

      expect(angle["ʺ"](conversionCandidate)).toEqual(expected);
      expect(arcSeconds(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert rad to ʺ.', v => {
      const arcSecondsConversion = linearConversion(0.0002777777777777778);
      const radiansConversion = linearConversion(57.29577951308232);

      const [toBase, fromBase] = [
        arcSecondsConversion[1],
        radiansConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ʺ"] as const;
      const conversionCandidate = [v, "rad"] as const;

      expect(angle["ʺ"](conversionCandidate)).toEqual(expected);
      expect(arcSeconds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert grad to ʺ.', v => {
      const arcSecondsConversion = linearConversion(0.0002777777777777778);
      const gradiansConversion = linearConversion(0.9);

      const [toBase, fromBase] = [
        arcSecondsConversion[1],
        gradiansConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ʺ"] as const;
      const conversionCandidate = [v, "grad"] as const;

      expect(angle["ʺ"](conversionCandidate)).toEqual(expected);
      expect(arcSeconds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert rev to ʺ.', v => {
      const arcSecondsConversion = linearConversion(0.0002777777777777778);
      const revolutionsConversion = linearConversion(360);

      const [toBase, fromBase] = [
        arcSecondsConversion[1],
        revolutionsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ʺ"] as const;
      const conversionCandidate = [v, "rev"] as const;

      expect(angle["ʺ"](conversionCandidate)).toEqual(expected);
      expect(arcSeconds(conversionCandidate)).toEqual(expected);
    });
  });


  describe('rad', () => {
    it.each([1, 10, 100])('should yield a rad measurement when given a number.', v => {
      expect(angle["rad"](v)).toEqual([v, "rad"]);
      expect(radians(v)).toEqual([v, "rad"]);
    });

    it.each([1, 10, 100])('should convert ° to rad.', v => {
      const radiansConversion = linearConversion(57.29577951308232);
      const degreesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        radiansConversion[1],
        degreesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "rad"] as const;
      const conversionCandidate = [v, "°"] as const;

      expect(angle["rad"](conversionCandidate)).toEqual(expected);
      expect(radians(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ʹ to rad.', v => {
      const radiansConversion = linearConversion(57.29577951308232);
      const arcMinutesConversion = linearConversion(0.016666666666666666);

      const [toBase, fromBase] = [
        radiansConversion[1],
        arcMinutesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "rad"] as const;
      const conversionCandidate = [v, "ʹ"] as const;

      expect(angle["rad"](conversionCandidate)).toEqual(expected);
      expect(radians(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ʺ to rad.', v => {
      const radiansConversion = linearConversion(57.29577951308232);
      const arcSecondsConversion = linearConversion(0.0002777777777777778);

      const [toBase, fromBase] = [
        radiansConversion[1],
        arcSecondsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "rad"] as const;
      const conversionCandidate = [v, "ʺ"] as const;

      expect(angle["rad"](conversionCandidate)).toEqual(expected);
      expect(radians(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert grad to rad.', v => {
      const radiansConversion = linearConversion(57.29577951308232);
      const gradiansConversion = linearConversion(0.9);

      const [toBase, fromBase] = [
        radiansConversion[1],
        gradiansConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "rad"] as const;
      const conversionCandidate = [v, "grad"] as const;

      expect(angle["rad"](conversionCandidate)).toEqual(expected);
      expect(radians(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert rev to rad.', v => {
      const radiansConversion = linearConversion(57.29577951308232);
      const revolutionsConversion = linearConversion(360);

      const [toBase, fromBase] = [
        radiansConversion[1],
        revolutionsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "rad"] as const;
      const conversionCandidate = [v, "rev"] as const;

      expect(angle["rad"](conversionCandidate)).toEqual(expected);
      expect(radians(conversionCandidate)).toEqual(expected);
    });
  });


  describe('grad', () => {
    it.each([1, 10, 100])('should yield a grad measurement when given a number.', v => {
      expect(angle["grad"](v)).toEqual([v, "grad"]);
      expect(gradians(v)).toEqual([v, "grad"]);
    });

    it.each([1, 10, 100])('should convert ° to grad.', v => {
      const gradiansConversion = linearConversion(0.9);
      const degreesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        gradiansConversion[1],
        degreesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "grad"] as const;
      const conversionCandidate = [v, "°"] as const;

      expect(angle["grad"](conversionCandidate)).toEqual(expected);
      expect(gradians(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ʹ to grad.', v => {
      const gradiansConversion = linearConversion(0.9);
      const arcMinutesConversion = linearConversion(0.016666666666666666);

      const [toBase, fromBase] = [
        gradiansConversion[1],
        arcMinutesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "grad"] as const;
      const conversionCandidate = [v, "ʹ"] as const;

      expect(angle["grad"](conversionCandidate)).toEqual(expected);
      expect(gradians(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ʺ to grad.', v => {
      const gradiansConversion = linearConversion(0.9);
      const arcSecondsConversion = linearConversion(0.0002777777777777778);

      const [toBase, fromBase] = [
        gradiansConversion[1],
        arcSecondsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "grad"] as const;
      const conversionCandidate = [v, "ʺ"] as const;

      expect(angle["grad"](conversionCandidate)).toEqual(expected);
      expect(gradians(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert rad to grad.', v => {
      const gradiansConversion = linearConversion(0.9);
      const radiansConversion = linearConversion(57.29577951308232);

      const [toBase, fromBase] = [
        gradiansConversion[1],
        radiansConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "grad"] as const;
      const conversionCandidate = [v, "rad"] as const;

      expect(angle["grad"](conversionCandidate)).toEqual(expected);
      expect(gradians(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert rev to grad.', v => {
      const gradiansConversion = linearConversion(0.9);
      const revolutionsConversion = linearConversion(360);

      const [toBase, fromBase] = [
        gradiansConversion[1],
        revolutionsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "grad"] as const;
      const conversionCandidate = [v, "rev"] as const;

      expect(angle["grad"](conversionCandidate)).toEqual(expected);
      expect(gradians(conversionCandidate)).toEqual(expected);
    });
  });


  describe('rev', () => {
    it.each([1, 10, 100])('should yield a rev measurement when given a number.', v => {
      expect(angle["rev"](v)).toEqual([v, "rev"]);
      expect(revolutions(v)).toEqual([v, "rev"]);
    });

    it.each([1, 10, 100])('should convert ° to rev.', v => {
      const revolutionsConversion = linearConversion(360);
      const degreesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        revolutionsConversion[1],
        degreesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "rev"] as const;
      const conversionCandidate = [v, "°"] as const;

      expect(angle["rev"](conversionCandidate)).toEqual(expected);
      expect(revolutions(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ʹ to rev.', v => {
      const revolutionsConversion = linearConversion(360);
      const arcMinutesConversion = linearConversion(0.016666666666666666);

      const [toBase, fromBase] = [
        revolutionsConversion[1],
        arcMinutesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "rev"] as const;
      const conversionCandidate = [v, "ʹ"] as const;

      expect(angle["rev"](conversionCandidate)).toEqual(expected);
      expect(revolutions(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ʺ to rev.', v => {
      const revolutionsConversion = linearConversion(360);
      const arcSecondsConversion = linearConversion(0.0002777777777777778);

      const [toBase, fromBase] = [
        revolutionsConversion[1],
        arcSecondsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "rev"] as const;
      const conversionCandidate = [v, "ʺ"] as const;

      expect(angle["rev"](conversionCandidate)).toEqual(expected);
      expect(revolutions(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert rad to rev.', v => {
      const revolutionsConversion = linearConversion(360);
      const radiansConversion = linearConversion(57.29577951308232);

      const [toBase, fromBase] = [
        revolutionsConversion[1],
        radiansConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "rev"] as const;
      const conversionCandidate = [v, "rad"] as const;

      expect(angle["rev"](conversionCandidate)).toEqual(expected);
      expect(revolutions(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert grad to rev.', v => {
      const revolutionsConversion = linearConversion(360);
      const gradiansConversion = linearConversion(0.9);

      const [toBase, fromBase] = [
        revolutionsConversion[1],
        gradiansConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "rev"] as const;
      const conversionCandidate = [v, "grad"] as const;

      expect(angle["rev"](conversionCandidate)).toEqual(expected);
      expect(revolutions(conversionCandidate)).toEqual(expected);
    });


  });

});
