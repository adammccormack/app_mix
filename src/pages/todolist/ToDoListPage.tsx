import styles from "../todolist/ToDoList.module.css";

export const ToDoListPage = () => {
  return (
    <>
      <header>
        <h1>To Do List</h1>
      </header>
      <div className={styles.toDoListContainer}>
        {/* <h3 className="toDoListHeader">Items</h3> */}
        <div className={styles.taskForm}>
          <div className={styles.inputContainer}>
            <input
              id="firstname"
              className={styles.input}
              type="text"
              placeholder=" "
            />
            <label htmlFor="toDoListItem" className={styles.placeholder}>
              Write Here
            </label>
          </div>
          <button type="submit" className={styles.submit}>
            add
          </button>
        </div>
      </div>
    </>
  );
};
