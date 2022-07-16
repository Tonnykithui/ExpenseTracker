import {
  ADD_TRANSACTION_ERR,
  ADD_TRANSACTION_REQ,
  ADD_TRANSACTION_SUC,
} from "./AddType";

const initState = {
  loading: false,
  data: [],
  error: "",
};

const transactionReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION_REQ:
      return {
        ...state,
        loading: true,
      };

    case ADD_TRANSACTION_SUC:
      return {
        ...state,
        data: action.payload,
      };

    case ADD_TRANSACTION_ERR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
