import "./App.css";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import { useState } from "react";
const App = () => {
  const [inputSubTask, setInputSubTask] = useState("");
  const [subTasks, setSubTasks] = useState([]);
  return (
    <div className="app">
      <Header />
      <Tasks
        inputSubTask={inputSubTask}
        setInputSubTask={setInputSubTask}
        subTasks={subTasks}
        setSubTasks={setSubTasks}
      />
    </div>
  );
};

export default App;
