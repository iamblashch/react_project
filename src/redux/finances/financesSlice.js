import { createSlice } from "@reduxjs/toolkit";
import {
  getSummary,
  getCategories,
  addTransaction,
  deleteTransaction,
  allTransactions
} from "./finances-operations";
import { logout, current } from "redux/auth/auth-operations";
import { toast } from "react-toastify";
// import { ConstructionOutlined } from "@mui/icons-material";

const initialState = {
  data: [],
  totalBalance: null,
  summary: null,
  error: null,
  categories: null,
  loading: false,
};

const colors = [
  "rgba(254, 208, 87, 1)",
  "rgba(255, 216, 208, 1)",
  "rgba(255, 190, 177, 1)",
  "rgba(253, 148, 152, 1)",
  "rgba(197, 186, 255, 1)",
  "rgba(110, 120, 232, 1)",
  "rgba(74, 86, 226, 1)",
  "rgba(129, 225, 255, 1)",
  "rgba(36, 204, 167, 1)",
  "rgba(0, 173, 132, 1)",
  "rgba(0, 200, 132, 1)",
];
const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(allTransactions.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(allTransactions.rejected, (state, { payload }) => {
        state.loading = false;
        console.log("allTransactions", payload);
        state.error = payload;
        if (payload) {
          toast.error("Fatal error");
        }
      })
      .addCase(getSummary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSummary.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.summary = payload;
      })
      .addCase(getSummary.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        if (payload) {
          toast.error("Fatal error");
        }
      })
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload.map((obj, i) => {
          return obj.type === "EXPENSE"
            ? { ...obj, backgroundColor: colors[i] }
            : obj;
        });
      })
      .addCase(getCategories.rejected, (state, { payload }) => {
        state.loading = false;
        console.log("getCategories", payload);
        state.error = payload;
        if (payload) {
          toast.error("Fatal error");
        }
      })
    
       .addCase(addTransaction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = [...state.data, payload];
        state.error = null;
        state.isLogin = true;
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.result = null;
      })

      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.data = null;
        state.totalBalance = null;
        state.summary = null;
        state.error = null;
        state.categories = null;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload) {
          toast.error("you are not authorized");
        } else {
          toast.error("try later");
        }
        state.error = payload;
      })
      .addCase(current.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.totalBalance = payload.balance;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // Nastya
    .addCase(deleteTransaction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.contacts = state.contacts.filter(item => item.id !== payload);
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});


export const { resetFinance } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
