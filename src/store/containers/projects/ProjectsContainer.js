import { connect } from "react-redux";
import { fetchProjects, setActiveProject } from "../../actions/Projects";
import Projects from "../../../components/Organisms/ProjectListing.jsx";

const mapStateToProps = (state) => {
  return {
    ...state.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    setActiveProject: (s) => {

      return dispatch(setActiveProject(s));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
