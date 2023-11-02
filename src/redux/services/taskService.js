import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { api } from "../../api/api";

const token = localStorage.getItem("userToken");

export const getTask = createAsyncThunk('task/getTask',
    async () => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
            const { data } = await api.get(
                'tasks', config
            )
            // store user's token in local storage
            // console.log(data);
            return data
        } catch (error) {
            console.log(error);

        }
    })
export const addTask = createAsyncThunk('task/addTask',
    async ({ taskName, description, date, status, categoryId }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
            const { data } = await api.post(
                'tasks/users', { taskName, description, date, status, categoryId }, config
            )
        } catch (error) {
            console.log(error);

        }
    })
// /&asc
export const getTaskByStatus = createAsyncThunk('task/getTask',
    async (status) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
            const { data } = await api.get(
                `tasks/users?status=${status}`, config
            )
            // store user's token in local storage
            // console.log(data);
            return data
        } catch (error) {
            console.log(error);

        }
    })
export const removeTask = createAsyncThunk('task/removeTask',
    async (id) => {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }
        const data = await api.delete(
            `${id}/users`, config
        )
       // console.log(data.status);
        return data;
    }
)
///tasks/45/users
export const getTaskById = createAsyncThunk('task/getTaskById',
    async (id) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
            const { data } = await api.get(
                `tasks/${id}/users`, config
            )
            // store user's token in local storage
            // console.log(data);
            return data
        } catch (error) {
            console.log(error);

        }
    })
export const updateTaskById = createAsyncThunk('task/updateTaskById',
    async (obj) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
            const { data } = await api.put(
                `${obj.taskId}/users`, {
                taskName: obj.taskName
                , description: obj.description
                , date: obj.date,
                status: obj.status,
                categoryId: obj.categoryId
            }, config
            )
            // store user's token in local storage
            console.log(data);
            return data
        } catch (error) {
            console.log(error);

        }
    })
const taskService = { getTask, addTask, removeTask, getTaskByStatus, getTaskById, updateTaskById }

export default taskService