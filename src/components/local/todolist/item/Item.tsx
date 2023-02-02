import styles from "../item/Item.module.css";

export const Item = ({ item }: any) => {
  return (
    <div className="item">
      <h3>{item.text}</h3>
    </div>
  );
};
