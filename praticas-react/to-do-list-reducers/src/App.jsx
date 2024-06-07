import "./App.css";
import MainTaskFrame from "./components/MainTaskFrame";
import { TaskProvider } from "./contexts/TaskContext";

function App() {
  return (
    <TaskProvider>
      <main>
        <MainTaskFrame/>
      </main>
    </TaskProvider>
  );
}

export default App;
