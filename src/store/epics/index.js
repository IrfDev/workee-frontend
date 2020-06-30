import { combineEpics, ofType } from "redux-observable";
import axios from "axios";
import { mergeMap } from "rxjs/operators/";
import { FETCH_PROJECTS, setProjects } from "../actions/Projects";
import { FETCH_REPOS, setRepos } from "../actions/Repos";
import { FETCH_READS, setReads } from "../actions/Reads";

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

const fetchReposEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_REPOS),
    mergeMap(async () => {
      const reposResponse = await axios.get("http://localhost:8080/repos");

      return setRepos(reposResponse.data);
    })
  );

const fetchReadsEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_READS),
    mergeMap(async () => {
      const reposResponse = await axios.get("http://localhost:8080/reads");

      return setReads(reposResponse.data);
    })
  );

export const rootEpic = combineEpics(
  fetchProjectsEpic,
  fetchReposEpic,
  fetchReadsEpic
);
