import * as Library from "!src/index";
import * as Shorthand from "!src/shorthand";

describe('megameters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.megameters(123);
    expect(measurement.unit).toBe(Library.LengthDimension.megameters);
  });
});

describe('kilometers', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kilometers(123);
    expect(measurement.unit).toBe(Library.LengthDimension.kilometers);
  });
});

describe('hectometers', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.hectometers(123);
    expect(measurement.unit).toBe(Library.LengthDimension.hectometers);
  });
});

describe('decameters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.decameters(123);
    expect(measurement.unit).toBe(Library.LengthDimension.decameters);
  });
});

describe('meters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.meters(123);
    expect(measurement.unit).toBe(Library.LengthDimension.meters);
  });
});

describe('decimeters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.decimeters(123);
    expect(measurement.unit).toBe(Library.LengthDimension.decimeters);
  });
});

describe('centimeters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.centimeters(123);
    expect(measurement.unit).toBe(Library.LengthDimension.centimeters);
  });
});

describe('millimeters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.millimeters(123);
    expect(measurement.unit).toBe(Library.LengthDimension.millimeters);
  });
});

describe('micrometers', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.micrometers(123);
    expect(measurement.unit).toBe(Library.LengthDimension.micrometers);
  });
});

describe('nanometers', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.nanometers(123);
    expect(measurement.unit).toBe(Library.LengthDimension.nanometers);
  });
});

describe('picometers', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.picometers(123);
    expect(measurement.unit).toBe(Library.LengthDimension.picometers);
  });
});

describe('twips', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.twips(123);
    expect(measurement.unit).toBe(Library.LengthDimension.twips);
  });
});

describe('points', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.points(123);
    expect(measurement.unit).toBe(Library.LengthDimension.points);
  });
});

describe('picas', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.picas(123);
    expect(measurement.unit).toBe(Library.LengthDimension.picas);
  });
});

describe('inches', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.inches(123);
    expect(measurement.unit).toBe(Library.LengthDimension.inches);
  });
});

describe('feet', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.feet(123);
    expect(measurement.unit).toBe(Library.LengthDimension.feet);
  });
});

describe('yards', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.yards(123);
    expect(measurement.unit).toBe(Library.LengthDimension.yards);
  });
});

describe('miles', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.miles(123);
    expect(measurement.unit).toBe(Library.LengthDimension.miles);
  });
});

describe('scandinavianMiles', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.scandinavianMiles(123);
    expect(measurement.unit).toBe(Library.LengthDimension.scandinavianMiles);
  });
});

describe('lightyears', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.lightyears(123);
    expect(measurement.unit).toBe(Library.LengthDimension.lightyears);
  });
});

describe('nauticalMiles', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.nauticalMiles(123);
    expect(measurement.unit).toBe(Library.LengthDimension.nauticalMiles);
  });
});

describe('fathoms', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.fathoms(123);
    expect(measurement.unit).toBe(Library.LengthDimension.fathoms);
  });
});

describe('furlongs', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.furlongs(123);
    expect(measurement.unit).toBe(Library.LengthDimension.furlongs);
  });
});

describe('astronomicalUnits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.astronomicalUnits(123);
    expect(measurement.unit).toBe(Library.LengthDimension.astronomicalUnits);
  });
});

describe('parsecs', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.parsecs(123);
    expect(measurement.unit).toBe(Library.LengthDimension.parsecs);
  });
});

describe('megaliters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.megaliters(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.megaliters);
  });
});

describe('kiloliters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kiloliters(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.kiloliters);
  });
});

describe('liters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.liters(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.liters);
  });
});

describe('deciliters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.deciliters(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.deciliters);
  });
});

describe('centiliters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.centiliters(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.centiliters);
  });
});

describe('milliliters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.milliliters(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.milliliters);
  });
});

describe('cubicKilometers', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.cubicKilometers(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.cubicKilometers);
  });
});

describe('cubicMeters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.cubicMeters(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.cubicMeters);
  });
});

describe('cubicDecimeters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.cubicDecimeters(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.cubicDecimeters);
  });
});

describe('cubicMillimeters', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.cubicMillimeters(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.cubicMillimeters);
  });
});

describe('cubicInches', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.cubicInches(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.cubicInches);
  });
});

describe('cubicFeet', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.cubicFeet(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.cubicFeet);
  });
});

describe('cubicYards', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.cubicYards(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.cubicYards);
  });
});

describe('cubicMiles', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.cubicMiles(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.cubicMiles);
  });
});

