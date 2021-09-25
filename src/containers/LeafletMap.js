import { connect } from "react-redux";

/**
 * Local import
 */
import LeafletMap from "../components/LeafletMap/index";

// Action Creators
import {
  updateFormField,
  openDataForm,
  closeAllModals,
  getArchitectures
} from "../store/reducer";

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  openDataForm: (position) => {
    dispatch(openDataForm(position));
  },
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  getArchitectures: () => {
    dispatch(getArchitectures());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);

