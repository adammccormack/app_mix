import styles from "../item/Item.module.css";
import { FaTimes } from "react-icons/fa";

export const Item = ({ item }: any) => {
  return (
    <div className={styles.itemContainer}>
      <h4>
        {item.text} <FaTimes />
      </h4>
      <p className={styles.itemDay}>{item.day}</p>
    </div>
  );
};
