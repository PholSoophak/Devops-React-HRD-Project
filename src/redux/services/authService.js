import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../../api/api"

export const loginAuth = createAsyncThunk(
  'auth/loginAuth',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await api.post(
        `auth/login`,
        { email, password },
        config
      )
      // store user's token in local storage
     localStorage.setItem('userToken', data.payload.token)
     //console.log(data);
      return data
    } catch (error) {
    
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.response.status)
      }
      
    }
  }
  
)
export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await api.post(
        `auth/register`,
        { email, password },
        config
      )
      // store user's token in local storage
      return data
    } catch (error) {
        console.log(error);
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
const authService={loginAuth,registerUser}

export default authService