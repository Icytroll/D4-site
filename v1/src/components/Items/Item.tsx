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
        <ItemEntryRow placeHolderStr="Resistance" itemSlot={itemSlot} />
      ) : (
        isWeapon && (
          <ItemEntryRow placeHolderStr="Implicit stat" itemSlot={itemSlot} />
        )
      )}
      <ItemEntryRow placeHolderStr="Affix I" itemSlot={itemSlot} />
      <ItemEntryRow placeHolderStr="Affix II" itemSlot={itemSlot} />
      <ItemEntryRow placeHolderStr="Affix III" itemSlot={itemSlot} />
      <ItemEntryRow placeHolderStr="Tempering I" itemSlot={itemSlot} />
      <ItemEntryRow placeHolderStr="Tempering II" itemSlot={itemSlot} />
      <ItemEntryRow placeHolderStr="Aspect" itemSlot={itemSlot} />
      {isSingleGem ? (
        <ItemEntryRow placeHolderStr="Gem" itemSlot={itemSlot} />
      ) : (
        isDoubleGem && (
          <ItemEntryRow placeHolderStr="Gems" itemSlot={itemSlot} />
        )
      )}
    </div>
  );
};

export default Item;
