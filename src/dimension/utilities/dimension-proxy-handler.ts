import {type Conversions} from "../conversion";
import {type Dimension, Measurement} from "../dimension";
import {CommonProxyHandler} from "./common-proxy-handler";

export class DimensionProxyHandler<Units extends string>
  extends CommonProxyHandler<Dimension<Units>, Units> {
  private readonly createMeasurement: CreateMEasurement;

  public constructor(
    conversions: Conversions<Units>,
    createMeasurement: CreateMEasurement
  ) {
    super(conversions);
    this.createMeasurement = createMeasurement;
  }

  public get(
    target: Dimension<Units>,
    propertyKey: PropertyKey
  ): any {
    if (propertyKey in target) return target[propertyKey as keyof Dimension<Units>];
    if (!this.isUnit(propertyKey)) return undefined;
    return (value: number) => this.createMeasurement(this.conversions, value, propertyKey);
  }

}

type CreateMEasurement = <Units extends string>(
  conversions: Conversions<Units>,
  value: number,
  unit: Units
) => Measurement<Units>;
