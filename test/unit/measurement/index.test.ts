/// This test might seem dumb, but trust me, it makes sense. I messed up too many times the aliasing so this test shall exist!

import * as measurement from "!src/measurement";

import {MeasurementObject} from "!src/measurement/measurement-object";
import * as m from "!src/measurement/measurement";
import * as s from "!src/measurement/string";
import * as t from "!src/measurement/tuple";


describe("Unit mapping «measurement»", () => {
  it("should map MeasurementObject", () => {
    expect(measurement.MeasurementObject).toBe(MeasurementObject);
  });

  it("should map m.isMeasurement", () => {
    expect(measurement.isMeasurement).toBe(m.isMeasurement);
  });
  it("should map m.toString", () => {
    expect(measurement.toString).toBe(m.toString);
  });
  it("should map m.toTuple", () => {
    expect(measurement.toTuple).toBe(m.toTuple);
  });
  it("should map m.unit", () => {
    expect(measurement.unit).toBe(m.unit);
  });
  it("should map m.value", () => {
    expect(measurement.value).toBe(m.value);
  });
  it("should map m.toExponential", () => {
    expect(measurement.toExponential).toBe(m.toExponential);
  });
  it("should map m.toFixed", () => {
    expect(measurement.toFixed).toBe(m.toFixed);
  });
  it("should map m.toPrecision", () => {
    expect(measurement.toPrecision).toBe(m.toPrecision);
  });

  it("should map s.string", () => {
    expect(measurement.string).toBe(s.string);
  });
  it("should map s.isString", () => {
    expect(measurement.isString).toBe(s.isString);
  });
  it("should map s.unit as stringUnit", () => {
    expect(measurement.stringUnit).toBe(s.unit);
  });
  it("should map s.value as stringValue", () => {
    expect(measurement.stringValue).toBe(s.value);
  });
  it("should map s.toExponential as stringToExponential", () => {
    expect(measurement.stringToExponential).toBe(s.toExponential);
  });
  it("should map s.toFixed as stringToFixed", () => {
    expect(measurement.stringToFixed).toBe(s.toFixed);
  });
  it("should map s.toPrecision as stringToPrecision", () => {
    expect(measurement.stringToPrecision).toBe(s.toPrecision);
  });

  it("should map t.tuple", () => {
    expect(measurement.tuple).toBe(t.tuple);
  });
  it("should map t.isTuple", () => {
    expect(measurement.isTuple).toBe(t.isTuple);
  });
  it("should map t.unit as tupleUnit", () => {
    expect(measurement.tupleUnit).toBe(t.unit);
  });
  it("should map t.value as tupleValue", () => {
    expect(measurement.tupleValue).toBe(t.value);
  });
  it("should map t.toExponential as tupleToExponential", () => {
    expect(measurement.tupleToExponential).toBe(t.toExponential);
  });
  it("should map t.toFixed as tupleToFixed", () => {
    expect(measurement.tupleToFixed).toBe(t.toFixed);
  });
  it("should map t.toPrecision as tupleToPrecision", () => {
    expect(measurement.tupleToPrecision).toBe(t.toPrecision);
  });
});