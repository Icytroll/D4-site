import ItemEntryRow from "./ItemEntryRow";
import ItemTypeRow from "./ItemTypeRow";
import { Slot, weaponSlots } from "../slots.ts";

interface Props {
  itemSlot: Slot;
}

const Item = ({ itemSlot }: Props) => {
  const isWeapon = weaponSlots.includes(itemSlot);

  return (
    <div className="item border border-0 p-0">
      <div className="row center-vh fs-3">{itemSlot}</div>
      <ItemTypeRow isWeapon={isWeapon} />
      <ItemEntryRow placeHolderStr="Affix I" />
      <ItemEntryRow placeHolderStr="Affix II" />
      <ItemEntryRow placeHolderStr="Affix III" />
      <ItemEntryRow placeHolderStr="Tempering I" />
      <ItemEntryRow placeHolderStr="Tempering II" />
      <ItemEntryRow placeHolderStr="Aspect" />
    </div>
  );
};

export default Item;
