import Item from "./Item";

const ItemsContainer = () => {
  return (
    <div className="border border-warning">
      <div className="text-center">ITEMS CONTAINER</div>
      <div className="row g-3">
        <div className="col-3">
          <Item itemSlot="Helm" />
          <Item itemSlot="Chest" />
          <Item itemSlot="2 Hand (blunt)" />
        </div>
        <div className="col-3">
          <Item itemSlot="Neck" />
          <Item itemSlot="Gloves" />
          <Item itemSlot="1 Hand (left)" />
        </div>
        <div className="col-3">
          <Item itemSlot="Finger 1" />
          <Item itemSlot="Pants" />
          <Item itemSlot="1 Hand (right)" />
        </div>
        <div className="col-3">
          <Item itemSlot="Finger 2" />
          <Item itemSlot="Boots" />
          <Item itemSlot="2 Hand (slashing)" />
        </div>
      </div>
    </div>
  );
};

export default ItemsContainer;
