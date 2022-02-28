//Stateful component
import React, { useState } from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi"; //React icons
import styles from "./Todo.module.css";
import {TodoListsInterface} from "../interface/TodoListsInterface";

// interface TodoListsInterface {
//   title: string;
// }

const DisplayTodo = (props: TodoListsInterface) => {
  const [todoTask, setTodoTask] = useState(true);

  const changeStatusHandler = () => {
    setTodoTask((prevState) => !prevState);
  };
  const classChange = todoTask ? styles.todo_task : styles.complete_task;

  return (
    <div className={styles.todo_lists}>
      <div className={styles.flex_container}>
        <div onClick={changeStatusHandler} className={classChange}>
          {props.title}
        </div>
        <HiOutlineBadgeCheck
          onClick={changeStatusHandler}
          className={`${classChange} ${styles.check_box}`}
        />
      </div>
    </div>
  );
};

export default DisplayTodo;
