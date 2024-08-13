# TypeScript Units & Measurement

This library provides a set of classes and functions to work
with units and measurement in TypeScript.

## Installation

npm:

```zsh
npm install @adam-rocska/units-and-measurement
```

pnpm:

```zsh
pnpm add @adam-rocska/units-and-measurement
```

## Usage

```typescript
import { Measurement, LengthDimension } from '@adam-rocska/units-and-measurement';

const paperWidth = new Measurement(8.5, LengthDimension.inches);
const paperHeight = new Measurement(11, LengthDimension.inches);
```
