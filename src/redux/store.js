import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import ShowModalFormReducer from "./TransactionMod/TransReducer";

const store = createStore(
  ShowModalFormReducer,
  composeWithDevTools(applyMiddleware())
);
export default store;
