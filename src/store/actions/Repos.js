export const REPOS = "[REPOS]";

export const FETCH_REPOS = `${REPOS} FETCH`;

export const SET_REPOS = `${REPOS} SET`;

export const setRepos = (projects) => ({
  type: SET_REPOS,
  payload: projects,
});

export const fetchRepos = () => ({
  type: FETCH_REPOS,
});
