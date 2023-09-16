import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [todoInputValue, setTodoInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [memoInputValue, setMemoInputValue] = useState('');
  const [memos, setMemos] = useState([]);

  const handleAddTodo = () => {
    if (todoInputValue.length >= 5) {
      setTodos([...todos, todoInputValue]);
      setTodoInputValue('');
    } else {
      alert('Todo must be at least 5 characters long.');
    }
  };

  const handleAddMemo = () => {
    if (memoInputValue.length >= 5) {
      setMemos([...memos, memoInputValue]);
      setMemoInputValue('');
    }
  };

  return (
    <div>
      <h1 id='main'>React.useMemo</h1>
      <h1>My Todos</h1>
      <p>New Todo</p>
      <div id="todo">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
      <input
        id="mD"
        type="text"
        minLength={5}
        value={todoInputValue}
        onChange={(e) => setTodoInputValue(e.target.value)}
      />
      <button id='add-todo-btn' onClick={handleAddTodo}>Add Todo</button>
      <hr />
      <p>Count: {count}</p>
      <button id='incr-cnt' onClick={() => setCount(count + 1)}>+</button>
      <br />
      <h1>Expensive Calculation</h1>
      <h1>React.memo</h1>
      <input
        id="m"
        type="text"
        minLength={5}
        value={memoInputValue}
        onChange={(e) => setMemoInputValue(e.target.value)}
      />
      <button onClick={handleAddMemo}>Add Skill</button>
      <div id="memo">
        <ul id='skill-input'>
          {memos.map((memo, index) => (
            <li key={index}>{memo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
