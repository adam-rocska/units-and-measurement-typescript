import {Measurement, string, value} from "@adam-rocska/units-and-measurement";
import {divide, greaterThan, lessThan, multiply} from "@adam-rocska/units-and-measurement/operations";

test("Use Case 1: Convenient string based operations", () => {
  // Defining a VGA resolution should be this simple.
  const vga = {width: "640px", height: "480px"} as const;

  const vgaAspectRatio = value(vga.width) / value(vga.height);
  expect(vgaAspectRatio).toBe(640 / 480);

  // Evolving to a quad VGA resolution
  const quadVga = {
    width: multiply(vga.width, 2),
    height: multiply(vga.height, 2)
  };

  expect(value(quadVga.width) / value(quadVga.height)).toBe(vgaAspectRatio);

  // As the program evolves, I could define other aspect ratios.
  const aspectRatios = {
    vga: 640 / 480,
    hd: 1280 / 720,
    usLetter: 8.5 / 11
  };
  // And use them to calculate other resolutions.
  const hd = {
    width: quadVga.width,
    height: divide(quadVga.width, aspectRatios.hd)
  } as const;

  expect(value(hd.height)).toBe(value(hd.width) / aspectRatios.hd);

  // LAter, I could decide to have a type-alias without stupid legwork
  type px = Measurement<"px">;
  // and maybe a convenience function because why not?
  const px = <V extends number>(v: V): px => string.measurement(v, "px");

  // And then I could define a resolution in terms of these new types.
  const digitalPaper = {
    height: multiply(hd.height, 2),
    get width(): px {return multiply(this.height, aspectRatios.usLetter);}
  } as const;

  expect(value(digitalPaper.width) / value(digitalPaper.height)).toBe(aspectRatios.usLetter);

  // Then I should be able to do various comparisons.
  expect(lessThan(digitalPaper.width, digitalPaper.height)).toBe(true);
  expect(greaterThan(digitalPaper.width, digitalPaper.height)).toBe(false);

});