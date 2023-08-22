import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ClubMap = () => {
  const [map, setMap] = useState(null);
  const center = { lat: -31.276526, lng: -61.510918 };
  const containerStyle = { width: '100%', height: '300px' };

  const onLoad = (map) => {
    setMap(map);
  };

  useEffect(() => {
    if (map) {
      
      const geocoder = new google.maps.Geocoder();

    }
  }, [map]);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14} onLoad={onLoad}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default ClubMap;