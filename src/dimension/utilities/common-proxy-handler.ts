import {type Conversions} from "../conversion";

export class CommonProxyHandler<T extends object, Units extends string>
  implements ProxyHandler<T> {
  protected readonly conversions: Conversions<Units>;

  public constructor(conversions: Conversions<Units>) {this.conversions = conversions;}

  public has(target: T, propertyKey: PropertyKey): boolean {
    if (propertyKey in target) return true;
    return this.isUnit(propertyKey);
  }

  public ownKeys(target: T): (string | symbol)[] {
    return Object.keys(target).concat(this.units);
  }

  public set(_: T, p: PropertyKey, v: any, r: any): boolean {return false;}
  public deleteProperty(_: T, p: PropertyKey): boolean {return false;}
  public setPrototypeOf(target: T, v: object | null): boolean {return false;}
  public getPrototypeOf(): null {return null;}

  protected get units(): Units[] {return Object.keys(this.conversions) as Units[];}
  protected isUnit(candidate: any): candidate is Units {
    if (typeof candidate !== "string") return false;
    return candidate in this.conversions;
  }
}