/* eslint-disable no-case-declarations */
/* eslint-disable radix */
import axios from "axios";

import {
  SUBMIT_BUILDING,
  GET_BUILDINGS,
  GET_CATEGORIES,
  setCategories,
  GET_TEMPS_VISITE,
  setTempsDeVisite,
  setBuildings,
  createMarker,
  OPEN_DISPLAY_BUILDING,
  setBuildingDatas,
  resetFormBuilding,
} from "./reducer";

const polisApi = "http://localhost:8080";
// eslint-disable-next-line consistent-return
const polisApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_BUILDING:
      next(action);
      axios
        .post(
          `${polisApi}/lieux`,
          {
            latitude: store.getState().clickedLat,
            longitude: store.getState().clickedLng,
            address: store.getState().addressInput
              ? store.getState().addressInput
              : null,
            visit: store.getState().visitTime
              ? store.getState().visitTime
              : null,
            picture: store.getState().fileInput
              ? store.getState().fileInput
              : null,
            name: store.getState().nameInput
              ? store.getState().nameInput
              : null,
            creationDate: store.getState().dateInput
              ? parseInt(store.getState().dateInput)
              : null,
            category: store.getState().categoryInput
              ? parseInt(store.getState().categoryInput)
              : null,
            description: store.getState().descriptionInput
              ? store.getState().descriptionInput
              : null,
            certified: false,
          },
          {
            withCredentials: false,
          }
        )
        .then((response) => {
          store.dispatch(
            createMarker(
              store.getState().clickedLat,
              store.getState().clickedLng,
              response.data
            )
          );
          store.dispatch(resetFormBuilding());
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case GET_BUILDINGS:
      setTimeout(() => next(action), 500);
      axios
        .get(`${polisApi}/lieux`)
        .then((response) => {
          store.dispatch(setBuildings(response.data));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case OPEN_DISPLAY_BUILDING:
      next(action);
      axios
        .get(`${polisApi}/lieux/${action.id}`)
        .then((response) => {
          store.dispatch(setBuildingDatas(response.data));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case GET_CATEGORIES:
      axios
        .get(`${polisApi}/categories`)
        .then((response) => {
          // console.log('Categories', response.data['hydra:member']);
          store.dispatch(setCategories(response.data));
        })
        .catch((error) => {
          // console.log(error.message);
        });
      break;
    case GET_TEMPS_VISITE:
      axios
        .get(`${polisApi}/tempsDeVisite`)
        .then((response) => {
          // console.log('Categories', response.data['hydra:member']);
          store.dispatch(setTempsDeVisite(response.data));
        })
        .catch((error) => {
          // console.log(error.message);
        });
      break;
    default:
      return next(action);
  }
};

export default polisApiMiddleware;
