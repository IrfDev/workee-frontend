import { schema, normalize } from 'normalizr';
import defaultState from '../../static/data.json';

const repo = new schema.Entity('repos');
const entry = new schema.Entity('entries');
const noteBook = new schema.Entity('noteBooks');
const board = new schema.Entity('boards');
const task = new schema.Entity('tasks');
const resource = new schema.Entity('resources');
const hero = new schema.Entity('heroes');

const project = new schema.Entity('projects', {
  repos: [repo],
  entries: [entry],
  noteBooks: [noteBook],
  boards: [board],
  heroes: [hero],
  tasks: [task],
  resources: [resource],
});

const normalizedProject = normalize(defaultState.projects, [project]);

export const projects = {
  entities: normalizedProject.entities.projects,
  ids: normalizedProject.result,
};
