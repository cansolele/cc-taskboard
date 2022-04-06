import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const APP_TOKEN = {
  id: 4,
  token: "s&?sfhb-hH))Grs[e%gA6-q^2uD-q~Jf42sJkCyV&<J7rxZR[@LpMXvbLc^S-Zgz",
};
export const fetchBoard = createAsyncThunk("board/fetchBoard", async () => {
  const APP_TOKEN = {
    id: 4,
    token: "s&?sfhb-hH))Grs[e%gA6-q^2uD-q~Jf42sJkCyV&<J7rxZR[@LpMXvbLc^S-Zgz",
  };
  const BODY = {
    board_id: 1,
  };
  const response = await fetch("http://192.168.31.79:3001/board", {
    credentials: "omit",
    headers: {
      "App-Token": Buffer(JSON.stringify(APP_TOKEN)).toString("base64"),
    },
    body: Buffer(JSON.stringify(BODY)).toString("base64"),
    method: "POST",
    mode: "cors",
  });
  return await response.json();
});
export const changeTitleCard = createAsyncThunk(
  "board/changeTitleCard",
  async (params, { dispatch }) => {
    const card = {
      board_id: params.board_id,
      card_id: params.card_id,
      title: params.inputCardTitle,
    };
    await fetch("http://192.168.31.79:3001/card", {
      method: "PATCH",
      credentials: "omit",
      headers: {
        "App-Token": Buffer(JSON.stringify(APP_TOKEN)).toString("base64"),
      },
      body: Buffer(JSON.stringify(card)).toString("base64"),
      mode: "cors",
    });
    dispatch(editCardTitle({ card }));
  }
);
export const changeTitleTask = createAsyncThunk(
  "board/changeTitleTask",
  async (params, { dispatch }) => {
    const task = {
      board_id: params.board_id,
      card_id: params.card_id,
      task_id: params.task_id,
      title: params.inputTaskTitle,
    };
    await fetch("http://192.168.31.79:3001/task", {
      method: "PATCH",
      credentials: "omit",
      headers: {
        "App-Token": Buffer(JSON.stringify(APP_TOKEN)).toString("base64"),
      },
      body: Buffer(JSON.stringify(task)).toString("base64"),
      mode: "cors",
    });
    dispatch(editTaskTitle({ task }));
  }
);
export const changeTaskStatus = createAsyncThunk(
  "board/changeTaskStatus",
  async (params) => {
    const task = {
      board_id: params.board_id,
      card_id: params.card_id,
      task_id: params.task_id,
      exec: params.exec,
    };
    await fetch("http://192.168.31.79:3001/task", {
      method: "PATCH",
      credentials: "omit",
      headers: {
        "App-Token": Buffer(JSON.stringify(APP_TOKEN)).toString("base64"),
      },
      body: Buffer(JSON.stringify(task)).toString("base64"),
      mode: "cors",
    });
  }
);

