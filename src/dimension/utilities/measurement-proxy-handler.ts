import {type Measurement} from "../dimension";
import {CommonProxyHandler} from "./common-proxy-handler";

export class MeasurementProxyHandler<Units extends string>
  extends CommonProxyHandler<Measurement<Units>, Units> {

  public get(
    measurement: Measurement<Units>,
    propertyKey: PropertyKey
  ) {
    if (propertyKey in measurement) return measurement[propertyKey as keyof Measurement<Units>];
    if (!this.isUnit(propertyKey)) return undefined;
    const unit = propertyKey;
    let value: number;
    if (unit === measurement.unit) {
      value = measurement.value;
    } else {
      const [toBase, fromBase] = [
        this.conversions[measurement.unit][0],
        this.conversions[unit][1]
      ];
      value = fromBase(toBase(measurement.value));
    }
    return value;
  }


  public override set(
    measurement: Measurement<Units>,
    propertyKey: PropertyKey,
    newValue: any
  ): boolean {
    if (propertyKey in measurement) {
      measurement[propertyKey as keyof Measurement<Units>] = newValue;
      return true;
    }

    if (typeof newValue !== "number") return false;
    if (!this.isUnit(propertyKey)) return false;
    if (measurement.unit === propertyKey) {
      measurement.value = newValue;
      return true;
    }
    const [toBase, fromBase] = [
      this.conversions[propertyKey][0],
      this.conversions[measurement.unit][1],
    ];
    measurement.value = fromBase(toBase(newValue));
    return true;
  }

}
