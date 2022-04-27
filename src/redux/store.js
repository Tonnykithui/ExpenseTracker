import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import ShowModalFormReducer from "./TransactionMod/TransReducer";
import transactionReducer from "./AddTransaction/AddReducer";

const combined = combineReducers({
  addTransactionForm: ShowModalFormReducer,
  addTransaction: transactionReducer,
});

const store = createStore(combined, composeWithDevTools(applyMiddleware()));

export default store;
