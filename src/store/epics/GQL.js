// import { ofType } from "redux-observable";
// import axios from "axios";
// import { mergeMap } from "rxjs/operators/";

// // const url = 'http://localhost:8080/projects'

// export const fetchProjectsEpic = (action$) =>
//   action$.pipe(
//     ofType(FETCH_PROJECTS),
//     mergeMap(async () => {
//       const response = await axios.get("http://localhost:8080/projects");
//       return setProjects(response.data);
//     })
//   );

// export const fetchAndFindProjectsEpic = (action$) =>
//   action$.pipe(
//     ofType(FETCH_AND_FIND_PROJECT),
//     mergeMap(async (e) => {
//       const response = await axios.get("http://localhost:8080/projects");
//       const activeProject = response.data.find(
//         (project) => project.title === e.payload
//       );
//       return setActiveProject(activeProject);
//     })
//   );

// export const fetchReposEpic = (action$) =>
//   action$.pipe(
//     ofType(FETCH_REPOS),
//     mergeMap(async () => {
//       const reposResponse = await axios.get("http://localhost:8080/repos");
//       return setRepos(reposResponse.data);
//     })
//   );

// export const fetchReadsEpic = (action$) =>
//   action$.pipe(
//     ofType(FETCH_READS),
//     mergeMap(async () => {
//       const reposResponse = await axios.get("http://localhost:8080/reads");

//       return setReads(reposResponse.data);
//     })
//   );
