import { projects as defaultProjects } from '../schemas/Project';

const projectsReducer = (projects = defaultProjects, action) => {
  return projects;
};

export default projectsReducer;
