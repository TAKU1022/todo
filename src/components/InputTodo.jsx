import React from 'react';

export const InputTodo = (props) => {
  const { todoText, changeTodoText, addTask, disabled } = props;

  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={changeTodoText}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={addTask}>
        追加
      </button>
    </div>
  );
};
