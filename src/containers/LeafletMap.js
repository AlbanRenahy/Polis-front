import { connect } from "react-redux";

/**
 * Local import
 */
import LeafletMap from "../components/LeafletMap/index";

// Action Creators
import {
  updateFormField,
  openDataForm,
} from "../store/reducer";

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  openDataForm: (position) => {
    dispatch(openDataForm(position));
  },
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);

