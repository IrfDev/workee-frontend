import { connect } from "react-redux";
import { setActiveTab, setNavMessage } from "../../actions/Nav";
import Projects from "Molecules/appBar/TopNav.jsx";

const mapStateToProps = (state) => {
  return {
    ...state.nav,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveTab: (tab) => dispatch(setActiveTab(tab)),

    setNavMessage: (message) => dispatch(setNavMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
