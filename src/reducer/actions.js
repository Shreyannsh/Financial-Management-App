import axios from "axios";

import {
  INCOME_LIST,
  ADD_SAVING,
  ADD_EXPENSE,
  ADD_INCOME,
  SAVING_LIST,
  EXPENSE_LIST,
  ERROR,
} from "./const";

export const fetch_income = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://financial-app-backend.vercel.app/v1/api/income/incomes"
    );

    dispatch({ type: INCOME_LIST, payload: response.data.data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const fetch_expense = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://financial-app-backend.vercel.app/v1/api/expense/expenses"
    );

    dispatch({ type: EXPENSE_LIST, payload: response.data.data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const fetch_savings = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://financial-app-backend.vercel.app/v1/api/savings/savings"
    );

    dispatch({ type: SAVING_LIST, payload: response.data.data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const add_savings = (saving) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://financial-app-backend.vercel.app/v1/api/savings/add-saving",
      { ...saving }
    );

    dispatch({ type: ADD_SAVING, payload: response.data.data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const add_income = (income) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://financial-app-backend.vercel.app/v1/api/income/add-income",
      { ...income }
    );
    dispatch({ type: ADD_INCOME, payload: response.data.data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const add_expense = (expense) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://financial-app-backend.vercel.app/v1/api/expense/add-expense",
      expense
    );

    dispatch({ type: ADD_EXPENSE, payload: response.data.data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};
