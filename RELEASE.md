# 1.0.0

Initial release.
Enjoy.

## TypeScript Units & Measurement

A library for handling units and measurements in TypeScript.
The library is broken down into several modules, each of
which can be used independently.

### `@adam-rocska/units-and-measurement`

The main module providing all the units necessary or
convenient for working with units and measurements safely
without boilerplate.

Measurements may be expressed as:

- **tuples:** Simplest form: `[15, "px"]`.
- **objects:** Simplest form: `{ value: 15, unit: "px" }`.
- **strings:** Simplest form: `"15px"`. _Yes. THAT simple._
- **dimension:** Simplest form when using a known provided
  dimension: `inches(11)`.

where dimensions are a special monad of an object representation.

Utilities provided for measurements:

- **type predicates:** They help identify `any` value as a
  general or specific type of measurement.
- **factory utilities:** called simply `measurement`,
  specialized by the respective specifier namespace or used
  in its general form. Not necessary but useful in many cases
  to reduce boilerplates.
- **value and unit readers:** They help extract the value or
  unit from a measurement, let it be a general or specific
  type of measurement.
- **toFixed and toPrecision:** Provide alternatives for the
  `Number` type's `toFixed` and `toPrecision` methods on both
  specific and generic measurements.

### `@adam-rocska/units-and-measurement/operations`

A module providing convenient utilities to perform operations
on measurements.
It includes the following:

- arithmetic operations: addition, subtraction, multiplication,
  division, exponentiation, root and logarithm.
- comparison operations
- a utility for general purpose arithmetic operations
- a utility for general purpose logical operations

### `@adam-rocska/units-and-measurement/${DIMENSION}`

Every dimension submodule provides the following:

- Unit symbol type predicates
- List of known unit symbols
- Unit symbols as types.
- The dimension object, as anyone would provide one using
  `@adam-rocska/units-and-measurement`
- Aliases for the dimension factories.

### Example

```typescript
const paperWidth = inches(5.5);
const paperHeight = inches(11);

// toFixed, to avoid floating point errors
if (areEqual(toFixed(paperWidth.cm, 2), centimeters(13.97))) {
  console.log("The paper width is 13.97 cm.");
}
```
