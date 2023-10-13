import TodoForm from "./TodoForm";
import List from "./List";
import { useState } from "react";
const FormAndList = () => {
  const [taskList, setTasklist] = useState([]);
  const getListFromTodoForm = (data) => {
  console.log(data)
  };
  return (
    <div>
      <TodoForm getListFromTodoForm={getListFromTodoForm} />
      <List getlist={taskList} />
    </div>
  );
};
export default FormAndList;
