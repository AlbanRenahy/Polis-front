import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import RenseignementDonnees from "./RenseignementDonnees";
import "./leafletmap.scss";

// Création de la map avec React Leaflet

const Leaflet = () => {
  return (
    <>
      <RenseignementDonnees />
      <LeafletMap
        center={[48.864716, 2.349014]}
        zoom={6}
        maxZoom={18}
        attributionControl
        zoomControl={false}
        doubleClickZoom={false}
        scrollWheelZoom
        dragging
        animate
        easeLinearity={0.35}
      >
        <TileLayer url="https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=OBdFBTs7Fuc3MfQjn3Fo" />

        <Marker position={[48.864716, 2.349014]}>
          <Popup>Je suis un pop up à Paris</Popup>
        </Marker>
      </LeafletMap>
    </>
  );
};

export default Leaflet;
