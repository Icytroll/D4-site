import ItemEntryRow from "./ItemEntryRow";

interface Props {
  itemSlot: string;
}

const Item = ({ itemSlot }: Props) => {
  return (
    <div className="border border-primary p-0">
      <div className="row center-vh fs-4">{itemSlot}</div>
      <ItemEntryRow />
      <ItemEntryRow />
      <ItemEntryRow />
      <ItemEntryRow />
      <ItemEntryRow />
      <ItemEntryRow />
      <ItemEntryRow />
    </div>
  );
};

export default Item;