describe('acreFeet', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.acreFeet(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.acreFeet);
  });
});

describe('bushels', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.bushels(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.bushels);
  });
});

describe('teaspoons', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.teaspoons(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.teaspoons);
  });
});

describe('tablespoons', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.tablespoons(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.tablespoons);
  });
});

describe('fluidOunces', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.fluidOunces(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.fluidOunces);
  });
});

describe('cups', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.cups(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.cups);
  });
});

describe('pints', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.pints(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.pints);
  });
});

describe('quarts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.quarts(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.quarts);
  });
});

describe('gallons', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.gallons(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.gallons);
  });
});

describe('imperialTeaspoons', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.imperialTeaspoons(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.imperialTeaspoons);
  });
});

describe('imperialTablespoons', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.imperialTablespoons(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.imperialTablespoons);
  });
});

describe('imperialFluidOunces', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.imperialFluidOunces(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.imperialFluidOunces);
  });
});

describe('imperialPints', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.imperialPints(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.imperialPints);
  });
});

describe('imperialQuarts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.imperialQuarts(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.imperialQuarts);
  });
});

describe('imperialGallons', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.imperialGallons(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.imperialGallons);
  });
});

describe('metricCups', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.metricCups(123);
    expect(measurement.unit).toBe(Library.VolumeDimension.metricCups);
  });
});

describe('degrees', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.degrees(123);
    expect(measurement.unit).toBe(Library.AngleDimension.degrees);
  });
});

describe('arcMinutes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.arcMinutes(123);
    expect(measurement.unit).toBe(Library.AngleDimension.arcMinutes);
  });
});

describe('arcSeconds', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.arcSeconds(123);
    expect(measurement.unit).toBe(Library.AngleDimension.arcSeconds);
  });
});

describe('radians', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.radians(123);
    expect(measurement.unit).toBe(Library.AngleDimension.radians);
  });
});

describe('gradians', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.gradians(123);
    expect(measurement.unit).toBe(Library.AngleDimension.gradians);
  });
});

describe('revolutions', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.revolutions(123);
    expect(measurement.unit).toBe(Library.AngleDimension.revolutions);
  });
});

describe('kilograms', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kilograms(123);
    expect(measurement.unit).toBe(Library.MassDimension.kilograms);
  });
});

describe('grams', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.grams(123);
    expect(measurement.unit).toBe(Library.MassDimension.grams);
  });
});

describe('decigrams', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.decigrams(123);
    expect(measurement.unit).toBe(Library.MassDimension.decigrams);
  });
});

describe('centigrams', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.centigrams(123);
    expect(measurement.unit).toBe(Library.MassDimension.centigrams);
  });
});

describe('milligrams', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.milligrams(123);
    expect(measurement.unit).toBe(Library.MassDimension.milligrams);
  });
});

describe('micrograms', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.micrograms(123);
    expect(measurement.unit).toBe(Library.MassDimension.micrograms);
  });
});

describe('nanograms', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.nanograms(123);
    expect(measurement.unit).toBe(Library.MassDimension.nanograms);
  });
});

describe('picograms', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.picograms(123);
    expect(measurement.unit).toBe(Library.MassDimension.picograms);
  });
});

describe('ounces', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.ounces(123);
    expect(measurement.unit).toBe(Library.MassDimension.ounces);
  });
});

describe('pounds', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.pounds(123);
    expect(measurement.unit).toBe(Library.MassDimension.pounds);
  });
});

describe('stones', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.stones(123);
    expect(measurement.unit).toBe(Library.MassDimension.stones);
  });
});

describe('metricTons', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.metricTons(123);
    expect(measurement.unit).toBe(Library.MassDimension.metricTons);
  });
});

describe('shortTons', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.shortTons(123);
    expect(measurement.unit).toBe(Library.MassDimension.shortTons);
  });
});

describe('carats', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.carats(123);
    expect(measurement.unit).toBe(Library.MassDimension.carats);
  });
});

describe('ouncesTroy', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.ouncesTroy(123);
    expect(measurement.unit).toBe(Library.MassDimension.ouncesTroy);
  });
});

describe('slugs', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.slugs(123);
    expect(measurement.unit).toBe(Library.MassDimension.slugs);
  });
});

describe('newtonsPerMetersSquared', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.newtonsPerMetersSquared(123);
    expect(measurement.unit).toBe(Library.PressureDimension.newtonsPerMetersSquared);
  });
});

