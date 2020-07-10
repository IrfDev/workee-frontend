import { combineReducers } from "redux";

import projects from "./reducers/Project";
import nav from "./reducers/Nav";
import forms from "./reducers/Forms";

export default combineReducers({
  projects,
  nav,
  forms,
});
