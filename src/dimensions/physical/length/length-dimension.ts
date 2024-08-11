import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {LengthSymbol} from "./length-symbol";

export class LengthDimension extends Dimension<LengthSymbol> {
  public static readonly megameters = new LengthDimension('Mm', new LinearUnitConverter(1000000.0));
  public static readonly kilometers = new LengthDimension('kM', new LinearUnitConverter(1000.0));
  public static readonly hectometers = new LengthDimension('hm', new LinearUnitConverter(100.0));
  public static readonly decameters = new LengthDimension('dam', new LinearUnitConverter(10.0));
  public static readonly meters = new LengthDimension('m', new LinearUnitConverter(1.0));
  public static readonly decimeters = new LengthDimension('dm', new LinearUnitConverter(0.1));
  public static readonly centimeters = new LengthDimension('cm', new LinearUnitConverter(0.01));
  public static readonly millimeters = new LengthDimension('mm', new LinearUnitConverter(0.001));
  public static readonly micrometers = new LengthDimension('µm', new LinearUnitConverter(0.000001));
  public static readonly nanometers = new LengthDimension('nm', new LinearUnitConverter(1e-9));
  public static readonly picometers = new LengthDimension('pm', new LinearUnitConverter(1e-12));
  public static readonly inches = new LengthDimension('in', new LinearUnitConverter(0.0254));
  public static readonly feet = new LengthDimension('ft', new LinearUnitConverter(0.3048));
  public static readonly yards = new LengthDimension('yd', new LinearUnitConverter(0.9144));
  public static readonly miles = new LengthDimension('mi', new LinearUnitConverter(1609.34));
  public static readonly scandinavianMiles = new LengthDimension('smi', new LinearUnitConverter(10000));
  public static readonly lightyears = new LengthDimension('ly', new LinearUnitConverter(9.461e+15));
  public static readonly nauticalMiles = new LengthDimension('NM', new LinearUnitConverter(1852));
  public static readonly fathoms = new LengthDimension('ftm', new LinearUnitConverter(1.8288));
  public static readonly furlongs = new LengthDimension('fur', new LinearUnitConverter(201.168));
  public static readonly astronomicalUnits = new LengthDimension('ua', new LinearUnitConverter(1.496e+11));
  public static readonly parsecs = new LengthDimension('pc', new LinearUnitConverter(3.086e+16));
}