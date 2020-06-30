import { connect } from "react-redux";
import { fetchReads } from "../../actions/Reads";
import ReadsListingComponent from "../../../components/Organisms/ReadsListing.jsx";

const mapStateToProps = (state) => {
  return {
    ...state.reads,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReads: () => dispatch(fetchReads()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadsListingComponent);
