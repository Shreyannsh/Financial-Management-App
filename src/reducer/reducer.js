import {
  INCOME_LIST,
  ADD_SAVING,
  ADD_EXPENSE,
  ADD_INCOME,
  SAVING_LIST,
  EXPENSE_LIST,
} from "./const";

const initialState = {
  income: [],
  expense: [],
  saving: [],
  isActive: "",
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCOME_LIST:
      return { ...state, income: action.payload };

    case EXPENSE_LIST:
      return { ...state, expense: action.payload };

    case SAVING_LIST:
      return { ...state, saving: action.payload };

    case ADD_INCOME:
      return { ...state, income: [...state.income, action.payload] };

    case ADD_EXPENSE:
      return { ...state, expense: [...state.expense, action.payload] };

    case ADD_SAVING:
      return { ...state, saving: [...state.saving, action.payload] };

    case "IS_ACTIVE":
      return { ...state, isActive: action.payload };

    case "START_LOADING":
      return { ...state, isLoading: true };

    case "STOP_LOADING":
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default reducer;
