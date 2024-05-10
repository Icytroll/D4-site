import Input from "./Input";

interface Props {
  itemSlot?: string;
}
// Will need to differentiate between a searchable dropdown in the first column, and an input with lower and upper limits depending on what was selected in the dropdown
const Item = ({ itemSlot }: Props) => {
  return (
    <div className="row">
      <div className="col-8">
        <Input />
      </div>
      <div className="col-4 text-center">
        <Input />
      </div>
    </div>
  );
};

export default Item;
