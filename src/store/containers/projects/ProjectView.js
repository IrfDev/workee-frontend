import { connect } from "react-redux";
import { fetchProjects, setActiveProject } from "../../actions/Projects";
import Projects from "../../../views/ProjectPage.jsx";

const mapStateToProps = (state) => {
  return {
    ...state.projects,
    nav: state.nav,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    setActiveProject: (s) => {
      console.log("Inside active project action", s);
      return dispatch(setActiveProject(s));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
