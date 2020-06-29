export const PROJECTS = "[PROJECTS]";

export const FETCH_PROJECTS = `${PROJECTS} FETCH`;

export const SET_PROJECTS = `${PROJECTS} SET`;

export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  payload: projects,
});

export const fetchProjects = () => ({
  type: FETCH_PROJECTS,
});
