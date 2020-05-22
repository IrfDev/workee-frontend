import { connect } from 'react-redux';

import Project from '../../components/Molecules/BasicCard.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.projects.entities[ownProps.projectId],
  };
};
export default connect(mapStateToProps)(Project);
