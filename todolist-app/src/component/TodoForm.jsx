import React, { useState } from "react";
function TodoForm(props) {
  const [title, setTitle] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasklist([title, ...tasklist]);
    props.getListFromTodoForm(tasklist);
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          placeholder="what to add?"
          onChange={handleChange}
          value={title}
        />
        <button className="form-btn" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
