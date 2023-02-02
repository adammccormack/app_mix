import styles from "../item/Item.module.css";

export const Item = ({ item }: any) => {
  return (
    <div className={styles.item}>
      <h4>{item.text}</h4>
      <div className={styles.itemDay}>
        <p>{item.day}</p>
      </div>
    </div>
  );
};
