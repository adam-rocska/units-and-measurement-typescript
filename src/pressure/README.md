# Pressure

## Units

The formula for converting between units is:

$$\text{base} = \text{value} \times \text{coefficient} + \text{constant}$$
$$\text{value} = \frac{\text{base} - \text{constant}}{\text{coefficient}}$$
$$\frac{\text{base} - \text{constant}}{\text{coefficient} \times \text{value}} = \text{1}$$

where:

- **base** is the value in the base unit, where the
  `coefficient` is one.
- **value** is a value expressed in an arbitrary unit of
  the dimension.
- **coefficient** is the factor by which the base unit is
  multiplied to get the unit.
- **constant** is the value to add or subtract from the base
  during conversions, such as between fahrenheit and celsius

| Name                                              | Field                    | Symbol | Coefficient | Constant |
| ------------------------------------------------- | ------------------------ | ------ | ----------- | -------- |
| Newtons Per Meter Squared (Equivalent to Pascals) | newtonsPerMetersSquared  | N/m²   | 1.0         | 0        |
| Gigapascals                                       | gigapascals              | GPa    | 1e9         | 0        |
| Megapascals                                       | megapascals              | MPa    | 1000000.0   | 0        |
| Kilopascals                                       | kilopascals              | kPa    | 1000.0      | 0        |
| Hectopascals                                      | hectopascals             | hPa    | 100.0       | 0        |
| Inches of Mercury                                 | inchesOfMercury          | inHg   | 3386.39     | 0        |
| Bars                                              | bars                     | bar    | 100000      | 0        |
| Millibars                                         | millibars                | mbar   | 100         | 0        |
| Millimeters of Mercury                            | millimetersOfMercury     | mmHg   | 133.322     | 0        |
| Pounds Per Square Inch                            | poundsForcePerSquareInch | psi    | 6894.76     | 0        |
