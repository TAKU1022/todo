import React, { useState } from 'react';
import { ChildrenArea } from './components/ChildrenArea';
import { CompletedTodos } from './components/CompletedTodos';
import { IncompletedTodos } from './components/IncompletedTodos';
import { InputTodo } from './components/InputTodo';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompletedTodos, setIncompletedTodos] = useState([]);
  const [completedTodos, setCompleteTodos] = useState([]);

  const changeTodoText = (event) => setTodoText(event.target.value);

  const addTask = () => {
    if (todoText === '') return;
    if (incompletedTodos.length >= 5) return;

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

  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const changeText = (event) => setText(event.target.value);

  const openArea = () => setOpen(!open);

  const closeArea = () => setOpen(false);

  return (
    <>
      <InputTodo
        todoText={todoText}
        changeTodoText={changeTodoText}
        addTask={addTask}
        disabled={incompletedTodos.length >= 5}
      ></InputTodo>

      {incompletedTodos.length >= 5 && (
        <p style={{ color: 'red', width: '400px', textAlign: 'center' }}>
          未完了のタスクを消化してください
        </p>
      )}

      <IncompletedTodos
        incompletedTodos={incompletedTodos}
        completeTask={completeTask}
        deleteTask={deleteTask}
      ></IncompletedTodos>

      <CompletedTodos
        completedTodos={completedTodos}
        restoreTask={restoreTask}
      ></CompletedTodos>

      <div className="App">
        <input
          className="practice-input"
          type="text"
          value={text}
          onChange={changeText}
        />
        <button onClick={openArea}>表示</button>
        <ChildrenArea open={open} closeArea={closeArea}></ChildrenArea>
      </div>
    </>
  );
};
