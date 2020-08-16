// import { projects as defaultProjects } from '../schemas/Project';
import { SET_ACTIVE_TAB, SET_NAV_MESSAGE } from "../actions/Nav";

const projectsReducer = (nav = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...nav,
        activeNav: action.payload,
        isLoading: true,
        error: null,
      };
    case SET_NAV_MESSAGE:
      return {
        ...nav,
        message: action.message,
      };

    default:
      return {
        ...nav,
        activeNav: "Weekly",
      };
  }
};
export default projectsReducer;
