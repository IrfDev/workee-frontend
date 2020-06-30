import { combineReducers } from "redux";

import projects from "./reducers/Project";
import repos from "./reducers/Repos";
import reads from "./reducers/Reads";
import nav from "./reducers/Nav";

export default combineReducers({
  projects,
  repos,
  reads,
  nav,
});
