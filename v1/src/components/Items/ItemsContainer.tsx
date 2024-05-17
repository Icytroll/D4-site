import { useState } from "react";
import Item from "./Item";
import { Slot } from "./slots";

interface Props {
  itemSlots: Slot[];
}

const ItemsContainer = ({ itemSlots }: Props) => {
  const [itemsData, setItemsData] = useState({});

  return (
    <div className="w-100 h-100">
      <div className="row justify-content-center flex-wrap column-gap-4 row-gap-2">
        {itemSlots.map((slot) => (
          <Item key={slot} itemSlot={slot} />
        ))}
      </div>
    </div>
  );
};

export default ItemsContainer;
