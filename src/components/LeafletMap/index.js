import React from "react";
import PropTypes from "prop-types";
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  MarkerClusterGroup,
} from "react-leaflet";
import L from "leaflet";
import { geolocated } from "react-geolocated";
import RenseignementDonnees from "../../containers/RenseignementDonnees";
import Menu from "../../containers/Menu";
import DisplayBuildingLouvre from "../../containers/DisplayBuilding/DisplayBuildingLouvre";
import DisplayBuildingNotreDameAmiens from "../../containers/DisplayBuilding/DisplayBuildingNotreDameAmiens";
import Loading from "../Loading";
import "./leafletmap.scss";
// pour utiliser des punaises custom
import pins3 from "../../styles/images/pins3.png";
import pins8 from "../../styles/images/Pins8.png";

// Création de la map avec React Leaflet

class Leaflet extends React.Component {
  // openDataForm, closeAllModals, updateFormField,

  myPinUne = L.icon({
    iconUrl: `${pins3}`,
    iconSize: [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });

  myPinDeux = L.icon({
    iconUrl: `${pins8}`,
    iconSize: [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });

  componentDidMount() {
    const { getCategories, getTempsDeVisite, getBuildings } = this.props;
    getCategories();
    getTempsDeVisite();
    getBuildings();
  }
  
  handleRightClick = (e) => {
    const { updateFormField, openDataForm } = this.props;
    console.log(e.latlng);
    updateFormField("clickedLat", e.latlng.lat);
    updateFormField("clickedLng", e.latlng.lng);
    openDataForm(e.latlng);
  };
  
  handleClickMarker = (e) => {
    const { openDisplayBuilding, closeAllModals, buildings } = this.props;
    const { id } = e.target.options;
    closeAllModals();
    openDisplayBuilding();
  };


  render() {
    const { closeAllModals, buildings } = this.props;
    const {
      coords,
      isGeolocationEnabled,
      center,
      zoom,
      userLocalized,
      updateFormField,
      loadingWithLoader
    } = this.props;

    const defaultCenter = coords
      ? [coords.latitude, coords.longitude]
      : [46.7248003746672, 2.9003906250000004];

    if (isGeolocationEnabled && coords && !userLocalized) {
      // eslint-disable-next-line no-unused-expressions
      updateFormField("center", [coords.latitude, coords.longitude]);
      updateFormField("userLocalized", true);
      updateFormField("zoom", 13);
    }
    return (
      <>
        {console.log(buildings)}
        <Menu />
        <RenseignementDonnees />
        <DisplayBuildingLouvre />
        <LeafletMap
          center={[48.864716, 2.349014]}
          zoom={12}
          maxZoom={19}
          attributionControl
          zoomControl={false}
          doubleClickZoom={false}
          scrollWheelZoom
          dragging
          animate
          easeLinearity={0.35}
          onContextmenu={this.handleRightClick}
          onClick={closeAllModals}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />

         {console.log(buildings)}
            {buildings.map(({ latitude, longitude, id }) => (
              <Marker
              position={[latitude, longitude]}
              icon={this.myPinUne}
              key={id}
              id={id}
              onClick={this.handleClickMarker}
              />
            ))}
        </LeafletMap>
      </>
    );
  }
}

Leaflet.propTypes = {
  closeAllModals: PropTypes.func.isRequired,
  openDataForm: PropTypes.func.isRequired,
  updateFormField: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  getTempsDeVisite: PropTypes.func.isRequired
};

export default Leaflet;