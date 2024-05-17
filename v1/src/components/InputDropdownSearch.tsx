import { Fragment } from "react/jsx-runtime";
import {
  weaponAffixStats,
  otherAffixStats,
  weaponTemperStats,
  glovesAffixStats,
} from "./Items/itemStats";
import { Slot } from "./Items/slots";
import { weaponSlots } from "./Items/slots";

interface Props {
  placeHolder: string;
  itemSlot: Slot;
}

const InputDropdownSearch = ({ placeHolder, itemSlot }: Props) => {
  const isGloves = itemSlot === "Gloves";
  const isWeapon = weaponSlots.includes(itemSlot);
  const isAffix = placeHolder.includes("Affix");
  const isTempering = placeHolder.includes("Tempering");

  const statOptions = isWeapon
    ? isAffix
      ? weaponAffixStats
      : isTempering
      ? weaponTemperStats
      : otherAffixStats
    : isGloves
    ? isAffix
      ? glovesAffixStats
      : otherAffixStats
    : otherAffixStats;
  const listID = isWeapon
    ? isAffix
      ? itemSlot.concat("Affix")
      : isTempering
      ? itemSlot.concat("Tempering")
      : itemSlot
    : itemSlot;

  return (
    <Fragment>
      <datalist id={listID}>
        {statOptions.map((stat) => (
          <option value={stat} />
        ))}
      </datalist>
      <input
        className="bg-primary bg-opacity-25 text-white border border-0 w-100"
        placeholder={placeHolder + " ..."}
        list={listID}
      ></input>
    </Fragment>
  );
};

export default InputDropdownSearch;

/* Have to try out other select options, like react-select

import Select from react-select

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (
  <Select options={options} />
)

*/
