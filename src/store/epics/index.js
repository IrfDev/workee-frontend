import { combineEpics, ofType } from "redux-observable";
import axios from "axios";
import { mergeMap } from "rxjs/operators/";
import { FETCH_PROJECTS, setProjects } from "../actions/Projects";
import { normalize } from "normalizr";
import { projectSchema } from "../schemas/Project";

// const url = 'http://localhost:8080/projects'

const fetchProjectsEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_PROJECTS),
    mergeMap(async () => {
      const response = await axios.get("http://localhost:8080/projects");
      // const normalizedProjectSchema = await normalize(response.data, [
      //   projectSchema,
      // ]);
      return setProjects(response.data);
    })
  );

export const rootEpic = combineEpics(fetchProjectsEpic);
