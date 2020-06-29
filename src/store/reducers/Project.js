// import { projects as defaultProjects } from '../schemas/Project';
import { FETCH_PROJECTS, SET_PROJECTS } from "../actions/Projects";

const projectsReducer = (projects = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        projects,
        isLoading: true,
        error: null,
      };

    case SET_PROJECTS:
      console.log("Reducer:", action.payload);
      return {
        ...action.payload,
        isLoading: false,
        error: null,
      };

    default:
      return projects;
  }
};
export default projectsReducer;
