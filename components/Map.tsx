// Map.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox, { Camera, LocationPuck, MapView } from '@rnmapbox/maps';
import ImageMarker from '~/components/ImageMarker';
import Popup from '~/components/Popup';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || '');

const imageSource = require('~/assets/san-francisco.png'); // Correctly require local image

const Map: React.FC = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleMarkerPress = () => {
    setSelectedImage(imageSource); // Set selected image to local image source
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        styleURL="mapbox://styles/mrktsm/clyhr3bxv01kp01qrhbko0uj1"
        logoEnabled={false}
        scaleBarEnabled={false}
        attributionEnabled={false}
      >
        <Camera followZoomLevel={12} followUserLocation />
        <LocationPuck />
        <ImageMarker
          image={imageSource} // Pass local image source to ImageMarker
          coordinates={[-122.4194, 37.7749]}
          onPress={handleMarkerPress} // Pass onPress handler directly
        />
      </MapView>
      {selectedImage && (
        <Popup visible={popupVisible} imageUrl={selectedImage} onClose={handleClosePopup} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Map;
