// const header = { color: "yellow", fontSize: "30px" };

// import "../css/style.css";
import styles from "./inlinecomponent.module.css";
export default function InlineComponent() {
  return (
    <div>
      <h1 className={styles.header}>InlineComponent</h1>
    </div>
  );
}
