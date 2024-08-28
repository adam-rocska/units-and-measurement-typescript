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
    return Reflect.ownKeys(target).concat(this.units);
  }

  public set(_: T, p: PropertyKey, v: any, r: any): boolean {return false;}
  public deleteProperty(_: T, p: PropertyKey): boolean {return false;}
  public setPrototypeOf(target: T, v: object | null): boolean {return false;}
  public getPrototypeOf(): null {return null;}
  public get(target: T, p: string | symbol, receiver: any) {return Reflect.get(target, p, receiver);}
  public getOwnPropertyDescriptor(target: T, p: string | symbol): PropertyDescriptor | undefined {
    if (p in target) return Reflect.getOwnPropertyDescriptor(target, p);
    if (this.isUnit(p)) return {
      enumerable: true,
      configurable: true,
      get: this.get.bind(this, target, p, undefined)
    };
    return undefined;
  }

  protected get units(): Units[] {return Reflect.ownKeys(this.conversions) as Units[];}
  protected isUnit(candidate: any): candidate is Units {return candidate in this.conversions;}
}