import "./App.css";
import react, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppW from "./components/AppWrap/AppW";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <AppW />
      </div>
    </Provider>
  );
};

export default App;
