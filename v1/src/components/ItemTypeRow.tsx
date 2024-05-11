import Input from "./Input";

interface Props {
  isWeapon: boolean;
}

// Will need to differentiate between a searchable dropdown in the first column, and an input with lower and upper limits depending on what was selected in the dropdown
const Item = ({ isWeapon }: Props) => {
  return (
    <div className="row input-y-padding g-0 gx-1">
      <div className="col-8">
        {isWeapon ? (
          <div className="bg-primary bg-opacity-10 text-white border border-primary border-opacity-10 w-100">
            Weapon DPS
          </div>
        ) : (
          <div className="bg-primary bg-opacity-10 text-white border border-primary border-opacity-10 w-100">
            Armor
          </div>
        )}
      </div>
      <div className="col-4 text-center">
        <Input children="Value" />
      </div>
    </div>
  );
};

export default Item;
