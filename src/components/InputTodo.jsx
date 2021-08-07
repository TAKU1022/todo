import React from 'react';

export const InputTodo = (props) => {
  const { todoText, changeTodoText, addTask } = props;

  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={changeTodoText}
      />
      <button onClick={addTask}>追加</button>
    </div>
  );
};
