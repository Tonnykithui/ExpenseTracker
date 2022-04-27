import {
  GET_TRANSACTION_ERR,
  GET_TRANSACTION_REQ,
  GET_TRANSACTION_SUC,
} from "./GetTransType";

const init = {
  loading: false,
  data: [],
  error: "",
};

const getTransReducer = (state = init, action) => {
  switch (action.type) {
    case GET_TRANSACTION_REQ:
      return {
        ...state,
        loading: true,
      };

    case GET_TRANSACTION_SUC:
      return {
        ...state,
        data: action.payload,
      };

    case GET_TRANSACTION_ERR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getTransReducer;
