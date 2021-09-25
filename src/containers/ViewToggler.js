import { connect } from "react-redux";

/**
 * Local import
 */
import ViewToggler from "../components/ViewToggler";

// Action Creators
import { toggleView } from "../store/reducer";

const mapStateToProps = (state) => ({
  view: state.view,
});

const mapDispatchToProps = (dispatch) => ({
  toggleView: (view) => {
    dispatch(toggleView(view));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewToggler);
