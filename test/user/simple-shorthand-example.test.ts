import {Invertible} from '@adam-rocska/invertible';
import {inches, centimeters} from '@adam-rocska/units-and-measurement/conversions';

test("The simplest example.", () => {
  const paperWidth = inches(5.5);
  const paperHeight = inches(11);

  /// MARK: With untouched floating point results
  expect(paperWidth.convertedTo(centimeters))
    .toEqual(centimeters(8.5 * (((127 / 5) / 1000)) * 100));

  expect(paperHeight.convertedTo(centimeters))
    .toEqual(centimeters(11 * (((127 / 5) / 1000)) * 100));

  /// MARK: With rounded floating point results
  expect(paperWidth.convertedTo(centimeters).toFixed(3))
    .toEqual(centimeters(21.59));

  expect(paperHeight.convertedTo(centimeters).toFixed(3))
    .toEqual(centimeters(27.94));

});