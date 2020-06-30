import { connect } from "react-redux";
import { fetchRepos } from "../../actions/Repos";
import ReposListingComponent from "../../../components/Organisms/ReposListing.jsx";

const mapStateToProps = (state) => {
  return {
    ...state.repos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepos: () => dispatch(fetchRepos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposListingComponent);
