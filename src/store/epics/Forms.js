import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators/";

import { FORM_SUBMIT } from "../actions/Forms";

export const submitFormEpic = (action$) =>
  action$.pipe(
    ofType(FORM_SUBMIT),
    mergeMap(async (e) => {
      switch (e.target) {
        case "Boards":
          return console.log("Boards", e.target, e.data);
        case "Heros":
          return console.log("Heros", e.target, e.data);
        case "Notebooks":
          return console.log("Notebooks", e.target, e.data);
        case "Project":
          return console.log("Project", e.target, e.data);
        case "Repo":
          return console.log("Repo", e.target, e.data);
        case "Resource":
          return console.log("Resource", e.target, e.data);
        case "Stream":
          return console.log("Stream", e.target, e.data);
        case "Tasks":
          return console.log("Task", e.target, e.data);

        default:
          throw new Error("Invalid targetname");
      }
    })
  );
