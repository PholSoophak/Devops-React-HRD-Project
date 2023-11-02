import { createSlice } from "@reduxjs/toolkit";
import { getTask, getTaskById, getTaskByStatus, removeTask, updateTaskById } from "../services/taskService";
const initialState = {
  loading: false,
  task: [],
  error: null,
  success: false,
}
const taskSlice = createSlice({
  name: 'task',
  initialState,
  extraReducers: {

    [getTask.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getTask.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.task = payload.payload

    },
    [getTask.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    [getTaskByStatus.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getTaskByStatus.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.task = payload.payload

    },
  
    [getTaskByStatus.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [removeTask.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [removeTask.fulfilled]: (state, { action }) => {
      state.loading = false
      state.task = state.task.filter((item)=>item.taskId!==action.payload)
    },
    [removeTask.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [getTaskById.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getTaskById.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.task = payload.payload

    },
    [getTaskById.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [updateTaskById.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [updateTaskById.fulfilled]: (state,{action}) => {
      state.loading = false
    },
    [updateTaskById.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

},
})

export default taskSlice.reducer