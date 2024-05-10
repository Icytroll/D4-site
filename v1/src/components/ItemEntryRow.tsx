import Input from "./Input";
import InputDropdownSearch from "./InputDropdownSearch";

// Will need to differentiate between a searchable dropdown in the first column, and an input with lower and upper limits depending on what was selected in the dropdown
const Item = () => {
  return (
    <div className="row p-0">
      <div className="col-8">
        <InputDropdownSearch children="Stat dropdown" />
      </div>
      <div className="col-4 text-center">
        <Input children="Value" />
      </div>
    </div>
  );
};

export default Item;
