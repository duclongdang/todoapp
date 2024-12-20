import styles from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span>Completed Todos : {completedTodos}</span>
      <br />
      <span>Total todos: {totalTodos}</span>
    </div>
  );
}
