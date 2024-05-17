import ItemEntryRow from "../ItemEntryRow";
import ItemTypeRow from "../ItemTypeRow";
import { Slot } from "../slots";

interface Props {
  itemSlot: Slot;
}

export const Pants = ({ itemSlot }: Props) => {
  return (
    <div className="item border border-0 p-0">
      <div className="row center-vh fs-5">{itemSlot}</div>
      <ItemTypeRow innateStatLabel={"Armor"} />
      <ItemEntryRow placeHolderStr="Affix I" />
      <ItemEntryRow placeHolderStr="Affix II" />
      <ItemEntryRow placeHolderStr="Affix III" />
      <ItemEntryRow placeHolderStr="Tempering I" />
      <ItemEntryRow placeHolderStr="Tempering II" />
      <ItemEntryRow placeHolderStr="Aspect" />
      <ItemEntryRow placeHolderStr="Gems" />
    </div>
  );
};
