import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const apiKey = "AIzaSyAnu_hJVAodCX9J7AvNFozo9IXFWkmTOKI";

  const mapCenter = { lat: 40.748817, lng: -73.985428 }; // Example: New York (replace with your coordinates)

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={mapCenter}
        zoom={15}
      >
        <Marker position={mapCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
