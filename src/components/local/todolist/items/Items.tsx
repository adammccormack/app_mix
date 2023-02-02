import { Item } from "../item/Item";

export const Items = ({ items, deleteItem }: any) => {
  return (
    <div>
      {items.map((item: any) => {
        return <Item key={item.id} item={item} deleteItem={deleteItem} />;
      })}
    </div>
  );
};
