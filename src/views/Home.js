import React from "react";
import TodoList from "../components/todo/TodoList";
import TodoListProvider from "../components/TodoListProvider";
import TodoListContext from "../contexts/TodoListContext";

import "./Home.css";

const Home = () => {
  return (
    <TodoListProvider>
      <TodoListContext.Consumer>
        {rest => <TodoList {...rest} />}
      </TodoListContext.Consumer>
    </TodoListProvider>
  );
};

export default Home;
