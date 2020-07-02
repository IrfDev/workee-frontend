import { connect } from "react-redux";
import { fetchProjects, setActiveProject, fetchAndFindProjects } from "../../actions/Projects";
import Projects from "../../../views/ProjectPage.jsx";

const mapStateToProps = (state) => {
  ("Reducer", state)
  return {
    ...state.projects,
    nav: state.nav,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    setActiveProject: (s) => {
      return dispatch(setActiveProject(s));
    },
    fetchAndFindProjects: (s) => {
      ("Inside active project action", s);
      return dispatch(fetchAndFindProjects(s));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
