import Item from "./Item";

const ItemsContainer = () => {
  return (
    <div className="border border-warning w-100 h-100">
      <div className="row justify-content-center">
        <div className="col-1 item-box-width mx-3">
          <div className="row my-3 p-0">
            <Item itemSlot="Helm" />
          </div>
          <div className="row my-3 p-0">
            <Item itemSlot="Chest" />
          </div>
          <div className="row my-3 p-0">
            <Item itemSlot="2 Hand (blunt)" />
          </div>
        </div>
        <div className="col-1 item-box-width mx-3">
          <div className="row my-3 p-0">
            <Item itemSlot="Neck" />
          </div>
          <div className="row my-3 p-0">
            <Item itemSlot="Gloves" />
          </div>
          <div className="row my-3 p-0">
            <Item itemSlot="1 Hand (left)" />
          </div>
        </div>
        <div className="col-1 item-box-width mx-3">
          <div className="row my-3 p-0">
            <Item itemSlot="Finger 1" />
          </div>
          <div className="row my-3 p-0">
            <Item itemSlot="Pants" />
          </div>
          <div className="row my-3 p-0">
            <Item itemSlot="1 Hand (right)" />
          </div>
        </div>
        <div className="col-1 item-box-width mx-3">
          <div className="row my-3 p-0">
            <Item itemSlot="Finger 2" />
          </div>
          <div className="row my-3 p-0">
            <Item itemSlot="Boots" />
          </div>
          <div className="row my-3 p-0">
            <Item itemSlot="2 Hand (slashing)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsContainer;
