# Temperature

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

| Name              | Field      | Symbol | Coefficient      | Constant           |
| ----------------- | ---------- | ------ | ---------------- | ------------------ |
| Kelvin            | kelvin     | K      | 1                | 0                  |
| Degree Celsius    | celsius    | °C     | 1.0              | 273.15             |
| Degree Fahrenheit | fahrenheit | °F     | 0.55555555555556 | 255.37222222222427 |
| Degree Rankine    | rankine    | °R     | 0.55555555555556 | 0                  |