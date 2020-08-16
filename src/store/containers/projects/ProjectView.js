import { connect } from "react-redux";
import {
  fetchProjects,
  setActiveProject,
  fetchAndFindProjects,
} from "Actions/Projects";

import { setNavMessage } from "Actions/Nav";

import Projects from "../../../views/ProjectPage.jsx";

const mapStateToProps = (state) => {
  "Reducer", state;
  return {
    ...state.projects,
    nav: state.nav,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),

    setActiveProject: (projectObject) =>
      dispatch(setActiveProject(projectObject)),

    fetchAndFindProjects: (id) => dispatch(fetchAndFindProjects(id)),

    setNavMessage: (message) => dispatch(setNavMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
