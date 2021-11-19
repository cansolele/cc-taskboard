import { createSlice } from "@reduxjs/toolkit";
const cardSlice = createSlice({
  name: "cards",
  initialState: {
    subTasks: [],
  },
  reducers: {
    addSubTask(state, action) {
      state.subTasks.push({
        text: action.payload.inputSubTask,
        id: Math.random() * 1000,
      });
    },
  },
});

export const { addSubTask } = cardSlice.actions;
export default cardSlice.reducer;
