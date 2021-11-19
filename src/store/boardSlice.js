import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchBoard = createAsyncThunk("board/fetchBoard", async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/cansolele/jsonserver/page"
  );
  return await response.json();
});
export const postSubTask = createAsyncThunk(
  "board/postSubTask",
  async (inputSubTask, { dispatch }) => {
    const subTask = {
      id: Math.random() * 1000,
      subTaskName: inputSubTask,
    };
    const response = await fetch(
      "https://my-json-server.typicode.com/cansolele/jsonserver/page",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(subTask),
      }
    );
    const data = await response.json();
    dispatch(addSubTask(data));
  }
);
const boardSlice = createSlice({
  name: "board",
  initialState: {
    board: [],
    subTasks: [],
  },
  reducers: {
    addSubTask(state, action) {
      state.subTasks.push(action.payload);
    },
  },
  extraReducers: {
    [fetchBoard.pending]: (state) => {},
    [fetchBoard.fulfilled]: (state, action) => {
      state.board = action.payload;
    },
    [fetchBoard.rejected]: (state, action) => {},
  },
});
const { addSubTask } = boardSlice.actions;
export default boardSlice.reducer;
