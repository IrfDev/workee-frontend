export const PROJECTS = "[PROJECTS]";

export const FETCH_PROJECTS = `${PROJECTS} FETCH`;

export const FETCH_AND_FIND_PROJECT = `${PROJECTS} FETCH AND FIND`;

export const SET_PROJECTS = `${PROJECTS} SET`;

export const SET_ACTIVE_PROJECT = `${PROJECTS} SET ACTIVE `;

export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  payload: projects,
});

export const setActiveProject = (project) => ({
  type: SET_ACTIVE_PROJECT,
  payload: project,
});

export const fetchProjects = () => ({
  type: FETCH_PROJECTS,
});

export const fetchAndFindProjects = (project) => ({
  type: FETCH_AND_FIND_PROJECT,
  payload: project
});
