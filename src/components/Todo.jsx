import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("hello");
  return (
    <div>
      <h1>Todo</h1>

      <form>
        <input type="text" value={todo} onChange={handleInput()} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
