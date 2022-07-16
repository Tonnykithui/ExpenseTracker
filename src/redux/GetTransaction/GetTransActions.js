import axios from "axios";
import {
  GET_TRANSACTION_ERR,
  GET_TRANSACTION_REQ,
  GET_TRANSACTION_SUC,
} from "./GetTransType";

export const getTransReq = () => {
  return {
    type: GET_TRANSACTION_REQ,
  };
};

export const getTransSuc = (transactions) => {
  return {
    type: GET_TRANSACTION_SUC,
    payload: transactions,
  };
};

export const getTransErr = (error) => {
  return {
    type: GET_TRANSACTION_ERR,
    payload: error,
  };
};

export const getTransThunk = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/expenses")
      .then((response) => {
        const d = response.data;
        dispatch(getTransSuc(d));
      })
      .catch((error) => {
        const err = error.Message;
        dispatch(getTransErr(err));
      });
  };
};
