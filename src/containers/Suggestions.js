import { connect } from "react-redux";

/**
 * Local import
 */
import Suggestions from "../components/LeafletMap/Suggestions";

// Action Creators
import { getBuildingsListData } from "../store/reducer";

const mapStateToProps = (state) => ({
  buildings: state.buildings,
  listData: state.listData,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getBuildingsListData: (list) => {
    dispatch(getBuildingsListData(list));
  },
  // connectUser: () => {
  //   dispatch(connectUser());
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);
