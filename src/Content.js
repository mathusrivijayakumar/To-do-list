import React from 'react';

const Content = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <main>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(index)}>{todo.text}</span>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
