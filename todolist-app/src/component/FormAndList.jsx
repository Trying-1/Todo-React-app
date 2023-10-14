import TodoForm from "./TodoForm";
import List from "./List";
import { useState } from "react";
const FormAndList = () => {
  const [taskList, setTasklist] = useState(["kiss", "fuck"]);
  const getTitle = (newTitle) => {
    setTasklist([newTitle, ...taskList]);
  };
  return (
    <div>
      <TodoForm getTitle={getTitle} />
      <List getlist={taskList} />
    </div>
  );
};
export default FormAndList;