describe('gigapascals', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.gigapascals(123);
    expect(measurement.unit).toBe(Library.PressureDimension.gigapascals);
  });
});

describe('megapascals', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.megapascals(123);
    expect(measurement.unit).toBe(Library.PressureDimension.megapascals);
  });
});

describe('kilopascals', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kilopascals(123);
    expect(measurement.unit).toBe(Library.PressureDimension.kilopascals);
  });
});

describe('hectopascals', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.hectopascals(123);
    expect(measurement.unit).toBe(Library.PressureDimension.hectopascals);
  });
});

describe('inchesOfMercury', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.inchesOfMercury(123);
    expect(measurement.unit).toBe(Library.PressureDimension.inchesOfMercury);
  });
});

describe('bars', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.bars(123);
    expect(measurement.unit).toBe(Library.PressureDimension.bars);
  });
});

describe('millibars', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.millibars(123);
    expect(measurement.unit).toBe(Library.PressureDimension.millibars);
  });
});

describe('millimetersOfMercury', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.millimetersOfMercury(123);
    expect(measurement.unit).toBe(Library.PressureDimension.millimetersOfMercury);
  });
});

describe('poundsForcePerSquareInch', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.poundsForcePerSquareInch(123);
    expect(measurement.unit).toBe(Library.PressureDimension.poundsForcePerSquareInch);
  });
});

describe('metersPerSecondSquared', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.metersPerSecondSquared(123);
    expect(measurement.unit).toBe(Library.AccelerationDimension.metersPerSecondSquared);
  });
});

describe('gravity', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.gravity(123);
    expect(measurement.unit).toBe(Library.AccelerationDimension.gravity);
  });
});

describe('seconds', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.seconds(123);
    expect(measurement.unit).toBe(Library.DurationDimension.seconds);
  });
});

describe('minutes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.minutes(123);
    expect(measurement.unit).toBe(Library.DurationDimension.minutes);
  });
});

describe('hours', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.hours(123);
    expect(measurement.unit).toBe(Library.DurationDimension.hours);
  });
});

describe('terahertz', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.terahertz(123);
    expect(measurement.unit).toBe(Library.FrequencyDimension.terahertz);
  });
});

describe('gigahertz', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.gigahertz(123);
    expect(measurement.unit).toBe(Library.FrequencyDimension.gigahertz);
  });
});

describe('megahertz', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.megahertz(123);
    expect(measurement.unit).toBe(Library.FrequencyDimension.megahertz);
  });
});

describe('kilohertz', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kilohertz(123);
    expect(measurement.unit).toBe(Library.FrequencyDimension.kilohertz);
  });
});

describe('hertz', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.hertz(123);
    expect(measurement.unit).toBe(Library.FrequencyDimension.hertz);
  });
});

describe('millihertz', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.millihertz(123);
    expect(measurement.unit).toBe(Library.FrequencyDimension.millihertz);
  });
});

describe('microhertz', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.microhertz(123);
    expect(measurement.unit).toBe(Library.FrequencyDimension.microhertz);
  });
});

describe('nanohertz', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.nanohertz(123);
    expect(measurement.unit).toBe(Library.FrequencyDimension.nanohertz);
  });
});

describe('metersPerSecond', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.metersPerSecond(123);
    expect(measurement.unit).toBe(Library.SpeedDimension.metersPerSecond);
  });
});

describe('kilometersPerHour', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kilometersPerHour(123);
    expect(measurement.unit).toBe(Library.SpeedDimension.kilometersPerHour);
  });
});

describe('milesPerHour', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.milesPerHour(123);
    expect(measurement.unit).toBe(Library.SpeedDimension.milesPerHour);
  });
});

describe('knots', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.knots(123);
    expect(measurement.unit).toBe(Library.SpeedDimension.knots);
  });
});

describe('kilojoules', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kilojoules(123);
    expect(measurement.unit).toBe(Library.EnergyDimension.kilojoules);
  });
});

describe('joules', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.joules(123);
    expect(measurement.unit).toBe(Library.EnergyDimension.joules);
  });
});

describe('kilocalories', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kilocalories(123);
    expect(measurement.unit).toBe(Library.EnergyDimension.kilocalories);
  });
});

describe('calories', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.calories(123);
    expect(measurement.unit).toBe(Library.EnergyDimension.calories);
  });
});

describe('kilowattHours', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kilowattHours(123);
    expect(measurement.unit).toBe(Library.EnergyDimension.kilowattHours);
  });
});

