# Energy

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

| Name           | Field         | Symbol | Coefficient | Constant |
| -------------- | ------------- | ------ | ----------- | -------- |
| Kilojoules     | kilojoules    | kJ     | 1000.0      | 0        |
| Joules         | joules        | J      | 1.0         | 0        |
| Kilocalories   | kilocalories  | kCal   | 4184.0      | 0        |
| Calories       | calories      | cal    | 4.184       | 0        |
| Kilowatt Hours | kilowattHours | kWh    | 3600000.0   | 0        |
| Watt Hours     | wattHours     | Wh     | 3600.0      | 0        |
| Electronvolts  | electronvolts | eV     | 1.60218e-19 | 0        |
