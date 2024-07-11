import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';

interface PopupProps {
  visible: boolean;
  imageUrl: any; // Use 'any' type for local image source
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ visible, imageUrl, onClose }) => {
  const handleImagePress = () => {
    // Do nothing on image press to prevent closing the popup
  };

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
        <View style={styles.popup}>
          <TouchableOpacity activeOpacity={1} onPress={handleImagePress}>
            <Image source={imageUrl} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.likeButton}>
            <Text style={styles.likeText}>Like</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    width: 350,
    height: 450,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 350,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  likeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  likeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Popup;
