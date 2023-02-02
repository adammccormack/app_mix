import styles from "../todolist/ToDoList.module.css";
import { Items } from "../../components/local/todolist/Items";

export const ToDoListPage = () => {
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
          <button type="submit" className={styles.submit}>
            add
          </button>
          <Items />
        </div>
      </div>
    </>
  );
};
