// import { projects as defaultProjects } from '../schemas/Project';
import {
  FETCH_PROJECTS,
  SET_PROJECTS,
  SET_ACTIVE_PROJECT,
} from "../actions/Projects";

const projectsReducer = (projects = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        projects,
        isLoading: true,
        error: null,
      };

    case SET_PROJECTS:
      return {
        projects: action.payload,
        isLoading: false,
        error: null,
      };

    case SET_ACTIVE_PROJECT:
      return {
        ...projects,
        activeProject: action.payload,
      };

    default:
      return projects;
  }
};
export default projectsReducer;
