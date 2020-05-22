import { connect } from 'react-redux';
import Projects from '../../components/Organisms/ProjectListing.jsx';

const mapStateToProps = (state) => {
  return {
    projects: state.projects.ids,
  };
};

export default connect(mapStateToProps)(Projects);
