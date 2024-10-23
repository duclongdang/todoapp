import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // ngan load lai trang
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        {" "}
        <input
          className={styles.modernInput}
          type="text"
          value={todo}
          placeholder="Enter todo item"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
