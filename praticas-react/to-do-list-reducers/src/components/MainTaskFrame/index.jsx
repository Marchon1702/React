import { useState } from "react";
import TaskList from "../TaskList";
import TextArea from "../TextArea";

const MainTaskFrame = () => {
  const [taskValue, setTaskValue] = useState();

  return (
    <section className="mainTaskFrame">
      <h1>To-do-List</h1>
      <TaskList />
      <footer>
        <TextArea
          label={"Adicionar Tarefa"}
          type="text"
          value={taskValue}
          id="input-add"
          placeholder={"Digite sua tarefa aqui..."}
          handleChange={(value) => {
            setTaskValue(value);
          }}
          setTaskValue={setTaskValue}
        />
        <span>© All rights reserved to Matheus Marchon</span>
      </footer>
    </section>
  );
};

export default MainTaskFrame;
