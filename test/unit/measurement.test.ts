import {Measurement, MeasurementObject, MeasurementString, MeasurementTuple} from "!src/measurement";

describe("MeasurementTuple", () => {
  describe("given a tuple", () => {
    const tuple: Measurement<"m", 1> = [1, "m"];

    it("should return a tuple equaling the given tuple.", () => {
      expect(MeasurementTuple(tuple)).toEqual(tuple);
    });

    it("shouldn't return the same instance.", () => {
      expect(MeasurementTuple(tuple)).not.toBe(tuple);
    });
  });

  describe("given a string", () => {
    const string: Measurement<"m", 1> = "1m";

    it("should return a tuple equaling the measurement represented by the string.", () => {
      expect(MeasurementTuple(string)).toEqual([1, "m"]);
    });
  });

  describe("given an object", () => {
    const object: Measurement<"m", 1> = {value: 1, unit: "m"};

    it("should return a tuple equaling the measurement represented by the object.", () => {
      expect(MeasurementTuple(object)).toEqual([1, "m"]);
    });
  });
});

describe("MeasurementString", () => {
  describe("given a tuple", () => {
    const tuple: Measurement<"m", 1> = [1, "m"];
    it("should return a string equaling the measurement represented by the tuple.", () => {
      expect(MeasurementString(tuple)).toEqual("1m");
    });
  });

  describe("given an object", () => {
    const object: Measurement<"m", 1> = {value: 1, unit: "m"};

    it("should return a string equaling the measurement represented by the object.", () => {
      expect(MeasurementString(object)).toEqual("1m");
    });
  });
});

describe("MeasurementObject", () => {
  describe("given a tuple", () => {
    const tuple: Measurement<"m", 1> = [1, "m"];

    it("should return an object equaling the measurement represented by the tuple.", () => {
      expect(MeasurementObject(tuple)).toEqual({value: 1, unit: "m"});
    });
  });

  describe("given a string", () => {
    const string: Measurement<"m", 1> = "1m";

    it("should return an object equaling the measurement represented by the string.", () => {
      expect(MeasurementObject(string)).toEqual({value: 1, unit: "m"});
    });
  });

  describe("given an object", () => {
    const object: Measurement<"m", 1> = {value: 1, unit: "m"};

    it("should return an object equaling the given object.", () => {
      expect(MeasurementObject(object)).toEqual(object);
    });

    it("shouldn't return the same instance.", () => {
      expect(MeasurementObject(object)).not.toBe(object);
    });
  });
});