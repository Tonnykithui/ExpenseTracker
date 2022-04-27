import {
  DELETE_TRANSACTION_ERR,
  DELETE_TRANSACTION_REQ,
  DELETE_TRANSACTION_SUC,
} from "./DeleteType";

const init = {
  loading: false,
  data: [],
  error: "",
};

const deleteTransactionReducer = (state = init, action) => {
  switch (action.type) {
    case DELETE_TRANSACTION_REQ:
      return {
        ...state,
        loading: true,
      };

    case DELETE_TRANSACTION_SUC:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case DELETE_TRANSACTION_ERR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default deleteTransactionReducer;
