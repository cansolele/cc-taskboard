import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBoard } from "./store/boardSlice";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBoard());
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      <Board />
    </div>
  );
};

export default App;
