import { Item } from "../item/Item";

export const Items = ({ items }: any) => {
  return (
    <div>
      {items.map((item: any) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
};
