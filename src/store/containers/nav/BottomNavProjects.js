import { connect } from "react-redux";
import { setActiveTab } from "../../actions/Nav";
import Projects from "../../../components/Molecules/appBar/BottomNav.jsx";

const mapStateToProps = (state) => {
  return {
    ...state.nav,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveTab: (tab) => {
      return dispatch(setActiveTab(tab));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
