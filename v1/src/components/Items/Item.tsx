import ItemEntryRow from "./ItemEntryRow";
import ItemTypeRow from "./ItemTypeRow";
import {
  Slot,
  weaponSlots,
  armorSlots,
  jewelrySlots,
  singleGemSlots,
  doubleGemSlots,
} from "./slots";

interface Props {
  itemSlot: Slot;
}

const Item = ({ itemSlot }: Props) => {
  const isWeapon = weaponSlots.includes(itemSlot);
  const isArmor = armorSlots.includes(itemSlot);
  const isJewelry = jewelrySlots.includes(itemSlot);
  const isSingleGem = singleGemSlots.includes(itemSlot);
  const isDoubleGem = doubleGemSlots.includes(itemSlot);

  return (
    <div className="item border border-0 p-0">
      <div className="row center-vh fs-5">{itemSlot}</div>
      <ItemTypeRow
        innateStatLabel={
          isWeapon ? "Weapon DMG" : isArmor ? "Armor" : "Resistance to All"
        }
      />
      {isJewelry ? (
        <ItemEntryRow placeHolderStr="Resistance" />
      ) : (
        isWeapon && <ItemEntryRow placeHolderStr="Implicit stat" />
      )}
      <ItemEntryRow placeHolderStr="Affix I" />
      <ItemEntryRow placeHolderStr="Affix II" />
      <ItemEntryRow placeHolderStr="Affix III" />
      <ItemEntryRow placeHolderStr="Tempering I" />
      <ItemEntryRow placeHolderStr="Tempering II" />
      <ItemEntryRow placeHolderStr="Aspect" />
      {isSingleGem ? (
        <ItemEntryRow placeHolderStr="Gem" />
      ) : (
        isDoubleGem && <ItemEntryRow placeHolderStr="Gems" />
      )}
    </div>
  );
};

export default Item;
