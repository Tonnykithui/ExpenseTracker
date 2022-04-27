import axios from "axios";
import { getTransThunk } from "../GetTransaction/GetTransActions";
import {
  DELETE_TRANSACTION_ERR,
  DELETE_TRANSACTION_REQ,
  DELETE_TRANSACTION_SUC,
} from "./DeleteType";

export const deleteTransactionReq = (id) => {
  return {
    type: DELETE_TRANSACTION_REQ,
    payload: id,
  };
};

export const deleteTransactionSuc = (success) => {
  return {
    type: DELETE_TRANSACTION_SUC,
    payload: success,
  };
};

export const deleteTransactionErr = (error) => {
  return {
    type: DELETE_TRANSACTION_ERR,
    payload: error,
  };
};

export const deleteTransactionThunk = (id) => {
  return (dispatch) => {
    dispatch(deleteTransactionReq());
    axios
      .delete(`http://localhost:5000/expenses/${id}`)
      .then((response) => {
        const data = response.data;
        dispatch(deleteTransactionSuc(data));
        dispatch(getTransThunk());
      })
      .catch((error) => {
        const errMsg = error.Message;
        dispatch(errMsg);
      });
  };
};
