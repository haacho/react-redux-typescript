import { createStore } from "redux";
import { notesReducer } from "./notesReducer";

export const store = createStore(
  notesReducer,
  null,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
