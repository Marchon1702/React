import PropTypes from "prop-types";
import ButtonList from "../ButtonList";
import { IoIosAdd } from "react-icons/io";
import { useTaskContext } from "../../hooks/useTaskContext";
import { v4 as uuidv4 } from 'uuid';

const TextArea = ({ type, value, id, placeholder, label, handleChange, setTaskValue }) => {
  const {addTask} = useTaskContext()
  
  return (
    <div className="textArea">
      <label htmlFor={id}>{label}</label>
      <div className="addTaskArea">
          <input type={type} value={value} placeholder={placeholder} onChange={(e) => handleChange(e.target.value)} id={id}/>
          <ButtonList
          type='submit'
            handleClick={(e) => {
              e.preventDefault()
              addTask({id: uuidv4(), name: value})
              setTaskValue('')
            }}
          >
            <IoIosAdd/>
          </ButtonList>
      </div>
    </div>
  );
};

TextArea.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  setTaskValue: PropTypes.func
};

export default TextArea;
