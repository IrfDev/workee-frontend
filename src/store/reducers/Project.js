import { projects as defaultProjects } from '../schemas/Project';

const projectsReducer = (projects = defaultProjects, action) => {
  if (action.type === 'CREATE_PROJECT') {
    const { projectId, newProject } = action.payload;
    return {
      entities: { ...projects.entities, [projectId]: newProject },
      ids: [...projects.ids, projectId],
    };
  }
  return projects;
};

export default projectsReducer;
