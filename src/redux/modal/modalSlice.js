import { createSlice } from '@reduxjs/toolkit';
// import {
//   allTransactions,
//   addTransaction,
// } from 'redux/finance/finance-operation';

import {
  addTransaction,

} from "../finances/finances-operations";
import { logout } from "../auth/auth-operations";


const initialState = {
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
  isLoading: true,
};
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleModalAddTransaction: (state) => {
      state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
      
    },
    toggleModalLogout: (state) => {
      state.isModalLogoutOpen = !state.isModalLogoutOpen;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logout.fulfilled, state => {
        state.isModalAddTransactionOpen = false;
        state.isModalLogoutOpen = false;
        state.isLoading = false;
      })
      .addCase(logout.rejected, state => {
        state.isModalLogoutOpen = false;
      })
      .addCase(allTransactions.pending, state => {
        state.isLoading = true;
      })
      .addCase(allTransactions.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(allTransactions.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransaction.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(addTransaction.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const {
  toggleModalAddTransaction,
  toggleModalLogout,
  toggleIsLoading,
  resetGlobal,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
