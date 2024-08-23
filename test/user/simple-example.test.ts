import {toFixed} from '@adam-rocska/units-and-measurement/measurement';
import {inches, centimeters} from '@adam-rocska/units-and-measurement/length';

test("The simplest example.", () => {
  const paperWidth = inches(5.5);
  const paperHeight = inches(11);

  expect(toFixed(centimeters(paperWidth), 2))
    .toEqual(centimeters(13.97));

  expect(toFixed(centimeters(paperHeight), 2))
    .toEqual(centimeters(27.94));
});
