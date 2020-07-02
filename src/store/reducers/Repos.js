import { FETCH_REPOS, SET_REPOS } from "../actions/Repos";

const reposReducer = (repos = [], action) => {
  switch (action.type) {
    case FETCH_REPOS:
      return {
        repos,
        isLoading: true,
        error: null,
      };

    case SET_REPOS:
      return {
        repos: action.payload,
        isLoading: false,
        error: null,
      };

    default:
      return repos;
  }
};
export default reposReducer;
