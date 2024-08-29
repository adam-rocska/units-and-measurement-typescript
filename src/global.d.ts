type PropertyDescriptorsOf<Type> = {
  [Property in keyof Type]: TypedPropertyDescriptor<Type[Property]>
};

type PropertyDescriptorOf<
  Type,
  Property extends keyof Type
> = TypedPropertyDescriptor<Type[Property]>;

interface ObjectConstructor {
  defineProperties<
    OnObject,
    MergedWith
  >(
    onObject: OnObject,
    properties: PropertyDescriptorsOf<MergedWith>
  ): OnObject & MergedWith;

  defineProperty<
    OnObject,
    MergedWith,
    Property extends keyof MergedWith
  >(
    onObject: OnObject,
    property: Property,
    descriptor: TypedPropertyDescriptor<MergedWith[Property]>
  ): OnObject & {[Key in Property]: MergedWith[Key]};

  create<
    Prototype extends object,
    MergedWith extends object
  >(
    prototype: Prototype,
    descriptors: PropertyDescriptorsOf<MergedWith>
  ): Prototype & MergedWith;

  getOwnPropertyDescriptors<Type>(
    object: Type
  ): PropertyDescriptorsOf<Type>;

  freeze<Type>(
    object: Type
  ): import("type-fest").ReadonlyDeep<Type>;
}