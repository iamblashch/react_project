import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from '../../shared/Api/auth';

export const allTransactions = createAsyncThunk(
  "transactions",
  async (_, { rejectWithValue }) => {
    try {
      const transactions = await axios.get("https://wallet.goit.ua/api/transactions");
      return transactions.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const addTransaction = createAsyncThunk(
//   "add",
//   async (transaction, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post("/api/transactions", transaction);
//       const fixedData = {
//         ...data,
//         balanceAfter: Number(data.balanceAfter.toFixed(2)),
//       };
//       return fixedData;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
export const addTransaction = createAsyncThunk(
  'add/transaction',
  async (transaction, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.Transaction(auth.token,transaction);
      console.log('result :>> ', result);
      console.log('transaction :>> ', transaction);
      return result;
    } catch ({ response }) {
      console.log('response :>> ', response);
      console.log('tansactin :>> ', typeof transaction.amount);
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