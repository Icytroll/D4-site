import ItemEntryRow from "./ItemEntryRow";
import ItemTypeRow from "./ItemTypeRow";

interface Props {
  itemSlot: string;
}

const Item = ({ itemSlot }: Props) => {
  const weaponSlots = [
    "2 Hand (blunt)",
    "1 Hand (left)",
    "1 Hand (right)",
    "2 Hand (slashing)",
  ];
  const isWeapon = weaponSlots.includes(itemSlot) ? true : false;

  return (
    <div className="border border-0 p-0">
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
