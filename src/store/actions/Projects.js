export const PROJECTS = "[PROJECTS]";

export const FETCH_PROJECTS = `${PROJECTS} FETCH`;

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
