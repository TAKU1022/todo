import React, { useState } from 'react';

export const App = () => {
  const [imcompleteTodos, setimcompleteTodos] = useState([
    'ああああ',
    'いいいい',
  ]);
  const [completeTodos, setcompleteTodos] = useState(['うううう']);

  return (
    <React.Fragment>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p>未完了のTODO</p>
        <ul>
          {imcompleteTodos.map((todo) => {
            return (
              <li className="list-row" key={todo}>
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p>未完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li className="list-row" key={todo}>
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};
