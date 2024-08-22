# Speed

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

| Name                | Field             | Symbol | Coefficient | Constant |
| ------------------- | ----------------- | ------ | ----------- | -------- |
| Meters Per Second   | metersPerSecond   | m/s    | 1.0         | 0        |
| Kilometers Per Hour | kilometersPerHour | km/h   | 0.277778    | 0        |
| Miles Per Hour      | milesPerHour      | mph    | 0.44704     | 0        |
| Knots               | knots             | kn     | 0.514444    | 0        |
