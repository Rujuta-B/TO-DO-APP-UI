import React from "react";
import Todo from "../Todo/Todo";
import { TodoListsInterface } from "../interface/TodoListsInterface";


const TodoLists = () => {
  const todoLists: TodoListsInterface[] = [
    {
      id: 1,
      title: "Learn Ukulele",
    },
    {
      id: 2,
      title: "Maintain Tweet Streak",
    },
    {
      id: 3,
      title: "Read blog",
    },
    {
      id: 4,
      title: "Play Wordle",
    },
    {
      id: 5,
      title: "Watch Killing Eve",
    },
    {
      id: 6,
      title: "Complete assignment",
    },
    {
      id: 7,
      title: "Learn React",
    },
  ];
  return (
    <>
      {todoLists.map((list) => (
        <Todo key={list.id} title={list.title} id={0} />
      ))}
    </>
  );
};

export default TodoLists;
