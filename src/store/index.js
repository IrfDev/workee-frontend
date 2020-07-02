import { combineReducers } from "redux";

import projects from "./reducers/Project";
import repos from "./reducers/Repos";
import reads from "./reducers/Reads";
import nav from "./reducers/Nav";
import forms from "./reducers/Forms";

export default combineReducers({
  projects,
  repos,
  reads,
  nav,
  forms,
});