describe('wattHours', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.wattHours(123);
    expect(measurement.unit).toBe(Library.EnergyDimension.wattHours);
  });
});

describe('electronvolts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.electronvolts(123);
    expect(measurement.unit).toBe(Library.EnergyDimension.electronvolts);
  });
});

describe('terawatts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.terawatts(123);
    expect(measurement.unit).toBe(Library.PowerDimension.terawatts);
  });
});

describe('gigawatts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.gigawatts(123);
    expect(measurement.unit).toBe(Library.PowerDimension.gigawatts);
  });
});

describe('megawatts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.megawatts(123);
    expect(measurement.unit).toBe(Library.PowerDimension.megawatts);
  });
});

describe('kilowatts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kilowatts(123);
    expect(measurement.unit).toBe(Library.PowerDimension.kilowatts);
  });
});

describe('watts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.watts(123);
    expect(measurement.unit).toBe(Library.PowerDimension.watts);
  });
});

describe('milliwatts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.milliwatts(123);
    expect(measurement.unit).toBe(Library.PowerDimension.milliwatts);
  });
});

describe('microwatts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.microwatts(123);
    expect(measurement.unit).toBe(Library.PowerDimension.microwatts);
  });
});

describe('nanowatts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.nanowatts(123);
    expect(measurement.unit).toBe(Library.PowerDimension.nanowatts);
  });
});

describe('picowatts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.picowatts(123);
    expect(measurement.unit).toBe(Library.PowerDimension.picowatts);
  });
});

describe('femtowatts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.femtowatts(123);
    expect(measurement.unit).toBe(Library.PowerDimension.femtowatts);
  });
});

describe('horsepower', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.horsepower(123);
    expect(measurement.unit).toBe(Library.PowerDimension.horsepower);
  });
});

describe('kelvin', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kelvin(123);
    expect(measurement.unit).toBe(Library.TemperatureDimension.kelvin);
  });
});

describe('celsius', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.celsius(123);
    expect(measurement.unit).toBe(Library.TemperatureDimension.celsius);
  });
});

describe('fahrenheit', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.fahrenheit(123);
    expect(measurement.unit).toBe(Library.TemperatureDimension.fahrenheit);
  });
});

describe('rankine', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.rankine(123);
    expect(measurement.unit).toBe(Library.TemperatureDimension.rankine);
  });
});

describe('lux', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.lux(123);
    expect(measurement.unit).toBe(Library.IlluminanceDimension.lux);
  });
});

describe('coulombs', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.coulombs(123);
    expect(measurement.unit).toBe(Library.ElectricChargeDimension.coulombs);
  });
});

describe('megaampereHours', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.megaampereHours(123);
    expect(measurement.unit).toBe(Library.ElectricChargeDimension.megaampereHours);
  });
});

describe('kiloampereHours', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kiloampereHours(123);
    expect(measurement.unit).toBe(Library.ElectricChargeDimension.kiloampereHours);
  });
});

describe('ampereHours', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.ampereHours(123);
    expect(measurement.unit).toBe(Library.ElectricChargeDimension.ampereHours);
  });
});

describe('milliampereHours', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.milliampereHours(123);
    expect(measurement.unit).toBe(Library.ElectricChargeDimension.milliampereHours);
  });
});

describe('microampereHours', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.microampereHours(123);
    expect(measurement.unit).toBe(Library.ElectricChargeDimension.microampereHours);
  });
});

describe('megaamperes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.megaamperes(123);
    expect(measurement.unit).toBe(Library.ElectricCurrentDimension.megaamperes);
  });
});

describe('kiloamperes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kiloamperes(123);
    expect(measurement.unit).toBe(Library.ElectricCurrentDimension.kiloamperes);
  });
});

describe('amperes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.amperes(123);
    expect(measurement.unit).toBe(Library.ElectricCurrentDimension.amperes);
  });
});

describe('milliamperes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.milliamperes(123);
    expect(measurement.unit).toBe(Library.ElectricCurrentDimension.milliamperes);
  });
});

describe('microamperes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.microamperes(123);
    expect(measurement.unit).toBe(Library.ElectricCurrentDimension.microamperes);
  });
});

describe('megavolts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.megavolts(123);
    expect(measurement.unit).toBe(Library.ElectricPotentialDifferenceDimension.megavolts);
  });
});

describe('kilovolts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kilovolts(123);
    expect(measurement.unit).toBe(Library.ElectricPotentialDifferenceDimension.kilovolts);
  });
});

