// import { projects as defaultProjects } from '../schemas/Project';
import { SET_ACTIVE_TAB } from "../actions/Nav";

const projectsReducer = (nav = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...nav,
        activeNav: action.payload,
        isLoading: true,
        error: null,
      };

    default:
      return nav;
  }
};
export default projectsReducer;
