import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import Board from "./components/Board/Board";
const App = () => {
  const [inputSubTask, setInputSubTask] = useState("");
  const [subTasks, setSubTasks] = useState([]);
  return (
    <div className="app">
      <Header />
      <Board
        inputSubTask={inputSubTask}
        setInputSubTask={setInputSubTask}
        subTasks={subTasks}
        setSubTasks={setSubTasks}
      />
    </div>
  );
};

export default App;
