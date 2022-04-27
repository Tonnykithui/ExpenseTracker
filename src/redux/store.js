import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import ShowModalFormReducer from "./TransactionMod/TransReducer";
import transactionReducer from "./AddTransaction/AddReducer";

const combined = combineReducers({
  addTransactionForm: ShowModalFormReducer,
  addTransaction: transactionReducer,
});

const store = createStore(
  combined,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
