import styles from "../todolist/ToDoList.module.css";

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
              placeholder=""
            />
            <label htmlFor="toDoListItem" className={styles.placeholder}>
              Write Here
            </label>
          </div>
          <button type="submit" className={styles.submit}>
            add
          </button>
          <div className="listItems">List Item</div>
        </div>
      </div>
    </>
  );
};
