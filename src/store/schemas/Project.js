import { schema } from 'normalizr';

const repo = new schema.Entity('repos');
const entry = new schema.Entity('entries');
const noteBook = new schema.Entity('noteBooks');
const board = new schema.Entity('boards');
const task = new schema.Entity('tasks');
const resource = new schema.Entity('resources');
const hero = new schema.Entity('heroes');

export const projectSchema = new schema.Entity('projects', {
  repos: [repo],
  entries: [entry],
  noteBooks: [noteBook],
  boards: [board],
  heroes: [hero],
  tasks: [task],
  resources: [resource],
});

