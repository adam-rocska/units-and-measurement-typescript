import {inches, centimeters} from '@adam-rocska/units-and-measurement/length';

/// NOTE: This test is great because it dances around with the fucking floating point arithmetic issues too.
test("The simplest example.", () => {
  const paperWidth = inches(5.5);
  const paperHeight = inches(11);

  /// MARK: With untouched floating point results
  expect(centimeters(paperWidth))
    .toEqual(centimeters(13.97));

  expect(centimeters(paperHeight))
    .toEqual(centimeters(27.94));
});