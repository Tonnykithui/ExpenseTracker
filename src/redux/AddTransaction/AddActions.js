import {
  ADD_TRANSACTION_ERR,
  ADD_TRANSACTION_REQ,
  ADD_TRANSACTION_SUC,
} from "./AddType";

import axios from "axios";
import { getTransReq } from "../GetTransaction/GetTransActions";

export const addTransReq = (transaction) => {
  return {
    type: ADD_TRANSACTION_REQ,
    payload: transaction,
  };
};

export const addTransSucc = (success) => {
  return {
    type: ADD_TRANSACTION_SUC,
    payload: success,
  };
};

export const addTransErr = (error) => {
  return {
    type: ADD_TRANSACTION_ERR,
    payload: error,
  };
};

export const addTransThunk = (transaction) => {
  return (dispatch) => {
    dispatch(addTransReq());
    dispatch(getTransReq());
    axios
      .post("http://localhost:5000/expenses", transaction)
      .then((response) => {
        const feed = response.data;
        dispatch(addTransSucc(feed));
      })
      .catch((error) => {
        const err = error.Message;
        dispatch(addTransErr(err));
      });
  };
};
