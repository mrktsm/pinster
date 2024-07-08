import { MarkerView } from '@rnmapbox/maps';
import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface ImageMarkerProps {
  image: ImageSourcePropType;
  coordinates: number[];
}

const ImageMarker: React.FC<ImageMarkerProps> = ({ image, coordinates }) => {
  return (
    <MarkerView coordinate={coordinates} allowOverlapWithPuck={true}>
       <View style={styles.container}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Image source={image} style={styles.image} />
          </View>
        </View>
      </View>
    </MarkerView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    overflow: 'hidden',
  },
  innerCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
  },
});

export default ImageMarker;
