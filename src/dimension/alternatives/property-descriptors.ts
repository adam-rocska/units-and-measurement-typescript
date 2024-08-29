import {type Alternatives} from "./alternatives";
import {type Conversions} from "../conversion";
import {propertyDescriptor} from "./property-descriptor";

/**
 * Generates property descriptors for the given conversions.
 *
 * @template Units - The type of units.
 * @param conversions - The conversions object.
 * @returns The property descriptors for the alternatives.
 */
export function propertyDescriptors<
  Units extends string
>(
  conversions: Conversions<Units>
): PropertyDescriptorsOf<Alternatives<Units>> {
  const descriptors = Object.create(null);
  for (const unit in conversions) descriptors[unit] = propertyDescriptor(
    conversions,
    unit
  );
  return descriptors;
}
