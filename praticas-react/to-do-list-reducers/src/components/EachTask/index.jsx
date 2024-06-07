import ButtonList from "../ButtonList";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from 'prop-types';
import { useTaskContext } from "../../hooks/useTaskContext";
import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";

const EachTask = ({taskProp}) => {
  const {removeTask} = useTaskContext()
  const {editTask} = useContext(TaskContext)

  return (
    <li className="eachTask">
      <span>{taskProp.name}</span>
      <div className="buttons-area">
          <ButtonList>
            <FaEdit onClick={() => editTask(taskProp)}/>
          </ButtonList>
          <ButtonList>
            <MdDeleteForever onClick={() => removeTask(taskProp)}/>
          </ButtonList>
      </div>
    </li>
  );
};

EachTask.propTypes = {
    taskProp: PropTypes.string.isRequired
}

export default EachTask;
