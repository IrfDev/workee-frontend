import { connect } from "react-redux";

import Project from "../../../components/Molecules/BasicCard.jsx";

const mapStateToProps = (state, ownProps) => {
  console.log("inside container", state);
  return {
    project: state.projects.entities[ownProps.projectId],
  };
};
export default connect(mapStateToProps)(Project);
