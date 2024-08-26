import {linearConversion} from "!src/dimension/conversion";

describe("linearConversion", () => {
  it("should create a linear conversion tuple", () => {
    const conversion = linearConversion(2, 3);
    expect(conversion[0](5)).toBe(13);
    expect(conversion[1](13)).toBe(5);
  });

  it("should create a linear conversion tuple with default constant", () => {
    const conversion = linearConversion(2);
    expect(conversion[0](5)).toBe(10);
    expect(conversion[1](10)).toBe(5);
  });
});