import { useContext } from "react";
import EachTask from "../EachTask";
import { TaskContext } from "../../contexts/TaskContext";

const TaskList = () => {
  const {allTasks} = useContext(TaskContext)

  return (
    <ul className="taskList">
      {allTasks.map(task => 
      <EachTask 
      key={task.id} 
      taskProp={task}>
      </EachTask>
      )}
    </ul>
  );
};

export default TaskList;
