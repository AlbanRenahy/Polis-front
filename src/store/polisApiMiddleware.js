/* eslint-disable no-case-declarations */
/* eslint-disable radix */
import axios from "axios";

import {
  SUBMIT_BUILDING,
  GET_BUILDINGS,
  setBuildings,
  createMarker,
  OPEN_DISPLAY_BUILDING,
  setBuildingDatas,
  resetFormBuilding,
} from "./reducer";

const polisApi = "https://localhost:8080";
// eslint-disable-next-line consistent-return
const polisApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_BUILDING:
      next(action);
      axios
        .post(
          `${polisApi}/createBuilding`,
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
            withCredentials: true,
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
        .post(`${polisApi}/buildings`, { bounds: action.bounds })
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
        .get(`${polisApi}/buildings/${action.id}`)
        .then((response) => {
          store.dispatch(setBuildingDatas(response.data));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    default:
      return next(action);
  }
};

export default polisApiMiddleware;
