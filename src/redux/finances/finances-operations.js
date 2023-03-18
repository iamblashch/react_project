import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from '../../shared/Api/auth';

// export const allTransactions = createAsyncThunk(
//   "transactions",
//   async (_, { rejectWithValue }) => {
//     try {
//       const transactions = await axios.get("https://wallet.goit.ua/api/transactions");
//       return transactions.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const allTransactions = createAsyncThunk(
  'transaction/get',
  async (data, { rejectWithValue }) => {
    try {
      console.log('hi')
      const result = await api.allTransactions(data);
      console.log(result);

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
      console.log(result);

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
      console.log('result :>> ', result);
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
      const { data } = await axios.get(`api/transactions-summary${period}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);





// Nastya

export const deleteTransaction = createAsyncThunk(
  'delete',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${id}`);
      console.log(id)
      console.log(data)
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);