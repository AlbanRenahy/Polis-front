import { connect } from "react-redux";

import {
  updateFormField,
  closeAllModals,
  submitBuilding,
  findAddress,
  resetFormBuilding,
} from "../store/reducer";

/**
 * Local import
 */
import RenseignementDonnees from "../components/LeafletMap/RenseignementDonnees";

// Action Creators

const mapStateToProps = (state) => ({
  isDataFormOpen: state.isDataFormOpen,
  nameInput: state.nameInput,
  surfaceInput: state.surfaceInput,
  addressInput: state.addressInput,
  styleInput: state.styleInput,
  dateInput: state.dateInput,
  descriptionInput: state.descriptionInput,
  categories: state.categories,
  fileText: state.fileText,
});

const mapDispatchToProps = (dispatch) => ({
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  submitBuilding: () => {
    dispatch(submitBuilding());
  },
  findAddress: () => {
    dispatch(findAddress());
  },
  resetFormBuilding: () => {
    dispatch(resetFormBuilding());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenseignementDonnees);
