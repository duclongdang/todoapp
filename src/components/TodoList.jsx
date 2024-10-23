import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos }) {
  return (
    <div className={styles.todoList}>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
