import { connect } from "react-redux";
import { fetchProjects } from "../../actions/Projects";
import Projects from "../../../components/Organisms/ProjectListing.jsx";

const mapStateToProps = (state) => {
  console.log("hello again", state);
  return {
    ...state.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
