import React, { useState } from 'react';
import { CompletedTodos } from './components/completedTodos';
import { IncompletedTodos } from './components/IncompletedTodos';
import { InputTodo } from './components/InputTodo';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompletedTodos, setIncompletedTodos] = useState([]);
  const [completedTodos, setCompleteTodos] = useState([]);

  const changeTodoText = (event) => setTodoText(event.target.value);

  const addTask = () => {
    if (todoText === '') return;
    const newTodos = [...incompletedTodos, todoText];
    setIncompletedTodos(newTodos);
    setTodoText('');
  };

  const completeTask = (index) => {
    const newIncompleteTodos = [...incompletedTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompletedTodos(newIncompleteTodos);

    const newCompleteTodos = [...completedTodos, incompletedTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const deleteTask = (index) => {
    const newTodos = [...incompletedTodos];
    newTodos.splice(index, 1);
    setIncompletedTodos(newTodos);
  };

  const restoreTask = (index) => {
    const newCompleteTodos = [...completedTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompletedTodos, completedTodos[index]];
    setIncompletedTodos(newIncompleteTodos);
  };

  return (
    <React.Fragment>
      <InputTodo
        todoText={todoText}
        changeTodoText={changeTodoText}
        addTask={addTask}
      ></InputTodo>

      <IncompletedTodos
        incompletedTodos={incompletedTodos}
        completeTask={completeTask}
        deleteTask={deleteTask}
      ></IncompletedTodos>

      <CompletedTodos
        completedTodos={completedTodos}
        restoreTask={restoreTask}
      ></CompletedTodos>
    </React.Fragment>
  );
};