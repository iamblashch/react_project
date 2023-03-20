import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import * as api from '../../shared/Api/auth';

export const allTransactions = createAsyncThunk(
  'transaction/get',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.allTransactions(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transaction/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addTransaction(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  'get/category',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.Categories(auth.token);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const getSummary = createAsyncThunk(
  "getSummary",
  async (period = "", { rejectWithValue }) => {
    try {
      const data  = await api.getSummary(period);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/delete',
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.deleteTransaction(id);
      console.log('result :>> ', result);
      return id;
      
      
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
)
export const editTransaction = createAsyncThunk(
  'transactions/editTransaction',
  async (data, { rejectWithValue }) => {
    console.log('data :>> ', data);
    try {
      const result = await api.editTransaction(data);
      console.log('result :>> ', data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
)

//   export const editTransactions = createAsyncThunk(
//     'transactions/editTransaction',
//     async (data, thunkAPI) => {
//       try {
//         const response = await api.editTransaction(data);
//         console.log('response :>> ', response);
//         return response;
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//       }
//     }
// );
