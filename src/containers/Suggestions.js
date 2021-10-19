import { bounds } from "leaflet";
import { connect } from "react-redux";

/**
 * Local import
 */
import Suggestions from "../components/LeafletMap/Suggestions";

// Action Creators
import { getBuildings } from "../store/reducer";

const mapStateToProps = (state) => ({
  buildings: state.buildings,
  listData: state.listData,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getBuildings: (bounds) => {
    dispatch(getBuildings(bounds));
  },
  // connectUser: () => {
  //   dispatch(connectUser());
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);
