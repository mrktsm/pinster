import { MarkerView } from '@rnmapbox/maps';
import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ImageMarkerProps {
  image: ImageSourcePropType;
  coordinates: number[];
  onPress: () => void;
}

const ImageMarker: React.FC<ImageMarkerProps> = ({ image, coordinates, onPress }) => {
  return (
    <MarkerView coordinate={coordinates} allowOverlapWithPuck={true}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <LinearGradient
          colors={['#FFA07A', '#E9446A']}  // Gradient colors for red shades
          start={{ x: 0, y: 0 }}            // Gradient start point
          end={{ x: 1, y: 1 }}              // Gradient end point
          style={styles.outerCircle}
        >
          <View style={styles.innerCircle}>
            <Image source={image} style={styles.image} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
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
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,          // White outline width
    borderColor: 'white',    // White outline color
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  innerCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
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
