import { useState } from "react";
import checkIcon from "../assets/images/icon-check.svg";
import crossIcon from "../assets/images/icon-cross.svg"; // Assume this is the cross icon image

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleClearCompleted = () => {
    const activeTodos = todos.filter(todo => !todo.completed);
    setTodos(activeTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo">
      <div className="input-box">
        <div className="check-circle" onClick={handleAddTodo}></div>
        <input
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && handleAddTodo()}
          className="input-task"
          type="text"
          placeholder="Create a new todo"
          value={task}
        />
      </div>
      <div className="todo-list">
        {filteredTodos.map((todo, index) => (
          <div key={index}>
            <div className="todo-box">
              <div className="check-circle" onClick={() => handleToggleComplete(index)}>
                {todo.completed && <img src={checkIcon} alt="completed" />}
              </div>
              <div className={`task ${todo.completed ? 'completed' : ''}`}>{todo.task}</div>
              <div className="delete-todo" onClick={() => handleDeleteTodo(index)}>
                <img src={crossIcon} alt="delete" />
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="details">
        <div className="item-count  clickBtn">{todos.filter(todo => !todo.completed).length} items left</div>
        <div className="all-items  clickBtn" onClick={() => setFilter('all')}>All</div>
        <div className="active-item  clickBtn" onClick={() => setFilter('active')}>Active</div>
        <div className="completed  clickBtn" onClick={() => setFilter('completed')}>Completed</div>
        <div className="clear-item  clickBtn" onClick={handleClearCompleted}>Clear completed</div>
      </div>
    </div>
  );
};

export default Todo;
