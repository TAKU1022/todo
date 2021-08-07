import React from 'react';

export const IncompletedTodos = (props) => {
  const { incompletedTodos, completeTask, deleteTask } = props;

  return (
    <div className="incomplete-area">
      <p>未完了のTODO</p>
      <ul>
        {incompletedTodos.map((todo, index) => {
          return (
            <li className="list-row" key={index}>
              <span>{todo}</span>
              <button onClick={() => completeTask(index)}>完了</button>
              <button onClick={() => deleteTask(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
