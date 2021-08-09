export const CompletedTodos = (props) => {
  const { completedTodos, restoreTask } = props;

  return (
    <div className="complete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {completedTodos.map((todo, index) => {
          return (
            <li className="list-row" key={index}>
              <span>{todo}</span>
              <button onClick={() => restoreTask(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
