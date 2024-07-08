import React, { useState } from 'react';
import { View } from 'react-native';
import Mapbox, { Camera, LocationPuck, MapView, MarkerView } from '@rnmapbox/maps';
import ImageMarker from '~/components/ImageMarker'; 

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || '');

const Map = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      styleURL='mapbox://styles/mapbox/dark-v11'
      logoEnabled={false}
    >
      <Camera followZoomLevel={8} followUserLocation />
      <LocationPuck />

      <ImageMarker image={require('~/assets/san-francisco.png')} coordinates={[-122.4194, 37.7749]}/>

    </MapView>
  );
};

export default Map;

