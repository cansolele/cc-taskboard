import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoard } from "./store/boardSlice";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBoard());
  }, [dispatch]);
  const board = useSelector((state) => state.board.board);
  return (
    <div className="app">
      <Header header={board.header} />
      <Board key={board.id} board={board} />
    </div>
  );
};

export default App;
