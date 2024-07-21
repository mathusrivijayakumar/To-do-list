import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import './index.css';

import React, { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <Header addTodo={addTodo} />
      <Content todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      <Footer />
    </div>
  );
}

export default App;



