# 📍 Pinster
![Untitled design (2)](https://github.com/user-attachments/assets/2e6614f1-9aee-499e-aae7-b4c642e3b2fd)


Pinster is a location-based social media app designed for college communities. Inspired by Instagram, Snapchat Maps, and Citizen, Pinster allows users to share real-time updates through map-based posts. The app leverages **Mapbox** for interactive mapping and **Firebase** for user authentication and data storage.

## Features

- 📍 **Map-Based Posts**: Users can pin images on the map, creating a visual representation of events around campus.
- 🔍 **Dynamic Image Markers**: Custom markers appear on the map at different zoom levels.
- 🗺 **Real-Time Location Tracking**: Users can view their location and explore what’s happening nearby.
- 🔥 **Community Engagement**: Interact with posts shared by other students.
- 🔒 **Firebase Authentication**: Secure login system for users.
- 📊 **Firestore Storage**: Stores posts and user data efficiently.

## Tech Stack

- **Frontend**: React Native with Expo
- **Mapping**: Mapbox
- **Backend**: Firebase Firestore
- **Authentication**: Firebase Auth

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/pinster.git
   cd pinster
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory and add:
     ```env
     EXPO_PUBLIC_MAPBOX_KEY=your_mapbox_access_token
     FIREBASE_API_KEY=your_firebase_api_key
     ```
4. **Run the app:**
   ```sh
   npm start
   ```

## Future Enhancements

- 🗣 **Comments & Reactions**: Users can interact with posts.
- 🎥 **Video Support**: Allow video uploads alongside images.
- 📌 **Pinned Stories**: Users can create location-based stories.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## License

MIT License © 2025 Pinster Team

