import { connect } from "react-redux";

/**
 * Local import
 */
import LeafletMap from "../components/LeafletMap";

// Action Creators

import {
  openDataForm,
  closeAllModals,
  updateFormField,
  getBuildings,
  openDisplayBuilding,
  closeMenu,
  getCategories,
  getTempsDeVisite
} from "../store/reducer";

const mapStateToProps = (state) => ({
  buildings: state.buildings,
  center: state.center,
  zoom: state.zoom,
  userLocalized: state.userLocalized,
  loadingWithLoader: state.loadingWithLoader,
  currentCard: state.currentCard,
  isConnected: state.isConnected,
  fetchingBuildings: state.fetchingBuildings,
});

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

  getBuildings: (bounds) => {
    dispatch(getBuildings(bounds));
  },

  openDisplayBuilding: (id) => {
    dispatch(openDisplayBuilding(id));
  },

  getCategories: () => {
    dispatch(getCategories());
  },

  getTempsDeVisite: () => {
    dispatch(getTempsDeVisite());
  },

  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);
