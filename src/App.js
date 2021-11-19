import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import Board from "./components/Board/Board";
const App = () => {
  const [subTasks, setSubTasks] = useState([]);
  return (
    <div className="app">
      <Header />
      <Board subTasks={subTasks} setSubTasks={setSubTasks} />
    </div>
  );
};

export default App;
