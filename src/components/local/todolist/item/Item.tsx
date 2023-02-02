import styles from "../item/Item.module.css";

export const Item = ({ item }: any) => {
  return (
    <div className={styles.item}>
      <h3>{item.text}</h3>
    </div>
  );
};