export const postSubTask = createAsyncThunk(
  "board/postSubTask",
  async (params, { dispatch }) => {
    const subTask = {
      board_id: params.board_id,
      card_id: params.card_id,
      task_id: params.task_id,
      subtask: {
        id: 0,
        author: 0,
        title: params.inputSubTask,
        executors: [],
        exec: false,
        tags: [],
        timelines: {
          preferred_time: 1234567890,
          max_time: 1234567890,
          expected_time: 1234567890,
        },
      },
    };
    const response = await fetch("http://192.168.31.79:3001/subtask", {
      method: "PUT",
      credentials: "omit",
      headers: {
        "App-Token": Buffer(JSON.stringify(APP_TOKEN)).toString("base64"),
      },
      body: Buffer(JSON.stringify(subTask)).toString("base64"),
      mode: "cors",
    });
    const subtask_id = await response.json();
    dispatch(addSubTask({ subtask_id, subTask }));
  }
);
export const changeSubTaskTitle = createAsyncThunk(
  "board/changeSubTaskTitle",
  async (params, { dispatch }) => {
    const subTask = {
      board_id: params.board_id,
      card_id: params.card_id,
      task_id: params.task_id,
      subtask_id: params.subtask_id,
      title: params.inputSubTask,
    };
    await fetch("http://192.168.31.79:3001/subtask", {
      method: "PATCH",
      credentials: "omit",
      headers: {
        "App-Token": Buffer(JSON.stringify(APP_TOKEN)).toString("base64"),
      },
      body: Buffer(JSON.stringify(subTask)).toString("base64"),
      mode: "cors",
    });
    dispatch(editSubTaskTitle({ subTask }));
  }
);
export const changeSubTaskStatus = createAsyncThunk(
  "board/changeSubTaskStatus",
  async (params) => {
    const subTask = {
      board_id: params.board_id,
      card_id: params.card_id,
      task_id: params.task_id,
      subtask_id: params.subtask_id,
      exec: params.exec,
    };
    await fetch("http://192.168.31.79:3001/subtask", {
      method: "PATCH",
      credentials: "omit",
      headers: {
        "App-Token": Buffer(JSON.stringify(APP_TOKEN)).toString("base64"),
      },
      body: Buffer(JSON.stringify(subTask)).toString("base64"),
      mode: "cors",
    });
  }
);
export const changeNote = createAsyncThunk(
  "board/changeNote",
  async (params, { dispatch }) => {
    const notes = {
      board_id: params.board_id,
      card_id: params.card_id,
      task_id: params.task_id,
      notes: params.inputNotes,
    };
    await fetch("http://192.168.31.79:3001/task", {
      method: "PATCH",
      credentials: "omit",
      headers: {
        "App-Token": Buffer(JSON.stringify(APP_TOKEN)).toString("base64"),
      },
      body: Buffer(JSON.stringify(notes)).toString("base64"),
      mode: "cors",
    });
    dispatch(editNotes({ notes }));
  }
);

const boardSlice = createSlice({
  name: "board",
  initialState: {
    board: [],
  },
  reducers: {
    addSubTask(state, action) {
      const cardID = state.board.cards.findIndex(
        (item) => item.id === action.payload.subTask.card_id
      );
      const taskID = state.board.cards[cardID].tasks.findIndex(
        (item) => item.id === action.payload.subTask.task_id
      );
      const subtask = action.payload.subTask.subtask;
      subtask.id = action.payload.subtask_id;
      state.board.cards[cardID].tasks[taskID].subtasks.push(subtask);
    },
    editSubTaskTitle(state, action) {
      const cardID = state.board.cards.findIndex(
        (item) => item.id === action.payload.subTask.card_id
      );
      const taskID = state.board.cards[cardID].tasks.findIndex(
        (item) => item.id === action.payload.subTask.task_id
      );
      const subtaskID = state.board.cards[cardID].tasks[
        taskID
      ].subtasks.findIndex(
        (item) => item.id === action.payload.subTask.subtask_id
      );
      state.board.cards[cardID].tasks[taskID].subtasks[subtaskID].title =
        action.payload.subTask.title;
    },
    editCardTitle(state, action) {
      const cardID = state.board.cards.findIndex(
        (item) => item.id === action.payload.card.card_id
      );
      state.board.cards[cardID].title = action.payload.card.title;
    },
    editTaskTitle(state, action) {
      const cardID = state.board.cards.findIndex(
        (item) => item.id === action.payload.task.card_id
      );
      const taskID = state.board.cards[cardID].tasks.findIndex(
        (item) => item.id === action.payload.task.task_id
      );
      state.board.cards[cardID].tasks[taskID].title = action.payload.task.title;
    },
    editNotes(state, action) {
      const cardID = state.board.cards.findIndex(
        (item) => item.id === action.payload.notes.card_id
      );
      const taskID = state.board.cards[cardID].tasks.findIndex(
        (item) => item.id === action.payload.notes.task_id
      );
      state.board.cards[cardID].tasks[taskID].notes =
        action.payload.notes.notes;
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
const {
  editCardTitle,
  editTaskTitle,
  editSubTaskTitle,
  addSubTask,
  editNotes,
} = boardSlice.actions;
export default boardSlice.reducer;
