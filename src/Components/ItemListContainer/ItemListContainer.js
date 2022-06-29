import React from "react";
import "./styles.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  const onAdd = (count) => {
    if (count > 0) {
      console.log(`Se agregaron:  ${count}`);
    }
  }

  return (
    <div className="landing">
      <ItemCount 
      initial={0} 
      stock={7} 
      onAdd={onAdd}
      img='https://picsum.photos/600/400' />
      <ItemCount 
      initial={0} 
      stock={9} 
      onAdd={onAdd}
      img='https://picsum.photos/600/400' />
    </div>
  );
};

export default ItemListContainer;
