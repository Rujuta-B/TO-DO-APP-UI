import React from "react";
import styles from "./App.module.css";
import AddBtn from "./components/AddTaskBtn/AddBtn";
import Date from "./components/Date/Date";
import TodoLists from "./components/TodoLists/TodoLists";

const App = () => {
  return (
    <div className={styles.container}>
      <Date />
      <TodoLists />
      <AddBtn />
    </div>
  );
};

export default App;