describe('volts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.volts(123);
    expect(measurement.unit).toBe(Library.ElectricPotentialDifferenceDimension.volts);
  });
});

describe('millivolts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.millivolts(123);
    expect(measurement.unit).toBe(Library.ElectricPotentialDifferenceDimension.millivolts);
  });
});

describe('microvolts', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.microvolts(123);
    expect(measurement.unit).toBe(Library.ElectricPotentialDifferenceDimension.microvolts);
  });
});

describe('megaohms', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.megaohms(123);
    expect(measurement.unit).toBe(Library.ElectricResistanceDimension.megaohms);
  });
});

describe('kiloohms', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kiloohms(123);
    expect(measurement.unit).toBe(Library.ElectricResistanceDimension.kiloohms);
  });
});

describe('ohms', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.ohms(123);
    expect(measurement.unit).toBe(Library.ElectricResistanceDimension.ohms);
  });
});

describe('milliohms', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.milliohms(123);
    expect(measurement.unit).toBe(Library.ElectricResistanceDimension.milliohms);
  });
});

describe('microohms', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.microohms(123);
    expect(measurement.unit).toBe(Library.ElectricResistanceDimension.microohms);
  });
});

describe('gramsPerLiter', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.gramsPerLiter(123);
    expect(measurement.unit).toBe(Library.ConcentrationMassDimension.gramsPerLiter);
  });
});

describe('milligramsPerDeciliter', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.milligramsPerDeciliter(123);
    expect(measurement.unit).toBe(Library.ConcentrationMassDimension.milligramsPerDeciliter);
  });
});

describe('partsPerMillion', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.partsPerMillion(123);
    expect(measurement.unit).toBe(Library.DispersionDimension.partsPerMillion);
  });
});

describe('partsPerBillion', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.partsPerBillion(123);
    expect(measurement.unit).toBe(Library.DispersionDimension.partsPerBillion);
  });
});

describe('partsPerTrillion', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.partsPerTrillion(123);
    expect(measurement.unit).toBe(Library.DispersionDimension.partsPerTrillion);
  });
});

describe('bits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.bits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.bits);
  });
});

describe('bytes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.bytes(123);
    expect(measurement.unit).toBe(Library.InformationDimension.bytes);
  });
});

describe('kilobits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kilobits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.kilobits);
  });
});

describe('megabits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.megabits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.megabits);
  });
});

describe('gigabits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.gigabits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.gigabits);
  });
});

describe('terabits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.terabits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.terabits);
  });
});

describe('petabits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.petabits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.petabits);
  });
});

describe('exabits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.exabits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.exabits);
  });
});

describe('zettabits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.zettabits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.zettabits);
  });
});

describe('yottabits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.yottabits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.yottabits);
  });
});

describe('kibibits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kibibits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.kibibits);
  });
});

describe('kilobytes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.kilobytes(123);
    expect(measurement.unit).toBe(Library.InformationDimension.kilobytes);
  });
});

describe('mebibits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.mebibits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.mebibits);
  });
});

describe('megabytes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.megabytes(123);
    expect(measurement.unit).toBe(Library.InformationDimension.megabytes);
  });
});

describe('gibibits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.gibibits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.gibibits);
  });
});

describe('gigabytes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.gigabytes(123);
    expect(measurement.unit).toBe(Library.InformationDimension.gigabytes);
  });
});

describe('tebibits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.tebibits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.tebibits);
  });
});

describe('terabytes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.terabytes(123);
    expect(measurement.unit).toBe(Library.InformationDimension.terabytes);
  });
});

describe('pebibits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.pebibits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.pebibits);
  });
});

describe('petabytes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.petabytes(123);
    expect(measurement.unit).toBe(Library.InformationDimension.petabytes);
  });
});

describe('exbibits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.exbibits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.exbibits);
  });
});

describe('exabytes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.exabytes(123);
    expect(measurement.unit).toBe(Library.InformationDimension.exabytes);
  });
});

describe('zebibits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.zebibits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.zebibits);
  });
});

describe('zettabytes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.zettabytes(123);
    expect(measurement.unit).toBe(Library.InformationDimension.zettabytes);
  });
});

describe('yobibits', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.yobibits(123);
    expect(measurement.unit).toBe(Library.InformationDimension.yobibits);
  });
});

describe('yottabytes', () => {
  it('should create a measurement with the proper dimension.', () => {
    const measurement = Shorthand.yottabytes(123);
    expect(measurement.unit).toBe(Library.InformationDimension.yottabytes);
  });
});

