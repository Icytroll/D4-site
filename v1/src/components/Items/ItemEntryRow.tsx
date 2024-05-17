import Input from "./Input";
import InputDropdownSearch from "../InputDropdownSearch";
import { Slot } from "./slots";

interface Props {
  placeHolderStr: string;
  itemSlot: Slot;
}

// Will need to differentiate between a searchable dropdown in the first column, and an input with lower and upper limits depending on what was selected in the dropdown
const Item = ({ placeHolderStr = "Placeholder", itemSlot }: Props) => {
  return (
    <div className="row item-row-fs input-y-padding g-0 gx-1">
      <div className="col-9">
        <InputDropdownSearch placeHolder={placeHolderStr} itemSlot={itemSlot} />
      </div>
      <div className="col-3 text-center">
        <Input children="Value" />
      </div>
    </div>
  );
};

export default Item;
