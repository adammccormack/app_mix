import { useState } from "react";
import styles from "../todolist/ToDoList.module.css";
import { Items } from "../../components/local/todolist/items/Items";

export const ToDoListPage = () => {
  // TODO: Move into store, then setup backend and setup Hook with Store
  const [items, setItems] = useState([
    { id: 1, text: "Walk the dog", day: "Monday" },
    { id: 2, text: "Play Playstation", day: "Thursday" },
    { id: 3, text: "Feed the cat", day: "Sunday" },
  ]);
  return (
    <>
      <header>
        <h1 className={styles.toDoListHeader}>To Do List</h1>
      </header>
      <div className={styles.toDoListContainer}>
        <div className={styles.taskForm}>
          <div className={styles.inputContainer}>
            <input
              id="firstname"
              className={styles.input}
              type="text"
              placeholder="Write Here"
            />
          </div>
          <button type="submit" className={styles.add}>
            add
          </button>
          <Items items={items} />
        </div>
      </div>
    </>
  );
};
