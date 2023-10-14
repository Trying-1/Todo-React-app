import "./List.css";
const List = (props) => {
  const list = props.getlist;
  const isDone = true;
  return (
    <div className="list-container">
      {list.map((member, index) => (
        <div key={index} className="task-container">
          <button className="task-status">
            {isDone ? "Done" : "Mark as Done"}
          </button>
          <h1 className="tasks">{member}</h1>
          <button className="edit-button">Edit</button>
          <button className="delete-button">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default List;
