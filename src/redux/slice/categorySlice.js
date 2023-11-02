import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { useDispatch } from "react-redux";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
export const categorySlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    getDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getDataFailure: (state, action) => {
      state.data = [];
      state.loading = false;
      state.error = action.payload;
    },
    deleteDataSuccess: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload
      );
      state.data.splice(index, 1);
    },
  },
});

export const {
  setLoading,
  getDataSuccess,
  getDataFailure,
  deleteDataSuccess,
} = categorySlice.actions;



const token = localStorage.getItem("userToken");

const config = {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}


// export const fetchData = createAsyncThunk('data/fetchData', async () => {
//   // const dispatch = useDispatch();
//   const response = await api.get("/categories/users?asc=false&des=false&pageNo=1&pageSize=10", config);
//   return response.data.payload;
// });

export const fetchData = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.get('/categories/users?asc=false&des=false&pageNo=1&pageSize=10', config);
    dispatch(getDataSuccess(response.data.payload));
  } catch (error) {
    dispatch(getDataFailure(error.message));
  }
};

export const deleteData = (id) => async (dispatch) => {
  try {
    await api.delete(`/categories/${id}/users`, config);
    dispatch(deleteDataSuccess(id));
  } catch (error) {
    console.log(error);
  }
};



export default categorySlice.reducer;