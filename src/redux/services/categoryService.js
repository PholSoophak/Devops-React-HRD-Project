import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const token = localStorage.getItem("userToken");

export const getCategory = createAsyncThunk('category/getCategory',
    async () => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
            const { data } = await api.get(
                'categories/users', config
            )
            // store user's token in local storage
            // console.log(data);
            return data
        } catch (error) {
            console.log(error);

        }
    })
const categoryService = { getCategory }

export default categoryService

