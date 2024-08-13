import {Measurement, LengthDimension} from '@adam-rocska/units-and-measurement';

test("The simplest example.", () => {
  const paperWidth = new Measurement(8.5, LengthDimension.inches);
  const paperHeight = new Measurement(11, LengthDimension.inches);

  /// MARK: With untouched floating point results
  expect(paperWidth.convertedTo(LengthDimension.centimeters))
    .toEqual(new Measurement(8.5 * (((127 / 5) / 1000)) * 100, LengthDimension.centimeters));

  expect(paperHeight.convertedTo(LengthDimension.centimeters))
    .toEqual(new Measurement(11 * (((127 / 5) / 1000)) * 100, LengthDimension.centimeters));

  /// MARK: With rounded floating point results
  expect(paperWidth.convertedTo(LengthDimension.centimeters).toFixed(3))
    .toEqual(new Measurement(21.59, LengthDimension.centimeters));

  expect(paperHeight.convertedTo(LengthDimension.centimeters).toFixed(3))
    .toEqual(new Measurement(27.94, LengthDimension.centimeters));

});