import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducer/allReducers";

const store = configureStore(
  { reducer: reducers },
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
