import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import ShowModalFormReducer from "./TransactionMod/TransReducer";
import transactionReducer from "./AddTransaction/AddReducer";
import getTransReducer from "./GetTransaction/GetTransReducer";

const combined = combineReducers({
  addTransactionForm: ShowModalFormReducer,
  addTransaction: transactionReducer,
  getTransaction: getTransReducer,
});

const store = createStore(
  combined,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
