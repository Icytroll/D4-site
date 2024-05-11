import Item from "./Item";
import { itemSlots } from "../slots.ts";

const ItemsContainer = () => {
  return (
    <div className="border border-warning w-100 h-100">
      <div className="text-center">ITEMS CONTAINER</div>
      <div className="row justify-content-center flex-wrap gap-4">
        {itemSlots.map((slot) => (
          <Item key={slot} itemSlot={slot} />
        ))}
      </div>
    </div>
  );
};

export default ItemsContainer;
